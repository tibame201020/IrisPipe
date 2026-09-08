import http from 'k6/http';
import { check } from 'k6';
import { getPipelineRunDetailOrFail, runPipelineAndGetSummary, resumePipelineRunAndGetSummary } from './utils/test-helpers.js';

// One VU, sequential paired runs; no API load scenario runs concurrently.
export const options = { scenarios: { matrix: { executor: 'shared-iterations', vus: 1, iterations: 1, maxDuration: '50m' } }, thresholds: { checks: ['rate==1'] } };
const base = 'http://127.0.0.1:8080/api/v1';
const sizes = (__ENV.MATRIX_SIZES || '1000000,10000000').split(',').map(Number);
const repeats = Number(__ENV.MATRIX_REPEATS || 3);
const rows = [];
const assertions = [];
let completed = false;
function expect(label, condition) {
    assertions.push({ label, passed: !!condition });
    if (!check(condition, { [label]: v => v })) throw new Error(label);
}
function request(path, body, json = false) {
    const response = http.post(base + path, json ? JSON.stringify(body) : body, {
        headers: { 'Content-Type': json ? 'application/json' : 'text/plain' }, timeout: '20m',
    });
    expect(path + ' HTTP 200', response.status === 200);
    return response;
}
function sql(statement) { request('/test-support/execute', statement); }
function scalar(statement, key = 'CNT') { return Number(request('/test-support/query', statement).json()[0][key]); }
function seed(n) {
    sql('TRUNCATE TABLE matrix_src'); sql('TRUNCATE TABLE matrix_dest');
    sql(`INSERT INTO matrix_src SELECT X, 'row-' || X, MOD(X,97), X*3, X*7, 'A', 'B', 'C', 'D', 'E', 'F' FROM SYSTEM_RANGE(1,${n})`);
}
function verify(n) {
    expect('destination row count ' + n, scalar('SELECT COUNT(*) CNT FROM matrix_dest') === n);
    expect('destination key sum ' + n, scalar('SELECT SUM(id) CNT FROM matrix_dest') === n * (n + 1) / 2);
    expect('all payload columns match source', scalar('SELECT COUNT(*) CNT FROM matrix_src s JOIN matrix_dest d ON s.id=d.id WHERE s.name<>d.name OR s.a<>d.a OR s.b<>d.b OR s.c<>d.c OR s.d<>d.d OR s.e<>d.e OR s.f<>d.f OR s.g<>d.g OR s.h<>d.h OR s.i<>d.i') === 0);
}
function config(mode) {
    const connection = { driver: 'org.h2.Driver', url: 'jdbc:h2:./h2data/data', username: 'sa', password: 'sa' };
    return request('/sync-config', {
        pipelineName: `atomic-chunk-matrix-${mode}-${Date.now()}`, stages: ['load'],
        jobs: [{ jobName: 'matrix_insert', stage: 'load', stageSequenceOrder: 1,
            database: { source: connection, dest: connection },
            executions: [{ type: 'INSERT', name: 'matrix_insert', sql: 'SELECT * FROM matrix_src ORDER BY id', destTable: 'matrix_dest' }],
            setting: { fetchSize: 2000, batchSize: 2000, atomicLevel: mode },
        }],
    }, true).json().id;
}
export default function () {
    expect('bounded workload', sizes.every(n => Number.isInteger(n) && n > 0 && n <= 10000000) && repeats >= 1 && repeats <= 3);
    sql('CREATE TABLE IF NOT EXISTS matrix_report (id INT PRIMARY KEY, payload VARCHAR(1000000))');
    sql('DELETE FROM matrix_report');
    for (const name of ['matrix_src', 'matrix_dest']) sql(`CREATE TABLE IF NOT EXISTS ${name} (id BIGINT PRIMARY KEY, name VARCHAR(64), a BIGINT, b BIGINT, c BIGINT, d VARCHAR(16), e VARCHAR(16), f VARCHAR(16), g VARCHAR(16), h VARCHAR(16), i VARCHAR(16))`);
    const ids = { JOB: config('JOB'), CHUNK: config('CHUNK') };
    // Warm up both paths, excluded from reported timings.
    seed(10000);
    for (const mode of ['JOB', 'CHUNK']) {
        sql('TRUNCATE TABLE matrix_dest');
        expect('warmup completes ' + mode, runPipelineAndGetSummary(ids[mode]).summary.status === 'COMPLETED');
        verify(10000);
    }
    for (const n of sizes) {
        seed(n);
        for (let repeat = 1; repeat <= repeats; repeat++) {
            // Alternate first mode to reduce a systematic ordering bias.
            for (const mode of repeat % 2 ? ['JOB', 'CHUNK'] : ['CHUNK', 'JOB']) {
                sql('TRUNCATE TABLE matrix_dest');
                const start = Date.now();
                const result = runPipelineAndGetSummary(ids[mode]).summary;
                const elapsed = Date.now() - start;
                expect('normal completion ' + mode, result.status === 'COMPLETED');
                verify(n);
                rows.push({ scenario: 'normal', mode, rows: n, repeat, elapsed_ms: elapsed, rows_per_second: Math.round(n * 1000 / elapsed), verified: true });
                saveReport();
            }
        }
    }
    // Conflict is in the third chunk. Expected committed prefix: 4,000 rows.
    seed(10000);
    for (const mode of ['JOB', 'CHUNK']) {
        sql('TRUNCATE TABLE matrix_dest');
        sql('INSERT INTO matrix_dest SELECT * FROM matrix_src WHERE id=4500');
        const start = Date.now();
        const failed = runPipelineAndGetSummary(ids[mode]).summary;
        const failureMs = Date.now() - start;
        expect('injected conflict fails ' + mode, failed.status === 'FAILED');
        const detail = getPipelineRunDetailOrFail(failed.id);
        const retained = scalar('SELECT COUNT(*) CNT FROM matrix_dest');
        expect('transaction boundary ' + mode, retained === (mode === 'JOB' ? 1 : 4001));
        sql('DELETE FROM matrix_dest WHERE id=4500');
        const resumeStart = Date.now();
        const resumed = resumePipelineRunAndGetSummary(failed.id).summary;
        const resumeMs = Date.now() - resumeStart;
        expect('resume completes ' + mode, resumed.status === 'COMPLETED' && resumed.id === failed.id);
        verify(10000);
        const resumedDetail = getPipelineRunDetailOrFail(resumed.id);
        const sameInstance = detail.jobs[0].rootJobInstanceId === resumedDetail.jobs[0].rootJobInstanceId;
        expect('JobInstance recovery semantics ' + mode, mode === 'CHUNK' ? sameInstance : !sameInstance);
        expect('new execution after resume ' + mode, detail.jobs[0].lastJobExecutionId !== resumedDetail.jobs[0].lastJobExecutionId);
        rows.push({ scenario: 'conflict_resume', mode, rows: 10000, retained_including_conflict: retained, failure_ms: failureMs, resume_ms: resumeMs, total_processing_ms: failureMs + resumeMs, same_job_instance: sameInstance, verified: true });
        saveReport();
    }
    completed = true;
    // VU globals are isolated from handleSummary; persist the exact report in
    // this disposable test DB after timing, then read it from the summary hook.
    saveReport();
}
function saveReport() {
    sql("MERGE INTO matrix_report KEY(id) VALUES (1, '" + JSON.stringify(buildReport()).replace(/'/g, "''") + "')");
}
function buildReport() {
    return {
        schema_version: 1, completed, generated_at: new Date().toISOString(),
        source_sha: __ENV.GITHUB_SHA || null, run_url: __ENV.MATRIX_RUN_URL || null,
        environment: 'GitHub-hosted ubuntu-latest; Java 21; local file-backed H2; source, destination and metadata share one database; JVM heap 4 GiB',
        fetch_size: 2000, batch_size: 2000, columns: 11, repeats, sizes,
        timing: 'Synchronous execute/resume HTTP wall time; includes orchestration and commit; excludes seed, truncate, validation and repair. Warm cache, alternating paired order.',
        not_tested: ['SIGKILL and post-crash status reconciliation', 'Oracle', 'UPDATE or matched UPSERT', 'network transfer', 'production capacity'],
        assertions, results: rows,
    };
}
export function handleSummary() {
    const response = http.post(base + '/test-support/query', 'SELECT payload FROM matrix_report WHERE id=1', { headers: { 'Content-Type': 'text/plain' } });
    let report = { completed: false, error: 'Report absent; inspect k6 and backend logs' };
    if (response.status === 200) {
        const data = response.json();
        if (data.length === 1) report = JSON.parse(data[0].PAYLOAD);
    }
    return { [__ENV.MATRIX_REPORT || 'atomic-chunk-results.json']: JSON.stringify(report, null, 2) };
}

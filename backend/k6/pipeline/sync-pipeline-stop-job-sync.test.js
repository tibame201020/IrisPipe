import { check, sleep } from 'k6';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    queryScalarOrFail,
    resumePipelineRunAndGetSummary,
    runPipelineAndGetSummary,
    stopPipelineRunAndGetSummary,
    waitForPipelineStatus,
} from '../utils/test-helpers.js';

export const options = {
    scenarios: {
        trigger: {
            executor: 'shared-iterations',
            exec: 'triggerScenario',
            vus: 1,
            iterations: 1,
            maxDuration: '10m',
            gracefulStop: '30s',
        },
        control: {
            executor: 'shared-iterations',
            exec: 'controlScenario',
            vus: 1,
            iterations: 1,
            startTime: '1s',
            maxDuration: '10m',
            gracefulStop: '30s',
        },
    },
};

const yamlContent = open('../testfiles/job-pipeline-stop-job.yml');
const fileName = 'job-pipeline-stop-job.yml';
const filePath = pipelineNameFor(`sync-${fileName}`);
const totalRows = Number.parseInt(__ENV.IRISPIPE_STOP_SYNC_JOB_ROWS || '1000000', 10);
const downstreamRows = 3;

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stop_job_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_job_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_job_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_job_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stop_job_source_a',
        'TRUNCATE TABLE test_stop_job_dest_a',
        'TRUNCATE TABLE test_stop_job_source_b',
        'TRUNCATE TABLE test_stop_job_dest_b',
        [
            'INSERT INTO test_stop_job_source_a (id, name, update_time)',
            `SELECT X, 'ROW-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-01-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${totalRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stop_job_source_b VALUES',
            "(1, 'B-1', TIMESTAMP '2023-01-01 00:00:01')",
            ", (2, 'B-2', TIMESTAMP '2023-01-01 00:00:02')",
            ", (3, 'B-3', TIMESTAMP '2023-01-01 00:00:03')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export function triggerScenario(data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId, false);
    check(summary, {
        'Sync JOB execute returns STOPPED after manual stop': (item) => item.status === 'STOPPED',
    });
}

export function controlScenario(data) {
    const pipelineRunId = waitForPipelineRunId(data.pipelineId);
    const startedSummary = waitForPipelineStatus(pipelineRunId, ['STARTED'], 30, 0.2);
    sleep(1);

    const { summary: stopRequestedSummary } = stopPipelineRunAndGetSummary(pipelineRunId);
    const stoppedSummary = waitForPipelineStatus(pipelineRunId, ['STOPPED'], 60, 0.5);
    const stoppedDetail = getPipelineRunDetailOrFail(pipelineRunId, 'sync stopped job pipeline detail query');
    const stoppedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_job_dest_a',
        'CNT',
        'sync stopped job dest a count',
    );
    const stoppedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_job_dest_b',
        'CNT',
        'sync stopped job dest b count',
    );

    check(startedSummary, {
        'Sync stop JOB pipeline reached STARTED before stop': (item) => item.status === 'STARTED',
    });
    check(stopRequestedSummary, {
        'Sync stop JOB request returns the same pipeline run id': (item) => item.id === pipelineRunId,
    });
    check(stoppedSummary, {
        'Sync stop JOB pipeline eventually reaches STOPPED': (item) => item.status === 'STOPPED',
    });
    check(stoppedDetail, {
        'Sync stopped JOB detail marks first job STOPPED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs[0].status === 'STOPPED',
        'Sync stopped JOB detail marks downstream job NOT_RUN': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs[1].status === 'NOT_RUN',
    });
    check(stoppedDestACount, {
        'Sync stopped atomic JOB rolls back the in-flight destination changes': (count) => count === 0,
    });
    check(stoppedDestBCount, {
        'Sync stopped atomic JOB does not start downstream job': (count) => count === 0,
    });

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(pipelineRunId, false);
    const completedDetail = getPipelineRunDetailOrFail(pipelineRunId, 'sync resumed job pipeline detail query');
    const completedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_job_dest_a',
        'CNT',
        'sync completed job dest a count',
    );
    const completedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_job_dest_b',
        'CNT',
        'sync completed job dest b count',
    );

    check(resumedSummary, {
        'Sync JOB resume after stop completes the pipeline run': (item) => item.id === pipelineRunId && item.status === 'COMPLETED',
    });
    check(completedDetail, {
        'Sync resumed JOB detail marks both jobs COMPLETED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs.every((job) => job.status === 'COMPLETED'),
    });
    check(completedDestACount, {
        'Sync resumed atomic JOB replays the full first destination load': (count) => count === totalRows,
    });
    check(completedDestBCount, {
        'Sync resumed atomic JOB runs downstream job after recovery': (count) => count === downstreamRows,
    });

    deletePipelineRunOrFail(pipelineRunId, 'sync stopped job pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function waitForPipelineRunId(pipelineId, timeoutSeconds = 30, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const pipelineRunId = queryScalarOrFail(
            `SELECT MAX(id) AS CNT FROM iris_pipeline_run WHERE pipeline_id = ${pipelineId}`,
            'CNT',
            'sync stop job pipeline run lookup',
        );
        if (pipelineRunId !== null) {
            return pipelineRunId;
        }
        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for pipeline ${pipelineId} to create a pipeline run`);
}

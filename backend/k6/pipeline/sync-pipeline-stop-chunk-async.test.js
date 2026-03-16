import { check, sleep } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
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

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-stop-chunk.yml');
const fileName = 'job-pipeline-stop-chunk.yml';
const filePath = pipelineNameFor(fileName);
const totalRows = Number.parseInt(__ENV.IRISPIPE_STOP_ROWS || '2000000', 10);
const downstreamRows = 3;
const resumeCompletionTimeoutSeconds = Number.parseInt(
    __ENV.IRISPIPE_STOP_CHUNK_RESUME_TIMEOUT_SECONDS || '180',
    10,
);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stop_chunk_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_chunk_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_chunk_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_chunk_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stop_chunk_source_a',
        'TRUNCATE TABLE test_stop_chunk_dest_a',
        'TRUNCATE TABLE test_stop_chunk_source_b',
        'TRUNCATE TABLE test_stop_chunk_dest_b',
        [
            'INSERT INTO test_stop_chunk_source_a (id, name, update_time)',
            `SELECT X, 'ROW-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-01-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${totalRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stop_chunk_source_b VALUES',
            "(1, 'B-1', TIMESTAMP '2023-01-01 00:00:01')",
            ", (2, 'B-2', TIMESTAMP '2023-01-01 00:00:02')",
            ", (3, 'B-3', TIMESTAMP '2023-01-01 00:00:03')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId, true);
    const startedSummary = waitForPipelineStatus(summary.id, ['STARTED'], 30, 0.2);

    let partialCount = 0;
    for (let attempt = 0; attempt < 100; attempt += 1) {
        partialCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_stop_chunk_dest_a',
            'CNT',
            'stop chunk dest count before stop',
        );
        if (partialCount > 0) {
            break;
        }
        sleep(0.2);
    }

    const { summary: stopRequestedSummary } = stopPipelineRunAndGetSummary(summary.id);
    const stoppedSummary = waitForPipelineStatus(summary.id, ['STOPPED'], 60, 0.5);
    const stoppedDetail = getPipelineRunDetailOrFail(summary.id, 'stopped chunk pipeline detail query');
    const stoppedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_chunk_dest_a',
        'CNT',
        'stopped chunk dest a count',
    );
    const stoppedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_chunk_dest_b',
        'CNT',
        'stopped chunk dest b count',
    );
    const stoppedExecutionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${summary.id}`,
        'CNT',
        'stopped chunk execution count',
    );

    check(startedSummary, {
        'Stop chunk pipeline reached STARTED before stop': (item) => item.status === 'STARTED',
    });
    check(stopRequestedSummary, {
        'Stop request returns the same pipeline run id': (item) => item.id === summary.id,
    });
    check(stoppedSummary, {
        'Stop chunk pipeline eventually reaches STOPPED': (item) => item.status === 'STOPPED',
    });
    check(stoppedDetail, {
        'Stopped chunk detail keeps requestedAsync true': (item) => item.requestedAsync === true,
        'Stopped chunk detail marks first job STOPPED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs[0].status === 'STOPPED',
        'Stopped chunk detail marks downstream job NOT_RUN': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs[1].status === 'NOT_RUN',
    });
    check(stoppedDestACount, {
        'Stopped chunk pipeline leaves partial committed rows in first destination': (count) =>
            count > 0 && count < totalRows,
    });
    check(stoppedDestBCount, {
        'Stopped chunk pipeline does not start downstream job': (count) => count === 0,
    });
    check(stoppedExecutionCount, {
        'Stopping does not create a new execution attempt': (count) => count === 1,
    });

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(summary.id, true);
    const completedSummary = waitForPipelineStatus(
        summary.id,
        ['COMPLETED'],
        resumeCompletionTimeoutSeconds,
        0.5,
    );
    const completedDetail = getPipelineRunDetailOrFail(summary.id, 'resumed chunk pipeline detail query');
    const completedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_chunk_dest_a',
        'CNT',
        'completed chunk dest a count',
    );
    const completedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_chunk_dest_b',
        'CNT',
        'completed chunk dest b count',
    );
    const completedExecutionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${summary.id}`,
        'CNT',
        'completed chunk execution count',
    );

    check(resumedSummary, {
        'Chunk resume after stop keeps the same pipeline run id': (item) => item.id === summary.id,
    });
    check(completedSummary, {
        'Chunk resume after stop eventually completes': (item) => item.status === 'COMPLETED',
    });
    check(completedDetail, {
        'Resumed chunk detail marks first job COMPLETED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs[0].status === 'COMPLETED',
        'Resumed chunk detail marks downstream job COMPLETED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 2 && item.jobs[1].status === 'COMPLETED',
    });
    check(completedDestACount, {
        'Resumed chunk pipeline finishes the full first destination load': (count) => count === totalRows,
    });
    check(completedDestBCount, {
        'Resumed chunk pipeline runs downstream job after recovery': (count) => count === downstreamRows,
    });
    check(completedExecutionCount, {
        'Resume after stop stores two execution attempts': (count) => count === 2,
    });

    deletePipelineRunOrFail(summary.id, 'stopped chunk pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

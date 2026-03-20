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

const yamlContent = open('../testfiles/job-pipeline-stop-mixed.yml');
const fileName = 'job-pipeline-stop-mixed.yml';
const filePath = pipelineNameFor(`sync-${fileName}`);
const middleRows = Number.parseInt(__ENV.IRISPIPE_STOP_SYNC_MIXED_ROWS || '15000', 10);
const firstRows = 1000;
const thirdRows = 3;

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stop_mixed_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_mixed_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_mixed_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_mixed_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_mixed_source_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stop_mixed_dest_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stop_mixed_source_a',
        'TRUNCATE TABLE test_stop_mixed_dest_a',
        'TRUNCATE TABLE test_stop_mixed_source_b',
        'TRUNCATE TABLE test_stop_mixed_dest_b',
        'TRUNCATE TABLE test_stop_mixed_source_c',
        'TRUNCATE TABLE test_stop_mixed_dest_c',
        [
            'INSERT INTO test_stop_mixed_source_a (id, name, update_time)',
            `SELECT X, 'A-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-01-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${firstRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stop_mixed_source_b (id, name, update_time)',
            `SELECT X, 'B-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-02-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${middleRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stop_mixed_source_c VALUES',
            "(1, 'C-1', TIMESTAMP '2023-03-01 00:00:01')",
            ", (2, 'C-2', TIMESTAMP '2023-03-01 00:00:02')",
            ", (3, 'C-3', TIMESTAMP '2023-03-01 00:00:03')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export function triggerScenario(data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId, false);
    check(summary, {
        'Sync mixed execute returns STOPPED after manual stop': (item) => item.status === 'STOPPED',
    });
}

export function controlScenario(data) {
    const pipelineRunId = waitForPipelineRunId(data.pipelineId);
    waitForPipelineStatus(pipelineRunId, ['STARTED'], 30, 0.2);

    const inFlightDetail = waitForDetailCondition(pipelineRunId, (detail) =>
        Array.isArray(detail.jobs)
        && detail.jobs.length === 3
        && detail.jobs[0].status === 'COMPLETED'
        && detail.jobs[1].status === 'STARTED', 60, 0.5);

    let partialMiddleCount = 0;
    for (let attempt = 0; attempt < 120; attempt += 1) {
        partialMiddleCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_b',
            'CNT',
            'sync mixed middle destination count before stop',
        );
        if (partialMiddleCount > 0) {
            break;
        }
        sleep(0.2);
    }

    const { summary: stopRequestedSummary } = stopPipelineRunAndGetSummary(pipelineRunId);
    const stoppedSummary = waitForPipelineStatus(pipelineRunId, ['STOPPED'], 60, 0.5);
    const stoppedDetail = getPipelineRunDetailOrFail(pipelineRunId, 'sync stopped mixed pipeline detail query');
    const stoppedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_b',
        'CNT',
        'sync stopped mixed dest b count',
    );
    const stoppedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_c',
        'CNT',
        'sync stopped mixed dest c count',
    );

    check(inFlightDetail, {
        'Sync mixed pipeline reaches the CHUNK node before stop': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[1].status === 'STARTED',
    });
    check(stopRequestedSummary, {
        'Sync mixed stop request returns the same pipeline run id': (item) => item.id === pipelineRunId,
    });
    check(stoppedSummary, {
        'Sync mixed stop pipeline eventually reaches STOPPED': (item) => item.status === 'STOPPED',
    });
    check(stoppedDetail, {
        'Sync stopped mixed detail keeps first job COMPLETED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[0].status === 'COMPLETED',
        'Sync stopped mixed detail marks second job STOPPED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[1].status === 'STOPPED',
        'Sync stopped mixed detail marks third job NOT_RUN': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[2].status === 'NOT_RUN',
    });
    check(stoppedDestBCount, {
        'Sync stopped mixed pipeline keeps partial committed rows in the CHUNK node': (count) =>
            count > 0 && count < middleRows,
    });
    check(stoppedDestCCount, {
        'Sync stopped mixed pipeline does not start downstream JOB node': (count) => count === 0,
    });

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(pipelineRunId, false);
    const completedDetail = getPipelineRunDetailOrFail(pipelineRunId, 'sync resumed mixed pipeline detail query');
    const completedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_a',
        'CNT',
        'sync completed mixed dest a count',
    );
    const completedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_b',
        'CNT',
        'sync completed mixed dest b count',
    );
    const completedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_c',
        'CNT',
        'sync completed mixed dest c count',
    );

    check(resumedSummary, {
        'Sync mixed resume after stop completes the pipeline run': (item) => item.id === pipelineRunId && item.status === 'COMPLETED',
    });
    check(completedDetail, {
        'Sync resumed mixed detail marks upstream as SKIPPED and downstream as COMPLETED': (item) =>
            Array.isArray(item.jobs)
            && item.jobs.length === 3
            && item.jobs[0].status === 'SKIPPED'
            && item.jobs[1].status === 'COMPLETED'
            && item.jobs[2].status === 'COMPLETED',
    });
    check(completedDestACount, {
        'Sync resumed mixed pipeline keeps completed first JOB output': (count) => count === firstRows,
    });
    check(completedDestBCount, {
        'Sync resumed mixed pipeline finishes the full CHUNK output': (count) => count === middleRows,
    });
    check(completedDestCCount, {
        'Sync resumed mixed pipeline runs downstream JOB node after recovery': (count) => count === thirdRows,
    });

    deletePipelineRunOrFail(pipelineRunId, 'sync stopped mixed pipeline run delete');
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
            'sync stop mixed pipeline run lookup',
        );
        if (pipelineRunId !== null) {
            return pipelineRunId;
        }
        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for pipeline ${pipelineId} to create a pipeline run`);
}

function waitForDetailCondition(pipelineRunId, predicate, timeoutSeconds = 30, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const detail = getPipelineRunDetailOrFail(pipelineRunId, 'sync mixed pipeline detail poll');
        if (predicate(detail)) {
            return detail;
        }
        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for sync mixed pipeline ${pipelineRunId} to reach the expected detail state`);
}

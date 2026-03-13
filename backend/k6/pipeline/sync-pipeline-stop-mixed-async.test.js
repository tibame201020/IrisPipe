import { check, sleep } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    configPathFor,
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

const yamlContent = open('../testfiles/job-pipeline-stop-mixed.yml');
const fileName = 'job-pipeline-stop-mixed.yml';
const filePath = configPathFor(fileName);
const middleRows = Number.parseInt(__ENV.IRISPIPE_STOP_MIXED_ROWS || '1500000', 10);
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

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId, true);
    waitForPipelineStatus(summary.id, ['STARTED'], 30, 0.2);

    const inFlightDetail = waitForDetailCondition(summary.id, (detail) =>
        Array.isArray(detail.jobs)
        && detail.jobs.length === 3
        && detail.jobs[0].status === 'COMPLETED'
        && detail.jobs[1].status === 'STARTED', 60, 0.5);

    let partialMiddleCount = 0;
    for (let attempt = 0; attempt < 120; attempt += 1) {
        partialMiddleCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_b',
            'CNT',
            'mixed middle destination count before stop',
        );
        if (partialMiddleCount > 0) {
            break;
        }
        sleep(0.2);
    }

    const { summary: stopRequestedSummary } = stopPipelineRunAndGetSummary(summary.id);
    const stoppedSummary = waitForPipelineStatus(summary.id, ['STOPPED'], 60, 0.5);
    const stoppedDetail = getPipelineRunDetailOrFail(summary.id, 'stopped mixed pipeline detail query');
    const stoppedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_b',
        'CNT',
        'stopped mixed dest b count',
    );
    const stoppedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_c',
        'CNT',
        'stopped mixed dest c count',
    );

    check(inFlightDetail, {
        'Mixed pipeline reaches the CHUNK node before stop': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[1].status === 'STARTED',
    });
    check(stopRequestedSummary, {
        'Mixed stop request returns the same pipeline run id': (item) => item.id === summary.id,
    });
    check(stoppedSummary, {
        'Mixed stop pipeline eventually reaches STOPPED': (item) => item.status === 'STOPPED',
    });
    check(stoppedDetail, {
        'Stopped mixed detail keeps first job COMPLETED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[0].status === 'COMPLETED',
        'Stopped mixed detail marks second job STOPPED': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[1].status === 'STOPPED',
        'Stopped mixed detail marks third job NOT_RUN': (item) =>
            Array.isArray(item.jobs) && item.jobs.length === 3 && item.jobs[2].status === 'NOT_RUN',
    });
    check(stoppedDestBCount, {
        'Stopped mixed pipeline keeps partial committed rows in the CHUNK node': (count) =>
            count > 0 && count < middleRows,
    });
    check(stoppedDestCCount, {
        'Stopped mixed pipeline does not start downstream JOB node': (count) => count === 0,
    });

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(summary.id, true);
    const completedSummary = waitForPipelineStatus(summary.id, ['COMPLETED'], 180, 0.5);
    const completedDetail = getPipelineRunDetailOrFail(summary.id, 'resumed mixed pipeline detail query');
    const completedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_a',
        'CNT',
        'completed mixed dest a count',
    );
    const completedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_b',
        'CNT',
        'completed mixed dest b count',
    );
    const completedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stop_mixed_dest_c',
        'CNT',
        'completed mixed dest c count',
    );

    check(resumedSummary, {
        'Mixed resume after stop keeps the same pipeline run id': (item) => item.id === summary.id,
    });
    check(completedSummary, {
        'Mixed resume after stop eventually completes': (item) => item.status === 'COMPLETED',
    });
    check(completedDetail, {
        'Resumed mixed detail marks upstream as SKIPPED and downstream as COMPLETED': (item) =>
            Array.isArray(item.jobs)
            && item.jobs.length === 3
            && item.jobs[0].status === 'SKIPPED'
            && item.jobs[1].status === 'COMPLETED'
            && item.jobs[2].status === 'COMPLETED',
    });
    check(completedDestACount, {
        'Resumed mixed pipeline keeps completed first JOB output': (count) => count === firstRows,
    });
    check(completedDestBCount, {
        'Resumed mixed pipeline finishes the full CHUNK output': (count) => count === middleRows,
    });
    check(completedDestCCount, {
        'Resumed mixed pipeline runs downstream JOB node after recovery': (count) => count === thirdRows,
    });

    deletePipelineRunOrFail(summary.id, 'stopped mixed pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function waitForDetailCondition(pipelineRunId, predicate, timeoutSeconds = 30, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const detail = getPipelineRunDetailOrFail(pipelineRunId, 'mixed pipeline detail poll');
        if (predicate(detail)) {
            return detail;
        }
        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for mixed pipeline ${pipelineRunId} to reach the expected detail state`);
}

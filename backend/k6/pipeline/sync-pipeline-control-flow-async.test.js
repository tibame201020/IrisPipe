import { check, sleep } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    configPathFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUpdated,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    queryScalarOrFail,
    rerunPipelineRunAndGetSummary,
    resumePipelineRunAndGetSummary,
    runPipelineAndGetSummary,
    stopPipelineRunAndGetSummary,
    waitForPipelineStatus,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContentV1 = open('../testfiles/job-pipeline-control-flow-v1.yml');
const yamlContentV2 = open('../testfiles/job-pipeline-control-flow-v2.yml');
const fileName = 'job-pipeline-control-flow.yml';
const filePath = configPathFor(fileName);
const firstRows = 1000;
const middleRows = Number.parseInt(__ENV.IRISPIPE_CONTROL_FLOW_ROWS || '1500000', 10);
const thirdRowsV1 = 3;
const minPartialRows = Math.min(10000, middleRows - 1);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_control_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_control_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_control_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_control_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_control_source_c_v1 (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_control_source_c_v2 (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_control_dest_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_control_source_a',
        'TRUNCATE TABLE test_control_dest_a',
        'TRUNCATE TABLE test_control_source_b',
        'TRUNCATE TABLE test_control_dest_b',
        'TRUNCATE TABLE test_control_source_c_v1',
        'TRUNCATE TABLE test_control_source_c_v2',
        'TRUNCATE TABLE test_control_dest_c',
        [
            'INSERT INTO test_control_source_a (id, name, update_time)',
            `SELECT X, 'A-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-04-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${firstRows})`,
        ].join(' '),
        [
            'INSERT INTO test_control_source_b (id, name, update_time)',
            `SELECT X, 'B-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-05-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${middleRows})`,
        ].join(' '),
        [
            'INSERT INTO test_control_source_c_v1 VALUES',
            "(1, 'V1-1', TIMESTAMP '2023-06-01 00:00:01')",
            ", (2, 'V1-2', TIMESTAMP '2023-06-01 00:00:02')",
            ", (3, 'V1-3', TIMESTAMP '2023-06-01 00:00:03')",
        ].join(' '),
        [
            'INSERT INTO test_control_source_c_v2 VALUES',
            "(11, 'V2-11', TIMESTAMP '2023-07-01 00:00:11')",
            ", (12, 'V2-12', TIMESTAMP '2023-07-01 00:00:12')",
            ", (13, 'V2-13', TIMESTAMP '2023-07-01 00:00:13')",
            ", (14, 'V2-14', TIMESTAMP '2023-07-01 00:00:14')",
            ", (15, 'V2-15', TIMESTAMP '2023-07-01 00:00:15')",
        ].join(' '),
        "INSERT INTO test_control_dest_a VALUES (9000001, 'STALE-A', TIMESTAMP '2022-01-01 00:00:00')",
        "INSERT INTO test_control_dest_b VALUES (9000001, 'STALE-B', TIMESTAMP '2022-01-01 00:00:00')",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContentV1);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    let initialRunId = null;
    let rerunRunId = null;

    try {
        const { summary: initialSummary } = runPipelineAndGetSummary(data.pipelineId, true);
        initialRunId = initialSummary.id;
        waitForPipelineStatus(initialRunId, ['STARTED'], 30, 0.2);

        const initialInFlightDetail = waitForDetailCondition(
            initialRunId,
            (detail) => hasJobStatuses(detail, ['COMPLETED', 'STARTED', 'PENDING']),
            90,
            0.5,
        );
        const initialPartialCount = waitForScalarCondition(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_b',
            'CNT',
            (count) => count >= minPartialRows && count < middleRows,
            'initial control flow partial chunk progress',
            60,
            0.5,
        );

        const { summary: initialStopSummary } = stopPipelineRunAndGetSummary(initialRunId);
        const initialStoppedSummary = waitForPipelineStatus(initialRunId, ['STOPPED'], 120, 0.5);
        const initialStoppedDetail = getPipelineRunDetailOrFail(initialRunId, 'initial stopped control flow detail');
        const initialStoppedDestACount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_a',
            'CNT',
            'initial stopped dest a count',
        );
        const initialStoppedDestBCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_b',
            'CNT',
            'initial stopped dest b count',
        );
        const initialStoppedDestCCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_c',
            'CNT',
            'initial stopped dest c count',
        );
        const initialStoppedStaleACount = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_a WHERE name = 'STALE-A'",
            'CNT',
            'initial stopped stale a count',
        );
        const initialStoppedStaleBCount = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_b WHERE name = 'STALE-B'",
            'CNT',
            'initial stopped stale b count',
        );
        const initialStoppedExecutionCount = queryScalarOrFail(
            `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${initialRunId}`,
            'CNT',
            'initial stopped execution count',
        );

        check(initialInFlightDetail, {
            'Control flow initial execute reaches mixed in-flight state': (item) =>
                hasJobStatuses(item, ['COMPLETED', 'STARTED', 'PENDING']),
        });
        check(initialPartialCount, {
            'Control flow initial execute reaches partial CHUNK progress before stop': (count) =>
                count >= minPartialRows && count < middleRows,
        });
        check(initialStopSummary, {
            'Control flow initial stop returns the same pipeline run id': (item) => item.id === initialRunId,
        });
        check(initialStoppedSummary, {
            'Control flow initial run eventually reaches STOPPED': (item) => item.status === 'STOPPED',
        });
        check(initialStoppedDetail, {
            'Control flow initial stopped detail keeps mixed topology and async trigger': (item) =>
                item.requestedAsync === true && hasJobStatuses(item, ['COMPLETED', 'STOPPED', 'NOT_RUN']),
        });
        check(initialStoppedDestACount, {
            'Control flow initial stop preserves completed JOB output': (count) => count === firstRows,
        });
        check(initialStoppedDestBCount, {
            'Control flow initial stop preserves partial CHUNK output': (count) => count >= minPartialRows && count < middleRows,
        });
        check(initialStoppedDestCCount, {
            'Control flow initial stop prevents downstream JOB execution': (count) => count === 0,
        });
        check(initialStoppedStaleACount, {
            'Control flow initial JOB truncate step cleared stale destination rows': (count) => count === 0,
        });
        check(initialStoppedStaleBCount, {
            'Control flow initial CHUNK truncate step cleared stale destination rows': (count) => count === 0,
        });
        check(initialStoppedExecutionCount, {
            'Control flow initial stop keeps a single execution attempt before resume': (count) => count === 1,
        });

        const { summary: initialResumedSummary } = resumePipelineRunAndGetSummary(initialRunId, true);
        const initialCompletedSummary = waitForPipelineStatus(initialRunId, ['COMPLETED'], 240, 0.5);
        const initialCompletedDetail = getPipelineRunDetailOrFail(initialRunId, 'initial resumed control flow detail');
        const initialCompletedDestACount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_a',
            'CNT',
            'initial completed dest a count',
        );
        const initialCompletedDestBCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_b',
            'CNT',
            'initial completed dest b count',
        );
        const initialCompletedDestCCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_c',
            'CNT',
            'initial completed dest c count',
        );
        const initialCompletedV1Count = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_c WHERE name LIKE 'V1-%'",
            'CNT',
            'initial completed v1 rows',
        );
        const initialCompletedV2Count = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_c WHERE name LIKE 'V2-%'",
            'CNT',
            'initial completed v2 rows',
        );
        const initialCompletedExecutionCount = queryScalarOrFail(
            `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${initialRunId}`,
            'CNT',
            'initial completed execution count',
        );

        check(initialResumedSummary, {
            'Control flow initial resume keeps the same pipeline run id': (item) => item.id === initialRunId,
        });
        check(initialCompletedSummary, {
            'Control flow initial resume eventually completes': (item) => item.status === 'COMPLETED',
        });
        check(initialCompletedDetail, {
            'Control flow initial resume skips completed JOB and finishes remaining nodes': (item) =>
                item.requestedAsync === true && hasJobStatuses(item, ['SKIPPED', 'COMPLETED', 'COMPLETED']),
        });
        check(initialCompletedDestACount, {
            'Control flow initial resume keeps first JOB output intact': (count) => count === firstRows,
        });
        check(initialCompletedDestBCount, {
            'Control flow initial resume finishes the full CHUNK output': (count) => count === middleRows,
        });
        check(initialCompletedDestCCount, {
            'Control flow initial resume completes downstream JOB output': (count) => count === thirdRowsV1,
        });
        check(initialCompletedV1Count, {
            'Control flow initial completion uses the v1 config snapshot': (count) => count === thirdRowsV1,
        });
        check(initialCompletedV2Count, {
            'Control flow initial completion does not leak v2 rows before config update': (count) => count === 0,
        });
        check(initialCompletedExecutionCount, {
            'Control flow initial resume creates a second execution attempt': (count) => count === 2,
        });

        ensureConfigUpdated(data.pipelineId, filePath, fileName, yamlContentV2);

        const { summary: rerunSummary } = rerunPipelineRunAndGetSummary(initialRunId, true);
        rerunRunId = rerunSummary.id;
        const rerunLineage = queryScalarOrFail(
            `SELECT rerun_from_pipeline_run_id AS RERUN_FROM FROM iris_pipeline_run WHERE id = ${rerunRunId}`,
            'RERUN_FROM',
            'rerun lineage query',
        );
        waitForPipelineStatus(rerunRunId, ['STARTED'], 30, 0.2);

        const rerunInFlightDetail = waitForDetailCondition(
            rerunRunId,
            (detail) => hasJobStatuses(detail, ['COMPLETED', 'STARTED', 'PENDING']),
            90,
            0.5,
        );
        const rerunPartialCount = waitForScalarCondition(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_b',
            'CNT',
            (count) => count >= minPartialRows && count < middleRows,
            'rerun control flow partial chunk progress',
            60,
            0.5,
        );

        const { summary: rerunStopSummary } = stopPipelineRunAndGetSummary(rerunRunId);
        const rerunStoppedSummary = waitForPipelineStatus(rerunRunId, ['STOPPED'], 120, 0.5);
        const rerunStoppedDetail = getPipelineRunDetailOrFail(rerunRunId, 'rerun stopped control flow detail');
        const rerunStoppedDestBCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_b',
            'CNT',
            'rerun stopped dest b count',
        );
        const rerunStoppedDestCV1Count = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_c WHERE name LIKE 'V1-%'",
            'CNT',
            'rerun stopped dest c v1 count',
        );
        const rerunStoppedDestCV2Count = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_c WHERE name LIKE 'V2-%'",
            'CNT',
            'rerun stopped dest c v2 count',
        );
        const rerunStoppedExecutionCount = queryScalarOrFail(
            `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${rerunRunId}`,
            'CNT',
            'rerun stopped execution count',
        );

        check(rerunSummary, {
            'Control flow rerun creates a new pipeline run id': (item) => item.id !== initialRunId,
        });
        check(rerunLineage, {
            'Control flow rerun stores lineage to the source pipeline run': (value) => value === initialRunId,
        });
        check(rerunInFlightDetail, {
            'Control flow rerun reaches the same mixed in-flight state before stop': (item) =>
                hasJobStatuses(item, ['COMPLETED', 'STARTED', 'PENDING']),
        });
        check(rerunPartialCount, {
            'Control flow rerun reaches partial CHUNK progress before stop': (count) =>
                count >= minPartialRows && count < middleRows,
        });
        check(rerunStopSummary, {
            'Control flow rerun stop returns the rerun pipeline run id': (item) => item.id === rerunRunId,
        });
        check(rerunStoppedSummary, {
            'Control flow rerun eventually reaches STOPPED': (item) => item.status === 'STOPPED',
        });
        check(rerunStoppedDetail, {
            'Control flow rerun stopped detail remains mixed and leaves downstream as NOT_RUN': (item) =>
                item.requestedAsync === true && hasJobStatuses(item, ['COMPLETED', 'STOPPED', 'NOT_RUN']),
        });
        check(rerunStoppedDestBCount, {
            'Control flow rerun stop preserves partial CHUNK output': (count) => count >= minPartialRows && count < middleRows,
        });
        check(rerunStoppedDestCV1Count, {
            'Control flow rerun stop keeps prior v1 downstream output because rerun stopped before job C': (count) =>
                count === thirdRowsV1,
        });
        check(rerunStoppedDestCV2Count, {
            'Control flow rerun stop does not materialize updated v2 downstream rows before resume': (count) => count === 0,
        });
        check(rerunStoppedExecutionCount, {
            'Control flow rerun stop keeps a single execution attempt before rerun resume': (count) => count === 1,
        });

        const { summary: rerunResumedSummary } = resumePipelineRunAndGetSummary(rerunRunId, true);
        const rerunCompletedSummary = waitForPipelineStatus(rerunRunId, ['COMPLETED'], 240, 0.5);
        const rerunCompletedDetail = getPipelineRunDetailOrFail(rerunRunId, 'rerun resumed control flow detail');
        const rerunCompletedDestACount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_a',
            'CNT',
            'rerun completed dest a count',
        );
        const rerunCompletedDestBCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_b',
            'CNT',
            'rerun completed dest b count',
        );
        const rerunCompletedDestCCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_control_dest_c',
            'CNT',
            'rerun completed dest c count',
        );
        const rerunCompletedV1Count = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_c WHERE name LIKE 'V1-%'",
            'CNT',
            'rerun completed v1 rows',
        );
        const rerunCompletedV2Count = queryScalarOrFail(
            "SELECT COUNT(*) AS CNT FROM test_control_dest_c WHERE name LIKE 'V2-%'",
            'CNT',
            'rerun completed v2 rows',
        );
        const rerunCompletedExecutionCount = queryScalarOrFail(
            `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${rerunRunId}`,
            'CNT',
            'rerun completed execution count',
        );

        check(rerunResumedSummary, {
            'Control flow rerun resume keeps the rerun pipeline run id': (item) => item.id === rerunRunId,
        });
        check(rerunCompletedSummary, {
            'Control flow rerun resume eventually completes': (item) => item.status === 'COMPLETED',
        });
        check(rerunCompletedDetail, {
            'Control flow rerun resume skips completed JOB and finishes remaining nodes': (item) =>
                item.requestedAsync === true && hasJobStatuses(item, ['SKIPPED', 'COMPLETED', 'COMPLETED']),
        });
        check(rerunCompletedDestACount, {
            'Control flow rerun completion rewrites the first JOB output cleanly': (count) => count === firstRows,
        });
        check(rerunCompletedDestBCount, {
            'Control flow rerun completion finishes the CHUNK output cleanly': (count) => count === middleRows,
        });
        check(rerunCompletedDestCCount, {
            'Control flow rerun completion keeps the original snapshot row count': (count) => count === thirdRowsV1,
        });
        check(rerunCompletedV1Count, {
            'Control flow rerun completion still replays the v1 snapshot after config update': (count) =>
                count === thirdRowsV1,
        });
        check(rerunCompletedV2Count, {
            'Control flow rerun completion does not switch to the updated v2 source': (count) => count === 0,
        });
        check(rerunCompletedExecutionCount, {
            'Control flow rerun resume creates a second execution attempt on the rerun pipeline': (count) => count === 2,
        });
    } finally {
        safeDeletePipelineRun(rerunRunId, 'control flow rerun pipeline run delete');
        safeDeletePipelineRun(initialRunId, 'control flow initial pipeline run delete');
    }
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function waitForDetailCondition(pipelineRunId, predicate, timeoutSeconds = 30, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const detail = getPipelineRunDetailOrFail(pipelineRunId, 'control flow detail poll');
        if (predicate(detail)) {
            return detail;
        }
        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for control flow pipeline ${pipelineRunId} to reach the expected detail state`);
}

function waitForScalarCondition(sql, columnName, predicate, label, timeoutSeconds = 30, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const value = queryScalarOrFail(sql, columnName, label);
        if (predicate(value)) {
            return value;
        }
        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for ${label}`);
}

function hasJobStatuses(detail, expectedStatuses) {
    return Array.isArray(detail.jobs)
        && detail.jobs.length === expectedStatuses.length
        && expectedStatuses.every((status, index) => detail.jobs[index].status === status);
}

function safeDeletePipelineRun(pipelineRunId, label) {
    if (!pipelineRunId) {
        return;
    }

    try {
        deletePipelineRunOrFail(pipelineRunId, label);
    } catch (error) {
        console.error(`Failed to delete pipeline run ${pipelineRunId}: ${error.message}`);
    }
}

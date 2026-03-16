import { check, sleep } from 'k6';
import { deletePipelineRun } from '../services/sync-pipeline-api.js';
import { singleRunOptions } from '../utils/test-options.js';
import {
    configPathFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunsOrFail,
    jsonOrFallback,
    queryScalarOrFail,
    responseSummary,
    resumePipelineRunAndGetSummary,
    runPipelineAndGetSummary,
    stopPipelineRunAndGetSummary,
    waitForPipelineStatus,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-stop-job.yml');
const fileName = 'job-pipeline-stop-job.yml';
const filePath = configPathFor(fileName);
const totalRows = Number.parseInt(__ENV.IRISPIPE_DELETE_GUARD_ROWS || '1000000', 10);

function resetDeleteGuardTables() {
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
}

function expectDeleteRejectedForInFlightRun(pipelineRunId) {
    const response = deletePipelineRun(pipelineRunId);
    const payload = jsonOrFallback(response, {});
    const rejected = check(response, {
        'Delete rejects in-flight pipeline run with 400': (res) => res.status === 400,
    });
    const payloadMatches = check(payload, {
        'Delete guard returns Illegal Argument error payload': (body) =>
            body && body.error === 'Illegal Argument',
        'Delete guard explains only terminal runs can be deleted': (body) =>
            body && typeof body.message === 'string' && body.message.includes('Only terminal pipeline runs can be deleted'),
    });

    if (!rejected || !payloadMatches) {
        throw new Error(`Expected delete guard rejection for run ${pipelineRunId}: ${responseSummary(response)}`);
    }
}

function expectRunDeleted(pipelineRunId, labelPrefix) {
    const summaries = getPipelineRunsOrFail([pipelineRunId], `${labelPrefix} summary query after delete`);
    const runCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run WHERE id = ${pipelineRunId}`,
        'CNT',
        `${labelPrefix} run count`,
    );
    const executionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${pipelineRunId}`,
        'CNT',
        `${labelPrefix} execution count`,
    );
    const executionJobCount = queryScalarOrFail(
        [
            'SELECT COUNT(*) AS CNT',
            'FROM iris_pipeline_run_execution_job ej',
            'JOIN iris_pipeline_run_execution e ON e.id = ej.pipeline_run_execution_id',
            `WHERE e.pipeline_run_id = ${pipelineRunId}`,
        ].join(' '),
        'CNT',
        `${labelPrefix} execution job count`,
    );
    const jobCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_job WHERE pipeline_run_id = ${pipelineRunId}`,
        'CNT',
        `${labelPrefix} job count`,
    );
    const snapshotCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_snapshot WHERE pipeline_run_id = ${pipelineRunId}`,
        'CNT',
        `${labelPrefix} snapshot count`,
    );

    const summaryDeleted = check(summaries, {
        [`${labelPrefix} summary query returns no deleted runs`]: (items) => Array.isArray(items) && items.length === 0,
    });
    const runtimeRowsDeleted = check(
        { runCount, executionCount, executionJobCount, jobCount, snapshotCount },
        {
            [`${labelPrefix} deletes pipeline run row`]: (counts) => counts.runCount === 0,
            [`${labelPrefix} deletes pipeline execution rows`]: (counts) => counts.executionCount === 0,
            [`${labelPrefix} deletes pipeline execution job rows`]: (counts) => counts.executionJobCount === 0,
            [`${labelPrefix} deletes pipeline job rows`]: (counts) => counts.jobCount === 0,
            [`${labelPrefix} deletes pipeline snapshot rows`]: (counts) => counts.snapshotCount === 0,
        },
    );

    if (!summaryDeleted || !runtimeRowsDeleted) {
        throw new Error(`Expected deleted runtime rows for run ${pipelineRunId}`);
    }
}

export function setup() {
    resetDeleteGuardTables();
    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: inFlightRun } = runPipelineAndGetSummary(data.pipelineId, true);
    waitForPipelineStatus(inFlightRun.id, ['STARTED'], 30, 0.2);
    sleep(1);

    expectDeleteRejectedForInFlightRun(inFlightRun.id);

    const { summary: stopRequestedSummary } = stopPipelineRunAndGetSummary(inFlightRun.id);
    const stoppedSummary = waitForPipelineStatus(inFlightRun.id, ['STOPPED'], 60, 0.5);
    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(inFlightRun.id, true);
    const completedSummary = waitForPipelineStatus(inFlightRun.id, ['COMPLETED'], 120, 0.5);

    const controlFlowPreserved = check(stopRequestedSummary, {
        'Delete guard does not block stop after rejected delete': (item) => item.id === inFlightRun.id,
    }) && check(stoppedSummary, {
        'Delete guard flow still reaches STOPPED before resume': (item) => item.status === 'STOPPED',
    }) && check(resumedSummary, {
        'Delete guard does not block resume after stop': (item) => item.id === inFlightRun.id,
    }) && check(completedSummary, {
        'Delete guard flow can still complete after resume': (item) => item.status === 'COMPLETED',
    });

    if (!controlFlowPreserved) {
        throw new Error(`Delete guard altered stop/resume flow for run ${inFlightRun.id}`);
    }

    deletePipelineRunOrFail(inFlightRun.id, 'completed pipeline run delete after guard rejection');
    expectRunDeleted(inFlightRun.id, 'completed pipeline run delete');

    resetDeleteGuardTables();

    const { summary: stoppedRun } = runPipelineAndGetSummary(data.pipelineId, true);
    waitForPipelineStatus(stoppedRun.id, ['STARTED'], 30, 0.2);
    sleep(1);

    stopPipelineRunAndGetSummary(stoppedRun.id);
    const finalStoppedSummary = waitForPipelineStatus(stoppedRun.id, ['STOPPED'], 60, 0.5);

    const stoppedBeforeDelete = check(finalStoppedSummary, {
        'Stopped pipeline run reaches STOPPED before delete': (item) => item.status === 'STOPPED',
    });

    if (!stoppedBeforeDelete) {
        throw new Error(`Expected run ${stoppedRun.id} to reach STOPPED before delete`);
    }

    deletePipelineRunOrFail(stoppedRun.id, 'stopped pipeline run delete');
    expectRunDeleted(stoppedRun.id, 'stopped pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

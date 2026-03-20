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
    rerunPipelineRunAndGetSummary,
    resumePipelineRunAndGetSummary,
    runPipelineAndGetSummary,
    stopPipelineRunAndGetSummary,
    waitForPipelineStatus,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-stop-job.yml');
const fileName = 'job-pipeline-observe-timeline.yml';
const filePath = pipelineNameFor(fileName);
const totalRows = Number.parseInt(__ENV.IRISPIPE_TIMELINE_ROWS || '12000', 10);
const expectedJobNames = ['k6_pipeline_stop_job_a', 'k6_pipeline_stop_job_b'];

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

export default function (data) {
    let initialRunId = null;
    let rerunRunId = null;

    try {
        const { summary: initialSummary } = runPipelineAndGetSummary(data.pipelineId, true);
        initialRunId = initialSummary.id;
        waitForPipelineStatus(initialRunId, ['STARTED'], 30, 0.2);
        sleep(0.4);

        stopPipelineRunAndGetSummary(initialRunId);
        const initialStoppedSummary = waitForPipelineStatus(initialRunId, ['STOPPED'], 60, 0.5);
        const initialStoppedDetail = getPipelineRunDetailOrFail(initialRunId, 'initial stopped timeline detail');

        const initialStoppedTimelineValid = check(initialStoppedSummary, {
            'Initial timeline run reaches STOPPED before resume': (item) => item.status === 'STOPPED',
        }) && check(initialStoppedDetail, {
            'Initial stopped detail keeps latest top-level jobs projection': (item) =>
                item.requestedAsync === true
                && item.status === 'STOPPED'
                && hasJobStatuses(item.jobs, ['STOPPED', 'NOT_RUN'])
                && hasJobNames(item.jobs, expectedJobNames),
            'Initial stopped detail exposes a single INITIAL attempt': (item) =>
                hasAttemptTimeline(item, [
                    {
                        executionNo: 1,
                        executionKind: 'INITIAL',
                        status: 'STOPPED',
                        requestedAsync: true,
                        jobs: ['STOPPED', 'NOT_RUN'],
                    },
                ]),
        });

        if (!initialStoppedTimelineValid) {
            throw new Error(`Unexpected stopped timeline for initial run ${initialRunId}`);
        }

        const { summary: initialResumedSummary } = resumePipelineRunAndGetSummary(initialRunId, true);
        const initialCompletedSummary = waitForPipelineStatus(initialRunId, ['COMPLETED'], 120, 0.5);
        const initialCompletedDetail = getPipelineRunDetailOrFail(initialRunId, 'initial completed timeline detail');
        const initialExecutionCount = queryScalarOrFail(
            `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${initialRunId}`,
            'CNT',
            'initial timeline execution count',
        );

        const initialCompletedTimelineValid = check(initialResumedSummary, {
            'Initial timeline resume keeps the same pipeline run id': (item) => item.id === initialRunId,
        }) && check(initialCompletedSummary, {
            'Initial timeline run completes after resume': (item) => item.status === 'COMPLETED',
        }) && check(initialCompletedDetail, {
            'Initial completed detail keeps latest top-level jobs projection': (item) =>
                item.requestedAsync === true
                && item.status === 'COMPLETED'
                && hasJobStatuses(item.jobs, ['COMPLETED', 'COMPLETED'])
                && hasJobNames(item.jobs, expectedJobNames),
            'Initial completed detail exposes INITIAL then RESUME attempts in order': (item) =>
                hasAttemptTimeline(item, [
                    {
                        executionNo: 1,
                        executionKind: 'INITIAL',
                        status: 'STOPPED',
                        requestedAsync: true,
                        jobs: ['STOPPED', 'NOT_RUN'],
                    },
                    {
                        executionNo: 2,
                        executionKind: 'RESUME',
                        status: 'COMPLETED',
                        requestedAsync: true,
                        jobs: ['COMPLETED', 'COMPLETED'],
                    },
                ]),
        }) && check(initialExecutionCount, {
            'Initial completed timeline stores two execution attempts': (count) => count === 2,
        });

        if (!initialCompletedTimelineValid) {
            throw new Error(`Unexpected completed timeline for initial run ${initialRunId}`);
        }

        resetTimelineDestTables();

        const { summary: rerunSummary } = rerunPipelineRunAndGetSummary(initialRunId, true);
        rerunRunId = rerunSummary.id;
        const rerunLineage = queryScalarOrFail(
            `SELECT rerun_from_pipeline_run_id AS RERUN_FROM FROM iris_pipeline_run WHERE id = ${rerunRunId}`,
            'RERUN_FROM',
            'timeline rerun lineage query',
        );
        waitForPipelineStatus(rerunRunId, ['STARTED'], 30, 0.2);
        sleep(0.4);

        stopPipelineRunAndGetSummary(rerunRunId);
        const rerunStoppedSummary = waitForPipelineStatus(rerunRunId, ['STOPPED'], 60, 0.5);
        const rerunStoppedDetail = getPipelineRunDetailOrFail(rerunRunId, 'rerun stopped timeline detail');

        const rerunStoppedTimelineValid = check(rerunSummary, {
            'Timeline rerun creates a new logical pipeline run id': (item) => item.id !== initialRunId,
        }) && check(rerunLineage, {
            'Timeline rerun stores lineage to the source pipeline run': (value) => value === initialRunId,
        }) && check(rerunStoppedSummary, {
            'Timeline rerun reaches STOPPED before resume': (item) => item.status === 'STOPPED',
        }) && check(rerunStoppedDetail, {
            'Rerun stopped detail keeps latest top-level jobs projection': (item) =>
                item.requestedAsync === true
                && item.status === 'STOPPED'
                && hasJobStatuses(item.jobs, ['STOPPED', 'NOT_RUN'])
                && hasJobNames(item.jobs, expectedJobNames),
            'Rerun stopped detail starts its own attempt timeline from INITIAL': (item) =>
                hasAttemptTimeline(item, [
                    {
                        executionNo: 1,
                        executionKind: 'INITIAL',
                        status: 'STOPPED',
                        requestedAsync: true,
                        jobs: ['STOPPED', 'NOT_RUN'],
                    },
                ]),
        });

        if (!rerunStoppedTimelineValid) {
            throw new Error(`Unexpected stopped timeline for rerun run ${rerunRunId}`);
        }

        const { summary: rerunResumedSummary } = resumePipelineRunAndGetSummary(rerunRunId, true);
        const rerunCompletedSummary = waitForPipelineStatus(rerunRunId, ['COMPLETED'], 120, 0.5);
        const rerunCompletedDetail = getPipelineRunDetailOrFail(rerunRunId, 'rerun completed timeline detail');
        const rerunExecutionCount = queryScalarOrFail(
            `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${rerunRunId}`,
            'CNT',
            'rerun timeline execution count',
        );

        const rerunCompletedTimelineValid = check(rerunResumedSummary, {
            'Timeline rerun resume keeps the rerun pipeline run id': (item) => item.id === rerunRunId,
        }) && check(rerunCompletedSummary, {
            'Timeline rerun completes after resume': (item) => item.status === 'COMPLETED',
        }) && check(rerunCompletedDetail, {
            'Rerun completed detail keeps latest top-level jobs projection': (item) =>
                item.requestedAsync === true
                && item.status === 'COMPLETED'
                && hasJobStatuses(item.jobs, ['COMPLETED', 'COMPLETED'])
                && hasJobNames(item.jobs, expectedJobNames),
            'Rerun completed detail exposes INITIAL then RESUME attempts in order': (item) =>
                hasAttemptTimeline(item, [
                    {
                        executionNo: 1,
                        executionKind: 'INITIAL',
                        status: 'STOPPED',
                        requestedAsync: true,
                        jobs: ['STOPPED', 'NOT_RUN'],
                    },
                    {
                        executionNo: 2,
                        executionKind: 'RESUME',
                        status: 'COMPLETED',
                        requestedAsync: true,
                        jobs: ['COMPLETED', 'COMPLETED'],
                    },
                ]),
        }) && check(rerunExecutionCount, {
            'Timeline rerun stores two execution attempts after resume': (count) => count === 2,
        });

        if (!rerunCompletedTimelineValid) {
            throw new Error(`Unexpected completed timeline for rerun run ${rerunRunId}`);
        }
    } finally {
        safeDeletePipelineRun(rerunRunId, 'timeline rerun pipeline run delete');
        safeDeletePipelineRun(initialRunId, 'timeline initial pipeline run delete');
    }
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function resetTimelineDestTables() {
    executeStatementsOrFail([
        'TRUNCATE TABLE test_stop_job_dest_a',
        'TRUNCATE TABLE test_stop_job_dest_b',
    ]);
}

function hasAttemptTimeline(detail, expectedAttempts) {
    return Array.isArray(detail.attempts)
        && detail.attempts.length === expectedAttempts.length
        && expectedAttempts.every((expectedAttempt, index) => {
            const attempt = detail.attempts[index];
            return attempt
                && Number.isInteger(attempt.executionId)
                && attempt.executionId > 0
                && attempt.executionNo === expectedAttempt.executionNo
                && attempt.executionKind === expectedAttempt.executionKind
                && attempt.status === expectedAttempt.status
                && attempt.requestedAsync === expectedAttempt.requestedAsync
                && hasTimestampValue(attempt.startTime)
                && hasTimestampValue(attempt.endTime)
                && hasJobStatuses(attempt.jobs, expectedAttempt.jobs)
                && hasJobNames(attempt.jobs, expectedJobNames);
        });
}

function hasJobStatuses(jobs, expectedStatuses) {
    return Array.isArray(jobs)
        && jobs.length === expectedStatuses.length
        && expectedStatuses.every((status, index) => jobs[index].status === status);
}

function hasJobNames(jobs, expectedNames) {
    return Array.isArray(jobs)
        && jobs.length === expectedNames.length
        && expectedNames.every((jobName, index) => jobs[index].jobName === jobName);
}

function hasTimestampValue(value) {
    return (Array.isArray(value) && value.length >= 6)
        || (typeof value === 'string' && value.length > 0);
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

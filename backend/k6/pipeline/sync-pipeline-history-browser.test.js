import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunHistoryOrFail,
    getPipelineRunsOrFail,
    getRecentPipelineRunsOrFail,
    hasNoLegacyPathFields,
    pipelineNameFor,
    queryScalarOrFail,
    rerunPipelineRunAndGetSummary,
    resumePipelineRunAndGetSummary,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const resumeYamlContent = open('../testfiles/job-pipeline-resume.yml');
const successYamlContent = open('../testfiles/job-success.yml');
const resumeFileName = 'job-pipeline-resume.yml';
const successFileName = 'job-success.yml';
const resumePipelineName = pipelineNameFor(`history-${resumeFileName}`);
const successPipelineName = pipelineNameFor(`history-${successFileName}`);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_resume_source_a (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_resume_source_b (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_resume_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_resume_source_a',
        'TRUNCATE TABLE test_resume_source_b',
        'TRUNCATE TABLE test_resume_dest',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_resume_source_a VALUES (1, 'A1', '2023-01-01 10:00:00'), (2, 'A2', '2023-01-01 11:00:00')",
        "INSERT INTO test_resume_source_b VALUES (3, 'B3', '2023-01-01 12:00:00'), (4, 'B4', '2023-01-01 13:00:00')",
        "INSERT INTO test_resume_dest VALUES (4, 'B4_BAD', '2023-01-01 13:00:00')",
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00'), (3, 'C', '2023-01-01 12:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert'",
    ]);

    const resumePipeline = ensureConfigUploaded(resumePipelineName, resumeFileName, resumeYamlContent);
    const successPipeline = ensureConfigUploaded(successPipelineName, successFileName, successYamlContent);

    return {
        resumePipelineId: resumePipeline.id,
        successPipelineId: successPipeline.id,
        resumePipelineName: resumePipeline.pipelineName,
        successPipelineName: successPipeline.pipelineName,
    };
}

export default function (data) {
    let baseRunId = null;
    let rerunRunId = null;
    let successRunId = null;

    try {
        const { summary: failedSummary } = runPipelineAndGetSummary(data.resumePipelineId);
        baseRunId = failedSummary.id;

        let history = getPipelineRunHistoryOrFail(data.resumePipelineId, 10, null, 'initial pipeline history query');
        check(history, {
            'history query returns the initial failed logical run': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === baseRunId
                && items[0].pipelineId === data.resumePipelineId
                && items[0].pipelineName === data.resumePipelineName
                && items[0].status === 'FAILED',
            'history query payload no longer exposes path/fileName fields': (items) =>
                Array.isArray(items) && items.every((item) => hasNoLegacyPathFields(item)),
        });

        executeStatementsOrFail([
            'DELETE FROM test_resume_dest WHERE id = 4',
        ]);

        const { summary: resumedSummary } = resumePipelineRunAndGetSummary(baseRunId);
        history = getPipelineRunHistoryOrFail(data.resumePipelineId, 10, null, 'post-resume pipeline history query');

        check(resumedSummary, {
            'resume keeps the same logical pipeline run id for history': (item) => item.id === baseRunId,
        });
        check(history, {
            'resume does not create a second logical run in history': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === baseRunId
                && items[0].status === 'COMPLETED',
        });

        const { summary: rerunSummary } = rerunPipelineRunAndGetSummary(baseRunId);
        rerunRunId = rerunSummary.id;
        history = getPipelineRunHistoryOrFail(data.resumePipelineId, 10, null, 'post-rerun pipeline history query');
        const pagedHistory = getPipelineRunHistoryOrFail(data.resumePipelineId, 1, null, 'paged pipeline history query');
        const olderHistory = getPipelineRunHistoryOrFail(data.resumePipelineId, 1, rerunRunId, 'older pipeline history query');

        check(rerunSummary, {
            'rerun creates a new logical pipeline run for history': (item) => item.id !== baseRunId,
        });
        check(history, {
            'history query sorts logical runs newest first': (items) =>
                Array.isArray(items)
                && items.length === 2
                && items[0].id === rerunRunId
                && items[1].id === baseRunId,
        });
        check(pagedHistory, {
            'history query supports keyset first page': (items) =>
                Array.isArray(items) && items.length === 1 && items[0].id === rerunRunId,
        });
        check(olderHistory, {
            'history query supports beforeRunId pagination': (items) =>
                Array.isArray(items) && items.length === 1 && items[0].id === baseRunId,
        });

        const { summary: successSummary } = runPipelineAndGetSummary(data.successPipelineId);
        successRunId = successSummary.id;
        const recentRuns = getRecentPipelineRunsOrFail(3, null, 'recent pipeline query');
        const idsLookup = getPipelineRunsOrFail(
            [successRunId, rerunRunId, baseRunId],
            'pipeline ids lookup query',
        );
        const rerunLineage = queryScalarOrFail(
            `SELECT rerun_from_pipeline_run_id AS RERUN_FROM FROM iris_pipeline_run WHERE id = ${rerunRunId}`,
            'RERUN_FROM',
            'pipeline rerun lineage query',
        );

        check(recentRuns, {
            'recent pipeline query returns the newest runs first across pipelines': (items) =>
                Array.isArray(items)
                && items.length === 3
                && items[0].id === successRunId
                && items[1].id === rerunRunId
                && items[2].id === baseRunId,
            'recent pipeline query payload no longer exposes path/fileName fields': (items) =>
                Array.isArray(items) && items.every((item) => hasNoLegacyPathFields(item)),
        });
        check(idsLookup, {
            'ids lookup remains compatible after history API expansion': (items) =>
                Array.isArray(items)
                && items.length === 3
                && items[0].id === successRunId
                && items[1].id === rerunRunId
                && items[2].id === baseRunId,
            'ids lookup payload no longer exposes path/fileName fields': (items) =>
                Array.isArray(items) && items.every((item) => hasNoLegacyPathFields(item)),
        });
        check(rerunLineage, {
            'rerun lineage still points at the original logical run': (value) => value === baseRunId,
        });
    } finally {
        safeDeletePipelineRun(successRunId, 'history browser success pipeline run delete');
        safeDeletePipelineRun(rerunRunId, 'history browser rerun pipeline run delete');
        safeDeletePipelineRun(baseRunId, 'history browser base pipeline run delete');
    }
}

export function teardown(data) {
    ensureConfigDeleted(data && data.resumePipelineId);
    ensureConfigDeleted(data && data.successPipelineId);
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

import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    getPipelineRunsOrFail,
    hasNoLegacyPathFields,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-success.yml');
const fileName = 'job-success.yml';
const filePath = pipelineNameFor(`pipeline-api-${fileName}`);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id, pipelineName: pipeline.pipelineName };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId);
    const summaries = getPipelineRunsOrFail([summary.id], 'pipeline summary query');
    const detail = getPipelineRunDetailOrFail(summary.id, 'pipeline detail query');

    check(summary, {
        'Pipeline run marked as COMPLETED': (item) => item.status === 'COMPLETED',
        'Pipeline run summary keeps pipeline id': (item) => item.pipelineId === data.pipelineId,
        'Pipeline run summary keeps root metadata without hidden root id': (item) =>
            item.pipelineName === data.pipelineName && item.folderId == null && item.folderPath === '/',
        'Pipeline execute response no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });
    check(summaries, {
        'Pipeline summary query returns one run': (items) => Array.isArray(items) && items.length === 1,
        'Pipeline summary query returns the same run id': (items) => items.length === 1 && items[0].id === summary.id,
        'Pipeline summary query no longer exposes path/fileName fields': (items) =>
            Array.isArray(items) && items.every((item) => hasNoLegacyPathFields(item)),
    });
    check(detail, {
        'Pipeline detail marks requestedAsync as false': (item) => item.requestedAsync === false,
        'Pipeline detail returns one job node': (item) => Array.isArray(item.jobs) && item.jobs.length === 1,
        'Pipeline detail returns one stage node': (item) =>
            Array.isArray(item.stages)
            && item.stages.length === 1
            && item.stages[0].stage === 'stage1'
            && Array.isArray(item.stages[0].jobs)
            && item.stages[0].jobs.length === 1,
        'Pipeline detail keeps completed pipeline status': (item) => item.status === 'COMPLETED',
        'Pipeline detail job stores root job instance id': (item) =>
            item.jobs.length === 1 && Number.isInteger(item.jobs[0].rootJobInstanceId) && item.jobs[0].rootJobInstanceId > 0,
        'Pipeline detail job stores last job execution id': (item) =>
            item.jobs.length === 1 && Number.isInteger(item.jobs[0].lastJobExecutionId) && item.jobs[0].lastJobExecutionId > 0,
        'Pipeline detail includes step executions': (item) =>
            item.jobs.length === 1 && Array.isArray(item.jobs[0].stepExecutionInfos) && item.jobs[0].stepExecutionInfos.length > 0,
        'Pipeline detail keeps root metadata without hidden root id': (item) =>
            item.pipelineName === data.pipelineName && item.folderId == null && item.folderPath === '/',
        'Pipeline detail no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });

    deletePipelineRunOrFail(summary.id, 'pipeline run delete');
    const summariesAfterDelete = getPipelineRunsOrFail([summary.id], 'pipeline summary after delete');
    check(summariesAfterDelete, {
        'Deleted pipeline run is no longer queryable': (items) => Array.isArray(items) && items.length === 0,
    });
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

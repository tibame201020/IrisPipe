import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    hasNoLegacyPathFields,
    runPipelineAndGetSummary,
    waitForPipelineCompletion,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-success.yml');
const fileName = 'job-success.yml';
const filePath = pipelineNameFor(`pipeline-async-${fileName}`);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00'), (3, 'C', '2023-01-01 12:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId, true);
    const completedSummary = waitForPipelineCompletion(summary.id, 'COMPLETED', 10, 0.2);
    const detail = getPipelineRunDetailOrFail(summary.id, 'async pipeline detail query');

    check(summary, {
        'Async trigger returns a pipeline run id': (item) => Number.isInteger(item.id) && item.id > 0,
        'Async trigger returns a valid pipeline status': (item) =>
            ['STARTING', 'STARTED', 'COMPLETED'].includes(item.status),
        'Async execute response no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });
    check(completedSummary, {
        'Async pipeline eventually completes': (item) => item.status === 'COMPLETED',
        'Async completion summary no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });
    check(detail, {
        'Async pipeline detail marks requestedAsync': (item) => item.requestedAsync === true,
        'Async pipeline detail keeps completed status': (item) => item.status === 'COMPLETED',
        'Async pipeline detail includes one job node': (item) => Array.isArray(item.jobs) && item.jobs.length === 1,
        'Async pipeline detail no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });

    deletePipelineRunOrFail(summary.id, 'async pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

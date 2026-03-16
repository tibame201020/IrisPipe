import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUpdated,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    queryScalarOrFail,
    rerunPipelineRunAndGetSummary,
    runPipelineAndGetSummary,
    waitForPipelineCompletion,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContentV1 = open('../testfiles/job-pipeline-rerun-v1.yml');
const yamlContentV2 = open('../testfiles/job-pipeline-rerun-v2.yml');
const fileName = 'job-pipeline-rerun.yml';
const filePath = pipelineNameFor(`async-${fileName}`);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_rerun_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_rerun_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_rerun_source',
        'TRUNCATE TABLE test_rerun_dest',
        [
            "INSERT INTO test_rerun_source VALUES",
            "(1, 'A', '2023-01-01 10:00:00')",
            ", (2, 'B', '2023-01-01 11:00:00')",
            ", (3, 'C', '2023-01-01 12:00:00')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContentV1);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: initialSummary } = runPipelineAndGetSummary(data.pipelineId);
    ensureConfigUpdated(data.pipelineId, filePath, fileName, yamlContentV2);

    const { summary: rerunSummary } = rerunPipelineRunAndGetSummary(initialSummary.id, true);
    const completedSummary = waitForPipelineCompletion(rerunSummary.id, 'COMPLETED', 10, 0.2);
    const rerunDetail = getPipelineRunDetailOrFail(rerunSummary.id, 'async rerun pipeline detail query');
    const rerunDestCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_rerun_dest',
        'CNT',
        'async rerun dest count',
    );
    const rerunFromPipelineRunId = queryScalarOrFail(
        `SELECT rerun_from_pipeline_run_id AS RERUN_FROM FROM iris_pipeline_run WHERE id = ${rerunSummary.id}`,
        'RERUN_FROM',
        'async rerun lineage query',
    );

    check(rerunSummary, {
        'Async rerun creates a new pipeline run id': (item) => item.id !== initialSummary.id,
        'Async rerun returns a valid in-flight status': (item) =>
            ['STARTING', 'STARTED', 'COMPLETED'].includes(item.status),
    });
    check(completedSummary, {
        'Async rerun eventually completes': (item) => item.status === 'COMPLETED',
    });
    check(rerunDetail, {
        'Async rerun detail marks requestedAsync as true': (item) => item.requestedAsync === true,
        'Async rerun detail exposes completed job node': (item) => Array.isArray(item.jobs) && item.jobs.length === 1 && item.jobs[0].status === 'COMPLETED',
    });
    check(rerunDestCount, {
        'Async rerun also replays the source pipeline snapshot': (count) => count === 2,
    });
    check(rerunFromPipelineRunId, {
        'Async rerun stores lineage to the source pipeline run': (value) => value === initialSummary.id,
    });

    deletePipelineRunOrFail(rerunSummary.id, 'async rerun pipeline run delete');
    deletePipelineRunOrFail(initialSummary.id, 'async rerun source pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

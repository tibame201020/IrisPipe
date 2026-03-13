import { check } from 'k6';
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
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContentV1 = open('../testfiles/job-pipeline-rerun-v1.yml');
const yamlContentV2 = open('../testfiles/job-pipeline-rerun-v2.yml');
const fileName = 'job-pipeline-rerun.yml';
const filePath = configPathFor(fileName);

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
    const initialDestCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_rerun_dest',
        'CNT',
        'rerun dest count after initial run',
    );

    check(initialSummary, {
        'Initial rerun source pipeline completed': (item) => item.status === 'COMPLETED',
    });
    check(initialDestCount, {
        'Initial rerun source pipeline used v1 config': (count) => count === 2,
    });

    ensureConfigUpdated(data.pipelineId, filePath, fileName, yamlContentV2);

    const { summary: rerunSummary } = rerunPipelineRunAndGetSummary(initialSummary.id);
    const rerunDetail = getPipelineRunDetailOrFail(rerunSummary.id, 'rerun pipeline detail query');
    const rerunDestCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_rerun_dest',
        'CNT',
        'rerun dest count after rerun',
    );
    const rerunFromPipelineRunId = queryScalarOrFail(
        `SELECT rerun_from_pipeline_run_id AS RERUN_FROM FROM iris_pipeline_run WHERE id = ${rerunSummary.id}`,
        'RERUN_FROM',
        'rerun lineage query',
    );
    const rerunExecutionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${rerunSummary.id}`,
        'CNT',
        'rerun execution count',
    );

    check(rerunSummary, {
        'Rerun creates a brand new pipeline run id': (item) => item.id !== initialSummary.id,
        'Rerun completes successfully': (item) => item.status === 'COMPLETED',
    });
    check(rerunDetail, {
        'Rerun detail keeps requestedAsync as false': (item) => item.requestedAsync === false,
        'Rerun detail exposes completed job node': (item) => Array.isArray(item.jobs) && item.jobs.length === 1 && item.jobs[0].status === 'COMPLETED',
    });
    check(rerunDestCount, {
        'Rerun replays the source pipeline snapshot': (count) => count === 2,
    });
    check(rerunFromPipelineRunId, {
        'Rerun stores lineage to the source pipeline run': (value) => value === initialSummary.id,
    });
    check(rerunExecutionCount, {
        'Rerun starts a fresh execution history on the new run': (count) => count === 1,
    });

    deletePipelineRunOrFail(rerunSummary.id, 'rerun pipeline run delete');
    deletePipelineRunOrFail(initialSummary.id, 'source pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

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
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContentV1 = open('../testfiles/job-pipeline-stage-rerun-v1.yml');
const yamlContentV2 = open('../testfiles/job-pipeline-stage-rerun-v2.yml');
const fileName = 'job-pipeline-stage-rerun.yml';
const filePath = pipelineNameFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stage_rerun_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_rerun_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_rerun_source_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_rerun_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_rerun_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_rerun_dest_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stage_rerun_source_a',
        'TRUNCATE TABLE test_stage_rerun_source_b',
        'TRUNCATE TABLE test_stage_rerun_source_c',
        'TRUNCATE TABLE test_stage_rerun_dest_a',
        'TRUNCATE TABLE test_stage_rerun_dest_b',
        'TRUNCATE TABLE test_stage_rerun_dest_c',
        [
            'INSERT INTO test_stage_rerun_source_a VALUES',
            "(1, 'A-1', TIMESTAMP '2023-01-01 00:00:01')",
            ", (2, 'A-2', TIMESTAMP '2023-01-01 00:00:02')",
            ", (3, 'A-3', TIMESTAMP '2023-01-01 00:00:03')",
        ].join(' '),
        [
            'INSERT INTO test_stage_rerun_source_b VALUES',
            "(1, 'B-1', TIMESTAMP '2023-02-01 00:00:01')",
            ", (2, 'B-2', TIMESTAMP '2023-02-01 00:00:02')",
        ].join(' '),
        [
            'INSERT INTO test_stage_rerun_source_c VALUES',
            "(1, 'C-1', TIMESTAMP '2023-03-01 00:00:01')",
            ", (2, 'C-2', TIMESTAMP '2023-03-01 00:00:02')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContentV1);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: initialSummary } = runPipelineAndGetSummary(data.pipelineId);
    const initialDetail = getPipelineRunDetailOrFail(initialSummary.id, 'stage rerun initial detail query');
    const initialDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_rerun_dest_a',
        'CNT',
        'stage rerun initial dest_a count',
    );
    const initialDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_rerun_dest_b',
        'CNT',
        'stage rerun initial dest_b count',
    );
    const initialDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_rerun_dest_c',
        'CNT',
        'stage rerun initial dest_c count',
    );

    ensureConfigUpdated(data.pipelineId, filePath, fileName, yamlContentV2);

    const { summary: rerunSummary } = rerunPipelineRunAndGetSummary(initialSummary.id);
    const rerunDetail = getPipelineRunDetailOrFail(rerunSummary.id, 'stage rerun detail query');
    const rerunDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_rerun_dest_a',
        'CNT',
        'stage rerun dest_a count',
    );
    const rerunDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_rerun_dest_b',
        'CNT',
        'stage rerun dest_b count',
    );
    const rerunDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_rerun_dest_c',
        'CNT',
        'stage rerun dest_c count',
    );

    check(initialSummary, {
        'stage rerun initial pipeline run completes': (item) => item.status === 'COMPLETED',
    });
    check(initialDetail, {
        'stage rerun initial detail keeps explicit stage projection': (item) =>
            Array.isArray(item.stages)
            && item.stages.length === 2
            && item.stages[0].stage === 'stage1'
            && item.stages[0].jobs.length === 2
            && item.stages[1].stage === 'stage2'
            && item.stages[1].jobs.length === 1,
    });
    check(initialDestACount, {
        'stage rerun initial run uses v1 branch A snapshot': (count) => count === 3,
    });
    check(initialDestBCount, {
        'stage rerun initial run uses v1 branch B snapshot': (count) => count === 2,
    });
    check(initialDestCCount, {
        'stage rerun initial run uses v1 downstream snapshot': (count) => count === 2,
    });
    check(rerunSummary, {
        'stage rerun creates a new logical pipeline run': (item) =>
            item.status === 'COMPLETED' && item.id !== initialSummary.id,
    });
    check(rerunDetail, {
        'stage rerun preserves stage-first topology in the new run': (item) =>
            Array.isArray(item.stages)
            && item.stages.length === 2
            && item.stages[0].stage === 'stage1'
            && item.stages[0].jobs.length === 2
            && item.stages[0].status === 'COMPLETED'
            && item.stages[1].stage === 'stage2'
            && item.stages[1].jobs.length === 1
            && item.stages[1].status === 'COMPLETED',
    });
    check(rerunDestACount, {
        'stage rerun replays v1 snapshot on branch A after config update': (count) => count === 3,
    });
    check(rerunDestBCount, {
        'stage rerun replays v1 snapshot on branch B after config update': (count) => count === 2,
    });
    check(rerunDestCCount, {
        'stage rerun replays v1 downstream snapshot after config update': (count) => count === 2,
    });

    deletePipelineRunOrFail(rerunSummary.id, 'stage rerun pipeline run delete');
    deletePipelineRunOrFail(initialSummary.id, 'stage rerun initial pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

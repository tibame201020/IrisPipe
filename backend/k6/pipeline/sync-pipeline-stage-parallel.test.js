import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    queryScalarOrFail,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-stage-parallel.yml');
const fileName = 'job-pipeline-stage-parallel.yml';
const filePath = pipelineNameFor(fileName);
const stageRows = Number.parseInt(__ENV.IRISPIPE_STAGE_PARALLEL_ROWS || '12000', 10);
const finalRows = 3;
const sameStageStartSkewMillis = Number.parseInt(__ENV.IRISPIPE_STAGE_PARALLEL_START_SKEW_MS || '500', 10);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stage_parallel_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_parallel_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_parallel_source_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_parallel_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_parallel_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_parallel_dest_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stage_parallel_source_a',
        'TRUNCATE TABLE test_stage_parallel_source_b',
        'TRUNCATE TABLE test_stage_parallel_source_c',
        'TRUNCATE TABLE test_stage_parallel_dest_a',
        'TRUNCATE TABLE test_stage_parallel_dest_b',
        'TRUNCATE TABLE test_stage_parallel_dest_c',
        [
            'INSERT INTO test_stage_parallel_source_a (id, name, update_time)',
            `SELECT X, 'A-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-01-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${stageRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stage_parallel_source_b (id, name, update_time)',
            `SELECT X, 'B-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-02-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${stageRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stage_parallel_source_c VALUES',
            "(1, 'C-1', TIMESTAMP '2023-03-01 00:00:01')",
            ", (2, 'C-2', TIMESTAMP '2023-03-01 00:00:02')",
            ", (3, 'C-3', TIMESTAMP '2023-03-01 00:00:03')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: completedSummary } = runPipelineAndGetSummary(data.pipelineId);
    const completedDetail = getPipelineRunDetailOrFail(completedSummary.id, 'stage parallel completed detail query');
    const completedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_parallel_dest_a',
        'CNT',
        'parallel stage1 dest_a completed count',
    );
    const completedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_parallel_dest_b',
        'CNT',
        'parallel stage1 dest_b completed count',
    );
    const completedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_parallel_dest_c',
        'CNT',
        'parallel stage2 dest_c completed count',
    );
    const stage1Jobs = completedDetail.stages?.[0]?.jobs || [];
    const stage2Jobs = completedDetail.stages?.[1]?.jobs || [];
    const stage1JobA = stage1Jobs[0];
    const stage1JobB = stage1Jobs[1];
    const stage2Job = stage2Jobs[0];
    const startSkewMillis = Math.abs(toMillis(stage1JobA?.startTime) - toMillis(stage1JobB?.startTime));
    const stage2StartedAfterStage1 = toMillis(stage2Job?.startTime) >= Math.max(
        toMillis(stage1JobA?.endTime),
        toMillis(stage1JobB?.endTime),
    );

    check(completedDetail, {
        'stage parallel detail exposes stage-first runtime projection': (item) =>
            Array.isArray(item.stages)
            && item.stages.length === 2
            && item.stages[0].jobs.length === 2
            && item.stages[1].jobs.length === 1,
        'stage parallel same-stage jobs complete successfully': (item) =>
            item.stages[0].jobs.every((job) => job.status === 'COMPLETED'),
    });
    check(startSkewMillis, {
        'stage parallel launches same-stage jobs with overlapping start times': (value) => value <= sameStageStartSkewMillis,
    });
    check(stage2StartedAfterStage1, {
        'stage barrier delays downstream execution until prior stage completes': (value) => value === true,
    });
    check(completedSummary, {
        'stage parallel pipeline completes successfully': (item) => item.status === 'COMPLETED',
    });
    check(completedDetail, {
        'completed detail keeps both stages and marks them completed': (item) =>
            Array.isArray(item.stages)
            && item.stages.length === 2
            && item.stages.every((stage) => stage.status === 'COMPLETED'),
    });
    check(completedDestACount, {
        'stage parallel pipeline completes full output on branch A': (count) => count === stageRows,
    });
    check(completedDestBCount, {
        'stage parallel pipeline completes full output on branch B': (count) => count === stageRows,
    });
    check(completedDestCCount, {
        'stage parallel pipeline advances to downstream stage after barrier': (count) => count === finalRows,
    });

    deletePipelineRunOrFail(completedSummary.id, 'stage parallel pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function toMillis(dateArray) {
    if (!Array.isArray(dateArray) || dateArray.length < 7) {
        return Number.NaN;
    }
    const [year, month, day, hour, minute, second, nanoseconds] = dateArray;
    return Date.UTC(year, month - 1, day, hour, minute, second, Math.floor(nanoseconds / 1000000));
}

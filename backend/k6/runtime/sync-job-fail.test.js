import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    configPathFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryScalarOrFail,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-fail.yml');
const fileName = 'job-fail.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00')",
        "INSERT INTO test_dest VALUES (2, 'B_BAD', '2023-01-01 11:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_fail'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId);
    const destCount = queryScalarOrFail('SELECT COUNT(*) AS CNT FROM test_dest', 'CNT', 'dest rollback count');
    const watermarkCount = queryScalarOrFail(
        "SELECT COUNT(*) AS CNT FROM iris_watermark_record WHERE execution_name = 'k6_insert_fail'",
        'CNT',
        'failed watermark count',
    );

    check(summary, {
        'Job marked as FAILED': (job) => job.status === 'FAILED',
    });
    check(destCount, {
        'Data transaction rolled back completely (Count=1)': (count) => count === 1,
    });
    check(watermarkCount, {
        'Watermark was NOT saved because job failed': (count) => count === 0,
    });

    deletePipelineRunOrFail(summary.id, 'failed pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

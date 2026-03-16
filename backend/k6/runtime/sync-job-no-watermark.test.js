import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryScalarOrFail,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-no-watermark.yml');
const fileName = 'job-no-watermark.yml';
const filePath = pipelineNameFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_no_watermark'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId);
    const destCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_dest',
        'CNT',
        'no-watermark dest row count',
    );
    const watermarkCount = queryScalarOrFail(
        "SELECT COUNT(*) AS CNT FROM iris_watermark_record WHERE execution_name = 'k6_insert_no_watermark'",
        'CNT',
        'no-watermark record count',
    );

    check(summary, {
        'Job marked as COMPLETED without watermark': (job) => job.status === 'COMPLETED',
    });
    check(destCount, {
        'Both rows synced to dest (No Watermark)': (count) => count === 2,
    });
    check(watermarkCount, {
        'No Watermark inserted': (count) => count === 0,
    });

    deletePipelineRunOrFail(summary.id, 'no-watermark pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

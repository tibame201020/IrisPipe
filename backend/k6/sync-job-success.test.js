import { check } from 'k6';
import { singleRunOptions } from './utils/test-options.js';
import {
    configPathFor,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryRowsOrFail,
    queryScalarOrFail,
    runJobAndGetSummary,
} from './utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('./testfiles/job-success.yml');
const fileName = 'job-success.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00'), (3, 'C', '2023-01-01 12:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert'",
    ]);

    ensureConfigUploaded(filePath, fileName, yamlContent);
}

export default function () {
    const { summary } = runJobAndGetSummary(filePath);
    const destCount = queryScalarOrFail('SELECT COUNT(*) AS CNT FROM test_dest', 'CNT', 'dest row count');
    const watermarkRows = queryRowsOrFail(
        "SELECT last_value FROM iris_watermark_record WHERE execution_name = 'k6_insert'",
        'watermark query',
    );

    check(summary, {
        'Job marked as COMPLETED': (job) => job.status === 'COMPLETED',
    });
    check(destCount, {
        'All 3 rows synced to dest': (count) => count === 3,
    });
    check(watermarkRows, {
        'Watermark advanced successfully': (rows) =>
            rows.length === 1 && rows[0].LAST_VALUE === '2023-01-01 12:00:00.0',
    });
}

export function teardown() {
    ensureConfigDeleted(filePath);
}

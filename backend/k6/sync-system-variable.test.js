import { check } from 'k6';
import {
    configPathFor,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryScalarOrFail,
    runJobAndGetSummary,
} from './utils/test-helpers.js';

export const options = {
    thresholds: {
        checks: ['rate==1'],
    },
};

const yamlContent = open('./testfiles/job-watermark.yml');
const fileName = 'job-watermark.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS source_watermark (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS dest_watermark (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE source_watermark',
        'TRUNCATE TABLE dest_watermark',
        "INSERT INTO source_watermark VALUES (1, 'A', '2023-01-01 10:00:00')",
        "INSERT INTO source_watermark VALUES (2, 'B', '2023-01-01 11:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_watermark_test'",
    ]);

    ensureConfigUploaded(filePath, fileName, yamlContent);
}

export default function () {
    // Run 1: Should sync 2 rows
    const { summary: summary1 } = runJobAndGetSummary(filePath);
    const count1 = queryScalarOrFail('SELECT COUNT(*) AS CNT FROM dest_watermark', 'CNT', 'dest count run 1');
    const watermark1 = queryScalarOrFail(
        "SELECT last_value FROM iris_watermark_record WHERE execution_name = 'k6_watermark_test'",
        'LAST_VALUE',
        'watermark run 1'
    );

    check(summary1, {
        'Run 1 COMPLETED': (s) => s.status === 'COMPLETED',
    });
    check(count1, {
        'Run 1 dest has 2 rows': (c) => parseInt(c) === 2,
    });
    check(watermark1, {
        'Run 1 watermark is 11:00:00': (w) => w.includes('11:00:00'),
    });

    // Add 1 more row to source
    executeStatementsOrFail([
        "INSERT INTO source_watermark VALUES (3, 'C', '2023-01-01 12:00:00')",
    ]);

    // Run 2: Should sync only the new row (incremental)
    const { summary: summary2 } = runJobAndGetSummary(filePath);
    const count2 = queryScalarOrFail('SELECT COUNT(*) AS CNT FROM dest_watermark', 'CNT', 'dest count run 2');
    const watermark2 = queryScalarOrFail(
        "SELECT last_value FROM iris_watermark_record WHERE execution_name = 'k6_watermark_test'",
        'LAST_VALUE',
        'watermark run 2'
    );

    check(summary2, {
        'Run 2 COMPLETED': (s) => s.status === 'COMPLETED',
    });
    check(count2, {
        'Run 2 total 3 rows in dest': (c) => parseInt(c) === 3,
    });
    check(watermark2, {
        'Run 2 watermark is 12:00:00': (w) => w.includes('12:00:00'),
    });
}

export function teardown() {
    ensureConfigDeleted(filePath);
}

import { check } from 'k6';
import { singleRunOptions } from './utils/test-options.js';
import {
    configPathFor,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryRowsOrFail,
    runJobAndGetSummary,
} from './utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('./testfiles/job-multi-step.yml');
const fileName = 'job-multi-step.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00'), (3, 'C', '2023-01-01 12:00:00')",
        "INSERT INTO test_dest VALUES (99, 'DELETE_ME', '2023-01-01 00:00:00')",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runJobAndGetSummary(data.pipelineId);
    const rows = queryRowsOrFail('SELECT * FROM test_dest ORDER BY id ASC', 'multi-step result query');

    check(summary, {
        'Job marked as COMPLETED for multi-step flow': (job) => job.status === 'COMPLETED',
    });
    check(rows, {
        'Multi-step processed exactly 2 rows (ID 1, 3)': (items) => items.length === 2,
        'Row 1 has UPDATED suffix': (items) => items.length > 0 && items[0].NAME === 'A_UPDATED',
        'Row 2 corresponds to ID 3 with UPDATED suffix': (items) =>
            items.length > 1 && items[1].NAME === 'C_UPDATED' && items[1].ID === 3,
    });
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    configPathFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryRowsOrFail,
    queryScalarOrFail,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-composite-pk.yml');
const fileName = 'job-composite-pk.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS source_composite (id1 INT, id2 INT, name VARCHAR(255), update_time TIMESTAMP, PRIMARY KEY (id1, id2))',
        'CREATE TABLE IF NOT EXISTS dest_composite (id1 INT, id2 INT, name VARCHAR(255), update_time TIMESTAMP, PRIMARY KEY (id1, id2))',
        'TRUNCATE TABLE source_composite',
        'TRUNCATE TABLE dest_composite',
        // Initial dest data
        "INSERT INTO dest_composite VALUES (1, 1, 'Initial 1-1', '2023-01-01 10:00:00')",
        "INSERT INTO dest_composite VALUES (1, 2, 'Initial 1-2', '2023-01-01 10:00:00')",
        // Source data (one update, one new)
        "INSERT INTO source_composite VALUES (1, 1, 'Updated 1-1', '2023-01-01 11:00:00')",
        "INSERT INTO source_composite VALUES (2, 1, 'New 2-1', '2023-01-01 11:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_upsert_composite'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId);
    const rows = queryRowsOrFail('SELECT * FROM dest_composite ORDER BY id1, id2', 'composite result query');

    check(summary, {
        'Job marked as COMPLETED': (job) => job.status === 'COMPLETED',
    });

    check(rows, {
        'Dest table has 3 rows': (items) => items.length === 3,
        'Row (1,1) updated': (items) => items.find(r => r.ID1 === 1 && r.ID2 === 1).NAME === 'Updated 1-1',
        'Row (1,2) untouched': (items) => items.find(r => r.ID1 === 1 && r.ID2 === 2).NAME === 'Initial 1-2',
        'Row (2,1) inserted': (items) => items.find(r => r.ID1 === 2 && r.ID2 === 1).NAME === 'New 2-1',
    });

    deletePipelineRunOrFail(summary.id, 'composite pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

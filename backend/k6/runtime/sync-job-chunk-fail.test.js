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

const yamlContent = open('../testfiles/job-chunk-fail.yml');
const fileName = 'job-chunk-fail.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        [
            "INSERT INTO test_source VALUES",
            "(1, 'A', '2023-01-01 10:00:00')",
            ", (2, 'B', '2023-01-01 11:00:00')",
            ", (3, 'C', '2023-01-01 12:00:00')",
            ", (4, 'D', '2023-01-01 13:00:00')",
        ].join(' '),
        "INSERT INTO test_dest VALUES (4, 'D_EXISTING', '2023-01-01 13:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_chunk_fail'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId);
    const rows = queryRowsOrFail('SELECT id, name FROM test_dest ORDER BY id ASC', 'chunk fail result query');
    const destCount = queryScalarOrFail('SELECT COUNT(*) AS CNT FROM test_dest', 'CNT', 'chunk fail dest count');
    const watermarkCount = queryScalarOrFail(
        "SELECT COUNT(*) AS CNT FROM iris_watermark_record WHERE execution_name = 'k6_insert_chunk_fail'",
        'CNT',
        'chunk fail watermark count',
    );

    check(summary, {
        'Chunk-mode job marked as FAILED': (job) => job.status === 'FAILED',
    });
    check(destCount, {
        'Chunk-mode keeps rows committed by the first chunk': (count) => count === 3,
    });
    check(rows, {
        'Chunk-mode left first chunk rows in destination': (items) =>
            items.length === 3 && items[0].ID === 1 && items[1].ID === 2,
        'Chunk-mode rolled back the failing chunk': (items) =>
            items.length === 3 && items[2].ID === 4 && items[2].NAME === 'D_EXISTING',
    });
    check(watermarkCount, {
        'Failed chunk-mode job did not persist watermark': (count) => count === 0,
    });

    deletePipelineRunOrFail(summary.id, 'chunk pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

import { check } from 'k6';
import { singleRunOptions } from './utils/test-options.js';
import {
    configPathFor,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    queryScalarOrFail,
    runJobAndGetSummary,
} from './utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('./testfiles/job-chunk-fail.yml');
const fileName = 'job-chunk-fail.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        `INSERT INTO test_source VALUES
            (1, 'A', '2023-01-01 10:00:00'),
            (2, 'B', '2023-01-01 11:00:00'),
            (3, 'C', '2023-01-01 12:00:00'),
            (4, 'D_FAIL', '2023-01-01 13:00:00'),
            (5, 'E', '2023-01-01 14:00:00')`,
        "INSERT INTO test_dest VALUES (4, 'MALICIOUS_PK', '2023-01-01 00:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_chunk_fail'",
    ]);

    ensureConfigUploaded(filePath, fileName, yamlContent);
}

export default function () {
    const { summary } = runJobAndGetSummary(filePath);
    const firstChunkCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_dest WHERE id IN (1, 2)',
        'CNT',
        'chunk 1 commit count',
    );
    const secondChunkRow3Count = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_dest WHERE id = 3',
        'CNT',
        'chunk 2 row 3 count',
    );
    const thirdChunkCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_dest WHERE id = 5',
        'CNT',
        'chunk 3 count',
    );
    const watermarkCount = queryScalarOrFail(
        "SELECT COUNT(*) AS CNT FROM iris_watermark_record WHERE execution_name = 'k6_insert_chunk_fail'",
        'CNT',
        'chunk failure watermark count',
    );

    check(summary, {
        'Job marked as FAILED in chunk mode': (job) => job.status === 'FAILED',
    });
    check(firstChunkCount, {
        'Chunk 1 (Rows 1,2) was committed before the later failure': (count) => count === 2,
    });
    check(secondChunkRow3Count, {
        'Chunk 2 was rolled back before row 3 became visible': (count) => count === 0,
    });
    check(thirdChunkCount, {
        'Chunk 3 never executed after the chunk 2 failure': (count) => count === 0,
    });
    check(watermarkCount, {
        'No watermark was persisted for a failed CHUNK job': (count) => count === 0,
    });
}

export function teardown() {
    ensureConfigDeleted(filePath);
}

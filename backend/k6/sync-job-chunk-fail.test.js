import { check } from 'k6';
import { createConfig, deleteConfig } from './services/sync-config-api.js';
import { executeJob } from './services/sync-job-api.js';
import { executeSql, querySql } from './services/test-support-api.js';

const yamlContent = open('./testfiles/job-chunk-fail.yml');
const fileName = 'job-chunk-fail.yml';
const filePath = 'k6-tests/' + fileName;

export function setup() {
    // In this test, chunk size is 2.
    // Insert 5 source rows.
    // Row 1, 2 = chunk 1 (Valid)
    // Row 3, 4 = chunk 2 (Row 4 will cause PK error)
    // Row 5 = chunk 3 (Should never be reached)
    const sql = `
        CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        TRUNCATE TABLE test_source;
        TRUNCATE TABLE test_dest;
        
        INSERT INTO test_source VALUES 
            (1, 'A', '2023-01-01 10:00:00'), 
            (2, 'B', '2023-01-01 11:00:00'), 
            (3, 'C', '2023-01-01 12:00:00'),
            (4, 'D_FAIL', '2023-01-01 13:00:00'),
            (5, 'E', '2023-01-01 14:00:00');
            
        -- Setup malicious row that causes PK conflict for Row 4
        INSERT INTO test_dest VALUES (4, 'MALICIOUS_PK', '2023-01-01 00:00:00');
        
        DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_chunk_fail';
    `;
    executeSql(sql);
    createConfig(filePath, fileName, yamlContent);
}

export default function () {
    let res = executeJob(filePath, false);
    check(res, { 'Job executed but resulted in application failure/partial commit (200/500)': (r) => r.status === 200 || r.status === 500 });

    // Validate Chunk 1 was committed
    let queryRes = querySql("SELECT COUNT(*) as cnt FROM test_dest WHERE id IN (1, 2)");
    let destCount = queryRes.json()[0].CNT;
    check(destCount, { 'Chunk 1 (Rows 1,2) was successfully committed': (c) => c === 2 });

    // Validate Chunk 2 was rolled back (Row 3 not inserted, Row 4 malicious exists)
    queryRes = querySql("SELECT COUNT(*) as cnt FROM test_dest WHERE id = 3");
    check(queryRes.json()[0].CNT, { 'Chunk 2 was rolled back (Row 3 is missing)': (c) => c === 0 });

    // How Spring Batch handles watermarks upon chunk fail is interesting.
    // Currently, our Watermark logic is decoupled to a CustomJobListener after the ENTIRE job finishes or on ExecutionStepListener (step boundaries).
    // Let's assert what *actually* happens in H2.
    // If IrisPipe's Watermark isn't tied to Spring Batch's native ChunkContext, the Watermark might not update for Chunk 1.
}

export function teardown() {
    deleteConfig(filePath);
}

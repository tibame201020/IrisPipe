import { check } from 'k6';
import { createConfig, deleteConfig } from './services/sync-config-api.js';
import { executeJob } from './services/sync-job-api.js';
import { executeSql, querySql } from './services/test-support-api.js';

// Read payload from file
const yamlContent = open('./testfiles/job-fail.yml');
const fileName = 'job-fail.yml';
const filePath = 'k6-tests/' + fileName;

export function setup() {
    // 1. Database Setup: malicious data causing PK violation
    const sql = `
        CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        TRUNCATE TABLE test_source;
        TRUNCATE TABLE test_dest;
        INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00');
        -- Deliberately cause duplicate PK issue in the destination
        INSERT INTO test_dest VALUES (2, 'B_BAD', '2023-01-01 11:00:00');
        DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_fail';
    `;
    executeSql(sql);

    // 2. Upload Config
    createConfig(filePath, fileName, yamlContent);
}

export default function () {
    // Execute Job
    let res = executeJob(filePath, false);

    // Job execution should return the failed job object, which means API passes request but job is marked FAILED/Error
    check(res, { 'Job execution returned': (r) => r.status === 200 || r.status === 500 });

    // Verify Dest Data (Should Rollback completely back to setup state)
    let queryRes = querySql("SELECT COUNT(*) as cnt FROM test_dest");
    let destCount = queryRes.json()[0].CNT;
    check(destCount, { 'Data transaction rolled back completely (Count=1)': (c) => c === 1 });

    // Verify Watermark Record Failure (Should Rollback/Not Inserted)
    queryRes = querySql("SELECT COUNT(*) as cnt FROM iris_watermark_record WHERE execution_name = 'k6_insert_fail'");
    let wmCount = queryRes.json()[0].CNT;
    check(wmCount, { 'Watermark was NOT saved because job failed': (c) => c === 0 });
}

export function teardown() {
    deleteConfig(filePath);
}

import { check } from 'k6';
import { createConfig, deleteConfig } from './services/sync-config-api.js';
import { executeJob } from './services/sync-job-api.js';
import { executeSql, querySql } from './services/test-support-api.js';

// Read payload from file
const yamlContent = open('./testfiles/job-success.yml');
const fileName = 'job-success.yml';
const filePath = 'k6-tests/' + fileName;

export function setup() {
    // 1. Database Setup
    const sql = `
        CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        TRUNCATE TABLE test_source;
        TRUNCATE TABLE test_dest;
        INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00'), (3, 'C', '2023-01-01 12:00:00');
        DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert';
    `;
    executeSql(sql);

    // 2. Upload Config
    createConfig(filePath, fileName, yamlContent);
}

export default function () {
    // Execute Job
    let res = executeJob(filePath, false);

    check(res, { 'Job started and finished successfully (200)': (r) => r.status === 200 });
    let jobData = res.json();
    check(jobData, { 'Job marked as COMPLETED': (data) => data.length > 0 && data[0].status === 'COMPLETED' });

    // Verify Data Synced
    let queryRes = querySql("SELECT COUNT(*) as cnt FROM test_dest");
    let destCount = queryRes.json()[0].CNT;
    check(destCount, { 'All 3 rows synced to dest': (c) => c === 3 });

    // Verify Watermark Record Success
    queryRes = querySql("SELECT last_value FROM iris_watermark_record WHERE execution_name = 'k6_insert'");
    let wmRecord = queryRes.json();
    check(wmRecord, { 'Watermark advanced successfully': (r) => r.length === 1 && r[0].LAST_VALUE === '2023-01-01 12:00:00.0' });
}

export function teardown() {
    deleteConfig(filePath);
}

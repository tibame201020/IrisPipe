import { check } from 'k6';
import { createConfig, deleteConfig } from './services/sync-config-api.js';
import { executeJob } from './services/sync-job-api.js';
import { executeSql, querySql } from './services/test-support-api.js';

const yamlContent = open('./testfiles/job-no-watermark.yml');
const fileName = 'job-no-watermark.yml';
const filePath = 'k6-tests/' + fileName;

export function setup() {
    const sql = `
        CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        TRUNCATE TABLE test_source;
        TRUNCATE TABLE test_dest;
        INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00');
        DELETE FROM iris_watermark_record WHERE execution_name = 'k6_insert_no_watermark';
    `;
    executeSql(sql);
    createConfig(filePath, fileName, yamlContent);
}

export default function () {
    let res = executeJob(filePath, false);
    check(res, { 'Job started and finished successfully (200)': (r) => r.status === 200 });

    let queryRes = querySql("SELECT COUNT(*) as cnt FROM test_dest");
    let destCount = queryRes.json()[0].CNT;
    check(destCount, { 'Both rows synced to dest (No Watermark)': (c) => c === 2 });

    // Watermark Record shouldn't exist
    queryRes = querySql("SELECT COUNT(*) as cnt FROM iris_watermark_record WHERE execution_name = 'k6_insert_no_watermark'");
    let count = queryRes.json()[0].CNT;
    check(count, { 'No Watermark inserted': (c) => c === 0 });
}

export function teardown() {
    deleteConfig(filePath);
}

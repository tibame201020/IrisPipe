import { check } from 'k6';
import { createConfig, deleteConfig } from './services/sync-config-api.js';
import { executeJob } from './services/sync-job-api.js';
import { executeSql, querySql } from './services/test-support-api.js';

const yamlContent = open('./testfiles/job-multi-step.yml');
const fileName = 'job-multi-step.yml';
const filePath = 'k6-tests/' + fileName;

export function setup() {
    const sql = `
        CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP);
        TRUNCATE TABLE test_source;
        TRUNCATE TABLE test_dest;
        INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00'), (3, 'C', '2023-01-01 12:00:00');
        -- Insert pre-existing dest to test truncate
        INSERT INTO test_dest VALUES (99, 'DELETE_ME', '2023-01-01 00:00:00'); 
    `;
    executeSql(sql);
    createConfig(filePath, fileName, yamlContent);
}

export default function () {
    let res = executeJob(filePath, false);
    check(res, { 'Job started and finished successfully (200)': (r) => r.status === 200 });

    // 1. Validate Truncate occurred (No DELETE_ME)
    // 2. Validate Insert occurred (A, B, C)
    // 3. Validate Update occurred (A_UPDATED, B_UPDATED, C_UPDATED)
    // 4. Validate Delete occurred (ID 2 is gone) -> Dest should only have ID 1 and 3

    let queryRes = querySql("SELECT * FROM test_dest ORDER BY id ASC");
    let rows = queryRes.json();
    check(rows, {
        'Multi-step processed exactly 2 rows (ID 1, 3)': (r) => r.length === 2,
        'Row 1 has UPDATED suffix': (r) => r.length > 0 && r[0].NAME === 'A_UPDATED',
        'Row 2 corresponds to ID 3 with UPDATED suffix': (r) => r.length > 1 && r[1].NAME === 'C_UPDATED' && r[1].ID === 3
    });
}

export function teardown() {
    deleteConfig(filePath);
}

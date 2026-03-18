import { APIRequestContext } from '@playwright/test';
import { executeSql } from '../api/test-support-client';

export async function preparePipelineRuntimeTables(request: APIRequestContext) {
  await executeSql(
    request,
    `
    CREATE TABLE IF NOT EXISTS test_source (
      id BIGINT PRIMARY KEY,
      name VARCHAR(255),
      update_time TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS test_dest (
      id BIGINT PRIMARY KEY,
      name VARCHAR(255),
      update_time TIMESTAMP
    );
    `
  );
}

export async function seedPipelineRuntimeSourceRows(
  request: APIRequestContext,
  rows: Array<{ id: number; name: string; updateTime: string }>
) {
  await executeSql(
    request,
    `
    TRUNCATE TABLE test_dest;
    DELETE FROM test_source;
    `
  );

  if (rows.length === 0) {
    return;
  }

  const values = rows
    .map((row) => `(${row.id}, '${row.name.replace(/'/g, "''")}', TIMESTAMP '${row.updateTime}')`)
    .join(',\n');

  await executeSql(
    request,
    `
    INSERT INTO test_source (id, name, update_time)
    VALUES
    ${values};
    `
  );
}

export async function prepareStopJobRuntimeTables(request: APIRequestContext, totalRows = 500_000) {
  await executeSql(
    request,
    `
    CREATE TABLE IF NOT EXISTS test_stop_job_source_a (
      id BIGINT PRIMARY KEY,
      name VARCHAR(255),
      update_time TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS test_stop_job_dest_a (
      id BIGINT PRIMARY KEY,
      name VARCHAR(255),
      update_time TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS test_stop_job_source_b (
      id BIGINT PRIMARY KEY,
      name VARCHAR(255),
      update_time TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS test_stop_job_dest_b (
      id BIGINT PRIMARY KEY,
      name VARCHAR(255),
      update_time TIMESTAMP
    );

    TRUNCATE TABLE test_stop_job_source_a;
    TRUNCATE TABLE test_stop_job_dest_a;
    TRUNCATE TABLE test_stop_job_source_b;
    TRUNCATE TABLE test_stop_job_dest_b;

    INSERT INTO test_stop_job_source_a (id, name, update_time)
    SELECT X, 'ROW-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-01-01 00:00:00')
    FROM SYSTEM_RANGE(1, ${totalRows});

    INSERT INTO test_stop_job_source_b (id, name, update_time)
    VALUES
      (1, 'B-1', TIMESTAMP '2023-01-01 00:00:01'),
      (2, 'B-2', TIMESTAMP '2023-01-01 00:00:02'),
      (3, 'B-3', TIMESTAMP '2023-01-01 00:00:03');
    `
  );
}

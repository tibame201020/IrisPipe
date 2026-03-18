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

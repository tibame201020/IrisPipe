/**
 * Data-volume benchmark for IrisPipe.
 *
 * Validates both large-volume atomicity semantics and throughput:
 * - atomicLevel=JOB: one destination transaction for the whole job
 * - atomicLevel=CHUNK: one destination transaction per batch/chunk
 * - benchmarkMode=success: verifies all rows arrive and records rows/sec
 * - benchmarkMode=failure: injects a duplicate-key failure at the final row
 *   and verifies the expected JOB vs CHUNK rollback boundary
 * - dbPair=postgres-h2: reads from PostgreSQL and writes to H2 to exercise
 *   a real cross-database JDBC path
 */

import http from 'k6/http';
import { check } from 'k6';
import { Gauge, Trend } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://127.0.0.1:8080';
const ROW_COUNT = Number.parseInt(__ENV.ROW_COUNT || '10000', 10);
const ATOMIC_LEVEL = (__ENV.ATOMIC_LEVEL || 'JOB').toUpperCase();
const BENCHMARK_MODE = (__ENV.BENCHMARK_MODE || 'success').toLowerCase();
const DB_PAIR = (__ENV.DB_PAIR || 'h2-h2').toLowerCase();
const BATCH_SIZE = Number.parseInt(__ENV.BATCH_SIZE || '1000', 10);
const REPORT_PATH = __ENV.BENCHMARK_REPORT || 'data-volume-benchmark-report.json';

if (!Number.isInteger(ROW_COUNT) || ROW_COUNT <= 0) {
  throw new Error(`ROW_COUNT must be a positive integer, got: ${__ENV.ROW_COUNT}`);
}
if (!Number.isInteger(BATCH_SIZE) || BATCH_SIZE <= 0) {
  throw new Error(`BATCH_SIZE must be a positive integer, got: ${__ENV.BATCH_SIZE}`);
}
if (!['JOB', 'CHUNK'].includes(ATOMIC_LEVEL)) {
  throw new Error(`ATOMIC_LEVEL must be JOB or CHUNK, got: ${ATOMIC_LEVEL}`);
}
if (!['success', 'failure'].includes(BENCHMARK_MODE)) {
  throw new Error(`BENCHMARK_MODE must be success or failure, got: ${BENCHMARK_MODE}`);
}
if (!['h2-h2', 'postgres-h2'].includes(DB_PAIR)) {
  throw new Error(`DB_PAIR must be h2-h2 or postgres-h2, got: ${DB_PAIR}`);
}

const HEADERS = { 'Content-Type': 'application/json' };
const TEXT_HEADERS = { 'Content-Type': 'text/plain' };
const migrationDuration = new Trend('iris_data_migration_duration_ms', true);
const rowsPerSecond = new Trend('iris_data_rows_per_second', true);
const observedRows = new Gauge('iris_data_observed_rows');
const atomicityOk = new Gauge('iris_data_atomicity_ok');

export const options = {
  scenarios: {
    data_volume: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1,
      maxDuration: '10m',
    },
  },
  thresholds: {
    checks: ['rate==1'],
    iris_data_atomicity_ok: ['value==1'],
  },
};

function sqlExecute(sql, label) {
  const response = http.post(`${BASE_URL}/api/v1/test-support/execute`, sql, {
    headers: TEXT_HEADERS,
    timeout: '5m',
  });
  const ok = check(response, {
    [`${label}: SQL executed`]: (r) => r.status === 200,
  });
  if (!ok) {
    throw new Error(`${label} failed: HTTP ${response.status} ${response.body}`);
  }
}

function sqlScalar(sql, columnName, label) {
  const response = http.post(`${BASE_URL}/api/v1/test-support/query`, sql, {
    headers: TEXT_HEADERS,
    timeout: '5m',
  });
  const ok = check(response, {
    [`${label}: SQL query succeeded`]: (r) => r.status === 200,
  });
  if (!ok) {
    throw new Error(`${label} failed: HTTP ${response.status} ${response.body}`);
  }
  const rows = response.json();
  if (!Array.isArray(rows) || rows.length === 0 || rows[0][columnName] === undefined) {
    throw new Error(`${label} returned unexpected payload: ${response.body}`);
  }
  return Number(rows[0][columnName]);
}

function sourceDatabase() {
  if (DB_PAIR === 'postgres-h2') {
    return {
      driver: 'org.postgresql.Driver',
      url: __ENV.POSTGRES_JDBC_URL || 'jdbc:postgresql://127.0.0.1:5432/irispipe_bench',
      username: __ENV.POSTGRES_USER || 'postgres',
      password: __ENV.POSTGRES_PASSWORD || 'postgres',
    };
  }

  return {
    driver: 'org.h2.Driver',
    url: 'jdbc:h2:./h2data/data',
    username: 'sa',
    password: 'sa',
  };
}

function destinationDatabase() {
  return {
    driver: 'org.h2.Driver',
    url: 'jdbc:h2:./h2data/data',
    username: 'sa',
    password: 'sa',
  };
}

function expectedDestinationCount() {
  if (BENCHMARK_MODE === 'success') {
    return ROW_COUNT;
  }
  if (ATOMIC_LEVEL === 'JOB') {
    return 1;
  }

  // Failure is injected on the final source row. All prior full chunks remain
  // committed in CHUNK mode, while the failing chunk is rolled back. The one
  // pre-existing conflicting row stays in the destination.
  const committedRows = Math.floor((ROW_COUNT - 1) / BATCH_SIZE) * BATCH_SIZE;
  return committedRows + 1;
}

function createPipeline() {
  const payload = {
    folderId: null,
    pipelineName: `data-volume-${DB_PAIR}-${ATOMIC_LEVEL.toLowerCase()}-${BENCHMARK_MODE}-${ROW_COUNT}-${Date.now()}`,
    stages: ['stage1'],
    jobs: [
      {
        stage: 'stage1',
        stageSequenceOrder: 1,
        jobName: 'data_volume_copy',
        database: {
          source: sourceDatabase(),
          dest: destinationDatabase(),
        },
        executions: [
          {
            type: 'INSERT',
            name: `data_volume_insert_${ATOMIC_LEVEL.toLowerCase()}_${BENCHMARK_MODE}`,
            sql: 'SELECT id, name FROM benchmark_source ORDER BY id',
            destTable: 'benchmark_dest',
            parameters: null,
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
        ],
        setting: {
          fetchSize: BATCH_SIZE,
          batchSize: BATCH_SIZE,
          deleteThreshold: null,
          atomicLevel: ATOMIC_LEVEL,
        },
      },
    ],
  };

  const response = http.post(`${BASE_URL}/api/v1/sync-config`, JSON.stringify(payload), {
    headers: HEADERS,
    timeout: '2m',
  });
  const created = check(response, {
    'benchmark pipeline created': (r) => r.status === 200,
  });
  if (!created) {
    throw new Error(`Failed to create benchmark pipeline: HTTP ${response.status} ${response.body}`);
  }

  const body = response.json();
  if (!body || !Number.isInteger(body.id)) {
    throw new Error(`Unexpected sync-config response: ${response.body}`);
  }
  return body.id;
}

export function setup() {
  sqlExecute('DROP TABLE IF EXISTS benchmark_dest', 'drop destination table');
  sqlExecute('CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255))', 'create destination table');

  if (DB_PAIR === 'h2-h2') {
    sqlExecute('DROP TABLE IF EXISTS benchmark_source', 'drop source table');
    sqlExecute('CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255))', 'create source table');
    sqlExecute(
      `INSERT INTO benchmark_source (id, name) SELECT X, 'row-' || X FROM SYSTEM_RANGE(1, ${ROW_COUNT})`,
      'seed H2 source rows',
    );
  }

  if (BENCHMARK_MODE === 'failure') {
    sqlExecute(
      `INSERT INTO benchmark_dest (id, name) VALUES (${ROW_COUNT}, 'preexisting-conflict')`,
      'seed duplicate-key conflict',
    );
  }

  const sourceCount = DB_PAIR === 'h2-h2'
    ? sqlScalar('SELECT COUNT(*) AS CNT FROM benchmark_source', 'CNT', 'source row count')
    : ROW_COUNT;
  check(sourceCount, {
    'source contains requested row count': (count) => count === ROW_COUNT,
  });

  return { pipelineId: createPipeline() };
}

export default function (data) {
  const startedAt = Date.now();
  const response = http.post(
    `${BASE_URL}/api/v1/sync-pipeline`,
    JSON.stringify({ pipelineId: data.pipelineId, useAsyncLaucher: false }),
    { headers: HEADERS, timeout: '10m' },
  );
  const elapsedMs = Date.now() - startedAt;

  const requestOk = check(response, {
    'pipeline execution request returned 200': (r) => r.status === 200,
  });
  if (!requestOk) {
    throw new Error(`Pipeline execution failed at HTTP layer: ${response.status} ${response.body}`);
  }

  const summary = response.json();
  const expectedStatus = BENCHMARK_MODE === 'failure' ? 'FAILED' : 'COMPLETED';
  const statusOk = check(summary, {
    [`pipeline status is ${expectedStatus}`]: (item) => item && item.status === expectedStatus,
  });

  const actualCount = sqlScalar('SELECT COUNT(*) AS CNT FROM benchmark_dest', 'CNT', 'destination row count');
  const expectedCount = expectedDestinationCount();
  const rowsOk = check(actualCount, {
    [`destination row count matches ${ATOMIC_LEVEL} ${BENCHMARK_MODE} semantics`]: (count) => count === expectedCount,
  });

  const semanticsPassed = statusOk && rowsOk;
  atomicityOk.add(semanticsPassed ? 1 : 0);
  observedRows.add(actualCount);
  migrationDuration.add(elapsedMs);

  if (BENCHMARK_MODE === 'success' && elapsedMs > 0) {
    rowsPerSecond.add((ROW_COUNT * 1000) / elapsedMs);
  } else {
    rowsPerSecond.add(0);
  }
}

function metricValue(data, metricName, key) {
  return data.metrics?.[metricName]?.values?.[key] ?? null;
}

function round1(value) {
  return value === null || value === undefined ? null : Math.round(value * 10) / 10;
}

export function handleSummary(data) {
  const durationMs = round1(metricValue(data, 'iris_data_migration_duration_ms', 'med'));
  const throughput = round1(metricValue(data, 'iris_data_rows_per_second', 'med'));
  const actualRows = metricValue(data, 'iris_data_observed_rows', 'value');
  const semantics = metricValue(data, 'iris_data_atomicity_ok', 'value');

  const report = {
    status: semantics === 1 ? 'pass' : 'fail',
    db_pair: DB_PAIR,
    atomic_level: ATOMIC_LEVEL,
    mode: BENCHMARK_MODE,
    row_count: ROW_COUNT,
    batch_size: BATCH_SIZE,
    duration_ms: durationMs,
    rows_per_second: BENCHMARK_MODE === 'success' ? throughput : null,
    expected_destination_rows: expectedDestinationCount(),
    actual_destination_rows: actualRows,
  };

  return {
    [REPORT_PATH]: JSON.stringify(report, null, 2),
    stdout: JSON.stringify(report, null, 2),
  };
}

export function teardown(data) {
  if (data && data.pipelineId) {
    http.del(`${BASE_URL}/api/v1/sync-config/${data.pipelineId}`, null, {
      headers: HEADERS,
      timeout: '1m',
    });
  }
}

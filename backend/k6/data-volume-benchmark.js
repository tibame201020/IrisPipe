/**
 * Data-volume benchmark for IrisPipe.
 *
 * The benchmark uses a realistic three-table identity workload in one SyncJob:
 *   roles -> users -> user_roles
 * Each table is copied by a separate INSERT execution, so every run exercises
 * IrisPipe's multi-execution/multi-task orchestration as well as JDBC throughput.
 *
 * ROW_COUNT is the total logical row count across all three tables. A fixed set
 * of 16 roles is included in that total; the remaining rows are split 1:3
 * between users and user_roles. Therefore every generated user has three role
 * assignments while the advertised 1M/10M/50M scale remains the actual total
 * number of rows migrated.
 */

import http from 'k6/http';
import { check } from 'k6';
import { Gauge, Trend } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://127.0.0.1:8080';
const ROW_COUNT = Number.parseInt(__ENV.ROW_COUNT || '10000', 10);
const ROLE_COUNT = Number.parseInt(__ENV.ROLE_COUNT || '16', 10);
const ATOMIC_LEVEL = (__ENV.ATOMIC_LEVEL || 'JOB').toUpperCase();
const BENCHMARK_MODE = (__ENV.BENCHMARK_MODE || 'success').toLowerCase();
const DB_PAIR = (__ENV.DB_PAIR || 'h2-h2').toLowerCase();
const BATCH_SIZE = Number.parseInt(__ENV.BATCH_SIZE || '1000', 10);
const FETCH_SIZE = Number.parseInt(__ENV.FETCH_SIZE || __ENV.BATCH_SIZE || '1000', 10);
const BENCHMARK_PROFILE = __ENV.BENCHMARK_PROFILE || 'identity-relations-v2';
const REPORT_PATH = __ENV.BENCHMARK_REPORT || 'data-volume-benchmark-report.json';
const SETUP_TIMEOUT = __ENV.K6_SETUP_TIMEOUT || '2m';
const SCENARIO_MAX_DURATION = __ENV.K6_MAX_DURATION || '10m';
const PIPELINE_HTTP_TIMEOUT = __ENV.PIPELINE_HTTP_TIMEOUT || '10m';
const SOURCE_JDBC_DRIVER = __ENV.SOURCE_JDBC_DRIVER || '';
const SOURCE_JDBC_URL = __ENV.SOURCE_JDBC_URL || '';
const SOURCE_DB_USER = __ENV.SOURCE_DB_USER || '';
const SOURCE_DB_PASSWORD = __ENV.SOURCE_DB_PASSWORD || '';
const DEST_JDBC_DRIVER = __ENV.DEST_JDBC_DRIVER || '';
const DEST_JDBC_URL = __ENV.DEST_JDBC_URL || '';
const DEST_DB_USER = __ENV.DEST_DB_USER || '';
const DEST_DB_PASSWORD = __ENV.DEST_DB_PASSWORD || '';
const EXTERNAL_SOURCE = SOURCE_JDBC_DRIVER.length > 0 || DB_PAIR === 'postgres-h2';
const EXTERNAL_DESTINATION = DEST_JDBC_DRIVER.length > 0;

if (!Number.isInteger(ROW_COUNT) || ROW_COUNT <= ROLE_COUNT) {
  throw new Error(`ROW_COUNT must be an integer greater than ROLE_COUNT, got: ${__ENV.ROW_COUNT}`);
}
if (!Number.isInteger(ROLE_COUNT) || ROLE_COUNT <= 0) {
  throw new Error(`ROLE_COUNT must be a positive integer, got: ${__ENV.ROLE_COUNT}`);
}
if ((ROW_COUNT - ROLE_COUNT) % 4 !== 0) {
  throw new Error(`ROW_COUNT - ROLE_COUNT must be divisible by 4, got: ${ROW_COUNT} - ${ROLE_COUNT}`);
}
if (!Number.isInteger(BATCH_SIZE) || BATCH_SIZE <= 0) {
  throw new Error(`BATCH_SIZE must be a positive integer, got: ${__ENV.BATCH_SIZE}`);
}
if (!Number.isInteger(FETCH_SIZE) || FETCH_SIZE <= 0) {
  throw new Error(`FETCH_SIZE must be a positive integer, got: ${__ENV.FETCH_SIZE}`);
}
if (!['JOB', 'CHUNK'].includes(ATOMIC_LEVEL)) {
  throw new Error(`ATOMIC_LEVEL must be JOB or CHUNK, got: ${ATOMIC_LEVEL}`);
}
if (!['success', 'failure'].includes(BENCHMARK_MODE)) {
  throw new Error(`BENCHMARK_MODE must be success or failure, got: ${BENCHMARK_MODE}`);
}
if (!/^[a-z0-9]+-[a-z0-9]+$/.test(DB_PAIR)) {
  throw new Error(`DB_PAIR must use a source-destination token such as h2-h2 or postgres-postgres, got: ${DB_PAIR}`);
}
if (BENCHMARK_MODE === 'failure' && EXTERNAL_DESTINATION) {
  throw new Error('failure-mode external destinations are not supported by this benchmark harness');
}

const USER_COUNT = (ROW_COUNT - ROLE_COUNT) / 4;
const USER_ROLE_COUNT = ROW_COUNT - ROLE_COUNT - USER_COUNT;
const HEADERS = { 'Content-Type': 'application/json' };
const TEXT_HEADERS = { 'Content-Type': 'text/plain' };
const migrationDuration = new Trend('iris_data_migration_duration_ms', true);
const rowsPerSecond = new Trend('iris_data_rows_per_second', true);
const observedRows = new Gauge('iris_data_observed_rows');
const observedRoles = new Gauge('iris_data_observed_roles');
const observedUsers = new Gauge('iris_data_observed_users');
const observedUserRoles = new Gauge('iris_data_observed_user_roles');
const atomicityOk = new Gauge('iris_data_atomicity_ok');

export const options = {
  setupTimeout: SETUP_TIMEOUT,
  scenarios: {
    data_volume: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1,
      maxDuration: SCENARIO_MAX_DURATION,
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
  if (SOURCE_JDBC_DRIVER.length > 0) {
    return {
      driver: SOURCE_JDBC_DRIVER,
      url: SOURCE_JDBC_URL,
      username: SOURCE_DB_USER,
      password: SOURCE_DB_PASSWORD,
    };
  }
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
  if (EXTERNAL_DESTINATION) {
    return {
      driver: DEST_JDBC_DRIVER,
      url: DEST_JDBC_URL,
      username: DEST_DB_USER,
      password: DEST_DB_PASSWORD,
    };
  }
  return {
    driver: 'org.h2.Driver',
    url: 'jdbc:h2:./h2data/data',
    username: 'sa',
    password: 'sa',
  };
}

function relationshipForOrdinal(ordinal) {
  const userId = Math.floor((ordinal - 1) / 3) + 1;
  const slot = (ordinal - 1) % 3;
  const roleId = ((userId + slot * 5 - 1) % ROLE_COUNT) + 1;
  return { userId, roleId };
}

function expectedDestinationCounts() {
  if (BENCHMARK_MODE === 'success') {
    return {
      roles: ROLE_COUNT,
      users: USER_COUNT,
      user_roles: USER_ROLE_COUNT,
      total: ROW_COUNT,
    };
  }

  if (ATOMIC_LEVEL === 'JOB') {
    return { roles: 0, users: 0, user_roles: 1, total: 1 };
  }

  const committedUserRoles = Math.floor((USER_ROLE_COUNT - 1) / BATCH_SIZE) * BATCH_SIZE;
  const userRoleRows = committedUserRoles + 1; // plus the pre-existing conflict row
  return {
    roles: ROLE_COUNT,
    users: USER_COUNT,
    user_roles: userRoleRows,
    total: ROLE_COUNT + USER_COUNT + userRoleRows,
  };
}

function createPipeline() {
  const executionSuffix = `${ATOMIC_LEVEL.toLowerCase()}_${BENCHMARK_MODE}`;
  const payload = {
    folderId: null,
    pipelineName: `identity-volume-${DB_PAIR}-${executionSuffix}-${ROW_COUNT}-${Date.now()}`,
    stages: ['stage1'],
    jobs: [
      {
        stage: 'stage1',
        stageSequenceOrder: 1,
        jobName: 'identity_multi_table_copy',
        database: {
          source: sourceDatabase(),
          dest: destinationDatabase(),
        },
        executions: [
          {
            type: 'INSERT',
            name: `copy_roles_${executionSuffix}`,
            sql: 'SELECT id, code, name, created_at, updated_at FROM benchmark_src_roles ORDER BY id',
            destTable: 'benchmark_dst_roles',
            parameters: null,
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
          {
            type: 'INSERT',
            name: `copy_users_${executionSuffix}`,
            sql: 'SELECT id, username, email, display_name, status, locale, created_at, updated_at FROM benchmark_src_users ORDER BY id',
            destTable: 'benchmark_dst_users',
            parameters: null,
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
          {
            type: 'INSERT',
            name: `copy_user_roles_${executionSuffix}`,
            sql: 'SELECT user_id, role_id, created_at, updated_at FROM benchmark_src_user_roles ORDER BY user_id, role_id',
            destTable: 'benchmark_dst_user_roles',
            parameters: null,
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
        ],
        setting: {
          fetchSize: FETCH_SIZE,
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

function createH2DestinationTables() {
  sqlExecute('DROP TABLE IF EXISTS benchmark_dst_user_roles', 'drop destination user_roles');
  sqlExecute('DROP TABLE IF EXISTS benchmark_dst_users', 'drop destination users');
  sqlExecute('DROP TABLE IF EXISTS benchmark_dst_roles', 'drop destination roles');
  sqlExecute('CREATE TABLE benchmark_dst_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL)', 'create destination roles');
  sqlExecute('CREATE TABLE benchmark_dst_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL)', 'create destination users');
  sqlExecute('CREATE TABLE benchmark_dst_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL, PRIMARY KEY (user_id, role_id))', 'create destination user_roles');
}

function createAndSeedH2SourceTables() {
  sqlExecute('DROP TABLE IF EXISTS benchmark_src_user_roles', 'drop source user_roles');
  sqlExecute('DROP TABLE IF EXISTS benchmark_src_users', 'drop source users');
  sqlExecute('DROP TABLE IF EXISTS benchmark_src_roles', 'drop source roles');
  sqlExecute('CREATE TABLE benchmark_src_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL)', 'create source roles');
  sqlExecute('CREATE TABLE benchmark_src_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL)', 'create source users');
  sqlExecute('CREATE TABLE benchmark_src_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL, PRIMARY KEY (user_id, role_id))', 'create source user_roles');

  sqlExecute(
    `INSERT INTO benchmark_src_roles (id, code, name, created_at, updated_at)
     SELECT X, 'ROLE_' || X, 'Role ' || X, TIMESTAMP '2025-01-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00'
     FROM SYSTEM_RANGE(1, ${ROLE_COUNT})`,
    'seed H2 roles',
  );
  sqlExecute(
    `INSERT INTO benchmark_src_users (id, username, email, display_name, status, locale, created_at, updated_at)
     SELECT X,
            'user_' || X,
            'user' || X || '@example.test',
            'User ' || X,
            CASE WHEN MOD(X, 10) = 0 THEN 'SUSPENDED' WHEN MOD(X, 10) = 1 THEN 'INVITED' ELSE 'ACTIVE' END,
            CASE MOD(X, 3) WHEN 0 THEN 'zh-TW' WHEN 1 THEN 'en-US' ELSE 'ja-JP' END,
            TIMESTAMP '2025-01-01 00:00:00',
            TIMESTAMP '2026-01-01 12:00:00'
     FROM SYSTEM_RANGE(1, ${USER_COUNT})`,
    'seed H2 users',
  );
  sqlExecute(
    `INSERT INTO benchmark_src_user_roles (user_id, role_id, created_at, updated_at)
     SELECT CAST(FLOOR((X - 1) / 3) + 1 AS BIGINT),
            CAST(MOD((FLOOR((X - 1) / 3) + 1) + MOD(X - 1, 3) * 5 - 1, ${ROLE_COUNT}) + 1 AS INT),
            TIMESTAMP '2025-02-01 00:00:00',
            TIMESTAMP '2026-01-01 12:00:00'
     FROM SYSTEM_RANGE(1, ${USER_ROLE_COUNT})`,
    'seed H2 user_roles',
  );
}

function readH2DestinationCounts() {
  const roles = sqlScalar('SELECT COUNT(*) AS CNT FROM benchmark_dst_roles', 'CNT', 'destination roles count');
  const users = sqlScalar('SELECT COUNT(*) AS CNT FROM benchmark_dst_users', 'CNT', 'destination users count');
  const userRoles = sqlScalar('SELECT COUNT(*) AS CNT FROM benchmark_dst_user_roles', 'CNT', 'destination user_roles count');
  return { roles, users, user_roles: userRoles, total: roles + users + userRoles };
}

export function setup() {
  if (!EXTERNAL_DESTINATION) {
    createH2DestinationTables();
  }
  if (!EXTERNAL_SOURCE) {
    createAndSeedH2SourceTables();
  }

  if (BENCHMARK_MODE === 'failure') {
    const conflict = relationshipForOrdinal(USER_ROLE_COUNT);
    sqlExecute(
      `INSERT INTO benchmark_dst_user_roles (user_id, role_id, created_at, updated_at)
       VALUES (${conflict.userId}, ${conflict.roleId}, TIMESTAMP '2025-02-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00')`,
      'seed duplicate-key conflict in final user_role row',
    );
  }

  const sourceCount = EXTERNAL_SOURCE
    ? ROW_COUNT
    : sqlScalar(
      'SELECT (SELECT COUNT(*) FROM benchmark_src_roles) + (SELECT COUNT(*) FROM benchmark_src_users) + (SELECT COUNT(*) FROM benchmark_src_user_roles) AS CNT',
      'CNT',
      'source total row count',
    );
  check(sourceCount, {
    'source contains requested total row count': (count) => count === ROW_COUNT,
  });

  return { pipelineId: createPipeline() };
}

export default function (data) {
  const startedAt = Date.now();
  const response = http.post(
    `${BASE_URL}/api/v1/sync-pipeline`,
    JSON.stringify({ pipelineId: data.pipelineId, useAsyncLaucher: false }),
    { headers: HEADERS, timeout: PIPELINE_HTTP_TIMEOUT },
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

  const expectedCounts = expectedDestinationCounts();
  let actualCounts = null;
  let rowsOk = true;
  if (!EXTERNAL_DESTINATION) {
    actualCounts = readH2DestinationCounts();
    rowsOk = check(actualCounts, {
      [`roles count matches ${ATOMIC_LEVEL} ${BENCHMARK_MODE} semantics`]: (counts) => counts.roles === expectedCounts.roles,
      [`users count matches ${ATOMIC_LEVEL} ${BENCHMARK_MODE} semantics`]: (counts) => counts.users === expectedCounts.users,
      [`user_roles count matches ${ATOMIC_LEVEL} ${BENCHMARK_MODE} semantics`]: (counts) => counts.user_roles === expectedCounts.user_roles,
      [`total destination rows match ${ATOMIC_LEVEL} ${BENCHMARK_MODE} semantics`]: (counts) => counts.total === expectedCounts.total,
    });
  }

  const semanticsPassed = statusOk && rowsOk;
  atomicityOk.add(semanticsPassed ? 1 : 0);
  if (actualCounts !== null) {
    observedRows.add(actualCounts.total);
    observedRoles.add(actualCounts.roles);
    observedUsers.add(actualCounts.users);
    observedUserRoles.add(actualCounts.user_roles);
  }
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
  const actualRoles = metricValue(data, 'iris_data_observed_roles', 'value');
  const actualUsers = metricValue(data, 'iris_data_observed_users', 'value');
  const actualUserRoles = metricValue(data, 'iris_data_observed_user_roles', 'value');
  const semantics = metricValue(data, 'iris_data_atomicity_ok', 'value');
  const expectedCounts = expectedDestinationCounts();

  const report = {
    status: semantics === 1 ? 'pass' : 'fail',
    benchmark_profile: BENCHMARK_PROFILE,
    workload: 'users-roles-user_roles',
    execution_count: 3,
    db_pair: DB_PAIR,
    atomic_level: ATOMIC_LEVEL,
    mode: BENCHMARK_MODE,
    row_count: ROW_COUNT,
    table_rows: {
      roles: ROLE_COUNT,
      users: USER_COUNT,
      user_roles: USER_ROLE_COUNT,
    },
    fetch_size: FETCH_SIZE,
    batch_size: BATCH_SIZE,
    duration_ms: durationMs,
    rows_per_second: BENCHMARK_MODE === 'success' ? throughput : null,
    measurement_scope: 'sync_pipeline_http_call_only',
    excluded_from_duration: [
      'database_container_startup',
      'source_seed',
      'backend_startup',
      'pipeline_config_creation',
      'destination_count_verification',
      'report_publishing',
    ],
    expected_destination_rows: expectedCounts.total,
    expected_destination_rows_by_table: {
      roles: expectedCounts.roles,
      users: expectedCounts.users,
      user_roles: expectedCounts.user_roles,
    },
    actual_destination_rows: actualRows,
    actual_destination_rows_by_table: actualRows === null
      ? null
      : { roles: actualRoles, users: actualUsers, user_roles: actualUserRoles },
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

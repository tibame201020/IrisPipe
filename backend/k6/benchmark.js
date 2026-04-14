/**
 * IrisPipe k6 Benchmark
 *
 * Measures:
 *   - API response latency (p50, p95, p99) for config and runtime endpoints
 *   - End-to-end pipeline execute latency
 *   - Throughput under light concurrency
 *
 * Usage:
 *   k6 run benchmark.js --out json=benchmark-output.json
 *
 * Environment:
 *   BASE_URL  (default: http://127.0.0.1:8080)
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Counter } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://127.0.0.1:8080';
const HEADERS = { 'Content-Type': 'application/json' };

const executeLatency = new Trend('iris_execute_latency', true);
const apiListLatency = new Trend('iris_api_list_latency', true);
const apiDetailLatency = new Trend('iris_api_detail_latency', true);
const successCounter = new Counter('iris_pipeline_success');
const failCounter = new Counter('iris_pipeline_fail');

export const options = {
  scenarios: {
    api_throughput: {
      executor: 'constant-vus',
      vus: 3,
      duration: '30s',
      exec: 'apiThroughput',
    },
    execute_latency: {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 5,
      exec: 'executeLatencyScenario',
      startTime: '5s',
    },
  },
  thresholds: {
    iris_api_list_latency: ['p(95)<500'],
    iris_api_detail_latency: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

// ── Setup: seed one pipeline ──────────────────────────────────────────────

const PIPELINE_NAME = `benchmark-${Date.now()}`;

export function setup() {
  const payload = JSON.stringify({
    folderId: null,
    pipelineName: PIPELINE_NAME,
    stages: ['extract', 'load'],
    jobs: [
      {
        stage: 'extract',
        stageSequenceOrder: 1,
        jobName: 'benchmark_extract',
        database: {
          source: {
            driver: 'org.h2.Driver',
            url: 'jdbc:h2:./h2data/data',
            username: 'sa',
            password: 'sa',
          },
          dest: {
            driver: 'org.h2.Driver',
            url: 'jdbc:h2:./h2data/data',
            username: 'sa',
            password: 'sa',
          },
        },
        executions: [
          {
            type: 'EXECUTE',
            name: 'setup_table',
            sql: 'CREATE TABLE IF NOT EXISTS bench_src (id INT PRIMARY KEY)',
            destTable: null,
            parameters: null,
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
        ],
        setting: {
          fetchSize: null,
          batchSize: null,
          deleteThreshold: null,
          atomicLevel: 'JOB',
        },
      },
      {
        stage: 'load',
        stageSequenceOrder: 2,
        jobName: 'benchmark_load',
        database: {
          source: {
            driver: 'org.h2.Driver',
            url: 'jdbc:h2:./h2data/data',
            username: 'sa',
            password: 'sa',
          },
          dest: {
            driver: 'org.h2.Driver',
            url: 'jdbc:h2:./h2data/data',
            username: 'sa',
            password: 'sa',
          },
        },
        executions: [
          {
            type: 'EXECUTE',
            name: 'noop',
            sql: 'SELECT 1',
            destTable: null,
            parameters: null,
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
        ],
        setting: {
          fetchSize: null,
          batchSize: null,
          deleteThreshold: null,
          atomicLevel: 'JOB',
        },
      },
    ],
  });

  const res = http.post(`${BASE_URL}/api/v1/sync-config`, payload, { headers: HEADERS });
  check(res, { 'setup: pipeline created': (r) => r.status === 200 });

  const body = JSON.parse(res.body);
  return { pipelineId: body.id };
}

// ── Scenario: API throughput ──────────────────────────────────────────────

export function apiThroughput() {
  const listRes = http.get(`${BASE_URL}/api/v1/sync-config`, { headers: HEADERS });
  apiListLatency.add(listRes.timings.duration);
  check(listRes, { 'list pipelines: 200': (r) => r.status === 200 });

  const recentRes = http.get(`${BASE_URL}/api/v1/sync-pipeline/recent?limit=10`, { headers: HEADERS });
  apiDetailLatency.add(recentRes.timings.duration);
  check(recentRes, { 'recent runs: 200': (r) => r.status === 200 });

  sleep(0.5);
}

// ── Scenario: execute latency ─────────────────────────────────────────────

export function executeLatencyScenario(data) {
  const start = Date.now();

  const execRes = http.post(
    `${BASE_URL}/api/v1/sync-pipeline`,
    JSON.stringify({ pipelineId: data.pipelineId, useAsyncLaucher: false }),
    { headers: HEADERS },
  );

  check(execRes, { 'execute: 200': (r) => r.status === 200 });
  if (execRes.status !== 200) {
    failCounter.add(1);
    return;
  }

  const runId = JSON.parse(execRes.body).id;

  // poll until terminal
  for (let i = 0; i < 60; i++) {
    const detail = http.get(`${BASE_URL}/api/v1/sync-pipeline/${runId}`, { headers: HEADERS });
    const body = JSON.parse(detail.body);
    if (['COMPLETED', 'FAILED', 'STOPPED'].includes(body.status)) {
      const elapsed = Date.now() - start;
      executeLatency.add(elapsed);
      if (body.status === 'COMPLETED') successCounter.add(1);
      else failCounter.add(1);
      break;
    }
    sleep(1);
  }
}

// ── Teardown ──────────────────────────────────────────────────────────────

export function teardown(data) {
  http.del(`${BASE_URL}/api/v1/sync-config/${data.pipelineId}`, null, { headers: HEADERS });
}

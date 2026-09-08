## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **70 ms** |
| Execute latency p95 | **142.4 ms** |
| Execute latency p99 | **151.7 ms** |
| API latency p50 | **4.2 ms** |
| API latency p95 | **12.9 ms** |
| HTTP throughput | **11.9 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Batch | Duration | Throughput |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 471 ms | 2123.1 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 687 ms | 14556 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 1461 ms | 68446.3 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 349 ms | 2865.3 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 659 ms | 15174.5 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1880 ms | 53191.5 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 1074 ms | 9311 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1021 ms | 9794.3 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,001 | 9,001 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.

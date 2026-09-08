## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **69 ms** |
| Execute latency p95 | **137.8 ms** |
| Execute latency p99 | **151.6 ms** |
| API latency p50 | **4.1 ms** |
| API latency p95 | **12.4 ms** |
| HTTP throughput | **11.9 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Batch | Txn groups | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1 | 358 ms | 2793.3 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 10 | 694 ms | 14409.2 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 100 | 1569 ms | 63734.9 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1 | 486 ms | 2057.6 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1 | 707 ms | 14144.3 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1 | 1254 ms | 79744.8 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 10 | 1089 ms | 9182.7 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1 | 1024 ms | 9765.6 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,001 | 9,001 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.

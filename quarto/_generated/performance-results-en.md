## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **69 ms** |
| Execute latency p95 | **112.2 ms** |
| Execute latency p99 | **120 ms** |
| API latency p50 | **3 ms** |
| API latency p95 | **11 ms** |
| HTTP throughput | **11.9 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Batch | Duration | Throughput |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 380 ms | 2631.6 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 527 ms | 18975.3 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 1758 ms | 56882.8 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 580 ms | 1724.1 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 544 ms | 18382.4 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1382 ms | 72358.9 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 895 ms | 11173.2 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 894 ms | 11185.7 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,001 | 9,001 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.

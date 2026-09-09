## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **69 ms** |
| Execute latency p95 | **141.2 ms** |
| Execute latency p99 | **151.4 ms** |
| API latency p50 | **4.2 ms** |
| API latency p95 | **12.1 ms** |
| HTTP throughput | **11.8 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Batch | Txn groups | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1 | 378 ms | 2645.5 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 10 | 715 ms | 13986 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 100 | 1530 ms | 65359.5 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1 | 434 ms | 2304.1 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1 | 654 ms | 15290.5 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1 | 1735 ms | 57636.9 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 10 | 1031 ms | 9699.3 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1 | 934 ms | 10706.6 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,001 | 9,001 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.

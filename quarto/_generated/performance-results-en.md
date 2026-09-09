## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **86 ms** |
| Execute latency p95 | **160.4 ms** |
| Execute latency p99 | **174.5 ms** |
| API latency p50 | **5.1 ms** |
| API latency p95 | **12.3 ms** |
| HTTP throughput | **11.8 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Batch | Txn groups | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1 | 318 ms | 3144.7 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 10 | 676 ms | 14792.9 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 100 | 1565 ms | 63897.8 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1 | 442 ms | 2262.4 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1 | 624 ms | 16025.6 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1 | 1771 ms | 56465.3 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 10 | 812 ms | 12315.3 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1 | 1094 ms | 9140.8 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,001 | 9,001 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.

## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **85 ms** |
| Execute latency p95 | **162 ms** |
| Execute latency p99 | **170.8 ms** |
| API latency p50 | **4.4 ms** |
| API latency p95 | **12 ms** |
| HTTP throughput | **11.8 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Fetch | Batch | Txn groups | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1,000 | 3 | 495 ms | 2020.2 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 579 ms | 17271.2 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 1,000 | 101 | 2213 ms | 45187.5 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1,000 | 1 | 456 ms | 2193 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 618 ms | 16181.2 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1,000 | 1 | 2388 ms | 41876 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 1384 ms | 7225.4 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 1415 ms | 7067.1 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,513 | 9,513 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case pre-seeds the composite key of the final user_role row: JOB must roll back all three roles/users/user_roles executions; CHUNK preserves completed tasks and committed chunks and rolls back only the failing chunk.

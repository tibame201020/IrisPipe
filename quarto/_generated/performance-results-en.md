## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **82 ms** |
| Execute latency p95 | **162.6 ms** |
| Execute latency p99 | **175.7 ms** |
| API latency p50 | **4.5 ms** |
| API latency p95 | **12.5 ms** |
| HTTP throughput | **11.9 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Fetch | Batch | Txn groups | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1,000 | 3 | 502 ms | 1992 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 643 ms | 15552.1 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 1,000 | 101 | 1981 ms | 50479.6 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1,000 | 1 | 444 ms | 2252.3 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 653 ms | 15313.9 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1,000 | 1 | 2239 ms | 44662.8 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 1508 ms | 6631.3 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 1176 ms | 8503.4 rows/s |

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,513 | 9,513 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

The failure case pre-seeds the composite key of the final user_role row: JOB must roll back all three roles/users/user_roles executions; CHUNK preserves completed tasks and committed chunks and rolls back only the failing chunk.

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

No identity-relations-v2 data-volume result has been published yet; legacy single-table results are not mixed into the current numbers.

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

No identity-relations-v2 failure-semantics result has been published yet.

The failure case pre-seeds the composite key of the final user_role row: JOB must roll back all three roles/users/user_roles executions; CHUNK preserves completed tasks and committed chunks and rolls back only the failing chunk.

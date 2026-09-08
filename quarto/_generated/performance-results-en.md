## Latest k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **56 ms** |
| Execute latency p95 | **106 ms** |
| Execute latency p99 | **112.4 ms** |
| API latency p50 | **5.1 ms** |
| API latency p95 | **11.1 ms** |
| HTTP throughput | **11.9 req/s** |

_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._

::: {.callout-note}
These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.
:::

---

## Large-volume Atomic JOB / CHUNK Benchmark

No data-volume benchmark result has been published yet.

The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.

### Large-volume failure-semantics verification

No large-volume failure-semantics result has been published yet.

The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.

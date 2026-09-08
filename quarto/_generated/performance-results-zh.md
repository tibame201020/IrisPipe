## 最新 k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **56 ms** |
| Execute latency p95 | **106 ms** |
| Execute latency p99 | **112.4 ms** |
| API latency p50 | **5.1 ms** |
| API latency p95 | **11.1 ms** |
| HTTP throughput | **11.9 req/s** |

來源：`quarto/performance-results.json`，由 `k6 Benchmark` GitHub Actions workflow 更新。

::: {.callout-note}
這些數字是 GitHub Actions CI runner 上的可重複 benchmark，用於 regression tracking 與技術展示，不是 production capacity claim。
:::

---

## 大筆資料 Atomic JOB / CHUNK Benchmark

尚未產生 data-volume benchmark 結果。

此矩陣比較不同資料量下 JOB（整個 Job 單一交易）與 CHUNK（逐批提交）的 CI runner 表現。

### 大筆資料失敗語意驗證

尚未產生 large-volume failure semantics 結果。

失敗案例會在最後一筆製造 duplicate key：JOB 應回滾整個 Job；CHUNK 應保留先前已提交的 chunks，並只回滾失敗 chunk。

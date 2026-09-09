## 最新 k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **69 ms** |
| Execute latency p95 | **141.2 ms** |
| Execute latency p99 | **151.4 ms** |
| API latency p50 | **4.2 ms** |
| API latency p95 | **12.1 ms** |
| HTTP throughput | **11.8 req/s** |

來源：`quarto/performance-results.json`，由 `k6 Benchmark` GitHub Actions workflow 更新。

::: {.callout-note}
這些數字是 GitHub Actions CI runner 上的可重複 benchmark，用於 regression tracking 與技術展示，不是 production capacity claim。
:::

---

## 大筆資料 Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | 每批筆數 | 交易群組 | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1 | 378 ms | 2645.5 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 10 | 715 ms | 13986 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 100 | 1530 ms | 65359.5 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1 | 434 ms | 2304.1 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1 | 654 ms | 15290.5 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1 | 1735 ms | 57636.9 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 10 | 1031 ms | 9699.3 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1 | 934 ms | 10706.6 rows/s |

此矩陣比較不同資料量下 JOB（整個 Job 單一交易）與 CHUNK（逐批提交）的 CI runner 表現。

### 大筆資料失敗語意驗證

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,001 | 9,001 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

失敗案例會在最後一筆製造 duplicate key：JOB 應回滾整個 Job；CHUNK 應保留先前已提交的 chunks，並只回滾失敗 chunk。

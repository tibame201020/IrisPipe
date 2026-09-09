## 最新 k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **85 ms** |
| Execute latency p95 | **162 ms** |
| Execute latency p99 | **170.8 ms** |
| API latency p50 | **4.4 ms** |
| API latency p95 | **12 ms** |
| HTTP throughput | **11.8 req/s** |

來源：`quarto/performance-results.json`，由 `k6 Benchmark` GitHub Actions workflow 更新。

::: {.callout-note}
這些數字是 GitHub Actions CI runner 上的可重複 benchmark，用於 regression tracking 與技術展示，不是 production capacity claim。
:::

---

## 大筆資料 Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Fetch | Batch | 交易群組 | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1,000 | 3 | 495 ms | 2020.2 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 579 ms | 17271.2 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 1,000 | 101 | 2213 ms | 45187.5 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1,000 | 1 | 456 ms | 2193 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 618 ms | 16181.2 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1,000 | 1 | 2388 ms | 41876 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 1384 ms | 7225.4 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 1415 ms | 7067.1 rows/s |

此矩陣比較不同資料量下 JOB（整個 Job 單一交易）與 CHUNK（逐批提交）的 CI runner 表現。

### 大筆資料失敗語意驗證

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,513 | 9,513 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

失敗案例會在最後一筆 user_role 預先建立相同 composite key：JOB 應回滾 roles/users/user_roles 三個 executions；CHUNK 則保留先前完成的 tasks 與已提交 chunks，只回滾失敗 chunk。

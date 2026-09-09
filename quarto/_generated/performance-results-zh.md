## 最新 k6 Performance Snapshot

| Metric | Latest CI value |
|---|---:|
| Execute latency p50 | **60 ms** |
| Execute latency p95 | **214.8 ms** |
| Execute latency p99 | **243 ms** |
| API latency p50 | **4.2 ms** |
| API latency p95 | **12.7 ms** |
| HTTP throughput | **11.9 req/s** |

來源：`quarto/performance-results.json`，由 `k6 Benchmark` GitHub Actions workflow 更新。

::: {.callout-note}
這些數字是 GitHub Actions CI runner 上的可重複 benchmark，用於 regression tracking 與技術展示，不是 production capacity claim。
:::

---

## 大筆資料 Atomic JOB / CHUNK Benchmark

| DB path | Atomicity | Rows | Fetch | Batch | 交易群組 | Duration | Throughput |
|---|---|---:|---:|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 1,000 | 1,000 | 1,000 | 3 | 430 ms | 2325.6 rows/s |
| H2 → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 811 ms | 12330.5 rows/s |
| H2 → H2 | CHUNK | 100,000 | 1,000 | 1,000 | 101 | 2235 ms | 44742.7 rows/s |
| H2 → H2 | JOB | 1,000 | 1,000 | 1,000 | 1 | 374 ms | 2673.8 rows/s |
| H2 → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 678 ms | 14749.3 rows/s |
| H2 → H2 | JOB | 100,000 | 1,000 | 1,000 | 1 | 2232 ms | 44802.9 rows/s |
| PostgreSQL → H2 | CHUNK | 10,000 | 1,000 | 1,000 | 12 | 1122 ms | 8912.7 rows/s |
| PostgreSQL → H2 | JOB | 10,000 | 1,000 | 1,000 | 1 | 1095 ms | 9132.4 rows/s |

此矩陣比較不同資料量下 JOB（整個 Job 單一交易）與 CHUNK（逐批提交）的 CI runner 表現。

### 大筆資料失敗語意驗證

| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |
|---|---|---:|---:|---:|---:|
| H2 → H2 | CHUNK | 10,000 | 9,513 | 9,513 | **PASS** |
| H2 → H2 | JOB | 10,000 | 1 | 1 | **PASS** |

失敗案例會在最後一筆 user_role 預先建立相同 composite key：JOB 應回滾 roles/users/user_roles 三個 executions；CHUNK 則保留先前完成的 tasks 與已提交 chunks，只回滾失敗 chunk。

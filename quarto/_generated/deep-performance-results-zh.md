## 深度資料量 Benchmark

此表由排程／手動 deep benchmark 產生；屬 GitHub-hosted runner regression data，不是 production capacity claim。

| DB | Atomic | Rows | 每批筆數 | 交易群組 | Duration | Rows/s | Status |
|---|---|---:|---:|---:|---:|---:|---|
| h2-h2 | CHUNK | 100k | 5,000 | 20 | 1.56s | 64,061.5 | PASS |
| h2-h2 | CHUNK | 1M | 5,000 | 200 | 5.72s | 174,825.2 | PASS |
| h2-h2 | CHUNK | 10M | 5,000 | 2,000 | 38.72s | 258,264.5 | PASS |
| h2-h2 | CHUNK | 20M | 5,000 | 4,000 | 87.00s | 229,877.1 | PASS |
| h2-h2 | CHUNK | 50M | 5,000 | 10,000 | 203.28s | 245,961.3 | PASS |
| h2-h2 | JOB | 100k | 5,000 | 1 | 1.20s | 83,402.8 | PASS |
| h2-h2 | JOB | 1M | 5,000 | 1 | 5.40s | 185,253.8 | PASS |
| h2-h2 | JOB | 10M | 5,000 | 1 | 42.27s | 236,602.4 | PASS |
| h2-h2 | JOB | 20M | 5,000 | 1 | 81.55s | 245,245.3 | PASS |
| h2-h2 | JOB | 50M | 5,000 | 1 | 214.92s | 232,643.6 | PASS |
| postgres-h2 | CHUNK | 1M | 5,000 | 200 | 4.77s | 209,731.5 | PASS |
| postgres-h2 | CHUNK | 10M | 5,000 | 2,000 | 41.90s | 238,692.0 | PASS |
| postgres-h2 | JOB | 1M | 5,000 | 1 | 5.41s | 185,013.9 | PASS |
| postgres-h2 | JOB | 10M | 5,000 | 1 | 45.21s | 221,209.6 | PASS |

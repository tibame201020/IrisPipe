## 深度資料量 Benchmark

此表由排程／手動 deep benchmark 產生；屬 GitHub-hosted runner regression data，不是 production capacity claim。

| DB | Atomic | Rows | Duration | Rows/s | Status |
|---|---|---:|---:|---:|---|
| h2-h2 | CHUNK | 100k | 1.46s | 68,493.2 | PASS |
| h2-h2 | CHUNK | 1M | 5.29s | 188,928.8 | PASS |
| h2-h2 | CHUNK | 10M | 30.32s | 329,815.3 | PASS |
| h2-h2 | CHUNK | 20M | 78.15s | 255,931.2 | PASS |
| h2-h2 | CHUNK | 50M | - | - | FAIL |
| h2-h2 | JOB | 100k | 1.19s | 84,104.3 | PASS |
| h2-h2 | JOB | 1M | 4.14s | 241,721.1 | PASS |
| h2-h2 | JOB | 10M | 43.40s | 230,425.4 | PASS |
| h2-h2 | JOB | 20M | 81.75s | 244,648.3 | PASS |
| h2-h2 | JOB | 50M | - | - | FAIL |
| postgres-h2 | CHUNK | 1M | 6.45s | 155,062.8 | PASS |
| postgres-h2 | CHUNK | 10M | 40.88s | 244,606.4 | PASS |
| postgres-h2 | JOB | 1M | 6.12s | 163,345.3 | PASS |
| postgres-h2 | JOB | 10M | 39.85s | 250,909.5 | PASS |

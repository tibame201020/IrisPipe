## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T22:45:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,99.2 444.9,74.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.1 444.9,159.3 700.0,171.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.1" r="4" fill="#198754"/><circle cx="444.9" cy="159.3" r="4" fill="#198754"/><circle cx="700.0" cy="171.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.9 444.9,222.3 700.0,131.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="131.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.2 444.9,78.6 700.0,67.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="78.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="67.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,196.3 444.9,186.1 700.0,198.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="196.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="186.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.1 444.9,84.0 700.0,81.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.1" r="4" fill="#20c997"/><circle cx="444.9" cy="84.0" r="4" fill="#20c997"/><circle cx="700.0" cy="81.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.04s | 110,643.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.89s | 122,112.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.74s | 127,963.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,429.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.30s | 82,442.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 653.53s | 76,508.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.53s | 51,195.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.04s | 52,899.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 523.25s | 95,557.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,090.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.12s | 120,303.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.58s | 125,760.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.36s | 65,087.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 143.12s | 69,872.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 782.73s | 63,879.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.16s | 75,959.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.92s | 117,763.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 419.92s | 119,071.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,141.8 444.9,105.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="141.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.5 444.9,205.2 700.0,206.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="206.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.5 444.9,235.3 700.0,243.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.4 444.9,123.7 700.0,134.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.8 444.9,217.3 700.0,225.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.9 444.9,138.6 700.0,113.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.9" r="4" fill="#20c997"/><circle cx="444.9" cy="138.6" r="4" fill="#20c997"/><circle cx="700.0" cy="113.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.78s | 113,921.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.75s | 135,593.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 310.86s | 160,846.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.07s | 66,339.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.63s | 76,550.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 660.60s | 75,689.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.06s | 41,567.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.04s | 58,808.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 926.41s | 53,971.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.77s | 102,396.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.26s | 124,590.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 423.60s | 118,037.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.44s | 51,448.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 144.09s | 69,400.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 775.94s | 64,438.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.84s | 77,899.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.34s | 115,822.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.01s | 130,546.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T22:36:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.5 444.9,138.1 700.0,146.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.4 444.9,204.0 700.0,159.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#198754"/><circle cx="444.9" cy="204.0" r="4" fill="#198754"/><circle cx="700.0" cy="159.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.8 444.9,238.4 700.0,234.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.4 444.9,115.6 700.0,131.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,241.0 700.0,233.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,126.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="126.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.25s | 97,522.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.57s | 119,663.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 435.85s | 114,718.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.75s | 67,801.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.64s | 79,593.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 467.96s | 106,845.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.87s | 53,005.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.37s | 58,696.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 816.83s | 61,212.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.42s | 134,698.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.00s | 133,328.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.82s | 123,512.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.19s | 52,102.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.07s | 57,118.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 813.71s | 61,447.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.86s | 77,742.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.94s | 126,681.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 301.65s | 165,757.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">177k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">235k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,209.0 444.9,119.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="119.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.4 444.9,206.2 700.0,233.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.4" r="4" fill="#198754"/><circle cx="444.9" cy="206.2" r="4" fill="#198754"/><circle cx="700.0" cy="233.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,285.8 444.9,253.2 700.0,261.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="285.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,197.1 444.9,176.8 700.0,168.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="176.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="168.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.5 444.9,265.5 700.0,261.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="261.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.9 444.9,171.7 700.0,157.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.9" r="4" fill="#20c997"/><circle cx="444.9" cy="171.7" r="4" fill="#20c997"/><circle cx="700.0" cy="157.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.11s | 98,902.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.23s | 168,822.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 233.61s | 214,032.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.62s | 86,021.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 98.92s | 101,091.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 627.34s | 79,701.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.89s | 38,623.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 155.76s | 64,201.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 870.50s | 57,438.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.24s | 108,213.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.54s | 124,166.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.76s | 130,629.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.63s | 63,963.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 183.45s | 54,509.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 864.20s | 57,857.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,333.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.03s | 128,150.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 359.04s | 139,259.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T23:00:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,76.9 444.9,79.5 700.0,102.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="76.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.9 444.9,172.6 700.0,136.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#198754"/><circle cx="444.9" cy="172.6" r="4" fill="#198754"/><circle cx="700.0" cy="136.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,154.6 444.9,196.5 700.0,202.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="196.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="202.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.9 444.9,68.5 700.0,92.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.6 444.9,216.7 700.0,150.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="150.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,102.7 444.9,99.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="102.7" r="4" fill="#20c997"/><circle cx="444.9" cy="99.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.37s | 106,780.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 94.60s | 105,710.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 520.10s | 96,136.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.49s | 64,570.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 148.86s | 67,178.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.10s | 82,087.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.40s | 74,615.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.52s | 57,301.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 913.68s | 54,723.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,087.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.70s | 110,254.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 499.29s | 100,142.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.70s | 46,089.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 204.39s | 48,926.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.47s | 76,514.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.41s | 96,098.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 102.55s | 97,510.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 443.13s | 112,833.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,91.5 444.9,69.7 700.0,83.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="91.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="83.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.4 444.9,170.9 700.0,167.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.4" r="4" fill="#198754"/><circle cx="444.9" cy="170.9" r="4" fill="#198754"/><circle cx="700.0" cy="167.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.1 444.9,208.2 700.0,219.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.5 444.9,86.7 700.0,110.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="86.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,211.8 700.0,217.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.4 444.9,62.3 700.0,92.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="92.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.28s | 107,805.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.14s | 117,450.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 449.73s | 111,178.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,127.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.60s | 72,672.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 673.82s | 74,204.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.96s | 45,539.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.13s | 56,138.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 973.30s | 51,371.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,413.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.96s | 109,934.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 502.96s | 99,411.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.67s | 44,107.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 183.35s | 54,539.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 961.64s | 51,994.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 16.30s | 61,361.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.81s | 120,752.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 465.27s | 107,464.7 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T22:47:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,117.4 444.9,112.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.7 444.9,146.3 700.0,134.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.7" r="4" fill="#198754"/><circle cx="444.9" cy="146.3" r="4" fill="#198754"/><circle cx="700.0" cy="134.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.0 444.9,212.9 700.0,232.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.1 444.9,121.1 700.0,119.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,184.3 444.9,231.0 700.0,220.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="184.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,148.8 444.9,86.6 700.0,97.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#20c997"/><circle cx="444.9" cy="86.6" r="4" fill="#20c997"/><circle cx="700.0" cy="97.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.47s | 118,008.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.02s | 120,458.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 338.11s | 147,879.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.72s | 67,939.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 97.75s | 102,303.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 459.87s | 108,726.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,053.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 151.01s | 66,219.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.52s | 55,585.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.83s | 113,263.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.23s | 115,970.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 426.86s | 117,133.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.24s | 81,692.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.40s | 56,370.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 805.44s | 62,077.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.91s | 100,948.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.26s | 134,669.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.44s | 129,051.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.8 444.9,134.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.4 444.9,203.0 700.0,175.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.4" r="4" fill="#198754"/><circle cx="444.9" cy="203.0" r="4" fill="#198754"/><circle cx="700.0" cy="175.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.4 444.9,253.0 700.0,244.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.9 444.9,147.6 700.0,144.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.3 444.9,175.6 700.0,244.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="175.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.6 444.9,146.3 700.0,136.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#20c997"/><circle cx="444.9" cy="146.3" r="4" fill="#20c997"/><circle cx="700.0" cy="136.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.07s | 110,277.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.96s | 129,934.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 283.01s | 176,672.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.19s | 65,832.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.96s | 85,497.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 483.05s | 103,510.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.97s | 62,605.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.25s | 53,119.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 854.58s | 58,508.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.21s | 121,832.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.38s | 121,390.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.71s | 123,241.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.61s | 51,002.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 96.86s | 103,238.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.50s | 58,651.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.51s | 68,899.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.82s | 122,219.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.37s | 128,413.2 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T22:39:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,187.5 444.9,62.3 700.0,122.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.9 444.9,184.1 700.0,193.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#198754"/><circle cx="444.9" cy="184.1" r="4" fill="#198754"/><circle cx="700.0" cy="193.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.3 444.9,231.2 700.0,230.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,176.9 444.9,112.2 700.0,110.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="176.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="112.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.3 444.9,184.1 700.0,233.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="184.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.4 444.9,114.4 700.0,102.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.4" r="4" fill="#20c997"/><circle cx="444.9" cy="114.4" r="4" fill="#20c997"/><circle cx="700.0" cy="102.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.73s | 85,244.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.43s | 157,659.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 406.57s | 122,980.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.40s | 74,610.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.61s | 87,248.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.57s | 82,025.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.70s | 46,091.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 166.62s | 60,016.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 830.18s | 60,227.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.94s | 91,407.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.66s | 128,769.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 384.87s | 129,913.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.94s | 50,145.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 114.64s | 87,230.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 849.91s | 58,829.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.23s | 65,647.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.42s | 127,512.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.73s | 134,506.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.0 444.9,62.3 700.0,110.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="110.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.0 444.9,198.4 700.0,202.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#198754"/><circle cx="444.9" cy="198.4" r="4" fill="#198754"/><circle cx="700.0" cy="202.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.5 444.9,237.8 700.0,242.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,137.2 444.9,117.0 700.0,103.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="137.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.7 444.9,237.5 700.0,237.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,246.3 444.9,132.3 700.0,105.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#20c997"/><circle cx="444.9" cy="132.3" r="4" fill="#20c997"/><circle cx="700.0" cy="105.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.65s | 103,626.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.08s | 169,267.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 358.23s | 139,576.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.95s | 62,688.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 117.92s | 84,801.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 609.64s | 82,015.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.63s | 46,223.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 165.83s | 60,303.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 873.10s | 57,267.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.14s | 122,774.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.92s | 135,288.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 348.31s | 143,549.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.31s | 49,246.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.24s | 60,517.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 828.05s | 60,382.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.17s | 55,038.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.49s | 125,805.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 351.25s | 142,346.7 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T22:45:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.8 444.9,111.8 700.0,96.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="96.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.2 444.9,175.7 700.0,159.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#198754"/><circle cx="444.9" cy="175.7" r="4" fill="#198754"/><circle cx="700.0" cy="159.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.3 444.9,237.4 700.0,195.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.2 444.9,68.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,203.2 444.9,190.8 700.0,159.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="190.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.6 444.9,64.1 700.0,68.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.6" r="4" fill="#20c997"/><circle cx="444.9" cy="64.1" r="4" fill="#20c997"/><circle cx="700.0" cy="68.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,253.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 92.09s | 108,587.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 430.79s | 116,065.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.60s | 64,110.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.08s | 77,473.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 585.64s | 85,376.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.71s | 42,174.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 210.75s | 47,449.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 737.09s | 67,834.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,694.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.13s | 129,646.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 376.91s | 132,657.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.60s | 64,110.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 142.59s | 70,130.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 585.91s | 85,337.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.79s | 84,839.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.90s | 131,750.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 386.31s | 129,430.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,190.3 444.9,62.3 700.0,89.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.1 444.9,219.1 700.0,216.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#198754"/><circle cx="444.9" cy="219.1" r="4" fill="#198754"/><circle cx="700.0" cy="216.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,278.7 444.9,271.6 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="278.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,184.8 444.9,147.9 700.0,127.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.0 444.9,243.0 700.0,245.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,163.9 444.9,150.0 700.0,129.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="163.9" r="4" fill="#20c997"/><circle cx="444.9" cy="150.0" r="4" fill="#20c997"/><circle cx="700.0" cy="129.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.77s | 92,824.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.16s | 174,953.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 317.82s | 157,323.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.42s | 60,905.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.46s | 74,369.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 659.27s | 75,841.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.67s | 36,137.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 245.90s | 40,666.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 900.77s | 55,507.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.38s | 96,339.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.33s | 120,000.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 376.08s | 132,951.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.98s | 41,697.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.38s | 59,038.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 865.92s | 57,741.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,745.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.28s | 118,656.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.12s | 131,885.1 | PASS |

:::

:::

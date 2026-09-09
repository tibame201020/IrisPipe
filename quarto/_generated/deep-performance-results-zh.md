## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T22:11:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,128.3 444.9,90.8 700.0,92.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,158.6 700.0,131.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="158.6" r="4" fill="#198754"/><circle cx="700.0" cy="131.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.9 444.9,218.4 700.0,213.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,80.8 444.9,80.2 700.0,79.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="80.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="79.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.5 444.9,211.1 700.0,181.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="181.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.7 444.9,100.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.7" r="4" fill="#20c997"/><circle cx="444.9" cy="100.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.80s | 101,999.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.99s | 120,493.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.39s | 119,505.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.72s | 67,916.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.91s | 87,026.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 497.01s | 100,600.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.25s | 49,390.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.89s | 57,507.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 835.42s | 59,850.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.97s | 125,391.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.54s | 125,719.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 396.51s | 126,100.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.07s | 66,352.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.56s | 61,137.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 660.55s | 75,694.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.33s | 81,076.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.27s | 115,913.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.60s | 134,552.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,113.4 700.0,76.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.7 444.9,193.1 700.0,192.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#198754"/><circle cx="444.9" cy="193.1" r="4" fill="#198754"/><circle cx="700.0" cy="192.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.9 444.9,239.2 700.0,218.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.6 444.9,119.6 700.0,146.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="119.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.6 444.9,221.3 700.0,217.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.5 444.9,127.6 700.0,102.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.5" r="4" fill="#20c997"/><circle cx="444.9" cy="127.6" r="4" fill="#20c997"/><circle cx="700.0" cy="102.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.80s | 146,950.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.75s | 119,403.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 358.84s | 139,339.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.70s | 68,050.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.75s | 76,478.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 652.91s | 76,580.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.92s | 52,856.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.66s | 51,637.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 796.36s | 62,785.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.34s | 96,674.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.16s | 116,057.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 492.85s | 101,451.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.09s | 49,785.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.16s | 61,289.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 789.63s | 63,320.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.40s | 74,638.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 89.48s | 111,758.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.33s | 125,208.8 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T22:04:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,143.5 444.9,108.4 700.0,102.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="143.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.8 444.9,184.7 700.0,172.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.8" r="4" fill="#198754"/><circle cx="444.9" cy="184.7" r="4" fill="#198754"/><circle cx="700.0" cy="172.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.9 444.9,221.5 700.0,228.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.4 444.9,101.1 700.0,87.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.0 444.9,229.8 700.0,191.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.3 444.9,62.3 700.0,82.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="82.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.93s | 100,725.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.88s | 119,212.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 407.83s | 122,600.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.72s | 85,309.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.48s | 79,065.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 582.99s | 85,764.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.00s | 52,645.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.45s | 59,717.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 890.41s | 56,153.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.97s | 100,250.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.28s | 123,034.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.56s | 130,356.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.02s | 52,581.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.70s | 55,339.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 661.65s | 75,568.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.62s | 79,264.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.70s | 143,474.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.42s | 132,830.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.7 444.9,93.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.0 444.9,173.6 700.0,178.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#198754"/><circle cx="444.9" cy="173.6" r="4" fill="#198754"/><circle cx="700.0" cy="178.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.4 444.9,264.1 700.0,231.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.2 444.9,175.4 700.0,121.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="175.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.4 444.9,225.7 700.0,229.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.9 444.9,138.7 700.0,102.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#20c997"/><circle cx="444.9" cy="138.7" r="4" fill="#20c997"/><circle cx="700.0" cy="102.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,791.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.57s | 130,592.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 339.16s | 147,424.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.80s | 67,572.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.58s | 87,272.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 590.70s | 84,645.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 30.54s | 32,746.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 260.89s | 38,329.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 896.02s | 55,802.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,854.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 115.89s | 86,285.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 433.87s | 115,243.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,734.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.28s | 59,075.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 875.48s | 57,111.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.57s | 79,535.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 94.26s | 106,085.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.29s | 125,536.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T11:07:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.8 444.9,78.5 700.0,95.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.8 444.9,156.7 700.0,129.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.8" r="4" fill="#198754"/><circle cx="444.9" cy="156.7" r="4" fill="#198754"/><circle cx="700.0" cy="129.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.1 444.9,219.9 700.0,206.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.0 444.9,73.2 700.0,83.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="83.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.0 444.9,195.0 700.0,186.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.9 444.9,98.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#20c997"/><circle cx="444.9" cy="98.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.19s | 89,333.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.63s | 104,570.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 511.23s | 97,804.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.90s | 59,182.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.60s | 72,671.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 595.36s | 83,983.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.12s | 49,696.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.13s | 46,918.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 956.65s | 52,265.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,837.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.70s | 106,723.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 487.43s | 102,578.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 27.88s | 35,869.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.19s | 57,082.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 827.47s | 60,425.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.68s | 68,106.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.63s | 96,498.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 449.76s | 111,169.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,123.4 444.9,169.1 700.0,125.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="123.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="169.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.5 444.9,171.6 700.0,168.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#198754"/><circle cx="444.9" cy="171.6" r="4" fill="#198754"/><circle cx="700.0" cy="168.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.6 444.9,223.3 700.0,277.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,194.8 444.9,62.3 700.0,113.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="113.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.7 444.9,212.4 700.0,201.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.4 444.9,106.7 700.0,69.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.4" r="4" fill="#20c997"/><circle cx="444.9" cy="106.7" r="4" fill="#20c997"/><circle cx="700.0" cy="69.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.39s | 87,780.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 145.32s | 68,815.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 574.68s | 87,004.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.61s | 64,082.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 147.50s | 67,794.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.13s | 68,952.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.63s | 46,236.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 215.78s | 46,344.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 2108.86s | 23,709.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 17.20s | 58,156.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.38s | 113,149.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 543.19s | 92,049.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.86s | 45,743.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.54s | 50,881.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 899.50s | 55,586.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.65s | 73,276.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.57s | 94,722.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 454.44s | 110,025.8 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T22:20:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">172k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.3 444.9,62.3 700.0,133.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,163.0 700.0,172.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="172.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,238.6 700.0,235.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,103.8 444.9,101.8 700.0,93.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="103.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.7 444.9,240.3 700.0,210.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="210.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.9 444.9,116.5 700.0,96.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.9" r="4" fill="#20c997"/><circle cx="444.9" cy="116.5" r="4" fill="#20c997"/><circle cx="700.0" cy="96.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.43s | 95,904.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.12s | 155,945.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 432.86s | 115,512.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.86s | 72,139.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 101.66s | 98,366.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 539.58s | 92,664.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.32s | 51,773.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.33s | 55,147.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 876.57s | 57,040.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.57s | 132,187.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.01s | 133,320.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 361.62s | 138,264.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.16s | 55,050.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 184.69s | 54,145.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 699.28s | 71,502.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.99s | 90,967.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,965.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 366.17s | 136,548.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.2 444.9,62.3 700.0,79.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.2 444.9,194.3 700.0,184.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.2" r="4" fill="#198754"/><circle cx="444.9" cy="194.3" r="4" fill="#198754"/><circle cx="700.0" cy="184.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.5 444.9,242.8 700.0,268.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="268.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.3 444.9,107.9 700.0,88.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="88.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.6 444.9,220.2 700.0,214.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.3 444.9,116.8 700.0,108.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.3" r="4" fill="#20c997"/><circle cx="444.9" cy="116.8" r="4" fill="#20c997"/><circle cx="700.0" cy="108.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.26s | 97,427.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.80s | 145,355.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 367.39s | 136,095.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.28s | 65,462.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.33s | 75,000.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 623.07s | 80,248.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.04s | 52,515.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 203.49s | 49,142.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1401.30s | 35,681.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.64s | 103,777.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.62s | 121,037.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 379.79s | 131,653.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.27s | 51,886.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.44s | 61,184.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 778.56s | 64,221.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.73s | 72,838.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.00s | 116,277.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 414.27s | 120,693.7 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T22:11:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,151.5 444.9,87.4 700.0,104.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.1 444.9,170.2 700.0,176.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#198754"/><circle cx="444.9" cy="170.2" r="4" fill="#198754"/><circle cx="700.0" cy="176.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,233.8 444.9,221.0 700.0,198.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.3 444.9,91.7 700.0,82.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="82.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.0 444.9,197.7 700.0,177.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="177.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,94.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="94.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,894.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.10s | 128,044.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 419.75s | 119,119.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.23s | 65,642.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.30s | 85,252.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 608.16s | 82,215.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,361.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.53s | 58,987.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 709.35s | 70,486.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.25s | 97,589.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.46s | 125,851.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 382.91s | 130,578.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.73s | 50,681.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 140.82s | 71,011.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 612.52s | 81,630.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.44s | 87,397.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.49s | 124,234.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.45s | 141,062.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.6 444.9,84.7 700.0,63.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="63.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.1 444.9,164.9 700.0,299.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#198754"/><circle cx="444.9" cy="164.9" r="4" fill="#198754"/><circle cx="700.0" cy="299.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.4 444.9,229.0 700.0,206.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,129.3 444.9,102.8 700.0,87.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="129.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.5 444.9,221.9 700.0,176.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="176.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.0 444.9,100.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#20c997"/><circle cx="444.9" cy="100.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.94s | 111,906.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.25s | 129,441.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 356.02s | 140,440.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,629.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 113.65s | 87,986.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 2694.72s | 18,554.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.16s | 61,885.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.42s | 54,817.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 751.10s | 66,569.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.40s | 106,394.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.25s | 120,115.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.14s | 128,157.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.28s | 65,449.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.87s | 58,525.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 610.22s | 81,937.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.08s | 82,767.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.49s | 121,229.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 354.44s | 141,067.6 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T22:20:50Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">142k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.9 444.9,80.3 700.0,94.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="80.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="94.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.1 444.9,176.5 700.0,171.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#198754"/><circle cx="444.9" cy="176.5" r="4" fill="#198754"/><circle cx="700.0" cy="171.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.7 444.9,243.6 700.0,227.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,101.2 444.9,62.3 700.0,73.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="101.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.7 444.9,200.1 700.0,208.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="200.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.5 444.9,62.4 700.0,65.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.4" r="4" fill="#20c997"/><circle cx="700.0" cy="65.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 13.20s | 75,751.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.99s | 120,496.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 438.45s | 114,038.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.65s | 60,056.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.35s | 74,991.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 646.51s | 77,338.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.07s | 39,893.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 231.16s | 43,259.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 986.96s | 50,660.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.04s | 110,619.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.50s | 129,035.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.07s | 123,741.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.45s | 48,890.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 156.63s | 63,843.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 832.71s | 60,045.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.70s | 78,758.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.53s | 128,979.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 392.14s | 127,506.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">142k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,147.3 444.9,74.1 700.0,79.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="147.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.6 444.9,157.1 700.0,175.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.6" r="4" fill="#198754"/><circle cx="444.9" cy="157.1" r="4" fill="#198754"/><circle cx="700.0" cy="175.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.2 444.9,264.2 700.0,243.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.4 444.9,68.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.0 444.9,217.4 700.0,216.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.5 444.9,68.8 700.0,70.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.5" r="4" fill="#20c997"/><circle cx="444.9" cy="68.8" r="4" fill="#20c997"/><circle cx="700.0" cy="70.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.23s | 89,007.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.81s | 123,753.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 412.64s | 121,171.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 19.27s | 51,891.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.51s | 84,383.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 659.11s | 75,860.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.98s | 34,511.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 297.78s | 33,581.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1150.05s | 43,476.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,393.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.15s | 126,340.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.55s | 129,349.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.95s | 45,547.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.36s | 55,754.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 891.69s | 56,073.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.91s | 71,875.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.19s | 126,277.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.13s | 125,270.9 | PASS |

:::

:::

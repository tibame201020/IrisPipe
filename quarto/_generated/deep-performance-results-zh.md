## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-20T22:05:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,80.1 444.9,130.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="80.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.3 444.9,187.7 700.0,201.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.3" r="4" fill="#198754"/><circle cx="444.9" cy="187.7" r="4" fill="#198754"/><circle cx="700.0" cy="201.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.0 444.9,243.9 700.0,200.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.9 444.9,138.2 700.0,125.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.7 444.9,224.0 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.5 444.9,131.9 700.0,116.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.5" r="4" fill="#20c997"/><circle cx="444.9" cy="131.9" r="4" fill="#20c997"/><circle cx="700.0" cy="116.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.57s | 152,207.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.86s | 122,152.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 307.09s | 162,820.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.73s | 67,879.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 113.68s | 87,967.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 626.93s | 79,753.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.17s | 49,568.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.96s | 54,359.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 624.01s | 80,126.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,349.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.10s | 117,511.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.44s | 124,864.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.63s | 50,952.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.91s | 66,266.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 855.49s | 58,445.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.94s | 77,303.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.49s | 121,232.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.82s | 130,611.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,89.1 700.0,111.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="111.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,204.1 700.0,161.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="204.1" r="4" fill="#198754"/><circle cx="700.0" cy="161.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.6 444.9,238.1 700.0,238.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.2 444.9,131.8 700.0,114.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.3 444.9,234.9 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,136.0 700.0,131.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="136.0" r="4" fill="#20c997"/><circle cx="700.0" cy="131.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.31s | 158,528.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.95s | 142,961.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.01s | 130,205.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.04s | 66,498.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.42s | 76,093.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 495.60s | 100,887.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,813.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.49s | 56,342.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 887.99s | 56,306.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,565.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.66s | 118,115.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.40s | 128,074.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.85s | 50,370.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.82s | 58,200.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 878.61s | 56,908.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.33s | 81,103.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.44s | 115,688.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 421.60s | 118,595.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-21T23:05:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,179.9 444.9,73.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="179.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.3 444.9,154.4 700.0,187.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.3" r="4" fill="#198754"/><circle cx="444.9" cy="154.4" r="4" fill="#198754"/><circle cx="700.0" cy="187.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.5 444.9,234.0 700.0,237.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.7 444.9,118.4 700.0,118.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.7 444.9,247.9 700.0,236.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.3 444.9,131.1 700.0,119.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.3" r="4" fill="#20c997"/><circle cx="444.9" cy="131.1" r="4" fill="#20c997"/><circle cx="700.0" cy="119.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,535.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.63s | 159,662.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 300.70s | 166,277.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.37s | 65,053.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 90.80s | 110,132.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 556.59s | 89,833.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.75s | 53,344.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 162.41s | 61,572.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 840.52s | 59,487.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.90s | 112,346.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.72s | 132,056.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.23s | 131,845.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.47s | 51,366.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 188.21s | 53,132.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 828.52s | 60,348.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,057.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.43s | 124,325.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.98s | 131,240.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.9 444.9,124.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.6 444.9,209.7 700.0,190.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#198754"/><circle cx="444.9" cy="209.7" r="4" fill="#198754"/><circle cx="700.0" cy="190.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.8 444.9,239.5 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.7 444.9,143.7 700.0,124.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.6 444.9,263.7 700.0,241.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="263.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.8 444.9,118.3 700.0,106.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#20c997"/><circle cx="444.9" cy="118.3" r="4" fill="#20c997"/><circle cx="700.0" cy="106.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.45s | 105,797.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.45s | 129,120.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 298.29s | 167,622.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.29s | 65,423.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.82s | 77,028.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 562.81s | 88,840.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.03s | 49,932.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.46s | 58,666.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1052.77s | 47,493.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.66s | 103,466.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.07s | 117,546.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.44s | 129,385.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,022.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 228.34s | 43,793.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 873.91s | 57,214.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.89s | 77,579.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 75.07s | 133,210.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 355.87s | 140,500.3 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-20T22:24:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">126k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,90.5 444.9,214.2 700.0,99.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="90.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="214.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.8 444.9,170.5 700.0,162.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.8" r="4" fill="#198754"/><circle cx="444.9" cy="170.5" r="4" fill="#198754"/><circle cx="700.0" cy="162.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.9 444.9,211.0 700.0,203.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="211.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="203.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.9 444.9,228.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="228.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,196.4 444.9,244.6 700.0,193.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.8 444.9,78.5 700.0,90.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.8" r="4" fill="#20c997"/><circle cx="444.9" cy="78.5" r="4" fill="#20c997"/><circle cx="700.0" cy="90.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.72s | 102,901.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 196.75s | 50,825.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 504.62s | 99,085.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.61s | 64,049.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.44s | 69,233.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 687.26s | 72,752.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.61s | 50,984.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 191.68s | 52,170.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 901.08s | 55,489.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,644.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 222.93s | 44,857.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 435.60s | 114,784.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.14s | 58,326.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 262.95s | 38,029.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.98s | 59,738.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,576.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 92.63s | 107,952.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 486.15s | 102,848.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">64k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">128k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.7 444.9,94.1 700.0,93.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.6 444.9,174.7 700.0,179.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.6" r="4" fill="#198754"/><circle cx="444.9" cy="174.7" r="4" fill="#198754"/><circle cx="700.0" cy="179.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,221.5 444.9,232.7 700.0,210.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="221.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,210.2 444.9,62.3 700.0,78.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="210.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="78.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.9 444.9,209.0 700.0,216.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="209.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.5 444.9,110.3 700.0,90.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.5" r="4" fill="#20c997"/><circle cx="444.9" cy="110.3" r="4" fill="#20c997"/><circle cx="700.0" cy="90.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.67s | 93,711.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 97.15s | 102,933.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 485.22s | 103,046.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,544.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 145.97s | 68,508.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 751.54s | 66,529.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,515.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 228.64s | 43,736.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.98s | 53,136.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 18.75s | 53,347.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.80s | 116,550.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 456.73s | 109,474.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.26s | 47,043.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.70s | 53,850.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 990.36s | 50,486.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.73s | 72,854.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.14s | 96,028.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 477.92s | 104,619.8 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-20T22:07:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,147.4 444.9,101.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="147.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.1 444.9,186.2 700.0,175.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#198754"/><circle cx="444.9" cy="186.2" r="4" fill="#198754"/><circle cx="700.0" cy="175.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.4 444.9,204.6 700.0,220.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.5 444.9,69.9 700.0,97.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="69.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.3 444.9,229.0 700.0,191.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.1 444.9,109.3 700.0,80.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.1" r="4" fill="#20c997"/><circle cx="444.9" cy="109.3" r="4" fill="#20c997"/><circle cx="700.0" cy="80.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.03s | 99,730.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.46s | 124,291.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 344.87s | 144,984.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.15s | 70,661.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.38s | 79,128.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 588.17s | 85,008.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,227.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 144.27s | 69,315.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 817.53s | 61,159.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 106,055.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.96s | 140,922.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.73s | 126,347.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.28s | 49,304.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.53s | 56,328.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.60s | 76,499.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.14s | 82,365.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.33s | 120,007.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.05s | 135,484.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,90.3 444.9,121.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="90.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.5 444.9,206.1 700.0,161.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#198754"/><circle cx="444.9" cy="206.1" r="4" fill="#198754"/><circle cx="700.0" cy="161.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.4 444.9,237.8 700.0,240.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.1 444.9,134.7 700.0,155.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="155.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,271.6 444.9,243.1 700.0,239.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="271.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.6 444.9,135.8 700.0,89.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.6" r="4" fill="#20c997"/><circle cx="444.9" cy="135.8" r="4" fill="#20c997"/><circle cx="700.0" cy="89.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.76s | 148,016.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.28s | 129,399.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 303.03s | 164,999.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.38s | 65,040.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.19s | 78,011.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 476.59s | 104,912.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,957.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.97s | 58,832.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 877.12s | 57,004.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.94s | 111,856.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.53s | 121,166.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 459.79s | 108,745.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 26.09s | 38,327.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.89s | 55,590.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 867.99s | 57,604.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.94s | 83,738.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.96s | 120,537.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 336.60s | 148,544.7 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-20T22:01:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,179.6 444.9,127.8 700.0,143.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="179.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.6 444.9,206.8 700.0,194.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="194.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.4 444.9,239.6 700.0,233.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,164.4 444.9,146.4 700.0,117.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="164.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.7 444.9,240.1 700.0,239.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.4 444.9,123.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.4" r="4" fill="#20c997"/><circle cx="444.9" cy="123.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,491.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.40s | 125,939.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 428.67s | 116,640.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.32s | 65,282.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.28s | 77,956.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 583.31s | 85,718.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.69s | 50,797.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.47s | 57,982.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 812.36s | 61,549.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.64s | 103,723.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.24s | 114,628.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 378.33s | 132,159.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.49s | 48,809.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.35s | 57,688.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 856.85s | 58,353.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,477.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.61s | 128,844.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 301.59s | 165,786.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.4 444.9,62.3 700.0,81.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="81.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.0 444.9,187.8 700.0,183.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#198754"/><circle cx="444.9" cy="187.8" r="4" fill="#198754"/><circle cx="700.0" cy="183.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.3 444.9,229.4 700.0,288.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="288.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.6 444.9,102.5 700.0,111.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,178.8 444.9,225.0 700.0,176.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="178.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="176.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.1 444.9,111.8 700.0,71.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.1" r="4" fill="#20c997"/><circle cx="444.9" cy="111.8" r="4" fill="#20c997"/><circle cx="700.0" cy="71.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,145.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.24s | 146,535.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.57s | 136,398.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.49s | 80,057.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.44s | 79,089.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 612.15s | 81,679.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.23s | 47,100.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.19s | 56,758.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1998.61s | 25,017.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,840.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.06s | 124,907.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.25s | 120,120.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.92s | 83,899.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.14s | 59,122.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 587.63s | 85,087.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.76s | 78,376.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.38s | 119,931.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 352.59s | 141,807.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-20T22:08:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,187.1 444.9,62.3 700.0,124.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.4 444.9,177.5 700.0,201.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.4" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="201.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.7 444.9,253.6 700.0,254.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.0 444.9,125.4 700.0,122.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.1 444.9,239.2 700.0,175.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.0 444.9,115.2 700.0,89.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#20c997"/><circle cx="444.9" cy="115.2" r="4" fill="#20c997"/><circle cx="700.0" cy="89.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.64s | 85,910.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.13s | 158,410.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.37s | 122,139.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.81s | 72,390.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 109.29s | 91,496.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 644.16s | 77,620.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.45s | 46,613.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 211.41s | 47,302.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1074.25s | 46,544.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.37s | 96,394.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.16s | 121,716.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.54s | 123,596.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.53s | 48,704.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.80s | 55,618.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 538.05s | 92,928.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,723.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.33s | 127,656.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 350.55s | 142,632.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.0 444.9,81.4 700.0,77.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="81.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="77.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.4 444.9,193.5 700.0,161.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.4" r="4" fill="#198754"/><circle cx="444.9" cy="193.5" r="4" fill="#198754"/><circle cx="700.0" cy="161.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.7 444.9,228.8 700.0,242.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,222.0 444.9,62.3 700.0,101.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.0 444.9,227.9 700.0,197.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="197.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.3 444.9,86.0 700.0,65.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.3" r="4" fill="#20c997"/><circle cx="444.9" cy="86.0" r="4" fill="#20c997"/><circle cx="700.0" cy="65.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.24s | 88,975.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.77s | 131,974.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 372.82s | 134,113.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.91s | 59,119.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.85s | 73,610.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 554.97s | 90,095.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.53s | 40,764.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.97s | 55,256.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1032.68s | 48,417.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 17.00s | 58,823.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 70.46s | 141,920.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.82s | 121,412.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.09s | 45,265.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.50s | 55,710.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 697.59s | 71,675.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,601.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.17s | 129,592.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 356.40s | 140,292.2 | PASS |

:::

:::

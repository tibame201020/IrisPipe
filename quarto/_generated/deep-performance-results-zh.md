## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-14T23:01:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,99.2 444.9,86.6 700.0,95.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,176.1 444.9,166.1 700.0,171.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="176.1" r="4" fill="#198754"/><circle cx="444.9" cy="166.1" r="4" fill="#198754"/><circle cx="700.0" cy="171.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.9 444.9,219.5 700.0,182.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="182.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.8 444.9,93.1 700.0,84.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,212.7 444.9,163.3 700.0,213.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="163.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.9 444.9,94.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#20c997"/><circle cx="444.9" cy="94.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.81s | 113,468.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.64s | 119,555.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 433.95s | 115,221.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,452.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.01s | 81,291.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 635.55s | 78,672.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.40s | 51,554.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.83s | 55,608.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 681.66s | 73,349.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.75s | 102,595.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.90s | 116,415.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 415.20s | 120,423.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,875.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 121.01s | 82,638.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.42s | 58,314.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.66s | 78,976.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.35s | 115,813.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.92s | 131,260.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">172k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,132.4 444.9,90.1 700.0,102.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,154.2 700.0,198.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="154.2" r="4" fill="#198754"/><circle cx="700.0" cy="198.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.6 444.9,233.8 700.0,197.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="197.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,130.2 700.0,119.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.4 444.9,241.8 700.0,234.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.2 444.9,123.9 700.0,65.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.2" r="4" fill="#20c997"/><circle cx="444.9" cy="123.9" r="4" fill="#20c997"/><circle cx="700.0" cy="65.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.60s | 116,306.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.12s | 140,601.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.15s | 133,637.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.23s | 65,672.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.31s | 103,834.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.45s | 78,684.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.39s | 46,742.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 172.07s | 58,114.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 633.36s | 78,943.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.39s | 156,592.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.04s | 117,590.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.28s | 123,676.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.88s | 50,309.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 186.86s | 53,517.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 862.45s | 57,974.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.70s | 85,455.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.50s | 121,219.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 322.82s | 154,883.6 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-14T22:55:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,158.3 444.9,72.9 700.0,67.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="158.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="67.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.5 444.9,104.1 700.0,152.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.5" r="4" fill="#198754"/><circle cx="444.9" cy="104.1" r="4" fill="#198754"/><circle cx="700.0" cy="152.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.8 444.9,217.2 700.0,150.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="150.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.6 444.9,63.2 700.0,75.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="75.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.5 444.9,221.8 700.0,206.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.3 444.9,78.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#20c997"/><circle cx="444.9" cy="78.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.83s | 84,523.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.75s | 125,390.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.55s | 128,025.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.35s | 74,895.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 90.53s | 110,460.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 572.17s | 87,386.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.87s | 47,915.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.40s | 56,370.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 565.28s | 88,451.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.67s | 130,310.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.91s | 130,027.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.14s | 124,025.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.01s | 49,972.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 184.68s | 54,147.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 813.10s | 61,492.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,320.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.47s | 122,749.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.20s | 130,479.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,110.8 700.0,91.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.2 444.9,128.6 700.0,197.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#198754"/><circle cx="444.9" cy="128.6" r="4" fill="#198754"/><circle cx="700.0" cy="197.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.7 444.9,241.0 700.0,230.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.9 444.9,137.9 700.0,109.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.2 444.9,225.5 700.0,233.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.6 444.9,127.9 700.0,84.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.6" r="4" fill="#20c997"/><circle cx="444.9" cy="127.9" r="4" fill="#20c997"/><circle cx="700.0" cy="84.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.46s | 154,750.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.60s | 127,223.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 362.15s | 138,062.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.22s | 65,720.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.39s | 117,109.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 641.15s | 77,985.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.09s | 52,386.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.51s | 53,329.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 843.05s | 59,308.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,354.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.42s | 111,830.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.87s | 127,919.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.79s | 48,102.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.88s | 62,158.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 869.45s | 57,507.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.04s | 83,063.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.10s | 117,513.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 352.11s | 142,002.3 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:27:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">137k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.5 444.9,115.3 700.0,161.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="161.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.7 444.9,183.2 700.0,178.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#198754"/><circle cx="444.9" cy="183.2" r="4" fill="#198754"/><circle cx="700.0" cy="178.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.4 444.9,226.0 700.0,218.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.9 444.9,111.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.8 444.9,229.0 700.0,224.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,151.7 444.9,112.2 700.0,189.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="151.7" r="4" fill="#20c997"/><circle cx="444.9" cy="112.2" r="4" fill="#20c997"/><circle cx="700.0" cy="189.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.03s | 83,132.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.92s | 100,080.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 631.75s | 79,145.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.45s | 74,349.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.67s | 69,123.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 700.77s | 71,350.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.51s | 51,266.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 201.38s | 49,656.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 944.55s | 52,935.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.03s | 90,694.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 98.08s | 101,955.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.55s | 124,207.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.69s | 46,104.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 207.06s | 48,295.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 994.99s | 50,251.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.98s | 83,486.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.53s | 101,487.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 752.65s | 66,432.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">127k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.1 444.9,85.4 700.0,88.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,177.5 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.7 444.9,214.4 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,68.9 444.9,84.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="68.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.1 444.9,213.9 700.0,212.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.6 444.9,93.1 700.0,85.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#20c997"/><circle cx="444.9" cy="93.1" r="4" fill="#20c997"/><circle cx="700.0" cy="85.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.75s | 93,031.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.70s | 105,596.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 479.72s | 104,227.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.16s | 58,268.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 150.09s | 66,624.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 747.49s | 66,890.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.83s | 45,812.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 196.05s | 51,008.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1332.43s | 37,525.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.88s | 112,574.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 94.52s | 105,802.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 433.36s | 115,377.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.32s | 44,798.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 195.25s | 51,216.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 964.57s | 51,836.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.10s | 76,324.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 97.70s | 102,348.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 472.84s | 105,743.8 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:10:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.0 444.9,76.9 700.0,105.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.8 444.9,122.3 700.0,122.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.8" r="4" fill="#198754"/><circle cx="444.9" cy="122.3" r="4" fill="#198754"/><circle cx="700.0" cy="122.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.7 444.9,195.1 700.0,222.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="195.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.1 444.9,88.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.2 444.9,198.5 700.0,214.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,138.7 444.9,81.4 700.0,68.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="138.7" r="4" fill="#20c997"/><circle cx="444.9" cy="81.4" r="4" fill="#20c997"/><circle cx="700.0" cy="68.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.33s | 96,777.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.29s | 126,122.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 445.34s | 112,274.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.70s | 68,036.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 96.19s | 103,960.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 482.44s | 103,639.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.46s | 60,753.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 146.23s | 68,387.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.43s | 54,979.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,469.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.91s | 120,606.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.15s | 133,278.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.30s | 49,273.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 149.90s | 66,711.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.45s | 59,000.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.42s | 95,941.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.70s | 123,911.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.04s | 130,196.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,107.8 444.9,62.3 700.0,89.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="107.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.9 444.9,178.1 700.0,180.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.9" r="4" fill="#198754"/><circle cx="444.9" cy="178.1" r="4" fill="#198754"/><circle cx="700.0" cy="180.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.6 444.9,219.9 700.0,221.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,77.9 444.9,88.0 700.0,93.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="77.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.6 444.9,202.8 700.0,215.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.7 444.9,97.5 700.0,65.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#20c997"/><circle cx="444.9" cy="97.5" r="4" fill="#20c997"/><circle cx="700.0" cy="65.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.95s | 111,719.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.55s | 134,134.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 414.25s | 120,698.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.05s | 66,445.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.55s | 77,189.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.34s | 76,179.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.87s | 47,906.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.66s | 56,605.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 892.03s | 56,052.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.91s | 126,470.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.33s | 121,468.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.80s | 118,820.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,347.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 153.82s | 65,012.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.25s | 58,875.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,123.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.61s | 116,811.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.75s | 132,364.1 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-14T22:58:10Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,184.2 444.9,136.8 700.0,122.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.8 444.9,214.2 700.0,212.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.8" r="4" fill="#198754"/><circle cx="444.9" cy="214.2" r="4" fill="#198754"/><circle cx="700.0" cy="212.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.8 444.9,256.8 700.0,242.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.9 444.9,62.3 700.0,128.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.5 444.9,240.8 700.0,196.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.8 444.9,120.0 700.0,124.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.8" r="4" fill="#20c997"/><circle cx="444.9" cy="120.0" r="4" fill="#20c997"/><circle cx="700.0" cy="124.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.40s | 96,144.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.13s | 126,374.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 369.60s | 135,281.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,806.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.87s | 77,002.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.85s | 78,265.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.57s | 48,602.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.63s | 49,841.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.39s | 59,214.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.92s | 126,294.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.52s | 173,867.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.36s | 131,802.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,423.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 166.45s | 60,076.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 567.49s | 88,108.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.35s | 88,113.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.95s | 137,080.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.85s | 134,102.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,153.7 444.9,62.3 700.0,69.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="69.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.1 444.9,190.4 700.0,164.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#198754"/><circle cx="444.9" cy="190.4" r="4" fill="#198754"/><circle cx="700.0" cy="164.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,289.1 444.9,239.3 700.0,228.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="289.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.1 444.9,90.8 700.0,117.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.4 444.9,225.5 700.0,230.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,113.5 700.0,100.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.5" r="4" fill="#20c997"/><circle cx="700.0" cy="100.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.79s | 102,155.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 65.09s | 153,638.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 333.84s | 149,773.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.76s | 56,303.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 122.74s | 81,471.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 519.60s | 96,227.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 38.64s | 25,881.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.51s | 53,905.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 836.09s | 59,802.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.57s | 94,589.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 72.68s | 137,587.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.37s | 122,738.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.30s | 57,800.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.07s | 61,700.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.43s | 58,655.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.86s | 77,784.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.15s | 124,769.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.76s | 132,010.8 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:13:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">165k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.9 444.9,62.3 700.0,123.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.5 444.9,189.2 700.0,199.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.5" r="4" fill="#198754"/><circle cx="444.9" cy="189.2" r="4" fill="#198754"/><circle cx="700.0" cy="199.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.4 444.9,243.9 700.0,239.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.4 444.9,118.3 700.0,114.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.1 444.9,244.3 700.0,214.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.8 444.9,89.5 700.0,94.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.8" r="4" fill="#20c997"/><circle cx="444.9" cy="89.5" r="4" fill="#20c997"/><circle cx="700.0" cy="94.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.82s | 77,972.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 66.84s | 149,602.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 430.92s | 116,032.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.12s | 58,401.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.02s | 79,985.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 670.17s | 74,607.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.47s | 39,261.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.20s | 49,950.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 949.53s | 52,657.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,150.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.11s | 118,887.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.74s | 121,142.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.48s | 46,546.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 200.95s | 49,764.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 753.34s | 66,371.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.91s | 77,465.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.26s | 134,654.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.23s | 131,846.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,144.9 444.9,67.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.4 444.9,178.6 700.0,161.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#198754"/><circle cx="444.9" cy="178.6" r="4" fill="#198754"/><circle cx="700.0" cy="161.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.9 444.9,234.8 700.0,236.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.5 444.9,85.8 700.0,70.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="70.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.8 444.9,219.1 700.0,222.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.0 444.9,74.5 700.0,68.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.0" r="4" fill="#20c997"/><circle cx="444.9" cy="74.5" r="4" fill="#20c997"/><circle cx="700.0" cy="68.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.27s | 88,715.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.06s | 124,914.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.76s | 127,304.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.06s | 58,620.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.01s | 72,987.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 616.37s | 81,120.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.48s | 39,238.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.76s | 46,782.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1085.49s | 46,061.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.22s | 97,799.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.98s | 116,308.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.48s | 123,309.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.97s | 58,913.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 184.92s | 54,077.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 948.99s | 52,687.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.14s | 76,091.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.25s | 121,587.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 402.47s | 124,232.9 | PASS |

:::

:::

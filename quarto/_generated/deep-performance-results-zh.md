## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-10T23:01:46Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,111.2 444.9,74.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="111.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,125.1 444.9,174.9 700.0,166.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="125.1" r="4" fill="#198754"/><circle cx="444.9" cy="174.9" r="4" fill="#198754"/><circle cx="700.0" cy="166.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.4 444.9,218.1 700.0,221.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.6 444.9,85.2 700.0,77.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,169.2 444.9,216.8 700.0,131.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="169.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="131.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.6 444.9,80.8 700.0,69.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.6" r="4" fill="#20c997"/><circle cx="444.9" cy="80.8" r="4" fill="#20c997"/><circle cx="700.0" cy="69.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.28s | 107,781.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.58s | 125,658.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 380.63s | 131,360.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.89s | 101,112.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.69s | 77,104.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 615.01s | 81,299.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.66s | 50,862.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.57s | 56,316.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 913.07s | 54,760.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,322.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.10s | 120,332.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.96s | 124,081.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,859.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.68s | 56,923.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 510.00s | 98,038.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.80s | 72,463.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.68s | 122,427.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.43s | 128,064.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,143.5 444.9,130.2 700.0,131.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="143.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.6 444.9,219.2 700.0,191.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#198754"/><circle cx="444.9" cy="219.2" r="4" fill="#198754"/><circle cx="700.0" cy="191.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.3 444.9,254.7 700.0,252.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,104.2 444.9,62.3 700.0,153.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="104.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.5 444.9,249.9 700.0,174.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="174.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.6 444.9,128.3 700.0,141.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#20c997"/><circle cx="444.9" cy="128.3" r="4" fill="#20c997"/><circle cx="700.0" cy="141.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.96s | 125,580.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.44s | 134,331.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.78s | 133,770.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.19s | 65,832.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.63s | 75,968.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 531.78s | 94,023.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.88s | 45,699.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.91s | 52,657.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 921.39s | 54,265.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.61s | 151,377.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 55.91s | 178,874.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.22s | 118,984.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.41s | 51,506.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.10s | 55,834.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 475.89s | 105,066.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.69s | 73,072.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.75s | 135,595.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 393.36s | 127,109.4 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-10T22:52:46Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,185.0 444.9,83.1 700.0,123.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.8 444.9,215.1 700.0,209.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#198754"/><circle cx="444.9" cy="215.1" r="4" fill="#198754"/><circle cx="700.0" cy="209.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.5 444.9,250.2 700.0,189.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.7 444.9,85.0 700.0,147.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.0 444.9,246.5 700.0,242.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.9 444.9,62.3 700.0,126.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="126.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.17s | 98,338.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 60.54s | 165,188.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 360.34s | 138,756.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.51s | 68,941.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.25s | 78,583.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 607.70s | 82,276.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.93s | 50,170.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.85s | 55,602.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 525.26s | 95,191.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.97s | 125,391.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.01s | 163,904.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 405.61s | 123,270.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.05s | 52,479.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 172.29s | 58,041.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 827.77s | 60,403.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.98s | 71,541.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 55.92s | 178,810.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.80s | 137,060.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,107.5 444.9,130.2 700.0,135.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="107.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="135.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.1 444.9,212.1 700.0,206.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.1" r="4" fill="#198754"/><circle cx="444.9" cy="212.1" r="4" fill="#198754"/><circle cx="700.0" cy="206.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.5 444.9,246.1 700.0,239.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,87.0 444.9,145.1 700.0,127.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="87.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="145.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.1 444.9,245.3 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.7 444.9,97.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.7" r="4" fill="#20c997"/><circle cx="444.9" cy="97.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.03s | 142,247.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.10s | 128,037.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 401.44s | 124,550.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.96s | 66,853.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.15s | 76,836.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 620.88s | 80,531.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.48s | 46,557.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.85s | 55,602.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 838.22s | 59,650.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.45s | 155,062.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.23s | 118,721.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.58s | 129,675.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.52s | 48,735.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.38s | 56,060.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 736.18s | 67,918.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.18s | 82,115.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 67.26s | 148,667.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 293.20s | 170,533.8 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-10T00:14:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.1 444.9,115.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.8 444.9,115.8 700.0,173.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#198754"/><circle cx="444.9" cy="115.8" r="4" fill="#198754"/><circle cx="700.0" cy="173.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.4 444.9,189.3 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="189.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.8 444.9,89.0 700.0,64.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="64.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.9 444.9,229.1 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.2 444.9,136.4 700.0,114.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#20c997"/><circle cx="444.9" cy="136.4" r="4" fill="#20c997"/><circle cx="700.0" cy="114.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.56s | 79,624.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.64s | 104,562.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.18s | 130,146.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.22s | 61,648.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 95.59s | 104,614.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 650.44s | 76,871.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.65s | 50,890.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 143.87s | 69,507.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 999.50s | 50,024.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.85s | 92,182.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.20s | 117,370.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.78s | 128,938.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.80s | 45,871.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.90s | 50,531.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 964.71s | 51,829.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.99s | 71,479.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 105.50s | 94,784.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 474.07s | 105,469.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.7 444.9,130.7 700.0,68.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="68.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.8 444.9,210.3 700.0,201.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#198754"/><circle cx="444.9" cy="210.3" r="4" fill="#198754"/><circle cx="700.0" cy="201.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.6 444.9,234.6 700.0,230.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,103.8 444.9,62.3 700.0,144.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="103.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.7 444.9,183.4 700.0,235.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.0 444.9,118.4 700.0,180.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.0" r="4" fill="#20c997"/><circle cx="444.9" cy="118.4" r="4" fill="#20c997"/><circle cx="700.0" cy="180.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.40s | 87,688.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 95.06s | 105,196.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 364.89s | 137,028.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.77s | 63,411.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 155.78s | 64,195.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.17s | 68,949.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.74s | 72,774.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.56s | 51,663.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 924.57s | 54,079.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.40s | 119,005.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 71.22s | 140,402.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 508.63s | 98,302.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.74s | 45,993.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 128.16s | 78,027.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 972.17s | 51,431.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 19.05s | 52,499.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 89.69s | 111,495.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 627.74s | 79,651.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-10T23:08:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,109.2 444.9,149.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,201.4 700.0,214.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.4" r="4" fill="#198754"/><circle cx="700.0" cy="214.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.9 444.9,246.6 700.0,248.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.6 444.9,148.4 700.0,153.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.1 444.9,252.3 700.0,186.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.0 444.9,145.7 700.0,97.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.0" r="4" fill="#20c997"/><circle cx="444.9" cy="145.7" r="4" fill="#20c997"/><circle cx="700.0" cy="97.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.67s | 149,947.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.31s | 122,983.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 276.12s | 181,082.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.97s | 66,791.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.75s | 88,687.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.58s | 80,310.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.27s | 51,883.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.36s | 58,700.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 869.55s | 57,500.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.06s | 141,723.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.70s | 123,920.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.82s | 120,825.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.16s | 55,060.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.19s | 54,887.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 505.71s | 98,869.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,045.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.57s | 125,681.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 316.50s | 157,980.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,105.2 444.9,62.3 700.0,129.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,167.3 444.9,213.1 700.0,208.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="167.3" r="4" fill="#198754"/><circle cx="444.9" cy="213.1" r="4" fill="#198754"/><circle cx="700.0" cy="208.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.6 444.9,246.8 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.6 444.9,143.9 700.0,141.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.5 444.9,243.3 700.0,207.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.1 444.9,141.0 700.0,176.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#20c997"/><circle cx="444.9" cy="141.0" r="4" fill="#20c997"/><circle cx="700.0" cy="176.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.87s | 145,624.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.85s | 172,848.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.54s | 130,363.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.41s | 106,292.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.42s | 77,269.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.23s | 79,970.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.67s | 73,136.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.97s | 55,876.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 891.90s | 56,060.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.10s | 109,926.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.58s | 121,097.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 406.82s | 122,905.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.36s | 51,660.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.03s | 58,129.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 620.54s | 80,575.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.38s | 74,727.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.33s | 122,951.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 496.34s | 100,736.8 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-10T22:56:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,213.2 444.9,79.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="213.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.1 444.9,225.1 700.0,218.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.1" r="4" fill="#198754"/><circle cx="444.9" cy="225.1" r="4" fill="#198754"/><circle cx="700.0" cy="218.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.2 444.9,195.0 700.0,248.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="195.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.8 444.9,163.2 700.0,152.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="152.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.7 444.9,238.2 700.0,224.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.3 444.9,153.7 700.0,135.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.3" r="4" fill="#20c997"/><circle cx="444.9" cy="153.7" r="4" fill="#20c997"/><circle cx="700.0" cy="135.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.49s | 87,054.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 54.82s | 182,401.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 256.44s | 194,980.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.14s | 70,716.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.24s | 78,589.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 599.31s | 83,428.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,045.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 99.88s | 100,125.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 803.73s | 62,210.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.39s | 135,281.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.43s | 122,804.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.90s | 130,242.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.58s | 53,809.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.46s | 69,222.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 633.49s | 78,928.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.19s | 82,021.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.15s | 129,624.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 349.71s | 142,975.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.2 444.9,99.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="99.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.3 444.9,204.6 700.0,181.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.3" r="4" fill="#198754"/><circle cx="444.9" cy="204.6" r="4" fill="#198754"/><circle cx="700.0" cy="181.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.3 444.9,220.8 700.0,215.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="220.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.3 444.9,133.2 700.0,124.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,197.1 444.9,263.8 700.0,214.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="263.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.3 444.9,128.6 700.0,107.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.3" r="4" fill="#20c997"/><circle cx="444.9" cy="128.6" r="4" fill="#20c997"/><circle cx="700.0" cy="107.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.23s | 97,742.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.47s | 146,049.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 295.95s | 168,945.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.85s | 67,349.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.75s | 80,804.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 526.47s | 94,971.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.60s | 73,507.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 141.39s | 70,725.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 673.47s | 74,242.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.30s | 97,059.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.97s | 125,039.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.44s | 130,738.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.70s | 85,448.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 226.83s | 44,086.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 668.75s | 74,766.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.93s | 111,931.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.23s | 127,834.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 354.39s | 141,085.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T23:56:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,125.6 444.9,98.3 700.0,92.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="125.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="98.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.0 444.9,186.4 700.0,179.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.0" r="4" fill="#198754"/><circle cx="444.9" cy="186.4" r="4" fill="#198754"/><circle cx="700.0" cy="179.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.6 444.9,244.4 700.0,169.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="169.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.4 444.9,85.6 700.0,91.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.1 444.9,152.9 700.0,219.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="152.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.2 444.9,69.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.2" r="4" fill="#20c997"/><circle cx="444.9" cy="69.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.59s | 104,275.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.83s | 117,888.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.85s | 120,817.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.73s | 59,769.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 135.14s | 73,997.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 644.57s | 77,570.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.66s | 40,546.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 221.53s | 45,139.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 607.68s | 82,280.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.48s | 95,401.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.53s | 124,182.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.52s | 121,207.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.94s | 47,757.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 110.28s | 90,675.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 870.11s | 57,463.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.06s | 76,593.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.50s | 132,443.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.14s | 135,817.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,153.8 444.9,151.0 700.0,136.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.7 444.9,223.9 700.0,150.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.7" r="4" fill="#198754"/><circle cx="444.9" cy="223.9" r="4" fill="#198754"/><circle cx="700.0" cy="150.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.3 444.9,269.9 700.0,259.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,193.9 444.9,62.3 700.0,147.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.8 444.9,250.7 700.0,249.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.1 444.9,197.3 700.0,111.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#20c997"/><circle cx="444.9" cy="197.3" r="4" fill="#20c997"/><circle cx="700.0" cy="111.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.34s | 119,889.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.12s | 121,771.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 380.35s | 131,456.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.06s | 66,401.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.06s | 73,496.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 409.01s | 122,245.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.20s | 38,173.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 232.16s | 43,073.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1004.13s | 49,794.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.71s | 93,362.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 55.40s | 180,492.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 402.10s | 124,346.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.82s | 45,829.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.27s | 55,782.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 884.92s | 56,502.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.39s | 80,677.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 109.72s | 91,141.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 337.60s | 148,103.8 | PASS |

:::

:::

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
  **最新量測：** `2026-10-10T23:20:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">127k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,86.2 444.9,86.8 700.0,115.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="86.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.3 444.9,163.0 700.0,173.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.3" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="173.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.8 444.9,136.8 700.0,201.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="136.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,71.0 700.0,79.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="71.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="79.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.8 444.9,221.9 700.0,211.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,138.6 444.9,92.0 700.0,82.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="138.6" r="4" fill="#20c997"/><circle cx="444.9" cy="92.0" r="4" fill="#20c997"/><circle cx="700.0" cy="82.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.53s | 104,986.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.46s | 104,758.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 539.32s | 92,708.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.52s | 64,424.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.76s | 72,590.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 732.03s | 68,303.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.56s | 48,631.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 119.55s | 83,644.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 884.75s | 56,512.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.69s | 115,101.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.74s | 111,431.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 463.97s | 107,766.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.89s | 45,676.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 209.44s | 47,747.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 958.78s | 52,149.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.06s | 82,891.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 97.52s | 102,543.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 468.33s | 106,762.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,159.5 444.9,62.3 700.0,147.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="159.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.6 444.9,173.8 700.0,200.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#198754"/><circle cx="444.9" cy="173.8" r="4" fill="#198754"/><circle cx="700.0" cy="200.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,207.3 444.9,232.5 700.0,231.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,222.0 444.9,126.3 700.0,121.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="126.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.3 444.9,236.3 700.0,228.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,149.5 444.9,144.7 700.0,126.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="149.5" r="4" fill="#20c997"/><circle cx="444.9" cy="144.7" r="4" fill="#20c997"/><circle cx="700.0" cy="126.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.21s | 89,206.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.15s | 138,596.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 524.21s | 95,382.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.34s | 61,192.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 122.07s | 81,920.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 731.74s | 68,329.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.41s | 64,876.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.90s | 52,110.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 948.80s | 52,698.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 17.41s | 57,428.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 94.28s | 106,061.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 459.76s | 108,751.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.18s | 45,089.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 199.28s | 50,179.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 925.68s | 54,014.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.61s | 94,250.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.38s | 96,729.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 471.64s | 106,012.2 | PASS |

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
  **最新量測：** `2026-10-10T23:10:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.3 444.9,69.8 700.0,131.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.6 444.9,198.2 700.0,106.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.6" r="4" fill="#198754"/><circle cx="444.9" cy="198.2" r="4" fill="#198754"/><circle cx="700.0" cy="106.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.5 444.9,247.5 700.0,237.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,107.6 700.0,110.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.8 444.9,238.2 700.0,228.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,159.6 444.9,108.3 700.0,91.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="159.6" r="4" fill="#20c997"/><circle cx="444.9" cy="108.3" r="4" fill="#20c997"/><circle cx="700.0" cy="91.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.38s | 87,888.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.94s | 145,064.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 450.10s | 111,086.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.86s | 59,304.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.59s | 74,857.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 400.80s | 124,751.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.90s | 45,657.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 208.82s | 47,887.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 934.87s | 53,483.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.70s | 149,186.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.39s | 124,388.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 407.07s | 122,829.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.20s | 47,169.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 188.85s | 52,951.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 856.31s | 58,390.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.42s | 95,969.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.63s | 124,021.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.69s | 133,087.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.8 444.9,115.2 700.0,141.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.2 444.9,220.4 700.0,219.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.2" r="4" fill="#198754"/><circle cx="444.9" cy="220.4" r="4" fill="#198754"/><circle cx="700.0" cy="219.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.1 444.9,262.2 700.0,265.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="265.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.0 444.9,62.3 700.0,151.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.2 444.9,239.0 700.0,193.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,224.5 444.9,102.9 700.0,158.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#20c997"/><circle cx="444.9" cy="102.9" r="4" fill="#20c997"/><circle cx="700.0" cy="158.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.83s | 92,370.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.06s | 144,812.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.33s | 127,445.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.89s | 59,196.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.38s | 75,541.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 658.55s | 75,924.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.15s | 36,829.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 208.56s | 47,947.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1086.69s | 46,011.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.99s | 143,000.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 55.65s | 179,710.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.30s | 120,976.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.74s | 45,991.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.01s | 63,288.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 535.01s | 93,456.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.73s | 72,822.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.38s | 152,959.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 428.92s | 116,573.2 | PASS |

:::

:::

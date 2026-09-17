## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-16T22:36:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.3 444.9,73.8 700.0,104.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.6 444.9,161.8 700.0,175.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.6" r="4" fill="#198754"/><circle cx="444.9" cy="161.8" r="4" fill="#198754"/><circle cx="700.0" cy="175.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.8 444.9,216.8 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.7 444.9,100.3 700.0,111.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.9 444.9,212.3 700.0,213.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.8 444.9,104.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.8" r="4" fill="#20c997"/><circle cx="444.9" cy="104.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,428.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.93s | 128,321.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 441.08s | 113,358.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.30s | 69,925.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.57s | 85,055.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 639.50s | 78,186.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.99s | 52,656.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.17s | 58,083.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 971.09s | 51,488.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.54s | 104,777.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.73s | 115,299.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 454.40s | 110,035.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.01s | 52,595.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 165.96s | 60,255.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 840.16s | 59,512.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.48s | 80,147.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 88.23s | 113,336.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.22s | 133,967.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,86.0 700.0,84.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.6 444.9,181.9 700.0,180.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.6" r="4" fill="#198754"/><circle cx="444.9" cy="181.9" r="4" fill="#198754"/><circle cx="700.0" cy="180.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.4 444.9,231.8 700.0,224.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,70.4 444.9,95.6 700.0,101.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="70.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="95.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.4 444.9,246.4 700.0,222.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.9 444.9,106.5 700.0,76.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.9" r="4" fill="#20c997"/><circle cx="444.9" cy="106.5" r="4" fill="#20c997"/><circle cx="700.0" cy="76.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.17s | 139,470.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.52s | 127,351.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.76s | 128,284.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.13s | 70,756.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.70s | 78,307.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.52s | 78,923.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.46s | 48,868.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.39s | 52,800.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.39s | 56,728.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.39s | 135,336.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.68s | 122,430.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 418.07s | 119,597.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.04s | 49,907.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 220.66s | 45,319.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 869.73s | 57,489.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.37s | 80,827.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.57s | 116,867.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.09s | 132,244.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-17T22:30:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,77.2 444.9,110.8 700.0,101.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="77.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.9 444.9,170.7 700.0,164.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#198754"/><circle cx="444.9" cy="170.7" r="4" fill="#198754"/><circle cx="700.0" cy="164.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.4 444.9,225.4 700.0,218.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.6 444.9,62.3 700.0,105.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="105.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.2 444.9,221.9 700.0,222.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.9 444.9,93.2 700.0,69.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.2" r="4" fill="#20c997"/><circle cx="700.0" cy="69.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.30s | 136,948.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.96s | 119,108.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 402.40s | 124,253.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.58s | 68,568.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.57s | 87,284.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 550.72s | 90,791.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.48s | 51,334.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.82s | 58,201.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 809.53s | 61,764.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.05s | 99,542.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 69.02s | 144,891.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.81s | 121,712.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.79s | 56,211.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 166.49s | 60,065.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 837.29s | 59,716.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.06s | 82,932.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.84s | 128,462.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.88s | 140,891.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">169k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">226k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.8 444.9,62.3 700.0,150.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.7 444.9,233.3 700.0,229.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#198754"/><circle cx="444.9" cy="233.3" r="4" fill="#198754"/><circle cx="700.0" cy="229.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.4 444.9,256.3 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,168.1 444.9,170.6 700.0,158.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="170.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.2 444.9,256.8 700.0,257.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="257.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,230.1 444.9,171.9 700.0,155.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="230.1" r="4" fill="#20c997"/><circle cx="444.9" cy="171.9" r="4" fill="#20c997"/><circle cx="700.0" cy="155.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,229.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 48.72s | 205,267.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 359.29s | 139,164.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.39s | 64,968.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.63s | 76,550.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 629.15s | 79,471.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.92s | 45,612.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.87s | 59,217.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 859.45s | 58,176.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.96s | 125,643.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.83s | 123,722.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 375.45s | 133,173.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.59s | 51,054.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.90s | 58,859.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 861.00s | 58,071.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.67s | 78,926.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.47s | 122,743.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 370.97s | 134,780.3 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-16T22:58:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">123k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,142.5 444.9,184.4 700.0,75.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="184.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,165.1 444.9,163.2 700.0,221.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="165.1" r="4" fill="#198754"/><circle cx="444.9" cy="163.2" r="4" fill="#198754"/><circle cx="700.0" cy="221.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,211.9 444.9,213.1 700.0,201.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="211.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,69.0 444.9,142.6 700.0,72.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="69.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.3 444.9,211.5 700.0,182.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="182.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.9 444.9,65.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#20c997"/><circle cx="444.9" cy="65.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,063.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 161.66s | 61,856.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 469.61s | 106,470.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.33s | 69,783.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 141.73s | 70,555.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 1069.09s | 46,768.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.78s | 50,551.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 199.72s | 50,070.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.58s | 54,970.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.15s | 109,253.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 126.56s | 79,012.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 464.09s | 107,737.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.52s | 48,730.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.17s | 50,717.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 798.60s | 62,609.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.57s | 68,624.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 90.49s | 110,514.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 446.41s | 112,004.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,123.2 444.9,105.5 700.0,107.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="123.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.5 444.9,183.7 700.0,254.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#198754"/><circle cx="444.9" cy="183.7" r="4" fill="#198754"/><circle cx="700.0" cy="254.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.9 444.9,221.6 700.0,227.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.3 444.9,114.7 700.0,64.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="64.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.3 444.9,228.6 700.0,229.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.7 444.9,119.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#20c997"/><circle cx="444.9" cy="119.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,620.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.52s | 103,603.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 485.98s | 102,884.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.34s | 69,754.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.39s | 68,310.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 1367.82s | 36,554.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.74s | 38,853.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 195.31s | 51,202.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1028.74s | 48,603.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.72s | 93,301.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 100.53s | 99,469.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 408.76s | 122,319.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 24.97s | 40,054.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 208.23s | 48,023.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1050.05s | 47,616.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.64s | 68,296.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.69s | 97,383.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 406.08s | 123,126.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-17T22:40:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.0 444.9,160.6 700.0,154.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="160.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.1 444.9,210.6 700.0,163.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.1" r="4" fill="#198754"/><circle cx="444.9" cy="210.6" r="4" fill="#198754"/><circle cx="700.0" cy="163.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,201.5 444.9,247.1 700.0,244.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="201.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.3 444.9,97.8 700.0,120.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.0 444.9,239.1 700.0,244.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.3 444.9,62.3 700.0,120.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="120.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.71s | 93,362.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 90.29s | 110,755.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 434.89s | 114,970.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.86s | 67,285.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.53s | 79,035.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 457.81s | 109,216.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.79s | 84,781.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.14s | 55,821.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.03s | 57,667.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.17s | 109,063.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 66.38s | 150,650.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 367.38s | 136,097.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.71s | 48,276.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 164.11s | 60,935.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 867.37s | 57,645.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.19s | 89,389.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 57.73s | 173,223.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.21s | 136,163.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">159k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">212k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,185.8 444.9,137.3 700.0,139.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.7 444.9,225.1 700.0,207.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#198754"/><circle cx="444.9" cy="225.1" r="4" fill="#198754"/><circle cx="700.0" cy="207.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.6 444.9,252.5 700.0,244.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.7 444.9,144.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.4 444.9,252.7 700.0,252.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="252.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,261.4 444.9,161.7 700.0,119.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="261.4" r="4" fill="#20c997"/><circle cx="444.9" cy="161.7" r="4" fill="#20c997"/><circle cx="700.0" cy="119.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.51s | 105,196.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.73s | 139,405.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 361.84s | 138,181.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.60s | 73,524.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.09s | 77,464.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 557.92s | 89,618.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.01s | 45,431.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.90s | 58,172.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 784.56s | 63,729.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.50s | 105,263.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 74.56s | 134,125.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 260.04s | 192,275.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.00s | 52,628.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.25s | 58,053.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 862.07s | 57,999.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 19.28s | 51,872.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.84s | 122,186.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 329.69s | 151,659.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-16T22:27:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.8 444.9,62.3 700.0,88.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.7 444.9,189.2 700.0,199.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.7" r="4" fill="#198754"/><circle cx="444.9" cy="189.2" r="4" fill="#198754"/><circle cx="700.0" cy="199.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.9 444.9,225.9 700.0,235.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.6 444.9,111.0 700.0,128.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.1 444.9,245.2 700.0,207.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.6 444.9,122.2 700.0,111.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.6" r="4" fill="#20c997"/><circle cx="444.9" cy="122.2" r="4" fill="#20c997"/><circle cx="700.0" cy="111.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.32s | 88,354.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 60.24s | 166,005.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 333.31s | 150,010.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.54s | 73,833.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.65s | 88,773.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 605.07s | 82,635.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.25s | 49,377.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.63s | 66,388.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 828.21s | 60,371.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.70s | 103,092.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.33s | 136,360.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 396.84s | 125,996.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.91s | 52,887.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.03s | 54,636.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 646.48s | 77,341.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.87s | 101,286.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.21s | 129,520.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.15s | 135,812.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,86.9 444.9,62.3 700.0,107.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="86.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.9 444.9,205.0 700.0,195.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.9" r="4" fill="#198754"/><circle cx="444.9" cy="205.0" r="4" fill="#198754"/><circle cx="700.0" cy="195.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.5 444.9,233.7 700.0,241.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,172.9 444.9,119.4 700.0,127.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="172.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="119.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.8 444.9,230.2 700.0,221.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.3 444.9,128.5 700.0,104.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.3" r="4" fill="#20c997"/><circle cx="444.9" cy="128.5" r="4" fill="#20c997"/><circle cx="700.0" cy="104.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.77s | 147,797.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.54s | 162,490.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.56s | 135,663.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.24s | 81,666.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.13s | 77,438.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 603.13s | 82,900.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.53s | 44,387.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 165.70s | 60,350.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 893.28s | 55,973.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.36s | 96,571.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.85s | 128,455.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.46s | 123,622.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.93s | 50,168.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.21s | 62,418.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 740.09s | 67,559.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.07s | 99,334.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.29s | 123,017.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 363.88s | 137,408.7 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-17T22:42:13Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.4 444.9,110.5 700.0,103.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.8 444.9,186.8 700.0,183.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.8" r="4" fill="#198754"/><circle cx="444.9" cy="186.8" r="4" fill="#198754"/><circle cx="700.0" cy="183.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.3 444.9,236.2 700.0,243.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.6 444.9,90.3 700.0,76.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="76.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,221.2 444.9,227.9 700.0,200.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="221.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.9 444.9,77.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#20c997"/><circle cx="444.9" cy="77.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.76s | 85,070.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.77s | 113,936.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 425.70s | 117,452.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.25s | 61,527.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.99s | 75,193.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 651.44s | 76,752.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.72s | 40,456.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 199.41s | 50,148.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1070.73s | 46,697.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,627.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.51s | 124,205.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 380.81s | 131,299.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.31s | 57,760.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 184.03s | 54,340.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 733.13s | 68,200.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,098.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.50s | 130,712.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.26s | 138,405.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,124.2 444.9,112.8 700.0,79.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="124.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.8 444.9,198.7 700.0,148.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.8" r="4" fill="#198754"/><circle cx="444.9" cy="198.7" r="4" fill="#198754"/><circle cx="700.0" cy="148.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.9 444.9,246.2 700.0,253.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.2 444.9,114.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.8 444.9,226.2 700.0,219.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.8 444.9,104.2 700.0,84.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.8" r="4" fill="#20c997"/><circle cx="444.9" cy="104.2" r="4" fill="#20c997"/><circle cx="700.0" cy="84.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.83s | 113,288.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.74s | 119,418.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 364.11s | 137,319.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.15s | 61,904.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.49s | 73,266.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 497.52s | 100,499.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.76s | 40,381.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 209.54s | 47,723.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1143.98s | 43,706.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.83s | 92,344.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.27s | 118,670.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 341.16s | 146,559.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.34s | 46,853.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.10s | 58,446.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 802.49s | 62,305.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.73s | 78,579.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.63s | 124,017.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 371.98s | 134,416.2 | PASS |

:::

:::

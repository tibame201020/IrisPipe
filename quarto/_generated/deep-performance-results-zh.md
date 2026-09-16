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
  **最新量測：** `2026-09-16T22:24:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">175k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.7 444.9,115.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.6 444.9,195.9 700.0,155.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.6" r="4" fill="#198754"/><circle cx="444.9" cy="195.9" r="4" fill="#198754"/><circle cx="700.0" cy="155.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.1 444.9,242.8 700.0,214.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.8 444.9,129.8 700.0,119.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="129.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,183.8 444.9,217.4 700.0,233.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.1 444.9,109.4 700.0,105.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.1" r="4" fill="#20c997"/><circle cx="444.9" cy="109.4" r="4" fill="#20c997"/><circle cx="700.0" cy="105.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.64s | 115,767.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.14s | 127,980.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 314.09s | 159,189.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,274.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.18s | 81,182.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 476.40s | 104,954.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.28s | 51,861.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.81s | 53,817.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 710.55s | 70,367.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.19s | 122,115.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.50s | 119,756.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.75s | 125,708.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,269.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 145.65s | 68,658.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 840.67s | 59,476.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.60s | 73,513.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.95s | 131,660.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.61s | 134,188.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.7 444.9,75.1 700.0,70.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="70.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.4 444.9,164.0 700.0,151.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.4" r="4" fill="#198754"/><circle cx="444.9" cy="164.0" r="4" fill="#198754"/><circle cx="700.0" cy="151.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.2 444.9,218.6 700.0,214.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.7 444.9,97.6 700.0,101.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.5 444.9,189.5 700.0,183.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="189.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.0 444.9,176.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#20c997"/><circle cx="444.9" cy="176.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.91s | 100,887.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.25s | 132,881.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 369.73s | 135,234.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.86s | 67,281.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.35s | 87,447.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 531.32s | 94,104.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.31s | 46,935.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.99s | 59,526.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 811.85s | 61,587.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.71s | 102,933.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.39s | 121,375.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 418.56s | 119,457.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.85s | 50,375.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 134.40s | 74,404.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 645.40s | 77,471.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.13s | 76,161.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 123.52s | 80,957.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.56s | 139,448.2 | PASS |

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
  **最新量測：** `2026-09-16T22:38:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,114.5 444.9,128.0 700.0,118.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="114.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="128.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="118.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.6 444.9,198.8 700.0,169.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#198754"/><circle cx="444.9" cy="198.8" r="4" fill="#198754"/><circle cx="700.0" cy="169.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.9 444.9,246.6 700.0,257.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,157.8 444.9,117.8 700.0,114.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="157.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.4 444.9,238.6 700.0,223.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.3 444.9,146.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#20c997"/><circle cx="444.9" cy="146.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.31s | 136,836.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.86s | 128,437.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 372.78s | 134,127.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.72s | 72,859.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.28s | 84,548.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 487.28s | 102,610.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.08s | 55,318.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 182.25s | 54,870.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1037.01s | 48,215.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.09s | 109,962.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 74.18s | 134,805.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 365.94s | 136,635.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.60s | 56,818.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 167.12s | 59,838.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 721.88s | 69,263.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.92s | 77,405.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.68s | 116,717.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 295.44s | 169,238.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,64.5 444.9,67.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="64.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.0 444.9,177.9 700.0,62.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.0" r="4" fill="#198754"/><circle cx="444.9" cy="177.9" r="4" fill="#198754"/><circle cx="700.0" cy="62.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.7 444.9,245.0 700.0,219.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.8 444.9,89.2 700.0,122.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.7 444.9,140.5 700.0,216.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="140.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.5 444.9,193.3 700.0,81.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.5" r="4" fill="#20c997"/><circle cx="444.9" cy="193.3" r="4" fill="#20c997"/><circle cx="700.0" cy="81.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.50s | 133,404.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.93s | 131,707.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 371.74s | 134,502.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.37s | 65,083.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.10s | 77,456.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 372.57s | 134,202.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.84s | 47,975.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 225.27s | 44,390.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 879.15s | 56,873.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.74s | 102,701.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.48s | 121,235.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 477.81s | 104,644.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 24.33s | 41,094.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.24s | 95,930.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.84s | 58,558.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.49s | 87,054.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 143.07s | 69,896.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.42s | 125,180.3 | PASS |

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
  **最新量測：** `2026-09-16T22:46:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.1 444.9,87.1 700.0,112.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="112.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.2 444.9,167.9 700.0,182.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.2" r="4" fill="#198754"/><circle cx="444.9" cy="167.9" r="4" fill="#198754"/><circle cx="700.0" cy="182.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.1 444.9,224.0 700.0,234.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.3 444.9,93.7 700.0,83.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="83.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.6 444.9,225.4 700.0,207.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.4 444.9,155.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.4" r="4" fill="#20c997"/><circle cx="444.9" cy="155.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,326.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.84s | 122,183.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 455.08s | 109,869.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.52s | 60,521.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.41s | 82,367.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 663.04s | 75,409.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.19s | 41,337.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 182.85s | 54,688.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1009.30s | 49,539.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.28s | 107,781.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.08s | 118,935.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.18s | 124,013.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.05s | 47,505.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.10s | 54,024.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 794.69s | 62,917.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.55s | 79,662.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 113.24s | 88,307.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.99s | 134,413.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.2 444.9,129.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="129.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.6 444.9,202.8 700.0,195.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#198754"/><circle cx="444.9" cy="202.8" r="4" fill="#198754"/><circle cx="700.0" cy="195.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.6 444.9,253.0 700.0,247.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.2 444.9,124.0 700.0,145.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.9 444.9,254.1 700.0,228.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.7 444.9,107.4 700.0,157.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.7" r="4" fill="#20c997"/><circle cx="444.9" cy="107.4" r="4" fill="#20c997"/><circle cx="700.0" cy="157.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.89s | 77,591.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 89.62s | 111,579.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 337.46s | 148,164.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.23s | 61,625.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.28s | 71,798.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 661.50s | 75,585.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.41s | 40,968.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 224.52s | 44,539.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1054.23s | 47,427.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.71s | 93,353.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.22s | 114,647.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 486.13s | 102,853.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.89s | 47,876.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 227.45s | 43,965.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 867.73s | 57,621.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.02s | 76,781.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.88s | 123,644.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 519.35s | 96,274.4 | PASS |

:::

:::

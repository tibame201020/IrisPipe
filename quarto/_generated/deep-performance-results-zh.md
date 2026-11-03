## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-03T02:13:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.3 444.9,151.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.3 444.9,219.6 700.0,216.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.3" r="4" fill="#198754"/><circle cx="444.9" cy="219.6" r="4" fill="#198754"/><circle cx="700.0" cy="216.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.8 444.9,252.3 700.0,251.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.8 444.9,165.5 700.0,164.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="165.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="164.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.0 444.9,251.8 700.0,244.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.9 444.9,160.4 700.0,153.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.9" r="4" fill="#20c997"/><circle cx="444.9" cy="160.4" r="4" fill="#20c997"/><circle cx="700.0" cy="153.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.84s | 113,109.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.09s | 123,315.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 273.49s | 182,822.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.42s | 64,838.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.25s | 77,367.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 629.97s | 79,368.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.32s | 51,770.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.44s | 55,418.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 894.34s | 55,907.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.61s | 116,117.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.00s | 113,642.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 438.40s | 114,051.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.42s | 48,964.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.35s | 55,755.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 820.06s | 60,971.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.47s | 69,122.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.42s | 117,067.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 410.67s | 121,752.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.7 444.9,116.4 700.0,124.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.4 444.9,216.4 700.0,213.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#198754"/><circle cx="444.9" cy="216.4" r="4" fill="#198754"/><circle cx="700.0" cy="213.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.7 444.9,255.3 700.0,236.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,134.3 700.0,62.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,210.0 444.9,242.8 700.0,245.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.7 444.9,106.6 700.0,149.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#20c997"/><circle cx="444.9" cy="106.6" r="4" fill="#20c997"/><circle cx="700.0" cy="149.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,764.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.77s | 137,419.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 378.48s | 132,106.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.07s | 66,352.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.17s | 74,532.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 655.82s | 76,240.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.71s | 46,061.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 199.69s | 50,078.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 807.03s | 61,955.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.83s | 171,409.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.28s | 126,135.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 292.39s | 171,004.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.73s | 78,560.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.60s | 57,938.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 886.44s | 56,405.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.80s | 92,549.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 69.66s | 143,550.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 429.27s | 116,477.6 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-03T02:01:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">169k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">226k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.5 444.9,149.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.5 444.9,232.3 700.0,227.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#198754"/><circle cx="444.9" cy="232.3" r="4" fill="#198754"/><circle cx="700.0" cy="227.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.4 444.9,253.7 700.0,259.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,200.1 444.9,92.0 700.0,159.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="200.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.2 444.9,265.5 700.0,206.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.6 444.9,155.4 700.0,156.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#20c997"/><circle cx="444.9" cy="155.4" r="4" fill="#20c997"/><circle cx="700.0" cy="156.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,009.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.51s | 139,834.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 243.52s | 205,319.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,108.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.37s | 77,298.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 616.27s | 81,132.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.57s | 48,621.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 163.32s | 61,229.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 873.49s | 57,241.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.85s | 101,564.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.66s | 182,932.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.38s | 131,794.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.88s | 50,306.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 191.03s | 52,347.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 518.52s | 96,427.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.49s | 80,083.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.95s | 135,232.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.61s | 134,187.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.3 444.9,126.0 700.0,132.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="132.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.5 444.9,210.2 700.0,205.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.5" r="4" fill="#198754"/><circle cx="444.9" cy="210.2" r="4" fill="#198754"/><circle cx="700.0" cy="205.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.9 444.9,242.1 700.0,233.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,138.8 700.0,140.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.9 444.9,228.5 700.0,242.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.0 444.9,153.6 700.0,69.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#20c997"/><circle cx="444.9" cy="153.6" r="4" fill="#20c997"/><circle cx="700.0" cy="69.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.61s | 94,286.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.00s | 129,876.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 397.91s | 125,656.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.14s | 76,120.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.99s | 77,528.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 619.33s | 80,732.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.69s | 53,498.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.22s | 57,731.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 795.14s | 62,881.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.90s | 169,491.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.99s | 121,960.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.90s | 121,094.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.48s | 87,092.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 151.06s | 66,198.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 872.22s | 57,324.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.66s | 85,785.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 88.69s | 112,758.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 302.80s | 165,128.2 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-01T23:27:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.9 444.9,62.3 700.0,88.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.7 444.9,188.5 700.0,103.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.7" r="4" fill="#198754"/><circle cx="444.9" cy="188.5" r="4" fill="#198754"/><circle cx="700.0" cy="103.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,167.9 444.9,213.0 700.0,213.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.7 444.9,96.6 700.0,73.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.9 444.9,229.3 700.0,165.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="165.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,114.0 444.9,105.7 700.0,79.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="114.0" r="4" fill="#20c997"/><circle cx="444.9" cy="105.7" r="4" fill="#20c997"/><circle cx="700.0" cy="79.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.80s | 84,760.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.37s | 122,899.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 449.17s | 111,316.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.34s | 74,951.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 151.50s | 66,004.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 478.37s | 104,521.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.28s | 75,284.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.91s | 54,971.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 915.95s | 54,588.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,644.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.08s | 107,433.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 423.78s | 117,985.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.39s | 44,658.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 209.94s | 47,632.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.27s | 76,537.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.04s | 99,601.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.79s | 103,316.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 434.51s | 115,072.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">132k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.7 444.9,85.3 700.0,107.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.9 444.9,137.1 700.0,181.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#198754"/><circle cx="444.9" cy="137.1" r="4" fill="#198754"/><circle cx="700.0" cy="181.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.7 444.9,206.1 700.0,207.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.0 444.9,97.3 700.0,91.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.4 444.9,219.4 700.0,139.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.7 444.9,118.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#20c997"/><circle cx="444.9" cy="118.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.32s | 81,135.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 90.96s | 109,936.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 500.08s | 99,983.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.22s | 61,659.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.80s | 87,105.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 741.57s | 67,424.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.57s | 46,356.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.16s | 56,765.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 890.67s | 56,137.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.10s | 99,039.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.56s | 104,647.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 466.81s | 107,109.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.58s | 44,285.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.47s | 50,898.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 581.80s | 85,939.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.82s | 67,490.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.09s | 95,157.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 416.44s | 120,063.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-01T23:17:01Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,191.3 444.9,142.2 700.0,136.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.0 444.9,213.2 700.0,206.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#198754"/><circle cx="444.9" cy="213.2" r="4" fill="#198754"/><circle cx="700.0" cy="206.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.3 444.9,251.8 700.0,251.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.8 444.9,67.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="67.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.6 444.9,203.9 700.0,189.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.8 444.9,138.8 700.0,126.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#20c997"/><circle cx="444.9" cy="138.8" r="4" fill="#20c997"/><circle cx="700.0" cy="126.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.75s | 92,988.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.18s | 124,713.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 389.39s | 128,404.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.71s | 67,962.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.92s | 78,788.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 603.25s | 82,884.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.91s | 52,879.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.72s | 53,843.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 921.46s | 54,261.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.19s | 108,813.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.75s | 173,169.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 283.37s | 176,449.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.56s | 60,397.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 117.87s | 84,841.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 529.68s | 94,397.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.02s | 90,719.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.76s | 126,964.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.70s | 134,881.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.5 444.9,91.1 700.0,118.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="91.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="118.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,232.4 444.9,220.3 700.0,217.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="232.4" r="4" fill="#198754"/><circle cx="444.9" cy="220.3" r="4" fill="#198754"/><circle cx="700.0" cy="217.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.0 444.9,249.9 700.0,243.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,134.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.6 444.9,199.9 700.0,226.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,226.3 444.9,113.0 700.0,133.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="226.3" r="4" fill="#20c997"/><circle cx="444.9" cy="113.0" r="4" fill="#20c997"/><circle cx="700.0" cy="133.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,540.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 62.75s | 159,357.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.27s | 141,534.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.92s | 67,015.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.40s | 74,963.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.55s | 76,976.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.17s | 45,112.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.79s | 55,618.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 838.55s | 59,627.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.79s | 102,124.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.45s | 130,807.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 280.61s | 178,184.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.51s | 51,250.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 113.31s | 88,249.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 704.20s | 71,002.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.08s | 71,042.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 68.95s | 145,036.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.02s | 131,572.4 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-01T23:05:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.7 444.9,159.2 700.0,151.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.6 444.9,152.3 700.0,221.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#198754"/><circle cx="444.9" cy="152.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.4 444.9,257.3 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.0 444.9,159.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,213.7 444.9,258.8 700.0,201.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="213.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="258.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.2 444.9,147.2 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#20c997"/><circle cx="444.9" cy="147.2" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,645.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.14s | 124,777.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.86s | 129,918.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.49s | 74,123.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.14s | 129,642.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 619.55s | 80,703.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,367.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.25s | 55,171.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 910.99s | 54,885.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.46s | 105,764.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.23s | 124,643.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 258.33s | 193,553.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,103.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.00s | 54,054.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 528.13s | 94,672.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,030.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.03s | 133,283.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.48s | 133,875.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,190.8 444.9,137.6 700.0,158.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="158.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.5 444.9,142.9 700.0,105.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.5" r="4" fill="#198754"/><circle cx="444.9" cy="142.9" r="4" fill="#198754"/><circle cx="700.0" cy="105.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.6 444.9,241.2 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.5 444.9,62.3 700.0,143.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.6 444.9,183.0 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.9 444.9,146.5 700.0,118.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#20c997"/><circle cx="444.9" cy="146.5" r="4" fill="#20c997"/><circle cx="700.0" cy="118.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,041.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.22s | 124,651.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 448.39s | 111,510.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,039.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.46s | 121,269.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 345.15s | 144,863.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,943.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.83s | 59,232.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 813.24s | 61,482.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.09s | 141,123.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.08s | 172,176.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.87s | 121,104.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.10s | 62,104.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.23s | 95,939.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.17s | 58,399.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,893.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.03s | 119,005.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.52s | 136,789.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-01T23:21:01Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,75.0 444.9,95.8 700.0,100.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="75.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="100.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.6 444.9,180.8 700.0,173.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#198754"/><circle cx="444.9" cy="180.8" r="4" fill="#198754"/><circle cx="700.0" cy="173.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.0 444.9,180.7 700.0,234.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="180.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.8 444.9,93.7 700.0,80.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.6 444.9,155.4 700.0,218.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="155.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.8 444.9,75.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.8" r="4" fill="#20c997"/><circle cx="444.9" cy="75.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.96s | 125,549.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.58s | 115,504.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 441.93s | 113,139.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,408.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.31s | 74,451.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 640.15s | 78,107.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.00s | 43,468.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 134.19s | 74,524.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1026.97s | 48,687.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.61s | 94,268.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.82s | 116,521.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 406.06s | 123,135.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.95s | 45,564.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 115.30s | 86,729.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 885.82s | 56,444.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.93s | 77,339.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.83s | 125,259.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.69s | 131,684.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.2 444.9,146.7 700.0,146.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.3 444.9,227.5 700.0,224.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#198754"/><circle cx="444.9" cy="227.5" r="4" fill="#198754"/><circle cx="700.0" cy="224.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.2 444.9,264.2 700.0,271.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="271.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.4 444.9,162.7 700.0,151.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.5 444.9,252.1 700.0,233.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.4 444.9,62.3 700.0,143.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="143.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.88s | 84,168.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.03s | 124,950.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 400.12s | 124,961.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.03s | 76,763.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 140.17s | 71,343.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 681.62s | 73,355.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.60s | 42,371.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 212.73s | 47,008.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1176.36s | 42,504.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.96s | 143,760.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.44s | 114,369.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.46s | 121,813.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.39s | 46,755.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.67s | 55,044.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 745.37s | 67,080.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.51s | 74,030.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 55.25s | 180,988.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 392.97s | 127,237.5 | PASS |

:::

:::

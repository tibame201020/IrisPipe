## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-21T22:55:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,102.6 444.9,147.9 700.0,86.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.6 444.9,209.0 700.0,200.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#198754"/><circle cx="444.9" cy="209.0" r="4" fill="#198754"/><circle cx="700.0" cy="200.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.4 444.9,201.9 700.0,237.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="201.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.6 444.9,62.3 700.0,145.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.3 444.9,246.9 700.0,217.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.4 444.9,77.6 700.0,121.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.4" r="4" fill="#20c997"/><circle cx="444.9" cy="77.6" r="4" fill="#20c997"/><circle cx="700.0" cy="121.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.94s | 144,071.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.20s | 116,006.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 324.60s | 154,035.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.48s | 69,056.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.09s | 78,073.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 600.09s | 83,321.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.96s | 71,643.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 121.19s | 82,516.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 830.88s | 60,177.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.41s | 106,247.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.15s | 169,053.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 425.34s | 117,553.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.76s | 50,612.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.04s | 54,631.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 684.86s | 73,007.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.94s | 77,255.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.68s | 159,530.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.66s | 132,392.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.0 444.9,62.3 700.0,80.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="80.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.3 444.9,207.3 700.0,212.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#198754"/><circle cx="444.9" cy="207.3" r="4" fill="#198754"/><circle cx="700.0" cy="212.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.4 444.9,240.8 700.0,248.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,82.2 444.9,145.0 700.0,150.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="82.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="145.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.7 444.9,241.8 700.0,244.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.5 444.9,150.4 700.0,130.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.5" r="4" fill="#20c997"/><circle cx="444.9" cy="150.4" r="4" fill="#20c997"/><circle cx="700.0" cy="130.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.49s | 105,363.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 58.11s | 172,075.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 310.76s | 160,893.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.74s | 63,520.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.09s | 80,584.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 645.51s | 77,457.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.97s | 47,678.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.28s | 59,426.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 916.94s | 54,529.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.27s | 159,489.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.43s | 119,863.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 429.05s | 116,536.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.78s | 48,125.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.97s | 58,832.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 873.83s | 57,219.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.68s | 93,668.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.87s | 116,455.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 387.89s | 128,903.9 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-21T22:44:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,121.4 444.9,95.7 700.0,165.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="121.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="165.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,167.5 444.9,114.6 700.0,203.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#198754"/><circle cx="444.9" cy="114.6" r="4" fill="#198754"/><circle cx="700.0" cy="203.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.0 444.9,230.8 700.0,224.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,129.3 444.9,144.6 700.0,142.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="129.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.7 444.9,242.9 700.0,173.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="173.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.3 444.9,62.3 700.0,130.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="130.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.47s | 133,833.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 66.69s | 149,958.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 471.74s | 105,991.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.53s | 104,942.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 72.41s | 138,094.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 606.01s | 82,507.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.46s | 51,374.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 153.19s | 65,277.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 722.64s | 69,190.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.76s | 128,882.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.82s | 119,301.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.40s | 120,654.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,344.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.22s | 57,731.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 494.55s | 101,102.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.29s | 69,969.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.52s | 170,887.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.94s | 127,897.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">173k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">231k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.8 444.9,157.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.8 444.9,235.8 700.0,231.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.8" r="4" fill="#198754"/><circle cx="444.9" cy="235.8" r="4" fill="#198754"/><circle cx="700.0" cy="231.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.9 444.9,259.2 700.0,258.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,205.6 444.9,98.5 700.0,86.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="205.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.6 444.9,205.5 700.0,259.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="259.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.2 444.9,182.8 700.0,161.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.2" r="4" fill="#20c997"/><circle cx="444.9" cy="182.8" r="4" fill="#20c997"/><circle cx="700.0" cy="161.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.87s | 145,602.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.40s | 136,234.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 238.27s | 209,844.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.58s | 68,605.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.98s | 76,345.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 627.29s | 79,707.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.93s | 47,787.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.54s | 58,294.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 849.48s | 58,859.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,571.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.96s | 181,937.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 261.68s | 191,073.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.86s | 67,276.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 100.39s | 99,611.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 861.94s | 58,008.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,853.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.37s | 117,141.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.17s | 133,629.8 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-20T23:04:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,131.6 444.9,139.1 700.0,137.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.2 444.9,189.9 700.0,196.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.2" r="4" fill="#198754"/><circle cx="444.9" cy="189.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.0 444.9,182.4 700.0,172.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="182.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="172.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.8 444.9,62.3 700.0,94.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.9 444.9,230.5 700.0,174.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="174.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.0 444.9,137.0 700.0,103.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#20c997"/><circle cx="444.9" cy="137.0" r="4" fill="#20c997"/><circle cx="700.0" cy="103.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.09s | 99,108.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 104.78s | 95,433.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 520.50s | 96,060.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.79s | 67,613.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 141.43s | 70,707.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 739.27s | 67,633.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.07s | 43,352.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 134.51s | 74,346.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 631.49s | 79,177.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.25s | 97,551.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.25s | 132,885.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 425.98s | 117,375.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.99s | 52,667.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.35s | 50,928.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 639.71s | 78,160.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.68s | 73,078.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.63s | 96,497.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 443.21s | 112,812.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,109.0 444.9,146.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.8 444.9,212.4 700.0,207.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.8" r="4" fill="#198754"/><circle cx="444.9" cy="212.4" r="4" fill="#198754"/><circle cx="700.0" cy="207.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.2 444.9,244.2 700.0,237.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.0 444.9,66.7 700.0,139.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="66.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.3 444.9,245.5 700.0,244.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.9 444.9,104.8 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#20c997"/><circle cx="444.9" cy="104.8" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.22s | 121,684.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 98.29s | 101,736.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 340.48s | 146,853.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.41s | 60,957.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 151.43s | 66,036.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.53s | 68,915.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.38s | 46,763.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.63s | 48,869.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 953.99s | 52,411.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.67s | 93,685.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 69.22s | 144,477.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 474.14s | 105,454.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 24.22s | 41,293.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 207.49s | 48,195.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1023.59s | 48,847.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.79s | 92,652.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.66s | 123,975.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 433.86s | 115,245.3 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-20T22:54:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.7 444.9,136.4 700.0,78.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="78.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.5 444.9,150.2 700.0,188.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.5" r="4" fill="#198754"/><circle cx="444.9" cy="150.2" r="4" fill="#198754"/><circle cx="700.0" cy="188.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.5 444.9,247.6 700.0,200.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.9 444.9,135.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.2 444.9,229.8 700.0,245.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.6 444.9,107.9 700.0,122.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.6" r="4" fill="#20c997"/><circle cx="444.9" cy="107.9" r="4" fill="#20c997"/><circle cx="700.0" cy="122.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.11s | 98,912.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.03s | 129,828.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 298.73s | 167,373.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,419.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.77s | 120,810.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 520.47s | 96,067.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.25s | 51,934.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.05s | 57,125.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 569.98s | 87,721.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.01s | 124,890.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.76s | 130,279.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 280.49s | 178,262.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.48s | 54,112.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 145.44s | 68,755.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 850.03s | 58,821.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.67s | 93,703.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.38s | 148,412.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.32s | 139,152.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">222k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.6 444.9,62.3 700.0,144.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.1 444.9,257.8 700.0,225.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#198754"/><circle cx="444.9" cy="257.8" r="4" fill="#198754"/><circle cx="700.0" cy="225.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.1 444.9,254.1 700.0,258.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.6 444.9,167.3 700.0,173.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="173.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.2 444.9,242.2 700.0,255.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="255.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,236.0 444.9,171.1 700.0,164.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#20c997"/><circle cx="444.9" cy="171.1" r="4" fill="#20c997"/><circle cx="700.0" cy="164.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.94s | 111,831.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 49.65s | 201,418.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.13s | 140,793.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.27s | 70,082.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 175.37s | 57,021.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 617.24s | 81,006.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.24s | 49,399.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.27s | 59,782.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.38s | 56,729.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.56s | 152,415.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.75s | 123,837.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.33s | 119,236.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.27s | 49,321.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 145.92s | 68,530.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 847.22s | 59,016.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.68s | 73,094.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.63s | 121,018.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 396.30s | 126,165.8 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-21T22:47:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.3 444.9,62.3 700.0,123.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.0 444.9,210.1 700.0,205.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.0" r="4" fill="#198754"/><circle cx="444.9" cy="210.1" r="4" fill="#198754"/><circle cx="700.0" cy="205.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.5 444.9,247.4 700.0,241.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,170.3 444.9,92.8 700.0,127.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="170.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.0 444.9,237.2 700.0,214.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.7 444.9,118.2 700.0,122.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.7" r="4" fill="#20c997"/><circle cx="444.9" cy="118.2" r="4" fill="#20c997"/><circle cx="700.0" cy="122.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.22s | 89,094.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 58.71s | 170,322.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 379.11s | 131,889.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,029.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.21s | 77,997.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 616.54s | 81,097.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.14s | 49,642.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 182.73s | 54,724.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.93s | 58,621.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.72s | 102,880.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 66.11s | 151,265.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 385.17s | 129,812.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.84s | 53,089.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.78s | 61,056.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 662.55s | 75,466.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.14s | 70,736.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.85s | 135,402.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.21s | 132,550.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.3 444.9,79.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.8 444.9,149.3 700.0,216.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.8" r="4" fill="#198754"/><circle cx="444.9" cy="149.3" r="4" fill="#198754"/><circle cx="700.0" cy="216.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.0 444.9,275.1 700.0,230.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="275.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.0 444.9,67.5 700.0,135.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="67.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.0 444.9,252.3 700.0,246.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.0 444.9,150.7 700.0,77.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#20c997"/><circle cx="444.9" cy="150.7" r="4" fill="#20c997"/><circle cx="700.0" cy="77.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.37s | 135,740.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.39s | 174,249.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 268.36s | 186,314.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.42s | 60,908.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.82s | 126,868.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 619.24s | 80,744.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.84s | 45,795.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 244.29s | 40,935.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 703.35s | 71,088.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,638.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.72s | 182,758.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 367.21s | 136,161.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.53s | 53,972.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.97s | 56,508.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.17s | 60,301.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.84s | 77,881.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.44s | 125,887.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 284.44s | 175,781.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-20T22:54:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,191.6 444.9,62.3 700.0,140.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.0 444.9,208.0 700.0,97.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.0" r="4" fill="#198754"/><circle cx="700.0" cy="97.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.7 444.9,243.0 700.0,248.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.6 444.9,112.4 700.0,111.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="112.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.7 444.9,229.5 700.0,212.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.4 444.9,106.1 700.0,104.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#20c997"/><circle cx="444.9" cy="106.1" r="4" fill="#20c997"/><circle cx="700.0" cy="104.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.03s | 83,104.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.29s | 158,007.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 443.05s | 112,854.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,024.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 135.87s | 73,598.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 362.99s | 137,744.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.71s | 59,840.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 187.65s | 53,289.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 996.98s | 50,151.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.57s | 116,672.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.55s | 128,949.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 385.32s | 129,762.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.03s | 45,392.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.55s | 61,142.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 702.44s | 71,180.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.46s | 80,276.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.41s | 132,615.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.07s | 133,309.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.3 444.9,162.0 700.0,142.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="162.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.6 444.9,217.0 700.0,137.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#198754"/><circle cx="444.9" cy="217.0" r="4" fill="#198754"/><circle cx="700.0" cy="137.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.8 444.9,267.3 700.0,258.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.4 444.9,62.3 700.0,151.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.4 444.9,213.5 700.0,186.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.0 444.9,101.2 700.0,128.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.0" r="4" fill="#20c997"/><circle cx="444.9" cy="101.2" r="4" fill="#20c997"/><circle cx="700.0" cy="128.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,102.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.44s | 109,363.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 410.57s | 121,781.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.92s | 62,814.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.01s | 74,620.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 400.19s | 124,941.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.25s | 41,228.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 233.64s | 42,800.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1039.67s | 48,092.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.33s | 88,253.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.00s | 172,419.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 431.30s | 115,929.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.20s | 47,163.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 130.16s | 76,829.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 531.50s | 94,072.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.40s | 96,107.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 67.67s | 147,784.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.18s | 130,487.0 | PASS |

:::

:::

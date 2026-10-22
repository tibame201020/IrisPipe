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
  **最新量測：** `2026-10-22T22:39:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,187.3 444.9,134.0 700.0,137.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.0 444.9,198.8 700.0,139.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#198754"/><circle cx="444.9" cy="198.8" r="4" fill="#198754"/><circle cx="700.0" cy="139.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.7 444.9,249.8 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.9 444.9,143.7 700.0,138.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.9 444.9,225.3 700.0,229.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.4 444.9,62.3 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.4" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,423.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.67s | 127,105.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.46s | 124,857.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.06s | 66,396.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.13s | 86,111.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 404.01s | 123,759.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.98s | 52,687.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.68s | 53,855.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 754.24s | 66,291.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.59s | 116,441.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.66s | 120,977.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.23s | 123,997.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.44s | 80,379.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.17s | 69,364.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 746.46s | 66,982.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.49s | 87,001.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 57.97s | 172,491.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 419.10s | 119,303.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">215k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.6 444.9,148.4 700.0,98.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="148.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="98.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.2 444.9,206.8 700.0,147.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="147.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.3 444.9,252.8 700.0,255.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,90.1 444.9,172.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="90.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.9 444.9,254.5 700.0,256.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.7 444.9,158.0 700.0,112.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#20c997"/><circle cx="444.9" cy="158.0" r="4" fill="#20c997"/><circle cx="700.0" cy="112.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,950.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.73s | 133,809.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 295.19s | 169,383.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.19s | 65,819.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 108.74s | 91,959.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 372.41s | 134,261.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.73s | 50,684.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.71s | 58,924.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 872.92s | 57,279.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.69s | 175,623.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.59s | 116,829.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 255.65s | 195,577.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.77s | 45,939.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.20s | 57,735.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 891.76s | 56,068.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.04s | 90,579.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.77s | 126,947.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 312.74s | 159,875.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-21T23:20:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.2 444.9,125.4 700.0,131.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.2 444.9,137.6 700.0,186.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.2" r="4" fill="#198754"/><circle cx="444.9" cy="137.6" r="4" fill="#198754"/><circle cx="700.0" cy="186.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.4 444.9,224.1 700.0,207.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,117.1 444.9,90.0 700.0,121.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="117.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.6 444.9,186.8 700.0,230.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="186.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.1 444.9,109.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.1" r="4" fill="#20c997"/><circle cx="444.9" cy="109.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.36s | 88,051.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 102.30s | 97,747.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 526.66s | 94,937.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.41s | 69,401.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.64s | 92,048.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 719.51s | 69,491.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.57s | 51,098.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.45s | 51,692.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.62s | 59,693.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.84s | 101,605.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.53s | 114,242.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 501.24s | 99,752.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.61s | 50,994.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.74s | 69,090.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1021.10s | 48,966.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.25s | 75,483.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 94.92s | 105,357.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 393.15s | 127,176.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.6 444.9,127.8 700.0,159.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="159.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,148.1 444.9,202.7 700.0,193.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="148.1" r="4" fill="#198754"/><circle cx="444.9" cy="202.7" r="4" fill="#198754"/><circle cx="700.0" cy="193.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.9 444.9,235.7 700.0,181.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="181.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,113.5 700.0,128.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="113.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.4 444.9,231.0 700.0,186.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.5 444.9,161.5 700.0,167.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.5" r="4" fill="#20c997"/><circle cx="444.9" cy="161.5" r="4" fill="#20c997"/><circle cx="700.0" cy="167.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.51s | 86,888.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 92.97s | 107,555.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 548.93s | 91,086.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.31s | 97,030.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 145.64s | 68,661.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 680.83s | 73,439.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.88s | 45,712.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.07s | 51,528.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 628.61s | 79,541.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.06s | 141,562.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.99s | 114,954.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 466.37s | 107,212.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.74s | 46,002.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.27s | 53,976.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 650.28s | 76,889.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.06s | 76,546.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 111.07s | 90,034.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 575.41s | 86,895.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-21T23:00:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.9 444.9,65.8 700.0,150.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.4 444.9,212.7 700.0,214.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.4" r="4" fill="#198754"/><circle cx="444.9" cy="212.7" r="4" fill="#198754"/><circle cx="700.0" cy="214.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.6 444.9,254.6 700.0,244.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.1 444.9,136.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="136.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.6 444.9,252.6 700.0,245.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.9 444.9,154.5 700.0,73.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.9" r="4" fill="#20c997"/><circle cx="444.9" cy="154.5" r="4" fill="#20c997"/><circle cx="700.0" cy="73.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.49s | 117,799.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.84s | 179,092.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 407.89s | 122,580.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.25s | 65,591.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.87s | 81,384.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 625.76s | 79,902.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.22s | 49,465.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 187.00s | 53,476.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 828.62s | 60,341.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.27s | 159,591.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.63s | 132,217.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 275.59s | 181,427.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.68s | 50,820.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.39s | 54,828.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.69s | 59,759.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.17s | 75,924.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.27s | 120,085.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 287.57s | 173,870.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,104.2 444.9,95.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="104.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.6 444.9,225.9 700.0,199.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.6" r="4" fill="#198754"/><circle cx="444.9" cy="225.9" r="4" fill="#198754"/><circle cx="700.0" cy="199.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.9 444.9,256.2 700.0,228.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,188.0 444.9,168.7 700.0,150.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.5 444.9,252.6 700.0,192.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="192.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.7 444.9,111.5 700.0,150.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.7" r="4" fill="#20c997"/><circle cx="444.9" cy="111.5" r="4" fill="#20c997"/><circle cx="700.0" cy="150.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.34s | 157,703.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.07s | 163,746.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 268.28s | 186,371.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.67s | 63,808.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.17s | 74,532.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 538.78s | 92,802.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.51s | 54,030.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.76s | 53,832.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 684.81s | 73,012.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.95s | 100,462.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.98s | 113,663.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 396.43s | 126,125.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.46s | 48,866.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.69s | 56,278.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 514.63s | 97,157.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.07s | 99,285.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.48s | 152,711.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 397.32s | 125,843.8 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-22T22:42:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.7 444.9,84.7 700.0,85.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,184.6 700.0,177.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="177.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.0 444.9,212.8 700.0,175.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,100.4 444.9,90.4 700.0,102.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="100.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.4 444.9,226.5 700.0,135.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="135.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,93.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,253.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.84s | 133,623.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 375.99s | 132,983.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.27s | 65,470.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.56s | 80,282.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 594.27s | 84,136.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.59s | 48,567.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 153.34s | 65,215.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 587.18s | 85,153.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.98s | 125,266.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.57s | 130,601.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.22s | 124,000.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.79s | 67,604.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 172.70s | 57,902.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 469.59s | 106,476.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.46s | 74,277.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.53s | 128,974.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 343.42s | 145,594.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.2 444.9,78.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.2 444.9,188.1 700.0,253.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#198754"/><circle cx="444.9" cy="188.1" r="4" fill="#198754"/><circle cx="700.0" cy="253.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,187.4 700.0,225.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="187.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.1 444.9,102.7 700.0,111.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.5 444.9,225.8 700.0,190.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.9 444.9,108.3 700.0,75.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#20c997"/><circle cx="444.9" cy="108.3" r="4" fill="#20c997"/><circle cx="700.0" cy="75.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.99s | 100,050.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.85s | 137,264.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 342.27s | 146,085.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,123.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.09s | 78,681.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 1151.16s | 43,434.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.63s | 48,480.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 126.46s | 79,077.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 848.41s | 58,933.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,581.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.36s | 124,433.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.87s | 119,655.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.60s | 60,255.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.95s | 58,497.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 644.19s | 77,617.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.96s | 77,178.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.36s | 121,412.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.95s | 139,294.0 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-21T23:01:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.3 444.9,101.0 700.0,101.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,136.3 444.9,166.3 700.0,168.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="136.3" r="4" fill="#198754"/><circle cx="444.9" cy="166.3" r="4" fill="#198754"/><circle cx="700.0" cy="168.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.6 444.9,248.2 700.0,239.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.7 444.9,62.3 700.0,73.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,187.4 444.9,206.5 700.0,196.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="187.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="206.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.4 444.9,74.3 700.0,73.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#20c997"/><circle cx="444.9" cy="74.3" r="4" fill="#20c997"/><circle cx="700.0" cy="73.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.24s | 81,686.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.65s | 115,412.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 434.68s | 115,026.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.21s | 97,962.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.20s | 83,197.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 607.25s | 82,337.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.03s | 41,612.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 233.51s | 42,824.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1059.12s | 47,208.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,849.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 74.36s | 134,488.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.23s | 129,122.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.74s | 72,774.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.87s | 63,344.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 733.55s | 68,161.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.25s | 81,652.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.77s | 128,581.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.78s | 128,939.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,200.6 444.9,152.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="200.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.3 444.9,226.9 700.0,213.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#198754"/><circle cx="444.9" cy="226.9" r="4" fill="#198754"/><circle cx="700.0" cy="213.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.6 444.9,265.8 700.0,228.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="265.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,200.5 444.9,161.2 700.0,162.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="162.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.5 444.9,251.7 700.0,245.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.0 444.9,146.1 700.0,142.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.0" r="4" fill="#20c997"/><circle cx="444.9" cy="146.1" r="4" fill="#20c997"/><circle cx="700.0" cy="142.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.04s | 90,538.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.16s | 123,214.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 272.13s | 183,736.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.19s | 61,774.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.34s | 72,812.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 609.18s | 82,078.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.00s | 39,992.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 214.49s | 46,622.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 696.56s | 71,781.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.03s | 90,637.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.41s | 117,076.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 431.34s | 115,918.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.77s | 48,137.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.12s | 56,142.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.45s | 60,281.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.26s | 75,437.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.58s | 127,255.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.99s | 129,874.5 | PASS |

:::

:::

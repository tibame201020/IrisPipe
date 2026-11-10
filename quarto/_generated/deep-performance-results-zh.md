## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:39:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">211k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,84.2 444.9,165.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="84.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="165.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.0 444.9,195.1 700.0,222.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.0" r="4" fill="#198754"/><circle cx="444.9" cy="195.1" r="4" fill="#198754"/><circle cx="700.0" cy="222.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.9 444.9,251.0 700.0,250.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,170.2 444.9,162.2 700.0,154.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="170.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.8 444.9,238.8 700.0,196.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.0 444.9,199.7 700.0,151.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.0" r="4" fill="#20c997"/><circle cx="444.9" cy="199.7" r="4" fill="#20c997"/><circle cx="700.0" cy="151.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 5.67s | 176,366.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.89s | 119,203.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 260.72s | 191,778.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.01s | 99,880.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 101.66s | 98,369.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 632.87s | 79,004.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.44s | 51,435.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.29s | 59,069.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 845.47s | 59,138.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.63s | 115,874.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.31s | 121,490.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.23s | 127,150.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.88s | 59,238.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 147.75s | 67,680.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 513.84s | 97,306.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.75s | 85,113.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 105.13s | 95,118.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.23s | 129,122.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,142.8 444.9,126.8 700.0,112.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="112.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.8 444.9,199.8 700.0,186.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#198754"/><circle cx="444.9" cy="199.8" r="4" fill="#198754"/><circle cx="700.0" cy="186.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,233.0 444.9,208.8 700.0,240.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="233.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,123.8 700.0,157.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.4 444.9,237.8 700.0,204.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.1 444.9,139.4 700.0,66.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.1" r="4" fill="#20c997"/><circle cx="444.9" cy="139.4" r="4" fill="#20c997"/><circle cx="700.0" cy="66.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.72s | 114,639.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.53s | 124,175.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.46s | 132,817.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.93s | 62,758.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.01s | 80,637.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 563.92s | 88,664.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.45s | 60,808.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 132.91s | 75,238.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 886.55s | 56,398.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.15s | 162,654.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.41s | 125,931.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 472.39s | 105,844.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.30s | 49,261.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.47s | 57,981.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 642.67s | 77,800.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.71s | 78,647.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.74s | 116,627.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 312.70s | 159,899.2 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:38:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.5 444.9,116.6 700.0,126.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.3 444.9,188.4 700.0,153.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#198754"/><circle cx="444.9" cy="188.4" r="4" fill="#198754"/><circle cx="700.0" cy="153.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.4 444.9,226.6 700.0,206.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,122.3 700.0,108.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="122.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,219.6 444.9,184.7 700.0,204.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="219.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="184.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.8 444.9,78.1 700.0,90.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.8" r="4" fill="#20c997"/><circle cx="444.9" cy="78.1" r="4" fill="#20c997"/><circle cx="700.0" cy="90.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.35s | 88,113.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.84s | 122,182.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 428.73s | 116,624.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.33s | 69,778.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.89s | 82,040.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 491.32s | 101,766.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.30s | 51,821.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 164.90s | 60,642.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 694.54s | 71,990.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.55s | 152,601.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.02s | 119,026.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 394.04s | 126,890.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.49s | 64,553.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 118.93s | 84,080.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 683.43s | 73,160.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.05s | 71,184.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.57s | 143,733.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.87s | 137,035.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,143.3 444.9,142.9 700.0,139.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="143.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.2 444.9,170.0 700.0,208.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.2" r="4" fill="#198754"/><circle cx="444.9" cy="170.0" r="4" fill="#198754"/><circle cx="700.0" cy="208.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.9 444.9,240.7 700.0,199.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.8 444.9,134.3 700.0,150.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.4 444.9,243.1 700.0,240.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.3 444.9,62.3 700.0,150.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="150.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.36s | 119,560.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.47s | 119,807.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 410.43s | 121,823.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.88s | 67,222.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 97.19s | 102,893.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.07s | 78,608.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.07s | 52,435.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.14s | 58,774.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 590.11s | 84,729.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.48s | 117,952.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.90s | 125,158.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 434.20s | 115,153.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.59s | 60,259.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.41s | 57,334.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.54s | 58,648.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.73s | 85,229.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 58.80s | 170,059.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 434.11s | 115,179.0 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-08T23:31:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,109.7 444.9,146.6 700.0,156.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,154.7 444.9,209.6 700.0,140.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="154.7" r="4" fill="#198754"/><circle cx="444.9" cy="209.6" r="4" fill="#198754"/><circle cx="700.0" cy="140.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,187.9 444.9,236.0 700.0,193.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="193.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.6 444.9,73.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,206.4 444.9,186.9 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="206.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="186.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.0 444.9,125.9 700.0,128.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#20c997"/><circle cx="444.9" cy="125.9" r="4" fill="#20c997"/><circle cx="700.0" cy="128.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.44s | 118,483.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 100.93s | 99,079.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 533.28s | 93,759.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,840.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 151.64s | 65,944.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 487.51s | 102,562.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.93s | 77,363.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 192.05s | 52,069.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 673.06s | 74,288.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.54s | 104,876.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.61s | 137,714.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 348.61s | 143,425.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.79s | 67,622.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 128.37s | 77,902.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 986.37s | 50,690.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.21s | 65,754.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 90.94s | 109,957.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 460.58s | 108,559.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.7 444.9,145.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,163.4 444.9,209.8 700.0,205.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="163.4" r="4" fill="#198754"/><circle cx="444.9" cy="209.8" r="4" fill="#198754"/><circle cx="700.0" cy="205.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.7 444.9,179.3 700.0,236.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="179.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.7 444.9,76.2 700.0,123.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="76.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.2 444.9,237.9 700.0,241.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.4 444.9,152.7 700.0,141.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.4" r="4" fill="#20c997"/><circle cx="444.9" cy="152.7" r="4" fill="#20c997"/><circle cx="700.0" cy="141.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.44s | 87,420.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.58s | 100,423.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 346.57s | 144,271.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.01s | 90,801.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 151.02s | 66,217.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 730.27s | 68,467.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.40s | 46,735.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 121.42s | 82,356.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 957.61s | 52,213.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.91s | 91,675.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.06s | 136,879.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 446.16s | 112,067.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.86s | 55,978.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 194.60s | 51,386.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1015.34s | 49,244.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.21s | 89,198.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.70s | 96,430.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 487.67s | 102,529.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:51:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,197.0 444.9,62.3 700.0,150.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.8 444.9,220.4 700.0,187.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#198754"/><circle cx="444.9" cy="220.4" r="4" fill="#198754"/><circle cx="700.0" cy="187.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.9 444.9,217.7 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.5 444.9,161.3 700.0,157.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.0 444.9,249.4 700.0,249.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.6 444.9,85.6 700.0,137.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#20c997"/><circle cx="444.9" cy="85.6" r="4" fill="#20c997"/><circle cx="700.0" cy="137.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.64s | 94,020.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 53.80s | 185,873.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 396.80s | 126,007.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.64s | 68,296.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.00s | 78,125.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 495.79s | 100,849.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.32s | 54,579.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 125.14s | 79,911.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 847.99s | 58,962.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 105,999.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.47s | 118,378.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.12s | 121,030.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.13s | 61,988.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.38s | 58,351.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 859.49s | 58,174.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.92s | 112,069.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.84s | 169,949.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.17s | 134,349.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.5 444.9,130.2 700.0,113.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.9 444.9,218.2 700.0,132.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.9" r="4" fill="#198754"/><circle cx="444.9" cy="218.2" r="4" fill="#198754"/><circle cx="700.0" cy="132.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.2 444.9,244.6 700.0,252.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.9 444.9,137.0 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.6 444.9,242.6 700.0,244.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.2 444.9,145.1 700.0,145.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#20c997"/><circle cx="444.9" cy="145.1" r="4" fill="#20c997"/><circle cx="700.0" cy="145.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.56s | 104,558.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.31s | 129,356.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 357.17s | 139,989.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.35s | 65,138.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.48s | 73,811.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 389.95s | 128,222.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.17s | 47,238.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.14s | 57,098.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 964.34s | 51,849.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,202.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.94s | 125,092.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 290.21s | 172,288.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.16s | 65,980.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.36s | 58,357.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 874.41s | 57,181.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.01s | 83,236.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.35s | 119,981.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 417.13s | 119,867.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:37:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.6 444.9,161.0 700.0,152.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="161.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="152.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.5 444.9,148.1 700.0,213.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#198754"/><circle cx="444.9" cy="148.1" r="4" fill="#198754"/><circle cx="700.0" cy="213.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.2 444.9,200.0 700.0,240.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="200.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.8 444.9,150.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.3 444.9,236.5 700.0,192.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="192.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.5 444.9,148.9 700.0,126.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.5" r="4" fill="#20c997"/><circle cx="444.9" cy="148.9" r="4" fill="#20c997"/><circle cx="700.0" cy="126.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.27s | 97,361.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.83s | 116,509.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.61s | 122,066.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.17s | 65,937.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.92s | 125,126.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.21s | 81,538.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.75s | 63,484.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 110.65s | 90,377.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 790.44s | 63,255.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.66s | 150,150.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.77s | 123,814.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 273.77s | 182,631.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.83s | 48,007.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.62s | 65,952.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 523.50s | 95,510.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.36s | 88,028.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.25s | 124,613.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.70s | 139,391.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,184.4 444.9,127.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.3 444.9,172.9 700.0,200.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.3" r="4" fill="#198754"/><circle cx="444.9" cy="172.9" r="4" fill="#198754"/><circle cx="700.0" cy="200.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.2 444.9,233.5 700.0,241.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.8 444.9,139.1 700.0,128.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,204.8 700.0,200.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="204.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.8 444.9,79.8 700.0,109.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.8" r="4" fill="#20c997"/><circle cx="444.9" cy="79.8" r="4" fill="#20c997"/><circle cx="700.0" cy="109.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.02s | 90,735.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.04s | 124,939.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 304.36s | 164,279.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.86s | 67,312.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.43s | 97,630.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 618.97s | 80,778.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.13s | 52,271.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 163.54s | 61,148.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 889.02s | 56,241.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.37s | 119,417.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.77s | 117,971.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 401.73s | 124,461.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.36s | 51,644.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 127.47s | 78,448.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 617.33s | 80,993.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.37s | 106,723.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.05s | 153,737.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.05s | 135,850.0 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:48:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.3 444.9,154.0 700.0,146.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.2 444.9,212.3 700.0,214.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#198754"/><circle cx="444.9" cy="212.3" r="4" fill="#198754"/><circle cx="700.0" cy="214.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.5 444.9,224.2 700.0,224.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.6 444.9,149.3 700.0,159.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="149.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.0 444.9,247.6 700.0,213.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.3 444.9,62.3 700.0,111.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="111.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.70s | 78,740.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 89.58s | 111,629.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 429.67s | 116,367.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,871.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.19s | 75,648.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 670.94s | 74,522.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 28.19s | 35,471.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 146.40s | 68,308.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 734.13s | 68,107.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.33s | 136,518.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.33s | 114,513.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 460.88s | 108,489.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.79s | 48,107.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.53s | 53,899.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 664.82s | 75,208.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.13s | 82,440.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 59.46s | 168,180.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.96s | 138,135.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">124k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">166k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.3 444.9,111.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.3 444.9,198.9 700.0,105.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#198754"/><circle cx="444.9" cy="198.9" r="4" fill="#198754"/><circle cx="700.0" cy="105.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.9 444.9,252.3 700.0,247.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,100.1 700.0,115.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="115.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.7 444.9,220.1 700.0,231.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.5 444.9,159.7 700.0,141.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.5" r="4" fill="#20c997"/><circle cx="444.9" cy="159.7" r="4" fill="#20c997"/><circle cx="700.0" cy="141.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,849.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.13s | 123,259.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 332.17s | 150,524.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.30s | 69,935.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.12s | 75,120.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 394.60s | 126,711.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.13s | 41,443.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 219.01s | 45,660.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1038.52s | 48,145.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.60s | 86,244.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.14s | 129,641.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.51s | 120,914.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.63s | 50,947.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 157.75s | 63,389.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 877.48s | 56,981.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.80s | 84,745.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.36s | 96,748.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 467.57s | 106,936.8 | PASS |

:::

:::

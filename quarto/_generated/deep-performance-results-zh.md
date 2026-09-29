## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:31:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,93.1 444.9,78.5 700.0,85.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="93.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,159.6 444.9,169.5 700.0,158.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="159.6" r="4" fill="#198754"/><circle cx="444.9" cy="169.5" r="4" fill="#198754"/><circle cx="700.0" cy="158.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.7 444.9,210.7 700.0,210.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.7 444.9,65.7 700.0,79.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="65.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="79.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.2 444.9,205.2 700.0,214.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.0 444.9,79.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#20c997"/><circle cx="444.9" cy="79.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.58s | 116,590.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.88s | 123,635.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.62s | 120,301.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.83s | 84,530.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.34s | 79,782.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 587.46s | 85,111.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.54s | 57,015.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 166.94s | 59,902.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 831.58s | 60,126.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.09s | 110,059.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.03s | 129,824.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 405.20s | 123,396.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.79s | 50,530.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 159.88s | 62,548.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 860.42s | 58,111.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.80s | 78,112.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.09s | 123,315.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.31s | 131,472.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,81.7 444.9,62.3 700.0,117.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="81.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.3 444.9,140.7 700.0,201.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.3" r="4" fill="#198754"/><circle cx="444.9" cy="140.7" r="4" fill="#198754"/><circle cx="700.0" cy="201.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.8 444.9,241.3 700.0,215.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.0 444.9,115.6 700.0,146.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,228.3 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.5 444.9,132.0 700.0,122.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.5" r="4" fill="#20c997"/><circle cx="444.9" cy="132.0" r="4" fill="#20c997"/><circle cx="700.0" cy="122.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.60s | 151,423.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.34s | 163,025.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.94s | 129,889.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.33s | 69,769.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 86.11s | 116,125.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.45s | 79,942.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.84s | 41,946.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.59s | 55,993.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 697.94s | 71,639.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,397.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.26s | 131,123.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 442.72s | 112,937.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.40s | 49,024.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.84s | 63,758.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 854.74s | 58,497.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,604.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.41s | 121,343.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 392.88s | 127,264.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:21:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.0 444.9,123.5 700.0,122.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.5 444.9,197.9 700.0,189.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#198754"/><circle cx="444.9" cy="197.9" r="4" fill="#198754"/><circle cx="700.0" cy="189.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.4 444.9,186.0 700.0,238.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="186.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.1 444.9,103.3 700.0,94.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.0 444.9,232.1 700.0,229.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.5 444.9,112.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.5" r="4" fill="#20c997"/><circle cx="444.9" cy="112.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,745.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.83s | 120,727.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.78s | 121,425.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.85s | 72,217.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.74s | 78,283.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 601.30s | 83,153.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.77s | 50,579.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 117.58s | 85,052.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.20s | 54,993.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.73s | 102,722.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.58s | 132,310.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 364.71s | 137,093.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.07s | 62,235.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.15s | 58,772.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 830.28s | 60,220.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.38s | 80,782.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.59s | 127,247.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 321.11s | 155,707.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.0 444.9,125.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,179.1 700.0,207.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="179.1" r="4" fill="#198754"/><circle cx="700.0" cy="207.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.1 444.9,249.1 700.0,236.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.9 444.9,158.6 700.0,155.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="155.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.8 444.9,226.1 700.0,239.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.1 444.9,149.2 700.0,136.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.1" r="4" fill="#20c997"/><circle cx="444.9" cy="149.2" r="4" fill="#20c997"/><circle cx="700.0" cy="136.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.96s | 143,595.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.19s | 138,531.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 276.99s | 180,511.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.60s | 68,474.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.92s | 103,181.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 590.99s | 84,603.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.00s | 47,621.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.81s | 56,879.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 769.78s | 64,953.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.87s | 101,327.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.65s | 116,754.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.81s | 118,819.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.09s | 49,771.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 138.71s | 72,090.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 790.03s | 63,288.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 82,000.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.30s | 123,004.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.77s | 131,312.9 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:54:02Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,149.8 444.9,124.4 700.0,136.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.7 444.9,183.8 700.0,161.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.7" r="4" fill="#198754"/><circle cx="444.9" cy="183.8" r="4" fill="#198754"/><circle cx="700.0" cy="161.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.7 444.9,221.0 700.0,216.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.7 444.9,127.4 700.0,118.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,217.0 444.9,231.9 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,131.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="131.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.32s | 88,339.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.55s | 100,448.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 528.69s | 94,572.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.00s | 58,816.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 138.70s | 72,099.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 603.47s | 82,854.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.18s | 52,151.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.90s | 54,376.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 886.80s | 56,382.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.37s | 96,478.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 101.00s | 99,007.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 483.23s | 103,470.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.77s | 56,281.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 203.44s | 49,154.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 945.34s | 52,891.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.07s | 66,339.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.09s | 96,998.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.36s | 130,086.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">67k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.9 444.9,113.1 700.0,92.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,112.7 444.9,204.7 700.0,237.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="112.7" r="4" fill="#198754"/><circle cx="444.9" cy="204.7" r="4" fill="#198754"/><circle cx="700.0" cy="237.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.9 444.9,217.8 700.0,224.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,117.0 700.0,94.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.5 444.9,228.2 700.0,223.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.2 444.9,122.3 700.0,105.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#20c997"/><circle cx="444.9" cy="122.3" r="4" fill="#20c997"/><circle cx="700.0" cy="105.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.23s | 89,047.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 100.26s | 99,737.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 457.75s | 109,229.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,920.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 170.75s | 58,564.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 1144.97s | 43,669.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.59s | 48,579.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.86s | 52,670.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1005.77s | 49,713.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.16s | 122,609.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 102.04s | 97,996.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 462.98s | 107,997.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.92s | 45,618.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 208.28s | 48,012.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 998.71s | 50,064.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.92s | 71,833.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.59s | 95,607.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 484.46s | 103,207.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:40:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,184.7 444.9,163.9 700.0,160.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="160.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.3 444.9,164.6 700.0,221.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#198754"/><circle cx="444.9" cy="164.6" r="4" fill="#198754"/><circle cx="700.0" cy="221.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.4 444.9,253.6 700.0,255.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.1 444.9,131.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.5 444.9,255.2 700.0,243.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.1 444.9,167.2 700.0,134.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#20c997"/><circle cx="444.9" cy="167.2" r="4" fill="#20c997"/><circle cx="700.0" cy="134.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.34s | 107,123.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.97s | 121,992.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 401.65s | 124,487.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.36s | 69,652.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.29s | 121,518.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 616.86s | 81,055.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.03s | 76,740.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.30s | 58,038.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 884.40s | 56,535.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.77s | 114,012.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 68.95s | 145,038.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 257.15s | 194,440.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.57s | 53,861.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.84s | 56,870.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 764.46s | 65,406.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.21s | 81,900.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.58s | 119,645.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 349.08s | 143,234.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.7 444.9,62.3 700.0,108.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.7 444.9,213.8 700.0,209.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.7" r="4" fill="#198754"/><circle cx="444.9" cy="213.8" r="4" fill="#198754"/><circle cx="700.0" cy="209.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.2 444.9,191.4 700.0,245.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="191.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.7 444.9,134.4 700.0,117.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.2 444.9,244.2 700.0,172.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="172.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.9 444.9,138.1 700.0,218.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.9" r="4" fill="#20c997"/><circle cx="444.9" cy="138.1" r="4" fill="#20c997"/><circle cx="700.0" cy="218.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.11s | 98,872.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.95s | 172,559.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 349.17s | 143,196.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.71s | 72,923.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.38s | 76,697.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 629.08s | 79,480.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.56s | 51,122.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 110.08s | 90,843.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 882.83s | 56,636.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.56s | 104,602.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.81s | 126,895.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 363.85s | 137,419.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.31s | 49,234.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.98s | 57,476.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 484.76s | 103,142.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.97s | 83,570.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.26s | 124,593.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 680.44s | 73,481.6 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:24:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,187.6 444.9,62.3 700.0,147.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.8 444.9,208.1 700.0,209.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.8" r="4" fill="#198754"/><circle cx="444.9" cy="208.1" r="4" fill="#198754"/><circle cx="700.0" cy="209.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.0 444.9,247.7 700.0,235.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.8 444.9,140.8 700.0,145.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.4 444.9,244.7 700.0,243.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.4 444.9,142.8 700.0,118.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#20c997"/><circle cx="444.9" cy="142.8" r="4" fill="#20c997"/><circle cx="700.0" cy="118.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.64s | 94,011.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 57.50s | 173,922.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.12s | 119,583.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,798.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.56s | 80,931.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.28s | 80,349.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.93s | 66,961.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.64s | 55,666.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 790.53s | 63,248.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.29s | 120,656.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.75s | 123,837.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.63s | 120,590.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.31s | 54,615.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.57s | 57,612.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 858.57s | 58,236.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.58s | 68,605.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.57s | 122,592.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.53s | 137,919.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,131.8 444.9,79.5 700.0,85.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.1 444.9,185.7 700.0,92.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#198754"/><circle cx="444.9" cy="185.7" r="4" fill="#198754"/><circle cx="700.0" cy="92.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.3 444.9,237.6 700.0,235.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.0 444.9,123.5 700.0,133.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.8 444.9,249.5 700.0,190.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,117.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="117.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.71s | 114,876.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.21s | 144,481.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 354.99s | 140,849.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.40s | 64,951.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.43s | 84,437.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 364.01s | 137,358.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.14s | 47,312.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.57s | 55,074.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 884.55s | 56,525.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,565.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.61s | 119,605.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 439.37s | 113,800.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,277.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 206.92s | 48,328.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 610.74s | 81,868.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.83s | 72,301.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.44s | 122,783.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 324.26s | 154,197.2 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:36:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.4 444.9,142.2 700.0,145.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="145.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.3 444.9,205.1 700.0,134.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.3" r="4" fill="#198754"/><circle cx="444.9" cy="205.1" r="4" fill="#198754"/><circle cx="700.0" cy="134.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.6 444.9,262.9 700.0,256.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.7 444.9,157.8 700.0,150.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.9 444.9,245.9 700.0,229.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.6 444.9,62.3 700.0,118.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="118.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.59s | 79,402.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.33s | 120,003.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 422.85s | 118,246.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,811.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.65s | 80,872.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 400.72s | 124,775.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.81s | 43,840.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 222.92s | 44,859.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1019.25s | 49,055.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.90s | 91,701.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.68s | 110,280.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 436.22s | 114,620.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.30s | 49,251.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.42s | 55,425.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 757.80s | 65,980.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,253.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.91s | 169,738.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.22s | 135,055.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.6 444.9,83.6 700.0,72.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.0 444.9,186.6 700.0,187.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.0" r="4" fill="#198754"/><circle cx="444.9" cy="186.6" r="4" fill="#198754"/><circle cx="700.0" cy="187.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.8 444.9,239.1 700.0,239.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.2 444.9,106.1 700.0,99.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.3 444.9,225.3 700.0,221.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.3 444.9,100.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.3" r="4" fill="#20c997"/><circle cx="444.9" cy="100.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.43s | 87,458.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.84s | 126,834.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.95s | 132,641.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.93s | 59,052.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.53s | 74,887.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.67s | 74,441.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.45s | 36,435.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.79s | 48,358.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1035.82s | 48,270.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.02s | 90,735.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.60s | 115,472.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 421.46s | 118,636.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.71s | 48,288.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.70s | 55,339.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 870.72s | 57,423.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.48s | 87,138.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.62s | 118,176.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 363.39s | 137,594.7 | PASS |

:::

:::

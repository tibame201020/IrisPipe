## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-08T23:13:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,129.7 444.9,143.9 700.0,162.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="162.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.9 444.9,217.6 700.0,211.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.9" r="4" fill="#198754"/><circle cx="444.9" cy="217.6" r="4" fill="#198754"/><circle cx="700.0" cy="211.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.1 444.9,260.0 700.0,245.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.3 444.9,155.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.9 444.9,251.3 700.0,198.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.0 444.9,159.4 700.0,155.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#20c997"/><circle cx="444.9" cy="159.4" r="4" fill="#20c997"/><circle cx="700.0" cy="155.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.34s | 136,314.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.78s | 126,927.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 435.51s | 114,808.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.51s | 64,474.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.23s | 77,987.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 608.98s | 82,104.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.33s | 51,741.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.90s | 49,775.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.96s | 59,174.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.92s | 112,057.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.98s | 119,068.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 276.07s | 181,115.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.90s | 55,856.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.93s | 55,575.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 552.72s | 90,462.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.76s | 78,382.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.73s | 116,642.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 418.38s | 119,507.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,155.8 444.9,85.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.0 444.9,181.2 700.0,204.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.0" r="4" fill="#198754"/><circle cx="444.9" cy="181.2" r="4" fill="#198754"/><circle cx="700.0" cy="204.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.0 444.9,231.9 700.0,226.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.5 444.9,143.9 700.0,125.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.9 444.9,236.7 700.0,172.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="172.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.3 444.9,87.1 700.0,132.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#20c997"/><circle cx="444.9" cy="87.1" r="4" fill="#20c997"/><circle cx="700.0" cy="132.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,450.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 67.43s | 148,304.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 308.55s | 162,046.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.75s | 78,443.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 109.46s | 91,360.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 647.05s | 77,274.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.36s | 51,666.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 163.25s | 61,253.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 772.88s | 64,693.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,092.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.06s | 113,557.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 400.93s | 124,708.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.26s | 49,368.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.16s | 58,424.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 516.12s | 96,877.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,272.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 67.89s | 147,288.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 416.33s | 120,096.7 | PASS |

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
  **最新量測：** `2026-11-08T23:22:50Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,158.7 444.9,62.3 700.0,174.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="158.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="174.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.8 444.9,229.2 700.0,224.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.8" r="4" fill="#198754"/><circle cx="444.9" cy="229.2" r="4" fill="#198754"/><circle cx="700.0" cy="224.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.2 444.9,242.0 700.0,250.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,165.5 700.0,160.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="165.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="160.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.3 444.9,250.9 700.0,244.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.4 444.9,130.2 700.0,111.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.4" r="4" fill="#20c997"/><circle cx="444.9" cy="130.2" r="4" fill="#20c997"/><circle cx="700.0" cy="111.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.70s | 129,937.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 49.76s | 200,976.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 423.35s | 118,105.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.96s | 100,351.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.25s | 77,970.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.92s | 81,576.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.45s | 51,400.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 145.99s | 68,497.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 798.97s | 62,580.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.68s | 115,167.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.04s | 124,939.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.61s | 128,333.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.93s | 55,778.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.44s | 61,942.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 747.05s | 66,929.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.85s | 84,423.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.26s | 150,925.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 303.01s | 165,008.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.4 444.9,147.6 700.0,66.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.3 444.9,222.9 700.0,222.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#198754"/><circle cx="444.9" cy="222.9" r="4" fill="#198754"/><circle cx="700.0" cy="222.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.8 444.9,253.9 700.0,245.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,158.2 444.9,151.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="158.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.1 444.9,235.7 700.0,249.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.1 444.9,161.4 700.0,155.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.1" r="4" fill="#20c997"/><circle cx="444.9" cy="161.4" r="4" fill="#20c997"/><circle cx="700.0" cy="155.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.34s | 96,721.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.97s | 129,912.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 268.63s | 186,128.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.62s | 68,385.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.75s | 77,668.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 639.22s | 78,220.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.70s | 50,751.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.86s | 56,224.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 807.81s | 61,895.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.16s | 122,549.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.73s | 127,019.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 264.52s | 189,021.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.55s | 79,649.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 145.37s | 68,792.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 845.47s | 59,138.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.80s | 113,584.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.11s | 120,318.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 402.62s | 124,187.5 | PASS |

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
  **最新量測：** `2026-11-08T23:21:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">176k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,122.8 444.9,92.8 700.0,137.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.2 444.9,126.4 700.0,181.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.2" r="4" fill="#198754"/><circle cx="444.9" cy="126.4" r="4" fill="#198754"/><circle cx="700.0" cy="181.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.8 444.9,240.8 700.0,252.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,93.0 444.9,137.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="93.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.4 444.9,244.4 700.0,238.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,146.1 444.9,69.5 700.0,117.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="146.1" r="4" fill="#20c997"/><circle cx="444.9" cy="69.5" r="4" fill="#20c997"/><circle cx="700.0" cy="117.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.05s | 124,269.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.51s | 141,829.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 432.24s | 115,677.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,598.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.87s | 122,150.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 554.39s | 90,189.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.45s | 69,228.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.21s | 55,184.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1031.64s | 48,466.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.06s | 141,683.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.47s | 115,648.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 313.08s | 159,702.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.30s | 65,372.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 188.42s | 53,072.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 881.19s | 56,741.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.04s | 110,643.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 64.32s | 155,463.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 391.86s | 127,596.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,111.7 444.9,75.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="111.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.8 444.9,135.7 700.0,204.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#198754"/><circle cx="444.9" cy="135.7" r="4" fill="#198754"/><circle cx="700.0" cy="204.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.3 444.9,243.1 700.0,207.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.0 444.9,137.9 700.0,124.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.1 444.9,240.9 700.0,228.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,143.4 444.9,125.4 700.0,117.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="143.4" r="4" fill="#20c997"/><circle cx="444.9" cy="125.4" r="4" fill="#20c997"/><circle cx="700.0" cy="117.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.78s | 128,534.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 67.05s | 149,153.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 318.49s | 156,992.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.17s | 58,254.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 87.16s | 114,735.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 663.38s | 75,371.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.26s | 42,988.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.06s | 52,893.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 681.79s | 73,336.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.60s | 116,279.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.15s | 113,441.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.56s | 121,194.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.93s | 55,760.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 184.66s | 54,154.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 816.47s | 61,239.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.07s | 110,265.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.88s | 120,663.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.92s | 125,023.8 | PASS |

:::

:::

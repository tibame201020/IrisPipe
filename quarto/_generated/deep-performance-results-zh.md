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
  **最新量測：** `2026-11-08T23:05:05Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.4 444.9,123.1 700.0,150.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.4 444.9,199.8 700.0,190.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#198754"/><circle cx="444.9" cy="199.8" r="4" fill="#198754"/><circle cx="700.0" cy="190.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.4 444.9,263.4 700.0,208.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="208.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.0 444.9,62.3 700.0,152.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="152.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.8 444.9,238.9 700.0,207.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.7 444.9,134.7 700.0,137.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.7" r="4" fill="#20c997"/><circle cx="444.9" cy="134.7" r="4" fill="#20c997"/><circle cx="700.0" cy="137.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,809.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.78s | 145,384.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 394.34s | 126,793.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.94s | 66,921.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.84s | 92,732.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 503.64s | 99,276.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,277.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.65s | 49,103.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 573.96s | 87,114.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.35s | 107,009.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 53.45s | 187,080.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 398.41s | 125,500.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,314.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.75s | 65,897.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 571.19s | 87,536.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.59s | 73,578.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.77s | 137,426.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.28s | 135,398.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.5 444.9,77.9 700.0,72.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="77.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.4 444.9,218.2 700.0,213.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#198754"/><circle cx="444.9" cy="218.2" r="4" fill="#198754"/><circle cx="700.0" cy="213.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.6 444.9,188.7 700.0,245.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="188.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.5 444.9,157.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.2 444.9,192.1 700.0,245.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.4 444.9,152.5 700.0,128.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.4" r="4" fill="#20c997"/><circle cx="444.9" cy="152.5" r="4" fill="#20c997"/><circle cx="700.0" cy="128.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.77s | 92,816.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 58.88s | 169,851.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 288.76s | 173,151.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.47s | 69,113.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.54s | 77,195.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 620.40s | 80,592.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,825.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 103.50s | 96,622.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 849.03s | 58,890.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.04s | 110,668.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.25s | 117,303.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 277.51s | 180,175.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.17s | 65,915.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.92s | 94,412.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 845.54s | 59,133.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.25s | 81,646.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.95s | 120,551.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.02s | 136,603.1 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T23:26:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.5 444.9,157.1 700.0,183.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="183.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.2 444.9,192.5 700.0,198.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.2" r="4" fill="#198754"/><circle cx="444.9" cy="192.5" r="4" fill="#198754"/><circle cx="700.0" cy="198.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.8 444.9,237.3 700.0,234.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.1 444.9,110.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="110.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.2 444.9,232.3 700.0,220.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.1 444.9,141.7 700.0,148.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#20c997"/><circle cx="444.9" cy="141.7" r="4" fill="#20c997"/><circle cx="700.0" cy="148.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,766.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 108.99s | 91,751.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 639.14s | 78,229.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.54s | 64,366.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.03s | 73,510.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 708.86s | 70,536.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.43s | 54,256.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 198.49s | 50,380.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 968.47s | 51,628.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,885.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.27s | 115,917.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 355.42s | 140,679.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.12s | 47,355.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 188.82s | 52,960.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.94s | 58,966.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.47s | 74,250.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.27s | 99,728.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 520.90s | 95,988.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,154.3 444.9,179.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="179.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,153.4 444.9,140.4 700.0,168.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="153.4" r="4" fill="#198754"/><circle cx="444.9" cy="140.4" r="4" fill="#198754"/><circle cx="700.0" cy="168.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,208.6 444.9,230.1 700.0,178.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="208.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="178.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,127.0 444.9,116.5 700.0,134.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="127.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="116.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.4 444.9,205.7 700.0,236.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.3 444.9,156.1 700.0,108.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.3" r="4" fill="#20c997"/><circle cx="444.9" cy="156.1" r="4" fill="#20c997"/><circle cx="700.0" cy="108.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,785.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 126.68s | 78,938.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.84s | 138,564.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.84s | 92,276.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 101.15s | 98,859.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 589.43s | 84,827.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.57s | 64,238.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.71s | 53,273.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 626.97s | 79,748.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,674.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.09s | 110,996.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 490.42s | 101,953.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.26s | 47,034.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.22s | 65,696.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 995.06s | 50,248.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.40s | 69,454.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 110.01s | 90,902.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 435.07s | 114,925.1 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T23:13:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.8 444.9,114.9 700.0,109.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.7 444.9,197.6 700.0,188.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.7" r="4" fill="#198754"/><circle cx="444.9" cy="197.6" r="4" fill="#198754"/><circle cx="700.0" cy="188.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.3 444.9,225.8 700.0,229.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.7 444.9,114.6 700.0,99.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.2 444.9,213.7 700.0,226.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.7 444.9,120.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.7" r="4" fill="#20c997"/><circle cx="444.9" cy="120.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.69s | 93,580.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.64s | 122,490.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 399.01s | 125,310.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.37s | 80,853.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.81s | 76,447.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 611.92s | 81,710.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.22s | 54,896.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 164.64s | 60,738.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 854.22s | 58,532.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,683.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.53s | 122,657.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 381.31s | 131,126.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.47s | 48,842.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 148.11s | 67,518.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 830.50s | 60,204.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.99s | 76,958.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.66s | 119,525.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 329.48s | 151,752.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.8 444.9,125.7 700.0,166.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="166.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.8 444.9,159.3 700.0,153.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.8" r="4" fill="#198754"/><circle cx="444.9" cy="159.3" r="4" fill="#198754"/><circle cx="700.0" cy="153.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.2 444.9,260.7 700.0,266.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="266.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.8 444.9,145.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="145.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.9 444.9,237.2 700.0,207.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.0 444.9,173.0 700.0,153.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.0" r="4" fill="#20c997"/><circle cx="444.9" cy="173.0" r="4" fill="#20c997"/><circle cx="700.0" cy="153.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,822.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 65.80s | 151,968.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 408.94s | 122,268.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.88s | 72,056.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.41s | 127,541.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 379.70s | 131,681.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.23s | 70,249.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.42s | 53,930.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1002.75s | 49,862.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,805.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 72.73s | 137,500.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 252.51s | 198,013.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.35s | 54,504.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 140.79s | 71,027.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 539.62s | 92,656.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.68s | 93,624.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.01s | 117,637.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.68s | 131,690.2 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-08T23:09:15Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.8 444.9,62.3 700.0,107.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.4 444.9,219.4 700.0,215.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.4" r="4" fill="#198754"/><circle cx="444.9" cy="219.4" r="4" fill="#198754"/><circle cx="700.0" cy="215.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.3 444.9,257.7 700.0,260.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,164.6 444.9,151.7 700.0,156.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.8 444.9,252.1 700.0,247.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.3 444.9,138.9 700.0,129.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.3" r="4" fill="#20c997"/><circle cx="444.9" cy="138.9" r="4" fill="#20c997"/><circle cx="700.0" cy="129.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.13s | 89,831.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 52.73s | 189,627.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 315.77s | 158,342.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.53s | 95,002.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.42s | 80,369.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 600.76s | 83,227.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.52s | 51,224.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.13s | 53,727.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 964.96s | 51,815.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.44s | 118,511.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.46s | 127,458.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.19s | 124,010.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.38s | 80,801.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.53s | 57,627.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 825.02s | 60,604.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.87s | 77,688.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.33s | 136,366.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 350.10s | 142,815.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">217k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.7 444.9,109.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.8 444.9,223.7 700.0,170.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.8" r="4" fill="#198754"/><circle cx="444.9" cy="223.7" r="4" fill="#198754"/><circle cx="700.0" cy="170.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.2 444.9,251.6 700.0,259.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,176.7 444.9,94.7 700.0,156.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.7 444.9,241.7 700.0,254.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.9 444.9,155.7 700.0,140.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.9" r="4" fill="#20c997"/><circle cx="444.9" cy="155.7" r="4" fill="#20c997"/><circle cx="700.0" cy="140.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.13s | 109,577.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.15s | 163,540.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 253.07s | 197,575.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.14s | 98,658.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.98s | 80,656.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 420.08s | 119,024.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.36s | 49,128.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 165.49s | 60,425.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 908.74s | 55,021.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.72s | 114,678.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 57.44s | 174,106.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.04s | 129,521.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.91s | 50,231.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 147.88s | 67,623.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 855.84s | 58,422.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.26s | 108,014.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.98s | 129,907.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 354.55s | 141,022.6 | PASS |

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

## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## PostgreSQL

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## MySQL

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## MariaDB

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T08:59:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.4 444.9,62.3 700.0,85.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.1 444.9,158.6 700.0,162.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.1" r="4" fill="#198754"/><circle cx="444.9" cy="158.6" r="4" fill="#198754"/><circle cx="700.0" cy="162.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.7 444.9,203.9 700.0,210.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="203.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,137.9 444.9,71.1 700.0,76.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="137.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="71.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="76.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.7 444.9,217.5 700.0,171.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="171.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.1 444.9,88.2 700.0,86.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.1" r="4" fill="#20c997"/><circle cx="444.9" cy="88.2" r="4" fill="#20c997"/><circle cx="700.0" cy="86.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,598.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.81s | 133,664.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 408.84s | 122,296.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.23s | 65,642.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.70s | 86,431.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 592.87s | 84,335.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.35s | 49,149.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 155.66s | 64,240.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 819.49s | 61,013.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.35s | 96,599.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.33s | 129,322.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 394.05s | 126,888.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,140.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.64s | 57,590.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 625.68s | 79,912.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.80s | 72,474.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.68s | 120,949.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 410.51s | 121,798.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.5 444.9,134.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.3 444.9,233.1 700.0,202.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.3" r="4" fill="#198754"/><circle cx="444.9" cy="233.1" r="4" fill="#198754"/><circle cx="700.0" cy="202.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.7 444.9,246.8 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.6 444.9,132.4 700.0,150.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="132.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.8 444.9,236.2 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,219.9 444.9,119.6 700.0,118.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="219.9" r="4" fill="#20c997"/><circle cx="444.9" cy="119.6" r="4" fill="#20c997"/><circle cx="700.0" cy="118.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.99s | 100,140.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.27s | 121,548.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 303.01s | 165,009.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.93s | 66,961.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 162.24s | 61,637.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 624.31s | 80,088.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.16s | 52,205.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.48s | 53,339.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 972.66s | 51,405.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.06s | 90,375.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.56s | 122,603.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 447.24s | 111,796.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,357.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 167.25s | 59,790.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 761.14s | 65,690.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.36s | 69,657.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.74s | 130,313.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.89s | 131,271.8 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T09:11:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.7 444.9,62.3 700.0,90.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.9 444.9,203.4 700.0,199.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#198754"/><circle cx="444.9" cy="203.4" r="4" fill="#198754"/><circle cx="700.0" cy="199.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.9 444.9,257.9 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.8 444.9,125.6 700.0,98.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.9 444.9,212.6 700.0,235.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.6 444.9,105.0 700.0,97.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.6" r="4" fill="#20c997"/><circle cx="444.9" cy="105.0" r="4" fill="#20c997"/><circle cx="700.0" cy="97.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.40s | 80,612.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.70s | 154,550.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 361.49s | 138,318.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.32s | 61,285.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.08s | 74,581.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 649.99s | 76,924.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.48s | 42,585.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 228.75s | 43,716.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1038.05s | 48,167.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,319.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.29s | 118,639.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 372.42s | 134,256.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.80s | 42,018.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.22s | 69,340.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 887.78s | 56,320.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.81s | 84,652.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.71s | 130,361.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.82s | 134,837.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.8 444.9,79.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,178.8 700.0,174.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="178.8" r="4" fill="#198754"/><circle cx="700.0" cy="174.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.7 444.9,248.5 700.0,238.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.5 444.9,104.6 700.0,80.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.0 444.9,235.0 700.0,203.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.7 444.9,75.4 700.0,73.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.7" r="4" fill="#20c997"/><circle cx="444.9" cy="75.4" r="4" fill="#20c997"/><circle cx="700.0" cy="73.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.06s | 82,925.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.61s | 122,540.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 382.85s | 130,600.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.54s | 60,444.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.70s | 74,792.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 652.25s | 76,657.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.93s | 41,781.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 241.52s | 41,404.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1079.35s | 46,324.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.42s | 96,006.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.65s | 110,318.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.14s | 121,910.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.89s | 50,284.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 208.85s | 47,880.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 795.52s | 62,851.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.02s | 76,781.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.45s | 124,299.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.32s | 125,211.3 | PASS |

:::

:::

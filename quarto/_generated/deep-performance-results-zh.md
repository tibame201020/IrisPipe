## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-14T00:48:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,117.3 444.9,62.3 700.0,82.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="82.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.3 444.9,212.2 700.0,167.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.3" r="4" fill="#198754"/><circle cx="444.9" cy="212.2" r="4" fill="#198754"/><circle cx="700.0" cy="167.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.1 444.9,201.5 700.0,238.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="201.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.5 444.9,137.5 700.0,121.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.7 444.9,236.7 700.0,236.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.2 444.9,139.0 700.0,122.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.2" r="4" fill="#20c997"/><circle cx="444.9" cy="139.0" r="4" fill="#20c997"/><circle cx="700.0" cy="122.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.68s | 130,123.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.34s | 163,025.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 331.03s | 151,043.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.33s | 69,778.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.25s | 73,393.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 499.93s | 100,013.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.79s | 84,796.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 125.34s | 79,784.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 869.53s | 57,502.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.34s | 119,846.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.72s | 118,037.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 391.89s | 127,586.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.52s | 60,536.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.27s | 58,731.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 850.25s | 58,806.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,752.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.33s | 117,190.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 393.14s | 127,181.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,84.2 444.9,62.3 700.0,95.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="84.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.7 444.9,171.5 700.0,194.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#198754"/><circle cx="444.9" cy="171.5" r="4" fill="#198754"/><circle cx="700.0" cy="194.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.2 444.9,223.0 700.0,227.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,85.2 444.9,103.5 700.0,119.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="85.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.5 444.9,215.7 700.0,162.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,145.8 444.9,120.1 700.0,103.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#20c997"/><circle cx="444.9" cy="120.1" r="4" fill="#20c997"/><circle cx="700.0" cy="103.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.65s | 130,650.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.37s | 142,097.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 401.42s | 124,557.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.70s | 63,710.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 117.42s | 85,165.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 684.91s | 73,002.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.64s | 56,702.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.39s | 58,346.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 891.43s | 56,089.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.68s | 130,174.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.89s | 120,640.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 444.94s | 112,375.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,825.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.88s | 62,157.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 555.90s | 89,944.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.14s | 98,580.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 89.31s | 111,968.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 413.60s | 120,889.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-14T00:35:21Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.4 444.9,165.4 700.0,165.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="165.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="165.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.7 444.9,226.4 700.0,197.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.7" r="4" fill="#198754"/><circle cx="444.9" cy="226.4" r="4" fill="#198754"/><circle cx="700.0" cy="197.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.1 444.9,254.1 700.0,214.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.1 444.9,162.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.7 444.9,257.5 700.0,199.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.3 444.9,124.6 700.0,160.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#20c997"/><circle cx="444.9" cy="124.6" r="4" fill="#20c997"/><circle cx="700.0" cy="160.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.96s | 111,619.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.05s | 124,928.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 401.00s | 124,687.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.56s | 68,700.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.03s | 79,980.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 493.97s | 101,220.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.61s | 48,513.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.94s | 59,544.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 562.80s | 88,841.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.21s | 97,895.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.77s | 126,959.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 248.94s | 200,847.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.57s | 56,912.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.12s | 57,102.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 499.69s | 100,062.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.89s | 91,818.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 64.54s | 154,935.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 389.68s | 128,312.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">223k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.7 444.9,149.5 700.0,167.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="167.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.2 444.9,219.5 700.0,202.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.2" r="4" fill="#198754"/><circle cx="444.9" cy="219.5" r="4" fill="#198754"/><circle cx="700.0" cy="202.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.8 444.9,264.3 700.0,250.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,199.8 444.9,69.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="199.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="69.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.3 444.9,249.0 700.0,196.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.3 444.9,90.3 700.0,160.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.3" r="4" fill="#20c997"/><circle cx="444.9" cy="90.3" r="4" fill="#20c997"/><circle cx="700.0" cy="160.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.37s | 135,685.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.42s | 138,081.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 400.78s | 124,755.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.47s | 69,089.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.33s | 85,959.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 506.09s | 98,796.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.68s | 73,088.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 190.09s | 52,607.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 795.03s | 62,890.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,593.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 50.60s | 197,608.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 246.32s | 202,988.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.27s | 51,883.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.31s | 63,974.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 486.15s | 102,848.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.74s | 114,377.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 54.90s | 182,149.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.77s | 129,609.9 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-14T01:00:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.0 444.9,194.1 700.0,136.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="194.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.0 444.9,234.4 700.0,179.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.0" r="4" fill="#198754"/><circle cx="444.9" cy="234.4" r="4" fill="#198754"/><circle cx="700.0" cy="179.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.4 444.9,259.2 700.0,247.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.3 444.9,62.3 700.0,190.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="190.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.1 444.9,261.4 700.0,262.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="261.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="262.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,242.6 444.9,177.6 700.0,108.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="242.6" r="4" fill="#20c997"/><circle cx="444.9" cy="177.6" r="4" fill="#20c997"/><circle cx="700.0" cy="108.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.72s | 114,678.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.32s | 96,790.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 366.59s | 136,393.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.04s | 99,601.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.71s | 69,105.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 469.27s | 106,548.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.82s | 59,463.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 192.04s | 52,071.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 829.07s | 60,308.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.56s | 132,327.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 53.39s | 187,301.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 502.86s | 99,432.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.77s | 45,934.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.92s | 50,525.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1006.03s | 49,700.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.75s | 63,475.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 92.50s | 108,112.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 321.32s | 155,607.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">176k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.0 444.9,163.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.1 444.9,192.2 700.0,157.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#198754"/><circle cx="444.9" cy="192.2" r="4" fill="#198754"/><circle cx="700.0" cy="157.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.9 444.9,199.5 700.0,244.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="199.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.4 444.9,153.7 700.0,86.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.4 444.9,243.2 700.0,243.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.4 444.9,172.8 700.0,147.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#20c997"/><circle cx="444.9" cy="172.8" r="4" fill="#20c997"/><circle cx="700.0" cy="147.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.11s | 98,921.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.86s | 100,138.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 313.17s | 159,657.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.13s | 66,085.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.59s | 83,621.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 480.05s | 104,156.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.95s | 52,762.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 126.07s | 79,320.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 943.63s | 52,986.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.19s | 98,125.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 94.23s | 106,118.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 343.69s | 145,479.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.59s | 44,277.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.98s | 53,768.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 929.62s | 53,785.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.52s | 68,856.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.32s | 94,952.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 454.81s | 109,936.7 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-14T00:52:48Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.4 444.9,102.4 700.0,99.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.7 444.9,211.7 700.0,204.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.7" r="4" fill="#198754"/><circle cx="444.9" cy="211.7" r="4" fill="#198754"/><circle cx="700.0" cy="204.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.1 444.9,228.9 700.0,225.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,138.3 700.0,141.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.4 444.9,246.6 700.0,221.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.5 444.9,74.3 700.0,69.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.5" r="4" fill="#20c997"/><circle cx="444.9" cy="74.3" r="4" fill="#20c997"/><circle cx="700.0" cy="69.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,840.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.69s | 145,571.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 338.90s | 147,536.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.63s | 94,038.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.63s | 77,145.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.25s | 81,532.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.27s | 49,338.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.63s | 66,386.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 728.01s | 68,680.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.86s | 170,648.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.27s | 123,048.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 411.83s | 121,409.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.53s | 79,833.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.72s | 55,334.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 702.55s | 71,168.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.83s | 77,924.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 61.30s | 163,132.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 300.96s | 166,137.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,105.4 444.9,62.3 700.0,128.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.9 444.9,123.2 700.0,207.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.9" r="4" fill="#198754"/><circle cx="444.9" cy="123.2" r="4" fill="#198754"/><circle cx="700.0" cy="207.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.7 444.9,239.8 700.0,240.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.9 444.9,108.7 700.0,133.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,210.5 444.9,210.7 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="210.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,135.1 444.9,138.6 700.0,119.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="135.1" r="4" fill="#20c997"/><circle cx="444.9" cy="138.6" r="4" fill="#20c997"/><circle cx="700.0" cy="119.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.22s | 138,561.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 60.76s | 164,595.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 401.63s | 124,493.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.91s | 67,060.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.22s | 127,847.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 650.45s | 76,870.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.98s | 40,032.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.10s | 57,437.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 880.42s | 56,791.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.54s | 117,164.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.21s | 136,587.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.17s | 121,603.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.31s | 75,142.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 133.32s | 75,008.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 895.95s | 55,806.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.29s | 120,670.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.38s | 118,511.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.42s | 130,065.4 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-14T00:39:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">203k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,172.7 444.9,106.8 700.0,157.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="106.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="157.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.0 444.9,216.0 700.0,140.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.0" r="4" fill="#198754"/><circle cx="444.9" cy="216.0" r="4" fill="#198754"/><circle cx="700.0" cy="140.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.7 444.9,248.9 700.0,252.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.1 444.9,153.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,217.8 444.9,203.5 700.0,247.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="217.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.4 444.9,127.2 700.0,123.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.4" r="4" fill="#20c997"/><circle cx="444.9" cy="127.2" r="4" fill="#20c997"/><circle cx="700.0" cy="123.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.09s | 109,962.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.69s | 154,588.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 416.05s | 120,177.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.73s | 78,554.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.07s | 80,599.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 379.49s | 131,755.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.13s | 49,679.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.35s | 58,358.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 898.69s | 55,636.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.26s | 97,475.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.53s | 122,655.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 270.63s | 184,756.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.59s | 79,409.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.25s | 89,082.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 839.68s | 59,546.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.24s | 81,706.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 71.05s | 140,740.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 349.17s | 143,198.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,103.5 700.0,80.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="103.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="80.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.7 444.9,95.4 700.0,191.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#198754"/><circle cx="444.9" cy="95.4" r="4" fill="#198754"/><circle cx="700.0" cy="191.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.3 444.9,167.6 700.0,229.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="167.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,105.8 444.9,110.4 700.0,103.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="105.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="110.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.5 444.9,157.2 700.0,201.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="157.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.2 444.9,114.0 700.0,74.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.2" r="4" fill="#20c997"/><circle cx="444.9" cy="114.0" r="4" fill="#20c997"/><circle cx="700.0" cy="74.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.90s | 144,885.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.31s | 122,980.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.35s | 135,007.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.67s | 68,157.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.56s | 127,286.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.50s | 76,161.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.75s | 48,197.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 112.47s | 88,909.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 891.88s | 56,061.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.21s | 121,758.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.83s | 119,293.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.24s | 122,777.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.50s | 51,284.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.90s | 94,431.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 704.06s | 71,016.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.47s | 74,261.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.17s | 117,405.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 360.99s | 138,509.9 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-14T00:50:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.9 444.9,64.5 700.0,101.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.6 444.9,162.8 700.0,223.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.6" r="4" fill="#198754"/><circle cx="444.9" cy="162.8" r="4" fill="#198754"/><circle cx="700.0" cy="223.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.2 444.9,241.0 700.0,261.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.6 444.9,155.5 700.0,163.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="163.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.0 444.9,236.4 700.0,214.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,156.3 444.9,93.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="156.3" r="4" fill="#20c997"/><circle cx="444.9" cy="93.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.00s | 100,030.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.83s | 179,105.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 323.40s | 154,606.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.68s | 93,606.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 87.73s | 113,990.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 677.92s | 73,754.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.54s | 68,756.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 160.74s | 62,213.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1025.19s | 48,771.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.88s | 145,264.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.12s | 118,877.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 439.18s | 113,848.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.91s | 77,441.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.24s | 65,256.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 624.87s | 80,016.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.45s | 118,301.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.56s | 159,849.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 276.89s | 180,579.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">124k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">166k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,76.8 444.9,80.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="76.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="80.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.4 444.9,207.6 700.0,121.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.4" r="4" fill="#198754"/><circle cx="444.9" cy="207.6" r="4" fill="#198754"/><circle cx="700.0" cy="121.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.8 444.9,250.9 700.0,208.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="208.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.2 444.9,68.2 700.0,123.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.1 444.9,199.3 700.0,231.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.2 444.9,118.7 700.0,121.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.2" r="4" fill="#20c997"/><circle cx="444.9" cy="118.7" r="4" fill="#20c997"/><circle cx="700.0" cy="121.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.02s | 142,470.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.12s | 140,605.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 332.21s | 150,505.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.53s | 60,485.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 142.22s | 70,311.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 425.23s | 117,582.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.11s | 39,824.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 215.49s | 46,406.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 718.33s | 69,605.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.73s | 93,153.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 67.91s | 147,255.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.96s | 116,832.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.34s | 46,871.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 133.49s | 74,912.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 876.07s | 57,073.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.34s | 81,011.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.78s | 119,361.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 424.69s | 117,731.5 | PASS |

:::

:::

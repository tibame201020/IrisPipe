## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-22T22:32:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">165k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">220k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,180.8 444.9,62.3 700.0,150.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.1 444.9,230.4 700.0,163.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#198754"/><circle cx="444.9" cy="230.4" r="4" fill="#198754"/><circle cx="700.0" cy="163.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.4 444.9,254.8 700.0,260.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.6 444.9,174.2 700.0,169.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="174.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.8 444.9,215.8 700.0,254.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.4 444.9,188.3 700.0,161.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#20c997"/><circle cx="444.9" cy="188.3" r="4" fill="#20c997"/><circle cx="700.0" cy="161.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.85s | 113,019.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 50.01s | 199,944.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 370.14s | 135,084.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.71s | 63,674.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.42s | 76,674.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 397.06s | 125,924.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.50s | 48,790.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.12s | 58,783.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.34s | 54,985.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.56s | 132,257.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.82s | 117,898.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.81s | 121,711.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.72s | 78,585.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 114.39s | 87,417.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.92s | 59,037.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,492.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 93.00s | 107,525.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 393.89s | 126,938.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,84.7 444.9,62.3 700.0,68.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="84.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="68.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,171.3 700.0,174.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="171.3" r="4" fill="#198754"/><circle cx="700.0" cy="174.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.4 444.9,191.4 700.0,212.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="191.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,101.5 444.9,89.9 700.0,86.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="101.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.5 444.9,216.6 700.0,155.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="155.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,165.1 444.9,95.4 700.0,68.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="165.1" r="4" fill="#20c997"/><circle cx="444.9" cy="95.4" r="4" fill="#20c997"/><circle cx="700.0" cy="68.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.26s | 121,036.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.83s | 131,882.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 387.76s | 128,945.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.02s | 66,569.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.36s | 79,137.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 642.89s | 77,773.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.21s | 52,053.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 144.05s | 69,419.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 845.21s | 59,157.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,917.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.37s | 118,529.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.40s | 120,076.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.99s | 47,639.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.64s | 57,260.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 576.90s | 86,670.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.17s | 82,142.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.32s | 115,850.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.00s | 128,865.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-23T22:36:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.5 444.9,138.1 700.0,146.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.4 444.9,204.0 700.0,159.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#198754"/><circle cx="444.9" cy="204.0" r="4" fill="#198754"/><circle cx="700.0" cy="159.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.8 444.9,238.4 700.0,234.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.4 444.9,115.6 700.0,131.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,241.0 700.0,233.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,126.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="126.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.25s | 97,522.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.57s | 119,663.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 435.85s | 114,718.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.75s | 67,801.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.64s | 79,593.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 467.96s | 106,845.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.87s | 53,005.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.37s | 58,696.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 816.83s | 61,212.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.42s | 134,698.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.00s | 133,328.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.82s | 123,512.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.19s | 52,102.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.07s | 57,118.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 813.71s | 61,447.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.86s | 77,742.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.94s | 126,681.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 301.65s | 165,757.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">177k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">235k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,209.0 444.9,119.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="119.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.4 444.9,206.2 700.0,233.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.4" r="4" fill="#198754"/><circle cx="444.9" cy="206.2" r="4" fill="#198754"/><circle cx="700.0" cy="233.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,285.8 444.9,253.2 700.0,261.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="285.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,197.1 444.9,176.8 700.0,168.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="176.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="168.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.5 444.9,265.5 700.0,261.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="261.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.9 444.9,171.7 700.0,157.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.9" r="4" fill="#20c997"/><circle cx="444.9" cy="171.7" r="4" fill="#20c997"/><circle cx="700.0" cy="157.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.11s | 98,902.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.23s | 168,822.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 233.61s | 214,032.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.62s | 86,021.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 98.92s | 101,091.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 627.34s | 79,701.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.89s | 38,623.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 155.76s | 64,201.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 870.50s | 57,438.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.24s | 108,213.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.54s | 124,166.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.76s | 130,629.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.63s | 63,963.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 183.45s | 54,509.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 864.20s | 57,857.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,333.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.03s | 128,150.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 359.04s | 139,259.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-22T22:57:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,179.7 444.9,144.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="179.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="144.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.2 444.9,200.4 700.0,176.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.2" r="4" fill="#198754"/><circle cx="444.9" cy="200.4" r="4" fill="#198754"/><circle cx="700.0" cy="176.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.8 444.9,176.4 700.0,226.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="176.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.4 444.9,154.7 700.0,109.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.2 444.9,235.3 700.0,226.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,224.3 444.9,104.1 700.0,156.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="224.3" r="4" fill="#20c997"/><circle cx="444.9" cy="104.1" r="4" fill="#20c997"/><circle cx="700.0" cy="156.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.87s | 77,700.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 104.74s | 95,474.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 366.35s | 136,482.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.27s | 61,462.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 148.46s | 67,357.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 630.08s | 79,354.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.06s | 58,630.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 126.03s | 79,345.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 924.57s | 54,079.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.06s | 99,383.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 110.84s | 90,221.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 443.21s | 112,813.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.76s | 63,467.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 200.50s | 49,875.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 922.11s | 54,223.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 18.06s | 55,374.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.54s | 115,552.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 559.36s | 89,388.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.0 444.9,112.4 700.0,116.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.0 444.9,174.9 700.0,196.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#198754"/><circle cx="444.9" cy="174.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.3 444.9,216.1 700.0,208.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="208.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.2 444.9,62.3 700.0,95.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="95.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.8 444.9,243.2 700.0,222.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.7 444.9,111.3 700.0,155.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.7" r="4" fill="#20c997"/><circle cx="444.9" cy="111.3" r="4" fill="#20c997"/><circle cx="700.0" cy="155.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 13.60s | 73,545.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.55s | 103,573.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 491.80s | 101,667.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.33s | 69,798.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.21s | 74,508.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 774.51s | 64,557.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.33s | 49,188.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.69s | 55,344.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 852.08s | 58,680.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.05s | 99,492.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.79s | 126,921.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 448.86s | 111,393.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.11s | 45,238.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 234.07s | 42,722.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 955.27s | 52,341.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.79s | 67,622.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 96.04s | 104,121.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 599.76s | 83,366.3 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-22T22:36:05Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.7 444.9,103.6 700.0,105.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="103.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,259.9 444.9,190.2 700.0,182.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#198754"/><circle cx="444.9" cy="190.2" r="4" fill="#198754"/><circle cx="700.0" cy="182.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.6 444.9,230.1 700.0,224.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.2 444.9,90.6 700.0,111.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.5 444.9,229.2 700.0,199.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,92.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="92.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.10s | 99,039.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.16s | 121,719.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 414.96s | 120,493.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 25.33s | 39,480.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.30s | 76,163.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.42s | 80,074.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.35s | 49,132.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.15s | 55,202.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 860.47s | 58,107.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.65s | 115,593.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.78s | 128,571.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 425.51s | 117,505.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.69s | 56,522.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.77s | 55,625.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 700.43s | 71,384.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.63s | 73,378.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.48s | 127,421.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 348.54s | 143,456.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.8 444.9,111.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.2 444.9,167.6 700.0,200.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.2" r="4" fill="#198754"/><circle cx="444.9" cy="167.6" r="4" fill="#198754"/><circle cx="700.0" cy="200.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.6 444.9,240.0 700.0,188.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="188.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.6 444.9,139.9 700.0,137.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.4 444.9,242.1 700.0,235.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.8 444.9,123.9 700.0,118.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.8" r="4" fill="#20c997"/><circle cx="444.9" cy="123.9" r="4" fill="#20c997"/><circle cx="700.0" cy="118.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.35s | 106,974.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.46s | 134,303.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 305.42s | 163,706.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.77s | 67,718.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 99.50s | 100,500.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 618.70s | 80,814.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.23s | 49,441.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.28s | 57,052.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 569.01s | 87,871.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.50s | 105,296.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.38s | 117,118.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 421.19s | 118,711.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 24.64s | 40,581.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.26s | 55,784.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 834.17s | 59,940.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.32s | 81,149.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.93s | 126,691.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.98s | 129,878.6 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-22T22:27:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.4 444.9,132.1 700.0,123.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="132.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.3 444.9,203.5 700.0,198.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.3" r="4" fill="#198754"/><circle cx="444.9" cy="203.5" r="4" fill="#198754"/><circle cx="700.0" cy="198.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.2 444.9,229.1 700.0,199.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.0 444.9,62.3 700.0,123.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.5 444.9,242.5 700.0,199.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.8 444.9,129.1 700.0,106.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.8" r="4" fill="#20c997"/><circle cx="444.9" cy="129.1" r="4" fill="#20c997"/><circle cx="700.0" cy="106.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.87s | 112,752.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.67s | 123,958.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 387.53s | 129,021.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.06s | 66,387.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.45s | 80,353.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 601.42s | 83,136.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.17s | 45,097.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 154.62s | 64,676.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 604.21s | 82,752.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.19s | 122,159.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.02s | 166,602.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.68s | 128,973.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.23s | 43,053.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.97s | 56,508.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 605.94s | 82,517.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.19s | 82,007.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.51s | 125,770.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 357.58s | 139,829.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">177k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">236k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,212.9 444.9,172.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="212.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="172.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,256.1 444.9,271.3 700.0,232.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="256.1" r="4" fill="#198754"/><circle cx="444.9" cy="271.3" r="4" fill="#198754"/><circle cx="700.0" cy="232.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.6 444.9,267.3 700.0,265.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="265.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,207.9 444.9,186.4 700.0,91.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="186.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.9 444.9,261.0 700.0,251.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="261.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,238.4 444.9,168.3 700.0,136.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#20c997"/><circle cx="444.9" cy="168.3" r="4" fill="#20c997"/><circle cx="700.0" cy="136.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.40s | 96,107.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.07s | 128,085.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 233.00s | 214,592.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.10s | 62,107.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 199.55s | 50,111.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 617.88s | 80,922.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.94s | 43,584.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.81s | 53,245.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 909.40s | 54,981.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.00s | 100,010.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.55s | 116,888.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 261.38s | 191,289.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.75s | 67,782.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.80s | 58,208.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 763.65s | 65,475.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.16s | 75,976.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.25s | 131,152.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 320.09s | 156,205.6 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-22T22:40:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,206.8 444.9,62.3 700.0,167.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="167.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,249.0 444.9,227.6 700.0,222.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="249.0" r="4" fill="#198754"/><circle cx="444.9" cy="227.6" r="4" fill="#198754"/><circle cx="700.0" cy="222.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.3 444.9,263.8 700.0,270.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="270.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.1 444.9,160.7 700.0,141.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.5 444.9,208.9 700.0,249.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="208.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.2 444.9,148.0 700.0,132.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.2" r="4" fill="#20c997"/><circle cx="444.9" cy="148.0" r="4" fill="#20c997"/><circle cx="700.0" cy="132.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.45s | 87,351.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 53.81s | 185,835.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 438.89s | 113,923.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.06s | 58,620.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.65s | 73,181.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 650.54s | 76,859.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.56s | 40,711.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 206.14s | 48,511.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1141.12s | 43,816.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.27s | 97,352.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.18s | 118,797.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.12s | 131,883.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.44s | 46,648.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 116.42s | 85,899.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.95s | 58,278.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.01s | 76,875.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.50s | 127,391.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.54s | 137,914.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,155.2 444.9,95.7 700.0,79.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,181.2 444.9,86.2 700.0,209.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="181.2" r="4" fill="#198754"/><circle cx="444.9" cy="86.2" r="4" fill="#198754"/><circle cx="700.0" cy="209.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,281.3 444.9,240.2 700.0,232.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="281.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.8 444.9,107.1 700.0,82.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="82.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.4 444.9,213.8 700.0,212.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.5 444.9,81.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#20c997"/><circle cx="444.9" cy="81.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.23s | 89,078.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.34s | 118,562.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 394.26s | 126,820.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.13s | 76,184.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 81.13s | 123,262.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 802.40s | 62,313.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 37.60s | 26,592.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.02s | 46,944.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 987.82s | 50,616.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.72s | 85,302.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.58s | 112,898.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.55s | 125,142.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.53s | 44,379.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 166.56s | 60,037.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 822.28s | 60,806.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.58s | 79,497.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.69s | 125,491.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 370.11s | 135,095.7 | PASS |

:::

:::

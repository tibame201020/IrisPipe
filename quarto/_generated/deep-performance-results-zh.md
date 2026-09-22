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
  **最新量測：** `2026-09-22T22:25:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.8 444.9,95.6 700.0,100.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="100.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.3 444.9,186.7 700.0,123.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.3" r="4" fill="#198754"/><circle cx="444.9" cy="186.7" r="4" fill="#198754"/><circle cx="700.0" cy="123.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.6 444.9,223.0 700.0,212.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.9 444.9,88.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.2 444.9,222.1 700.0,207.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,148.2 444.9,71.9 700.0,67.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#20c997"/><circle cx="444.9" cy="71.9" r="4" fill="#20c997"/><circle cx="700.0" cy="67.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.72s | 93,240.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.50s | 121,218.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.48s | 118,630.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.45s | 69,218.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.16s | 75,098.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 466.87s | 107,095.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.14s | 47,308.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.30s | 56,721.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 808.59s | 61,835.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.78s | 113,960.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.17s | 124,733.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 362.12s | 138,077.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.85s | 53,061.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.97s | 57,151.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 774.45s | 64,562.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.57s | 94,571.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.06s | 133,219.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.94s | 135,522.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,78.9 444.9,62.3 700.0,74.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="78.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="74.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.0 444.9,180.0 700.0,157.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#198754"/><circle cx="444.9" cy="180.0" r="4" fill="#198754"/><circle cx="700.0" cy="157.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.8 444.9,264.3 700.0,225.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.9 444.9,86.6 700.0,84.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="86.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.0 444.9,237.5 700.0,212.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.6 444.9,73.2 700.0,74.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.6" r="4" fill="#20c997"/><circle cx="444.9" cy="73.2" r="4" fill="#20c997"/><circle cx="700.0" cy="74.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.86s | 127,161.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.83s | 135,442.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 385.78s | 129,608.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.51s | 74,013.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.94s | 76,958.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 568.04s | 88,022.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.14s | 52,254.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 284.86s | 35,105.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 916.39s | 54,562.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.36s | 106,837.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.06s | 123,357.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 401.47s | 124,542.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 28.35s | 35,273.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 206.51s | 48,423.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 818.66s | 61,075.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.34s | 69,715.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.93s | 129,991.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.68s | 129,640.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-21T23:37:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">69k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">138k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,155.1 444.9,118.4 700.0,112.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="112.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.9 444.9,183.8 700.0,183.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#198754"/><circle cx="444.9" cy="183.8" r="4" fill="#198754"/><circle cx="700.0" cy="183.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.8 444.9,228.1 700.0,222.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,108.7 444.9,107.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="108.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.3 444.9,225.0 700.0,208.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.0 444.9,95.5 700.0,102.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.0" r="4" fill="#20c997"/><circle cx="444.9" cy="95.5" r="4" fill="#20c997"/><circle cx="700.0" cy="102.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.12s | 82,481.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 100.66s | 99,342.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 490.55s | 101,927.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.68s | 63,771.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.24s | 69,329.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 718.17s | 69,621.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.62s | 50,971.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 204.06s | 49,004.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 964.80s | 51,823.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.64s | 103,756.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 95.93s | 104,241.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 399.80s | 125,063.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.32s | 44,804.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 198.30s | 50,428.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 862.43s | 57,975.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.04s | 66,471.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 91.04s | 109,838.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 469.83s | 106,420.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">121k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,131.9 444.9,76.9 700.0,79.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,159.6 444.9,172.4 700.0,165.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="159.6" r="4" fill="#198754"/><circle cx="444.9" cy="172.4" r="4" fill="#198754"/><circle cx="700.0" cy="165.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,208.7 444.9,209.8 700.0,201.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="209.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,85.9 444.9,108.0 700.0,223.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="85.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="223.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,197.4 444.9,207.7 700.0,219.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="197.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,149.5 444.9,204.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="149.5" r="4" fill="#20c997"/><circle cx="444.9" cy="204.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.23s | 81,786.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.21s | 103,942.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 484.94s | 103,105.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,636.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 152.71s | 65,485.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 730.64s | 68,433.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.65s | 50,885.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 198.37s | 50,410.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 930.39s | 53,740.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.97s | 100,311.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 109.39s | 91,416.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 1110.88s | 45,009.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.04s | 55,435.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 195.06s | 51,266.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1075.76s | 46,478.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.38s | 74,710.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 190.69s | 52,442.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 455.20s | 109,840.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-21T23:18:46Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.2 444.9,148.4 700.0,148.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="148.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="148.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.1 444.9,217.3 700.0,217.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.1" r="4" fill="#198754"/><circle cx="444.9" cy="217.3" r="4" fill="#198754"/><circle cx="700.0" cy="217.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.9 444.9,247.5 700.0,234.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.3 444.9,62.3 700.0,157.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.9 444.9,196.1 700.0,221.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="196.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.0 444.9,140.6 700.0,137.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.0" r="4" fill="#20c997"/><circle cx="444.9" cy="140.6" r="4" fill="#20c997"/><circle cx="700.0" cy="137.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.00s | 100,010.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.34s | 122,936.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 407.23s | 122,781.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.33s | 69,783.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.95s | 77,551.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 648.03s | 77,156.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.49s | 54,086.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.49s | 57,640.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 752.67s | 66,430.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.51s | 105,207.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.65s | 179,697.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 427.32s | 117,007.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.68s | 50,813.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 109.26s | 91,522.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 671.25s | 74,488.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.34s | 81,057.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.08s | 128,072.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.22s | 130,134.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,121.6 444.9,62.3 700.0,68.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="121.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="68.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.1 444.9,184.0 700.0,205.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#198754"/><circle cx="444.9" cy="184.0" r="4" fill="#198754"/><circle cx="700.0" cy="205.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,278.1 444.9,243.4 700.0,213.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="278.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,157.0 444.9,120.8 700.0,130.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="157.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.8 444.9,234.1 700.0,240.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.1 444.9,133.5 700.0,111.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#20c997"/><circle cx="444.9" cy="133.5" r="4" fill="#20c997"/><circle cx="700.0" cy="111.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.72s | 129,449.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 60.43s | 165,472.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 309.36s | 161,626.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.28s | 65,440.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 109.11s | 91,646.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.78s | 78,643.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.94s | 34,553.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.91s | 55,584.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 676.44s | 73,916.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.26s | 107,979.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.93s | 129,986.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 402.75s | 124,146.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.34s | 51,706.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.39s | 61,203.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 870.60s | 57,431.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.34s | 69,715.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.79s | 122,259.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.03s | 135,858.1 | PASS |

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
  **最新量測：** `2026-09-21T23:21:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,209.3 444.9,115.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="209.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,184.4 700.0,181.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="184.4" r="4" fill="#198754"/><circle cx="700.0" cy="181.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.9 444.9,240.4 700.0,221.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,124.6 444.9,75.2 700.0,90.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="124.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="75.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="90.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.6 444.9,221.8 700.0,218.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.1 444.9,72.3 700.0,112.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.1" r="4" fill="#20c997"/><circle cx="444.9" cy="72.3" r="4" fill="#20c997"/><circle cx="700.0" cy="112.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 16.06s | 62,258.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 92.00s | 108,696.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 370.24s | 135,046.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.00s | 62,500.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.13s | 74,554.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 656.09s | 76,209.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.86s | 38,662.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.53s | 46,832.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 890.66s | 56,137.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.60s | 104,166.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.74s | 128,635.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.29s | 120,980.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.98s | 55,632.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 178.43s | 56,045.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 862.76s | 57,953.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.17s | 82,169.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.87s | 130,091.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 452.87s | 110,406.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,190.7 444.9,89.6 700.0,65.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.7 444.9,177.2 700.0,161.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.7" r="4" fill="#198754"/><circle cx="444.9" cy="177.2" r="4" fill="#198754"/><circle cx="700.0" cy="161.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.0 444.9,244.6 700.0,255.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.2 444.9,77.7 700.0,70.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="77.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="70.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.9 444.9,221.2 700.0,223.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.5 444.9,113.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.5" r="4" fill="#20c997"/><circle cx="444.9" cy="113.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 14.48s | 69,056.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.18s | 117,399.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 388.34s | 128,754.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.88s | 77,645.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.42s | 75,515.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 602.34s | 83,009.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.73s | 59,783.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 231.17s | 43,257.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1306.11s | 38,281.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.14s | 122,850.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.22s | 123,114.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 395.60s | 126,390.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.26s | 49,348.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 183.75s | 54,422.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 940.09s | 53,186.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.85s | 84,423.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 94.43s | 105,903.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.19s | 130,482.2 | PASS |

:::

:::

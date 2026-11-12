## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-12T01:52:04Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.7 444.9,163.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.5 444.9,217.8 700.0,200.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.5" r="4" fill="#198754"/><circle cx="444.9" cy="217.8" r="4" fill="#198754"/><circle cx="700.0" cy="200.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.8 444.9,240.0 700.0,242.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.4 444.9,150.2 700.0,84.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.0 444.9,243.7 700.0,224.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.1 444.9,158.8 700.0,131.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.1" r="4" fill="#20c997"/><circle cx="444.9" cy="158.8" r="4" fill="#20c997"/><circle cx="700.0" cy="131.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.59s | 116,441.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.82s | 112,584.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 279.12s | 179,134.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.00s | 66,684.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.93s | 76,966.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 563.93s | 88,664.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.48s | 51,345.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 160.31s | 62,378.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 823.53s | 60,714.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,627.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.38s | 121,391.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 303.61s | 164,686.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.28s | 51,856.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 166.68s | 59,994.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 689.40s | 72,526.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.61s | 73,491.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.41s | 115,724.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.12s | 133,648.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,105.1 444.9,65.1 700.0,86.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.9 444.9,168.4 700.0,62.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#198754"/><circle cx="444.9" cy="168.4" r="4" fill="#198754"/><circle cx="700.0" cy="62.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.2 444.9,221.0 700.0,205.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.5 444.9,105.6 700.0,104.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="105.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,186.5 444.9,154.1 700.0,209.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="186.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="154.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.7 444.9,106.4 700.0,72.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#20c997"/><circle cx="444.9" cy="106.4" r="4" fill="#20c997"/><circle cx="700.0" cy="72.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.62s | 115,968.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.45s | 136,141.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 399.18s | 125,256.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,595.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.03s | 84,013.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 363.48s | 137,560.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.55s | 60,437.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.84s | 57,524.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 764.06s | 65,439.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.16s | 109,218.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.41s | 115,730.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 430.58s | 116,123.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.35s | 74,895.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 109.58s | 91,259.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 792.40s | 63,099.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.44s | 80,366.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.71s | 115,325.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.68s | 132,389.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-12T01:49:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,172.2 444.9,66.6 700.0,115.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="66.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.5 444.9,216.3 700.0,218.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#198754"/><circle cx="444.9" cy="216.3" r="4" fill="#198754"/><circle cx="700.0" cy="218.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.2 444.9,186.7 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="186.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.4 444.9,148.8 700.0,135.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.6 444.9,234.0 700.0,247.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,235.1 444.9,62.3 700.0,135.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="135.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.12s | 109,625.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.31s | 180,805.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 337.72s | 148,052.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.25s | 108,119.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.03s | 79,982.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 635.50s | 78,678.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.96s | 47,714.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 100.13s | 99,872.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 863.31s | 57,916.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,112.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.74s | 125,413.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 372.09s | 134,375.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.61s | 60,204.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 147.00s | 68,024.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.52s | 59,205.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.86s | 67,317.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 54.44s | 183,698.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.69s | 134,159.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,197.0 444.9,152.3 700.0,114.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.3 444.9,224.1 700.0,137.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.3" r="4" fill="#198754"/><circle cx="444.9" cy="224.1" r="4" fill="#198754"/><circle cx="700.0" cy="137.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.3 444.9,237.5 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,99.2 444.9,160.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.8 444.9,249.5 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.1 444.9,111.1 700.0,138.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#20c997"/><circle cx="444.9" cy="111.1" r="4" fill="#20c997"/><circle cx="700.0" cy="138.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.58s | 94,482.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.92s | 125,128.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 330.52s | 151,278.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.59s | 64,151.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.73s | 75,915.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 370.15s | 135,081.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.06s | 41,567.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 149.79s | 66,760.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 858.96s | 58,210.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.19s | 161,446.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.51s | 119,747.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 267.75s | 186,739.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,906.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.81s | 58,542.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 672.64s | 74,334.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.59s | 94,393.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.22s | 153,334.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 371.69s | 134,520.0 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:50:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.8 444.9,157.2 700.0,148.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="148.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,147.7 444.9,195.0 700.0,128.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="147.7" r="4" fill="#198754"/><circle cx="444.9" cy="195.0" r="4" fill="#198754"/><circle cx="700.0" cy="128.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.2 444.9,227.8 700.0,234.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="227.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,133.3 700.0,124.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.7 444.9,238.7 700.0,242.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,152.7 444.9,176.1 700.0,129.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="152.7" r="4" fill="#20c997"/><circle cx="444.9" cy="176.1" r="4" fill="#20c997"/><circle cx="700.0" cy="129.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,515.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 106.22s | 94,146.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 507.35s | 98,551.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.08s | 99,226.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.85s | 74,158.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 457.29s | 109,338.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.02s | 47,571.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.15s | 56,771.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 934.41s | 53,509.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.92s | 144,446.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.63s | 106,804.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 448.72s | 111,427.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.40s | 44,648.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.03s | 51,011.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1024.70s | 48,794.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,534.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 118.83s | 84,153.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 459.65s | 108,778.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,69.2 700.0,87.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="87.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.2 444.9,191.9 700.0,151.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.2" r="4" fill="#198754"/><circle cx="444.9" cy="191.9" r="4" fill="#198754"/><circle cx="700.0" cy="151.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.6 444.9,225.5 700.0,220.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.9 444.9,128.9 700.0,108.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.4 444.9,226.2 700.0,232.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,159.7 444.9,127.3 700.0,67.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="159.7" r="4" fill="#20c997"/><circle cx="444.9" cy="127.3" r="4" fill="#20c997"/><circle cx="700.0" cy="67.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.83s | 127,681.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.35s | 124,450.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 431.73s | 115,814.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.46s | 60,764.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 149.26s | 66,999.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 582.13s | 85,891.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.50s | 46,518.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 195.06s | 51,266.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 931.25s | 53,691.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.07s | 99,285.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 103.64s | 96,490.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.37s | 106,074.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.01s | 55,518.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.36s | 50,926.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1041.96s | 47,986.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.19s | 82,061.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.86s | 97,219.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.91s | 125,028.4 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:36:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,108.8 444.9,140.4 700.0,109.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,161.0 444.9,204.6 700.0,164.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="161.0" r="4" fill="#198754"/><circle cx="444.9" cy="204.6" r="4" fill="#198754"/><circle cx="700.0" cy="164.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.8 444.9,235.1 700.0,237.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.0 444.9,123.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.3 444.9,190.6 700.0,175.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="190.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.4 444.9,89.6 700.0,115.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#20c997"/><circle cx="444.9" cy="89.6" r="4" fill="#20c997"/><circle cx="700.0" cy="115.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.30s | 137,061.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.80s | 117,925.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 365.34s | 136,859.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.49s | 105,396.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.62s | 78,976.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 484.01s | 103,302.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.84s | 63,119.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.18s | 60,538.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.75s | 59,188.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.54s | 104,788.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.10s | 128,047.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 302.60s | 165,235.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.96s | 47,707.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 114.32s | 87,476.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 518.80s | 96,376.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.80s | 72,448.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.26s | 148,674.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.87s | 133,024.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.9 444.9,118.7 700.0,86.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.4 444.9,192.1 700.0,171.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#198754"/><circle cx="444.9" cy="192.1" r="4" fill="#198754"/><circle cx="700.0" cy="171.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.7 444.9,234.6 700.0,234.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.5 444.9,91.8 700.0,138.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.9 444.9,226.6 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,62.3 700.0,112.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="112.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.45s | 95,730.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.04s | 116,219.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.98s | 133,340.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,558.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.20s | 76,803.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 568.83s | 87,899.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,515.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.26s | 53,976.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 922.48s | 54,202.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,083.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.52s | 130,684.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 473.31s | 105,639.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.11s | 47,368.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.71s | 58,236.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.44s | 58,381.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.47s | 74,233.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 68.23s | 146,556.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 417.85s | 119,660.5 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-12T01:46:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.2 444.9,134.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.3 444.9,191.5 700.0,181.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#198754"/><circle cx="444.9" cy="191.5" r="4" fill="#198754"/><circle cx="700.0" cy="181.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,204.5 700.0,246.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.8 444.9,148.7 700.0,127.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.7 444.9,249.2 700.0,229.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.5 444.9,143.2 700.0,109.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#20c997"/><circle cx="444.9" cy="143.2" r="4" fill="#20c997"/><circle cx="700.0" cy="109.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,480.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.95s | 133,422.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 275.93s | 181,204.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.72s | 63,613.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 104.86s | 95,366.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 489.68s | 102,107.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.62s | 60,150.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 115.34s | 86,697.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 845.35s | 59,147.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.51s | 95,147.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.80s | 123,763.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 362.13s | 138,073.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.16s | 65,967.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.51s | 56,975.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 711.94s | 70,230.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,392.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.48s | 127,416.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 333.39s | 149,974.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.4 444.9,97.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,176.4 444.9,202.9 700.0,200.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="176.4" r="4" fill="#198754"/><circle cx="444.9" cy="202.9" r="4" fill="#198754"/><circle cx="700.0" cy="200.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.7 444.9,248.4 700.0,182.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="182.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.4 444.9,150.5 700.0,136.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="136.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.0 444.9,222.5 700.0,244.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.5 444.9,90.2 700.0,119.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#20c997"/><circle cx="444.9" cy="90.2" r="4" fill="#20c997"/><circle cx="700.0" cy="119.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.76s | 128,899.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.73s | 154,497.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 282.46s | 177,016.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.72s | 102,912.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.64s | 85,731.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 571.22s | 87,532.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.84s | 72,254.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.85s | 56,226.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 504.76s | 99,057.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.78s | 102,301.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.50s | 119,763.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 387.14s | 129,152.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.94s | 77,255.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 136.93s | 73,029.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 846.52s | 59,065.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.72s | 102,870.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 62.93s | 158,901.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 357.36s | 139,913.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:37:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,123.9 444.9,121.0 700.0,116.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="123.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.1 444.9,173.5 700.0,186.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.1" r="4" fill="#198754"/><circle cx="444.9" cy="173.5" r="4" fill="#198754"/><circle cx="700.0" cy="186.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.0 444.9,241.1 700.0,229.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.5 444.9,91.2 700.0,97.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.2 444.9,153.6 700.0,223.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="153.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,182.0 444.9,95.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="182.0" r="4" fill="#20c997"/><circle cx="444.9" cy="95.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.52s | 105,031.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 93.93s | 106,462.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 458.95s | 108,943.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.24s | 65,603.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.49s | 80,329.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 676.39s | 73,922.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.84s | 45,789.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 214.04s | 46,720.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 949.84s | 52,640.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.61s | 94,268.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.44s | 121,301.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 422.98s | 118,210.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.82s | 53,123.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 110.82s | 90,238.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 896.90s | 55,747.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.14s | 76,109.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.75s | 119,403.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.49s | 135,689.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,182.0 444.9,163.0 700.0,155.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="182.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="155.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.6 444.9,212.8 700.0,227.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.6" r="4" fill="#198754"/><circle cx="444.9" cy="212.8" r="4" fill="#198754"/><circle cx="700.0" cy="227.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.3 444.9,265.2 700.0,243.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="265.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.4 444.9,172.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.6 444.9,255.4 700.0,247.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.8 444.9,152.4 700.0,154.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#20c997"/><circle cx="444.9" cy="152.4" r="4" fill="#20c997"/><circle cx="700.0" cy="154.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.48s | 105,451.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.33s | 118,588.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 403.72s | 123,847.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.05s | 99,532.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.75s | 84,212.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.57s | 74,452.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.52s | 37,710.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 207.77s | 48,130.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 789.27s | 63,350.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.17s | 98,299.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.43s | 111,821.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 265.95s | 188,006.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.52s | 46,468.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 182.23s | 54,876.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 825.43s | 60,574.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.49s | 80,089.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.45s | 125,857.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 400.63s | 124,804.7 | PASS |

:::

:::

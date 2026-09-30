## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-30T23:29:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">177k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">235k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.8 444.9,62.3 700.0,191.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="191.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,246.8 444.9,233.4 700.0,230.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="246.8" r="4" fill="#198754"/><circle cx="444.9" cy="233.4" r="4" fill="#198754"/><circle cx="700.0" cy="230.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.1 444.9,268.0 700.0,242.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="268.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.1 444.9,167.4 700.0,169.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.7 444.9,253.5 700.0,260.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="260.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.9 444.9,173.3 700.0,141.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.9" r="4" fill="#20c997"/><circle cx="444.9" cy="173.3" r="4" fill="#20c997"/><circle cx="700.0" cy="141.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.96s | 111,644.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 46.72s | 214,064.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 442.99s | 112,870.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.45s | 69,213.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.44s | 79,720.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.13s | 82,084.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.64s | 50,929.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 190.16s | 52,585.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 689.82s | 72,482.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.56s | 116,863.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.03s | 131,520.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.75s | 130,292.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.45s | 80,295.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 156.39s | 63,943.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.06s | 58,339.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.60s | 94,304.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.79s | 126,914.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 329.35s | 151,816.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,103.1 444.9,78.6 700.0,78.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="103.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="78.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.1 444.9,85.4 700.0,62.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.1" r="4" fill="#198754"/><circle cx="444.9" cy="85.4" r="4" fill="#198754"/><circle cx="700.0" cy="62.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.8 444.9,228.1 700.0,248.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,100.8 444.9,135.6 700.0,85.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="100.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="85.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.3 444.9,213.9 700.0,218.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.0 444.9,74.9 700.0,85.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.0" r="4" fill="#20c997"/><circle cx="444.9" cy="74.9" r="4" fill="#20c997"/><circle cx="700.0" cy="85.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.51s | 117,508.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.97s | 129,922.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.96s | 130,221.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.96s | 66,867.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 79.07s | 126,467.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 361.77s | 138,210.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.94s | 47,755.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.52s | 54,194.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1139.93s | 43,862.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.43s | 118,666.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 98.98s | 101,025.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 395.80s | 126,328.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.20s | 49,509.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.97s | 61,359.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.13s | 58,883.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.11s | 82,590.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 75.86s | 131,816.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 395.32s | 126,478.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-30T23:21:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,138.4 444.9,70.8 700.0,85.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="138.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="70.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,108.8 444.9,172.6 700.0,170.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="108.8" r="4" fill="#198754"/><circle cx="444.9" cy="172.6" r="4" fill="#198754"/><circle cx="700.0" cy="170.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.9 444.9,219.1 700.0,154.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="154.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.0 444.9,62.3 700.0,84.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.9 444.9,218.0 700.0,196.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,109.2 444.9,78.0 700.0,99.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="109.2" r="4" fill="#20c997"/><circle cx="444.9" cy="78.0" r="4" fill="#20c997"/><circle cx="700.0" cy="99.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.50s | 95,210.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.16s | 127,937.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.92s | 120,797.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,553.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.16s | 78,643.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 627.64s | 79,662.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,353.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.18s | 56,122.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 571.73s | 87,453.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.65s | 103,648.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.71s | 132,076.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 411.49s | 121,508.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.64s | 50,921.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.44s | 56,676.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 747.52s | 66,888.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.15s | 109,337.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.35s | 124,457.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 439.02s | 113,889.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,181.2 444.9,153.5 700.0,148.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="181.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="153.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="148.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.0 444.9,202.2 700.0,195.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#198754"/><circle cx="444.9" cy="202.2" r="4" fill="#198754"/><circle cx="700.0" cy="195.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.6 444.9,253.0 700.0,203.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="203.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,208.5 444.9,62.3 700.0,132.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.9 444.9,240.0 700.0,223.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.9 444.9,141.7 700.0,138.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#20c997"/><circle cx="444.9" cy="141.7" r="4" fill="#20c997"/><circle cx="700.0" cy="138.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,050.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.21s | 121,638.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 400.72s | 124,774.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.23s | 65,651.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 112.39s | 88,975.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 533.29s | 93,758.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,224.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.00s | 54,943.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 565.89s | 88,356.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.80s | 84,760.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.71s | 182,792.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 367.81s | 135,941.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.98s | 47,655.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 157.07s | 63,663.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 667.59s | 74,896.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.90s | 67,109.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.18s | 129,572.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.85s | 131,630.6 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:53:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.1 444.9,112.2 700.0,203.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="203.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.3 444.9,130.6 700.0,191.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.3" r="4" fill="#198754"/><circle cx="444.9" cy="130.6" r="4" fill="#198754"/><circle cx="700.0" cy="191.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.3 444.9,221.9 700.0,210.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.8 444.9,100.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.9 444.9,244.3 700.0,228.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.6 444.9,100.4 700.0,126.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.6" r="4" fill="#20c997"/><circle cx="444.9" cy="100.4" r="4" fill="#20c997"/><circle cx="700.0" cy="126.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.78s | 84,860.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 94.10s | 106,267.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 794.98s | 62,894.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.17s | 61,858.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 102.57s | 97,493.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 730.76s | 68,421.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.64s | 50,906.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.33s | 53,959.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 838.83s | 59,607.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.47s | 105,540.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.42s | 111,831.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 384.30s | 130,106.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.02s | 43,448.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 231.22s | 43,249.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 984.16s | 50,804.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.67s | 73,168.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 89.35s | 111,918.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 503.36s | 99,332.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">125k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.0 444.9,62.3 700.0,65.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.3 444.9,220.2 700.0,145.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.3" r="4" fill="#198754"/><circle cx="444.9" cy="220.2" r="4" fill="#198754"/><circle cx="700.0" cy="145.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.0 444.9,237.1 700.0,246.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.3 444.9,62.5 700.0,67.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="67.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.6 444.9,194.7 700.0,192.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="194.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="192.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,153.2 444.9,121.7 700.0,87.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="153.2" r="4" fill="#20c997"/><circle cx="444.9" cy="121.7" r="4" fill="#20c997"/><circle cx="700.0" cy="87.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.68s | 93,633.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 88.13s | 113,473.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 445.93s | 112,124.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.72s | 56,443.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 209.42s | 47,750.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.05s | 78,983.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 40.70s | 24,568.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 245.56s | 40,722.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1351.91s | 36,984.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.84s | 92,225.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.20s | 113,383.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 449.86s | 111,145.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.94s | 41,764.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.33s | 58,367.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 843.73s | 59,260.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.22s | 75,637.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 112.70s | 88,728.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 484.48s | 103,204.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:33:48Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.0 444.9,142.0 700.0,151.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.4 444.9,207.4 700.0,147.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#198754"/><circle cx="444.9" cy="207.4" r="4" fill="#198754"/><circle cx="700.0" cy="147.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.5 444.9,237.8 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.4 444.9,62.3 700.0,144.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.4 444.9,251.9 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.4 444.9,146.2 700.0,134.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#20c997"/><circle cx="444.9" cy="146.2" r="4" fill="#20c997"/><circle cx="700.0" cy="134.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.29s | 97,181.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.36s | 127,622.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 412.22s | 121,295.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.98s | 77,053.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.54s | 84,357.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 403.23s | 123,999.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.26s | 51,921.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 155.70s | 64,227.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.97s | 58,618.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,481.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.46s | 180,297.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.78s | 125,697.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.67s | 63,832.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.99s | 54,948.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.80s | 59,751.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.86s | 77,766.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.13s | 124,792.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.41s | 132,835.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.1 444.9,140.4 700.0,133.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.0 444.9,208.2 700.0,146.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.2" r="4" fill="#198754"/><circle cx="700.0" cy="146.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.8 444.9,263.7 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,227.3 444.9,121.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="227.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.5 444.9,244.7 700.0,246.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.2 444.9,212.1 700.0,141.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.2" r="4" fill="#20c997"/><circle cx="444.9" cy="212.1" r="4" fill="#20c997"/><circle cx="700.0" cy="141.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,296.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.22s | 127,852.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.91s | 132,658.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.22s | 65,681.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 120.06s | 83,289.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 403.02s | 124,064.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,728.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.40s | 46,859.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 895.62s | 55,827.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 14.13s | 70,771.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 71.43s | 140,003.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 279.02s | 179,199.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.44s | 54,232.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.58s | 59,320.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.39s | 57,911.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.03s | 76,769.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 123.88s | 80,722.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 393.45s | 127,081.6 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-30T23:28:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.5 444.9,135.3 700.0,97.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="135.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.0 444.9,220.3 700.0,211.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#198754"/><circle cx="444.9" cy="220.3" r="4" fill="#198754"/><circle cx="700.0" cy="211.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.0 444.9,240.0 700.0,245.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.4 444.9,144.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.5 444.9,248.6 700.0,232.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.0 444.9,134.5 700.0,261.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.0" r="4" fill="#20c997"/><circle cx="444.9" cy="134.5" r="4" fill="#20c997"/><circle cx="700.0" cy="261.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.34s | 96,674.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 75.92s | 131,722.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 319.51s | 156,490.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.12s | 62,038.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.12s | 75,691.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 615.53s | 81,230.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.31s | 65,299.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 159.48s | 62,703.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.84s | 59,182.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,058.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.42s | 125,914.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 277.89s | 179,929.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.82s | 53,123.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.41s | 57,008.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 742.43s | 67,346.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.53s | 73,920.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.61s | 132,261.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 1032.02s | 48,448.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.1 444.9,97.7 700.0,97.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.8 444.9,200.4 700.0,195.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.8" r="4" fill="#198754"/><circle cx="444.9" cy="200.4" r="4" fill="#198754"/><circle cx="700.0" cy="195.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.7 444.9,190.9 700.0,237.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="190.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,128.4 700.0,111.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.6 444.9,238.9 700.0,231.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.5 444.9,125.8 700.0,100.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#20c997"/><circle cx="444.9" cy="125.8" r="4" fill="#20c997"/><circle cx="700.0" cy="100.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.86s | 127,210.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.84s | 137,289.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.62s | 137,504.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,662.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.43s | 77,865.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 620.74s | 80,549.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.53s | 46,444.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 119.94s | 83,378.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 885.67s | 56,454.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.34s | 157,753.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.68s | 119,501.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.76s | 129,280.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.52s | 54,004.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.84s | 55,605.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 833.00s | 60,023.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.23s | 70,259.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.64s | 120,999.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.35s | 135,739.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:36:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.4 444.9,101.7 700.0,102.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.1 444.9,107.1 700.0,177.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#198754"/><circle cx="444.9" cy="107.1" r="4" fill="#198754"/><circle cx="700.0" cy="177.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.7 444.9,240.7 700.0,233.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.5 444.9,98.3 700.0,92.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.8 444.9,224.6 700.0,207.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.6 444.9,78.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.6" r="4" fill="#20c997"/><circle cx="444.9" cy="78.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.43s | 95,840.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.78s | 117,957.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 424.77s | 117,711.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.77s | 59,623.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 86.79s | 115,224.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 627.58s | 79,671.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.62s | 37,565.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 209.84s | 47,655.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 971.32s | 51,476.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.12s | 98,824.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.58s | 119,645.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.31s | 122,456.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.68s | 46,125.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.13s | 55,826.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 776.06s | 64,428.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.41s | 80,573.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.10s | 129,708.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.63s | 137,881.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,175.5 444.9,121.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.1 444.9,198.9 700.0,210.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.1" r="4" fill="#198754"/><circle cx="444.9" cy="198.9" r="4" fill="#198754"/><circle cx="700.0" cy="210.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.4 444.9,251.7 700.0,258.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.2 444.9,84.0 700.0,163.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="163.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,284.0 444.9,244.6 700.0,208.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="284.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.0 444.9,107.4 700.0,105.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#20c997"/><circle cx="444.9" cy="107.4" r="4" fill="#20c997"/><circle cx="700.0" cy="105.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.53s | 94,948.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.72s | 127,039.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 308.01s | 162,330.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.37s | 69,594.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.42s | 81,021.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 676.16s | 73,946.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.01s | 38,452.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 201.66s | 49,587.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1103.38s | 45,315.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.85s | 92,165.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 66.94s | 149,385.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 490.08s | 102,023.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 32.93s | 30,364.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.78s | 53,826.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 664.95s | 75,193.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.35s | 80,978.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.82s | 135,462.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.47s | 136,438.3 | PASS |

:::

:::

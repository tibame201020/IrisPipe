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
  **最新量測：** `2026-09-30T23:51:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">117k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,127.2 444.9,95.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="127.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,148.8 444.9,156.4 700.0,132.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#198754"/><circle cx="444.9" cy="156.4" r="4" fill="#198754"/><circle cx="700.0" cy="132.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,170.8 444.9,188.1 700.0,188.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="170.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="188.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="188.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.4 444.9,82.8 700.0,132.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,165.0 444.9,207.6 700.0,155.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="165.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="155.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,138.8 444.9,78.0 700.0,71.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="138.8" r="4" fill="#20c997"/><circle cx="444.9" cy="78.0" r="4" fill="#20c997"/><circle cx="700.0" cy="71.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.37s | 80,827.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 107.22s | 93,265.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 471.36s | 106,076.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.81s | 72,421.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.97s | 69,458.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 633.65s | 78,907.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.66s | 63,857.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.02s | 57,137.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.31s | 57,122.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.02s | 99,790.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 101.94s | 98,096.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 636.06s | 78,608.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.12s | 66,128.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 201.85s | 49,541.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 714.00s | 70,027.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.11s | 76,295.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.03s | 99,969.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 487.02s | 102,665.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">123k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,122.6 444.9,159.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.5 444.9,171.0 700.0,120.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.5" r="4" fill="#198754"/><circle cx="444.9" cy="171.0" r="4" fill="#198754"/><circle cx="700.0" cy="120.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.4 444.9,208.2 700.0,159.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="159.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.1 444.9,96.2 700.0,76.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="76.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.0 444.9,199.3 700.0,199.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.1 444.9,106.0 700.0,136.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.1" r="4" fill="#20c997"/><circle cx="444.9" cy="106.0" r="4" fill="#20c997"/><circle cx="700.0" cy="136.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.45s | 87,313.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 138.87s | 72,008.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 445.92s | 112,128.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.61s | 68,455.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 148.29s | 67,435.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 566.81s | 88,212.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.86s | 47,929.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.77s | 52,145.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 691.18s | 72,340.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.11s | 89,992.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 101.85s | 98,180.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 470.56s | 106,257.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.72s | 46,034.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.20s | 55,804.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 896.15s | 55,794.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.67s | 73,147.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 106.20s | 94,163.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 611.05s | 81,826.1 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-30T23:36:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.2 444.9,107.1 700.0,147.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="107.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.8 444.9,207.2 700.0,155.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.8" r="4" fill="#198754"/><circle cx="444.9" cy="207.2" r="4" fill="#198754"/><circle cx="700.0" cy="155.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.1 444.9,240.5 700.0,238.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.7 444.9,87.4 700.0,139.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.8 444.9,246.3 700.0,225.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.9 444.9,62.3 700.0,125.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.9" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="125.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.79s | 92,695.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.86s | 139,157.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 436.21s | 114,623.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.23s | 97,789.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.13s | 78,047.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 455.65s | 109,733.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.22s | 54,878.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.30s | 57,703.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 845.63s | 59,127.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.94s | 111,906.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 66.16s | 151,139.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 419.46s | 119,200.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.72s | 63,605.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 184.72s | 54,136.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 751.04s | 66,574.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.44s | 87,389.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.06s | 166,497.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 391.54s | 127,701.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.6 444.9,156.1 700.0,126.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="156.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.9 444.9,220.9 700.0,224.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.9" r="4" fill="#198754"/><circle cx="444.9" cy="220.9" r="4" fill="#198754"/><circle cx="700.0" cy="224.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.2 444.9,252.6 700.0,254.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.1 444.9,160.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.8 444.9,255.4 700.0,250.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,230.1 444.9,150.2 700.0,170.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="230.1" r="4" fill="#20c997"/><circle cx="444.9" cy="150.2" r="4" fill="#20c997"/><circle cx="700.0" cy="170.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.66s | 150,217.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.53s | 124,180.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 344.67s | 145,066.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,994.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.24s | 79,212.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 651.15s | 76,786.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.78s | 50,556.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.85s | 57,192.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 895.91s | 55,809.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.75s | 129,065.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.68s | 120,943.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 264.12s | 189,310.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.96s | 50,105.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.02s | 55,242.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.53s | 58,648.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.73s | 72,833.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.95s | 128,287.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 437.53s | 114,278.9 | PASS |

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
  **最新量測：** `2026-09-30T23:39:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,130.3 444.9,124.6 700.0,113.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.3 444.9,178.4 700.0,193.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.3" r="4" fill="#198754"/><circle cx="444.9" cy="178.4" r="4" fill="#198754"/><circle cx="700.0" cy="193.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.8 444.9,239.6 700.0,247.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.2 444.9,90.1 700.0,98.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.7 444.9,205.6 700.0,226.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.2 444.9,62.3 700.0,69.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="69.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,672.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 89.55s | 111,665.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 425.36s | 117,548.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.48s | 64,607.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.30s | 83,128.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 664.81s | 75,209.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.64s | 44,169.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 197.42s | 50,654.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1079.43s | 46,320.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.72s | 93,318.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.92s | 130,001.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.37s | 125,827.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.56s | 51,127.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 145.62s | 68,674.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 866.57s | 57,698.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.58s | 79,503.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.07s | 144,778.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.09s | 141,206.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.0 444.9,67.5 700.0,66.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,179.2 444.9,190.3 700.0,180.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#198754"/><circle cx="444.9" cy="190.3" r="4" fill="#198754"/><circle cx="700.0" cy="180.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.4 444.9,244.3 700.0,254.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,104.6 444.9,79.9 700.0,80.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="104.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="79.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.1 444.9,205.0 700.0,214.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.4 444.9,75.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#20c997"/><circle cx="444.9" cy="75.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.12s | 89,936.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.91s | 130,027.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.24s | 130,468.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.20s | 75,740.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 142.16s | 70,344.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 667.54s | 74,902.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.91s | 40,149.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 226.66s | 44,118.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1275.24s | 39,208.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.93s | 112,007.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.64s | 124,004.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 403.65s | 123,870.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 30.77s | 32,503.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.28s | 63,177.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.60s | 58,644.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.42s | 80,495.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.31s | 126,093.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.11s | 132,588.7 | PASS |

:::

:::

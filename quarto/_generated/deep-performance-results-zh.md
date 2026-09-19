## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-19T22:03:02Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,122.6 444.9,96.6 700.0,108.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,179.4 700.0,156.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="179.4" r="4" fill="#198754"/><circle cx="700.0" cy="156.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,164.2 444.9,224.2 700.0,218.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="164.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.6 444.9,82.3 700.0,103.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.1 444.9,195.6 700.0,221.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.9 444.9,86.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.9" r="4" fill="#20c997"/><circle cx="444.9" cy="86.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,526.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.86s | 120,689.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 436.38s | 114,580.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.34s | 69,730.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.97s | 78,761.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 552.58s | 90,484.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.56s | 86,490.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.19s | 56,121.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 849.32s | 58,871.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.34s | 107,043.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.16s | 127,950.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 426.02s | 117,365.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.39s | 49,053.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 141.73s | 70,557.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 873.15s | 57,263.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.11s | 82,555.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.42s | 125,920.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.11s | 138,078.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.6 444.9,68.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="68.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.7 444.9,180.1 700.0,181.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.7" r="4" fill="#198754"/><circle cx="444.9" cy="180.1" r="4" fill="#198754"/><circle cx="700.0" cy="181.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.8 444.9,221.5 700.0,220.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.4 444.9,101.3 700.0,69.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="69.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.4 444.9,205.7 700.0,217.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.9 444.9,97.3 700.0,74.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.9" r="4" fill="#20c997"/><circle cx="444.9" cy="97.3" r="4" fill="#20c997"/><circle cx="700.0" cy="74.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.02s | 110,889.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.06s | 131,483.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.96s | 134,783.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.06s | 66,392.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.64s | 76,548.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 659.86s | 75,773.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.29s | 61,372.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.33s | 56,075.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 886.87s | 56,378.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,082.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.57s | 115,518.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 380.58s | 131,378.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.98s | 62,582.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.54s | 63,880.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 861.32s | 58,050.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 21.74s | 46,006.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.12s | 117,479.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.67s | 128,645.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-19T21:53:06Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.3 444.9,62.3 700.0,114.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.1 444.9,198.3 700.0,190.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.1" r="4" fill="#198754"/><circle cx="444.9" cy="198.3" r="4" fill="#198754"/><circle cx="700.0" cy="190.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.9 444.9,239.0 700.0,166.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="166.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.2 444.9,133.3 700.0,116.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="116.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.3 444.9,225.4 700.0,230.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.8 444.9,108.1 700.0,102.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#20c997"/><circle cx="444.9" cy="108.1" r="4" fill="#20c997"/><circle cx="700.0" cy="102.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.10s | 90,122.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.58s | 154,844.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 398.44s | 125,490.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.56s | 68,667.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.80s | 77,639.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.76s | 81,999.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.12s | 52,293.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.53s | 54,487.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 522.51s | 95,691.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.73s | 114,573.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.34s | 114,491.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.42s | 123,940.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.07s | 49,818.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 160.71s | 62,223.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 842.99s | 59,312.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,287.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.61s | 128,852.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.63s | 132,054.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,147.3 444.9,118.9 700.0,86.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="147.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.4 444.9,198.9 700.0,196.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#198754"/><circle cx="444.9" cy="198.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.9 444.9,234.1 700.0,239.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,128.7 700.0,118.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.0 444.9,233.6 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.5 444.9,149.0 700.0,95.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.5" r="4" fill="#20c997"/><circle cx="444.9" cy="149.0" r="4" fill="#20c997"/><circle cx="700.0" cy="95.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.37s | 106,735.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.37s | 122,896.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.28s | 141,530.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.95s | 66,894.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.22s | 77,387.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.73s | 78,526.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.43s | 48,954.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.24s | 57,390.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 920.68s | 54,307.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.45s | 155,086.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.26s | 117,292.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 406.44s | 123,018.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.44s | 48,914.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.39s | 57,673.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 912.32s | 54,805.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,904.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 94.56s | 105,748.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 367.03s | 136,228.6 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-18T22:32:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">118k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,79.6 444.9,89.6 700.0,84.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="79.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.5 444.9,157.4 700.0,76.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.5" r="4" fill="#198754"/><circle cx="444.9" cy="157.4" r="4" fill="#198754"/><circle cx="700.0" cy="76.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,211.2 444.9,196.0 700.0,233.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="211.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="196.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.2 444.9,82.0 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,195.1 444.9,202.3 700.0,208.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="195.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,165.4 444.9,72.2 700.0,101.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="165.4" r="4" fill="#20c997"/><circle cx="444.9" cy="72.2" r="4" fill="#20c997"/><circle cx="700.0" cy="101.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,230.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.84s | 96,304.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 508.81s | 98,267.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.59s | 64,156.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.46s | 69,707.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 492.60s | 101,501.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.59s | 48,572.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.26s | 54,566.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1253.79s | 39,879.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,470.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 100.69s | 99,309.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 467.11s | 107,041.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.21s | 54,911.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 191.97s | 52,092.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1003.88s | 49,806.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.03s | 66,555.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.96s | 103,138.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 546.10s | 91,558.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">130k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,120.8 444.9,90.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="120.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.3 444.9,179.6 700.0,174.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.3" r="4" fill="#198754"/><circle cx="444.9" cy="179.6" r="4" fill="#198754"/><circle cx="700.0" cy="174.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,194.2 444.9,207.5 700.0,214.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,102.9 444.9,90.0 700.0,108.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="102.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.1 444.9,202.9 700.0,183.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.1 444.9,104.2 700.0,114.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.1" r="4" fill="#20c997"/><circle cx="444.9" cy="104.2" r="4" fill="#20c997"/><circle cx="700.0" cy="114.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.74s | 93,144.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.19s | 106,167.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 421.56s | 118,607.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.58s | 60,306.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 147.95s | 67,589.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 714.11s | 70,017.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.33s | 61,240.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.39s | 55,436.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 956.01s | 52,300.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.90s | 100,959.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.86s | 106,546.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 507.16s | 98,588.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.50s | 46,505.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.07s | 57,449.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 757.65s | 65,993.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.56s | 53,870.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.62s | 100,382.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 522.33s | 95,725.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-18T22:11:48Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.5 444.9,120.2 700.0,120.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="120.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.5 444.9,196.4 700.0,180.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.5" r="4" fill="#198754"/><circle cx="444.9" cy="196.4" r="4" fill="#198754"/><circle cx="700.0" cy="180.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.0 444.9,235.8 700.0,165.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="165.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.8 444.9,89.4 700.0,119.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.6 444.9,227.5 700.0,227.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.2 444.9,111.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.2" r="4" fill="#20c997"/><circle cx="444.9" cy="111.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.00s | 124,937.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.68s | 123,949.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.38s | 123,646.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.60s | 73,556.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.08s | 79,952.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 560.65s | 89,182.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.64s | 48,437.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.79s | 57,210.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 510.96s | 97,854.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.46s | 105,730.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.56s | 141,727.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.55s | 124,208.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.17s | 55,032.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.19s | 62,037.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 809.13s | 61,794.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,792.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.39s | 129,224.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 317.75s | 157,357.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,144.7 444.9,74.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,181.8 444.9,183.5 700.0,161.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="181.8" r="4" fill="#198754"/><circle cx="444.9" cy="183.5" r="4" fill="#198754"/><circle cx="700.0" cy="161.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.2 444.9,237.2 700.0,217.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,108.5 444.9,98.9 700.0,90.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="108.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="90.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.5 444.9,232.6 700.0,189.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.7 444.9,111.4 700.0,87.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#20c997"/><circle cx="444.9" cy="111.4" r="4" fill="#20c997"/><circle cx="700.0" cy="87.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.13s | 98,755.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.10s | 134,952.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.29s | 141,528.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.57s | 79,522.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.19s | 78,620.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 554.68s | 90,141.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.34s | 49,173.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 197.04s | 50,749.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 816.62s | 61,227.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.51s | 117,522.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.64s | 122,496.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 394.13s | 126,861.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.80s | 53,202.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 188.27s | 53,115.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 660.46s | 75,705.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.29s | 54,668.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.17s | 116,044.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.20s | 128,468.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-19T22:01:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.7 444.9,113.7 700.0,117.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.3 444.9,96.6 700.0,138.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.3" r="4" fill="#198754"/><circle cx="444.9" cy="96.6" r="4" fill="#198754"/><circle cx="700.0" cy="138.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.1 444.9,233.3 700.0,227.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.0 444.9,107.0 700.0,99.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,200.6 700.0,225.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="200.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,136.8 444.9,104.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="136.8" r="4" fill="#20c997"/><circle cx="444.9" cy="104.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.83s | 92,319.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.35s | 119,980.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 423.20s | 118,146.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.33s | 69,783.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.36s | 129,272.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 470.02s | 106,378.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.73s | 46,023.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.31s | 55,152.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 857.66s | 58,298.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.81s | 101,936.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.89s | 123,632.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 391.81s | 127,612.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.42s | 54,297.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 137.19s | 72,891.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 842.60s | 59,340.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,480.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.83s | 125,259.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 338.13s | 147,870.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,119.8 444.9,84.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="119.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,188.0 444.9,172.3 700.0,222.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#198754"/><circle cx="444.9" cy="172.3" r="4" fill="#198754"/><circle cx="700.0" cy="222.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.6 444.9,230.1 700.0,230.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,89.6 444.9,106.2 700.0,132.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="89.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.4 444.9,224.3 700.0,230.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.8 444.9,99.5 700.0,102.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.8" r="4" fill="#20c997"/><circle cx="444.9" cy="99.5" r="4" fill="#20c997"/><circle cx="700.0" cy="102.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.70s | 114,969.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.74s | 133,791.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 343.21s | 145,684.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.74s | 78,511.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.08s | 86,895.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 832.52s | 60,058.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 30.97s | 32,288.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.46s | 56,034.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 899.22s | 55,604.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.63s | 131,096.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.82s | 122,222.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 461.72s | 108,290.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.19s | 52,121.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.12s | 59,130.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 893.22s | 55,977.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.27s | 70,062.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.48s | 125,814.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 402.30s | 124,285.1 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-18T22:14:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,175.1 444.9,62.3 700.0,112.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="112.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.8 444.9,184.4 700.0,185.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.8" r="4" fill="#198754"/><circle cx="444.9" cy="184.4" r="4" fill="#198754"/><circle cx="700.0" cy="185.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.1 444.9,232.1 700.0,225.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.8 444.9,93.9 700.0,91.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.2 444.9,228.6 700.0,211.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.9 444.9,72.9 700.0,63.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.9" r="4" fill="#20c997"/><circle cx="444.9" cy="72.9" r="4" fill="#20c997"/><circle cx="700.0" cy="63.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,947.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.55s | 139,772.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 437.52s | 114,280.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.37s | 61,079.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.56s | 77,186.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 653.36s | 76,528.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.72s | 40,456.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.55s | 52,755.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 891.68s | 56,073.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,010.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.92s | 123,577.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 399.92s | 125,025.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.36s | 51,642.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.47s | 54,505.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 791.49s | 63,171.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.72s | 63,617.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.44s | 134,343.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.66s | 139,409.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.7 444.9,139.3 700.0,77.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="77.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.9 444.9,216.3 700.0,208.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.9" r="4" fill="#198754"/><circle cx="444.9" cy="216.3" r="4" fill="#198754"/><circle cx="700.0" cy="208.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.3 444.9,255.4 700.0,261.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.2 444.9,151.2 700.0,141.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.6 444.9,236.6 700.0,224.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.6 444.9,175.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#20c997"/><circle cx="444.9" cy="175.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.47s | 95,501.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.70s | 118,058.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 321.89s | 155,333.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.91s | 67,055.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.58s | 71,644.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 654.71s | 76,370.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.74s | 36,049.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 208.27s | 48,014.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1129.76s | 44,257.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.50s | 95,229.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.17s | 110,901.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.24s | 117,029.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.15s | 47,288.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.39s | 59,384.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 746.32s | 66,995.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.61s | 68,441.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.04s | 96,114.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 303.85s | 164,553.8 | PASS |

:::

:::

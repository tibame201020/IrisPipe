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
  **最新量測：** `2026-09-19T22:04:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">164k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.5 444.9,62.3 700.0,157.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="157.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.4 444.9,207.3 700.0,191.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.4" r="4" fill="#198754"/><circle cx="444.9" cy="207.3" r="4" fill="#198754"/><circle cx="700.0" cy="191.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.7 444.9,256.3 700.0,248.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.4 444.9,162.0 700.0,158.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.6 444.9,257.3 700.0,253.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,246.9 444.9,219.6 700.0,119.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#20c997"/><circle cx="444.9" cy="219.6" r="4" fill="#20c997"/><circle cx="700.0" cy="119.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.16s | 98,444.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 50.45s | 198,212.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 386.95s | 129,215.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.69s | 68,059.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.71s | 92,843.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 480.45s | 104,068.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.52s | 53,989.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.88s | 57,181.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 797.46s | 62,699.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.58s | 104,362.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.53s | 125,737.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 390.30s | 128,108.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.81s | 50,471.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.05s | 56,479.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.68s | 59,194.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.62s | 64,012.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 119.22s | 83,881.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 319.39s | 156,546.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,180.8 444.9,63.5 700.0,103.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="63.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.7 444.9,213.8 700.0,118.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.7" r="4" fill="#198754"/><circle cx="444.9" cy="213.8" r="4" fill="#198754"/><circle cx="700.0" cy="118.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.1 444.9,251.8 700.0,243.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,170.6 444.9,199.8 700.0,137.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="199.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.0 444.9,248.6 700.0,210.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="210.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.5 444.9,134.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.5" r="4" fill="#20c997"/><circle cx="444.9" cy="134.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.16s | 98,454.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.68s | 173,379.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 337.89s | 147,976.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,549.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.15s | 77,427.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 362.31s | 138,004.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.63s | 48,468.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.18s | 53,141.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 859.39s | 58,180.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.52s | 104,997.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 115.83s | 86,329.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 396.73s | 126,029.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.33s | 49,178.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.19s | 55,191.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 626.60s | 79,795.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.84s | 92,267.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.91s | 128,361.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 287.08s | 174,169.9 | PASS |

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
  **最新量測：** `2026-09-19T22:12:48Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.9 444.9,86.5 700.0,89.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.8 444.9,193.3 700.0,140.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#198754"/><circle cx="444.9" cy="193.3" r="4" fill="#198754"/><circle cx="700.0" cy="140.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.6 444.9,234.6 700.0,237.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.1 444.9,99.3 700.0,84.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.3 444.9,194.9 700.0,195.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="194.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="195.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.3 444.9,86.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.3" r="4" fill="#20c997"/><circle cx="444.9" cy="86.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,779.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.27s | 126,157.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 401.35s | 124,580.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.99s | 62,550.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 139.04s | 71,922.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 506.61s | 98,695.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.68s | 53,527.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 196.15s | 50,980.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1011.89s | 49,412.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,410.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.55s | 119,694.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.52s | 127,057.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.47s | 46,576.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 140.58s | 71,133.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 703.40s | 71,083.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.62s | 68,376.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.10s | 126,417.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.08s | 138,474.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.0 444.9,85.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.6 444.9,186.3 700.0,182.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.6" r="4" fill="#198754"/><circle cx="444.9" cy="186.3" r="4" fill="#198754"/><circle cx="700.0" cy="182.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.9 444.9,233.9 700.0,233.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,137.1 444.9,99.5 700.0,84.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="137.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.7 444.9,219.6 700.0,219.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.0 444.9,72.3 700.0,179.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.0" r="4" fill="#20c997"/><circle cx="444.9" cy="72.3" r="4" fill="#20c997"/><circle cx="700.0" cy="179.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.40s | 80,638.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.05s | 120,410.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 379.74s | 131,668.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.52s | 60,551.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.30s | 71,787.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 676.92s | 73,863.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.07s | 41,548.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.93s | 48,797.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1016.10s | 49,208.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.47s | 95,529.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.94s | 113,719.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.75s | 121,137.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.28s | 46,996.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.45s | 55,725.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 893.88s | 55,936.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.03s | 76,740.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.85s | 126,829.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 666.39s | 75,030.6 | PASS |

:::

:::

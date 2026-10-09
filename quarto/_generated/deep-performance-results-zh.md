## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T23:53:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.0 444.9,77.1 700.0,137.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="77.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.8 444.9,133.1 700.0,193.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.8" r="4" fill="#198754"/><circle cx="444.9" cy="133.1" r="4" fill="#198754"/><circle cx="700.0" cy="193.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.1 444.9,208.4 700.0,236.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,99.2 444.9,62.3 700.0,149.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.4 444.9,245.9 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.4 444.9,169.9 700.0,128.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.4" r="4" fill="#20c997"/><circle cx="444.9" cy="169.9" r="4" fill="#20c997"/><circle cx="700.0" cy="128.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.22s | 108,424.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.22s | 160,712.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 406.36s | 123,043.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.35s | 74,917.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.47s | 125,832.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 568.51s | 87,949.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.12s | 52,309.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 126.76s | 78,891.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 816.15s | 61,262.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.80s | 146,994.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 58.83s | 169,978.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 431.24s | 115,943.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.91s | 50,213.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.12s | 55,518.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 867.64s | 57,627.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.19s | 108,813.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 97.16s | 102,928.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 388.88s | 128,574.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,130.8 444.9,81.9 700.0,76.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="81.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.5 444.9,119.0 700.0,79.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#198754"/><circle cx="444.9" cy="119.0" r="4" fill="#198754"/><circle cx="700.0" cy="79.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,170.3 444.9,223.7 700.0,221.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="170.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,117.1 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.5 444.9,221.8 700.0,198.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.6 444.9,102.9 700.0,86.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#20c997"/><circle cx="444.9" cy="102.9" r="4" fill="#20c997"/><circle cx="700.0" cy="86.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.51s | 105,196.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.68s | 130,413.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 375.10s | 133,298.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.91s | 71,885.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 89.84s | 111,302.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 379.32s | 131,814.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 11.78s | 84,868.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.38s | 57,346.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 851.68s | 58,707.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.12s | 140,508.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.07s | 112,272.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 431.06s | 115,994.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,200.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.50s | 58,310.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 711.56s | 70,268.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.82s | 77,984.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.64s | 119,564.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.58s | 128,016.1 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T23:43:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.5 444.9,149.8 700.0,156.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.3 444.9,221.1 700.0,215.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.3" r="4" fill="#198754"/><circle cx="444.9" cy="221.1" r="4" fill="#198754"/><circle cx="700.0" cy="215.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.3 444.9,244.5 700.0,233.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.9 444.9,108.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.2 444.9,250.7 700.0,184.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="184.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.6 444.9,151.5 700.0,138.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#20c997"/><circle cx="444.9" cy="151.5" r="4" fill="#20c997"/><circle cx="700.0" cy="138.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.85s | 92,131.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.40s | 125,941.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 412.90s | 121,094.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.04s | 110,643.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.07s | 77,477.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.58s | 81,622.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.60s | 68,474.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 162.48s | 61,545.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 725.61s | 68,907.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.93s | 100,684.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 64.88s | 154,128.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 269.59s | 185,467.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.28s | 81,446.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.33s | 57,361.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 489.27s | 102,192.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.21s | 81,873.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.14s | 124,781.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.78s | 133,411.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,63.5 700.0,62.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="63.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.0 444.9,158.9 700.0,175.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#198754"/><circle cx="444.9" cy="158.9" r="4" fill="#198754"/><circle cx="700.0" cy="175.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.7 444.9,132.5 700.0,218.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="132.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,137.8 444.9,96.6 700.0,80.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="137.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.4 444.9,198.1 700.0,203.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,152.7 444.9,78.9 700.0,70.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="152.7" r="4" fill="#20c997"/><circle cx="444.9" cy="78.9" r="4" fill="#20c997"/><circle cx="700.0" cy="70.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.45s | 134,192.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.86s | 133,582.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.04s | 134,034.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 20.54s | 48,690.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.40s | 86,652.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.73s | 78,649.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.48s | 51,334.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 100.36s | 99,646.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 868.58s | 57,565.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.30s | 97,049.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.26s | 117,292.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.35s | 125,205.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.62s | 50,963.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 148.51s | 67,335.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 772.04s | 64,763.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.15s | 89,694.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.35s | 126,022.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.28s | 130,113.8 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T00:51:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,172.5 444.9,152.1 700.0,163.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="163.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,161.5 444.9,213.2 700.0,149.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="161.5" r="4" fill="#198754"/><circle cx="444.9" cy="213.2" r="4" fill="#198754"/><circle cx="700.0" cy="149.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.6 444.9,229.7 700.0,190.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="190.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,78.7 700.0,113.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="78.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="113.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.3 444.9,240.1 700.0,240.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.8 444.9,162.2 700.0,83.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.8" r="4" fill="#20c997"/><circle cx="444.9" cy="162.2" r="4" fill="#20c997"/><circle cx="700.0" cy="83.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.60s | 86,244.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.00s | 97,092.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 549.83s | 90,936.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.86s | 92,081.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 154.74s | 64,623.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 509.11s | 98,211.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.39s | 49,053.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.00s | 55,867.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 652.72s | 76,602.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.91s | 144,738.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.52s | 136,026.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 424.76s | 117,712.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.88s | 67,217.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 198.59s | 50,355.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 998.32s | 50,084.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.94s | 91,399.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 109.02s | 91,723.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.84s | 133,389.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,128.6 444.9,151.1 700.0,127.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.6 444.9,190.4 700.0,186.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.6" r="4" fill="#198754"/><circle cx="444.9" cy="190.4" r="4" fill="#198754"/><circle cx="700.0" cy="186.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.5 444.9,223.0 700.0,218.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.8 444.9,104.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.1 444.9,206.9 700.0,152.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="206.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="152.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.0 444.9,130.8 700.0,107.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#20c997"/><circle cx="444.9" cy="130.8" r="4" fill="#20c997"/><circle cx="700.0" cy="107.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.12s | 98,804.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 113.59s | 88,034.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 503.66s | 99,272.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.93s | 59,080.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 144.45s | 69,227.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 703.33s | 71,090.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.11s | 45,230.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.47s | 53,629.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 892.91s | 55,996.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.44s | 95,822.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.77s | 110,164.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 383.00s | 130,546.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.13s | 47,321.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.04s | 61,333.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 572.73s | 87,301.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.03s | 66,524.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.31s | 97,744.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 459.12s | 108,903.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T23:52:02Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,82.2 444.9,147.8 700.0,140.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="82.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.1 444.9,132.6 700.0,121.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.1" r="4" fill="#198754"/><circle cx="444.9" cy="132.6" r="4" fill="#198754"/><circle cx="700.0" cy="121.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.9 444.9,235.6 700.0,241.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,72.1 444.9,62.3 700.0,68.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="72.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="68.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,199.4 444.9,226.2 700.0,241.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="199.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.4 444.9,76.3 700.0,121.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#20c997"/><circle cx="444.9" cy="76.3" r="4" fill="#20c997"/><circle cx="700.0" cy="121.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.22s | 160,771.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.02s | 119,026.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.81s | 123,514.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.31s | 69,876.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.67s | 128,744.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 368.51s | 135,679.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.20s | 61,739.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 158.20s | 63,212.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 836.30s | 59,787.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.98s | 167,168.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.66s | 173,445.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 294.99s | 169,497.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.59s | 86,266.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.48s | 69,214.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.01s | 59,808.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.15s | 76,057.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.79s | 164,498.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.84s | 135,927.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.4 444.9,62.3 700.0,141.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.9 444.9,222.9 700.0,196.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.9" r="4" fill="#198754"/><circle cx="444.9" cy="222.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.5 444.9,216.4 700.0,249.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.1 444.9,158.3 700.0,161.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="161.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.2 444.9,252.8 700.0,246.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.8 444.9,96.5 700.0,83.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.8" r="4" fill="#20c997"/><circle cx="444.9" cy="96.5" r="4" fill="#20c997"/><circle cx="700.0" cy="83.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.95s | 125,833.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 53.21s | 187,938.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.14s | 133,638.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 8.95s | 111,706.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.50s | 77,219.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 524.94s | 95,249.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.01s | 49,980.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 122.38s | 81,716.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 849.58s | 58,852.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.19s | 108,802.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.11s | 121,795.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.18s | 119,852.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.94s | 50,155.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.60s | 56,625.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 816.83s | 61,212.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.38s | 80,749.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 60.83s | 164,381.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 288.16s | 173,513.5 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T23:46:05Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">222k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,203.8 444.9,143.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="203.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.4 444.9,226.9 700.0,225.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.4" r="4" fill="#198754"/><circle cx="444.9" cy="226.9" r="4" fill="#198754"/><circle cx="700.0" cy="225.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.7 444.9,259.8 700.0,258.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.8 444.9,170.0 700.0,166.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="170.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="166.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.5 444.9,245.6 700.0,251.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.6 444.9,134.5 700.0,194.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#20c997"/><circle cx="444.9" cy="134.5" r="4" fill="#20c997"/><circle cx="700.0" cy="194.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.29s | 97,210.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.49s | 141,862.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 247.47s | 202,043.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.42s | 69,333.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.83s | 80,107.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 618.90s | 80,788.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.82s | 78,003.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.51s | 55,707.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 880.70s | 56,772.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.76s | 102,417.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.80s | 122,255.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.55s | 124,827.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.41s | 51,506.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.97s | 66,240.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 807.15s | 61,946.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.21s | 89,229.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.32s | 148,544.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 478.52s | 104,489.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">216k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,140.1 444.9,146.2 700.0,138.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="140.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="138.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.6 444.9,215.1 700.0,146.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.6" r="4" fill="#198754"/><circle cx="444.9" cy="215.1" r="4" fill="#198754"/><circle cx="700.0" cy="146.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.3 444.9,252.9 700.0,249.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.7 444.9,173.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="173.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.4 444.9,237.2 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.4 444.9,114.5 700.0,105.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.4" r="4" fill="#20c997"/><circle cx="444.9" cy="114.5" r="4" fill="#20c997"/><circle cx="700.0" cy="105.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.12s | 140,508.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.47s | 136,106.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 352.84s | 141,706.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.85s | 67,321.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.71s | 86,420.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 368.54s | 135,670.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.13s | 47,326.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.08s | 59,145.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 814.98s | 61,351.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,651.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.76s | 116,603.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 254.35s | 196,578.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.64s | 50,921.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 141.81s | 70,516.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 749.72s | 66,691.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.10s | 82,617.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 62.92s | 158,937.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 302.22s | 165,442.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-09T00:40:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,193.1 444.9,150.3 700.0,140.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.1 444.9,184.6 700.0,124.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.1" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="124.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.3 444.9,254.2 700.0,264.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.4 444.9,120.6 700.0,144.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.1 444.9,245.2 700.0,225.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.5 444.9,62.3 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.54s | 86,662.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.64s | 112,812.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.76s | 118,550.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.44s | 57,339.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.87s | 91,850.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 389.35s | 128,420.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.63s | 46,236.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 202.72s | 49,327.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1152.57s | 43,381.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,609.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.35s | 130,979.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 428.92s | 116,572.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.16s | 45,136.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.31s | 54,852.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 745.42s | 67,076.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.95s | 100,462.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.03s | 166,575.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.54s | 130,704.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.1 444.9,131.1 700.0,136.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.5 444.9,216.3 700.0,222.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.5" r="4" fill="#198754"/><circle cx="444.9" cy="216.3" r="4" fill="#198754"/><circle cx="700.0" cy="222.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.1 444.9,258.7 700.0,258.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,200.5 444.9,164.0 700.0,147.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="164.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.2 444.9,183.4 700.0,247.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.7 444.9,137.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#20c997"/><circle cx="444.9" cy="137.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.25s | 97,599.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.33s | 131,004.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.11s | 127,842.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.01s | 58,788.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.09s | 76,282.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 689.27s | 72,540.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.27s | 42,977.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.09s | 48,998.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1017.47s | 49,141.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.57s | 86,423.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.98s | 109,910.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 415.87s | 120,229.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.26s | 51,931.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 102.67s | 97,402.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 893.25s | 55,975.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,591.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.78s | 126,935.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 285.31s | 175,246.1 | PASS |

:::

:::

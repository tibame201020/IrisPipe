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
  **最新量測：** `2026-10-10T00:14:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.1 444.9,115.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.8 444.9,115.8 700.0,173.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#198754"/><circle cx="444.9" cy="115.8" r="4" fill="#198754"/><circle cx="700.0" cy="173.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.4 444.9,189.3 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="189.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.8 444.9,89.0 700.0,64.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="64.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.9 444.9,229.1 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.2 444.9,136.4 700.0,114.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#20c997"/><circle cx="444.9" cy="136.4" r="4" fill="#20c997"/><circle cx="700.0" cy="114.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.56s | 79,624.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.64s | 104,562.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.18s | 130,146.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.22s | 61,648.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 95.59s | 104,614.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 650.44s | 76,871.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.65s | 50,890.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 143.87s | 69,507.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 999.50s | 50,024.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.85s | 92,182.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.20s | 117,370.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.78s | 128,938.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.80s | 45,871.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.90s | 50,531.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 964.71s | 51,829.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.99s | 71,479.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 105.50s | 94,784.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 474.07s | 105,469.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.7 444.9,130.7 700.0,68.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="68.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.8 444.9,210.3 700.0,201.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#198754"/><circle cx="444.9" cy="210.3" r="4" fill="#198754"/><circle cx="700.0" cy="201.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.6 444.9,234.6 700.0,230.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,103.8 444.9,62.3 700.0,144.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="103.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.7 444.9,183.4 700.0,235.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.0 444.9,118.4 700.0,180.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.0" r="4" fill="#20c997"/><circle cx="444.9" cy="118.4" r="4" fill="#20c997"/><circle cx="700.0" cy="180.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.40s | 87,688.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 95.06s | 105,196.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 364.89s | 137,028.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.77s | 63,411.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 155.78s | 64,195.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.17s | 68,949.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.74s | 72,774.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.56s | 51,663.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 924.57s | 54,079.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.40s | 119,005.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 71.22s | 140,402.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 508.63s | 98,302.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.74s | 45,993.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 128.16s | 78,027.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 972.17s | 51,431.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 19.05s | 52,499.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 89.69s | 111,495.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 627.74s | 79,651.2 | PASS |

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
  **最新量測：** `2026-10-09T23:56:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,125.6 444.9,98.3 700.0,92.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="125.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="98.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.0 444.9,186.4 700.0,179.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.0" r="4" fill="#198754"/><circle cx="444.9" cy="186.4" r="4" fill="#198754"/><circle cx="700.0" cy="179.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.6 444.9,244.4 700.0,169.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="169.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.4 444.9,85.6 700.0,91.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.1 444.9,152.9 700.0,219.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="152.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.2 444.9,69.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.2" r="4" fill="#20c997"/><circle cx="444.9" cy="69.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.59s | 104,275.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.83s | 117,888.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.85s | 120,817.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.73s | 59,769.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 135.14s | 73,997.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 644.57s | 77,570.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.66s | 40,546.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 221.53s | 45,139.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 607.68s | 82,280.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.48s | 95,401.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.53s | 124,182.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.52s | 121,207.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.94s | 47,757.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 110.28s | 90,675.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 870.11s | 57,463.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.06s | 76,593.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.50s | 132,443.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.14s | 135,817.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,153.8 444.9,151.0 700.0,136.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.7 444.9,223.9 700.0,150.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.7" r="4" fill="#198754"/><circle cx="444.9" cy="223.9" r="4" fill="#198754"/><circle cx="700.0" cy="150.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.3 444.9,269.9 700.0,259.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,193.9 444.9,62.3 700.0,147.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.8 444.9,250.7 700.0,249.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.1 444.9,197.3 700.0,111.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#20c997"/><circle cx="444.9" cy="197.3" r="4" fill="#20c997"/><circle cx="700.0" cy="111.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.34s | 119,889.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.12s | 121,771.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 380.35s | 131,456.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.06s | 66,401.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.06s | 73,496.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 409.01s | 122,245.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.20s | 38,173.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 232.16s | 43,073.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1004.13s | 49,794.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.71s | 93,362.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 55.40s | 180,492.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 402.10s | 124,346.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.82s | 45,829.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.27s | 55,782.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 884.92s | 56,502.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.39s | 80,677.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 109.72s | 91,141.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 337.60s | 148,103.8 | PASS |

:::

:::

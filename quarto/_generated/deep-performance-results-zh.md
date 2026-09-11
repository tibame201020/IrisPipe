## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-11T22:17:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">172k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.9 444.9,124.6 700.0,128.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.8 444.9,170.5 700.0,198.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.8" r="4" fill="#198754"/><circle cx="444.9" cy="170.5" r="4" fill="#198754"/><circle cx="700.0" cy="198.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.2 444.9,236.8 700.0,215.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,115.3 700.0,130.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.3 444.9,229.4 700.0,233.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.8 444.9,159.0 700.0,103.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.8" r="4" fill="#20c997"/><circle cx="444.9" cy="159.0" r="4" fill="#20c997"/><circle cx="700.0" cy="103.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.00s | 100,030.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.72s | 120,885.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 420.42s | 118,929.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.25s | 70,190.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.82s | 94,498.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.47s | 78,312.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.99s | 55,595.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.33s | 56,390.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 730.24s | 68,470.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.38s | 156,666.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.25s | 126,179.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 426.20s | 117,315.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.84s | 50,390.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 164.92s | 60,635.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.84s | 58,285.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.91s | 83,970.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.90s | 101,108.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.36s | 132,851.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,110.8 700.0,110.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="110.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.7 444.9,202.7 700.0,196.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.7" r="4" fill="#198754"/><circle cx="444.9" cy="202.7" r="4" fill="#198754"/><circle cx="700.0" cy="196.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.9 444.9,232.8 700.0,237.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,112.2 444.9,137.6 700.0,126.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="112.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.5 444.9,235.3 700.0,212.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.0 444.9,186.0 700.0,119.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#20c997"/><circle cx="444.9" cy="186.0" r="4" fill="#20c997"/><circle cx="700.0" cy="119.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.34s | 157,753.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.10s | 129,701.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.12s | 130,168.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 18.94s | 52,806.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.69s | 76,519.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 623.91s | 80,139.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.76s | 53,296.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.15s | 59,120.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 888.54s | 56,272.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.76s | 128,849.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.59s | 114,161.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.25s | 120,701.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,025.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.40s | 57,670.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 703.00s | 71,123.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.61s | 73,486.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 116.06s | 86,160.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 401.53s | 124,523.7 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-11T22:10:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.2 444.9,62.3 700.0,123.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.9 444.9,200.1 700.0,193.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#198754"/><circle cx="444.9" cy="200.1" r="4" fill="#198754"/><circle cx="700.0" cy="193.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.1 444.9,228.8 700.0,228.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,89.6 444.9,96.0 700.0,111.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="89.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.9 444.9,236.0 700.0,219.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.4 444.9,126.9 700.0,83.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.4" r="4" fill="#20c997"/><circle cx="444.9" cy="126.9" r="4" fill="#20c997"/><circle cx="700.0" cy="83.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.28s | 97,247.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.66s | 157,077.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 410.60s | 121,771.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,710.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.70s | 77,701.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.93s | 81,574.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.89s | 52,932.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 163.52s | 61,153.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 816.68s | 61,223.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.08s | 141,322.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.66s | 137,634.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.71s | 128,961.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.18s | 49,566.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.45s | 56,996.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 749.15s | 66,742.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.50s | 74,074.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.45s | 119,838.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 344.62s | 145,088.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,131.5 444.9,75.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.6 444.9,186.2 700.0,183.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#198754"/><circle cx="444.9" cy="186.2" r="4" fill="#198754"/><circle cx="700.0" cy="183.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.0 444.9,233.3 700.0,230.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.8 444.9,79.3 700.0,80.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="79.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.6 444.9,206.6 700.0,185.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="206.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.6 444.9,107.2 700.0,139.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.6" r="4" fill="#20c997"/><circle cx="444.9" cy="107.2" r="4" fill="#20c997"/><circle cx="700.0" cy="139.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.65s | 103,605.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.79s | 131,936.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.10s | 138,850.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.30s | 65,363.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.03s | 75,742.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 648.82s | 77,062.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.45s | 51,421.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.13s | 51,778.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.18s | 53,181.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.55s | 94,822.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.81s | 130,189.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.39s | 129,738.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.75s | 50,627.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.97s | 65,373.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 655.82s | 76,240.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.32s | 81,149.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.24s | 115,956.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 502.63s | 99,477.0 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-10T22:28:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,108.7 444.9,95.1 700.0,77.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="77.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.0 444.9,220.5 700.0,171.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.0" r="4" fill="#198754"/><circle cx="444.9" cy="220.5" r="4" fill="#198754"/><circle cx="700.0" cy="171.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.2 444.9,207.2 700.0,199.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.9 444.9,73.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.9 444.9,201.2 700.0,201.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="201.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.5 444.9,77.1 700.0,68.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.5" r="4" fill="#20c997"/><circle cx="444.9" cy="77.1" r="4" fill="#20c997"/><circle cx="700.0" cy="68.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,449.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 100.94s | 99,069.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 470.00s | 106,382.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.63s | 63,987.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 211.54s | 47,271.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 739.69s | 67,595.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.56s | 48,642.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.47s | 52,779.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 890.21s | 56,166.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,706.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.78s | 107,785.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 444.03s | 112,605.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.60s | 46,298.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.03s | 55,238.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 908.27s | 55,049.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,863.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 93.90s | 106,497.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 453.61s | 110,226.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.9 444.9,87.5 700.0,83.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="83.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.4 444.9,165.5 700.0,180.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.4" r="4" fill="#198754"/><circle cx="444.9" cy="165.5" r="4" fill="#198754"/><circle cx="700.0" cy="180.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.4 444.9,212.1 700.0,200.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,105.7 444.9,62.3 700.0,100.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="105.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,210.3 444.9,193.4 700.0,212.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="193.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.7 444.9,221.5 700.0,89.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.7" r="4" fill="#20c997"/><circle cx="444.9" cy="221.5" r="4" fill="#20c997"/><circle cx="700.0" cy="89.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.76s | 92,919.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 97.42s | 102,649.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 479.80s | 104,209.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.56s | 60,386.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 142.27s | 70,288.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 780.52s | 64,060.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.00s | 45,458.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 196.17s | 50,976.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 894.52s | 55,895.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,066.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.42s | 113,094.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 514.85s | 97,114.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.34s | 51,695.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.34s | 58,704.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 986.01s | 50,709.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 21.28s | 46,990.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 212.46s | 47,068.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 491.89s | 101,647.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-11T22:18:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,129.1 444.9,95.3 700.0,65.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,164.8 700.0,166.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="164.8" r="4" fill="#198754"/><circle cx="700.0" cy="166.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,200.3 444.9,158.7 700.0,215.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="200.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="158.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.6 444.9,62.3 700.0,72.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.6 444.9,196.6 700.0,207.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="196.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.7 444.9,69.9 700.0,62.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.7" r="4" fill="#20c997"/><circle cx="444.9" cy="69.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.09s | 99,157.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.64s | 115,424.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 385.25s | 129,786.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.08s | 66,330.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.05s | 81,935.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 614.74s | 81,335.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.42s | 64,838.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 117.79s | 84,895.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.59s | 57,630.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.25s | 108,061.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.15s | 131,326.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.30s | 126,485.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.54s | 57,025.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.10s | 66,623.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 812.10s | 61,568.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.95s | 77,208.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.33s | 127,656.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 381.14s | 131,184.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,132.4 444.9,62.3 700.0,73.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="73.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.6 444.9,162.4 700.0,185.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.6" r="4" fill="#198754"/><circle cx="444.9" cy="162.4" r="4" fill="#198754"/><circle cx="700.0" cy="185.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.4 444.9,235.4 700.0,248.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.5 444.9,84.4 700.0,89.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,226.7 700.0,221.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.0 444.9,106.5 700.0,78.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#20c997"/><circle cx="444.9" cy="106.5" r="4" fill="#20c997"/><circle cx="700.0" cy="78.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,473.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.77s | 143,328.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.36s | 137,603.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.54s | 64,337.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 110.26s | 90,695.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.33s | 78,452.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.01s | 47,603.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.05s | 52,341.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1097.30s | 45,566.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.15s | 98,531.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 75.92s | 131,715.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 388.18s | 128,806.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.10s | 52,353.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.76s | 56,894.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 836.31s | 59,786.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,960.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.29s | 120,066.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 370.82s | 134,836.3 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-11T22:09:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.2 444.9,62.3 700.0,102.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,176.5 444.9,163.0 700.0,145.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="145.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.2 444.9,219.1 700.0,227.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,129.3 444.9,80.7 700.0,149.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="129.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.7 444.9,219.1 700.0,200.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.9 444.9,72.7 700.0,65.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.9" r="4" fill="#20c997"/><circle cx="444.9" cy="72.7" r="4" fill="#20c997"/><circle cx="700.0" cy="65.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.53s | 94,993.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 72.10s | 138,692.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 422.99s | 118,206.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.41s | 80,593.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.30s | 87,492.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 519.88s | 96,176.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 27.38s | 36,520.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.70s | 58,927.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 911.92s | 54,829.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.56s | 104,624.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.33s | 129,310.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 530.39s | 94,270.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.99s | 55,598.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 169.62s | 58,955.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 728.62s | 68,622.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,947.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.96s | 133,404.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.99s | 136,989.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.5 444.9,101.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,189.0 700.0,183.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="189.0" r="4" fill="#198754"/><circle cx="700.0" cy="183.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.7 444.9,234.6 700.0,231.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.0 444.9,107.0 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.8 444.9,225.8 700.0,226.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.0 444.9,112.2 700.0,76.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#20c997"/><circle cx="444.9" cy="112.2" r="4" fill="#20c997"/><circle cx="700.0" cy="76.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,181.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.32s | 124,498.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 344.29s | 145,226.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.32s | 65,265.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.62s | 77,751.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 618.18s | 80,882.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.27s | 44,905.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.11s | 53,445.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 906.65s | 55,148.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,507.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.37s | 121,399.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.13s | 119,866.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.60s | 48,546.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.02s | 58,133.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 865.51s | 57,769.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,859.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.28s | 118,650.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 363.05s | 137,722.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-11T22:20:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,107.1 444.9,102.8 700.0,93.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="107.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.9 444.9,146.1 700.0,180.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.9" r="4" fill="#198754"/><circle cx="444.9" cy="146.1" r="4" fill="#198754"/><circle cx="700.0" cy="180.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,233.8 444.9,233.6 700.0,233.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.0 444.9,100.1 700.0,70.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="70.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.8 444.9,226.2 700.0,187.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="187.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.2 444.9,85.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.2" r="4" fill="#20c997"/><circle cx="444.9" cy="85.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.93s | 112,032.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.60s | 114,150.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 420.48s | 118,911.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.17s | 65,923.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.72s | 92,836.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 658.57s | 75,922.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.10s | 49,753.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.73s | 49,817.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1006.06s | 49,698.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,365.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.60s | 115,477.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.87s | 130,253.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.16s | 52,194.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 186.95s | 53,490.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 691.34s | 72,323.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,593.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.67s | 122,439.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.01s | 134,045.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,158.0 444.9,76.8 700.0,74.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="158.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="74.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.1 444.9,182.3 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.1" r="4" fill="#198754"/><circle cx="444.9" cy="182.3" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.4 444.9,239.1 700.0,218.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.0 444.9,104.0 700.0,77.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,211.9 444.9,225.9 700.0,223.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="211.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.2 444.9,66.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.2" r="4" fill="#20c997"/><circle cx="444.9" cy="66.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.55s | 86,595.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.16s | 126,326.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.77s | 127,300.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.50s | 64,532.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.81s | 74,732.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 646.56s | 77,332.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.59s | 42,390.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.17s | 46,911.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 873.51s | 57,240.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.76s | 92,971.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.47s | 113,028.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 396.79s | 126,011.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.60s | 60,226.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 187.39s | 53,363.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 916.08s | 54,580.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.83s | 72,301.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.14s | 131,337.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.70s | 133,438.7 | PASS |

:::

:::

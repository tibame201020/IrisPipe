## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-13T00:51:21Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">166k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,128.6 444.9,117.0 700.0,103.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="117.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.3 444.9,170.5 700.0,166.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.3" r="4" fill="#198754"/><circle cx="444.9" cy="170.5" r="4" fill="#198754"/><circle cx="700.0" cy="166.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.8 444.9,237.6 700.0,235.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,111.6 700.0,118.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.4 444.9,231.2 700.0,206.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.5 444.9,127.1 700.0,98.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#20c997"/><circle cx="444.9" cy="127.1" r="4" fill="#20c997"/><circle cx="700.0" cy="98.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.75s | 114,233.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.89s | 120,649.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.68s | 127,982.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.49s | 64,574.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 109.81s | 91,063.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 534.66s | 93,517.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.98s | 52,687.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.43s | 53,928.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 903.00s | 55,370.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.62s | 150,966.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.87s | 123,649.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 417.71s | 119,699.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.16s | 49,608.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.07s | 57,446.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 701.45s | 71,280.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.42s | 80,515.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.89s | 115,084.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.23s | 130,812.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,103.0 444.9,92.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="103.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.1 444.9,114.0 700.0,148.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#198754"/><circle cx="444.9" cy="114.0" r="4" fill="#198754"/><circle cx="700.0" cy="148.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.5 444.9,222.2 700.0,223.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="223.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,129.8 444.9,103.3 700.0,106.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="129.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.1 444.9,221.3 700.0,196.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,161.5 444.9,97.3 700.0,79.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="161.5" r="4" fill="#20c997"/><circle cx="444.9" cy="97.3" r="4" fill="#20c997"/><circle cx="700.0" cy="79.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.80s | 113,571.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.18s | 118,798.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.54s | 133,498.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.37s | 65,066.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 92.45s | 108,171.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 548.02s | 91,236.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.95s | 47,744.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.04s | 55,234.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 919.26s | 54,391.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.95s | 100,462.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.15s | 113,439.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 447.87s | 111,640.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.26s | 54,761.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.60s | 55,678.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 735.23s | 68,006.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.78s | 84,918.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.93s | 116,371.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 400.48s | 124,851.1 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-13T00:42:50Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,193.7 444.9,170.3 700.0,178.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="170.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="178.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.7 444.9,227.9 700.0,196.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.7" r="4" fill="#198754"/><circle cx="444.9" cy="227.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.4 444.9,236.2 700.0,217.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.1 444.9,168.7 700.0,96.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="96.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.5 444.9,240.0 700.0,253.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,238.3 444.9,155.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="238.3" r="4" fill="#20c997"/><circle cx="444.9" cy="155.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.62s | 103,928.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.52s | 121,184.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 432.87s | 115,507.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.69s | 85,579.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.90s | 78,802.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 491.86s | 101,654.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.73s | 48,246.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 137.65s | 72,648.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 580.35s | 86,154.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.13s | 163,238.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.76s | 122,309.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 284.69s | 175,629.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.25s | 54,803.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 143.16s | 69,851.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 831.76s | 60,113.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,113.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.90s | 131,747.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 249.24s | 200,609.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.3 444.9,108.5 700.0,148.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="148.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.5 444.9,221.0 700.0,206.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.5" r="4" fill="#198754"/><circle cx="444.9" cy="221.0" r="4" fill="#198754"/><circle cx="700.0" cy="206.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.1 444.9,254.0 700.0,255.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,198.1 444.9,153.3 700.0,149.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="198.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,217.2 444.9,177.2 700.0,250.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="177.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.6 444.9,62.3 700.0,149.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="149.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.05s | 99,462.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.69s | 154,576.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.07s | 127,204.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,558.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.50s | 77,821.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 568.82s | 87,901.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.81s | 53,160.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.98s | 55,255.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 923.12s | 54,164.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.70s | 93,431.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.63s | 124,020.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 395.55s | 126,406.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.44s | 80,385.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 92.89s | 107,655.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 866.33s | 57,714.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,049.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 53.73s | 186,119.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 394.17s | 126,848.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-12T02:17:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,175.7 444.9,145.8 700.0,156.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,162.4 444.9,201.9 700.0,191.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="162.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.9" r="4" fill="#198754"/><circle cx="700.0" cy="191.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,224.6 444.9,243.0 700.0,234.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="224.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,89.2 700.0,182.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="182.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.8 444.9,188.3 700.0,237.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.4 444.9,152.1 700.0,151.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.4" r="4" fill="#20c997"/><circle cx="444.9" cy="152.1" r="4" fill="#20c997"/><circle cx="700.0" cy="151.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.59s | 86,288.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 97.58s | 102,479.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 517.03s | 96,706.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,466.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 138.70s | 72,098.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 642.93s | 77,769.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.73s | 59,780.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.71s | 49,823.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 915.07s | 54,640.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.77s | 147,710.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.10s | 133,148.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 605.52s | 82,573.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.22s | 58,065.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 125.84s | 79,462.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 950.89s | 52,582.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.11s | 62,065.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.97s | 99,038.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 503.47s | 99,311.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.4 444.9,73.2 700.0,142.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,187.5 444.9,184.3 700.0,207.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="187.5" r="4" fill="#198754"/><circle cx="444.9" cy="184.3" r="4" fill="#198754"/><circle cx="700.0" cy="207.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.3 444.9,236.0 700.0,189.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,167.2 700.0,140.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.7 444.9,230.7 700.0,217.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.1 444.9,203.1 700.0,153.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.1" r="4" fill="#20c997"/><circle cx="444.9" cy="203.1" r="4" fill="#20c997"/><circle cx="700.0" cy="153.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.42s | 87,535.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.81s | 139,246.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 489.18s | 102,211.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.74s | 78,468.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.78s | 80,144.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 736.16s | 67,920.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.29s | 57,843.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.98s | 52,638.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 646.73s | 77,311.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.89s | 145,074.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 112.04s | 89,257.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 482.59s | 103,606.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.79s | 45,901.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.26s | 55,473.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 799.39s | 62,547.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.36s | 69,633.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 142.52s | 70,164.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 518.10s | 96,506.3 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-13T00:56:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">217k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.2 444.9,167.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="167.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.3 444.9,225.3 700.0,225.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#198754"/><circle cx="444.9" cy="225.3" r="4" fill="#198754"/><circle cx="700.0" cy="225.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.7 444.9,232.1 700.0,254.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.0 444.9,166.8 700.0,155.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="166.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="155.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.7 444.9,257.0 700.0,252.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="252.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.0 444.9,162.4 700.0,150.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#20c997"/><circle cx="444.9" cy="162.4" r="4" fill="#20c997"/><circle cx="700.0" cy="150.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,601.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.57s | 121,115.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 253.04s | 197,600.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.89s | 67,163.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.76s | 79,515.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 631.68s | 79,154.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.33s | 54,564.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 134.18s | 74,524.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 860.47s | 58,107.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.45s | 105,786.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.07s | 121,848.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.80s | 130,277.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.36s | 51,644.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.91s | 56,524.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 833.75s | 59,969.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.96s | 91,257.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.95s | 125,081.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.40s | 133,547.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">176k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">235k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,144.4 444.9,183.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="183.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,250.5 444.9,184.6 700.0,220.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="250.5" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="220.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.8 444.9,262.0 700.0,271.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="271.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,210.9 444.9,162.0 700.0,193.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="210.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="193.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.6 444.9,262.3 700.0,255.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="262.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="255.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,219.2 444.9,158.8 700.0,134.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#20c997"/><circle cx="444.9" cy="158.8" r="4" fill="#20c997"/><circle cx="700.0" cy="134.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.70s | 149,298.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.01s | 119,030.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 234.01s | 213,661.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.11s | 66,172.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 84.86s | 117,842.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 556.64s | 89,824.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.55s | 73,789.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.75s | 57,225.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1006.71s | 49,666.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.28s | 97,247.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.77s | 135,550.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 452.27s | 110,553.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.22s | 52,026.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.59s | 56,949.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 804.26s | 62,169.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.03s | 90,702.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 72.46s | 138,001.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 318.14s | 157,163.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-13T00:40:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,185.1 444.9,139.0 700.0,104.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.1 444.9,181.0 700.0,136.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#198754"/><circle cx="444.9" cy="181.0" r="4" fill="#198754"/><circle cx="700.0" cy="136.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.1 444.9,245.9 700.0,187.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="187.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,85.5 444.9,62.3 700.0,138.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="85.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.3 444.9,222.1 700.0,178.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="178.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.9 444.9,149.0 700.0,126.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#20c997"/><circle cx="444.9" cy="149.0" r="4" fill="#20c997"/><circle cx="700.0" cy="126.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.84s | 92,225.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.90s | 120,631.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 352.82s | 141,713.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.65s | 68,254.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.48s | 94,801.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 409.01s | 122,245.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.67s | 73,174.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 182.31s | 54,850.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 550.32s | 90,855.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.51s | 153,562.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.58s | 167,838.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.50s | 121,211.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.67s | 63,824.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 143.97s | 69,458.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 518.43s | 96,445.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,270.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.37s | 114,453.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 389.96s | 128,217.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">215k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.1 444.9,146.3 700.0,125.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.8 444.9,225.3 700.0,199.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.8" r="4" fill="#198754"/><circle cx="444.9" cy="225.3" r="4" fill="#198754"/><circle cx="700.0" cy="199.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.6 444.9,242.8 700.0,247.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.0 444.9,166.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="166.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.3 444.9,222.2 700.0,211.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.5 444.9,153.3 700.0,77.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.5" r="4" fill="#20c997"/><circle cx="444.9" cy="153.3" r="4" fill="#20c997"/><circle cx="700.0" cy="77.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.50s | 105,263.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.96s | 135,215.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 333.56s | 149,895.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.52s | 68,889.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.20s | 78,614.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 516.10s | 96,879.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.11s | 49,714.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 151.39s | 66,055.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 801.58s | 62,376.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.97s | 100,280.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.84s | 120,708.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 255.89s | 195,396.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.51s | 57,116.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 123.78s | 80,789.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 565.73s | 88,381.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,629.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.82s | 130,174.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 271.09s | 184,440.6 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-13T00:55:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.2 444.9,152.1 700.0,91.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.4 444.9,135.2 700.0,199.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.4" r="4" fill="#198754"/><circle cx="444.9" cy="135.2" r="4" fill="#198754"/><circle cx="700.0" cy="199.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.9 444.9,260.7 700.0,252.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.4 444.9,73.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.9 444.9,227.8 700.0,240.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,146.9 444.9,138.4 700.0,63.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#20c997"/><circle cx="444.9" cy="138.4" r="4" fill="#20c997"/><circle cx="700.0" cy="63.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.13s | 89,806.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.78s | 112,644.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 333.54s | 149,908.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.75s | 102,606.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.27s | 123,048.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 597.98s | 83,615.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.17s | 43,151.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.61s | 45,743.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 982.08s | 50,912.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.84s | 113,071.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 62.12s | 160,976.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 297.71s | 167,950.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.23s | 44,994.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.41s | 66,044.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 858.62s | 58,233.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.63s | 115,834.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.61s | 121,047.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 299.26s | 167,078.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.8 444.9,99.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="99.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.1 444.9,145.3 700.0,222.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#198754"/><circle cx="444.9" cy="145.3" r="4" fill="#198754"/><circle cx="700.0" cy="222.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.2 444.9,271.3 700.0,225.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,201.9 444.9,109.9 700.0,161.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="201.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="109.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="161.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.6 444.9,252.8 700.0,250.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.6 444.9,153.8 700.0,146.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#20c997"/><circle cx="444.9" cy="153.8" r="4" fill="#20c997"/><circle cx="700.0" cy="146.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.72s | 85,287.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.17s | 155,843.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 277.68s | 180,062.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.95s | 62,680.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 79.86s | 125,216.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 675.10s | 74,063.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.68s | 59,934.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 237.69s | 42,071.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 690.68s | 72,392.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.38s | 87,850.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 67.28s | 148,643.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 435.76s | 114,741.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.08s | 52,421.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 184.28s | 54,266.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 891.67s | 56,074.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.35s | 88,074.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.60s | 119,620.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 402.60s | 124,192.4 | PASS |

:::

:::

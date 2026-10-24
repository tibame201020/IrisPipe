## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:36:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,126.1 700.0,125.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.4 444.9,195.4 700.0,200.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.4" r="4" fill="#198754"/><circle cx="444.9" cy="195.4" r="4" fill="#198754"/><circle cx="700.0" cy="200.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.7 444.9,236.9 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.9 444.9,127.4 700.0,133.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.3 444.9,198.1 700.0,200.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.7 444.9,77.4 700.0,112.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.7" r="4" fill="#20c997"/><circle cx="444.9" cy="77.4" r="4" fill="#20c997"/><circle cx="700.0" cy="112.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.20s | 161,186.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.01s | 123,435.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.68s | 123,554.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.91s | 71,895.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.21s | 82,504.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 628.02s | 79,615.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.43s | 69,300.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.50s | 57,970.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 944.69s | 52,927.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.66s | 103,498.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.50s | 122,696.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 420.63s | 118,869.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.07s | 52,452.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 123.62s | 80,891.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 628.07s | 79,609.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.59s | 79,402.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 65.69s | 152,232.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.35s | 131,804.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,154.5 444.9,112.2 700.0,118.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="118.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,215.0 700.0,204.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="215.0" r="4" fill="#198754"/><circle cx="700.0" cy="204.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,199.4 444.9,243.9 700.0,212.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="199.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,87.2 700.0,142.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.0 444.9,246.4 700.0,240.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.3 444.9,144.2 700.0,107.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.3" r="4" fill="#20c997"/><circle cx="444.9" cy="144.2" r="4" fill="#20c997"/><circle cx="700.0" cy="107.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,892.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.75s | 139,367.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.95s | 135,518.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.04s | 76,716.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.23s | 75,057.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 612.52s | 81,629.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 11.79s | 84,803.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.38s | 57,019.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 653.22s | 76,544.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.86s | 170,619.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 64.51s | 155,007.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.20s | 120,713.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.84s | 84,466.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.50s | 55,402.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 844.86s | 59,181.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,071.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.79s | 119,343.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 350.49s | 142,658.6 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-24T22:02:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.9 444.9,131.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,160.6 444.9,202.7 700.0,199.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="160.6" r="4" fill="#198754"/><circle cx="444.9" cy="202.7" r="4" fill="#198754"/><circle cx="700.0" cy="199.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.4 444.9,245.5 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.6 444.9,139.6 700.0,104.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,204.3 700.0,213.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="204.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.5 444.9,120.8 700.0,116.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.5" r="4" fill="#20c997"/><circle cx="444.9" cy="120.8" r="4" fill="#20c997"/><circle cx="700.0" cy="116.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.67s | 93,711.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.94s | 120,576.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 309.28s | 161,664.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.68s | 103,359.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.53s | 78,414.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 623.92s | 80,138.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.12s | 58,424.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 188.57s | 53,030.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 866.05s | 57,733.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.34s | 119,961.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.35s | 115,802.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 365.81s | 136,682.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.50s | 48,780.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 129.09s | 77,468.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 694.40s | 72,004.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.00s | 71,413.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.77s | 126,959.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 385.24s | 129,788.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,67.7 700.0,113.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,177.9 444.9,193.1 700.0,208.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="177.9" r="4" fill="#198754"/><circle cx="444.9" cy="193.1" r="4" fill="#198754"/><circle cx="700.0" cy="208.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.6 444.9,246.7 700.0,237.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,67.9 444.9,236.3 700.0,139.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="67.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="236.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.9 444.9,239.4 700.0,246.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.0 444.9,83.2 700.0,122.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.0" r="4" fill="#20c997"/><circle cx="444.9" cy="83.2" r="4" fill="#20c997"/><circle cx="700.0" cy="122.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.01s | 166,500.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.28s | 163,174.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.32s | 135,018.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,904.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.44s | 86,622.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 648.49s | 77,102.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.45s | 46,622.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.59s | 53,882.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 843.60s | 59,269.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.13s | 163,078.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 165.93s | 60,266.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.13s | 119,295.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.71s | 50,722.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.36s | 58,355.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 924.50s | 54,083.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.60s | 79,365.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.06s | 153,697.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.78s | 129,606.2 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:59:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.0 444.9,138.9 700.0,67.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="67.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,154.1 444.9,146.4 700.0,194.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="154.1" r="4" fill="#198754"/><circle cx="444.9" cy="146.4" r="4" fill="#198754"/><circle cx="700.0" cy="194.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.5 444.9,236.8 700.0,231.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,153.7 444.9,115.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.2 444.9,173.9 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="173.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.9 444.9,113.8 700.0,116.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.8" r="4" fill="#20c997"/><circle cx="700.0" cy="116.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.44s | 87,427.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 102.09s | 97,954.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 374.68s | 133,446.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.07s | 90,342.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 106.15s | 94,207.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 710.23s | 70,400.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 28.01s | 35,705.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.88s | 49,049.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 963.80s | 51,878.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.04s | 90,538.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 91.25s | 109,591.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 367.04s | 136,226.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.11s | 52,342.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 124.25s | 80,479.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1021.99s | 48,924.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.81s | 59,477.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 90.51s | 110,486.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 457.53s | 109,282.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">119k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.2 444.9,99.1 700.0,104.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="99.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,85.8 444.9,95.5 700.0,135.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="85.8" r="4" fill="#198754"/><circle cx="444.9" cy="95.5" r="4" fill="#198754"/><circle cx="700.0" cy="135.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,169.6 444.9,213.1 700.0,196.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="169.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.0 444.9,114.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.8 444.9,179.5 700.0,207.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="179.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.7 444.9,85.9 700.0,79.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#20c997"/><circle cx="444.9" cy="85.9" r="4" fill="#20c997"/><circle cx="700.0" cy="79.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.18s | 89,429.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 106.58s | 93,828.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 544.37s | 91,849.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.09s | 99,098.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.96s | 95,273.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 630.77s | 79,267.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.20s | 65,793.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.20s | 48,496.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 904.94s | 55,252.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.56s | 94,670.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 114.07s | 87,668.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 460.94s | 108,474.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.73s | 53,396.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.66s | 61,857.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 987.83s | 50,615.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.78s | 63,367.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.92s | 99,086.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 492.51s | 101,520.6 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:40:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.8 444.9,93.8 700.0,69.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="69.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.4 444.9,169.2 700.0,168.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.4" r="4" fill="#198754"/><circle cx="444.9" cy="169.2" r="4" fill="#198754"/><circle cx="700.0" cy="168.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.8 444.9,194.6 700.0,169.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="194.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="169.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.6 444.9,72.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="72.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,209.7 444.9,199.8 700.0,145.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="209.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="145.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.4 444.9,83.9 700.0,62.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.4" r="4" fill="#20c997"/><circle cx="444.9" cy="83.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.26s | 108,038.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.04s | 116,223.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.51s | 128,037.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.77s | 67,723.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.15s | 79,902.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.22s | 80,099.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,161.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 147.80s | 67,657.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 627.89s | 79,632.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.74s | 114,403.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.11s | 126,399.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 380.51s | 131,402.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.56s | 60,375.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.57s | 65,118.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 547.82s | 91,270.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.78s | 72,568.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.66s | 120,979.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.76s | 131,315.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">171k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">227k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.6 444.9,153.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="153.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,249.7 444.9,179.9 700.0,159.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="249.7" r="4" fill="#198754"/><circle cx="444.9" cy="179.9" r="4" fill="#198754"/><circle cx="700.0" cy="159.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.9 444.9,260.8 700.0,257.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.0 444.9,180.7 700.0,169.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="180.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.6 444.9,256.9 700.0,202.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="202.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.5 444.9,167.0 700.0,160.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.5" r="4" fill="#20c997"/><circle cx="444.9" cy="167.0" r="4" fill="#20c997"/><circle cx="700.0" cy="160.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,630.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.72s | 137,517.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 241.91s | 206,690.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,616.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.05s | 117,582.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 376.44s | 132,822.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.90s | 47,849.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.75s | 56,258.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 855.33s | 58,456.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.37s | 135,685.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.50s | 116,964.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.84s | 125,678.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,355.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.88s | 59,214.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 498.10s | 100,380.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.12s | 76,190.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.53s | 127,338.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.88s | 132,317.5 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-24T22:03:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">159k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">212k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,206.6 444.9,127.1 700.0,156.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.2 444.9,201.1 700.0,218.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#198754"/><circle cx="444.9" cy="201.1" r="4" fill="#198754"/><circle cx="700.0" cy="218.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.1 444.9,250.5 700.0,236.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.0 444.9,98.5 700.0,134.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.0 444.9,233.3 700.0,250.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.7 444.9,109.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#20c997"/><circle cx="444.9" cy="109.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.03s | 90,694.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.09s | 146,864.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 395.77s | 126,335.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.09s | 66,277.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.73s | 94,580.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 608.78s | 82,130.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.49s | 44,456.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.50s | 59,702.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 717.04s | 69,731.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.44s | 105,954.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.85s | 167,087.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 352.84s | 141,707.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.45s | 60,779.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 139.15s | 71,865.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 832.49s | 60,060.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,333.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.69s | 159,507.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 259.48s | 192,695.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,122.9 444.9,141.4 700.0,123.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.5 444.9,134.5 700.0,220.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#198754"/><circle cx="444.9" cy="134.5" r="4" fill="#198754"/><circle cx="700.0" cy="220.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.2 444.9,248.3 700.0,245.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.6 444.9,62.3 700.0,146.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.6 444.9,246.8 700.0,246.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.5 444.9,115.8 700.0,76.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.5" r="4" fill="#20c997"/><circle cx="444.9" cy="115.8" r="4" fill="#20c997"/><circle cx="700.0" cy="76.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.88s | 145,370.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.38s | 132,662.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 344.44s | 145,163.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.78s | 63,387.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 72.79s | 137,383.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.07s | 78,484.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.53s | 46,446.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.31s | 59,413.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 812.96s | 61,503.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.07s | 141,422.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.51s | 186,898.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.71s | 129,296.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.96s | 45,529.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.38s | 60,467.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 821.47s | 60,866.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,865.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 66.57s | 150,215.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 282.65s | 176,897.8 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:45:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,201.8 444.9,150.6 700.0,147.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.8 444.9,151.0 700.0,150.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#198754"/><circle cx="444.9" cy="151.0" r="4" fill="#198754"/><circle cx="700.0" cy="150.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.5 444.9,261.4 700.0,264.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.1 444.9,136.1 700.0,139.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="136.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.1 444.9,250.2 700.0,237.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.7 444.9,139.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.7" r="4" fill="#20c997"/><circle cx="444.9" cy="139.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,682.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.29s | 118,638.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.59s | 120,892.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.16s | 76,005.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 84.48s | 118,375.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 422.24s | 118,415.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.74s | 42,115.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 211.14s | 47,362.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1105.91s | 45,211.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,549.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.16s | 127,947.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.58s | 125,762.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.03s | 47,555.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.35s | 54,539.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 800.66s | 62,448.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.62s | 116,009.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.68s | 125,505.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 284.99s | 175,443.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.0 444.9,94.5 700.0,81.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="81.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.5 444.9,91.8 700.0,177.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.5" r="4" fill="#198754"/><circle cx="444.9" cy="91.8" r="4" fill="#198754"/><circle cx="700.0" cy="177.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.6 444.9,237.1 700.0,180.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="180.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.3 444.9,103.8 700.0,84.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.4 444.9,185.1 700.0,114.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="185.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="114.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,161.1 444.9,84.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#20c997"/><circle cx="444.9" cy="84.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,083.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.72s | 115,320.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 411.79s | 121,422.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.02s | 58,757.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.74s | 116,627.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 660.70s | 75,677.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.98s | 47,662.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.02s | 46,943.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 672.64s | 74,333.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.11s | 89,984.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.20s | 110,868.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.04s | 120,180.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.13s | 49,667.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 139.16s | 71,859.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 473.76s | 105,538.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.00s | 83,361.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.31s | 120,027.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.36s | 130,765.4 | PASS |

:::

:::

## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-18T22:09:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,102.2 444.9,105.4 700.0,86.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,109.9 444.9,160.2 700.0,138.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="109.9" r="4" fill="#198754"/><circle cx="444.9" cy="160.2" r="4" fill="#198754"/><circle cx="700.0" cy="138.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.2 444.9,215.5 700.0,227.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.3 444.9,71.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="71.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.7 444.9,206.3 700.0,211.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="206.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,159.9 444.9,87.2 700.0,73.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#20c997"/><circle cx="444.9" cy="87.2" r="4" fill="#20c997"/><circle cx="700.0" cy="73.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.78s | 113,908.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 89.02s | 112,340.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.17s | 121,605.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.08s | 110,132.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.97s | 85,495.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 521.12s | 95,947.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.14s | 52,233.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.01s | 58,474.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 945.99s | 52,854.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.57s | 104,536.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.46s | 129,095.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 374.76s | 133,419.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.24s | 51,983.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 158.80s | 62,973.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 828.95s | 60,317.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,675.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.48s | 121,238.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.30s | 128,106.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,112.1 444.9,62.3 700.0,91.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="112.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.0 444.9,182.7 700.0,137.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.0" r="4" fill="#198754"/><circle cx="444.9" cy="182.7" r="4" fill="#198754"/><circle cx="700.0" cy="137.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.7 444.9,256.5 700.0,146.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="146.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.9 444.9,98.5 700.0,81.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.7 444.9,138.7 700.0,219.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="138.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.0 444.9,93.1 700.0,79.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.0" r="4" fill="#20c997"/><circle cx="444.9" cy="93.1" r="4" fill="#20c997"/><circle cx="700.0" cy="79.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,854.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.42s | 138,077.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 405.65s | 123,258.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.42s | 69,357.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.67s | 77,120.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 500.02s | 99,996.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.30s | 51,816.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 251.73s | 39,724.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 523.65s | 95,483.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.77s | 102,312.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.51s | 119,747.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 388.75s | 128,616.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.29s | 49,285.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 100.63s | 99,370.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 857.17s | 58,331.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.74s | 78,462.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.64s | 122,483.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 386.80s | 129,265.1 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-18T22:02:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,172.4 444.9,84.1 700.0,144.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.8 444.9,191.0 700.0,204.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.8" r="4" fill="#198754"/><circle cx="444.9" cy="191.0" r="4" fill="#198754"/><circle cx="700.0" cy="204.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.3 444.9,241.3 700.0,238.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.5 444.9,131.7 700.0,137.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.3 444.9,248.4 700.0,241.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.2 444.9,62.3 700.0,130.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.2" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="130.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.76s | 102,427.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.29s | 157,997.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 416.48s | 120,054.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.21s | 75,683.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 110.24s | 90,713.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 606.11s | 82,494.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.69s | 50,792.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.39s | 59,035.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 823.98s | 60,681.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.15s | 98,551.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.12s | 128,004.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.38s | 124,570.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.26s | 61,500.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.35s | 54,540.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 845.82s | 59,114.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,647.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.22s | 171,750.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 388.67s | 128,642.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.6 444.9,134.0 700.0,125.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.4 444.9,202.2 700.0,213.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#198754"/><circle cx="444.9" cy="202.2" r="4" fill="#198754"/><circle cx="700.0" cy="213.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.3 444.9,245.2 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,161.3 700.0,149.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.9 444.9,246.7 700.0,243.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.5 444.9,136.8 700.0,141.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.5" r="4" fill="#20c997"/><circle cx="444.9" cy="136.8" r="4" fill="#20c997"/><circle cx="700.0" cy="141.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.71s | 103,039.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.47s | 129,080.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 371.26s | 134,678.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.47s | 69,103.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 117.22s | 85,312.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.33s | 78,329.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.56s | 48,638.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.41s | 57,668.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 879.42s | 56,855.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.71s | 175,162.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.61s | 111,588.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.23s | 118,983.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.45s | 48,904.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.29s | 56,723.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.54s | 58,855.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.60s | 73,518.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.56s | 127,299.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 401.53s | 124,522.8 | PASS |

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
  **最新量測：** `2026-09-18T22:05:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,144.7 444.9,62.3 700.0,162.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="162.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.4 444.9,195.6 700.0,138.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#198754"/><circle cx="444.9" cy="195.6" r="4" fill="#198754"/><circle cx="700.0" cy="138.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.1 444.9,250.2 700.0,240.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,85.7 444.9,156.0 700.0,165.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="85.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="165.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.0 444.9,248.0 700.0,237.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.6 444.9,132.8 700.0,112.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.6" r="4" fill="#20c997"/><circle cx="444.9" cy="132.8" r="4" fill="#20c997"/><circle cx="700.0" cy="112.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.22s | 121,684.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 57.35s | 174,364.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 453.15s | 110,339.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.96s | 66,858.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.20s | 89,122.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 398.27s | 125,543.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.07s | 49,830.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.52s | 54,193.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 825.62s | 60,560.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.28s | 159,362.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.36s | 114,467.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 460.22s | 108,643.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,161.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.88s | 55,593.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 797.65s | 62,683.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.08s | 82,754.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.37s | 129,254.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 352.02s | 142,036.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.1 444.9,145.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.8 444.9,216.8 700.0,229.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.8" r="4" fill="#198754"/><circle cx="444.9" cy="216.8" r="4" fill="#198754"/><circle cx="700.0" cy="229.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.1 444.9,258.4 700.0,262.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,203.3 444.9,169.8 700.0,176.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="169.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="176.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.8 444.9,246.7 700.0,244.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.2 444.9,169.7 700.0,153.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.2" r="4" fill="#20c997"/><circle cx="444.9" cy="169.7" r="4" fill="#20c997"/><circle cx="700.0" cy="153.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.35s | 136,017.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.82s | 139,233.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 249.18s | 200,659.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.06s | 66,392.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.96s | 86,986.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 646.88s | 77,294.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,210.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.47s | 56,346.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 938.05s | 53,302.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.32s | 96,927.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.28s | 121,533.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 429.32s | 116,463.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.53s | 48,699.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 153.87s | 64,990.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 749.19s | 66,738.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.15s | 82,270.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.25s | 121,587.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 375.16s | 133,275.4 | PASS |

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

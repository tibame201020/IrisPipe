## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-31T22:48:04Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,70.2 444.9,145.6 700.0,113.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="70.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.8 444.9,133.9 700.0,196.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#198754"/><circle cx="444.9" cy="133.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.1 444.9,232.9 700.0,226.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,137.0 700.0,101.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.1 444.9,232.0 700.0,229.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.0 444.9,133.5 700.0,112.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.0" r="4" fill="#20c997"/><circle cx="444.9" cy="133.5" r="4" fill="#20c997"/><circle cx="700.0" cy="112.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.67s | 149,970.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 93.20s | 107,296.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 398.58s | 125,445.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,802.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 87.78s | 113,914.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.92s | 78,256.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.00s | 52,617.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.98s | 57,810.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 815.87s | 61,284.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.47s | 154,464.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.18s | 112,136.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 377.93s | 132,298.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,232.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.48s | 58,315.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 837.61s | 59,693.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.44s | 80,405.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.62s | 114,133.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 397.41s | 125,813.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,104.6 444.9,123.1 700.0,123.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="104.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.1 444.9,211.5 700.0,208.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#198754"/><circle cx="444.9" cy="211.5" r="4" fill="#198754"/><circle cx="700.0" cy="208.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.3 444.9,244.3 700.0,185.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="185.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.9 444.9,131.3 700.0,137.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.7 444.9,232.4 700.0,215.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.5 444.9,84.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.5" r="4" fill="#20c997"/><circle cx="444.9" cy="84.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.22s | 138,580.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.46s | 127,447.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.30s | 127,130.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,688.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.63s | 74,279.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 657.75s | 76,017.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.58s | 64,189.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 183.22s | 54,580.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 554.35s | 90,195.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.49s | 154,012.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.64s | 122,492.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.74s | 119,121.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.45s | 48,904.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.03s | 61,715.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 693.29s | 72,119.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.55s | 79,694.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 66.38s | 150,638.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 304.81s | 164,038.8 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-31T22:43:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,204.6 444.9,159.0 700.0,170.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="204.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="170.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.0 444.9,135.5 700.0,184.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.0" r="4" fill="#198754"/><circle cx="444.9" cy="135.5" r="4" fill="#198754"/><circle cx="700.0" cy="184.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.5 444.9,255.1 700.0,251.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,99.5 444.9,161.4 700.0,166.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="99.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="166.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.6 444.9,252.5 700.0,251.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,159.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="159.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.03s | 90,653.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.74s | 122,337.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 436.88s | 114,448.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.13s | 66,072.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 72.09s | 138,713.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 476.22s | 104,994.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.70s | 48,316.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.11s | 55,522.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 864.88s | 57,811.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.11s | 163,746.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.85s | 120,703.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 427.29s | 117,015.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.57s | 64,213.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.32s | 57,366.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 858.14s | 58,265.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.31s | 97,002.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.87s | 122,141.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 263.70s | 189,610.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">178k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">238k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.3 444.9,62.3 700.0,180.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="180.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.7 444.9,240.5 700.0,238.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#198754"/><circle cx="444.9" cy="240.5" r="4" fill="#198754"/><circle cx="700.0" cy="238.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.9 444.9,228.0 700.0,263.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,206.9 444.9,179.8 700.0,190.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="179.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="190.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.5 444.9,260.4 700.0,259.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="260.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="259.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.9 444.9,162.4 700.0,122.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.9" r="4" fill="#20c997"/><circle cx="444.9" cy="162.4" r="4" fill="#20c997"/><circle cx="700.0" cy="122.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.84s | 146,241.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 46.30s | 215,982.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 407.97s | 122,558.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.62s | 68,380.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.68s | 74,804.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 652.39s | 76,641.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.36s | 46,827.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 118.01s | 84,735.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 884.26s | 56,544.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.86s | 101,409.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.35s | 122,922.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 436.61s | 114,519.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.18s | 55,017.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.24s | 59,087.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 836.40s | 59,779.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.63s | 103,842.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.17s | 136,673.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 296.88s | 168,415.4 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-30T23:48:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,125.7 444.9,133.4 700.0,142.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="125.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.2 444.9,110.6 700.0,97.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.2" r="4" fill="#198754"/><circle cx="444.9" cy="110.6" r="4" fill="#198754"/><circle cx="700.0" cy="97.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.7 444.9,151.8 700.0,204.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="151.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="204.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,66.8 444.9,62.3 700.0,112.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="66.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="112.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.8 444.9,172.8 700.0,186.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="172.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.3 444.9,161.4 700.0,104.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.3" r="4" fill="#20c997"/><circle cx="444.9" cy="161.4" r="4" fill="#20c997"/><circle cx="700.0" cy="104.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.18s | 98,241.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 105.68s | 94,626.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 552.48s | 90,501.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.54s | 60,444.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 94.95s | 105,313.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 448.62s | 111,453.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.14s | 58,332.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 116.28s | 85,998.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 815.90s | 61,281.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.94s | 125,881.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.12s | 128,013.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 478.68s | 104,454.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.37s | 44,696.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 131.35s | 76,134.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 718.41s | 69,598.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.81s | 63,231.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 122.70s | 81,499.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 462.80s | 108,037.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">139k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.6 444.9,130.2 700.0,109.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.4 444.9,115.7 700.0,183.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.4" r="4" fill="#198754"/><circle cx="444.9" cy="115.7" r="4" fill="#198754"/><circle cx="700.0" cy="183.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.7 444.9,223.2 700.0,218.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,96.7 444.9,112.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="96.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="112.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,204.7 444.9,232.7 700.0,193.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="204.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.1 444.9,133.6 700.0,126.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.1" r="4" fill="#20c997"/><circle cx="444.9" cy="133.6" r="4" fill="#20c997"/><circle cx="700.0" cy="126.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.57s | 86,423.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 105.32s | 94,946.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 478.75s | 104,439.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.02s | 62,402.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 98.37s | 101,656.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 711.89s | 70,236.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.17s | 45,104.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 192.88s | 51,844.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 929.16s | 53,811.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.05s | 110,485.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 96.75s | 103,358.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 395.43s | 126,443.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.56s | 60,401.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 210.77s | 47,444.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 759.45s | 65,837.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.20s | 65,780.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 107.09s | 93,375.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 518.27s | 96,475.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-30T23:34:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.9 444.9,62.3 700.0,115.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,194.1 700.0,191.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="194.1" r="4" fill="#198754"/><circle cx="700.0" cy="191.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.8 444.9,225.0 700.0,225.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.7 444.9,141.1 700.0,97.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.2 444.9,238.3 700.0,161.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="161.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.8 444.9,105.3 700.0,106.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.8" r="4" fill="#20c997"/><circle cx="444.9" cy="105.3" r="4" fill="#20c997"/><circle cx="700.0" cy="106.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.07s | 90,342.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.99s | 153,876.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.13s | 123,722.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.49s | 64,545.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.80s | 79,491.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 615.70s | 81,208.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,042.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 161.06s | 62,090.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 810.48s | 61,691.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.01s | 124,843.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 91.40s | 109,409.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 373.68s | 133,806.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.96s | 50,100.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.38s | 54,531.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 509.67s | 98,103.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.04s | 83,028.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.18s | 129,574.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.67s | 128,974.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,83.2 444.9,111.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="83.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.6 444.9,196.6 700.0,196.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#198754"/><circle cx="444.9" cy="196.6" r="4" fill="#198754"/><circle cx="700.0" cy="196.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.6 444.9,234.9 700.0,227.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.8 444.9,119.0 700.0,130.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="119.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,185.8 444.9,232.8 700.0,213.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="185.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.6 444.9,110.1 700.0,109.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#20c997"/><circle cx="444.9" cy="110.1" r="4" fill="#20c997"/><circle cx="700.0" cy="109.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.02s | 142,450.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.20s | 126,261.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 324.05s | 154,296.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.05s | 66,427.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.76s | 78,272.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.39s | 78,321.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.76s | 50,599.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.54s | 56,644.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 824.99s | 60,606.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.92s | 100,836.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.83s | 122,197.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 432.44s | 115,623.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.85s | 84,388.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.01s | 57,801.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 725.29s | 68,937.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.68s | 78,870.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.60s | 127,220.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 391.11s | 127,840.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-31T22:45:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">169k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">225k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,216.3 444.9,62.3 700.0,134.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="134.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.8 444.9,227.6 700.0,156.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#198754"/><circle cx="444.9" cy="227.6" r="4" fill="#198754"/><circle cx="700.0" cy="156.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.5 444.9,257.1 700.0,255.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.6 444.9,167.5 700.0,101.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.9 444.9,238.3 700.0,223.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.7 444.9,169.6 700.0,151.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.7" r="4" fill="#20c997"/><circle cx="444.9" cy="169.6" r="4" fill="#20c997"/><circle cx="700.0" cy="151.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.23s | 89,007.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 48.88s | 204,565.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 332.41s | 150,414.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.40s | 96,144.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.11s | 80,570.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 374.06s | 133,668.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.33s | 46,877.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.08s | 58,452.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 841.12s | 59,444.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.07s | 99,314.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.61s | 125,606.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 285.99s | 174,832.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.48s | 87,085.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 137.89s | 72,523.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 597.77s | 83,643.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.57s | 104,482.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.60s | 124,063.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 363.96s | 137,378.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.9 444.9,129.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="129.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.9 444.9,209.8 700.0,132.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.9" r="4" fill="#198754"/><circle cx="444.9" cy="209.8" r="4" fill="#198754"/><circle cx="700.0" cy="132.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.9 444.9,244.8 700.0,246.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.4 444.9,78.7 700.0,118.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="78.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.5 444.9,227.4 700.0,247.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.9 444.9,118.4 700.0,117.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#20c997"/><circle cx="444.9" cy="118.4" r="4" fill="#20c997"/><circle cx="700.0" cy="117.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.84s | 92,250.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.06s | 129,770.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 290.33s | 172,214.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.21s | 65,728.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.48s | 79,066.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 390.93s | 127,899.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.51s | 64,478.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.66s | 56,927.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 891.84s | 56,063.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.45s | 95,721.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 61.80s | 161,814.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 365.71s | 136,721.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.67s | 50,833.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 147.16s | 67,954.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 904.72s | 55,265.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,880.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.12s | 136,763.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 364.16s | 137,301.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-30T00:03:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,171.8 444.9,130.6 700.0,137.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,190.0 700.0,112.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="190.0" r="4" fill="#198754"/><circle cx="700.0" cy="112.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.4 444.9,217.6 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,125.4 700.0,121.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.8 444.9,192.6 700.0,231.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,109.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="109.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.77s | 92,833.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.03s | 116,235.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 444.33s | 112,528.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,878.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.24s | 82,479.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 395.66s | 126,371.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.81s | 59,477.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 149.81s | 66,750.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1015.92s | 49,216.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,888.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.88s | 119,217.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.87s | 121,692.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.69s | 42,217.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 123.44s | 81,013.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 848.09s | 58,956.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.64s | 79,126.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.12s | 128,001.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 322.36s | 155,107.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.7 444.9,154.5 700.0,124.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.4 444.9,223.4 700.0,209.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#198754"/><circle cx="444.9" cy="223.4" r="4" fill="#198754"/><circle cx="700.0" cy="209.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.5 444.9,269.4 700.0,237.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.6 444.9,62.3 700.0,137.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.9 444.9,237.0 700.0,246.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.9 444.9,150.7 700.0,124.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.9" r="4" fill="#20c997"/><circle cx="444.9" cy="150.7" r="4" fill="#20c997"/><circle cx="700.0" cy="124.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.00s | 111,148.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.90s | 116,414.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.25s | 135,778.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,742.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.95s | 71,970.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 615.75s | 81,201.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.96s | 37,090.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 236.47s | 42,289.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 790.75s | 63,231.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,827.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.85s | 175,913.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 391.97s | 127,560.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.21s | 58,088.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.17s | 63,224.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 871.99s | 57,340.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.80s | 78,094.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.11s | 118,899.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.96s | 135,517.5 | PASS |

:::

:::

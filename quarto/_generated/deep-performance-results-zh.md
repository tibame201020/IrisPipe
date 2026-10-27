## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:24:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">164k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">219k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.5 444.9,62.3 700.0,139.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.9 444.9,176.5 700.0,216.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.9" r="4" fill="#198754"/><circle cx="444.9" cy="176.5" r="4" fill="#198754"/><circle cx="700.0" cy="216.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.4 444.9,244.6 700.0,241.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.9 444.9,172.3 700.0,103.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.3 444.9,256.3 700.0,253.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.0 444.9,172.8 700.0,151.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#20c997"/><circle cx="444.9" cy="172.8" r="4" fill="#20c997"/><circle cx="700.0" cy="151.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.84s | 101,626.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 50.32s | 198,743.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 350.81s | 142,525.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.44s | 69,271.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 86.58s | 115,493.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 578.57s | 86,420.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.00s | 50,010.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 151.73s | 65,905.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 737.09s | 67,834.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.71s | 129,752.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.35s | 118,556.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 295.95s | 168,946.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.80s | 59,506.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.34s | 57,359.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 845.70s | 59,122.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.33s | 107,135.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.58s | 118,235.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.45s | 133,528.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,132.0 444.9,121.3 700.0,131.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.3 444.9,222.0 700.0,220.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#198754"/><circle cx="444.9" cy="222.0" r="4" fill="#198754"/><circle cx="700.0" cy="220.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.2 444.9,207.0 700.0,255.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.2 444.9,166.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="166.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.3 444.9,236.2 700.0,200.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.7 444.9,146.6 700.0,184.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#20c997"/><circle cx="444.9" cy="146.6" r="4" fill="#20c997"/><circle cx="700.0" cy="184.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.13s | 140,173.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 67.76s | 147,588.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.91s | 140,483.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.67s | 68,166.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.15s | 78,032.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 634.29s | 78,828.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.09s | 70,997.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 113.12s | 88,404.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 907.19s | 55,115.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.47s | 133,797.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.73s | 116,642.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 265.49s | 188,329.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.29s | 65,397.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 146.53s | 68,246.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 540.11s | 92,573.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.90s | 77,531.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.85s | 130,118.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 481.60s | 103,821.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:16:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.9 444.9,69.8 700.0,126.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.4 444.9,206.8 700.0,109.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.4" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="109.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,197.4 700.0,235.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="197.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,75.9 444.9,62.3 700.0,123.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="75.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.4 444.9,184.0 700.0,239.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="184.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.4 444.9,113.9 700.0,121.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#20c997"/><circle cx="444.9" cy="113.9" r="4" fill="#20c997"/><circle cx="700.0" cy="121.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.47s | 95,465.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.67s | 162,163.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 392.05s | 127,533.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.45s | 74,349.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.61s | 78,364.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 362.86s | 137,796.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.30s | 51,805.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 118.83s | 84,156.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 821.51s | 60,863.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.31s | 158,428.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.96s | 166,766.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.57s | 129,341.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.05s | 49,875.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 108.33s | 92,308.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 852.96s | 58,619.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.02s | 76,781.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.97s | 135,189.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.23s | 130,468.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.5 444.9,75.1 700.0,133.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.2 444.9,144.4 700.0,200.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.2" r="4" fill="#198754"/><circle cx="444.9" cy="144.4" r="4" fill="#198754"/><circle cx="700.0" cy="200.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.4 444.9,214.5 700.0,246.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,91.0 444.9,158.5 700.0,154.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="91.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.6 444.9,197.8 700.0,224.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.4 444.9,153.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.4" r="4" fill="#20c997"/><circle cx="444.9" cy="153.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,895.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.19s | 174,843.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.51s | 135,683.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,904.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 77.97s | 128,256.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 551.25s | 90,703.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.77s | 48,148.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 123.39s | 81,047.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 835.55s | 59,840.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.09s | 164,149.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.22s | 118,739.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.68s | 121,748.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.04s | 45,365.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 108.32s | 92,320.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 670.53s | 74,567.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.02s | 83,187.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.97s | 121,997.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 272.48s | 183,499.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:42:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,163.5 444.9,135.3 700.0,125.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="163.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="135.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.4 444.9,193.5 700.0,123.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#198754"/><circle cx="444.9" cy="193.5" r="4" fill="#198754"/><circle cx="700.0" cy="123.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.3 444.9,202.3 700.0,209.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="202.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="209.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,75.6 444.9,62.3 700.0,69.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="75.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="69.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.1 444.9,215.6 700.0,228.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.2 444.9,142.1 700.0,133.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.2" r="4" fill="#20c997"/><circle cx="444.9" cy="142.1" r="4" fill="#20c997"/><circle cx="700.0" cy="133.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.63s | 85,955.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.92s | 100,075.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 477.12s | 104,795.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.63s | 63,963.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 141.04s | 70,899.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 470.58s | 106,252.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.52s | 46,468.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.40s | 66,490.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 793.18s | 63,037.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.69s | 130,005.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.17s | 136,666.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 376.15s | 132,924.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.96s | 43,544.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 167.13s | 59,833.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 940.61s | 53,157.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.37s | 65,057.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.44s | 96,673.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 495.39s | 100,929.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.9 444.9,94.0 700.0,115.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.8 444.9,177.5 700.0,182.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.8" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="182.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.4 444.9,216.3 700.0,210.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.0 444.9,115.1 700.0,99.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.1 444.9,223.8 700.0,221.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.6 444.9,62.3 700.0,64.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="64.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.04s | 83,049.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.95s | 108,759.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 504.33s | 99,141.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.84s | 72,275.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 140.69s | 71,077.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 727.48s | 68,730.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.79s | 48,102.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.66s | 53,574.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 887.77s | 56,320.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.98s | 100,160.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 100.76s | 99,241.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.41s | 106,064.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.18s | 45,087.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 199.31s | 50,173.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 978.35s | 51,106.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,612.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.26s | 123,057.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 409.51s | 122,095.6 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:29:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.7 444.9,62.3 700.0,126.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.7 444.9,187.5 700.0,98.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.7" r="4" fill="#198754"/><circle cx="444.9" cy="187.5" r="4" fill="#198754"/><circle cx="700.0" cy="98.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.5 444.9,244.3 700.0,182.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="182.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,64.6 444.9,155.8 700.0,117.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="64.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.4 444.9,183.2 700.0,232.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.3 444.9,139.7 700.0,101.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.3" r="4" fill="#20c997"/><circle cx="444.9" cy="139.7" r="4" fill="#20c997"/><circle cx="700.0" cy="101.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.21s | 89,245.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.16s | 160,862.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 406.79s | 122,912.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.10s | 70,947.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.95s | 86,993.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 358.14s | 139,611.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.05s | 49,865.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.94s | 53,492.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 556.70s | 89,814.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.27s | 159,515.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 94.62s | 105,680.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.76s | 128,283.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.54s | 68,790.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 111.71s | 89,516.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 826.92s | 60,465.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.11s | 98,902.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.82s | 115,184.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 363.32s | 137,621.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,185.2 444.9,68.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="68.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.2 444.9,222.7 700.0,219.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#198754"/><circle cx="444.9" cy="222.7" r="4" fill="#198754"/><circle cx="700.0" cy="219.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.3 444.9,253.8 700.0,251.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.4 444.9,155.8 700.0,159.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.1 444.9,242.5 700.0,251.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,256.5 444.9,152.7 700.0,134.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="256.5" r="4" fill="#20c997"/><circle cx="444.9" cy="152.7" r="4" fill="#20c997"/><circle cx="700.0" cy="134.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.00s | 100,030.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 56.18s | 178,008.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 274.52s | 182,134.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.96s | 62,668.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.28s | 75,028.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 648.73s | 77,073.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.79s | 53,231.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.31s | 54,256.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 897.36s | 55,719.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,241.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.57s | 119,658.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.46s | 116,970.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.07s | 55,337.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.91s | 61,763.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 891.54s | 56,082.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 19.09s | 52,394.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.13s | 121,764.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 373.88s | 133,734.5 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:18:50Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">165k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,128.9 444.9,121.3 700.0,112.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="112.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.0 444.9,184.6 700.0,77.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="77.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,194.7 444.9,225.1 700.0,184.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="194.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="184.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.0 444.9,106.5 700.0,109.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,187.7 444.9,230.0 700.0,194.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.0 444.9,90.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#20c997"/><circle cx="444.9" cy="90.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.84s | 113,083.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.27s | 117,273.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 408.79s | 122,312.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.45s | 64,745.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.17s | 82,531.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 353.62s | 141,395.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.98s | 77,011.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.85s | 60,293.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 606.69s | 82,414.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.96s | 100,441.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.74s | 125,412.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.62s | 123,878.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.37s | 80,834.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.60s | 57,604.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 649.86s | 76,940.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.14s | 82,345.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.50s | 134,231.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 334.06s | 149,675.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">223k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,184.4 444.9,163.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,232.9 444.9,209.7 700.0,225.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="232.9" r="4" fill="#198754"/><circle cx="444.9" cy="209.7" r="4" fill="#198754"/><circle cx="700.0" cy="225.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.8 444.9,238.9 700.0,262.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,206.1 444.9,169.1 700.0,72.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="169.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,213.3 444.9,189.5 700.0,256.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="213.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="189.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.4 444.9,165.1 700.0,157.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#20c997"/><circle cx="444.9" cy="165.1" r="4" fill="#20c997"/><circle cx="700.0" cy="157.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.93s | 112,044.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.39s | 127,570.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 246.43s | 202,900.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.17s | 75,935.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 107.28s | 93,211.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 611.71s | 81,737.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.27s | 47,014.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 139.84s | 71,510.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 921.05s | 54,286.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,923.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.03s | 123,405.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 255.66s | 195,568.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.05s | 90,530.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 92.38s | 108,245.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.00s | 58,616.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.24s | 88,968.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.11s | 126,403.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.30s | 131,821.8 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:33:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.7 444.9,154.0 700.0,94.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="94.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.5 444.9,147.3 700.0,214.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.5" r="4" fill="#198754"/><circle cx="444.9" cy="147.3" r="4" fill="#198754"/><circle cx="700.0" cy="214.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,273.8 444.9,254.6 700.0,255.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="273.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.0 444.9,81.6 700.0,81.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="81.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.0 444.9,198.7 700.0,236.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.2 444.9,126.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#20c997"/><circle cx="444.9" cy="126.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.21s | 97,962.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.33s | 117,185.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 320.53s | 155,993.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.89s | 59,199.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.29s | 121,522.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 640.87s | 78,018.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.24s | 39,624.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 192.26s | 52,011.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 965.08s | 51,809.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,526.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.96s | 164,042.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 304.84s | 164,022.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.46s | 46,594.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 113.35s | 88,220.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 786.52s | 63,571.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.75s | 93,057.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.15s | 134,861.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 283.24s | 176,531.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">164k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,202.3 444.9,62.3 700.0,116.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="202.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,252.8 444.9,203.5 700.0,225.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="252.8" r="4" fill="#198754"/><circle cx="444.9" cy="203.5" r="4" fill="#198754"/><circle cx="700.0" cy="225.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,283.8 444.9,275.9 700.0,255.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="283.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="275.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,207.8 444.9,163.4 700.0,168.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="207.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="168.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.2 444.9,248.4 700.0,198.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.6 444.9,107.5 700.0,168.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#20c997"/><circle cx="444.9" cy="107.5" r="4" fill="#20c997"/><circle cx="700.0" cy="168.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.35s | 96,590.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 50.39s | 198,440.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 314.99s | 158,737.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.72s | 59,797.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.52s | 95,676.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.85s | 79,891.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.84s | 37,253.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 232.60s | 42,991.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 866.19s | 57,723.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,524.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.11s | 124,833.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.51s | 121,504.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.89s | 47,879.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.77s | 62,983.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 503.80s | 99,245.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.12s | 82,521.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 60.42s | 165,499.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 411.45s | 121,520.6 | PASS |

:::

:::

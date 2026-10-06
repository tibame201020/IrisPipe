## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T23:51:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.1 444.9,126.2 700.0,125.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.3 444.9,206.3 700.0,95.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#198754"/><circle cx="444.9" cy="206.3" r="4" fill="#198754"/><circle cx="700.0" cy="95.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.8 444.9,229.3 700.0,225.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,98.0 444.9,62.3 700.0,125.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="98.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.8 444.9,238.2 700.0,224.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.1 444.9,128.4 700.0,110.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#20c997"/><circle cx="444.9" cy="128.4" r="4" fill="#20c997"/><circle cx="700.0" cy="110.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.65s | 103,573.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.88s | 123,646.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 402.50s | 124,222.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.23s | 70,293.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.22s | 76,210.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 351.74s | 142,150.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.30s | 54,632.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 159.74s | 62,600.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 772.07s | 64,760.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.12s | 140,370.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.91s | 161,532.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.97s | 124,077.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.14s | 52,235.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.39s | 57,341.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 763.16s | 65,516.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.56s | 94,688.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.74s | 122,337.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.51s | 132,799.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,78.2 700.0,94.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="94.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.0 444.9,154.6 700.0,214.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#198754"/><circle cx="444.9" cy="154.6" r="4" fill="#198754"/><circle cx="700.0" cy="214.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.0 444.9,251.7 700.0,195.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.4 444.9,156.9 700.0,149.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,249.6 700.0,245.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.1 444.9,152.2 700.0,139.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#20c997"/><circle cx="444.9" cy="152.2" r="4" fill="#20c997"/><circle cx="700.0" cy="139.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.57s | 179,533.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.16s | 169,044.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 315.45s | 158,502.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.44s | 74,410.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 84.22s | 118,738.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 630.03s | 79,361.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.54s | 48,697.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.31s | 54,853.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 545.30s | 91,692.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,060.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.29s | 117,247.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.62s | 122,064.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.12s | 55,193.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.94s | 56,200.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.56s | 58,854.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.46s | 80,269.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.11s | 120,328.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.94s | 128,554.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T23:46:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">223k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.5 444.9,92.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.6 444.9,231.9 700.0,212.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#198754"/><circle cx="444.9" cy="231.9" r="4" fill="#198754"/><circle cx="700.0" cy="212.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.5 444.9,266.5 700.0,252.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.6 444.9,172.6 700.0,161.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="161.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.4 444.9,252.1 700.0,256.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.4 444.9,154.9 700.0,185.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#20c997"/><circle cx="444.9" cy="154.9" r="4" fill="#20c997"/><circle cx="700.0" cy="185.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.64s | 103,702.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.38s | 180,573.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 246.68s | 202,689.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,593.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.47s | 76,645.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 550.92s | 90,757.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,358.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 196.54s | 50,881.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 817.38s | 61,171.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.72s | 102,827.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.88s | 120,657.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.59s | 129,335.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.83s | 48,003.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.29s | 61,617.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 854.45s | 58,517.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.74s | 78,505.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.72s | 133,833.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 449.07s | 111,341.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,140.9 444.9,86.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="140.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.1 444.9,207.9 700.0,220.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#198754"/><circle cx="444.9" cy="207.9" r="4" fill="#198754"/><circle cx="700.0" cy="220.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.0 444.9,250.4 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.9 444.9,63.9 700.0,65.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="65.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.5 444.9,249.2 700.0,246.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.1 444.9,151.8 700.0,144.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#20c997"/><circle cx="444.9" cy="151.8" r="4" fill="#20c997"/><circle cx="700.0" cy="144.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.56s | 132,205.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 58.99s | 169,514.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 269.17s | 185,754.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,675.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.48s | 86,592.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 641.24s | 77,973.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.12s | 70,846.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.51s | 57,632.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 829.28s | 60,293.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.72s | 102,891.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.15s | 184,675.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 272.65s | 183,381.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.70s | 63,694.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.07s | 58,456.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 826.04s | 60,530.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.90s | 77,543.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.14s | 124,781.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.72s | 129,965.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T01:34:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.2 444.9,111.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.8 444.9,178.3 700.0,196.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#198754"/><circle cx="444.9" cy="178.3" r="4" fill="#198754"/><circle cx="700.0" cy="196.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.2 444.9,233.5 700.0,181.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="181.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.4 444.9,114.1 700.0,140.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.3 444.9,238.9 700.0,233.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.5 444.9,143.2 700.0,150.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.5" r="4" fill="#20c997"/><circle cx="444.9" cy="143.2" r="4" fill="#20c997"/><circle cx="700.0" cy="150.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,960.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.47s | 113,032.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 361.90s | 138,159.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.28s | 65,449.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.00s | 79,361.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 713.42s | 70,084.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.60s | 48,548.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 194.45s | 51,427.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 644.86s | 77,536.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.69s | 103,156.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.36s | 111,909.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 508.13s | 98,400.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.77s | 43,917.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 205.49s | 48,664.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 967.53s | 51,677.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.02s | 66,595.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 102.93s | 97,155.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 535.28s | 93,409.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,140.5 700.0,133.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.2 444.9,203.7 700.0,198.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.2" r="4" fill="#198754"/><circle cx="444.9" cy="203.7" r="4" fill="#198754"/><circle cx="700.0" cy="198.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.6 444.9,240.1 700.0,193.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="193.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.7 444.9,111.7 700.0,121.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.7 444.9,173.4 700.0,226.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="173.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.6 444.9,143.9 700.0,125.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.6" r="4" fill="#20c997"/><circle cx="444.9" cy="143.9" r="4" fill="#20c997"/><circle cx="700.0" cy="125.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.11s | 140,627.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.72s | 100,279.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 480.81s | 103,991.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.33s | 61,248.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 147.67s | 67,716.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 712.24s | 70,201.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,202.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.36s | 48,932.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 683.09s | 73,197.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.88s | 91,954.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.83s | 115,166.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 453.89s | 110,157.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.21s | 45,030.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 120.00s | 83,329.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 889.30s | 56,224.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.32s | 69,827.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 101.48s | 98,544.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 463.52s | 107,870.0 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T01:24:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">168k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">224k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.0 444.9,172.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="172.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.9 444.9,215.4 700.0,228.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#198754"/><circle cx="444.9" cy="215.4" r="4" fill="#198754"/><circle cx="700.0" cy="228.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.6 444.9,245.9 700.0,254.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,190.9 444.9,161.2 700.0,166.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="166.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.7 444.9,226.8 700.0,257.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="257.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.6 444.9,134.4 700.0,153.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.6" r="4" fill="#20c997"/><circle cx="444.9" cy="134.4" r="4" fill="#20c997"/><circle cx="700.0" cy="153.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.39s | 106,507.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.32s | 121,477.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 246.07s | 203,190.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.57s | 68,638.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.19s | 89,138.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 632.57s | 79,043.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.34s | 51,701.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.72s | 66,349.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.79s | 59,680.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.31s | 107,376.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.21s | 129,515.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 398.81s | 125,372.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.63s | 79,201.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 124.00s | 80,647.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 861.08s | 58,067.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,431.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.90s | 149,470.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.34s | 135,010.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,181.6 444.9,114.7 700.0,122.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="181.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.4 444.9,209.4 700.0,117.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#198754"/><circle cx="444.9" cy="209.4" r="4" fill="#198754"/><circle cx="700.0" cy="117.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.9 444.9,250.4 700.0,250.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.9 444.9,150.8 700.0,141.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.3 444.9,168.0 700.0,239.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="168.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.2 444.9,62.3 700.0,142.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.2" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="142.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.56s | 94,705.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.53s | 135,997.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 381.02s | 131,226.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.34s | 65,172.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.97s | 77,535.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 371.69s | 134,518.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.16s | 45,124.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.37s | 52,254.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 961.53s | 52,000.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.56s | 116,781.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.92s | 113,741.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 418.47s | 119,484.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.81s | 50,469.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 96.97s | 103,126.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.77s | 58,839.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.18s | 75,849.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 59.38s | 168,392.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 420.13s | 119,009.4 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T01:09:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.4 444.9,72.5 700.0,118.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="118.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.3 444.9,185.6 700.0,201.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#198754"/><circle cx="444.9" cy="185.6" r="4" fill="#198754"/><circle cx="700.0" cy="201.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.4 444.9,246.8 700.0,186.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="186.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.9 444.9,138.9 700.0,133.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,240.1 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.9 444.9,62.3 700.0,100.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.9" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="100.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.33s | 81,122.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.69s | 157,015.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 386.87s | 129,243.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.60s | 60,248.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 111.93s | 89,343.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 626.23s | 79,843.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.68s | 42,235.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.52s | 52,766.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 562.01s | 88,966.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.66s | 103,562.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.26s | 117,284.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 415.12s | 120,447.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.94s | 50,153.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.07s | 56,796.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 867.41s | 57,642.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.38s | 80,788.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 61.30s | 163,142.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 355.70s | 140,567.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.4 444.9,62.3 700.0,64.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="64.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.6 444.9,190.8 700.0,156.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#198754"/><circle cx="444.9" cy="190.8" r="4" fill="#198754"/><circle cx="700.0" cy="156.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.9 444.9,233.7 700.0,161.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="161.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,102.8 444.9,99.3 700.0,89.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="102.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.3 444.9,225.2 700.0,213.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.7 444.9,88.4 700.0,77.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#20c997"/><circle cx="444.9" cy="88.4" r="4" fill="#20c997"/><circle cx="700.0" cy="77.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.92s | 83,885.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.32s | 144,254.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 349.80s | 142,940.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.70s | 63,702.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.14s | 76,256.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 529.77s | 94,380.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.71s | 46,055.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.55s | 53,605.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 544.75s | 91,785.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.14s | 122,835.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.22s | 124,651.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.14s | 129,823.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.76s | 50,602.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.12s | 58,098.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 779.32s | 64,158.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.34s | 81,070.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.67s | 130,422.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.33s | 136,487.1 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T01:18:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,211.0 444.9,129.7 700.0,147.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="129.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.9 444.9,220.7 700.0,127.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.9" r="4" fill="#198754"/><circle cx="444.9" cy="220.7" r="4" fill="#198754"/><circle cx="700.0" cy="127.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.1 444.9,260.9 700.0,258.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.0 444.9,153.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.6 444.9,228.3 700.0,189.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.0 444.9,154.7 700.0,120.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#20c997"/><circle cx="444.9" cy="154.7" r="4" fill="#20c997"/><circle cx="700.0" cy="120.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.60s | 79,352.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.13s | 131,350.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 417.50s | 119,761.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.61s | 60,193.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.73s | 73,138.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 376.22s | 132,899.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.84s | 40,249.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 210.89s | 47,418.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1016.90s | 49,169.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,347.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.96s | 116,333.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 286.59s | 174,464.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.04s | 71,235.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 146.56s | 68,230.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 537.10s | 93,092.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.81s | 78,033.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.69s | 115,358.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.20s | 137,288.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,206.4 444.9,142.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="206.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.3 444.9,168.8 700.0,206.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#198754"/><circle cx="444.9" cy="168.8" r="4" fill="#198754"/><circle cx="700.0" cy="206.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.8 444.9,247.6 700.0,257.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,188.6 444.9,75.1 700.0,148.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="188.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="75.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="148.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.3 444.9,233.9 700.0,248.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.1 444.9,139.6 700.0,120.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#20c997"/><circle cx="444.9" cy="139.6" r="4" fill="#20c997"/><circle cx="700.0" cy="120.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.96s | 83,633.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.07s | 124,892.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 281.93s | 177,347.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,233.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 92.53s | 108,071.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 597.13s | 83,733.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.43s | 37,841.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.01s | 56,815.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 997.23s | 50,138.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.51s | 95,183.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 59.18s | 168,978.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.01s | 121,063.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.04s | 49,900.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.14s | 65,730.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 887.24s | 56,354.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.62s | 103,982.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.71s | 127,048.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.75s | 139,374.0 | PASS |

:::

:::

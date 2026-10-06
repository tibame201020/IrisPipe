## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T01:14:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.3 444.9,107.8 700.0,168.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="107.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="168.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.0 444.9,222.7 700.0,158.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.0" r="4" fill="#198754"/><circle cx="444.9" cy="222.7" r="4" fill="#198754"/><circle cx="700.0" cy="158.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,204.2 444.9,237.4 700.0,247.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="204.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,157.3 700.0,156.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.8 444.9,252.0 700.0,245.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.4 444.9,156.8 700.0,144.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#20c997"/><circle cx="444.9" cy="156.8" r="4" fill="#20c997"/><circle cx="700.0" cy="144.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.29s | 107,689.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.07s | 156,084.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 437.35s | 114,326.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.01s | 66,631.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.57s | 77,179.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 412.41s | 121,238.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.13s | 89,839.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 149.18s | 67,031.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 831.01s | 60,167.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.34s | 187,371.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.91s | 122,082.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.45s | 122,412.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.97s | 71,592.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.29s | 57,048.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 812.04s | 61,573.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,224.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.69s | 122,417.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 381.35s | 131,113.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,75.8 444.9,107.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="75.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="107.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.3 444.9,129.4 700.0,200.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#198754"/><circle cx="444.9" cy="129.4" r="4" fill="#198754"/><circle cx="700.0" cy="200.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.6 444.9,219.0 700.0,189.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.9 444.9,124.3 700.0,132.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.4 444.9,226.6 700.0,166.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="166.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.1 444.9,127.3 700.0,112.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.1" r="4" fill="#20c997"/><circle cx="444.9" cy="127.3" r="4" fill="#20c997"/><circle cx="700.0" cy="112.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.50s | 153,727.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.23s | 134,709.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 309.12s | 161,751.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.20s | 70,427.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.03s | 121,914.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 624.97s | 80,003.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.50s | 46,500.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 145.30s | 68,821.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 579.54s | 86,275.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.36s | 106,837.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.01s | 124,979.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.25s | 120,121.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.92s | 47,808.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 155.59s | 64,272.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 501.54s | 99,692.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.14s | 82,372.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.19s | 123,167.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.01s | 132,270.6 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T01:09:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,186.7 444.9,101.1 700.0,75.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="186.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.7 444.9,120.0 700.0,211.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#198754"/><circle cx="444.9" cy="120.0" r="4" fill="#198754"/><circle cx="700.0" cy="211.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.5 444.9,237.4 700.0,243.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.8 444.9,151.2 700.0,145.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.7 444.9,230.8 700.0,243.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.1 444.9,140.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.1" r="4" fill="#20c997"/><circle cx="444.9" cy="140.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.53s | 94,948.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 66.76s | 149,799.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 300.95s | 166,140.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.41s | 64,880.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 72.63s | 137,678.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 633.85s | 78,882.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.07s | 76,534.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 159.99s | 62,504.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 854.09s | 58,542.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.30s | 120,511.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.94s | 117,723.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.80s | 121,122.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.69s | 50,782.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 149.82s | 66,748.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 853.05s | 58,613.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.93s | 83,808.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.11s | 124,826.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 286.29s | 174,647.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">203k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.5 444.9,74.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.4 444.9,215.7 700.0,221.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.4" r="4" fill="#198754"/><circle cx="444.9" cy="215.7" r="4" fill="#198754"/><circle cx="700.0" cy="221.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.0 444.9,251.3 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.9 444.9,73.2 700.0,158.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.0 444.9,250.0 700.0,234.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.8 444.9,91.9 700.0,146.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.8" r="4" fill="#20c997"/><circle cx="444.9" cy="91.9" r="4" fill="#20c997"/><circle cx="700.0" cy="146.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.38s | 106,587.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 56.72s | 176,314.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 270.94s | 184,545.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,724.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.92s | 80,695.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 650.97s | 76,808.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,846.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.47s | 56,667.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 834.59s | 59,909.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.91s | 100,887.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.45s | 177,135.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.42s | 119,213.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.70s | 50,761.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.78s | 57,544.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 738.03s | 67,748.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.40s | 80,625.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 60.80s | 164,465.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 392.31s | 127,450.9 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-04T22:51:13Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">131k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,110.9 700.0,119.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.3 444.9,165.2 700.0,153.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.3" r="4" fill="#198754"/><circle cx="444.9" cy="165.2" r="4" fill="#198754"/><circle cx="700.0" cy="153.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.6 444.9,218.0 700.0,204.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="204.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.9 444.9,84.1 700.0,66.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="66.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.3 444.9,226.9 700.0,154.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="154.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.8 444.9,115.6 700.0,127.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.8" r="4" fill="#20c997"/><circle cx="444.9" cy="115.6" r="4" fill="#20c997"/><circle cx="700.0" cy="127.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.41s | 118,835.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 102.42s | 97,639.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 532.91s | 93,824.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.42s | 60,890.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 135.12s | 74,005.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 633.04s | 78,983.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.37s | 46,785.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 196.22s | 50,964.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 879.31s | 56,862.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,637.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 91.47s | 109,325.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 427.13s | 117,061.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.34s | 44,764.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 212.40s | 47,081.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 635.61s | 78,664.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.33s | 69,793.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 104.59s | 95,615.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 552.88s | 90,436.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.5 444.9,102.6 700.0,134.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="134.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.9 444.9,212.0 700.0,197.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.9" r="4" fill="#198754"/><circle cx="444.9" cy="212.0" r="4" fill="#198754"/><circle cx="700.0" cy="197.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.5 444.9,232.4 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.4 444.9,121.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,187.4 444.9,236.4 700.0,229.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="187.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.7 444.9,154.8 700.0,118.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.7" r="4" fill="#20c997"/><circle cx="444.9" cy="154.8" r="4" fill="#20c997"/><circle cx="700.0" cy="118.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.73s | 93,231.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.17s | 117,413.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 493.76s | 101,264.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.65s | 68,268.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 160.87s | 62,162.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 717.78s | 69,659.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.99s | 58,851.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 192.92s | 51,834.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 944.72s | 52,926.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.28s | 97,323.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 92.85s | 107,696.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 362.86s | 137,793.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.41s | 74,571.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 200.71s | 49,824.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 936.11s | 53,412.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 16.59s | 60,262.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 109.82s | 91,054.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 457.93s | 109,187.0 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-04T22:38:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">217k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,201.1 444.9,130.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.0 444.9,226.2 700.0,148.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#198754"/><circle cx="444.9" cy="226.2" r="4" fill="#198754"/><circle cx="700.0" cy="148.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.0 444.9,250.0 700.0,248.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.8 444.9,158.7 700.0,163.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="163.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.5 444.9,260.9 700.0,250.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="260.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.0 444.9,164.2 700.0,145.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.0" r="4" fill="#20c997"/><circle cx="444.9" cy="164.2" r="4" fill="#20c997"/><circle cx="700.0" cy="145.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.31s | 97,012.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.46s | 148,233.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 253.07s | 197,576.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.21s | 81,866.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.86s | 78,826.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 369.88s | 135,179.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.91s | 52,890.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 162.46s | 61,552.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 801.88s | 62,353.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.38s | 106,643.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.30s | 127,713.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.89s | 124,412.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.76s | 48,160.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 186.34s | 53,666.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 815.51s | 61,311.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.08s | 110,107.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.84s | 123,702.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.40s | 137,212.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,171.1 444.9,151.0 700.0,132.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="132.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,170.8 444.9,207.4 700.0,199.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="170.8" r="4" fill="#198754"/><circle cx="444.9" cy="207.4" r="4" fill="#198754"/><circle cx="700.0" cy="199.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.1 444.9,258.8 700.0,209.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="209.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.6 444.9,63.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.6 444.9,253.9 700.0,246.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.6 444.9,151.0 700.0,144.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#20c997"/><circle cx="444.9" cy="151.0" r="4" fill="#20c997"/><circle cx="700.0" cy="144.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.97s | 111,470.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.91s | 125,139.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.50s | 137,553.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 8.96s | 111,669.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.25s | 86,766.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 544.41s | 91,842.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.44s | 48,916.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 192.97s | 51,821.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 583.75s | 85,653.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.68s | 130,123.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.24s | 184,352.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 269.61s | 185,455.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.82s | 72,358.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.41s | 55,122.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 832.50s | 60,060.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.82s | 72,374.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.94s | 125,100.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 386.09s | 129,502.8 | PASS |

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
  **最新量測：** `2026-10-04T22:42:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.6 444.9,98.9 700.0,140.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="98.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.8 444.9,210.3 700.0,202.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.8" r="4" fill="#198754"/><circle cx="444.9" cy="210.3" r="4" fill="#198754"/><circle cx="700.0" cy="202.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.7 444.9,249.0 700.0,251.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,182.1 444.9,143.0 700.0,154.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="182.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.4 444.9,203.0 700.0,239.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.1 444.9,62.3 700.0,110.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="110.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.37s | 87,943.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.01s | 142,832.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 425.35s | 117,549.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.75s | 72,743.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.59s | 75,419.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.99s | 80,001.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.19s | 43,114.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 192.09s | 52,060.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 993.64s | 50,320.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.81s | 92,524.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.09s | 116,161.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 456.88s | 109,437.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.78s | 50,563.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 125.23s | 79,853.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 867.05s | 57,666.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.25s | 81,619.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.60s | 165,002.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.90s | 135,908.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.8 444.9,147.4 700.0,153.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="153.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,250.9 444.9,229.6 700.0,225.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#198754"/><circle cx="444.9" cy="229.6" r="4" fill="#198754"/><circle cx="700.0" cy="225.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.5 444.9,266.5 700.0,265.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="265.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,204.4 444.9,163.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="204.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.0 444.9,257.0 700.0,244.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.6 444.9,152.9 700.0,142.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.6" r="4" fill="#20c997"/><circle cx="444.9" cy="152.9" r="4" fill="#20c997"/><circle cx="700.0" cy="142.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.41s | 87,619.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.79s | 130,218.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 395.84s | 126,312.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.12s | 58,401.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.70s | 73,152.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 654.91s | 76,346.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.62s | 40,614.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 210.24s | 47,565.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1034.12s | 48,350.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.03s | 90,629.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.99s | 119,067.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 264.12s | 189,304.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,739.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 184.66s | 54,154.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 799.10s | 62,570.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.33s | 107,169.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.13s | 126,372.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.26s | 133,595.5 | PASS |

:::

:::

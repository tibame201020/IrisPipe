## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-01T23:55:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">165k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">220k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,185.0 444.9,62.3 700.0,171.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="171.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.2 444.9,186.6 700.0,200.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.2" r="4" fill="#198754"/><circle cx="444.9" cy="186.6" r="4" fill="#198754"/><circle cx="700.0" cy="200.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.0 444.9,213.5 700.0,255.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.5 444.9,192.0 700.0,164.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="192.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="164.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.4 444.9,251.4 700.0,254.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.2 444.9,174.6 700.0,157.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.2" r="4" fill="#20c997"/><circle cx="444.9" cy="174.6" r="4" fill="#20c997"/><circle cx="700.0" cy="157.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.11s | 109,757.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 50.11s | 199,576.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 417.73s | 119,694.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.72s | 67,934.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 92.11s | 108,565.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 506.29s | 98,757.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.25s | 51,934.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 112.49s | 88,894.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 862.20s | 57,990.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.97s | 125,502.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 95.55s | 104,654.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.07s | 124,978.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.82s | 48,040.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.48s | 61,169.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 848.65s | 58,917.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.44s | 80,385.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.18s | 117,401.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 385.07s | 129,846.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,102.2 444.9,75.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.6 444.9,180.5 700.0,180.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.6" r="4" fill="#198754"/><circle cx="444.9" cy="180.5" r="4" fill="#198754"/><circle cx="700.0" cy="180.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.1 444.9,227.0 700.0,170.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="227.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="170.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.9 444.9,84.2 700.0,69.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="69.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.4 444.9,217.4 700.0,203.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,141.9 444.9,93.2 700.0,81.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="141.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.2" r="4" fill="#20c997"/><circle cx="700.0" cy="81.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.67s | 115,287.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.95s | 128,292.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.24s | 135,049.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.89s | 71,978.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.72s | 76,496.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 652.91s | 76,580.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.07s | 52,432.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.06s | 53,458.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 612.02s | 81,696.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.89s | 101,061.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.51s | 124,208.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 379.55s | 131,733.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.95s | 52,762.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.75s | 58,222.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 768.70s | 65,044.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,611.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.51s | 119,743.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.30s | 125,533.2 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-01T23:47:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.9 444.9,179.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="179.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.3 444.9,218.7 700.0,213.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#198754"/><circle cx="444.9" cy="218.7" r="4" fill="#198754"/><circle cx="700.0" cy="213.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.2 444.9,214.0 700.0,254.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.1 444.9,169.0 700.0,149.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="169.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.8 444.9,257.9 700.0,244.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.2 444.9,166.8 700.0,151.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#20c997"/><circle cx="444.9" cy="166.8" r="4" fill="#20c997"/><circle cx="700.0" cy="151.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.58s | 116,577.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.97s | 114,979.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 248.63s | 201,098.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.80s | 67,581.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.64s | 85,730.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 557.50s | 89,686.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.43s | 51,472.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 112.04s | 89,253.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 842.29s | 59,361.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,396.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.71s | 122,385.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 366.18s | 136,543.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.06s | 52,471.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.95s | 56,833.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 752.38s | 66,456.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.51s | 86,881.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.62s | 124,043.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.59s | 135,286.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.4 444.9,132.0 700.0,113.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="132.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.8 444.9,207.2 700.0,158.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.8" r="4" fill="#198754"/><circle cx="444.9" cy="207.2" r="4" fill="#198754"/><circle cx="700.0" cy="158.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.0 444.9,238.2 700.0,249.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.9 444.9,102.7 700.0,130.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.2 444.9,235.2 700.0,222.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.9 444.9,62.3 700.0,122.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="122.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.95s | 100,502.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.65s | 122,471.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.54s | 133,853.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.04s | 66,484.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.70s | 77,101.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 470.66s | 106,234.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.22s | 49,460.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.32s | 58,370.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 971.70s | 51,456.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.62s | 94,144.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 71.37s | 140,118.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.71s | 123,544.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.33s | 51,730.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 166.14s | 60,189.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 738.20s | 67,732.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.84s | 77,863.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 60.78s | 164,517.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.57s | 128,347.3 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-30T23:51:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">117k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,127.2 444.9,95.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="127.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,148.8 444.9,156.4 700.0,132.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#198754"/><circle cx="444.9" cy="156.4" r="4" fill="#198754"/><circle cx="700.0" cy="132.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,170.8 444.9,188.1 700.0,188.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="170.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="188.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="188.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.4 444.9,82.8 700.0,132.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,165.0 444.9,207.6 700.0,155.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="165.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="155.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,138.8 444.9,78.0 700.0,71.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="138.8" r="4" fill="#20c997"/><circle cx="444.9" cy="78.0" r="4" fill="#20c997"/><circle cx="700.0" cy="71.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.37s | 80,827.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 107.22s | 93,265.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 471.36s | 106,076.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.81s | 72,421.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.97s | 69,458.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 633.65s | 78,907.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.66s | 63,857.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.02s | 57,137.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.31s | 57,122.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.02s | 99,790.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 101.94s | 98,096.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 636.06s | 78,608.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.12s | 66,128.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 201.85s | 49,541.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 714.00s | 70,027.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.11s | 76,295.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.03s | 99,969.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 487.02s | 102,665.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">123k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,122.6 444.9,159.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.5 444.9,171.0 700.0,120.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.5" r="4" fill="#198754"/><circle cx="444.9" cy="171.0" r="4" fill="#198754"/><circle cx="700.0" cy="120.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.4 444.9,208.2 700.0,159.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="159.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.1 444.9,96.2 700.0,76.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="76.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.0 444.9,199.3 700.0,199.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.1 444.9,106.0 700.0,136.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.1" r="4" fill="#20c997"/><circle cx="444.9" cy="106.0" r="4" fill="#20c997"/><circle cx="700.0" cy="136.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.45s | 87,313.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 138.87s | 72,008.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 445.92s | 112,128.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.61s | 68,455.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 148.29s | 67,435.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 566.81s | 88,212.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.86s | 47,929.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.77s | 52,145.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 691.18s | 72,340.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.11s | 89,992.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 101.85s | 98,180.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 470.56s | 106,257.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.72s | 46,034.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.20s | 55,804.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 896.15s | 55,794.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.67s | 73,147.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 106.20s | 94,163.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 611.05s | 81,826.1 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-01T23:59:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,191.6 444.9,176.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="176.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.0 444.9,227.3 700.0,198.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.0" r="4" fill="#198754"/><circle cx="444.9" cy="227.3" r="4" fill="#198754"/><circle cx="700.0" cy="198.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.4 444.9,251.8 700.0,217.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.7 444.9,91.0 700.0,169.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.5 444.9,230.0 700.0,239.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,242.0 444.9,170.9 700.0,139.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="242.0" r="4" fill="#20c997"/><circle cx="444.9" cy="170.9" r="4" fill="#20c997"/><circle cx="700.0" cy="139.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.76s | 102,417.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.59s | 112,884.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 256.78s | 194,716.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.22s | 75,665.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.07s | 76,882.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 513.77s | 97,319.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.29s | 51,853.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 168.38s | 59,389.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 595.81s | 83,919.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,481.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.41s | 174,176.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 421.80s | 118,539.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.81s | 53,171.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.37s | 74,978.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 736.45s | 67,892.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.06s | 66,379.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.38s | 117,130.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.67s | 139,404.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,108.0 444.9,73.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.9 444.9,179.2 700.0,181.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#198754"/><circle cx="444.9" cy="179.2" r="4" fill="#198754"/><circle cx="700.0" cy="181.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.4 444.9,240.2 700.0,224.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.5 444.9,89.8 700.0,108.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.4 444.9,215.3 700.0,203.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.0 444.9,100.4 700.0,80.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.0" r="4" fill="#20c997"/><circle cx="444.9" cy="100.4" r="4" fill="#20c997"/><circle cx="700.0" cy="80.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.62s | 116,076.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.64s | 133,974.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 358.55s | 139,451.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.15s | 65,989.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.56s | 79,645.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.51s | 78,307.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.88s | 52,980.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.25s | 48,484.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 884.29s | 56,542.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.66s | 103,562.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.77s | 125,368.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 432.27s | 115,667.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.84s | 50,398.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.42s | 61,192.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 743.95s | 67,208.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.86s | 84,345.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.36s | 119,955.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.46s | 130,051.9 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-01T23:49:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.5 444.9,62.3 700.0,92.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.0 444.9,161.2 700.0,157.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.0" r="4" fill="#198754"/><circle cx="444.9" cy="161.2" r="4" fill="#198754"/><circle cx="700.0" cy="157.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.6 444.9,190.5 700.0,238.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="190.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.5 444.9,83.3 700.0,101.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="83.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.9 444.9,231.2 700.0,228.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.9 444.9,131.2 700.0,101.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.9" r="4" fill="#20c997"/><circle cx="444.9" cy="131.2" r="4" fill="#20c997"/><circle cx="700.0" cy="101.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.68s | 93,597.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.10s | 161,022.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 349.84s | 142,922.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.25s | 65,556.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 97.47s | 102,592.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 477.52s | 104,706.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.58s | 56,892.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 117.25s | 85,286.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 873.20s | 57,260.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.62s | 116,009.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 67.28s | 148,621.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 362.30s | 138,006.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.80s | 53,180.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.15s | 61,295.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 795.54s | 62,850.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,281.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.09s | 120,355.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.85s | 137,799.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.7 444.9,97.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.1 444.9,176.9 700.0,166.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#198754"/><circle cx="444.9" cy="176.9" r="4" fill="#198754"/><circle cx="700.0" cy="166.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.3 444.9,247.1 700.0,240.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.7 444.9,127.8 700.0,135.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.4 444.9,239.4 700.0,236.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,230.4 444.9,140.8 700.0,138.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#20c997"/><circle cx="444.9" cy="140.8" r="4" fill="#20c997"/><circle cx="700.0" cy="138.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.60s | 116,346.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 65.92s | 151,701.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 287.26s | 174,059.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.52s | 68,884.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 99.10s | 100,908.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 465.85s | 107,330.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.57s | 46,371.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.33s | 56,074.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 825.63s | 60,559.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.96s | 100,391.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 75.63s | 132,227.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 392.19s | 127,488.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.19s | 49,522.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.92s | 61,005.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 797.01s | 62,734.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.98s | 66,733.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.69s | 123,926.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.92s | 125,339.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-30T23:39:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,130.3 444.9,124.6 700.0,113.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.3 444.9,178.4 700.0,193.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.3" r="4" fill="#198754"/><circle cx="444.9" cy="178.4" r="4" fill="#198754"/><circle cx="700.0" cy="193.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.8 444.9,239.6 700.0,247.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.2 444.9,90.1 700.0,98.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.7 444.9,205.6 700.0,226.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.2 444.9,62.3 700.0,69.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="69.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,672.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 89.55s | 111,665.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 425.36s | 117,548.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.48s | 64,607.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.30s | 83,128.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 664.81s | 75,209.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.64s | 44,169.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 197.42s | 50,654.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1079.43s | 46,320.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.72s | 93,318.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.92s | 130,001.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.37s | 125,827.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.56s | 51,127.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 145.62s | 68,674.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 866.57s | 57,698.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.58s | 79,503.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.07s | 144,778.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.09s | 141,206.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.0 444.9,67.5 700.0,66.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,179.2 444.9,190.3 700.0,180.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#198754"/><circle cx="444.9" cy="190.3" r="4" fill="#198754"/><circle cx="700.0" cy="180.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.4 444.9,244.3 700.0,254.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,104.6 444.9,79.9 700.0,80.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="104.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="79.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.1 444.9,205.0 700.0,214.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.4 444.9,75.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#20c997"/><circle cx="444.9" cy="75.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.12s | 89,936.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.91s | 130,027.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.24s | 130,468.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.20s | 75,740.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 142.16s | 70,344.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 667.54s | 74,902.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.91s | 40,149.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 226.66s | 44,118.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1275.24s | 39,208.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.93s | 112,007.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.64s | 124,004.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 403.65s | 123,870.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 30.77s | 32,503.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.28s | 63,177.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.60s | 58,644.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.42s | 80,495.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.31s | 126,093.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.11s | 132,588.7 | PASS |

:::

:::

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
  **最新量測：** `2026-10-02T00:13:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,79.2 444.9,156.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="79.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="156.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,190.3 700.0,189.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="190.3" r="4" fill="#198754"/><circle cx="700.0" cy="189.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.4 444.9,223.2 700.0,191.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="191.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.4 444.9,106.1 700.0,153.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.7 444.9,243.6 700.0,228.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,145.3 444.9,149.2 700.0,87.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#20c997"/><circle cx="444.9" cy="149.2" r="4" fill="#20c997"/><circle cx="700.0" cy="87.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.88s | 126,871.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 113.02s | 88,483.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 369.64s | 135,266.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.45s | 60,790.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 139.29s | 71,790.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 693.09s | 72,141.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.14s | 58,346.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.32s | 55,457.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 699.85s | 71,444.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.26s | 97,513.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.08s | 113,538.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 554.58s | 90,159.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.84s | 45,787.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 220.69s | 45,311.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 946.06s | 52,850.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.63s | 94,073.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 108.52s | 92,146.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 407.64s | 122,658.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">125k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,135.3 444.9,100.2 700.0,87.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="100.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="87.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.0 444.9,171.6 700.0,159.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.0" r="4" fill="#198754"/><circle cx="444.9" cy="171.6" r="4" fill="#198754"/><circle cx="700.0" cy="159.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.9 444.9,200.4 700.0,211.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="200.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,86.9 444.9,84.9 700.0,71.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="86.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="71.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.6 444.9,216.5 700.0,216.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,137.0 444.9,97.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#20c997"/><circle cx="444.9" cy="97.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.99s | 83,388.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 102.00s | 98,044.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 482.67s | 103,590.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.86s | 63,043.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.57s | 68,227.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 680.63s | 73,461.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.11s | 49,738.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.88s | 56,219.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 968.64s | 51,618.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.65s | 103,626.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.73s | 104,459.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 454.13s | 110,101.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.06s | 49,848.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 202.03s | 49,498.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1013.82s | 49,318.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.09s | 82,706.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.83s | 99,171.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 438.99s | 113,898.8 | PASS |

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
  **最新量測：** `2026-10-02T00:02:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,193.2 444.9,121.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.4 444.9,204.4 700.0,150.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#198754"/><circle cx="444.9" cy="204.4" r="4" fill="#198754"/><circle cx="700.0" cy="150.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.5 444.9,249.1 700.0,231.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,170.4 444.9,109.3 700.0,141.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="170.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="109.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.1 444.9,190.0 700.0,231.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="190.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.2 444.9,102.0 700.0,89.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.2" r="4" fill="#20c997"/><circle cx="444.9" cy="102.0" r="4" fill="#20c997"/><circle cx="700.0" cy="89.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,076.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.10s | 118,900.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 328.78s | 152,076.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.25s | 65,591.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.30s | 72,835.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 485.48s | 102,990.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.77s | 42,073.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 208.67s | 47,923.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 862.28s | 57,985.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.89s | 91,802.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.46s | 125,855.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 462.45s | 108,118.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.46s | 44,529.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 123.71s | 80,836.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 863.69s | 57,891.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.83s | 77,948.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.98s | 129,898.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 365.64s | 136,745.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,203.5 444.9,62.3 700.0,130.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="203.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="130.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.7 444.9,221.3 700.0,220.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#198754"/><circle cx="444.9" cy="221.3" r="4" fill="#198754"/><circle cx="700.0" cy="220.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.9 444.9,259.3 700.0,277.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.8 444.9,150.3 700.0,142.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.0 444.9,253.9 700.0,182.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="182.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,156.7 444.9,189.0 700.0,143.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="156.7" r="4" fill="#20c997"/><circle cx="444.9" cy="189.0" r="4" fill="#20c997"/><circle cx="700.0" cy="143.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.55s | 86,550.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 55.72s | 179,465.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 371.57s | 134,562.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,688.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.70s | 74,793.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 665.83s | 75,094.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.28s | 39,552.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 200.85s | 49,788.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1315.88s | 37,997.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.88s | 112,625.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.28s | 121,530.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 394.10s | 126,872.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.70s | 73,014.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 187.32s | 53,384.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 496.82s | 100,639.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.52s | 117,329.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.06s | 96,094.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 396.45s | 126,117.7 | PASS |

:::

:::

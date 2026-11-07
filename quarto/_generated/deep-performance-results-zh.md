## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-06T00:50:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.1 444.9,85.8 700.0,130.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="130.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.4 444.9,208.4 700.0,188.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#198754"/><circle cx="444.9" cy="208.4" r="4" fill="#198754"/><circle cx="700.0" cy="188.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.5 444.9,246.5 700.0,240.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,138.2 700.0,65.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="65.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.2 444.9,189.7 700.0,219.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="189.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.8 444.9,143.5 700.0,96.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="96.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.91s | 100,928.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.57s | 152,501.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 399.54s | 125,144.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,399.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.09s | 77,465.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 557.29s | 89,720.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,246.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.75s | 54,127.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 866.00s | 57,737.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.99s | 166,889.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.04s | 120,422.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 303.32s | 164,840.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.73s | 48,248.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.46s | 88,917.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 704.65s | 70,956.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.26s | 75,409.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.31s | 117,212.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 342.70s | 145,898.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,70.1 444.9,62.3 700.0,96.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="70.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="96.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.0 444.9,184.6 700.0,181.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.0" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="181.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,196.0 444.9,240.0 700.0,237.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.9 444.9,93.8 700.0,116.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="116.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.3 444.9,231.3 700.0,139.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.7 444.9,90.8 700.0,83.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#20c997"/><circle cx="444.9" cy="90.8" r="4" fill="#20c997"/><circle cx="700.0" cy="83.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.34s | 136,276.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.27s | 140,319.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 408.24s | 122,478.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.72s | 67,930.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.22s | 77,388.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.95s | 78,994.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.98s | 71,530.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.61s | 48,874.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 997.11s | 50,145.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.67s | 103,444.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.59s | 124,086.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 444.86s | 112,394.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.49s | 51,308.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 187.34s | 53,378.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 497.83s | 100,435.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.76s | 85,070.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.58s | 125,656.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 386.89s | 129,235.7 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T00:11:10Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.6 444.9,106.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="106.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.2 444.9,218.7 700.0,220.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#198754"/><circle cx="444.9" cy="218.7" r="4" fill="#198754"/><circle cx="700.0" cy="220.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.8 444.9,248.2 700.0,239.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.7 444.9,153.9 700.0,154.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.6 444.9,233.8 700.0,254.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.3 444.9,95.8 700.0,151.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.3" r="4" fill="#20c997"/><circle cx="444.9" cy="95.8" r="4" fill="#20c997"/><circle cx="700.0" cy="151.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.28s | 88,628.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.91s | 158,954.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 263.46s | 189,779.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,960.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.55s | 80,938.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 628.17s | 79,596.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.70s | 46,091.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.58s | 60,394.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 750.31s | 66,639.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.03s | 99,720.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.37s | 125,985.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.53s | 125,776.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.57s | 51,090.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 141.98s | 70,432.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 887.21s | 56,356.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.05s | 110,436.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.09s | 166,425.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 392.03s | 127,540.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,184.0 444.9,151.7 700.0,122.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,232.6 444.9,218.9 700.0,126.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="232.6" r="4" fill="#198754"/><circle cx="444.9" cy="218.9" r="4" fill="#198754"/><circle cx="700.0" cy="126.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.8 444.9,252.8 700.0,194.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="194.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,82.4 444.9,165.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="82.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="165.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.9 444.9,237.5 700.0,240.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.8 444.9,150.2 700.0,153.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#20c997"/><circle cx="444.9" cy="150.2" r="4" fill="#20c997"/><circle cx="700.0" cy="153.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,583.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.92s | 122,071.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.88s | 141,291.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.67s | 68,175.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.36s | 77,305.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 360.73s | 138,608.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.23s | 49,424.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.73s | 54,726.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 533.57s | 93,709.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.94s | 168,236.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.49s | 113,005.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 275.29s | 181,626.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.51s | 54,036.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 154.08s | 64,901.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 794.81s | 62,907.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.31s | 107,376.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.23s | 123,101.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 413.62s | 120,885.1 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-06T01:08:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">120k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.0 444.9,82.4 700.0,91.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="82.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.3 444.9,161.2 700.0,155.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.3" r="4" fill="#198754"/><circle cx="444.9" cy="161.2" r="4" fill="#198754"/><circle cx="700.0" cy="155.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,207.5 444.9,199.2 700.0,198.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="207.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="199.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,104.0 444.9,82.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="104.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,158.7 444.9,207.7 700.0,185.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="158.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,161.2 444.9,76.2 700.0,70.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="161.2" r="4" fill="#20c997"/><circle cx="444.9" cy="76.2" r="4" fill="#20c997"/><circle cx="700.0" cy="70.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.64s | 79,107.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.10s | 100,912.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 514.65s | 97,152.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.67s | 63,812.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.03s | 69,428.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 698.23s | 71,609.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.64s | 50,921.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.34s | 54,246.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 914.58s | 54,669.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.84s | 92,267.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 99.05s | 100,962.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 458.94s | 108,946.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.20s | 70,412.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.62s | 50,858.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.44s | 59,777.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.40s | 69,420.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.73s | 103,382.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 472.59s | 105,800.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,106.1 444.9,130.8 700.0,97.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="106.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.2 444.9,197.7 700.0,103.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.2" r="4" fill="#198754"/><circle cx="444.9" cy="197.7" r="4" fill="#198754"/><circle cx="700.0" cy="103.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.1 444.9,191.7 700.0,238.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="191.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.0 444.9,62.3 700.0,113.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="113.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,214.0 444.9,237.6 700.0,230.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="214.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.0 444.9,171.1 700.0,135.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.0" r="4" fill="#20c997"/><circle cx="444.9" cy="171.1" r="4" fill="#20c997"/><circle cx="700.0" cy="135.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.79s | 113,830.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 98.47s | 101,556.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 423.02s | 118,198.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.11s | 62,061.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.50s | 68,261.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 434.22s | 115,150.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.89s | 45,683.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 140.34s | 71,256.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1041.84s | 47,992.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.96s | 100,431.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.74s | 135,615.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 453.79s | 110,182.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.62s | 60,179.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 206.55s | 48,414.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 958.29s | 52,176.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,621.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 122.70s | 81,496.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 503.20s | 99,364.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-06T00:53:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.8 444.9,62.3 700.0,113.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.6 444.9,178.0 700.0,134.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.6" r="4" fill="#198754"/><circle cx="444.9" cy="178.0" r="4" fill="#198754"/><circle cx="700.0" cy="134.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.5 444.9,232.4 700.0,233.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,137.7 444.9,116.2 700.0,111.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="137.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="116.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.5 444.9,215.8 700.0,181.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="181.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,142.6 444.9,126.8 700.0,95.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="142.6" r="4" fill="#20c997"/><circle cx="444.9" cy="126.8" r="4" fill="#20c997"/><circle cx="700.0" cy="95.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.92s | 91,600.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.74s | 152,116.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.97s | 123,465.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,019.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.19s | 87,569.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 446.59s | 111,959.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.39s | 51,575.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.83s | 57,198.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 879.79s | 56,831.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.09s | 110,071.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.93s | 122,050.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.41s | 124,873.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.33s | 75,030.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.44s | 66,471.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 583.19s | 85,734.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.32s | 107,319.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.12s | 116,113.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.96s | 133,347.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,142.7 444.9,139.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.7 444.9,170.6 700.0,193.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.7" r="4" fill="#198754"/><circle cx="444.9" cy="170.6" r="4" fill="#198754"/><circle cx="700.0" cy="193.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.8 444.9,233.5 700.0,246.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.8 444.9,94.4 700.0,123.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,224.1 700.0,238.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.6 444.9,117.3 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#20c997"/><circle cx="444.9" cy="117.3" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.79s | 113,726.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.55s | 115,545.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 310.00s | 161,288.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.17s | 70,556.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.88s | 97,204.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 596.41s | 83,834.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.79s | 43,873.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 166.60s | 60,022.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 951.58s | 52,544.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.08s | 110,144.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 70.27s | 142,310.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.87s | 125,042.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.73s | 50,674.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.53s | 65,561.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 872.72s | 57,292.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.60s | 73,556.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.68s | 128,734.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 395.13s | 126,541.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-06T00:49:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.7 444.9,62.3 700.0,105.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.9 444.9,163.0 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.9" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.4 444.9,174.9 700.0,234.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="174.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.9 444.9,108.4 700.0,125.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,231.7 700.0,143.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="143.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.5 444.9,102.1 700.0,93.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.5" r="4" fill="#20c997"/><circle cx="444.9" cy="102.1" r="4" fill="#20c997"/><circle cx="700.0" cy="93.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,477.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.90s | 147,273.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.59s | 123,888.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.09s | 62,135.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.66s | 92,881.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 585.50s | 85,397.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.45s | 48,904.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 115.65s | 86,468.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 920.08s | 54,342.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.17s | 98,309.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.74s | 122,342.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 442.80s | 112,917.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.49s | 54,074.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.32s | 55,765.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 483.85s | 103,338.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.46s | 74,266.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.51s | 125,767.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.25s | 130,461.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,197.9 444.9,136.5 700.0,141.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.7 444.9,208.7 700.0,226.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#198754"/><circle cx="444.9" cy="208.7" r="4" fill="#198754"/><circle cx="700.0" cy="226.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.9 444.9,254.2 700.0,252.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.5 444.9,62.3 700.0,158.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.5 444.9,251.2 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.0 444.9,156.8 700.0,172.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.0" r="4" fill="#20c997"/><circle cx="444.9" cy="156.8" r="4" fill="#20c997"/><circle cx="700.0" cy="172.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.54s | 94,867.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.81s | 137,343.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.68s | 133,803.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.01s | 62,464.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.46s | 87,363.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 668.66s | 74,776.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.05s | 49,875.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.88s | 55,902.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.24s | 57,127.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,654.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.00s | 188,665.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.88s | 121,986.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.80s | 48,067.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.40s | 58,003.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 799.50s | 62,539.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.51s | 74,035.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.14s | 123,243.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 443.87s | 112,646.9 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-06T00:53:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,212.7 444.9,179.4 700.0,171.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="179.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="171.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.9 444.9,221.9 700.0,133.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#198754"/><circle cx="444.9" cy="221.9" r="4" fill="#198754"/><circle cx="700.0" cy="133.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.0 444.9,265.6 700.0,260.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="265.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.5 444.9,62.3 700.0,115.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="115.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.9 444.9,222.9 700.0,197.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="197.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.9 444.9,143.5 700.0,124.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="124.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.46s | 80,269.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 97.93s | 102,109.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 467.35s | 106,987.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.96s | 91,274.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.75s | 74,212.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 378.82s | 131,987.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.42s | 39,343.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 219.63s | 45,531.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1028.71s | 48,604.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.92s | 91,541.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.89s | 178,935.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 346.54s | 144,285.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.07s | 45,316.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 136.01s | 73,525.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 555.96s | 89,935.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,534.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.61s | 125,620.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.74s | 138,222.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.7 444.9,96.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.8 444.9,197.9 700.0,197.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#198754"/><circle cx="444.9" cy="197.9" r="4" fill="#198754"/><circle cx="700.0" cy="197.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.3 444.9,243.9 700.0,192.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="192.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.7 444.9,154.8 700.0,92.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.0 444.9,230.0 700.0,217.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.5 444.9,105.9 700.0,96.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#20c997"/><circle cx="444.9" cy="105.9" r="4" fill="#20c997"/><circle cx="700.0" cy="96.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.11s | 89,992.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.52s | 127,359.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 342.93s | 145,804.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.83s | 63,187.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.40s | 73,315.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 681.73s | 73,342.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.72s | 40,459.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 205.24s | 48,722.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 656.16s | 76,201.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.37s | 96,413.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 103.79s | 96,351.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.20s | 129,803.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.73s | 67,879.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.14s | 56,135.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 795.42s | 62,859.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.80s | 72,463.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.65s | 122,475.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 392.73s | 127,314.9 | PASS |

:::

:::

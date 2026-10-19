## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:31:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.3 444.9,64.5 700.0,83.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="83.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,128.4 444.9,146.9 700.0,130.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="128.4" r="4" fill="#198754"/><circle cx="444.9" cy="146.9" r="4" fill="#198754"/><circle cx="700.0" cy="130.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.0 444.9,204.3 700.0,141.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="141.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.4 444.9,76.9 700.0,95.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="76.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="95.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,170.9 444.9,204.5 700.0,216.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="204.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,141.6 444.9,78.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="141.6" r="4" fill="#20c997"/><circle cx="444.9" cy="78.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,360.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.37s | 130,943.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.30s | 121,565.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.00s | 100,040.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 109.84s | 91,038.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 505.59s | 98,894.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.13s | 52,276.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 158.10s | 63,251.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 534.54s | 93,538.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.10s | 99,029.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,973.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 431.69s | 115,824.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.59s | 79,447.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 158.26s | 63,186.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 867.76s | 57,619.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.68s | 93,650.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.45s | 124,293.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.70s | 132,030.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">176k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,128.0 444.9,112.3 700.0,81.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="81.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.8 444.9,140.2 700.0,201.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#198754"/><circle cx="444.9" cy="140.2" r="4" fill="#198754"/><circle cx="700.0" cy="201.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.4 444.9,239.3 700.0,219.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,173.1 444.9,62.3 700.0,123.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="173.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.0 444.9,170.0 700.0,159.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="170.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.1 444.9,146.7 700.0,111.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.1" r="4" fill="#20c997"/><circle cx="444.9" cy="146.7" r="4" fill="#20c997"/><circle cx="700.0" cy="111.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.22s | 121,580.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.45s | 130,806.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 335.86s | 148,872.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.65s | 68,273.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 87.39s | 114,424.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.17s | 78,718.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.65s | 50,888.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.86s | 56,224.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 734.37s | 68,085.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.51s | 95,120.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 62.43s | 160,189.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 402.76s | 124,143.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.11s | 55,215.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 103.17s | 96,923.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 485.55s | 102,975.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.08s | 82,767.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 90.41s | 110,604.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 381.51s | 131,058.9 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:28:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.0 444.9,62.3 700.0,154.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.4 444.9,196.4 700.0,212.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#198754"/><circle cx="444.9" cy="196.4" r="4" fill="#198754"/><circle cx="700.0" cy="212.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.8 444.9,201.9 700.0,190.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="201.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="190.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,168.3 444.9,65.1 700.0,131.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="168.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="65.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.5 444.9,238.7 700.0,242.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.8 444.9,125.0 700.0,70.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.8" r="4" fill="#20c997"/><circle cx="444.9" cy="125.0" r="4" fill="#20c997"/><circle cx="700.0" cy="70.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.69s | 93,536.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 57.22s | 174,770.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 432.46s | 115,617.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.50s | 68,975.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.57s | 88,835.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 635.86s | 78,633.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.46s | 51,390.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 117.22s | 85,306.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 540.76s | 92,462.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.36s | 106,837.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.82s | 172,941.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.25s | 130,463.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.24s | 54,812.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.09s | 61,694.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 841.87s | 59,391.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.85s | 112,943.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.29s | 134,602.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 295.47s | 169,221.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.7 444.9,114.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.1 444.9,187.4 700.0,202.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.1" r="4" fill="#198754"/><circle cx="444.9" cy="187.4" r="4" fill="#198754"/><circle cx="700.0" cy="202.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.3 444.9,239.1 700.0,235.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.1 444.9,148.6 700.0,162.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="162.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.8 444.9,200.0 700.0,237.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="200.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.3 444.9,143.5 700.0,145.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.3" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="145.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.23s | 97,770.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.94s | 133,434.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 302.44s | 165,324.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.79s | 92,678.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 111.78s | 89,459.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 621.87s | 80,403.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.70s | 50,758.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 172.06s | 58,119.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 827.11s | 60,451.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.65s | 93,870.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.52s | 112,972.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 477.73s | 104,661.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.36s | 51,642.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 122.17s | 81,852.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 841.71s | 59,402.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.26s | 97,437.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.16s | 116,067.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 434.77s | 115,003.9 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-18T22:10:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.0 444.9,144.6 700.0,149.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="144.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="149.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.0 444.9,202.3 700.0,202.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#198754"/><circle cx="444.9" cy="202.3" r="4" fill="#198754"/><circle cx="700.0" cy="202.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.4 444.9,219.1 700.0,226.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.3 444.9,62.3 700.0,124.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.2 444.9,237.9 700.0,194.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.1 444.9,135.1 700.0,121.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#20c997"/><circle cx="444.9" cy="135.1" r="4" fill="#20c997"/><circle cx="700.0" cy="121.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.57s | 79,579.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.59s | 96,538.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 531.81s | 94,019.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.17s | 61,858.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 148.64s | 67,277.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 743.97s | 67,206.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.21s | 49,470.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.14s | 58,774.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 906.00s | 55,187.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.18s | 98,212.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.33s | 138,262.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 467.31s | 106,994.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,398.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 203.05s | 49,249.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 703.20s | 71,103.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.82s | 84,588.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.66s | 101,358.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 461.34s | 108,379.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.4 444.9,113.8 700.0,111.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="111.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.6 444.9,187.6 700.0,110.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.6" r="4" fill="#198754"/><circle cx="444.9" cy="187.6" r="4" fill="#198754"/><circle cx="700.0" cy="110.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,183.1 444.9,228.3 700.0,217.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.8 444.9,101.5 700.0,101.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.9 444.9,166.5 700.0,203.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="166.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,130.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="130.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,302.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.13s | 104,026.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 475.79s | 105,089.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.70s | 59,894.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 144.23s | 69,334.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 472.52s | 105,815.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.00s | 71,408.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 199.40s | 50,149.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 908.19s | 55,054.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.57s | 94,625.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 91.09s | 109,776.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 454.93s | 109,908.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.42s | 48,971.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 126.20s | 79,238.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 809.72s | 61,749.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,603.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.97s | 96,182.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.89s | 128,242.6 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:36:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.4 444.9,62.3 700.0,85.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,143.9 444.9,185.1 700.0,179.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="143.9" r="4" fill="#198754"/><circle cx="444.9" cy="185.1" r="4" fill="#198754"/><circle cx="700.0" cy="179.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.2 444.9,215.6 700.0,222.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.6 444.9,94.4 700.0,88.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="88.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.1 444.9,229.0 700.0,157.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="157.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.8 444.9,87.5 700.0,76.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#20c997"/><circle cx="444.9" cy="87.5" r="4" fill="#20c997"/><circle cx="700.0" cy="76.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.44s | 95,785.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.67s | 141,500.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 386.71s | 129,295.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.08s | 99,167.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.60s | 77,762.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 617.76s | 80,938.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.31s | 51,789.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 161.47s | 61,929.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 858.08s | 58,269.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.07s | 110,217.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.12s | 124,815.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 391.56s | 127,693.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.07s | 58,599.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.90s | 54,974.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 541.30s | 92,369.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,626.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.87s | 128,419.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.19s | 133,978.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,149.8 444.9,152.4 700.0,141.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.2 444.9,216.7 700.0,228.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.2" r="4" fill="#198754"/><circle cx="444.9" cy="216.7" r="4" fill="#198754"/><circle cx="700.0" cy="228.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.4 444.9,263.8 700.0,251.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,112.0 444.9,174.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="112.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="174.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.4 444.9,249.8 700.0,253.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.3 444.9,173.4 700.0,154.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#20c997"/><circle cx="444.9" cy="173.4" r="4" fill="#20c997"/><circle cx="700.0" cy="154.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.44s | 134,372.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.46s | 132,517.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.27s | 140,739.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.35s | 65,146.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.53s | 85,815.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.16s | 77,022.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.23s | 54,851.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.71s | 51,622.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 829.15s | 60,302.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.18s | 161,786.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.71s | 116,669.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 252.69s | 197,874.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.24s | 81,699.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.80s | 61,803.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 850.03s | 58,821.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.06s | 90,448.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.32s | 117,211.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.34s | 130,773.3 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:23:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,202.6 444.9,149.1 700.0,137.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="202.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.0 444.9,202.4 700.0,130.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#198754"/><circle cx="444.9" cy="202.4" r="4" fill="#198754"/><circle cx="700.0" cy="130.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.4 444.9,205.6 700.0,242.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="205.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,155.2 700.0,143.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,204.6 444.9,250.4 700.0,162.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="204.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.2 444.9,134.6 700.0,105.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.2" r="4" fill="#20c997"/><circle cx="444.9" cy="134.6" r="4" fill="#20c997"/><circle cx="700.0" cy="105.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,276.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.69s | 123,931.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 379.86s | 131,626.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.00s | 100,000.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 113.15s | 88,375.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 367.46s | 136,068.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.55s | 46,410.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 115.88s | 86,298.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 808.44s | 61,847.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.50s | 181,818.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.41s | 119,894.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 391.30s | 127,779.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.50s | 86,933.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.30s | 56,401.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 433.75s | 115,274.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,549.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.84s | 133,614.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 326.31s | 153,230.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">175k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">233k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.5 444.9,62.3 700.0,138.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="138.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,250.5 444.9,233.4 700.0,235.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="250.5" r="4" fill="#198754"/><circle cx="444.9" cy="233.4" r="4" fill="#198754"/><circle cx="700.0" cy="235.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.1 444.9,259.3 700.0,225.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,246.6 444.9,162.8 700.0,173.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="246.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="173.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.0 444.9,259.9 700.0,258.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="259.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,249.3 444.9,167.1 700.0,164.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#20c997"/><circle cx="444.9" cy="167.1" r="4" fill="#20c997"/><circle cx="700.0" cy="164.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.85s | 113,032.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 47.19s | 211,931.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 327.61s | 152,622.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.23s | 65,647.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.62s | 78,975.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.29s | 77,007.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.04s | 43,410.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.96s | 58,837.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 584.81s | 85,497.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 14.56s | 68,686.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 74.72s | 133,829.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 398.92s | 125,338.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.65s | 53,622.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.38s | 58,350.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 841.62s | 59,408.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.01s | 66,604.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.65s | 130,456.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.34s | 132,157.7 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:42:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,217.2 444.9,146.1 700.0,145.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="145.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.7 444.9,205.2 700.0,210.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="210.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.9 444.9,223.3 700.0,261.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,98.5 444.9,140.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="98.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.5 444.9,246.7 700.0,240.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.6 444.9,134.5 700.0,117.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#20c997"/><circle cx="444.9" cy="134.5" r="4" fill="#20c997"/><circle cx="700.0" cy="117.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 13.78s | 72,590.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.88s | 116,441.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 428.34s | 116,730.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.02s | 62,418.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.97s | 80,017.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 653.17s | 76,550.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.88s | 59,227.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 145.27s | 68,838.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1101.75s | 45,382.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.86s | 145,751.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.47s | 119,796.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 297.47s | 168,082.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.54s | 57,025.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.72s | 54,429.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 860.81s | 58,084.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.52s | 105,042.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.95s | 123,539.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.92s | 134,075.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.0 444.9,62.3 700.0,163.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="163.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.4 444.9,232.5 700.0,155.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#198754"/><circle cx="444.9" cy="232.5" r="4" fill="#198754"/><circle cx="700.0" cy="155.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.1 444.9,271.3 700.0,263.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.8 444.9,161.8 700.0,120.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.6 444.9,260.1 700.0,258.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="260.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.2 444.9,141.2 700.0,171.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#20c997"/><circle cx="444.9" cy="141.2" r="4" fill="#20c997"/><circle cx="700.0" cy="171.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.85s | 92,174.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 51.72s | 193,345.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 410.45s | 121,816.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.11s | 62,088.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.63s | 72,658.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 391.85s | 127,598.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.68s | 38,939.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 221.29s | 45,190.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 987.89s | 50,612.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.94s | 144,030.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.45s | 122,777.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 328.24s | 152,325.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.52s | 60,540.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 188.24s | 53,125.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 919.82s | 54,358.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.13s | 89,871.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 72.80s | 137,357.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 431.10s | 115,981.3 | PASS |

:::

:::

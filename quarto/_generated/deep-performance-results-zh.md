## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-03T22:33:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.6 444.9,128.8 700.0,84.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="128.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.0 444.9,211.8 700.0,180.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.0" r="4" fill="#198754"/><circle cx="444.9" cy="211.8" r="4" fill="#198754"/><circle cx="700.0" cy="180.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,202.0 444.9,254.0 700.0,241.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="202.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.9 444.9,133.5 700.0,105.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="105.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,212.0 444.9,246.4 700.0,247.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="212.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,177.3 444.9,135.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="177.3" r="4" fill="#20c997"/><circle cx="444.9" cy="135.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,890.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.05s | 131,494.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 313.21s | 159,636.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.39s | 69,497.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.32s | 78,541.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 508.69s | 98,290.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.79s | 84,824.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.65s | 51,639.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.32s | 59,714.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.76s | 114,207.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.85s | 128,445.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 341.19s | 146,547.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.75s | 78,437.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.93s | 56,518.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 891.95s | 56,056.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.95s | 100,542.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.63s | 127,179.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 287.55s | 173,885.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">175k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,129.6 444.9,117.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="117.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.7 444.9,182.1 700.0,199.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.7" r="4" fill="#198754"/><circle cx="444.9" cy="182.1" r="4" fill="#198754"/><circle cx="700.0" cy="199.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.8 444.9,233.5 700.0,242.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.2 444.9,123.5 700.0,129.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="129.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.0 444.9,221.3 700.0,233.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.6 444.9,128.5 700.0,130.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.6" r="4" fill="#20c997"/><circle cx="444.9" cy="128.5" r="4" fill="#20c997"/><circle cx="700.0" cy="130.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.36s | 119,645.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.76s | 126,961.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 314.75s | 158,857.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.76s | 67,769.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 112.27s | 89,069.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.03s | 79,109.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.39s | 49,031.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.14s | 59,124.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 929.36s | 53,800.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.14s | 109,373.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.17s | 123,202.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.73s | 119,693.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.19s | 49,524.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 150.96s | 66,241.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 847.20s | 59,017.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.12s | 89,920.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.14s | 120,284.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 420.46s | 118,917.7 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-03T22:28:01Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,189.9 444.9,160.3 700.0,89.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="160.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.8 444.9,203.3 700.0,160.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#198754"/><circle cx="444.9" cy="203.3" r="4" fill="#198754"/><circle cx="700.0" cy="160.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.9 444.9,246.9 700.0,223.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="223.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.8 444.9,156.0 700.0,76.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="76.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.3 444.9,246.9 700.0,243.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.8 444.9,62.3 700.0,123.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.8" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="123.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.66s | 93,773.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.54s | 112,944.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 315.23s | 158,614.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.70s | 68,022.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.47s | 85,130.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 443.18s | 112,822.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,906.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.52s | 56,974.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 694.49s | 71,994.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.43s | 134,607.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.42s | 115,716.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 299.04s | 167,200.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.17s | 52,170.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.54s | 56,967.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 842.18s | 59,369.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.91s | 71,880.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 56.72s | 176,295.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 365.23s | 136,900.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.4 444.9,72.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.6 444.9,179.7 700.0,175.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.6" r="4" fill="#198754"/><circle cx="444.9" cy="179.7" r="4" fill="#198754"/><circle cx="700.0" cy="175.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,179.9 444.9,219.2 700.0,215.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="179.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,93.0 444.9,85.7 700.0,77.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="93.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.6 444.9,192.8 700.0,160.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="160.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.8 444.9,88.4 700.0,130.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.8" r="4" fill="#20c997"/><circle cx="444.9" cy="88.4" r="4" fill="#20c997"/><circle cx="700.0" cy="130.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.19s | 98,164.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.07s | 129,745.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.88s | 134,815.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.83s | 67,430.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.26s | 76,768.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.37s | 78,694.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.04s | 76,663.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.73s | 57,231.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 843.45s | 59,280.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.36s | 119,617.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.16s | 123,216.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 392.16s | 127,499.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.56s | 48,642.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 142.31s | 70,271.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 580.90s | 86,073.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.91s | 62,853.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.03s | 121,906.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 494.66s | 101,079.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-03T22:49:06Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,122.6 444.9,158.9 700.0,144.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="158.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.9 444.9,202.7 700.0,195.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.9" r="4" fill="#198754"/><circle cx="444.9" cy="202.7" r="4" fill="#198754"/><circle cx="700.0" cy="195.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,207.2 444.9,229.0 700.0,210.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="207.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.1 444.9,62.3 700.0,111.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.2 444.9,236.5 700.0,207.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.1 444.9,139.8 700.0,138.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.1" r="4" fill="#20c997"/><circle cx="444.9" cy="139.8" r="4" fill="#20c997"/><circle cx="700.0" cy="138.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.22s | 108,401.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 111.31s | 89,840.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 513.95s | 97,286.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.83s | 67,430.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 148.11s | 67,515.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 701.67s | 71,258.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.33s | 65,227.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.80s | 54,112.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 785.43s | 63,659.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.27s | 97,418.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 71.85s | 139,175.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 438.46s | 114,034.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.57s | 46,352.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 198.91s | 50,274.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 766.57s | 65,226.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.34s | 74,945.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.38s | 99,617.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 497.25s | 100,552.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.4 444.9,146.0 700.0,154.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.8 444.9,142.7 700.0,204.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.8" r="4" fill="#198754"/><circle cx="444.9" cy="142.7" r="4" fill="#198754"/><circle cx="700.0" cy="204.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.3 444.9,229.0 700.0,182.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="182.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,139.0 700.0,135.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,201.4 444.9,184.3 700.0,237.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="201.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="184.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,226.2 444.9,116.3 700.0,102.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="226.2" r="4" fill="#20c997"/><circle cx="444.9" cy="116.3" r="4" fill="#20c997"/><circle cx="700.0" cy="102.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.87s | 91,979.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.28s | 100,720.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 520.09s | 96,137.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.47s | 74,211.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 97.59s | 102,464.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 717.10s | 69,725.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.81s | 38,749.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.00s | 56,498.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 615.72s | 81,206.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.88s | 145,348.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.74s | 104,453.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 470.23s | 106,331.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.04s | 71,199.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 124.48s | 80,336.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 964.64s | 51,832.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 17.25s | 57,974.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.80s | 116,552.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 403.42s | 123,940.0 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-03T22:38:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,180.8 444.9,142.4 700.0,85.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.7 444.9,197.0 700.0,150.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.7" r="4" fill="#198754"/><circle cx="444.9" cy="197.0" r="4" fill="#198754"/><circle cx="700.0" cy="150.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.9 444.9,238.2 700.0,235.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,147.2 700.0,130.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.7 444.9,231.7 700.0,217.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.4 444.9,104.5 700.0,126.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.4" r="4" fill="#20c997"/><circle cx="444.9" cy="104.5" r="4" fill="#20c997"/><circle cx="700.0" cy="126.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.56s | 94,679.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.56s | 118,255.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 326.94s | 152,933.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.22s | 75,665.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.06s | 84,702.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 442.03s | 113,114.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.08s | 49,793.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 168.30s | 59,418.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 815.10s | 61,341.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.97s | 167,420.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.74s | 115,289.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 398.51s | 125,467.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.40s | 60,983.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.75s | 63,393.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 694.01s | 72,045.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.28s | 81,413.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.67s | 141,508.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.94s | 127,898.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,104.4 444.9,62.3 700.0,75.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="104.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,183.9 444.9,179.4 700.0,172.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="183.9" r="4" fill="#198754"/><circle cx="444.9" cy="179.4" r="4" fill="#198754"/><circle cx="700.0" cy="172.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.3 444.9,166.5 700.0,220.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="166.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.2 444.9,101.3 700.0,103.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.2 444.9,210.8 700.0,207.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.8 444.9,150.3 700.0,64.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#20c997"/><circle cx="444.9" cy="150.3" r="4" fill="#20c997"/><circle cx="700.0" cy="64.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.69s | 115,074.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.48s | 136,098.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 385.87s | 129,577.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.26s | 75,426.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.75s | 77,669.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 617.06s | 81,029.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.16s | 47,252.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 118.94s | 84,072.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.64s | 57,100.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 13.94s | 71,741.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.75s | 116,618.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 432.75s | 115,539.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,802.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.32s | 61,988.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 785.80s | 63,629.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.43s | 80,424.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 108.50s | 92,170.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 370.42s | 134,983.7 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-03T22:30:27Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.5 444.9,62.3 700.0,133.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,169.9 444.9,204.7 700.0,201.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="169.9" r="4" fill="#198754"/><circle cx="444.9" cy="204.7" r="4" fill="#198754"/><circle cx="700.0" cy="201.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,209.9 444.9,234.3 700.0,243.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="209.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,173.0 444.9,96.9 700.0,127.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.3 444.9,249.0 700.0,185.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,142.9 444.9,125.4 700.0,106.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="142.9" r="4" fill="#20c997"/><circle cx="444.9" cy="125.4" r="4" fill="#20c997"/><circle cx="700.0" cy="106.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.56s | 116,863.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.15s | 169,064.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.29s | 124,910.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,375.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.77s | 80,794.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 605.32s | 82,600.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.89s | 77,555.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 160.13s | 62,450.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 885.84s | 56,443.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.96s | 100,441.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 67.76s | 147,581.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.89s | 128,901.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.99s | 50,015.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 187.62s | 53,300.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 538.21s | 92,901.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.40s | 119,104.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.97s | 129,920.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 353.12s | 141,594.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">175k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">233k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,206.8 444.9,62.3 700.0,153.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="153.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,256.0 444.9,235.4 700.0,230.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#198754"/><circle cx="444.9" cy="235.4" r="4" fill="#198754"/><circle cx="700.0" cy="230.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.2 444.9,269.8 700.0,265.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="265.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,206.1 444.9,146.1 700.0,87.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.0 444.9,228.2 700.0,258.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.5 444.9,166.3 700.0,191.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.5" r="4" fill="#20c997"/><circle cx="444.9" cy="166.3" r="4" fill="#20c997"/><circle cx="700.0" cy="191.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,581.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 47.21s | 211,824.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.21s | 140,759.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.30s | 61,353.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.28s | 77,349.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 618.33s | 80,862.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.07s | 43,342.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 197.35s | 50,670.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 921.86s | 54,238.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.99s | 100,080.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 68.17s | 146,702.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 260.57s | 191,888.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.15s | 70,691.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 120.61s | 82,914.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 836.33s | 59,784.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,967.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.34s | 130,994.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 449.95s | 111,123.7 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-03T22:36:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">203k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,144.0 444.9,156.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="156.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.3 444.9,222.7 700.0,158.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.3" r="4" fill="#198754"/><circle cx="444.9" cy="222.7" r="4" fill="#198754"/><circle cx="700.0" cy="158.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.5 444.9,267.6 700.0,259.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,200.8 444.9,161.3 700.0,192.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="200.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="192.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,221.8 700.0,250.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.0 444.9,107.2 700.0,142.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#20c997"/><circle cx="444.9" cy="107.2" r="4" fill="#20c997"/><circle cx="700.0" cy="142.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.72s | 129,550.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.72s | 120,891.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 270.29s | 184,989.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.25s | 61,538.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.29s | 76,165.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 416.95s | 119,918.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.59s | 64,127.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.76s | 45,711.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 975.79s | 51,240.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.98s | 91,058.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.88s | 117,820.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 516.35s | 96,833.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.59s | 56,837.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 130.18s | 76,816.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 873.69s | 57,228.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.08s | 82,760.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 64.72s | 154,502.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.58s | 130,349.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.1 444.9,62.3 700.0,138.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="138.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.5 444.9,224.3 700.0,214.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.5" r="4" fill="#198754"/><circle cx="444.9" cy="224.3" r="4" fill="#198754"/><circle cx="700.0" cy="214.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.8 444.9,261.8 700.0,261.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,172.6 444.9,159.7 700.0,150.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="172.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.8 444.9,178.3 700.0,227.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="178.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,219.3 444.9,150.4 700.0,130.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#20c997"/><circle cx="444.9" cy="150.4" r="4" fill="#20c997"/><circle cx="700.0" cy="130.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.78s | 84,904.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 55.23s | 181,064.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.82s | 130,270.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.41s | 57,448.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.05s | 73,501.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 622.42s | 80,332.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.20s | 41,324.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 205.75s | 48,602.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1027.34s | 48,669.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.27s | 107,840.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.90s | 116,409.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.16s | 122,201.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.10s | 45,250.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 96.11s | 104,048.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 702.02s | 71,222.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.02s | 76,799.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.61s | 122,541.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 367.42s | 136,082.6 | PASS |

:::

:::

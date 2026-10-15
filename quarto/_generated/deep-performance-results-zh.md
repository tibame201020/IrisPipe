## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T22:54:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.4 444.9,138.4 700.0,131.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.7 444.9,197.9 700.0,190.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.7" r="4" fill="#198754"/><circle cx="444.9" cy="197.9" r="4" fill="#198754"/><circle cx="700.0" cy="190.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.0 444.9,238.9 700.0,201.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.9 444.9,62.3 700.0,123.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.0 444.9,237.2 700.0,229.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,142.8 444.9,121.1 700.0,124.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="142.8" r="4" fill="#20c997"/><circle cx="444.9" cy="121.1" r="4" fill="#20c997"/><circle cx="700.0" cy="124.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.35s | 119,760.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.92s | 119,166.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.39s | 123,643.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.05s | 90,505.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.33s | 83,105.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 570.98s | 87,568.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.75s | 53,330.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.73s | 58,232.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 619.95s | 80,651.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.88s | 101,265.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.49s | 165,308.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.57s | 128,347.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.89s | 77,567.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 168.72s | 59,271.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 778.01s | 64,266.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.59s | 116,482.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.13s | 129,647.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.92s | 127,903.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.5 444.9,138.8 700.0,65.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.0 444.9,214.5 700.0,213.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#198754"/><circle cx="444.9" cy="214.5" r="4" fill="#198754"/><circle cx="700.0" cy="213.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.4 444.9,258.5 700.0,247.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,158.5 700.0,157.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.3 444.9,246.7 700.0,241.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.2 444.9,151.9 700.0,141.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#20c997"/><circle cx="444.9" cy="151.9" r="4" fill="#20c997"/><circle cx="700.0" cy="141.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.89s | 112,511.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.04s | 126,521.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 287.60s | 173,854.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.72s | 72,886.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.74s | 77,674.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.70s | 78,530.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.89s | 71,983.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 202.78s | 49,314.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 889.82s | 56,191.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.69s | 175,839.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.87s | 113,805.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 435.94s | 114,694.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,250.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.63s | 56,938.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 826.98s | 60,460.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.95s | 77,249.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.71s | 118,047.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.74s | 125,081.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:27:26Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">216k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.9 444.9,134.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.7 444.9,226.4 700.0,219.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#198754"/><circle cx="444.9" cy="226.4" r="4" fill="#198754"/><circle cx="700.0" cy="219.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.5 444.9,257.0 700.0,254.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.6 444.9,169.7 700.0,169.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="169.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.4 444.9,230.9 700.0,202.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="202.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.6 444.9,148.3 700.0,146.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#20c997"/><circle cx="444.9" cy="148.3" r="4" fill="#20c997"/><circle cx="700.0" cy="146.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.90s | 91,709.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.96s | 145,013.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 254.09s | 196,778.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.42s | 74,515.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.65s | 78,339.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 601.46s | 83,131.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.12s | 55,181.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.75s | 56,257.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 858.28s | 58,256.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.15s | 109,265.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.84s | 119,274.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 418.55s | 119,459.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.62s | 50,963.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.16s | 75,098.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 524.26s | 95,371.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.12s | 82,521.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.23s | 134,711.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.34s | 135,744.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">179k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">239k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,211.7 444.9,169.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="211.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="169.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.7 444.9,223.3 700.0,234.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#198754"/><circle cx="444.9" cy="223.3" r="4" fill="#198754"/><circle cx="700.0" cy="234.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.9 444.9,267.8 700.0,224.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.3 444.9,188.3 700.0,169.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="188.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,273.2 444.9,254.7 700.0,260.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="273.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="260.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,243.7 444.9,182.9 700.0,184.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="243.7" r="4" fill="#20c997"/><circle cx="444.9" cy="182.9" r="4" fill="#20c997"/><circle cx="700.0" cy="184.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.18s | 98,241.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.64s | 132,212.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 230.13s | 217,263.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,719.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 112.37s | 88,989.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 621.36s | 80,469.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.65s | 56,654.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.82s | 53,528.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 568.80s | 87,903.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.07s | 164,663.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.59s | 116,837.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 378.66s | 132,043.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,222.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.27s | 63,993.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 842.56s | 59,342.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.75s | 72,716.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.53s | 121,168.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 417.37s | 119,796.6 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T23:13:46Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.6 444.9,151.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.9 444.9,196.2 700.0,198.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.9" r="4" fill="#198754"/><circle cx="444.9" cy="196.2" r="4" fill="#198754"/><circle cx="700.0" cy="198.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.9 444.9,228.1 700.0,235.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.3 444.9,137.6 700.0,142.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.7 444.9,232.9 700.0,234.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,159.4 444.9,138.3 700.0,116.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="159.4" r="4" fill="#20c997"/><circle cx="444.9" cy="138.3" r="4" fill="#20c997"/><circle cx="700.0" cy="116.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.41s | 80,599.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 106.91s | 93,533.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 360.30s | 138,774.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.71s | 63,633.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 141.60s | 70,622.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 717.06s | 69,729.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.05s | 45,347.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.90s | 54,378.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 987.89s | 50,613.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.07s | 110,241.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 99.56s | 100,444.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 510.91s | 97,865.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.66s | 53,579.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 192.52s | 51,943.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 977.87s | 51,131.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.19s | 89,357.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 99.91s | 100,095.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 448.81s | 111,406.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,104.1 444.9,124.5 700.0,129.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="104.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.8 444.9,145.7 700.0,203.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.8" r="4" fill="#198754"/><circle cx="444.9" cy="145.7" r="4" fill="#198754"/><circle cx="700.0" cy="203.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.6 444.9,229.7 700.0,202.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="202.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.8 444.9,74.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="74.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.2 444.9,235.2 700.0,247.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.1 444.9,138.8 700.0,141.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.1" r="4" fill="#20c997"/><circle cx="444.9" cy="138.8" r="4" fill="#20c997"/><circle cx="700.0" cy="141.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.35s | 119,817.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.57s | 109,202.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 467.91s | 106,857.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.16s | 61,862.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 101.80s | 98,229.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 733.18s | 68,195.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.19s | 52,113.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 183.01s | 54,642.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 726.47s | 68,825.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,584.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 74.07s | 135,009.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 353.35s | 141,504.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.73s | 43,990.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 193.13s | 51,778.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1099.56s | 45,472.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.07s | 71,053.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 98.22s | 101,815.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 498.01s | 100,400.0 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T23:02:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.4 444.9,122.4 700.0,98.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="98.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.4 444.9,203.6 700.0,198.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.4" r="4" fill="#198754"/><circle cx="444.9" cy="203.6" r="4" fill="#198754"/><circle cx="700.0" cy="198.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.0 444.9,236.6 700.0,248.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.2 444.9,62.3 700.0,141.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.7 444.9,243.5 700.0,210.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="210.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.1 444.9,133.1 700.0,110.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#20c997"/><circle cx="444.9" cy="133.1" r="4" fill="#20c997"/><circle cx="700.0" cy="110.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.01s | 99,940.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.94s | 128,303.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 349.87s | 142,911.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,106.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.10s | 79,300.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 607.54s | 82,298.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.45s | 48,906.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 168.35s | 59,400.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 952.64s | 52,485.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.51s | 117,577.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.76s | 164,595.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 428.01s | 116,818.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.90s | 50,248.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.03s | 55,240.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 665.75s | 75,103.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.67s | 68,157.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.07s | 121,848.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.56s | 135,296.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">176k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,118.2 700.0,89.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.6 444.9,207.9 700.0,182.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.6" r="4" fill="#198754"/><circle cx="444.9" cy="207.9" r="4" fill="#198754"/><circle cx="700.0" cy="182.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.2 444.9,242.3 700.0,239.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.5 444.9,127.2 700.0,124.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.8 444.9,166.2 700.0,158.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="166.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="158.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.0 444.9,127.1 700.0,146.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#20c997"/><circle cx="444.9" cy="127.1" r="4" fill="#20c997"/><circle cx="700.0" cy="146.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.24s | 160,282.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.48s | 127,414.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 346.59s | 144,263.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.14s | 66,032.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.84s | 74,714.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 557.97s | 89,611.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.61s | 51,002.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 183.57s | 54,475.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 886.65s | 56,392.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.48s | 105,463.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.89s | 122,112.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 403.21s | 124,003.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.73s | 50,681.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 100.81s | 99,194.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 482.53s | 103,620.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.99s | 76,964.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.85s | 122,171.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 452.38s | 110,527.3 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:26:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.9 444.9,142.8 700.0,105.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.9 444.9,216.2 700.0,204.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#198754"/><circle cx="444.9" cy="216.2" r="4" fill="#198754"/><circle cx="700.0" cy="204.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.9 444.9,247.9 700.0,235.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.6 444.9,144.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.4 444.9,195.4 700.0,242.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.6 444.9,143.5 700.0,145.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.6" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="145.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,904.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 75.58s | 132,304.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 315.87s | 158,295.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.76s | 63,439.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.31s | 81,758.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 555.47s | 90,013.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.28s | 65,453.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 166.69s | 59,991.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 732.36s | 68,272.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.79s | 128,336.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.06s | 131,466.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 266.28s | 187,770.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.26s | 54,770.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 104.04s | 96,120.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 781.53s | 63,977.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.32s | 69,847.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.83s | 131,868.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.47s | 130,389.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">210k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,201.6 444.9,62.3 700.0,84.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.6 444.9,214.6 700.0,222.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#198754"/><circle cx="444.9" cy="214.6" r="4" fill="#198754"/><circle cx="700.0" cy="222.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.6 444.9,249.9 700.0,198.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.7 444.9,163.5 700.0,128.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.5 444.9,198.9 700.0,189.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.0 444.9,168.2 700.0,116.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#20c997"/><circle cx="444.9" cy="168.2" r="4" fill="#20c997"/><circle cx="700.0" cy="116.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.72s | 93,301.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 52.44s | 190,683.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 285.23s | 175,295.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.99s | 62,535.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.77s | 84,194.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.43s | 78,935.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.55s | 46,403.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.98s | 59,529.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 524.72s | 95,289.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,481.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.38s | 119,938.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 346.94s | 144,118.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.83s | 77,960.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.06s | 95,179.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 492.87s | 101,447.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.21s | 65,741.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.72s | 116,654.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 327.48s | 152,683.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T23:00:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.1 444.9,174.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="174.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.0 444.9,231.3 700.0,226.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#198754"/><circle cx="444.9" cy="231.3" r="4" fill="#198754"/><circle cx="700.0" cy="226.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,286.1 444.9,261.7 700.0,268.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="286.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="268.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.4 444.9,154.0 700.0,140.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.8 444.9,254.1 700.0,233.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,153.4 700.0,143.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="153.4" r="4" fill="#20c997"/><circle cx="700.0" cy="143.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.29s | 107,677.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 90.61s | 110,369.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 267.21s | 187,120.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.57s | 60,357.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 140.56s | 71,146.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 673.36s | 74,254.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 29.83s | 33,523.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 198.91s | 50,273.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1087.20s | 45,989.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.49s | 105,363.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.53s | 124,185.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.45s | 133,174.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.68s | 46,129.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.10s | 55,525.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 715.74s | 69,858.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.39s | 87,773.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.24s | 124,619.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.98s | 131,585.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,202.4 444.9,146.8 700.0,127.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="202.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.0 444.9,208.7 700.0,217.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.7" r="4" fill="#198754"/><circle cx="700.0" cy="217.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.9 444.9,249.9 700.0,258.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,197.1 444.9,153.6 700.0,135.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.0 444.9,203.6 700.0,218.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.5 444.9,148.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.5" r="4" fill="#20c997"/><circle cx="444.9" cy="148.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.89s | 84,104.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.78s | 119,358.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 380.17s | 131,519.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.52s | 57,064.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.80s | 80,128.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 669.20s | 74,716.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.40s | 39,371.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.21s | 53,991.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1031.41s | 48,477.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.43s | 87,473.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.91s | 115,058.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 394.71s | 126,676.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.21s | 45,024.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 119.97s | 83,353.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 677.69s | 73,779.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,050.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.52s | 118,320.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 289.04s | 172,985.2 | PASS |

:::

:::

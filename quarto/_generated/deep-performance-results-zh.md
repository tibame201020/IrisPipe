## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:18:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.0 444.9,126.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.1 444.9,128.6 700.0,199.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#198754"/><circle cx="444.9" cy="128.6" r="4" fill="#198754"/><circle cx="700.0" cy="199.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.1 444.9,235.6 700.0,234.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.4 444.9,138.4 700.0,131.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.7 444.9,238.3 700.0,199.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.3 444.9,86.8 700.0,121.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.3" r="4" fill="#20c997"/><circle cx="444.9" cy="86.8" r="4" fill="#20c997"/><circle cx="700.0" cy="121.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.89s | 112,498.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.95s | 123,531.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 309.62s | 161,486.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.96s | 66,836.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.82s | 122,225.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 623.10s | 80,243.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.89s | 47,881.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.94s | 58,845.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.25s | 59,719.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,695.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.89s | 116,423.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.68s | 120,576.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.72s | 56,436.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.74s | 57,229.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 624.88s | 80,015.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.12s | 76,202.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 68.04s | 146,974.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 396.07s | 126,239.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,88.3 444.9,72.6 700.0,76.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="88.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.1 444.9,168.1 700.0,169.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.1" r="4" fill="#198754"/><circle cx="444.9" cy="168.1" r="4" fill="#198754"/><circle cx="700.0" cy="169.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,208.8 444.9,222.3 700.0,158.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="158.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.9 444.9,103.4 700.0,93.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,223.5 700.0,194.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.3 444.9,98.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#20c997"/><circle cx="444.9" cy="98.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.15s | 122,759.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.59s | 130,570.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.21s | 128,464.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.87s | 72,108.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 120.39s | 83,064.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 608.72s | 82,140.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.92s | 62,822.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.27s | 56,095.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 567.81s | 88,058.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,530.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.76s | 115,255.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.13s | 120,155.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,833.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.16s | 55,507.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 712.97s | 70,129.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.28s | 81,459.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.00s | 117,640.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.39s | 135,723.9 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-17T21:46:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,88.9 444.9,116.1 700.0,119.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="88.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.9 444.9,207.6 700.0,205.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#198754"/><circle cx="444.9" cy="207.6" r="4" fill="#198754"/><circle cx="700.0" cy="205.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.7 444.9,185.5 700.0,237.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="185.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.5 444.9,144.4 700.0,139.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,217.0 700.0,180.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="180.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.7 444.9,120.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#20c997"/><circle cx="444.9" cy="120.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.50s | 153,751.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.14s | 136,733.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 371.79s | 134,484.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.82s | 67,494.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.62s | 79,602.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 617.22s | 81,008.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.69s | 50,789.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 107.06s | 93,402.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 818.74s | 61,069.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.68s | 115,220.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.99s | 119,060.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.39s | 122,432.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,347.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 135.64s | 73,723.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 517.82s | 96,559.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.47s | 80,160.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.52s | 134,201.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 293.50s | 170,358.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">172k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">229k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.7 444.9,62.3 700.0,161.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="161.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.8 444.9,234.5 700.0,232.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#198754"/><circle cx="444.9" cy="234.5" r="4" fill="#198754"/><circle cx="700.0" cy="232.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.3 444.9,260.6 700.0,254.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.5 444.9,91.1 700.0,170.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="170.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.1 444.9,251.3 700.0,198.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.8 444.9,175.4 700.0,160.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.8" r="4" fill="#20c997"/><circle cx="444.9" cy="175.4" r="4" fill="#20c997"/><circle cx="700.0" cy="160.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.67s | 103,380.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 47.97s | 208,450.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 377.07s | 132,602.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,671.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.22s | 76,792.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 640.92s | 78,012.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.22s | 61,644.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.82s | 56,874.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 813.61s | 61,454.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.76s | 128,783.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.64s | 186,428.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.06s | 125,925.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.48s | 57,224.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.41s | 63,936.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 480.48s | 104,061.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.90s | 101,050.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.99s | 121,970.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.00s | 133,689.1 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:36:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">136k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.4 444.9,136.2 700.0,192.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="192.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.1 444.9,207.3 700.0,100.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.1" r="4" fill="#198754"/><circle cx="444.9" cy="207.3" r="4" fill="#198754"/><circle cx="700.0" cy="100.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.6 444.9,216.5 700.0,151.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="151.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.7 444.9,190.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="190.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.6 444.9,205.8 700.0,180.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="180.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,144.9 444.9,113.5 700.0,110.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="144.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.5" r="4" fill="#20c997"/><circle cx="700.0" cy="110.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.36s | 80,919.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 111.05s | 90,051.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 775.42s | 64,480.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.25s | 61,549.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 172.90s | 57,835.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 470.13s | 106,353.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.96s | 52,737.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.27s | 53,685.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 600.49s | 83,265.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,061.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 152.98s | 65,368.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.69s | 123,551.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.65s | 44,146.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.83s | 58,538.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 712.37s | 70,188.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,110.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 99.68s | 100,325.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 492.20s | 101,585.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.4 444.9,110.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.1 444.9,209.9 700.0,146.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#198754"/><circle cx="444.9" cy="209.9" r="4" fill="#198754"/><circle cx="700.0" cy="146.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.3 444.9,237.0 700.0,230.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.5 444.9,124.8 700.0,110.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.9 444.9,236.9 700.0,235.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.7 444.9,129.5 700.0,146.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.7" r="4" fill="#20c997"/><circle cx="444.9" cy="129.5" r="4" fill="#20c997"/><circle cx="700.0" cy="146.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.05s | 90,514.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 87.49s | 114,294.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 359.76s | 138,983.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.64s | 60,078.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 156.91s | 63,730.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 520.82s | 96,002.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.12s | 45,199.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 200.28s | 49,929.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 937.11s | 53,355.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.64s | 94,002.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.33s | 107,142.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 436.20s | 114,626.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.35s | 42,833.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 200.01s | 49,998.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 985.83s | 50,718.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.29s | 69,974.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 95.51s | 104,703.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 521.67s | 95,845.3 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:26:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,129.0 444.9,94.2 700.0,93.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,131.5 444.9,168.8 700.0,176.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="131.5" r="4" fill="#198754"/><circle cx="444.9" cy="168.8" r="4" fill="#198754"/><circle cx="700.0" cy="176.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.3 444.9,216.1 700.0,217.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.5 444.9,96.8 700.0,79.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="79.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.0 444.9,158.5 700.0,125.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="158.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="125.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,177.2 444.9,94.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="177.2" r="4" fill="#20c997"/><circle cx="444.9" cy="94.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.65s | 103,573.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.60s | 121,063.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.28s | 121,572.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.78s | 102,280.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 119.69s | 83,548.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 625.99s | 79,873.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.00s | 52,620.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.27s | 59,783.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 845.84s | 59,113.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.50s | 105,296.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.52s | 119,737.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.22s | 128,462.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.16s | 47,270.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.69s | 88,739.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 473.94s | 105,498.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,327.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.80s | 120,777.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.71s | 137,093.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.5 444.9,142.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.2 444.9,213.2 700.0,219.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.2" r="4" fill="#198754"/><circle cx="444.9" cy="213.2" r="4" fill="#198754"/><circle cx="700.0" cy="219.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.9 444.9,242.2 700.0,271.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="271.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,173.2 444.9,140.9 700.0,70.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="173.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="70.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.9 444.9,247.5 700.0,254.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.0 444.9,94.3 700.0,147.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.0" r="4" fill="#20c997"/><circle cx="444.9" cy="94.3" r="4" fill="#20c997"/><circle cx="700.0" cy="147.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.81s | 101,895.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.75s | 125,398.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 281.52s | 177,607.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.22s | 89,118.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.12s | 79,288.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 663.98s | 75,303.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.94s | 52,792.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 165.53s | 60,413.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1210.30s | 41,312.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.49s | 105,385.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.11s | 126,406.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 290.67s | 172,015.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.05s | 55,401.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.45s | 56,997.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 951.43s | 52,552.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.99s | 83,382.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 63.80s | 156,730.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 408.48s | 122,405.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:26:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.3 444.9,126.4 700.0,141.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.3 444.9,213.3 700.0,211.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#198754"/><circle cx="444.9" cy="213.3" r="4" fill="#198754"/><circle cx="700.0" cy="211.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.3 444.9,239.0 700.0,181.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="181.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.4 444.9,139.7 700.0,124.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.1 444.9,248.5 700.0,241.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.6 444.9,162.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.6" r="4" fill="#20c997"/><circle cx="444.9" cy="162.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.79s | 102,145.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.47s | 134,284.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.33s | 124,895.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.23s | 61,633.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.62s | 78,360.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 629.41s | 79,439.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.07s | 47,449.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 161.78s | 61,813.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 504.26s | 99,154.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.27s | 107,898.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.54s | 125,719.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 368.63s | 135,635.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.68s | 50,800.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.57s | 55,689.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 832.27s | 60,076.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.01s | 110,963.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 90.20s | 110,869.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 284.78s | 175,574.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,172.4 444.9,131.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.5 444.9,216.4 700.0,185.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.5" r="4" fill="#198754"/><circle cx="444.9" cy="216.4" r="4" fill="#198754"/><circle cx="700.0" cy="185.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.6 444.9,266.6 700.0,268.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="268.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.7 444.9,155.7 700.0,139.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.2 444.9,241.5 700.0,245.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.8 444.9,144.8 700.0,250.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#20c997"/><circle cx="444.9" cy="144.8" r="4" fill="#20c997"/><circle cx="700.0" cy="250.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,577.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.48s | 136,097.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 274.47s | 182,167.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.36s | 65,116.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.24s | 79,212.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 500.32s | 99,936.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.95s | 71,710.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 218.95s | 45,672.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1120.06s | 44,640.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,071.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.52s | 119,737.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.13s | 130,845.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.05s | 58,654.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.19s | 62,425.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 837.65s | 59,690.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.67s | 78,920.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.71s | 127,051.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 883.22s | 56,611.2 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:25:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.0 444.9,149.2 700.0,75.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.9 444.9,204.3 700.0,221.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#198754"/><circle cx="444.9" cy="204.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.9 444.9,263.2 700.0,234.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.0 444.9,132.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="132.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.0 444.9,250.4 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.7 444.9,130.0 700.0,125.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#20c997"/><circle cx="444.9" cy="130.0" r="4" fill="#20c997"/><circle cx="700.0" cy="125.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.32s | 120,149.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.11s | 117,500.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 304.60s | 164,150.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.97s | 91,141.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.02s | 82,628.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 699.07s | 71,523.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.30s | 41,143.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 220.38s | 45,376.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 788.90s | 63,379.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.12s | 140,390.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.11s | 128,032.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 289.92s | 172,462.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.82s | 59,442.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 186.85s | 53,519.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 712.76s | 70,149.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.69s | 103,241.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.15s | 129,612.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.96s | 132,287.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.6 444.9,62.3 700.0,128.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.6 444.9,216.1 700.0,145.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#198754"/><circle cx="444.9" cy="216.1" r="4" fill="#198754"/><circle cx="700.0" cy="145.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,278.5 444.9,234.8 700.0,264.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="278.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.4 444.9,141.1 700.0,153.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.3 444.9,234.3 700.0,183.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.6 444.9,130.5 700.0,66.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.6" r="4" fill="#20c997"/><circle cx="444.9" cy="130.5" r="4" fill="#20c997"/><circle cx="700.0" cy="66.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,822.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.21s | 168,890.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 390.66s | 127,989.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.57s | 60,342.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.85s | 73,610.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 425.91s | 117,395.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.57s | 34,995.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 161.21s | 62,030.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1149.95s | 43,480.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.87s | 91,996.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.28s | 120,072.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 444.74s | 112,426.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.33s | 46,882.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.36s | 62,360.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 532.98s | 93,812.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,121.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.95s | 126,662.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 300.97s | 166,127.9 | PASS |

:::

:::

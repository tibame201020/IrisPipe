## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:32:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,68.8 444.9,68.4 700.0,82.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="68.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="68.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="82.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,183.8 444.9,153.7 700.0,154.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#198754"/><circle cx="444.9" cy="153.7" r="4" fill="#198754"/><circle cx="700.0" cy="154.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.7 444.9,212.4 700.0,193.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="193.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.4 444.9,77.9 700.0,85.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="77.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="85.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.2 444.9,162.6 700.0,212.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="162.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,62.3 700.0,71.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="71.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.90s | 126,582.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.91s | 126,733.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 416.83s | 119,954.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.91s | 71,901.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.02s | 86,192.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 583.32s | 85,716.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.78s | 50,561.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.60s | 58,275.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 743.87s | 67,215.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.49s | 105,363.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.82s | 122,216.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 421.12s | 118,731.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.64s | 53,639.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 122.02s | 81,955.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.04s | 58,340.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.45s | 80,340.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.12s | 129,668.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 399.56s | 125,138.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,106.0 444.9,69.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="106.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.3 444.9,164.8 700.0,161.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.3" r="4" fill="#198754"/><circle cx="444.9" cy="164.8" r="4" fill="#198754"/><circle cx="700.0" cy="161.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,233.0 444.9,219.0 700.0,200.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="233.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,114.8 444.9,93.9 700.0,66.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="114.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="66.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.7 444.9,214.5 700.0,220.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.3 444.9,141.8 700.0,86.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#20c997"/><circle cx="444.9" cy="141.8" r="4" fill="#20c997"/><circle cx="700.0" cy="86.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,173.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.20s | 131,233.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.93s | 134,795.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.91s | 67,078.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.89s | 84,112.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 581.70s | 85,955.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.84s | 50,408.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.42s | 57,331.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 753.84s | 66,326.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.19s | 108,849.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.90s | 119,186.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 376.15s | 132,927.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.18s | 49,563.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 167.89s | 59,563.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 883.79s | 56,574.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.58s | 86,340.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.73s | 95,480.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 407.40s | 122,728.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:21:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.0 444.9,123.5 700.0,122.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.5 444.9,197.9 700.0,189.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#198754"/><circle cx="444.9" cy="197.9" r="4" fill="#198754"/><circle cx="700.0" cy="189.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.4 444.9,186.0 700.0,238.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="186.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.1 444.9,103.3 700.0,94.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.0 444.9,232.1 700.0,229.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.5 444.9,112.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.5" r="4" fill="#20c997"/><circle cx="444.9" cy="112.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,745.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.83s | 120,727.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.78s | 121,425.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.85s | 72,217.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.74s | 78,283.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 601.30s | 83,153.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.77s | 50,579.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 117.58s | 85,052.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.20s | 54,993.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.73s | 102,722.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.58s | 132,310.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 364.71s | 137,093.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.07s | 62,235.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.15s | 58,772.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 830.28s | 60,220.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.38s | 80,782.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.59s | 127,247.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 321.11s | 155,707.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.0 444.9,125.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,179.1 700.0,207.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="179.1" r="4" fill="#198754"/><circle cx="700.0" cy="207.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.1 444.9,249.1 700.0,236.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.9 444.9,158.6 700.0,155.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="155.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.8 444.9,226.1 700.0,239.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.1 444.9,149.2 700.0,136.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.1" r="4" fill="#20c997"/><circle cx="444.9" cy="149.2" r="4" fill="#20c997"/><circle cx="700.0" cy="136.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.96s | 143,595.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.19s | 138,531.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 276.99s | 180,511.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.60s | 68,474.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.92s | 103,181.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 590.99s | 84,603.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.00s | 47,621.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.81s | 56,879.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 769.78s | 64,953.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.87s | 101,327.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.65s | 116,754.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.81s | 118,819.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.09s | 49,771.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 138.71s | 72,090.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 790.03s | 63,288.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 82,000.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.30s | 123,004.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.77s | 131,312.9 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:54:02Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,149.8 444.9,124.4 700.0,136.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.7 444.9,183.8 700.0,161.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.7" r="4" fill="#198754"/><circle cx="444.9" cy="183.8" r="4" fill="#198754"/><circle cx="700.0" cy="161.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.7 444.9,221.0 700.0,216.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.7 444.9,127.4 700.0,118.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,217.0 444.9,231.9 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,131.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="131.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.32s | 88,339.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.55s | 100,448.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 528.69s | 94,572.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.00s | 58,816.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 138.70s | 72,099.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 603.47s | 82,854.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.18s | 52,151.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.90s | 54,376.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 886.80s | 56,382.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.37s | 96,478.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 101.00s | 99,007.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 483.23s | 103,470.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.77s | 56,281.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 203.44s | 49,154.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 945.34s | 52,891.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.07s | 66,339.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.09s | 96,998.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.36s | 130,086.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">67k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.9 444.9,113.1 700.0,92.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,112.7 444.9,204.7 700.0,237.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="112.7" r="4" fill="#198754"/><circle cx="444.9" cy="204.7" r="4" fill="#198754"/><circle cx="700.0" cy="237.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.9 444.9,217.8 700.0,224.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,117.0 700.0,94.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.5 444.9,228.2 700.0,223.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.2 444.9,122.3 700.0,105.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#20c997"/><circle cx="444.9" cy="122.3" r="4" fill="#20c997"/><circle cx="700.0" cy="105.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.23s | 89,047.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 100.26s | 99,737.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 457.75s | 109,229.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,920.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 170.75s | 58,564.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 1144.97s | 43,669.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.59s | 48,579.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.86s | 52,670.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1005.77s | 49,713.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.16s | 122,609.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 102.04s | 97,996.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 462.98s | 107,997.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.92s | 45,618.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 208.28s | 48,012.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 998.71s | 50,064.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.92s | 71,833.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.59s | 95,607.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 484.46s | 103,207.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:33:48Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.0 444.9,142.0 700.0,151.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.4 444.9,207.4 700.0,147.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#198754"/><circle cx="444.9" cy="207.4" r="4" fill="#198754"/><circle cx="700.0" cy="147.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.5 444.9,237.8 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.4 444.9,62.3 700.0,144.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.4 444.9,251.9 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.4 444.9,146.2 700.0,134.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#20c997"/><circle cx="444.9" cy="146.2" r="4" fill="#20c997"/><circle cx="700.0" cy="134.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.29s | 97,181.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.36s | 127,622.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 412.22s | 121,295.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.98s | 77,053.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.54s | 84,357.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 403.23s | 123,999.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.26s | 51,921.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 155.70s | 64,227.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.97s | 58,618.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,481.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.46s | 180,297.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.78s | 125,697.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.67s | 63,832.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.99s | 54,948.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.80s | 59,751.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.86s | 77,766.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.13s | 124,792.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.41s | 132,835.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.1 444.9,140.4 700.0,133.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.0 444.9,208.2 700.0,146.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.2" r="4" fill="#198754"/><circle cx="700.0" cy="146.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.8 444.9,263.7 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,227.3 444.9,121.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="227.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.5 444.9,244.7 700.0,246.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.2 444.9,212.1 700.0,141.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.2" r="4" fill="#20c997"/><circle cx="444.9" cy="212.1" r="4" fill="#20c997"/><circle cx="700.0" cy="141.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,296.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.22s | 127,852.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.91s | 132,658.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.22s | 65,681.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 120.06s | 83,289.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 403.02s | 124,064.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,728.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.40s | 46,859.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 895.62s | 55,827.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 14.13s | 70,771.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 71.43s | 140,003.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 279.02s | 179,199.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.44s | 54,232.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.58s | 59,320.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.39s | 57,911.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.03s | 76,769.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 123.88s | 80,722.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 393.45s | 127,081.6 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:25:15Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,182.4 444.9,138.4 700.0,121.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="182.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="121.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.0 444.9,178.8 700.0,202.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#198754"/><circle cx="444.9" cy="178.8" r="4" fill="#198754"/><circle cx="700.0" cy="202.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.8 444.9,239.5 700.0,241.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,121.0 700.0,135.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.3 444.9,214.2 700.0,229.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.5 444.9,138.5 700.0,108.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.5" r="4" fill="#20c997"/><circle cx="444.9" cy="138.5" r="4" fill="#20c997"/><circle cx="700.0" cy="108.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,402.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.23s | 121,605.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 377.96s | 132,288.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.01s | 62,472.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 103.48s | 96,639.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.95s | 81,974.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.70s | 42,199.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.25s | 59,082.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 866.62s | 57,695.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.93s | 168,719.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.55s | 132,362.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 405.52s | 123,299.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.34s | 69,730.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.82s | 74,727.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 762.36s | 65,586.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.98s | 77,029.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.27s | 121,545.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 356.71s | 140,168.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.9 444.9,64.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.2 444.9,187.8 700.0,186.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.2" r="4" fill="#198754"/><circle cx="444.9" cy="187.8" r="4" fill="#198754"/><circle cx="700.0" cy="186.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.6 444.9,231.7 700.0,225.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.9 444.9,98.1 700.0,111.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.3 444.9,204.4 700.0,219.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="204.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,192.3 444.9,102.1 700.0,72.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="192.3" r="4" fill="#20c997"/><circle cx="444.9" cy="102.1" r="4" fill="#20c997"/><circle cx="700.0" cy="72.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.95s | 91,332.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.66s | 143,548.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 345.54s | 144,699.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.35s | 65,146.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.02s | 78,114.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 634.32s | 78,825.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,737.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.51s | 54,791.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 858.21s | 58,260.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.58s | 94,500.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.56s | 125,694.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 422.22s | 118,422.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.00s | 55,549.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 144.29s | 69,303.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 817.95s | 61,128.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.21s | 75,706.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.92s | 123,578.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.83s | 139,341.0 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T23:36:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.4 444.9,101.7 700.0,102.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.1 444.9,107.1 700.0,177.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#198754"/><circle cx="444.9" cy="107.1" r="4" fill="#198754"/><circle cx="700.0" cy="177.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.7 444.9,240.7 700.0,233.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.5 444.9,98.3 700.0,92.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.8 444.9,224.6 700.0,207.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.6 444.9,78.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.6" r="4" fill="#20c997"/><circle cx="444.9" cy="78.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.43s | 95,840.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.78s | 117,957.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 424.77s | 117,711.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.77s | 59,623.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 86.79s | 115,224.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 627.58s | 79,671.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.62s | 37,565.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 209.84s | 47,655.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 971.32s | 51,476.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.12s | 98,824.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.58s | 119,645.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.31s | 122,456.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.68s | 46,125.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.13s | 55,826.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 776.06s | 64,428.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.41s | 80,573.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.10s | 129,708.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.63s | 137,881.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,175.5 444.9,121.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.1 444.9,198.9 700.0,210.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.1" r="4" fill="#198754"/><circle cx="444.9" cy="198.9" r="4" fill="#198754"/><circle cx="700.0" cy="210.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.4 444.9,251.7 700.0,258.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.2 444.9,84.0 700.0,163.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="163.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,284.0 444.9,244.6 700.0,208.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="284.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.0 444.9,107.4 700.0,105.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#20c997"/><circle cx="444.9" cy="107.4" r="4" fill="#20c997"/><circle cx="700.0" cy="105.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.53s | 94,948.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.72s | 127,039.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 308.01s | 162,330.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.37s | 69,594.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.42s | 81,021.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 676.16s | 73,946.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.01s | 38,452.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 201.66s | 49,587.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1103.38s | 45,315.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.85s | 92,165.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 66.94s | 149,385.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 490.08s | 102,023.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 32.93s | 30,364.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.78s | 53,826.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 664.95s | 75,193.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.35s | 80,978.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.82s | 135,462.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.47s | 136,438.3 | PASS |

:::

:::

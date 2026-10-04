## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-04T22:36:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.3 444.9,130.1 700.0,143.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.3 444.9,189.2 700.0,209.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#198754"/><circle cx="444.9" cy="189.2" r="4" fill="#198754"/><circle cx="700.0" cy="209.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.0 444.9,238.2 700.0,241.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,72.7 700.0,127.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="72.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.8 444.9,242.0 700.0,179.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="179.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,136.8 444.9,133.3 700.0,109.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="136.8" r="4" fill="#20c997"/><circle cx="444.9" cy="133.3" r="4" fill="#20c997"/><circle cx="700.0" cy="109.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.23s | 108,330.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,970.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 428.54s | 116,676.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.26s | 75,437.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.46s | 88,922.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 653.24s | 76,541.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.64s | 56,682.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.40s | 59,030.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 879.57s | 56,845.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.01s | 166,306.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 62.51s | 159,974.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.71s | 126,355.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.26s | 51,929.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.32s | 56,715.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 526.18s | 95,024.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.28s | 120,845.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.32s | 122,966.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 363.93s | 137,390.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">176k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">235k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,101.7 444.9,166.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="101.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="166.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.5 444.9,239.3 700.0,235.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.5" r="4" fill="#198754"/><circle cx="444.9" cy="239.3" r="4" fill="#198754"/><circle cx="700.0" cy="235.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.4 444.9,220.2 700.0,266.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="220.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="266.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.4 444.9,185.2 700.0,174.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="185.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="174.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,275.6 444.9,262.4 700.0,261.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="275.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="262.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="261.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.1 444.9,182.6 700.0,175.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.1" r="4" fill="#20c997"/><circle cx="444.9" cy="182.6" r="4" fill="#20c997"/><circle cx="700.0" cy="175.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.48s | 182,481.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.94s | 131,682.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 234.38s | 213,330.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.77s | 67,695.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.65s | 74,825.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.51s | 77,577.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.47s | 64,632.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 111.40s | 89,764.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 934.60s | 53,498.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.64s | 103,745.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.35s | 117,166.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.33s | 125,211.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.54s | 46,429.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.18s | 56,759.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 874.06s | 57,204.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.55s | 79,687.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.87s | 119,230.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.97s | 125,008.4 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-04T22:26:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.6 444.9,151.6 700.0,147.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.5 444.9,211.4 700.0,190.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.5" r="4" fill="#198754"/><circle cx="444.9" cy="211.4" r="4" fill="#198754"/><circle cx="700.0" cy="190.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.9 444.9,269.0 700.0,223.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="223.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,83.0 444.9,148.1 700.0,119.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="83.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.6 444.9,183.5 700.0,173.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="173.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.2 444.9,103.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#20c997"/><circle cx="444.9" cy="103.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.41s | 96,098.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.90s | 116,417.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 419.24s | 119,264.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.52s | 68,889.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.44s | 78,467.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 543.99s | 91,912.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.92s | 50,200.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 238.56s | 41,917.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 706.50s | 70,770.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.25s | 160,025.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.26s | 118,677.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 364.79s | 137,064.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.38s | 64,998.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 103.99s | 96,163.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 488.12s | 102,433.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.43s | 80,476.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.90s | 147,284.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 288.76s | 173,156.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,143.9 444.9,62.3 700.0,62.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="143.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.6 444.9,190.4 700.0,183.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#198754"/><circle cx="444.9" cy="190.4" r="4" fill="#198754"/><circle cx="700.0" cy="183.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,178.9 444.9,226.0 700.0,195.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.6 444.9,114.3 700.0,114.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.3 444.9,225.0 700.0,224.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.3 444.9,92.5 700.0,93.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.3" r="4" fill="#20c997"/><circle cx="444.9" cy="92.5" r="4" fill="#20c997"/><circle cx="700.0" cy="93.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.88s | 101,255.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.21s | 144,487.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 346.48s | 144,307.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.17s | 65,928.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.58s | 76,582.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 624.24s | 80,097.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.09s | 82,685.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.17s | 57,746.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 674.74s | 74,102.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.71s | 102,965.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.53s | 116,923.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.74s | 116,894.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.94s | 50,153.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.64s | 58,262.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 855.54s | 58,442.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.67s | 68,161.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.84s | 128,462.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.36s | 128,086.9 | PASS |

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
  **最新量測：** `2026-10-04T22:32:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.7 444.9,62.3 700.0,146.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.7 444.9,216.4 700.0,215.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.7" r="4" fill="#198754"/><circle cx="444.9" cy="216.4" r="4" fill="#198754"/><circle cx="700.0" cy="215.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,221.0 444.9,258.3 700.0,245.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,182.8 444.9,146.0 700.0,143.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="182.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.5 444.9,250.3 700.0,247.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.4 444.9,143.5 700.0,127.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="127.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.75s | 92,988.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 53.36s | 187,392.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 385.04s | 129,857.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.11s | 66,163.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.75s | 81,467.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.25s | 82,068.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,308.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.75s | 52,700.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 811.12s | 61,642.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.56s | 104,591.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.00s | 129,875.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.10s | 131,890.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.27s | 51,886.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.82s | 58,199.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 826.73s | 60,479.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.46s | 69,156.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.01s | 131,563.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 350.88s | 142,500.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.0 444.9,69.2 700.0,84.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.4 444.9,193.6 700.0,191.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#198754"/><circle cx="444.9" cy="193.6" r="4" fill="#198754"/><circle cx="700.0" cy="191.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,209.4 444.9,237.8 700.0,234.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.5 444.9,111.3 700.0,107.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="107.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.2 444.9,221.2 700.0,228.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.2 444.9,98.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.2" r="4" fill="#20c997"/><circle cx="444.9" cy="98.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.62s | 103,950.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.78s | 145,386.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.12s | 136,941.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.55s | 64,317.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.32s | 77,327.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.18s | 78,594.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.56s | 68,686.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.15s | 53,148.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 907.70s | 55,084.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.91s | 83,984.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.71s | 122,388.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 401.20s | 124,625.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.61s | 44,222.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.71s | 62,223.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 859.67s | 58,161.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.17s | 75,912.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.32s | 129,332.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 335.17s | 149,178.9 | PASS |

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

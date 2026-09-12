## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-12T21:57:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,141.1 444.9,118.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="141.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.4 444.9,200.5 700.0,200.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#198754"/><circle cx="444.9" cy="200.5" r="4" fill="#198754"/><circle cx="700.0" cy="200.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.4 444.9,219.9 700.0,234.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,117.5 444.9,106.5 700.0,130.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="117.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.4 444.9,235.9 700.0,231.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.8 444.9,125.5 700.0,120.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#20c997"/><circle cx="444.9" cy="125.5" r="4" fill="#20c997"/><circle cx="700.0" cy="120.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,878.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.34s | 122,946.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 323.56s | 154,530.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.14s | 66,041.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.17s | 76,235.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 655.52s | 76,275.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.47s | 54,147.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 153.27s | 65,243.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 880.75s | 56,769.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.11s | 123,243.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.25s | 129,453.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 430.75s | 116,076.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.16s | 49,610.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 178.02s | 56,172.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 853.47s | 58,584.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.68s | 85,645.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.26s | 118,683.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 410.47s | 121,812.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,159.7 444.9,62.3 700.0,109.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="159.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.8 444.9,219.9 700.0,224.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.8" r="4" fill="#198754"/><circle cx="444.9" cy="219.9" r="4" fill="#198754"/><circle cx="700.0" cy="224.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.4 444.9,246.0 700.0,250.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.1 444.9,186.9 700.0,150.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="186.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.2 444.9,232.8 700.0,247.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,245.3 444.9,152.9 700.0,143.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#20c997"/><circle cx="444.9" cy="152.9" r="4" fill="#20c997"/><circle cx="700.0" cy="143.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.59s | 116,360.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 55.23s | 181,064.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 334.31s | 149,560.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.30s | 75,165.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.85s | 76,422.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 680.52s | 73,473.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.44s | 60,812.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.26s | 59,081.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 887.76s | 56,321.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.97s | 111,495.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 101.68s | 98,350.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.76s | 122,620.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.65s | 53,630.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 147.34s | 67,870.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 858.30s | 58,254.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 16.80s | 59,530.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.73s | 120,876.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 393.21s | 127,159.2 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-12T21:48:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.5 444.9,62.3 700.0,70.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="70.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.1 444.9,169.0 700.0,157.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.1" r="4" fill="#198754"/><circle cx="444.9" cy="169.0" r="4" fill="#198754"/><circle cx="700.0" cy="157.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.2 444.9,216.0 700.0,208.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="208.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,69.2 444.9,78.4 700.0,67.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="69.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="78.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="67.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,213.5 444.9,215.0 700.0,208.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,165.0 444.9,118.3 700.0,107.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="165.0" r="4" fill="#20c997"/><circle cx="444.9" cy="118.3" r="4" fill="#20c997"/><circle cx="700.0" cy="107.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.83s | 101,739.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.03s | 128,152.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 401.98s | 124,383.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.69s | 68,096.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.19s | 78,009.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 599.07s | 83,462.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.93s | 50,165.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.83s | 55,918.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 843.40s | 59,283.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.01s | 124,906.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.93s | 120,580.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.88s | 125,665.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.52s | 57,093.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.37s | 56,378.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 843.89s | 59,249.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,897.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.21s | 101,819.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 467.03s | 107,058.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.0 444.9,62.3 700.0,110.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="110.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.7 444.9,215.9 700.0,211.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.7" r="4" fill="#198754"/><circle cx="444.9" cy="215.9" r="4" fill="#198754"/><circle cx="700.0" cy="211.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.6 444.9,228.5 700.0,247.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.4 444.9,131.7 700.0,128.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.9 444.9,203.8 700.0,235.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.1 444.9,150.5 700.0,130.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#20c997"/><circle cx="444.9" cy="150.5" r="4" fill="#20c997"/><circle cx="700.0" cy="130.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.78s | 128,617.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 56.72s | 176,304.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 344.83s | 144,997.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.53s | 73,898.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.85s | 77,009.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.46s | 79,941.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.49s | 51,303.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 145.23s | 68,854.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 880.75s | 56,769.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.07s | 99,304.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.08s | 131,438.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 373.76s | 133,775.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,531.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 117.93s | 84,794.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 779.04s | 64,181.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.69s | 78,789.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.85s | 119,256.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.53s | 132,440.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-11T22:35:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">125k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,99.7 444.9,90.5 700.0,116.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="99.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,183.1 444.9,161.7 700.0,131.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#198754"/><circle cx="444.9" cy="161.7" r="4" fill="#198754"/><circle cx="700.0" cy="131.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.9 444.9,194.3 700.0,202.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="194.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="202.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,73.8 444.9,62.3 700.0,82.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="73.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="82.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.1 444.9,212.9 700.0,159.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.0 444.9,72.6 700.0,79.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.0" r="4" fill="#20c997"/><circle cx="444.9" cy="72.6" r="4" fill="#20c997"/><circle cx="700.0" cy="79.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,135.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 98.05s | 101,992.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 548.39s | 91,176.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.78s | 63,367.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 138.35s | 72,281.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 587.79s | 85,063.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.29s | 49,280.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.39s | 58,690.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 902.10s | 55,426.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.18s | 108,956.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.90s | 113,761.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 473.83s | 105,522.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.21s | 45,028.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.39s | 50,919.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 684.58s | 73,037.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.71s | 67,985.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 91.35s | 109,470.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 469.08s | 106,590.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.8 444.9,115.9 700.0,247.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="247.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,183.9 444.9,175.7 700.0,147.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="183.9" r="4" fill="#198754"/><circle cx="444.9" cy="175.7" r="4" fill="#198754"/><circle cx="700.0" cy="147.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,220.9 444.9,200.9 700.0,201.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="220.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="200.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.0 444.9,76.5 700.0,148.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="76.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="148.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.5 444.9,199.7 700.0,194.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.1 444.9,86.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#20c997"/><circle cx="444.9" cy="86.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.79s | 92,687.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 110.37s | 90,607.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 1380.89s | 36,208.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.01s | 62,461.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 151.81s | 65,871.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.15s | 77,622.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.19s | 47,192.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.30s | 55,462.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 908.52s | 55,034.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.97s | 83,528.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.58s | 106,865.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 649.14s | 77,024.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.21s | 58,109.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.80s | 55,929.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 861.58s | 58,033.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.49s | 69,017.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 97.18s | 102,902.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 443.42s | 112,761.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-12T21:58:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.0 444.9,101.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.5 444.9,201.5 700.0,170.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.5" r="4" fill="#198754"/><circle cx="444.9" cy="201.5" r="4" fill="#198754"/><circle cx="700.0" cy="170.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.6 444.9,236.2 700.0,232.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.1 444.9,116.7 700.0,112.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="116.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="112.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.1 444.9,204.8 700.0,169.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="204.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="169.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.7 444.9,124.2 700.0,102.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.7" r="4" fill="#20c997"/><circle cx="444.9" cy="124.2" r="4" fill="#20c997"/><circle cx="700.0" cy="102.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.69s | 103,156.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.94s | 135,243.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 316.27s | 158,092.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.62s | 86,058.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.26s | 77,365.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 523.97s | 95,425.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.27s | 54,743.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.63s | 57,263.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.62s | 59,693.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 106,022.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.03s | 126,532.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.12s | 129,157.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.58s | 53,824.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 132.47s | 75,489.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 520.92s | 95,983.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.21s | 81,900.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.85s | 122,180.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.50s | 134,950.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.8 444.9,122.4 700.0,108.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.1 444.9,215.0 700.0,206.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.1" r="4" fill="#198754"/><circle cx="444.9" cy="215.0" r="4" fill="#198754"/><circle cx="700.0" cy="206.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.2 444.9,226.2 700.0,242.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.1 444.9,146.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.3 444.9,233.1 700.0,240.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.7 444.9,138.0 700.0,92.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.7" r="4" fill="#20c997"/><circle cx="444.9" cy="138.0" r="4" fill="#20c997"/><circle cx="700.0" cy="92.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.98s | 100,150.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.25s | 132,899.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.17s | 141,574.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.25s | 65,582.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.26s | 75,043.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 623.56s | 80,184.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.55s | 48,664.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 147.10s | 67,982.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 862.82s | 57,949.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.31s | 107,446.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.94s | 117,735.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 293.27s | 170,488.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.83s | 50,438.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.92s | 63,728.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.44s | 58,862.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.37s | 80,840.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.20s | 123,148.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 330.33s | 151,365.6 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-12T21:51:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,102.5 444.9,62.3 700.0,109.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.9 444.9,191.1 700.0,169.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.9" r="4" fill="#198754"/><circle cx="444.9" cy="191.1" r="4" fill="#198754"/><circle cx="700.0" cy="169.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.6 444.9,215.3 700.0,233.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.2 444.9,114.5 700.0,104.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.6 444.9,230.3 700.0,225.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.4 444.9,109.6 700.0,77.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.4" r="4" fill="#20c997"/><circle cx="444.9" cy="109.6" r="4" fill="#20c997"/><circle cx="700.0" cy="77.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.71s | 129,785.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.68s | 152,244.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 396.98s | 125,951.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.43s | 64,804.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.49s | 80,329.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 541.74s | 92,294.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.04s | 49,910.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 149.60s | 66,846.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 879.07s | 56,878.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.24s | 108,178.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.24s | 123,090.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.68s | 128,973.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.12s | 66,120.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.09s | 58,448.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 816.12s | 61,265.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,576.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.47s | 125,827.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 347.23s | 143,995.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,171.1 444.9,96.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,188.5 444.9,202.2 700.0,197.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="188.5" r="4" fill="#198754"/><circle cx="444.9" cy="202.2" r="4" fill="#198754"/><circle cx="700.0" cy="197.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.3 444.9,240.6 700.0,234.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.1 444.9,121.7 700.0,106.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.1 444.9,315.0 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="315.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.4 444.9,118.1 700.0,94.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#20c997"/><circle cx="444.9" cy="118.1" r="4" fill="#20c997"/><circle cx="700.0" cy="94.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.28s | 97,257.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.50s | 141,848.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 308.89s | 161,871.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.50s | 86,949.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.88s | 78,813.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 614.60s | 81,354.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.41s | 46,715.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.50s | 56,023.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 839.02s | 59,593.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.03s | 99,671.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.99s | 126,603.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 368.68s | 135,617.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.56s | 48,638.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 843.29s | 11,858.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 759.56s | 65,827.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,225.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.67s | 128,749.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 349.71s | 142,974.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-12T22:01:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.2 444.9,133.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,209.7 700.0,209.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="209.7" r="4" fill="#198754"/><circle cx="700.0" cy="209.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.3 444.9,255.8 700.0,255.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.8 444.9,140.8 700.0,106.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.1 444.9,244.0 700.0,238.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.6 444.9,110.1 700.0,115.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#20c997"/><circle cx="444.9" cy="110.1" r="4" fill="#20c997"/><circle cx="700.0" cy="115.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.91s | 83,977.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.68s | 120,943.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 305.22s | 163,816.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.19s | 75,815.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.90s | 75,246.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 661.57s | 75,577.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.91s | 43,651.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 210.23s | 47,567.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1045.77s | 47,811.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.79s | 92,635.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.72s | 116,657.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 364.50s | 137,175.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.23s | 44,978.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.85s | 54,688.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 862.04s | 58,002.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.48s | 80,153.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.01s | 135,109.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.41s | 132,132.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.8 444.9,67.5 700.0,71.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.9 444.9,179.3 700.0,180.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#198754"/><circle cx="444.9" cy="179.3" r="4" fill="#198754"/><circle cx="700.0" cy="180.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.6 444.9,220.2 700.0,255.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="220.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.5 444.9,62.3 700.0,77.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.9 444.9,220.6 700.0,227.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.0 444.9,70.6 700.0,73.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.0" r="4" fill="#20c997"/><circle cx="444.9" cy="70.6" r="4" fill="#20c997"/><circle cx="700.0" cy="73.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.89s | 77,555.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.68s | 128,733.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 394.99s | 126,586.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.31s | 75,114.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.49s | 74,913.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.07s | 74,508.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.22s | 39,655.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.08s | 55,225.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1310.12s | 38,164.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 12.41s | 80,573.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.20s | 131,226.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 403.58s | 123,889.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.41s | 46,705.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.69s | 55,037.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 967.70s | 51,669.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.91s | 77,471.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.59s | 127,239.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 397.35s | 125,832.7 | PASS |

:::

:::

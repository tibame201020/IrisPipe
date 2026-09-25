## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-24T22:45:47Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">175k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,118.6 700.0,114.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.6 444.9,188.6 700.0,186.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#198754"/><circle cx="444.9" cy="188.6" r="4" fill="#198754"/><circle cx="700.0" cy="186.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.9 444.9,231.4 700.0,235.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.5 444.9,122.6 700.0,112.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="122.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="112.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.4 444.9,236.8 700.0,232.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.7 444.9,127.9 700.0,110.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.7" r="4" fill="#20c997"/><circle cx="444.9" cy="127.9" r="4" fill="#20c997"/><circle cx="700.0" cy="110.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.30s | 158,780.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.36s | 126,016.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 389.22s | 128,462.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,011.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.35s | 85,213.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 576.34s | 86,754.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.05s | 55,386.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.80s | 60,313.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 861.48s | 58,039.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.92s | 112,057.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.88s | 123,644.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 385.38s | 129,743.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.79s | 48,090.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.97s | 57,151.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 839.13s | 59,585.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,333.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.92s | 120,592.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.16s | 130,493.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,85.0 444.9,112.1 700.0,123.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="85.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.0 444.9,200.3 700.0,208.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.0" r="4" fill="#198754"/><circle cx="444.9" cy="200.3" r="4" fill="#198754"/><circle cx="700.0" cy="208.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.8 444.9,240.0 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.3 444.9,138.5 700.0,136.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="136.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,239.1 700.0,240.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,144.8 444.9,135.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="144.8" r="4" fill="#20c997"/><circle cx="444.9" cy="135.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.64s | 150,579.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.47s | 134,280.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.08s | 127,200.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,128.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.22s | 81,153.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 654.73s | 76,367.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.70s | 48,302.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.70s | 57,241.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 965.09s | 51,808.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.29s | 107,642.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.47s | 118,389.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.06s | 119,314.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.80s | 50,502.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.06s | 57,783.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 874.42s | 57,180.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.73s | 114,573.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.99s | 120,502.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 304.34s | 164,290.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-25T22:39:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">211k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.3 444.9,155.2 700.0,154.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="155.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.8 444.9,224.6 700.0,210.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#198754"/><circle cx="444.9" cy="224.6" r="4" fill="#198754"/><circle cx="700.0" cy="210.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.0 444.9,253.8 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,157.7 444.9,156.4 700.0,145.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="157.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.6 444.9,256.8 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.4 444.9,163.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#20c997"/><circle cx="444.9" cy="163.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.20s | 138,850.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.20s | 126,265.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 395.12s | 126,542.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,549.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.00s | 77,520.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 573.45s | 87,191.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.05s | 49,862.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.28s | 57,050.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 802.56s | 62,300.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.03s | 124,517.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.72s | 125,435.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.29s | 133,231.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.94s | 50,155.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.03s | 54,935.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 787.32s | 63,506.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.75s | 72,716.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.89s | 120,649.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 261.07s | 191,518.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,129.4 444.9,65.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.3 444.9,182.1 700.0,129.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#198754"/><circle cx="444.9" cy="182.1" r="4" fill="#198754"/><circle cx="700.0" cy="129.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.2 444.9,230.4 700.0,215.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.9 444.9,94.8 700.0,66.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="66.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.2 444.9,219.0 700.0,219.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.4 444.9,87.2 700.0,82.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.4" r="4" fill="#20c997"/><circle cx="444.9" cy="87.2" r="4" fill="#20c997"/><circle cx="700.0" cy="82.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.72s | 102,901.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.08s | 134,989.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.23s | 136,525.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.81s | 72,421.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.61s | 76,564.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 485.50s | 102,985.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.75s | 45,979.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.00s | 52,354.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 838.01s | 59,665.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.60s | 104,155.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.15s | 120,264.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 372.11s | 134,367.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.21s | 49,473.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.25s | 58,054.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.66s | 57,893.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.01s | 76,893.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.61s | 124,061.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 395.04s | 126,569.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-24T23:01:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,81.3 444.9,85.6 700.0,90.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="81.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,170.6 444.9,162.8 700.0,172.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#198754"/><circle cx="444.9" cy="162.8" r="4" fill="#198754"/><circle cx="700.0" cy="172.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,198.8 444.9,234.1 700.0,201.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="198.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,85.2 444.9,62.3 700.0,72.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="85.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,210.7 444.9,211.6 700.0,153.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="153.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,92.3 444.9,86.2 700.0,100.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="92.3" r="4" fill="#20c997"/><circle cx="444.9" cy="86.2" r="4" fill="#20c997"/><circle cx="700.0" cy="100.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.54s | 104,865.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 96.98s | 103,109.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 495.55s | 100,898.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.71s | 67,971.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 140.52s | 71,162.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 742.73s | 67,319.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.76s | 56,296.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 239.87s | 41,688.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 906.39s | 55,164.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.69s | 103,252.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.70s | 112,737.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 459.83s | 108,735.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.47s | 51,366.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.00s | 51,019.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 668.06s | 74,843.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.97s | 100,311.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 97.25s | 102,829.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 516.64s | 96,778.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,132.4 444.9,100.8 700.0,103.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="100.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.6 444.9,178.9 700.0,163.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.6" r="4" fill="#198754"/><circle cx="444.9" cy="178.9" r="4" fill="#198754"/><circle cx="700.0" cy="163.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,173.3 444.9,212.1 700.0,190.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="173.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="190.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,108.3 444.9,92.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="108.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.1 444.9,137.7 700.0,215.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="137.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.3 444.9,67.4 700.0,116.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.3" r="4" fill="#20c997"/><circle cx="444.9" cy="67.4" r="4" fill="#20c997"/><circle cx="700.0" cy="116.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.17s | 89,525.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.64s | 103,477.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 488.07s | 102,443.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.59s | 60,273.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 144.94s | 68,993.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 660.11s | 75,745.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.99s | 71,464.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.07s | 54,325.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 782.68s | 63,883.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.98s | 100,150.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.37s | 107,099.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.91s | 120,507.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.36s | 42,799.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 114.73s | 87,160.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 946.05s | 52,851.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.91s | 71,885.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.56s | 118,257.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 516.91s | 96,728.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-24T22:50:13Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">142k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,85.0 444.9,74.3 700.0,71.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="85.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.2 444.9,156.6 700.0,140.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#198754"/><circle cx="444.9" cy="156.6" r="4" fill="#198754"/><circle cx="700.0" cy="140.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.6 444.9,206.4 700.0,214.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.9 444.9,62.3 700.0,77.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,219.2 444.9,207.3 700.0,175.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.5 444.9,62.6 700.0,105.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.6" r="4" fill="#20c997"/><circle cx="700.0" cy="105.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.43s | 118,694.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.81s | 123,747.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.01s | 124,997.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.97s | 66,818.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.09s | 84,679.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 540.11s | 92,574.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.26s | 51,913.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 163.84s | 61,034.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 871.19s | 57,392.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.74s | 129,148.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.24s | 129,461.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.02s | 122,242.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.19s | 54,987.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 165.00s | 60,605.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 659.96s | 75,762.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,238.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.32s | 129,326.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 459.23s | 108,877.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,120.6 444.9,108.9 700.0,65.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="120.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,188.0 444.9,173.3 700.0,170.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#198754"/><circle cx="444.9" cy="173.3" r="4" fill="#198754"/><circle cx="700.0" cy="170.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.0 444.9,225.5 700.0,219.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.5 444.9,70.5 700.0,81.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="70.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.7 444.9,133.7 700.0,185.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="133.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.0 444.9,89.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.0" r="4" fill="#20c997"/><circle cx="444.9" cy="89.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.60s | 104,166.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.03s | 109,849.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 382.19s | 130,824.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.00s | 71,433.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.32s | 78,541.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.47s | 79,940.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.60s | 51,010.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.03s | 53,183.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 889.80s | 56,192.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.55s | 104,712.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.82s | 128,496.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.95s | 123,166.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.93s | 50,170.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 102.24s | 97,808.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 686.94s | 72,786.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.04s | 83,084.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.83s | 119,296.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.38s | 132,493.2 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-24T22:42:47Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,98.6 444.9,100.3 700.0,119.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="98.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="100.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.3 444.9,170.3 700.0,75.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#198754"/><circle cx="444.9" cy="170.3" r="4" fill="#198754"/><circle cx="700.0" cy="75.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.1 444.9,233.9 700.0,232.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.9 444.9,89.2 700.0,107.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="107.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.3 444.9,226.6 700.0,194.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.0 444.9,62.3 700.0,82.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="82.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.57s | 132,187.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.21s | 131,214.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.57s | 120,316.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.46s | 64,670.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.60s | 92,083.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 344.89s | 144,972.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.74s | 59,737.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.92s | 56,523.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.15s | 57,132.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.20s | 121,921.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.78s | 137,398.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 392.25s | 127,471.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.13s | 55,163.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 165.04s | 60,590.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 637.36s | 78,449.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,254.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 65.58s | 152,473.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.21s | 141,159.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,85.3 444.9,131.0 700.0,137.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="85.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.2 444.9,225.0 700.0,219.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.2" r="4" fill="#198754"/><circle cx="444.9" cy="225.0" r="4" fill="#198754"/><circle cx="700.0" cy="219.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.2 444.9,200.0 700.0,198.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="200.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,231.0 444.9,62.3 700.0,159.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="231.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.6 444.9,242.8 700.0,285.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="285.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.1 444.9,149.5 700.0,137.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.1" r="4" fill="#20c997"/><circle cx="444.9" cy="149.5" r="4" fill="#20c997"/><circle cx="700.0" cy="137.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.76s | 173,550.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.53s | 141,793.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.59s | 137,516.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.02s | 66,600.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.76s | 76,473.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 620.12s | 80,628.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.25s | 54,785.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 106.55s | 93,857.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 527.29s | 94,824.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 13.83s | 72,290.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 52.75s | 189,559.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.03s | 121,943.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.84s | 53,092.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.13s | 64,049.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1457.19s | 34,312.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.10s | 76,365.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.58s | 128,904.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 364.74s | 137,083.2 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-24T22:50:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,89.9 444.9,108.4 700.0,107.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="89.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.0 444.9,80.7 700.0,170.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.0" r="4" fill="#198754"/><circle cx="444.9" cy="80.7" r="4" fill="#198754"/><circle cx="700.0" cy="170.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.8 444.9,236.5 700.0,245.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.7 444.9,101.7 700.0,104.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.0 444.9,216.6 700.0,205.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="205.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,153.8 444.9,77.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="153.8" r="4" fill="#20c997"/><circle cx="444.9" cy="77.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.22s | 121,624.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.95s | 112,425.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 443.51s | 112,736.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.93s | 66,979.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.23s | 126,211.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 611.62s | 81,749.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.43s | 39,325.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 204.56s | 48,886.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1125.43s | 44,427.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.16s | 98,415.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.38s | 115,763.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 437.01s | 114,413.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.15s | 49,632.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.17s | 58,763.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 777.69s | 64,292.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.12s | 89,920.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.25s | 127,790.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.45s | 135,334.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,190.8 444.9,141.8 700.0,130.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="130.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.6 444.9,135.2 700.0,218.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.6" r="4" fill="#198754"/><circle cx="444.9" cy="135.2" r="4" fill="#198754"/><circle cx="700.0" cy="218.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.8 444.9,258.5 700.0,245.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.8 444.9,111.0 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.1 444.9,247.9 700.0,244.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,151.1 444.9,138.6 700.0,82.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="151.1" r="4" fill="#20c997"/><circle cx="444.9" cy="138.6" r="4" fill="#20c997"/><circle cx="700.0" cy="82.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.85s | 92,199.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.99s | 123,475.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 382.39s | 130,756.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.31s | 57,763.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.31s | 127,699.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 672.87s | 74,308.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.88s | 34,622.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.44s | 48,914.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.82s | 57,089.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.35s | 96,627.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 69.85s | 143,172.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 286.80s | 174,339.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.62s | 48,506.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.68s | 55,653.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.72s | 57,888.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.51s | 117,536.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.65s | 125,546.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 309.16s | 161,726.5 | PASS |

:::

:::

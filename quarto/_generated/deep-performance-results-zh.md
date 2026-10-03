## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-02T23:28:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.1 444.9,157.0 700.0,149.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="149.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.1 444.9,203.4 700.0,207.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#198754"/><circle cx="444.9" cy="203.4" r="4" fill="#198754"/><circle cx="700.0" cy="207.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.7 444.9,251.1 700.0,247.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.6 444.9,138.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.5 444.9,241.6 700.0,247.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.1 444.9,153.2 700.0,135.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.1" r="4" fill="#20c997"/><circle cx="444.9" cy="153.2" r="4" fill="#20c997"/><circle cx="700.0" cy="135.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.98s | 111,408.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.17s | 117,412.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.46s | 122,111.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,138.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.21s | 86,799.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 595.83s | 83,917.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,339.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.73s | 55,331.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 865.28s | 57,785.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.06s | 110,411.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.06s | 129,772.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 278.00s | 179,853.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.71s | 63,657.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.42s | 61,567.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 870.32s | 57,449.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,667.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.39s | 119,921.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.80s | 131,649.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">179k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">239k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,197.8 444.9,62.3 700.0,173.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="173.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.7 444.9,239.0 700.0,228.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.7" r="4" fill="#198754"/><circle cx="444.9" cy="239.0" r="4" fill="#198754"/><circle cx="700.0" cy="228.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.3 444.9,253.4 700.0,268.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="268.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,205.8 444.9,187.5 700.0,177.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="187.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="177.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,274.9 444.9,263.7 700.0,258.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="274.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="263.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,246.4 444.9,186.4 700.0,174.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#20c997"/><circle cx="444.9" cy="186.4" r="4" fill="#20c997"/><circle cx="700.0" cy="174.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.16s | 109,122.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 46.09s | 216,962.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.51s | 128,367.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.19s | 75,838.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.97s | 76,353.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 592.21s | 84,430.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.05s | 47,508.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 154.13s | 64,878.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.52s | 53,161.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.73s | 102,764.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.20s | 117,370.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.45s | 125,170.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.93s | 47,773.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.25s | 56,736.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 816.01s | 61,273.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.19s | 70,487.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.58s | 118,236.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 391.62s | 127,676.1 | PASS |

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
  **最新量測：** `2026-10-02T23:45:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">69k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">139k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.4 444.9,108.6 700.0,147.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.5 444.9,194.9 700.0,173.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#198754"/><circle cx="444.9" cy="194.9" r="4" fill="#198754"/><circle cx="700.0" cy="173.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,176.5 444.9,223.1 700.0,212.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.1 444.9,62.3 700.0,94.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.2 444.9,225.6 700.0,218.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,163.5 444.9,103.9 700.0,95.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="163.5" r="4" fill="#20c997"/><circle cx="444.9" cy="103.9" r="4" fill="#20c997"/><circle cx="700.0" cy="95.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.72s | 85,287.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.59s | 104,616.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 577.63s | 86,561.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.52s | 64,449.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 154.52s | 64,717.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 669.46s | 74,686.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,238.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.51s | 51,677.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 885.87s | 56,441.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.83s | 92,344.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.36s | 126,001.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 449.81s | 111,158.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.91s | 45,645.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.84s | 50,544.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 929.31s | 53,803.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.62s | 79,245.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 93.67s | 106,752.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 452.47s | 110,503.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,92.9 444.9,162.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="92.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="162.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,151.9 444.9,212.0 700.0,125.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="151.9" r="4" fill="#198754"/><circle cx="444.9" cy="212.0" r="4" fill="#198754"/><circle cx="700.0" cy="125.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.7 444.9,232.5 700.0,230.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,79.0 444.9,117.4 700.0,143.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="79.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.6 444.9,234.3 700.0,236.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.7 444.9,131.4 700.0,94.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.7" r="4" fill="#20c997"/><circle cx="444.9" cy="131.4" r="4" fill="#20c997"/><circle cx="700.0" cy="94.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.02s | 124,703.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 112.58s | 88,825.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.92s | 140,479.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.61s | 94,295.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 157.89s | 63,334.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 463.31s | 107,917.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.37s | 49,084.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.35s | 52,811.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 926.72s | 53,953.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.58s | 131,856.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.20s | 112,102.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 507.79s | 98,465.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.48s | 46,565.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 192.78s | 51,871.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 982.44s | 50,893.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.10s | 76,365.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 95.36s | 104,862.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 403.73s | 123,846.4 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-02T23:28:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.3 444.9,75.2 700.0,101.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,179.4 444.9,182.2 700.0,120.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="179.4" r="4" fill="#198754"/><circle cx="444.9" cy="182.2" r="4" fill="#198754"/><circle cx="700.0" cy="120.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.7 444.9,217.7 700.0,173.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="173.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.3 444.9,62.3 700.0,94.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.4 444.9,212.0 700.0,210.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="210.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.7 444.9,112.8 700.0,86.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.7" r="4" fill="#20c997"/><circle cx="444.9" cy="112.8" r="4" fill="#20c997"/><circle cx="700.0" cy="86.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,491.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.19s | 140,467.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 395.44s | 126,442.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.89s | 84,125.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.06s | 82,603.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 430.05s | 116,266.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.74s | 56,379.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 157.62s | 63,443.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 574.06s | 87,098.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.57s | 116,618.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 67.81s | 147,475.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 384.55s | 130,023.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.98s | 50,055.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.38s | 66,496.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 740.76s | 67,498.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,328.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.24s | 120,137.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.74s | 134,501.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">183k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">243k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.3 444.9,163.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,261.5 444.9,241.6 700.0,237.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#198754"/><circle cx="444.9" cy="241.6" r="4" fill="#198754"/><circle cx="700.0" cy="237.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.0 444.9,270.2 700.0,261.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="270.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,205.2 444.9,183.8 700.0,181.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="205.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="183.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="181.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.5 444.9,265.9 700.0,256.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,246.4 444.9,185.4 700.0,127.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#20c997"/><circle cx="444.9" cy="185.4" r="4" fill="#20c997"/><circle cx="700.0" cy="127.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.09s | 140,984.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.01s | 138,877.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 225.87s | 221,362.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.76s | 59,662.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.85s | 75,842.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.00s | 78,989.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.10s | 58,472.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.99s | 52,634.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 839.34s | 59,570.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.49s | 105,340.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.49s | 122,709.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 401.99s | 124,381.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.25s | 54,785.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.27s | 56,094.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 780.73s | 64,043.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.91s | 71,895.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.34s | 121,441.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 296.18s | 168,818.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-02T23:21:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.1 444.9,62.3 700.0,146.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,204.5 700.0,211.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="204.5" r="4" fill="#198754"/><circle cx="700.0" cy="211.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.7 444.9,266.8 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.9 444.9,62.3 700.0,63.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="63.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.3 444.9,235.6 700.0,185.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.2 444.9,141.1 700.0,78.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#20c997"/><circle cx="444.9" cy="141.1" r="4" fill="#20c997"/><circle cx="700.0" cy="78.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.50s | 133,244.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 54.74s | 182,685.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 396.08s | 126,238.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.84s | 67,371.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.42s | 87,400.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 602.33s | 83,010.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.52s | 60,518.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.98s | 45,666.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.65s | 57,626.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.67s | 115,287.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.73s | 182,718.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 274.54s | 182,122.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.26s | 49,355.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.24s | 66,562.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 500.04s | 99,991.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.92s | 62,810.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.98s | 129,905.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 291.17s | 171,719.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.3 444.9,73.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.2 444.9,190.9 700.0,185.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.2" r="4" fill="#198754"/><circle cx="444.9" cy="190.9" r="4" fill="#198754"/><circle cx="700.0" cy="185.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.2 444.9,229.9 700.0,227.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.3 444.9,96.9 700.0,78.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="78.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.3 444.9,193.5 700.0,206.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="193.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.1 444.9,112.9 700.0,84.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.1" r="4" fill="#20c997"/><circle cx="444.9" cy="112.9" r="4" fill="#20c997"/><circle cx="700.0" cy="84.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.45s | 95,730.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.79s | 143,278.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 334.53s | 149,464.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,212.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.66s | 78,952.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 608.73s | 82,138.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.66s | 50,854.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.55s | 57,619.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 848.75s | 58,910.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,585.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.64s | 130,475.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 355.26s | 140,743.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.57s | 48,605.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 128.97s | 77,534.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 712.29s | 70,196.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.43s | 80,482.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.14s | 121,743.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 364.64s | 137,121.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-02T23:32:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.5 444.9,115.2 700.0,102.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.6 444.9,153.5 700.0,173.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.6" r="4" fill="#198754"/><circle cx="444.9" cy="153.5" r="4" fill="#198754"/><circle cx="700.0" cy="173.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.5 444.9,248.6 700.0,241.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,72.5 444.9,120.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="72.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.1 444.9,229.7 700.0,213.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,151.3 444.9,90.0 700.0,91.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="151.3" r="4" fill="#20c997"/><circle cx="444.9" cy="90.0" r="4" fill="#20c997"/><circle cx="700.0" cy="91.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.47s | 87,176.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.87s | 116,456.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 405.69s | 123,246.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.80s | 59,541.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 103.98s | 96,175.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 583.71s | 85,659.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.01s | 39,990.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.38s | 45,792.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1009.65s | 49,522.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.19s | 139,062.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.92s | 113,733.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 346.03s | 144,497.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.88s | 52,954.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.23s | 55,795.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 775.70s | 64,458.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.28s | 97,323.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.03s | 129,811.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.25s | 129,116.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,142.8 444.9,109.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.6 444.9,207.3 700.0,202.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#198754"/><circle cx="444.9" cy="207.3" r="4" fill="#198754"/><circle cx="700.0" cy="202.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.8 444.9,241.7 700.0,193.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="193.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,171.1 444.9,137.5 700.0,133.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="171.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,234.5 700.0,224.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.2 444.9,109.5 700.0,103.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.2" r="4" fill="#20c997"/><circle cx="444.9" cy="109.5" r="4" fill="#20c997"/><circle cx="700.0" cy="103.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.29s | 107,665.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.26s | 126,165.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 327.23s | 152,796.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.20s | 65,798.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.80s | 71,532.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.46s | 74,464.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.72s | 42,158.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.24s | 52,290.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 628.84s | 79,511.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,852.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.36s | 110,663.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 442.91s | 112,889.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.76s | 45,955.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.56s | 56,320.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 808.57s | 61,837.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.24s | 75,523.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.17s | 126,310.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.70s | 129,633.8 | PASS |

:::

:::

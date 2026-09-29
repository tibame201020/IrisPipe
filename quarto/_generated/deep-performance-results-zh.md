## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:31:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,93.1 444.9,78.5 700.0,85.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="93.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,159.6 444.9,169.5 700.0,158.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="159.6" r="4" fill="#198754"/><circle cx="444.9" cy="169.5" r="4" fill="#198754"/><circle cx="700.0" cy="158.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.7 444.9,210.7 700.0,210.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.7 444.9,65.7 700.0,79.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="65.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="79.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.2 444.9,205.2 700.0,214.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.0 444.9,79.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#20c997"/><circle cx="444.9" cy="79.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.58s | 116,590.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.88s | 123,635.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.62s | 120,301.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.83s | 84,530.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.34s | 79,782.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 587.46s | 85,111.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.54s | 57,015.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 166.94s | 59,902.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 831.58s | 60,126.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.09s | 110,059.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.03s | 129,824.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 405.20s | 123,396.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.79s | 50,530.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 159.88s | 62,548.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 860.42s | 58,111.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.80s | 78,112.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.09s | 123,315.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.31s | 131,472.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,81.7 444.9,62.3 700.0,117.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="81.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.3 444.9,140.7 700.0,201.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.3" r="4" fill="#198754"/><circle cx="444.9" cy="140.7" r="4" fill="#198754"/><circle cx="700.0" cy="201.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.8 444.9,241.3 700.0,215.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.0 444.9,115.6 700.0,146.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,228.3 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.5 444.9,132.0 700.0,122.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.5" r="4" fill="#20c997"/><circle cx="444.9" cy="132.0" r="4" fill="#20c997"/><circle cx="700.0" cy="122.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.60s | 151,423.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.34s | 163,025.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.94s | 129,889.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.33s | 69,769.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 86.11s | 116,125.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.45s | 79,942.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.84s | 41,946.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.59s | 55,993.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 697.94s | 71,639.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,397.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.26s | 131,123.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 442.72s | 112,937.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.40s | 49,024.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.84s | 63,758.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 854.74s | 58,497.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,604.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.41s | 121,343.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 392.88s | 127,264.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:29:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.3 444.9,62.3 700.0,136.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.2 444.9,207.4 700.0,198.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.2" r="4" fill="#198754"/><circle cx="444.9" cy="207.4" r="4" fill="#198754"/><circle cx="700.0" cy="198.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.6 444.9,237.0 700.0,230.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.2 444.9,136.7 700.0,124.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="136.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.4 444.9,241.3 700.0,223.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.7 444.9,119.4 700.0,101.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.7" r="4" fill="#20c997"/><circle cx="444.9" cy="119.4" r="4" fill="#20c997"/><circle cx="700.0" cy="101.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,885.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.69s | 162,103.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 422.92s | 118,226.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.65s | 68,254.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.86s | 75,838.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.92s | 81,443.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.76s | 59,665.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.65s | 58,259.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 803.10s | 62,259.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.57s | 104,504.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.84s | 117,864.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.24s | 124,925.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.36s | 49,120.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.60s | 55,677.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 756.82s | 66,065.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.91s | 77,459.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.03s | 128,157.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.65s | 139,025.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,175.4 444.9,138.7 700.0,120.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.2 444.9,217.2 700.0,131.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#198754"/><circle cx="444.9" cy="217.2" r="4" fill="#198754"/><circle cx="700.0" cy="131.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.9 444.9,235.0 700.0,243.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,182.1 444.9,62.3 700.0,146.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="182.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.6 444.9,244.4 700.0,237.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.3 444.9,138.9 700.0,187.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.3" r="4" fill="#20c997"/><circle cx="444.9" cy="138.9" r="4" fill="#20c997"/><circle cx="700.0" cy="187.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.74s | 102,637.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.22s | 126,233.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 362.68s | 137,863.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.44s | 74,432.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.01s | 75,751.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 382.31s | 130,782.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.95s | 52,762.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 155.53s | 64,295.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 845.02s | 59,169.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.17s | 98,328.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 57.02s | 175,374.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.73s | 121,437.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.83s | 50,428.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.58s | 58,282.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 801.12s | 62,412.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.79s | 72,500.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.32s | 126,073.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 527.14s | 94,851.1 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-27T22:53:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">116k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,101.6 444.9,65.2 700.0,75.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="101.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.1 444.9,168.0 700.0,72.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#198754"/><circle cx="444.9" cy="168.0" r="4" fill="#198754"/><circle cx="700.0" cy="72.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,221.1 444.9,166.0 700.0,194.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="166.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="194.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.7 444.9,62.3 700.0,69.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="69.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.9 444.9,243.5 700.0,219.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,127.9 444.9,73.7 700.0,98.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="127.9" r="4" fill="#20c997"/><circle cx="444.9" cy="73.7" r="4" fill="#20c997"/><circle cx="700.0" cy="98.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.04s | 90,620.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.47s | 104,740.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 496.13s | 100,780.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.10s | 62,096.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 154.21s | 64,846.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 490.25s | 101,989.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.62s | 44,214.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 152.45s | 65,593.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 914.14s | 54,696.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,605.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 94.45s | 105,880.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 485.40s | 103,008.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,050.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 281.54s | 35,519.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1116.87s | 44,767.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.44s | 80,418.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.59s | 101,434.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 545.47s | 91,664.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">132k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,133.3 444.9,87.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="133.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.2 444.9,176.8 700.0,158.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#198754"/><circle cx="444.9" cy="176.8" r="4" fill="#198754"/><circle cx="700.0" cy="158.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.3 444.9,214.3 700.0,224.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.2 444.9,86.2 700.0,82.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="86.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="82.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,188.4 444.9,200.6 700.0,216.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="188.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="200.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,182.7 444.9,103.0 700.0,99.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="182.7" r="4" fill="#20c997"/><circle cx="444.9" cy="103.0" r="4" fill="#20c997"/><circle cx="700.0" cy="99.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.28s | 88,668.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.89s | 108,831.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 417.07s | 119,884.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.19s | 65,841.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 143.81s | 69,537.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.60s | 77,567.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.36s | 49,115.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.53s | 53,043.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1027.15s | 48,678.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.07s | 99,265.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 91.42s | 109,382.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 451.06s | 110,850.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.52s | 64,433.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.22s | 59,093.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 960.89s | 52,035.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.94s | 66,943.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 98.07s | 101,968.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 482.52s | 103,623.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-27T22:40:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.5 444.9,135.8 700.0,132.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="135.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="132.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.6 444.9,213.7 700.0,157.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.6" r="4" fill="#198754"/><circle cx="444.9" cy="213.7" r="4" fill="#198754"/><circle cx="700.0" cy="157.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.4 444.9,241.1 700.0,241.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,160.6 444.9,62.3 700.0,131.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="160.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.3 444.9,193.7 700.0,242.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="193.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.2 444.9,133.4 700.0,122.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.2" r="4" fill="#20c997"/><circle cx="444.9" cy="133.4" r="4" fill="#20c997"/><circle cx="700.0" cy="122.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.93s | 111,982.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.01s | 124,989.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 394.01s | 126,900.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.86s | 84,331.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.38s | 76,117.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 448.39s | 111,509.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.60s | 56,831.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.73s | 58,917.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 850.00s | 58,823.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.14s | 109,457.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 58.43s | 171,142.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 392.12s | 127,512.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.28s | 51,867.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.81s | 88,643.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 864.23s | 57,854.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.82s | 84,616.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.05s | 126,510.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.42s | 133,184.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,158.6 444.9,62.3 700.0,140.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="158.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.0 444.9,207.0 700.0,207.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#198754"/><circle cx="444.9" cy="207.0" r="4" fill="#198754"/><circle cx="700.0" cy="207.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.2 444.9,245.6 700.0,240.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.6 444.9,142.1 700.0,131.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.0 444.9,241.3 700.0,239.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.8 444.9,87.2 700.0,120.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.8" r="4" fill="#20c997"/><circle cx="444.9" cy="87.2" r="4" fill="#20c997"/><circle cx="700.0" cy="120.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,518.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.60s | 167,776.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 417.67s | 119,712.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.25s | 70,155.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.97s | 78,758.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.11s | 78,479.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.94s | 66,921.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.89s | 54,978.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 859.75s | 58,156.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.60s | 104,220.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.28s | 118,646.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 398.71s | 125,404.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.27s | 54,749.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.44s | 57,655.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.08s | 58,680.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.31s | 75,148.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.59s | 152,469.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.29s | 131,826.6 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:24:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,187.6 444.9,62.3 700.0,147.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.8 444.9,208.1 700.0,209.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.8" r="4" fill="#198754"/><circle cx="444.9" cy="208.1" r="4" fill="#198754"/><circle cx="700.0" cy="209.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.0 444.9,247.7 700.0,235.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.8 444.9,140.8 700.0,145.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.4 444.9,244.7 700.0,243.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.4 444.9,142.8 700.0,118.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#20c997"/><circle cx="444.9" cy="142.8" r="4" fill="#20c997"/><circle cx="700.0" cy="118.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.64s | 94,011.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 57.50s | 173,922.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.12s | 119,583.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,798.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.56s | 80,931.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.28s | 80,349.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.93s | 66,961.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.64s | 55,666.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 790.53s | 63,248.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.29s | 120,656.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.75s | 123,837.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.63s | 120,590.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.31s | 54,615.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.57s | 57,612.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 858.57s | 58,236.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.58s | 68,605.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.57s | 122,592.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.53s | 137,919.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,131.8 444.9,79.5 700.0,85.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.1 444.9,185.7 700.0,92.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#198754"/><circle cx="444.9" cy="185.7" r="4" fill="#198754"/><circle cx="700.0" cy="92.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.3 444.9,237.6 700.0,235.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.0 444.9,123.5 700.0,133.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.8 444.9,249.5 700.0,190.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,117.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="117.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.71s | 114,876.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.21s | 144,481.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 354.99s | 140,849.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.40s | 64,951.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.43s | 84,437.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 364.01s | 137,358.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.14s | 47,312.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.57s | 55,074.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 884.55s | 56,525.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,565.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.61s | 119,605.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 439.37s | 113,800.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,277.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 206.92s | 48,328.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 610.74s | 81,868.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.83s | 72,301.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.44s | 122,783.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 324.26s | 154,197.2 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-29T00:36:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.4 444.9,142.2 700.0,145.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="145.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.3 444.9,205.1 700.0,134.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.3" r="4" fill="#198754"/><circle cx="444.9" cy="205.1" r="4" fill="#198754"/><circle cx="700.0" cy="134.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.6 444.9,262.9 700.0,256.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.7 444.9,157.8 700.0,150.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.9 444.9,245.9 700.0,229.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.6 444.9,62.3 700.0,118.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="118.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.59s | 79,402.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.33s | 120,003.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 422.85s | 118,246.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,811.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.65s | 80,872.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 400.72s | 124,775.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.81s | 43,840.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 222.92s | 44,859.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1019.25s | 49,055.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.90s | 91,701.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.68s | 110,280.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 436.22s | 114,620.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.30s | 49,251.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.42s | 55,425.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 757.80s | 65,980.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,253.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.91s | 169,738.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.22s | 135,055.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.6 444.9,83.6 700.0,72.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.0 444.9,186.6 700.0,187.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.0" r="4" fill="#198754"/><circle cx="444.9" cy="186.6" r="4" fill="#198754"/><circle cx="700.0" cy="187.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.8 444.9,239.1 700.0,239.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.2 444.9,106.1 700.0,99.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.3 444.9,225.3 700.0,221.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.3 444.9,100.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.3" r="4" fill="#20c997"/><circle cx="444.9" cy="100.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.43s | 87,458.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.84s | 126,834.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.95s | 132,641.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.93s | 59,052.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.53s | 74,887.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.67s | 74,441.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.45s | 36,435.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.79s | 48,358.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1035.82s | 48,270.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.02s | 90,735.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.60s | 115,472.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 421.46s | 118,636.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.71s | 48,288.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.70s | 55,339.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 870.72s | 57,423.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.48s | 87,138.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.62s | 118,176.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 363.39s | 137,594.7 | PASS |

:::

:::

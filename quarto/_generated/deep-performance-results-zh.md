## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T10:44:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,83.2 700.0,103.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.4 444.9,117.0 700.0,156.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.4" r="4" fill="#198754"/><circle cx="444.9" cy="117.0" r="4" fill="#198754"/><circle cx="700.0" cy="156.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.4 444.9,229.6 700.0,191.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="191.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.1 444.9,115.6 700.0,95.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="95.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.0 444.9,227.4 700.0,215.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.4 444.9,95.8 700.0,77.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.4" r="4" fill="#20c997"/><circle cx="444.9" cy="95.8" r="4" fill="#20c997"/><circle cx="700.0" cy="77.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.21s | 138,754.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.05s | 128,118.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 424.60s | 117,758.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.29s | 70,003.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 90.16s | 110,920.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 550.72s | 90,791.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.62s | 53,702.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.56s | 53,600.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 686.14s | 72,871.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.98s | 111,358.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.61s | 111,598.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.62s | 121,767.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.47s | 51,363.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.62s | 54,757.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 820.22s | 60,959.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,391.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.18s | 121,684.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.24s | 130,808.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">175k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.3 444.9,109.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.0 444.9,193.7 700.0,192.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.0" r="4" fill="#198754"/><circle cx="444.9" cy="193.7" r="4" fill="#198754"/><circle cx="700.0" cy="192.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.9 444.9,238.9 700.0,273.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="273.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.5 444.9,133.1 700.0,140.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.7 444.9,262.8 700.0,233.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="262.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.0 444.9,130.0 700.0,115.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.0" r="4" fill="#20c997"/><circle cx="444.9" cy="130.0" r="4" fill="#20c997"/><circle cx="700.0" cy="115.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.09s | 110,071.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.03s | 131,527.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 314.33s | 159,066.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.58s | 64,180.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 121.37s | 82,395.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 600.28s | 83,294.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.14s | 47,292.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.36s | 56,066.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1383.85s | 36,131.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.50s | 105,296.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.91s | 117,770.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 441.62s | 113,220.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.65s | 50,893.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 237.54s | 42,098.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 844.52s | 59,205.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.99s | 76,964.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.66s | 119,538.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.21s | 128,135.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T10:33:46Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,143.4 444.9,87.2 700.0,89.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="143.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.5 444.9,184.6 700.0,177.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.5" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="177.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,233.5 444.9,197.0 700.0,217.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="233.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="197.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.9 444.9,95.6 700.0,88.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="95.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="88.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.5 444.9,214.0 700.0,179.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="179.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.2 444.9,62.3 700.0,79.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.2" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="79.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.27s | 97,399.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.36s | 126,000.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 399.72s | 125,088.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.25s | 75,494.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.77s | 76,470.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.48s | 80,324.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.38s | 51,612.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 142.54s | 70,155.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 834.20s | 59,937.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,853.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.15s | 121,724.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 398.11s | 125,594.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.18s | 49,563.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.52s | 61,530.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 634.20s | 78,839.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.55s | 79,706.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.12s | 138,663.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.70s | 129,972.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,124.2 444.9,69.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="124.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.6 444.9,178.3 700.0,183.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#198754"/><circle cx="444.9" cy="178.3" r="4" fill="#198754"/><circle cx="700.0" cy="183.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.2 444.9,219.3 700.0,222.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.4 444.9,102.8 700.0,108.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.4 444.9,211.2 700.0,215.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.5 444.9,83.1 700.0,63.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.5" r="4" fill="#20c997"/><circle cx="444.9" cy="83.1" r="4" fill="#20c997"/><circle cx="700.0" cy="63.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.77s | 102,343.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.57s | 128,919.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 377.58s | 132,421.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.77s | 67,686.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.47s | 76,064.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 678.31s | 73,712.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.27s | 47,023.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.97s | 56,188.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 911.55s | 54,851.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.17s | 98,367.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.71s | 112,729.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 454.67s | 109,970.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,828.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 166.40s | 60,096.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 860.20s | 58,126.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.67s | 85,689.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.77s | 122,300.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.07s | 131,900.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## MariaDB

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T10:37:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.3 444.9,110.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,202.1 700.0,172.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="202.1" r="4" fill="#198754"/><circle cx="700.0" cy="172.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.7 444.9,239.0 700.0,242.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.3 444.9,116.2 700.0,122.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="116.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.5 444.9,231.4 700.0,234.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.9 444.9,267.8 700.0,99.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.9" r="4" fill="#20c997"/><circle cx="444.9" cy="267.8" r="4" fill="#20c997"/><circle cx="700.0" cy="99.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.69s | 93,536.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.53s | 134,176.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 307.17s | 162,778.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.64s | 68,301.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.04s | 79,341.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 516.37s | 96,829.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.12s | 47,337.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.49s | 57,311.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 903.52s | 55,339.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.93s | 100,684.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.59s | 130,570.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 394.92s | 126,607.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.52s | 53,992.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.77s | 61,815.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 832.45s | 60,063.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.88s | 77,627.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 249.47s | 40,084.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 355.90s | 140,488.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,81.7 444.9,70.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="81.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="70.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.5 444.9,194.1 700.0,164.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#198754"/><circle cx="444.9" cy="194.1" r="4" fill="#198754"/><circle cx="700.0" cy="164.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.0 444.9,228.5 700.0,244.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,153.2 444.9,107.7 700.0,126.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="153.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.7 444.9,234.6 700.0,221.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.4 444.9,72.0 700.0,73.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.4" r="4" fill="#20c997"/><circle cx="444.9" cy="72.0" r="4" fill="#20c997"/><circle cx="700.0" cy="73.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.76s | 128,816.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.22s | 134,741.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.49s | 138,699.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.54s | 64,337.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.53s | 71,668.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 576.00s | 86,806.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.35s | 44,742.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.70s | 54,141.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1086.39s | 46,023.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,472.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.51s | 115,593.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.64s | 106,012.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.81s | 50,477.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 195.82s | 51,067.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 868.04s | 57,601.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.50s | 68,979.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 74.78s | 133,731.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 376.49s | 132,805.7 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T09:11:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.7 444.9,62.3 700.0,90.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.9 444.9,203.4 700.0,199.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#198754"/><circle cx="444.9" cy="203.4" r="4" fill="#198754"/><circle cx="700.0" cy="199.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.9 444.9,257.9 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.8 444.9,125.6 700.0,98.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.9 444.9,212.6 700.0,235.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.6 444.9,105.0 700.0,97.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.6" r="4" fill="#20c997"/><circle cx="444.9" cy="105.0" r="4" fill="#20c997"/><circle cx="700.0" cy="97.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.40s | 80,612.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.70s | 154,550.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 361.49s | 138,318.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.32s | 61,285.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.08s | 74,581.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 649.99s | 76,924.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.48s | 42,585.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 228.75s | 43,716.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1038.05s | 48,167.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,319.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.29s | 118,639.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 372.42s | 134,256.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.80s | 42,018.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.22s | 69,340.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 887.78s | 56,320.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.81s | 84,652.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.71s | 130,361.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.82s | 134,837.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.8 444.9,79.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,178.8 700.0,174.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="178.8" r="4" fill="#198754"/><circle cx="700.0" cy="174.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.7 444.9,248.5 700.0,238.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.5 444.9,104.6 700.0,80.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.0 444.9,235.0 700.0,203.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.7 444.9,75.4 700.0,73.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.7" r="4" fill="#20c997"/><circle cx="444.9" cy="75.4" r="4" fill="#20c997"/><circle cx="700.0" cy="73.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.06s | 82,925.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.61s | 122,540.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 382.85s | 130,600.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.54s | 60,444.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.70s | 74,792.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 652.25s | 76,657.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.93s | 41,781.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 241.52s | 41,404.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1079.35s | 46,324.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.42s | 96,006.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.65s | 110,318.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.14s | 121,910.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.89s | 50,284.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 208.85s | 47,880.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 795.52s | 62,851.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.02s | 76,781.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.45s | 124,299.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.32s | 125,211.3 | PASS |

:::

:::

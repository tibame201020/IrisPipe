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

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T11:07:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.8 444.9,78.5 700.0,95.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.8 444.9,156.7 700.0,129.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.8" r="4" fill="#198754"/><circle cx="444.9" cy="156.7" r="4" fill="#198754"/><circle cx="700.0" cy="129.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.1 444.9,219.9 700.0,206.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.0 444.9,73.2 700.0,83.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="83.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.0 444.9,195.0 700.0,186.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.9 444.9,98.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#20c997"/><circle cx="444.9" cy="98.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.19s | 89,333.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.63s | 104,570.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 511.23s | 97,804.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.90s | 59,182.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.60s | 72,671.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 595.36s | 83,983.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.12s | 49,696.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.13s | 46,918.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 956.65s | 52,265.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,837.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.70s | 106,723.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 487.43s | 102,578.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 27.88s | 35,869.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.19s | 57,082.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 827.47s | 60,425.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.68s | 68,106.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.63s | 96,498.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 449.76s | 111,169.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,123.4 444.9,169.1 700.0,125.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="123.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="169.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.5 444.9,171.6 700.0,168.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#198754"/><circle cx="444.9" cy="171.6" r="4" fill="#198754"/><circle cx="700.0" cy="168.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.6 444.9,223.3 700.0,277.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,194.8 444.9,62.3 700.0,113.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="113.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.7 444.9,212.4 700.0,201.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.4 444.9,106.7 700.0,69.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.4" r="4" fill="#20c997"/><circle cx="444.9" cy="106.7" r="4" fill="#20c997"/><circle cx="700.0" cy="69.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.39s | 87,780.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 145.32s | 68,815.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 574.68s | 87,004.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.61s | 64,082.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 147.50s | 67,794.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.13s | 68,952.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.63s | 46,236.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 215.78s | 46,344.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 2108.86s | 23,709.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 17.20s | 58,156.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.38s | 113,149.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 543.19s | 92,049.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.86s | 45,743.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.54s | 50,881.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 899.50s | 55,586.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.65s | 73,276.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.57s | 94,722.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 454.44s | 110,025.8 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T10:44:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,118.4 444.9,64.0 700.0,86.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.6 444.9,177.3 700.0,161.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.6" r="4" fill="#198754"/><circle cx="444.9" cy="177.3" r="4" fill="#198754"/><circle cx="700.0" cy="161.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.2 444.9,224.0 700.0,219.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,101.4 444.9,63.7 700.0,106.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="101.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.4 444.9,222.1 700.0,220.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.0 444.9,82.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.0" r="4" fill="#20c997"/><circle cx="444.9" cy="82.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.21s | 108,577.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.59s | 135,882.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.99s | 124,692.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.73s | 67,865.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.45s | 79,079.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 575.93s | 86,815.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.82s | 48,019.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.60s | 55,678.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 865.82s | 57,749.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.54s | 117,123.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.52s | 136,024.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 435.55s | 114,797.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.87s | 47,915.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.69s | 56,594.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 870.48s | 57,439.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,736.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.82s | 126,866.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 365.65s | 136,744.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,135.4 444.9,62.3 700.0,66.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.3 444.9,180.0 700.0,81.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.3" r="4" fill="#198754"/><circle cx="444.9" cy="180.0" r="4" fill="#198754"/><circle cx="700.0" cy="81.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.2 444.9,223.6 700.0,201.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.0 444.9,97.9 700.0,103.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.6 444.9,223.3 700.0,213.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.5 444.9,90.6 700.0,71.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.5" r="4" fill="#20c997"/><circle cx="444.9" cy="90.6" r="4" fill="#20c997"/><circle cx="700.0" cy="71.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.96s | 100,381.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.93s | 137,125.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.84s | 134,828.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.03s | 71,265.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.32s | 77,927.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 391.94s | 127,568.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.90s | 43,664.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.61s | 55,987.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 744.39s | 67,169.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.52s | 105,075.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.87s | 119,230.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 429.54s | 116,404.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.01s | 49,972.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.04s | 56,168.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 818.72s | 61,070.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.06s | 71,123.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.39s | 122,872.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.24s | 132,542.0 | PASS |

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
  **最新量測：** `2026-09-09T10:54:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">157k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.8 444.9,62.3 700.0,107.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.7 444.9,195.1 700.0,191.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.7" r="4" fill="#198754"/><circle cx="444.9" cy="195.1" r="4" fill="#198754"/><circle cx="700.0" cy="191.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.5 444.9,247.5 700.0,246.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,127.7 444.9,64.7 700.0,104.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="127.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="64.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.7 444.9,231.5 700.0,205.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="205.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.5 444.9,93.7 700.0,68.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#20c997"/><circle cx="444.9" cy="93.7" r="4" fill="#20c997"/><circle cx="700.0" cy="68.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.66s | 78,970.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.22s | 142,415.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.62s | 118,589.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.62s | 60,183.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.84s | 73,078.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 668.34s | 74,812.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.05s | 38,392.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.87s | 45,690.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1084.36s | 46,110.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.24s | 108,248.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.84s | 141,169.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.85s | 120,524.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.69s | 46,108.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.09s | 54,028.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 741.85s | 67,398.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.93s | 83,836.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.38s | 125,979.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.43s | 139,108.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.6 444.9,62.3 700.0,109.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.6 444.9,192.7 700.0,182.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.6" r="4" fill="#198754"/><circle cx="444.9" cy="192.7" r="4" fill="#198754"/><circle cx="700.0" cy="182.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,273.6 444.9,257.3 700.0,277.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="273.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,172.6 444.9,128.6 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="172.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.7 444.9,228.1 700.0,227.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.6 444.9,116.9 700.0,153.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#20c997"/><circle cx="444.9" cy="116.9" r="4" fill="#20c997"/><circle cx="700.0" cy="153.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.78s | 92,755.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.99s | 153,862.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.28s | 127,135.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.82s | 59,467.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.60s | 80,259.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 582.38s | 85,854.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.85s | 34,662.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 228.18s | 43,824.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1549.44s | 32,269.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.91s | 91,625.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.87s | 116,451.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 393.69s | 127,004.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.63s | 50,934.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.76s | 60,327.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 824.34s | 60,654.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,634.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.27s | 123,049.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 487.36s | 102,593.6 | PASS |

:::

:::

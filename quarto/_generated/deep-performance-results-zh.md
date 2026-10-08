## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-08T00:17:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,84.5 444.9,109.9 700.0,99.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="84.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.2 444.9,179.5 700.0,91.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#198754"/><circle cx="444.9" cy="179.5" r="4" fill="#198754"/><circle cx="700.0" cy="91.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.7 444.9,236.0 700.0,228.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.2 444.9,129.2 700.0,110.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="129.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.5 444.9,207.7 700.0,225.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.8 444.9,110.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#20c997"/><circle cx="444.9" cy="110.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.33s | 136,518.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.52s | 122,667.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 389.01s | 128,530.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.25s | 81,659.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.00s | 84,743.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 376.85s | 132,677.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.45s | 51,400.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.39s | 53,941.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 861.67s | 58,026.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,950.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.17s | 112,147.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.78s | 122,314.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.61s | 60,190.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.20s | 69,347.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 834.43s | 59,921.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.22s | 81,833.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.71s | 122,385.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 336.42s | 148,622.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.6 444.9,147.0 700.0,65.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.3 444.9,233.2 700.0,146.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.3" r="4" fill="#198754"/><circle cx="444.9" cy="233.2" r="4" fill="#198754"/><circle cx="700.0" cy="146.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.8 444.9,210.2 700.0,249.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,166.6 700.0,157.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="166.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.7 444.9,207.4 700.0,252.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="252.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.4 444.9,134.8 700.0,142.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#20c997"/><circle cx="444.9" cy="134.8" r="4" fill="#20c997"/><circle cx="700.0" cy="142.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.54s | 152,835.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.10s | 128,045.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 272.49s | 183,496.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.44s | 69,261.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 144.25s | 69,324.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 389.62s | 128,330.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.86s | 45,741.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 117.66s | 84,992.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 855.51s | 58,444.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.38s | 185,735.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.19s | 114,693.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.28s | 120,692.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.49s | 51,303.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 115.05s | 86,917.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 885.76s | 56,448.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.16s | 76,010.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.34s | 136,341.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.27s | 130,799.0 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-08T00:07:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.5 444.9,144.4 700.0,126.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="144.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.0 444.9,132.2 700.0,199.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.0" r="4" fill="#198754"/><circle cx="444.9" cy="132.2" r="4" fill="#198754"/><circle cx="700.0" cy="199.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.5 444.9,258.4 700.0,251.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,176.5 444.9,95.2 700.0,80.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="95.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,212.6 444.9,234.5 700.0,246.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="212.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.3 444.9,62.3 700.0,132.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="132.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.53s | 94,948.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.73s | 127,014.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 359.13s | 139,226.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.15s | 109,277.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 74.01s | 135,111.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 555.12s | 90,071.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.42s | 48,962.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 195.94s | 51,034.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 896.75s | 55,756.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.47s | 105,585.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 62.59s | 159,772.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 294.72s | 169,651.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.26s | 81,539.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 149.40s | 66,934.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 849.81s | 58,836.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.23s | 97,751.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 55.03s | 181,729.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 370.83s | 134,831.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">67k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">201k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">268k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,224.7 444.9,187.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="187.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,261.1 444.9,191.2 700.0,250.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#198754"/><circle cx="444.9" cy="191.2" r="4" fill="#198754"/><circle cx="700.0" cy="250.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,287.3 444.9,273.8 700.0,269.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="287.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="273.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="269.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.8 444.9,201.1 700.0,129.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="201.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="129.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,275.1 444.9,262.7 700.0,268.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="275.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="262.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="268.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,252.2 444.9,194.9 700.0,147.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="252.2" r="4" fill="#20c997"/><circle cx="444.9" cy="194.9" r="4" fill="#20c997"/><circle cx="700.0" cy="147.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.15s | 98,493.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.09s | 131,418.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 205.35s | 243,490.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.15s | 66,011.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 77.88s | 128,407.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 664.13s | 75,286.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.50s | 42,544.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.99s | 54,646.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 847.99s | 58,963.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.62s | 177,841.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.67s | 119,524.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 273.09s | 183,087.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.69s | 53,510.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 154.90s | 64,559.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 835.26s | 59,861.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.53s | 73,937.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.95s | 125,082.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 298.27s | 167,633.4 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-07T00:12:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">69k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">138k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,124.8 444.9,122.2 700.0,136.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="124.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.2 444.9,183.6 700.0,175.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.2" r="4" fill="#198754"/><circle cx="444.9" cy="183.6" r="4" fill="#198754"/><circle cx="700.0" cy="175.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,175.0 444.9,218.1 700.0,216.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.7 444.9,62.3 700.0,68.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="68.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.2 444.9,196.7 700.0,200.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="196.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.6 444.9,111.2 700.0,100.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.6" r="4" fill="#20c997"/><circle cx="444.9" cy="111.2" r="4" fill="#20c997"/><circle cx="700.0" cy="100.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.31s | 96,946.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 101.90s | 98,137.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 545.13s | 91,720.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,863.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.25s | 69,809.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 680.57s | 73,467.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.55s | 73,779.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.51s | 53,904.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 914.08s | 54,699.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.06s | 110,375.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.51s | 125,773.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 406.63s | 122,963.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.10s | 55,260.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 156.81s | 63,771.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 802.97s | 62,269.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.52s | 68,880.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.91s | 103,188.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 462.33s | 108,147.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,154.2 444.9,131.8 700.0,120.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.2 444.9,189.8 700.0,221.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.2" r="4" fill="#198754"/><circle cx="444.9" cy="189.8" r="4" fill="#198754"/><circle cx="700.0" cy="221.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.2 444.9,212.7 700.0,170.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="170.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,172.6 700.0,119.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.6 444.9,173.6 700.0,199.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="173.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,148.7 444.9,134.5 700.0,141.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="148.7" r="4" fill="#20c997"/><circle cx="444.9" cy="134.5" r="4" fill="#20c997"/><circle cx="700.0" cy="141.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.24s | 88,983.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.97s | 100,025.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 473.77s | 105,536.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.96s | 77,178.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.93s | 71,465.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 896.25s | 55,788.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.57s | 51,096.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 166.11s | 60,200.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 619.22s | 80,746.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.45s | 134,228.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 125.11s | 79,929.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.11s | 106,133.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.53s | 42,504.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 125.85s | 79,459.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 748.10s | 66,836.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.91s | 91,684.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 101.32s | 98,694.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 525.42s | 95,162.5 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-06T23:59:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,93.9 444.9,102.8 700.0,88.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="93.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.8 444.9,85.1 700.0,169.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.8" r="4" fill="#198754"/><circle cx="444.9" cy="85.1" r="4" fill="#198754"/><circle cx="700.0" cy="169.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.5 444.9,155.4 700.0,216.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="155.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.6 444.9,90.2 700.0,86.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.7 444.9,242.2 700.0,206.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.4 444.9,91.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.4" r="4" fill="#20c997"/><circle cx="444.9" cy="91.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.26s | 121,138.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.75s | 116,619.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.54s | 123,904.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.42s | 60,890.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.67s | 125,513.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 602.33s | 83,010.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.39s | 61,020.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 110.86s | 90,200.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 841.72s | 59,402.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.37s | 106,689.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.33s | 122,957.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.84s | 124,737.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.73s | 56,407.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 214.41s | 46,640.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 771.85s | 64,779.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.40s | 80,671.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.61s | 122,540.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.96s | 137,002.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.3 444.9,95.5 700.0,79.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.9 444.9,194.0 700.0,178.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.9" r="4" fill="#198754"/><circle cx="444.9" cy="194.0" r="4" fill="#198754"/><circle cx="700.0" cy="178.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.2 444.9,230.7 700.0,236.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,63.3 700.0,120.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,193.4 444.9,219.6 700.0,232.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="193.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.8 444.9,114.0 700.0,93.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.8" r="4" fill="#20c997"/><circle cx="444.9" cy="114.0" r="4" fill="#20c997"/><circle cx="700.0" cy="93.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.35s | 106,929.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.08s | 134,987.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 347.46s | 143,902.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.83s | 63,171.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.82s | 79,478.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 566.45s | 88,268.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.72s | 53,427.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.13s | 58,776.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 899.23s | 55,602.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.50s | 153,727.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 65.30s | 153,134.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.90s | 121,093.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.53s | 79,795.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 153.69s | 65,068.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.18s | 57,925.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.05s | 82,973.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.29s | 124,547.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 367.84s | 135,927.9 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-08T00:12:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.8 444.9,110.7 700.0,142.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.9 444.9,200.5 700.0,173.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.9" r="4" fill="#198754"/><circle cx="444.9" cy="200.5" r="4" fill="#198754"/><circle cx="700.0" cy="173.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,209.3 444.9,237.0 700.0,213.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="209.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.6 444.9,99.0 700.0,134.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,244.5 700.0,172.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="172.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.4 444.9,116.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.4" r="4" fill="#20c997"/><circle cx="444.9" cy="116.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.70s | 114,982.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 72.17s | 138,552.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 420.74s | 118,838.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.18s | 98,241.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.38s | 83,068.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 500.55s | 99,890.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.88s | 77,621.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.19s | 60,535.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 663.55s | 75,351.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,025.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 68.62s | 145,728.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.31s | 123,669.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.67s | 50,849.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 178.91s | 55,894.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 498.96s | 100,208.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.00s | 76,923.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.20s | 134,772.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 296.85s | 168,436.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">178k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">238k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.0 444.9,62.3 700.0,156.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.1 444.9,212.5 700.0,222.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#198754"/><circle cx="444.9" cy="212.5" r="4" fill="#198754"/><circle cx="700.0" cy="222.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.3 444.9,212.9 700.0,216.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,209.0 444.9,85.5 700.0,172.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="172.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.4 444.9,232.9 700.0,254.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,240.8 444.9,139.5 700.0,184.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#20c997"/><circle cx="444.9" cy="139.5" r="4" fill="#20c997"/><circle cx="700.0" cy="184.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,644.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 46.25s | 216,202.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 354.24s | 141,149.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.88s | 77,627.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.98s | 97,105.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 558.08s | 89,592.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.87s | 45,716.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 103.31s | 96,799.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 534.10s | 93,614.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,880.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 50.55s | 197,823.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 388.61s | 128,665.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.52s | 51,237.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 123.53s | 80,955.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 786.96s | 63,535.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.39s | 74,677.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 64.53s | 154,976.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 418.41s | 119,500.6 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-08T00:20:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.4 444.9,104.4 700.0,92.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.8 444.9,182.8 700.0,156.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#198754"/><circle cx="444.9" cy="182.8" r="4" fill="#198754"/><circle cx="700.0" cy="156.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.1 444.9,240.8 700.0,175.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.2 444.9,99.6 700.0,71.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="71.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.4 444.9,208.9 700.0,201.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="208.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,135.8 444.9,71.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="135.8" r="4" fill="#20c997"/><circle cx="444.9" cy="71.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.32s | 81,149.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.47s | 113,035.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.32s | 118,674.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.91s | 62,833.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.03s | 74,611.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 572.54s | 87,330.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.03s | 41,609.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 216.62s | 46,164.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 640.63s | 78,047.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,500.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.66s | 115,397.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.09s | 129,169.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.06s | 58,627.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.78s | 61,811.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 764.19s | 65,428.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,627.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.44s | 129,135.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.05s | 133,670.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,198.9 444.9,134.8 700.0,139.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="198.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.5 444.9,213.8 700.0,134.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.5" r="4" fill="#198754"/><circle cx="444.9" cy="213.8" r="4" fill="#198754"/><circle cx="700.0" cy="134.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.6 444.9,207.7 700.0,255.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.1 444.9,152.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="152.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.5 444.9,248.0 700.0,248.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.8 444.9,152.4 700.0,137.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#20c997"/><circle cx="444.9" cy="152.4" r="4" fill="#20c997"/><circle cx="700.0" cy="137.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.10s | 90,130.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.41s | 132,604.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 386.73s | 129,288.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.15s | 61,931.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.52s | 80,307.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 377.08s | 132,598.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.41s | 39,362.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 118.62s | 84,304.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 951.29s | 52,560.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.59s | 151,630.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.76s | 120,832.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 276.79s | 180,644.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.36s | 44,730.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.48s | 57,644.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 868.57s | 57,565.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.35s | 69,710.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.69s | 120,932.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.72s | 130,643.8 | PASS |

:::

:::

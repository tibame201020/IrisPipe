## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-13T01:54:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.7 444.9,62.3 700.0,150.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.0 444.9,189.5 700.0,213.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#198754"/><circle cx="444.9" cy="189.5" r="4" fill="#198754"/><circle cx="700.0" cy="213.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.8 444.9,244.4 700.0,241.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.2 444.9,148.8 700.0,147.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.5 444.9,246.2 700.0,243.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.1 444.9,151.4 700.0,138.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#20c997"/><circle cx="444.9" cy="151.4" r="4" fill="#20c997"/><circle cx="700.0" cy="138.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,541.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.98s | 178,619.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.21s | 121,004.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.11s | 66,177.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 104.91s | 95,318.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 626.34s | 79,829.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.27s | 51,899.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 168.61s | 59,308.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 815.35s | 61,323.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.88s | 126,903.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.99s | 121,967.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.04s | 122,536.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,058.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.90s | 58,174.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 831.39s | 60,140.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.53s | 73,915.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.18s | 120,222.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 389.36s | 128,416.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,126.4 444.9,62.3 700.0,101.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.3 444.9,162.8 700.0,197.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.3" r="4" fill="#198754"/><circle cx="444.9" cy="162.8" r="4" fill="#198754"/><circle cx="700.0" cy="197.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.1 444.9,168.2 700.0,199.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="168.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.8 444.9,155.7 700.0,102.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.0 444.9,235.0 700.0,231.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.1 444.9,142.4 700.0,109.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.1" r="4" fill="#20c997"/><circle cx="444.9" cy="142.4" r="4" fill="#20c997"/><circle cx="700.0" cy="109.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.43s | 118,581.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.50s | 155,026.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.99s | 132,629.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.33s | 61,222.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.19s | 97,858.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.87s | 78,385.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.96s | 47,705.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 105.45s | 94,832.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 649.72s | 76,956.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,561.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 98.14s | 101,893.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 377.60s | 132,415.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,025.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.97s | 56,828.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.36s | 58,591.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.97s | 71,556.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 91.34s | 109,481.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.07s | 128,181.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-13T23:52:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,69.9 444.9,104.1 700.0,96.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="69.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="96.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,167.6 444.9,75.1 700.0,139.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#198754"/><circle cx="444.9" cy="75.1" r="4" fill="#198754"/><circle cx="700.0" cy="139.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.2 444.9,220.8 700.0,212.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="220.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.6 444.9,92.8 700.0,90.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="90.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.8 444.9,218.6 700.0,208.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.9 444.9,93.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.40s | 135,062.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.02s | 117,622.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.42s | 121,529.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.73s | 85,273.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 75.53s | 132,394.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 500.84s | 99,831.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.88s | 50,314.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.90s | 58,174.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 798.17s | 62,643.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.74s | 102,627.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.02s | 123,423.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.50s | 124,534.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.59s | 51,054.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 168.58s | 59,320.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 773.87s | 64,610.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.40s | 87,696.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.17s | 123,202.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.83s | 138,953.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">194k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">258k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,217.2 444.9,186.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="186.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,254.4 444.9,231.3 700.0,242.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="254.4" r="4" fill="#198754"/><circle cx="444.9" cy="231.3" r="4" fill="#198754"/><circle cx="700.0" cy="242.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.6 444.9,266.6 700.0,267.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="267.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.0 444.9,192.8 700.0,210.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="192.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="210.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,279.3 444.9,252.3 700.0,267.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="279.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="267.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.7 444.9,185.3 700.0,185.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.7" r="4" fill="#20c997"/><circle cx="444.9" cy="185.3" r="4" fill="#20c997"/><circle cx="700.0" cy="185.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.86s | 101,389.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.12s | 128,003.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 212.96s | 234,787.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.41s | 69,377.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 112.05s | 89,242.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 628.61s | 79,540.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.90s | 50,243.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.83s | 58,882.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 860.60s | 58,098.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.81s | 172,206.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.69s | 122,421.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 465.97s | 107,303.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.84s | 47,989.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 140.46s | 71,196.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 854.05s | 58,544.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.45s | 80,347.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.58s | 128,904.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.65s | 128,651.4 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-13T02:09:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">69k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">138k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.6 444.9,72.2 700.0,127.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.5 444.9,200.9 700.0,183.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.5" r="4" fill="#198754"/><circle cx="444.9" cy="200.9" r="4" fill="#198754"/><circle cx="700.0" cy="183.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,187.7 444.9,208.0 700.0,211.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,84.6 700.0,121.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,227.0 700.0,158.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="158.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.8 444.9,170.8 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.8" r="4" fill="#20c997"/><circle cx="444.9" cy="170.8" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,302.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.80s | 120,780.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 523.75s | 95,465.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 18.52s | 53,981.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 162.29s | 61,617.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 717.81s | 69,656.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.77s | 67,704.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.31s | 58,374.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 883.49s | 56,593.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.98s | 125,329.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.91s | 115,058.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 510.35s | 97,972.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.84s | 45,789.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 201.43s | 49,645.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 615.28s | 81,263.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.59s | 60,270.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 132.49s | 75,478.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 508.39s | 98,349.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.5 444.9,62.3 700.0,122.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.2 444.9,202.0 700.0,191.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.2" r="4" fill="#198754"/><circle cx="444.9" cy="202.0" r="4" fill="#198754"/><circle cx="700.0" cy="191.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.0 444.9,254.2 700.0,222.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.9 444.9,130.1 700.0,110.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.4 444.9,205.0 700.0,224.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.0 444.9,156.5 700.0,105.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.0" r="4" fill="#20c997"/><circle cx="444.9" cy="156.5" r="4" fill="#20c997"/><circle cx="700.0" cy="105.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.83s | 84,523.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.65s | 137,640.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 466.12s | 107,268.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.40s | 60,990.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 149.01s | 67,109.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 692.21s | 72,232.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.81s | 50,489.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 245.28s | 40,769.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.96s | 56,692.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.17s | 109,039.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 96.69s | 103,428.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 441.86s | 113,158.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.36s | 44,728.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.42s | 65,609.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 894.04s | 55,925.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,607.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 111.00s | 90,088.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 432.13s | 115,706.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-13T02:02:28Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,153.0 444.9,116.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.1 444.9,180.8 700.0,191.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.1" r="4" fill="#198754"/><circle cx="444.9" cy="180.8" r="4" fill="#198754"/><circle cx="700.0" cy="191.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.3 444.9,231.1 700.0,230.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,124.5 444.9,82.4 700.0,104.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="124.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,188.3 444.9,234.5 700.0,229.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="188.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.2 444.9,118.4 700.0,92.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.2" r="4" fill="#20c997"/><circle cx="444.9" cy="118.4" r="4" fill="#20c997"/><circle cx="700.0" cy="92.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.81s | 101,905.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.57s | 122,594.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 327.45s | 152,696.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.03s | 66,551.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.81s | 86,346.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 620.26s | 80,611.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.06s | 52,457.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.82s | 58,199.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 857.84s | 58,286.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.49s | 117,841.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.70s | 141,438.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.40s | 129,064.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.18s | 82,108.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.72s | 56,268.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 845.65s | 59,125.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.60s | 79,396.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.47s | 121,256.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.06s | 135,845.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.5 444.9,62.3 700.0,124.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.8 444.9,211.5 700.0,171.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.8" r="4" fill="#198754"/><circle cx="444.9" cy="211.5" r="4" fill="#198754"/><circle cx="700.0" cy="171.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.1 444.9,263.8 700.0,243.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,172.8 444.9,143.7 700.0,148.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="172.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="148.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.2 444.9,247.8 700.0,245.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,152.0 444.9,144.2 700.0,178.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="152.0" r="4" fill="#20c997"/><circle cx="444.9" cy="144.2" r="4" fill="#20c997"/><circle cx="700.0" cy="178.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.78s | 113,908.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 55.53s | 180,089.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.01s | 138,885.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.51s | 105,152.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 122.60s | 81,568.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 462.97s | 107,998.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.76s | 48,164.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 212.60s | 47,037.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 826.70s | 60,481.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.34s | 107,123.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.18s | 126,294.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.09s | 123,430.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.23s | 52,015.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.75s | 57,553.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 847.33s | 59,009.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.28s | 120,816.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.35s | 126,022.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 482.53s | 103,621.1 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-13T23:51:21Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.4 444.9,109.8 700.0,105.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.3 444.9,81.0 700.0,181.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#198754"/><circle cx="444.9" cy="81.0" r="4" fill="#198754"/><circle cx="700.0" cy="181.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.6 444.9,230.6 700.0,222.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,87.5 444.9,77.1 700.0,109.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="87.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="77.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.5 444.9,221.8 700.0,121.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="121.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.6 444.9,93.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#20c997"/><circle cx="444.9" cy="93.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.94s | 91,399.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.88s | 122,135.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 401.41s | 124,559.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.00s | 71,433.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 72.60s | 137,748.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 598.87s | 83,490.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.18s | 49,558.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.63s | 56,615.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 822.03s | 60,824.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.45s | 134,192.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 71.52s | 139,828.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.36s | 122,441.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.73s | 50,689.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.96s | 61,366.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 432.45s | 115,619.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.82s | 67,476.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.26s | 131,123.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 338.09s | 147,890.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">210k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,185.9 444.9,105.2 700.0,89.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.4 444.9,213.5 700.0,224.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.4" r="4" fill="#198754"/><circle cx="444.9" cy="213.5" r="4" fill="#198754"/><circle cx="700.0" cy="224.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.5 444.9,253.0 700.0,247.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.6 444.9,62.3 700.0,185.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="185.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.9 444.9,251.2 700.0,249.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.4 444.9,161.5 700.0,137.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.4" r="4" fill="#20c997"/><circle cx="444.9" cy="161.5" r="4" fill="#20c997"/><circle cx="700.0" cy="137.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.57s | 104,504.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 62.08s | 161,085.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 290.77s | 171,954.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.14s | 76,115.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 117.44s | 85,149.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.93s | 77,527.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.78s | 45,920.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.88s | 57,510.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 814.73s | 61,370.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.32s | 120,163.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 52.30s | 191,190.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 478.05s | 104,590.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.50s | 51,268.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.26s | 58,734.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.77s | 60,257.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,793.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.21s | 121,638.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 361.26s | 138,402.9 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-13T02:00:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,204.4 444.9,147.3 700.0,155.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="204.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="155.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.7 444.9,200.4 700.0,208.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#198754"/><circle cx="444.9" cy="200.4" r="4" fill="#198754"/><circle cx="700.0" cy="208.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.7 444.9,254.3 700.0,261.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.4 444.9,144.2 700.0,132.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.5 444.9,207.7 700.0,241.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.6 444.9,62.3 700.0,116.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="116.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,973.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.92s | 117,757.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 442.69s | 112,946.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.45s | 69,228.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.44s | 84,427.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 629.84s | 79,385.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.78s | 40,353.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 197.55s | 50,620.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1090.79s | 45,838.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.07s | 141,522.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.52s | 119,730.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.09s | 127,196.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.38s | 46,772.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 125.20s | 79,874.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 855.28s | 58,460.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.13s | 82,447.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.44s | 171,121.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 363.95s | 137,381.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,131.9 444.9,127.5 700.0,147.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.7 444.9,229.0 700.0,225.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.7" r="4" fill="#198754"/><circle cx="444.9" cy="229.0" r="4" fill="#198754"/><circle cx="700.0" cy="225.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,283.0 444.9,231.2 700.0,277.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="283.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,198.9 444.9,190.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="198.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="190.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.5 444.9,198.9 700.0,191.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.7 444.9,99.6 700.0,137.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.7" r="4" fill="#20c997"/><circle cx="444.9" cy="99.6" r="4" fill="#20c997"/><circle cx="700.0" cy="137.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.25s | 138,026.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.92s | 141,007.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.51s | 127,385.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.85s | 59,350.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.82s | 72,034.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 669.70s | 74,660.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.31s | 35,328.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 141.81s | 70,516.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1289.63s | 38,770.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,472.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 101.84s | 98,189.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 269.79s | 185,329.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.12s | 45,205.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 108.10s | 92,509.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 513.66s | 97,340.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.64s | 93,958.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 62.52s | 159,956.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 371.75s | 134,497.2 | PASS |

:::

:::

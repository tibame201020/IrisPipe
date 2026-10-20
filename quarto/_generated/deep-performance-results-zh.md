## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-20T22:48:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,127.0 444.9,74.8 700.0,80.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="127.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="80.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,114.8 444.9,175.8 700.0,149.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="114.8" r="4" fill="#198754"/><circle cx="444.9" cy="175.8" r="4" fill="#198754"/><circle cx="700.0" cy="149.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.1 444.9,206.8 700.0,216.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.1 444.9,90.2 700.0,89.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.1 444.9,152.4 700.0,131.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="152.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="131.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.6 444.9,100.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.6" r="4" fill="#20c997"/><circle cx="444.9" cy="100.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.90s | 100,969.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.16s | 126,332.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 405.12s | 123,419.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.35s | 106,906.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.35s | 77,310.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 553.63s | 90,313.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.93s | 45,599.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 160.61s | 62,263.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.07s | 57,665.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.00s | 111,148.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.13s | 118,866.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 419.43s | 119,209.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.09s | 52,369.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.79s | 88,658.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 506.45s | 98,725.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.95s | 83,696.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.83s | 113,851.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.61s | 132,410.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.5 444.9,139.3 700.0,117.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,151.4 444.9,160.3 700.0,204.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="151.4" r="4" fill="#198754"/><circle cx="444.9" cy="160.3" r="4" fill="#198754"/><circle cx="700.0" cy="204.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.4 444.9,221.0 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,176.7 444.9,84.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.1 444.9,229.4 700.0,236.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.4 444.9,143.7 700.0,114.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.4" r="4" fill="#20c997"/><circle cx="444.9" cy="143.7" r="4" fill="#20c997"/><circle cx="700.0" cy="114.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.25s | 108,108.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.35s | 118,555.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 379.57s | 131,728.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 8.99s | 111,210.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 94.48s | 105,847.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 631.52s | 79,174.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.04s | 43,402.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 144.78s | 69,069.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 920.69s | 54,307.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,904.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 66.01s | 151,487.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 302.63s | 165,216.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.77s | 56,265.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.30s | 63,981.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 833.86s | 59,962.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.54s | 79,744.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.31s | 115,861.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.98s | 133,340.8 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-20T22:44:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">216k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,182.9 444.9,103.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="182.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="103.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.5 444.9,212.4 700.0,186.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#198754"/><circle cx="444.9" cy="212.4" r="4" fill="#198754"/><circle cx="700.0" cy="186.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.4 444.9,215.4 700.0,253.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.6 444.9,178.3 700.0,169.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.5 444.9,255.3 700.0,252.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="252.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.9 444.9,136.3 700.0,155.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.9" r="4" fill="#20c997"/><circle cx="444.9" cy="136.3" r="4" fill="#20c997"/><circle cx="700.0" cy="155.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,469.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.99s | 166,683.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 254.78s | 196,249.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.36s | 65,095.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 113.37s | 88,207.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 468.50s | 106,723.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.03s | 58,713.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 116.21s | 86,050.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.59s | 58,644.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 106,033.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.66s | 112,791.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 420.00s | 119,049.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,395.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.31s | 57,370.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.80s | 59,185.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.96s | 111,607.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.95s | 142,959.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 388.01s | 128,862.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.6 444.9,151.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.2 444.9,227.4 700.0,223.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.2" r="4" fill="#198754"/><circle cx="444.9" cy="227.4" r="4" fill="#198754"/><circle cx="700.0" cy="223.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.8 444.9,262.3 700.0,253.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.2 444.9,168.7 700.0,179.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="179.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.8 444.9,241.3 700.0,241.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,237.3 444.9,191.1 700.0,144.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#20c997"/><circle cx="444.9" cy="191.1" r="4" fill="#20c997"/><circle cx="700.0" cy="144.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,920.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.52s | 130,678.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 257.53s | 194,154.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.63s | 103,809.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.57s | 76,589.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 628.65s | 79,535.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.91s | 47,826.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.33s | 51,724.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 858.22s | 58,259.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,334.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.47s | 118,378.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 452.39s | 110,524.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.19s | 52,121.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 149.97s | 66,679.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 751.81s | 66,505.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.38s | 69,555.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 97.64s | 102,412.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.37s | 135,734.6 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:51:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.5 444.9,122.4 700.0,120.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.1 444.9,108.7 700.0,99.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#198754"/><circle cx="444.9" cy="108.7" r="4" fill="#198754"/><circle cx="700.0" cy="99.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.2 444.9,240.2 700.0,194.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="194.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.6 444.9,114.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.6 444.9,166.4 700.0,215.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="166.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,133.0 444.9,78.4 700.0,104.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="133.0" r="4" fill="#20c997"/><circle cx="444.9" cy="78.4" r="4" fill="#20c997"/><circle cx="700.0" cy="104.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,051.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 106.20s | 94,160.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 527.14s | 94,850.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,875.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 99.75s | 100,253.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 479.64s | 104,245.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.19s | 49,534.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 238.16s | 41,988.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 803.60s | 62,220.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.34s | 96,749.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 102.41s | 97,643.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.87s | 120,812.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.02s | 47,585.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.88s | 74,691.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 947.37s | 52,777.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.17s | 89,493.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.98s | 113,664.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 489.70s | 102,102.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">136k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,102.4 700.0,90.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.3 444.9,184.3 700.0,181.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.3" r="4" fill="#198754"/><circle cx="444.9" cy="184.3" r="4" fill="#198754"/><circle cx="700.0" cy="181.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,249.9 444.9,165.5 700.0,214.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="249.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="165.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,102.4 700.0,98.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.7 444.9,154.4 700.0,159.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="154.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,123.6 444.9,111.7 700.0,99.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="123.6" r="4" fill="#20c997"/><circle cx="444.9" cy="111.7" r="4" fill="#20c997"/><circle cx="700.0" cy="99.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.09s | 123,563.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.90s | 105,369.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 451.70s | 110,693.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.27s | 61,466.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.41s | 68,299.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 717.61s | 69,676.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.93s | 38,562.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 130.21s | 76,797.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 917.38s | 54,503.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.09s | 123,548.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 94.88s | 105,397.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 465.80s | 107,341.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.78s | 45,915.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 122.24s | 81,809.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 629.90s | 79,377.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.44s | 95,794.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 98.84s | 101,171.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 468.98s | 106,613.4 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:36:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,150.4 444.9,62.3 700.0,85.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,143.9 444.9,185.1 700.0,179.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="143.9" r="4" fill="#198754"/><circle cx="444.9" cy="185.1" r="4" fill="#198754"/><circle cx="700.0" cy="179.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.2 444.9,215.6 700.0,222.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.6 444.9,94.4 700.0,88.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="88.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.1 444.9,229.0 700.0,157.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="157.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.8 444.9,87.5 700.0,76.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#20c997"/><circle cx="444.9" cy="87.5" r="4" fill="#20c997"/><circle cx="700.0" cy="76.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.44s | 95,785.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.67s | 141,500.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 386.71s | 129,295.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.08s | 99,167.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.60s | 77,762.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 617.76s | 80,938.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.31s | 51,789.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 161.47s | 61,929.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 858.08s | 58,269.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.07s | 110,217.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.12s | 124,815.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 391.56s | 127,693.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.07s | 58,599.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.90s | 54,974.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 541.30s | 92,369.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,626.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.87s | 128,419.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.19s | 133,978.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,149.8 444.9,152.4 700.0,141.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.2 444.9,216.7 700.0,228.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.2" r="4" fill="#198754"/><circle cx="444.9" cy="216.7" r="4" fill="#198754"/><circle cx="700.0" cy="228.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.4 444.9,263.8 700.0,251.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,112.0 444.9,174.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="112.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="174.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.4 444.9,249.8 700.0,253.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.3 444.9,173.4 700.0,154.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#20c997"/><circle cx="444.9" cy="173.4" r="4" fill="#20c997"/><circle cx="700.0" cy="154.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.44s | 134,372.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.46s | 132,517.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.27s | 140,739.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.35s | 65,146.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.53s | 85,815.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.16s | 77,022.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.23s | 54,851.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.71s | 51,622.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 829.15s | 60,302.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.18s | 161,786.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.71s | 116,669.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 252.69s | 197,874.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.24s | 81,699.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.80s | 61,803.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 850.03s | 58,821.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.06s | 90,448.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.32s | 117,211.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.34s | 130,773.3 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-20T22:44:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.6 444.9,143.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.8 444.9,195.5 700.0,187.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#198754"/><circle cx="444.9" cy="195.5" r="4" fill="#198754"/><circle cx="700.0" cy="187.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.6 444.9,230.6 700.0,229.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.1 444.9,142.9 700.0,131.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.7 444.9,245.1 700.0,175.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,99.9 700.0,112.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="99.9" r="4" fill="#20c997"/><circle cx="700.0" cy="112.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.23s | 108,354.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.22s | 121,620.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 288.38s | 173,382.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,039.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.79s | 88,658.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 532.88s | 93,830.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.44s | 46,633.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.71s | 66,351.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 747.85s | 66,858.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.71s | 129,651.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.89s | 122,112.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.37s | 129,408.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.39s | 69,473.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.02s | 57,135.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 493.06s | 101,407.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,294.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.89s | 149,488.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 352.64s | 141,788.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,218.8 444.9,140.0 700.0,115.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.6 444.9,198.4 700.0,145.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.6" r="4" fill="#198754"/><circle cx="444.9" cy="198.4" r="4" fill="#198754"/><circle cx="700.0" cy="145.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.3 444.9,267.7 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.5 444.9,62.3 700.0,139.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.6 444.9,198.8 700.0,242.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.2 444.9,97.0 700.0,156.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#20c997"/><circle cx="444.9" cy="97.0" r="4" fill="#20c997"/><circle cx="700.0" cy="156.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 13.15s | 76,057.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.33s | 127,665.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 347.44s | 143,910.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.18s | 82,081.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 111.81s | 89,437.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 402.82s | 124,123.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,948.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 226.83s | 44,086.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 888.26s | 56,290.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.50s | 95,210.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.02s | 178,523.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 391.01s | 127,874.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.99s | 83,368.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 112.17s | 89,146.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 827.10s | 60,452.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.75s | 78,443.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 64.20s | 155,765.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 428.99s | 116,554.2 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-19T23:42:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,217.2 444.9,146.1 700.0,145.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="145.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.7 444.9,205.2 700.0,210.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="210.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.9 444.9,223.3 700.0,261.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,98.5 444.9,140.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="98.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.5 444.9,246.7 700.0,240.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.6 444.9,134.5 700.0,117.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#20c997"/><circle cx="444.9" cy="134.5" r="4" fill="#20c997"/><circle cx="700.0" cy="117.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 13.78s | 72,590.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.88s | 116,441.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 428.34s | 116,730.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.02s | 62,418.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.97s | 80,017.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 653.17s | 76,550.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.88s | 59,227.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 145.27s | 68,838.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1101.75s | 45,382.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.86s | 145,751.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.47s | 119,796.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 297.47s | 168,082.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.54s | 57,025.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.72s | 54,429.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 860.81s | 58,084.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.52s | 105,042.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.95s | 123,539.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.92s | 134,075.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.0 444.9,62.3 700.0,163.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="163.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.4 444.9,232.5 700.0,155.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#198754"/><circle cx="444.9" cy="232.5" r="4" fill="#198754"/><circle cx="700.0" cy="155.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.1 444.9,271.3 700.0,263.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.8 444.9,161.8 700.0,120.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.6 444.9,260.1 700.0,258.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="260.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.2 444.9,141.2 700.0,171.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#20c997"/><circle cx="444.9" cy="141.2" r="4" fill="#20c997"/><circle cx="700.0" cy="171.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.85s | 92,174.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 51.72s | 193,345.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 410.45s | 121,816.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.11s | 62,088.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.63s | 72,658.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 391.85s | 127,598.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.68s | 38,939.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 221.29s | 45,190.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 987.89s | 50,612.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.94s | 144,030.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.45s | 122,777.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 328.24s | 152,325.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.52s | 60,540.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 188.24s | 53,125.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 919.82s | 54,358.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.13s | 89,871.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 72.80s | 137,357.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 431.10s | 115,981.3 | PASS |

:::

:::

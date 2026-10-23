## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-22T22:51:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.6 444.9,62.3 700.0,138.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="138.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,205.2 700.0,170.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="170.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.6 444.9,242.7 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.2 444.9,140.7 700.0,134.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.4 444.9,240.2 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,149.8 444.9,139.1 700.0,86.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="149.8" r="4" fill="#20c997"/><circle cx="444.9" cy="139.1" r="4" fill="#20c997"/><circle cx="700.0" cy="86.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.87s | 112,714.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 60.63s | 164,943.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.02s | 118,758.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.46s | 69,165.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.42s | 78,479.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 502.91s | 99,422.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.15s | 52,227.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.10s | 55,834.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 922.60s | 54,194.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.66s | 115,406.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.09s | 117,526.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 411.50s | 121,508.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.76s | 48,167.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.49s | 57,310.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.72s | 58,293.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.93s | 112,019.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.41s | 118,469.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 333.17s | 150,072.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,117.0 444.9,155.3 700.0,123.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="155.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.4 444.9,235.3 700.0,221.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#198754"/><circle cx="444.9" cy="235.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.4 444.9,254.2 700.0,239.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.9 444.9,173.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="173.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.8 444.9,250.5 700.0,246.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,219.3 444.9,128.3 700.0,167.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#20c997"/><circle cx="444.9" cy="128.3" r="4" fill="#20c997"/><circle cx="700.0" cy="167.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.57s | 152,183.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.73s | 125,415.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 338.69s | 147,625.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,693.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 143.75s | 69,562.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 631.04s | 79,234.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.20s | 47,180.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.32s | 56,395.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 747.73s | 66,868.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.09s | 99,147.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.60s | 112,868.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 262.67s | 190,354.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.02s | 47,580.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.56s | 58,975.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 806.97s | 61,960.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.38s | 80,768.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 69.32s | 144,262.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 428.39s | 116,715.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:29:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.8 444.9,80.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="80.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.1 444.9,205.3 700.0,102.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.1" r="4" fill="#198754"/><circle cx="444.9" cy="205.3" r="4" fill="#198754"/><circle cx="700.0" cy="102.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.2 444.9,241.8 700.0,222.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,107.6 444.9,142.7 700.0,122.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="107.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.5 444.9,222.8 700.0,223.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.5 444.9,123.6 700.0,105.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#20c997"/><circle cx="444.9" cy="123.6" r="4" fill="#20c997"/><circle cx="700.0" cy="105.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.41s | 96,052.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.91s | 156,460.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 298.11s | 167,726.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,277.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.37s | 79,763.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 349.43s | 143,089.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.13s | 49,684.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.54s | 57,292.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 724.34s | 69,028.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.15s | 139,821.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.56s | 118,263.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 382.39s | 130,756.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.25s | 47,067.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.88s | 69,021.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 726.98s | 68,778.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.53s | 95,011.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.91s | 130,025.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 353.93s | 141,272.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,174.4 444.9,156.7 700.0,71.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="174.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="156.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.7 444.9,218.5 700.0,222.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#198754"/><circle cx="444.9" cy="218.5" r="4" fill="#198754"/><circle cx="700.0" cy="222.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.1 444.9,211.8 700.0,246.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="211.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.9 444.9,158.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.8 444.9,253.4 700.0,215.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.2 444.9,161.4 700.0,95.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.2" r="4" fill="#20c997"/><circle cx="444.9" cy="161.4" r="4" fill="#20c997"/><circle cx="700.0" cy="95.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.05s | 110,521.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.49s | 122,717.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 275.11s | 181,746.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.93s | 66,983.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.75s | 80,163.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 642.54s | 77,816.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.00s | 38,467.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 117.94s | 84,785.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 818.35s | 61,098.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,066.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.24s | 121,599.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 266.34s | 187,732.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.32s | 51,754.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.08s | 56,155.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 607.16s | 82,351.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.73s | 85,215.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.67s | 119,511.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 303.44s | 164,775.0 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-22T23:07:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.7 444.9,62.3 700.0,168.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="168.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,154.9 444.9,219.2 700.0,203.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="154.9" r="4" fill="#198754"/><circle cx="444.9" cy="219.2" r="4" fill="#198754"/><circle cx="700.0" cy="203.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.2 444.9,237.4 700.0,233.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.3 444.9,141.6 700.0,138.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,201.0 444.9,243.3 700.0,237.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="201.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.5 444.9,148.8 700.0,119.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.5" r="4" fill="#20c997"/><circle cx="444.9" cy="148.8" r="4" fill="#20c997"/><circle cx="700.0" cy="119.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,697.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.28s | 148,623.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 552.32s | 90,526.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,125.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 158.41s | 63,126.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 697.26s | 71,709.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.56s | 51,130.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 188.10s | 53,162.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.38s | 55,593.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.62s | 94,135.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 94.90s | 105,378.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 465.71s | 107,362.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.70s | 73,019.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 200.15s | 49,963.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 941.48s | 53,108.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.34s | 96,739.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.56s | 101,455.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 424.84s | 117,692.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,168.2 444.9,125.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.7 444.9,212.8 700.0,196.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.7" r="4" fill="#198754"/><circle cx="444.9" cy="212.8" r="4" fill="#198754"/><circle cx="700.0" cy="196.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,196.2 444.9,235.7 700.0,236.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="196.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,81.8 444.9,117.9 700.0,64.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="81.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="64.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.5 444.9,233.9 700.0,220.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,141.1 444.9,140.3 700.0,126.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="141.1" r="4" fill="#20c997"/><circle cx="444.9" cy="140.3" r="4" fill="#20c997"/><circle cx="700.0" cy="126.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.56s | 86,505.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.79s | 108,939.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.42s | 141,476.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.72s | 59,797.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 157.76s | 63,387.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 697.13s | 71,723.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.88s | 72,025.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.13s | 51,512.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 982.34s | 50,898.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.61s | 131,354.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.79s | 112,626.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 356.83s | 140,123.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.77s | 56,277.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 190.62s | 52,461.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 841.19s | 59,439.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,563.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.02s | 100,993.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 462.76s | 108,047.6 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-22T22:54:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,188.9 444.9,166.0 700.0,162.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="166.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="162.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.4 444.9,201.1 700.0,216.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.1" r="4" fill="#198754"/><circle cx="700.0" cy="216.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.7 444.9,239.4 700.0,252.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.7 444.9,157.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.4 444.9,250.4 700.0,237.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.5 444.9,116.7 700.0,141.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#20c997"/><circle cx="444.9" cy="116.7" r="4" fill="#20c997"/><circle cx="700.0" cy="141.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.87s | 101,296.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.37s | 117,137.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.16s | 119,572.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.54s | 73,882.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.73s | 92,822.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 610.18s | 81,943.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.68s | 50,820.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.91s | 66,262.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.32s | 57,122.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.41s | 106,303.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.36s | 122,903.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 264.43s | 189,083.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,362.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.57s | 58,628.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 740.70s | 67,503.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.42s | 74,526.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.07s | 151,356.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.70s | 134,156.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">188k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">251k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.9 444.9,62.3 700.0,182.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="182.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.5 444.9,185.6 700.0,234.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#198754"/><circle cx="444.9" cy="185.6" r="4" fill="#198754"/><circle cx="700.0" cy="234.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,271.4 700.0,262.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,210.5 444.9,104.1 700.0,192.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="210.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="192.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,272.9 444.9,221.1 700.0,270.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="272.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="270.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.5 444.9,142.9 700.0,204.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.5" r="4" fill="#20c997"/><circle cx="444.9" cy="142.9" r="4" fill="#20c997"/><circle cx="700.0" cy="204.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,202.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 43.89s | 227,857.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.03s | 127,867.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,719.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 80.09s | 124,858.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 595.92s | 83,903.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.14s | 70,731.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.23s | 53,126.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 825.11s | 60,597.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.61s | 104,047.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 51.84s | 192,916.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.00s | 119,047.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.27s | 51,907.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.08s | 95,166.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 921.17s | 54,278.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,530.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 62.32s | 160,467.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 457.20s | 109,361.8 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-22T22:42:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.7 444.9,84.7 700.0,85.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,184.6 700.0,177.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="177.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.0 444.9,212.8 700.0,175.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,100.4 444.9,90.4 700.0,102.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="100.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.4 444.9,226.5 700.0,135.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="135.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,93.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,253.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.84s | 133,623.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 375.99s | 132,983.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.27s | 65,470.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.56s | 80,282.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 594.27s | 84,136.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.59s | 48,567.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 153.34s | 65,215.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 587.18s | 85,153.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.98s | 125,266.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.57s | 130,601.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.22s | 124,000.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.79s | 67,604.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 172.70s | 57,902.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 469.59s | 106,476.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.46s | 74,277.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.53s | 128,974.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 343.42s | 145,594.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.2 444.9,78.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.2 444.9,188.1 700.0,253.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#198754"/><circle cx="444.9" cy="188.1" r="4" fill="#198754"/><circle cx="700.0" cy="253.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,187.4 700.0,225.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="187.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.1 444.9,102.7 700.0,111.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.5 444.9,225.8 700.0,190.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.9 444.9,108.3 700.0,75.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#20c997"/><circle cx="444.9" cy="108.3" r="4" fill="#20c997"/><circle cx="700.0" cy="75.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.99s | 100,050.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.85s | 137,264.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 342.27s | 146,085.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,123.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.09s | 78,681.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 1151.16s | 43,434.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.63s | 48,480.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 126.46s | 79,077.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 848.41s | 58,933.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,581.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.36s | 124,433.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.87s | 119,655.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.60s | 60,255.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.95s | 58,497.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 644.19s | 77,617.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.96s | 77,178.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.36s | 121,412.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.95s | 139,294.0 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-22T22:52:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,146.5 444.9,118.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.5 444.9,143.3 700.0,218.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.5" r="4" fill="#198754"/><circle cx="444.9" cy="143.3" r="4" fill="#198754"/><circle cx="700.0" cy="218.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.5 444.9,262.7 700.0,232.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.7 444.9,125.4 700.0,146.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.9 444.9,238.6 700.0,216.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.3 444.9,136.6 700.0,120.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#20c997"/><circle cx="444.9" cy="136.6" r="4" fill="#20c997"/><circle cx="700.0" cy="120.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.21s | 121,773.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.59s | 139,684.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 283.73s | 176,225.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.56s | 64,275.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 80.73s | 123,866.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 666.21s | 75,051.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.48s | 37,770.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.92s | 46,745.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 756.92s | 66,057.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,609.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.82s | 135,459.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.49s | 122,104.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.33s | 49,195.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 160.53s | 62,293.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 651.76s | 76,715.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.51s | 79,942.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.01s | 128,190.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.99s | 138,893.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,163.6 444.9,113.9 700.0,97.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="163.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.3 444.9,209.2 700.0,210.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.3" r="4" fill="#198754"/><circle cx="444.9" cy="209.2" r="4" fill="#198754"/><circle cx="700.0" cy="210.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.0 444.9,205.9 700.0,243.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="205.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,184.8 444.9,130.6 700.0,142.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,198.9 444.9,236.7 700.0,236.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="198.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.7 444.9,113.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.7" r="4" fill="#20c997"/><circle cx="444.9" cy="113.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.12s | 98,784.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.50s | 127,390.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.52s | 136,791.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.41s | 96,061.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.90s | 72,515.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 695.71s | 71,869.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.94s | 50,155.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 134.40s | 74,406.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 947.08s | 52,793.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.55s | 86,542.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.89s | 117,806.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 450.70s | 110,938.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.75s | 78,412.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.50s | 56,657.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 883.66s | 56,582.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.86s | 84,302.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.43s | 127,508.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 318.14s | 157,163.5 | PASS |

:::

:::

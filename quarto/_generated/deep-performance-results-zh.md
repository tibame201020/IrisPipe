## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-17T21:54:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,89.0 444.9,140.0 700.0,93.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="89.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.0 444.9,139.3 700.0,208.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.0" r="4" fill="#198754"/><circle cx="444.9" cy="139.3" r="4" fill="#198754"/><circle cx="700.0" cy="208.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.0 444.9,203.7 700.0,250.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="203.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.0 444.9,141.0 700.0,149.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.2 444.9,244.9 700.0,176.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="176.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.0 444.9,140.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.0" r="4" fill="#20c997"/><circle cx="444.9" cy="140.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.43s | 155,496.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.14s | 123,248.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 326.96s | 152,922.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.27s | 81,512.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 80.86s | 123,675.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 627.00s | 79,744.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,161.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 120.53s | 82,968.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 933.20s | 53,579.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,672.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.57s | 122,597.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 426.17s | 117,324.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.07s | 49,813.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.58s | 56,954.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 497.61s | 100,481.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.30s | 75,204.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.53s | 122,651.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 290.10s | 172,357.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,154.6 444.9,62.3 700.0,128.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.8 444.9,215.7 700.0,214.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#198754"/><circle cx="444.9" cy="215.7" r="4" fill="#198754"/><circle cx="700.0" cy="214.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.5 444.9,238.9 700.0,263.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.2 444.9,153.5 700.0,140.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.0 444.9,245.9 700.0,217.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.3 444.9,160.7 700.0,133.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.3" r="4" fill="#20c997"/><circle cx="444.9" cy="160.7" r="4" fill="#20c997"/><circle cx="700.0" cy="133.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.48s | 117,938.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 56.09s | 178,284.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.62s | 134,910.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.84s | 84,445.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.25s | 77,975.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.51s | 79,049.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.00s | 52,628.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 159.20s | 62,815.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1073.38s | 46,581.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.21s | 97,933.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.27s | 118,662.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 392.84s | 127,277.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.38s | 51,612.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.68s | 58,246.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 649.47s | 76,985.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.08s | 99,176.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 87.75s | 113,960.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.77s | 132,004.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-17T21:46:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,88.9 444.9,116.1 700.0,119.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="88.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.9 444.9,207.6 700.0,205.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.9" r="4" fill="#198754"/><circle cx="444.9" cy="207.6" r="4" fill="#198754"/><circle cx="700.0" cy="205.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.7 444.9,185.5 700.0,237.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="185.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.5 444.9,144.4 700.0,139.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,217.0 700.0,180.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="180.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.7 444.9,120.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#20c997"/><circle cx="444.9" cy="120.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.50s | 153,751.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.14s | 136,733.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 371.79s | 134,484.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.82s | 67,494.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.62s | 79,602.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 617.22s | 81,008.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.69s | 50,789.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 107.06s | 93,402.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 818.74s | 61,069.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.68s | 115,220.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.99s | 119,060.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.39s | 122,432.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,347.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 135.64s | 73,723.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 517.82s | 96,559.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.47s | 80,160.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.52s | 134,201.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 293.50s | 170,358.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">172k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">229k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,199.7 444.9,62.3 700.0,161.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="161.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.8 444.9,234.5 700.0,232.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#198754"/><circle cx="444.9" cy="234.5" r="4" fill="#198754"/><circle cx="700.0" cy="232.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.3 444.9,260.6 700.0,254.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.5 444.9,91.1 700.0,170.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="170.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.1 444.9,251.3 700.0,198.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.8 444.9,175.4 700.0,160.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.8" r="4" fill="#20c997"/><circle cx="444.9" cy="175.4" r="4" fill="#20c997"/><circle cx="700.0" cy="160.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.67s | 103,380.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 47.97s | 208,450.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 377.07s | 132,602.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,671.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.22s | 76,792.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 640.92s | 78,012.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.22s | 61,644.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.82s | 56,874.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 813.61s | 61,454.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.76s | 128,783.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.64s | 186,428.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.06s | 125,925.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.48s | 57,224.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.41s | 63,936.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 480.48s | 104,061.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.90s | 101,050.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.99s | 121,970.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.00s | 133,689.1 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:36:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">136k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.4 444.9,136.2 700.0,192.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="192.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.1 444.9,207.3 700.0,100.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.1" r="4" fill="#198754"/><circle cx="444.9" cy="207.3" r="4" fill="#198754"/><circle cx="700.0" cy="100.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.6 444.9,216.5 700.0,151.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="151.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.7 444.9,190.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="190.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.6 444.9,205.8 700.0,180.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="180.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,144.9 444.9,113.5 700.0,110.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="144.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.5" r="4" fill="#20c997"/><circle cx="700.0" cy="110.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.36s | 80,919.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 111.05s | 90,051.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 775.42s | 64,480.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.25s | 61,549.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 172.90s | 57,835.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 470.13s | 106,353.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.96s | 52,737.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.27s | 53,685.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 600.49s | 83,265.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,061.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 152.98s | 65,368.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.69s | 123,551.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.65s | 44,146.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.83s | 58,538.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 712.37s | 70,188.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,110.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 99.68s | 100,325.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 492.20s | 101,585.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,157.4 444.9,110.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.1 444.9,209.9 700.0,146.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#198754"/><circle cx="444.9" cy="209.9" r="4" fill="#198754"/><circle cx="700.0" cy="146.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.3 444.9,237.0 700.0,230.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.5 444.9,124.8 700.0,110.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.9 444.9,236.9 700.0,235.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.7 444.9,129.5 700.0,146.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.7" r="4" fill="#20c997"/><circle cx="444.9" cy="129.5" r="4" fill="#20c997"/><circle cx="700.0" cy="146.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.05s | 90,514.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 87.49s | 114,294.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 359.76s | 138,983.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.64s | 60,078.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 156.91s | 63,730.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 520.82s | 96,002.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.12s | 45,199.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 200.28s | 49,929.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 937.11s | 53,355.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.64s | 94,002.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.33s | 107,142.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 436.20s | 114,626.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.35s | 42,833.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 200.01s | 49,998.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 985.83s | 50,718.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.29s | 69,974.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 95.51s | 104,703.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 521.67s | 95,845.3 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-17T21:56:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,171.3 444.9,105.2 700.0,129.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.6 444.9,202.5 700.0,201.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.6" r="4" fill="#198754"/><circle cx="444.9" cy="202.5" r="4" fill="#198754"/><circle cx="700.0" cy="201.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.2 444.9,241.6 700.0,194.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="194.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.1 444.9,117.9 700.0,117.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.9 444.9,222.9 700.0,211.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.4 444.9,62.3 700.0,107.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="107.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.02s | 99,850.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.34s | 140,166.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 399.06s | 125,296.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.98s | 66,760.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.69s | 80,847.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.97s | 81,437.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.66s | 53,587.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.44s | 57,001.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 584.31s | 85,571.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.25s | 97,570.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.51s | 132,427.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 376.68s | 132,737.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.22s | 49,453.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 146.23s | 68,386.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 661.88s | 75,541.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.38s | 74,766.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.11s | 166,370.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.87s | 138,938.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,164.5 444.9,118.2 700.0,108.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.4 444.9,208.3 700.0,209.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#198754"/><circle cx="444.9" cy="208.3" r="4" fill="#198754"/><circle cx="700.0" cy="209.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.5 444.9,231.1 700.0,192.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="192.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.6 444.9,62.3 700.0,101.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,201.2 444.9,241.4 700.0,241.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="201.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.3 444.9,121.9 700.0,124.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.3" r="4" fill="#20c997"/><circle cx="444.9" cy="121.9" r="4" fill="#20c997"/><circle cx="700.0" cy="124.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.41s | 106,258.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.99s | 135,147.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 354.32s | 141,116.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.92s | 67,033.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.64s | 78,963.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.57s | 78,300.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.54s | 73,844.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 154.36s | 64,783.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 561.38s | 89,066.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.36s | 106,814.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.83s | 169,981.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 342.82s | 145,848.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.99s | 83,416.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.44s | 58,330.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.81s | 58,356.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.11s | 70,891.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 75.28s | 132,835.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.19s | 131,512.2 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-17T21:50:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.5 444.9,141.3 700.0,143.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.3 444.9,194.6 700.0,214.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#198754"/><circle cx="444.9" cy="194.6" r="4" fill="#198754"/><circle cx="700.0" cy="214.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.3 444.9,248.0 700.0,255.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,173.3 444.9,91.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="173.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,203.9 444.9,249.1 700.0,236.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="203.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.8 444.9,146.7 700.0,142.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.8" r="4" fill="#20c997"/><circle cx="444.9" cy="146.7" r="4" fill="#20c997"/><circle cx="700.0" cy="142.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,419.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.78s | 130,235.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 387.55s | 129,015.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.22s | 65,707.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.93s | 94,402.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 615.58s | 81,224.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.05s | 47,515.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.90s | 58,515.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 933.07s | 53,586.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,683.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.02s | 163,891.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 272.72s | 183,336.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.35s | 88,121.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.09s | 57,774.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 756.87s | 66,061.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.12s | 109,697.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.00s | 126,590.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 385.75s | 129,617.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">190k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">254k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,216.8 444.9,62.3 700.0,165.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="165.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,261.6 444.9,240.8 700.0,242.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#198754"/><circle cx="444.9" cy="240.8" r="4" fill="#198754"/><circle cx="700.0" cy="242.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.9 444.9,245.9 700.0,264.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,245.3 444.9,178.1 700.0,188.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="188.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.5 444.9,265.5 700.0,235.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.2 444.9,183.1 700.0,176.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.2" r="4" fill="#20c997"/><circle cx="444.9" cy="183.1" r="4" fill="#20c997"/><circle cx="700.0" cy="176.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,910.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 43.36s | 230,616.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 349.48s | 143,068.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.11s | 62,061.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.57s | 79,637.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.89s | 78,507.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.57s | 73,681.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 132.78s | 75,310.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 834.00s | 59,952.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 13.18s | 75,872.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 75.36s | 132,698.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.05s | 123,748.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.09s | 62,146.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.06s | 58,803.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 595.07s | 84,024.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,109.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.84s | 128,473.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 372.46s | 134,243.0 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-16T22:25:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.0 444.9,149.2 700.0,75.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.9 444.9,204.3 700.0,221.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#198754"/><circle cx="444.9" cy="204.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.9 444.9,263.2 700.0,234.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.0 444.9,132.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="132.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.0 444.9,250.4 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.7 444.9,130.0 700.0,125.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#20c997"/><circle cx="444.9" cy="130.0" r="4" fill="#20c997"/><circle cx="700.0" cy="125.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.32s | 120,149.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.11s | 117,500.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 304.60s | 164,150.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.97s | 91,141.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.02s | 82,628.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 699.07s | 71,523.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.30s | 41,143.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 220.38s | 45,376.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 788.90s | 63,379.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.12s | 140,390.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.11s | 128,032.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 289.92s | 172,462.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.82s | 59,442.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 186.85s | 53,519.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 712.76s | 70,149.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.69s | 103,241.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.15s | 129,612.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.96s | 132,287.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.6 444.9,62.3 700.0,128.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.6 444.9,216.1 700.0,145.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#198754"/><circle cx="444.9" cy="216.1" r="4" fill="#198754"/><circle cx="700.0" cy="145.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,278.5 444.9,234.8 700.0,264.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="278.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.4 444.9,141.1 700.0,153.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.3 444.9,234.3 700.0,183.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.6 444.9,130.5 700.0,66.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.6" r="4" fill="#20c997"/><circle cx="444.9" cy="130.5" r="4" fill="#20c997"/><circle cx="700.0" cy="66.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,822.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.21s | 168,890.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 390.66s | 127,989.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.57s | 60,342.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.85s | 73,610.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 425.91s | 117,395.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.57s | 34,995.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 161.21s | 62,030.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1149.95s | 43,480.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.87s | 91,996.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.28s | 120,072.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 444.74s | 112,426.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.33s | 46,882.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.36s | 62,360.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 532.98s | 93,812.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,121.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.95s | 126,662.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 300.97s | 166,127.9 | PASS |

:::

:::

## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:36:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,126.1 700.0,125.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.4 444.9,195.4 700.0,200.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.4" r="4" fill="#198754"/><circle cx="444.9" cy="195.4" r="4" fill="#198754"/><circle cx="700.0" cy="200.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.7 444.9,236.9 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.9 444.9,127.4 700.0,133.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.3 444.9,198.1 700.0,200.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.7 444.9,77.4 700.0,112.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.7" r="4" fill="#20c997"/><circle cx="444.9" cy="77.4" r="4" fill="#20c997"/><circle cx="700.0" cy="112.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.20s | 161,186.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.01s | 123,435.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.68s | 123,554.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.91s | 71,895.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.21s | 82,504.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 628.02s | 79,615.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.43s | 69,300.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.50s | 57,970.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 944.69s | 52,927.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.66s | 103,498.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.50s | 122,696.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 420.63s | 118,869.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.07s | 52,452.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 123.62s | 80,891.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 628.07s | 79,609.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.59s | 79,402.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 65.69s | 152,232.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.35s | 131,804.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,154.5 444.9,112.2 700.0,118.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="118.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,215.0 700.0,204.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="215.0" r="4" fill="#198754"/><circle cx="700.0" cy="204.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,199.4 444.9,243.9 700.0,212.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="199.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,87.2 700.0,142.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.0 444.9,246.4 700.0,240.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.3 444.9,144.2 700.0,107.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.3" r="4" fill="#20c997"/><circle cx="444.9" cy="144.2" r="4" fill="#20c997"/><circle cx="700.0" cy="107.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,892.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.75s | 139,367.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.95s | 135,518.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.04s | 76,716.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.23s | 75,057.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 612.52s | 81,629.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 11.79s | 84,803.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.38s | 57,019.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 653.22s | 76,544.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.86s | 170,619.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 64.51s | 155,007.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.20s | 120,713.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.84s | 84,466.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.50s | 55,402.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 844.86s | 59,181.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,071.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.79s | 119,343.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 350.49s | 142,658.6 | PASS |

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
  **最新量測：** `2026-10-23T22:59:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.0 444.9,138.9 700.0,67.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="67.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,154.1 444.9,146.4 700.0,194.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="154.1" r="4" fill="#198754"/><circle cx="444.9" cy="146.4" r="4" fill="#198754"/><circle cx="700.0" cy="194.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.5 444.9,236.8 700.0,231.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,153.7 444.9,115.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.2 444.9,173.9 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="173.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.9 444.9,113.8 700.0,116.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.8" r="4" fill="#20c997"/><circle cx="700.0" cy="116.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.44s | 87,427.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 102.09s | 97,954.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 374.68s | 133,446.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.07s | 90,342.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 106.15s | 94,207.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 710.23s | 70,400.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 28.01s | 35,705.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.88s | 49,049.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 963.80s | 51,878.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.04s | 90,538.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 91.25s | 109,591.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 367.04s | 136,226.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.11s | 52,342.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 124.25s | 80,479.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1021.99s | 48,924.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.81s | 59,477.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 90.51s | 110,486.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 457.53s | 109,282.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">119k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.2 444.9,99.1 700.0,104.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="99.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,85.8 444.9,95.5 700.0,135.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="85.8" r="4" fill="#198754"/><circle cx="444.9" cy="95.5" r="4" fill="#198754"/><circle cx="700.0" cy="135.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,169.6 444.9,213.1 700.0,196.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="169.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.0 444.9,114.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.8 444.9,179.5 700.0,207.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="179.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.7 444.9,85.9 700.0,79.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#20c997"/><circle cx="444.9" cy="85.9" r="4" fill="#20c997"/><circle cx="700.0" cy="79.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.18s | 89,429.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 106.58s | 93,828.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 544.37s | 91,849.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.09s | 99,098.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.96s | 95,273.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 630.77s | 79,267.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.20s | 65,793.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.20s | 48,496.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 904.94s | 55,252.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.56s | 94,670.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 114.07s | 87,668.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 460.94s | 108,474.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.73s | 53,396.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.66s | 61,857.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 987.83s | 50,615.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.78s | 63,367.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.92s | 99,086.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 492.51s | 101,520.6 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:40:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,110.8 444.9,93.8 700.0,69.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="69.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.4 444.9,169.2 700.0,168.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.4" r="4" fill="#198754"/><circle cx="444.9" cy="169.2" r="4" fill="#198754"/><circle cx="700.0" cy="168.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.8 444.9,194.6 700.0,169.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="194.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="169.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.6 444.9,72.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="72.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,209.7 444.9,199.8 700.0,145.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="209.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="145.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.4 444.9,83.9 700.0,62.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.4" r="4" fill="#20c997"/><circle cx="444.9" cy="83.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.26s | 108,038.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.04s | 116,223.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.51s | 128,037.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.77s | 67,723.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.15s | 79,902.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.22s | 80,099.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,161.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 147.80s | 67,657.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 627.89s | 79,632.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.74s | 114,403.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.11s | 126,399.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 380.51s | 131,402.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.56s | 60,375.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.57s | 65,118.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 547.82s | 91,270.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.78s | 72,568.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.66s | 120,979.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.76s | 131,315.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">171k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">227k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.6 444.9,153.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="153.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,249.7 444.9,179.9 700.0,159.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="249.7" r="4" fill="#198754"/><circle cx="444.9" cy="179.9" r="4" fill="#198754"/><circle cx="700.0" cy="159.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.9 444.9,260.8 700.0,257.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.0 444.9,180.7 700.0,169.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="180.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.6 444.9,256.9 700.0,202.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="202.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.5 444.9,167.0 700.0,160.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.5" r="4" fill="#20c997"/><circle cx="444.9" cy="167.0" r="4" fill="#20c997"/><circle cx="700.0" cy="160.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,630.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.72s | 137,517.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 241.91s | 206,690.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,616.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.05s | 117,582.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 376.44s | 132,822.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.90s | 47,849.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.75s | 56,258.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 855.33s | 58,456.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.37s | 135,685.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.50s | 116,964.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.84s | 125,678.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,355.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.88s | 59,214.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 498.10s | 100,380.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.12s | 76,190.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.53s | 127,338.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.88s | 132,317.5 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:37:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.7 444.9,62.3 700.0,131.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.0 444.9,197.7 700.0,195.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.0" r="4" fill="#198754"/><circle cx="444.9" cy="197.7" r="4" fill="#198754"/><circle cx="700.0" cy="195.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.1 444.9,237.9 700.0,233.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.6 444.9,137.1 700.0,115.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="115.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.9 444.9,213.0 700.0,288.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="288.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.7 444.9,124.2 700.0,133.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.7" r="4" fill="#20c997"/><circle cx="444.9" cy="124.2" r="4" fill="#20c997"/><circle cx="700.0" cy="133.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,385.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 60.27s | 165,911.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.11s | 123,728.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.50s | 64,507.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 119.71s | 83,533.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 587.30s | 85,135.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.83s | 50,426.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.22s | 59,095.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 806.70s | 61,981.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.64s | 93,949.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.07s | 120,383.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 374.31s | 133,578.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.33s | 51,743.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 134.74s | 74,218.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1759.18s | 28,422.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,277.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.97s | 128,251.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 406.81s | 122,907.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">194k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">259k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,228.5 444.9,62.3 700.0,169.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="228.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="169.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.5 444.9,213.1 700.0,237.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#198754"/><circle cx="444.9" cy="213.1" r="4" fill="#198754"/><circle cx="700.0" cy="237.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.4 444.9,225.8 700.0,265.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="265.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.0 444.9,201.0 700.0,186.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="201.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="186.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,275.9 444.9,267.5 700.0,265.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="275.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="267.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="265.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,243.4 444.9,179.5 700.0,175.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="243.4" r="4" fill="#20c997"/><circle cx="444.9" cy="179.5" r="4" fill="#20c997"/><circle cx="700.0" cy="175.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.87s | 92,038.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 42.44s | 235,649.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 350.28s | 142,741.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.52s | 104,997.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 94.96s | 105,311.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 590.52s | 84,671.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.64s | 56,686.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 106.01s | 94,329.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 828.69s | 60,335.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.70s | 114,955.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.34s | 115,825.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.40s | 128,072.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.59s | 51,041.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.34s | 58,364.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 833.02s | 60,022.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.64s | 79,113.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 74.45s | 134,316.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 361.86s | 138,174.2 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-23T22:45:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,201.8 444.9,150.6 700.0,147.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.8 444.9,151.0 700.0,150.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#198754"/><circle cx="444.9" cy="151.0" r="4" fill="#198754"/><circle cx="700.0" cy="150.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.5 444.9,261.4 700.0,264.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.1 444.9,136.1 700.0,139.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="136.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.1 444.9,250.2 700.0,237.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.7 444.9,139.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.7" r="4" fill="#20c997"/><circle cx="444.9" cy="139.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,682.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.29s | 118,638.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.59s | 120,892.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.16s | 76,005.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 84.48s | 118,375.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 422.24s | 118,415.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.74s | 42,115.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 211.14s | 47,362.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1105.91s | 45,211.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,549.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.16s | 127,947.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.58s | 125,762.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.03s | 47,555.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.35s | 54,539.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 800.66s | 62,448.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.62s | 116,009.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.68s | 125,505.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 284.99s | 175,443.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,145.0 444.9,94.5 700.0,81.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="81.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.5 444.9,91.8 700.0,177.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.5" r="4" fill="#198754"/><circle cx="444.9" cy="91.8" r="4" fill="#198754"/><circle cx="700.0" cy="177.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.6 444.9,237.1 700.0,180.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="180.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.3 444.9,103.8 700.0,84.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.4 444.9,185.1 700.0,114.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="185.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="114.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,161.1 444.9,84.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#20c997"/><circle cx="444.9" cy="84.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,083.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.72s | 115,320.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 411.79s | 121,422.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.02s | 58,757.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.74s | 116,627.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 660.70s | 75,677.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.98s | 47,662.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.02s | 46,943.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 672.64s | 74,333.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.11s | 89,984.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.20s | 110,868.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.04s | 120,180.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.13s | 49,667.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 139.16s | 71,859.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 473.76s | 105,538.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.00s | 83,361.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.31s | 120,027.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.36s | 130,765.4 | PASS |

:::

:::

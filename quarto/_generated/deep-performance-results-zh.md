## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-26T23:50:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,138.0 444.9,102.7 700.0,108.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="138.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,140.9 444.9,109.7 700.0,184.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="140.9" r="4" fill="#198754"/><circle cx="444.9" cy="109.7" r="4" fill="#198754"/><circle cx="700.0" cy="184.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.4 444.9,216.9 700.0,234.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.6 444.9,113.9 700.0,84.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="113.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,178.3 444.9,233.1 700.0,148.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="178.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="148.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.7 444.9,62.3 700.0,90.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="90.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.36s | 106,860.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.37s | 125,989.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 406.68s | 122,946.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.50s | 105,274.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.83s | 122,204.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.15s | 81,546.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.48s | 51,326.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 156.12s | 64,053.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 916.68s | 54,544.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.02s | 110,852.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.39s | 119,924.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 367.61s | 136,013.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.77s | 84,990.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.92s | 55,273.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 494.59s | 101,094.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.19s | 82,068.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.59s | 147,944.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.19s | 132,911.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.9 444.9,62.3 700.0,117.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.3 444.9,216.9 700.0,214.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.3" r="4" fill="#198754"/><circle cx="444.9" cy="216.9" r="4" fill="#198754"/><circle cx="700.0" cy="214.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.3 444.9,249.4 700.0,239.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,67.5 444.9,153.6 700.0,77.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="67.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,198.7 444.9,246.0 700.0,162.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="198.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.6 444.9,149.5 700.0,126.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.6" r="4" fill="#20c997"/><circle cx="444.9" cy="149.5" r="4" fill="#20c997"/><circle cx="700.0" cy="126.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,930.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.63s | 173,520.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.73s | 138,606.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.16s | 65,967.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.12s | 75,118.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.75s | 76,952.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.91s | 45,645.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 183.58s | 54,471.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 825.82s | 60,546.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.88s | 170,212.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.64s | 115,416.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 305.40s | 163,720.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.53s | 86,715.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.54s | 56,643.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 455.18s | 109,846.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.52s | 86,783.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.71s | 118,044.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 376.17s | 132,920.4 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T23:16:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,178.9 444.9,69.8 700.0,126.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.4 444.9,206.8 700.0,109.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.4" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="109.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,197.4 700.0,235.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="197.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,75.9 444.9,62.3 700.0,123.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="75.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.4 444.9,184.0 700.0,239.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="184.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.4 444.9,113.9 700.0,121.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#20c997"/><circle cx="444.9" cy="113.9" r="4" fill="#20c997"/><circle cx="700.0" cy="121.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.47s | 95,465.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.67s | 162,163.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 392.05s | 127,533.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.45s | 74,349.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.61s | 78,364.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 362.86s | 137,796.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.30s | 51,805.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 118.83s | 84,156.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 821.51s | 60,863.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.31s | 158,428.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.96s | 166,766.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.57s | 129,341.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.05s | 49,875.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 108.33s | 92,308.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 852.96s | 58,619.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.02s | 76,781.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.97s | 135,189.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.23s | 130,468.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.5 444.9,75.1 700.0,133.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.2 444.9,144.4 700.0,200.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.2" r="4" fill="#198754"/><circle cx="444.9" cy="144.4" r="4" fill="#198754"/><circle cx="700.0" cy="200.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.4 444.9,214.5 700.0,246.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,91.0 444.9,158.5 700.0,154.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="91.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.6 444.9,197.8 700.0,224.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.4 444.9,153.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.4" r="4" fill="#20c997"/><circle cx="444.9" cy="153.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,895.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.19s | 174,843.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.51s | 135,683.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,904.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 77.97s | 128,256.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 551.25s | 90,703.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.77s | 48,148.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 123.39s | 81,047.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 835.55s | 59,840.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.09s | 164,149.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.22s | 118,739.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.68s | 121,748.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.04s | 45,365.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 108.32s | 92,320.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 670.53s | 74,567.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.02s | 83,187.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.97s | 121,997.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 272.48s | 183,499.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-27T00:11:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,163.8 444.9,132.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="163.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="132.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.3 444.9,203.8 700.0,107.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#198754"/><circle cx="444.9" cy="203.8" r="4" fill="#198754"/><circle cx="700.0" cy="107.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,194.3 444.9,238.9 700.0,227.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="194.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.8 444.9,121.2 700.0,102.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.8 444.9,235.7 700.0,222.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.8 444.9,118.6 700.0,77.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#20c997"/><circle cx="444.9" cy="118.6" r="4" fill="#20c997"/><circle cx="700.0" cy="77.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.77s | 84,961.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.61s | 100,392.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 369.32s | 135,384.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.30s | 65,372.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 153.50s | 65,145.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 442.77s | 112,925.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.32s | 69,837.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 209.56s | 47,719.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 938.72s | 53,263.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.16s | 98,396.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 94.22s | 106,132.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 432.68s | 115,558.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.38s | 46,772.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 202.85s | 49,297.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 898.47s | 55,650.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.60s | 64,119.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 93.10s | 107,412.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.82s | 127,937.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">157k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,107.4 444.9,104.0 700.0,86.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="107.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.9 444.9,205.6 700.0,200.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.9" r="4" fill="#198754"/><circle cx="444.9" cy="205.6" r="4" fill="#198754"/><circle cx="700.0" cy="200.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.1 444.9,232.8 700.0,236.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,125.6 700.0,67.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="67.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.4 444.9,238.4 700.0,233.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.4 444.9,150.5 700.0,142.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#20c997"/><circle cx="444.9" cy="150.5" r="4" fill="#20c997"/><circle cx="700.0" cy="142.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.42s | 118,793.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.96s | 120,538.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 385.07s | 129,847.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.22s | 61,644.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 148.09s | 67,526.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 714.00s | 70,028.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,939.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.41s | 53,357.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 973.36s | 51,368.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.03s | 142,328.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 91.52s | 109,271.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 357.75s | 139,760.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.38s | 44,680.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 198.40s | 50,403.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 943.92s | 52,970.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 16.29s | 61,387.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.83s | 96,307.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 497.36s | 100,530.2 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-26T23:56:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">203k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,116.5 444.9,147.1 700.0,157.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="157.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.2 444.9,207.6 700.0,176.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.2" r="4" fill="#198754"/><circle cx="444.9" cy="207.6" r="4" fill="#198754"/><circle cx="700.0" cy="176.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,220.6 444.9,253.1 700.0,233.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.8 444.9,139.7 700.0,134.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.6 444.9,211.9 700.0,220.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.6 444.9,92.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.6" r="4" fill="#20c997"/><circle cx="444.9" cy="92.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.76s | 147,972.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.58s | 127,263.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 416.57s | 120,029.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.45s | 74,338.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.88s | 86,299.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 464.72s | 107,591.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.90s | 77,507.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.24s | 55,481.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 727.52s | 68,727.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.28s | 107,793.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.59s | 132,297.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 368.61s | 135,646.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.59s | 51,046.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 119.98s | 83,344.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 642.25s | 77,850.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,653.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.93s | 164,122.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 270.68s | 184,717.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">170k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">226k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,130.0 444.9,150.5 700.0,151.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.5 444.9,166.5 700.0,230.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#198754"/><circle cx="444.9" cy="166.5" r="4" fill="#198754"/><circle cx="700.0" cy="230.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.0 444.9,266.6 700.0,255.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.0 444.9,178.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.6 444.9,209.1 700.0,259.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="209.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="259.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.4 444.9,174.5 700.0,164.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#20c997"/><circle cx="444.9" cy="174.5" r="4" fill="#20c997"/><circle cx="700.0" cy="164.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.47s | 154,464.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.91s | 139,055.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 361.08s | 138,473.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.04s | 71,209.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.74s | 126,993.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.92s | 78,998.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.43s | 54,253.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.00s | 51,546.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 833.31s | 60,001.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.09s | 110,011.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.90s | 117,788.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 243.26s | 205,538.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.29s | 49,278.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.37s | 94,905.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 879.18s | 56,871.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.33s | 81,083.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.70s | 120,923.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.54s | 128,355.9 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-26T23:46:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.8 444.9,141.5 700.0,153.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="153.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,181.0 700.0,133.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="181.0" r="4" fill="#198754"/><circle cx="700.0" cy="133.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.7 444.9,248.7 700.0,243.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,225.9 444.9,147.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.3 444.9,237.9 700.0,162.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.3 444.9,143.5 700.0,124.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.3" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="124.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.89s | 91,793.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.94s | 126,673.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 419.92s | 119,069.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.76s | 67,746.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 99.21s | 100,793.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 378.37s | 132,144.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.50s | 51,279.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.03s | 56,488.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 834.32s | 59,929.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 14.00s | 71,449.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.64s | 122,492.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 280.02s | 178,558.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.70s | 53,487.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.34s | 63,555.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 441.47s | 113,257.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,339.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.78s | 125,346.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.93s | 138,149.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,175.2 444.9,120.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="120.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.3 444.9,193.5 700.0,213.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.3" r="4" fill="#198754"/><circle cx="444.9" cy="193.5" r="4" fill="#198754"/><circle cx="700.0" cy="213.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.3 444.9,250.7 700.0,260.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.7 444.9,152.4 700.0,138.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="152.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.3 444.9,247.4 700.0,186.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,226.7 444.9,144.7 700.0,131.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="226.7" r="4" fill="#20c997"/><circle cx="444.9" cy="144.7" r="4" fill="#20c997"/><circle cx="700.0" cy="131.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.38s | 106,666.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.90s | 143,067.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 274.59s | 182,092.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,216.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 105.83s | 94,489.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 613.71s | 81,471.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,582.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.57s | 56,315.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1006.22s | 49,690.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.48s | 133,761.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.03s | 121,902.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 381.96s | 130,904.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,527.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.02s | 58,474.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 504.20s | 99,166.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.82s | 72,338.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.69s | 127,082.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.25s | 135,775.9 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-26T23:58:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.0 444.9,111.5 700.0,116.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.1 444.9,191.6 700.0,188.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.1" r="4" fill="#198754"/><circle cx="444.9" cy="191.6" r="4" fill="#198754"/><circle cx="700.0" cy="188.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.0 444.9,190.9 700.0,239.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="190.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.9 444.9,113.7 700.0,104.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="113.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.0 444.9,171.9 700.0,153.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="171.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="153.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.1 444.9,62.3 700.0,71.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="71.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.18s | 82,122.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.60s | 115,469.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 442.67s | 112,950.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.64s | 73,286.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.96s | 74,096.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 662.49s | 75,473.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.76s | 43,932.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 134.38s | 74,418.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1011.49s | 49,432.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,896.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.47s | 114,330.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 419.03s | 119,324.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.28s | 46,999.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 118.68s | 84,260.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 534.37s | 93,569.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.34s | 81,043.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.98s | 140,880.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.66s | 135,994.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,130.3 444.9,146.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.9 444.9,222.3 700.0,225.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#198754"/><circle cx="444.9" cy="222.3" r="4" fill="#198754"/><circle cx="700.0" cy="225.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.8 444.9,236.8 700.0,266.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="266.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,206.8 444.9,167.2 700.0,154.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.0 444.9,198.4 700.0,228.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.5 444.9,155.7 700.0,148.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#20c997"/><circle cx="444.9" cy="155.7" r="4" fill="#20c997"/><circle cx="700.0" cy="148.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.29s | 137,230.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.31s | 126,087.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 273.50s | 182,815.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.56s | 60,375.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.38s | 75,541.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 683.19s | 73,186.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.53s | 36,322.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 151.86s | 65,849.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1084.70s | 46,095.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.64s | 85,932.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.90s | 112,482.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.96s | 121,075.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.89s | 52,949.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 109.24s | 91,543.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 702.23s | 71,201.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.27s | 75,380.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.18s | 120,215.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.32s | 125,211.9 | PASS |

:::

:::

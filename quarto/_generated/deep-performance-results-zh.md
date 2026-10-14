## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T00:02:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.3 444.9,135.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="135.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.2 444.9,206.7 700.0,204.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.2" r="4" fill="#198754"/><circle cx="444.9" cy="206.7" r="4" fill="#198754"/><circle cx="700.0" cy="204.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.4 444.9,241.5 700.0,247.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.1 444.9,131.0 700.0,120.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.5 444.9,228.8 700.0,238.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,134.9 700.0,125.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="134.9" r="4" fill="#20c997"/><circle cx="700.0" cy="125.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.06s | 99,383.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.65s | 122,474.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 298.27s | 167,631.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.17s | 70,591.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.84s | 78,837.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.62s | 80,049.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.69s | 48,325.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.93s | 57,493.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 929.10s | 53,815.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.35s | 106,906.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.76s | 125,374.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.57s | 131,729.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.59s | 68,544.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.18s | 65,283.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 845.83s | 59,113.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.66s | 85,748.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.32s | 122,966.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.98s | 128,874.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">157k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,83.7 700.0,87.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="87.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,173.9 444.9,112.4 700.0,185.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="173.9" r="4" fill="#198754"/><circle cx="444.9" cy="112.4" r="4" fill="#198754"/><circle cx="700.0" cy="185.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,213.6 700.0,227.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.1 444.9,160.4 700.0,98.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.6 444.9,169.3 700.0,219.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="169.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,127.8 444.9,112.3 700.0,88.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="127.8" r="4" fill="#20c997"/><circle cx="444.9" cy="112.3" r="4" fill="#20c997"/><circle cx="700.0" cy="88.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.03s | 142,328.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.24s | 131,163.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 387.49s | 129,036.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.90s | 84,061.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 86.08s | 116,172.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 640.92s | 78,012.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.16s | 47,252.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 157.83s | 63,359.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 894.64s | 55,888.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.78s | 102,249.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 109.72s | 91,137.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.74s | 123,537.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,825.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 115.67s | 86,452.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.63s | 60,268.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.25s | 108,143.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.03s | 116,233.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.35s | 128,420.1 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T22:44:10Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,193.4 444.9,157.3 700.0,166.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="166.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.8 444.9,131.7 700.0,216.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#198754"/><circle cx="444.9" cy="131.7" r="4" fill="#198754"/><circle cx="700.0" cy="216.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.8 444.9,249.9 700.0,205.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.0 444.9,62.3 700.0,149.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.4 444.9,236.4 700.0,248.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.4 444.9,91.8 700.0,127.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.4" r="4" fill="#20c997"/><circle cx="444.9" cy="91.8" r="4" fill="#20c997"/><circle cx="700.0" cy="127.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.52s | 95,048.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.82s | 119,307.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 441.79s | 113,176.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.29s | 69,959.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 73.27s | 136,490.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 628.90s | 79,503.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.82s | 50,456.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.11s | 57,107.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 575.33s | 86,906.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,069.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.62s | 183,069.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.26s | 124,296.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.40s | 57,481.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.16s | 66,152.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 859.07s | 58,202.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.66s | 68,226.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 61.27s | 163,225.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.73s | 139,381.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">165k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">220k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.2 444.9,62.3 700.0,100.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="100.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.8 444.9,231.7 700.0,228.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.8" r="4" fill="#198754"/><circle cx="444.9" cy="231.7" r="4" fill="#198754"/><circle cx="700.0" cy="228.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.4 444.9,259.3 700.0,257.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.4 444.9,175.7 700.0,170.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="175.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="170.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.7 444.9,192.1 700.0,190.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,243.3 444.9,147.1 700.0,86.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#20c997"/><circle cx="444.9" cy="147.1" r="4" fill="#20c997"/><circle cx="700.0" cy="86.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,156.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 50.05s | 199,816.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 291.56s | 171,488.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.75s | 72,711.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.14s | 75,677.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 642.81s | 77,783.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.12s | 47,337.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.20s | 55,492.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.16s | 57,132.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.85s | 101,553.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.68s | 116,710.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.04s | 120,762.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.88s | 52,977.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 95.50s | 104,715.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 473.66s | 105,561.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.88s | 67,195.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 72.62s | 137,697.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 274.79s | 181,960.4 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T00:22:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,128.3 444.9,115.7 700.0,63.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="63.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,147.9 444.9,99.9 700.0,199.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="147.9" r="4" fill="#198754"/><circle cx="444.9" cy="99.9" r="4" fill="#198754"/><circle cx="700.0" cy="199.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,211.0 444.9,207.4 700.0,195.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,107.6 444.9,62.3 700.0,74.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="107.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="74.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.5 444.9,210.3 700.0,212.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,92.0 444.9,65.7 700.0,83.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="92.0" r="4" fill="#20c997"/><circle cx="444.9" cy="65.7" r="4" fill="#20c997"/><circle cx="700.0" cy="83.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.93s | 83,801.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 112.51s | 88,879.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 454.36s | 110,043.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.19s | 75,843.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 104.92s | 95,313.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 911.03s | 54,883.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.90s | 50,261.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.41s | 51,703.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 884.01s | 56,560.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.85s | 92,191.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.46s | 110,549.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 473.28s | 105,646.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.93s | 45,591.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.90s | 50,530.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1005.51s | 49,726.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.15s | 98,483.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 91.60s | 109,171.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 491.15s | 101,800.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,79.0 700.0,103.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.3 444.9,122.7 700.0,192.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#198754"/><circle cx="444.9" cy="122.7" r="4" fill="#198754"/><circle cx="700.0" cy="192.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.4 444.9,223.8 700.0,220.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.9 444.9,130.1 700.0,97.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,183.1 444.9,151.6 700.0,165.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="151.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="165.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.0 444.9,123.0 700.0,157.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#20c997"/><circle cx="444.9" cy="123.0" r="4" fill="#20c997"/><circle cx="700.0" cy="157.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.87s | 127,016.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.88s | 119,217.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 463.21s | 107,942.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.30s | 61,345.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 101.16s | 98,851.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 754.45s | 66,273.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.23s | 51,991.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.13s | 51,778.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 934.50s | 53,504.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.17s | 98,338.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 104.81s | 95,414.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 452.29s | 110,549.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.13s | 70,756.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 117.05s | 85,435.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 633.93s | 78,872.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.44s | 64,750.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 101.26s | 98,752.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 606.36s | 82,459.7 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-14T00:02:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.6 444.9,66.9 700.0,114.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="66.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.3 444.9,186.1 700.0,125.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#198754"/><circle cx="444.9" cy="186.1" r="4" fill="#198754"/><circle cx="700.0" cy="125.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.4 444.9,237.1 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,122.7 700.0,137.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="122.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,193.9 444.9,239.0 700.0,225.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.6 444.9,162.9 700.0,118.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#20c997"/><circle cx="444.9" cy="162.9" r="4" fill="#20c997"/><circle cx="700.0" cy="118.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,210.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.31s | 160,477.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 379.08s | 131,896.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.50s | 74,068.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.20s | 89,124.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 399.52s | 125,148.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,399.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.71s | 58,580.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 857.19s | 58,330.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.12s | 163,265.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.69s | 127,074.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 422.94s | 118,219.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.84s | 84,445.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.05s | 57,456.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 761.23s | 65,683.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.01s | 76,864.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 97.05s | 103,043.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 386.50s | 129,366.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.6 444.9,134.8 700.0,107.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.5 444.9,205.3 700.0,203.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.3" r="4" fill="#198754"/><circle cx="700.0" cy="203.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,249.8 444.9,239.8 700.0,241.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="249.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.8 444.9,138.7 700.0,183.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="183.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,239.6 700.0,148.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="148.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.1 444.9,195.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#20c997"/><circle cx="444.9" cy="195.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.36s | 106,883.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.37s | 119,941.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.86s | 136,292.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,216.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.73s | 77,684.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.55s | 79,045.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.59s | 51,043.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.30s | 57,045.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 896.26s | 55,787.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,167.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.05s | 117,572.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 551.61s | 90,644.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.28s | 49,312.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.06s | 57,121.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 447.24s | 111,797.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,631.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 119.32s | 83,807.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 306.06s | 163,366.1 | PASS |

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
  **最新量測：** `2026-10-14T00:04:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,155.9 444.9,121.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.8 444.9,182.8 700.0,120.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#198754"/><circle cx="444.9" cy="182.8" r="4" fill="#198754"/><circle cx="700.0" cy="120.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.3 444.9,251.4 700.0,251.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.7 444.9,126.5 700.0,121.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="126.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.7 444.9,185.3 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="185.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.3 444.9,78.8 700.0,90.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#20c997"/><circle cx="444.9" cy="78.8" r="4" fill="#20c997"/><circle cx="700.0" cy="90.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.44s | 105,887.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.11s | 126,409.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 310.05s | 161,264.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.72s | 59,819.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 111.09s | 90,013.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 394.40s | 126,773.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.68s | 56,561.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 202.21s | 49,454.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1011.98s | 49,408.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.89s | 84,125.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.12s | 123,274.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.94s | 126,282.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.34s | 65,206.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.99s | 88,502.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 876.97s | 57,014.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.85s | 77,845.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.01s | 151,499.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 345.63s | 144,663.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,210.2 444.9,150.7 700.0,134.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="210.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="134.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,246.2 444.9,208.4 700.0,220.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="246.2" r="4" fill="#198754"/><circle cx="444.9" cy="208.4" r="4" fill="#198754"/><circle cx="700.0" cy="220.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.4 444.9,245.6 700.0,262.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,168.7 444.9,62.3 700.0,166.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="168.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="166.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.9 444.9,248.5 700.0,224.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.0 444.9,141.4 700.0,138.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#20c997"/><circle cx="444.9" cy="141.4" r="4" fill="#20c997"/><circle cx="700.0" cy="138.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.11s | 82,603.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.97s | 121,992.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.75s | 132,715.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.02s | 58,747.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.33s | 83,804.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 659.26s | 75,843.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.30s | 54,650.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.09s | 59,141.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1045.94s | 47,803.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.09s | 110,035.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 55.40s | 180,495.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 448.07s | 111,589.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.55s | 46,395.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.63s | 57,263.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 680.57s | 73,467.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.81s | 78,088.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.03s | 128,149.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.61s | 130,001.1 | PASS |

:::

:::

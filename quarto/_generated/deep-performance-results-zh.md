## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-25T22:04:15Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,125.0 444.9,62.6 700.0,73.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="125.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="73.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.0 444.9,190.1 700.0,174.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#198754"/><circle cx="444.9" cy="190.1" r="4" fill="#198754"/><circle cx="700.0" cy="174.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.3 444.9,186.4 700.0,234.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="186.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.1 444.9,133.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.0 444.9,194.7 700.0,236.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="194.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.8 444.9,124.4 700.0,105.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.8" r="4" fill="#20c997"/><circle cx="444.9" cy="124.4" r="4" fill="#20c997"/><circle cx="700.0" cy="105.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.06s | 124,038.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.16s | 160,877.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 323.64s | 154,492.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.35s | 69,686.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.83s | 85,594.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 529.01s | 94,515.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.33s | 57,700.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 113.98s | 87,737.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 846.11s | 59,093.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.26s | 108,014.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.20s | 118,764.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 310.45s | 161,056.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.70s | 50,766.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 120.68s | 82,862.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 859.95s | 58,143.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.43s | 80,424.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.39s | 124,393.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.63s | 135,636.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,69.8 444.9,62.3 700.0,72.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="69.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,93.7 444.9,122.9 700.0,178.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="93.7" r="4" fill="#198754"/><circle cx="444.9" cy="122.9" r="4" fill="#198754"/><circle cx="700.0" cy="178.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.3 444.9,216.4 700.0,221.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,94.7 444.9,90.5 700.0,73.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="94.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.3 444.9,216.7 700.0,217.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.1 444.9,100.6 700.0,78.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#20c997"/><circle cx="444.9" cy="100.6" r="4" fill="#20c997"/><circle cx="700.0" cy="78.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.63s | 131,078.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.18s | 134,801.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.62s | 129,997.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 8.38s | 119,274.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 95.39s | 104,838.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 646.30s | 77,362.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.70s | 48,306.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.58s | 58,623.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 890.04s | 56,176.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.42s | 118,793.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.76s | 120,825.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 387.43s | 129,055.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.97s | 62,629.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.02s | 58,471.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 857.49s | 58,309.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.06s | 71,118.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.30s | 115,869.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 393.55s | 127,050.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-26T23:45:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,108.6 444.9,139.0 700.0,147.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.6 444.9,211.6 700.0,201.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.6" r="4" fill="#198754"/><circle cx="444.9" cy="211.6" r="4" fill="#198754"/><circle cx="700.0" cy="201.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.8 444.9,182.9 700.0,241.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="182.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,92.1 444.9,138.0 700.0,129.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="92.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="129.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.0 444.9,245.2 700.0,182.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="182.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.0 444.9,62.3 700.0,63.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="63.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.06s | 141,723.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.51s | 122,690.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 424.89s | 117,677.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.16s | 76,005.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.44s | 77,255.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 599.07s | 83,462.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.91s | 55,822.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 105.05s | 95,195.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.12s | 58,677.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.58s | 152,091.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.09s | 123,324.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 388.31s | 128,761.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.96s | 50,087.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.79s | 56,245.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 524.65s | 95,301.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.19s | 82,027.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.57s | 170,741.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 293.98s | 170,077.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,151.7 444.9,67.5 700.0,74.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="74.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.7 444.9,131.5 700.0,180.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.7" r="4" fill="#198754"/><circle cx="444.9" cy="131.5" r="4" fill="#198754"/><circle cx="700.0" cy="180.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,178.7 444.9,222.3 700.0,235.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.1 444.9,100.3 700.0,102.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.0 444.9,208.4 700.0,139.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="208.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,95.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="95.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.69s | 93,554.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.23s | 136,556.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 375.78s | 133,057.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,563.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.26s | 103,886.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.83s | 79,010.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.54s | 79,763.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.80s | 57,537.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 980.78s | 50,979.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.80s | 102,030.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.46s | 119,823.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 421.43s | 118,644.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.39s | 51,578.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 154.72s | 64,632.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 500.64s | 99,872.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.19s | 70,497.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.71s | 122,378.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 359.17s | 139,209.5 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-25T22:16:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,180.2 444.9,143.2 700.0,156.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="180.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,148.5 444.9,205.7 700.0,135.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="148.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.7" r="4" fill="#198754"/><circle cx="700.0" cy="135.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.2 444.9,235.3 700.0,227.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,115.0 700.0,140.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.6 444.9,219.8 700.0,191.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.4 444.9,156.5 700.0,105.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.4" r="4" fill="#20c997"/><circle cx="444.9" cy="156.5" r="4" fill="#20c997"/><circle cx="700.0" cy="105.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,980.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 98.47s | 101,557.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 528.12s | 94,675.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,726.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 146.07s | 68,461.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 474.08s | 105,468.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.80s | 48,076.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.37s | 52,807.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.64s | 57,100.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.92s | 144,404.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.86s | 116,464.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 485.13s | 103,065.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.89s | 47,860.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.96s | 60,990.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 658.34s | 75,949.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.34s | 74,968.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 105.83s | 94,487.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 411.79s | 121,421.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,94.5 444.9,115.1 700.0,73.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="94.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="73.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.8 444.9,196.8 700.0,188.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.8" r="4" fill="#198754"/><circle cx="444.9" cy="196.8" r="4" fill="#198754"/><circle cx="700.0" cy="188.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.2 444.9,249.2 700.0,175.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,118.5 700.0,109.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.0 444.9,229.2 700.0,160.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="160.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.0 444.9,122.8 700.0,110.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#20c997"/><circle cx="444.9" cy="122.8" r="4" fill="#20c997"/><circle cx="700.0" cy="110.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.87s | 112,752.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.99s | 103,105.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 408.15s | 122,504.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.13s | 61,980.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 154.36s | 64,782.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 726.90s | 68,785.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.34s | 49,157.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 248.66s | 40,215.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 666.83s | 74,982.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.82s | 127,877.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 98.52s | 101,503.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 472.49s | 105,822.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.99s | 45,471.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 201.59s | 49,605.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 610.61s | 81,885.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.69s | 63,751.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.50s | 99,506.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 474.93s | 105,279.1 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-25T22:07:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,173.4 444.9,62.3 700.0,128.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.8 444.9,205.2 700.0,179.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.8" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="179.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.3 444.9,241.0 700.0,222.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.1 444.9,133.6 700.0,125.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.7 444.9,227.8 700.0,199.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,153.9 700.0,113.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="153.9" r="4" fill="#20c997"/><circle cx="700.0" cy="113.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.45s | 95,712.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.92s | 161,501.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 408.52s | 122,392.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.41s | 69,410.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.11s | 76,856.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 542.65s | 92,140.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.83s | 53,118.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.65s | 55,662.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 749.61s | 66,701.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,375.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.84s | 119,273.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.67s | 124,171.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.01s | 58,792.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.57s | 63,463.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 625.13s | 79,982.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,766.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 93.22s | 107,267.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 381.28s | 131,136.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,139.4 444.9,62.3 700.0,90.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="139.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.2 444.9,219.2 700.0,218.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.2" r="4" fill="#198754"/><circle cx="444.9" cy="219.2" r="4" fill="#198754"/><circle cx="700.0" cy="218.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.0 444.9,251.6 700.0,241.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,100.2 444.9,160.9 700.0,150.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="100.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.5 444.9,251.2 700.0,241.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.6 444.9,143.0 700.0,139.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#20c997"/><circle cx="444.9" cy="143.0" r="4" fill="#20c997"/><circle cx="700.0" cy="139.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.65s | 130,753.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 54.85s | 182,322.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 306.00s | 163,399.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.30s | 65,355.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.20s | 77,400.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 643.06s | 77,753.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.08s | 47,442.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.32s | 55,765.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 801.59s | 62,376.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.37s | 156,936.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.92s | 116,387.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.86s | 123,501.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.30s | 51,821.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.56s | 56,004.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 797.04s | 62,732.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.42s | 80,521.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.91s | 128,359.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.16s | 130,495.2 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-25T21:59:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,153.7 444.9,133.0 700.0,137.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,204.7 444.9,206.8 700.0,203.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="204.7" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="203.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.8 444.9,232.4 700.0,199.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,188.0 444.9,132.3 700.0,145.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="132.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.2 444.9,179.4 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="179.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.1 444.9,136.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#20c997"/><circle cx="444.9" cy="136.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.58s | 116,590.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.99s | 129,881.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 393.28s | 127,136.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.94s | 83,773.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.31s | 82,432.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 592.51s | 84,386.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.24s | 58,008.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 151.54s | 65,988.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 571.98s | 87,416.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,518.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.70s | 130,369.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.37s | 121,841.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.53s | 86,700.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 99.94s | 100,058.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 840.36s | 59,498.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.91s | 100,898.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.27s | 127,759.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 285.08s | 175,387.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,197.0 444.9,139.7 700.0,150.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.3 444.9,223.9 700.0,223.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.3" r="4" fill="#198754"/><circle cx="444.9" cy="223.9" r="4" fill="#198754"/><circle cx="700.0" cy="223.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,294.4 444.9,255.9 700.0,251.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="294.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,188.2 444.9,161.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="188.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.6 444.9,252.4 700.0,251.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,238.2 444.9,131.0 700.0,142.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#20c997"/><circle cx="444.9" cy="131.0" r="4" fill="#20c997"/><circle cx="700.0" cy="142.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.21s | 97,924.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.14s | 138,629.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 382.28s | 130,793.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.67s | 103,380.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.82s | 78,852.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 629.98s | 79,367.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 34.68s | 28,835.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.18s | 56,122.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 841.60s | 59,410.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.60s | 104,199.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.20s | 123,149.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 258.33s | 193,553.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.10s | 82,617.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.61s | 58,612.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 844.08s | 59,236.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.56s | 68,676.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 69.08s | 144,753.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.96s | 136,628.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-25T22:09:26Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,191.8 444.9,62.3 700.0,129.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.7 444.9,211.2 700.0,113.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#198754"/><circle cx="444.9" cy="211.2" r="4" fill="#198754"/><circle cx="700.0" cy="113.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.9 444.9,263.2 700.0,256.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.0 444.9,81.6 700.0,133.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="81.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.1 444.9,226.4 700.0,243.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.8 444.9,146.0 700.0,134.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.8" r="4" fill="#20c997"/><circle cx="444.9" cy="146.0" r="4" fill="#20c997"/><circle cx="700.0" cy="134.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.28s | 88,628.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.26s | 168,753.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 392.94s | 127,247.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.61s | 60,201.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.53s | 76,609.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 365.47s | 136,809.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.74s | 42,124.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 225.23s | 44,398.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1029.19s | 48,581.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.63s | 94,046.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 63.78s | 156,781.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.63s | 124,802.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.58s | 46,337.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 148.82s | 67,195.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 879.64s | 56,841.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.41s | 80,593.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.53s | 116,922.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 403.32s | 123,972.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,81.6 444.9,144.8 700.0,128.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="81.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="144.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.1 444.9,224.7 700.0,203.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#198754"/><circle cx="444.9" cy="224.7" r="4" fill="#198754"/><circle cx="700.0" cy="203.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.0 444.9,242.0 700.0,263.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.3 444.9,142.7 700.0,143.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.0 444.9,214.4 700.0,216.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.6 444.9,134.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#20c997"/><circle cx="444.9" cy="134.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.36s | 157,183.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.75s | 117,991.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.83s | 128,262.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.99s | 58,844.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.17s | 68,414.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 613.89s | 81,448.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.41s | 37,858.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.40s | 57,671.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1122.93s | 44,526.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.21s | 138,773.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.86s | 119,243.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.60s | 118,876.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.93s | 47,782.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 133.70s | 74,796.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 682.52s | 73,258.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,685.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.50s | 124,220.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 295.58s | 169,159.5 | PASS |

:::

:::

## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T23:05:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,136.8 444.9,65.4 700.0,119.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.6 444.9,183.8 700.0,177.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.6" r="4" fill="#198754"/><circle cx="444.9" cy="183.8" r="4" fill="#198754"/><circle cx="700.0" cy="177.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,221.1 444.9,182.0 700.0,162.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="182.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="162.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.4 444.9,62.3 700.0,104.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.9 444.9,233.5 700.0,162.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.9 444.9,77.3 700.0,104.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.9" r="4" fill="#20c997"/><circle cx="444.9" cy="77.3" r="4" fill="#20c997"/><circle cx="700.0" cy="104.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.02s | 110,926.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 66.28s | 150,879.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 414.09s | 120,745.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.13s | 70,746.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.19s | 84,611.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 566.46s | 88,267.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.68s | 63,779.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 116.79s | 85,626.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 517.17s | 96,680.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.47s | 105,540.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 65.51s | 152,657.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.63s | 129,320.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.32s | 75,046.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.96s | 56,832.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 516.89s | 96,731.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.60s | 86,229.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.33s | 144,237.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.58s | 129,005.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.3 444.9,142.2 700.0,139.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.0 444.9,146.4 700.0,216.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#198754"/><circle cx="444.9" cy="146.4" r="4" fill="#198754"/><circle cx="700.0" cy="216.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,209.4 444.9,249.2 700.0,248.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,81.7 444.9,62.3 700.0,146.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="81.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.4 444.9,188.5 700.0,245.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.3 444.9,120.0 700.0,136.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.3" r="4" fill="#20c997"/><circle cx="444.9" cy="120.0" r="4" fill="#20c997"/><circle cx="700.0" cy="136.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.89s | 112,498.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.62s | 125,599.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.44s | 127,409.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.50s | 64,503.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 81.39s | 122,865.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 645.31s | 77,482.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.22s | 81,799.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.03s | 55,855.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 885.17s | 56,486.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.06s | 164,989.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.30s | 177,632.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.31s | 122,755.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.05s | 62,293.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.79s | 95,428.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 861.64s | 58,029.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.04s | 76,669.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 71.40s | 140,058.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 386.93s | 129,222.7 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-08T23:05:05Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.4 444.9,123.1 700.0,150.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.4 444.9,199.8 700.0,190.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#198754"/><circle cx="444.9" cy="199.8" r="4" fill="#198754"/><circle cx="700.0" cy="190.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.4 444.9,263.4 700.0,208.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="208.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.0 444.9,62.3 700.0,152.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="152.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.8 444.9,238.9 700.0,207.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.7 444.9,134.7 700.0,137.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.7" r="4" fill="#20c997"/><circle cx="444.9" cy="134.7" r="4" fill="#20c997"/><circle cx="700.0" cy="137.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,809.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.78s | 145,384.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 394.34s | 126,793.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.94s | 66,921.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.84s | 92,732.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 503.64s | 99,276.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,277.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.65s | 49,103.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 573.96s | 87,114.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.35s | 107,009.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 53.45s | 187,080.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 398.41s | 125,500.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,314.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.75s | 65,897.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 571.19s | 87,536.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.59s | 73,578.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.77s | 137,426.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.28s | 135,398.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.5 444.9,77.9 700.0,72.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="77.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.4 444.9,218.2 700.0,213.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#198754"/><circle cx="444.9" cy="218.2" r="4" fill="#198754"/><circle cx="700.0" cy="213.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.6 444.9,188.7 700.0,245.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="188.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.5 444.9,157.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.2 444.9,192.1 700.0,245.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.4 444.9,152.5 700.0,128.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.4" r="4" fill="#20c997"/><circle cx="444.9" cy="152.5" r="4" fill="#20c997"/><circle cx="700.0" cy="128.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.77s | 92,816.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 58.88s | 169,851.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 288.76s | 173,151.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.47s | 69,113.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.54s | 77,195.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 620.40s | 80,592.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,825.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 103.50s | 96,622.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 849.03s | 58,890.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.04s | 110,668.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.25s | 117,303.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 277.51s | 180,175.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.17s | 65,915.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.92s | 94,412.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 845.54s | 59,133.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.25s | 81,646.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.95s | 120,551.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.02s | 136,603.1 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T23:26:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,176.5 444.9,157.1 700.0,183.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="183.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.2 444.9,192.5 700.0,198.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.2" r="4" fill="#198754"/><circle cx="444.9" cy="192.5" r="4" fill="#198754"/><circle cx="700.0" cy="198.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.8 444.9,237.3 700.0,234.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.1 444.9,110.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="110.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.2 444.9,232.3 700.0,220.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.1 444.9,141.7 700.0,148.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#20c997"/><circle cx="444.9" cy="141.7" r="4" fill="#20c997"/><circle cx="700.0" cy="148.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,766.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 108.99s | 91,751.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 639.14s | 78,229.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.54s | 64,366.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.03s | 73,510.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 708.86s | 70,536.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.43s | 54,256.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 198.49s | 50,380.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 968.47s | 51,628.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,885.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.27s | 115,917.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 355.42s | 140,679.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.12s | 47,355.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 188.82s | 52,960.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.94s | 58,966.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.47s | 74,250.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.27s | 99,728.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 520.90s | 95,988.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,154.3 444.9,179.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="179.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,153.4 444.9,140.4 700.0,168.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="153.4" r="4" fill="#198754"/><circle cx="444.9" cy="140.4" r="4" fill="#198754"/><circle cx="700.0" cy="168.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,208.6 444.9,230.1 700.0,178.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="208.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="178.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,127.0 444.9,116.5 700.0,134.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="127.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="116.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.4 444.9,205.7 700.0,236.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.3 444.9,156.1 700.0,108.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.3" r="4" fill="#20c997"/><circle cx="444.9" cy="156.1" r="4" fill="#20c997"/><circle cx="700.0" cy="108.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,785.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 126.68s | 78,938.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.84s | 138,564.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.84s | 92,276.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 101.15s | 98,859.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 589.43s | 84,827.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.57s | 64,238.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.71s | 53,273.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 626.97s | 79,748.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,674.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.09s | 110,996.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 490.42s | 101,953.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.26s | 47,034.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.22s | 65,696.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 995.06s | 50,248.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.40s | 69,454.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 110.01s | 90,902.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 435.07s | 114,925.1 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T23:13:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,166.8 444.9,114.9 700.0,109.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.7 444.9,197.6 700.0,188.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.7" r="4" fill="#198754"/><circle cx="444.9" cy="197.6" r="4" fill="#198754"/><circle cx="700.0" cy="188.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.3 444.9,225.8 700.0,229.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.7 444.9,114.6 700.0,99.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.2 444.9,213.7 700.0,226.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.7 444.9,120.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.7" r="4" fill="#20c997"/><circle cx="444.9" cy="120.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.69s | 93,580.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.64s | 122,490.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 399.01s | 125,310.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.37s | 80,853.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.81s | 76,447.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 611.92s | 81,710.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.22s | 54,896.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 164.64s | 60,738.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 854.22s | 58,532.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,683.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.53s | 122,657.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 381.31s | 131,126.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.47s | 48,842.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 148.11s | 67,518.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 830.50s | 60,204.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.99s | 76,958.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.66s | 119,525.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 329.48s | 151,752.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,194.8 444.9,125.7 700.0,166.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="166.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.8 444.9,159.3 700.0,153.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.8" r="4" fill="#198754"/><circle cx="444.9" cy="159.3" r="4" fill="#198754"/><circle cx="700.0" cy="153.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.2 444.9,260.7 700.0,266.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="266.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.8 444.9,145.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="145.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.9 444.9,237.2 700.0,207.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.0 444.9,173.0 700.0,153.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.0" r="4" fill="#20c997"/><circle cx="444.9" cy="173.0" r="4" fill="#20c997"/><circle cx="700.0" cy="153.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,822.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 65.80s | 151,968.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 408.94s | 122,268.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.88s | 72,056.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.41s | 127,541.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 379.70s | 131,681.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.23s | 70,249.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.42s | 53,930.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1002.75s | 49,862.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,805.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 72.73s | 137,500.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 252.51s | 198,013.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.35s | 54,504.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 140.79s | 71,027.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 539.62s | 92,656.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.68s | 93,624.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.01s | 117,637.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.68s | 131,690.2 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-08T23:09:15Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.8 444.9,62.3 700.0,107.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.4 444.9,219.4 700.0,215.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.4" r="4" fill="#198754"/><circle cx="444.9" cy="219.4" r="4" fill="#198754"/><circle cx="700.0" cy="215.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.3 444.9,257.7 700.0,260.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,164.6 444.9,151.7 700.0,156.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.8 444.9,252.1 700.0,247.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.3 444.9,138.9 700.0,129.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.3" r="4" fill="#20c997"/><circle cx="444.9" cy="138.9" r="4" fill="#20c997"/><circle cx="700.0" cy="129.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.13s | 89,831.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 52.73s | 189,627.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 315.77s | 158,342.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.53s | 95,002.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.42s | 80,369.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 600.76s | 83,227.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.52s | 51,224.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.13s | 53,727.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 964.96s | 51,815.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.44s | 118,511.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.46s | 127,458.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.19s | 124,010.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.38s | 80,801.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.53s | 57,627.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 825.02s | 60,604.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.87s | 77,688.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.33s | 136,366.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 350.10s | 142,815.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">217k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,183.7 444.9,109.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.8 444.9,223.7 700.0,170.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.8" r="4" fill="#198754"/><circle cx="444.9" cy="223.7" r="4" fill="#198754"/><circle cx="700.0" cy="170.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.2 444.9,251.6 700.0,259.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,176.7 444.9,94.7 700.0,156.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.7 444.9,241.7 700.0,254.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.9 444.9,155.7 700.0,140.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.9" r="4" fill="#20c997"/><circle cx="444.9" cy="155.7" r="4" fill="#20c997"/><circle cx="700.0" cy="140.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.13s | 109,577.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.15s | 163,540.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 253.07s | 197,575.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.14s | 98,658.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.98s | 80,656.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 420.08s | 119,024.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.36s | 49,128.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 165.49s | 60,425.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 908.74s | 55,021.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.72s | 114,678.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 57.44s | 174,106.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.04s | 129,521.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.91s | 50,231.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 147.88s | 67,623.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 855.84s | 58,422.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.26s | 108,014.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.98s | 129,907.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 354.55s | 141,022.6 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-07T23:10:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,198.5 444.9,71.2 700.0,154.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="198.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="71.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.7 444.9,217.6 700.0,213.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#198754"/><circle cx="444.9" cy="217.6" r="4" fill="#198754"/><circle cx="700.0" cy="213.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.8 444.9,261.3 700.0,258.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.7 444.9,73.7 700.0,66.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="66.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.7 444.9,245.5 700.0,245.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.0 444.9,62.3 700.0,74.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="74.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.52s | 86,835.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.56s | 167,897.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 434.92s | 114,963.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.78s | 67,668.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.86s | 74,705.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 647.64s | 77,203.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.86s | 40,230.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.17s | 46,911.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1024.10s | 48,823.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.76s | 114,116.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.14s | 166,284.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 292.93s | 170,692.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.29s | 75,267.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.67s | 56,926.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 877.76s | 56,963.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.18s | 82,095.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 57.62s | 173,547.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 301.44s | 165,871.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,196.4 444.9,127.5 700.0,84.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.9 444.9,182.7 700.0,179.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.9" r="4" fill="#198754"/><circle cx="444.9" cy="182.7" r="4" fill="#198754"/><circle cx="700.0" cy="179.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.7 444.9,266.2 700.0,211.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,81.4 444.9,62.3 700.0,134.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="81.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.6 444.9,214.1 700.0,169.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="169.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.5 444.9,138.4 700.0,122.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.5" r="4" fill="#20c997"/><circle cx="444.9" cy="138.4" r="4" fill="#20c997"/><circle cx="700.0" cy="122.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.11s | 82,549.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.90s | 123,606.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 335.16s | 149,180.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.49s | 95,356.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 110.20s | 90,744.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 540.32s | 92,538.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.30s | 44,841.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 243.97s | 40,988.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 681.02s | 73,419.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.62s | 151,103.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 61.55s | 162,472.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 418.51s | 119,470.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.97s | 45,510.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 138.88s | 72,004.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 507.30s | 98,560.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.16s | 75,964.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.38s | 117,124.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 394.51s | 126,740.1 | PASS |

:::

:::

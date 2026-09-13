## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:09:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,135.6 444.9,102.5 700.0,143.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.4 444.9,212.5 700.0,215.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#198754"/><circle cx="444.9" cy="212.5" r="4" fill="#198754"/><circle cx="700.0" cy="215.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.3 444.9,245.4 700.0,247.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.6 444.9,150.7 700.0,148.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="148.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.2 444.9,251.7 700.0,248.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.6 444.9,148.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#20c997"/><circle cx="444.9" cy="148.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.68s | 130,140.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.88s | 151,781.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.89s | 124,721.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.78s | 67,649.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.12s | 79,925.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 639.33s | 78,206.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.97s | 43,540.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.97s | 58,489.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 877.88s | 56,955.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,914.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.14s | 120,281.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.68s | 122,048.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.47s | 48,844.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.96s | 54,360.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 889.27s | 56,225.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.31s | 81,208.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.03s | 121,906.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 280.89s | 178,008.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,86.4 444.9,62.3 700.0,63.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="86.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="63.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.9 444.9,155.9 700.0,178.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#198754"/><circle cx="444.9" cy="155.9" r="4" fill="#198754"/><circle cx="700.0" cy="178.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.4 444.9,199.6 700.0,219.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="199.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,105.5 444.9,83.7 700.0,81.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="105.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="83.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.2 444.9,218.4 700.0,186.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.1 444.9,94.6 700.0,91.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#20c997"/><circle cx="444.9" cy="94.6" r="4" fill="#20c997"/><circle cx="700.0" cy="91.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.40s | 119,005.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.60s | 130,543.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.29s | 130,111.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.02s | 66,573.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.67s | 85,714.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 668.99s | 74,739.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.58s | 37,619.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 154.35s | 64,787.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 900.12s | 55,547.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.10s | 109,866.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.15s | 120,267.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.41s | 121,532.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.20s | 52,096.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.15s | 55,818.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 701.77s | 71,247.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,904.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.92s | 115,054.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 429.59s | 116,389.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T21:58:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,109.8 444.9,123.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.0 444.9,195.0 700.0,159.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.0" r="4" fill="#198754"/><circle cx="444.9" cy="195.0" r="4" fill="#198754"/><circle cx="700.0" cy="159.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.7 444.9,230.1 700.0,230.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.1 444.9,121.5 700.0,122.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.7 444.9,222.1 700.0,227.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,107.9 700.0,88.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="107.9" r="4" fill="#20c997"/><circle cx="700.0" cy="88.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.89s | 126,790.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.98s | 119,081.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 325.69s | 153,519.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.80s | 67,558.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.89s | 78,811.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 506.61s | 98,696.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.82s | 63,211.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.32s | 59,060.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 849.53s | 58,855.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,360.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.21s | 120,172.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 418.13s | 119,579.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.67s | 50,833.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.32s | 63,562.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 826.32s | 60,509.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.51s | 95,120.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.21s | 127,862.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.60s | 139,044.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,78.2 444.9,62.3 700.0,86.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="78.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,191.8 444.9,171.3 700.0,184.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#198754"/><circle cx="444.9" cy="171.3" r="4" fill="#198754"/><circle cx="700.0" cy="184.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.1 444.9,231.9 700.0,201.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.7 444.9,80.3 700.0,100.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.3 444.9,241.0 700.0,220.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.9 444.9,97.7 700.0,84.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.9" r="4" fill="#20c997"/><circle cx="444.9" cy="97.7" r="4" fill="#20c997"/><circle cx="700.0" cy="84.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.61s | 131,492.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.61s | 139,643.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.23s | 127,152.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.63s | 73,346.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.29s | 83,830.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 647.97s | 77,164.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.03s | 47,560.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.41s | 52,795.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 732.09s | 68,298.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.20s | 108,683.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.69s | 130,401.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.70s | 119,990.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.52s | 44,401.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 207.85s | 48,111.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.14s | 58,607.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.05s | 82,973.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.30s | 121,502.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.25s | 128,123.7 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:27:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">137k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.5 444.9,115.3 700.0,161.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="161.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.7 444.9,183.2 700.0,178.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#198754"/><circle cx="444.9" cy="183.2" r="4" fill="#198754"/><circle cx="700.0" cy="178.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.4 444.9,226.0 700.0,218.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.9 444.9,111.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.8 444.9,229.0 700.0,224.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,151.7 444.9,112.2 700.0,189.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="151.7" r="4" fill="#20c997"/><circle cx="444.9" cy="112.2" r="4" fill="#20c997"/><circle cx="700.0" cy="189.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.03s | 83,132.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.92s | 100,080.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 631.75s | 79,145.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.45s | 74,349.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.67s | 69,123.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 700.77s | 71,350.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.51s | 51,266.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 201.38s | 49,656.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 944.55s | 52,935.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.03s | 90,694.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 98.08s | 101,955.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.55s | 124,207.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.69s | 46,104.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 207.06s | 48,295.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 994.99s | 50,251.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.98s | 83,486.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.53s | 101,487.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 752.65s | 66,432.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">127k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,115.1 444.9,85.4 700.0,88.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,177.5 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.7 444.9,214.4 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,68.9 444.9,84.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="68.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.1 444.9,213.9 700.0,212.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.6 444.9,93.1 700.0,85.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#20c997"/><circle cx="444.9" cy="93.1" r="4" fill="#20c997"/><circle cx="700.0" cy="85.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.75s | 93,031.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.70s | 105,596.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 479.72s | 104,227.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.16s | 58,268.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 150.09s | 66,624.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 747.49s | 66,890.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.83s | 45,812.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 196.05s | 51,008.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1332.43s | 37,525.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.88s | 112,574.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 94.52s | 105,802.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 433.36s | 115,377.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.32s | 44,798.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 195.25s | 51,216.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 964.57s | 51,836.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.10s | 76,324.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 97.70s | 102,348.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 472.84s | 105,743.8 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:10:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,137.0 444.9,76.9 700.0,105.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.8 444.9,122.3 700.0,122.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.8" r="4" fill="#198754"/><circle cx="444.9" cy="122.3" r="4" fill="#198754"/><circle cx="700.0" cy="122.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.7 444.9,195.1 700.0,222.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="195.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.1 444.9,88.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.2 444.9,198.5 700.0,214.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,138.7 444.9,81.4 700.0,68.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="138.7" r="4" fill="#20c997"/><circle cx="444.9" cy="81.4" r="4" fill="#20c997"/><circle cx="700.0" cy="68.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.33s | 96,777.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.29s | 126,122.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 445.34s | 112,274.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.70s | 68,036.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 96.19s | 103,960.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 482.44s | 103,639.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.46s | 60,753.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 146.23s | 68,387.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.43s | 54,979.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,469.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.91s | 120,606.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.15s | 133,278.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.30s | 49,273.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 149.90s | 66,711.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.45s | 59,000.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.42s | 95,941.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.70s | 123,911.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.04s | 130,196.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,107.8 444.9,62.3 700.0,89.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="107.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.9 444.9,178.1 700.0,180.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.9" r="4" fill="#198754"/><circle cx="444.9" cy="178.1" r="4" fill="#198754"/><circle cx="700.0" cy="180.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.6 444.9,219.9 700.0,221.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,77.9 444.9,88.0 700.0,93.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="77.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.6 444.9,202.8 700.0,215.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.7 444.9,97.5 700.0,65.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#20c997"/><circle cx="444.9" cy="97.5" r="4" fill="#20c997"/><circle cx="700.0" cy="65.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.95s | 111,719.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.55s | 134,134.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 414.25s | 120,698.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.05s | 66,445.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.55s | 77,189.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.34s | 76,179.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.87s | 47,906.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.66s | 56,605.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 892.03s | 56,052.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.91s | 126,470.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.33s | 121,468.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.80s | 118,820.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,347.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 153.82s | 65,012.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.25s | 58,875.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,123.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.61s | 116,811.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.75s | 132,364.1 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:00:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.1 444.9,88.2 700.0,72.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="88.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.3 444.9,156.0 700.0,175.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.3" r="4" fill="#198754"/><circle cx="444.9" cy="156.0" r="4" fill="#198754"/><circle cx="700.0" cy="175.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.3 444.9,191.9 700.0,216.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="191.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.7 444.9,87.7 700.0,84.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.3 444.9,222.3 700.0,172.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="172.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.9 444.9,77.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.9" r="4" fill="#20c997"/><circle cx="444.9" cy="77.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.38s | 87,858.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.18s | 124,720.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 376.62s | 132,760.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.92s | 67,042.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 110.59s | 90,422.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 621.70s | 80,424.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.58s | 46,345.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 138.31s | 72,299.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 834.49s | 59,917.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,183.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,967.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 394.85s | 126,632.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.56s | 56,937.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.57s | 56,956.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 607.54s | 82,298.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.43s | 69,285.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.85s | 130,116.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.83s | 137,807.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,117.0 444.9,85.8 700.0,71.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.3 444.9,181.0 700.0,179.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.3" r="4" fill="#198754"/><circle cx="444.9" cy="181.0" r="4" fill="#198754"/><circle cx="700.0" cy="179.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,236.1 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,112.0 444.9,97.0 700.0,87.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="112.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.0 444.9,224.6 700.0,189.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.0 444.9,106.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#20c997"/><circle cx="444.9" cy="106.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.80s | 113,597.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.01s | 129,856.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 364.44s | 137,196.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.74s | 72,774.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.59s | 80,265.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 616.85s | 81,057.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.67s | 44,109.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.06s | 51,530.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 915.40s | 54,620.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.61s | 116,211.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.63s | 124,027.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.95s | 129,214.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.57s | 51,090.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.88s | 57,512.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 660.04s | 75,752.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.11s | 70,856.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.92s | 119,165.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 351.84s | 142,110.9 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-13T22:13:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">165k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.9 444.9,62.3 700.0,123.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.5 444.9,189.2 700.0,199.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.5" r="4" fill="#198754"/><circle cx="444.9" cy="189.2" r="4" fill="#198754"/><circle cx="700.0" cy="199.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.4 444.9,243.9 700.0,239.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.4 444.9,118.3 700.0,114.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.1 444.9,244.3 700.0,214.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.8 444.9,89.5 700.0,94.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.8" r="4" fill="#20c997"/><circle cx="444.9" cy="89.5" r="4" fill="#20c997"/><circle cx="700.0" cy="94.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.82s | 77,972.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 66.84s | 149,602.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 430.92s | 116,032.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.12s | 58,401.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.02s | 79,985.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 670.17s | 74,607.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.47s | 39,261.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.20s | 49,950.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 949.53s | 52,657.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,150.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.11s | 118,887.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.74s | 121,142.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.48s | 46,546.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 200.95s | 49,764.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 753.34s | 66,371.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.91s | 77,465.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.26s | 134,654.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.23s | 131,846.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,144.9 444.9,67.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.4 444.9,178.6 700.0,161.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#198754"/><circle cx="444.9" cy="178.6" r="4" fill="#198754"/><circle cx="700.0" cy="161.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.9 444.9,234.8 700.0,236.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.5 444.9,85.8 700.0,70.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="70.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.8 444.9,219.1 700.0,222.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.0 444.9,74.5 700.0,68.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.0" r="4" fill="#20c997"/><circle cx="444.9" cy="74.5" r="4" fill="#20c997"/><circle cx="700.0" cy="68.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.27s | 88,715.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.06s | 124,914.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.76s | 127,304.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.06s | 58,620.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.01s | 72,987.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 616.37s | 81,120.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.48s | 39,238.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.76s | 46,782.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1085.49s | 46,061.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.22s | 97,799.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.98s | 116,308.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.48s | 123,309.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.97s | 58,913.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 184.92s | 54,077.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 948.99s | 52,687.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.14s | 76,091.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.25s | 121,587.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 402.47s | 124,232.9 | PASS |

:::

:::

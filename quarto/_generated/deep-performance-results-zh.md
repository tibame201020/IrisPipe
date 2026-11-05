## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-04T00:37:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,148.7 444.9,105.7 700.0,124.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.4 444.9,194.6 700.0,188.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.4" r="4" fill="#198754"/><circle cx="444.9" cy="194.6" r="4" fill="#198754"/><circle cx="700.0" cy="188.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.8 444.9,246.2 700.0,185.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="185.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.1 444.9,108.9 700.0,121.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.1 444.9,233.7 700.0,232.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.3 444.9,62.3 700.0,98.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="98.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.85s | 101,522.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,975.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 436.71s | 114,491.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.47s | 64,649.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.69s | 76,519.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 625.12s | 79,984.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.05s | 47,499.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 206.69s | 48,382.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 615.21s | 81,273.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.32s | 107,319.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.17s | 123,202.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 429.67s | 116,369.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.97s | 62,617.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.15s | 55,201.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 895.43s | 55,839.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.68s | 78,870.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.28s | 148,623.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 388.22s | 128,791.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,123.1 700.0,122.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.4 444.9,148.0 700.0,171.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.4" r="4" fill="#198754"/><circle cx="444.9" cy="148.0" r="4" fill="#198754"/><circle cx="700.0" cy="171.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.9 444.9,242.3 700.0,238.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.8 444.9,139.7 700.0,151.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.0 444.9,238.1 700.0,226.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.4 444.9,109.0 700.0,126.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.4" r="4" fill="#20c997"/><circle cx="444.9" cy="109.0" r="4" fill="#20c997"/><circle cx="700.0" cy="126.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.11s | 163,639.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.64s | 127,169.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.92s | 127,576.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.06s | 71,138.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 89.12s | 112,210.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 510.88s | 97,870.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.81s | 48,058.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.74s | 55,635.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 859.02s | 58,206.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.85s | 101,522.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.33s | 117,196.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 453.99s | 110,134.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.24s | 70,214.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.93s | 58,162.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 769.09s | 65,011.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,947.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.75s | 135,584.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.95s | 125,329.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-05T00:41:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,213.1 444.9,178.3 700.0,182.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="178.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="182.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.1 444.9,217.8 700.0,224.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.1" r="4" fill="#198754"/><circle cx="444.9" cy="217.8" r="4" fill="#198754"/><circle cx="700.0" cy="224.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.5 444.9,251.6 700.0,251.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,194.3 444.9,62.3 700.0,98.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="194.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.2 444.9,211.5 700.0,231.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,239.0 444.9,164.2 700.0,179.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="239.0" r="4" fill="#20c997"/><circle cx="444.9" cy="164.2" r="4" fill="#20c997"/><circle cx="700.0" cy="179.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,694.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.70s | 115,345.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 444.18s | 112,566.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.31s | 107,376.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.90s | 86,280.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.13s | 81,681.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.06s | 47,476.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 162.83s | 61,413.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 811.85s | 61,587.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.66s | 103,530.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 49.81s | 200,746.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 286.93s | 174,261.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.47s | 51,371.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 110.00s | 90,913.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 656.43s | 76,169.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.15s | 70,651.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.53s | 125,738.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 436.70s | 114,495.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">168k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">223k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.0 444.9,109.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.0 444.9,230.0 700.0,229.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.0" r="4" fill="#198754"/><circle cx="444.9" cy="230.0" r="4" fill="#198754"/><circle cx="700.0" cy="229.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.2 444.9,252.2 700.0,261.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.0 444.9,174.6 700.0,86.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="174.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.5 444.9,259.0 700.0,241.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="259.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.1 444.9,156.1 700.0,161.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.1" r="4" fill="#20c997"/><circle cx="444.9" cy="156.1" r="4" fill="#20c997"/><circle cx="700.0" cy="161.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.57s | 94,571.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.54s | 167,965.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 246.13s | 203,141.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.13s | 70,791.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.87s | 78,204.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 634.00s | 78,864.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.09s | 49,763.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 162.24s | 61,638.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 914.51s | 54,674.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.61s | 116,171.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.72s | 119,447.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 269.60s | 185,458.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.10s | 76,353.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.71s | 56,591.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 718.43s | 69,596.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.11s | 90,049.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 75.06s | 133,223.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.77s | 129,611.9 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-04T00:56:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.0 444.9,185.6 700.0,117.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="185.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.5 444.9,102.0 700.0,153.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.5" r="4" fill="#198754"/><circle cx="444.9" cy="102.0" r="4" fill="#198754"/><circle cx="700.0" cy="153.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,224.0 444.9,214.6 700.0,228.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="224.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,79.9 444.9,83.5 700.0,63.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="79.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="83.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="63.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.7 444.9,165.3 700.0,205.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="165.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="205.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.1 444.9,110.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.1" r="4" fill="#20c997"/><circle cx="444.9" cy="110.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.34s | 81,017.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 151.23s | 66,124.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 519.32s | 96,279.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.64s | 63,938.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 96.98s | 103,108.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 620.84s | 80,535.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.35s | 49,132.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 187.60s | 53,303.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1060.35s | 47,154.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.86s | 112,892.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.84s | 111,311.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 416.16s | 120,146.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.66s | 46,165.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.14s | 75,107.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 873.39s | 57,248.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.62s | 73,448.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.69s | 99,317.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 414.21s | 120,712.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,83.2 444.9,134.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="83.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.2 444.9,141.8 700.0,197.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.2" r="4" fill="#198754"/><circle cx="444.9" cy="141.8" r="4" fill="#198754"/><circle cx="700.0" cy="197.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.5 444.9,176.2 700.0,236.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="176.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.2 444.9,120.7 700.0,114.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.9 444.9,235.3 700.0,233.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.5 444.9,200.7 700.0,126.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#20c997"/><circle cx="444.9" cy="200.7" r="4" fill="#20c997"/><circle cx="700.0" cy="126.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.97s | 125,470.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.96s | 100,036.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 367.93s | 135,896.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 18.28s | 54,713.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 103.88s | 96,268.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 730.26s | 68,468.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.24s | 47,083.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 126.41s | 79,105.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1014.45s | 49,287.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,574.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.65s | 106,782.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 455.52s | 109,764.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.32s | 46,895.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 201.36s | 49,662.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 984.19s | 50,803.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.81s | 67,508.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 149.46s | 66,909.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 481.16s | 103,915.8 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-04T00:42:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,211.3 444.9,92.6 700.0,177.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="177.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.1 444.9,228.7 700.0,146.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.1" r="4" fill="#198754"/><circle cx="444.9" cy="228.7" r="4" fill="#198754"/><circle cx="700.0" cy="146.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.5 444.9,238.4 700.0,254.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.0 444.9,87.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.8 444.9,258.6 700.0,256.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="258.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.8 444.9,166.3 700.0,169.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#20c997"/><circle cx="444.9" cy="166.3" r="4" fill="#20c997"/><circle cx="700.0" cy="169.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.95s | 91,324.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.90s | 178,887.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 430.10s | 116,252.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.74s | 67,824.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.52s | 78,417.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 359.01s | 139,271.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.77s | 50,579.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 140.28s | 71,288.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.05s | 59,733.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.81s | 146,842.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.71s | 182,792.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 248.42s | 201,271.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.31s | 51,786.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.31s | 56,397.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 863.17s | 57,926.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.52s | 73,953.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.32s | 124,500.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 408.49s | 122,403.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.5 444.9,150.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.9 444.9,218.0 700.0,219.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.9" r="4" fill="#198754"/><circle cx="444.9" cy="218.0" r="4" fill="#198754"/><circle cx="700.0" cy="219.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.5 444.9,251.3 700.0,264.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.1 444.9,147.6 700.0,141.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.3 444.9,247.7 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.0 444.9,149.6 700.0,150.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#20c997"/><circle cx="444.9" cy="149.6" r="4" fill="#20c997"/><circle cx="700.0" cy="150.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,372.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.92s | 123,574.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 273.28s | 182,964.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.74s | 67,851.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.44s | 78,469.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.08s | 77,630.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.55s | 48,661.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.18s | 56,123.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1061.67s | 47,095.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.60s | 151,538.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.54s | 125,726.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.14s | 129,823.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.78s | 48,132.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.66s | 58,596.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 824.31s | 60,656.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.20s | 108,660.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.40s | 124,376.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 404.62s | 123,573.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-01T23:05:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,208.7 444.9,159.2 700.0,151.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.6 444.9,152.3 700.0,221.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#198754"/><circle cx="444.9" cy="152.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.4 444.9,257.3 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.0 444.9,159.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,213.7 444.9,258.8 700.0,201.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="213.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="258.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.2 444.9,147.2 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#20c997"/><circle cx="444.9" cy="147.2" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,645.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.14s | 124,777.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.86s | 129,918.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.49s | 74,123.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.14s | 129,642.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 619.55s | 80,703.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,367.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.25s | 55,171.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 910.99s | 54,885.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.46s | 105,764.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.23s | 124,643.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 258.33s | 193,553.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,103.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.00s | 54,054.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 528.13s | 94,672.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,030.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.03s | 133,283.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.48s | 133,875.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,190.8 444.9,137.6 700.0,158.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="158.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.5 444.9,142.9 700.0,105.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.5" r="4" fill="#198754"/><circle cx="444.9" cy="142.9" r="4" fill="#198754"/><circle cx="700.0" cy="105.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.6 444.9,241.2 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.5 444.9,62.3 700.0,143.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.6 444.9,183.0 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.9 444.9,146.5 700.0,118.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#20c997"/><circle cx="444.9" cy="146.5" r="4" fill="#20c997"/><circle cx="700.0" cy="118.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,041.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.22s | 124,651.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 448.39s | 111,510.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,039.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.46s | 121,269.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 345.15s | 144,863.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,943.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.83s | 59,232.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 813.24s | 61,482.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.09s | 141,123.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.08s | 172,176.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.87s | 121,104.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.10s | 62,104.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.23s | 95,939.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.17s | 58,399.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,893.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.03s | 119,005.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.52s | 136,789.5 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-04T00:38:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,160.3 444.9,161.0 700.0,84.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="161.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.2 444.9,159.8 700.0,224.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.2" r="4" fill="#198754"/><circle cx="444.9" cy="159.8" r="4" fill="#198754"/><circle cx="700.0" cy="224.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.9 444.9,227.8 700.0,226.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="227.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.2 444.9,159.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.7 444.9,251.3 700.0,245.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.3 444.9,147.7 700.0,131.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#20c997"/><circle cx="444.9" cy="147.7" r="4" fill="#20c997"/><circle cx="700.0" cy="131.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.71s | 114,784.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.43s | 114,379.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 303.48s | 164,754.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.74s | 72,801.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 86.83s | 115,160.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 686.38s | 72,846.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.03s | 45,390.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 141.98s | 70,430.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 697.73s | 71,660.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,396.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.79s | 115,220.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 278.96s | 179,237.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.65s | 46,195.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.81s | 55,002.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.92s | 59,037.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.82s | 78,009.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.25s | 123,076.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.46s | 133,524.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,129.1 444.9,91.5 700.0,99.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="91.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.3 444.9,90.4 700.0,69.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.3" r="4" fill="#198754"/><circle cx="444.9" cy="90.4" r="4" fill="#198754"/><circle cx="700.0" cy="69.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.1 444.9,239.8 700.0,245.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.3 444.9,62.3 700.0,72.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.3 444.9,162.1 700.0,220.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="162.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.0 444.9,87.2 700.0,82.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#20c997"/><circle cx="444.9" cy="87.2" r="4" fill="#20c997"/><circle cx="700.0" cy="82.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.76s | 102,469.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.53s | 121,172.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 427.40s | 116,986.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.79s | 59,562.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.18s | 121,687.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 377.84s | 132,330.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.23s | 41,272.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 211.09s | 47,373.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1119.24s | 44,673.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.59s | 94,393.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.69s | 135,707.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.82s | 130,611.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.68s | 46,127.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 116.20s | 86,054.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 876.07s | 57,072.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.88s | 77,621.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.10s | 123,298.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.26s | 125,546.4 | PASS |

:::

:::

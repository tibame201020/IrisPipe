## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:30:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,93.0 444.9,62.3 700.0,105.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="93.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.3 444.9,189.1 700.0,79.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#198754"/><circle cx="444.9" cy="189.1" r="4" fill="#198754"/><circle cx="700.0" cy="79.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.0 444.9,209.2 700.0,215.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="209.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.4 444.9,95.8 700.0,111.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="95.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.9 444.9,219.2 700.0,196.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.1 444.9,117.4 700.0,87.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#20c997"/><circle cx="444.9" cy="117.4" r="4" fill="#20c997"/><circle cx="700.0" cy="87.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.72s | 129,550.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.49s | 146,015.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 407.61s | 122,667.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.62s | 68,380.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.01s | 78,116.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 364.97s | 136,997.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.06s | 52,460.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 148.53s | 67,326.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 781.07s | 64,015.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.22s | 108,495.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.08s | 128,065.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 417.80s | 119,675.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.37s | 61,087.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.29s | 61,999.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 674.45s | 74,134.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,327.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.85s | 116,476.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.67s | 132,742.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,68.3 444.9,104.0 700.0,88.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="68.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.6 444.9,198.7 700.0,210.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.6" r="4" fill="#198754"/><circle cx="444.9" cy="198.7" r="4" fill="#198754"/><circle cx="700.0" cy="210.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.3 444.9,241.8 700.0,188.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="188.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,128.3 700.0,125.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.3 444.9,240.4 700.0,221.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.8 444.9,140.1 700.0,177.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.8" r="4" fill="#20c997"/><circle cx="444.9" cy="140.1" r="4" fill="#20c997"/><circle cx="700.0" cy="177.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.08s | 164,365.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.24s | 142,377.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 329.26s | 151,855.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.06s | 71,128.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.08s | 83,978.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 653.78s | 76,478.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.15s | 47,274.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.06s | 57,451.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 552.99s | 90,417.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.95s | 168,067.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.51s | 127,375.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 387.72s | 128,958.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.71s | 78,684.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.53s | 58,297.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 715.70s | 69,861.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.39s | 74,699.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.24s | 120,134.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 514.06s | 97,265.5 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:25:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,195.1 444.9,159.3 700.0,136.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,173.0 444.9,217.8 700.0,208.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#198754"/><circle cx="444.9" cy="217.8" r="4" fill="#198754"/><circle cx="700.0" cy="208.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.2 444.9,228.2 700.0,248.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,70.3 444.9,156.4 700.0,134.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="70.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.6 444.9,245.6 700.0,234.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.9 444.9,153.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.9" r="4" fill="#20c997"/><circle cx="444.9" cy="153.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.19s | 89,405.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 89.07s | 112,270.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 394.68s | 126,684.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.66s | 103,476.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.55s | 74,880.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 617.57s | 80,962.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.65s | 48,435.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 146.60s | 68,213.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 902.58s | 55,396.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.91s | 169,118.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.66s | 114,074.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 390.39s | 128,076.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.96s | 50,102.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.09s | 57,113.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 779.28s | 64,161.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,828.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.43s | 115,705.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 286.97s | 174,233.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,167.1 444.9,103.5 700.0,155.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="103.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="155.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.6 444.9,224.2 700.0,203.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.6" r="4" fill="#198754"/><circle cx="444.9" cy="224.2" r="4" fill="#198754"/><circle cx="700.0" cy="203.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.1 444.9,244.6 700.0,251.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.0 444.9,130.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.6 444.9,250.6 700.0,251.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.2 444.9,157.1 700.0,149.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.2" r="4" fill="#20c997"/><circle cx="444.9" cy="157.1" r="4" fill="#20c997"/><circle cx="700.0" cy="149.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.61s | 116,171.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 62.45s | 160,123.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 402.89s | 124,104.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,648.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.52s | 76,619.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 549.28s | 91,027.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.60s | 46,292.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 159.86s | 62,555.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 869.39s | 57,511.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.22s | 121,713.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 70.83s | 141,181.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 265.04s | 188,650.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.69s | 50,787.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.26s | 58,391.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 860.39s | 58,113.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.16s | 82,209.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.24s | 123,087.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.09s | 128,506.3 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T03:01:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,162.6 444.9,150.8 700.0,144.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.7 444.9,187.6 700.0,185.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.7" r="4" fill="#198754"/><circle cx="444.9" cy="187.6" r="4" fill="#198754"/><circle cx="700.0" cy="185.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,208.9 444.9,172.7 700.0,217.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="208.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="172.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.7 444.9,62.3 700.0,125.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.6 444.9,228.3 700.0,204.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,139.7 444.9,123.0 700.0,125.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="139.7" r="4" fill="#20c997"/><circle cx="444.9" cy="123.0" r="4" fill="#20c997"/><circle cx="700.0" cy="125.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.21s | 81,933.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 114.26s | 87,516.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 553.08s | 90,402.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.90s | 62,885.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 142.81s | 70,024.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 705.29s | 70,892.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.69s | 59,905.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 129.69s | 77,108.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 896.26s | 55,787.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.96s | 100,391.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.16s | 129,597.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 501.51s | 99,697.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.30s | 44,845.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.25s | 50,696.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 804.90s | 62,119.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.77s | 92,824.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 99.27s | 100,740.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 502.35s | 99,533.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,91.7 444.9,130.1 700.0,117.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="91.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.4 444.9,134.2 700.0,187.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#198754"/><circle cx="444.9" cy="134.2" r="4" fill="#198754"/><circle cx="700.0" cy="187.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.3 444.9,232.8 700.0,229.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.4 444.9,125.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.1 444.9,241.2 700.0,231.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.9 444.9,158.6 700.0,153.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#20c997"/><circle cx="444.9" cy="158.6" r="4" fill="#20c997"/><circle cx="700.0" cy="153.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.67s | 130,429.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.03s | 109,852.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 428.55s | 116,671.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 20.58s | 48,586.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 92.91s | 107,633.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.87s | 78,880.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.26s | 47,038.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.52s | 54,788.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 883.62s | 56,585.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.05s | 99,512.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.03s | 112,324.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 341.99s | 146,204.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.24s | 75,523.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 198.97s | 50,259.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 903.91s | 55,314.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.16s | 89,605.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.75s | 94,558.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 512.98s | 97,468.9 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:51:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,197.0 444.9,62.3 700.0,150.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.8 444.9,220.4 700.0,187.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#198754"/><circle cx="444.9" cy="220.4" r="4" fill="#198754"/><circle cx="700.0" cy="187.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.9 444.9,217.7 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.5 444.9,161.3 700.0,157.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="161.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.0 444.9,249.4 700.0,249.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.6 444.9,85.6 700.0,137.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#20c997"/><circle cx="444.9" cy="85.6" r="4" fill="#20c997"/><circle cx="700.0" cy="137.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.64s | 94,020.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 53.80s | 185,873.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 396.80s | 126,007.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.64s | 68,296.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.00s | 78,125.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 495.79s | 100,849.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.32s | 54,579.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 125.14s | 79,911.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 847.99s | 58,962.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 105,999.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.47s | 118,378.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.12s | 121,030.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.13s | 61,988.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.38s | 58,351.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 859.49s | 58,174.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.92s | 112,069.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.84s | 169,949.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.17s | 134,349.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,169.5 444.9,130.2 700.0,113.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.9 444.9,218.2 700.0,132.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.9" r="4" fill="#198754"/><circle cx="444.9" cy="218.2" r="4" fill="#198754"/><circle cx="700.0" cy="132.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.2 444.9,244.6 700.0,252.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.9 444.9,137.0 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.6 444.9,242.6 700.0,244.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.2 444.9,145.1 700.0,145.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#20c997"/><circle cx="444.9" cy="145.1" r="4" fill="#20c997"/><circle cx="700.0" cy="145.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.56s | 104,558.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.31s | 129,356.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 357.17s | 139,989.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.35s | 65,138.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.48s | 73,811.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 389.95s | 128,222.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.17s | 47,238.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.14s | 57,098.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 964.34s | 51,849.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,202.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.94s | 125,092.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 290.21s | 172,288.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.16s | 65,980.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.36s | 58,357.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 874.41s | 57,181.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.01s | 83,236.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.35s | 119,981.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 417.13s | 119,867.0 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:26:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,192.0 444.9,163.3 700.0,129.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.1 444.9,152.8 700.0,218.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#198754"/><circle cx="444.9" cy="152.8" r="4" fill="#198754"/><circle cx="700.0" cy="218.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.1 444.9,219.1 700.0,250.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,190.6 444.9,168.8 700.0,146.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="190.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.1 444.9,252.4 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.8 444.9,148.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#20c997"/><circle cx="444.9" cy="148.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,866.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.08s | 117,542.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 354.81s | 140,921.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.92s | 67,006.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 80.17s | 124,742.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 625.72s | 79,907.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,690.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 126.01s | 79,360.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 863.59s | 57,897.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.12s | 98,863.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.87s | 113,807.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.51s | 129,361.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.05s | 55,407.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.90s | 56,528.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 658.50s | 75,929.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.36s | 80,925.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.21s | 127,859.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 267.81s | 186,697.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,170.5 444.9,111.2 700.0,92.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.2 444.9,97.4 700.0,190.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#198754"/><circle cx="444.9" cy="97.4" r="4" fill="#198754"/><circle cx="700.0" cy="190.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,211.6 444.9,222.9 700.0,232.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="211.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,111.3 700.0,103.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.3 444.9,191.4 700.0,136.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="191.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="136.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.3 444.9,110.5 700.0,111.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.3" r="4" fill="#20c997"/><circle cx="444.9" cy="110.5" r="4" fill="#20c997"/><circle cx="700.0" cy="111.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.84s | 92,276.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.63s | 125,574.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 367.34s | 136,112.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.40s | 64,951.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 75.02s | 133,304.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 616.21s | 81,140.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.44s | 69,261.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 159.05s | 62,874.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 866.61s | 57,696.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.54s | 153,022.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.68s | 125,502.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 384.68s | 129,979.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.54s | 64,350.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 124.11s | 80,573.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 447.71s | 111,678.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.69s | 93,527.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.39s | 125,952.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.50s | 125,469.9 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-10T02:48:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.3 444.9,154.0 700.0,146.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.2 444.9,212.3 700.0,214.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#198754"/><circle cx="444.9" cy="212.3" r="4" fill="#198754"/><circle cx="700.0" cy="214.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.5 444.9,224.2 700.0,224.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.6 444.9,149.3 700.0,159.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="149.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.0 444.9,247.6 700.0,213.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.3 444.9,62.3 700.0,111.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="111.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.70s | 78,740.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 89.58s | 111,629.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 429.67s | 116,367.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,871.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.19s | 75,648.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 670.94s | 74,522.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 28.19s | 35,471.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 146.40s | 68,308.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 734.13s | 68,107.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.33s | 136,518.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.33s | 114,513.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 460.88s | 108,489.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.79s | 48,107.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.53s | 53,899.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 664.82s | 75,208.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.13s | 82,440.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 59.46s | 168,180.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.96s | 138,135.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">124k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">166k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,161.3 444.9,111.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.3 444.9,198.9 700.0,105.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#198754"/><circle cx="444.9" cy="198.9" r="4" fill="#198754"/><circle cx="700.0" cy="105.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.9 444.9,252.3 700.0,247.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,100.1 700.0,115.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="115.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.7 444.9,220.1 700.0,231.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.5 444.9,159.7 700.0,141.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.5" r="4" fill="#20c997"/><circle cx="444.9" cy="159.7" r="4" fill="#20c997"/><circle cx="700.0" cy="141.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,849.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.13s | 123,259.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 332.17s | 150,524.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.30s | 69,935.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.12s | 75,120.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 394.60s | 126,711.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.13s | 41,443.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 219.01s | 45,660.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1038.52s | 48,145.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.60s | 86,244.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.14s | 129,641.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.51s | 120,914.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.63s | 50,947.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 157.75s | 63,389.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 877.48s | 56,981.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.80s | 84,745.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.36s | 96,748.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 467.57s | 106,936.8 | PASS |

:::

:::

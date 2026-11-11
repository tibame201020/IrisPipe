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
  **最新量測：** `2026-11-11T00:50:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,152.8 444.9,157.2 700.0,148.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="148.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,147.7 444.9,195.0 700.0,128.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="147.7" r="4" fill="#198754"/><circle cx="444.9" cy="195.0" r="4" fill="#198754"/><circle cx="700.0" cy="128.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.2 444.9,227.8 700.0,234.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="227.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,133.3 700.0,124.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.7 444.9,238.7 700.0,242.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,152.7 444.9,176.1 700.0,129.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="152.7" r="4" fill="#20c997"/><circle cx="444.9" cy="176.1" r="4" fill="#20c997"/><circle cx="700.0" cy="129.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,515.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 106.22s | 94,146.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 507.35s | 98,551.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.08s | 99,226.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.85s | 74,158.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 457.29s | 109,338.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.02s | 47,571.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.15s | 56,771.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 934.41s | 53,509.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.92s | 144,446.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.63s | 106,804.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 448.72s | 111,427.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.40s | 44,648.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.03s | 51,011.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1024.70s | 48,794.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,534.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 118.83s | 84,153.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 459.65s | 108,778.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,69.2 700.0,87.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="87.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.2 444.9,191.9 700.0,151.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.2" r="4" fill="#198754"/><circle cx="444.9" cy="191.9" r="4" fill="#198754"/><circle cx="700.0" cy="151.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.6 444.9,225.5 700.0,220.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.9 444.9,128.9 700.0,108.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.4 444.9,226.2 700.0,232.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,159.7 444.9,127.3 700.0,67.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="159.7" r="4" fill="#20c997"/><circle cx="444.9" cy="127.3" r="4" fill="#20c997"/><circle cx="700.0" cy="67.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.83s | 127,681.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.35s | 124,450.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 431.73s | 115,814.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.46s | 60,764.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 149.26s | 66,999.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 582.13s | 85,891.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.50s | 46,518.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 195.06s | 51,266.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 931.25s | 53,691.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.07s | 99,285.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 103.64s | 96,490.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.37s | 106,074.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.01s | 55,518.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.36s | 50,926.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1041.96s | 47,986.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.19s | 82,061.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.86s | 97,219.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.91s | 125,028.4 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-11-11T00:36:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,108.8 444.9,140.4 700.0,109.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,161.0 444.9,204.6 700.0,164.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="161.0" r="4" fill="#198754"/><circle cx="444.9" cy="204.6" r="4" fill="#198754"/><circle cx="700.0" cy="164.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.8 444.9,235.1 700.0,237.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.0 444.9,123.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.3 444.9,190.6 700.0,175.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="190.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.4 444.9,89.6 700.0,115.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#20c997"/><circle cx="444.9" cy="89.6" r="4" fill="#20c997"/><circle cx="700.0" cy="115.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.30s | 137,061.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.80s | 117,925.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 365.34s | 136,859.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.49s | 105,396.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.62s | 78,976.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 484.01s | 103,302.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.84s | 63,119.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.18s | 60,538.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.75s | 59,188.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.54s | 104,788.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.10s | 128,047.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 302.60s | 165,235.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.96s | 47,707.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 114.32s | 87,476.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 518.80s | 96,376.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.80s | 72,448.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.26s | 148,674.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.87s | 133,024.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,156.9 444.9,118.7 700.0,86.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.4 444.9,192.1 700.0,171.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#198754"/><circle cx="444.9" cy="192.1" r="4" fill="#198754"/><circle cx="700.0" cy="171.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.7 444.9,234.6 700.0,234.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.5 444.9,91.8 700.0,138.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.9 444.9,226.6 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,62.3 700.0,112.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="112.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.45s | 95,730.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.04s | 116,219.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.98s | 133,340.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,558.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.20s | 76,803.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 568.83s | 87,899.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,515.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.26s | 53,976.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 922.48s | 54,202.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,083.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.52s | 130,684.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 473.31s | 105,639.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.11s | 47,368.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.71s | 58,236.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.44s | 58,381.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.47s | 74,233.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 68.23s | 146,556.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 417.85s | 119,660.5 | PASS |

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
  **最新量測：** `2026-11-11T00:37:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,123.9 444.9,121.0 700.0,116.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="123.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.1 444.9,173.5 700.0,186.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.1" r="4" fill="#198754"/><circle cx="444.9" cy="173.5" r="4" fill="#198754"/><circle cx="700.0" cy="186.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.0 444.9,241.1 700.0,229.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.5 444.9,91.2 700.0,97.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.2 444.9,153.6 700.0,223.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="153.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,182.0 444.9,95.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="182.0" r="4" fill="#20c997"/><circle cx="444.9" cy="95.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.52s | 105,031.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 93.93s | 106,462.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 458.95s | 108,943.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.24s | 65,603.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.49s | 80,329.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 676.39s | 73,922.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.84s | 45,789.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 214.04s | 46,720.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 949.84s | 52,640.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.61s | 94,268.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.44s | 121,301.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 422.98s | 118,210.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.82s | 53,123.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 110.82s | 90,238.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 896.90s | 55,747.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.14s | 76,109.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.75s | 119,403.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.49s | 135,689.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,182.0 444.9,163.0 700.0,155.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="182.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="155.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.6 444.9,212.8 700.0,227.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.6" r="4" fill="#198754"/><circle cx="444.9" cy="212.8" r="4" fill="#198754"/><circle cx="700.0" cy="227.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.3 444.9,265.2 700.0,243.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="265.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.4 444.9,172.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.6 444.9,255.4 700.0,247.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.8 444.9,152.4 700.0,154.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#20c997"/><circle cx="444.9" cy="152.4" r="4" fill="#20c997"/><circle cx="700.0" cy="154.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.48s | 105,451.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.33s | 118,588.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 403.72s | 123,847.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.05s | 99,532.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.75s | 84,212.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.57s | 74,452.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.52s | 37,710.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 207.77s | 48,130.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 789.27s | 63,350.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.17s | 98,299.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.43s | 111,821.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 265.95s | 188,006.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.52s | 46,468.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 182.23s | 54,876.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 825.43s | 60,574.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.49s | 80,089.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.45s | 125,857.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 400.63s | 124,804.7 | PASS |

:::

:::

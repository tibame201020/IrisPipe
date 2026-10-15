## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:34:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,104.7 700.0,119.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.6 444.9,200.6 700.0,192.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.6" r="4" fill="#198754"/><circle cx="444.9" cy="200.6" r="4" fill="#198754"/><circle cx="700.0" cy="192.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.0 444.9,232.6 700.0,232.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.2 444.9,127.0 700.0,116.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="116.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.0 444.9,230.8 700.0,156.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="156.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.4 444.9,123.5 700.0,96.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.4" r="4" fill="#20c997"/><circle cx="444.9" cy="123.5" r="4" fill="#20c997"/><circle cx="700.0" cy="96.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.46s | 154,870.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.45s | 130,797.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 408.48s | 122,405.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.51s | 68,927.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.02s | 76,324.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 619.15s | 80,755.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.25s | 49,390.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.96s | 58,152.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 856.62s | 58,369.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.28s | 107,805.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.66s | 118,125.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.25s | 123,993.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.48s | 48,818.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 169.03s | 59,162.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 493.02s | 101,415.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,466.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.25s | 120,114.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.73s | 135,599.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">170k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">226k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,184.9 444.9,154.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.4 444.9,236.5 700.0,228.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#198754"/><circle cx="444.9" cy="236.5" r="4" fill="#198754"/><circle cx="700.0" cy="228.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.1 444.9,245.7 700.0,263.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.8 444.9,179.6 700.0,175.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="179.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="175.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.0 444.9,259.4 700.0,255.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="259.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="255.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.3 444.9,148.7 700.0,158.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#20c997"/><circle cx="444.9" cy="148.7" r="4" fill="#20c997"/><circle cx="700.0" cy="158.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.82s | 113,314.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.32s | 136,382.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 242.85s | 205,887.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.85s | 72,181.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.47s | 74,363.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 621.30s | 80,475.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.74s | 48,211.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 148.40s | 67,386.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 926.99s | 53,938.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.58s | 104,340.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.23s | 117,331.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.00s | 120,193.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.06s | 49,840.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.13s | 57,098.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 831.04s | 60,165.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.16s | 109,206.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 71.10s | 140,645.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 375.15s | 133,279.3 | PASS |

:::

## PostgreSQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:27:26Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">216k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,207.9 444.9,134.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.7 444.9,226.4 700.0,219.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#198754"/><circle cx="444.9" cy="226.4" r="4" fill="#198754"/><circle cx="700.0" cy="219.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.5 444.9,257.0 700.0,254.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.6 444.9,169.7 700.0,169.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="169.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.4 444.9,230.9 700.0,202.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="202.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.6 444.9,148.3 700.0,146.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#20c997"/><circle cx="444.9" cy="148.3" r="4" fill="#20c997"/><circle cx="700.0" cy="146.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.90s | 91,709.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.96s | 145,013.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 254.09s | 196,778.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.42s | 74,515.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.65s | 78,339.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 601.46s | 83,131.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.12s | 55,181.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.75s | 56,257.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 858.28s | 58,256.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.15s | 109,265.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.84s | 119,274.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 418.55s | 119,459.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.62s | 50,963.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.16s | 75,098.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 524.26s | 95,371.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.12s | 82,521.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.23s | 134,711.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.34s | 135,744.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">179k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">239k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,211.7 444.9,169.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="211.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="169.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,248.7 444.9,223.3 700.0,234.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#198754"/><circle cx="444.9" cy="223.3" r="4" fill="#198754"/><circle cx="700.0" cy="234.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.9 444.9,267.8 700.0,224.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.3 444.9,188.3 700.0,169.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="188.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,273.2 444.9,254.7 700.0,260.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="273.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="260.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,243.7 444.9,182.9 700.0,184.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="243.7" r="4" fill="#20c997"/><circle cx="444.9" cy="182.9" r="4" fill="#20c997"/><circle cx="700.0" cy="184.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.18s | 98,241.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.64s | 132,212.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 230.13s | 217,263.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,719.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 112.37s | 88,989.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 621.36s | 80,469.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.65s | 56,654.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.82s | 53,528.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 568.80s | 87,903.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.07s | 164,663.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.59s | 116,837.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 378.66s | 132,043.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,222.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.27s | 63,993.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 842.56s | 59,342.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.75s | 72,716.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.53s | 121,168.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 417.37s | 119,796.6 | PASS |

:::

## MySQL

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:52:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,62.3 444.9,112.2 700.0,122.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.0 444.9,189.7 700.0,171.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#198754"/><circle cx="444.9" cy="189.7" r="4" fill="#198754"/><circle cx="700.0" cy="171.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.9 444.9,206.2 700.0,189.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.9 444.9,82.3 700.0,104.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.7 444.9,226.1 700.0,201.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.7 444.9,115.4 700.0,102.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#20c997"/><circle cx="444.9" cy="115.4" r="4" fill="#20c997"/><circle cx="700.0" cy="102.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.29s | 120,670.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 101.43s | 98,592.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 530.70s | 94,215.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.26s | 61,493.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 155.59s | 64,269.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 692.45s | 72,207.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.46s | 51,382.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.54s | 56,967.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 776.06s | 64,427.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.66s | 93,843.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.45s | 111,790.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 489.45s | 102,156.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.88s | 45,697.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 207.59s | 48,171.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.31s | 59,079.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,411.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 102.92s | 97,160.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 485.20s | 103,049.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,126.8 444.9,131.4 700.0,133.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.0 444.9,171.3 700.0,203.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#198754"/><circle cx="444.9" cy="171.3" r="4" fill="#198754"/><circle cx="700.0" cy="203.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,207.4 444.9,231.9 700.0,228.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.5 444.9,135.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.1 444.9,223.7 700.0,234.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.6 444.9,151.0 700.0,119.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.6" r="4" fill="#20c997"/><circle cx="444.9" cy="151.0" r="4" fill="#20c997"/><circle cx="700.0" cy="119.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.13s | 109,529.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 93.33s | 107,150.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 472.56s | 105,806.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.33s | 65,244.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.12s | 86,117.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 723.78s | 69,082.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.89s | 67,150.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.30s | 54,259.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 888.95s | 56,246.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.00s | 124,984.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.34s | 104,884.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 348.44s | 143,495.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.64s | 44,159.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.77s | 58,558.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 943.56s | 52,991.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.53s | 64,379.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.30s | 96,810.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 441.10s | 113,352.0 | PASS |

:::

## MariaDB

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:40:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,130.1 444.9,69.7 700.0,78.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="78.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.2 444.9,167.5 700.0,140.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.2" r="4" fill="#198754"/><circle cx="444.9" cy="167.5" r="4" fill="#198754"/><circle cx="700.0" cy="140.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.9 444.9,209.5 700.0,205.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="209.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,74.3 444.9,74.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="74.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="74.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.2 444.9,221.5 700.0,204.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.1 444.9,68.8 700.0,63.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.1" r="4" fill="#20c997"/><circle cx="444.9" cy="68.8" r="4" fill="#20c997"/><circle cx="700.0" cy="63.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.37s | 96,432.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.08s | 124,875.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 414.35s | 120,672.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.67s | 68,175.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.81s | 78,855.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 545.48s | 91,663.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.84s | 50,400.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.30s | 59,067.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 818.24s | 61,107.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.15s | 122,744.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.55s | 122,625.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.46s | 128,383.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.08s | 49,793.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 187.22s | 53,413.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 811.22s | 61,635.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.04s | 76,693.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.82s | 125,288.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 391.61s | 127,679.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,177.4 444.9,89.4 700.0,142.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.5 444.9,226.0 700.0,206.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.5" r="4" fill="#198754"/><circle cx="444.9" cy="226.0" r="4" fill="#198754"/><circle cx="700.0" cy="206.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.1 444.9,257.3 700.0,257.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.8 444.9,171.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="171.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.5 444.9,261.8 700.0,193.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="261.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,235.9 444.9,131.1 700.0,103.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="235.9" r="4" fill="#20c997"/><circle cx="444.9" cy="131.1" r="4" fill="#20c997"/><circle cx="700.0" cy="103.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.91s | 112,233.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.18s | 174,892.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.16s | 136,925.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.71s | 67,976.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.80s | 77,639.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 547.38s | 91,344.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.68s | 48,355.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.76s | 55,321.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 903.29s | 55,352.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.81s | 101,968.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.03s | 116,241.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 257.44s | 194,216.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.04s | 62,328.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 191.93s | 52,102.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 495.42s | 100,923.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,601.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 68.87s | 145,201.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 302.98s | 165,028.5 | PASS |

:::

## SQL Server

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:26:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,205.9 444.9,142.8 700.0,105.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.9 444.9,216.2 700.0,204.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#198754"/><circle cx="444.9" cy="216.2" r="4" fill="#198754"/><circle cx="700.0" cy="204.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.9 444.9,247.9 700.0,235.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.6 444.9,144.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.4 444.9,195.4 700.0,242.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.6 444.9,143.5 700.0,145.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.6" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="145.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,904.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 75.58s | 132,304.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 315.87s | 158,295.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.76s | 63,439.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.31s | 81,758.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 555.47s | 90,013.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.28s | 65,453.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 166.69s | 59,991.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 732.36s | 68,272.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.79s | 128,336.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.06s | 131,466.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 266.28s | 187,770.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.26s | 54,770.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 104.04s | 96,120.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 781.53s | 63,977.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.32s | 69,847.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.83s | 131,868.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.47s | 130,389.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">210k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,201.6 444.9,62.3 700.0,84.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.6 444.9,214.6 700.0,222.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#198754"/><circle cx="444.9" cy="214.6" r="4" fill="#198754"/><circle cx="700.0" cy="222.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.6 444.9,249.9 700.0,198.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.7 444.9,163.5 700.0,128.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.5 444.9,198.9 700.0,189.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.0 444.9,168.2 700.0,116.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#20c997"/><circle cx="444.9" cy="168.2" r="4" fill="#20c997"/><circle cx="700.0" cy="116.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.72s | 93,301.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 52.44s | 190,683.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 285.23s | 175,295.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.99s | 62,535.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.77s | 84,194.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.43s | 78,935.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.55s | 46,403.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.98s | 59,529.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 524.72s | 95,289.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,481.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.38s | 119,938.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 346.94s | 144,118.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.83s | 77,960.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.06s | 95,179.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 492.87s | 101,447.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.21s | 65,741.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.72s | 116,654.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 327.48s | 152,683.4 | PASS |

:::

## Oracle

**目前 schema 覆蓋率：** 36/36 cases
  **最新量測：** `2026-10-15T22:41:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,204.1 444.9,129.0 700.0,147.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="204.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="129.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.0 444.9,188.3 700.0,121.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#198754"/><circle cx="444.9" cy="188.3" r="4" fill="#198754"/><circle cx="700.0" cy="121.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.2 444.9,222.4 700.0,250.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.4 444.9,133.4 700.0,124.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.6 444.9,218.5 700.0,231.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,130.7 444.9,62.3 700.0,116.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="130.7" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="116.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.94s | 77,261.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.24s | 121,589.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 450.74s | 110,929.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.00s | 66,675.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.52s | 86,567.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 396.39s | 126,136.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.28s | 42,962.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.53s | 66,431.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1003.96s | 49,802.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.23s | 97,732.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.03s | 119,006.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.65s | 124,485.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.34s | 46,856.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 145.43s | 68,762.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 820.17s | 60,962.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.29s | 120,583.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.13s | 160,960.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.14s | 129,152.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒搬移筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">165k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">220k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">總搬移筆數（對數刻度）</text><polyline points="80.0,221.1 444.9,62.3 700.0,168.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="168.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,253.6 444.9,236.7 700.0,233.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#198754"/><circle cx="444.9" cy="236.7" r="4" fill="#198754"/><circle cx="700.0" cy="233.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,273.4 444.9,271.3 700.0,285.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="273.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="285.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.9 444.9,168.0 700.0,163.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="163.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.6 444.9,259.5 700.0,253.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="259.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.9 444.9,136.8 700.0,154.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.9" r="4" fill="#20c997"/><circle cx="444.9" cy="136.8" r="4" fill="#20c997"/><circle cx="700.0" cy="154.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.95s | 83,703.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 49.90s | 200,400.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 409.62s | 122,065.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.71s | 59,840.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.38s | 72,263.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 669.40s | 74,693.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.11s | 45,230.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 213.50s | 46,837.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1377.57s | 36,295.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.15s | 122,759.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.50s | 122,702.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.46s | 125,797.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.55s | 79,649.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.17s | 55,503.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 839.31s | 59,572.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.83s | 77,960.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 68.65s | 145,657.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 376.21s | 132,904.5 | PASS |

:::

:::

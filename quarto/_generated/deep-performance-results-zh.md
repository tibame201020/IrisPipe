## 深度資料量 Benchmark

以下保留結果來自 GitHub-hosted runner 的回歸基準。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

圖上的圓點是實際量測值；平滑曲線只使用 shape-preserving interpolation 作為視覺導引，不代表額外量測點。

::: {.panel-tabset}
## H2

**保留覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T03:37:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">174k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">260k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">347k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,159.0 C 201.6,89.9 323.3,62.3 444.9,62.3 C 530.0,62.3 615.0,86.8 700.0,126.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="159.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,204.7 C 201.6,225.2 323.3,241.9 444.9,241.9 C 530.0,241.9 615.0,241.9 700.0,239.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="204.7" r="4" fill="#198754"/><circle cx="444.9" cy="241.9" r="4" fill="#198754"/><circle cx="700.0" cy="239.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,239.5 C 201.6,240.0 323.3,240.4 444.9,240.8 C 530.0,241.0 615.0,241.2 700.0,241.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,184.1 C 201.6,184.1 323.3,181.9 444.9,178.4 C 530.0,175.9 615.0,161.6 700.0,147.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,273.2 C 201.6,269.7 323.3,267.6 444.9,267.6 C 530.0,267.6 615.0,268.0 700.0,269.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="273.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="267.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="269.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,235.5 C 201.6,209.8 323.3,189.0 444.9,180.7 C 530.0,174.9 615.0,169.2 700.0,168.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="235.5" r="4" fill="#20c997"/><circle cx="444.9" cy="180.7" r="4" fill="#20c997"/><circle cx="700.0" cy="168.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 4.91s | 203,624.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 31.69s | 315,576.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 206.88s | 241,688.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 6.63s | 150,715.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 92.78s | 107,780.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 450.29s | 111,039.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 9.05s | 110,509.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 91.72s | 109,029.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 461.79s | 108,275.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.73s | 174,611.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.18s | 181,211.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 230.77s | 216,662.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.99s | 71,479.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 128.22s | 77,994.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 658.38s | 75,943.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.69s | 115,114.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 56.00s | 178,577.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 260.19s | 192,171.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">219k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">292k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,72.1 C 201.6,75.9 323.3,75.9 444.9,75.9 C 530.0,75.9 615.0,69.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="72.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,233.5 C 201.6,227.3 323.3,223.7 444.9,223.7 C 530.0,223.7 615.0,224.7 700.0,227.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.5" r="4" fill="#198754"/><circle cx="444.9" cy="223.7" r="4" fill="#198754"/><circle cx="700.0" cy="227.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,247.4 C 201.6,239.1 323.3,232.3 444.9,230.0 C 530.0,228.4 615.0,226.9 700.0,226.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,161.1 C 201.6,153.0 323.3,145.2 444.9,137.8 C 530.0,132.5 615.0,127.5 700.0,122.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,260.4 C 201.6,260.2 323.3,259.3 444.9,258.4 C 530.0,257.7 615.0,256.5 700.0,255.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="258.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="255.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,229.3 C 201.6,174.6 323.3,141.9 444.9,141.9 C 530.0,141.9 615.0,149.5 700.0,172.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.3" r="4" fill="#20c997"/><circle cx="444.9" cy="141.9" r="4" fill="#20c997"/><circle cx="700.0" cy="172.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 200 | 3.91s | 255,819.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,000 | 39.66s | 252,117.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,000 | 188.39s | 265,408.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 200 | 10.12s | 98,775.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,000 | 92.36s | 108,275.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,000 | 477.56s | 104,698.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 200 | 11.73s | 85,258.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,000 | 97.89s | 102,152.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,000 | 475.36s | 105,183.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 200 | 5.91s | 169,233.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,000 | 52.10s | 191,949.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,000 | 242.01s | 206,598.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 200 | 13.78s | 72,574.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,000 | 134.09s | 74,574.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,000 | 643.30s | 77,723.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 200 | 9.72s | 102,870.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,000 | 53.22s | 187,888.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,000 | 315.21s | 158,624.4 | PASS |

:::

## PostgreSQL

**保留覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T03:33:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">67k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">202k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">269k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,157.3 C 201.6,114.0 323.3,77.8 444.9,70.9 C 530.0,66.1 615.0,62.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="70.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,202.6 C 201.6,198.9 323.3,196.0 444.9,194.7 C 530.0,193.8 615.0,192.9 700.0,192.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.6" r="4" fill="#198754"/><circle cx="444.9" cy="194.7" r="4" fill="#198754"/><circle cx="700.0" cy="192.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,205.1 C 201.6,212.6 323.3,218.5 444.9,218.5 C 530.0,218.5 615.0,218.5 700.0,217.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="205.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,160.0 C 201.6,138.4 323.3,119.9 444.9,105.2 C 530.0,94.8 615.0,85.9 700.0,78.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="160.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="105.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="78.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,266.6 C 201.6,257.8 323.3,250.2 444.9,244.1 C 530.0,239.9 615.0,236.2 700.0,233.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,193.8 C 201.6,162.9 323.3,138.1 444.9,124.9 C 530.0,115.7 615.0,107.7 700.0,104.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.8" r="4" fill="#20c997"/><circle cx="444.9" cy="124.9" r="4" fill="#20c997"/><circle cx="700.0" cy="104.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.27s | 159,591.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 42.16s | 237,214.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 204.12s | 244,952.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 8.41s | 118,948.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.34s | 126,043.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 391.47s | 127,725.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 8.57s | 116,658.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 95.55s | 104,659.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 472.39s | 105,844.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.36s | 157,158.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 48.44s | 206,436.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 217.22s | 230,184.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.28s | 61,428.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 122.53s | 81,614.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 547.14s | 91,385.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 7.88s | 126,839.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 53.00s | 188,693.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 241.96s | 206,650.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">212k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">283k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,156.8 C 201.6,144.2 323.3,127.3 444.9,108.5 C 530.0,95.4 615.0,79.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,235.6 C 201.6,225.1 323.3,216.1 444.9,216.1 C 530.0,216.1 615.0,216.1 700.0,216.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#198754"/><circle cx="444.9" cy="216.1" r="4" fill="#198754"/><circle cx="700.0" cy="216.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,246.6 C 201.6,235.2 323.3,225.7 444.9,224.2 C 530.0,223.2 615.0,222.4 700.0,222.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,165.9 C 201.6,155.7 323.3,141.9 444.9,126.6 C 530.0,115.8 615.0,102.8 700.0,88.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="126.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="88.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,258.6 C 201.6,255.7 323.3,253.3 444.9,252.3 C 530.0,251.7 615.0,251.0 700.0,251.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,220.4 C 201.6,187.1 323.3,160.2 444.9,144.5 C 530.0,133.6 615.0,124.3 700.0,120.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.4" r="4" fill="#20c997"/><circle cx="444.9" cy="144.5" r="4" fill="#20c997"/><circle cx="700.0" cy="120.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 200 | 5.95s | 168,095.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,000 | 46.81s | 213,634.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,000 | 194.35s | 257,265.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 200 | 10.66s | 93,773.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,000 | 89.16s | 112,155.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,000 | 448.01s | 111,604.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 200 | 11.99s | 83,430.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,000 | 95.70s | 104,491.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,000 | 470.84s | 106,192.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 200 | 6.27s | 159,489.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,000 | 50.86s | 196,629.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,000 | 215.35s | 232,184.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 200 | 13.88s | 72,025.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,000 | 128.23s | 77,987.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,000 | 630.92s | 79,249.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 200 | 9.25s | 108,108.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,000 | 55.66s | 179,652.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,000 | 246.65s | 202,718.0 | PASS |

:::

## MySQL

**保留覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T03:54:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,117.3 C 201.6,93.2 323.3,78.8 444.9,78.8 C 530.0,78.8 615.0,82.2 700.0,92.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,170.9 C 201.6,180.2 323.3,185.3 444.9,185.3 C 530.0,185.3 615.0,183.6 700.0,179.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#198754"/><circle cx="444.9" cy="185.3" r="4" fill="#198754"/><circle cx="700.0" cy="179.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,191.1 C 201.6,180.5 323.3,175.5 444.9,175.5 C 530.0,175.5 615.0,178.4 700.0,183.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="175.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="183.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,79.8 C 201.6,80.7 323.3,80.7 444.9,80.7 C 530.0,80.7 615.0,71.0 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="79.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,241.2 C 201.6,233.3 323.3,230.5 444.9,230.5 C 530.0,230.5 615.0,233.8 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,167.3 C 201.6,122.1 323.3,84.2 444.9,84.2 C 530.0,84.2 615.0,84.2 700.0,88.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.3" r="4" fill="#20c997"/><circle cx="444.9" cy="84.2" r="4" fill="#20c997"/><circle cx="700.0" cy="88.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.37s | 135,648.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.64s | 159,650.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 330.47s | 151,299.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.78s | 102,249.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.20s | 93,279.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 516.07s | 96,886.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,645.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 100.61s | 99,394.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 530.75s | 94,206.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.29s | 159,007.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 63.10s | 158,473.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 294.21s | 169,948.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.12s | 58,421.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.61s | 65,098.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 832.55s | 60,056.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.57s | 104,471.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 63.98s | 156,311.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 325.36s | 153,678.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">216k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,137.0 C 201.6,122.1 323.3,107.4 444.9,92.8 C 530.0,82.6 615.0,72.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,195.1 C 201.6,201.0 323.3,204.5 444.9,204.5 C 530.0,204.5 615.0,203.6 700.0,201.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.1" r="4" fill="#198754"/><circle cx="444.9" cy="204.5" r="4" fill="#198754"/><circle cx="700.0" cy="201.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,222.0 C 201.6,222.0 323.3,220.8 444.9,219.0 C 530.0,217.8 615.0,211.5 700.0,205.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,155.1 C 201.6,122.4 323.3,110.2 444.9,110.2 C 530.0,110.2 615.0,122.7 700.0,141.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="110.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,253.7 C 201.6,248.0 323.3,243.4 444.9,241.1 C 530.0,239.5 615.0,238.1 700.0,237.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,220.8 C 201.6,185.2 323.3,156.5 444.9,145.3 C 530.0,137.4 615.0,129.7 700.0,129.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.8" r="4" fill="#20c997"/><circle cx="444.9" cy="145.3" r="4" fill="#20c997"/><circle cx="700.0" cy="129.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 200 | 7.01s | 142,612.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,000 | 57.33s | 174,419.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,000 | 254.59s | 196,395.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 200 | 9.93s | 100,735.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,000 | 106.42s | 93,971.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,000 | 518.47s | 96,437.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 200 | 12.29s | 81,353.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,000 | 119.73s | 83,517.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,000 | 535.77s | 93,323.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 200 | 7.72s | 129,533.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,000 | 61.77s | 161,893.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,000 | 359.58s | 139,052.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 200 | 17.08s | 58,558.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,000 | 147.93s | 67,601.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,000 | 713.95s | 70,032.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 200 | 12.16s | 82,263.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,000 | 73.19s | 136,630.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,000 | 337.98s | 147,937.7 | PASS |

:::

## MariaDB

**保留覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T03:37:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">239k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">358k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">477k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,243.0 C 201.6,118.6 323.3,62.3 444.9,62.3 C 530.0,62.3 615.0,99.2 700.0,164.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="243.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="164.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,272.2 C 201.6,267.2 323.3,263.1 444.9,262.2 C 530.0,261.6 615.0,261.0 700.0,261.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="272.2" r="4" fill="#198754"/><circle cx="444.9" cy="262.2" r="4" fill="#198754"/><circle cx="700.0" cy="261.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,277.6 C 201.6,276.4 323.3,273.6 444.9,270.5 C 530.0,268.3 615.0,265.0 700.0,261.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="270.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,212.1 C 201.6,206.5 323.3,199.9 444.9,192.7 C 530.0,187.6 615.0,181.9 700.0,175.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="212.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="192.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="175.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,293.4 C 201.6,293.4 323.3,290.7 444.9,287.2 C 530.0,284.8 615.0,276.9 700.0,268.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="293.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="287.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="268.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,270.2 C 201.6,239.9 323.3,215.4 444.9,206.6 C 530.0,200.4 615.0,194.5 700.0,194.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="270.2" r="4" fill="#20c997"/><circle cx="444.9" cy="206.6" r="4" fill="#20c997"/><circle cx="700.0" cy="194.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.83s | 146,348.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 23.04s | 433,990.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 184.56s | 270,921.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.01s | 99,950.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 86.34s | 115,815.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 424.78s | 117,707.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 10.96s | 91,265.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 97.39s | 102,676.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 426.59s | 117,208.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.11s | 195,618.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 44.15s | 226,516.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 197.41s | 253,277.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.12s | 66,146.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 131.54s | 76,023.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 474.44s | 105,387.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.70s | 103,050.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 48.94s | 204,344.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 223.60s | 223,610.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">159k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">239k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">319k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,167.5 C 201.6,128.0 323.3,96.1 444.9,82.3 C 530.0,72.6 615.0,63.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="82.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,242.8 C 201.6,233.4 323.3,225.6 444.9,224.1 C 530.0,223.1 615.0,222.3 700.0,222.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.8" r="4" fill="#198754"/><circle cx="444.9" cy="224.1" r="4" fill="#198754"/><circle cx="700.0" cy="222.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,262.9 C 201.6,251.0 323.3,240.9 444.9,239.9 C 530.0,239.2 615.0,238.7 700.0,238.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,167.2 C 201.6,155.4 323.3,140.5 444.9,124.1 C 530.0,112.6 615.0,99.1 700.0,84.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,272.0 C 201.6,259.2 323.3,251.6 444.9,251.6 C 530.0,251.6 615.0,253.5 700.0,258.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="272.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,236.0 C 201.6,197.6 323.3,166.6 444.9,151.2 C 530.0,140.5 615.0,131.0 700.0,128.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#20c997"/><circle cx="444.9" cy="151.2" r="4" fill="#20c997"/><circle cx="700.0" cy="128.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 200 | 5.62s | 178,062.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,000 | 37.22s | 268,701.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,000 | 172.43s | 289,967.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 200 | 10.20s | 98,048.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,000 | 84.81s | 117,907.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,000 | 417.26s | 119,829.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 200 | 13.04s | 76,704.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,000 | 98.88s | 101,129.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,000 | 488.28s | 102,400.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 200 | 5.61s | 178,412.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,000 | 44.60s | 224,230.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,000 | 187.88s | 266,123.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 200 | 14.94s | 66,943.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,000 | 112.82s | 88,639.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,000 | 618.25s | 80,873.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 200 | 9.50s | 105,274.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,000 | 51.18s | 195,377.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,000 | 227.50s | 219,783.1 | PASS |

:::

## SQL Server

**保留覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T03:38:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">210k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">279k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,150.0 C 201.6,128.1 323.3,108.9 444.9,92.6 C 530.0,81.2 615.0,71.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,239.0 C 201.6,229.2 323.3,220.1 444.9,211.6 C 530.0,205.7 615.0,200.2 700.0,195.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.0" r="4" fill="#198754"/><circle cx="444.9" cy="211.6" r="4" fill="#198754"/><circle cx="700.0" cy="195.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,242.6 C 201.6,226.9 323.3,214.0 444.9,214.0 C 530.0,214.0 615.0,214.0 700.0,215.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,170.5 C 201.6,134.0 323.3,104.6 444.9,92.4 C 530.0,83.8 615.0,75.6 700.0,74.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="170.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="74.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,246.1 C 201.6,249.9 323.3,251.4 444.9,251.4 C 530.0,251.4 615.0,250.0 700.0,247.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,228.7 C 201.6,176.0 323.3,129.2 444.9,129.1 C 530.0,129.0 615.0,129.0 700.0,129.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#20c997"/><circle cx="444.9" cy="129.1" r="4" fill="#20c997"/><circle cx="700.0" cy="129.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 5.80s | 172,354.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 44.28s | 225,856.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 196.79s | 254,081.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.18s | 89,413.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 87.00s | 114,946.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 383.30s | 130,446.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,103.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 88.69s | 112,745.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 450.21s | 111,060.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.53s | 153,233.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 44.24s | 226,055.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 206.29s | 242,377.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.07s | 82,856.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 128.42s | 77,868.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 615.34s | 81,256.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.10s | 99,000.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 52.13s | 191,809.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 260.50s | 191,939.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">174k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">261k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">348k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,199.8 C 201.6,168.8 323.3,140.2 444.9,113.9 C 530.0,95.5 615.0,78.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,252.7 C 201.6,252.7 323.3,250.1 444.9,247.5 C 530.0,245.6 615.0,241.8 700.0,237.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#198754"/><circle cx="444.9" cy="247.5" r="4" fill="#198754"/><circle cx="700.0" cy="237.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,272.7 C 201.6,255.9 323.3,242.0 444.9,242.0 C 530.0,242.0 615.0,242.0 700.0,244.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,206.8 C 201.6,192.5 323.3,179.7 444.9,168.3 C 530.0,160.4 615.0,153.3 700.0,146.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,277.3 C 201.6,271.7 323.3,267.9 444.9,267.9 C 530.0,267.9 615.0,268.3 700.0,270.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="277.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="267.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="270.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,234.6 C 201.6,210.3 323.3,189.1 444.9,171.3 C 530.0,158.9 615.0,147.9 700.0,138.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#20c997"/><circle cx="444.9" cy="171.3" r="4" fill="#20c997"/><circle cx="700.0" cy="138.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 200 | 6.38s | 156,690.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,000 | 39.03s | 256,193.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,000 | 158.23s | 315,999.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 200 | 10.48s | 95,383.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,000 | 98.59s | 101,434.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,000 | 443.35s | 112,778.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 200 | 13.85s | 72,186.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,000 | 92.85s | 107,699.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,000 | 474.42s | 105,392.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 200 | 6.73s | 148,544.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,000 | 51.79s | 193,102.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,000 | 229.35s | 218,011.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 200 | 14.96s | 66,849.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,000 | 128.69s | 77,703.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,000 | 667.86s | 74,866.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 200 | 8.60s | 116,306.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,000 | 52.73s | 189,659.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,000 | 219.59s | 227,692.9 | PASS |

:::

## Oracle

**保留覆蓋率：** 36/36 cases
  **最新量測：** `2026-09-09T03:46:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">178k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">237k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,132.3 C 201.6,94.4 323.3,62.3 444.9,62.3 C 530.0,62.3 615.0,62.3 700.0,65.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,231.1 C 201.6,202.1 323.3,177.6 444.9,173.8 C 530.0,171.1 615.0,169.1 700.0,169.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.1" r="4" fill="#198754"/><circle cx="444.9" cy="173.8" r="4" fill="#198754"/><circle cx="700.0" cy="169.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,232.3 C 201.6,219.0 323.3,209.6 444.9,209.6 C 530.0,209.6 615.0,209.8 700.0,214.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="209.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,155.2 C 201.6,118.7 323.3,88.9 444.9,79.8 C 530.0,73.5 615.0,67.6 700.0,67.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="79.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="67.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,262.1 C 201.6,246.6 323.3,235.7 444.9,235.7 C 530.0,235.7 615.0,236.0 700.0,241.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,198.5 C 201.6,159.7 323.3,128.4 444.9,110.9 C 530.0,98.7 615.0,88.3 700.0,84.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.5" r="4" fill="#20c997"/><circle cx="444.9" cy="110.9" r="4" fill="#20c997"/><circle cx="700.0" cy="84.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.25s | 159,948.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 46.47s | 215,188.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 234.80s | 212,946.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,980.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 78.61s | 127,216.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 381.88s | 130,931.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.34s | 81,037.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 101.08s | 98,935.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 523.90s | 95,437.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.05s | 141,844.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 49.67s | 201,336.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 237.00s | 210,974.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.38s | 57,534.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 127.62s | 78,358.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 674.28s | 74,153.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.28s | 107,712.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 56.57s | 176,784.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 252.43s | 198,078.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle 來源 / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle 來源 / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">每秒筆數</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">197k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">263k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">資料筆數（對數刻度）</text><path d="M 80.0,186.9 C 201.6,142.1 323.3,106.0 444.9,88.4 C 530.0,76.1 615.0,65.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="186.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="88.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><path d="M 80.0,242.5 C 201.6,224.1 323.3,207.9 444.9,207.7 C 530.0,207.5 615.0,207.4 700.0,207.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#198754"/><circle cx="444.9" cy="207.7" r="4" fill="#198754"/><circle cx="700.0" cy="207.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><path d="M 80.0,252.3 C 201.6,252.3 323.3,251.1 444.9,249.1 C 530.0,247.7 615.0,236.4 700.0,225.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><path d="M 80.0,223.5 C 201.6,168.2 323.3,122.3 444.9,112.5 C 530.0,105.6 615.0,100.1 700.0,100.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="223.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="112.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><path d="M 80.0,267.2 C 201.6,259.7 323.3,253.4 444.9,252.6 C 530.0,252.0 615.0,251.6 700.0,251.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><path d="M 80.0,211.0 C 201.6,179.4 323.3,153.9 444.9,140.5 C 530.0,131.1 615.0,122.9 700.0,120.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#20c997"/><circle cx="444.9" cy="140.5" r="4" fill="#20c997"/><circle cx="700.0" cy="120.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| 目的資料庫 | Rows | Fetch | Batch | 交易組數 | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 200 | 7.70s | 129,887.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,000 | 46.23s | 216,333.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,000 | 208.99s | 239,245.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 200 | 12.32s | 81,155.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,000 | 89.52s | 111,710.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,000 | 446.72s | 111,926.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 200 | 13.78s | 72,574.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,000 | 132.74s | 75,335.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,000 | 521.05s | 95,959.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 200 | 10.22s | 97,799.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,000 | 51.23s | 195,194.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,000 | 242.60s | 206,100.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 200 | 16.81s | 59,474.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,000 | 138.27s | 72,321.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,000 | 683.24s | 73,180.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 200 | 9.19s | 108,790.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,000 | 58.60s | 170,654.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,000 | 265.21s | 188,531.3 | PASS |

:::

:::

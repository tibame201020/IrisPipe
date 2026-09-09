## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T22:11:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,128.3 444.9,90.8 700.0,92.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,158.6 700.0,131.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="158.6" r="4" fill="#198754"/><circle cx="700.0" cy="131.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.9 444.9,218.4 700.0,213.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,80.8 444.9,80.2 700.0,79.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="80.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="79.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.5 444.9,211.1 700.0,181.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="181.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.7 444.9,100.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.7" r="4" fill="#20c997"/><circle cx="444.9" cy="100.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.80s | 101,999.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.99s | 120,493.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.39s | 119,505.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.72s | 67,916.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.91s | 87,026.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 497.01s | 100,600.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.25s | 49,390.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.89s | 57,507.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 835.42s | 59,850.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.97s | 125,391.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.54s | 125,719.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 396.51s | 126,100.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.07s | 66,352.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.56s | 61,137.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 660.55s | 75,694.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.33s | 81,076.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.27s | 115,913.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.60s | 134,552.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,113.4 700.0,76.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.7 444.9,193.1 700.0,192.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#198754"/><circle cx="444.9" cy="193.1" r="4" fill="#198754"/><circle cx="700.0" cy="192.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.9 444.9,239.2 700.0,218.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.6 444.9,119.6 700.0,146.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="119.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.6 444.9,221.3 700.0,217.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.5 444.9,127.6 700.0,102.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.5" r="4" fill="#20c997"/><circle cx="444.9" cy="127.6" r="4" fill="#20c997"/><circle cx="700.0" cy="102.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.80s | 146,950.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.75s | 119,403.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 358.84s | 139,339.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.70s | 68,050.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.75s | 76,478.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 652.91s | 76,580.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.92s | 52,856.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.66s | 51,637.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 796.36s | 62,785.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.34s | 96,674.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.16s | 116,057.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 492.85s | 101,451.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.09s | 49,785.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 163.16s | 61,289.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 789.63s | 63,320.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.40s | 74,638.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 89.48s | 111,758.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.33s | 125,208.8 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T22:04:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,143.5 444.9,108.4 700.0,102.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="143.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.8 444.9,184.7 700.0,172.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.8" r="4" fill="#198754"/><circle cx="444.9" cy="184.7" r="4" fill="#198754"/><circle cx="700.0" cy="172.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.9 444.9,221.5 700.0,228.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.4 444.9,101.1 700.0,87.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.0 444.9,229.8 700.0,191.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.3 444.9,62.3 700.0,82.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="82.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.93s | 100,725.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.88s | 119,212.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 407.83s | 122,600.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.72s | 85,309.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.48s | 79,065.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 582.99s | 85,764.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.00s | 52,645.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.45s | 59,717.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 890.41s | 56,153.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.97s | 100,250.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.28s | 123,034.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.56s | 130,356.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.02s | 52,581.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.70s | 55,339.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 661.65s | 75,568.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.62s | 79,264.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.70s | 143,474.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.42s | 132,830.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,146.7 444.9,93.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.0 444.9,173.6 700.0,178.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#198754"/><circle cx="444.9" cy="173.6" r="4" fill="#198754"/><circle cx="700.0" cy="178.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.4 444.9,264.1 700.0,231.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.2 444.9,175.4 700.0,121.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="175.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.4 444.9,225.7 700.0,229.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.9 444.9,138.7 700.0,102.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#20c997"/><circle cx="444.9" cy="138.7" r="4" fill="#20c997"/><circle cx="700.0" cy="102.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,791.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.57s | 130,592.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 339.16s | 147,424.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.80s | 67,572.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.58s | 87,272.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 590.70s | 84,645.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 30.54s | 32,746.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 260.89s | 38,329.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 896.02s | 55,802.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,854.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 115.89s | 86,285.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 433.87s | 115,243.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,734.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.28s | 59,075.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 875.48s | 57,111.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.57s | 79,535.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 94.26s | 106,085.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.29s | 125,536.7 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T11:07:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,115.8 444.9,78.5 700.0,95.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.8 444.9,156.7 700.0,129.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.8" r="4" fill="#198754"/><circle cx="444.9" cy="156.7" r="4" fill="#198754"/><circle cx="700.0" cy="129.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.1 444.9,219.9 700.0,206.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.0 444.9,73.2 700.0,83.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="83.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.0 444.9,195.0 700.0,186.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.9 444.9,98.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#20c997"/><circle cx="444.9" cy="98.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.19s | 89,333.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.63s | 104,570.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 511.23s | 97,804.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.90s | 59,182.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.60s | 72,671.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 595.36s | 83,983.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.12s | 49,696.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.13s | 46,918.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 956.65s | 52,265.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,837.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.70s | 106,723.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 487.43s | 102,578.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 27.88s | 35,869.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.19s | 57,082.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 827.47s | 60,425.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.68s | 68,106.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.63s | 96,498.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 449.76s | 111,169.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,123.4 444.9,169.1 700.0,125.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="123.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="169.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.5 444.9,171.6 700.0,168.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#198754"/><circle cx="444.9" cy="171.6" r="4" fill="#198754"/><circle cx="700.0" cy="168.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.6 444.9,223.3 700.0,277.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,194.8 444.9,62.3 700.0,113.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="113.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.7 444.9,212.4 700.0,201.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.4 444.9,106.7 700.0,69.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.4" r="4" fill="#20c997"/><circle cx="444.9" cy="106.7" r="4" fill="#20c997"/><circle cx="700.0" cy="69.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.39s | 87,780.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 145.32s | 68,815.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 574.68s | 87,004.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.61s | 64,082.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 147.50s | 67,794.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.13s | 68,952.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.63s | 46,236.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 215.78s | 46,344.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 2108.86s | 23,709.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 17.20s | 58,156.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.38s | 113,149.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 543.19s | 92,049.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.86s | 45,743.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.54s | 50,881.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 899.50s | 55,586.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.65s | 73,276.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.57s | 94,722.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 454.44s | 110,025.8 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T10:44:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,118.4 444.9,64.0 700.0,86.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.6 444.9,177.3 700.0,161.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.6" r="4" fill="#198754"/><circle cx="444.9" cy="177.3" r="4" fill="#198754"/><circle cx="700.0" cy="161.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.2 444.9,224.0 700.0,219.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,101.4 444.9,63.7 700.0,106.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="101.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.4 444.9,222.1 700.0,220.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.0 444.9,82.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.0" r="4" fill="#20c997"/><circle cx="444.9" cy="82.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.21s | 108,577.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.59s | 135,882.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.99s | 124,692.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.73s | 67,865.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.45s | 79,079.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 575.93s | 86,815.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.82s | 48,019.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.60s | 55,678.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 865.82s | 57,749.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.54s | 117,123.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.52s | 136,024.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 435.55s | 114,797.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.87s | 47,915.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.69s | 56,594.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 870.48s | 57,439.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,736.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.82s | 126,866.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 365.65s | 136,744.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,135.4 444.9,62.3 700.0,66.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.3 444.9,180.0 700.0,81.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.3" r="4" fill="#198754"/><circle cx="444.9" cy="180.0" r="4" fill="#198754"/><circle cx="700.0" cy="81.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.2 444.9,223.6 700.0,201.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.0 444.9,97.9 700.0,103.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.6 444.9,223.3 700.0,213.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.5 444.9,90.6 700.0,71.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.5" r="4" fill="#20c997"/><circle cx="444.9" cy="90.6" r="4" fill="#20c997"/><circle cx="700.0" cy="71.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.96s | 100,381.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.93s | 137,125.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.84s | 134,828.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.03s | 71,265.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.32s | 77,927.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 391.94s | 127,568.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.90s | 43,664.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.61s | 55,987.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 744.39s | 67,169.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.52s | 105,075.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.87s | 119,230.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 429.54s | 116,404.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.01s | 49,972.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.04s | 56,168.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 818.72s | 61,070.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.06s | 71,123.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.39s | 122,872.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.24s | 132,542.0 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T22:11:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,151.5 444.9,87.4 700.0,104.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.1 444.9,170.2 700.0,176.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#198754"/><circle cx="444.9" cy="170.2" r="4" fill="#198754"/><circle cx="700.0" cy="176.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,233.8 444.9,221.0 700.0,198.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.3 444.9,91.7 700.0,82.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="82.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.0 444.9,197.7 700.0,177.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="177.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,94.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="94.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,894.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.10s | 128,044.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 419.75s | 119,119.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.23s | 65,642.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.30s | 85,252.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 608.16s | 82,215.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,361.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.53s | 58,987.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 709.35s | 70,486.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.25s | 97,589.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.46s | 125,851.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 382.91s | 130,578.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.73s | 50,681.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 140.82s | 71,011.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 612.52s | 81,630.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.44s | 87,397.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.49s | 124,234.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.45s | 141,062.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,118.6 444.9,84.7 700.0,63.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="118.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="63.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.1 444.9,164.9 700.0,299.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#198754"/><circle cx="444.9" cy="164.9" r="4" fill="#198754"/><circle cx="700.0" cy="299.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.4 444.9,229.0 700.0,206.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,129.3 444.9,102.8 700.0,87.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="129.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.5 444.9,221.9 700.0,176.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="176.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.0 444.9,100.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#20c997"/><circle cx="444.9" cy="100.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.94s | 111,906.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.25s | 129,441.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 356.02s | 140,440.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,629.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 113.65s | 87,986.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 2694.72s | 18,554.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.16s | 61,885.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.42s | 54,817.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 751.10s | 66,569.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.40s | 106,394.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.25s | 120,115.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.14s | 128,157.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.28s | 65,449.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.87s | 58,525.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 610.22s | 81,937.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.08s | 82,767.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.49s | 121,229.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 354.44s | 141,067.6 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T10:54:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">157k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.8 444.9,62.3 700.0,107.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.7 444.9,195.1 700.0,191.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.7" r="4" fill="#198754"/><circle cx="444.9" cy="195.1" r="4" fill="#198754"/><circle cx="700.0" cy="191.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.5 444.9,247.5 700.0,246.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,127.7 444.9,64.7 700.0,104.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="127.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="64.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.7 444.9,231.5 700.0,205.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="205.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.5 444.9,93.7 700.0,68.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#20c997"/><circle cx="444.9" cy="93.7" r="4" fill="#20c997"/><circle cx="700.0" cy="68.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.66s | 78,970.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.22s | 142,415.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.62s | 118,589.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.62s | 60,183.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.84s | 73,078.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 668.34s | 74,812.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.05s | 38,392.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.87s | 45,690.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1084.36s | 46,110.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.24s | 108,248.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.84s | 141,169.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.85s | 120,524.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.69s | 46,108.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.09s | 54,028.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 741.85s | 67,398.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.93s | 83,836.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.38s | 125,979.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.43s | 139,108.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.6 444.9,62.3 700.0,109.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.6 444.9,192.7 700.0,182.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.6" r="4" fill="#198754"/><circle cx="444.9" cy="192.7" r="4" fill="#198754"/><circle cx="700.0" cy="182.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,273.6 444.9,257.3 700.0,277.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="273.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,172.6 444.9,128.6 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="172.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.7 444.9,228.1 700.0,227.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.6 444.9,116.9 700.0,153.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#20c997"/><circle cx="444.9" cy="116.9" r="4" fill="#20c997"/><circle cx="700.0" cy="153.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.78s | 92,755.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.99s | 153,862.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.28s | 127,135.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.82s | 59,467.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.60s | 80,259.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 582.38s | 85,854.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.85s | 34,662.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 228.18s | 43,824.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1549.44s | 32,269.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.91s | 91,625.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.87s | 116,451.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 393.69s | 127,004.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.63s | 50,934.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.76s | 60,327.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 824.34s | 60,654.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,634.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.27s | 123,049.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 487.36s | 102,593.6 | PASS |

:::

:::

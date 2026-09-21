## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-21T23:12:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.1 444.9,85.4 700.0,102.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,162.5 444.9,175.0 700.0,96.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="162.5" r="4" fill="#198754"/><circle cx="444.9" cy="175.0" r="4" fill="#198754"/><circle cx="700.0" cy="96.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.3 444.9,217.7 700.0,190.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="190.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.8 444.9,91.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,212.3 444.9,202.3 700.0,204.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="212.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.1 444.9,102.4 700.0,80.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.1" r="4" fill="#20c997"/><circle cx="444.9" cy="102.4" r="4" fill="#20c997"/><circle cx="700.0" cy="80.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.93s | 111,982.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.45s | 124,297.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 432.61s | 115,576.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.64s | 85,903.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.53s | 79,659.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 420.55s | 118,891.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.37s | 51,634.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.21s | 58,407.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 694.90s | 71,953.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.16s | 109,146.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.53s | 121,162.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 368.15s | 135,813.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.36s | 61,106.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.32s | 66,086.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 767.38s | 65,157.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.11s | 82,603.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.34s | 115,821.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 394.98s | 126,587.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,155.5 444.9,97.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,142.7 444.9,194.3 700.0,174.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="142.7" r="4" fill="#198754"/><circle cx="444.9" cy="194.3" r="4" fill="#198754"/><circle cx="700.0" cy="174.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.2 444.9,231.0 700.0,232.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.3 444.9,131.2 700.0,145.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.6 444.9,226.6 700.0,233.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.1 444.9,205.7 700.0,95.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#20c997"/><circle cx="444.9" cy="205.7" r="4" fill="#20c997"/><circle cx="700.0" cy="95.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.76s | 102,448.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.84s | 135,428.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 321.16s | 155,683.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,745.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.50s | 80,319.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 547.15s | 91,382.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.88s | 52,966.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.37s | 59,391.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 857.24s | 58,326.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.75s | 102,585.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.95s | 116,348.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 462.67s | 108,069.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.27s | 49,346.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.66s | 61,856.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 862.46s | 57,973.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.17s | 82,169.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 135.52s | 73,789.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.30s | 136,873.4 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-21T23:05:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,179.9 444.9,73.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="179.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.3 444.9,154.4 700.0,187.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.3" r="4" fill="#198754"/><circle cx="444.9" cy="154.4" r="4" fill="#198754"/><circle cx="700.0" cy="187.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.5 444.9,234.0 700.0,237.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.7 444.9,118.4 700.0,118.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="118.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.7 444.9,247.9 700.0,236.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.3 444.9,131.1 700.0,119.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.3" r="4" fill="#20c997"/><circle cx="444.9" cy="131.1" r="4" fill="#20c997"/><circle cx="700.0" cy="119.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,535.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.63s | 159,662.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 300.70s | 166,277.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.37s | 65,053.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 90.80s | 110,132.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 556.59s | 89,833.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.75s | 53,344.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 162.41s | 61,572.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 840.52s | 59,487.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.90s | 112,346.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.72s | 132,056.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.23s | 131,845.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.47s | 51,366.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 188.21s | 53,132.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 828.52s | 60,348.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,057.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.43s | 124,325.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.98s | 131,240.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,162.9 444.9,124.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.6 444.9,209.7 700.0,190.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#198754"/><circle cx="444.9" cy="209.7" r="4" fill="#198754"/><circle cx="700.0" cy="190.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.8 444.9,239.5 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.7 444.9,143.7 700.0,124.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.6 444.9,263.7 700.0,241.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="263.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.8 444.9,118.3 700.0,106.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#20c997"/><circle cx="444.9" cy="118.3" r="4" fill="#20c997"/><circle cx="700.0" cy="106.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.45s | 105,797.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.45s | 129,120.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 298.29s | 167,622.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.29s | 65,423.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.82s | 77,028.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 562.81s | 88,840.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.03s | 49,932.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.46s | 58,666.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1052.77s | 47,493.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.66s | 103,466.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.07s | 117,546.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.44s | 129,385.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,022.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 228.34s | 43,793.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 873.91s | 57,214.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.89s | 77,579.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 75.07s | 133,210.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 355.87s | 140,500.3 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-20T22:24:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">126k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,90.5 444.9,214.2 700.0,99.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="90.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="214.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.8 444.9,170.5 700.0,162.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.8" r="4" fill="#198754"/><circle cx="444.9" cy="170.5" r="4" fill="#198754"/><circle cx="700.0" cy="162.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.9 444.9,211.0 700.0,203.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="211.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="203.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.9 444.9,228.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="228.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,196.4 444.9,244.6 700.0,193.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.8 444.9,78.5 700.0,90.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.8" r="4" fill="#20c997"/><circle cx="444.9" cy="78.5" r="4" fill="#20c997"/><circle cx="700.0" cy="90.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.72s | 102,901.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 196.75s | 50,825.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 504.62s | 99,085.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.61s | 64,049.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.44s | 69,233.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 687.26s | 72,752.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.61s | 50,984.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 191.68s | 52,170.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 901.08s | 55,489.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,644.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 222.93s | 44,857.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 435.60s | 114,784.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.14s | 58,326.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 262.95s | 38,029.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 836.98s | 59,738.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,576.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 92.63s | 107,952.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 486.15s | 102,848.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">64k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">128k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,115.7 444.9,94.1 700.0,93.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.6 444.9,174.7 700.0,179.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.6" r="4" fill="#198754"/><circle cx="444.9" cy="174.7" r="4" fill="#198754"/><circle cx="700.0" cy="179.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,221.5 444.9,232.7 700.0,210.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="221.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,210.2 444.9,62.3 700.0,78.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="210.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="78.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.9 444.9,209.0 700.0,216.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="209.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.5 444.9,110.3 700.0,90.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.5" r="4" fill="#20c997"/><circle cx="444.9" cy="110.3" r="4" fill="#20c997"/><circle cx="700.0" cy="90.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.67s | 93,711.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 97.15s | 102,933.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 485.22s | 103,046.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,544.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 145.97s | 68,508.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 751.54s | 66,529.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,515.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 228.64s | 43,736.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.98s | 53,136.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 18.75s | 53,347.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.80s | 116,550.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 456.73s | 109,474.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.26s | 47,043.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.70s | 53,850.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 990.36s | 50,486.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.73s | 72,854.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 104.14s | 96,028.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 477.92s | 104,619.8 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-20T22:07:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,147.4 444.9,101.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="147.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.1 444.9,186.2 700.0,175.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#198754"/><circle cx="444.9" cy="186.2" r="4" fill="#198754"/><circle cx="700.0" cy="175.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.4 444.9,204.6 700.0,220.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.5 444.9,69.9 700.0,97.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="69.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.3 444.9,229.0 700.0,191.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.1 444.9,109.3 700.0,80.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.1" r="4" fill="#20c997"/><circle cx="444.9" cy="109.3" r="4" fill="#20c997"/><circle cx="700.0" cy="80.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.03s | 99,730.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.46s | 124,291.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 344.87s | 144,984.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.15s | 70,661.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.38s | 79,128.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 588.17s | 85,008.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,227.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 144.27s | 69,315.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 817.53s | 61,159.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 106,055.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.96s | 140,922.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.73s | 126,347.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.28s | 49,304.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.53s | 56,328.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.60s | 76,499.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.14s | 82,365.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.33s | 120,007.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.05s | 135,484.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,90.3 444.9,121.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="90.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.5 444.9,206.1 700.0,161.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#198754"/><circle cx="444.9" cy="206.1" r="4" fill="#198754"/><circle cx="700.0" cy="161.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.4 444.9,237.8 700.0,240.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.1 444.9,134.7 700.0,155.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="155.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,271.6 444.9,243.1 700.0,239.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="271.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.6 444.9,135.8 700.0,89.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.6" r="4" fill="#20c997"/><circle cx="444.9" cy="135.8" r="4" fill="#20c997"/><circle cx="700.0" cy="89.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.76s | 148,016.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.28s | 129,399.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 303.03s | 164,999.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.38s | 65,040.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.19s | 78,011.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 476.59s | 104,912.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,957.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.97s | 58,832.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 877.12s | 57,004.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.94s | 111,856.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.53s | 121,166.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 459.79s | 108,745.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 26.09s | 38,327.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.89s | 55,590.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 867.99s | 57,604.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.94s | 83,738.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.96s | 120,537.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 336.60s | 148,544.7 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-20T22:01:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,179.6 444.9,127.8 700.0,143.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="179.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.6 444.9,206.8 700.0,194.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="194.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.4 444.9,239.6 700.0,233.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,164.4 444.9,146.4 700.0,117.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="164.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.7 444.9,240.1 700.0,239.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.4 444.9,123.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.4" r="4" fill="#20c997"/><circle cx="444.9" cy="123.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,491.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.40s | 125,939.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 428.67s | 116,640.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.32s | 65,282.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.28s | 77,956.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 583.31s | 85,718.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.69s | 50,797.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.47s | 57,982.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 812.36s | 61,549.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.64s | 103,723.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.24s | 114,628.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 378.33s | 132,159.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.49s | 48,809.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.35s | 57,688.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 856.85s | 58,353.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,477.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.61s | 128,844.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 301.59s | 165,786.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.4 444.9,62.3 700.0,81.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="81.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.0 444.9,187.8 700.0,183.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#198754"/><circle cx="444.9" cy="187.8" r="4" fill="#198754"/><circle cx="700.0" cy="183.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.3 444.9,229.4 700.0,288.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="288.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.6 444.9,102.5 700.0,111.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,178.8 444.9,225.0 700.0,176.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="178.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="176.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.1 444.9,111.8 700.0,71.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.1" r="4" fill="#20c997"/><circle cx="444.9" cy="111.8" r="4" fill="#20c997"/><circle cx="700.0" cy="71.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,145.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.24s | 146,535.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.57s | 136,398.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.49s | 80,057.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.44s | 79,089.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 612.15s | 81,679.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.23s | 47,100.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.19s | 56,758.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1998.61s | 25,017.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,840.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.06s | 124,907.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.25s | 120,120.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.92s | 83,899.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.14s | 59,122.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 587.63s | 85,087.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.76s | 78,376.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.38s | 119,931.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 352.59s | 141,807.4 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-20T22:08:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,187.1 444.9,62.3 700.0,124.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.4 444.9,177.5 700.0,201.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.4" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="201.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.7 444.9,253.6 700.0,254.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.0 444.9,125.4 700.0,122.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.1 444.9,239.2 700.0,175.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.0 444.9,115.2 700.0,89.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#20c997"/><circle cx="444.9" cy="115.2" r="4" fill="#20c997"/><circle cx="700.0" cy="89.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.64s | 85,910.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.13s | 158,410.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.37s | 122,139.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.81s | 72,390.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 109.29s | 91,496.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 644.16s | 77,620.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.45s | 46,613.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 211.41s | 47,302.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1074.25s | 46,544.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.37s | 96,394.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.16s | 121,716.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.54s | 123,596.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.53s | 48,704.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.80s | 55,618.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 538.05s | 92,928.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,723.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.33s | 127,656.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 350.55s | 142,632.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,164.0 444.9,81.4 700.0,77.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="81.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="77.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.4 444.9,193.5 700.0,161.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.4" r="4" fill="#198754"/><circle cx="444.9" cy="193.5" r="4" fill="#198754"/><circle cx="700.0" cy="161.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.7 444.9,228.8 700.0,242.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,222.0 444.9,62.3 700.0,101.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.0 444.9,227.9 700.0,197.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="197.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.3 444.9,86.0 700.0,65.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.3" r="4" fill="#20c997"/><circle cx="444.9" cy="86.0" r="4" fill="#20c997"/><circle cx="700.0" cy="65.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.24s | 88,975.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.77s | 131,974.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 372.82s | 134,113.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.91s | 59,119.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.85s | 73,610.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 554.97s | 90,095.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.53s | 40,764.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.97s | 55,256.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1032.68s | 48,417.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 17.00s | 58,823.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 70.46s | 141,920.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.82s | 121,412.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.09s | 45,265.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.50s | 55,710.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 697.59s | 71,675.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,601.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.17s | 129,592.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 356.40s | 140,292.2 | PASS |

:::

:::

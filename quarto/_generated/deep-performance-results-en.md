## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-12T01:52:04Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,157.7 444.9,163.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.5 444.9,217.8 700.0,200.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.5" r="4" fill="#198754"/><circle cx="444.9" cy="217.8" r="4" fill="#198754"/><circle cx="700.0" cy="200.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.8 444.9,240.0 700.0,242.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.4 444.9,150.2 700.0,84.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.0 444.9,243.7 700.0,224.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.1 444.9,158.8 700.0,131.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.1" r="4" fill="#20c997"/><circle cx="444.9" cy="158.8" r="4" fill="#20c997"/><circle cx="700.0" cy="131.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.59s | 116,441.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.82s | 112,584.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 279.12s | 179,134.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.00s | 66,684.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.93s | 76,966.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 563.93s | 88,664.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.48s | 51,345.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 160.31s | 62,378.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 823.53s | 60,714.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,627.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.38s | 121,391.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 303.61s | 164,686.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.28s | 51,856.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 166.68s | 59,994.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 689.40s | 72,526.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.61s | 73,491.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.41s | 115,724.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.12s | 133,648.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,105.1 444.9,65.1 700.0,86.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.9 444.9,168.4 700.0,62.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#198754"/><circle cx="444.9" cy="168.4" r="4" fill="#198754"/><circle cx="700.0" cy="62.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.2 444.9,221.0 700.0,205.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.5 444.9,105.6 700.0,104.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="105.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,186.5 444.9,154.1 700.0,209.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="186.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="154.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.7 444.9,106.4 700.0,72.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#20c997"/><circle cx="444.9" cy="106.4" r="4" fill="#20c997"/><circle cx="700.0" cy="72.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.62s | 115,968.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.45s | 136,141.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 399.18s | 125,256.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,595.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.03s | 84,013.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 363.48s | 137,560.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.55s | 60,437.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.84s | 57,524.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 764.06s | 65,439.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.16s | 109,218.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.41s | 115,730.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 430.58s | 116,123.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.35s | 74,895.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 109.58s | 91,259.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 792.40s | 63,099.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.44s | 80,366.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.71s | 115,325.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.68s | 132,389.0 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-12T01:49:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,172.2 444.9,66.6 700.0,115.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="66.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.5 444.9,216.3 700.0,218.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.5" r="4" fill="#198754"/><circle cx="444.9" cy="216.3" r="4" fill="#198754"/><circle cx="700.0" cy="218.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.2 444.9,186.7 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="186.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.4 444.9,148.8 700.0,135.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.6 444.9,234.0 700.0,247.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,235.1 444.9,62.3 700.0,135.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="135.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.12s | 109,625.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.31s | 180,805.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 337.72s | 148,052.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.25s | 108,119.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.03s | 79,982.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 635.50s | 78,678.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.96s | 47,714.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 100.13s | 99,872.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 863.31s | 57,916.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,112.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.74s | 125,413.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 372.09s | 134,375.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.61s | 60,204.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 147.00s | 68,024.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.52s | 59,205.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.86s | 67,317.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 54.44s | 183,698.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.69s | 134,159.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,197.0 444.9,152.3 700.0,114.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.3 444.9,224.1 700.0,137.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.3" r="4" fill="#198754"/><circle cx="444.9" cy="224.1" r="4" fill="#198754"/><circle cx="700.0" cy="137.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,274.3 444.9,237.5 700.0,250.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="274.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,99.2 444.9,160.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.8 444.9,249.5 700.0,226.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.1 444.9,111.1 700.0,138.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#20c997"/><circle cx="444.9" cy="111.1" r="4" fill="#20c997"/><circle cx="700.0" cy="138.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.58s | 94,482.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.92s | 125,128.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 330.52s | 151,278.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.59s | 64,151.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.73s | 75,915.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 370.15s | 135,081.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.06s | 41,567.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 149.79s | 66,760.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 858.96s | 58,210.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.19s | 161,446.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.51s | 119,747.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 267.75s | 186,739.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,906.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.81s | 58,542.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 672.64s | 74,334.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.59s | 94,393.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.22s | 153,334.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 371.69s | 134,520.0 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-12T02:17:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,175.7 444.9,145.8 700.0,156.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,162.4 444.9,201.9 700.0,191.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="162.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.9" r="4" fill="#198754"/><circle cx="700.0" cy="191.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,224.6 444.9,243.0 700.0,234.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="224.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,89.2 700.0,182.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="182.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.8 444.9,188.3 700.0,237.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.4 444.9,152.1 700.0,151.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.4" r="4" fill="#20c997"/><circle cx="444.9" cy="152.1" r="4" fill="#20c997"/><circle cx="700.0" cy="151.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.59s | 86,288.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 97.58s | 102,479.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 517.03s | 96,706.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,466.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 138.70s | 72,098.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 642.93s | 77,769.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.73s | 59,780.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.71s | 49,823.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 915.07s | 54,640.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.77s | 147,710.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.10s | 133,148.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 605.52s | 82,573.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.22s | 58,065.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 125.84s | 79,462.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 950.89s | 52,582.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.11s | 62,065.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.97s | 99,038.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 503.47s | 99,311.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.4 444.9,73.2 700.0,142.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,187.5 444.9,184.3 700.0,207.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="187.5" r="4" fill="#198754"/><circle cx="444.9" cy="184.3" r="4" fill="#198754"/><circle cx="700.0" cy="207.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.3 444.9,236.0 700.0,189.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,167.2 700.0,140.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.7 444.9,230.7 700.0,217.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.1 444.9,203.1 700.0,153.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.1" r="4" fill="#20c997"/><circle cx="444.9" cy="203.1" r="4" fill="#20c997"/><circle cx="700.0" cy="153.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.42s | 87,535.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.81s | 139,246.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 489.18s | 102,211.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.74s | 78,468.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.78s | 80,144.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 736.16s | 67,920.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.29s | 57,843.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.98s | 52,638.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 646.73s | 77,311.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.89s | 145,074.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 112.04s | 89,257.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 482.59s | 103,606.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.79s | 45,901.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.26s | 55,473.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 799.39s | 62,547.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.36s | 69,633.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 142.52s | 70,164.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 518.10s | 96,506.3 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-12T01:58:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,85.4 444.9,62.3 700.0,119.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="85.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.3 444.9,106.1 700.0,144.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#198754"/><circle cx="444.9" cy="106.1" r="4" fill="#198754"/><circle cx="700.0" cy="144.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,200.8 444.9,225.8 700.0,228.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="200.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.8 444.9,100.7 700.0,104.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,197.4 444.9,207.2 700.0,226.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="197.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,128.3 444.9,113.8 700.0,87.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#20c997"/><circle cx="444.9" cy="113.8" r="4" fill="#20c997"/><circle cx="700.0" cy="87.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.50s | 133,368.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.61s | 145,740.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 433.69s | 115,288.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.65s | 68,264.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.75s | 122,327.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 490.25s | 101,987.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.95s | 71,705.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.39s | 58,345.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 879.09s | 56,877.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.07s | 110,205.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.88s | 125,189.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 406.70s | 122,941.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.60s | 73,513.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 146.39s | 68,310.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 862.41s | 57,976.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.05s | 110,472.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.59s | 118,210.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.70s | 132,380.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,186.2 444.9,121.4 700.0,137.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="186.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="121.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.0 444.9,215.2 700.0,212.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.0" r="4" fill="#198754"/><circle cx="444.9" cy="215.2" r="4" fill="#198754"/><circle cx="700.0" cy="212.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.9 444.9,242.7 700.0,205.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.3 444.9,62.3 700.0,160.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="160.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.9 444.9,241.1 700.0,249.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.0 444.9,152.8 700.0,142.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.0" r="4" fill="#20c997"/><circle cx="444.9" cy="152.8" r="4" fill="#20c997"/><circle cx="700.0" cy="142.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.73s | 102,764.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 67.78s | 147,544.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.73s | 136,339.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.41s | 74,582.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 120.86s | 82,738.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 588.67s | 84,937.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.31s | 54,620.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 156.78s | 63,785.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 560.66s | 89,180.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.51s | 133,138.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.08s | 188,402.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.59s | 120,602.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.96s | 47,700.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 154.16s | 64,868.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 848.24s | 58,945.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.77s | 114,012.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.45s | 125,857.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 376.29s | 132,875.5 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-13T00:40:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,185.1 444.9,139.0 700.0,104.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.1 444.9,181.0 700.0,136.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#198754"/><circle cx="444.9" cy="181.0" r="4" fill="#198754"/><circle cx="700.0" cy="136.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.1 444.9,245.9 700.0,187.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="187.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,85.5 444.9,62.3 700.0,138.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="85.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.3 444.9,222.1 700.0,178.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="178.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.9 444.9,149.0 700.0,126.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#20c997"/><circle cx="444.9" cy="149.0" r="4" fill="#20c997"/><circle cx="700.0" cy="126.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.84s | 92,225.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.90s | 120,631.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 352.82s | 141,713.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.65s | 68,254.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.48s | 94,801.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 409.01s | 122,245.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.67s | 73,174.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 182.31s | 54,850.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 550.32s | 90,855.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.51s | 153,562.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.58s | 167,838.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 412.50s | 121,211.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.67s | 63,824.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 143.97s | 69,458.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 518.43s | 96,445.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,270.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.37s | 114,453.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 389.96s | 128,217.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">215k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,188.1 444.9,146.3 700.0,125.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.8 444.9,225.3 700.0,199.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.8" r="4" fill="#198754"/><circle cx="444.9" cy="225.3" r="4" fill="#198754"/><circle cx="700.0" cy="199.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.6 444.9,242.8 700.0,247.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.0 444.9,166.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="166.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.3 444.9,222.2 700.0,211.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.5 444.9,153.3 700.0,77.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.5" r="4" fill="#20c997"/><circle cx="444.9" cy="153.3" r="4" fill="#20c997"/><circle cx="700.0" cy="77.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.50s | 105,263.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.96s | 135,215.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 333.56s | 149,895.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.52s | 68,889.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.20s | 78,614.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 516.10s | 96,879.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.11s | 49,714.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 151.39s | 66,055.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 801.58s | 62,376.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.97s | 100,280.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.84s | 120,708.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 255.89s | 195,396.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.51s | 57,116.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 123.78s | 80,789.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 565.73s | 88,381.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.46s | 95,629.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.82s | 130,174.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 271.09s | 184,440.6 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-12T01:58:28Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,164.7 444.9,62.3 700.0,114.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.2 444.9,225.3 700.0,218.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#198754"/><circle cx="444.9" cy="225.3" r="4" fill="#198754"/><circle cx="700.0" cy="218.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.8 444.9,274.0 700.0,264.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="274.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,157.8 444.9,159.0 700.0,153.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="157.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.5 444.9,251.9 700.0,250.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.9 444.9,100.1 700.0,149.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.9" r="4" fill="#20c997"/><circle cx="444.9" cy="100.1" r="4" fill="#20c997"/><circle cx="700.0" cy="149.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.61s | 116,130.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 53.78s | 185,946.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 332.07s | 150,568.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,024.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.70s | 74,796.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 631.34s | 79,197.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.86s | 43,752.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 240.51s | 41,578.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1041.58s | 48,004.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.28s | 120,845.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.35s | 119,971.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.30s | 123,670.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.40s | 74,649.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.41s | 56,685.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 869.76s | 57,487.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,865.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.44s | 160,156.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 396.15s | 126,215.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,132.3 444.9,159.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,251.4 444.9,227.9 700.0,157.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="251.4" r="4" fill="#198754"/><circle cx="444.9" cy="227.9" r="4" fill="#198754"/><circle cx="700.0" cy="157.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,282.5 444.9,235.3 700.0,263.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="282.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.9 444.9,142.8 700.0,147.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.6 444.9,257.2 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.2 444.9,156.3 700.0,110.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.2" r="4" fill="#20c997"/><circle cx="444.9" cy="156.3" r="4" fill="#20c997"/><circle cx="700.0" cy="110.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.08s | 141,262.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.68s | 122,430.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 263.06s | 190,072.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.16s | 58,264.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.02s | 74,616.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 403.03s | 124,060.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.30s | 36,623.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 143.88s | 69,502.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1006.41s | 49,681.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.77s | 147,797.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 74.66s | 133,945.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.57s | 130,694.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.28s | 46,996.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 184.32s | 54,252.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 775.78s | 64,451.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.28s | 81,433.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.30s | 124,536.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 320.06s | 156,222.7 | PASS |

:::

:::

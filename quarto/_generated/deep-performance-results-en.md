## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-14T23:01:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,99.2 444.9,86.6 700.0,95.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,176.1 444.9,166.1 700.0,171.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="176.1" r="4" fill="#198754"/><circle cx="444.9" cy="166.1" r="4" fill="#198754"/><circle cx="700.0" cy="171.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.9 444.9,219.5 700.0,182.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="182.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.8 444.9,93.1 700.0,84.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,212.7 444.9,163.3 700.0,213.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="163.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.9 444.9,94.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#20c997"/><circle cx="444.9" cy="94.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.81s | 113,468.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.64s | 119,555.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 433.95s | 115,221.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,452.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.01s | 81,291.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 635.55s | 78,672.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.40s | 51,554.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.83s | 55,608.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 681.66s | 73,349.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.75s | 102,595.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.90s | 116,415.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 415.20s | 120,423.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,875.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 121.01s | 82,638.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.42s | 58,314.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.66s | 78,976.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.35s | 115,813.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.92s | 131,260.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">172k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,132.4 444.9,90.1 700.0,102.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,154.2 700.0,198.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="154.2" r="4" fill="#198754"/><circle cx="700.0" cy="198.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.6 444.9,233.8 700.0,197.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="197.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,130.2 700.0,119.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.4 444.9,241.8 700.0,234.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.2 444.9,123.9 700.0,65.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.2" r="4" fill="#20c997"/><circle cx="444.9" cy="123.9" r="4" fill="#20c997"/><circle cx="700.0" cy="65.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.60s | 116,306.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.12s | 140,601.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.15s | 133,637.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.23s | 65,672.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.31s | 103,834.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.45s | 78,684.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.39s | 46,742.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 172.07s | 58,114.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 633.36s | 78,943.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.39s | 156,592.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.04s | 117,590.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.28s | 123,676.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.88s | 50,309.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 186.86s | 53,517.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 862.45s | 57,974.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.70s | 85,455.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.50s | 121,219.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 322.82s | 154,883.6 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-14T22:55:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,158.3 444.9,72.9 700.0,67.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="158.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="67.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.5 444.9,104.1 700.0,152.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.5" r="4" fill="#198754"/><circle cx="444.9" cy="104.1" r="4" fill="#198754"/><circle cx="700.0" cy="152.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.8 444.9,217.2 700.0,150.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="150.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.6 444.9,63.2 700.0,75.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="75.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.5 444.9,221.8 700.0,206.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.3 444.9,78.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#20c997"/><circle cx="444.9" cy="78.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.83s | 84,523.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.75s | 125,390.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.55s | 128,025.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.35s | 74,895.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 90.53s | 110,460.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 572.17s | 87,386.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.87s | 47,915.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.40s | 56,370.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 565.28s | 88,451.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.67s | 130,310.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.91s | 130,027.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.14s | 124,025.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.01s | 49,972.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 184.68s | 54,147.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 813.10s | 61,492.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,320.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.47s | 122,749.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.20s | 130,479.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,110.8 700.0,91.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.2 444.9,128.6 700.0,197.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#198754"/><circle cx="444.9" cy="128.6" r="4" fill="#198754"/><circle cx="700.0" cy="197.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.7 444.9,241.0 700.0,230.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.9 444.9,137.9 700.0,109.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.2 444.9,225.5 700.0,233.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.6 444.9,127.9 700.0,84.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.6" r="4" fill="#20c997"/><circle cx="444.9" cy="127.9" r="4" fill="#20c997"/><circle cx="700.0" cy="84.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.46s | 154,750.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.60s | 127,223.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 362.15s | 138,062.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.22s | 65,720.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.39s | 117,109.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 641.15s | 77,985.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.09s | 52,386.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.51s | 53,329.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 843.05s | 59,308.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,354.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.42s | 111,830.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.87s | 127,919.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.79s | 48,102.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.88s | 62,158.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 869.45s | 57,507.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.04s | 83,063.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.10s | 117,513.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 352.11s | 142,002.3 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-13T22:27:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">137k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.5 444.9,115.3 700.0,161.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="161.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.7 444.9,183.2 700.0,178.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#198754"/><circle cx="444.9" cy="183.2" r="4" fill="#198754"/><circle cx="700.0" cy="178.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.4 444.9,226.0 700.0,218.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.9 444.9,111.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.8 444.9,229.0 700.0,224.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,151.7 444.9,112.2 700.0,189.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="151.7" r="4" fill="#20c997"/><circle cx="444.9" cy="112.2" r="4" fill="#20c997"/><circle cx="700.0" cy="189.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
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

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">127k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,115.1 444.9,85.4 700.0,88.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,177.5 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.7 444.9,214.4 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,68.9 444.9,84.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="68.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.1 444.9,213.9 700.0,212.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.6 444.9,93.1 700.0,85.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#20c997"/><circle cx="444.9" cy="93.1" r="4" fill="#20c997"/><circle cx="700.0" cy="85.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
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

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-14T23:08:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,165.8 444.9,62.3 700.0,137.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="165.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.3 444.9,205.9 700.0,153.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#198754"/><circle cx="444.9" cy="205.9" r="4" fill="#198754"/><circle cx="700.0" cy="153.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.0 444.9,226.4 700.0,236.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.0 444.9,133.4 700.0,92.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="133.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,241.2 700.0,235.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.8 444.9,125.2 700.0,92.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#20c997"/><circle cx="444.9" cy="125.2" r="4" fill="#20c997"/><circle cx="700.0" cy="92.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.88s | 101,183.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.31s | 163,113.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 423.10s | 118,174.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,576.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.48s | 77,233.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 459.67s | 108,773.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.66s | 50,859.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 154.03s | 64,922.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 847.61s | 58,989.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.20s | 122,010.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.95s | 120,553.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 344.29s | 145,226.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.40s | 49,019.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 178.29s | 56,089.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 841.39s | 59,425.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,593.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.70s | 125,470.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 344.69s | 145,059.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.0 444.9,123.9 700.0,126.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.1 444.9,217.9 700.0,205.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.1" r="4" fill="#198754"/><circle cx="444.9" cy="217.9" r="4" fill="#198754"/><circle cx="700.0" cy="205.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.2 444.9,245.2 700.0,244.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.4 444.9,146.0 700.0,138.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.3 444.9,230.7 700.0,230.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.3 444.9,137.0 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.3" r="4" fill="#20c997"/><circle cx="444.9" cy="137.0" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.51s | 105,196.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.31s | 134,571.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.62s | 132,758.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,233.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.99s | 74,633.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 606.60s | 82,426.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.15s | 49,625.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.62s | 57,267.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 863.40s | 57,910.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.14s | 109,421.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.01s | 120,471.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 398.48s | 125,477.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.86s | 41,907.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 150.34s | 66,517.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 753.25s | 66,379.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,141.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.20s | 126,254.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 287.56s | 173,878.6 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-14T22:58:10Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,184.2 444.9,136.8 700.0,122.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.8 444.9,214.2 700.0,212.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.8" r="4" fill="#198754"/><circle cx="444.9" cy="214.2" r="4" fill="#198754"/><circle cx="700.0" cy="212.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.8 444.9,256.8 700.0,242.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,136.9 444.9,62.3 700.0,128.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="136.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.5 444.9,240.8 700.0,196.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.8 444.9,120.0 700.0,124.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.8" r="4" fill="#20c997"/><circle cx="444.9" cy="120.0" r="4" fill="#20c997"/><circle cx="700.0" cy="124.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.40s | 96,144.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.13s | 126,374.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 369.60s | 135,281.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,806.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.87s | 77,002.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.85s | 78,265.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.57s | 48,602.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 200.63s | 49,841.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.39s | 59,214.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.92s | 126,294.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.52s | 173,867.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.36s | 131,802.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,423.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 166.45s | 60,076.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 567.49s | 88,108.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.35s | 88,113.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.95s | 137,080.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.85s | 134,102.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,153.7 444.9,62.3 700.0,69.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="69.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.1 444.9,190.4 700.0,164.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#198754"/><circle cx="444.9" cy="190.4" r="4" fill="#198754"/><circle cx="700.0" cy="164.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,289.1 444.9,239.3 700.0,228.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="289.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.1 444.9,90.8 700.0,117.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.4 444.9,225.5 700.0,230.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,113.5 700.0,100.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.5" r="4" fill="#20c997"/><circle cx="700.0" cy="100.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.79s | 102,155.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 65.09s | 153,638.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 333.84s | 149,773.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.76s | 56,303.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 122.74s | 81,471.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 519.60s | 96,227.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 38.64s | 25,881.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.51s | 53,905.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 836.09s | 59,802.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.57s | 94,589.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 72.68s | 137,587.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.37s | 122,738.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.30s | 57,800.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.07s | 61,700.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.43s | 58,655.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.86s | 77,784.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.15s | 124,769.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.76s | 132,010.8 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-14T23:10:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,169.1 444.9,109.1 700.0,81.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="81.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.5 444.9,183.3 700.0,171.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.5" r="4" fill="#198754"/><circle cx="444.9" cy="183.3" r="4" fill="#198754"/><circle cx="700.0" cy="171.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.3 444.9,244.1 700.0,242.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.1 444.9,84.7 700.0,98.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.7 444.9,228.3 700.0,197.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="197.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.3 444.9,62.3 700.0,71.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="71.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.59s | 86,266.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.16s | 117,427.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 379.98s | 131,585.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.51s | 60,565.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.82s | 78,853.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 588.84s | 84,913.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.46s | 37,792.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 211.58s | 47,263.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1039.16s | 48,116.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,561.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.85s | 130,130.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 406.46s | 123,011.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.54s | 46,416.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.33s | 55,453.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 698.97s | 71,533.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.82s | 84,580.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.53s | 141,785.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.31s | 137,245.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">176k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,171.9 444.9,137.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.4 444.9,212.4 700.0,196.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#198754"/><circle cx="444.9" cy="212.4" r="4" fill="#198754"/><circle cx="700.0" cy="196.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.9 444.9,253.7 700.0,251.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.1 444.9,144.4 700.0,127.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.3 444.9,241.8 700.0,239.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.0 444.9,108.9 700.0,106.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.0" r="4" fill="#20c997"/><circle cx="444.9" cy="108.9" r="4" fill="#20c997"/><circle cx="700.0" cy="106.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.44s | 95,813.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.17s | 116,055.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 312.17s | 160,171.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.82s | 56,129.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.89s | 71,998.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 614.64s | 81,348.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.00s | 40,006.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 209.32s | 47,774.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1014.31s | 49,294.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.67s | 85,689.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.35s | 111,924.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.82s | 122,005.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.65s | 46,197.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 182.69s | 54,736.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 890.16s | 56,169.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,283.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 75.32s | 132,765.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 372.29s | 134,304.3 | PASS |

:::

:::

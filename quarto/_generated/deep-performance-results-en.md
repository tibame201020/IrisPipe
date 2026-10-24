## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-24T22:08:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,97.1 444.9,90.2 700.0,105.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="97.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.5 444.9,188.2 700.0,91.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.5" r="4" fill="#198754"/><circle cx="444.9" cy="188.2" r="4" fill="#198754"/><circle cx="700.0" cy="91.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.3 444.9,218.9 700.0,233.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,84.0 444.9,107.8 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="84.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.2 444.9,231.4 700.0,226.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.3 444.9,62.3 700.0,103.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="103.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.76s | 128,783.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 75.46s | 132,515.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 402.55s | 124,208.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.96s | 66,867.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.85s | 79,461.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 378.62s | 132,056.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.76s | 38,815.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 159.07s | 62,865.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 910.55s | 54,911.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.36s | 135,869.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.31s | 122,992.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.30s | 121,862.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.51s | 54,013.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 178.35s | 56,070.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 853.67s | 58,570.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.60s | 79,384.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.74s | 147,621.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 399.52s | 125,151.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,135.4 444.9,98.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="98.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,204.9 444.9,182.9 700.0,165.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="204.9" r="4" fill="#198754"/><circle cx="444.9" cy="182.9" r="4" fill="#198754"/><circle cx="700.0" cy="165.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.8 444.9,157.0 700.0,227.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="157.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.9 444.9,101.7 700.0,91.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.1 444.9,210.1 700.0,209.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,98.6 444.9,102.4 700.0,76.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="98.6" r="4" fill="#20c997"/><circle cx="444.9" cy="102.4" r="4" fill="#20c997"/><circle cx="700.0" cy="76.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.93s | 100,725.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.68s | 119,501.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.38s | 137,598.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,616.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.27s | 76,761.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 582.96s | 85,769.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.19s | 49,524.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 111.36s | 89,801.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 920.43s | 54,322.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.62s | 103,993.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.97s | 117,695.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.30s | 122,759.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.33s | 46,880.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.66s | 63,026.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 788.18s | 63,437.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.38s | 119,274.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.21s | 117,362.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.11s | 130,511.5 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-24T22:02:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,176.9 444.9,131.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,160.6 444.9,202.7 700.0,199.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="160.6" r="4" fill="#198754"/><circle cx="444.9" cy="202.7" r="4" fill="#198754"/><circle cx="700.0" cy="199.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.4 444.9,245.5 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.6 444.9,139.6 700.0,104.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,204.3 700.0,213.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="204.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.5 444.9,120.8 700.0,116.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.5" r="4" fill="#20c997"/><circle cx="444.9" cy="120.8" r="4" fill="#20c997"/><circle cx="700.0" cy="116.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.67s | 93,711.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.94s | 120,576.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 309.28s | 161,664.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.68s | 103,359.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.53s | 78,414.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 623.92s | 80,138.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.12s | 58,424.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 188.57s | 53,030.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 866.05s | 57,733.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.34s | 119,961.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.35s | 115,802.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 365.81s | 136,682.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.50s | 48,780.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 129.09s | 77,468.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 694.40s | 72,004.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.00s | 71,413.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.77s | 126,959.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 385.24s | 129,788.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,67.7 700.0,113.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,177.9 444.9,193.1 700.0,208.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="177.9" r="4" fill="#198754"/><circle cx="444.9" cy="193.1" r="4" fill="#198754"/><circle cx="700.0" cy="208.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.6 444.9,246.7 700.0,237.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,67.9 444.9,236.3 700.0,139.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="67.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="236.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.9 444.9,239.4 700.0,246.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.0 444.9,83.2 700.0,122.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.0" r="4" fill="#20c997"/><circle cx="444.9" cy="83.2" r="4" fill="#20c997"/><circle cx="700.0" cy="122.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.01s | 166,500.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.28s | 163,174.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 370.32s | 135,018.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,904.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.44s | 86,622.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 648.49s | 77,102.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.45s | 46,622.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.59s | 53,882.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 843.60s | 59,269.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.13s | 163,078.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 165.93s | 60,266.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.13s | 119,295.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.71s | 50,722.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.36s | 58,355.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 924.50s | 54,083.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.60s | 79,365.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 65.06s | 153,697.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.78s | 129,606.2 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-23T22:59:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.0 444.9,138.9 700.0,67.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="67.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,154.1 444.9,146.4 700.0,194.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="154.1" r="4" fill="#198754"/><circle cx="444.9" cy="146.4" r="4" fill="#198754"/><circle cx="700.0" cy="194.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.5 444.9,236.8 700.0,231.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,153.7 444.9,115.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.2 444.9,173.9 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="173.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.9 444.9,113.8 700.0,116.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#20c997"/><circle cx="444.9" cy="113.8" r="4" fill="#20c997"/><circle cx="700.0" cy="116.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.44s | 87,427.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 102.09s | 97,954.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 374.68s | 133,446.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.07s | 90,342.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 106.15s | 94,207.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 710.23s | 70,400.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 28.01s | 35,705.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.88s | 49,049.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 963.80s | 51,878.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.04s | 90,538.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 91.25s | 109,591.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 367.04s | 136,226.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.11s | 52,342.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 124.25s | 80,479.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1021.99s | 48,924.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.81s | 59,477.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 90.51s | 110,486.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 457.53s | 109,282.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">119k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.2 444.9,99.1 700.0,104.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="99.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,85.8 444.9,95.5 700.0,135.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="85.8" r="4" fill="#198754"/><circle cx="444.9" cy="95.5" r="4" fill="#198754"/><circle cx="700.0" cy="135.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,169.6 444.9,213.1 700.0,196.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="169.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.0 444.9,114.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.8 444.9,179.5 700.0,207.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="179.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.7 444.9,85.9 700.0,79.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.7" r="4" fill="#20c997"/><circle cx="444.9" cy="85.9" r="4" fill="#20c997"/><circle cx="700.0" cy="79.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.18s | 89,429.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 106.58s | 93,828.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 544.37s | 91,849.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.09s | 99,098.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.96s | 95,273.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 630.77s | 79,267.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.20s | 65,793.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.20s | 48,496.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 904.94s | 55,252.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.56s | 94,670.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 114.07s | 87,668.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 460.94s | 108,474.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.73s | 53,396.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 161.66s | 61,857.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 987.83s | 50,615.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.78s | 63,367.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.92s | 99,086.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 492.51s | 101,520.6 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-23T22:40:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.8 444.9,93.8 700.0,69.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="69.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.4 444.9,169.2 700.0,168.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.4" r="4" fill="#198754"/><circle cx="444.9" cy="169.2" r="4" fill="#198754"/><circle cx="700.0" cy="168.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.8 444.9,194.6 700.0,169.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="194.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="169.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.6 444.9,72.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="72.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,209.7 444.9,199.8 700.0,145.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="209.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="199.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="145.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.4 444.9,83.9 700.0,62.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.4" r="4" fill="#20c997"/><circle cx="444.9" cy="83.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.26s | 108,038.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.04s | 116,223.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.51s | 128,037.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.77s | 67,723.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.15s | 79,902.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.22s | 80,099.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,161.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 147.80s | 67,657.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 627.89s | 79,632.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.74s | 114,403.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.11s | 126,399.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 380.51s | 131,402.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.56s | 60,375.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.57s | 65,118.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 547.82s | 91,270.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.78s | 72,568.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.66s | 120,979.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.76s | 131,315.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">171k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">227k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,195.6 444.9,153.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="153.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,249.7 444.9,179.9 700.0,159.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="249.7" r="4" fill="#198754"/><circle cx="444.9" cy="179.9" r="4" fill="#198754"/><circle cx="700.0" cy="159.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.9 444.9,260.8 700.0,257.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.0 444.9,180.7 700.0,169.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="180.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.6 444.9,256.9 700.0,202.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="202.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.5 444.9,167.0 700.0,160.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.5" r="4" fill="#20c997"/><circle cx="444.9" cy="167.0" r="4" fill="#20c997"/><circle cx="700.0" cy="160.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,630.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.72s | 137,517.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 241.91s | 206,690.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,616.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 85.05s | 117,582.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 376.44s | 132,822.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.90s | 47,849.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.75s | 56,258.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 855.33s | 58,456.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.37s | 135,685.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.50s | 116,964.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.84s | 125,678.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,355.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.88s | 59,214.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 498.10s | 100,380.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.12s | 76,190.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.53s | 127,338.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.88s | 132,317.5 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-24T22:03:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">159k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">212k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,206.6 444.9,127.1 700.0,156.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.2 444.9,201.1 700.0,218.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#198754"/><circle cx="444.9" cy="201.1" r="4" fill="#198754"/><circle cx="700.0" cy="218.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.1 444.9,250.5 700.0,236.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.0 444.9,98.5 700.0,134.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="98.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.0 444.9,233.3 700.0,250.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.7 444.9,109.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#20c997"/><circle cx="444.9" cy="109.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.03s | 90,694.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.09s | 146,864.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 395.77s | 126,335.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.09s | 66,277.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.73s | 94,580.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 608.78s | 82,130.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.49s | 44,456.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.50s | 59,702.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 717.04s | 69,731.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.44s | 105,954.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.85s | 167,087.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 352.84s | 141,707.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.45s | 60,779.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 139.15s | 71,865.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 832.49s | 60,060.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.61s | 79,333.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.69s | 159,507.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 259.48s | 192,695.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,122.9 444.9,141.4 700.0,123.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.5 444.9,134.5 700.0,220.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#198754"/><circle cx="444.9" cy="134.5" r="4" fill="#198754"/><circle cx="700.0" cy="220.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.2 444.9,248.3 700.0,245.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.6 444.9,62.3 700.0,146.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.6 444.9,246.8 700.0,246.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.5 444.9,115.8 700.0,76.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.5" r="4" fill="#20c997"/><circle cx="444.9" cy="115.8" r="4" fill="#20c997"/><circle cx="700.0" cy="76.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.88s | 145,370.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.38s | 132,662.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 344.44s | 145,163.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.78s | 63,387.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 72.79s | 137,383.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.07s | 78,484.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.53s | 46,446.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.31s | 59,413.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 812.96s | 61,503.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.07s | 141,422.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.51s | 186,898.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.71s | 129,296.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.96s | 45,529.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.38s | 60,467.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 821.47s | 60,866.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,865.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 66.57s | 150,215.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 282.65s | 176,897.8 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-24T22:11:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.9 444.9,98.2 700.0,141.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="98.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.0 444.9,192.4 700.0,196.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.0" r="4" fill="#198754"/><circle cx="444.9" cy="192.4" r="4" fill="#198754"/><circle cx="700.0" cy="196.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.9 444.9,263.6 700.0,255.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.9 444.9,144.2 700.0,139.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.0 444.9,249.9 700.0,176.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="176.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.5 444.9,62.3 700.0,129.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="129.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.28s | 81,426.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.40s | 152,909.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.85s | 124,735.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.44s | 105,898.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.60s | 92,080.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 558.68s | 89,495.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.07s | 43,352.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 216.83s | 46,119.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 974.85s | 51,289.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.60s | 116,279.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.19s | 123,175.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.55s | 126,405.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.92s | 47,796.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.04s | 54,933.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 489.75s | 102,092.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.75s | 78,425.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 56.79s | 176,093.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.92s | 133,007.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.1 444.9,122.3 700.0,79.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.6 444.9,217.3 700.0,208.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.6" r="4" fill="#198754"/><circle cx="444.9" cy="217.3" r="4" fill="#198754"/><circle cx="700.0" cy="208.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.1 444.9,259.8 700.0,255.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.1 444.9,186.9 700.0,127.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="186.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.2 444.9,238.6 700.0,235.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.1 444.9,62.3 700.0,120.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="120.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.26s | 137,817.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.71s | 130,362.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 318.88s | 156,801.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.09s | 62,154.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.66s | 72,120.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 646.58s | 77,330.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.53s | 39,172.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 217.08s | 46,065.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1024.30s | 48,813.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.96s | 91,224.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 110.18s | 90,761.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 392.57s | 127,365.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.80s | 45,871.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.30s | 59,067.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 818.85s | 61,061.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.38s | 74,710.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 59.83s | 167,143.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.80s | 131,302.9 | PASS |

:::

:::

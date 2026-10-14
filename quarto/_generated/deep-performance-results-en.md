## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T22:54:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.4 444.9,138.4 700.0,131.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.7 444.9,197.9 700.0,190.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.7" r="4" fill="#198754"/><circle cx="444.9" cy="197.9" r="4" fill="#198754"/><circle cx="700.0" cy="190.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.0 444.9,238.9 700.0,201.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.9 444.9,62.3 700.0,123.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.0 444.9,237.2 700.0,229.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,142.8 444.9,121.1 700.0,124.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="142.8" r="4" fill="#20c997"/><circle cx="444.9" cy="121.1" r="4" fill="#20c997"/><circle cx="700.0" cy="124.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.35s | 119,760.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.92s | 119,166.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.39s | 123,643.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.05s | 90,505.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.33s | 83,105.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 570.98s | 87,568.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.75s | 53,330.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.73s | 58,232.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 619.95s | 80,651.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.88s | 101,265.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.49s | 165,308.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.57s | 128,347.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.89s | 77,567.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 168.72s | 59,271.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 778.01s | 64,266.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.59s | 116,482.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.13s | 129,647.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 390.92s | 127,903.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.5 444.9,138.8 700.0,65.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.0 444.9,214.5 700.0,213.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#198754"/><circle cx="444.9" cy="214.5" r="4" fill="#198754"/><circle cx="700.0" cy="213.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.4 444.9,258.5 700.0,247.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,158.5 700.0,157.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.3 444.9,246.7 700.0,241.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.2 444.9,151.9 700.0,141.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#20c997"/><circle cx="444.9" cy="151.9" r="4" fill="#20c997"/><circle cx="700.0" cy="141.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.89s | 112,511.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.04s | 126,521.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 287.60s | 173,854.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.72s | 72,886.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.74s | 77,674.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.70s | 78,530.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.89s | 71,983.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 202.78s | 49,314.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 889.82s | 56,191.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.69s | 175,839.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.87s | 113,805.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 435.94s | 114,694.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,250.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.63s | 56,938.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 826.98s | 60,460.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.95s | 77,249.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.71s | 118,047.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.74s | 125,081.3 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T22:44:10Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,193.4 444.9,157.3 700.0,166.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="166.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.8 444.9,131.7 700.0,216.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#198754"/><circle cx="444.9" cy="131.7" r="4" fill="#198754"/><circle cx="700.0" cy="216.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.8 444.9,249.9 700.0,205.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.0 444.9,62.3 700.0,149.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.4 444.9,236.4 700.0,248.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.4 444.9,91.8 700.0,127.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.4" r="4" fill="#20c997"/><circle cx="444.9" cy="91.8" r="4" fill="#20c997"/><circle cx="700.0" cy="127.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.52s | 95,048.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.82s | 119,307.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 441.79s | 113,176.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.29s | 69,959.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 73.27s | 136,490.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 628.90s | 79,503.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.82s | 50,456.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.11s | 57,107.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 575.33s | 86,906.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,069.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.62s | 183,069.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.26s | 124,296.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.40s | 57,481.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 151.16s | 66,152.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 859.07s | 58,202.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.66s | 68,226.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 61.27s | 163,225.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.73s | 139,381.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">165k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">220k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.2 444.9,62.3 700.0,100.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="100.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.8 444.9,231.7 700.0,228.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.8" r="4" fill="#198754"/><circle cx="444.9" cy="231.7" r="4" fill="#198754"/><circle cx="700.0" cy="228.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.4 444.9,259.3 700.0,257.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.4 444.9,175.7 700.0,170.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="175.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="170.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.7 444.9,192.1 700.0,190.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,243.3 444.9,147.1 700.0,86.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#20c997"/><circle cx="444.9" cy="147.1" r="4" fill="#20c997"/><circle cx="700.0" cy="86.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,156.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 50.05s | 199,816.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 291.56s | 171,488.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.75s | 72,711.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.14s | 75,677.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 642.81s | 77,783.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.12s | 47,337.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.20s | 55,492.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.16s | 57,132.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.85s | 101,553.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.68s | 116,710.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.04s | 120,762.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.88s | 52,977.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 95.50s | 104,715.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 473.66s | 105,561.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.88s | 67,195.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 72.62s | 137,697.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 274.79s | 181,960.4 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T00:22:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,128.3 444.9,115.7 700.0,63.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="63.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,147.9 444.9,99.9 700.0,199.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="147.9" r="4" fill="#198754"/><circle cx="444.9" cy="99.9" r="4" fill="#198754"/><circle cx="700.0" cy="199.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,211.0 444.9,207.4 700.0,195.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,107.6 444.9,62.3 700.0,74.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="107.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="74.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.5 444.9,210.3 700.0,212.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,92.0 444.9,65.7 700.0,83.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="92.0" r="4" fill="#20c997"/><circle cx="444.9" cy="65.7" r="4" fill="#20c997"/><circle cx="700.0" cy="83.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.93s | 83,801.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 112.51s | 88,879.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 454.36s | 110,043.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.19s | 75,843.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 104.92s | 95,313.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 911.03s | 54,883.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.90s | 50,261.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.41s | 51,703.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 884.01s | 56,560.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.85s | 92,191.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.46s | 110,549.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 473.28s | 105,646.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.93s | 45,591.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 197.90s | 50,530.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1005.51s | 49,726.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.15s | 98,483.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 91.60s | 109,171.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 491.15s | 101,800.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,79.0 700.0,103.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.3 444.9,122.7 700.0,192.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#198754"/><circle cx="444.9" cy="122.7" r="4" fill="#198754"/><circle cx="700.0" cy="192.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.4 444.9,223.8 700.0,220.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.9 444.9,130.1 700.0,97.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="97.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,183.1 444.9,151.6 700.0,165.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="151.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="165.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.0 444.9,123.0 700.0,157.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#20c997"/><circle cx="444.9" cy="123.0" r="4" fill="#20c997"/><circle cx="700.0" cy="157.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.87s | 127,016.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.88s | 119,217.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 463.21s | 107,942.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.30s | 61,345.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 101.16s | 98,851.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 754.45s | 66,273.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.23s | 51,991.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.13s | 51,778.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 934.50s | 53,504.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.17s | 98,338.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 104.81s | 95,414.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 452.29s | 110,549.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.13s | 70,756.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 117.05s | 85,435.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 633.93s | 78,872.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.44s | 64,750.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 101.26s | 98,752.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 606.36s | 82,459.7 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T00:02:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,167.6 444.9,66.9 700.0,114.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="66.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.3 444.9,186.1 700.0,125.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#198754"/><circle cx="444.9" cy="186.1" r="4" fill="#198754"/><circle cx="700.0" cy="125.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.4 444.9,237.1 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,122.7 700.0,137.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="122.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,193.9 444.9,239.0 700.0,225.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.6 444.9,162.9 700.0,118.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#20c997"/><circle cx="444.9" cy="162.9" r="4" fill="#20c997"/><circle cx="700.0" cy="118.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,210.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.31s | 160,477.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 379.08s | 131,896.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.50s | 74,068.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.20s | 89,124.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 399.52s | 125,148.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,399.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.71s | 58,580.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 857.19s | 58,330.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.12s | 163,265.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.69s | 127,074.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 422.94s | 118,219.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.84s | 84,445.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.05s | 57,456.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 761.23s | 65,683.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.01s | 76,864.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 97.05s | 103,043.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 386.50s | 129,366.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,156.6 444.9,134.8 700.0,107.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.5 444.9,205.3 700.0,203.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.3" r="4" fill="#198754"/><circle cx="700.0" cy="203.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,249.8 444.9,239.8 700.0,241.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="249.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.8 444.9,138.7 700.0,183.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="183.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,239.6 700.0,148.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="148.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.1 444.9,195.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#20c997"/><circle cx="444.9" cy="195.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.36s | 106,883.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.37s | 119,941.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.86s | 136,292.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,216.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.73s | 77,684.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.55s | 79,045.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.59s | 51,043.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.30s | 57,045.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 896.26s | 55,787.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,167.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.05s | 117,572.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 551.61s | 90,644.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.28s | 49,312.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.06s | 57,121.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 447.24s | 111,797.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,631.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 119.32s | 83,807.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 306.06s | 163,366.1 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T22:46:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,140.6 444.9,71.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="140.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="71.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.1 444.9,154.6 700.0,141.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.1" r="4" fill="#198754"/><circle cx="444.9" cy="154.6" r="4" fill="#198754"/><circle cx="700.0" cy="141.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.8 444.9,142.3 700.0,210.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="142.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,104.7 444.9,83.4 700.0,62.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="104.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="83.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,221.4 444.9,225.7 700.0,109.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="221.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="109.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,127.7 444.9,67.3 700.0,105.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="127.7" r="4" fill="#20c997"/><circle cx="444.9" cy="67.3" r="4" fill="#20c997"/><circle cx="700.0" cy="105.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.79s | 92,704.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.44s | 125,885.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.48s | 130,045.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.47s | 69,113.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.25s | 86,020.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 542.87s | 92,103.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.75s | 50,638.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 108.85s | 91,871.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 838.82s | 59,607.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.11s | 109,829.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.37s | 119,951.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 384.66s | 129,983.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.46s | 54,162.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 191.87s | 52,119.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 464.04s | 107,748.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.12s | 98,833.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.35s | 127,627.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 457.75s | 109,230.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">211k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,203.2 444.9,125.7 700.0,136.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,204.4 444.9,153.4 700.0,164.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="204.4" r="4" fill="#198754"/><circle cx="444.9" cy="153.4" r="4" fill="#198754"/><circle cx="700.0" cy="164.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.6 444.9,252.2 700.0,252.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.6 444.9,148.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.7 444.9,253.3 700.0,251.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,224.1 444.9,156.4 700.0,136.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#20c997"/><circle cx="444.9" cy="156.4" r="4" fill="#20c997"/><circle cx="700.0" cy="136.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.80s | 92,609.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.01s | 147,037.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 359.26s | 139,173.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.90s | 91,701.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.39s | 127,568.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 416.33s | 120,097.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.46s | 44,515.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.94s | 58,159.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 858.45s | 58,244.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.21s | 97,914.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.18s | 131,264.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 261.01s | 191,564.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.72s | 56,423.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.29s | 57,376.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.50s | 58,582.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.84s | 77,893.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.72s | 125,445.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.64s | 139,416.0 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T23:00:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,178.1 444.9,174.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="174.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.0 444.9,231.3 700.0,226.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#198754"/><circle cx="444.9" cy="231.3" r="4" fill="#198754"/><circle cx="700.0" cy="226.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,286.1 444.9,261.7 700.0,268.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="286.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="268.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.4 444.9,154.0 700.0,140.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.8 444.9,254.1 700.0,233.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,153.4 700.0,143.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="153.4" r="4" fill="#20c997"/><circle cx="700.0" cy="143.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.29s | 107,677.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 90.61s | 110,369.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 267.21s | 187,120.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.57s | 60,357.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 140.56s | 71,146.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 673.36s | 74,254.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 29.83s | 33,523.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 198.91s | 50,273.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1087.20s | 45,989.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.49s | 105,363.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.53s | 124,185.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.45s | 133,174.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.68s | 46,129.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.10s | 55,525.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 715.74s | 69,858.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.39s | 87,773.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.24s | 124,619.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.98s | 131,585.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,202.4 444.9,146.8 700.0,127.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="202.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.0 444.9,208.7 700.0,217.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.7" r="4" fill="#198754"/><circle cx="700.0" cy="217.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.9 444.9,249.9 700.0,258.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,197.1 444.9,153.6 700.0,135.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="135.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.0 444.9,203.6 700.0,218.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.5 444.9,148.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.5" r="4" fill="#20c997"/><circle cx="444.9" cy="148.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.89s | 84,104.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.78s | 119,358.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 380.17s | 131,519.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.52s | 57,064.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.80s | 80,128.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 669.20s | 74,716.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.40s | 39,371.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 185.21s | 53,991.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1031.41s | 48,477.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.43s | 87,473.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.91s | 115,058.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 394.71s | 126,676.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.21s | 45,024.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 119.97s | 83,353.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 677.69s | 73,779.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,050.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.52s | 118,320.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 289.04s | 172,985.2 | PASS |

:::

:::

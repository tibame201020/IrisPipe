## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-25T22:49:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,122.2 444.9,133.9 700.0,144.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.9 444.9,209.4 700.0,117.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.9" r="4" fill="#198754"/><circle cx="444.9" cy="209.4" r="4" fill="#198754"/><circle cx="700.0" cy="117.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.5 444.9,241.6 700.0,246.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.1 444.9,147.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.6 444.9,234.8 700.0,244.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.2 444.9,139.7 700.0,128.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#20c997"/><circle cx="444.9" cy="139.7" r="4" fill="#20c997"/><circle cx="700.0" cy="128.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.35s | 136,072.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.74s | 128,627.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.44s | 122,118.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.70s | 72,976.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.53s | 80,300.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 358.79s | 139,358.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.09s | 76,417.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.43s | 59,728.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 880.71s | 56,772.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.78s | 102,239.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.55s | 119,693.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 286.70s | 174,400.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.98s | 66,764.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 156.02s | 64,093.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 859.68s | 58,161.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,274.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.05s | 124,917.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.23s | 132,195.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,144.0 444.9,62.3 700.0,127.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.9 444.9,203.7 700.0,214.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.9" r="4" fill="#198754"/><circle cx="444.9" cy="203.7" r="4" fill="#198754"/><circle cx="700.0" cy="214.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.3 444.9,252.8 700.0,240.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,171.4 444.9,136.6 700.0,139.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="171.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="136.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.9 444.9,245.4 700.0,244.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.1 444.9,163.3 700.0,130.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.1" r="4" fill="#20c997"/><circle cx="444.9" cy="163.3" r="4" fill="#20c997"/><circle cx="700.0" cy="130.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.34s | 119,889.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 58.43s | 171,150.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.44s | 130,058.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.46s | 64,704.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 121.34s | 82,410.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 658.77s | 75,899.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.55s | 42,471.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.79s | 51,602.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 845.99s | 59,102.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.74s | 102,637.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.31s | 124,525.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.80s | 122,608.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.08s | 55,306.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.76s | 56,255.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 882.78s | 56,638.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.27s | 81,493.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 92.81s | 107,751.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.31s | 128,102.6 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-25T22:39:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">211k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.3 444.9,155.2 700.0,154.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="155.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.8 444.9,224.6 700.0,210.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#198754"/><circle cx="444.9" cy="224.6" r="4" fill="#198754"/><circle cx="700.0" cy="210.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.0 444.9,253.8 700.0,246.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,157.7 444.9,156.4 700.0,145.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="157.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.6 444.9,256.8 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.4 444.9,163.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#20c997"/><circle cx="444.9" cy="163.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.20s | 138,850.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.20s | 126,265.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 395.12s | 126,542.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,549.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.00s | 77,520.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 573.45s | 87,191.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.05s | 49,862.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.28s | 57,050.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 802.56s | 62,300.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.03s | 124,517.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.72s | 125,435.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.29s | 133,231.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.94s | 50,155.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.03s | 54,935.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 787.32s | 63,506.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.75s | 72,716.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.89s | 120,649.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 261.07s | 191,518.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,129.4 444.9,65.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.3 444.9,182.1 700.0,129.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#198754"/><circle cx="444.9" cy="182.1" r="4" fill="#198754"/><circle cx="700.0" cy="129.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.2 444.9,230.4 700.0,215.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.9 444.9,94.8 700.0,66.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="66.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.2 444.9,219.0 700.0,219.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.4 444.9,87.2 700.0,82.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.4" r="4" fill="#20c997"/><circle cx="444.9" cy="87.2" r="4" fill="#20c997"/><circle cx="700.0" cy="82.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.72s | 102,901.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.08s | 134,989.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.23s | 136,525.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.81s | 72,421.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.61s | 76,564.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 485.50s | 102,985.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.75s | 45,979.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.00s | 52,354.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 838.01s | 59,665.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.60s | 104,155.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.15s | 120,264.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 372.11s | 134,367.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.21s | 49,473.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.25s | 58,054.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.66s | 57,893.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.01s | 76,893.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.61s | 124,061.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 395.04s | 126,569.5 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-25T23:14:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.3 444.9,76.5 700.0,164.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="164.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,160.3 444.9,107.0 700.0,158.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#198754"/><circle cx="444.9" cy="107.0" r="4" fill="#198754"/><circle cx="700.0" cy="158.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.8 444.9,204.4 700.0,201.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.9 444.9,68.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.0 444.9,198.7 700.0,191.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.9 444.9,85.6 700.0,140.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.9" r="4" fill="#20c997"/><circle cx="444.9" cy="85.6" r="4" fill="#20c997"/><circle cx="700.0" cy="140.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.97s | 91,124.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 95.38s | 104,848.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 721.77s | 69,274.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.11s | 70,876.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.16s | 92,459.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 697.17s | 71,718.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.22s | 47,116.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 188.79s | 52,968.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 926.06s | 53,992.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.63s | 103,874.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.59s | 108,004.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 452.01s | 110,617.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 34.25s | 29,198.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.86s | 55,291.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.25s | 58,325.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.93s | 71,813.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.84s | 101,171.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 635.25s | 78,709.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">129k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.9 444.9,62.3 700.0,91.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,191.8 444.9,210.1 700.0,177.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#198754"/><circle cx="444.9" cy="210.1" r="4" fill="#198754"/><circle cx="700.0" cy="177.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.1 444.9,207.6 700.0,208.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="208.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,88.5 444.9,73.6 700.0,89.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="88.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.4 444.9,188.5 700.0,216.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.7 444.9,126.6 700.0,163.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#20c997"/><circle cx="444.9" cy="126.6" r="4" fill="#20c997"/><circle cx="700.0" cy="163.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.35s | 96,627.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.02s | 117,616.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 476.99s | 104,824.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.19s | 61,774.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 185.69s | 53,852.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 733.89s | 68,130.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.73s | 48,246.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.03s | 54,935.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 918.74s | 54,422.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.40s | 106,326.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.72s | 112,711.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 472.21s | 105,884.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.16s | 45,130.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.26s | 63,186.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 981.88s | 50,922.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.96s | 52,753.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 111.25s | 89,883.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 675.53s | 74,016.0 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-25T22:53:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,145.8 444.9,93.1 700.0,80.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="80.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,186.5 444.9,168.3 700.0,112.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="186.5" r="4" fill="#198754"/><circle cx="444.9" cy="168.3" r="4" fill="#198754"/><circle cx="700.0" cy="112.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.3 444.9,234.1 700.0,207.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.2 444.9,71.4 700.0,99.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="71.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,217.6 444.9,225.0 700.0,223.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.8 444.9,80.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.8" r="4" fill="#20c997"/><circle cx="444.9" cy="80.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.32s | 96,908.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.73s | 123,871.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 382.99s | 130,552.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.15s | 76,068.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.14s | 85,366.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 439.24s | 113,832.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.66s | 63,873.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.56s | 51,662.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 762.60s | 65,565.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.44s | 105,887.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 74.07s | 135,003.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.04s | 120,761.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.63s | 60,139.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.57s | 56,315.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 879.10s | 56,876.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.27s | 75,375.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.78s | 130,247.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 357.99s | 139,667.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.7 444.9,148.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="148.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.9 444.9,219.7 700.0,219.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.9" r="4" fill="#198754"/><circle cx="444.9" cy="219.7" r="4" fill="#198754"/><circle cx="700.0" cy="219.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.0 444.9,254.7 700.0,206.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,208.7 444.9,154.3 700.0,151.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.3 444.9,253.3 700.0,248.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,219.8 444.9,171.9 700.0,141.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="219.8" r="4" fill="#20c997"/><circle cx="444.9" cy="171.9" r="4" fill="#20c997"/><circle cx="700.0" cy="141.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.92s | 126,278.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.38s | 129,237.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 264.59s | 188,968.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.85s | 63,099.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.13s | 79,914.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.14s | 79,981.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.76s | 50,597.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.83s | 55,607.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 563.39s | 88,748.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.43s | 87,519.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.86s | 125,217.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 393.10s | 127,195.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.10s | 62,119.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.67s | 56,601.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 832.23s | 60,079.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.53s | 79,802.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 88.48s | 113,023.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 372.88s | 134,091.4 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-25T22:42:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,195.1 444.9,127.1 700.0,159.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="159.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.2 444.9,212.2 700.0,208.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#198754"/><circle cx="444.9" cy="212.2" r="4" fill="#198754"/><circle cx="700.0" cy="208.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.8 444.9,243.2 700.0,242.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.2 444.9,103.2 700.0,139.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.4 444.9,218.8 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.5 444.9,121.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.5" r="4" fill="#20c997"/><circle cx="444.9" cy="121.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.97s | 91,174.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.77s | 135,554.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 436.73s | 114,486.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.02s | 76,781.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.90s | 80,066.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 605.67s | 82,553.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.36s | 51,652.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.08s | 59,850.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 831.90s | 60,103.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.97s | 91,132.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 66.17s | 151,116.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 392.20s | 127,486.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.26s | 70,126.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 132.02s | 75,745.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 828.85s | 60,324.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,891.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 71.85s | 139,173.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 281.22s | 177,799.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.6 444.9,112.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.7 444.9,210.0 700.0,202.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.7" r="4" fill="#198754"/><circle cx="444.9" cy="210.0" r="4" fill="#198754"/><circle cx="700.0" cy="202.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.2 444.9,245.9 700.0,238.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,174.1 444.9,145.2 700.0,131.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="174.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="145.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.7 444.9,238.9 700.0,175.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.8 444.9,143.4 700.0,124.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.8" r="4" fill="#20c997"/><circle cx="444.9" cy="143.4" r="4" fill="#20c997"/><circle cx="700.0" cy="124.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,144.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.11s | 142,641.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 285.76s | 174,971.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.54s | 64,362.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.69s | 80,202.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 586.46s | 85,257.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.33s | 44,788.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.00s | 57,142.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 810.88s | 61,661.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,252.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.12s | 121,768.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 383.80s | 130,276.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.90s | 50,258.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.12s | 61,684.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 489.92s | 102,057.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.26s | 81,592.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.35s | 122,922.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 369.90s | 135,170.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-25T22:56:26Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,215.4 444.9,62.3 700.0,143.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.1 444.9,197.4 700.0,194.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.1" r="4" fill="#198754"/><circle cx="444.9" cy="197.4" r="4" fill="#198754"/><circle cx="700.0" cy="194.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.9 444.9,240.3 700.0,259.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,164.9 444.9,125.2 700.0,127.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="164.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.9 444.9,242.5 700.0,235.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.5 444.9,126.2 700.0,109.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#20c997"/><circle cx="444.9" cy="126.2" r="4" fill="#20c997"/><circle cx="700.0" cy="109.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 13.67s | 73,152.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.94s | 166,825.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 427.56s | 116,942.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.42s | 57,411.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.77s | 84,193.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 580.23s | 86,173.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.00s | 41,666.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.67s | 57,912.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1077.19s | 46,416.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,036.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.91s | 128,351.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.01s | 127,224.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.22s | 52,034.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.73s | 56,583.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 821.08s | 60,895.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.16s | 82,243.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.28s | 127,749.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.82s | 137,809.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,144.6 444.9,81.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="81.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.0 444.9,184.8 700.0,189.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.0" r="4" fill="#198754"/><circle cx="444.9" cy="184.8" r="4" fill="#198754"/><circle cx="700.0" cy="189.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.4 444.9,236.0 700.0,237.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.8 444.9,81.7 700.0,93.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="81.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.1 444.9,217.4 700.0,204.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.5 444.9,78.9 700.0,110.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.5" r="4" fill="#20c997"/><circle cx="444.9" cy="78.9" r="4" fill="#20c997"/><circle cx="700.0" cy="110.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.86s | 92,106.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.45s | 122,777.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 378.89s | 131,963.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 18.46s | 54,182.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.62s | 72,666.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 708.46s | 70,575.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.72s | 40,446.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 208.65s | 47,926.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1059.49s | 47,192.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.04s | 90,596.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.59s | 122,567.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 428.52s | 116,680.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.29s | 61,394.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.68s | 56,921.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 791.24s | 63,192.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,641.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.69s | 123,935.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 459.57s | 108,797.6 | PASS |

:::

:::

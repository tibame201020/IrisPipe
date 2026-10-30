## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-30T23:31:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.0 444.9,120.3 700.0,89.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="120.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.0 444.9,196.5 700.0,166.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#198754"/><circle cx="444.9" cy="196.5" r="4" fill="#198754"/><circle cx="700.0" cy="166.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,199.8 444.9,188.1 700.0,230.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="199.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="188.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,111.8 700.0,116.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="116.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.7 444.9,168.9 700.0,197.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="168.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="197.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.2 444.9,75.3 700.0,133.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.2" r="4" fill="#20c997"/><circle cx="444.9" cy="75.3" r="4" fill="#20c997"/><circle cx="700.0" cy="133.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.99s | 100,100.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.18s | 117,402.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 372.56s | 134,206.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.74s | 67,847.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.98s | 75,768.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 543.52s | 91,993.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.52s | 73,942.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 124.47s | 80,338.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 871.43s | 57,377.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.70s | 149,164.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.90s | 122,094.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 418.28s | 119,537.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.82s | 50,456.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 110.11s | 90,821.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 666.59s | 75,009.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.47s | 74,250.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.41s | 142,031.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 453.85s | 110,168.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,106.7 444.9,77.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="106.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="77.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.5 444.9,99.1 700.0,175.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.5" r="4" fill="#198754"/><circle cx="444.9" cy="99.1" r="4" fill="#198754"/><circle cx="700.0" cy="175.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,212.5 444.9,193.1 700.0,163.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="212.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="193.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="163.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,132.9 444.9,103.4 700.0,124.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="132.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,211.9 444.9,198.9 700.0,136.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="211.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="136.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,167.6 444.9,102.5 700.0,94.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#20c997"/><circle cx="444.9" cy="102.5" r="4" fill="#20c997"/><circle cx="700.0" cy="94.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.01s | 110,963.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.91s | 125,142.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 377.25s | 132,538.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.65s | 63,885.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 87.23s | 114,636.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 642.85s | 77,778.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.80s | 59,513.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 144.97s | 68,979.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 598.77s | 83,504.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.18s | 98,231.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.84s | 112,560.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 488.21s | 102,415.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.71s | 59,833.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 151.16s | 66,156.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 518.94s | 96,349.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.29s | 81,360.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 88.51s | 112,984.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 428.27s | 116,748.8 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-30T23:24:47Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,178.0 444.9,149.8 700.0,154.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="154.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.7 444.9,138.5 700.0,201.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#198754"/><circle cx="444.9" cy="138.5" r="4" fill="#198754"/><circle cx="700.0" cy="201.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,207.4 444.9,248.7 700.0,254.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,184.8 444.9,62.3 700.0,132.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.1 444.9,252.2 700.0,248.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.9 444.9,154.7 700.0,134.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.9" r="4" fill="#20c997"/><circle cx="444.9" cy="154.7" r="4" fill="#20c997"/><circle cx="700.0" cy="134.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.58s | 104,384.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.18s | 123,177.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.38s | 120,371.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,307.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 76.51s | 130,705.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 563.62s | 88,712.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 11.78s | 84,868.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.31s | 57,370.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 933.97s | 53,535.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.01s | 99,870.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.13s | 181,379.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 370.56s | 134,932.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.29s | 51,829.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.53s | 55,088.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 867.12s | 57,662.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.56s | 86,520.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.38s | 119,940.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.04s | 133,319.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">210k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.6 444.9,62.3 700.0,157.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="157.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.5 444.9,195.3 700.0,140.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.5" r="4" fill="#198754"/><circle cx="444.9" cy="195.3" r="4" fill="#198754"/><circle cx="700.0" cy="140.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.1 444.9,256.8 700.0,250.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,99.9 444.9,168.1 700.0,168.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="99.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="168.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,214.0 444.9,250.7 700.0,242.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="214.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,230.4 444.9,84.4 700.0,148.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#20c997"/><circle cx="444.9" cy="84.4" r="4" fill="#20c997"/><circle cx="700.0" cy="148.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.19s | 98,164.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 52.44s | 190,679.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 403.70s | 123,855.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.18s | 82,122.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.40s | 97,656.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 367.88s | 135,913.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.75s | 48,183.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.94s | 54,661.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 845.93s | 59,106.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.08s | 164,365.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.72s | 116,657.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 428.13s | 116,787.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.82s | 84,588.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.66s | 58,940.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 772.51s | 64,724.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.67s | 73,163.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 57.07s | 175,226.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.68s | 130,316.6 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-30T00:15:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,81.6 444.9,62.3 700.0,124.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="81.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.4 444.9,202.1 700.0,180.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.4" r="4" fill="#198754"/><circle cx="444.9" cy="202.1" r="4" fill="#198754"/><circle cx="700.0" cy="180.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,224.1 444.9,225.2 700.0,216.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.4 444.9,150.6 700.0,89.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,195.6 444.9,221.2 700.0,217.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.9 444.9,77.3 700.0,96.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.9" r="4" fill="#20c997"/><circle cx="444.9" cy="77.3" r="4" fill="#20c997"/><circle cx="700.0" cy="96.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.75s | 114,259.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.33s | 122,957.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 526.46s | 94,974.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.89s | 62,936.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 166.94s | 59,902.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 718.33s | 69,605.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.00s | 50,005.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 202.09s | 49,484.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 935.56s | 53,443.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,491.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 120.29s | 83,135.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 452.25s | 110,558.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.91s | 62,869.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 194.99s | 51,286.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 945.49s | 52,882.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.86s | 72,170.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.08s | 116,171.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 465.01s | 107,524.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,178.2 444.9,146.1 700.0,131.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.6 444.9,202.1 700.0,204.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.6" r="4" fill="#198754"/><circle cx="444.9" cy="202.1" r="4" fill="#198754"/><circle cx="700.0" cy="204.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.0 444.9,247.9 700.0,233.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,201.5 444.9,126.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="201.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="126.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,170.1 700.0,241.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="170.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.2 444.9,146.2 700.0,138.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.2" r="4" fill="#20c997"/><circle cx="444.9" cy="146.2" r="4" fill="#20c997"/><circle cx="700.0" cy="138.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.13s | 82,426.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 100.71s | 99,296.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 467.60s | 106,929.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.35s | 61,177.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 143.17s | 69,849.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 728.51s | 68,633.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.24s | 49,416.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 218.32s | 45,804.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.99s | 53,135.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 14.25s | 70,180.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 91.28s | 109,559.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 348.71s | 143,386.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.20s | 45,047.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 115.32s | 86,717.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1018.02s | 49,114.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.21s | 70,348.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.73s | 99,276.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 483.70s | 103,369.0 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-30T00:03:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,171.9 444.9,138.7 700.0,86.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="138.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.3 444.9,183.1 700.0,184.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.3" r="4" fill="#198754"/><circle cx="444.9" cy="183.1" r="4" fill="#198754"/><circle cx="700.0" cy="184.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.5 444.9,257.3 700.0,249.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.7 444.9,87.7 700.0,156.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.6 444.9,228.9 700.0,251.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.2 444.9,139.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#20c997"/><circle cx="444.9" cy="139.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,550.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.27s | 129,414.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 305.58s | 163,623.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.21s | 65,741.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 99.84s | 100,155.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 502.87s | 99,430.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.85s | 53,056.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 195.20s | 51,229.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 884.11s | 56,554.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.01s | 110,963.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.33s | 163,047.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 424.47s | 117,793.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.67s | 48,388.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 142.86s | 69,998.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 912.40s | 54,800.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.96s | 83,605.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.66s | 128,768.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 278.02s | 179,845.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,122.5 444.9,137.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="122.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.6 444.9,220.0 700.0,216.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#198754"/><circle cx="444.9" cy="220.0" r="4" fill="#198754"/><circle cx="700.0" cy="216.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.9 444.9,262.3 700.0,255.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.1 444.9,158.7 700.0,150.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.3 444.9,249.1 700.0,189.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.1 444.9,121.7 700.0,149.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.1" r="4" fill="#20c997"/><circle cx="444.9" cy="121.7" r="4" fill="#20c997"/><circle cx="700.0" cy="149.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.06s | 141,582.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.94s | 131,679.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 275.15s | 181,716.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.10s | 70,917.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.49s | 76,634.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 635.12s | 78,725.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.70s | 68,041.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.51s | 48,424.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 946.99s | 52,798.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.89s | 112,523.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.12s | 117,486.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 406.46s | 123,013.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.64s | 48,447.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.69s | 57,245.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 514.98s | 97,091.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.73s | 67,897.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 70.36s | 142,126.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 404.63s | 123,568.8 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-30T23:24:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">163k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">217k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,191.1 444.9,62.3 700.0,126.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="126.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.6 444.9,222.1 700.0,224.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.6" r="4" fill="#198754"/><circle cx="444.9" cy="222.1" r="4" fill="#198754"/><circle cx="700.0" cy="224.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.5 444.9,256.0 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,182.2 444.9,170.1 700.0,144.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="182.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="170.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.4 444.9,205.5 700.0,194.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.4 444.9,164.7 700.0,153.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#20c997"/><circle cx="444.9" cy="164.7" r="4" fill="#20c997"/><circle cx="700.0" cy="153.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,069.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 50.71s | 197,184.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 332.07s | 150,570.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.26s | 108,026.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.49s | 81,640.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.90s | 80,269.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.48s | 69,079.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.97s | 57,152.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 772.11s | 64,757.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.05s | 110,509.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.85s | 119,257.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 363.35s | 137,610.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.59s | 56,834.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 106.83s | 93,608.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 492.32s | 101,560.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,710.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.23s | 123,113.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 380.37s | 131,449.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.9 444.9,80.7 700.0,85.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="80.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.8 444.9,190.1 700.0,79.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.8" r="4" fill="#198754"/><circle cx="444.9" cy="190.1" r="4" fill="#198754"/><circle cx="700.0" cy="79.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.8 444.9,225.7 700.0,230.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.1 444.9,62.3 700.0,100.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.3 444.9,225.5 700.0,147.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="147.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.0 444.9,110.8 700.0,82.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#20c997"/><circle cx="444.9" cy="110.8" r="4" fill="#20c997"/><circle cx="700.0" cy="82.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.37s | 87,943.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.35s | 136,325.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.52s | 133,862.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.65s | 63,885.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.74s | 77,677.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 364.35s | 137,230.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.49s | 40,829.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.74s | 58,567.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 894.13s | 55,920.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.37s | 96,413.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 68.40s | 146,201.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 396.86s | 125,988.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.89s | 52,932.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.32s | 58,712.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 496.18s | 100,770.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.44s | 80,392.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.22s | 120,169.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 369.71s | 135,241.5 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-30T00:03:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,171.8 444.9,130.6 700.0,137.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,190.0 700.0,112.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="190.0" r="4" fill="#198754"/><circle cx="700.0" cy="112.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.4 444.9,217.6 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,125.4 700.0,121.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.8 444.9,192.6 700.0,231.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,109.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="109.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.77s | 92,833.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.03s | 116,235.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 444.33s | 112,528.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,878.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.24s | 82,479.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 395.66s | 126,371.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.81s | 59,477.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 149.81s | 66,750.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1015.92s | 49,216.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,888.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.88s | 119,217.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.87s | 121,692.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.69s | 42,217.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 123.44s | 81,013.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 848.09s | 58,956.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.64s | 79,126.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.12s | 128,001.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 322.36s | 155,107.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,162.7 444.9,154.5 700.0,124.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.4 444.9,223.4 700.0,209.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#198754"/><circle cx="444.9" cy="223.4" r="4" fill="#198754"/><circle cx="700.0" cy="209.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.5 444.9,269.4 700.0,237.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.6 444.9,62.3 700.0,137.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.9 444.9,237.0 700.0,246.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.9 444.9,150.7 700.0,124.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.9" r="4" fill="#20c997"/><circle cx="444.9" cy="150.7" r="4" fill="#20c997"/><circle cx="700.0" cy="124.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.00s | 111,148.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.90s | 116,414.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.25s | 135,778.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,742.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.95s | 71,970.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 615.75s | 81,201.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.96s | 37,090.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 236.47s | 42,289.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 790.75s | 63,231.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,827.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.85s | 175,913.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 391.97s | 127,560.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.21s | 58,088.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.17s | 63,224.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 871.99s | 57,340.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.80s | 78,094.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.11s | 118,899.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.96s | 135,517.5 | PASS |

:::

:::

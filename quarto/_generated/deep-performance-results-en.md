## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:50:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.1 444.9,85.8 700.0,130.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="130.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.4 444.9,208.4 700.0,188.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#198754"/><circle cx="444.9" cy="208.4" r="4" fill="#198754"/><circle cx="700.0" cy="188.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.5 444.9,246.5 700.0,240.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,138.2 700.0,65.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="65.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.2 444.9,189.7 700.0,219.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="189.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.8 444.9,143.5 700.0,96.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="96.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.91s | 100,928.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.57s | 152,501.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 399.54s | 125,144.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,399.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.09s | 77,465.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 557.29s | 89,720.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,246.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.75s | 54,127.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 866.00s | 57,737.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.99s | 166,889.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.04s | 120,422.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 303.32s | 164,840.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.73s | 48,248.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.46s | 88,917.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 704.65s | 70,956.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.26s | 75,409.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.31s | 117,212.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 342.70s | 145,898.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,70.1 444.9,62.3 700.0,96.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="70.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="96.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.0 444.9,184.6 700.0,181.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.0" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="181.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,196.0 444.9,240.0 700.0,237.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.9 444.9,93.8 700.0,116.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="116.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.3 444.9,231.3 700.0,139.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.7 444.9,90.8 700.0,83.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#20c997"/><circle cx="444.9" cy="90.8" r="4" fill="#20c997"/><circle cx="700.0" cy="83.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.34s | 136,276.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.27s | 140,319.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 408.24s | 122,478.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.72s | 67,930.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.22s | 77,388.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.95s | 78,994.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.98s | 71,530.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.61s | 48,874.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 997.11s | 50,145.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.67s | 103,444.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.59s | 124,086.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 444.86s | 112,394.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.49s | 51,308.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 187.34s | 53,378.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 497.83s | 100,435.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.76s | 85,070.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.58s | 125,656.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 386.89s | 129,235.7 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:42:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.0 444.9,96.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.2 444.9,209.5 700.0,130.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.2" r="4" fill="#198754"/><circle cx="444.9" cy="209.5" r="4" fill="#198754"/><circle cx="700.0" cy="130.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.1 444.9,238.5 700.0,234.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.9 444.9,72.2 700.0,158.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="72.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.1 444.9,210.2 700.0,249.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.2 444.9,149.6 700.0,87.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#20c997"/><circle cx="444.9" cy="149.6" r="4" fill="#20c997"/><circle cx="700.0" cy="87.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.55s | 86,602.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.40s | 162,871.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 268.82s | 185,999.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.47s | 105,585.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.83s | 85,593.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 358.77s | 139,365.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.85s | 50,388.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 151.99s | 65,795.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 728.04s | 68,677.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.95s | 143,988.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.80s | 179,198.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.45s | 120,641.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.39s | 49,038.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 117.50s | 85,109.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 854.83s | 58,491.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.73s | 72,838.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.08s | 126,460.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 295.87s | 168,992.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,155.3 444.9,109.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.1 444.9,200.6 700.0,178.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.1" r="4" fill="#198754"/><circle cx="444.9" cy="200.6" r="4" fill="#198754"/><circle cx="700.0" cy="178.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.3 444.9,221.7 700.0,154.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="154.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,153.7 444.9,120.2 700.0,114.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.1 444.9,231.3 700.0,227.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.7 444.9,88.3 700.0,133.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#20c997"/><circle cx="444.9" cy="88.3" r="4" fill="#20c997"/><circle cx="700.0" cy="133.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.15s | 98,531.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.98s | 123,484.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 334.43s | 149,509.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.49s | 69,022.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.69s | 73,694.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 584.11s | 85,600.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.87s | 77,706.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 160.95s | 62,129.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 505.46s | 98,920.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,373.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.94s | 117,727.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.35s | 120,963.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.89s | 55,881.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.89s | 56,855.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 846.75s | 59,049.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.73s | 78,566.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.93s | 135,255.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 452.83s | 110,416.0 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-05T01:13:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.5 444.9,128.9 700.0,66.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="128.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.6 444.9,190.8 700.0,105.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#198754"/><circle cx="444.9" cy="190.8" r="4" fill="#198754"/><circle cx="700.0" cy="105.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,214.1 444.9,246.4 700.0,213.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="214.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.8 444.9,111.8 700.0,100.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,190.1 444.9,230.0 700.0,228.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="190.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.0 444.9,105.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#20c997"/><circle cx="444.9" cy="105.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.32s | 88,354.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 100.19s | 99,807.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 383.86s | 130,256.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.48s | 64,582.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.23s | 69,817.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 450.13s | 111,079.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.08s | 58,558.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 232.96s | 42,926.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 850.28s | 58,804.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.11s | 98,902.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.50s | 108,102.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 441.14s | 113,343.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.26s | 70,145.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.70s | 50,839.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 972.14s | 51,432.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.90s | 77,489.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 89.92s | 111,210.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.58s | 132,071.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">118k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,74.7 444.9,67.0 700.0,82.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="74.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="82.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,183.2 444.9,150.6 700.0,127.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="183.2" r="4" fill="#198754"/><circle cx="444.9" cy="150.6" r="4" fill="#198754"/><circle cx="700.0" cy="127.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.2 444.9,208.9 700.0,205.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,102.1 444.9,67.0 700.0,127.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="102.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="67.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,147.4 444.9,197.7 700.0,209.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="147.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,155.2 444.9,85.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="155.2" r="4" fill="#20c997"/><circle cx="444.9" cy="85.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.79s | 102,145.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 95.06s | 105,192.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 504.73s | 99,062.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.79s | 59,566.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.20s | 72,359.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 614.63s | 81,349.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.97s | 55,651.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 202.06s | 49,489.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 982.49s | 50,891.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.94s | 91,416.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.08s | 105,176.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 613.09s | 81,554.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.58s | 73,621.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.55s | 53,892.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1016.69s | 49,179.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.17s | 70,561.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.19s | 97,857.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 467.16s | 107,030.6 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:53:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.8 444.9,62.3 700.0,113.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.6 444.9,178.0 700.0,134.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.6" r="4" fill="#198754"/><circle cx="444.9" cy="178.0" r="4" fill="#198754"/><circle cx="700.0" cy="134.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.5 444.9,232.4 700.0,233.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,137.7 444.9,116.2 700.0,111.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="137.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="116.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.5 444.9,215.8 700.0,181.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="181.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,142.6 444.9,126.8 700.0,95.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="142.6" r="4" fill="#20c997"/><circle cx="444.9" cy="126.8" r="4" fill="#20c997"/><circle cx="700.0" cy="95.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.92s | 91,600.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.74s | 152,116.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.97s | 123,465.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,019.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.19s | 87,569.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 446.59s | 111,959.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.39s | 51,575.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.83s | 57,198.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 879.79s | 56,831.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.09s | 110,071.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.93s | 122,050.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.41s | 124,873.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.33s | 75,030.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.44s | 66,471.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 583.19s | 85,734.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.32s | 107,319.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.12s | 116,113.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.96s | 133,347.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,142.7 444.9,139.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.7 444.9,170.6 700.0,193.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.7" r="4" fill="#198754"/><circle cx="444.9" cy="170.6" r="4" fill="#198754"/><circle cx="700.0" cy="193.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.8 444.9,233.5 700.0,246.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.8 444.9,94.4 700.0,123.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,224.1 700.0,238.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.6 444.9,117.3 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#20c997"/><circle cx="444.9" cy="117.3" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.79s | 113,726.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.55s | 115,545.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 310.00s | 161,288.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.17s | 70,556.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.88s | 97,204.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 596.41s | 83,834.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.79s | 43,873.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 166.60s | 60,022.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 951.58s | 52,544.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.08s | 110,144.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 70.27s | 142,310.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.87s | 125,042.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.73s | 50,674.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.53s | 65,561.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 872.72s | 57,292.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.60s | 73,556.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.68s | 128,734.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 395.13s | 126,541.0 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:49:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,176.7 444.9,62.3 700.0,105.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.9 444.9,163.0 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.9" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.4 444.9,174.9 700.0,234.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="174.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.9 444.9,108.4 700.0,125.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,231.7 700.0,143.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="143.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.5 444.9,102.1 700.0,93.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.5" r="4" fill="#20c997"/><circle cx="444.9" cy="102.1" r="4" fill="#20c997"/><circle cx="700.0" cy="93.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,477.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.90s | 147,273.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.59s | 123,888.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.09s | 62,135.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.66s | 92,881.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 585.50s | 85,397.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.45s | 48,904.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 115.65s | 86,468.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 920.08s | 54,342.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.17s | 98,309.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.74s | 122,342.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 442.80s | 112,917.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.49s | 54,074.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.32s | 55,765.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 483.85s | 103,338.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.46s | 74,266.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.51s | 125,767.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.25s | 130,461.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,197.9 444.9,136.5 700.0,141.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.7 444.9,208.7 700.0,226.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#198754"/><circle cx="444.9" cy="208.7" r="4" fill="#198754"/><circle cx="700.0" cy="226.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.9 444.9,254.2 700.0,252.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.5 444.9,62.3 700.0,158.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.5 444.9,251.2 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.0 444.9,156.8 700.0,172.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.0" r="4" fill="#20c997"/><circle cx="444.9" cy="156.8" r="4" fill="#20c997"/><circle cx="700.0" cy="172.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.54s | 94,867.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.81s | 137,343.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.68s | 133,803.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.01s | 62,464.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.46s | 87,363.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 668.66s | 74,776.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.05s | 49,875.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.88s | 55,902.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.24s | 57,127.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,654.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.00s | 188,665.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.88s | 121,986.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.80s | 48,067.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.40s | 58,003.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 799.50s | 62,539.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.51s | 74,035.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.14s | 123,243.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 443.87s | 112,646.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:53:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,212.7 444.9,179.4 700.0,171.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="179.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="171.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.9 444.9,221.9 700.0,133.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#198754"/><circle cx="444.9" cy="221.9" r="4" fill="#198754"/><circle cx="700.0" cy="133.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.0 444.9,265.6 700.0,260.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="265.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.5 444.9,62.3 700.0,115.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="115.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.9 444.9,222.9 700.0,197.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="197.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.9 444.9,143.5 700.0,124.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="124.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.46s | 80,269.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 97.93s | 102,109.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 467.35s | 106,987.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.96s | 91,274.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.75s | 74,212.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 378.82s | 131,987.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.42s | 39,343.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 219.63s | 45,531.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1028.71s | 48,604.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.92s | 91,541.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.89s | 178,935.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 346.54s | 144,285.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.07s | 45,316.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 136.01s | 73,525.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 555.96s | 89,935.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,534.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.61s | 125,620.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.74s | 138,222.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.7 444.9,96.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.8 444.9,197.9 700.0,197.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#198754"/><circle cx="444.9" cy="197.9" r="4" fill="#198754"/><circle cx="700.0" cy="197.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.3 444.9,243.9 700.0,192.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="192.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.7 444.9,154.8 700.0,92.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.0 444.9,230.0 700.0,217.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.5 444.9,105.9 700.0,96.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#20c997"/><circle cx="444.9" cy="105.9" r="4" fill="#20c997"/><circle cx="700.0" cy="96.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.11s | 89,992.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.52s | 127,359.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 342.93s | 145,804.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.83s | 63,187.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.40s | 73,315.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 681.73s | 73,342.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.72s | 40,459.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 205.24s | 48,722.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 656.16s | 76,201.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.37s | 96,413.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 103.79s | 96,351.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.20s | 129,803.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.73s | 67,879.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.14s | 56,135.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 795.42s | 62,859.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.80s | 72,463.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.65s | 122,475.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 392.73s | 127,314.9 | PASS |

:::

:::

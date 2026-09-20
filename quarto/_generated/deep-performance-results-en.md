## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-20T22:05:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">134k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">179k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,80.1 444.9,130.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="80.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.3 444.9,187.7 700.0,201.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.3" r="4" fill="#198754"/><circle cx="444.9" cy="187.7" r="4" fill="#198754"/><circle cx="700.0" cy="201.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.0 444.9,243.9 700.0,200.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.9 444.9,138.2 700.0,125.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.7 444.9,224.0 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.5 444.9,131.9 700.0,116.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.5" r="4" fill="#20c997"/><circle cx="444.9" cy="131.9" r="4" fill="#20c997"/><circle cx="700.0" cy="116.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.57s | 152,207.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.86s | 122,152.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 307.09s | 162,820.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.73s | 67,879.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 113.68s | 87,967.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 626.93s | 79,753.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.17s | 49,568.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.96s | 54,359.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 624.01s | 80,126.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,349.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.10s | 117,511.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.44s | 124,864.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.63s | 50,952.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.91s | 66,266.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 855.49s | 58,445.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.94s | 77,303.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.49s | 121,232.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.82s | 130,611.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">131k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,89.1 700.0,111.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="111.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,204.1 700.0,161.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="204.1" r="4" fill="#198754"/><circle cx="700.0" cy="161.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.6 444.9,238.1 700.0,238.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.2 444.9,131.8 700.0,114.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.3 444.9,234.9 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,136.0 700.0,131.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="136.0" r="4" fill="#20c997"/><circle cx="700.0" cy="131.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.31s | 158,528.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.95s | 142,961.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.01s | 130,205.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.04s | 66,498.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.42s | 76,093.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 495.60s | 100,887.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,813.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.49s | 56,342.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 887.99s | 56,306.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,565.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.66s | 118,115.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 390.40s | 128,074.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.85s | 50,370.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.82s | 58,200.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 878.61s | 56,908.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.33s | 81,103.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.44s | 115,688.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 421.60s | 118,595.3 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-20T21:55:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">132k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">176k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,173.5 444.9,136.6 700.0,94.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="94.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.7 444.9,196.7 700.0,196.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.7" r="4" fill="#198754"/><circle cx="444.9" cy="196.7" r="4" fill="#198754"/><circle cx="700.0" cy="196.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,240.9 700.0,213.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,160.0 444.9,115.6 700.0,123.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="160.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.1 444.9,172.5 700.0,233.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="172.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,131.6 444.9,62.3 700.0,101.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="131.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="101.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,544.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.11s | 116,130.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 354.64s | 140,988.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.22s | 89,150.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.55s | 80,940.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 618.08s | 80,895.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.16s | 49,600.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.56s | 55,079.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 703.14s | 71,109.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.76s | 102,438.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.87s | 128,424.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.27s | 123,679.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.66s | 50,872.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 105.08s | 95,162.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 843.84s | 59,252.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.40s | 119,104.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 62.63s | 159,665.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 365.06s | 136,962.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,68.2 700.0,69.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="68.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="69.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.2 444.9,111.5 700.0,115.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.2" r="4" fill="#198754"/><circle cx="444.9" cy="111.5" r="4" fill="#198754"/><circle cx="700.0" cy="115.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.3 444.9,187.3 700.0,211.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="187.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.7 444.9,97.9 700.0,80.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.4 444.9,216.3 700.0,208.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,143.6 444.9,74.0 700.0,65.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="143.6" r="4" fill="#20c997"/><circle cx="444.9" cy="74.0" r="4" fill="#20c997"/><circle cx="700.0" cy="65.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.54s | 132,643.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.08s | 129,738.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 386.80s | 129,266.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.89s | 59,217.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 91.98s | 108,720.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 467.91s | 106,857.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.02s | 49,947.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 139.23s | 71,825.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 829.62s | 60,268.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.80s | 92,575.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.73s | 115,305.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 403.09s | 124,043.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.04s | 49,895.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.20s | 57,736.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 812.11s | 61,567.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.74s | 93,075.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.78s | 126,942.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 381.31s | 131,127.9 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-18T22:32:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">118k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,79.6 444.9,89.6 700.0,84.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="79.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.5 444.9,157.4 700.0,76.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.5" r="4" fill="#198754"/><circle cx="444.9" cy="157.4" r="4" fill="#198754"/><circle cx="700.0" cy="76.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,211.2 444.9,196.0 700.0,233.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="211.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="196.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.2 444.9,82.0 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,195.1 444.9,202.3 700.0,208.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="195.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,165.4 444.9,72.2 700.0,101.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="165.4" r="4" fill="#20c997"/><circle cx="444.9" cy="72.2" r="4" fill="#20c997"/><circle cx="700.0" cy="101.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,230.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.84s | 96,304.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 508.81s | 98,267.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.59s | 64,156.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.46s | 69,707.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 492.60s | 101,501.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.59s | 48,572.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 183.26s | 54,566.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1253.79s | 39,879.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,470.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 100.69s | 99,309.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 467.11s | 107,041.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.21s | 54,911.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 191.97s | 52,092.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1003.88s | 49,806.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.03s | 66,555.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.96s | 103,138.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 546.10s | 91,558.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">130k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,120.8 444.9,90.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="120.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.3 444.9,179.6 700.0,174.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.3" r="4" fill="#198754"/><circle cx="444.9" cy="179.6" r="4" fill="#198754"/><circle cx="700.0" cy="174.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,194.2 444.9,207.5 700.0,214.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,102.9 444.9,90.0 700.0,108.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="102.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="108.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.1 444.9,202.9 700.0,183.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.1 444.9,104.2 700.0,114.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.1" r="4" fill="#20c997"/><circle cx="444.9" cy="104.2" r="4" fill="#20c997"/><circle cx="700.0" cy="114.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.74s | 93,144.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.19s | 106,167.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 421.56s | 118,607.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.58s | 60,306.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 147.95s | 67,589.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 714.11s | 70,017.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.33s | 61,240.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.39s | 55,436.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 956.01s | 52,300.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.90s | 100,959.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 93.86s | 106,546.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 507.16s | 98,588.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.50s | 46,505.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.07s | 57,449.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 757.65s | 65,993.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.56s | 53,870.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.62s | 100,382.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 522.33s | 95,725.5 | PASS |

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

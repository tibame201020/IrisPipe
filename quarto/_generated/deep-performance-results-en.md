## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:33:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,76.1 700.0,75.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,187.0 444.9,178.9 700.0,173.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="187.0" r="4" fill="#198754"/><circle cx="444.9" cy="178.9" r="4" fill="#198754"/><circle cx="700.0" cy="173.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.9 444.9,216.8 700.0,211.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,100.5 444.9,80.7 700.0,77.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="100.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,206.5 444.9,223.3 700.0,216.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="206.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.1 444.9,87.9 700.0,80.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.1" r="4" fill="#20c997"/><circle cx="444.9" cy="87.9" r="4" fill="#20c997"/><circle cx="700.0" cy="80.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.43s | 134,553.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.28s | 127,746.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.44s | 128,059.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.69s | 73,030.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.88s | 76,994.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 626.17s | 79,850.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.45s | 48,911.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.45s | 58,325.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 823.52s | 60,714.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.64s | 115,673.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.70s | 125,470.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.48s | 127,070.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,399.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.50s | 55,095.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 854.70s | 58,500.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.76s | 78,400.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.04s | 121,894.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 397.79s | 125,695.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,168.6 444.9,122.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.0 444.9,205.5 700.0,209.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.0" r="4" fill="#198754"/><circle cx="444.9" cy="205.5" r="4" fill="#198754"/><circle cx="700.0" cy="209.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.4 444.9,255.4 700.0,245.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.8 444.9,144.6 700.0,152.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="152.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.8 444.9,240.2 700.0,227.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.2 444.9,154.1 700.0,153.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.2" r="4" fill="#20c997"/><circle cx="444.9" cy="154.1" r="4" fill="#20c997"/><circle cx="700.0" cy="153.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.14s | 109,397.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.64s | 139,584.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 278.78s | 179,350.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.90s | 67,109.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 117.46s | 85,136.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 607.70s | 82,277.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.66s | 48,402.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 190.95s | 52,370.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 845.13s | 59,162.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.26s | 97,446.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.85s | 125,228.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.48s | 120,053.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.81s | 63,259.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.38s | 62,353.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 708.56s | 70,565.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.58s | 79,466.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.08s | 118,941.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 418.68s | 119,424.1 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:23:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,109.8 444.9,116.5 700.0,119.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.4 444.9,162.6 700.0,142.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#198754"/><circle cx="444.9" cy="162.6" r="4" fill="#198754"/><circle cx="700.0" cy="142.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.9 444.9,204.4 700.0,222.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.8 444.9,121.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.3 444.9,198.7 700.0,226.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,124.7 444.9,103.7 700.0,185.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="124.7" r="4" fill="#20c997"/><circle cx="444.9" cy="103.7" r="4" fill="#20c997"/><circle cx="700.0" cy="185.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.17s | 122,339.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.24s | 118,707.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 427.85s | 116,862.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.42s | 69,352.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 106.77s | 93,661.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 477.11s | 104,796.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.18s | 58,214.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 140.90s | 70,974.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 819.22s | 61,033.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.70s | 129,937.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.38s | 115,767.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 337.43s | 148,180.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,365.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 135.02s | 74,064.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.08s | 59,236.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.75s | 114,285.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.58s | 125,655.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 614.14s | 81,414.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">217k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,192.0 444.9,156.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="156.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.5 444.9,192.7 700.0,224.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#198754"/><circle cx="444.9" cy="192.7" r="4" fill="#198754"/><circle cx="700.0" cy="224.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.9 444.9,252.5 700.0,252.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,190.5 444.9,151.6 700.0,185.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="190.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="185.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.8 444.9,255.8 700.0,234.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,271.4 444.9,162.3 700.0,150.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="271.4" r="4" fill="#20c997"/><circle cx="444.9" cy="162.3" r="4" fill="#20c997"/><circle cx="700.0" cy="150.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,188.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.56s | 128,937.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 254.00s | 196,853.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 8.97s | 111,520.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 97.33s | 102,740.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.63s | 79,919.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.04s | 49,907.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.87s | 59,569.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 838.72s | 59,614.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.59s | 104,275.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 75.56s | 132,345.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 462.37s | 108,137.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.73s | 50,697.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.91s | 57,172.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 685.80s | 72,907.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 21.78s | 45,907.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.23s | 124,640.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.62s | 133,467.9 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:54:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">119k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,111.0 444.9,77.0 700.0,79.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="111.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="77.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.6 444.9,152.2 700.0,164.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.6" r="4" fill="#198754"/><circle cx="444.9" cy="152.2" r="4" fill="#198754"/><circle cx="700.0" cy="164.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.0 444.9,210.1 700.0,195.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,73.9 444.9,64.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="73.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="64.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,221.0 444.9,207.0 700.0,209.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.0 444.9,122.9 700.0,86.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#20c997"/><circle cx="444.9" cy="122.9" r="4" fill="#20c997"/><circle cx="700.0" cy="86.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.22s | 89,118.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 97.42s | 102,651.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 492.12s | 101,601.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.50s | 60,620.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.52s | 72,718.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 738.15s | 67,737.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.60s | 48,539.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 201.31s | 49,675.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.01s | 55,616.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.63s | 103,885.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.97s | 107,567.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 460.81s | 108,504.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.04s | 45,367.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.40s | 50,917.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1001.16s | 49,942.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.86s | 59,297.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 118.51s | 84,382.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 505.30s | 98,951.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">123k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,121.2 444.9,96.8 700.0,104.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="121.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,179.2 444.9,173.5 700.0,151.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#198754"/><circle cx="444.9" cy="173.5" r="4" fill="#198754"/><circle cx="700.0" cy="151.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.1 444.9,207.5 700.0,211.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.5 444.9,167.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,274.1 444.9,215.7 700.0,189.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="274.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.0 444.9,90.4 700.0,94.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.0" r="4" fill="#20c997"/><circle cx="444.9" cy="90.4" r="4" fill="#20c997"/><circle cx="700.0" cy="94.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.40s | 87,750.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 102.29s | 97,759.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 529.12s | 94,496.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.64s | 63,922.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 150.92s | 66,259.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 662.52s | 75,469.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.03s | 47,546.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.17s | 52,309.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 988.49s | 50,582.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,733.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 145.28s | 68,832.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 446.75s | 111,919.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 40.03s | 24,983.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 204.26s | 48,957.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 835.92s | 59,814.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.77s | 72,632.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.61s | 100,386.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 507.21s | 98,577.5 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:32:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,149.0 444.9,109.4 700.0,113.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,137.8 444.9,178.3 700.0,149.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="137.8" r="4" fill="#198754"/><circle cx="444.9" cy="178.3" r="4" fill="#198754"/><circle cx="700.0" cy="149.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,187.9 444.9,161.6 700.0,223.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="161.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="223.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.9 444.9,115.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.5 444.9,229.9 700.0,228.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.6 444.9,101.6 700.0,91.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.6" r="4" fill="#20c997"/><circle cx="444.9" cy="101.6" r="4" fill="#20c997"/><circle cx="700.0" cy="91.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.90s | 101,030.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.64s | 122,489.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.32s | 120,388.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.34s | 107,077.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.52s | 85,094.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 495.93s | 100,821.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,891.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 106.18s | 94,177.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 828.27s | 60,366.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,672.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.87s | 119,237.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 337.60s | 148,103.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.70s | 53,487.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.25s | 57,060.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 866.75s | 57,686.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.62s | 86,036.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.91s | 126,728.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.40s | 132,486.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,105.9 444.9,76.8 700.0,68.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="68.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.9 444.9,176.9 700.0,172.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#198754"/><circle cx="444.9" cy="176.9" r="4" fill="#198754"/><circle cx="700.0" cy="172.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.2 444.9,214.1 700.0,162.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="162.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.9 444.9,68.1 700.0,85.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="85.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,164.9 444.9,132.0 700.0,174.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="164.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="132.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="174.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.1 444.9,92.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#20c997"/><circle cx="444.9" cy="92.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.05s | 110,497.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.32s | 124,505.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.67s | 128,312.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.69s | 68,055.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.17s | 76,237.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.77s | 78,275.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.18s | 49,554.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.46s | 58,323.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 600.33s | 83,287.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.29s | 107,596.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.69s | 128,715.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.06s | 120,173.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.19s | 82,007.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 102.15s | 97,891.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 644.05s | 77,633.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.97s | 77,095.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.37s | 117,137.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.16s | 131,523.6 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-27T22:27:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,169.7 444.9,108.0 700.0,109.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.3 444.9,190.8 700.0,180.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#198754"/><circle cx="444.9" cy="190.8" r="4" fill="#198754"/><circle cx="700.0" cy="180.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.9 444.9,232.2 700.0,230.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.1 444.9,114.0 700.0,104.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.0 444.9,203.9 700.0,185.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,62.3 700.0,77.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="77.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.07s | 90,358.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.60s | 124,075.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.71s | 123,545.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.18s | 89,469.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.87s | 78,818.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 592.08s | 84,448.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.53s | 48,709.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.01s | 56,175.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 874.12s | 57,200.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.29s | 107,642.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.77s | 120,813.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 396.89s | 125,979.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.66s | 53,590.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 139.51s | 71,678.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 610.63s | 81,883.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.82s | 92,395.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.07s | 149,100.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.55s | 141,023.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,199.7 444.9,97.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.6 444.9,180.0 700.0,193.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#198754"/><circle cx="444.9" cy="180.0" r="4" fill="#198754"/><circle cx="700.0" cy="193.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.4 444.9,213.2 700.0,248.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.7 444.9,115.0 700.0,131.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.0 444.9,242.0 700.0,170.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="170.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.2 444.9,125.9 700.0,114.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.2" r="4" fill="#20c997"/><circle cx="444.9" cy="125.9" r="4" fill="#20c997"/><circle cx="700.0" cy="114.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.95s | 83,675.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.11s | 146,832.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 296.41s | 168,683.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.05s | 66,427.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.30s | 95,877.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 570.01s | 87,717.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,833.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 132.72s | 75,348.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 938.28s | 53,289.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.55s | 94,822.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.48s | 136,097.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 396.31s | 126,164.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.27s | 47,023.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.87s | 57,515.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 490.94s | 101,845.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.09s | 70,997.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.34s | 129,305.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.90s | 136,276.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:35:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,114.5 444.9,109.8 700.0,103.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="114.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="103.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.2 444.9,166.7 700.0,127.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.2" r="4" fill="#198754"/><circle cx="444.9" cy="166.7" r="4" fill="#198754"/><circle cx="700.0" cy="127.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.0 444.9,238.6 700.0,246.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.1 444.9,101.1 700.0,81.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.7 444.9,225.8 700.0,219.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,149.5 444.9,62.3 700.0,62.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="149.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.90s | 112,334.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.16s | 114,727.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 424.83s | 117,695.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.95s | 59,004.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.63s | 85,738.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 472.69s | 105,778.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.23s | 41,274.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.68s | 49,097.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1111.87s | 44,969.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,394.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.93s | 119,144.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.23s | 129,122.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.26s | 47,038.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.78s | 55,623.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 850.57s | 58,783.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,473.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 71.98s | 138,919.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 360.54s | 138,679.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,181.3 444.9,137.9 700.0,127.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="181.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.9 444.9,206.7 700.0,215.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.9" r="4" fill="#198754"/><circle cx="444.9" cy="206.7" r="4" fill="#198754"/><circle cx="700.0" cy="215.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.0 444.9,242.3 700.0,262.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,155.4 444.9,145.9 700.0,143.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="155.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="145.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.0 444.9,211.0 700.0,235.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.8 444.9,132.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.8" r="4" fill="#20c997"/><circle cx="444.9" cy="132.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.22s | 97,809.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.69s | 125,494.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 377.57s | 132,426.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.17s | 61,831.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 122.45s | 81,662.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.00s | 76,219.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.05s | 35,649.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.55s | 58,979.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1081.66s | 46,225.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.75s | 114,338.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.08s | 120,360.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.22s | 121,884.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.53s | 46,451.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 126.72s | 78,917.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 786.78s | 63,550.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.07s | 76,534.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.73s | 128,647.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 288.00s | 173,608.7 | PASS |

:::

:::

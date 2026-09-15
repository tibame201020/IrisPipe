## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-15T22:38:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,151.8 444.9,62.3 700.0,135.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="135.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,209.0 700.0,189.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="209.0" r="4" fill="#198754"/><circle cx="700.0" cy="189.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.8 444.9,237.6 700.0,240.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.8 444.9,66.4 700.0,124.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="66.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.2 444.9,238.7 700.0,236.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.7 444.9,132.8 700.0,198.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.7" r="4" fill="#20c997"/><circle cx="444.9" cy="132.8" r="4" fill="#20c997"/><circle cx="700.0" cy="198.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.81s | 113,533.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.17s | 168,993.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.41s | 123,636.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.72s | 85,309.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.05s | 78,095.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 552.58s | 90,485.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.18s | 47,214.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.77s | 60,324.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 850.57s | 58,784.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.62s | 116,022.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.09s | 166,414.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 383.67s | 130,319.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.01s | 47,594.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 167.65s | 59,646.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 822.30s | 60,804.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.10s | 82,624.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.83s | 125,270.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 591.56s | 84,522.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">222k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.2 444.9,62.3 700.0,108.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.4 444.9,231.7 700.0,248.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.4" r="4" fill="#198754"/><circle cx="444.9" cy="231.7" r="4" fill="#198754"/><circle cx="700.0" cy="248.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.7 444.9,256.6 700.0,240.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="240.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,190.3 444.9,199.8 700.0,172.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="199.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="172.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.3 444.9,256.6 700.0,257.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="257.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.8 444.9,180.3 700.0,191.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#20c997"/><circle cx="444.9" cy="180.3" r="4" fill="#20c997"/><circle cx="700.0" cy="191.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,359.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 49.55s | 201,824.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 298.78s | 167,347.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.09s | 66,277.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.76s | 76,474.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 782.06s | 63,933.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.39s | 49,043.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 172.26s | 58,052.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 713.69s | 70,058.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.34s | 107,089.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 99.93s | 100,074.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 415.49s | 120,339.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.11s | 52,331.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.45s | 57,988.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 873.46s | 57,243.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.76s | 114,129.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 87.33s | 114,501.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 470.18s | 106,342.5 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-15T22:28:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,85.1 444.9,82.2 700.0,90.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="85.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="82.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.7 444.9,177.3 700.0,149.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.7" r="4" fill="#198754"/><circle cx="444.9" cy="177.3" r="4" fill="#198754"/><circle cx="700.0" cy="149.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,224.6 444.9,151.9 700.0,214.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="224.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="151.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.1 444.9,62.3 700.0,63.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="63.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.1 444.9,208.4 700.0,200.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="208.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,144.7 444.9,85.6 700.0,71.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="144.7" r="4" fill="#20c997"/><circle cx="444.9" cy="85.6" r="4" fill="#20c997"/><circle cx="700.0" cy="71.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.17s | 122,444.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.75s | 123,842.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 417.71s | 119,700.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.58s | 73,648.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.41s | 77,271.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 549.07s | 91,062.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.48s | 54,103.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 111.44s | 89,736.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 849.00s | 58,893.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,742.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 74.83s | 133,627.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.11s | 133,294.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.40s | 54,336.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.15s | 62,052.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 758.33s | 65,934.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.73s | 93,231.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.83s | 122,204.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.71s | 128,962.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,120.9 444.9,62.3 700.0,78.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="120.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="78.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.6 444.9,185.4 700.0,169.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.6" r="4" fill="#198754"/><circle cx="444.9" cy="185.4" r="4" fill="#198754"/><circle cx="700.0" cy="169.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.7 444.9,219.5 700.0,226.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.4 444.9,80.9 700.0,100.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.0 444.9,221.4 700.0,219.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.0 444.9,77.2 700.0,73.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#20c997"/><circle cx="444.9" cy="77.2" r="4" fill="#20c997"/><circle cx="700.0" cy="73.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.37s | 106,712.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.55s | 135,961.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.60s | 127,682.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.70s | 68,008.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.09s | 74,576.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 606.64s | 82,420.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.62s | 48,496.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.70s | 57,571.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 919.82s | 54,358.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.30s | 107,480.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.93s | 126,697.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.71s | 116,901.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.25s | 49,370.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.58s | 56,631.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 864.69s | 57,824.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.38s | 80,782.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.81s | 128,521.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.80s | 130,276.2 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-15T22:58:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,128.4 444.9,95.8 700.0,100.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="128.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="100.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.0 444.9,175.2 700.0,122.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.0" r="4" fill="#198754"/><circle cx="444.9" cy="175.2" r="4" fill="#198754"/><circle cx="700.0" cy="122.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.7 444.9,203.5 700.0,211.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="203.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.2 444.9,142.1 700.0,70.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="70.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.6 444.9,200.1 700.0,187.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="200.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="187.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.9 444.9,88.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.9" r="4" fill="#20c997"/><circle cx="444.9" cy="88.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.74s | 85,193.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 101.38s | 98,639.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 516.90s | 96,731.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.06s | 62,258.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 151.72s | 65,909.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 570.18s | 87,691.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.51s | 51,266.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.46s | 54,212.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 982.40s | 50,895.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.40s | 87,742.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 125.70s | 79,552.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 457.95s | 109,182.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.37s | 44,698.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.77s | 55,626.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 819.89s | 60,983.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.42s | 69,328.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.31s | 101,720.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 444.61s | 112,457.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">32k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">64k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">128k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,96.3 444.9,65.5 700.0,91.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="96.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="91.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,146.0 444.9,174.1 700.0,173.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="146.0" r="4" fill="#198754"/><circle cx="444.9" cy="174.1" r="4" fill="#198754"/><circle cx="700.0" cy="173.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,249.7 444.9,215.7 700.0,220.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="249.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.9 444.9,62.3 700.0,103.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,180.1 444.9,257.7 700.0,211.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="180.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.8 444.9,108.6 700.0,138.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.8" r="4" fill="#20c997"/><circle cx="444.9" cy="108.6" r="4" fill="#20c997"/><circle cx="700.0" cy="138.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,874.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 86.96s | 114,996.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 480.26s | 104,110.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.40s | 80,638.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 145.62s | 68,672.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 725.45s | 68,922.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.47s | 36,404.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 196.48s | 50,896.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1024.71s | 48,794.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,793.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.92s | 116,387.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 506.34s | 98,748.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.12s | 66,124.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 303.07s | 32,995.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 945.44s | 52,885.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.45s | 74,327.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.52s | 96,598.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 596.21s | 83,862.9 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-15T22:41:27Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,146.0 444.9,97.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,147.1 444.9,161.0 700.0,141.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="147.1" r="4" fill="#198754"/><circle cx="444.9" cy="161.0" r="4" fill="#198754"/><circle cx="700.0" cy="141.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,216.1 444.9,177.5 700.0,232.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="216.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="177.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.2 444.9,92.4 700.0,111.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.7 444.9,220.5 700.0,196.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.1 444.9,62.6 700.0,81.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.6" r="4" fill="#20c997"/><circle cx="700.0" cy="81.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.86s | 101,461.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.42s | 127,516.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 341.50s | 146,415.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.91s | 100,898.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.03s | 93,429.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 481.79s | 103,778.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.67s | 63,832.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 118.29s | 84,540.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 905.09s | 55,243.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.66s | 103,519.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.78s | 130,247.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 416.24s | 120,123.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.55s | 51,140.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.66s | 61,479.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 671.17s | 74,496.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,224.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 68.38s | 146,241.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.01s | 135,864.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,126.2 444.9,62.3 700.0,86.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.4 444.9,149.5 700.0,190.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.4" r="4" fill="#198754"/><circle cx="444.9" cy="149.5" r="4" fill="#198754"/><circle cx="700.0" cy="190.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.7 444.9,222.4 700.0,217.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.3 444.9,106.5 700.0,84.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.2 444.9,223.0 700.0,226.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,101.3 700.0,81.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="101.3" r="4" fill="#20c997"/><circle cx="700.0" cy="81.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,202.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.09s | 138,715.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 395.24s | 126,505.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.17s | 65,932.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 106.00s | 94,335.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 679.38s | 73,596.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.26s | 44,923.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.56s | 57,285.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 834.05s | 59,948.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.61s | 104,090.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.03s | 116,239.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 392.50s | 127,389.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.42s | 46,681.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.53s | 56,969.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 906.27s | 55,171.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.09s | 70,957.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.12s | 118,876.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 387.10s | 129,165.6 | PASS |

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
  **Latest measurement:** `2026-09-15T22:43:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,177.7 444.9,65.9 700.0,101.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.1 444.9,191.3 700.0,160.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.1" r="4" fill="#198754"/><circle cx="444.9" cy="191.3" r="4" fill="#198754"/><circle cx="700.0" cy="160.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.5 444.9,246.7 700.0,238.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.7 444.9,70.3 700.0,86.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="70.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.8 444.9,217.9 700.0,206.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.4 444.9,142.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.4" r="4" fill="#20c997"/><circle cx="444.9" cy="142.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.43s | 80,444.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 72.67s | 137,612.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.89s | 119,364.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.17s | 61,827.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 136.13s | 73,460.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 561.33s | 89,074.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.93s | 40,117.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 221.49s | 45,149.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1017.12s | 49,158.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.96s | 111,632.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.89s | 135,336.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.77s | 126,977.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.43s | 54,274.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 166.95s | 59,896.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 762.54s | 65,570.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.90s | 77,513.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 101.57s | 98,450.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.57s | 139,442.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,108.4 444.9,62.3 700.0,101.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,232.4 444.9,188.1 700.0,191.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="232.4" r="4" fill="#198754"/><circle cx="444.9" cy="188.1" r="4" fill="#198754"/><circle cx="700.0" cy="191.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.1 444.9,243.3 700.0,261.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.4 444.9,162.9 700.0,114.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.0 444.9,238.4 700.0,227.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.1 444.9,119.2 700.0,104.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.1" r="4" fill="#20c997"/><circle cx="444.9" cy="119.2" r="4" fill="#20c997"/><circle cx="700.0" cy="104.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.89s | 126,742.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 65.57s | 152,518.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 382.19s | 130,826.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.43s | 57,369.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 121.73s | 82,151.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 623.78s | 80,157.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.68s | 44,097.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 195.01s | 51,279.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1214.20s | 41,179.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 12.12s | 82,515.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 103.91s | 96,238.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.85s | 123,501.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.02s | 52,590.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.16s | 54,007.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 828.00s | 60,386.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.78s | 78,235.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.86s | 120,679.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.19s | 128,804.2 | PASS |

:::

:::

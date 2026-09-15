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
  **Latest measurement:** `2026-09-14T23:25:56Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">131k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,139.2 444.9,89.8 700.0,110.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="139.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="110.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.3 444.9,159.1 700.0,170.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.3" r="4" fill="#198754"/><circle cx="444.9" cy="159.1" r="4" fill="#198754"/><circle cx="700.0" cy="170.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.2 444.9,238.1 700.0,206.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="206.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,199.7 444.9,70.0 700.0,107.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="199.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="70.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="107.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,219.6 444.9,214.1 700.0,201.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="219.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,141.8 444.9,62.3 700.0,135.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="141.8" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="135.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,448.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 93.44s | 107,016.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 509.73s | 98,090.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 24.45s | 40,908.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.23s | 76,784.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 697.28s | 71,706.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.07s | 45,302.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 236.42s | 42,297.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 891.22s | 56,102.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 16.94s | 59,031.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.46s | 115,661.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 503.85s | 99,235.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,365.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 189.44s | 52,785.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 856.61s | 58,369.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.86s | 84,331.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.01s | 119,033.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 574.45s | 87,040.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">120k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,126.3 444.9,82.3 700.0,73.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="82.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="73.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.0 444.9,177.7 700.0,159.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#198754"/><circle cx="444.9" cy="177.7" r="4" fill="#198754"/><circle cx="700.0" cy="159.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.5 444.9,208.7 700.0,242.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,98.5 444.9,124.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="98.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.1 444.9,207.7 700.0,206.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.9 444.9,82.1 700.0,76.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#20c997"/><circle cx="444.9" cy="82.1" r="4" fill="#20c997"/><circle cx="700.0" cy="76.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.98s | 83,493.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 98.90s | 101,114.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 478.34s | 104,527.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.62s | 64,004.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 158.92s | 62,923.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 710.72s | 70,351.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 38.73s | 25,817.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 197.84s | 50,546.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1347.48s | 37,106.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.57s | 94,616.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 118.89s | 84,114.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 458.17s | 109,129.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.34s | 44,768.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.31s | 50,940.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 971.76s | 51,452.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.23s | 65,672.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 98.83s | 101,184.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 483.44s | 103,425.0 | PASS |

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

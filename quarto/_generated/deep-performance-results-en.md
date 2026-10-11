## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-11T23:08:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">203k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,83.7 444.9,62.3 700.0,146.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="83.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,221.1 700.0,133.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="221.1" r="4" fill="#198754"/><circle cx="700.0" cy="133.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.9 444.9,213.5 700.0,244.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.1 444.9,157.0 700.0,153.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,211.1 444.9,251.2 700.0,193.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="211.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.8 444.9,162.0 700.0,94.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#20c997"/><circle cx="444.9" cy="162.0" r="4" fill="#20c997"/><circle cx="700.0" cy="94.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 5.88s | 169,923.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 54.22s | 184,444.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 391.59s | 127,685.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.92s | 77,399.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.86s | 77,007.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 367.09s | 136,207.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.19s | 75,843.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 121.74s | 82,143.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 816.91s | 61,206.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.66s | 130,480.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.09s | 120,354.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 407.17s | 122,799.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.93s | 83,801.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.49s | 56,660.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 521.20s | 95,931.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.00s | 83,333.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.46s | 117,012.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 307.31s | 162,701.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,114.6 700.0,64.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="64.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.5 444.9,200.2 700.0,208.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#198754"/><circle cx="444.9" cy="200.2" r="4" fill="#198754"/><circle cx="700.0" cy="208.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.5 444.9,240.9 700.0,243.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.1 444.9,139.1 700.0,136.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="136.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.2 444.9,241.5 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.7 444.9,164.3 700.0,114.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.7" r="4" fill="#20c997"/><circle cx="444.9" cy="164.3" r="4" fill="#20c997"/><circle cx="700.0" cy="114.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.91s | 169,233.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.12s | 136,765.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 297.93s | 167,824.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,693.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.52s | 83,671.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.82s | 78,269.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.77s | 50,571.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.22s | 58,404.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 879.76s | 56,833.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.54s | 104,799.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.27s | 121,553.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.10s | 123,425.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.20s | 49,507.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.28s | 58,043.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 870.97s | 57,407.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.47s | 80,218.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 94.40s | 105,931.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.31s | 136,868.6 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-11T22:59:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,105.9 444.9,139.9 700.0,144.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.1 444.9,217.7 700.0,125.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#198754"/><circle cx="444.9" cy="217.7" r="4" fill="#198754"/><circle cx="700.0" cy="125.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.6 444.9,241.0 700.0,244.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.6 444.9,66.9 700.0,152.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="66.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="152.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.4 444.9,250.6 700.0,242.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.9 444.9,153.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#20c997"/><circle cx="444.9" cy="153.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.62s | 151,057.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.74s | 128,633.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 397.40s | 125,817.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,133.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.34s | 77,318.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 361.44s | 138,335.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.66s | 48,393.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 161.39s | 61,961.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 839.75s | 59,541.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.64s | 103,756.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 56.59s | 176,725.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 415.18s | 120,430.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.93s | 55,772.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.70s | 55,647.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 818.62s | 61,078.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.91s | 71,911.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.64s | 119,555.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 278.08s | 179,803.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">187k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">249k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,216.3 444.9,62.3 700.0,176.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="176.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,253.6 444.9,244.5 700.0,239.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="253.6" r="4" fill="#198754"/><circle cx="444.9" cy="244.5" r="4" fill="#198754"/><circle cx="700.0" cy="239.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.7 444.9,259.8 700.0,217.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,199.0 444.9,192.6 700.0,190.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="192.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="190.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.4 444.9,263.5 700.0,264.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="263.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="264.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.1 444.9,189.8 700.0,177.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.1" r="4" fill="#20c997"/><circle cx="444.9" cy="189.8" r="4" fill="#20c997"/><circle cx="700.0" cy="177.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.15s | 98,531.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 44.17s | 226,392.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 379.44s | 131,774.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.79s | 67,590.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.15s | 75,105.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 629.46s | 79,433.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.72s | 53,410.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 160.28s | 62,392.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 513.75s | 97,323.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,854.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.62s | 118,181.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 415.57s | 120,315.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.73s | 63,568.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.40s | 59,383.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 857.92s | 58,280.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.86s | 112,828.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.95s | 120,556.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 381.54s | 131,047.2 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-11T23:34:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.0 444.9,123.9 700.0,146.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,204.0 444.9,190.4 700.0,138.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#198754"/><circle cx="444.9" cy="190.4" r="4" fill="#198754"/><circle cx="700.0" cy="138.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.3 444.9,215.8 700.0,214.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,127.3 444.9,97.6 700.0,157.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="127.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.1 444.9,230.3 700.0,223.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.6 444.9,127.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.6" r="4" fill="#20c997"/><circle cx="444.9" cy="127.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.18s | 89,437.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.05s | 100,958.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 555.44s | 90,018.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.96s | 62,664.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.63s | 69,141.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 531.49s | 94,074.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.77s | 48,148.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.47s | 56,988.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 870.19s | 57,458.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.07s | 99,314.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.08s | 113,537.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 587.47s | 85,110.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.04s | 45,367.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 199.73s | 50,068.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 935.64s | 53,439.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.22s | 65,685.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.77s | 99,232.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.38s | 130,418.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,116.8 444.9,131.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.6 444.9,128.7 700.0,199.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#198754"/><circle cx="444.9" cy="128.7" r="4" fill="#198754"/><circle cx="700.0" cy="199.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.5 444.9,236.5 700.0,225.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,73.2 444.9,142.3 700.0,145.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="73.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.8 444.9,237.3 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.7 444.9,142.0 700.0,165.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#20c997"/><circle cx="444.9" cy="142.0" r="4" fill="#20c997"/><circle cx="700.0" cy="165.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.82s | 113,353.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.75s | 105,536.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 352.95s | 141,663.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.40s | 60,971.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 93.34s | 107,139.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 710.00s | 70,422.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.75s | 45,979.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 195.37s | 51,185.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.71s | 56,708.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.35s | 135,998.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 99.89s | 100,110.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 508.92s | 98,247.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.21s | 52,067.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.99s | 50,763.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 998.51s | 50,074.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.64s | 53,633.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.73s | 100,271.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 566.61s | 88,244.1 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-10T23:08:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,109.2 444.9,149.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,201.4 700.0,214.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.4" r="4" fill="#198754"/><circle cx="700.0" cy="214.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.9 444.9,246.6 700.0,248.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.6 444.9,148.4 700.0,153.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.1 444.9,252.3 700.0,186.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.0 444.9,145.7 700.0,97.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.0" r="4" fill="#20c997"/><circle cx="444.9" cy="145.7" r="4" fill="#20c997"/><circle cx="700.0" cy="97.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.67s | 149,947.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.31s | 122,983.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 276.12s | 181,082.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.97s | 66,791.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.75s | 88,687.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.58s | 80,310.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.27s | 51,883.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.36s | 58,700.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 869.55s | 57,500.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.06s | 141,723.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.70s | 123,920.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.82s | 120,825.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.16s | 55,060.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.19s | 54,887.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 505.71s | 98,869.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,045.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.57s | 125,681.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 316.50s | 157,980.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,105.2 444.9,62.3 700.0,129.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,167.3 444.9,213.1 700.0,208.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="167.3" r="4" fill="#198754"/><circle cx="444.9" cy="213.1" r="4" fill="#198754"/><circle cx="700.0" cy="208.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.6 444.9,246.8 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.6 444.9,143.9 700.0,141.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.5 444.9,243.3 700.0,207.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.1 444.9,141.0 700.0,176.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#20c997"/><circle cx="444.9" cy="141.0" r="4" fill="#20c997"/><circle cx="700.0" cy="176.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.87s | 145,624.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.85s | 172,848.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.54s | 130,363.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.41s | 106,292.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.42s | 77,269.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.23s | 79,970.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.67s | 73,136.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.97s | 55,876.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 891.90s | 56,060.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.10s | 109,926.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.58s | 121,097.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 406.82s | 122,905.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.36s | 51,660.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.03s | 58,129.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 620.54s | 80,575.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.38s | 74,727.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.33s | 122,951.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 496.34s | 100,736.8 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-11T23:07:04Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,82.3 444.9,83.7 700.0,97.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="82.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,151.6 444.9,134.1 700.0,173.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="151.6" r="4" fill="#198754"/><circle cx="444.9" cy="134.1" r="4" fill="#198754"/><circle cx="700.0" cy="173.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.7 444.9,225.6 700.0,211.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.4 444.9,62.3 700.0,92.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,169.8 444.9,228.2 700.0,217.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="169.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.1 444.9,72.2 700.0,73.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.1" r="4" fill="#20c997"/><circle cx="444.9" cy="72.2" r="4" fill="#20c997"/><circle cx="700.0" cy="73.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.66s | 130,633.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.96s | 129,941.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 407.34s | 122,747.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,840.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 96.30s | 103,840.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 597.05s | 83,745.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.67s | 46,148.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.74s | 56,580.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 785.22s | 63,676.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.15s | 98,531.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 70.92s | 140,998.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 399.36s | 125,200.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.71s | 85,389.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.09s | 55,219.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 824.51s | 60,642.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.99s | 76,994.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.59s | 135,880.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.90s | 135,172.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,141.3 444.9,74.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="141.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.0 444.9,191.4 700.0,181.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#198754"/><circle cx="444.9" cy="191.4" r="4" fill="#198754"/><circle cx="700.0" cy="181.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.1 444.9,222.6 700.0,224.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,156.4 444.9,106.9 700.0,106.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="156.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.0 444.9,223.8 700.0,222.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.5 444.9,90.2 700.0,70.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.5" r="4" fill="#20c997"/><circle cx="444.9" cy="90.2" r="4" fill="#20c997"/><circle cx="700.0" cy="70.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.71s | 102,944.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.11s | 138,678.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 345.02s | 144,917.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.43s | 64,813.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.08s | 76,290.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 614.17s | 81,410.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 29.44s | 33,966.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.39s | 59,739.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 847.74s | 58,980.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.54s | 94,894.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.50s | 121,209.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.21s | 121,593.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.46s | 48,880.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.17s | 59,111.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 836.79s | 59,751.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.12s | 76,248.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.88s | 130,074.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 355.34s | 140,709.1 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-11T23:17:46Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,192.0 444.9,62.3 700.0,105.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.8 444.9,187.4 700.0,121.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.8" r="4" fill="#198754"/><circle cx="444.9" cy="187.4" r="4" fill="#198754"/><circle cx="700.0" cy="121.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.2 444.9,264.2 700.0,258.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,101.3 444.9,151.6 700.0,137.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="101.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.9 444.9,247.1 700.0,244.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.3 444.9,135.0 700.0,91.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.3" r="4" fill="#20c997"/><circle cx="444.9" cy="135.0" r="4" fill="#20c997"/><circle cx="700.0" cy="91.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.90s | 91,734.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 57.17s | 174,901.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 339.99s | 147,063.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.29s | 57,853.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.64s | 94,662.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 364.46s | 137,187.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.61s | 68,469.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 220.26s | 45,399.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1019.74s | 49,032.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.67s | 149,880.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.03s | 117,601.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.04s | 126,569.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.48s | 48,818.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.45s | 56,354.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 864.01s | 57,869.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.02s | 83,187.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.96s | 128,266.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 320.44s | 156,035.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,142.7 444.9,127.6 700.0,109.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,163.8 444.9,211.8 700.0,208.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="163.8" r="4" fill="#198754"/><circle cx="444.9" cy="211.8" r="4" fill="#198754"/><circle cx="700.0" cy="208.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.4 444.9,251.8 700.0,256.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,190.6 444.9,135.8 700.0,101.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="190.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.3 444.9,241.8 700.0,239.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.3 444.9,62.3 700.0,109.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="109.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.78s | 113,843.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.45s | 122,773.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 375.12s | 133,291.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.87s | 101,337.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.13s | 72,923.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 664.81s | 75,209.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.23s | 47,100.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 202.88s | 49,290.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1071.69s | 46,655.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.70s | 85,506.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.78s | 117,949.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 361.41s | 138,345.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.83s | 53,106.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.15s | 55,203.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 879.66s | 56,840.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.93s | 77,357.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 61.93s | 161,475.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.32s | 133,575.2 | PASS |

:::

:::

## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-03T02:13:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.3 444.9,151.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.3 444.9,219.6 700.0,216.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.3" r="4" fill="#198754"/><circle cx="444.9" cy="219.6" r="4" fill="#198754"/><circle cx="700.0" cy="216.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.8 444.9,252.3 700.0,251.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.8 444.9,165.5 700.0,164.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="165.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="164.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.0 444.9,251.8 700.0,244.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.9 444.9,160.4 700.0,153.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.9" r="4" fill="#20c997"/><circle cx="444.9" cy="160.4" r="4" fill="#20c997"/><circle cx="700.0" cy="153.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.84s | 113,109.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.09s | 123,315.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 273.49s | 182,822.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.42s | 64,838.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.25s | 77,367.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 629.97s | 79,368.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.32s | 51,770.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.44s | 55,418.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 894.34s | 55,907.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.61s | 116,117.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.00s | 113,642.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 438.40s | 114,051.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.42s | 48,964.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.35s | 55,755.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 820.06s | 60,971.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.47s | 69,122.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 85.42s | 117,067.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 410.67s | 121,752.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.7 444.9,116.4 700.0,124.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="116.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.4 444.9,216.4 700.0,213.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#198754"/><circle cx="444.9" cy="216.4" r="4" fill="#198754"/><circle cx="700.0" cy="213.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.7 444.9,255.3 700.0,236.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,134.3 700.0,62.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="134.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,210.0 444.9,242.8 700.0,245.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.7 444.9,106.6 700.0,149.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#20c997"/><circle cx="444.9" cy="106.6" r="4" fill="#20c997"/><circle cx="700.0" cy="149.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,764.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.77s | 137,419.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 378.48s | 132,106.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.07s | 66,352.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.17s | 74,532.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 655.82s | 76,240.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.71s | 46,061.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 199.69s | 50,078.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 807.03s | 61,955.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.83s | 171,409.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.28s | 126,135.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 292.39s | 171,004.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.73s | 78,560.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.60s | 57,938.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 886.44s | 56,405.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.80s | 92,549.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 69.66s | 143,550.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 429.27s | 116,477.6 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-03T02:01:51Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">169k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">226k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,199.5 444.9,149.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.5 444.9,232.3 700.0,227.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#198754"/><circle cx="444.9" cy="232.3" r="4" fill="#198754"/><circle cx="700.0" cy="227.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.4 444.9,253.7 700.0,259.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="259.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,200.1 444.9,92.0 700.0,159.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="200.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.2 444.9,265.5 700.0,206.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.6 444.9,155.4 700.0,156.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#20c997"/><circle cx="444.9" cy="155.4" r="4" fill="#20c997"/><circle cx="700.0" cy="156.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,009.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.51s | 139,834.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 243.52s | 205,319.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,108.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.37s | 77,298.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 616.27s | 81,132.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.57s | 48,621.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 163.32s | 61,229.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 873.49s | 57,241.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.85s | 101,564.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.66s | 182,932.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.38s | 131,794.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.88s | 50,306.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 191.03s | 52,347.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 518.52s | 96,427.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.49s | 80,083.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 73.95s | 135,232.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.61s | 134,187.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.3 444.9,126.0 700.0,132.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="132.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.5 444.9,210.2 700.0,205.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.5" r="4" fill="#198754"/><circle cx="444.9" cy="210.2" r="4" fill="#198754"/><circle cx="700.0" cy="205.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.9 444.9,242.1 700.0,233.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,138.8 700.0,140.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.9 444.9,228.5 700.0,242.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.0 444.9,153.6 700.0,69.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.0" r="4" fill="#20c997"/><circle cx="444.9" cy="153.6" r="4" fill="#20c997"/><circle cx="700.0" cy="69.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.61s | 94,286.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.00s | 129,876.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 397.91s | 125,656.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.14s | 76,120.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.99s | 77,528.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 619.33s | 80,732.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.69s | 53,498.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.22s | 57,731.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 795.14s | 62,881.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.90s | 169,491.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.99s | 121,960.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.90s | 121,094.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.48s | 87,092.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 151.06s | 66,198.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 872.22s | 57,324.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.66s | 85,785.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 88.69s | 112,758.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 302.80s | 165,128.2 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-01T23:27:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,146.9 444.9,62.3 700.0,88.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.7 444.9,188.5 700.0,103.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.7" r="4" fill="#198754"/><circle cx="444.9" cy="188.5" r="4" fill="#198754"/><circle cx="700.0" cy="103.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,167.9 444.9,213.0 700.0,213.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.7 444.9,96.6 700.0,73.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.9 444.9,229.3 700.0,165.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="165.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,114.0 444.9,105.7 700.0,79.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="114.0" r="4" fill="#20c997"/><circle cx="444.9" cy="105.7" r="4" fill="#20c997"/><circle cx="700.0" cy="79.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.80s | 84,760.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.37s | 122,899.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 449.17s | 111,316.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.34s | 74,951.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 151.50s | 66,004.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 478.37s | 104,521.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.28s | 75,284.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.91s | 54,971.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 915.95s | 54,588.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,644.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.08s | 107,433.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 423.78s | 117,985.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.39s | 44,658.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 209.94s | 47,632.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.27s | 76,537.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.04s | 99,601.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.79s | 103,316.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 434.51s | 115,072.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">132k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,150.7 444.9,85.3 700.0,107.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.9 444.9,137.1 700.0,181.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#198754"/><circle cx="444.9" cy="137.1" r="4" fill="#198754"/><circle cx="700.0" cy="181.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.7 444.9,206.1 700.0,207.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.0 444.9,97.3 700.0,91.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.4 444.9,219.4 700.0,139.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.7 444.9,118.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#20c997"/><circle cx="444.9" cy="118.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.32s | 81,135.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 90.96s | 109,936.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 500.08s | 99,983.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.22s | 61,659.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.80s | 87,105.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 741.57s | 67,424.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.57s | 46,356.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.16s | 56,765.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 890.67s | 56,137.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.10s | 99,039.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.56s | 104,647.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 466.81s | 107,109.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.58s | 44,285.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.47s | 50,898.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 581.80s | 85,939.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.82s | 67,490.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.09s | 95,157.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 416.44s | 120,063.9 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-03T02:15:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,188.5 444.9,126.4 700.0,122.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.6 444.9,136.5 700.0,204.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#198754"/><circle cx="444.9" cy="136.5" r="4" fill="#198754"/><circle cx="700.0" cy="204.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.6 444.9,245.0 700.0,196.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,88.7 444.9,124.3 700.0,131.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="88.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.1 444.9,217.0 700.0,236.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.5 444.9,62.3 700.0,110.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="110.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.37s | 87,935.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.87s | 125,197.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 392.45s | 127,403.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.70s | 68,045.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 83.90s | 119,185.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.04s | 78,364.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.97s | 50,085.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.04s | 54,043.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 600.05s | 83,326.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.76s | 147,863.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.05s | 126,507.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.41s | 122,126.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.44s | 64,758.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 141.23s | 70,806.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.19s | 59,088.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.29s | 81,347.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 61.08s | 163,717.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.14s | 134,718.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,102.2 444.9,62.3 700.0,76.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.3 444.9,102.5 700.0,182.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.3" r="4" fill="#198754"/><circle cx="444.9" cy="102.5" r="4" fill="#198754"/><circle cx="700.0" cy="182.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.6 444.9,219.3 700.0,220.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,108.3 444.9,91.6 700.0,89.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="108.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.7 444.9,219.1 700.0,226.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,103.2 444.9,85.8 700.0,76.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="103.2" r="4" fill="#20c997"/><circle cx="444.9" cy="85.8" r="4" fill="#20c997"/><circle cx="700.0" cy="76.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.61s | 116,198.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.45s | 136,150.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 387.97s | 128,876.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.54s | 79,732.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 86.17s | 116,051.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.05s | 76,213.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.37s | 51,628.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.13s | 57,758.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 874.10s | 57,202.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,173.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.28s | 121,534.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.21s | 122,785.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.84s | 53,072.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.78s | 57,875.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 919.41s | 54,382.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.64s | 115,727.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.39s | 124,398.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 387.52s | 129,026.6 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-01T23:05:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.7 444.9,159.2 700.0,151.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.6 444.9,152.3 700.0,221.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#198754"/><circle cx="444.9" cy="152.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.4 444.9,257.3 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.0 444.9,159.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,213.7 444.9,258.8 700.0,201.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="213.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="258.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.2 444.9,147.2 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#20c997"/><circle cx="444.9" cy="147.2" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,645.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.14s | 124,777.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.86s | 129,918.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.49s | 74,123.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.14s | 129,642.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 619.55s | 80,703.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,367.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.25s | 55,171.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 910.99s | 54,885.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.46s | 105,764.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.23s | 124,643.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 258.33s | 193,553.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,103.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.00s | 54,054.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 528.13s | 94,672.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,030.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.03s | 133,283.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.48s | 133,875.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,190.8 444.9,137.6 700.0,158.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="158.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.5 444.9,142.9 700.0,105.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.5" r="4" fill="#198754"/><circle cx="444.9" cy="142.9" r="4" fill="#198754"/><circle cx="700.0" cy="105.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.6 444.9,241.2 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.5 444.9,62.3 700.0,143.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.6 444.9,183.0 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.9 444.9,146.5 700.0,118.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#20c997"/><circle cx="444.9" cy="146.5" r="4" fill="#20c997"/><circle cx="700.0" cy="118.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,041.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.22s | 124,651.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 448.39s | 111,510.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,039.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.46s | 121,269.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 345.15s | 144,863.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,943.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.83s | 59,232.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 813.24s | 61,482.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.09s | 141,123.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.08s | 172,176.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.87s | 121,104.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.10s | 62,104.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.23s | 95,939.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.17s | 58,399.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,893.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.03s | 119,005.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.52s | 136,789.5 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-03T02:13:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,132.7 444.9,134.5 700.0,141.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.0 444.9,203.4 700.0,157.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#198754"/><circle cx="444.9" cy="203.4" r="4" fill="#198754"/><circle cx="700.0" cy="157.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.0 444.9,242.2 700.0,251.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="251.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.0 444.9,127.8 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="127.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,212.6 444.9,240.3 700.0,173.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="212.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="173.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.5 444.9,84.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#20c997"/><circle cx="444.9" cy="84.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.68s | 115,273.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.51s | 114,271.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 453.15s | 110,338.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.92s | 71,823.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.40s | 74,962.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 495.13s | 100,982.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.04s | 58,695.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.10s | 52,881.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1053.64s | 47,454.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.18s | 89,485.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.69s | 118,081.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.80s | 128,271.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.34s | 69,735.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.24s | 53,983.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 544.09s | 91,896.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.05s | 76,628.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.98s | 142,893.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 321.73s | 155,410.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,209.5 444.9,133.7 700.0,149.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="209.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="149.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.5 444.9,151.8 700.0,198.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.5" r="4" fill="#198754"/><circle cx="444.9" cy="151.8" r="4" fill="#198754"/><circle cx="700.0" cy="198.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.4 444.9,261.8 700.0,262.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="261.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.3 444.9,150.9 700.0,161.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="161.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.7 444.9,246.1 700.0,245.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.8 444.9,142.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#20c997"/><circle cx="444.9" cy="142.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.33s | 81,122.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.89s | 130,055.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 416.77s | 119,969.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.29s | 57,853.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 84.46s | 118,404.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 564.96s | 88,502.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.52s | 53,995.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 211.30s | 47,325.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1073.83s | 46,562.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.48s | 95,410.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.07s | 118,945.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 445.18s | 112,314.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.10s | 47,388.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.06s | 57,451.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 865.77s | 57,751.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,641.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.35s | 124,452.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 283.71s | 176,234.4 | PASS |

:::

:::

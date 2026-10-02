## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-02T23:28:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.1 444.9,157.0 700.0,149.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="157.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="149.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.1 444.9,203.4 700.0,207.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#198754"/><circle cx="444.9" cy="203.4" r="4" fill="#198754"/><circle cx="700.0" cy="207.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.7 444.9,251.1 700.0,247.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.6 444.9,138.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.5 444.9,241.6 700.0,247.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.1 444.9,153.2 700.0,135.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.1" r="4" fill="#20c997"/><circle cx="444.9" cy="153.2" r="4" fill="#20c997"/><circle cx="700.0" cy="135.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.98s | 111,408.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.17s | 117,412.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.46s | 122,111.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.06s | 71,138.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.21s | 86,799.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 595.83s | 83,917.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,339.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.73s | 55,331.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 865.28s | 57,785.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.06s | 110,411.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.06s | 129,772.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 278.00s | 179,853.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.71s | 63,657.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.42s | 61,567.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 870.32s | 57,449.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,667.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.39s | 119,921.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 379.80s | 131,649.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">179k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">239k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,197.8 444.9,62.3 700.0,173.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="173.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.7 444.9,239.0 700.0,228.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.7" r="4" fill="#198754"/><circle cx="444.9" cy="239.0" r="4" fill="#198754"/><circle cx="700.0" cy="228.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.3 444.9,253.4 700.0,268.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="268.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,205.8 444.9,187.5 700.0,177.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="205.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="187.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="177.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,274.9 444.9,263.7 700.0,258.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="274.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="263.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,246.4 444.9,186.4 700.0,174.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#20c997"/><circle cx="444.9" cy="186.4" r="4" fill="#20c997"/><circle cx="700.0" cy="174.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.16s | 109,122.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 46.09s | 216,962.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.51s | 128,367.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.19s | 75,838.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.97s | 76,353.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 592.21s | 84,430.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.05s | 47,508.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 154.13s | 64,878.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.52s | 53,161.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.73s | 102,764.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.20s | 117,370.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 399.45s | 125,170.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.93s | 47,773.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.25s | 56,736.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 816.01s | 61,273.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.19s | 70,487.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.58s | 118,236.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 391.62s | 127,676.1 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-02T23:17:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,188.9 444.9,132.3 700.0,157.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="132.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="157.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.0 444.9,195.8 700.0,184.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#198754"/><circle cx="444.9" cy="195.8" r="4" fill="#198754"/><circle cx="700.0" cy="184.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.1 444.9,239.2 700.0,220.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.0 444.9,62.3 700.0,150.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="150.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.6 444.9,248.5 700.0,244.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,230.6 444.9,151.4 700.0,126.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#20c997"/><circle cx="444.9" cy="151.4" r="4" fill="#20c997"/><circle cx="700.0" cy="126.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.16s | 98,376.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 73.25s | 136,518.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 417.90s | 119,644.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,015.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 106.72s | 93,705.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 494.34s | 101,144.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.86s | 67,294.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 154.95s | 64,538.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 648.91s | 77,052.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.61s | 94,250.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.45s | 183,648.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.80s | 124,441.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.95s | 50,115.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.62s | 58,268.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 823.85s | 60,690.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.23s | 70,274.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.89s | 123,621.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 356.14s | 140,395.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.7 444.9,81.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="81.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,232.0 444.9,205.0 700.0,196.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="232.0" r="4" fill="#198754"/><circle cx="444.9" cy="205.0" r="4" fill="#198754"/><circle cx="700.0" cy="196.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.4 444.9,241.7 700.0,247.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,172.4 444.9,147.9 700.0,149.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="172.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,205.5 444.9,242.9 700.0,243.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="205.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.4 444.9,134.8 700.0,131.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#20c997"/><circle cx="444.9" cy="134.8" r="4" fill="#20c997"/><circle cx="700.0" cy="131.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.35s | 106,951.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 60.68s | 164,809.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 281.67s | 177,514.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.91s | 67,064.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.22s | 84,586.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 554.80s | 90,122.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.06s | 43,361.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 164.65s | 60,735.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.80s | 56,701.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.45s | 105,831.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.13s | 121,752.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.47s | 120,634.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.86s | 84,295.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 166.78s | 59,959.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 843.41s | 59,283.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.07s | 76,534.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.73s | 130,332.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.23s | 132,546.2 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-02T00:13:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,79.2 444.9,156.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="79.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="156.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,190.3 700.0,189.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="190.3" r="4" fill="#198754"/><circle cx="700.0" cy="189.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.4 444.9,223.2 700.0,191.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="191.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.4 444.9,106.1 700.0,153.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="106.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.7 444.9,243.6 700.0,228.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,145.3 444.9,149.2 700.0,87.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#20c997"/><circle cx="444.9" cy="149.2" r="4" fill="#20c997"/><circle cx="700.0" cy="87.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.88s | 126,871.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 113.02s | 88,483.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 369.64s | 135,266.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.45s | 60,790.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 139.29s | 71,790.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 693.09s | 72,141.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.14s | 58,346.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.32s | 55,457.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 699.85s | 71,444.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.26s | 97,513.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.08s | 113,538.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 554.58s | 90,159.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.84s | 45,787.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 220.69s | 45,311.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 946.06s | 52,850.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.63s | 94,073.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 108.52s | 92,146.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 407.64s | 122,658.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">125k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,135.3 444.9,100.2 700.0,87.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="100.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="87.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.0 444.9,171.6 700.0,159.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.0" r="4" fill="#198754"/><circle cx="444.9" cy="171.6" r="4" fill="#198754"/><circle cx="700.0" cy="159.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,215.9 444.9,200.4 700.0,211.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="215.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="200.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,86.9 444.9,84.9 700.0,71.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="86.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="71.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.6 444.9,216.5 700.0,216.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,137.0 444.9,97.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#20c997"/><circle cx="444.9" cy="97.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.99s | 83,388.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 102.00s | 98,044.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 482.67s | 103,590.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.86s | 63,043.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.57s | 68,227.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 680.63s | 73,461.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.11s | 49,738.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.88s | 56,219.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 968.64s | 51,618.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.65s | 103,626.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.73s | 104,459.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 454.13s | 110,101.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.06s | 49,848.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 202.03s | 49,498.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1013.82s | 49,318.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.09s | 82,706.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.83s | 99,171.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 438.99s | 113,898.8 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-02T23:28:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.3 444.9,75.2 700.0,101.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,179.4 444.9,182.2 700.0,120.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="179.4" r="4" fill="#198754"/><circle cx="444.9" cy="182.2" r="4" fill="#198754"/><circle cx="700.0" cy="120.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.7 444.9,217.7 700.0,173.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="173.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,119.3 444.9,62.3 700.0,94.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="119.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.4 444.9,212.0 700.0,210.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="212.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="210.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.7 444.9,112.8 700.0,86.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.7" r="4" fill="#20c997"/><circle cx="444.9" cy="112.8" r="4" fill="#20c997"/><circle cx="700.0" cy="86.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,491.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.19s | 140,467.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 395.44s | 126,442.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.89s | 84,125.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.06s | 82,603.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 430.05s | 116,266.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.74s | 56,379.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 157.62s | 63,443.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 574.06s | 87,098.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.57s | 116,618.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 67.81s | 147,475.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 384.55s | 130,023.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.98s | 50,055.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.38s | 66,496.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 740.76s | 67,498.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,328.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.24s | 120,137.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.74s | 134,501.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">183k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">243k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,161.3 444.9,163.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,261.5 444.9,241.6 700.0,237.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#198754"/><circle cx="444.9" cy="241.6" r="4" fill="#198754"/><circle cx="700.0" cy="237.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.0 444.9,270.2 700.0,261.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="270.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,205.2 444.9,183.8 700.0,181.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="205.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="183.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="181.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.5 444.9,265.9 700.0,256.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,246.4 444.9,185.4 700.0,127.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#20c997"/><circle cx="444.9" cy="185.4" r="4" fill="#20c997"/><circle cx="700.0" cy="127.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.09s | 140,984.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.01s | 138,877.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 225.87s | 221,362.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.76s | 59,662.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.85s | 75,842.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.00s | 78,989.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.10s | 58,472.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.99s | 52,634.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 839.34s | 59,570.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.49s | 105,340.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.49s | 122,709.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 401.99s | 124,381.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.25s | 54,785.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.27s | 56,094.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 780.73s | 64,043.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.91s | 71,895.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.34s | 121,441.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 296.18s | 168,818.0 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-02T23:21:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,136.1 444.9,62.3 700.0,146.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,204.5 700.0,211.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="204.5" r="4" fill="#198754"/><circle cx="700.0" cy="211.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.7 444.9,266.8 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.9 444.9,62.3 700.0,63.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="63.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.3 444.9,235.6 700.0,185.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.2 444.9,141.1 700.0,78.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#20c997"/><circle cx="444.9" cy="141.1" r="4" fill="#20c997"/><circle cx="700.0" cy="78.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.50s | 133,244.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 54.74s | 182,685.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 396.08s | 126,238.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.84s | 67,371.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.42s | 87,400.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 602.33s | 83,010.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.52s | 60,518.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.98s | 45,666.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.65s | 57,626.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.67s | 115,287.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.73s | 182,718.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 274.54s | 182,122.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.26s | 49,355.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.24s | 66,562.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 500.04s | 99,991.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.92s | 62,810.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.98s | 129,905.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 291.17s | 171,719.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.3 444.9,73.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="73.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.2 444.9,190.9 700.0,185.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.2" r="4" fill="#198754"/><circle cx="444.9" cy="190.9" r="4" fill="#198754"/><circle cx="700.0" cy="185.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.2 444.9,229.9 700.0,227.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.3 444.9,96.9 700.0,78.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="78.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.3 444.9,193.5 700.0,206.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="193.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.1 444.9,112.9 700.0,84.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.1" r="4" fill="#20c997"/><circle cx="444.9" cy="112.9" r="4" fill="#20c997"/><circle cx="700.0" cy="84.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.45s | 95,730.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.79s | 143,278.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 334.53s | 149,464.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,212.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.66s | 78,952.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 608.73s | 82,138.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.66s | 50,854.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.55s | 57,619.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 848.75s | 58,910.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,585.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.64s | 130,475.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 355.26s | 140,743.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.57s | 48,605.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 128.97s | 77,534.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 712.29s | 70,196.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.43s | 80,482.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.14s | 121,743.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 364.64s | 137,121.5 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-02T23:32:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.5 444.9,115.2 700.0,102.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.6 444.9,153.5 700.0,173.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.6" r="4" fill="#198754"/><circle cx="444.9" cy="153.5" r="4" fill="#198754"/><circle cx="700.0" cy="173.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.5 444.9,248.6 700.0,241.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,72.5 444.9,120.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="72.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.1 444.9,229.7 700.0,213.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,151.3 444.9,90.0 700.0,91.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="151.3" r="4" fill="#20c997"/><circle cx="444.9" cy="90.0" r="4" fill="#20c997"/><circle cx="700.0" cy="91.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.47s | 87,176.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.87s | 116,456.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 405.69s | 123,246.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.80s | 59,541.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 103.98s | 96,175.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 583.71s | 85,659.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.01s | 39,990.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 218.38s | 45,792.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1009.65s | 49,522.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.19s | 139,062.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.92s | 113,733.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 346.03s | 144,497.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.88s | 52,954.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.23s | 55,795.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 775.70s | 64,458.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.28s | 97,323.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.03s | 129,811.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.25s | 129,116.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,142.8 444.9,109.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.6 444.9,207.3 700.0,202.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#198754"/><circle cx="444.9" cy="207.3" r="4" fill="#198754"/><circle cx="700.0" cy="202.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.8 444.9,241.7 700.0,193.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="193.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,171.1 444.9,137.5 700.0,133.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="171.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="133.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,234.5 700.0,224.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.2 444.9,109.5 700.0,103.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.2" r="4" fill="#20c997"/><circle cx="444.9" cy="109.5" r="4" fill="#20c997"/><circle cx="700.0" cy="103.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.29s | 107,665.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.26s | 126,165.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 327.23s | 152,796.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.20s | 65,798.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.80s | 71,532.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.46s | 74,464.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.72s | 42,158.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.24s | 52,290.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 628.84s | 79,511.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,852.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.36s | 110,663.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 442.91s | 112,889.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.76s | 45,955.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.56s | 56,320.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 808.57s | 61,837.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.24s | 75,523.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.17s | 126,310.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.70s | 129,633.8 | PASS |

:::

:::

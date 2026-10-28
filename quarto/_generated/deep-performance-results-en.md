## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-28T23:45:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,188.4 444.9,144.6 700.0,152.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="144.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="152.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,238.0 444.9,219.2 700.0,217.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="238.0" r="4" fill="#198754"/><circle cx="444.9" cy="219.2" r="4" fill="#198754"/><circle cx="700.0" cy="217.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.3 444.9,196.8 700.0,192.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="196.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="192.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,103.7 444.9,163.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="103.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.2 444.9,203.5 700.0,229.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.3 444.9,120.9 700.0,134.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.3" r="4" fill="#20c997"/><circle cx="444.9" cy="120.9" r="4" fill="#20c997"/><circle cx="700.0" cy="134.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,856.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.67s | 127,114.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 410.55s | 121,788.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.45s | 64,733.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.38s | 77,292.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 637.15s | 78,474.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,236.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 108.41s | 92,244.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 524.61s | 95,308.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.47s | 154,464.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.34s | 114,496.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 274.58s | 182,097.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.67s | 56,605.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 113.88s | 87,808.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 709.40s | 70,482.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.17s | 75,918.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.95s | 142,951.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.87s | 134,096.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">172k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">229k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,154.4 444.9,129.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="129.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.6 444.9,235.7 700.0,232.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#198754"/><circle cx="444.9" cy="235.7" r="4" fill="#198754"/><circle cx="700.0" cy="232.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.1 444.9,225.9 700.0,262.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="225.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.1 444.9,185.3 700.0,177.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="185.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="177.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,272.5 444.9,222.6 700.0,259.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="272.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="259.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,236.3 444.9,184.6 700.0,167.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#20c997"/><circle cx="444.9" cy="184.6" r="4" fill="#20c997"/><circle cx="700.0" cy="167.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.26s | 137,703.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 63.85s | 156,604.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 240.48s | 207,917.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.33s | 81,122.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.13s | 75,683.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.50s | 78,554.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.20s | 49,505.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 120.26s | 83,155.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 906.96s | 55,129.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.87s | 101,286.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.63s | 114,121.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 415.23s | 120,415.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.98s | 47,653.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 116.67s | 85,711.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 866.21s | 57,722.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,272.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 87.24s | 114,626.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.89s | 127,911.6 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-28T23:36:04Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">206k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,205.4 444.9,126.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.2 444.9,219.6 700.0,216.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#198754"/><circle cx="444.9" cy="219.6" r="4" fill="#198754"/><circle cx="700.0" cy="216.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.0 444.9,248.0 700.0,217.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.6 444.9,154.7 700.0,142.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.6 444.9,231.7 700.0,232.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.0 444.9,148.1 700.0,180.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#20c997"/><circle cx="444.9" cy="148.1" r="4" fill="#20c997"/><circle cx="700.0" cy="180.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.22s | 89,110.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 69.82s | 143,219.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 266.55s | 187,584.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,938.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.02s | 79,350.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.90s | 81,579.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.48s | 48,825.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.06s | 59,860.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 617.49s | 80,972.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.06s | 124,084.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.64s | 124,015.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 378.23s | 132,194.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.42s | 57,395.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 140.71s | 71,066.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 709.59s | 70,463.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.46s | 95,620.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.77s | 128,577.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 470.76s | 106,210.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.1 444.9,86.2 700.0,132.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="132.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,173.1 444.9,204.8 700.0,195.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="173.1" r="4" fill="#198754"/><circle cx="444.9" cy="204.8" r="4" fill="#198754"/><circle cx="700.0" cy="195.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.2 444.9,251.8 700.0,203.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="203.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.6 444.9,62.3 700.0,151.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.4 444.9,248.8 700.0,238.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.1 444.9,158.3 700.0,67.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.1" r="4" fill="#20c997"/><circle cx="444.9" cy="158.3" r="4" fill="#20c997"/><circle cx="700.0" cy="67.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.92s | 100,806.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 60.59s | 165,054.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 372.14s | 134,356.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.31s | 107,388.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.73s | 86,404.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 539.84s | 92,620.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.62s | 50,960.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.07s | 55,227.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 572.30s | 87,366.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.60s | 116,346.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 55.27s | 180,939.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.18s | 121,897.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.94s | 62,735.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.96s | 57,155.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 778.70s | 64,209.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.71s | 72,918.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.30s | 117,231.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 281.95s | 177,336.4 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-27T23:42:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,163.5 444.9,135.3 700.0,125.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="163.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="135.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.4 444.9,193.5 700.0,123.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#198754"/><circle cx="444.9" cy="193.5" r="4" fill="#198754"/><circle cx="700.0" cy="123.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.3 444.9,202.3 700.0,209.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="202.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="209.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,75.6 444.9,62.3 700.0,69.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="75.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="69.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.1 444.9,215.6 700.0,228.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.2 444.9,142.1 700.0,133.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.2" r="4" fill="#20c997"/><circle cx="444.9" cy="142.1" r="4" fill="#20c997"/><circle cx="700.0" cy="133.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.63s | 85,955.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.92s | 100,075.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 477.12s | 104,795.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.63s | 63,963.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 141.04s | 70,899.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 470.58s | 106,252.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.52s | 46,468.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.40s | 66,490.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 793.18s | 63,037.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.69s | 130,005.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.17s | 136,666.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 376.15s | 132,924.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.96s | 43,544.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 167.13s | 59,833.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 940.61s | 53,157.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.37s | 65,057.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 103.44s | 96,673.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 495.39s | 100,929.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,150.9 444.9,94.0 700.0,115.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.8 444.9,177.5 700.0,182.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.8" r="4" fill="#198754"/><circle cx="444.9" cy="177.5" r="4" fill="#198754"/><circle cx="700.0" cy="182.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.4 444.9,216.3 700.0,210.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.0 444.9,115.1 700.0,99.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="99.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.1 444.9,223.8 700.0,221.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.6 444.9,62.3 700.0,64.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="64.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.04s | 83,049.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.95s | 108,759.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 504.33s | 99,141.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.84s | 72,275.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 140.69s | 71,077.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 727.48s | 68,730.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.79s | 48,102.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.66s | 53,574.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 887.77s | 56,320.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.98s | 100,160.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 100.76s | 99,241.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.41s | 106,064.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.18s | 45,087.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 199.31s | 50,173.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 978.35s | 51,106.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,612.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.26s | 123,057.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 409.51s | 122,095.6 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-28T23:53:31Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,168.2 444.9,125.7 700.0,132.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="132.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.5 444.9,188.1 700.0,195.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.5" r="4" fill="#198754"/><circle cx="444.9" cy="188.1" r="4" fill="#198754"/><circle cx="700.0" cy="195.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.9 444.9,237.6 700.0,237.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.6 444.9,115.7 700.0,117.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,234.9 700.0,209.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.6 444.9,133.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.6" r="4" fill="#20c997"/><circle cx="444.9" cy="133.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.42s | 95,941.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.06s | 120,399.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 429.57s | 116,396.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.79s | 67,631.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.28s | 84,543.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 621.20s | 80,489.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.66s | 48,409.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.41s | 56,051.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 894.06s | 55,924.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.02s | 99,790.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.25s | 126,176.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.30s | 124,906.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.18s | 47,203.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.68s | 57,577.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 692.74s | 72,177.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.72s | 85,353.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 86.08s | 116,171.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 318.65s | 156,913.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,147.1 444.9,151.5 700.0,119.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="147.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.2 444.9,194.0 700.0,218.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.2" r="4" fill="#198754"/><circle cx="444.9" cy="194.0" r="4" fill="#198754"/><circle cx="700.0" cy="218.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.9 444.9,259.7 700.0,248.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.6 444.9,62.3 700.0,180.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="180.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.3 444.9,251.9 700.0,190.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.5 444.9,156.1 700.0,144.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.5" r="4" fill="#20c997"/><circle cx="444.9" cy="156.1" r="4" fill="#20c997"/><circle cx="700.0" cy="144.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.93s | 126,039.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.25s | 123,078.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 345.82s | 144,585.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.27s | 107,886.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 105.74s | 94,574.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 641.76s | 77,910.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.93s | 59,070.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 197.93s | 50,521.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 860.09s | 58,133.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.53s | 104,909.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.66s | 182,962.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 481.48s | 103,847.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.24s | 54,812.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.32s | 55,767.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 515.05s | 97,078.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.06s | 82,884.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.32s | 120,017.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.16s | 128,153.9 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-28T23:40:41Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,204.8 444.9,114.8 700.0,147.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="204.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,198.8 444.9,201.1 700.0,208.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="198.8" r="4" fill="#198754"/><circle cx="444.9" cy="201.1" r="4" fill="#198754"/><circle cx="700.0" cy="208.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.9 444.9,197.4 700.0,248.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="197.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,154.1 444.9,69.3 700.0,138.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="154.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="69.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.3 444.9,246.4 700.0,166.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="166.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,226.5 444.9,135.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="226.5" r="4" fill="#20c997"/><circle cx="444.9" cy="135.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.95s | 83,689.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 70.69s | 141,470.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.06s | 120,465.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.43s | 87,527.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.18s | 86,071.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.88s | 81,449.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.67s | 56,599.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 113.08s | 88,436.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 902.67s | 55,390.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.61s | 116,211.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 58.57s | 170,741.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.95s | 126,279.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.28s | 51,856.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.71s | 56,911.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 463.01s | 107,989.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.34s | 69,735.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.96s | 128,266.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 285.31s | 175,246.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,151.9 444.9,84.0 700.0,71.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.6 444.9,182.4 700.0,159.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#198754"/><circle cx="444.9" cy="182.4" r="4" fill="#198754"/><circle cx="700.0" cy="159.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.9 444.9,157.0 700.0,219.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="157.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.9 444.9,107.6 700.0,90.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="90.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.3 444.9,190.6 700.0,207.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="190.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,155.5 444.9,92.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="155.5" r="4" fill="#20c997"/><circle cx="444.9" cy="92.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.71s | 93,335.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.16s | 127,942.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 372.77s | 134,131.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.29s | 61,387.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.57s | 77,776.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 558.18s | 89,576.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.33s | 42,866.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 110.24s | 90,707.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 850.77s | 58,769.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.20s | 89,261.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.28s | 115,907.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 401.84s | 124,427.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.87s | 45,720.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 135.84s | 73,614.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 769.06s | 65,014.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.93s | 91,516.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.02s | 123,429.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 359.67s | 139,015.5 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-27T23:33:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.7 444.9,154.0 700.0,94.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="94.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.5 444.9,147.3 700.0,214.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.5" r="4" fill="#198754"/><circle cx="444.9" cy="147.3" r="4" fill="#198754"/><circle cx="700.0" cy="214.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,273.8 444.9,254.6 700.0,255.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="273.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.0 444.9,81.6 700.0,81.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="81.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.0 444.9,198.7 700.0,236.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.2 444.9,126.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#20c997"/><circle cx="444.9" cy="126.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.21s | 97,962.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.33s | 117,185.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 320.53s | 155,993.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.89s | 59,199.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.29s | 121,522.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 640.87s | 78,018.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.24s | 39,624.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 192.26s | 52,011.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 965.08s | 51,809.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,526.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 60.96s | 164,042.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 304.84s | 164,022.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.46s | 46,594.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 113.35s | 88,220.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 786.52s | 63,571.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.75s | 93,057.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.15s | 134,861.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 283.24s | 176,531.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">164k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">218k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,202.3 444.9,62.3 700.0,116.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="202.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,252.8 444.9,203.5 700.0,225.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="252.8" r="4" fill="#198754"/><circle cx="444.9" cy="203.5" r="4" fill="#198754"/><circle cx="700.0" cy="225.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,283.8 444.9,275.9 700.0,255.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="283.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="275.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,207.8 444.9,163.4 700.0,168.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="207.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="168.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.2 444.9,248.4 700.0,198.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.6 444.9,107.5 700.0,168.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#20c997"/><circle cx="444.9" cy="107.5" r="4" fill="#20c997"/><circle cx="700.0" cy="168.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.35s | 96,590.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 50.39s | 198,440.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 314.99s | 158,737.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.72s | 59,797.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.52s | 95,676.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.85s | 79,891.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.84s | 37,253.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 232.60s | 42,991.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 866.19s | 57,723.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,524.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.11s | 124,833.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.51s | 121,504.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.89s | 47,879.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.77s | 62,983.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 503.80s | 99,245.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.12s | 82,521.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 60.42s | 165,499.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 411.45s | 121,520.6 | PASS |

:::

:::

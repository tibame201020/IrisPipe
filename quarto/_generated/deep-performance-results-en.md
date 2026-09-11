## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-11T22:17:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">172k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.9 444.9,124.6 700.0,128.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="124.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.8 444.9,170.5 700.0,198.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.8" r="4" fill="#198754"/><circle cx="444.9" cy="170.5" r="4" fill="#198754"/><circle cx="700.0" cy="198.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.2 444.9,236.8 700.0,215.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,115.3 700.0,130.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.3 444.9,229.4 700.0,233.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.8 444.9,159.0 700.0,103.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.8" r="4" fill="#20c997"/><circle cx="444.9" cy="159.0" r="4" fill="#20c997"/><circle cx="700.0" cy="103.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.00s | 100,030.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.72s | 120,885.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 420.42s | 118,929.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.25s | 70,190.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.82s | 94,498.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.47s | 78,312.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.99s | 55,595.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.33s | 56,390.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 730.24s | 68,470.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.38s | 156,666.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.25s | 126,179.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 426.20s | 117,315.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.84s | 50,390.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 164.92s | 60,635.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.84s | 58,285.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.91s | 83,970.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.90s | 101,108.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.36s | 132,851.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,110.8 700.0,110.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="110.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.7 444.9,202.7 700.0,196.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.7" r="4" fill="#198754"/><circle cx="444.9" cy="202.7" r="4" fill="#198754"/><circle cx="700.0" cy="196.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.9 444.9,232.8 700.0,237.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,112.2 444.9,137.6 700.0,126.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="112.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.5 444.9,235.3 700.0,212.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.0 444.9,186.0 700.0,119.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#20c997"/><circle cx="444.9" cy="186.0" r="4" fill="#20c997"/><circle cx="700.0" cy="119.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.34s | 157,753.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.10s | 129,701.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.12s | 130,168.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 18.94s | 52,806.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.69s | 76,519.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 623.91s | 80,139.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.76s | 53,296.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.15s | 59,120.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 888.54s | 56,272.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.76s | 128,849.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.59s | 114,161.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.25s | 120,701.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,025.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.40s | 57,670.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 703.00s | 71,123.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.61s | 73,486.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 116.06s | 86,160.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 401.53s | 124,523.7 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-11T22:10:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.2 444.9,62.3 700.0,123.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.9 444.9,200.1 700.0,193.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#198754"/><circle cx="444.9" cy="200.1" r="4" fill="#198754"/><circle cx="700.0" cy="193.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.1 444.9,228.8 700.0,228.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,89.6 444.9,96.0 700.0,111.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="89.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.9 444.9,236.0 700.0,219.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.4 444.9,126.9 700.0,83.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.4" r="4" fill="#20c997"/><circle cx="444.9" cy="126.9" r="4" fill="#20c997"/><circle cx="700.0" cy="83.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.28s | 97,247.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.66s | 157,077.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 410.60s | 121,771.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.39s | 80,710.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.70s | 77,701.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.93s | 81,574.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.89s | 52,932.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 163.52s | 61,153.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 816.68s | 61,223.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.08s | 141,322.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.66s | 137,634.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.71s | 128,961.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.18s | 49,566.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.45s | 56,996.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 749.15s | 66,742.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.50s | 74,074.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.45s | 119,838.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 344.62s | 145,088.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,131.5 444.9,75.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="75.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.6 444.9,186.2 700.0,183.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#198754"/><circle cx="444.9" cy="186.2" r="4" fill="#198754"/><circle cx="700.0" cy="183.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.0 444.9,233.3 700.0,230.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.8 444.9,79.3 700.0,80.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="79.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.6 444.9,206.6 700.0,185.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="206.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.6 444.9,107.2 700.0,139.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.6" r="4" fill="#20c997"/><circle cx="444.9" cy="107.2" r="4" fill="#20c997"/><circle cx="700.0" cy="139.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.65s | 103,605.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.79s | 131,936.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.10s | 138,850.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.30s | 65,363.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.03s | 75,742.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 648.82s | 77,062.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.45s | 51,421.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.13s | 51,778.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 940.18s | 53,181.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.55s | 94,822.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.81s | 130,189.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 385.39s | 129,738.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.75s | 50,627.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.97s | 65,373.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 655.82s | 76,240.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.32s | 81,149.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.24s | 115,956.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 502.63s | 99,477.0 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-10T22:28:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,108.7 444.9,95.1 700.0,77.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="77.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.0 444.9,220.5 700.0,171.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.0" r="4" fill="#198754"/><circle cx="444.9" cy="220.5" r="4" fill="#198754"/><circle cx="700.0" cy="171.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.2 444.9,207.2 700.0,199.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.9 444.9,73.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.9 444.9,201.2 700.0,201.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="201.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.5 444.9,77.1 700.0,68.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.5" r="4" fill="#20c997"/><circle cx="444.9" cy="77.1" r="4" fill="#20c997"/><circle cx="700.0" cy="68.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,449.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 100.94s | 99,069.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 470.00s | 106,382.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.63s | 63,987.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 211.54s | 47,271.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 739.69s | 67,595.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.56s | 48,642.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.47s | 52,779.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 890.21s | 56,166.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,706.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.78s | 107,785.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 444.03s | 112,605.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.60s | 46,298.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.03s | 55,238.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 908.27s | 55,049.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,863.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 93.90s | 106,497.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 453.61s | 110,226.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.9 444.9,87.5 700.0,83.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="83.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.4 444.9,165.5 700.0,180.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.4" r="4" fill="#198754"/><circle cx="444.9" cy="165.5" r="4" fill="#198754"/><circle cx="700.0" cy="180.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.4 444.9,212.1 700.0,200.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,105.7 444.9,62.3 700.0,100.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="105.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,210.3 444.9,193.4 700.0,212.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="210.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="193.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.7 444.9,221.5 700.0,89.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.7" r="4" fill="#20c997"/><circle cx="444.9" cy="221.5" r="4" fill="#20c997"/><circle cx="700.0" cy="89.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.76s | 92,919.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 97.42s | 102,649.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 479.80s | 104,209.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.56s | 60,386.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 142.27s | 70,288.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 780.52s | 64,060.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.00s | 45,458.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 196.17s | 50,976.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 894.52s | 55,895.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,066.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.42s | 113,094.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 514.85s | 97,114.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.34s | 51,695.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.34s | 58,704.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 986.01s | 50,709.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 21.28s | 46,990.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 212.46s | 47,068.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 491.89s | 101,647.9 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-11T22:18:30Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,129.1 444.9,95.3 700.0,65.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,197.3 444.9,164.8 700.0,166.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="197.3" r="4" fill="#198754"/><circle cx="444.9" cy="164.8" r="4" fill="#198754"/><circle cx="700.0" cy="166.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,200.3 444.9,158.7 700.0,215.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="200.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="158.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="215.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.6 444.9,62.3 700.0,72.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,216.6 444.9,196.6 700.0,207.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="216.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="196.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.7 444.9,69.9 700.0,62.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.7" r="4" fill="#20c997"/><circle cx="444.9" cy="69.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.09s | 99,157.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.64s | 115,424.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 385.25s | 129,786.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.08s | 66,330.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.05s | 81,935.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 614.74s | 81,335.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.42s | 64,838.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 117.79s | 84,895.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.59s | 57,630.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.25s | 108,061.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.15s | 131,326.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.30s | 126,485.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.54s | 57,025.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 150.10s | 66,623.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 812.10s | 61,568.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.95s | 77,208.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.33s | 127,656.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 381.14s | 131,184.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,132.4 444.9,62.3 700.0,73.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="132.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="73.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.6 444.9,162.4 700.0,185.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.6" r="4" fill="#198754"/><circle cx="444.9" cy="162.4" r="4" fill="#198754"/><circle cx="700.0" cy="185.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.4 444.9,235.4 700.0,248.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.5 444.9,84.4 700.0,89.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,226.7 700.0,221.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.0 444.9,106.5 700.0,78.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#20c997"/><circle cx="444.9" cy="106.5" r="4" fill="#20c997"/><circle cx="700.0" cy="78.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,473.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.77s | 143,328.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.36s | 137,603.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.54s | 64,337.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 110.26s | 90,695.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.33s | 78,452.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.01s | 47,603.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.05s | 52,341.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1097.30s | 45,566.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.15s | 98,531.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 75.92s | 131,715.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 388.18s | 128,806.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.10s | 52,353.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.76s | 56,894.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 836.31s | 59,786.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,960.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.29s | 120,066.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 370.82s | 134,836.3 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-11T22:09:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.2 444.9,62.3 700.0,102.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,176.5 444.9,163.0 700.0,145.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="176.5" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="145.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.2 444.9,219.1 700.0,227.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,129.3 444.9,80.7 700.0,149.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="129.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.7 444.9,219.1 700.0,200.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.9 444.9,72.7 700.0,65.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.9" r="4" fill="#20c997"/><circle cx="444.9" cy="72.7" r="4" fill="#20c997"/><circle cx="700.0" cy="65.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.53s | 94,993.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 72.10s | 138,692.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 422.99s | 118,206.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.41s | 80,593.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.30s | 87,492.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 519.88s | 96,176.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 27.38s | 36,520.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.70s | 58,927.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 911.92s | 54,829.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.56s | 104,624.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.33s | 129,310.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 530.39s | 94,270.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.99s | 55,598.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 169.62s | 58,955.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 728.62s | 68,622.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,947.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.96s | 133,404.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.99s | 136,989.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.5 444.9,101.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="101.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,189.0 700.0,183.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="189.0" r="4" fill="#198754"/><circle cx="700.0" cy="183.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.7 444.9,234.6 700.0,231.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="231.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.0 444.9,107.0 700.0,109.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="107.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.8 444.9,225.8 700.0,226.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.0 444.9,112.2 700.0,76.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#20c997"/><circle cx="444.9" cy="112.2" r="4" fill="#20c997"/><circle cx="700.0" cy="76.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,181.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.32s | 124,498.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 344.29s | 145,226.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.32s | 65,265.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.62s | 77,751.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 618.18s | 80,882.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.27s | 44,905.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 187.11s | 53,445.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 906.65s | 55,148.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,507.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.37s | 121,399.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.13s | 119,866.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.60s | 48,546.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.02s | 58,133.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 865.51s | 57,769.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,859.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.28s | 118,650.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 363.05s | 137,722.5 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-10T22:17:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,116.1 444.9,87.7 700.0,106.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="87.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="106.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.5 444.9,183.1 700.0,169.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.5" r="4" fill="#198754"/><circle cx="444.9" cy="183.1" r="4" fill="#198754"/><circle cx="700.0" cy="169.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.3 444.9,177.6 700.0,238.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="177.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.9 444.9,104.0 700.0,86.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.0 444.9,216.8 700.0,224.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.3 444.9,80.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.3" r="4" fill="#20c997"/><circle cx="444.9" cy="80.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.27s | 107,933.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.01s | 121,930.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 442.80s | 112,918.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.16s | 61,900.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 133.55s | 74,880.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.39s | 81,514.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 25.14s | 39,783.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 128.81s | 77,632.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1053.59s | 47,456.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,174.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.81s | 113,882.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 407.21s | 122,786.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.61s | 53,728.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.51s | 58,303.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 915.10s | 54,638.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.62s | 79,245.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.80s | 125,308.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.82s | 134,474.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,127.6 444.9,62.3 700.0,65.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="127.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.4 444.9,204.4 700.0,184.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.4" r="4" fill="#198754"/><circle cx="444.9" cy="204.4" r="4" fill="#198754"/><circle cx="700.0" cy="184.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.9 444.9,224.3 700.0,252.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.5 444.9,104.8 700.0,107.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="107.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.1 444.9,224.4 700.0,213.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.6 444.9,170.2 700.0,72.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.6" r="4" fill="#20c997"/><circle cx="444.9" cy="170.2" r="4" fill="#20c997"/><circle cx="700.0" cy="72.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.59s | 104,329.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.89s | 137,183.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 369.25s | 135,411.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.35s | 57,636.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 152.20s | 65,702.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 658.60s | 75,918.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.59s | 46,328.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.64s | 55,667.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1207.99s | 41,391.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.33s | 96,842.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.35s | 115,803.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 436.39s | 114,575.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.71s | 50,730.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.76s | 55,628.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 820.03s | 60,973.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.88s | 77,651.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 120.66s | 82,876.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 378.99s | 131,930.0 | PASS |

:::

:::

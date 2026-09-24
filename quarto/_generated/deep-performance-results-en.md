## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-23T22:45:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,99.2 444.9,74.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="99.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,172.1 444.9,159.3 700.0,171.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="172.1" r="4" fill="#198754"/><circle cx="444.9" cy="159.3" r="4" fill="#198754"/><circle cx="700.0" cy="171.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.9 444.9,222.3 700.0,131.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="131.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.2 444.9,78.6 700.0,67.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="78.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="67.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,196.3 444.9,186.1 700.0,198.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="196.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="186.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="198.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.1 444.9,84.0 700.0,81.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.1" r="4" fill="#20c997"/><circle cx="444.9" cy="84.0" r="4" fill="#20c997"/><circle cx="700.0" cy="81.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.04s | 110,643.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.89s | 122,112.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.74s | 127,963.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,429.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.30s | 82,442.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 653.53s | 76,508.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.53s | 51,195.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.04s | 52,899.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 523.25s | 95,557.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,090.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.12s | 120,303.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.58s | 125,760.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.36s | 65,087.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 143.12s | 69,872.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 782.73s | 63,879.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.16s | 75,959.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.92s | 117,763.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 419.92s | 119,071.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">177k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,141.8 444.9,105.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="141.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.5 444.9,205.2 700.0,206.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="206.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.5 444.9,235.3 700.0,243.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.4 444.9,123.7 700.0,134.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="123.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.8 444.9,217.3 700.0,225.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.9 444.9,138.6 700.0,113.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.9" r="4" fill="#20c997"/><circle cx="444.9" cy="138.6" r="4" fill="#20c997"/><circle cx="700.0" cy="113.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.78s | 113,921.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.75s | 135,593.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 310.86s | 160,846.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.07s | 66,339.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.63s | 76,550.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 660.60s | 75,689.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.06s | 41,567.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.04s | 58,808.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 926.41s | 53,971.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.77s | 102,396.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.26s | 124,590.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 423.60s | 118,037.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.44s | 51,448.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 144.09s | 69,400.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 775.94s | 64,438.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.84s | 77,899.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.34s | 115,822.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.01s | 130,546.3 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-24T22:38:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">174k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">232k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,211.5 444.9,62.3 700.0,88.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="211.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.7 444.9,230.5 700.0,229.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#198754"/><circle cx="444.9" cy="230.5" r="4" fill="#198754"/><circle cx="700.0" cy="229.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,272.1 444.9,251.5 700.0,263.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="272.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="263.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.2 444.9,124.8 700.0,176.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="176.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.7 444.9,245.0 700.0,258.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.7 444.9,152.3 700.0,161.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#20c997"/><circle cx="444.9" cy="152.3" r="4" fill="#20c997"/><circle cx="700.0" cy="161.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,356.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 47.49s | 210,548.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 262.62s | 190,391.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,320.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.99s | 80,653.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.26s | 81,664.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.58s | 48,590.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 155.08s | 64,482.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 902.34s | 55,411.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.97s | 143,410.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.63s | 162,256.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.16s | 122,500.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.16s | 49,608.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 143.91s | 69,488.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 841.89s | 59,390.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,327.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.91s | 141,025.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.16s | 133,990.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">64k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">192k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">256k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,218.5 444.9,184.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="218.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="184.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,257.8 444.9,241.5 700.0,233.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="257.8" r="4" fill="#198754"/><circle cx="444.9" cy="241.5" r="4" fill="#198754"/><circle cx="700.0" cy="233.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,279.0 444.9,269.6 700.0,225.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="279.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,213.9 444.9,201.8 700.0,193.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="213.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="201.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="193.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,278.1 444.9,267.2 700.0,266.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="278.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="267.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="266.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.9 444.9,258.3 700.0,186.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.9" r="4" fill="#20c997"/><circle cx="444.9" cy="258.3" r="4" fill="#20c997"/><circle cx="700.0" cy="186.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.05s | 99,532.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.66s | 128,761.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 214.61s | 232,979.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.16s | 65,950.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.25s | 79,842.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 576.37s | 86,750.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.90s | 47,846.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.93s | 55,889.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 532.62s | 93,876.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.66s | 103,466.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.86s | 113,818.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.29s | 120,979.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.59s | 48,572.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.63s | 57,926.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 847.86s | 58,972.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.57s | 79,522.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 152.53s | 65,562.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 394.27s | 126,816.3 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-23T23:00:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">124k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,76.9 444.9,79.5 700.0,102.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="76.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="102.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.9 444.9,172.6 700.0,136.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#198754"/><circle cx="444.9" cy="172.6" r="4" fill="#198754"/><circle cx="700.0" cy="136.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,154.6 444.9,196.5 700.0,202.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="196.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="202.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.9 444.9,68.5 700.0,92.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="92.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.6 444.9,216.7 700.0,150.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="216.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="150.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,102.7 444.9,99.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="102.7" r="4" fill="#20c997"/><circle cx="444.9" cy="99.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.37s | 106,780.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 94.60s | 105,710.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 520.10s | 96,136.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.49s | 64,570.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 148.86s | 67,178.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.10s | 82,087.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.40s | 74,615.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.52s | 57,301.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 913.68s | 54,723.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,087.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.70s | 110,254.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 499.29s | 100,142.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.70s | 46,089.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 204.39s | 48,926.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.47s | 76,514.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.41s | 96,098.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 102.55s | 97,510.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 443.13s | 112,833.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,91.5 444.9,69.7 700.0,83.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="91.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="83.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.4 444.9,170.9 700.0,167.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.4" r="4" fill="#198754"/><circle cx="444.9" cy="170.9" r="4" fill="#198754"/><circle cx="700.0" cy="167.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.1 444.9,208.2 700.0,219.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.5 444.9,86.7 700.0,110.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="86.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,211.8 700.0,217.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.4 444.9,62.3 700.0,92.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="92.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.28s | 107,805.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.14s | 117,450.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 449.73s | 111,178.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,127.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.60s | 72,672.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 673.82s | 74,204.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.96s | 45,539.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.13s | 56,138.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 973.30s | 51,371.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,413.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.96s | 109,934.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 502.96s | 99,411.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.67s | 44,107.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 183.35s | 54,539.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 961.64s | 51,994.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 16.30s | 61,361.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.81s | 120,752.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 465.27s | 107,464.7 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-23T22:47:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,117.4 444.9,112.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.7 444.9,146.3 700.0,134.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.7" r="4" fill="#198754"/><circle cx="444.9" cy="146.3" r="4" fill="#198754"/><circle cx="700.0" cy="134.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.0 444.9,212.9 700.0,232.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,126.1 444.9,121.1 700.0,119.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="126.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,184.3 444.9,231.0 700.0,220.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="184.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,148.8 444.9,86.6 700.0,97.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#20c997"/><circle cx="444.9" cy="86.6" r="4" fill="#20c997"/><circle cx="700.0" cy="97.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.47s | 118,008.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.02s | 120,458.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 338.11s | 147,879.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.72s | 67,939.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 97.75s | 102,303.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 459.87s | 108,726.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,053.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 151.01s | 66,219.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.52s | 55,585.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.83s | 113,263.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.23s | 115,970.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 426.86s | 117,133.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.24s | 81,692.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.40s | 56,370.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 805.44s | 62,077.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.91s | 100,948.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.26s | 134,669.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.44s | 129,051.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,164.8 444.9,134.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.4 444.9,203.0 700.0,175.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.4" r="4" fill="#198754"/><circle cx="444.9" cy="203.0" r="4" fill="#198754"/><circle cx="700.0" cy="175.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.4 444.9,253.0 700.0,244.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.9 444.9,147.6 700.0,144.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.3 444.9,175.6 700.0,244.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="175.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.6 444.9,146.3 700.0,136.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#20c997"/><circle cx="444.9" cy="146.3" r="4" fill="#20c997"/><circle cx="700.0" cy="136.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.07s | 110,277.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.96s | 129,934.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 283.01s | 176,672.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.19s | 65,832.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.96s | 85,497.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 483.05s | 103,510.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.97s | 62,605.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.25s | 53,119.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 854.58s | 58,508.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.21s | 121,832.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.38s | 121,390.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 405.71s | 123,241.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.61s | 51,002.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 96.86s | 103,238.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 852.50s | 58,651.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.51s | 68,899.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.82s | 122,219.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.37s | 128,413.2 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-24T22:42:47Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,98.6 444.9,100.3 700.0,119.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="98.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="100.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.3 444.9,170.3 700.0,75.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#198754"/><circle cx="444.9" cy="170.3" r="4" fill="#198754"/><circle cx="700.0" cy="75.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.1 444.9,233.9 700.0,232.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="233.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.9 444.9,89.2 700.0,107.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="107.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.3 444.9,226.6 700.0,194.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.0 444.9,62.3 700.0,82.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="82.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.57s | 132,187.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.21s | 131,214.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.57s | 120,316.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.46s | 64,670.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.60s | 92,083.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 344.89s | 144,972.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.74s | 59,737.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.92s | 56,523.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.15s | 57,132.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.20s | 121,921.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.78s | 137,398.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 392.25s | 127,471.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.13s | 55,163.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 165.04s | 60,590.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 637.36s | 78,449.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,254.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 65.58s | 152,473.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.21s | 141,159.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,85.3 444.9,131.0 700.0,137.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="85.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.2 444.9,225.0 700.0,219.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.2" r="4" fill="#198754"/><circle cx="444.9" cy="225.0" r="4" fill="#198754"/><circle cx="700.0" cy="219.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.2 444.9,200.0 700.0,198.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="200.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,231.0 444.9,62.3 700.0,159.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="231.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="159.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.6 444.9,242.8 700.0,285.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="285.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.1 444.9,149.5 700.0,137.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.1" r="4" fill="#20c997"/><circle cx="444.9" cy="149.5" r="4" fill="#20c997"/><circle cx="700.0" cy="137.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.76s | 173,550.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.53s | 141,793.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 363.59s | 137,516.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.02s | 66,600.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.76s | 76,473.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 620.12s | 80,628.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.25s | 54,785.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 106.55s | 93,857.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 527.29s | 94,824.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 13.83s | 72,290.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 52.75s | 189,559.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 410.03s | 121,943.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.84s | 53,092.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.13s | 64,049.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1457.19s | 34,312.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.10s | 76,365.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.58s | 128,904.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 364.74s | 137,083.2 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-23T22:45:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,161.8 444.9,111.8 700.0,96.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="96.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.2 444.9,175.7 700.0,159.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#198754"/><circle cx="444.9" cy="175.7" r="4" fill="#198754"/><circle cx="700.0" cy="159.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.3 444.9,237.4 700.0,195.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.2 444.9,68.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,203.2 444.9,190.8 700.0,159.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="203.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="190.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.6 444.9,64.1 700.0,68.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.6" r="4" fill="#20c997"/><circle cx="444.9" cy="64.1" r="4" fill="#20c997"/><circle cx="700.0" cy="68.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.87s | 84,253.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 92.09s | 108,587.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 430.79s | 116,065.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.60s | 64,110.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.08s | 77,473.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 585.64s | 85,376.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 23.71s | 42,174.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 210.75s | 47,449.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 737.09s | 67,834.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,694.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.13s | 129,646.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 376.91s | 132,657.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.60s | 64,110.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 142.59s | 70,130.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 585.91s | 85,337.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.79s | 84,839.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.90s | 131,750.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 386.31s | 129,430.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,190.3 444.9,62.3 700.0,89.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.1 444.9,219.1 700.0,216.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#198754"/><circle cx="444.9" cy="219.1" r="4" fill="#198754"/><circle cx="700.0" cy="216.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,278.7 444.9,271.6 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="278.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,184.8 444.9,147.9 700.0,127.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.0 444.9,243.0 700.0,245.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,163.9 444.9,150.0 700.0,129.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="163.9" r="4" fill="#20c997"/><circle cx="444.9" cy="150.0" r="4" fill="#20c997"/><circle cx="700.0" cy="129.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.77s | 92,824.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.16s | 174,953.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 317.82s | 157,323.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.42s | 60,905.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.46s | 74,369.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 659.27s | 75,841.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.67s | 36,137.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 245.90s | 40,666.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 900.77s | 55,507.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.38s | 96,339.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.33s | 120,000.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 376.08s | 132,951.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.98s | 41,697.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.38s | 59,038.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 865.92s | 57,741.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,745.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.28s | 118,656.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 379.12s | 131,885.1 | PASS |

:::

:::

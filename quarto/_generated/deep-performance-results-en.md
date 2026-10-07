## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-06T23:51:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.1 444.9,126.2 700.0,125.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="125.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.3 444.9,206.3 700.0,95.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#198754"/><circle cx="444.9" cy="206.3" r="4" fill="#198754"/><circle cx="700.0" cy="95.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.8 444.9,229.3 700.0,225.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="229.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,98.0 444.9,62.3 700.0,125.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="98.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.8 444.9,238.2 700.0,224.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.1 444.9,128.4 700.0,110.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#20c997"/><circle cx="444.9" cy="128.4" r="4" fill="#20c997"/><circle cx="700.0" cy="110.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.65s | 103,573.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.88s | 123,646.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 402.50s | 124,222.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.23s | 70,293.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 131.22s | 76,210.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 351.74s | 142,150.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.30s | 54,632.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 159.74s | 62,600.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 772.07s | 64,760.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.12s | 140,370.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.91s | 161,532.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 402.97s | 124,077.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.14s | 52,235.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.39s | 57,341.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 763.16s | 65,516.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.56s | 94,688.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.74s | 122,337.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.51s | 132,799.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,78.2 700.0,94.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="94.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.0 444.9,154.6 700.0,214.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#198754"/><circle cx="444.9" cy="154.6" r="4" fill="#198754"/><circle cx="700.0" cy="214.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.0 444.9,251.7 700.0,195.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.4 444.9,156.9 700.0,149.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="156.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.2 444.9,249.6 700.0,245.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.1 444.9,152.2 700.0,139.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.1" r="4" fill="#20c997"/><circle cx="444.9" cy="152.2" r="4" fill="#20c997"/><circle cx="700.0" cy="139.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.57s | 179,533.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.16s | 169,044.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 315.45s | 158,502.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.44s | 74,410.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 84.22s | 118,738.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 630.03s | 79,361.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.54s | 48,697.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.31s | 54,853.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 545.30s | 91,692.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,060.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.29s | 117,247.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.62s | 122,064.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.12s | 55,193.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.94s | 56,200.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.56s | 58,854.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.46s | 80,269.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.11s | 120,328.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.94s | 128,554.5 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-06T23:46:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">223k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,195.5 444.9,92.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="92.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.6 444.9,231.9 700.0,212.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.6" r="4" fill="#198754"/><circle cx="444.9" cy="231.9" r="4" fill="#198754"/><circle cx="700.0" cy="212.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.5 444.9,266.5 700.0,252.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,196.6 444.9,172.6 700.0,161.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="196.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="161.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.4 444.9,252.1 700.0,256.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.4 444.9,154.9 700.0,185.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.4" r="4" fill="#20c997"/><circle cx="444.9" cy="154.9" r="4" fill="#20c997"/><circle cx="700.0" cy="185.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.64s | 103,702.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.38s | 180,573.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 246.68s | 202,689.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,593.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.47s | 76,645.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 550.92s | 90,757.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.10s | 52,358.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 196.54s | 50,881.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 817.38s | 61,171.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.72s | 102,827.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.88s | 120,657.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.59s | 129,335.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.83s | 48,003.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.29s | 61,617.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 854.45s | 58,517.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.74s | 78,505.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.72s | 133,833.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 449.07s | 111,341.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,140.9 444.9,86.1 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="140.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.1 444.9,207.9 700.0,220.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#198754"/><circle cx="444.9" cy="207.9" r="4" fill="#198754"/><circle cx="700.0" cy="220.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.0 444.9,250.4 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.9 444.9,63.9 700.0,65.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="65.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.5 444.9,249.2 700.0,246.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.1 444.9,151.8 700.0,144.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#20c997"/><circle cx="444.9" cy="151.8" r="4" fill="#20c997"/><circle cx="700.0" cy="144.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.56s | 132,205.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 58.99s | 169,514.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 269.17s | 185,754.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,675.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.48s | 86,592.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 641.24s | 77,973.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.12s | 70,846.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.51s | 57,632.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 829.28s | 60,293.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.72s | 102,891.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.15s | 184,675.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 272.65s | 183,381.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.70s | 63,694.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.07s | 58,456.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 826.04s | 60,530.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.90s | 77,543.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.14s | 124,781.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 384.72s | 129,965.7 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-07T00:12:54Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">69k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">138k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,124.8 444.9,122.2 700.0,136.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="124.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.2 444.9,183.6 700.0,175.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.2" r="4" fill="#198754"/><circle cx="444.9" cy="183.6" r="4" fill="#198754"/><circle cx="700.0" cy="175.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,175.0 444.9,218.1 700.0,216.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="218.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,95.7 444.9,62.3 700.0,68.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="95.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="68.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.2 444.9,196.7 700.0,200.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="196.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="200.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.6 444.9,111.2 700.0,100.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.6" r="4" fill="#20c997"/><circle cx="444.9" cy="111.2" r="4" fill="#20c997"/><circle cx="700.0" cy="100.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.31s | 96,946.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 101.90s | 98,137.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 545.13s | 91,720.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,863.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.25s | 69,809.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 680.57s | 73,467.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.55s | 73,779.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.51s | 53,904.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 914.08s | 54,699.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.06s | 110,375.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.51s | 125,773.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 406.63s | 122,963.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.10s | 55,260.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 156.81s | 63,771.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 802.97s | 62,269.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.52s | 68,880.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.91s | 103,188.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 462.33s | 108,147.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,154.2 444.9,131.8 700.0,120.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.2 444.9,189.8 700.0,221.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.2" r="4" fill="#198754"/><circle cx="444.9" cy="189.8" r="4" fill="#198754"/><circle cx="700.0" cy="221.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.2 444.9,212.7 700.0,170.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="170.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,172.6 700.0,119.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="119.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.6 444.9,173.6 700.0,199.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="173.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,148.7 444.9,134.5 700.0,141.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="148.7" r="4" fill="#20c997"/><circle cx="444.9" cy="134.5" r="4" fill="#20c997"/><circle cx="700.0" cy="141.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.24s | 88,983.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.97s | 100,025.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 473.77s | 105,536.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.96s | 77,178.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 139.93s | 71,465.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 896.25s | 55,788.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.57s | 51,096.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 166.11s | 60,200.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 619.22s | 80,746.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.45s | 134,228.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 125.11s | 79,929.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 471.11s | 106,133.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 23.53s | 42,504.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 125.85s | 79,459.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 748.10s | 66,836.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.91s | 91,684.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 101.32s | 98,694.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 525.42s | 95,162.5 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-06T23:59:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,93.9 444.9,102.8 700.0,88.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="93.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.8 444.9,85.1 700.0,169.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.8" r="4" fill="#198754"/><circle cx="444.9" cy="85.1" r="4" fill="#198754"/><circle cx="700.0" cy="169.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.5 444.9,155.4 700.0,216.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="155.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.6 444.9,90.2 700.0,86.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.7 444.9,242.2 700.0,206.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.4 444.9,91.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.4" r="4" fill="#20c997"/><circle cx="444.9" cy="91.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.26s | 121,138.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.75s | 116,619.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.54s | 123,904.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.42s | 60,890.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.67s | 125,513.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 602.33s | 83,010.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.39s | 61,020.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 110.86s | 90,200.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 841.72s | 59,402.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.37s | 106,689.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.33s | 122,957.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 400.84s | 124,737.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.73s | 56,407.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 214.41s | 46,640.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 771.85s | 64,779.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.40s | 80,671.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.61s | 122,540.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 364.96s | 137,002.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,145.3 444.9,95.5 700.0,79.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.9 444.9,194.0 700.0,178.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.9" r="4" fill="#198754"/><circle cx="444.9" cy="194.0" r="4" fill="#198754"/><circle cx="700.0" cy="178.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.2 444.9,230.7 700.0,236.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,63.3 700.0,120.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="63.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,193.4 444.9,219.6 700.0,232.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="193.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.8 444.9,114.0 700.0,93.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.8" r="4" fill="#20c997"/><circle cx="444.9" cy="114.0" r="4" fill="#20c997"/><circle cx="700.0" cy="93.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.35s | 106,929.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.08s | 134,987.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 347.46s | 143,902.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.83s | 63,171.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.82s | 79,478.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 566.45s | 88,268.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.72s | 53,427.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.13s | 58,776.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 899.23s | 55,602.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.50s | 153,727.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 65.30s | 153,134.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.90s | 121,093.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.53s | 79,795.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 153.69s | 65,068.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 863.18s | 57,925.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.05s | 82,973.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.29s | 124,547.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 367.84s | 135,927.9 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-06T23:55:28Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,189.8 444.9,148.1 700.0,150.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="148.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.4 444.9,157.2 700.0,214.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.4" r="4" fill="#198754"/><circle cx="444.9" cy="157.2" r="4" fill="#198754"/><circle cx="700.0" cy="214.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.5 444.9,203.4 700.0,250.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="203.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,184.8 444.9,62.3 700.0,146.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.3 444.9,245.7 700.0,248.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.9 444.9,144.2 700.0,277.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.9" r="4" fill="#20c997"/><circle cx="444.9" cy="144.2" r="4" fill="#20c997"/><circle cx="700.0" cy="277.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,668.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.73s | 127,016.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 398.99s | 125,317.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.11s | 98,931.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.77s | 120,810.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.37s | 81,649.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.18s | 47,216.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 111.82s | 89,432.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 873.50s | 57,241.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,061.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 53.95s | 185,363.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.76s | 128,283.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.23s | 54,842.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 164.69s | 60,720.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.48s | 59,068.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.55s | 104,755.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.11s | 129,679.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 1272.22s | 39,301.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,189.7 444.9,117.1 700.0,107.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="189.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="117.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,181.6 444.9,215.8 700.0,246.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="181.6" r="4" fill="#198754"/><circle cx="444.9" cy="215.8" r="4" fill="#198754"/><circle cx="700.0" cy="246.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.6 444.9,231.1 700.0,249.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,83.6 444.9,146.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="83.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="146.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.1 444.9,241.4 700.0,242.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.8 444.9,81.7 700.0,130.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.8" r="4" fill="#20c997"/><circle cx="444.9" cy="81.7" r="4" fill="#20c997"/><circle cx="700.0" cy="130.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.22s | 97,847.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.15s | 146,743.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 325.95s | 153,398.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.68s | 103,327.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.61s | 80,253.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 838.56s | 59,626.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.39s | 46,739.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 142.95s | 69,953.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 869.94s | 57,475.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.91s | 169,290.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.80s | 126,897.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 272.22s | 183,673.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.93s | 77,351.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.55s | 63,070.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 803.38s | 62,237.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.93s | 111,944.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 58.63s | 170,561.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 362.64s | 137,878.2 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-06T23:57:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,172.6 444.9,126.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="172.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,246.3 444.9,205.7 700.0,214.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="246.3" r="4" fill="#198754"/><circle cx="444.9" cy="205.7" r="4" fill="#198754"/><circle cx="700.0" cy="214.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.2 444.9,259.2 700.0,255.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="259.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.3 444.9,142.6 700.0,151.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.5 444.9,197.4 700.0,243.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.3 444.9,115.0 700.0,120.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#20c997"/><circle cx="444.9" cy="115.0" r="4" fill="#20c997"/><circle cx="700.0" cy="120.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.51s | 105,207.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.04s | 135,054.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 282.91s | 176,734.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.40s | 57,474.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 119.38s | 83,763.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.40s | 78,320.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.87s | 52,997.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 203.57s | 49,122.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 967.14s | 51,699.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.04s | 99,611.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.20s | 124,692.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 420.50s | 118,906.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.29s | 46,979.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.14s | 89,177.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.23s | 59,015.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.48s | 80,134.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.14s | 142,563.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.84s | 139,338.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,185.0 444.9,145.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,252.8 444.9,225.5 700.0,215.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="252.8" r="4" fill="#198754"/><circle cx="444.9" cy="225.5" r="4" fill="#198754"/><circle cx="700.0" cy="215.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,273.6 444.9,267.4 700.0,207.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="273.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.0 444.9,162.2 700.0,71.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="162.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="71.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.5 444.9,253.0 700.0,230.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.1 444.9,101.4 700.0,137.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#20c997"/><circle cx="444.9" cy="101.4" r="4" fill="#20c997"/><circle cx="700.0" cy="137.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.90s | 101,030.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.20s | 127,882.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 272.13s | 183,733.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 18.05s | 55,410.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.53s | 73,787.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 623.09s | 80,245.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.19s | 41,332.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 219.62s | 45,532.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 583.96s | 85,621.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.60s | 94,321.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.91s | 116,407.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 281.30s | 177,747.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.77s | 48,141.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.02s | 55,243.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 712.00s | 70,225.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.92s | 77,387.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 63.55s | 157,356.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 375.67s | 133,096.6 | PASS |

:::

:::

## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-10T22:05:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">223k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,193.2 444.9,62.3 700.0,168.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="168.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.5 444.9,229.3 700.0,198.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#198754"/><circle cx="444.9" cy="229.3" r="4" fill="#198754"/><circle cx="700.0" cy="198.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.8 444.9,249.5 700.0,241.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,182.6 444.9,170.7 700.0,163.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="182.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="170.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="163.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.7 444.9,253.3 700.0,240.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.7 444.9,176.1 700.0,153.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.7" r="4" fill="#20c997"/><circle cx="444.9" cy="176.1" r="4" fill="#20c997"/><circle cx="700.0" cy="153.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.48s | 105,463.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 49.30s | 202,831.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.89s | 123,795.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.65s | 73,281.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.15s | 78,646.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 493.04s | 101,412.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.93s | 47,782.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 157.18s | 63,620.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 720.30s | 69,415.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.82s | 113,340.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.83s | 122,203.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 392.55s | 127,372.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.68s | 50,807.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 164.52s | 60,783.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 707.71s | 70,650.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.41s | 74,582.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.60s | 118,204.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 369.72s | 135,236.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,97.4 444.9,62.3 700.0,74.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="97.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="74.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,174.6 444.9,182.2 700.0,94.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="174.6" r="4" fill="#198754"/><circle cx="444.9" cy="182.2" r="4" fill="#198754"/><circle cx="700.0" cy="94.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.1 444.9,209.6 700.0,211.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="209.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.5 444.9,75.0 700.0,98.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="75.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.8 444.9,223.1 700.0,221.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,192.5 444.9,86.7 700.0,112.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="192.5" r="4" fill="#20c997"/><circle cx="444.9" cy="86.7" r="4" fill="#20c997"/><circle cx="700.0" cy="112.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.51s | 117,467.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.15s | 134,861.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 387.58s | 129,004.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,308.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.37s | 75,547.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 420.39s | 118,937.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.65s | 48,421.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 161.27s | 62,007.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 819.03s | 61,047.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,554.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.79s | 128,557.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.71s | 116,900.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,030.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.64s | 55,357.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 888.99s | 56,243.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.20s | 70,442.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.45s | 122,779.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 454.83s | 109,930.0 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-10T21:59:00Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,145.0 444.9,86.4 700.0,93.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="86.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.5 444.9,171.2 700.0,171.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.5" r="4" fill="#198754"/><circle cx="444.9" cy="171.2" r="4" fill="#198754"/><circle cx="700.0" cy="171.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.3 444.9,205.4 700.0,213.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="205.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.9 444.9,79.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="79.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.4 444.9,221.4 700.0,213.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="213.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.8 444.9,85.5 700.0,64.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#20c997"/><circle cx="444.9" cy="85.5" r="4" fill="#20c997"/><circle cx="700.0" cy="64.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,526.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.84s | 123,698.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.21s | 120,421.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.51s | 68,918.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.74s | 81,473.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 615.69s | 81,210.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.57s | 51,096.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 155.10s | 64,472.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 825.02s | 60,604.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.10s | 99,039.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.53s | 127,336.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 368.50s | 135,684.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.77s | 50,568.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.89s | 56,531.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 828.11s | 60,378.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.95s | 83,668.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.57s | 124,114.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.21s | 134,695.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,116.9 444.9,110.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.7 444.9,206.5 700.0,205.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.7" r="4" fill="#198754"/><circle cx="444.9" cy="206.5" r="4" fill="#198754"/><circle cx="700.0" cy="205.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.1 444.9,246.4 700.0,236.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.6 444.9,118.5 700.0,134.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.9 444.9,235.9 700.0,239.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="239.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,225.9 444.9,202.4 700.0,116.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#20c997"/><circle cx="444.9" cy="202.4" r="4" fill="#20c997"/><circle cx="700.0" cy="116.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.64s | 130,872.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.24s | 134,700.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 305.55s | 163,639.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.46s | 69,175.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.70s | 77,102.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.23s | 77,612.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.87s | 50,317.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.00s | 53,190.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 848.34s | 58,938.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.59s | 94,437.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.98s | 129,898.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.69s | 120,573.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.59s | 51,038.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 168.25s | 59,435.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 875.56s | 57,106.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.28s | 65,457.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 125.66s | 79,577.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 381.09s | 131,203.6 | PASS |

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
  **Latest measurement:** `2026-09-10T22:14:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,93.3 444.9,62.3 700.0,105.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="93.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.0 444.9,192.4 700.0,201.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#198754"/><circle cx="444.9" cy="192.4" r="4" fill="#198754"/><circle cx="700.0" cy="201.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.7 444.9,236.0 700.0,225.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.6 444.9,104.9 700.0,109.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.6 444.9,237.6 700.0,230.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.7 444.9,115.4 700.0,106.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.7" r="4" fill="#20c997"/><circle cx="444.9" cy="115.4" r="4" fill="#20c997"/><circle cx="700.0" cy="106.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.29s | 137,136.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.61s | 154,767.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 383.70s | 130,310.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.87s | 72,082.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.61s | 80,898.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 658.12s | 75,974.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.09s | 52,380.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.05s | 56,163.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 803.83s | 62,202.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.21s | 108,601.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.58s | 130,577.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.91s | 128,233.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.49s | 51,313.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.91s | 55,275.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.80s | 59,185.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.53s | 68,846.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.26s | 124,593.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 385.94s | 129,554.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,102.5 444.9,62.3 700.0,89.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.2 444.9,183.3 700.0,176.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.2" r="4" fill="#198754"/><circle cx="444.9" cy="183.3" r="4" fill="#198754"/><circle cx="700.0" cy="176.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.0 444.9,223.4 700.0,220.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.0 444.9,96.4 700.0,96.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="96.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.8 444.9,211.7 700.0,216.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,169.3 444.9,100.5 700.0,85.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="169.3" r="4" fill="#20c997"/><circle cx="444.9" cy="100.5" r="4" fill="#20c997"/><circle cx="700.0" cy="85.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.50s | 117,660.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.47s | 137,993.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 402.11s | 124,344.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.78s | 67,681.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.25s | 76,774.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 622.25s | 80,352.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.80s | 48,081.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.10s | 56,464.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 860.21s | 58,125.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,241.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.83s | 120,721.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.12s | 120,738.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.91s | 45,649.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.23s | 62,408.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 830.75s | 60,186.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.93s | 83,822.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.27s | 118,670.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 396.23s | 126,189.0 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-10T22:03:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,113.6 444.9,93.1 700.0,101.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="113.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="93.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.6 444.9,143.4 700.0,136.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.6" r="4" fill="#198754"/><circle cx="444.9" cy="143.4" r="4" fill="#198754"/><circle cx="700.0" cy="136.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.2 444.9,223.5 700.0,256.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="223.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,114.7 444.9,99.2 700.0,86.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="114.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,181.9 444.9,226.3 700.0,211.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="181.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.5 444.9,82.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.5" r="4" fill="#20c997"/><circle cx="444.9" cy="82.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.81s | 113,558.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.61s | 124,047.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 417.00s | 119,904.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.06s | 62,254.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 101.77s | 98,257.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 491.82s | 101,663.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.57s | 48,605.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 174.83s | 57,197.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1246.55s | 40,110.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.85s | 112,994.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.69s | 120,932.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 392.71s | 127,321.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.73s | 78,529.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.34s | 55,759.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 791.35s | 63,183.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.62s | 79,251.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.17s | 129,590.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 357.46s | 139,876.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,130.0 444.9,62.3 700.0,70.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="70.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.4 444.9,182.2 700.0,160.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.4" r="4" fill="#198754"/><circle cx="444.9" cy="182.2" r="4" fill="#198754"/><circle cx="700.0" cy="160.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.1 444.9,226.6 700.0,217.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.3 444.9,81.0 700.0,73.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="81.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.6 444.9,220.2 700.0,215.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.3 444.9,79.4 700.0,63.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.3" r="4" fill="#20c997"/><circle cx="444.9" cy="79.4" r="4" fill="#20c997"/><circle cx="700.0" cy="63.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.87s | 101,296.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.20s | 134,770.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 381.88s | 130,931.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.15s | 66,011.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.47s | 75,490.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 580.05s | 86,199.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.47s | 51,361.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 186.63s | 53,580.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 857.45s | 58,312.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,191.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 79.67s | 125,514.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.35s | 129,417.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.98s | 47,657.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.26s | 56,734.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 848.77s | 58,909.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,558.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.17s | 126,307.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 371.98s | 134,416.2 | PASS |

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

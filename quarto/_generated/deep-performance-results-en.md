## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-27T22:35:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,96.9 444.9,62.3 700.0,124.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="96.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,192.0 444.9,199.0 700.0,197.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="192.0" r="4" fill="#198754"/><circle cx="444.9" cy="199.0" r="4" fill="#198754"/><circle cx="700.0" cy="197.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.9 444.9,251.8 700.0,234.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="251.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,88.1 444.9,125.3 700.0,126.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="88.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,249.3 444.9,229.2 700.0,211.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="249.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="211.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.4 444.9,127.1 700.0,103.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.4" r="4" fill="#20c997"/><circle cx="444.9" cy="127.1" r="4" fill="#20c997"/><circle cx="700.0" cy="103.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.25s | 137,931.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.30s | 157,982.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 409.93s | 121,973.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.07s | 82,856.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.89s | 78,809.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 628.25s | 79,585.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.16s | 52,178.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 207.55s | 48,180.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 854.79s | 58,493.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.99s | 143,020.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.32s | 121,480.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.36s | 120,667.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.14s | 49,662.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.21s | 61,271.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 700.06s | 71,422.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.86s | 84,338.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.05s | 120,407.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.00s | 134,046.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,144.0 444.9,130.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.8 444.9,215.4 700.0,209.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#198754"/><circle cx="444.9" cy="215.4" r="4" fill="#198754"/><circle cx="700.0" cy="209.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.4 444.9,253.5 700.0,241.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,171.7 444.9,158.0 700.0,126.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.6 444.9,214.2 700.0,207.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.7 444.9,149.7 700.0,141.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#20c997"/><circle cx="444.9" cy="149.7" r="4" fill="#20c997"/><circle cx="700.0" cy="141.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.29s | 120,612.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.50s | 129,033.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 290.27s | 172,255.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.77s | 67,695.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.43s | 75,513.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 630.32s | 79,324.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.72s | 53,427.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.37s | 51,448.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 849.44s | 58,862.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.70s | 103,124.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 89.45s | 111,796.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 379.85s | 131,631.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.98s | 52,681.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 131.12s | 76,266.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 621.28s | 80,478.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.34s | 81,063.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.43s | 117,053.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 409.89s | 121,982.8 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-27T22:27:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,102.2 444.9,62.3 700.0,115.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.7 444.9,163.5 700.0,202.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#198754"/><circle cx="444.9" cy="163.5" r="4" fill="#198754"/><circle cx="700.0" cy="202.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.3 444.9,190.2 700.0,236.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="190.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.6 444.9,132.7 700.0,123.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="132.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.0 444.9,239.8 700.0,237.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.2 444.9,128.4 700.0,109.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.2" r="4" fill="#20c997"/><circle cx="444.9" cy="128.4" r="4" fill="#20c997"/><circle cx="700.0" cy="109.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.13s | 140,331.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 60.82s | 164,430.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 376.93s | 132,650.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.77s | 67,714.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 96.70s | 103,410.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 625.90s | 79,884.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.49s | 54,074.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 114.53s | 87,311.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 844.54s | 59,203.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.77s | 128,667.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.98s | 121,973.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 391.61s | 127,679.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.23s | 49,419.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.28s | 57,377.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.78s | 59,047.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,440.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.30s | 124,531.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.07s | 135,841.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,129.3 444.9,64.9 700.0,65.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,120.7 444.9,206.6 700.0,181.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="120.7" r="4" fill="#198754"/><circle cx="444.9" cy="206.6" r="4" fill="#198754"/><circle cx="700.0" cy="181.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.0 444.9,228.4 700.0,225.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,124.6 444.9,103.3 700.0,103.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="124.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="103.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.9 444.9,222.1 700.0,220.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,161.3 444.9,89.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="161.3" r="4" fill="#20c997"/><circle cx="444.9" cy="89.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.58s | 104,351.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.99s | 137,003.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.88s | 136,657.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.20s | 108,707.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 153.56s | 65,123.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 640.94s | 78,010.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.71s | 50,727.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.88s | 54,088.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 903.51s | 55,339.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.37s | 106,712.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.09s | 117,515.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 425.08s | 117,623.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.57s | 53,841.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.53s | 57,297.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 862.05s | 58,001.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.35s | 88,121.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.43s | 124,328.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 361.40s | 138,351.2 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:54:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">119k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,111.0 444.9,77.0 700.0,79.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="111.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="77.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="79.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,182.6 444.9,152.2 700.0,164.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="182.6" r="4" fill="#198754"/><circle cx="444.9" cy="152.2" r="4" fill="#198754"/><circle cx="700.0" cy="164.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,213.0 444.9,210.1 700.0,195.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="195.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,73.9 444.9,64.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="73.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="64.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,221.0 444.9,207.0 700.0,209.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,186.0 444.9,122.9 700.0,86.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#20c997"/><circle cx="444.9" cy="122.9" r="4" fill="#20c997"/><circle cx="700.0" cy="86.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.22s | 89,118.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 97.42s | 102,651.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 492.12s | 101,601.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.50s | 60,620.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 137.52s | 72,718.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 738.15s | 67,737.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.60s | 48,539.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 201.31s | 49,675.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.01s | 55,616.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.63s | 103,885.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.97s | 107,567.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 460.81s | 108,504.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.04s | 45,367.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.40s | 50,917.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1001.16s | 49,942.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.86s | 59,297.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 118.51s | 84,382.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 505.30s | 98,951.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">31k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">62k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">123k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,121.2 444.9,96.8 700.0,104.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="121.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="104.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,179.2 444.9,173.5 700.0,151.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#198754"/><circle cx="444.9" cy="173.5" r="4" fill="#198754"/><circle cx="700.0" cy="151.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.1 444.9,207.5 700.0,211.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.5 444.9,167.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,274.1 444.9,215.7 700.0,189.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="274.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="215.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,158.0 444.9,90.4 700.0,94.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="158.0" r="4" fill="#20c997"/><circle cx="444.9" cy="90.4" r="4" fill="#20c997"/><circle cx="700.0" cy="94.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.40s | 87,750.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 102.29s | 97,759.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 529.12s | 94,496.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.64s | 63,922.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 150.92s | 66,259.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 662.52s | 75,469.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.03s | 47,546.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 191.17s | 52,309.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 988.49s | 50,582.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,733.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 145.28s | 68,832.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 446.75s | 111,919.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 40.03s | 24,983.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 204.26s | 48,957.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 835.92s | 59,814.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.77s | 72,632.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.61s | 100,386.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 507.21s | 98,577.5 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-26T22:32:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,149.0 444.9,109.4 700.0,113.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,137.8 444.9,178.3 700.0,149.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="137.8" r="4" fill="#198754"/><circle cx="444.9" cy="178.3" r="4" fill="#198754"/><circle cx="700.0" cy="149.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,187.9 444.9,161.6 700.0,223.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="187.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="161.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="223.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.9 444.9,115.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.5 444.9,229.9 700.0,228.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.6 444.9,101.6 700.0,91.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.6" r="4" fill="#20c997"/><circle cx="444.9" cy="101.6" r="4" fill="#20c997"/><circle cx="700.0" cy="91.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.90s | 101,030.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.64s | 122,489.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 415.32s | 120,388.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.34s | 107,077.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 117.52s | 85,094.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 495.93s | 100,821.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,891.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 106.18s | 94,177.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 828.27s | 60,366.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,672.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.87s | 119,237.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 337.60s | 148,103.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.70s | 53,487.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.25s | 57,060.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 866.75s | 57,686.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.62s | 86,036.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.91s | 126,728.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.40s | 132,486.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,105.9 444.9,76.8 700.0,68.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="68.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.9 444.9,176.9 700.0,172.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#198754"/><circle cx="444.9" cy="176.9" r="4" fill="#198754"/><circle cx="700.0" cy="172.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.2 444.9,214.1 700.0,162.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="162.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.9 444.9,68.1 700.0,85.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="85.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,164.9 444.9,132.0 700.0,174.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="164.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="132.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="174.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.1 444.9,92.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.1" r="4" fill="#20c997"/><circle cx="444.9" cy="92.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.05s | 110,497.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.32s | 124,505.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.67s | 128,312.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.69s | 68,055.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.17s | 76,237.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.77s | 78,275.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.18s | 49,554.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 171.46s | 58,323.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 600.33s | 83,287.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.29s | 107,596.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.69s | 128,715.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.06s | 120,173.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.19s | 82,007.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 102.15s | 97,891.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 644.05s | 77,633.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.97s | 77,095.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.37s | 117,137.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 380.16s | 131,523.6 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-27T22:27:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,169.7 444.9,108.0 700.0,109.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,171.3 444.9,190.8 700.0,180.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#198754"/><circle cx="444.9" cy="190.8" r="4" fill="#198754"/><circle cx="700.0" cy="180.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.9 444.9,232.2 700.0,230.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.1 444.9,114.0 700.0,104.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.0 444.9,203.9 700.0,185.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="185.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,62.3 700.0,77.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="77.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.07s | 90,358.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.60s | 124,075.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.71s | 123,545.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.18s | 89,469.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.87s | 78,818.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 592.08s | 84,448.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.53s | 48,709.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.01s | 56,175.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 874.12s | 57,200.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.29s | 107,642.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.77s | 120,813.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 396.89s | 125,979.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.66s | 53,590.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 139.51s | 71,678.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 610.63s | 81,883.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.82s | 92,395.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.07s | 149,100.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 354.55s | 141,023.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,199.7 444.9,97.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="199.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.6 444.9,180.0 700.0,193.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#198754"/><circle cx="444.9" cy="180.0" r="4" fill="#198754"/><circle cx="700.0" cy="193.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.4 444.9,213.2 700.0,248.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.7 444.9,115.0 700.0,131.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.0 444.9,242.0 700.0,170.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="170.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,220.2 444.9,125.9 700.0,114.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="220.2" r="4" fill="#20c997"/><circle cx="444.9" cy="125.9" r="4" fill="#20c997"/><circle cx="700.0" cy="114.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.95s | 83,675.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.11s | 146,832.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 296.41s | 168,683.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.05s | 66,427.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 104.30s | 95,877.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 570.01s | 87,717.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,833.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 132.72s | 75,348.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 938.28s | 53,289.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.55s | 94,822.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.48s | 136,097.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 396.31s | 126,164.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.27s | 47,023.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.87s | 57,515.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 490.94s | 101,845.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.09s | 70,997.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.34s | 129,305.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 366.90s | 136,276.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-27T22:40:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,136.1 444.9,120.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="120.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.5 444.9,195.2 700.0,150.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#198754"/><circle cx="444.9" cy="195.2" r="4" fill="#198754"/><circle cx="700.0" cy="150.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.0 444.9,242.7 700.0,235.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.9 444.9,74.8 700.0,86.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="74.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="86.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,199.2 444.9,231.5 700.0,228.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="199.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.7 444.9,102.0 700.0,89.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#20c997"/><circle cx="444.9" cy="102.0" r="4" fill="#20c997"/><circle cx="700.0" cy="89.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.33s | 107,215.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.38s | 115,768.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 340.11s | 147,011.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.79s | 59,559.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.67s | 75,374.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 503.08s | 99,386.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.41s | 60,938.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 201.09s | 49,728.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 936.29s | 53,402.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.60s | 94,366.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 71.29s | 140,266.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 373.00s | 134,046.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.66s | 73,222.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.24s | 55,792.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 872.42s | 57,312.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.95s | 77,238.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.60s | 125,623.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.56s | 132,431.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">172k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,168.6 444.9,115.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,223.1 444.9,207.7 700.0,205.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="223.1" r="4" fill="#198754"/><circle cx="444.9" cy="207.7" r="4" fill="#198754"/><circle cx="700.0" cy="205.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,266.1 444.9,245.5 700.0,244.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="266.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.6 444.9,128.9 700.0,126.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="128.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.4 444.9,235.4 700.0,233.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="233.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,192.2 444.9,119.1 700.0,106.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="192.2" r="4" fill="#20c997"/><circle cx="444.9" cy="119.1" r="4" fill="#20c997"/><circle cx="700.0" cy="106.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.48s | 95,456.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.22s | 126,235.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 319.50s | 156,496.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.57s | 64,205.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 136.88s | 73,057.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 675.08s | 74,065.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.30s | 39,517.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.77s | 51,343.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 965.41s | 51,791.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,191.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.58s | 118,235.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 418.06s | 119,600.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.90s | 45,670.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.00s | 57,143.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 862.03s | 58,002.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,940.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.73s | 123,875.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 381.10s | 131,199.8 | PASS |

:::

:::

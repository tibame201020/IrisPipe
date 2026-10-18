## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-18T21:53:27Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,127.8 444.9,108.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="127.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="108.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.9 444.9,192.5 700.0,211.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.9" r="4" fill="#198754"/><circle cx="444.9" cy="192.5" r="4" fill="#198754"/><circle cx="700.0" cy="211.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.0 444.9,248.2 700.0,248.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,174.3 444.9,149.3 700.0,144.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="174.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="149.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.0 444.9,249.7 700.0,240.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.5 444.9,142.9 700.0,121.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.5" r="4" fill="#20c997"/><circle cx="444.9" cy="142.9" r="4" fill="#20c997"/><circle cx="700.0" cy="121.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.38s | 135,446.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.43s | 148,293.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 280.39s | 178,323.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.73s | 78,523.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.31s | 93,189.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 619.28s | 80,739.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.23s | 81,739.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.30s | 56,722.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 885.00s | 56,497.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.52s | 105,086.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.35s | 121,431.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.81s | 124,435.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.45s | 64,729.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.38s | 55,746.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 805.92s | 62,041.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.76s | 114,129.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.61s | 125,617.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.20s | 139,588.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.5 444.9,62.3 700.0,138.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="138.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.2 444.9,222.1 700.0,214.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.2" r="4" fill="#198754"/><circle cx="444.9" cy="222.1" r="4" fill="#198754"/><circle cx="700.0" cy="214.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.0 444.9,252.9 700.0,205.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,190.5 444.9,69.2 700.0,175.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="190.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="69.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="175.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.0 444.9,255.3 700.0,253.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,176.4 444.9,169.9 700.0,159.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="176.4" r="4" fill="#20c997"/><circle cx="444.9" cy="169.9" r="4" fill="#20c997"/><circle cx="700.0" cy="159.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.09s | 141,023.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 51.35s | 194,757.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 356.61s | 140,208.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.77s | 67,695.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 123.99s | 80,651.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 581.11s | 86,041.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.66s | 53,579.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 170.64s | 58,603.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 542.38s | 92,186.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,177.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 52.68s | 189,829.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 439.69s | 113,717.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.68s | 53,533.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.71s | 56,911.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 858.22s | 58,259.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.83s | 113,263.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.84s | 117,867.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.97s | 125,322.7 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-18T21:44:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,103.6 444.9,90.0 700.0,105.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="103.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="90.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,117.7 444.9,140.0 700.0,179.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="117.7" r="4" fill="#198754"/><circle cx="444.9" cy="140.0" r="4" fill="#198754"/><circle cx="700.0" cy="179.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,232.2 444.9,213.4 700.0,181.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="232.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="181.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.4 444.9,95.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="95.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,180.4 444.9,222.7 700.0,153.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="180.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="153.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.5 444.9,83.8 700.0,65.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.5" r="4" fill="#20c997"/><circle cx="444.9" cy="83.8" r="4" fill="#20c997"/><circle cx="700.0" cy="65.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.56s | 116,754.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.92s | 123,580.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 431.46s | 115,886.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.12s | 109,637.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 101.66s | 98,371.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 637.58s | 78,421.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.28s | 51,867.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 163.02s | 61,342.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 644.48s | 77,581.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.79s | 113,817.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.92s | 120,602.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 363.40s | 137,587.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.82s | 78,015.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.53s | 56,649.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 544.64s | 91,803.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.28s | 81,466.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.92s | 126,713.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 368.24s | 135,781.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.9 444.9,141.0 700.0,80.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="80.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,166.9 444.9,208.3 700.0,179.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="166.9" r="4" fill="#198754"/><circle cx="444.9" cy="208.3" r="4" fill="#198754"/><circle cx="700.0" cy="179.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.3 444.9,246.2 700.0,232.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,170.9 444.9,62.3 700.0,149.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="170.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="149.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.7 444.9,243.8 700.0,218.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="218.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,230.1 444.9,149.6 700.0,124.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="230.1" r="4" fill="#20c997"/><circle cx="444.9" cy="149.6" r="4" fill="#20c997"/><circle cx="700.0" cy="124.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.64s | 103,680.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.56s | 122,612.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 310.86s | 160,845.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.41s | 106,258.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.93s | 80,047.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 509.45s | 98,145.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.18s | 47,203.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.12s | 56,141.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 771.33s | 64,823.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.64s | 103,734.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.02s | 172,357.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 427.02s | 117,090.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.96s | 50,087.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.56s | 57,616.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 679.70s | 73,561.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.08s | 66,313.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.37s | 117,138.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 376.27s | 132,883.7 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-17T22:11:47Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,173.0 444.9,139.1 700.0,137.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,188.0 444.9,193.2 700.0,189.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="188.0" r="4" fill="#198754"/><circle cx="444.9" cy="193.2" r="4" fill="#198754"/><circle cx="700.0" cy="189.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.8 444.9,227.4 700.0,228.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="227.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.8 444.9,105.7 700.0,123.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="105.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="123.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.2 444.9,214.3 700.0,231.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="214.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,160.6 444.9,137.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="160.6" r="4" fill="#20c997"/><circle cx="444.9" cy="137.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.53s | 79,814.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.62s | 96,507.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 514.66s | 97,150.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.81s | 72,421.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.19s | 69,839.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 699.18s | 71,512.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.49s | 51,303.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 188.74s | 52,982.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 956.51s | 52,273.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.92s | 126,198.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.53s | 112,953.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 480.16s | 104,132.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.87s | 43,727.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 168.23s | 59,442.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 979.88s | 51,026.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.64s | 85,910.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 102.91s | 97,175.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.21s | 134,332.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">136k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,162.6 444.9,113.8 700.0,109.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="109.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.6 444.9,183.3 700.0,181.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#198754"/><circle cx="444.9" cy="183.3" r="4" fill="#198754"/><circle cx="700.0" cy="181.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.5 444.9,228.2 700.0,216.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.0 444.9,97.5 700.0,90.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="90.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,146.3 700.0,214.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="146.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,185.7 444.9,143.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="185.7" r="4" fill="#20c997"/><circle cx="444.9" cy="143.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.77s | 78,296.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 99.56s | 100,443.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 487.27s | 102,612.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.51s | 60,584.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 145.16s | 68,891.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 718.09s | 69,629.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.48s | 48,823.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 206.28s | 48,477.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 928.34s | 53,859.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.39s | 96,283.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 92.75s | 107,822.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 449.79s | 111,162.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.10s | 45,248.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 116.70s | 85,689.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 917.22s | 54,512.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.75s | 67,782.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 114.75s | 87,142.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 403.74s | 123,840.8 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-18T22:00:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,142.6 444.9,62.3 700.0,112.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="142.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="112.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.5 444.9,194.0 700.0,188.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#198754"/><circle cx="444.9" cy="194.0" r="4" fill="#198754"/><circle cx="700.0" cy="188.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.2 444.9,239.5 700.0,223.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="223.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.2 444.9,131.5 700.0,105.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="105.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,217.7 444.9,236.4 700.0,221.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="217.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,123.3 444.9,110.5 700.0,74.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="123.3" r="4" fill="#20c997"/><circle cx="444.9" cy="110.5" r="4" fill="#20c997"/><circle cx="700.0" cy="74.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.31s | 107,376.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.70s | 152,195.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.20s | 124,008.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.75s | 67,787.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.07s | 78,696.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.94s | 81,974.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.71s | 53,455.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 187.57s | 53,312.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 806.09s | 62,027.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.29s | 107,619.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.07s | 113,543.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 390.94s | 127,897.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.28s | 65,445.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.69s | 55,039.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 789.95s | 63,295.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.47s | 118,119.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.81s | 125,294.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 343.70s | 145,476.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,175.2 444.9,125.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,210.1 444.9,211.9 700.0,202.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="210.1" r="4" fill="#198754"/><circle cx="444.9" cy="211.9" r="4" fill="#198754"/><circle cx="700.0" cy="202.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.2 444.9,234.0 700.0,248.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.2 444.9,151.9 700.0,136.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="151.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="136.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.1 444.9,252.8 700.0,246.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.5 444.9,91.4 700.0,68.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#20c997"/><circle cx="444.9" cy="91.4" r="4" fill="#20c997"/><circle cx="700.0" cy="68.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.88s | 101,194.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.53s | 132,389.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 289.60s | 172,651.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.65s | 79,076.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.34s | 77,915.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 597.53s | 83,677.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.07s | 52,427.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 156.43s | 63,925.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 916.72s | 54,542.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.88s | 101,194.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.30s | 115,881.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.33s | 125,840.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.30s | 61,345.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 192.18s | 52,035.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 890.56s | 56,144.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.49s | 80,051.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 64.85s | 154,211.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 295.92s | 168,963.4 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-17T21:50:17Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.5 444.9,141.3 700.0,143.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.3 444.9,194.6 700.0,214.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#198754"/><circle cx="444.9" cy="194.6" r="4" fill="#198754"/><circle cx="700.0" cy="214.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.3 444.9,248.0 700.0,255.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,173.3 444.9,91.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="173.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,203.9 444.9,249.1 700.0,236.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="203.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.8 444.9,146.7 700.0,142.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.8" r="4" fill="#20c997"/><circle cx="444.9" cy="146.7" r="4" fill="#20c997"/><circle cx="700.0" cy="142.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,419.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.78s | 130,235.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 387.55s | 129,015.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.22s | 65,707.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 105.93s | 94,402.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 615.58s | 81,224.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.05s | 47,515.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.90s | 58,515.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 933.07s | 53,586.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,683.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 61.02s | 163,891.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 272.72s | 183,336.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.35s | 88,121.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.09s | 57,774.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 756.87s | 66,061.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.12s | 109,697.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.00s | 126,590.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 385.75s | 129,617.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">190k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">254k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,216.8 444.9,62.3 700.0,165.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="216.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="165.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,261.6 444.9,240.8 700.0,242.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#198754"/><circle cx="444.9" cy="240.8" r="4" fill="#198754"/><circle cx="700.0" cy="242.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.9 444.9,245.9 700.0,264.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,245.3 444.9,178.1 700.0,188.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="245.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="188.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.5 444.9,265.5 700.0,235.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="265.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.2 444.9,183.1 700.0,176.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.2" r="4" fill="#20c997"/><circle cx="444.9" cy="183.1" r="4" fill="#20c997"/><circle cx="700.0" cy="176.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,910.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 43.36s | 230,616.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 349.48s | 143,068.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.11s | 62,061.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 125.57s | 79,637.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 636.89s | 78,507.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.57s | 73,681.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 132.78s | 75,310.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 834.00s | 59,952.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 13.18s | 75,872.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 75.36s | 132,698.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.05s | 123,748.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.09s | 62,146.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.06s | 58,803.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 595.07s | 84,024.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,109.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.84s | 128,473.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 372.46s | 134,243.0 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-17T22:00:13Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.4 444.9,62.3 700.0,131.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="131.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,229.7 444.9,185.1 700.0,186.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#198754"/><circle cx="444.9" cy="185.1" r="4" fill="#198754"/><circle cx="700.0" cy="186.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.2 444.9,264.8 700.0,256.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="264.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.3 444.9,135.2 700.0,105.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="105.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,205.1 444.9,189.7 700.0,206.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="205.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="189.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="206.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,173.8 444.9,96.9 700.0,91.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#20c997"/><circle cx="444.9" cy="96.9" r="4" fill="#20c997"/><circle cx="700.0" cy="91.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,634.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.61s | 157,205.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 425.25s | 117,577.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.47s | 60,709.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.70s | 86,427.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 584.16s | 85,592.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.94s | 62,723.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 247.18s | 40,455.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1097.40s | 45,562.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.12s | 123,183.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.81s | 115,190.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 377.21s | 132,552.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.35s | 74,883.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 119.41s | 83,743.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 675.18s | 74,054.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.76s | 92,902.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.85s | 137,270.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 356.79s | 140,138.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,157.8 444.9,102.4 700.0,76.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.0 444.9,114.6 700.0,187.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.0" r="4" fill="#198754"/><circle cx="444.9" cy="114.6" r="4" fill="#198754"/><circle cx="700.0" cy="187.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.1 444.9,180.9 700.0,200.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="180.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,157.2 444.9,102.6 700.0,98.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="157.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.4 444.9,221.9 700.0,194.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,141.6 444.9,62.3 700.0,105.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="141.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="105.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.05s | 90,505.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.16s | 118,817.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 379.19s | 131,861.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.80s | 56,189.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 88.83s | 112,580.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 665.41s | 75,142.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 16.74s | 59,733.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 127.01s | 78,732.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 724.96s | 68,969.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.01s | 90,810.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.26s | 118,677.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.38s | 120,954.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.91s | 47,824.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.09s | 57,775.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 698.40s | 71,592.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.12s | 98,765.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 71.79s | 139,299.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 425.93s | 117,389.1 | PASS |

:::

:::

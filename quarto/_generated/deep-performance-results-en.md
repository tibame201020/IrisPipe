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
  **Latest measurement:** `2026-10-18T22:10:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,178.0 444.9,144.6 700.0,149.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="144.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="149.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.0 444.9,202.3 700.0,202.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.0" r="4" fill="#198754"/><circle cx="444.9" cy="202.3" r="4" fill="#198754"/><circle cx="700.0" cy="202.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.4 444.9,219.1 700.0,226.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.3 444.9,62.3 700.0,124.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="124.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,194.2 444.9,237.9 700.0,194.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="194.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.1 444.9,135.1 700.0,121.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#20c997"/><circle cx="444.9" cy="135.1" r="4" fill="#20c997"/><circle cx="700.0" cy="121.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.57s | 79,579.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 103.59s | 96,538.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 531.81s | 94,019.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.17s | 61,858.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 148.64s | 67,277.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 743.97s | 67,206.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.21s | 49,470.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.14s | 58,774.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 906.00s | 55,187.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.18s | 98,212.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 72.33s | 138,262.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 467.31s | 106,994.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,398.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 203.05s | 49,249.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 703.20s | 71,103.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.82s | 84,588.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.66s | 101,358.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 461.34s | 108,379.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.4 444.9,113.8 700.0,111.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="111.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.6 444.9,187.6 700.0,110.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.6" r="4" fill="#198754"/><circle cx="444.9" cy="187.6" r="4" fill="#198754"/><circle cx="700.0" cy="110.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,183.1 444.9,228.3 700.0,217.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="228.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="217.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.8 444.9,101.5 700.0,101.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.9 444.9,166.5 700.0,203.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="166.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="203.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,130.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="130.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.61s | 79,302.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.13s | 104,026.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 475.79s | 105,089.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.70s | 59,894.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 144.23s | 69,334.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 472.52s | 105,815.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.00s | 71,408.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 199.40s | 50,149.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 908.19s | 55,054.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.57s | 94,625.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 91.09s | 109,776.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 454.93s | 109,908.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.42s | 48,971.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 126.20s | 79,238.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 809.72s | 61,749.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.24s | 65,603.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.97s | 96,182.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.89s | 128,242.6 | PASS |

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
  **Latest measurement:** `2026-10-19T02:29:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.0 444.9,149.1 700.0,151.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.1 444.9,214.7 700.0,129.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#198754"/><circle cx="444.9" cy="214.7" r="4" fill="#198754"/><circle cx="700.0" cy="129.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,212.7 444.9,242.1 700.0,233.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,90.4 444.9,148.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="90.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.1 444.9,251.1 700.0,245.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.8 444.9,144.3 700.0,140.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.8" r="4" fill="#20c997"/><circle cx="444.9" cy="144.3" r="4" fill="#20c997"/><circle cx="700.0" cy="140.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.54s | 94,831.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.96s | 125,064.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.99s | 123,766.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.18s | 65,884.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.57s | 80,926.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 360.89s | 138,547.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.16s | 82,263.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 159.92s | 62,529.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 734.72s | 68,053.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.08s | 164,582.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.67s | 125,525.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 272.50s | 183,482.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.84s | 50,405.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.26s | 56,413.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 829.74s | 60,259.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.97s | 83,556.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.94s | 128,305.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.71s | 130,645.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">58k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">174k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">232k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,204.7 444.9,159.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="204.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,252.3 444.9,233.8 700.0,223.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="252.3" r="4" fill="#198754"/><circle cx="444.9" cy="233.8" r="4" fill="#198754"/><circle cx="700.0" cy="223.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.2 444.9,265.0 700.0,218.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="265.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="218.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,214.4 444.9,180.9 700.0,84.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="214.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="180.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.4 444.9,262.3 700.0,258.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="262.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,248.4 444.9,166.5 700.0,331.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="248.4" r="4" fill="#20c997"/><circle cx="444.9" cy="166.5" r="4" fill="#20c997"/><circle cx="700.0" cy="331.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.93s | 100,755.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.77s | 135,550.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 237.03s | 210,948.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.64s | 63,950.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.80s | 78,248.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 577.46s | 86,586.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.10s | 82,637.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.73s | 54,134.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 556.70s | 89,815.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.72s | 93,318.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.88s | 119,223.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 257.53s | 194,150.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.32s | 54,594.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 177.84s | 56,231.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.15s | 58,882.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.93s | 66,965.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.71s | 130,356.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 17287.79s | 2,892.2 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-18T22:01:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">192k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,211.3 444.9,150.1 700.0,155.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="155.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.1 444.9,213.5 700.0,205.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.1" r="4" fill="#198754"/><circle cx="444.9" cy="213.5" r="4" fill="#198754"/><circle cx="700.0" cy="205.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.1 444.9,256.2 700.0,257.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="256.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.6 444.9,62.3 700.0,145.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.8 444.9,228.6 700.0,241.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.0 444.9,132.4 700.0,125.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.0" r="4" fill="#20c997"/><circle cx="444.9" cy="132.4" r="4" fill="#20c997"/><circle cx="700.0" cy="125.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,070.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.62s | 118,172.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 434.97s | 114,950.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.93s | 67,001.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.80s | 77,642.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 605.41s | 82,588.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.40s | 57,464.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 198.65s | 50,339.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1010.34s | 49,488.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.77s | 92,893.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.38s | 174,267.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.24s | 120,993.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.16s | 55,063.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 147.07s | 67,996.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 837.42s | 59,707.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.52s | 79,846.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.26s | 129,431.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.96s | 133,704.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,173.9 444.9,136.7 700.0,71.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.0 444.9,169.0 700.0,211.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#198754"/><circle cx="444.9" cy="169.0" r="4" fill="#198754"/><circle cx="700.0" cy="211.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.8 444.9,258.9 700.0,255.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.0 444.9,153.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.9 444.9,233.0 700.0,175.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.7 444.9,111.7 700.0,133.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#20c997"/><circle cx="444.9" cy="111.7" r="4" fill="#20c997"/><circle cx="700.0" cy="133.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.97s | 100,321.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.95s | 123,525.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 304.09s | 164,425.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.39s | 61,016.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.73s | 103,380.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 651.48s | 76,748.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.62s | 40,617.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 211.01s | 47,390.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1004.58s | 49,771.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.15s | 89,702.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.27s | 113,295.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 294.38s | 169,845.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.44s | 57,349.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 157.46s | 63,507.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 502.25s | 99,553.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.92s | 77,411.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 71.92s | 139,033.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.99s | 125,316.1 | PASS |

:::

:::

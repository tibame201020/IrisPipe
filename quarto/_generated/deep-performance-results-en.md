## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-09T00:34:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,119.8 444.9,97.8 700.0,74.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="119.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="74.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,173.8 444.9,191.3 700.0,201.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#198754"/><circle cx="444.9" cy="191.3" r="4" fill="#198754"/><circle cx="700.0" cy="201.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.3 444.9,193.9 700.0,245.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="193.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,149.4 700.0,145.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="149.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.9 444.9,251.5 700.0,234.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,144.7 700.0,122.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="144.7" r="4" fill="#20c997"/><circle cx="700.0" cy="122.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.13s | 140,252.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 64.70s | 154,552.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 294.71s | 169,660.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.52s | 105,020.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 106.79s | 93,644.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 573.48s | 87,187.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.51s | 51,261.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 108.76s | 91,945.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 858.02s | 58,273.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 5.63s | 177,714.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.68s | 120,952.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.88s | 123,797.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.69s | 53,501.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.90s | 54,378.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 759.46s | 65,836.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.00s | 83,347.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.63s | 124,029.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.83s | 138,186.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.4 444.9,95.1 700.0,137.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="95.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.4 444.9,218.2 700.0,222.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#198754"/><circle cx="444.9" cy="218.2" r="4" fill="#198754"/><circle cx="700.0" cy="222.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.2 444.9,249.7 700.0,250.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.1 444.9,62.3 700.0,147.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.3 444.9,248.8 700.0,171.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="171.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.5 444.9,140.3 700.0,151.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.5" r="4" fill="#20c997"/><circle cx="444.9" cy="140.3" r="4" fill="#20c997"/><circle cx="700.0" cy="151.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.52s | 117,398.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.99s | 161,318.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.22s | 132,901.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.95s | 71,684.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.27s | 78,573.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 662.10s | 75,517.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.89s | 50,281.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.41s | 57,336.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 878.23s | 56,932.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.48s | 105,496.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 54.52s | 183,408.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 395.65s | 126,373.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.65s | 85,866.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.44s | 57,991.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 454.11s | 110,105.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.24s | 81,726.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 76.38s | 130,917.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 404.81s | 123,513.2 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-09T00:26:36Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,157.3 444.9,100.8 700.0,153.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="157.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="100.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="153.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.5 444.9,216.6 700.0,177.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.5" r="4" fill="#198754"/><circle cx="444.9" cy="216.6" r="4" fill="#198754"/><circle cx="700.0" cy="177.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.2 444.9,252.5 700.0,212.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.5 444.9,62.3 700.0,158.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.9 444.9,242.2 700.0,237.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.9 444.9,168.0 700.0,135.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.9" r="4" fill="#20c997"/><circle cx="444.9" cy="168.0" r="4" fill="#20c997"/><circle cx="700.0" cy="135.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.25s | 121,168.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.64s | 159,647.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.46s | 123,927.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,292.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 123.89s | 80,716.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 466.33s | 107,219.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.73s | 48,250.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.84s | 56,230.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 599.66s | 83,380.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.78s | 128,518.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 53.78s | 185,942.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 416.16s | 120,145.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.46s | 60,753.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 158.13s | 63,239.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 755.21s | 66,206.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.72s | 85,324.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.83s | 113,856.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.02s | 136,233.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">221k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,159.4 444.9,161.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="159.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="161.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.1 444.9,192.8 700.0,229.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.1" r="4" fill="#198754"/><circle cx="444.9" cy="192.8" r="4" fill="#198754"/><circle cx="700.0" cy="229.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.3 444.9,254.6 700.0,256.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="256.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,204.3 444.9,180.7 700.0,154.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="204.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="180.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,230.7 444.9,253.1 700.0,253.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="230.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="253.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,236.6 444.9,160.3 700.0,152.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="236.6" r="4" fill="#20c997"/><circle cx="444.9" cy="160.3" r="4" fill="#20c997"/><circle cx="700.0" cy="152.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.71s | 129,617.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.92s | 128,333.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 248.32s | 201,355.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.74s | 67,851.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 95.22s | 105,016.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 638.82s | 78,269.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.44s | 51,437.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.49s | 59,349.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 866.18s | 57,724.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.36s | 96,525.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.77s | 113,932.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 375.32s | 133,219.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.99s | 76,982.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.35s | 60,478.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 834.86s | 59,890.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.76s | 72,658.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.52s | 129,007.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 370.23s | 135,050.5 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-08T00:32:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,108.6 444.9,133.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.9 444.9,137.5 700.0,126.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.9" r="4" fill="#198754"/><circle cx="444.9" cy="137.5" r="4" fill="#198754"/><circle cx="700.0" cy="126.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.9 444.9,169.4 700.0,205.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="169.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.1 444.9,120.7 700.0,101.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.3 444.9,223.5 700.0,235.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="235.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,135.6 444.9,95.6 700.0,142.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="135.6" r="4" fill="#20c997"/><circle cx="444.9" cy="95.6" r="4" fill="#20c997"/><circle cx="700.0" cy="142.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.85s | 112,994.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.65s | 100,353.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 367.40s | 136,092.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.02s | 62,418.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 101.46s | 98,563.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 480.57s | 104,043.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.24s | 44,955.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 121.00s | 82,641.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 772.30s | 64,741.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.02s | 99,760.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.53s | 106,915.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 429.41s | 116,439.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.10s | 45,250.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.74s | 55,637.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 1009.96s | 49,506.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.05s | 99,502.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.72s | 119,447.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 520.55s | 96,051.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">140k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,147.7 444.9,94.8 700.0,111.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="147.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="111.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,205.1 444.9,188.4 700.0,188.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="205.1" r="4" fill="#198754"/><circle cx="444.9" cy="188.4" r="4" fill="#198754"/><circle cx="700.0" cy="188.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.1 444.9,226.6 700.0,163.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="163.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.0 444.9,129.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="129.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.7 444.9,159.0 700.0,220.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="159.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,182.3 444.9,125.9 700.0,70.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="182.3" r="4" fill="#20c997"/><circle cx="444.9" cy="125.9" r="4" fill="#20c997"/><circle cx="700.0" cy="70.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.40s | 87,688.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 88.91s | 112,475.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 477.33s | 104,749.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.44s | 60,834.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 145.70s | 68,633.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 727.69s | 68,710.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.82s | 45,835.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 197.05s | 50,748.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 621.64s | 80,432.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.54s | 86,625.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 104.05s | 96,107.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 391.58s | 127,686.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.18s | 45,081.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 121.39s | 82,377.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 934.65s | 53,496.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.99s | 71,474.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.13s | 97,914.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 404.36s | 123,652.8 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-09T00:36:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,145.6 444.9,82.5 700.0,84.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="82.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,120.7 444.9,91.5 700.0,171.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="120.7" r="4" fill="#198754"/><circle cx="444.9" cy="91.5" r="4" fill="#198754"/><circle cx="700.0" cy="171.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.9 444.9,226.1 700.0,147.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="147.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,125.8 444.9,73.7 700.0,80.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="125.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="80.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,206.9 700.0,217.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="206.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="217.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,159.7 444.9,82.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="159.7" r="4" fill="#20c997"/><circle cx="444.9" cy="82.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.60s | 94,375.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.46s | 125,849.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.55s | 124,827.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.36s | 106,814.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.40s | 121,356.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 612.68s | 81,609.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.39s | 54,386.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 184.28s | 54,264.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 534.94s | 93,468.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.59s | 104,275.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.79s | 130,225.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.38s | 127,103.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.04s | 49,910.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 156.58s | 63,866.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 851.73s | 58,704.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.45s | 87,374.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.35s | 126,030.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.85s | 135,926.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">215k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.8 444.9,147.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,246.4 444.9,213.9 700.0,197.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#198754"/><circle cx="444.9" cy="213.9" r="4" fill="#198754"/><circle cx="700.0" cy="197.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.3 444.9,258.4 700.0,210.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="210.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,185.8 444.9,175.0 700.0,155.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="185.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="175.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="155.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.6 444.9,210.5 700.0,251.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="251.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.1 444.9,157.5 700.0,152.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#20c997"/><circle cx="444.9" cy="157.5" r="4" fill="#20c997"/><circle cx="700.0" cy="152.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.96s | 100,371.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.51s | 134,204.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 256.14s | 195,208.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.78s | 63,383.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.33s | 86,709.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 506.31s | 98,754.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.87s | 72,087.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.37s | 54,834.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 560.68s | 89,177.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.37s | 106,780.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.30s | 114,543.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 388.27s | 128,777.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.79s | 53,217.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 112.19s | 89,135.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 838.50s | 59,630.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.26s | 81,539.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.69s | 127,082.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.78s | 130,622.7 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-09T00:27:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,192.0 444.9,132.6 700.0,134.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="132.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="134.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.0 444.9,208.8 700.0,192.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.8" r="4" fill="#198754"/><circle cx="700.0" cy="192.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.3 444.9,255.1 700.0,243.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.1 444.9,62.3 700.0,137.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.2 444.9,181.0 700.0,228.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="181.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,218.2 444.9,138.9 700.0,117.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="218.2" r="4" fill="#20c997"/><circle cx="444.9" cy="138.9" r="4" fill="#20c997"/><circle cx="700.0" cy="117.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.77s | 92,859.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 76.05s | 131,494.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.54s | 130,027.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.09s | 66,269.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.95s | 82,003.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 541.73s | 92,296.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.08s | 76,470.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 192.63s | 51,913.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 840.07s | 59,518.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.41s | 96,061.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 56.45s | 177,151.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 388.90s | 128,568.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.53s | 51,192.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 99.94s | 100,059.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 725.58s | 68,910.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.18s | 75,855.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.51s | 127,367.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 353.68s | 141,372.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,175.6 444.9,62.3 700.0,121.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="121.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.1 444.9,216.2 700.0,130.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.1" r="4" fill="#198754"/><circle cx="444.9" cy="216.2" r="4" fill="#198754"/><circle cx="700.0" cy="130.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.3 444.9,246.3 700.0,189.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,201.4 444.9,140.7 700.0,120.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="201.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.9 444.9,172.7 700.0,243.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="172.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,226.0 444.9,145.5 700.0,130.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="226.0" r="4" fill="#20c997"/><circle cx="444.9" cy="145.5" r="4" fill="#20c997"/><circle cx="700.0" cy="130.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.58s | 104,427.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 55.96s | 178,689.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 356.55s | 140,233.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.92s | 62,822.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.43s | 77,864.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 373.52s | 133,860.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.91s | 50,223.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 172.07s | 58,116.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 524.19s | 95,385.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.42s | 87,542.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 78.56s | 127,296.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 354.99s | 140,850.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.80s | 50,505.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 94.07s | 106,308.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.21s | 60,298.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.01s | 71,392.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.54s | 124,168.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 373.45s | 133,886.7 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-09T00:40:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">137k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">183k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,193.1 444.9,150.3 700.0,140.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="193.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.1 444.9,184.6 700.0,124.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.1" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="124.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.3 444.9,254.2 700.0,264.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,183.4 444.9,120.6 700.0,144.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="183.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.1 444.9,245.2 700.0,225.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,170.5 444.9,62.3 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="170.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.54s | 86,662.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.64s | 112,812.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.76s | 118,550.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 17.44s | 57,339.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 108.87s | 91,850.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 389.35s | 128,420.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.63s | 46,236.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 202.72s | 49,327.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1152.57s | 43,381.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,609.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.35s | 130,979.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 428.92s | 116,572.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.16s | 45,136.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.31s | 54,852.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 745.42s | 67,076.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.95s | 100,462.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.03s | 166,575.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 382.54s | 130,704.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.1 444.9,131.1 700.0,136.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="136.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.5 444.9,216.3 700.0,222.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.5" r="4" fill="#198754"/><circle cx="444.9" cy="216.3" r="4" fill="#198754"/><circle cx="700.0" cy="222.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.1 444.9,258.7 700.0,258.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="258.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,200.5 444.9,164.0 700.0,147.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="200.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="164.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,254.2 444.9,183.4 700.0,247.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="254.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="247.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.7 444.9,137.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.7" r="4" fill="#20c997"/><circle cx="444.9" cy="137.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.25s | 97,599.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.33s | 131,004.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.11s | 127,842.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 17.01s | 58,788.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.09s | 76,282.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 689.27s | 72,540.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.27s | 42,977.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 204.09s | 48,998.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1017.47s | 49,141.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.57s | 86,423.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 90.98s | 109,910.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 415.87s | 120,229.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.26s | 51,931.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 102.67s | 97,402.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 893.25s | 55,975.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,591.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.78s | 126,935.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 285.31s | 175,246.1 | PASS |

:::

:::

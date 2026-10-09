## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-08T00:17:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,84.5 444.9,109.9 700.0,99.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="84.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,185.2 444.9,179.5 700.0,91.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="185.2" r="4" fill="#198754"/><circle cx="444.9" cy="179.5" r="4" fill="#198754"/><circle cx="700.0" cy="91.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.7 444.9,236.0 700.0,228.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.2 444.9,129.2 700.0,110.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="129.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,224.5 444.9,207.7 700.0,225.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,184.8 444.9,110.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#20c997"/><circle cx="444.9" cy="110.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.33s | 136,518.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.52s | 122,667.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 389.01s | 128,530.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.25s | 81,659.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.00s | 84,743.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 376.85s | 132,677.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.45s | 51,400.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.39s | 53,941.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 861.67s | 58,026.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,950.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.17s | 112,147.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.78s | 122,314.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.61s | 60,190.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.20s | 69,347.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 834.43s | 59,921.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.22s | 81,833.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.71s | 122,385.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 336.42s | 148,622.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,110.6 444.9,147.0 700.0,65.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="110.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,233.3 444.9,233.2 700.0,146.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="233.3" r="4" fill="#198754"/><circle cx="444.9" cy="233.2" r="4" fill="#198754"/><circle cx="700.0" cy="146.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.8 444.9,210.2 700.0,249.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,166.6 700.0,157.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="166.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.7 444.9,207.4 700.0,252.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="252.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,223.4 444.9,134.8 700.0,142.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="223.4" r="4" fill="#20c997"/><circle cx="444.9" cy="134.8" r="4" fill="#20c997"/><circle cx="700.0" cy="142.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.54s | 152,835.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.10s | 128,045.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 272.49s | 183,496.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.44s | 69,261.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 144.25s | 69,324.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 389.62s | 128,330.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.86s | 45,741.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 117.66s | 84,992.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 855.51s | 58,444.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.38s | 185,735.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 87.19s | 114,693.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.28s | 120,692.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.49s | 51,303.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 115.05s | 86,917.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 885.76s | 56,448.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.16s | 76,010.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.34s | 136,341.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.27s | 130,799.0 | PASS |

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
  **Latest measurement:** `2026-10-08T00:20:47Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,192.6 444.9,62.3 700.0,137.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="192.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.6 444.9,216.1 700.0,108.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#198754"/><circle cx="444.9" cy="216.1" r="4" fill="#198754"/><circle cx="700.0" cy="108.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.7 444.9,242.4 700.0,196.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.2 444.9,139.4 700.0,129.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="129.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.0 444.9,246.8 700.0,242.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.1 444.9,152.1 700.0,102.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.1" r="4" fill="#20c997"/><circle cx="444.9" cy="152.1" r="4" fill="#20c997"/><circle cx="700.0" cy="102.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.89s | 91,835.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 56.85s | 175,889.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 392.92s | 127,253.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.44s | 69,252.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.42s | 76,673.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 342.80s | 145,859.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.38s | 54,398.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 167.43s | 59,727.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 559.16s | 89,420.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.02s | 110,827.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.26s | 126,167.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 377.26s | 132,536.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.66s | 63,848.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.75s | 56,900.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 837.60s | 59,694.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.58s | 86,348.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.78s | 117,957.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 334.04s | 149,681.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">159k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,191.4 444.9,62.3 700.0,145.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="145.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.1 444.9,225.6 700.0,145.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#198754"/><circle cx="444.9" cy="225.6" r="4" fill="#198754"/><circle cx="700.0" cy="145.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,258.4 444.9,232.2 700.0,241.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="258.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.7 444.9,172.6 700.0,145.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.1 444.9,248.2 700.0,183.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,221.6 444.9,94.7 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#20c997"/><circle cx="444.9" cy="94.7" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.83s | 101,760.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 51.73s | 193,307.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 371.87s | 134,455.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,585.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.93s | 77,564.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 372.24s | 134,321.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.42s | 54,300.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 137.29s | 72,840.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 755.76s | 66,158.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.97s | 111,507.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.88s | 115,105.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 371.80s | 134,480.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.34s | 54,537.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.58s | 61,509.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 464.90s | 107,550.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.44s | 80,405.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 58.70s | 170,351.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.02s | 133,683.8 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-08T00:12:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">185k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.8 444.9,110.7 700.0,142.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="110.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.9 444.9,200.5 700.0,173.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.9" r="4" fill="#198754"/><circle cx="444.9" cy="200.5" r="4" fill="#198754"/><circle cx="700.0" cy="173.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,209.3 444.9,237.0 700.0,213.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="209.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.6 444.9,99.0 700.0,134.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,244.5 700.0,172.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="172.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.4 444.9,116.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.4" r="4" fill="#20c997"/><circle cx="444.9" cy="116.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.70s | 114,982.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 72.17s | 138,552.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 420.74s | 118,838.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.18s | 98,241.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.38s | 83,068.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 500.55s | 99,890.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.88s | 77,621.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 165.19s | 60,535.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 663.55s | 75,351.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.61s | 104,025.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 68.62s | 145,728.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 404.31s | 123,669.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.67s | 50,849.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 178.91s | 55,894.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 498.96s | 100,208.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.00s | 76,923.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.20s | 134,772.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 296.85s | 168,436.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">178k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">238k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.0 444.9,62.3 700.0,156.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.1 444.9,212.5 700.0,222.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.1" r="4" fill="#198754"/><circle cx="444.9" cy="212.5" r="4" fill="#198754"/><circle cx="700.0" cy="222.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.3 444.9,212.9 700.0,216.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,209.0 444.9,85.5 700.0,172.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="85.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="172.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.4 444.9,232.9 700.0,254.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,240.8 444.9,139.5 700.0,184.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#20c997"/><circle cx="444.9" cy="139.5" r="4" fill="#20c997"/><circle cx="700.0" cy="184.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,644.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 46.25s | 216,202.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 354.24s | 141,149.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.88s | 77,627.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.98s | 97,105.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 558.08s | 89,592.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.87s | 45,716.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 103.31s | 96,799.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 534.10s | 93,614.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,880.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 50.55s | 197,823.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 388.61s | 128,665.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.52s | 51,237.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 123.53s | 80,955.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 786.96s | 63,535.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.39s | 74,677.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 64.53s | 154,976.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 418.41s | 119,500.6 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-08T00:20:11Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,169.4 444.9,104.4 700.0,92.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="92.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,206.8 444.9,182.8 700.0,156.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#198754"/><circle cx="444.9" cy="182.8" r="4" fill="#198754"/><circle cx="700.0" cy="156.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.1 444.9,240.8 700.0,175.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,142.2 444.9,99.6 700.0,71.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="142.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="71.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,215.4 444.9,208.9 700.0,201.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="215.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="208.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,135.8 444.9,71.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="135.8" r="4" fill="#20c997"/><circle cx="444.9" cy="71.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.32s | 81,149.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 88.47s | 113,035.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.32s | 118,674.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.91s | 62,833.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.03s | 74,611.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 572.54s | 87,330.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.03s | 41,609.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 216.62s | 46,164.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 640.63s | 78,047.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.58s | 94,500.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.66s | 115,397.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 387.09s | 129,169.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.06s | 58,627.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 161.78s | 61,811.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 764.19s | 65,428.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.24s | 97,627.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.44s | 129,135.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.05s | 133,670.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,198.9 444.9,134.8 700.0,139.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="198.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,241.5 444.9,213.8 700.0,134.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="241.5" r="4" fill="#198754"/><circle cx="444.9" cy="213.8" r="4" fill="#198754"/><circle cx="700.0" cy="134.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.6 444.9,207.7 700.0,255.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.1 444.9,152.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="152.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,267.5 444.9,248.0 700.0,248.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="267.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="248.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.8 444.9,152.4 700.0,137.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.8" r="4" fill="#20c997"/><circle cx="444.9" cy="152.4" r="4" fill="#20c997"/><circle cx="700.0" cy="137.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.10s | 90,130.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.41s | 132,604.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 386.73s | 129,288.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.15s | 61,931.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.52s | 80,307.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 377.08s | 132,598.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.41s | 39,362.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 118.62s | 84,304.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 951.29s | 52,560.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.59s | 151,630.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.76s | 120,832.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 276.79s | 180,644.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.36s | 44,730.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.48s | 57,644.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 868.57s | 57,565.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.35s | 69,710.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.69s | 120,932.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.72s | 130,643.8 | PASS |

:::

:::

## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T00:02:43Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">92k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">138k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">184k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,173.3 444.9,135.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="135.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.2 444.9,206.7 700.0,204.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.2" r="4" fill="#198754"/><circle cx="444.9" cy="206.7" r="4" fill="#198754"/><circle cx="700.0" cy="204.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.4 444.9,241.5 700.0,247.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.1 444.9,131.0 700.0,120.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="120.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.5 444.9,228.8 700.0,238.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="228.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.5 444.9,134.9 700.0,125.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.5" r="4" fill="#20c997"/><circle cx="444.9" cy="134.9" r="4" fill="#20c997"/><circle cx="700.0" cy="125.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.06s | 99,383.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.65s | 122,474.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 298.27s | 167,631.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.17s | 70,591.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.84s | 78,837.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.62s | 80,049.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.69s | 48,325.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.93s | 57,493.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 929.10s | 53,815.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.35s | 106,906.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.76s | 125,374.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 379.57s | 131,729.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.59s | 68,544.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 153.18s | 65,283.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 845.83s | 59,113.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.66s | 85,748.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.32s | 122,966.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.98s | 128,874.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">157k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,83.7 700.0,87.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="87.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,173.9 444.9,112.4 700.0,185.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="173.9" r="4" fill="#198754"/><circle cx="444.9" cy="112.4" r="4" fill="#198754"/><circle cx="700.0" cy="185.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,213.6 700.0,227.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,139.1 444.9,160.4 700.0,98.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="139.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.6 444.9,169.3 700.0,219.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="169.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="219.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,127.8 444.9,112.3 700.0,88.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="127.8" r="4" fill="#20c997"/><circle cx="444.9" cy="112.3" r="4" fill="#20c997"/><circle cx="700.0" cy="88.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.03s | 142,328.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.24s | 131,163.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 387.49s | 129,036.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 11.90s | 84,061.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 86.08s | 116,172.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 640.92s | 78,012.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.16s | 47,252.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 157.83s | 63,359.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 894.64s | 55,888.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.78s | 102,249.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 109.72s | 91,137.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.74s | 123,537.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,825.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 115.67s | 86,452.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.63s | 60,268.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.25s | 108,143.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.03s | 116,233.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.35s | 128,420.1 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T23:52:07Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,69.9 444.9,104.1 700.0,96.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="69.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="104.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="96.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,167.6 444.9,75.1 700.0,139.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#198754"/><circle cx="444.9" cy="75.1" r="4" fill="#198754"/><circle cx="700.0" cy="139.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,236.2 444.9,220.8 700.0,212.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="236.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="220.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="212.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.6 444.9,92.8 700.0,90.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="92.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="90.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.8 444.9,218.6 700.0,208.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="208.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.9 444.9,93.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.40s | 135,062.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.02s | 117,622.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 411.42s | 121,529.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 11.73s | 85,273.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 75.53s | 132,394.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 500.84s | 99,831.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.88s | 50,314.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.90s | 58,174.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 798.17s | 62,643.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.74s | 102,627.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.02s | 123,423.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 401.50s | 124,534.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.59s | 51,054.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 168.58s | 59,320.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 773.87s | 64,610.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.40s | 87,696.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.17s | 123,202.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.83s | 138,953.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">65k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">129k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">194k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">258k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,217.2 444.9,186.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="186.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,254.4 444.9,231.3 700.0,242.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="254.4" r="4" fill="#198754"/><circle cx="444.9" cy="231.3" r="4" fill="#198754"/><circle cx="700.0" cy="242.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.6 444.9,266.6 700.0,267.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="267.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.0 444.9,192.8 700.0,210.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="192.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="210.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,279.3 444.9,252.3 700.0,267.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="279.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="267.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.7 444.9,185.3 700.0,185.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.7" r="4" fill="#20c997"/><circle cx="444.9" cy="185.3" r="4" fill="#20c997"/><circle cx="700.0" cy="185.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.86s | 101,389.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.12s | 128,003.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 212.96s | 234,787.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.41s | 69,377.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 112.05s | 89,242.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 628.61s | 79,540.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.90s | 50,243.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.83s | 58,882.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 860.60s | 58,098.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.81s | 172,206.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.69s | 122,421.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 465.97s | 107,303.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.84s | 47,989.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 140.46s | 71,196.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 854.05s | 58,544.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.45s | 80,347.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.58s | 128,904.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 388.65s | 128,651.4 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T02:09:12Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">69k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">138k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,164.6 444.9,72.2 700.0,127.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.5 444.9,200.9 700.0,183.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.5" r="4" fill="#198754"/><circle cx="444.9" cy="200.9" r="4" fill="#198754"/><circle cx="700.0" cy="183.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,187.7 444.9,208.0 700.0,211.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="187.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="211.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,84.6 700.0,121.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.4 444.9,227.0 700.0,158.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="158.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.8 444.9,170.8 700.0,121.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.8" r="4" fill="#20c997"/><circle cx="444.9" cy="170.8" r="4" fill="#20c997"/><circle cx="700.0" cy="121.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,302.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.80s | 120,780.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 523.75s | 95,465.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 18.52s | 53,981.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 162.29s | 61,617.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 717.81s | 69,656.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.77s | 67,704.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 171.31s | 58,374.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 883.49s | 56,593.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.98s | 125,329.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.91s | 115,058.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 510.35s | 97,972.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.84s | 45,789.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 201.43s | 49,645.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 615.28s | 81,263.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 16.59s | 60,270.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 132.49s | 75,478.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 508.39s | 98,349.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">151k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,167.5 444.9,62.3 700.0,122.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,214.2 444.9,202.0 700.0,191.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="214.2" r="4" fill="#198754"/><circle cx="444.9" cy="202.0" r="4" fill="#198754"/><circle cx="700.0" cy="191.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,235.0 444.9,254.2 700.0,222.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="235.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.9 444.9,130.1 700.0,110.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="110.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.4 444.9,205.0 700.0,224.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="205.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.0 444.9,156.5 700.0,105.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.0" r="4" fill="#20c997"/><circle cx="444.9" cy="156.5" r="4" fill="#20c997"/><circle cx="700.0" cy="105.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.83s | 84,523.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.65s | 137,640.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 466.12s | 107,268.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.40s | 60,990.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 149.01s | 67,109.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 692.21s | 72,232.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.81s | 50,489.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 245.28s | 40,769.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.96s | 56,692.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.17s | 109,039.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 96.69s | 103,428.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 441.86s | 113,158.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.36s | 44,728.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 152.42s | 65,609.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 894.04s | 55,925.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,607.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 111.00s | 90,088.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 432.13s | 115,706.2 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-14T00:02:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,167.6 444.9,66.9 700.0,114.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="66.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.3 444.9,186.1 700.0,125.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#198754"/><circle cx="444.9" cy="186.1" r="4" fill="#198754"/><circle cx="700.0" cy="125.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.4 444.9,237.1 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,122.7 700.0,137.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="122.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,193.9 444.9,239.0 700.0,225.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="193.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.6 444.9,162.9 700.0,118.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.6" r="4" fill="#20c997"/><circle cx="444.9" cy="162.9" r="4" fill="#20c997"/><circle cx="700.0" cy="118.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.98s | 100,210.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 62.31s | 160,477.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 379.08s | 131,896.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.50s | 74,068.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.20s | 89,124.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 399.52s | 125,148.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,399.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.71s | 58,580.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 857.19s | 58,330.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.12s | 163,265.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.69s | 127,074.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 422.94s | 118,219.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.84s | 84,445.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.05s | 57,456.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 761.23s | 65,683.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.01s | 76,864.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 97.05s | 103,043.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 386.50s | 129,366.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,156.6 444.9,134.8 700.0,107.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.5 444.9,205.3 700.0,203.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.3" r="4" fill="#198754"/><circle cx="700.0" cy="203.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,249.8 444.9,239.8 700.0,241.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="249.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.8 444.9,138.7 700.0,183.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="183.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.7 444.9,239.6 700.0,148.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="239.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="148.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.1 444.9,195.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#20c997"/><circle cx="444.9" cy="195.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.36s | 106,883.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 83.37s | 119,941.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 366.86s | 136,292.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,216.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.73s | 77,684.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.55s | 79,045.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.59s | 51,043.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.30s | 57,045.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 896.26s | 55,787.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.69s | 103,167.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.05s | 117,572.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 551.61s | 90,644.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.28s | 49,312.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.06s | 57,121.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 447.24s | 111,797.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,631.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 119.32s | 83,807.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 306.06s | 163,366.1 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T23:51:21Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.4 444.9,109.8 700.0,105.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.3 444.9,81.0 700.0,181.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.3" r="4" fill="#198754"/><circle cx="444.9" cy="81.0" r="4" fill="#198754"/><circle cx="700.0" cy="181.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.6 444.9,230.6 700.0,222.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,87.5 444.9,77.1 700.0,109.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="87.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="77.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.5 444.9,221.8 700.0,121.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="121.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.6 444.9,93.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#20c997"/><circle cx="444.9" cy="93.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.94s | 91,399.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.88s | 122,135.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 401.41s | 124,559.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.00s | 71,433.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 72.60s | 137,748.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 598.87s | 83,490.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.18s | 49,558.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.63s | 56,615.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 822.03s | 60,824.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.45s | 134,192.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 71.52s | 139,828.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.36s | 122,441.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.73s | 50,689.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.96s | 61,366.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 432.45s | 115,619.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.82s | 67,476.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.26s | 131,123.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 338.09s | 147,890.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">210k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,185.9 444.9,105.2 700.0,89.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="185.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,226.4 444.9,213.5 700.0,224.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="226.4" r="4" fill="#198754"/><circle cx="444.9" cy="213.5" r="4" fill="#198754"/><circle cx="700.0" cy="224.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.5 444.9,253.0 700.0,247.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,163.6 444.9,62.3 700.0,185.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="163.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="185.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.9 444.9,251.2 700.0,249.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.4 444.9,161.5 700.0,137.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.4" r="4" fill="#20c997"/><circle cx="444.9" cy="161.5" r="4" fill="#20c997"/><circle cx="700.0" cy="137.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.57s | 104,504.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 62.08s | 161,085.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 290.77s | 171,954.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.14s | 76,115.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 117.44s | 85,149.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 644.93s | 77,527.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.78s | 45,920.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.88s | 57,510.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 814.73s | 61,370.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.32s | 120,163.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 52.30s | 191,190.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 478.05s | 104,590.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.50s | 51,268.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.26s | 58,734.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 829.77s | 60,257.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.11s | 109,793.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.21s | 121,638.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 361.26s | 138,402.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T02:00:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,204.4 444.9,147.3 700.0,155.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="204.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="155.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.7 444.9,200.4 700.0,208.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#198754"/><circle cx="444.9" cy="200.4" r="4" fill="#198754"/><circle cx="700.0" cy="208.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,270.7 444.9,254.3 700.0,261.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="270.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,109.4 444.9,144.2 700.0,132.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="109.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="132.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.5 444.9,207.7 700.0,241.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="207.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.6 444.9,62.3 700.0,116.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.6" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="116.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,973.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 84.92s | 117,757.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 442.69s | 112,946.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.45s | 69,228.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.44s | 84,427.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 629.84s | 79,385.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.78s | 40,353.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 197.55s | 50,620.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1090.79s | 45,838.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.07s | 141,522.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.52s | 119,730.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 393.09s | 127,196.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.38s | 46,772.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 125.20s | 79,874.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 855.28s | 58,460.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.13s | 82,447.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.44s | 171,121.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 363.95s | 137,381.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">204k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,131.9 444.9,127.5 700.0,147.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="131.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.7 444.9,229.0 700.0,225.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.7" r="4" fill="#198754"/><circle cx="444.9" cy="229.0" r="4" fill="#198754"/><circle cx="700.0" cy="225.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,283.0 444.9,231.2 700.0,277.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="283.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="277.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,198.9 444.9,190.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="198.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="190.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.5 444.9,198.9 700.0,191.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.7 444.9,99.6 700.0,137.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.7" r="4" fill="#20c997"/><circle cx="444.9" cy="99.6" r="4" fill="#20c997"/><circle cx="700.0" cy="137.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.25s | 138,026.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 70.92s | 141,007.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.51s | 127,385.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.85s | 59,350.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.82s | 72,034.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 669.70s | 74,660.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.31s | 35,328.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 141.81s | 70,516.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1289.63s | 38,770.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,472.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 101.84s | 98,189.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 269.79s | 185,329.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.12s | 45,205.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 108.10s | 92,509.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 513.66s | 97,340.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.64s | 93,958.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 62.52s | 159,956.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 371.75s | 134,497.2 | PASS |

:::

:::

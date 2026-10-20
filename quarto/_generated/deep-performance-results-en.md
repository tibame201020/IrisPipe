## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-20T22:48:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">146k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,127.0 444.9,74.8 700.0,80.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="127.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="74.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="80.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,114.8 444.9,175.8 700.0,149.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="114.8" r="4" fill="#198754"/><circle cx="444.9" cy="175.8" r="4" fill="#198754"/><circle cx="700.0" cy="149.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.1 444.9,206.8 700.0,216.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.1 444.9,90.2 700.0,89.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.1 444.9,152.4 700.0,131.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="152.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="131.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,162.6 444.9,100.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="162.6" r="4" fill="#20c997"/><circle cx="444.9" cy="100.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.90s | 100,969.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.16s | 126,332.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 405.12s | 123,419.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.35s | 106,906.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.35s | 77,310.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 553.63s | 90,313.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.93s | 45,599.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 160.61s | 62,263.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 867.07s | 57,665.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.00s | 111,148.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.13s | 118,866.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 419.43s | 119,209.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.09s | 52,369.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 112.79s | 88,658.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 506.45s | 98,725.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.95s | 83,696.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.83s | 113,851.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.61s | 132,410.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">182k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,156.5 444.9,139.3 700.0,117.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,151.4 444.9,160.3 700.0,204.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="151.4" r="4" fill="#198754"/><circle cx="444.9" cy="160.3" r="4" fill="#198754"/><circle cx="700.0" cy="204.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.4 444.9,221.0 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,176.7 444.9,84.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="84.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.1 444.9,229.4 700.0,236.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,203.4 444.9,143.7 700.0,114.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="203.4" r="4" fill="#20c997"/><circle cx="444.9" cy="143.7" r="4" fill="#20c997"/><circle cx="700.0" cy="114.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.25s | 108,108.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 84.35s | 118,555.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 379.57s | 131,728.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 8.99s | 111,210.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 94.48s | 105,847.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 631.52s | 79,174.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 23.04s | 43,402.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 144.78s | 69,069.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 920.69s | 54,307.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.43s | 95,904.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 66.01s | 151,487.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 302.63s | 165,216.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.77s | 56,265.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 156.30s | 63,981.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 833.86s | 59,962.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.54s | 79,744.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.31s | 115,861.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.98s | 133,340.8 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-20T22:44:32Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">162k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">216k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,182.9 444.9,103.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="182.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="103.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.5 444.9,212.4 700.0,186.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#198754"/><circle cx="444.9" cy="212.4" r="4" fill="#198754"/><circle cx="700.0" cy="186.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.4 444.9,215.4 700.0,253.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,187.6 444.9,178.3 700.0,169.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="187.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="169.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,245.5 444.9,255.3 700.0,252.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="245.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="255.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="252.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.9 444.9,136.3 700.0,155.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.9" r="4" fill="#20c997"/><circle cx="444.9" cy="136.3" r="4" fill="#20c997"/><circle cx="700.0" cy="155.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,469.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 59.99s | 166,683.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 254.78s | 196,249.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.36s | 65,095.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 113.37s | 88,207.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 468.50s | 106,723.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.03s | 58,713.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 116.21s | 86,050.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.59s | 58,644.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.43s | 106,033.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.66s | 112,791.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 420.00s | 119,049.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.53s | 64,395.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.31s | 57,370.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.80s | 59,185.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.96s | 111,607.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.95s | 142,959.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 388.01s | 128,862.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.6 444.9,151.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="151.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,189.2 444.9,227.4 700.0,223.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="189.2" r="4" fill="#198754"/><circle cx="444.9" cy="227.4" r="4" fill="#198754"/><circle cx="700.0" cy="223.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.8 444.9,262.3 700.0,253.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,177.2 444.9,168.7 700.0,179.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="177.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="168.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="179.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,261.8 444.9,241.3 700.0,241.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="261.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="241.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,237.3 444.9,191.1 700.0,144.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="237.3" r="4" fill="#20c997"/><circle cx="444.9" cy="191.1" r="4" fill="#20c997"/><circle cx="700.0" cy="144.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,920.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.52s | 130,678.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 257.53s | 194,154.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.63s | 103,809.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 130.57s | 76,589.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 628.65s | 79,535.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.91s | 47,826.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.33s | 51,724.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 858.22s | 58,259.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.90s | 112,334.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.47s | 118,378.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 452.39s | 110,524.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.19s | 52,121.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 149.97s | 66,679.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 751.81s | 66,505.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.38s | 69,555.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 97.64s | 102,412.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.37s | 135,734.6 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-19T23:51:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,156.5 444.9,122.4 700.0,120.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="156.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="122.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.1 444.9,108.7 700.0,99.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#198754"/><circle cx="444.9" cy="108.7" r="4" fill="#198754"/><circle cx="700.0" cy="99.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,223.2 444.9,240.2 700.0,194.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="223.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="240.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="194.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.6 444.9,114.6 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="114.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.6 444.9,166.4 700.0,215.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="166.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,133.0 444.9,78.4 700.0,104.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="133.0" r="4" fill="#20c997"/><circle cx="444.9" cy="78.4" r="4" fill="#20c997"/><circle cx="700.0" cy="104.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,051.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 106.20s | 94,160.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 527.14s | 94,850.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,875.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 99.75s | 100,253.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 479.64s | 104,245.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.19s | 49,534.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 238.16s | 41,988.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 803.60s | 62,220.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.34s | 96,749.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 102.41s | 97,643.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.87s | 120,812.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.02s | 47,585.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 133.88s | 74,691.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 947.37s | 52,777.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.17s | 89,493.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.98s | 113,664.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 489.70s | 102,102.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">136k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,102.4 700.0,90.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="90.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.3 444.9,184.3 700.0,181.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.3" r="4" fill="#198754"/><circle cx="444.9" cy="184.3" r="4" fill="#198754"/><circle cx="700.0" cy="181.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,249.9 444.9,165.5 700.0,214.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="249.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="165.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,102.4 700.0,98.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="98.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.7 444.9,154.4 700.0,159.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="154.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,123.6 444.9,111.7 700.0,99.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="123.6" r="4" fill="#20c997"/><circle cx="444.9" cy="111.7" r="4" fill="#20c997"/><circle cx="700.0" cy="99.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.09s | 123,563.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.90s | 105,369.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 451.70s | 110,693.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.27s | 61,466.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 146.41s | 68,299.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 717.61s | 69,676.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.93s | 38,562.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 130.21s | 76,797.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 917.38s | 54,503.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.09s | 123,548.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 94.88s | 105,397.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 465.80s | 107,341.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.78s | 45,915.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 122.24s | 81,809.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 629.90s | 79,377.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.44s | 95,794.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 98.84s | 101,171.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 468.98s | 106,613.4 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-20T22:54:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.7 444.9,136.4 700.0,78.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="78.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.5 444.9,150.2 700.0,188.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.5" r="4" fill="#198754"/><circle cx="444.9" cy="150.2" r="4" fill="#198754"/><circle cx="700.0" cy="188.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.5 444.9,247.6 700.0,200.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.9 444.9,135.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.2 444.9,229.8 700.0,245.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.6 444.9,107.9 700.0,122.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.6" r="4" fill="#20c997"/><circle cx="444.9" cy="107.9" r="4" fill="#20c997"/><circle cx="700.0" cy="122.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.11s | 98,912.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.03s | 129,828.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 298.73s | 167,373.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.59s | 94,419.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 82.77s | 120,810.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 520.47s | 96,067.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.25s | 51,934.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.05s | 57,125.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 569.98s | 87,721.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.01s | 124,890.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.76s | 130,279.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 280.49s | 178,262.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.48s | 54,112.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 145.44s | 68,755.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 850.03s | 58,821.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.67s | 93,703.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.38s | 148,412.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.32s | 139,152.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">166k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">222k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.6 444.9,62.3 700.0,144.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.1 444.9,257.8 700.0,225.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#198754"/><circle cx="444.9" cy="257.8" r="4" fill="#198754"/><circle cx="700.0" cy="225.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.1 444.9,254.1 700.0,258.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,128.6 444.9,167.3 700.0,173.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="128.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="173.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.2 444.9,242.2 700.0,255.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="242.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="255.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,236.0 444.9,171.1 700.0,164.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#20c997"/><circle cx="444.9" cy="171.1" r="4" fill="#20c997"/><circle cx="700.0" cy="164.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.94s | 111,831.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 49.65s | 201,418.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 355.13s | 140,793.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.27s | 70,082.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 175.37s | 57,021.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 617.24s | 81,006.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.24s | 49,399.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.27s | 59,782.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.38s | 56,729.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.56s | 152,415.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.75s | 123,837.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.33s | 119,236.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.27s | 49,321.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 145.92s | 68,530.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 847.22s | 59,016.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.68s | 73,094.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.63s | 121,018.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 396.30s | 126,165.8 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-20T22:44:19Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,164.6 444.9,143.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="164.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.8 444.9,195.5 700.0,187.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#198754"/><circle cx="444.9" cy="195.5" r="4" fill="#198754"/><circle cx="700.0" cy="187.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.6 444.9,230.6 700.0,229.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="229.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,131.1 444.9,142.9 700.0,131.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="131.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.7 444.9,245.1 700.0,175.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="175.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.1 444.9,99.9 700.0,112.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.1" r="4" fill="#20c997"/><circle cx="444.9" cy="99.9" r="4" fill="#20c997"/><circle cx="700.0" cy="112.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.23s | 108,354.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.22s | 121,620.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 288.38s | 173,382.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,039.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.79s | 88,658.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 532.88s | 93,830.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.44s | 46,633.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.71s | 66,351.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 747.85s | 66,858.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.71s | 129,651.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.89s | 122,112.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.37s | 129,408.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.39s | 69,473.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.02s | 57,135.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 493.06s | 101,407.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.30s | 81,294.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.89s | 149,488.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 352.64s | 141,788.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,218.8 444.9,140.0 700.0,115.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="140.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="115.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.6 444.9,198.4 700.0,145.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.6" r="4" fill="#198754"/><circle cx="444.9" cy="198.4" r="4" fill="#198754"/><circle cx="700.0" cy="145.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.3 444.9,267.7 700.0,249.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.5 444.9,62.3 700.0,139.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="139.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.6 444.9,198.8 700.0,242.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.2 444.9,97.0 700.0,156.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.2" r="4" fill="#20c997"/><circle cx="444.9" cy="97.0" r="4" fill="#20c997"/><circle cx="700.0" cy="156.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 13.15s | 76,057.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.33s | 127,665.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 347.44s | 143,910.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.18s | 82,081.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 111.81s | 89,437.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 402.82s | 124,123.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,948.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 226.83s | 44,086.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 888.26s | 56,290.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.50s | 95,210.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.02s | 178,523.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 391.01s | 127,874.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.99s | 83,368.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 112.17s | 89,146.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 827.10s | 60,452.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.75s | 78,443.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 64.20s | 155,765.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 428.99s | 116,554.2 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-20T22:54:53Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">87k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">174k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,191.6 444.9,62.3 700.0,140.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="191.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="140.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.0 444.9,208.0 700.0,97.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.0" r="4" fill="#198754"/><circle cx="444.9" cy="208.0" r="4" fill="#198754"/><circle cx="700.0" cy="97.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.7 444.9,243.0 700.0,248.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="243.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,133.6 444.9,112.4 700.0,111.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="133.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="112.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.7 444.9,229.5 700.0,212.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="212.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.4 444.9,106.1 700.0,104.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.4" r="4" fill="#20c997"/><circle cx="444.9" cy="106.1" r="4" fill="#20c997"/><circle cx="700.0" cy="104.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.03s | 83,104.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 63.29s | 158,007.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 443.05s | 112,854.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.15s | 66,024.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 135.87s | 73,598.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 362.99s | 137,744.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.71s | 59,840.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 187.65s | 53,289.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 996.98s | 50,151.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.57s | 116,672.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 77.55s | 128,949.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 385.32s | 129,762.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.03s | 45,392.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.55s | 61,142.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 702.44s | 71,180.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.46s | 80,276.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.41s | 132,615.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.07s | 133,309.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.3 444.9,162.0 700.0,142.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="162.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.6 444.9,217.0 700.0,137.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.6" r="4" fill="#198754"/><circle cx="444.9" cy="217.0" r="4" fill="#198754"/><circle cx="700.0" cy="137.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.8 444.9,267.3 700.0,258.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="258.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,195.4 444.9,62.3 700.0,151.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="195.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.4 444.9,213.5 700.0,186.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="213.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.0 444.9,101.2 700.0,128.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.0" r="4" fill="#20c997"/><circle cx="444.9" cy="101.2" r="4" fill="#20c997"/><circle cx="700.0" cy="128.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,102.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.44s | 109,363.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 410.57s | 121,781.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.92s | 62,814.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.01s | 74,620.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 400.19s | 124,941.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.25s | 41,228.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 233.64s | 42,800.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1039.67s | 48,092.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.33s | 88,253.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.00s | 172,419.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 431.30s | 115,929.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.20s | 47,163.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 130.16s | 76,829.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 531.50s | 94,072.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.40s | 96,107.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 67.67s | 147,784.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 383.18s | 130,487.0 | PASS |

:::

:::

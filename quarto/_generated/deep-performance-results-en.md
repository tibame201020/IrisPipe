## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-05T00:54:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,179.6 444.9,62.3 700.0,174.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="179.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="174.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.8 444.9,218.0 700.0,219.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#198754"/><circle cx="444.9" cy="218.0" r="4" fill="#198754"/><circle cx="700.0" cy="219.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.3 444.9,260.7 700.0,243.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,106.8 444.9,175.5 700.0,164.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="106.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="175.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="164.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.0 444.9,203.2 700.0,250.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="203.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.6 444.9,125.3 700.0,148.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.6" r="4" fill="#20c997"/><circle cx="444.9" cy="125.3" r="4" fill="#20c997"/><circle cx="700.0" cy="148.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.25s | 108,154.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 52.68s | 189,832.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 447.14s | 111,822.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.40s | 74,626.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.84s | 81,405.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.87s | 80,274.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.57s | 60,346.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 193.40s | 51,707.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 785.45s | 63,657.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.30s | 158,831.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 90.08s | 111,007.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 422.26s | 118,409.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.16s | 52,197.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 108.99s | 91,749.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.60s | 58,990.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.03s | 83,118.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 68.50s | 145,981.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.96s | 129,881.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">56k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">167k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">222k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,151.3 444.9,62.3 700.0,163.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="163.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.3 444.9,187.2 700.0,231.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#198754"/><circle cx="444.9" cy="187.2" r="4" fill="#198754"/><circle cx="700.0" cy="231.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.4 444.9,260.1 700.0,221.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="260.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,204.9 444.9,167.6 700.0,94.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="204.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="94.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.4 444.9,256.4 700.0,258.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="256.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.0 444.9,211.8 700.0,170.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.0" r="4" fill="#20c997"/><circle cx="444.9" cy="211.8" r="4" fill="#20c997"/><circle cx="700.0" cy="170.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.36s | 135,961.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 49.54s | 201,865.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.06s | 127,206.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.73s | 67,884.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 91.42s | 109,381.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.91s | 76,933.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,030.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.39s | 55,436.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 593.11s | 84,300.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.38s | 96,320.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.71s | 123,895.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 281.25s | 177,775.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.40s | 51,541.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.94s | 58,158.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 888.01s | 56,305.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.74s | 78,486.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 109.62s | 91,224.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 409.32s | 122,152.6 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:42:57Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">153k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.0 444.9,96.2 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="96.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.2 444.9,209.5 700.0,130.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.2" r="4" fill="#198754"/><circle cx="444.9" cy="209.5" r="4" fill="#198754"/><circle cx="700.0" cy="130.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.1 444.9,238.5 700.0,234.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="238.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,123.9 444.9,72.2 700.0,158.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="123.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="72.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,263.1 444.9,210.2 700.0,249.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="263.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="210.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.2 444.9,149.6 700.0,87.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.2" r="4" fill="#20c997"/><circle cx="444.9" cy="149.6" r="4" fill="#20c997"/><circle cx="700.0" cy="87.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.55s | 86,602.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 61.40s | 162,871.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 268.82s | 185,999.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.47s | 105,585.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.83s | 85,593.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 358.77s | 139,365.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.85s | 50,388.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 151.99s | 65,795.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 728.04s | 68,677.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.95s | 143,988.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 55.80s | 179,198.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.45s | 120,641.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.39s | 49,038.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 117.50s | 85,109.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 854.83s | 58,491.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.73s | 72,838.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.08s | 126,460.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 295.87s | 168,992.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">164k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,155.3 444.9,109.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="155.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.1 444.9,200.6 700.0,178.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.1" r="4" fill="#198754"/><circle cx="444.9" cy="200.6" r="4" fill="#198754"/><circle cx="700.0" cy="178.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.3 444.9,221.7 700.0,154.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="221.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="154.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,153.7 444.9,120.2 700.0,114.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="153.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="120.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="114.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,233.1 444.9,231.3 700.0,227.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="233.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.7 444.9,88.3 700.0,133.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#20c997"/><circle cx="444.9" cy="88.3" r="4" fill="#20c997"/><circle cx="700.0" cy="133.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.15s | 98,531.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.98s | 123,484.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 334.43s | 149,509.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.49s | 69,022.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.69s | 73,694.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 584.11s | 85,600.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.87s | 77,706.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 160.95s | 62,129.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 505.46s | 98,920.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,373.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.94s | 117,727.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 413.35s | 120,963.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.89s | 55,881.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.89s | 56,855.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 846.75s | 59,049.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.73s | 78,566.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.93s | 135,255.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 452.83s | 110,416.0 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-05T01:13:22Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">109k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">145k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.5 444.9,128.9 700.0,66.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="128.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="66.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,201.6 444.9,190.8 700.0,105.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#198754"/><circle cx="444.9" cy="190.8" r="4" fill="#198754"/><circle cx="700.0" cy="105.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,214.1 444.9,246.4 700.0,213.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="214.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.8 444.9,111.8 700.0,100.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="111.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,190.1 444.9,230.0 700.0,228.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="190.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,175.0 444.9,105.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="175.0" r="4" fill="#20c997"/><circle cx="444.9" cy="105.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.32s | 88,354.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 100.19s | 99,807.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 383.86s | 130,256.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.48s | 64,582.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.23s | 69,817.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 450.13s | 111,079.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.08s | 58,558.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 232.96s | 42,926.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 850.28s | 58,804.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.11s | 98,902.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.50s | 108,102.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 441.14s | 113,343.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.26s | 70,145.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 196.70s | 50,839.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 972.14s | 51,432.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.90s | 77,489.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 89.92s | 111,210.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.58s | 132,071.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">29k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">88k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">118k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,74.7 444.9,67.0 700.0,82.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="74.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="82.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,183.2 444.9,150.6 700.0,127.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="183.2" r="4" fill="#198754"/><circle cx="444.9" cy="150.6" r="4" fill="#198754"/><circle cx="700.0" cy="127.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,193.2 444.9,208.9 700.0,205.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="193.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="208.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,102.1 444.9,67.0 700.0,127.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="102.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="67.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,147.4 444.9,197.7 700.0,209.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="147.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="197.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="209.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,155.2 444.9,85.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="155.2" r="4" fill="#20c997"/><circle cx="444.9" cy="85.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.79s | 102,145.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 95.06s | 105,192.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 504.73s | 99,062.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.79s | 59,566.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.20s | 72,359.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 614.63s | 81,349.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 17.97s | 55,651.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 202.06s | 49,489.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 982.49s | 50,891.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.94s | 91,416.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.08s | 105,176.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 613.09s | 81,554.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.58s | 73,621.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 185.55s | 53,892.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1016.69s | 49,179.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.17s | 70,561.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 102.19s | 97,857.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 467.16s | 107,030.6 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-05T00:58:01Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,135.7 444.9,114.3 700.0,171.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="114.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="171.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.0 444.9,218.9 700.0,216.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#198754"/><circle cx="444.9" cy="218.9" r="4" fill="#198754"/><circle cx="700.0" cy="216.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,226.6 444.9,250.9 700.0,253.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="226.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,99.8 444.9,86.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="99.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="86.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.0 444.9,201.6 700.0,249.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="201.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="249.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.2 444.9,149.6 700.0,136.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.2" r="4" fill="#20c997"/><circle cx="444.9" cy="149.6" r="4" fill="#20c997"/><circle cx="700.0" cy="136.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.47s | 133,904.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.45s | 148,260.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 456.07s | 109,632.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.74s | 67,833.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.20s | 78,003.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 630.28s | 79,330.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.73s | 72,827.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 176.97s | 56,507.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 907.21s | 55,114.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.33s | 157,977.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 59.87s | 167,034.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 272.92s | 183,205.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.33s | 51,730.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 111.56s | 89,633.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 874.51s | 57,175.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.71s | 114,757.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.30s | 124,529.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.60s | 133,121.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">55k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">165k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">220k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,140.8 444.9,62.3 700.0,148.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="140.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="148.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.6 444.9,227.3 700.0,225.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.6" r="4" fill="#198754"/><circle cx="444.9" cy="227.3" r="4" fill="#198754"/><circle cx="700.0" cy="225.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.5 444.9,254.4 700.0,254.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="254.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,208.1 444.9,174.5 700.0,156.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="208.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="174.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="156.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.5 444.9,257.2 700.0,244.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,234.5 444.9,171.6 700.0,149.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="234.5" r="4" fill="#20c997"/><circle cx="444.9" cy="171.6" r="4" fill="#20c997"/><circle cx="700.0" cy="149.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.03s | 142,207.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 50.08s | 199,684.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.50s | 136,800.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.94s | 66,952.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.78s | 78,874.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 621.02s | 80,512.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.15s | 70,661.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.39s | 59,036.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 844.65s | 59,195.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.76s | 92,919.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.09s | 117,521.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 381.65s | 131,008.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 13.20s | 75,751.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.46s | 56,992.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 756.04s | 66,133.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.59s | 73,588.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.57s | 119,657.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.86s | 135,552.4 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-06T00:49:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,176.7 444.9,62.3 700.0,105.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.9 444.9,163.0 700.0,176.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.9" r="4" fill="#198754"/><circle cx="444.9" cy="163.0" r="4" fill="#198754"/><circle cx="700.0" cy="176.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.4 444.9,174.9 700.0,234.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="174.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,152.9 444.9,108.4 700.0,125.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="152.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="125.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,231.7 700.0,143.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="231.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="143.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.5 444.9,102.1 700.0,93.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.5" r="4" fill="#20c997"/><circle cx="444.9" cy="102.1" r="4" fill="#20c997"/><circle cx="700.0" cy="93.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.70s | 85,477.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.90s | 147,273.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 403.59s | 123,888.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.09s | 62,135.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.66s | 92,881.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 585.50s | 85,397.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.45s | 48,904.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 115.65s | 86,468.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 920.08s | 54,342.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.17s | 98,309.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.74s | 122,342.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 442.80s | 112,917.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.49s | 54,074.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 179.32s | 55,765.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 483.85s | 103,338.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.46s | 74,266.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.51s | 125,767.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.25s | 130,461.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,197.9 444.9,136.5 700.0,141.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="136.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="141.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.7 444.9,208.7 700.0,226.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#198754"/><circle cx="444.9" cy="208.7" r="4" fill="#198754"/><circle cx="700.0" cy="226.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.9 444.9,254.2 700.0,252.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.5 444.9,62.3 700.0,158.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="158.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,265.5 444.9,251.2 700.0,244.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="265.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="244.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.0 444.9,156.8 700.0,172.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.0" r="4" fill="#20c997"/><circle cx="444.9" cy="156.8" r="4" fill="#20c997"/><circle cx="700.0" cy="172.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.54s | 94,867.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.81s | 137,343.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 373.68s | 133,803.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.01s | 62,464.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.46s | 87,363.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 668.66s | 74,776.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.05s | 49,875.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.88s | 55,902.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 875.24s | 57,127.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,654.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 53.00s | 188,665.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 409.88s | 121,986.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.80s | 48,067.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.40s | 58,003.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 799.50s | 62,539.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.51s | 74,035.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.14s | 123,243.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 443.87s | 112,646.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-04T00:38:33Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">197k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,160.3 444.9,161.0 700.0,84.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="160.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="161.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.2 444.9,159.8 700.0,224.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.2" r="4" fill="#198754"/><circle cx="444.9" cy="159.8" r="4" fill="#198754"/><circle cx="700.0" cy="224.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,265.9 444.9,227.8 700.0,226.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="265.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="227.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,179.2 444.9,159.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.7 444.9,251.3 700.0,245.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.3 444.9,147.7 700.0,131.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.3" r="4" fill="#20c997"/><circle cx="444.9" cy="147.7" r="4" fill="#20c997"/><circle cx="700.0" cy="131.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.71s | 114,784.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.43s | 114,379.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 303.48s | 164,754.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.74s | 72,801.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 86.83s | 115,160.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 686.38s | 72,846.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.03s | 45,390.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 141.98s | 70,430.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 697.73s | 71,660.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.77s | 102,396.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 86.79s | 115,220.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 278.96s | 179,237.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.65s | 46,195.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.81s | 55,002.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.92s | 59,037.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.82s | 78,009.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.25s | 123,076.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 374.46s | 133,524.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,129.1 444.9,91.5 700.0,99.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="91.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="99.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.3 444.9,90.4 700.0,69.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.3" r="4" fill="#198754"/><circle cx="444.9" cy="90.4" r="4" fill="#198754"/><circle cx="700.0" cy="69.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.1 444.9,239.8 700.0,245.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.3 444.9,62.3 700.0,72.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.3 444.9,162.1 700.0,220.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="162.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.0 444.9,87.2 700.0,82.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.0" r="4" fill="#20c997"/><circle cx="444.9" cy="87.2" r="4" fill="#20c997"/><circle cx="700.0" cy="82.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.76s | 102,469.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 82.53s | 121,172.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 427.40s | 116,986.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.79s | 59,562.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.18s | 121,687.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 377.84s | 132,330.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 24.23s | 41,272.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 211.09s | 47,373.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1119.24s | 44,673.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.59s | 94,393.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 73.69s | 135,707.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 382.82s | 130,611.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.68s | 46,127.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 116.20s | 86,054.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 876.07s | 57,072.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.88s | 77,621.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.10s | 123,298.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.26s | 125,546.4 | PASS |

:::

:::

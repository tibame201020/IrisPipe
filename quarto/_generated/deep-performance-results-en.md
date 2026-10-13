## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T01:54:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,167.7 444.9,62.3 700.0,150.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="150.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.0 444.9,189.5 700.0,213.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#198754"/><circle cx="444.9" cy="189.5" r="4" fill="#198754"/><circle cx="700.0" cy="213.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,255.8 444.9,244.4 700.0,241.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="255.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,141.2 444.9,148.8 700.0,147.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="141.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="147.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.5 444.9,246.2 700.0,243.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.1 444.9,151.4 700.0,138.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#20c997"/><circle cx="444.9" cy="151.4" r="4" fill="#20c997"/><circle cx="700.0" cy="138.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.13s | 109,541.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.98s | 178,619.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.21s | 121,004.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.11s | 66,177.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 104.91s | 95,318.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 626.34s | 79,829.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.27s | 51,899.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 168.61s | 59,308.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 815.35s | 61,323.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.88s | 126,903.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.99s | 121,967.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 408.04s | 122,536.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.21s | 52,058.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.90s | 58,174.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 831.39s | 60,140.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.53s | 73,915.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 83.18s | 120,222.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 389.36s | 128,416.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,126.4 444.9,62.3 700.0,101.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="101.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,227.3 444.9,162.8 700.0,197.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="227.3" r="4" fill="#198754"/><circle cx="444.9" cy="162.8" r="4" fill="#198754"/><circle cx="700.0" cy="197.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.1 444.9,168.2 700.0,199.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="168.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="199.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,159.8 444.9,155.7 700.0,102.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="159.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="155.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.0 444.9,235.0 700.0,231.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="235.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.1 444.9,142.4 700.0,109.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.1" r="4" fill="#20c997"/><circle cx="444.9" cy="142.4" r="4" fill="#20c997"/><circle cx="700.0" cy="109.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.43s | 118,581.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 64.50s | 155,026.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 376.99s | 132,629.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.33s | 61,222.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 102.19s | 97,858.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 637.87s | 78,385.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.96s | 47,705.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 105.45s | 94,832.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 649.72s | 76,956.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,561.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 98.14s | 101,893.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 377.60s | 132,415.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.99s | 50,025.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 175.97s | 56,828.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.36s | 58,591.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.97s | 71,556.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 91.34s | 109,481.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.07s | 128,181.5 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T01:44:15Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">162k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,158.9 444.9,62.3 700.0,120.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="158.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="120.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,203.9 444.9,157.8 700.0,180.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="203.9" r="4" fill="#198754"/><circle cx="444.9" cy="157.8" r="4" fill="#198754"/><circle cx="700.0" cy="180.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.9 444.9,187.1 700.0,226.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="187.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,118.7 444.9,99.0 700.0,115.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="118.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="99.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="115.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,242.4 444.9,230.3 700.0,196.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="242.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="196.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,127.2 444.9,98.6 700.0,87.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="127.2" r="4" fill="#20c997"/><circle cx="444.9" cy="98.6" r="4" fill="#20c997"/><circle cx="700.0" cy="87.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.49s | 95,347.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.71s | 147,695.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 430.18s | 116,230.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.08s | 71,007.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 104.18s | 95,984.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 599.27s | 83,435.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.83s | 50,423.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 124.83s | 80,106.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 848.48s | 58,929.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.54s | 117,137.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.26s | 127,779.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 419.99s | 119,051.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.95s | 50,122.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 176.35s | 56,703.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 664.50s | 75,244.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.88s | 112,549.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.10s | 128,039.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.12s | 134,004.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,178.4 444.9,130.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.9 444.9,221.9 700.0,205.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.9" r="4" fill="#198754"/><circle cx="444.9" cy="221.9" r="4" fill="#198754"/><circle cx="700.0" cy="205.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,259.8 444.9,250.6 700.0,200.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="259.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="200.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.7 444.9,158.7 700.0,127.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="158.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="127.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.6 444.9,188.2 700.0,243.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="243.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.1 444.9,152.1 700.0,167.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.1" r="4" fill="#20c997"/><circle cx="444.9" cy="152.1" r="4" fill="#20c997"/><circle cx="700.0" cy="167.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.47s | 105,618.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.54s | 137,862.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 271.78s | 183,973.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.46s | 74,272.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 131.11s | 76,271.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 572.49s | 87,338.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.71s | 50,725.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 175.55s | 56,964.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 550.41s | 90,841.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.61s | 104,101.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.10s | 118,906.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 357.01s | 140,050.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.00s | 55,552.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 100.99s | 99,016.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 812.33s | 61,551.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.37s | 80,853.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.05s | 123,377.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 441.62s | 113,220.5 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-11T23:34:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">143k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.0 444.9,123.9 700.0,146.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,204.0 444.9,190.4 700.0,138.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#198754"/><circle cx="444.9" cy="190.4" r="4" fill="#198754"/><circle cx="700.0" cy="138.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.3 444.9,215.8 700.0,214.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="215.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="214.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,127.3 444.9,97.6 700.0,157.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="127.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,240.1 444.9,230.3 700.0,223.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="240.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="230.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.6 444.9,127.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.6" r="4" fill="#20c997"/><circle cx="444.9" cy="127.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.18s | 89,437.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 99.05s | 100,958.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 555.44s | 90,018.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.96s | 62,664.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 144.63s | 69,141.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 531.49s | 94,074.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.77s | 48,148.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.47s | 56,988.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 870.19s | 57,458.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.07s | 99,314.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 88.08s | 113,537.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 587.47s | 85,110.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.04s | 45,367.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 199.73s | 50,068.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 935.64s | 53,439.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.22s | 65,685.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.77s | 99,232.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.38s | 130,418.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,116.8 444.9,131.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.6 444.9,128.7 700.0,199.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.6" r="4" fill="#198754"/><circle cx="444.9" cy="128.7" r="4" fill="#198754"/><circle cx="700.0" cy="199.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.5 444.9,236.5 700.0,225.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,73.2 444.9,142.3 700.0,145.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="73.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="142.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="145.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.8 444.9,237.3 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,231.7 444.9,142.0 700.0,165.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#20c997"/><circle cx="444.9" cy="142.0" r="4" fill="#20c997"/><circle cx="700.0" cy="165.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.82s | 113,353.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 94.75s | 105,536.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 352.95s | 141,663.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.40s | 60,971.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 93.34s | 107,139.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 710.00s | 70,422.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.75s | 45,979.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 195.37s | 51,185.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 881.71s | 56,708.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.35s | 135,998.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 99.89s | 100,110.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 508.92s | 98,247.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.21s | 52,067.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.99s | 50,763.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 998.51s | 50,074.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 18.64s | 53,633.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.73s | 100,271.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 566.61s | 88,244.1 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-10T23:08:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">149k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">199k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,109.2 444.9,149.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,201.4 700.0,214.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.4" r="4" fill="#198754"/><circle cx="700.0" cy="214.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.9 444.9,246.6 700.0,248.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,121.6 444.9,148.4 700.0,153.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="121.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,252.1 444.9,252.3 700.0,186.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="252.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,216.0 444.9,145.7 700.0,97.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="216.0" r="4" fill="#20c997"/><circle cx="444.9" cy="145.7" r="4" fill="#20c997"/><circle cx="700.0" cy="97.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.67s | 149,947.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.31s | 122,983.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 276.12s | 181,082.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.97s | 66,791.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 112.75s | 88,687.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 622.58s | 80,310.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.27s | 51,883.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.36s | 58,700.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 869.55s | 57,500.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.06s | 141,723.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.70s | 123,920.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 413.82s | 120,825.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.16s | 55,060.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.19s | 54,887.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 505.71s | 98,869.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.65s | 79,045.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.57s | 125,681.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 316.50s | 157,980.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,105.2 444.9,62.3 700.0,129.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="105.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="129.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,167.3 444.9,213.1 700.0,208.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="167.3" r="4" fill="#198754"/><circle cx="444.9" cy="213.1" r="4" fill="#198754"/><circle cx="700.0" cy="208.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,219.6 444.9,246.8 700.0,246.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="219.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="246.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,161.6 444.9,143.9 700.0,141.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="161.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.5 444.9,243.3 700.0,207.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.1 444.9,141.0 700.0,176.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#20c997"/><circle cx="444.9" cy="141.0" r="4" fill="#20c997"/><circle cx="700.0" cy="176.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.87s | 145,624.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.85s | 172,848.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 383.54s | 130,363.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.41s | 106,292.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.42s | 77,269.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 625.23s | 79,970.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.67s | 73,136.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.97s | 55,876.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 891.90s | 56,060.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.10s | 109,926.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.58s | 121,097.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 406.82s | 122,905.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.36s | 51,660.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.03s | 58,129.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 620.54s | 80,575.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.38s | 74,727.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.33s | 122,951.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 496.34s | 100,736.8 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-13T01:49:44Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">96k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">144k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">193k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,197.5 444.9,134.4 700.0,135.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="197.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="135.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.8 444.9,133.9 700.0,179.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.8" r="4" fill="#198754"/><circle cx="444.9" cy="133.9" r="4" fill="#198754"/><circle cx="700.0" cy="179.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.4 444.9,247.8 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,103.5 444.9,62.3 700.0,130.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="103.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="130.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,225.7 444.9,240.8 700.0,207.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="225.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="207.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,214.0 444.9,137.6 700.0,74.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="214.0" r="4" fill="#20c997"/><circle cx="444.9" cy="137.6" r="4" fill="#20c997"/><circle cx="700.0" cy="74.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,245.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 77.70s | 128,706.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 390.06s | 128,185.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.96s | 66,862.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.50s | 129,038.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 501.87s | 99,627.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.36s | 74,850.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.75s | 55,943.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 869.74s | 57,488.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.73s | 148,522.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.14s | 175,008.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 380.06s | 131,559.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.25s | 70,160.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 165.37s | 60,471.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 608.88s | 82,117.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.88s | 77,627.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.93s | 126,699.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 298.99s | 167,232.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,163.7 700.0,65.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="163.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="65.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,140.0 700.0,202.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="140.0" r="4" fill="#198754"/><circle cx="700.0" cy="202.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.9 444.9,244.4 700.0,242.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="242.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,199.1 444.9,117.3 700.0,116.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="199.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="116.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,211.4 444.9,244.5 700.0,242.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="211.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,228.0 444.9,134.0 700.0,152.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="228.0" r="4" fill="#20c997"/><circle cx="444.9" cy="134.0" r="4" fill="#20c997"/><circle cx="700.0" cy="152.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 5.77s | 173,370.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.84s | 108,886.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 292.27s | 171,073.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.64s | 63,922.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 80.68s | 123,944.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 591.23s | 84,569.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.82s | 45,821.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.64s | 57,589.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 850.07s | 58,819.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.58s | 86,370.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 72.25s | 138,414.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 359.83s | 138,956.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.72s | 78,585.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.85s | 57,520.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 846.06s | 59,097.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.70s | 68,031.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.26s | 127,777.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 431.56s | 115,858.2 | PASS |

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

## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-04T00:37:08Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.7 444.9,105.7 700.0,124.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="105.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.4 444.9,194.6 700.0,188.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.4" r="4" fill="#198754"/><circle cx="444.9" cy="194.6" r="4" fill="#198754"/><circle cx="700.0" cy="188.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,247.8 444.9,246.2 700.0,185.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="247.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="246.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="185.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,138.1 444.9,108.9 700.0,121.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="138.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="108.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,220.1 444.9,233.7 700.0,232.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="220.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.3 444.9,62.3 700.0,98.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.3" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="98.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.85s | 101,522.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,975.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 436.71s | 114,491.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.47s | 64,649.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 130.69s | 76,519.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 625.12s | 79,984.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.05s | 47,499.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 206.69s | 48,382.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 615.21s | 81,273.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.32s | 107,319.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.17s | 123,202.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 429.67s | 116,369.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.97s | 62,617.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.15s | 55,201.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 895.43s | 55,839.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.68s | 78,870.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.28s | 148,623.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 388.22s | 128,791.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,123.1 700.0,122.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.4 444.9,148.0 700.0,171.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.4" r="4" fill="#198754"/><circle cx="444.9" cy="148.0" r="4" fill="#198754"/><circle cx="700.0" cy="171.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.9 444.9,242.3 700.0,238.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="238.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,165.8 444.9,139.7 700.0,151.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="165.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="151.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,218.0 444.9,238.1 700.0,226.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="218.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.4 444.9,109.0 700.0,126.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.4" r="4" fill="#20c997"/><circle cx="444.9" cy="109.0" r="4" fill="#20c997"/><circle cx="700.0" cy="126.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.11s | 163,639.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.64s | 127,169.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.92s | 127,576.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.06s | 71,138.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 89.12s | 112,210.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 510.88s | 97,870.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.81s | 48,058.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.74s | 55,635.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 859.02s | 58,206.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.85s | 101,522.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.33s | 117,196.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 453.99s | 110,134.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 14.24s | 70,214.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.93s | 58,162.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 769.09s | 65,011.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.20s | 81,947.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 73.75s | 135,584.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 398.95s | 125,329.3 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-04T00:26:29Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,154.6 444.9,154.4 700.0,144.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="154.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="144.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,180.6 444.9,210.5 700.0,208.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="180.6" r="4" fill="#198754"/><circle cx="444.9" cy="210.5" r="4" fill="#198754"/><circle cx="700.0" cy="208.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.1 444.9,210.4 700.0,250.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="210.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="250.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,92.4 444.9,62.3 700.0,157.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="92.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="157.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,221.1 444.9,188.6 700.0,230.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="230.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,164.0 444.9,130.4 700.0,129.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="164.0" r="4" fill="#20c997"/><circle cx="444.9" cy="130.4" r="4" fill="#20c997"/><circle cx="700.0" cy="129.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.75s | 114,338.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.36s | 114,470.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 413.19s | 121,010.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,847.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.71s | 78,922.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 624.57s | 80,055.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.38s | 74,727.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 126.58s | 79,002.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 937.77s | 53,318.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.50s | 153,775.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 57.85s | 172,872.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 445.06s | 112,343.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.85s | 72,186.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 107.76s | 92,795.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 756.32s | 66,109.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.23s | 108,389.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.10s | 129,701.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.89s | 130,246.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,144.0 444.9,83.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="144.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="83.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.0 444.9,171.8 700.0,166.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.0" r="4" fill="#198754"/><circle cx="444.9" cy="171.8" r="4" fill="#198754"/><circle cx="700.0" cy="166.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.2 444.9,204.1 700.0,162.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="204.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="162.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,145.3 444.9,113.3 700.0,106.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="145.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="113.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.7 444.9,158.8 700.0,220.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="158.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,179.2 444.9,148.6 700.0,82.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="179.2" r="4" fill="#20c997"/><circle cx="444.9" cy="148.6" r="4" fill="#20c997"/><circle cx="700.0" cy="82.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.89s | 101,122.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.10s | 133,148.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 346.22s | 144,418.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,702.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 115.74s | 86,403.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 561.38s | 89,065.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.52s | 44,397.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 144.25s | 69,323.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 548.33s | 91,185.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.96s | 100,441.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.16s | 117,421.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.79s | 121,127.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.94s | 55,735.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 107.19s | 93,287.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 826.57s | 60,490.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.12s | 82,508.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 101.33s | 98,684.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 374.24s | 133,604.1 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-01T23:27:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">135k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,146.9 444.9,62.3 700.0,88.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="88.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.7 444.9,188.5 700.0,103.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.7" r="4" fill="#198754"/><circle cx="444.9" cy="188.5" r="4" fill="#198754"/><circle cx="700.0" cy="103.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,167.9 444.9,213.0 700.0,213.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="213.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="213.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.7 444.9,96.6 700.0,73.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="96.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="73.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,235.9 444.9,229.3 700.0,165.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="235.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="165.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,114.0 444.9,105.7 700.0,79.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="114.0" r="4" fill="#20c997"/><circle cx="444.9" cy="105.7" r="4" fill="#20c997"/><circle cx="700.0" cy="79.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.80s | 84,760.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.37s | 122,899.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 449.17s | 111,316.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.34s | 74,951.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 151.50s | 66,004.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 478.37s | 104,521.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 13.28s | 75,284.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.91s | 54,971.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 915.95s | 54,588.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.94s | 100,644.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 93.08s | 107,433.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 423.78s | 117,985.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.39s | 44,658.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 209.94s | 47,632.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.27s | 76,537.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.04s | 99,601.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 96.79s | 103,316.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 434.51s | 115,072.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">132k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,150.7 444.9,85.3 700.0,107.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="150.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="107.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,194.9 444.9,137.1 700.0,181.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#198754"/><circle cx="444.9" cy="137.1" r="4" fill="#198754"/><circle cx="700.0" cy="181.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,229.7 444.9,206.1 700.0,207.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="229.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="207.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.0 444.9,97.3 700.0,91.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="91.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.4 444.9,219.4 700.0,139.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,181.7 444.9,118.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#20c997"/><circle cx="444.9" cy="118.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.32s | 81,135.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 90.96s | 109,936.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 500.08s | 99,983.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.22s | 61,659.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 114.80s | 87,105.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 741.57s | 67,424.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.57s | 46,356.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.16s | 56,765.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 890.67s | 56,137.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.10s | 99,039.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.56s | 104,647.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 466.81s | 107,109.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.58s | 44,285.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 196.47s | 50,898.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 581.80s | 85,939.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.82s | 67,490.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 105.09s | 95,157.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 416.44s | 120,063.9 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-03T02:15:40Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,188.5 444.9,126.4 700.0,122.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,221.6 444.9,136.5 700.0,204.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="221.6" r="4" fill="#198754"/><circle cx="444.9" cy="136.5" r="4" fill="#198754"/><circle cx="700.0" cy="204.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.6 444.9,245.0 700.0,196.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,88.7 444.9,124.3 700.0,131.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="88.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="124.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.1 444.9,217.0 700.0,236.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="217.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.5 444.9,62.3 700.0,110.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="110.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.37s | 87,935.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.87s | 125,197.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 392.45s | 127,403.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.70s | 68,045.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 83.90s | 119,185.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.04s | 78,364.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.97s | 50,085.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.04s | 54,043.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 600.05s | 83,326.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.76s | 147,863.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 79.05s | 126,507.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.41s | 122,126.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 15.44s | 64,758.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 141.23s | 70,806.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.19s | 59,088.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.29s | 81,347.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 61.08s | 163,717.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 371.14s | 134,718.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">150k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,102.2 444.9,62.3 700.0,76.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="102.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,175.3 444.9,102.5 700.0,182.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="175.3" r="4" fill="#198754"/><circle cx="444.9" cy="102.5" r="4" fill="#198754"/><circle cx="700.0" cy="182.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,231.6 444.9,219.3 700.0,220.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="231.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="220.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,108.3 444.9,91.6 700.0,89.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="108.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="91.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="89.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,228.7 444.9,219.1 700.0,226.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="228.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="226.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,103.2 444.9,85.8 700.0,76.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="103.2" r="4" fill="#20c997"/><circle cx="444.9" cy="85.8" r="4" fill="#20c997"/><circle cx="700.0" cy="76.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.61s | 116,198.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.45s | 136,150.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 387.97s | 128,876.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.54s | 79,732.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 86.17s | 116,051.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.05s | 76,213.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.37s | 51,628.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.13s | 57,758.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 874.10s | 57,202.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.84s | 113,173.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.28s | 121,534.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.21s | 122,785.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.84s | 53,072.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 172.78s | 57,875.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 919.41s | 54,382.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 8.64s | 115,727.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 80.39s | 124,398.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 387.52s | 129,026.6 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-01T23:05:37Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">213k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.7 444.9,159.2 700.0,151.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="159.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.6 444.9,152.3 700.0,221.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.6" r="4" fill="#198754"/><circle cx="444.9" cy="152.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.4 444.9,257.3 700.0,257.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.0 444.9,159.4 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="159.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,213.7 444.9,258.8 700.0,201.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="213.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="258.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.2 444.9,147.2 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.2" r="4" fill="#20c997"/><circle cx="444.9" cy="147.2" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,645.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.14s | 124,777.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 384.86s | 129,918.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.49s | 74,123.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 77.14s | 129,642.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 619.55s | 80,703.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,367.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 181.25s | 55,171.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 910.99s | 54,885.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.46s | 105,764.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.23s | 124,643.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 258.33s | 193,553.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,103.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 185.00s | 54,054.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 528.13s | 94,672.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.80s | 102,030.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.03s | 133,283.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 373.48s | 133,875.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">189k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,190.8 444.9,137.6 700.0,158.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="190.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="137.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="158.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.5 444.9,142.9 700.0,105.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.5" r="4" fill="#198754"/><circle cx="444.9" cy="142.9" r="4" fill="#198754"/><circle cx="700.0" cy="105.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,260.6 444.9,241.2 700.0,237.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="260.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="241.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,111.5 444.9,62.3 700.0,143.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="111.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="143.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.6 444.9,183.0 700.0,242.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="183.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.9 444.9,146.5 700.0,118.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.9" r="4" fill="#20c997"/><circle cx="444.9" cy="146.5" r="4" fill="#20c997"/><circle cx="700.0" cy="118.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.98s | 91,041.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.22s | 124,651.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 448.39s | 111,510.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.52s | 95,039.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 82.46s | 121,269.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 345.15s | 144,863.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.30s | 46,943.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 168.83s | 59,232.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 813.24s | 61,482.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.09s | 141,123.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 58.08s | 172,176.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.87s | 121,104.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.10s | 62,104.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.23s | 95,939.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 856.17s | 58,399.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.36s | 80,893.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.03s | 119,005.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 365.52s | 136,789.5 | PASS |

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

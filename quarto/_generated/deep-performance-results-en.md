## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-13T22:09:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,135.6 444.9,102.5 700.0,143.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="135.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="143.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.4 444.9,212.5 700.0,215.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#198754"/><circle cx="444.9" cy="212.5" r="4" fill="#198754"/><circle cx="700.0" cy="215.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.3 444.9,245.4 700.0,247.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="245.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,166.6 444.9,150.7 700.0,148.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="166.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="150.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="148.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.2 444.9,251.7 700.0,248.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="251.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="248.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.6 444.9,148.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.6" r="4" fill="#20c997"/><circle cx="444.9" cy="148.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.68s | 130,140.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 65.88s | 151,781.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.89s | 124,721.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.78s | 67,649.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.12s | 79,925.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 639.33s | 78,206.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.97s | 43,540.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 170.97s | 58,489.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 877.88s | 56,955.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.10s | 109,914.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.14s | 120,281.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.68s | 122,048.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.47s | 48,844.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 183.96s | 54,360.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 889.27s | 56,225.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.31s | 81,208.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 82.03s | 121,906.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 280.89s | 178,008.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,86.4 444.9,62.3 700.0,63.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="86.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="63.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.9 444.9,155.9 700.0,178.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#198754"/><circle cx="444.9" cy="155.9" r="4" fill="#198754"/><circle cx="700.0" cy="178.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.4 444.9,199.6 700.0,219.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="199.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="219.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,105.5 444.9,83.7 700.0,81.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="105.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="83.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="81.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.2 444.9,218.4 700.0,186.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,168.1 444.9,94.6 700.0,91.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="168.1" r="4" fill="#20c997"/><circle cx="444.9" cy="94.6" r="4" fill="#20c997"/><circle cx="700.0" cy="91.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.40s | 119,005.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.60s | 130,543.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 384.29s | 130,111.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.02s | 66,573.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.67s | 85,714.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 668.99s | 74,739.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.58s | 37,619.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 154.35s | 64,787.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 900.12s | 55,547.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.10s | 109,866.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.15s | 120,267.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 411.41s | 121,532.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.20s | 52,096.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 179.15s | 55,818.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 701.77s | 71,247.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.52s | 79,904.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 86.92s | 115,054.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 429.59s | 116,389.5 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-13T21:58:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">169k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,109.8 444.9,123.5 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,215.0 444.9,195.0 700.0,159.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="215.0" r="4" fill="#198754"/><circle cx="444.9" cy="195.0" r="4" fill="#198754"/><circle cx="700.0" cy="159.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,222.7 444.9,230.1 700.0,230.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="222.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="230.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.1 444.9,121.5 700.0,122.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="122.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.7 444.9,222.1 700.0,227.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,166.0 444.9,107.9 700.0,88.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="166.0" r="4" fill="#20c997"/><circle cx="444.9" cy="107.9" r="4" fill="#20c997"/><circle cx="700.0" cy="88.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.89s | 126,790.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.98s | 119,081.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 325.69s | 153,519.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.80s | 67,558.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.89s | 78,811.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 506.61s | 98,696.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.82s | 63,211.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.32s | 59,060.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 849.53s | 58,855.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.40s | 106,360.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.21s | 120,172.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 418.13s | 119,579.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.67s | 50,833.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.32s | 63,562.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 826.32s | 60,509.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.51s | 95,120.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.21s | 127,862.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.60s | 139,044.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">154k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,78.2 444.9,62.3 700.0,86.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="78.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="86.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,191.8 444.9,171.3 700.0,184.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#198754"/><circle cx="444.9" cy="171.3" r="4" fill="#198754"/><circle cx="700.0" cy="184.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.1 444.9,231.9 700.0,201.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="201.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.7 444.9,80.3 700.0,100.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="80.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="100.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.3 444.9,241.0 700.0,220.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.9 444.9,97.7 700.0,84.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.9" r="4" fill="#20c997"/><circle cx="444.9" cy="97.7" r="4" fill="#20c997"/><circle cx="700.0" cy="84.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.61s | 131,492.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.61s | 139,643.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.23s | 127,152.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.63s | 73,346.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 119.29s | 83,830.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 647.97s | 77,164.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.03s | 47,560.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 189.41s | 52,795.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 732.09s | 68,298.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.20s | 108,683.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.69s | 130,401.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.70s | 119,990.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.52s | 44,401.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 207.85s | 48,111.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 853.14s | 58,607.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.05s | 82,973.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.30s | 121,502.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.25s | 128,123.7 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-12T22:13:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">30k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">61k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">122k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,129.7 444.9,94.5 700.0,89.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="94.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,159.1 444.9,163.8 700.0,131.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="159.1" r="4" fill="#198754"/><circle cx="444.9" cy="163.8" r="4" fill="#198754"/><circle cx="700.0" cy="131.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,202.1 444.9,196.6 700.0,203.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="202.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="196.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="203.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.0 444.9,94.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="94.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.4 444.9,191.0 700.0,201.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="191.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,154.9 444.9,84.7 700.0,63.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="154.9" r="4" fill="#20c997"/><circle cx="444.9" cy="84.7" r="4" fill="#20c997"/><circle cx="700.0" cy="63.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.00s | 83,354.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 102.42s | 97,636.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 501.74s | 99,654.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,403.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 143.89s | 69,498.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 603.93s | 82,791.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.54s | 53,949.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 178.04s | 56,168.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 939.27s | 53,232.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.58s | 104,340.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 102.58s | 97,486.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 451.65s | 110,705.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.31s | 54,617.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.08s | 58,452.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 919.14s | 54,398.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.68s | 73,094.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.42s | 101,607.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 453.98s | 110,136.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">34k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">68k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">137k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,209.1 444.9,62.3 700.0,97.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="209.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.0 444.9,201.9 700.0,175.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#198754"/><circle cx="444.9" cy="201.9" r="4" fill="#198754"/><circle cx="700.0" cy="175.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,225.3 444.9,214.4 700.0,196.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="225.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="214.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="196.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,102.4 444.9,87.4 700.0,87.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="102.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.0 444.9,226.8 700.0,232.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="232.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.0 444.9,140.0 700.0,110.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.0" r="4" fill="#20c997"/><circle cx="444.9" cy="140.0" r="4" fill="#20c997"/><circle cx="700.0" cy="110.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 17.45s | 57,313.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 80.56s | 124,135.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 462.26s | 108,164.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.15s | 61,919.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 165.11s | 60,565.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 688.42s | 72,629.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.03s | 49,927.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 182.25s | 54,870.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 795.28s | 62,870.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.45s | 105,864.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.74s | 112,684.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 443.67s | 112,696.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 32.78s | 30,508.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 203.08s | 49,241.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 1068.48s | 46,795.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.17s | 70,556.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 112.69s | 88,735.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 488.77s | 102,296.8 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-13T22:10:24Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">73k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">110k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">147k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.0 444.9,76.9 700.0,105.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.8 444.9,122.3 700.0,122.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.8" r="4" fill="#198754"/><circle cx="444.9" cy="122.3" r="4" fill="#198754"/><circle cx="700.0" cy="122.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,210.7 444.9,195.1 700.0,222.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="210.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="195.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="222.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.1 444.9,88.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.2 444.9,198.5 700.0,214.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="214.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,138.7 444.9,81.4 700.0,68.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="138.7" r="4" fill="#20c997"/><circle cx="444.9" cy="81.4" r="4" fill="#20c997"/><circle cx="700.0" cy="68.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.33s | 96,777.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.29s | 126,122.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 445.34s | 112,274.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.70s | 68,036.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 96.19s | 103,960.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 482.44s | 103,639.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.46s | 60,753.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 146.23s | 68,387.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 909.43s | 54,979.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.30s | 107,469.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.91s | 120,606.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 375.15s | 133,278.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.30s | 49,273.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 149.90s | 66,711.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 847.45s | 59,000.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.42s | 95,941.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.70s | 123,911.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 384.04s | 130,196.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">74k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">111k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">148k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,107.8 444.9,62.3 700.0,89.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="107.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="89.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,199.9 444.9,178.1 700.0,180.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="199.9" r="4" fill="#198754"/><circle cx="444.9" cy="178.1" r="4" fill="#198754"/><circle cx="700.0" cy="180.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,237.6 444.9,219.9 700.0,221.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="219.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="221.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,77.9 444.9,88.0 700.0,93.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="77.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="88.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,232.6 444.9,202.8 700.0,215.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="232.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="202.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.7 444.9,97.5 700.0,65.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.7" r="4" fill="#20c997"/><circle cx="444.9" cy="97.5" r="4" fill="#20c997"/><circle cx="700.0" cy="65.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.95s | 111,719.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.55s | 134,134.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 414.25s | 120,698.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.05s | 66,445.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.55s | 77,189.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 656.34s | 76,179.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.87s | 47,906.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 176.66s | 56,605.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 892.03s | 56,052.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.91s | 126,470.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.33s | 121,468.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.80s | 118,820.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.86s | 50,347.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 153.82s | 65,012.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 849.25s | 58,875.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,123.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.61s | 116,811.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 377.75s | 132,364.1 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-13T22:00:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">114k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">152k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,161.1 444.9,88.2 700.0,72.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="161.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="88.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="72.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.3 444.9,156.0 700.0,175.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.3" r="4" fill="#198754"/><circle cx="444.9" cy="156.0" r="4" fill="#198754"/><circle cx="700.0" cy="175.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,243.3 444.9,191.9 700.0,216.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="243.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="191.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,140.7 444.9,87.7 700.0,84.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="140.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="87.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.3 444.9,222.3 700.0,172.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="222.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="172.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.9 444.9,77.5 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.9" r="4" fill="#20c997"/><circle cx="444.9" cy="77.5" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.38s | 87,858.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.18s | 124,720.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 376.62s | 132,760.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.92s | 67,042.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 110.59s | 90,422.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 621.70s | 80,424.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.58s | 46,345.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 138.31s | 72,299.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 834.49s | 59,917.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,183.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 80.02s | 124,967.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 394.85s | 126,632.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.56s | 56,937.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.57s | 56,956.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 607.54s | 82,298.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.43s | 69,285.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.85s | 130,116.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 362.83s | 137,807.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,117.0 444.9,85.8 700.0,71.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,195.3 444.9,181.0 700.0,179.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="195.3" r="4" fill="#198754"/><circle cx="444.9" cy="181.0" r="4" fill="#198754"/><circle cx="700.0" cy="179.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,236.1 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,112.0 444.9,97.0 700.0,87.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="112.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="97.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="87.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.0 444.9,224.6 700.0,189.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="224.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.0 444.9,106.3 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#20c997"/><circle cx="444.9" cy="106.3" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.80s | 113,597.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.01s | 129,856.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 364.44s | 137,196.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.74s | 72,774.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 124.59s | 80,265.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 616.85s | 81,057.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 22.67s | 44,109.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.06s | 51,530.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 915.40s | 54,620.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.61s | 116,211.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.63s | 124,027.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 386.95s | 129,214.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.57s | 51,090.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.88s | 57,512.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 660.04s | 75,752.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.11s | 70,856.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.92s | 119,165.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 351.84s | 142,110.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-12T22:01:42Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,195.2 444.9,133.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="133.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,209.7 700.0,209.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="209.7" r="4" fill="#198754"/><circle cx="700.0" cy="209.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,262.3 444.9,255.8 700.0,255.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.8 444.9,140.8 700.0,106.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="106.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.1 444.9,244.0 700.0,238.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="244.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,201.6 444.9,110.1 700.0,115.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#20c997"/><circle cx="444.9" cy="110.1" r="4" fill="#20c997"/><circle cx="700.0" cy="115.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.91s | 83,977.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.68s | 120,943.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 305.22s | 163,816.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.19s | 75,815.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 132.90s | 75,246.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 661.57s | 75,577.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.91s | 43,651.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 210.23s | 47,567.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1045.77s | 47,811.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.79s | 92,635.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.72s | 116,657.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 364.50s | 137,175.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.23s | 44,978.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 182.85s | 54,688.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 862.04s | 58,002.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.48s | 80,153.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 74.01s | 135,109.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 378.41s | 132,132.2 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">36k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">72k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">144k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,173.8 444.9,67.5 700.0,71.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="173.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,178.9 444.9,179.3 700.0,180.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="178.9" r="4" fill="#198754"/><circle cx="444.9" cy="179.3" r="4" fill="#198754"/><circle cx="700.0" cy="180.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,252.6 444.9,220.2 700.0,255.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="252.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="220.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,167.5 444.9,62.3 700.0,77.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="167.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,237.9 444.9,220.6 700.0,227.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="237.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="220.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="227.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,174.0 444.9,70.6 700.0,73.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="174.0" r="4" fill="#20c997"/><circle cx="444.9" cy="70.6" r="4" fill="#20c997"/><circle cx="700.0" cy="73.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 12.89s | 77,555.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.68s | 128,733.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 394.99s | 126,586.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.31s | 75,114.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.49s | 74,913.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 671.07s | 74,508.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 25.22s | 39,655.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 181.08s | 55,225.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1310.12s | 38,164.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 12.41s | 80,573.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 76.20s | 131,226.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 403.58s | 123,889.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.41s | 46,705.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 181.69s | 55,037.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 967.70s | 51,669.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.91s | 77,471.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.59s | 127,239.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 397.35s | 125,832.7 | PASS |

:::

:::

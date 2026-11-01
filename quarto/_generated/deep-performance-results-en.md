## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-31T22:48:04Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">127k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">170k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,70.2 444.9,145.6 700.0,113.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="70.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="145.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="113.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.8 444.9,133.9 700.0,196.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.8" r="4" fill="#198754"/><circle cx="444.9" cy="133.9" r="4" fill="#198754"/><circle cx="700.0" cy="196.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.1 444.9,232.9 700.0,226.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,137.0 700.0,101.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="137.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="101.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,248.1 444.9,232.0 700.0,229.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="248.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.0 444.9,133.5 700.0,112.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.0" r="4" fill="#20c997"/><circle cx="444.9" cy="133.5" r="4" fill="#20c997"/><circle cx="700.0" cy="112.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.67s | 149,970.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 93.20s | 107,296.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 398.58s | 125,445.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.20s | 65,802.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 87.78s | 113,914.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 638.92s | 78,256.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.00s | 52,617.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 172.98s | 57,810.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 815.87s | 61,284.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.47s | 154,464.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.18s | 112,136.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 377.93s | 132,298.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.31s | 49,232.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 171.48s | 58,315.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 837.61s | 59,693.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.44s | 80,405.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 87.62s | 114,133.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 397.41s | 125,813.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">90k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">135k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">180k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,104.6 444.9,123.1 700.0,123.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="104.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="123.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,224.1 444.9,211.5 700.0,208.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="224.1" r="4" fill="#198754"/><circle cx="444.9" cy="211.5" r="4" fill="#198754"/><circle cx="700.0" cy="208.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,228.3 444.9,244.3 700.0,185.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="228.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="185.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,78.9 444.9,131.3 700.0,137.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="78.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="131.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.7 444.9,232.4 700.0,215.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="215.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.5 444.9,84.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.5" r="4" fill="#20c997"/><circle cx="444.9" cy="84.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.22s | 138,580.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.46s | 127,447.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 393.30s | 127,130.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,688.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.63s | 74,279.3 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 657.75s | 76,017.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.58s | 64,189.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 183.22s | 54,580.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 554.35s | 90,195.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.49s | 154,012.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 81.64s | 122,492.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 419.74s | 119,121.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.45s | 48,904.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 162.03s | 61,715.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 693.29s | 72,119.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.55s | 79,694.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 66.38s | 150,638.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 304.81s | 164,038.8 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-01T23:02:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">146k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,116.1 444.9,147.4 700.0,93.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="93.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.4 444.9,215.7 700.0,109.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.4" r="4" fill="#198754"/><circle cx="444.9" cy="215.7" r="4" fill="#198754"/><circle cx="700.0" cy="109.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,253.2 444.9,252.3 700.0,244.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="253.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="244.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.9 444.9,73.2 700.0,141.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="73.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.3 444.9,241.6 700.0,225.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="241.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="225.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,163.7 444.9,146.8 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="163.7" r="4" fill="#20c997"/><circle cx="444.9" cy="146.8" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.03s | 142,247.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 82.03s | 121,909.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 319.06s | 156,708.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.86s | 67,308.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 128.94s | 77,556.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 341.00s | 146,629.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.82s | 53,129.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.15s | 53,720.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 849.61s | 58,850.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.18s | 122,249.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 58.77s | 170,160.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 397.36s | 125,829.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.07s | 49,825.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 164.83s | 60,667.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 700.18s | 71,410.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.98s | 111,321.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 81.75s | 122,324.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 282.11s | 177,236.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">167k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,153.0 444.9,109.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="153.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="109.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.6 444.9,114.8 700.0,91.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.6" r="4" fill="#198754"/><circle cx="444.9" cy="114.8" r="4" fill="#198754"/><circle cx="700.0" cy="91.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.2 444.9,171.6 700.0,235.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="171.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.2 444.9,121.3 700.0,117.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="117.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.4 444.9,234.3 700.0,231.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.7 444.9,63.3 700.0,102.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.7" r="4" fill="#20c997"/><circle cx="444.9" cy="63.3" r="4" fill="#20c997"/><circle cx="700.0" cy="102.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.90s | 101,050.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.73s | 125,424.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 330.28s | 151,386.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.40s | 74,610.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 81.82s | 122,224.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 370.06s | 135,112.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.24s | 47,078.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 110.26s | 90,691.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 906.37s | 55,165.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.60s | 104,220.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.28s | 118,647.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 414.34s | 120,672.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.55s | 48,650.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 178.81s | 55,924.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 866.07s | 57,732.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.62s | 73,432.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 66.31s | 150,804.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 387.60s | 128,997.6 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-31T23:07:15Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">76k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,171.7 444.9,62.3 700.0,149.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="149.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.9 444.9,196.2 700.0,199.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.9" r="4" fill="#198754"/><circle cx="444.9" cy="196.2" r="4" fill="#198754"/><circle cx="700.0" cy="199.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.4 444.9,189.1 700.0,225.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="189.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,143.0 444.9,121.8 700.0,112.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="143.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="121.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="112.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,246.5 444.9,211.2 700.0,184.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="246.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="184.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.9 444.9,140.7 700.0,126.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.9" r="4" fill="#20c997"/><circle cx="444.9" cy="140.7" r="4" fill="#20c997"/><circle cx="700.0" cy="126.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.01s | 83,257.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.94s | 139,008.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 529.73s | 94,387.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.56s | 64,283.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 141.37s | 70,736.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 724.72s | 68,991.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.97s | 47,694.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 134.50s | 74,346.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.49s | 55,587.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.22s | 97,837.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.04s | 108,646.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 441.51s | 113,247.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 22.18s | 45,087.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 158.43s | 63,120.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 653.42s | 76,520.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.01s | 71,403.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 100.99s | 99,022.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 471.42s | 106,061.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,109.5 444.9,132.2 700.0,118.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="109.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="132.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="118.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,218.6 444.9,195.9 700.0,126.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="218.6" r="4" fill="#198754"/><circle cx="444.9" cy="195.9" r="4" fill="#198754"/><circle cx="700.0" cy="126.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,246.4 444.9,252.3 700.0,241.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="246.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,82.5 444.9,192.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="82.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="192.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.3 444.9,237.6 700.0,184.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="184.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,194.0 444.9,147.5 700.0,135.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="194.0" r="4" fill="#20c997"/><circle cx="444.9" cy="147.5" r="4" fill="#20c997"/><circle cx="700.0" cy="135.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.33s | 120,091.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 92.56s | 108,034.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 433.85s | 115,247.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.13s | 62,004.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 134.98s | 74,087.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 449.41s | 111,256.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.18s | 47,212.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 227.02s | 44,049.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1006.01s | 49,701.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.43s | 134,499.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 131.75s | 75,899.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 344.20s | 145,262.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.44s | 44,557.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 192.72s | 51,889.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 623.45s | 80,199.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.32s | 75,080.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.11s | 99,886.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 469.98s | 106,388.0 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-31T22:56:39Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">154k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">205k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,208.9 444.9,158.6 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="208.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="158.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.8 444.9,222.3 700.0,214.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#198754"/><circle cx="444.9" cy="222.3" r="4" fill="#198754"/><circle cx="700.0" cy="214.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.1 444.9,207.9 700.0,253.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="207.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="253.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.9 444.9,68.7 700.0,134.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="68.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.3 444.9,250.5 700.0,246.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.8 444.9,142.7 700.0,140.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.8" r="4" fill="#20c997"/><circle cx="444.9" cy="142.7" r="4" fill="#20c997"/><circle cx="700.0" cy="140.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.61s | 86,132.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 83.03s | 120,434.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 268.46s | 186,249.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.54s | 64,337.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.95s | 76,953.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 609.50s | 82,035.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.80s | 50,492.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 115.25s | 86,767.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.07s | 55,613.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.23s | 97,742.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 54.98s | 181,887.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 365.70s | 136,724.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.09s | 52,397.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 173.27s | 57,713.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 831.07s | 60,163.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.88s | 84,139.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.13s | 131,349.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 375.66s | 133,098.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.8 444.9,143.8 700.0,108.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.5 444.9,215.6 700.0,212.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#198754"/><circle cx="444.9" cy="215.6" r="4" fill="#198754"/><circle cx="700.0" cy="212.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,234.3 444.9,193.5 700.0,247.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="234.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="193.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="247.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,180.9 444.9,62.3 700.0,144.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="180.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,243.9 444.9,246.2 700.0,177.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="243.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="177.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.5 444.9,139.7 700.0,139.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.5" r="4" fill="#20c997"/><circle cx="444.9" cy="139.7" r="4" fill="#20c997"/><circle cx="700.0" cy="139.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.86s | 127,226.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 81.07s | 123,350.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 342.48s | 145,993.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 12.25s | 81,639.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 129.84s | 77,015.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.08s | 78,979.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.38s | 65,006.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 109.55s | 91,285.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 886.12s | 56,426.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.06s | 99,413.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.82s | 175,982.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 406.34s | 123,050.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.01s | 58,802.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 174.43s | 57,329.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 491.02s | 101,829.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.19s | 75,815.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.37s | 125,989.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 397.10s | 125,912.9 | PASS |

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
  **Latest measurement:** `2026-10-30T00:03:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">85k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">128k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">171k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,171.8 444.9,130.6 700.0,137.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="171.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="130.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,190.0 700.0,112.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="190.0" r="4" fill="#198754"/><circle cx="700.0" cy="112.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.4 444.9,217.6 700.0,248.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="217.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,178.7 444.9,125.4 700.0,121.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="121.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,260.8 444.9,192.6 700.0,231.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="260.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="192.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="231.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,109.9 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="109.9" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.77s | 92,833.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.03s | 116,235.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 444.33s | 112,528.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.98s | 58,878.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.24s | 82,479.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 395.66s | 126,371.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.81s | 59,477.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 149.81s | 66,750.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1015.92s | 49,216.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,888.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.88s | 119,217.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 410.87s | 121,692.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 23.69s | 42,217.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 123.44s | 81,013.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 848.09s | 58,956.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.64s | 79,126.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.12s | 128,001.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 322.36s | 155,107.1 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,162.7 444.9,154.5 700.0,124.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="154.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="124.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.4 444.9,223.4 700.0,209.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#198754"/><circle cx="444.9" cy="223.4" r="4" fill="#198754"/><circle cx="700.0" cy="209.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,277.5 444.9,269.4 700.0,237.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="277.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="269.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="237.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.6 444.9,62.3 700.0,137.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="137.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.9 444.9,237.0 700.0,246.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,213.9 444.9,150.7 700.0,124.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="213.9" r="4" fill="#20c997"/><circle cx="444.9" cy="150.7" r="4" fill="#20c997"/><circle cx="700.0" cy="124.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.00s | 111,148.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 85.90s | 116,414.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 368.25s | 135,778.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.55s | 68,742.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 138.95s | 71,970.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 615.75s | 81,201.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 26.96s | 37,090.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 236.47s | 42,289.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 790.75s | 63,231.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,827.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.85s | 175,913.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 391.97s | 127,560.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.21s | 58,088.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 158.17s | 63,224.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 871.99s | 57,340.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.80s | 78,094.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.11s | 118,899.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.96s | 135,517.5 | PASS |

:::

:::

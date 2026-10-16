## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-16T22:18:38Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">44k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">89k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">133k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">178k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,145.0 444.9,126.4 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="126.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.1 444.9,128.6 700.0,199.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.1" r="4" fill="#198754"/><circle cx="444.9" cy="128.6" r="4" fill="#198754"/><circle cx="700.0" cy="199.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,254.1 444.9,235.6 700.0,234.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="254.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,151.4 444.9,138.4 700.0,131.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="151.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="131.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.7 444.9,238.3 700.0,199.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="199.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,206.3 444.9,86.8 700.0,121.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="206.3" r="4" fill="#20c997"/><circle cx="444.9" cy="86.8" r="4" fill="#20c997"/><circle cx="700.0" cy="121.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.89s | 112,498.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.95s | 123,531.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 309.62s | 161,486.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.96s | 66,836.0 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.82s | 122,225.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 623.10s | 80,243.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.89s | 47,881.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.94s | 58,845.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 837.25s | 59,719.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.20s | 108,695.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.89s | 116,423.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 414.68s | 120,576.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 17.72s | 56,436.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.74s | 57,229.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 624.88s | 80,015.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.12s | 76,202.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 68.04s | 146,974.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 396.07s | 126,239.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,88.3 444.9,72.6 700.0,76.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="88.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="72.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="76.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.1 444.9,168.1 700.0,169.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.1" r="4" fill="#198754"/><circle cx="444.9" cy="168.1" r="4" fill="#198754"/><circle cx="700.0" cy="169.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,208.8 444.9,222.3 700.0,158.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="158.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.9 444.9,103.4 700.0,93.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="103.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="93.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.9 444.9,223.5 700.0,194.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="194.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.3 444.9,98.6 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.3" r="4" fill="#20c997"/><circle cx="444.9" cy="98.6" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.15s | 122,759.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 76.59s | 130,570.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 389.21s | 128,464.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.87s | 72,108.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 120.39s | 83,064.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 608.72s | 82,140.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.92s | 62,822.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 178.27s | 56,095.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 567.81s | 88,058.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.21s | 108,530.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.76s | 115,255.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 416.13s | 120,155.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.07s | 49,833.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 180.16s | 55,507.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 712.97s | 70,129.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.28s | 81,459.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.00s | 117,640.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.39s | 135,723.9 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-16T22:13:52Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">60k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">179k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">239k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,178.5 444.9,178.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="178.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="178.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,247.6 444.9,235.1 700.0,172.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="247.6" r="4" fill="#198754"/><circle cx="444.9" cy="235.1" r="4" fill="#198754"/><circle cx="700.0" cy="172.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,275.8 444.9,262.6 700.0,260.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="275.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,201.1 444.9,180.7 700.0,176.2" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="201.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="180.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="176.2" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,268.2 444.9,257.5 700.0,258.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="268.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="257.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="258.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,244.8 444.9,170.3 700.0,146.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="244.8" r="4" fill="#20c997"/><circle cx="444.9" cy="170.3" r="4" fill="#20c997"/><circle cx="700.0" cy="146.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.04s | 124,409.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.55s | 124,154.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 230.56s | 216,859.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.40s | 69,458.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 125.94s | 79,400.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 386.97s | 129,207.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 21.24s | 47,072.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 173.75s | 57,553.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 840.08s | 59,518.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.39s | 106,439.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.49s | 122,711.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 395.87s | 126,303.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.83s | 53,101.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 162.19s | 61,654.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 825.97s | 60,535.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.94s | 71,746.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 76.36s | 130,958.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 334.14s | 149,637.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,183.7 444.9,127.0 700.0,142.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.2 444.9,186.4 700.0,204.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.2" r="4" fill="#198754"/><circle cx="444.9" cy="186.4" r="4" fill="#198754"/><circle cx="700.0" cy="204.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.9 444.9,206.0 700.0,248.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.2 444.9,160.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.4 444.9,252.2 700.0,250.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="252.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="250.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,240.4 444.9,154.9 700.0,153.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="240.4" r="4" fill="#20c997"/><circle cx="444.9" cy="154.9" r="4" fill="#20c997"/><circle cx="700.0" cy="153.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.49s | 105,418.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 68.99s | 144,946.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 372.82s | 134,112.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.68s | 68,110.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.59s | 103,534.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 547.63s | 91,301.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.10s | 66,242.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 111.25s | 89,891.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 830.91s | 60,174.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.84s | 101,605.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.18s | 121,688.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 263.13s | 190,021.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.32s | 49,224.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.34s | 57,691.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 848.95s | 58,896.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.18s | 65,880.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 79.70s | 125,464.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 395.77s | 126,337.3 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-15T22:52:59Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">133k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,112.2 700.0,122.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="112.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,196.0 444.9,189.7 700.0,171.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="196.0" r="4" fill="#198754"/><circle cx="444.9" cy="189.7" r="4" fill="#198754"/><circle cx="700.0" cy="171.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,218.9 444.9,206.2 700.0,189.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="218.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="206.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="189.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,122.9 444.9,82.3 700.0,104.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="122.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="82.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.7 444.9,226.1 700.0,201.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="201.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,191.7 444.9,115.4 700.0,102.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#20c997"/><circle cx="444.9" cy="115.4" r="4" fill="#20c997"/><circle cx="700.0" cy="102.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.29s | 120,670.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 101.43s | 98,592.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 530.70s | 94,215.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 16.26s | 61,493.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 155.59s | 64,269.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 692.45s | 72,207.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.46s | 51,382.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 175.54s | 56,967.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 776.06s | 64,427.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.66s | 93,843.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 89.45s | 111,790.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 489.45s | 102,156.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.88s | 45,697.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 207.59s | 48,171.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 846.31s | 59,079.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.77s | 63,411.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 102.92s | 97,160.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 485.20s | 103,049.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">158k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,126.8 444.9,131.4 700.0,133.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="131.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="133.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,211.0 444.9,171.3 700.0,203.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="211.0" r="4" fill="#198754"/><circle cx="444.9" cy="171.3" r="4" fill="#198754"/><circle cx="700.0" cy="203.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,207.4 444.9,231.9 700.0,228.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="207.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="228.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,97.5 444.9,135.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="97.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="135.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,251.1 444.9,223.7 700.0,234.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="251.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="234.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,212.6 444.9,151.0 700.0,119.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="212.6" r="4" fill="#20c997"/><circle cx="444.9" cy="151.0" r="4" fill="#20c997"/><circle cx="700.0" cy="119.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.13s | 109,529.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 93.33s | 107,150.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 472.56s | 105,806.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.33s | 65,244.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 116.12s | 86,117.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 723.78s | 69,082.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.89s | 67,150.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 184.30s | 54,259.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 888.95s | 56,246.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 8.00s | 124,984.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 95.34s | 104,884.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 348.44s | 143,495.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 22.64s | 44,159.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.77s | 58,558.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 943.56s | 52,991.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.53s | 64,379.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 103.30s | 96,810.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 441.10s | 113,352.0 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-15T22:40:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">71k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">106k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,130.1 444.9,69.7 700.0,78.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.1" r="4" fill="#0d6efd"/><circle cx="444.9" cy="69.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="78.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.2 444.9,167.5 700.0,140.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.2" r="4" fill="#198754"/><circle cx="444.9" cy="167.5" r="4" fill="#198754"/><circle cx="700.0" cy="140.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,227.9 444.9,209.5 700.0,205.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="227.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="209.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="205.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,74.3 444.9,74.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="74.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="74.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,229.2 444.9,221.5 700.0,204.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="229.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="204.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,172.1 444.9,68.8 700.0,63.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="172.1" r="4" fill="#20c997"/><circle cx="444.9" cy="68.8" r="4" fill="#20c997"/><circle cx="700.0" cy="63.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.37s | 96,432.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 80.08s | 124,875.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 414.35s | 120,672.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.67s | 68,175.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 126.81s | 78,855.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 545.48s | 91,663.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.84s | 50,400.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 169.30s | 59,067.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 818.24s | 61,107.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.15s | 122,744.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.55s | 122,625.7 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 389.46s | 128,383.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.08s | 49,793.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 187.22s | 53,413.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 811.22s | 61,635.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.04s | 76,693.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.82s | 125,288.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 391.61s | 127,679.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">107k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">160k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">214k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,177.4 444.9,89.4 700.0,142.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.4" r="4" fill="#0d6efd"/><circle cx="444.9" cy="89.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="142.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.5 444.9,226.0 700.0,206.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.5" r="4" fill="#198754"/><circle cx="444.9" cy="226.0" r="4" fill="#198754"/><circle cx="700.0" cy="206.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.1 444.9,257.3 700.0,257.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="257.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="257.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.8 444.9,171.8 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="171.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,247.5 444.9,261.8 700.0,193.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="247.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="261.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="193.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,235.9 444.9,131.1 700.0,103.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="235.9" r="4" fill="#20c997"/><circle cx="444.9" cy="131.1" r="4" fill="#20c997"/><circle cx="700.0" cy="103.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.91s | 112,233.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.18s | 174,892.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.16s | 136,925.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.71s | 67,976.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 128.80s | 77,639.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 547.38s | 91,344.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.68s | 48,355.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 180.76s | 55,321.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 903.29s | 55,352.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.81s | 101,968.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.03s | 116,241.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 257.44s | 194,216.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.04s | 62,328.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 191.93s | 52,102.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 495.42s | 100,923.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.16s | 70,601.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 68.87s | 145,201.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 302.98s | 165,028.5 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-15T22:26:35Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">103k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">155k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">207k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,205.9 444.9,142.8 700.0,105.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="205.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="105.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,242.9 444.9,216.2 700.0,204.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#198754"/><circle cx="444.9" cy="216.2" r="4" fill="#198754"/><circle cx="700.0" cy="204.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.9 444.9,247.9 700.0,235.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="247.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,148.6 444.9,144.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="148.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="144.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.4 444.9,195.4 700.0,242.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="195.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,233.6 444.9,143.5 700.0,145.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="233.6" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="145.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,904.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 75.58s | 132,304.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 315.87s | 158,295.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.76s | 63,439.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 122.31s | 81,758.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 555.47s | 90,013.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.28s | 65,453.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 166.69s | 59,991.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 732.36s | 68,272.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.79s | 128,336.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.06s | 131,466.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 266.28s | 187,770.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.26s | 54,770.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 104.04s | 96,120.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 781.53s | 63,977.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 14.32s | 69,847.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 75.83s | 131,868.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 383.47s | 130,389.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">210k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,201.6 444.9,62.3 700.0,84.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="84.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,245.6 444.9,214.6 700.0,222.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="245.6" r="4" fill="#198754"/><circle cx="444.9" cy="214.6" r="4" fill="#198754"/><circle cx="700.0" cy="222.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,268.6 444.9,249.9 700.0,198.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="268.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="198.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,202.7 444.9,163.5 700.0,128.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="202.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="163.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="128.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,223.5 444.9,198.9 700.0,189.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="223.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="189.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,241.0 444.9,168.2 700.0,116.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#20c997"/><circle cx="444.9" cy="168.2" r="4" fill="#20c997"/><circle cx="700.0" cy="116.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.72s | 93,301.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 52.44s | 190,683.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 285.23s | 175,295.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.99s | 62,535.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 118.77s | 84,194.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 633.43s | 78,935.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.55s | 46,403.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 167.98s | 59,529.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 524.72s | 95,289.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.81s | 92,481.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.38s | 119,938.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 346.94s | 144,118.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.83s | 77,960.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.06s | 95,179.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 492.87s | 101,447.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.21s | 65,741.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 85.72s | 116,654.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 327.48s | 152,683.4 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-16T22:25:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,145.0 444.9,149.2 700.0,75.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="145.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="149.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="75.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,190.9 444.9,204.3 700.0,221.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#198754"/><circle cx="444.9" cy="204.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,269.9 444.9,263.2 700.0,234.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="269.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="263.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.0 444.9,132.5 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="132.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,241.0 444.9,250.4 700.0,224.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="241.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="224.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,171.7 444.9,130.0 700.0,125.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="171.7" r="4" fill="#20c997"/><circle cx="444.9" cy="130.0" r="4" fill="#20c997"/><circle cx="700.0" cy="125.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.32s | 120,149.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.11s | 117,500.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 304.60s | 164,150.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.97s | 91,141.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 121.02s | 82,628.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 699.07s | 71,523.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 24.30s | 41,143.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 220.38s | 45,376.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 788.90s | 63,379.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.12s | 140,390.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.11s | 128,032.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 289.92s | 172,462.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.82s | 59,442.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 186.85s | 53,519.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 712.76s | 70,149.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.69s | 103,241.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.15s | 129,612.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 377.96s | 132,287.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">46k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">93k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">139k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">186k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,170.6 444.9,62.3 700.0,128.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="170.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,237.6 444.9,216.1 700.0,145.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="237.6" r="4" fill="#198754"/><circle cx="444.9" cy="216.1" r="4" fill="#198754"/><circle cx="700.0" cy="145.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,278.5 444.9,234.8 700.0,264.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="278.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="264.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,186.4 444.9,141.1 700.0,153.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="186.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="153.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.3 444.9,234.3 700.0,183.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="234.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="183.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,205.6 444.9,130.5 700.0,66.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="205.6" r="4" fill="#20c997"/><circle cx="444.9" cy="130.5" r="4" fill="#20c997"/><circle cx="700.0" cy="66.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.82s | 101,822.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 59.21s | 168,890.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 390.66s | 127,989.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.57s | 60,342.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 135.85s | 73,610.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 425.91s | 117,395.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.57s | 34,995.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 161.21s | 62,030.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1149.95s | 43,480.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.87s | 91,996.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.28s | 120,072.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 444.74s | 112,426.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.33s | 46,882.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 160.36s | 62,360.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 532.98s | 93,812.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.48s | 80,121.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.95s | 126,662.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 300.97s | 166,127.9 | PASS |

:::

:::

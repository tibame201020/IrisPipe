## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-07T23:05:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">84k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">126k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">168k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,136.8 444.9,65.4 700.0,119.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="136.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="65.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="119.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.6 444.9,183.8 700.0,177.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.6" r="4" fill="#198754"/><circle cx="444.9" cy="183.8" r="4" fill="#198754"/><circle cx="700.0" cy="177.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,221.1 444.9,182.0 700.0,162.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="221.1" r="4" fill="#dc3545"/><circle cx="444.9" cy="182.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="162.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.4 444.9,62.3 700.0,104.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,200.9 444.9,233.5 700.0,162.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="200.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,180.9 444.9,77.3 700.0,104.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="180.9" r="4" fill="#20c997"/><circle cx="444.9" cy="77.3" r="4" fill="#20c997"/><circle cx="700.0" cy="104.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.02s | 110,926.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 66.28s | 150,879.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 414.09s | 120,745.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.13s | 70,746.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 118.19s | 84,611.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 566.46s | 88,267.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 15.68s | 63,779.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 116.79s | 85,626.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 517.17s | 96,680.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.47s | 105,540.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 65.51s | 152,657.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 386.63s | 129,320.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.32s | 75,046.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.96s | 56,832.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 516.89s | 96,731.6 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.60s | 86,229.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 69.33s | 144,237.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 387.58s | 129,005.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">195k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,162.3 444.9,142.2 700.0,139.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="162.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="142.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="139.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,236.0 444.9,146.4 700.0,216.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="236.0" r="4" fill="#198754"/><circle cx="444.9" cy="146.4" r="4" fill="#198754"/><circle cx="700.0" cy="216.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,209.4 444.9,249.2 700.0,248.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="209.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="248.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,81.7 444.9,62.3 700.0,146.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="81.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,239.4 444.9,188.5 700.0,245.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="188.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="245.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,217.3 444.9,120.0 700.0,136.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="217.3" r="4" fill="#20c997"/><circle cx="444.9" cy="120.0" r="4" fill="#20c997"/><circle cx="700.0" cy="136.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.89s | 112,498.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.62s | 125,599.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 392.44s | 127,409.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.50s | 64,503.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 81.39s | 122,865.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 645.31s | 77,482.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.22s | 81,799.6 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 179.03s | 55,855.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 885.17s | 56,486.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 6.06s | 164,989.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 56.30s | 177,632.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 407.31s | 122,755.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.05s | 62,293.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 104.79s | 95,428.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 861.64s | 58,029.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.04s | 76,669.5 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 71.40s | 140,058.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 386.93s | 129,222.7 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-07T23:02:21Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">53k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">158k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">211k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,177.8 444.9,62.3 700.0,158.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="158.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.1 444.9,154.8 700.0,143.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.1" r="4" fill="#198754"/><circle cx="444.9" cy="154.8" r="4" fill="#198754"/><circle cx="700.0" cy="143.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.7 444.9,255.6 700.0,241.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,110.3 444.9,165.8 700.0,164.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="110.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="165.8" r="4" fill="#6f42c1"/><circle cx="700.0" cy="164.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,264.1 444.9,245.6 700.0,254.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="264.1" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="254.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.6 444.9,123.3 700.0,140.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.6" r="4" fill="#20c997"/><circle cx="444.9" cy="123.3" r="4" fill="#20c997"/><circle cx="700.0" cy="140.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.06s | 110,338.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 52.23s | 191,449.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 404.40s | 123,638.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.86s | 67,294.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 79.04s | 126,523.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 371.03s | 134,759.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.18s | 54,993.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.50s | 55,711.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 759.07s | 65,869.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.34s | 157,728.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 84.17s | 118,800.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 418.15s | 119,573.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.10s | 49,761.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 159.34s | 62,758.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 885.94s | 56,437.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 9.73s | 102,764.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.28s | 148,643.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 366.89s | 136,279.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">59k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">118k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">177k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">236k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,167.9 444.9,171.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="167.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="171.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,250.7 444.9,235.0 700.0,234.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="250.7" r="4" fill="#198754"/><circle cx="444.9" cy="235.0" r="4" fill="#198754"/><circle cx="700.0" cy="234.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.3 444.9,212.7 700.0,255.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,206.8 444.9,165.3 700.0,177.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="165.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="177.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.6 444.9,249.8 700.0,236.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="249.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,229.5 444.9,183.2 700.0,168.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="229.5" r="4" fill="#20c997"/><circle cx="444.9" cy="183.2" r="4" fill="#20c997"/><circle cx="700.0" cy="168.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.61s | 131,371.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 77.71s | 128,686.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 233.25s | 214,360.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.09s | 66,251.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.28s | 78,564.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 634.25s | 78,833.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.80s | 53,191.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 104.00s | 96,152.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 803.54s | 62,224.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.92s | 100,796.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 74.98s | 133,361.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 404.71s | 123,545.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.60s | 53,766.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 149.31s | 66,972.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 647.25s | 77,249.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.05s | 82,960.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.79s | 119,350.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 382.91s | 130,579.0 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-07T00:33:55Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">33k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">66k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">132k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,62.3 444.9,152.5 700.0,122.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="152.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="122.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,158.1 444.9,104.3 700.0,154.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="158.1" r="4" fill="#198754"/><circle cx="444.9" cy="104.3" r="4" fill="#198754"/><circle cx="700.0" cy="154.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,173.5 444.9,226.4 700.0,197.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="173.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="226.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="197.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,115.4 444.9,90.4 700.0,72.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="115.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="72.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,231.2 444.9,223.9 700.0,147.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="231.2" r="4" fill="#fd7e14"/><circle cx="444.9" cy="223.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="147.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.0 444.9,111.5 700.0,92.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.0" r="4" fill="#20c997"/><circle cx="444.9" cy="111.5" r="4" fill="#20c997"/><circle cx="700.0" cy="92.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.34s | 119,904.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 124.62s | 80,242.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 535.61s | 93,350.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.86s | 77,766.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 98.59s | 101,425.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 629.91s | 79,376.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 14.08s | 71,022.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 209.49s | 47,735.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 824.97s | 60,608.1 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.36s | 96,534.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 92.99s | 107,538.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 432.50s | 115,606.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.91s | 45,635.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 204.70s | 48,851.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 607.79s | 82,264.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.69s | 63,730.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 101.79s | 98,240.5 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 469.02s | 106,605.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">37k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">75k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">112k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">149k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,159.2 444.9,127.6 700.0,128.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="159.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="127.6" r="4" fill="#0d6efd"/><circle cx="700.0" cy="128.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,184.6 444.9,206.5 700.0,196.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="184.6" r="4" fill="#198754"/><circle cx="444.9" cy="206.5" r="4" fill="#198754"/><circle cx="700.0" cy="196.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,239.3 444.9,231.4 700.0,224.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="239.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="231.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="224.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,130.0 700.0,141.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="141.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,227.8 444.9,232.1 700.0,159.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="227.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="232.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="159.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,139.6 444.9,131.9 700.0,113.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="139.6" r="4" fill="#20c997"/><circle cx="444.9" cy="131.9" r="4" fill="#20c997"/><circle cx="700.0" cy="113.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.44s | 87,427.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.96s | 103,135.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 486.69s | 102,734.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.36s | 74,827.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 156.47s | 63,908.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 727.66s | 68,713.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.02s | 47,582.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 193.99s | 51,548.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 905.28s | 55,231.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.37s | 135,648.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 98.08s | 101,952.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 519.78s | 96,194.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.76s | 53,302.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 195.31s | 51,200.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 572.40s | 87,352.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 10.29s | 97,210.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.00s | 101,007.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 453.58s | 110,234.1 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-07T00:26:02Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,152.9 444.9,64.3 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="152.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="64.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.0 444.9,190.1 700.0,189.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#198754"/><circle cx="444.9" cy="190.1" r="4" fill="#198754"/><circle cx="700.0" cy="189.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.8 444.9,198.7 700.0,209.7" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="198.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="209.7" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,116.4 444.9,89.1 700.0,112.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="116.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="89.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="112.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.4 444.9,229.6 700.0,221.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,187.2 444.9,80.6 700.0,71.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="187.2" r="4" fill="#20c997"/><circle cx="444.9" cy="80.6" r="4" fill="#20c997"/><circle cx="700.0" cy="71.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,726.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 68.14s | 146,752.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 338.19s | 147,845.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.63s | 63,967.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.34s | 78,532.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 633.85s | 78,883.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.58s | 51,072.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 135.38s | 73,867.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 736.30s | 67,907.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.44s | 118,511.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.00s | 133,329.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 415.16s | 120,434.9 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 16.99s | 58,854.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.00s | 57,142.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 810.25s | 61,709.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.48s | 80,096.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 72.51s | 137,919.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 349.77s | 142,949.0 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">140k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">187k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,129.5 444.9,76.4 700.0,146.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="129.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="76.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="146.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,216.6 444.9,208.1 700.0,185.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="216.6" r="4" fill="#198754"/><circle cx="444.9" cy="208.1" r="4" fill="#198754"/><circle cx="700.0" cy="185.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,217.0 444.9,232.3 700.0,241.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="217.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="232.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,160.0 700.0,144.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="160.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="144.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.7 444.9,176.0 700.0,242.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="176.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="242.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,209.5 444.9,62.6 700.0,127.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="209.5" r="4" fill="#20c997"/><circle cx="444.9" cy="62.6" r="4" fill="#20c997"/><circle cx="700.0" cy="127.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.79s | 128,287.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 61.94s | 161,444.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 425.82s | 117,420.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.53s | 73,920.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 126.29s | 79,182.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 537.17s | 93,079.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.58s | 73,654.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 156.01s | 64,098.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 859.12s | 58,198.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.87s | 170,241.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 91.55s | 109,229.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 421.23s | 118,700.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.20s | 49,505.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 100.75s | 99,251.6 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 866.71s | 57,689.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.76s | 78,363.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 58.82s | 170,021.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 385.75s | 129,617.0 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-07T23:01:23Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">99k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">148k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">198k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,201.6 444.9,62.3 700.0,71.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="201.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="71.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.8 444.9,146.0 700.0,177.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.8" r="4" fill="#198754"/><circle cx="444.9" cy="146.0" r="4" fill="#198754"/><circle cx="700.0" cy="177.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,242.9 444.9,255.5 700.0,249.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="242.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="255.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="249.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,188.9 444.9,153.1 700.0,136.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="188.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="136.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.5 444.9,191.9 700.0,240.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="191.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="240.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,235.8 444.9,146.6 700.0,123.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="235.8" r="4" fill="#20c997"/><circle cx="444.9" cy="146.6" r="4" fill="#20c997"/><circle cx="700.0" cy="123.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.38s | 87,881.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 55.65s | 179,697.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 288.43s | 173,349.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 12.03s | 83,146.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 80.30s | 124,534.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 482.62s | 103,601.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.47s | 60,709.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 190.88s | 52,387.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 891.10s | 56,110.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.39s | 96,237.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.43s | 119,863.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 382.26s | 130,801.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.11s | 49,733.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 106.03s | 94,309.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 799.97s | 62,502.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 15.29s | 65,389.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 80.57s | 124,112.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 358.60s | 139,430.7 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,184.5 444.9,97.2 700.0,114.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="184.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="114.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,163.0 444.9,198.7 700.0,169.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="163.0" r="4" fill="#198754"/><circle cx="444.9" cy="198.7" r="4" fill="#198754"/><circle cx="700.0" cy="169.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,257.2 444.9,187.5 700.0,243.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="257.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="187.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,164.7 444.9,62.3 700.0,126.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="164.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="62.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="126.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,250.9 444.9,172.9 700.0,222.7" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="250.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="172.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="222.7" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,224.7 444.9,131.0 700.0,91.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="224.7" r="4" fill="#20c997"/><circle cx="444.9" cy="131.0" r="4" fill="#20c997"/><circle cx="700.0" cy="91.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.99s | 91,008.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.56s | 143,762.8 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 374.21s | 133,615.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.62s | 104,004.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 121.32s | 82,424.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 499.14s | 100,172.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.26s | 47,034.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 112.12s | 89,187.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 898.88s | 55,624.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.71s | 102,954.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 60.65s | 164,869.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 397.53s | 125,776.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.68s | 50,810.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 102.08s | 97,964.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 736.81s | 67,860.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,684.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.08s | 123,342.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 339.80s | 147,143.6 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-11-07T00:22:16Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">202k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,166.8 444.9,164.5 700.0,127.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="166.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="164.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="127.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,234.4 444.9,205.1 700.0,222.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="234.4" r="4" fill="#198754"/><circle cx="444.9" cy="205.1" r="4" fill="#198754"/><circle cx="700.0" cy="222.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.3 444.9,267.5 700.0,261.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="267.5" r="4" fill="#dc3545"/><circle cx="700.0" cy="261.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,113.2 444.9,154.2 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="113.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="154.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,257.6 444.9,253.0 700.0,190.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="257.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="253.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,210.9 444.9,143.6 700.0,118.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="210.9" r="4" fill="#20c997"/><circle cx="444.9" cy="143.6" r="4" fill="#20c997"/><circle cx="700.0" cy="118.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.83s | 113,211.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 87.10s | 114,806.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 357.32s | 139,928.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.76s | 67,759.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 114.36s | 87,440.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 657.24s | 76,075.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 16.37s | 61,079.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 219.99s | 45,456.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1014.16s | 49,301.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.70s | 149,342.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.15s | 121,727.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 272.31s | 183,614.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.18s | 52,132.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 181.14s | 55,206.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 513.39s | 97,391.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.97s | 83,570.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.60s | 128,861.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 343.36s | 145,618.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">42k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">83k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">166k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,137.5 444.9,85.9 700.0,116.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="137.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="85.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.6 444.9,146.6 700.0,206.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.6" r="4" fill="#198754"/><circle cx="444.9" cy="146.6" r="4" fill="#198754"/><circle cx="700.0" cy="206.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,271.2 444.9,244.3 700.0,203.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="271.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="244.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="203.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,169.2 444.9,101.7 700.0,96.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="169.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="101.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="96.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,214.6 444.9,229.0 700.0,195.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="214.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="195.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.1 444.9,62.3 700.0,98.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="98.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.14s | 109,361.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.51s | 137,919.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 412.21s | 121,297.7 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.97s | 58,917.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 95.88s | 104,302.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 703.56s | 71,066.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 28.31s | 35,318.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 199.16s | 50,211.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 684.27s | 73,070.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.89s | 91,802.1 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 77.42s | 129,168.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 378.77s | 132,006.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 15.00s | 66,666.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.30s | 58,720.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 647.61s | 77,206.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.09s | 76,376.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 66.21s | 151,027.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 381.42s | 131,090.1 | PASS |

:::

:::

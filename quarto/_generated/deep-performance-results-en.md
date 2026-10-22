## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-22T22:51:14Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">45k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">91k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">136k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">181k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.6 444.9,62.3 700.0,138.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="138.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,220.6 444.9,205.2 700.0,170.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#198754"/><circle cx="444.9" cy="205.2" r="4" fill="#198754"/><circle cx="700.0" cy="170.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.6 444.9,242.7 700.0,245.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="242.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="245.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,144.2 444.9,140.7 700.0,134.1" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="144.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="140.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.1" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.4 444.9,240.2 700.0,238.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="240.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="238.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,149.8 444.9,139.1 700.0,86.9" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="149.8" r="4" fill="#20c997"/><circle cx="444.9" cy="139.1" r="4" fill="#20c997"/><circle cx="700.0" cy="86.9" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.87s | 112,714.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 60.63s | 164,943.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 421.02s | 118,758.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.46s | 69,165.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 127.42s | 78,479.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 502.91s | 99,422.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.15s | 52,227.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 179.10s | 55,834.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 922.60s | 54,194.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.66s | 115,406.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.09s | 117,526.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 411.50s | 121,508.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.76s | 48,167.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 174.49s | 57,310.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 857.72s | 58,293.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 8.93s | 112,019.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 84.41s | 118,469.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 333.17s | 150,072.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">157k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">209k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,117.0 444.9,155.3 700.0,123.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="117.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="155.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="123.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,239.4 444.9,235.3 700.0,221.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="239.4" r="4" fill="#198754"/><circle cx="444.9" cy="235.3" r="4" fill="#198754"/><circle cx="700.0" cy="221.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,267.4 444.9,254.2 700.0,239.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="267.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="254.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,192.9 444.9,173.3 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="192.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="173.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,266.8 444.9,250.5 700.0,246.2" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="266.8" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="246.2" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,219.3 444.9,128.3 700.0,167.8" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="219.3" r="4" fill="#20c997"/><circle cx="444.9" cy="128.3" r="4" fill="#20c997"/><circle cx="700.0" cy="167.8" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.57s | 152,183.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.73s | 125,415.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 338.69s | 147,625.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.99s | 66,693.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 143.75s | 69,562.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 631.04s | 79,234.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.20s | 47,180.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.32s | 56,395.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 747.73s | 66,868.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.09s | 99,147.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.60s | 112,868.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 262.67s | 190,354.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.02s | 47,580.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 169.56s | 58,975.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 806.97s | 61,960.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.38s | 80,768.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 69.32s | 144,262.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 428.39s | 116,715.5 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-22T22:39:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">142k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">190k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,187.3 444.9,134.0 700.0,137.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="187.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="134.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="137.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,230.0 444.9,198.8 700.0,139.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="230.0" r="4" fill="#198754"/><circle cx="444.9" cy="198.8" r="4" fill="#198754"/><circle cx="700.0" cy="139.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,251.7 444.9,249.8 700.0,230.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="251.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="230.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,150.9 444.9,143.7 700.0,138.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="150.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="143.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,207.9 444.9,225.3 700.0,229.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="229.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,197.4 444.9,62.3 700.0,146.4" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="197.4" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="146.4" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.70s | 93,423.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.67s | 127,105.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 400.46s | 124,857.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.06s | 66,396.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 116.13s | 86,111.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 404.01s | 123,759.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 18.98s | 52,687.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 185.68s | 53,855.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 754.24s | 66,291.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 8.59s | 116,441.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 82.66s | 120,977.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.23s | 123,997.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 12.44s | 80,379.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 144.17s | 69,364.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 746.46s | 66,982.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.49s | 87,001.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 57.97s | 172,491.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 419.10s | 119,303.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">54k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">108k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">161k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">215k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,195.6 444.9,148.4 700.0,98.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="195.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="148.4" r="4" fill="#0d6efd"/><circle cx="700.0" cy="98.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,243.2 444.9,206.8 700.0,147.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="243.2" r="4" fill="#198754"/><circle cx="444.9" cy="206.8" r="4" fill="#198754"/><circle cx="700.0" cy="147.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,264.3 444.9,252.8 700.0,255.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="264.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="252.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,90.1 444.9,172.1 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="90.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="172.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,270.9 444.9,254.5 700.0,256.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="270.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="254.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="256.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,208.7 444.9,158.0 700.0,112.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="208.7" r="4" fill="#20c997"/><circle cx="444.9" cy="158.0" r="4" fill="#20c997"/><circle cx="700.0" cy="112.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,950.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 74.73s | 133,809.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 295.19s | 169,383.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.19s | 65,819.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 108.74s | 91,959.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 372.41s | 134,261.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.73s | 50,684.2 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 169.71s | 58,924.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 872.92s | 57,279.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.69s | 175,623.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 85.59s | 116,829.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 255.65s | 195,577.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.77s | 45,939.0 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 173.20s | 57,735.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 891.76s | 56,068.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.04s | 90,579.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.77s | 126,947.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 312.74s | 159,875.7 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-22T23:07:03Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">82k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">123k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,177.7 444.9,62.3 700.0,168.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="168.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,154.9 444.9,219.2 700.0,203.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="154.9" r="4" fill="#198754"/><circle cx="444.9" cy="219.2" r="4" fill="#198754"/><circle cx="700.0" cy="203.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,241.2 444.9,237.4 700.0,233.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="241.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="237.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.3 444.9,141.6 700.0,138.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="141.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,201.0 444.9,243.3 700.0,237.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="201.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="243.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,157.5 444.9,148.8 700.0,119.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="157.5" r="4" fill="#20c997"/><circle cx="444.9" cy="148.8" r="4" fill="#20c997"/><circle cx="700.0" cy="119.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.67s | 85,697.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 67.28s | 148,623.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 552.32s | 90,526.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.19s | 98,125.8 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 158.41s | 63,126.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 697.26s | 71,709.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.56s | 51,130.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 188.10s | 53,162.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 899.38s | 55,593.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.62s | 94,135.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 94.90s | 105,378.5 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 465.71s | 107,362.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 13.70s | 73,019.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 200.15s | 49,963.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 941.48s | 53,108.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 10.34s | 96,739.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 98.56s | 101,455.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 424.84s | 117,692.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,168.2 444.9,125.0 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="168.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="125.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,219.7 444.9,212.8 700.0,196.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="219.7" r="4" fill="#198754"/><circle cx="444.9" cy="212.8" r="4" fill="#198754"/><circle cx="700.0" cy="196.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,196.2 444.9,235.7 700.0,236.9" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="196.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="236.9" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,81.8 444.9,117.9 700.0,64.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="81.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="117.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="64.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,226.5 444.9,233.9 700.0,220.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="226.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,141.1 444.9,140.3 700.0,126.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="141.1" r="4" fill="#20c997"/><circle cx="444.9" cy="140.3" r="4" fill="#20c997"/><circle cx="700.0" cy="126.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 11.56s | 86,505.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 91.79s | 108,939.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.42s | 141,476.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.72s | 59,797.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 157.76s | 63,387.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 697.13s | 71,723.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 13.88s | 72,025.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.13s | 51,512.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 982.34s | 50,898.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.61s | 131,354.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.79s | 112,626.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 356.83s | 140,123.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 17.77s | 56,277.8 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 190.62s | 52,461.8 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 841.19s | 59,439.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.94s | 100,563.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 99.02s | 100,993.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 462.76s | 108,047.6 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-22T22:54:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">52k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">104k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">156k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">208k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,188.9 444.9,166.0 700.0,162.5" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="188.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="166.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="162.5" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,228.4 444.9,201.1 700.0,216.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="228.4" r="4" fill="#198754"/><circle cx="444.9" cy="201.1" r="4" fill="#198754"/><circle cx="700.0" cy="216.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,261.7 444.9,239.4 700.0,252.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="261.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="239.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="252.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,181.7 444.9,157.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="181.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="157.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.4 444.9,250.4 700.0,237.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="250.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="237.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.5 444.9,116.7 700.0,141.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.5" r="4" fill="#20c997"/><circle cx="444.9" cy="116.7" r="4" fill="#20c997"/><circle cx="700.0" cy="141.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.87s | 101,296.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 85.37s | 117,137.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 418.16s | 119,572.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.54s | 73,882.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 107.73s | 92,822.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 610.18s | 81,943.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.68s | 50,820.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 150.91s | 66,262.9 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.32s | 57,122.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.41s | 106,303.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.36s | 122,903.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 264.43s | 189,083.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.86s | 50,362.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 170.57s | 58,628.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 740.70s | 67,503.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.42s | 74,526.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 66.07s | 151,356.9 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 372.70s | 134,156.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">63k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">125k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">188k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">251k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,207.9 444.9,62.3 700.0,182.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="207.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="182.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,208.5 444.9,185.6 700.0,234.6" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="208.5" r="4" fill="#198754"/><circle cx="444.9" cy="185.6" r="4" fill="#198754"/><circle cx="700.0" cy="234.6" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.3 444.9,271.4 700.0,262.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="271.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="262.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,210.5 444.9,104.1 700.0,192.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="210.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="104.1" r="4" fill="#6f42c1"/><circle cx="700.0" cy="192.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,272.9 444.9,221.1 700.0,270.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="272.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="221.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="270.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,207.5 444.9,142.9 700.0,204.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="207.5" r="4" fill="#20c997"/><circle cx="444.9" cy="142.9" r="4" fill="#20c997"/><circle cx="700.0" cy="204.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.42s | 106,202.2 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 43.89s | 227,857.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 391.03s | 127,867.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 9.46s | 105,719.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 80.09s | 124,858.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 595.92s | 83,903.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 14.14s | 70,731.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 188.23s | 53,126.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 825.11s | 60,597.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.61s | 104,047.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 51.84s | 192,916.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 420.00s | 119,047.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.27s | 51,907.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.08s | 95,166.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 921.17s | 54,278.9 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 9.39s | 106,530.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 62.32s | 160,467.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 457.20s | 109,361.8 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-22T22:42:45Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">120k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">160k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,169.7 444.9,84.7 700.0,85.9" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="169.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="84.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="85.9" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,212.4 444.9,184.6 700.0,177.4" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="212.4" r="4" fill="#198754"/><circle cx="444.9" cy="184.6" r="4" fill="#198754"/><circle cx="700.0" cy="177.4" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.0 444.9,212.8 700.0,175.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="212.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,100.4 444.9,90.4 700.0,102.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="100.4" r="4" fill="#6f42c1"/><circle cx="444.9" cy="90.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,208.4 444.9,226.5 700.0,135.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="208.4" r="4" fill="#fd7e14"/><circle cx="444.9" cy="226.5" r="4" fill="#fd7e14"/><circle cx="700.0" cy="135.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,195.9 444.9,93.4 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="195.9" r="4" fill="#20c997"/><circle cx="444.9" cy="93.4" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 11.33s | 88,253.5 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 74.84s | 133,623.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 375.99s | 132,983.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.27s | 65,470.7 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 124.56s | 80,282.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 594.27s | 84,136.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.59s | 48,567.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 153.34s | 65,215.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 587.18s | 85,153.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 7.98s | 125,266.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 76.57s | 130,601.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 403.22s | 124,000.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 14.79s | 67,604.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 172.70s | 57,902.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 469.59s | 106,476.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.46s | 74,277.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 77.53s | 128,974.0 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 343.42s | 145,594.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">80k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">121k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">161k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,148.2 444.9,78.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="148.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="78.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,217.2 444.9,188.1 700.0,253.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="217.2" r="4" fill="#198754"/><circle cx="444.9" cy="188.1" r="4" fill="#198754"/><circle cx="700.0" cy="253.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.5 444.9,187.4 700.0,225.0" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="187.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="225.0" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,149.1 444.9,102.7 700.0,111.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="149.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="102.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="111.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,222.5 444.9,225.8 700.0,190.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="225.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="190.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,190.9 444.9,108.3 700.0,75.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="190.9" r="4" fill="#20c997"/><circle cx="444.9" cy="108.3" r="4" fill="#20c997"/><circle cx="700.0" cy="75.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.99s | 100,050.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 72.85s | 137,264.6 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 342.27s | 146,085.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.84s | 63,123.3 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 127.09s | 78,681.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 1151.16s | 43,434.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.63s | 48,480.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 126.46s | 79,077.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 848.41s | 58,933.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.04s | 99,581.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 80.36s | 124,433.8 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 417.87s | 119,655.3 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 16.60s | 60,255.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 170.95s | 58,497.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 644.19s | 77,617.3 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.96s | 77,178.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.36s | 121,412.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 358.95s | 139,294.0 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-22T22:52:20Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">97k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">145k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">194k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,146.5 444.9,118.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="146.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="118.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,235.5 444.9,143.3 700.0,218.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="235.5" r="4" fill="#198754"/><circle cx="444.9" cy="143.3" r="4" fill="#198754"/><circle cx="700.0" cy="218.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,276.5 444.9,262.7 700.0,232.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="276.5" r="4" fill="#dc3545"/><circle cx="444.9" cy="262.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="232.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,191.7 444.9,125.4 700.0,146.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="191.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="125.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="146.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,258.9 444.9,238.6 700.0,216.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="258.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="238.6" r="4" fill="#fd7e14"/><circle cx="700.0" cy="216.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,211.3 444.9,136.6 700.0,120.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="211.3" r="4" fill="#20c997"/><circle cx="444.9" cy="136.6" r="4" fill="#20c997"/><circle cx="700.0" cy="120.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 8.21s | 121,773.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 71.59s | 139,684.3 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 283.73s | 176,225.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.56s | 64,275.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 80.73s | 123,866.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 666.21s | 75,051.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 26.48s | 37,770.1 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 213.92s | 46,745.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 756.92s | 66,057.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.80s | 92,609.7 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 73.82s | 135,459.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 409.49s | 122,104.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.33s | 49,195.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 160.53s | 62,293.7 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 651.76s | 76,715.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.51s | 79,942.4 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.01s | 128,190.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 359.99s | 138,893.5 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">43k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">86k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">130k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">173k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,163.6 444.9,113.9 700.0,97.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="163.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="113.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="97.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,168.3 444.9,209.2 700.0,210.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="168.3" r="4" fill="#198754"/><circle cx="444.9" cy="209.2" r="4" fill="#198754"/><circle cx="700.0" cy="210.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,248.0 444.9,205.9 700.0,243.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="248.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="205.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,184.8 444.9,130.6 700.0,142.5" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="184.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="130.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="142.5" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,198.9 444.9,236.7 700.0,236.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="198.9" r="4" fill="#fd7e14"/><circle cx="444.9" cy="236.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="236.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,188.7 444.9,113.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="188.7" r="4" fill="#20c997"/><circle cx="444.9" cy="113.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.12s | 98,784.9 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 78.50s | 127,390.2 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 365.52s | 136,791.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 10.41s | 96,061.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 137.90s | 72,515.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 695.71s | 71,869.1 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 19.94s | 50,155.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 134.40s | 74,406.4 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 947.08s | 52,793.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.55s | 86,542.6 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.89s | 117,806.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 450.70s | 110,938.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 12.75s | 78,412.9 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.50s | 56,657.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 883.66s | 56,582.8 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.86s | 84,302.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.43s | 127,508.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 318.14s | 157,163.5 | PASS |

:::

:::

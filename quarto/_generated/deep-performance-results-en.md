## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-26T23:50:18Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">41k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">81k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">122k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">163k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,138.0 444.9,102.7 700.0,108.4" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="138.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="102.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="108.4" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,140.9 444.9,109.7 700.0,184.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="140.9" r="4" fill="#198754"/><circle cx="444.9" cy="109.7" r="4" fill="#198754"/><circle cx="700.0" cy="184.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,240.4 444.9,216.9 700.0,234.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="240.4" r="4" fill="#dc3545"/><circle cx="444.9" cy="216.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="234.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,130.6 444.9,113.9 700.0,84.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="130.6" r="4" fill="#6f42c1"/><circle cx="444.9" cy="113.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="84.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,178.3 444.9,233.1 700.0,148.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="178.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="233.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="148.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,183.7 444.9,62.3 700.0,90.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="183.7" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="90.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 9.36s | 106,860.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.37s | 125,989.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 406.68s | 122,946.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 9.50s | 105,274.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 81.83s | 122,204.6 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 613.15s | 81,546.0 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.48s | 51,326.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 156.12s | 64,053.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 916.68s | 54,544.9 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.02s | 110,852.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 83.39s | 119,924.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 367.61s | 136,013.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 11.77s | 84,990.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 180.92s | 55,273.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 494.59s | 101,094.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.19s | 82,068.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 67.59s | 147,944.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 376.19s | 132,911.6 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="H2 source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">H2 source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">48k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">95k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">143k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">191k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,177.9 444.9,62.3 700.0,117.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="177.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="62.3" r="4" fill="#0d6efd"/><circle cx="700.0" cy="117.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.3 444.9,216.9 700.0,214.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.3" r="4" fill="#198754"/><circle cx="444.9" cy="216.9" r="4" fill="#198754"/><circle cx="700.0" cy="214.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.3 444.9,249.4 700.0,239.8" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.4" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.8" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,67.5 444.9,153.6 700.0,77.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="67.5" r="4" fill="#6f42c1"/><circle cx="444.9" cy="153.6" r="4" fill="#6f42c1"/><circle cx="700.0" cy="77.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,198.7 444.9,246.0 700.0,162.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="198.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="246.0" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,198.6 444.9,149.5 700.0,126.1" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="198.6" r="4" fill="#20c997"/><circle cx="444.9" cy="149.5" r="4" fill="#20c997"/><circle cx="700.0" cy="126.1" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.01s | 99,930.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 57.63s | 173,520.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 360.73s | 138,606.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.16s | 65,967.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 133.12s | 75,118.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 649.75s | 76,952.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.91s | 45,645.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 183.58s | 54,471.3 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 825.82s | 60,546.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 5.88s | 170,212.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 86.64s | 115,416.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 305.40s | 163,720.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 11.53s | 86,715.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 176.54s | 56,643.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 455.18s | 109,846.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 11.52s | 86,783.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 84.71s | 118,044.2 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 376.17s | 132,920.4 | PASS |

:::

## PostgreSQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-26T23:45:58Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">47k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">94k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">141k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">188k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,108.6 444.9,139.0 700.0,147.0" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="108.6" r="4" fill="#0d6efd"/><circle cx="444.9" cy="139.0" r="4" fill="#0d6efd"/><circle cx="700.0" cy="147.0" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,213.6 444.9,211.6 700.0,201.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="213.6" r="4" fill="#198754"/><circle cx="444.9" cy="211.6" r="4" fill="#198754"/><circle cx="700.0" cy="201.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,245.8 444.9,182.9 700.0,241.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="245.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="182.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="241.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,92.1 444.9,138.0 700.0,129.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="92.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="138.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="129.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,255.0 444.9,245.2 700.0,182.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="255.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="245.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="182.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,204.0 444.9,62.3 700.0,63.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="204.0" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="63.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 7.06s | 141,723.4 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 81.51s | 122,690.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 424.89s | 117,677.5 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.16s | 76,005.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 129.44s | 77,255.9 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 599.07s | 83,462.7 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 17.91s | 55,822.3 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 105.05s | 95,195.5 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 852.12s | 58,677.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.58s | 152,091.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.09s | 123,324.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 388.31s | 128,761.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.96s | 50,087.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 177.79s | 56,245.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 524.65s | 95,301.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.19s | 82,027.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 58.57s | 170,741.7 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 293.98s | 170,077.3 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="PostgreSQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">PostgreSQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">38k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">115k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">153k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,151.7 444.9,67.5 700.0,74.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="151.7" r="4" fill="#0d6efd"/><circle cx="444.9" cy="67.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="74.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,200.7 444.9,131.5 700.0,180.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="200.7" r="4" fill="#198754"/><circle cx="444.9" cy="131.5" r="4" fill="#198754"/><circle cx="700.0" cy="180.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,178.7 444.9,222.3 700.0,235.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="178.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="222.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="235.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,135.1 444.9,100.3 700.0,102.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="135.1" r="4" fill="#6f42c1"/><circle cx="444.9" cy="100.3" r="4" fill="#6f42c1"/><circle cx="700.0" cy="102.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,234.0 444.9,208.4 700.0,139.3" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="234.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="208.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="139.3" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,196.9 444.9,95.2 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="196.9" r="4" fill="#20c997"/><circle cx="444.9" cy="95.2" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 10.69s | 93,554.1 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 73.23s | 136,556.1 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 375.78s | 133,057.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.59s | 68,563.6 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 96.26s | 103,886.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.83s | 79,010.8 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 12.54s | 79,763.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 173.80s | 57,537.1 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 980.78s | 50,979.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.80s | 102,030.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 83.46s | 119,823.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 421.43s | 118,644.5 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.39s | 51,578.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 154.72s | 64,632.0 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 500.64s | 99,872.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.19s | 70,497.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 81.71s | 122,378.1 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 359.17s | 139,209.5 | PASS |

:::

## MySQL

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-25T22:16:49Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,180.2 444.9,143.2 700.0,156.2" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="180.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="143.2" r="4" fill="#0d6efd"/><circle cx="700.0" cy="156.2" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,148.5 444.9,205.7 700.0,135.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="148.5" r="4" fill="#198754"/><circle cx="444.9" cy="205.7" r="4" fill="#198754"/><circle cx="700.0" cy="135.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.2 444.9,235.3 700.0,227.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="235.3" r="4" fill="#dc3545"/><circle cx="700.0" cy="227.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,115.0 700.0,140.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="115.0" r="4" fill="#6f42c1"/><circle cx="700.0" cy="140.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.6 444.9,219.8 700.0,191.6" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="219.8" r="4" fill="#fd7e14"/><circle cx="700.0" cy="191.6" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,193.4 444.9,156.5 700.0,105.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="193.4" r="4" fill="#20c997"/><circle cx="444.9" cy="156.5" r="4" fill="#20c997"/><circle cx="700.0" cy="105.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.20s | 81,980.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 98.47s | 101,557.9 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 528.12s | 94,675.8 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 10.13s | 98,726.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 146.07s | 68,461.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 474.08s | 105,468.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 20.80s | 48,076.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 189.37s | 52,807.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 875.64s | 57,100.8 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 6.92s | 144,404.3 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 85.86s | 116,464.6 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 485.13s | 103,065.4 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 20.89s | 47,860.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 163.96s | 60,990.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 658.34s | 75,949.1 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.34s | 74,968.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 105.83s | 94,487.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 411.79s | 121,421.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MySQL source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MySQL source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">35k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">70k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">105k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">141k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,94.5 444.9,115.1 700.0,73.7" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="94.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="115.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="73.7" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,202.8 444.9,196.8 700.0,188.3" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="202.8" r="4" fill="#198754"/><circle cx="444.9" cy="196.8" r="4" fill="#198754"/><circle cx="700.0" cy="188.3" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,230.2 444.9,249.2 700.0,175.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="230.2" r="4" fill="#dc3545"/><circle cx="444.9" cy="249.2" r="4" fill="#dc3545"/><circle cx="700.0" cy="175.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,62.3 444.9,118.5 700.0,109.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="62.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="118.5" r="4" fill="#6f42c1"/><circle cx="700.0" cy="109.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,238.0 444.9,229.2 700.0,160.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="238.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="229.2" r="4" fill="#fd7e14"/><circle cx="700.0" cy="160.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,199.0 444.9,122.8 700.0,110.5" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="199.0" r="4" fill="#20c997"/><circle cx="444.9" cy="122.8" r="4" fill="#20c997"/><circle cx="700.0" cy="110.5" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 8.87s | 112,752.3 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 96.99s | 103,105.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 408.15s | 122,504.9 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.13s | 61,980.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 154.36s | 64,782.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 726.90s | 68,785.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 20.34s | 49,157.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 248.66s | 40,215.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 666.83s | 74,982.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.82s | 127,877.2 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 98.52s | 101,503.3 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 472.49s | 105,822.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 21.99s | 45,471.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 201.59s | 49,605.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 610.61s | 81,885.5 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 15.69s | 63,751.1 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 100.50s | 99,506.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 474.93s | 105,279.1 | PASS |

:::

## MariaDB

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-26T23:56:09Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">51k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">102k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">152k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">203k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,116.5 444.9,147.1 700.0,157.8" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="116.5" r="4" fill="#0d6efd"/><circle cx="444.9" cy="147.1" r="4" fill="#0d6efd"/><circle cx="700.0" cy="157.8" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,225.2 444.9,207.6 700.0,176.1" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="225.2" r="4" fill="#198754"/><circle cx="444.9" cy="207.6" r="4" fill="#198754"/><circle cx="700.0" cy="176.1" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,220.6 444.9,253.1 700.0,233.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="220.6" r="4" fill="#dc3545"/><circle cx="444.9" cy="253.1" r="4" fill="#dc3545"/><circle cx="700.0" cy="233.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,175.8 444.9,139.7 700.0,134.7" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="175.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="139.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="134.7" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,259.6 444.9,211.9 700.0,220.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="259.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="211.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="220.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,202.6 444.9,92.7 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="202.6" r="4" fill="#20c997"/><circle cx="444.9" cy="92.7" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 6.76s | 147,972.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.58s | 127,263.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 416.57s | 120,029.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.45s | 74,338.4 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 115.88s | 86,299.1 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 464.72s | 107,591.9 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 12.90s | 77,507.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 180.24s | 55,481.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 727.52s | 68,727.0 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 9.28s | 107,793.5 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 75.59s | 132,297.9 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 368.61s | 135,646.2 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.59s | 51,046.5 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 119.98s | 83,344.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 642.25s | 77,850.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 11.15s | 89,653.9 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 60.93s | 164,122.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 270.68s | 184,717.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="MariaDB source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">MariaDB source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">57k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">113k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">170k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">226k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,130.0 444.9,150.5 700.0,151.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="150.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="151.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,240.5 444.9,166.5 700.0,230.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="240.5" r="4" fill="#198754"/><circle cx="444.9" cy="166.5" r="4" fill="#198754"/><circle cx="700.0" cy="230.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,263.0 444.9,266.6 700.0,255.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="263.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="266.6" r="4" fill="#dc3545"/><circle cx="700.0" cy="255.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,189.0 444.9,178.7 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="189.0" r="4" fill="#6f42c1"/><circle cx="444.9" cy="178.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,269.6 444.9,209.1 700.0,259.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="269.6" r="4" fill="#fd7e14"/><circle cx="444.9" cy="209.1" r="4" fill="#fd7e14"/><circle cx="700.0" cy="259.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,227.4 444.9,174.5 700.0,164.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="227.4" r="4" fill="#20c997"/><circle cx="444.9" cy="174.5" r="4" fill="#20c997"/><circle cx="700.0" cy="164.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 6.47s | 154,464.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 71.91s | 139,055.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 361.08s | 138,473.1 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 14.04s | 71,209.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 78.74s | 126,993.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 632.92s | 78,998.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 18.43s | 54,253.5 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 194.00s | 51,546.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 833.31s | 60,001.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 9.09s | 110,011.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 84.90s | 117,788.4 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 243.26s | 205,538.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.29s | 49,278.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 105.37s | 94,905.5 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 879.18s | 56,871.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 12.33s | 81,083.3 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 82.70s | 120,923.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 389.54s | 128,355.9 | PASS |

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-26T23:46:34Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">49k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">98k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">147k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">196k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,194.8 444.9,141.5 700.0,153.1" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="194.8" r="4" fill="#0d6efd"/><circle cx="444.9" cy="141.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="153.1" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,231.5 444.9,181.0 700.0,133.2" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="231.5" r="4" fill="#198754"/><circle cx="444.9" cy="181.0" r="4" fill="#198754"/><circle cx="700.0" cy="133.2" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,256.7 444.9,248.7 700.0,243.5" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="256.7" r="4" fill="#dc3545"/><circle cx="444.9" cy="248.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="243.5" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,225.9 444.9,147.9 700.0,62.3" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="225.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="147.9" r="4" fill="#6f42c1"/><circle cx="700.0" cy="62.3" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,253.3 444.9,237.9 700.0,162.0" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="253.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="237.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="162.0" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,215.3 444.9,143.5 700.0,124.0" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="215.3" r="4" fill="#20c997"/><circle cx="444.9" cy="143.5" r="4" fill="#20c997"/><circle cx="700.0" cy="124.0" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.89s | 91,793.6 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 78.94s | 126,673.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 419.92s | 119,069.2 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 14.76s | 67,746.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 99.21s | 100,793.2 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 378.37s | 132,144.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.50s | 51,279.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 177.03s | 56,488.2 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 834.32s | 59,929.3 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 14.00s | 71,449.0 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 81.64s | 122,492.0 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 280.02s | 178,558.0 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 18.70s | 53,487.4 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 157.34s | 63,555.4 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 441.47s | 113,257.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.77s | 78,339.2 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 79.78s | 125,346.3 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 361.93s | 138,149.4 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">100k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">150k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">200k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,175.2 444.9,120.7 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="175.2" r="4" fill="#0d6efd"/><circle cx="444.9" cy="120.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,222.3 444.9,193.5 700.0,213.0" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="222.3" r="4" fill="#198754"/><circle cx="444.9" cy="193.5" r="4" fill="#198754"/><circle cx="700.0" cy="213.0" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.3 444.9,250.7 700.0,260.6" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="250.7" r="4" fill="#dc3545"/><circle cx="700.0" cy="260.6" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,134.7 444.9,152.4 700.0,138.9" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="134.7" r="4" fill="#6f42c1"/><circle cx="444.9" cy="152.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="138.9" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,262.3 444.9,247.4 700.0,186.5" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="262.3" r="4" fill="#fd7e14"/><circle cx="444.9" cy="247.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="186.5" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,226.7 444.9,144.7 700.0,131.6" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="226.7" r="4" fill="#20c997"/><circle cx="444.9" cy="144.7" r="4" fill="#20c997"/><circle cx="700.0" cy="131.6" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.38s | 106,666.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 69.90s | 143,067.7 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 274.59s | 182,092.3 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 13.29s | 75,216.2 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 105.83s | 94,489.4 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 613.71s | 81,471.6 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 15.48s | 64,582.8 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 177.57s | 56,315.8 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1006.22s | 49,690.7 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 7.48s | 133,761.4 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 82.03s | 121,902.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 381.96s | 130,904.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 20.61s | 48,527.2 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 171.02s | 58,474.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 504.20s | 99,166.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.82s | 72,338.0 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 78.69s | 127,082.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 368.25s | 135,775.9 | PASS |

:::

## Oracle

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-10-26T23:58:25Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">77k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">116k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">155k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,176.0 444.9,111.5 700.0,116.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="176.0" r="4" fill="#0d6efd"/><circle cx="444.9" cy="111.5" r="4" fill="#0d6efd"/><circle cx="700.0" cy="116.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,193.1 444.9,191.6 700.0,188.9" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="193.1" r="4" fill="#198754"/><circle cx="444.9" cy="191.6" r="4" fill="#198754"/><circle cx="700.0" cy="188.9" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,250.0 444.9,190.9 700.0,239.3" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="250.0" r="4" fill="#dc3545"/><circle cx="444.9" cy="190.9" r="4" fill="#dc3545"/><circle cx="700.0" cy="239.3" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,162.9 444.9,113.7 700.0,104.0" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="162.9" r="4" fill="#6f42c1"/><circle cx="444.9" cy="113.7" r="4" fill="#6f42c1"/><circle cx="700.0" cy="104.0" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,244.0 444.9,171.9 700.0,153.9" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="244.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="171.9" r="4" fill="#fd7e14"/><circle cx="700.0" cy="153.9" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,178.1 444.9,62.3 700.0,71.7" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="178.1" r="4" fill="#20c997"/><circle cx="444.9" cy="62.3" r="4" fill="#20c997"/><circle cx="700.0" cy="71.7" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 12.18s | 82,122.0 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 86.60s | 115,469.4 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 442.67s | 112,950.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 13.64s | 73,286.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 134.96s | 74,096.0 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 662.49s | 75,473.3 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 22.76s | 43,932.9 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 134.38s | 74,418.6 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 1011.49s | 49,432.2 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 11.25s | 88,896.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 87.47s | 114,330.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 419.03s | 119,324.1 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 21.28s | 46,999.1 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 118.68s | 84,260.9 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 534.37s | 93,569.0 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 12.34s | 81,043.8 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 70.98s | 140,880.8 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 367.66s | 135,994.8 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="Oracle source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">Oracle source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">50k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">101k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">151k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">201k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,130.3 444.9,146.9 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="130.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="146.9" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,244.9 444.9,222.3 700.0,225.8" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#198754"/><circle cx="444.9" cy="222.3" r="4" fill="#198754"/><circle cx="700.0" cy="225.8" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,280.8 444.9,236.8 700.0,266.2" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="280.8" r="4" fill="#dc3545"/><circle cx="444.9" cy="236.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="266.2" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,206.8 444.9,167.2 700.0,154.4" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="206.8" r="4" fill="#6f42c1"/><circle cx="444.9" cy="167.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="154.4" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,256.0 444.9,198.4 700.0,228.8" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="256.0" r="4" fill="#fd7e14"/><circle cx="444.9" cy="198.4" r="4" fill="#fd7e14"/><circle cx="700.0" cy="228.8" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,222.5 444.9,155.7 700.0,148.2" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="222.5" r="4" fill="#20c997"/><circle cx="444.9" cy="155.7" r="4" fill="#20c997"/><circle cx="700.0" cy="148.2" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 7.29s | 137,230.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 79.31s | 126,087.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 273.50s | 182,815.4 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 16.56s | 60,375.5 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 132.38s | 75,541.8 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 683.19s | 73,186.4 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 27.53s | 36,322.7 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 151.86s | 65,849.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 1084.70s | 46,095.6 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 11.64s | 85,932.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 88.90s | 112,482.1 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 412.96s | 121,075.6 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 18.89s | 52,949.3 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 109.24s | 91,543.2 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 702.23s | 71,201.4 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 13.27s | 75,380.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 83.18s | 120,215.4 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 399.32s | 125,211.9 | PASS |

:::

:::

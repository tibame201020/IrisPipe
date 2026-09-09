## Multi-Table Data-Volume Benchmark

The charts show only the current `identity-relations-v2` users / roles / user_roles workload. Legacy single-table measurements remain in retained JSON history but are not mixed with the new schema. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded.

With only three measured points (1M / 10M / 50M), the chart uses straight segments between measurements—no smoothing, regression, or interpolation.

_The retained history still contains 224 legacy single-table cases for traceability; they do not count toward current coverage._

::: {.panel-tabset}
## H2

**Current-schema coverage:** 0/36 cases

::: {.panel-tabset}
### JOB

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

### CHUNK

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

:::

## PostgreSQL

**Current-schema coverage:** 0/36 cases

::: {.panel-tabset}
### JOB

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

### CHUNK

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

:::

## MySQL

**Current-schema coverage:** 0/36 cases

::: {.panel-tabset}
### JOB

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

### CHUNK

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

:::

## MariaDB

**Current-schema coverage:** 0/36 cases

::: {.panel-tabset}
### JOB

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

### CHUNK

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

:::

## SQL Server

**Current-schema coverage:** 36/36 cases
  **Latest measurement:** `2026-09-09T07:25:13Z`

::: {.panel-tabset}
### JOB

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / JOB throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / JOB</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">40k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">79k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">119k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">159k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,149.9 444.9,97.7 700.0,95.6" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="149.9" r="4" fill="#0d6efd"/><circle cx="444.9" cy="97.7" r="4" fill="#0d6efd"/><circle cx="700.0" cy="95.6" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,209.2 444.9,178.1 700.0,179.7" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="209.2" r="4" fill="#198754"/><circle cx="444.9" cy="178.1" r="4" fill="#198754"/><circle cx="700.0" cy="179.7" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,238.3 444.9,234.0 700.0,226.4" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="238.3" r="4" fill="#dc3545"/><circle cx="444.9" cy="234.0" r="4" fill="#dc3545"/><circle cx="700.0" cy="226.4" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,147.2 444.9,93.4 700.0,68.6" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="147.2" r="4" fill="#6f42c1"/><circle cx="444.9" cy="93.4" r="4" fill="#6f42c1"/><circle cx="700.0" cy="68.6" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.7 444.9,227.7 700.0,223.1" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.7" r="4" fill="#fd7e14"/><circle cx="444.9" cy="227.7" r="4" fill="#fd7e14"/><circle cx="700.0" cy="223.1" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,189.8 444.9,94.1 700.0,62.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="189.8" r="4" fill="#20c997"/><circle cx="444.9" cy="94.1" r="4" fill="#20c997"/><circle cx="700.0" cy="62.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 1 | 10.20s | 98,000.8 | PASS |
| H2 | 10M | 5,000 | 5,000 | 1 | 79.56s | 125,696.0 | PASS |
| H2 | 50M | 5,000 | 5,000 | 1 | 394.30s | 126,807.0 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 1 | 15.01s | 66,608.9 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 1 | 120.37s | 83,076.5 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 1 | 607.88s | 82,253.2 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 1 | 19.52s | 51,219.0 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 1 | 186.92s | 53,498.0 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 1 | 869.77s | 57,486.5 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 1 | 10.05s | 99,462.9 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 1 | 78.17s | 127,931.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 1 | 354.39s | 141,088.7 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 1 | 19.22s | 52,034.6 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 1 | 175.99s | 56,822.1 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 1 | 844.01s | 59,240.7 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 1 | 13.01s | 76,887.6 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 1 | 78.38s | 127,583.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 1 | 346.18s | 144,431.9 | PASS |

### CHUNK

<div class="benchmark-chart-wrap"><svg class="benchmark-throughput-chart" viewBox="0 0 900 430" role="img" aria-label="SQL Server source / CHUNK throughput chart" style="width:100%;height:auto;max-width:900px"><rect x="0" y="0" width="900" height="430" fill="white"/><text x="80" y="20" font-size="16" font-weight="600">SQL Server source / CHUNK</text><text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">migrated rows / second</text><line x1="80" y1="35" x2="80" y2="335" stroke="#666"/><line x1="80" y1="335" x2="700" y2="335" stroke="#666"/><line x1="80" y1="335.0" x2="700" y2="335.0" stroke="#e5e7eb"/><text x="72" y="339.0" text-anchor="end" font-size="11">0k</text><line x1="80" y1="260.0" x2="700" y2="260.0" stroke="#e5e7eb"/><text x="72" y="264.0" text-anchor="end" font-size="11">39k</text><line x1="80" y1="185.0" x2="700" y2="185.0" stroke="#e5e7eb"/><text x="72" y="189.0" text-anchor="end" font-size="11">78k</text><line x1="80" y1="110.0" x2="700" y2="110.0" stroke="#e5e7eb"/><text x="72" y="114.0" text-anchor="end" font-size="11">117k</text><line x1="80" y1="35.0" x2="700" y2="35.0" stroke="#e5e7eb"/><text x="72" y="39.0" text-anchor="end" font-size="11">156k</text><line x1="80.0" y1="35" x2="80.0" y2="335" stroke="#f2f2f2"/><text x="80.0" y="355" text-anchor="middle" font-size="11">1M</text><line x1="444.9" y1="35" x2="444.9" y2="335" stroke="#f2f2f2"/><text x="444.9" y="355" text-anchor="middle" font-size="11">10M</text><line x1="700.0" y1="35" x2="700.0" y2="335" stroke="#f2f2f2"/><text x="700.0" y="355" text-anchor="middle" font-size="11">50M</text><text x="390.0" y="379" text-anchor="middle" font-size="12">Total migrated rows (log scale)</text><polyline points="80.0,126.3 444.9,79.8 700.0,62.3" fill="none" stroke="#0d6efd" stroke-width="2.5"/><circle cx="80.0" cy="126.3" r="4" fill="#0d6efd"/><circle cx="444.9" cy="79.8" r="4" fill="#0d6efd"/><circle cx="700.0" cy="62.3" r="4" fill="#0d6efd"/><line x1="725" y1="55" x2="749" y2="55" stroke="#0d6efd" stroke-width="3"/><circle cx="737" cy="55" r="3.5" fill="#0d6efd"/><text x="757" y="59" font-size="12">H2</text><polyline points="80.0,207.6 444.9,178.0 700.0,161.5" fill="none" stroke="#198754" stroke-width="2.5"/><circle cx="80.0" cy="207.6" r="4" fill="#198754"/><circle cx="444.9" cy="178.0" r="4" fill="#198754"/><circle cx="700.0" cy="161.5" r="4" fill="#198754"/><line x1="725" y1="83" x2="749" y2="83" stroke="#198754" stroke-width="3"/><circle cx="737" cy="83" r="3.5" fill="#198754"/><text x="757" y="87" font-size="12">PostgreSQL</text><polyline points="80.0,244.9 444.9,224.8 700.0,216.1" fill="none" stroke="#dc3545" stroke-width="2.5"/><circle cx="80.0" cy="244.9" r="4" fill="#dc3545"/><circle cx="444.9" cy="224.8" r="4" fill="#dc3545"/><circle cx="700.0" cy="216.1" r="4" fill="#dc3545"/><line x1="725" y1="111" x2="749" y2="111" stroke="#dc3545" stroke-width="3"/><circle cx="737" cy="111" r="3.5" fill="#dc3545"/><text x="757" y="115" font-size="12">MySQL</text><polyline points="80.0,146.3 444.9,148.2 700.0,95.8" fill="none" stroke="#6f42c1" stroke-width="2.5"/><circle cx="80.0" cy="146.3" r="4" fill="#6f42c1"/><circle cx="444.9" cy="148.2" r="4" fill="#6f42c1"/><circle cx="700.0" cy="95.8" r="4" fill="#6f42c1"/><line x1="725" y1="139" x2="749" y2="139" stroke="#6f42c1" stroke-width="3"/><circle cx="737" cy="139" r="3.5" fill="#6f42c1"/><text x="757" y="143" font-size="12">MariaDB</text><polyline points="80.0,236.5 444.9,218.3 700.0,221.4" fill="none" stroke="#fd7e14" stroke-width="2.5"/><circle cx="80.0" cy="236.5" r="4" fill="#fd7e14"/><circle cx="444.9" cy="218.3" r="4" fill="#fd7e14"/><circle cx="700.0" cy="221.4" r="4" fill="#fd7e14"/><line x1="725" y1="167" x2="749" y2="167" stroke="#fd7e14" stroke-width="3"/><circle cx="737" cy="167" r="3.5" fill="#fd7e14"/><text x="757" y="171" font-size="12">SQL Server</text><polyline points="80.0,200.1 444.9,87.6 700.0,88.3" fill="none" stroke="#20c997" stroke-width="2.5"/><circle cx="80.0" cy="200.1" r="4" fill="#20c997"/><circle cx="444.9" cy="87.6" r="4" fill="#20c997"/><circle cx="700.0" cy="88.3" r="4" fill="#20c997"/><line x1="725" y1="195" x2="749" y2="195" stroke="#20c997" stroke-width="3"/><circle cx="737" cy="195" r="3.5" fill="#20c997"/><text x="757" y="199" font-size="12">Oracle</text></svg></div>

| Destination | Rows | Fetch | Batch | Txn groups | Duration | Rows/s | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| H2 | 1M | 5,000 | 5,000 | 201 | 9.23s | 108,283.7 | PASS |
| H2 | 10M | 5,000 | 5,000 | 2,001 | 75.52s | 132,420.5 | PASS |
| H2 | 50M | 5,000 | 5,000 | 10,001 | 353.28s | 141,529.6 | PASS |
| PostgreSQL | 1M | 5,000 | 5,000 | 201 | 15.12s | 66,120.1 | PASS |
| PostgreSQL | 10M | 5,000 | 5,000 | 2,001 | 122.74s | 81,471.7 | PASS |
| PostgreSQL | 50M | 5,000 | 5,000 | 10,001 | 555.46s | 90,015.5 | PASS |
| MySQL | 1M | 5,000 | 5,000 | 201 | 21.39s | 46,746.4 | PASS |
| MySQL | 10M | 5,000 | 5,000 | 2,001 | 174.82s | 57,201.7 | PASS |
| MySQL | 50M | 5,000 | 5,000 | 10,001 | 810.32s | 61,704.4 | PASS |
| MariaDB | 1M | 5,000 | 5,000 | 201 | 10.21s | 97,904.8 | PASS |
| MariaDB | 10M | 5,000 | 5,000 | 2,001 | 103.17s | 96,931.2 | PASS |
| MariaDB | 50M | 5,000 | 5,000 | 10,001 | 402.83s | 124,122.8 | PASS |
| SQL Server | 1M | 5,000 | 5,000 | 201 | 19.57s | 51,111.7 | PASS |
| SQL Server | 10M | 5,000 | 5,000 | 2,001 | 165.10s | 60,568.3 | PASS |
| SQL Server | 50M | 5,000 | 5,000 | 10,001 | 848.00s | 58,962.2 | PASS |
| Oracle | 1M | 5,000 | 5,000 | 201 | 14.29s | 69,993.7 | PASS |
| Oracle | 10M | 5,000 | 5,000 | 2,001 | 77.89s | 128,379.6 | PASS |
| Oracle | 50M | 5,000 | 5,000 | 10,001 | 390.52s | 128,035.4 | PASS |

:::

## Oracle

**Current-schema coverage:** 0/36 cases

::: {.panel-tabset}
### JOB

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

### CHUNK

_No throughput measurements for the current schema yet._

_No retained results for the current schema yet._

:::

:::

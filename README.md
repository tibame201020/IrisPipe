# IrisPipe

[![Backend K6 Checks](https://github.com/tibame201020/IrisPipe/actions/workflows/backend-k6-check.yml/badge.svg)](https://github.com/tibame201020/IrisPipe/actions/workflows/backend-k6-check.yml)
[![k6 Benchmark](https://github.com/tibame201020/IrisPipe/actions/workflows/k6-benchmark.yml/badge.svg)](https://github.com/tibame201020/IrisPipe/actions/workflows/k6-benchmark.yml)
[![Documentation](https://github.com/tibame201020/IrisPipe/actions/workflows/quarto-deploy.yml/badge.svg)](https://github.com/tibame201020/IrisPipe/actions/workflows/quarto-deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**IrisPipe is a local-first pipeline engine for defining, executing, recovering, and observing multi-stage JDBC data migrations.**

It is built with Spring Boot, Spring Batch, React, and k6, with explicit execution semantics for stage barriers, transaction scope, resume/rerun behavior, and historical configuration snapshots.

- Documentation: https://tibame201020.github.io/IrisPipe/
- Traditional Chinese: https://tibame201020.github.io/IrisPipe/zh-TW/
- Performance & reliability: https://tibame201020.github.io/IrisPipe/performance.html

## Why IrisPipe?

Data migration is easy to describe as "read rows, then write rows." The difficult part is defining what should happen when a multi-stage run fails, is stopped, resumed, rerun, or modified while historical executions still need to remain reproducible.

IrisPipe models those behaviors explicitly:

- **Stage barriers** — stages run in sequence, while jobs inside a stage can run in parallel.
- **Three execution verbs** — `execute`, `resume`, and `rerun` have distinct semantics.
- **Frozen config snapshots** — resume/rerun can use the configuration captured when the original run was created.
- **JOB / CHUNK atomicity** — choose whole-job transaction scope or chunk-level commit boundaries.
- **Real-time observability** — runtime state is pushed to the UI with SSE and exposed through operational APIs.
- **Cross-RDBMS migration** — JDBC source/destination support is exercised across H2, PostgreSQL, MySQL, MariaDB, SQL Server, and Oracle.

## Pipeline Model

```text
Pipeline
├─ Stage 1                 # stages execute sequentially
│  ├─ Job A                # jobs in the same stage may run in parallel
│  │  ├─ Step 1
│  │  └─ Step 2
│  └─ Job B
├─ Stage 2
│  └─ Job C
└─ Stage 3
   └─ Job D
```

Each step performs an operation such as `INSERT`, `UPDATE`, `UPSERT`, `DELETE`, or `EXECUTE` against a destination.

### Execution semantics

| Verb | Creates | Configuration source | Starts from |
|---|---|---|---|
| `execute` | New logical run | Current stored config | Stage 1 |
| `resume` | New attempt in the same run | Frozen snapshot | First incomplete stage |
| `rerun` | New logical run | Frozen snapshot | Stage 1 |

### Transaction modes

| Mode | Transaction boundary | Intended behavior |
|---|---|---|
| `JOB` | Whole job | A failed job rolls back its in-flight destination work as one unit. |
| `CHUNK` | Writer chunk | Completed chunks remain committed; only the failing chunk rolls back. |

## Supported Databases

The benchmark and JDBC integration matrix currently covers:

| Database | Source | Destination |
|---|:---:|:---:|
| H2 | ✓ | ✓ |
| PostgreSQL | ✓ | ✓ |
| MySQL | ✓ | ✓ |
| MariaDB | ✓ | ✓ |
| SQL Server | ✓ | ✓ |
| Oracle | ✓ | ✓ |

The long-running full benchmark exercises **6 sources × 6 destinations × JOB/CHUNK × 1M/10M/50M = 216 cases**. Large matrix runs are kept outside the normal pull-request gate; bounded regression and compatibility tests remain in regular CI.

See the published [performance and reliability report](https://tibame201020.github.io/IrisPipe/performance.html) for methodology and retained measurements.

## Quick Start

### Docker Compose

Requirements:

- Docker with Compose support

Start the backend and frontend:

```bash
docker compose up --build
```

Then open:

- UI: http://localhost:4205
- Backend: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui/index.html
- Health: http://localhost:8080/actuator/health

Stop the stack with:

```bash
docker compose down
```

### Local Development

Backend requirements:

- Java 21
- Maven 3.9+

```bash
cd backend
mvn spring-boot:run
```

Frontend requirements:

- Node.js 22+
- npm

```bash
cd frontend
npm ci
npm run dev
```

The Vite development server runs on `http://localhost:4206`.

## Verification

The repository uses GitHub Actions and k6 for regression, compatibility, atomicity, and volume checks. Useful local commands include:

```bash
# Backend unit tests
cd backend
mvn test

# Frontend tests
cd frontend
npm test
```

The benchmark harnesses and k6 suites are under [`backend/k6`](backend/k6).

## Repository Layout

```text
backend/      Spring Boot / Spring Batch runtime, APIs, persistence, k6 suites
frontend/     React + TypeScript pipeline console
quarto/       Published architecture, design, and benchmark documentation
docs/         Additional project documentation
.github/      CI, benchmark, and documentation workflows
```

## License

IrisPipe is released under the [MIT License](LICENSE).

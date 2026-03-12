# IrisPipe Backend Architecture

IrisPipe is a Spring Boot and Spring Batch based data synchronization engine.
Jobs are defined in JSON or YAML files (for upload), persisted in a **normalized database schema**, and executed as Spring Batch jobs.

## Runtime highlights

- Spring Boot 3.x
- Spring Batch 5.x
- Java 21
- Spring JDBC plus `NamedParameterJdbcTemplate`
- Spring Data JPA for **Job Configuration**, Watermark storage, and batch metadata support
- Flyway for application schema setup
- H2 as the local default database
- K6 for end-to-end regression coverage

## Current implementation notes

- Sync config management lives under `/api/v1/sync-config`. It now manages **Pipelines** in the database.
- Job execution is triggered via `/api/v1/sync-job` using a `pipelineId`.
- Watermarks are stored in `iris_watermark_record`.
- The runtime uses a job-scoped transaction listener by default.

## Package map

| Package | Responsibility |
| --- | --- |
| `api` | REST endpoints for pipeline management and job execution |
| `batch` | Spring Batch implementation: listeners, tasklets, writers |
| `core` | Business logic: execution orchestration and strategy management |
| `infrastructure` | Implementation: **DB Persistence (JPA Entities/Repos)**, File Providers, Error Handling |
| `model` | Core Domain models and API DTOs |

## Document map

| Document | Focus |
| --- | --- |
| [core-flow.md](./core-flow.md) | End-to-end execution flow (DB-driven) |
| [config-model.md](./config-model.md) | Configuration model and DB schema |
| [error-handling.md](./error-handling.md) | Exception mapping and API error shapes |
| [full-implementation-guide.md](./full-implementation-guide.md) | Comprehensive code-first walkthrough |

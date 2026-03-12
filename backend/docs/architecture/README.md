# IrisPipe Backend Architecture

IrisPipe is a Spring Boot and Spring Batch based data synchronization engine.
Jobs are defined in JSON or YAML files, loaded from the configured job directory, and executed as Spring Batch jobs that read from a source database and write to a destination database.

## Runtime highlights

- Spring Boot 3.x
- Spring Batch 5.x
- Java 21
- Spring JDBC plus `NamedParameterJdbcTemplate`
- Spring Data JPA for watermark storage and batch metadata cleanup support
- Flyway for application schema setup
- H2 as the local default database
- K6 for end-to-end regression coverage

## Current implementation notes

- Sync config management lives under `/api/v1/sync-config`.
- Job execution and metadata queries live under `/api/v1/sync-job`.
- Watermarks are stored in the application database through `ExecutionRecordService`.
- `atomicLevel` is part of config validation, but the current runtime still uses the job-scoped transaction listener for every job.
- The documentation in this folder and `../feature/` is the maintained source of truth for architecture notes.

## Package map

| Package | Responsibility |
| --- | --- |
| `api` | REST endpoints for config management, job execution, metadata lookup, and test support |
| `batch` | Spring Batch listeners, builders, tasklets, writers, metadata entities, and repositories |
| `config` | Application beans such as object mappers |
| `context` | Source and destination database context objects used during execution |
| `data` | Job config model, enums, summaries, and watermark records |
| `dto` | API request and response payloads |
| `error` | Exception types and global exception handling |
| `factory` | Runtime assembly of job contexts and Spring Batch jobs |
| `provider` | JSON and YAML file loading |
| `repo` | Application-level repositories such as watermark storage |
| `service` | Config loading, execution orchestration, watermark persistence, and metadata deletion |
| `utility` | SQL helper utilities |

## Document map

| Document | Focus |
| --- | --- |
| [core-flow.md](./core-flow.md) | End-to-end execution flow and step behavior |
| [config-model.md](./config-model.md) | JSON and YAML configuration model |
| [error-handling.md](./error-handling.md) | Exception mapping and API error shapes |
| [full-implementation-guide.md](./full-implementation-guide.md) | Code-first, end-to-end walkthrough of the current backend behavior |
| [../feature/01-core-transaction-and-restart.md](../feature/01-core-transaction-and-restart.md) | Current transaction semantics and the restart gap |
| [../feature/03-scheduling-and-orchestration.md](../feature/03-scheduling-and-orchestration.md) | Current orchestration surface and future scheduler work |
| [../feature/05-observability-and-alerting.md](../feature/05-observability-and-alerting.md) | Current observability surface and future monitoring work |

# Changelog

All notable changes to this project are documented in this file.

## [Phase 6: Restart Foundations] - 2026-03-13

### Added
- **Stable Batch Identity Helper**: Added deterministic execution-name materialization and step-name bounding so internal Spring Batch identifiers remain stable and length-safe across reruns.
- **Pipeline Run Snapshot Persistence**: Added `iris_pipeline_run_snapshot` plus snapshot entity/repository/service to persist immutable materialized pipeline definitions per `PipelineRun`.

### Changed
- **Restart-Safe Job Parameters**: Switched runtime job launch parameters to use `pipeline.run.job.id` as the identifying key and removed the per-launch `run.id` increment pattern, preparing `CHUNK` jobs for true restart semantics.
- **Snapshot-Driven Execution**: Pipeline execution now materializes job definitions once, saves them as a run-bound snapshot, and executes from that snapshot instead of directly from the latest persisted pipeline rows.
- **Stable Internal Naming**: Step builders now derive names from materialized execution identities instead of type-only job-level names, reducing collision risk in Spring Batch metadata and watermark lookups.

### Verified
- **Regression Safety**: Re-ran compile and the full K6 suite after the identity/parameter changes and again after snapshot integration; public API behavior remained unchanged.

---

## [Phase 5: Pipeline Run API and Runtime Lifecycle] - 2026-03-13

### Added
- **Pipeline-Level Execution API**: Replaced the public runtime boundary from `sync-job` to `sync-pipeline`, covering trigger, summary query, detail query, and delete by `PipelineRun`.
- **Pipeline Run Persistence**: Added `iris_pipeline_run` and `iris_pipeline_run_job` with runtime status tracking, sequence-first job nodes, and persisted `root_job_instance_id` / `last_job_execution_id`.
- **Pipeline Runtime DTOs**: Introduced pipeline-oriented summary/detail DTOs so callers can observe a whole pipeline run without depending on Spring Batch job metadata directly.
- **Async Trigger Coverage**: Added `k6/sync-pipeline-async.test.js` to verify asynchronous pipeline trigger, polling, detail query, and cleanup behavior.

### Changed
- **Execution Orchestration**: Replaced `JobExecutionService` with `PipelineExecutionService`, keeping execution sequence-first while promoting the external execution boundary to pipeline level.
- **Lifecycle Ownership**: Moved `PipelineRun` and `PipelineRunJob` status updates behind `PipelineRunLifecycleService`, driven from `CustomJobListener` so sync and async triggers share one runtime lifecycle path.
- **K6 Regression Suite**: Migrated existing runtime K6 tests and helpers from job-oriented endpoints to pipeline-oriented endpoints, and explicitly covered both sync and async trigger paths.
- **Packaging Stability**: Declared the Spring Boot main class explicitly in Maven packaging so local packaging and executable jar startup remain stable.

### Removed
- **Legacy Job Runtime API**: Removed the public `sync-job` execution controller and its job-oriented DTOs/services in favor of pipeline-level runtime resources.

---

## [Phase 4 (Partial): Segmented Commit Support] - 2026-03-12

### Added
- **`atomicLevel` Runtime Support**: Implemented runtime branching between `JOB` and `CHUNK` transaction models in `SyncJobFactory`.
- **Custom Transaction Control**: Updated `CustomJobListener` to selectively open outer job-level transactions only when `atomicLevel: JOB` is specified.
- **Chunked Data Processing**: Enabled Spring Batch native chunk commit behavior for `CHUNK` mode, allowing partial data persistence during massive tasks.
- **Regression Coverage**: Added `k6/sync-job-chunk-fail.test.js` to verify that failed `CHUNK` jobs leave previously committed segments in the destination database.

---

## [Phase 3: Job Configuration Persistence] - 2026-03-12

### Added
- **Database Persistence Layer**: Successfully migrated from file-based (YAML/JSON) job definitions to a fully managed database persistence layer.
- **Normalized DB Schema**: Designed and implemented a robust 3-layer schema (`iris_pipeline`, `iris_pipeline_job`, `iris_pipeline_execution`, `iris_pipeline_execution_parameter`) using Flyway.
- **JPA Entities & Repositories**: Implemented a complete set of Spring Data JPA entities and repositories to manage the configuration hierarchy.
- **Content Hashing**: Introduced SHA-256 hashing for pipeline content to ensure configuration integrity and provide hooks for future restartability checks.
- **DB-Driven Execution**: Updated `JobExecutionService` and `JobConfigService` to assemble `SyncJobDefinition` objects directly from database records.

### Changed
- **REST API Evolution**: Evolved `/api/v1/sync-config` to persist uploaded files into the database and `/api/v1/sync-job` to execute jobs based on `pipelineId`.
- **Documentation Refinement**: Updated all `docs/architecture` documents to perfectly align with the database-driven implementation.

### Fixed
- **Configuration Lifecycle Management**: Optimized `JobConfigService` to handle transactional updates (Delete-and-Insert strategy) for pipeline configurations.

---

## [Phase 2: Architecture & Naming Alignment] - 2026-03-12

### Added
- **Modular Architecture**: Restructured backend into `api`, `batch`, `core`, `infrastructure`, and `model` packages.
- **Spring Boot DevTools**: Integrated for hot-reload support to accelerate development cycles.
- **Global Exception Handling**: Implemented `GlobalExceptionHandler` with standardized RESTful error responses.
- **Path Normalization**: Added cross-platform path separator normalization (backslash to forward slash).
- **Documentation Alignment**: Refreshed `docs/architecture/` to be 1:1 with the refactored code (including `SyncJobDefinition` and modularized flow).

### Changed
- **Package Re-structuring**: Migrated legacy `custom.tibame201020.IrisPipe` structure to a clean `irispipe` root.
- **Naming Alignment**: Consistently renamed classes to reflect domain language:
  - `SyncJob` -> `SyncJobDefinition`
  - `Execution` -> `ExecutionStep`
  - `Database` -> `DatabaseConfig`
- **Semantic Optimization**: Fixed typographical errors across the codebase (`rooPath` -> `rootPath`, `endTIme` -> `endTime`, etc.).
- **API Contract Restoration**: Restored `path`, `filepath`, and `configPath` field names in API DTOs to maintain perfect logical parity with Phase 1 K6 tests.
- **Qualifier Injection**: Used `@Qualifier` to resolve ambiguous `ObjectMapper` bean injection in file providers.

### Fixed
- **NPE in SyncJobDefinition**: Added null safety checks for the `executions` list during validation.
- **YAML Deserialization**: Explicitly typed `TypeReference` in `JobConfigService` to fix parsing issues.
- **API Contract Compatibility**: Used `@JsonProperty("useAsyncLaucher")` to support legacy K6 naming while using optimized internal naming.

---

## [Phase 1: Verification & K6 Protection] - 2026-03-11

### Added
- Reusable K6 helpers in `k6/utils/` for shared setup, config cleanup, SQL assertions, and job metadata polling.
- Coverage for the current sync-job metadata APIs in the K6 suite.
- New K6 test scenarios for **Composite Primary Key UPSERT** and **System Variable (Watermark)** persistence.

### Fixed
- **Critical Bug**: `BatchUpsertWriter` now correctly handles named-to-positional parameter conversion for the "exists check" query, preventing `JdbcSQLSyntaxErrorException` on composite PK UPSERTs.

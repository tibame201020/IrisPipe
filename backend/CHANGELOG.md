# Changelog

All notable changes to this project are documented in this file.

## [Phase 11 (Partial): Delete In-Flight Guard] - 2026-03-16

### Added
- **Delete Guard Regression Coverage**: Added `sync-pipeline-delete-guard-async.test.js` and a dedicated `pipeline-operator-safety` K6 suite to verify that in-flight runs are protected while terminal runs can still be cleaned up safely.

### Changed
- **Terminal-Only Delete Semantics**: `DELETE /api/v1/sync-pipeline/{pipelineRunId}` now rejects `STARTING`, `STARTED`, and `STOPPING` runs, and only allows cleanup for terminal pipeline runs.
- **Consistent Error Contract**: The new delete guard intentionally reuses the existing `IllegalArgumentException -> 400` API mapping so operator safety improves without expanding the public error model yet.

### Verified
- **Targeted Operator Safety Validation**: Re-ran `mvn -q -DskipTests compile` and the targeted K6 `pipeline-operator-safety` suite to confirm rejected in-flight deletes, successful terminal deletes, and intact stop/resume behavior after a rejected delete.

---

## [Phase 10: Pipeline Stop Control Loop] - 2026-03-13

### Added
- **Pipeline Stop API**: Added `POST /api/v1/sync-pipeline/{pipelineRunId}/stop` so callers can cooperatively stop an in-flight `PipelineRun` without deleting lineage.
- **Stop Regression Coverage**: Added K6 coverage for sync and async stop flows across `JOB`, `CHUNK`, and mixed pipelines, plus one composite async control-flow scenario that chains `execute -> stop -> resume -> rerun -> stop -> resume`.

### Changed
- **Stop-Aware Runtime Lifecycle**: `PipelineRunLifecycleService` now projects `STOPPING` and `STOPPED` onto the latest run and execution state, and finalizes downstream pending nodes as `NOT_RUN`.
- **Stop Propagation and Guarding**: `PipelineExecutionService` now propagates stop requests into Spring Batch through `JobOperator.stop(...)` and guards the sequence-first orchestration loop so the next job does not start after a stop request lands.
- **Resume After Stop Semantics**: Resume now treats stopped attempts as resumable terminal state and can continue from the first `NOT_RUN` node when a stop lands between jobs instead of inside a failed node.
- **Listener Race Handling**: `CustomJobListener.beforeJob(...)` now respects an already-requested stop and prevents a newly created batch job from re-opening the attempt as normal `STARTED` work.

### Verified
- **Control Surface Closure**: Verified `execute`, `resume`, `rerun`, and `stop` as one consistent pipeline control loop through `run-tests.ps1` regression coverage and a dedicated composite async K6 scenario.
- **Composite Scenario**: Verified mixed `JOB -> CHUNK -> JOB`, multi-job, and multi-step control flow with snapshot-preserving rerun semantics even after the persisted pipeline config is updated.

---

## [Phase 9: Pipeline Rerun Snapshot Replay] - 2026-03-13

### Added
- **Pipeline Rerun API**: Added pipeline-level rerun support so callers can fully replay a previous `PipelineRun` as a brand new logical run while keeping lineage through `rerun_from_pipeline_run_id`.
- **Rerun Regression Coverage**: Added K6 coverage for sync and async rerun flows, explicitly asserting that rerun replays the source snapshot even after the persisted pipeline config changes.

### Changed
- **Rerun Snapshot Semantics**: `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun` now clones the source run snapshot instead of re-materializing from the latest pipeline config, keeping rerun semantics distinct from fresh `execute`.
- **K6 Suite Layout**: Reorganized K6 scripts into `config/`, `pipeline/`, and `runtime/` folders, and updated the runner script to resolve paths from `backend/k6` consistently.

### Verified
- **Regression Safety**: Re-ran compile, package, targeted rerun K6 suites, and the full K6 suite after the rerun/snapshot adjustment; execute, resume, and rerun all remained compatible at the public API layer.

---

## [Phase 8: Pipeline Resume Strategies] - 2026-03-13

### Added
- **Pipeline Resume API**: Added pipeline-level resume support so a failed `PipelineRun` can create a new execution attempt without creating a new logical run.
- **Resume Status Projection**: Added `SKIPPED` and `NOT_RUN` runtime statuses so latest attempt detail can distinguish skipped upstream jobs from downstream jobs that never executed.
- **Resume Regression Coverage**: Added K6 coverage for `JOB` replay, `CHUNK` restart, async resume, and mixed-atomic pipeline resume scenarios.

### Changed
- **JOB Resume Strategy**: Failed `JOB` nodes now resume by replaying the whole job under a fresh Spring Batch job instance while keeping the same logical `PipelineRun`.
- **CHUNK Resume Strategy**: Failed `CHUNK` nodes now resume by restarting the original Spring Batch job instance with stable identifying parameters, allowing checkpoint-based continuation.
- **Mixed Pipeline Continuation**: Resume now selects replay vs restart per failed node based on `atomicLevel`, while preserving completed upstream nodes as skipped and continuing downstream nodes after recovery.

### Fixed
- **Snapshot Deserialization Safety**: Excluded runtime-only rendered parameter state from snapshot JSON so stored pipeline snapshots can be deserialized safely during resume attempts.
- **Restart Metadata Cleanup**: Updated Spring Batch metadata deletion to keep shared `JobInstance` rows alive until all related executions are removed, fixing cleanup for `CHUNK` restart lineage and mixed resume flows.

### Verified
- **Regression Safety**: Re-ran compile, package, targeted resume K6 suites, and the full K6 suite after adding `JOB`/`CHUNK` resume strategies; the existing public pipeline APIs remained compatible.

---

## [Phase 7: Pipeline Run Execution Lineage] - 2026-03-13

### Added
- **Execution Attempt Persistence**: Added `iris_pipeline_run_execution` and `iris_pipeline_run_execution_job` so each `PipelineRun` can keep execution-attempt history instead of collapsing instance and attempt into a single row.
- **Execution Lineage Model**: Added runtime entities, repositories, and execution-kind modeling to separate logical pipeline runs from their concrete attempts while preserving the pipeline-level API contract.
- **Compatible Backfill Migration**: Introduced a compatible migration that backfills existing `PipelineRun` / `PipelineRunJob` rows into initial execution attempts so current runtime data remains queryable after the model split.

### Changed
- **Runtime Lifecycle Projection**: `PipelineRunLifecycleService` now updates execution-attempt records first, then projects the latest attempt back onto `PipelineRun` and `PipelineRunJob` for fast summary/detail reads.
- **Pipeline Execution Assembly**: Trigger flow now creates logical run state, snapshot, logical job nodes, initial execution, and execution-job rows explicitly before launching the sequence-first pipeline.
- **Delete Semantics**: Pipeline-run deletion now removes full execution lineage and historical Spring Batch metadata across all attempts, not just the latest projection.
- **Design Plan Alignment**: Updated the restart design plan to adopt an instance/execution split, sequence-first execution lineage, and migration guidance for future resume/rerun work.

### Verified
- **Regression Safety**: Re-ran compile, package, and the full K6 suite after the execution-lineage refactor; the public pipeline API contract remained unchanged.

---

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

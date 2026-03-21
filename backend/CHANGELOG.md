# Changelog

All notable changes to this project are documented in this file.

## [Stage Execution Convergence Fix] - 2026-03-21

### Changed
- **Same-Stage Failure Convergence**: Serialized pipeline run execution lifecycle updates with a pessimistic execution lock so one completed job in the same stage can no longer overwrite a terminal `FAILED` execution back to `STARTED` while another job fails.
- **Resume Launch Settlement Guard**: Added a short Spring Batch metadata settlement wait before `resume` launches a new execution so async stop/resume flows no longer race the final Batch repository update of the stopped execution.

### Verified
- **Compile Validation**: Re-ran `mvn -q -DskipTests compile`.
- **Full K6 Regression**: Re-ran the full local `backend/k6/run-tests.ps1` suite against an isolated backend instance and confirmed `Sync Pipeline Stage Fail Resume` no longer flakes under full regression load.
- **Repeated Full Regression**: Re-ran the full local `backend/k6/run-tests.ps1` suite 10 consecutive times against the live local backend; all 10 runs passed.

## [Stage First Domain Projection] - 2026-03-21

### Added
- **Stage-First Domain Types**: Added `PipelineStageDefinition`, `PipelineRunStageProjection`, and `PipelineStageProjectionService` so backend config and runtime queries can project `pipeline -> stages -> jobs -> steps` directly instead of forcing callers to regroup flat job lists.
- **Multi-Stage Regression Fixtures**: Added explicit multi-stage / multi-job k6 fixtures and scenarios for stage parallel execution, stop/resume inside one stage, same-stage fail barrier recovery, and stage-aware rerun.

### Changed
- **Config Read Model**: Config detail responses now include explicit stage projections in addition to ordered jobs, making stage a first-class backend read model instead of a job-only annotation.
- **Run Detail Projection**: Pipeline run detail and attempt history now expose stage summaries with aggregated status, start/end windows, and grouped jobs.
- **Lifecycle Projection Hardening**: Execution lifecycle synchronization now preserves terminal failure state while recomputing latest run projection, so stage summaries stay consistent after same-stage partial completion plus failure.
- **K6 Stage Coverage**: Local full regression now validates explicit multi-stage behavior, including same-stage parallelism evidence, stage barriers, resume-on-stop, resume-on-fail, and stage-aware rerun.

### Verified
- **Compile Validation**: Re-ran `mvn -q -DskipTests compile`.
- **Isolated Full K6 Regression**: Re-ran `backend/k6/run-tests.ps1` against an isolated backend instance with isolated H2 URL override; all 35 tests passed.

## [Stage-Based Parallel Pipeline Runtime] - 2026-03-20

### Added
- **Stage Metadata in Config and Runtime**: Added stage metadata to pipeline config jobs, run-job projections, snapshots, and DTOs so one pipeline can group jobs into ordered stages.
- **Stage Support Migration**: Added `V4__add_pipeline_stage_support.sql` to extend persisted config and runtime tables with stage metadata.
- **DAG Planning Document**: Added `backend/plans/dag-pipeline.md` as the design and migration guide for stage-based parallel orchestration and future DAG evolution.

### Changed
- **Stage-Aware Materialization**: Config CRUD, import, read models, and snapshot persistence now preserve explicit stage metadata while still materializing legacy linear payloads into implicit stages for backward compatibility.
- **Barrier-Based Launch Orchestration**: `PipelineRunLaunchService` now executes jobs stage by stage, launches jobs in the same stage in parallel, waits on the stage barrier, and marks future stages as `NOT_RUN` after stop or failure.
- **Stage-Aware Resume Semantics**: Resume now identifies the first incomplete stage, skips completed upstream jobs, and only relaunches resumable jobs in the target stage while preserving `JOB` / `CHUNK` semantics through snapshot-backed config.
- **Stage-Named Public Contract**: Public config and runtime payloads now expose job stage metadata through the `stage` field while still accepting legacy `stageName` input as a compatibility alias during migration.
- **Explicit Stage-First Fixtures**: K6 JSON payloads and YAML fixtures now declare `stages[]` plus per-job `stage`, so test files themselves are the source of truth for stage-aware pipelines instead of relying on implicit linear materialization.
- **Async Stop Projection Fix**: Async stop flows now mark future-stage jobs as `NOT_RUN` early enough for detail queries to reflect the correct lifecycle state immediately after the pipeline enters `STOPPED`.
- **Isolated K6 Validation Support**: Local K6 helpers now support overriding backend base URL, port, and imported H2 JDBC URL so stage work can be validated against isolated backend instances without touching the user's running server.

### Verified
- **Compile Validation**: Re-ran `mvn -q -DskipTests compile` after the stage runtime and resume/query adjustments.
- **Targeted K6 Validation**: Re-validated the affected async stop suites after tightening `NOT_RUN` projection semantics.
- **Full K6 Regression**: Re-ran the full local K6 regression suite with explicit stage fixtures; all 31 tests passed.

---

## [K6 Lifecycle Tuning] - 2026-03-20

### Changed
- **Stop/Resume Fixture Tuning**: Rebalanced the slow pipeline lifecycle K6 suites to rely less on oversized H2 fixtures and more on controlled `fetchSize` / `batchSize` settings for the specific job that needs to stay in-flight.
- **Stable Local Defaults**: Reduced the default row counts for `stop-job`, `delete-guard`, `observe-timeline`, `stop-chunk`, `stop-mixed`, and `control-flow` scenarios while keeping stop/resume/rerun/timeline assertions intact.
- **Cleaner Local K6 Output**: Updated `backend/k6/run-tests.ps1` to initialize UTF-8 console/output encoding so native `k6 run` output no longer renders banner garbage in PowerShell.

### Verified
- **Full Local Regression**: Re-ran the full sequential local K6 suite against a live backend and kept all 31 tests green while reducing total wall-clock time from roughly 20 minutes to roughly 1 minute.
- **Workflow Parity**: Re-checked the local suite catalog against `.github/workflows/backend-k6-check.yml`; both still cover the same 10 K6 suites with no missing scenario groups.

---

## [Local K6 Runner Stabilization] - 2026-03-20

### Changed
- **Stable Local Regression Flow**: Restored `backend/k6/run-tests.ps1` to sequential-by-default execution so local full-suite validation stays deterministic and avoids PowerShell-managed child-process noise.
- **Timing Visibility**: Added per-test timing output and a slowest-tests summary so the next optimization round can target the actual long-running suites instead of relying on opaque suite-level parallelism.

### Preserved
- **CI Scenario Coverage**: GitHub Actions still executes the full suite catalog through matrix jobs, and namespace support remains available for isolated fixture execution when needed.

---

## [Schema Baseline Consolidation] - 2026-03-20

### Changed
- **Single Flyway Baseline**: Consolidated the previously layered V3-V9 schema setup into one stable baseline migration `V3__init_irispipe_schema.sql` for development-time database resets.
- **No Runtime Logic Change**: This baseline rewrite only reorganizes schema bootstrap SQL; it does not change the current backend runtime contract or control flow semantics.

### Verified
- **Baseline Validation**: The consolidated Flyway baseline was validated with `mvn clean spring-boot:run` and the full local K6 regression flow before being committed.

---

## [Phase 14: Workspace-Scoped Engine Boundary] - 2026-03-17

### Added
- **Workspace Domain and Seed**: Added `iris_workspace`, a default workspace seed, `Workspace` entity/repository/service, and `/api/v1/workspaces` APIs so the core engine can be scoped without introducing user, tenant, or auth models.
- **Workspace Header Contract**: Added request-scoped workspace resolution through `X-Iris-Workspace-Key`, with `default` fallback for desktop and local Compose usage.
- **Workspace Isolation Coverage**: Added workspace-aware K6 clients plus `sync-workspace-boundary.test.js` so the regression suite now proves workspace isolation for folder tree, config CRUD, run history, recent activity, run detail, and cross-workspace access denial.

### Changed
- **Per-Workspace Core Tables**: `iris_pipeline_folder`, `iris_pipeline`, and `iris_pipeline_run` now carry `workspace_id`, and every workspace owns its own hidden root folder row.
- **Scoped Config and Tree Queries**: Folder tree, folder mutation, delete preview, config list/detail, config create/update/import, and uniqueness checks now execute inside the current workspace instead of assuming one global namespace.
- **Scoped Runtime Control and Browsing**: Execute, stop, resume, rerun, run detail, pipeline history, recent runs, and ids lookup now all resolve through the current workspace boundary while preserving the public pipeline/run contract.
- **Desktop Compatibility Preservation**: The existing single-user desktop path still works without frontend changes because missing workspace headers fall back to `default`.

### Verified
- **Workspace Regression Validation**: Re-ran `mvn -q -DskipTests compile`, the targeted K6 `workspace` suite, the targeted `config` and `pipeline-core` suites, and then the full K6 suite to confirm workspace isolation and default-workspace fallback both hold across all existing config, control, observability, and runtime scenarios.

---

## [Phase 13: Desktop GUI Readiness Gaps] - 2026-03-16

### Added
- **Run History Browser API**: Expanded `GET /api/v1/sync-pipeline` so it now supports `pipelineId`, `limit`, and `beforeRunId` for per-pipeline logical run history, and added `GET /api/v1/sync-pipeline/recent` for recent activity browsing across pipelines while keeping `ids` lookup compatible.
- **Rich Recursive Delete Preview**: Expanded `GET /api/v1/pipeline-folders/{folderId}/delete-preview` so GUI clients can preview affected folders, pipelines, blocker pipelines with run history, and payload truncation for confirmation dialogs before recursive delete.
- **Phase 13 K6 Coverage**: Added `sync-pipeline-history-browser.test.js` and extended folder-tree tests so K6 now proves run history browsing, recent activity browsing, ids lookup compatibility, detailed delete preview payloads, and truncation/blocker behavior end to end.

### Changed
- **Pipeline Query Surface for GUI**: `SyncPipelineAPI` now cleanly separates three browsing modes: ids lookup for known runs, per-pipeline history for timeline panels, and recent-run browsing for activity feeds.
- **Delete Preview Payload for Desktop UX**: Folder delete preview responses now include concrete folder and pipeline metadata instead of only counts, while keeping the existing blocker semantics that prevent deleting config trees with run lineage.
- **Long-Running Stop Test Robustness**: The async chunk stop/resume K6 scenario now uses a dedicated configurable completion timeout so the evidence suite remains stable under full-regression load without weakening runtime assertions.

### Verified
- **Full Regression Validation**: Re-ran `mvn -q -DskipTests compile`, the targeted K6 `pipeline-stop` suite after tightening the async chunk timeout policy, and then the full K6 suite to confirm config tree management, import, control flows, run history browsing, delete preview evidence, observability, and runtime semantics all pass together.

---

## [Phase 12: Folder Tree Config Contract] - 2026-03-16

### Added
- **Folder Tree Foundation**: Added `iris_pipeline_folder`, a hidden root row strategy, folder CRUD APIs, tree query support, and recursive-delete preview so configuration can move from file-path identity to a real folder tree model.
- **JSON-First Config CRUD**: Added folder-aware JSON create/update flows on `/api/v1/sync-config` using `folderId`, `pipelineName`, and `jobs` as the primary contract for future GUI integration.
- **Optional Import Workflow**: Added `POST /api/v1/sync-config/import` and `PUT /api/v1/sync-config/{pipelineId}/import` so YAML/JSON files remain a supported import path without defining pipeline identity.
- **Phase 12 K6 Coverage**: Added folder-tree and import scenarios, and updated shared K6 helpers so config, pipeline, and runtime suites now validate the folder-aware contract end to end.

### Changed
- **Folder-Aware Metadata Surface**: Config and runtime DTOs now expose `pipelineName`, `folderId`, and `folderPath`; root pipelines render as `folderId = null` and `folderPath = '/'` so the hidden root row stays internal.
- **Contract Shift Away From Path Identity**: `sync-config` no longer treats `path` and uploaded file names as the public identity model; uniqueness now follows folder scope plus `pipelineName`.
- **Runtime Readability for GUI**: Pipeline summary and detail responses now align with the config model so future GUI views can identify pipelines without reconstructing file-system-style paths.

### Removed
- **Legacy Multipart Path Contract**: Removed the old `path + file` create/update/patch endpoints from `/api/v1/sync-config`; multipart is now only used by the explicit import endpoints.
- **Legacy Path Columns**: Dropped `config_path` and `file_name` from `iris_pipeline`, completing the persistence cleanup after the folder-tree migration.

### Verified
- **Full Regression Validation**: Re-ran `mvn -q -DskipTests compile` and the full K6 suite against the default backend H2 database to confirm folder-tree config CRUD, import flows, runtime metadata, rerun/resume/stop/delete behavior, and observability coverage remain intact.

---

## [Phase 11 (Partial): Observability V1] - 2026-03-16

### Added
- **Actuator and Prometheus Endpoints**: Added Spring Boot actuator and Prometheus registry support so the backend now exposes `/actuator/health`, `/actuator/metrics`, and `/actuator/prometheus`.
- **Runtime Metrics Publisher**: Added an `observability` package with lifecycle-driven observation events and a Micrometer publisher for pipeline run, execution, and job counters, gauges, and timers.
- **Observability Smoke Coverage**: Added `sync-pipeline-observability-smoke.test.js` plus management endpoint helpers so K6 can verify actuator reachability, IrisPipe metric registration, Prometheus scrape output, and active-gauge recovery after a pipeline run completes.

### Changed
- **Lifecycle-Based Metrics Emission**: Runtime observability now derives from `PipelineExecutionService` and `PipelineRunLifecycleService` transitions instead of controller-layer inference, keeping persistence flow and metrics flow aligned.
- **Active Runtime Gauges**: `PipelineRunRepo` and `PipelineRunExecutionRepo` now expose active-status counts so gauges can reflect in-flight logical runs and execution attempts without introducing high-cardinality tags.

### Verified
- **Targeted Observability Validation**: Re-ran `mvn -q -DskipTests compile` and the K6 `pipeline-observability` suite to confirm attempt timeline coverage still passes alongside health, metrics, Prometheus, counters, gauges, and duration timers.

---

## [Phase 11 (Partial): Attempt Timeline and Query Service] - 2026-03-16

### Added
- **Attempt Timeline Detail API**: Extended `GET /api/v1/sync-pipeline/{pipelineRunId}` with top-level `attempts` so operators can inspect per-attempt execution kind, status, async request mode, timing, and job-level outcomes without losing the existing latest-projection `jobs`.
- **Timeline Regression Coverage**: Added `sync-pipeline-observe-timeline.test.js` and a dedicated `pipeline-observability` K6 suite to lock down `execute -> stop -> resume` and `rerun -> stop -> resume` timeline behavior end to end.

### Changed
- **Query Service Boundary**: Introduced `PipelineRunQueryService` so summary/detail read-model assembly now lives outside `PipelineExecutionService`, keeping control operations and query composition on separate paths.
- **Additive Detail Contract**: The detail payload remains backward compatible at the top level while now surfacing attempt history ordered by `executionNo`, with each attempt preserving job order by `jobSequenceOrder`.

### Verified
- **Targeted Timeline Validation**: Re-ran `mvn -q -DskipTests compile` and the targeted K6 `pipeline-observability` suite to confirm attempt ordering, latest-job projection compatibility, rerun lineage preservation, and correct attempt-level statuses after stop/resume flows.

---

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
## [K6 Runner Optimization] - 2026-03-20

### Added
- **Per-Suite K6 Namespacing**: Added local K6 fixture namespacing for test tables and watermark execution names so multiple suites can safely share one backend instance.

### Changed
- **CI Suite Coverage**: Expanded GitHub Actions K6 matrix coverage to include `workspace`, `pipeline-operator-safety`, and `pipeline-observability`.
- **Runner Consistency**: GitHub Actions now sets the same K6 namespace/pipeline prefix inputs used by the local runner, and its matrix now matches the full local suite catalog.

---

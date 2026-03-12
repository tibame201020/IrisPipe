# IrisPipe Next Stage Plan

## Scope of this document

This file is a **Phase 4 handoff plan** for the next implementation stage after Phase 3.
It is written for a fresh conversation or a different agent, so it includes current system context, known constraints, risks, and a recommended execution order.

Phase 4 goal:

- Make `atomicLevel` real at runtime (JOB vs. CHUNK).
- **Targeting high-volume stability**: Support "Tens of Millions" (40M+) record tasks with optional CHUNK commits to mitigate massive rollback costs.
- **Maintain Optionality**: JOB level remains the standard for the highest transactional integrity, while CHUNK is an expert opt-in for extreme volumes.
- Add restartability on top of the Phase 3 database-backed pipeline model.
- Preserve K6 as the primary regression safety net.

## Current baseline after Phase 3

### What is implemented

- Job configuration is now persisted in the application database instead of being executed directly from files.
- Config upload still uses YAML/JSON files for ingestion convenience, but the source of truth for execution is the DB.
- `/api/v1/sync-config` now manages persisted pipelines.
- `/api/v1/sync-job` now executes by `pipelineId`.
- `JobExecutionService` attaches `pipeline.id` and `run.id` to `JobParameters`.
- The current config persistence schema includes:
  - `iris_pipeline`
  - `iris_pipeline_job`
  - `iris_pipeline_job_connection`
  - `iris_pipeline_execution`
  - `iris_pipeline_execution_parameter`
- Watermarks are still persisted in `iris_watermark_record`.
- Spring Batch metadata is still stored in the `BATCH_*` tables.

### Current API surface

- `GET /api/v1/sync-config`
- `GET /api/v1/sync-config/{pipelineId}`
- `POST /api/v1/sync-config`
- `PUT /api/v1/sync-config/{pipelineId}`
- `PATCH /api/v1/sync-config/{pipelineId}`
- `DELETE /api/v1/sync-config/{pipelineId}`
- `POST /api/v1/sync-job`
- `GET /api/v1/sync-job?ids=...`
- `GET /api/v1/sync-job/{jobId}`
- `DELETE /api/v1/sync-job/{jobId}`

### Current execution semantics

- `atomicLevel` is validated in the config model, but it is **not yet effective** at runtime.
- `SyncJobFactory` always creates `CustomJobListener(..., true, ...)`.
- `CustomJobListener` opens one destination-side outer transaction at the job boundary.
- **Performance Context**: Current JOB-level execution is highly efficient, capable of handling ~46M records (UPSERT/INSERT) in approx 1.2 hours with proper fetch/batch settings.
- Result:
  - Multi-step jobs behave like one logical transaction unit.
  - Successful jobs commit and then persist watermarks.
  - Failed jobs roll back and do not persist watermarks.

### Current K6 protection baseline

The following K6 suites pass after Phase 3:

- `sync-config-validation.test.js`
- `sync-config.test.js`
- `sync-job-success.test.js`
- `sync-job-fail.test.js`
- `sync-job-no-watermark.test.js`
- `sync-job-multi-step.test.js`
- `sync-upsert-composite.test.js`
- `sync-system-variable.test.js`

There is also a chunk-mode regression fixture already present:

- `k6/testfiles/job-chunk-fail.yml`

Important:

- this chunk fixture documents the intended direction
- it is **not yet a proof that CHUNK semantics are implemented**

## Important implementation constraints

### 1. K6 remains the primary safety net

Behavior changes are allowed in Phase 4, but they must be reflected in K6 intentionally and narrowly.
K6 should continue to describe the real external contract, not be loosened just to make failures disappear.

### 2. Phase 3 persistence is mutable today

Current pipeline updates reuse the same `pipelineId` and replace child rows by delete-and-insert.
That is acceptable for Phase 3 CRUD, but it is **not sufficient by itself for restart-safe historical reconstruction**.

This is the most important Phase 4 design constraint.

### 3. `run.id` currently forces a fresh Spring Batch job instance

Current execution always adds a new `run.id`.
That is good for ordinary launches, but it means true restart cannot be implemented merely by calling the same execute flow again.

Phase 4 must decide between:

- a dedicated restart flow using Spring Batch restart APIs
- or a custom replay flow that is explicit about not being a true Spring Batch restart

The recommended direction is the first one.

### 4. Watermark semantics must be re-decided for CHUNK mode

Today watermarks persist only after whole-job success.
That matches current JOB-level semantics.

For CHUNK mode, the team must explicitly decide:

- **Decided**: Watermark persistence remains whole-job only in the initial CHUNK implementation. This relies on the future **Restart** mechanism to recover state correctly after partial failures.

This decision affects both correctness and restart behavior.

## Key files for the next implementer

### Runtime execution

- `src/main/java/irispipe/core/factory/SyncJobFactory.java`
- `src/main/java/irispipe/batch/listener/CustomJobListener.java`
- `src/main/java/irispipe/core/service/JobExecutionService.java`
- `src/main/java/irispipe/core/factory/SyncJobContextFactory.java`

### Persistence and pipeline reconstruction

- `src/main/java/irispipe/infrastructure/service/JobConfigService.java`
- `src/main/resources/db/migration/V3__init_pipeline_config.sql`

### API contract

- `src/main/java/irispipe/api/SyncConfigAPI.java`
- `src/main/java/irispipe/api/SyncJobAPI.java`
- `src/main/java/irispipe/model/dto/SyncConfigDTO.java`
- `src/main/java/irispipe/model/dto/SyncJobDTO.java`

### Watermark behavior

- `src/main/java/irispipe/infrastructure/service/ExecutionRecordService.java`
- `src/main/java/irispipe/model/WatermarkRecord.java`

### Regression coverage

- `k6/run-tests.ps1`
- `k6/utils/test-helpers.js`
- `k6/testfiles/job-chunk-fail.yml`

## Phase 4 problem statement

Phase 4 is not just "implement restart".
It has three linked sub-problems:

1. Make `atomicLevel: JOB | CHUNK` produce different runtime behavior.
2. Preserve enough immutable configuration identity to restart safely.
3. Expose a restart API that reflects the true underlying restart mechanism.

If these are implemented out of order, the restart contract will likely be wrong.

## Recommended implementation order

### [DONE] Step 1. Make `atomicLevel` effective in runtime

Target:

- `JOB` keeps the current outer job transaction behavior.
- `CHUNK` disables the outer job transaction and relies on Spring Batch chunk commit behavior instead.

Implementation direction:

- branch in `SyncJobFactory` when creating `CustomJobListener`
- `openJobTransaction` should depend on `syncJobContext.syncJob().getSetting().atomicLevel()`
- review whether tasklet-based steps (`DELETE`, `EXECUTE`) need special handling when mixed into CHUNK jobs

Validation target:

- [x] add or promote a chunk-failure K6 scenario that proves partial commit behavior
- [x] keep existing JOB-mode failure test proving full rollback behavior

### Step 2. Introduce restart-safe config identity

Current issue:

- `pipelineId` points to mutable child rows
- an old failed execution cannot safely assume the same pipeline graph still exists

Recommended direction:

- add an immutable snapshot/version layer
- bind each job execution to that immutable config identity

Viable options:

- Option A: add `pipeline_version` plus versioned child tables
- Option B: add a dedicated immutable snapshot table structure

Recommendation:

- prefer a snapshot-oriented model or an explicit immutable version model
- do not rely only on `content_hash`
- do not rely only on current mutable `pipelineId`

Minimum requirement:

- for any failed execution eligible for restart, the system must be able to reconstruct the exact job definition that originally ran

### Step 3. Define the restart contract before exposing the API

The API design must answer:

- what is the restart input:
  - `jobExecutionId`
  - `jobInstanceId`
  - or app-level restart request object
- what preconditions are required:
  - only failed executions
  - only stopped executions
  - no pipeline mutation since original execution
  - snapshot must exist
- what happens if config changed:
  - reject restart
  - or restart from bound snapshot only

Recommendation:

- restart by `jobExecutionId`
- resolve restart against the immutable config identity bound to that original execution
- use Spring Batch restart semantics where possible, instead of simulating a restart with a fresh run

### Step 4. Implement restart API

Likely candidate:

- `POST /api/v1/sync-job/{jobExecutionId}/restart`

Expected behavior:

- validate the target execution exists and is restartable
- locate the immutable config identity bound to that execution
- relaunch through Spring Batch restart flow
- return updated job summary information

Open question:

- whether to return the new `jobExecutionId` only
- or a full summary payload matching current `POST /sync-job`

Recommendation:

- return the same summary DTO shape already used by execute flows if feasible

### Step 5. Expand K6 to cover real restart semantics

Add new K6 scenarios for:

- JOB mode failure still rolls back everything
- CHUNK mode failure leaves partial commit behind
- restart from failed JOB or CHUNK execution resumes correctly
- restart uses stable config identity even if the current pipeline has changed after the original failed run

Especially important:

- add a "mutate pipeline after failure, then restart" regression case
- this is the fastest way to prove snapshot/version binding is real

## Suggested concrete work items

### A. Runtime branch

- add atomic-level branching in `SyncJobFactory`
- review listener lifecycle in `CustomJobListener`
- verify `SyncJobContext.close()` still happens correctly in both modes

### B. Metadata and snapshot persistence

- design new Flyway migration(s) for immutable config identity
- persist snapshot/version linkage at execution start
- ensure the linkage is queryable during restart

### C. API and DTOs

- extend `SyncJobAPI`
- add DTO(s) for restart request/response if needed
- keep current execute API stable unless there is a strong reason to change it

### D. Tests

- add focused Java tests where easy
- rely on K6 for end-to-end truth
- update `k6/run-tests.ps1` if new restart suites are added

## Open design questions that must be answered explicitly

1. What is the immutable unit for restart:
   pipeline version, snapshot id, or something else?
2. Is restart allowed after the mutable pipeline has been edited?
3. In CHUNK mode, when exactly should watermark state advance?
4. How should restart interact with tasklet steps before or after chunk steps?
5. Should restart support both synchronous and async launcher modes, or only synchronous first?

## Non-goals for Phase 4

The following should not be folded into Phase 4 unless explicitly re-scoped:

- internal scheduler / cron management
- GUI CRUD for step/job libraries
- multi-tenant workspace model
- secret vault integration
- distributed orchestration

## Suggested definition of done

- `atomicLevel: JOB` and `atomicLevel: CHUNK` produce observably different transaction behavior.
- The system can bind a failed execution to an immutable configuration identity.
- A restart API exists and reflects true runtime semantics.
- K6 proves:
  - JOB rollback behavior
  - CHUNK partial commit behavior
  - successful restart behavior
  - rejection or safe handling when current pipeline state differs from the original execution config
- Architecture docs and feature docs are updated in the same change set.

## Known unrelated test noise

At the time this handoff plan was written, there are general Maven test failures unrelated to Phase 4 design itself:

- `IrisPipeApplicationTests` fails due to Spring Boot test configuration discovery
- `SqlSyntaxHelperTest` has a composite PK order expectation mismatch

These should not be confused with Phase 4 runtime behavior regressions.

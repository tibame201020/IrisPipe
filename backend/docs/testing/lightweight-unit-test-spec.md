# Lightweight Unit Test Spec

## Goal

This document defines the lightweight test scope that should be implemented after the recent backend refactors. The purpose is to verify that the new seams are real seams, that orchestration contracts are clear, and that the code can be validated without starting the full Spring Boot application.

K6 remains the black-box acceptance layer. The tests described here are not a replacement for K6.

## Non-goals

- Do not add full `@SpringBootTest` coverage for service logic.
- Do not rewrite or relax the existing K6 suites.
- Do not use unit tests to re-assert every DTO field already covered by K6.
- Do not introduce test-only production code changes unless a seam is genuinely missing.

## Test Slice Rules

### Mockito unit tests

Use for pure policy classes, command orchestrators, and collaborator-driven facades.

Targets:
- `irispipe.core.service.PipelineExecutionService`
- `irispipe.core.service.PipelineRunCommandService`
- `irispipe.core.service.PipelineRunControlPolicy`
- `irispipe.core.service.PipelineRunLaunchService`
- `irispipe.infrastructure.service.config.PipelineConfigCommandService`
- `irispipe.infrastructure.service.config.PipelineConfigRequestPolicy`
- `irispipe.infrastructure.service.folder.PipelineFolderCommandService`
- `irispipe.infrastructure.service.runtime.PipelineRunLifecycleService`
- `irispipe.infrastructure.service.runtime.PipelineRunStatusPolicy`

### `@DataJpaTest`

Use only for repository query behavior and workspace-scoped persistence assumptions.

Targets:
- `irispipe.infrastructure.repo.config.PipelineDefinitionRepo`
- `irispipe.infrastructure.repo.folder.PipelineFolderRepo`
- `irispipe.infrastructure.repo.runtime.PipelineRunRepo`
- `irispipe.infrastructure.repo.runtime.PipelineRunExecutionRepo`
- `irispipe.infrastructure.repo.runtime.PipelineRunExecutionJobRepo`

### `@WebMvcTest`

Use for request binding, validation, and controller status contract checks. Some coverage already exists, so this slice should expand only where validation or header-scoping behavior is still thin.

Targets:
- `irispipe.api.SyncConfigAPI`
- `irispipe.api.PipelineFolderAPI`
- `irispipe.api.SyncPipelineAPI`
- `irispipe.api.WorkspaceAPI`

## Priority Order

### Priority 1

These tests validate whether the recent refactors created clean, testable seams.

1. `PipelineRunControlPolicy`
2. `PipelineRunStatusPolicy`
3. `PipelineConfigRequestPolicy`
4. `PipelineExecutionService`
5. `PipelineRunCommandService`
6. `PipelineRunLaunchService`
7. `PipelineFolderCommandService`
8. `PipelineConfigCommandService`
9. `PipelineRunLifecycleService`

### Priority 2

These tests validate repository assumptions that the services now rely on.

1. `PipelineDefinitionRepo`
2. `PipelineFolderRepo`
3. `PipelineRunRepo`

### Priority 3

These tests validate controller binding and validation edges that should stay lightweight.

1. Additional negative validation cases for `SyncConfigAPI`
2. Additional negative validation cases for `PipelineFolderAPI`
3. Workspace header handling in `SyncPipelineAPI` and `WorkspaceAPI`

## Detailed Spec

### `PipelineRunControlPolicy` with Mockito-free unit tests

Scenarios:
- `validateResumablePipelineRun` rejects `null` latest execution.
- `validateResumablePipelineRun` accepts `FAILED`, `STOPPED`, `ABANDONED`, and `UNKNOWN`.
- `validateResumablePipelineRun` rejects `STARTING`, `STARTED`, and `COMPLETED`.
- `validatePipelineRunTopology` rejects size mismatch between snapshot jobs and persisted run jobs.
- `findResumeJobSequence` returns the first failed job sequence.
- `findResumeJobSequence` returns the first `NOT_RUN` sequence when execution status is `STOPPED`.
- `findResumeJobSequence` throws when no resumable job exists.
- `validateResumeStrategy` accepts `JOB` and `CHUNK`.
- `validateResumeStrategy` rejects unsupported atomic levels.
- `validateStoppablePipelineRun` accepts in-flight statuses and rejects terminal statuses.
- `validateDeletablePipelineRun` accepts terminal statuses and rejects in-flight statuses.

### `PipelineRunStatusPolicy` with Mockito-free unit tests

Scenarios:
- terminal failure status set is exactly `FAILED`, `STOPPED`, `ABANDONED`, `UNKNOWN`
- terminal status set additionally includes `COMPLETED`
- successful terminal status set is exactly `COMPLETED`, `SKIPPED`
- stop status set is exactly `STOPPING`, `STOPPED`
- observed execution status set is exactly `COMPLETED`, `FAILED`, `STOPPED`
- observed job status set is exactly `COMPLETED`, `FAILED`, `STOPPED`

### `PipelineConfigRequestPolicy` with Mockito-free unit tests

Scenarios:
- rejects `null` or empty jobs
- calls `validate()` on each `SyncJobDefinition`
- trims pipeline names
- rejects blank pipeline names
- rejects `/` and `\\` in pipeline names
- explicit format takes precedence over file extension
- `yaml`, `yml`, and `json` normalize correctly
- rejects unsupported format
- rejects missing format when filename has no extension

### `PipelineExecutionService` with Mockito

Focus:
- orchestration only
- no Spring Batch launch internals
- no repository query semantics beyond collaborator contract

Scenarios:
- `execute` loads pipeline definition and config, creates run, creates snapshot, delegates start, and returns rendered summary
- `execute` converts `useAsyncLauncher = null/false/true` into the expected boolean
- `rerun` copies the snapshot from source run and creates a new logical run
- `resume` validates latest execution, topology, resume strategy, creates resume execution/jobs, and delegates launch with correct `startJobSequence`
- `stop` validates stoppable status and delegates stop request
- `deletePipelineRun` validates deletable status and delegates aggregate delete
- resource lookup failures surface as `ResourceNotFoundException`

Assertions:
- verify collaborator calls and key arguments
- do not over-assert internal helper call counts when behavior is already implied by returned result

### `PipelineRunCommandService` with Mockito

Focus:
- aggregate persistence behavior
- delete cleanup behavior

Scenarios:
- `createPipelineRun` persists workspace id, pipeline id, requested async flag, and rerun source id
- `createPipelineRunJobs` preserves job order and atomic level
- `createPipelineRunExecution` increments execution number and syncs latest execution fields back to the run header
- `createInitialPipelineRunExecutionJobs` creates one pending row per logical run job
- `createResumePipelineRunExecutionJobs` marks prefix rows as `SKIPPED` and carries forward prior root/execution ids
- `deletePipelineRun` deletes Spring Batch metadata for all distinct job execution ids and removes aggregate children in the correct order

### `PipelineRunLaunchService` with Mockito

Focus:
- control flow around launch, stop, and stop-finalization
- no real batch job startup

Scenarios:
- `launch` delegates to async executor when requested
- `launch` runs inline when async is false
- `requestStop` marks stop requested before attempting `jobOperator.stop`
- `requestStop` finalizes as stopped when no running batch execution exists
- `requestStop` tolerates `NoSuchJobExecutionException` and `JobExecutionNotRunningException`
- launch path builds expected job parameters for initial execution
- resume launch path toggles identifying flag for `PIPELINE_RUN_JOB_ID` and `PIPELINE_RUN_EXECUTION_JOB_ID` when replaying a `JOB` atomic level
- failed batch execution marks remaining jobs as `NOT_RUN`
- thrown exception triggers `markLaunchFailed`

### `PipelineFolderCommandService` with Mockito

Focus:
- folder mutation rules
- recursive delete safety

Scenarios:
- create folder resolves root when parent is `null`
- create folder rejects sibling duplicates
- update folder rejects root update
- update folder rejects self-parent and descendant moves
- update folder rejects sibling duplicates in target parent
- delete folder rejects non-recursive delete when subtree is not empty
- delete folder rejects recursive delete when preview reports blockers
- delete folder deletes pipeline definitions before folder rows

### `PipelineConfigCommandService` with Mockito

Scenarios:
- create flow enforces unique `(workspace, folder, pipelineName)`
- create flow persists header row then delegated jobs
- replace flow preserves existing pipeline id while updating folder/name/content hash
- replace flow enforces uniqueness excluding the current pipeline id

### `PipelineRunLifecycleService` with Mockito

Focus:
- runtime status transitions
- projection sync and observation publishing contracts

Scenarios:
- `markJobStarted` updates execution/job status to `STARTED` and syncs latest projections
- `markJobStarted` does not override execution status when stop was already requested
- `markJobFinished` maps Spring Batch status to pipeline status
- `markJobFinished` publishes job observation on terminal job states
- `markJobFinished` marks execution `FAILED` on terminal failure and publishes execution observation for failed execution
- `markJobFinished` marks execution `COMPLETED` only when all execution jobs are successful terminal states
- `markStopRequested` moves execution and run to `STOPPING` unless already terminal
- `markStopped` sets `STOPPED` and publishes execution observation only once
- `markExecutionJobsNotRun` updates only pending rows and syncs logical run job projections
- missing required job parameters throw `IllegalArgumentException`

## Repository Spec

### `PipelineDefinitionRepo` with `@DataJpaTest`

Scenarios:
- workspace-scoped lookup ignores rows from other workspaces
- same `pipelineName` is allowed in different folders or workspaces
- same `pipelineName` is rejected only within the same workspace folder

### `PipelineFolderRepo` with `@DataJpaTest`

Scenarios:
- each workspace has one hidden root row
- same folder name is allowed under different parents or workspaces
- same folder name is rejected only within the same workspace parent

### `PipelineRunRepo` with `@DataJpaTest`

Scenarios:
- history query returns runs in descending id order
- recent query is workspace-scoped
- `beforeRunId` queries behave as exclusive cursor paging

## Controller Spec

### `SyncConfigAPI` with `@WebMvcTest`

Additional cases:
- invalid `pipelineName`
- missing jobs payload
- invalid import format
- invalid workspace header value if binding layer later constrains it

### `PipelineFolderAPI` with `@WebMvcTest`

Additional cases:
- blank folder name
- invalid preview limit
- invalid recursive delete parameter combinations if controller logic changes later

### `SyncPipelineAPI` with `@WebMvcTest`

Additional cases:
- invalid `limit`
- invalid `ids`
- invalid async payload binding

## Test Fixture Guidance

- Prefer builder helpers over raw entity construction in each test class.
- Reuse a small set of readable fixtures: `workspaceA`, `workspaceB`, `rootFolder`, `childFolder`, `pipelineA`, `run1`, `execution1`, `job1`.
- For policy tests, build only the fields used by the policy.
- For orchestration tests, mock collaborators and assert the collaboration contract rather than all persisted field values.
- For repository tests, seed only the rows needed to prove workspace and folder boundaries.

## What Jules Should Not Do

- Do not introduce `@SpringBootTest` for service classes covered by these seams.
- Do not modify K6 scripts or accept changed K6 behavior as part of unit test work.
- Do not rename external API fields such as `useAsyncLaucher`.
- Do not broaden bean validation into deep domain graphs such as `Pipeline` or `SyncJobDefinition`.

## Suggested Delivery Order For Jules

1. Pure policy tests
2. Command/orchestration Mockito tests
3. Repository slice tests
4. Additional controller slice tests
5. Final run of existing K6 suite as acceptance evidence

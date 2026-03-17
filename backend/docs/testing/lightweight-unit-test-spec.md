# Lightweight Unit Test Spec

## Goal

This document is the implementation handoff for Google Jules.

Target outcome:

- add lightweight unit and slice tests without starting the full Spring Boot application
- validate that recent refactors created real seams
- keep K6 as the acceptance guardrail for public behavior

## Non-Goals

- do not add broad `@SpringBootTest` coverage
- do not rewrite or weaken K6
- do not rename external request or response contracts
- do not use unit tests to duplicate every DTO assertion already covered by K6
- do not broaden controller bean validation into deep domain graphs such as `SyncJobDefinition`

## Test Slice Rules

### Pure Unit

Use when no Spring container or repository wiring is needed.

Targets:

- `PipelineRunControlPolicy`
- `PipelineRunStatusPolicy`
- `PipelineConfigRequestPolicy`
- `PipelineRunStatus`
- `SyncJobDefinition`
- SQL and utility helpers when behavior is local and deterministic

### Mockito

Use for collaborator-driven services and facade orchestration.

Targets:

- `PipelineExecutionService`
- `PipelineRunCommandService`
- `PipelineRunLaunchService`
- `PipelineRunQueryService`
- `PipelineConfigService`
- `PipelineConfigCommandService`
- `PipelineConfigImportService`
- `PipelineConfigReadModelService`
- `PipelineDefinitionPersistenceService`
- `PipelineDefinitionAggregatePersistenceService`
- `PipelineDefinitionDeleteGuardService`
- `PipelineFolderService`
- `PipelineFolderCommandService`
- `PipelineFolderReadModelService`
- `PipelineFolderStructureService`
- `PipelineRunLifecycleService`
- `PipelineRunObservationService`
- `ExecutionRecordService`
- `JobMetadataService`
- `WorkspaceService`
- `WorkspaceContextService`

### `@DataJpaTest`

Use only for repository queries and scope assumptions.

Targets:

- workspace-scoped repositories
- folder tree repositories
- run history and recent-run repositories
- config repositories whose query behavior is part of service assumptions

### `@WebMvcTest`

Use for request binding, validation, and controller status contract checks.

Targets:

- `SyncConfigAPI`
- `PipelineFolderAPI`
- `SyncPipelineAPI`
- `WorkspaceAPI`
- `GlobalExceptionHandler`

## Priority Order

### Priority 1

These tests validate the new seam quality.

1. `PipelineRunControlPolicy`
2. `PipelineRunStatusPolicy`
3. `PipelineConfigRequestPolicy`
4. `PipelineExecutionService`
5. `PipelineRunCommandService`
6. `PipelineRunLaunchService`
7. `PipelineConfigCommandService`
8. `PipelineFolderCommandService`
9. `PipelineRunLifecycleService`

### Priority 2

These tests validate repository assumptions that control and query services depend on.

1. `PipelineRunRepo`
2. `PipelineDefinitionRepo`
3. `PipelineFolderRepo`
4. `PipelineRunExecutionRepo`
5. `PipelineRunExecutionJobRepo`
6. `WorkspaceRepo`

### Priority 3

These tests validate controller binding and validation edges.

1. additional `SyncConfigAPI` negative cases
2. additional `PipelineFolderAPI` negative cases
3. `SyncPipelineAPI` paging and request binding cases
4. `WorkspaceAPI` binding and current-workspace cases

## Detailed Spec

### `PipelineRunControlPolicy`

Scenarios:

- resumable status validation accepts only resumable terminal states
- in-flight status validation for stop accepts only active states
- delete guard accepts only terminal latest execution states
- topology validation rejects snapshot and run-job size mismatch
- resume sequence detection prefers failed or stopped node
- stopped-between-jobs resume finds first `NOT_RUN` node
- unsupported resume strategy is rejected

### `PipelineRunStatusPolicy`

Scenarios:

- terminal failure statuses are stable
- terminal statuses are stable
- successful terminal statuses are stable
- stop statuses are stable
- observed execution statuses are stable
- observed job statuses are stable

### `PipelineConfigRequestPolicy`

Scenarios:

- rejects null or empty jobs
- validates each `SyncJobDefinition`
- trims pipeline name
- rejects blank or slash-containing pipeline name
- explicit import format overrides file extension
- `yaml`, `yml`, and `json` normalize correctly
- unsupported format is rejected
- missing format without filename extension is rejected

### `PipelineExecutionService`

Focus:

- orchestration only
- no real batch startup
- no repository integration behavior

Scenarios:

- `execute` loads config, creates run state, creates snapshot, delegates launch, and returns summary
- `rerun` creates a new run from copied snapshot
- `resume` validates latest execution, resolves resume strategy, creates resume attempt, and delegates launch
- `stop` validates current state and delegates stop request
- `deletePipelineRun` validates latest execution and delegates aggregate delete
- wrong-workspace resource lookup surfaces as `ResourceNotFoundException`

### `PipelineRunCommandService`

Scenarios:

- create flow persists run header with workspace and pipeline scope
- logical run-job creation preserves order and atomic level
- execution creation increments execution number and syncs latest projection
- initial execution-job creation yields pending rows
- resume execution-job creation marks prefix nodes `SKIPPED`
- aggregate delete removes metadata and runtime rows in the correct order

### `PipelineRunLaunchService`

Scenarios:

- async launch delegates to executor
- sync launch runs inline
- stop request marks stop before calling `JobOperator.stop`
- stop path finalizes to `STOPPED` when no running batch execution exists
- launch failure delegates to failure-marking path
- job replay launch uses correct identifying parameter behavior

### `PipelineConfigCommandService`

Scenarios:

- create flow enforces folder-local uniqueness
- create flow persists header before child rows
- replace flow preserves pipeline id and updates folder/name/hash
- replace flow ignores self-row during uniqueness check

### `PipelineFolderCommandService`

Scenarios:

- create resolves root when parent is null
- create rejects sibling duplicates
- update rejects root update
- update rejects self-parent and descendant-parent moves
- update rejects target sibling duplicates
- delete rejects non-recursive delete for non-empty subtree
- delete rejects recursive delete when blockers exist
- delete removes pipeline configs before folder rows

### `PipelineRunLifecycleService`

Scenarios:

- `markJobStarted` updates execution and job status
- pre-requested stop is respected on start
- `markJobFinished` maps Spring Batch status correctly
- terminal job observation is published once
- terminal execution observation is published once
- latest run and latest run-job projection are synchronized
- pending nodes become `NOT_RUN` when launch stops mid-sequence
- missing required job parameters are rejected

## Repository Spec

### `PipelineDefinitionRepo`

Scenarios:

- workspace-scoped lookup does not leak across workspaces
- same `pipelineName` is allowed in different folders or workspaces
- same `pipelineName` is only conflicting inside the same folder

### `PipelineFolderRepo`

Scenarios:

- workspace root lookup works
- sibling uniqueness assumptions hold
- same folder name is allowed under different parents or workspaces

### `PipelineRunRepo`

Scenarios:

- recent query is workspace-scoped
- history query is pipeline-scoped and descending
- `beforeRunId` behaves as exclusive cursor paging
- run-history blocker query returns only pipelines with lineage

## Controller Spec

### `SyncConfigAPI`

Additional cases:

- invalid `pipelineName`
- empty `jobs`
- invalid import `format`
- invalid `pipelineId` or `folderId`

### `PipelineFolderAPI`

Additional cases:

- blank or invalid folder name
- invalid delete preview limit
- invalid `folderId`

### `SyncPipelineAPI`

Additional cases:

- invalid `ids`
- invalid `limit`
- invalid `beforeRunId`
- invalid async request payload binding
- invalid mixed query mode such as both `ids` and `pipelineId`

### `WorkspaceAPI`

Additional cases:

- blank workspace key
- invalid workspace key pattern
- blank workspace name

## Fixture Guidance

- prefer builders over large raw entity construction
- keep fixtures small and readable
- build only the fields used by the target policy or service
- for Mockito tests, assert collaboration contracts rather than every field write
- for repository tests, seed the minimum rows needed to prove scope or ordering

## Delivery Order For Jules

1. pure unit policy tests
2. Mockito orchestration tests
3. repository slice tests
4. additional controller slice tests
5. run the existing K6 suite as final acceptance evidence

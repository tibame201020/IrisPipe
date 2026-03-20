# Configuration Model and Runtime Persistence

## 1. External Resource Boundaries

IrisPipe exposes four product-facing resource concepts:

- `Workspace`
- `Folder`
- `Pipeline`
- `PipelineRun`

`Job`, `ExecutionStep`, `JobExecution`, and `StepExecution` still exist, but they are internal execution boundaries.

## 2. Workspace Scope

The backend is now workspace-scoped.

- Request scope is resolved from `X-Iris-Workspace-Key`
- Missing header falls back to `default`
- Every workspace owns its own hidden root folder row

This allows:

- desktop mode through the default workspace
- future outer multi-tenant composition without refactoring the engine again

## 3. Folder and Pipeline Config Model

### Folder Tree

Folder organization is persisted explicitly through `iris_pipeline_folder`.

Key semantics:

- one hidden root row per workspace
- public root path is `/`
- pipelines may exist directly under root
- folder uniqueness is sibling-scoped

### Pipeline Definition

Pipeline config is persisted through `iris_pipeline` plus normalized child tables.

Key semantics:

- `pipelineId` is the stable technical identifier
- `pipelineName` is the user-facing identifier
- uniqueness is `(workspace, folder, pipelineName)`
- file path and file name are no longer part of pipeline identity
- public config payloads now use:
  - `stages[]`
  - per-job `stage`
- backend read models now also project stage-first structure directly:
  - `stageInfos`
  - grouped stage jobs with stable stage order
- pipeline jobs are persisted and projected with ordered stage metadata:
  - `stageName`
  - `stageSequenceOrder`
- legacy linear configs remain valid:
  - missing stage metadata is materialized as implicit one-job-per-stage order
  - legacy `stageName` input is still accepted as a compatibility alias
  - public read models hide those implicit stage names

### Normalized Child Tables

- `iris_pipeline_job`
- `iris_pipeline_job_connection`
- `iris_pipeline_execution`
- `iris_pipeline_execution_parameter`

These tables are the source of truth for fresh execute.

### Stage as a First-Class Domain Concept

`stage` is no longer only a pair of job columns.

The backend now treats stage as an explicit domain projection:

- config queries can render `pipeline -> stages -> jobs`
- runtime queries can render `run -> stages -> jobs`
- attempts can also be projected stage-first

Current implementation note:

- persistence still stores stage metadata on job rows
- stage does not yet have its own dedicated table
- but stage is already a first-class backend read/write concept

## 4. Config Input Modes

The current primary contract is JSON CRUD:

- `POST /api/v1/sync-config`
- `PUT /api/v1/sync-config/{pipelineId}`
- `PATCH /api/v1/sync-config/{pipelineId}`

Optional file import remains available:

- `POST /api/v1/sync-config/import`
- `PUT /api/v1/sync-config/{pipelineId}/import`

Import is now only an input mode.
It is not the identity model for stored pipeline definitions.

## 5. Runtime Persistence Model

IrisPipe persists pipeline runtime lineage independently of Spring Batch metadata.

### `iris_pipeline_run`

Logical run row.

Stores:

- `workspace_id`
- `pipeline_id`
- `rerun_from_pipeline_run_id`
- `latest_execution_id`
- projected status and timestamps

### `iris_pipeline_run_snapshot`

Immutable snapshot row for one logical run.

Stores:

- `snapshot_schema_version`
- `pipeline_content_hash`
- `materialized_job_json`

### `iris_pipeline_run_job`

Logical job nodes for one run.

Stores:

- `stage_name`
- `stage_sequence_order`
- `job_sequence_order`
- `job_name`
- `atomic_level`
- latest projected status
- latest projected Spring Batch linkage

### `iris_pipeline_run_execution`

Execution attempt history for one logical run.

Stores:

- `execution_no`
- `execution_kind`
- `requested_async`
- status and timestamps

### `iris_pipeline_run_execution_job`

Per-attempt job state.

Stores:

- execution-scoped status
- `root_job_instance_id`
- `last_job_execution_id`
- timestamps

Execution-job rows still represent one logical run job inside one execution attempt.
Stage membership remains on the logical run job projection, not the execution-job row itself.

### `iris_watermark_record`

Persistent execution watermark state keyed by:

- `execution_name`
- `table_name`
- `watermark_column`

## 6. Snapshot Semantics

Snapshot behavior is explicit and stable:

- `execute`
  - reads the latest persisted pipeline config
  - materializes execution names
  - creates a new snapshot
- `resume`
  - uses the existing snapshot of the same logical run
  - does not read the latest pipeline config
- `rerun`
  - creates a new logical run
  - copies the source run snapshot
  - does not read the latest pipeline config

This protects resume and rerun from config drift.

Snapshot payload now also preserves:

- `stage`
- `stageSequenceOrder`
- `sequenceOrder`

This keeps stage-aware resume deterministic even after the stored pipeline config changes.

## 7. Projection and History

Runtime persistence intentionally mixes projection and history:

- `PipelineRun` and `PipelineRunJob`
  - latest projection for cheap summary and detail reads
- `PipelineRunExecution` and `PipelineRunExecutionJob`
  - full ordered attempt history

As a result:

- run summary stays lightweight
- run detail can expose both latest jobs and ordered `attempts`
- run detail can expose ordered `stages`
- attempts can expose ordered `stages`
- stage metadata remains available for UI projection without forcing the public API to expose a full arbitrary graph model

## 8. Delete Rules

### Pipeline Config Delete

Config delete is blocked when run history exists.
The backend does not delete runtime lineage through config delete.

### Folder Delete

Folder delete supports recursive mode, but only explicitly:

- preview through `/delete-preview`
- recursive delete through `?recursive=true`

If any pipeline in the subtree already has run history:

- preview marks blockers
- actual recursive delete is rejected

### Pipeline Run Delete

Run delete is allowed only for terminal runs.
In-flight runs in `STARTING`, `STARTED`, or `STOPPING` are rejected.

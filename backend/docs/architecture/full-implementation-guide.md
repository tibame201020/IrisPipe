# IrisPipe Full Implementation Guide

## 1. Current System State

IrisPipe is now split into two clearly different layers:

- static pipeline configuration
- runtime pipeline execution

The static layer is managed through `/api/v1/sync-config`.
The runtime layer is managed through `/api/v1/sync-pipeline`.

This is the main architectural shift compared with the earlier job-centric runtime design.

## 2. Static Configuration Flow

### Upload and persistence

1. Caller uploads YAML or JSON through `POST /api/v1/sync-config`
2. File provider deserializes it into `SyncJobDefinition`
3. `validate()` runs in-memory
4. Existing normalized rows are replaced
5. The pipeline definition becomes queryable by `pipelineId`

### Static tables

- `iris_pipeline`
- `iris_pipeline_job`
- `iris_pipeline_job_connection`
- `iris_pipeline_execution`
- `iris_pipeline_execution_parameter`

These tables are the source of truth only for fresh `execute`.

## 3. Runtime Model

The runtime model is pipeline-level and lineage-aware.

### `PipelineRun`

- logical run
- public runtime resource
- owns the immutable snapshot

### `PipelineRunSnapshot`

- persisted one-to-one with `PipelineRun`
- contains materialized job JSON
- protects resume and rerun from config drift

### `PipelineRunJob`

- logical job node for a run
- sequence-first node identity
- latest projected Spring Batch linkage

### `PipelineRunExecution`

- execution attempt
- stores execution number, kind, async flag, and status

### `PipelineRunExecutionJob`

- attempt result for each run job
- stores latest batch linkage for that attempt row

## 4. Fresh Execute

Fresh execute currently works like this:

1. `PipelineExecutionService.execute(...)` loads the latest `PipelineDefinition`
2. `JobConfigService` reconstructs `SyncJobDefinition` objects
3. execution names are materialized into a stable snapshot form
4. a new `PipelineRun` is created
5. a new `PipelineRunSnapshot` is created from the latest config
6. run jobs are created
7. first execution and execution jobs are created
8. the pipeline is executed sequence-first

If async is requested, the same runtime rows are created first and execution continues on the task executor.

## 5. Resume

Resume works on a failed or stopped run.

1. load the existing `PipelineRun`
2. load the run snapshot
3. load the latest failed execution
4. find the first failed run job
5. create a new `PipelineRunExecution`
6. create new execution-job rows
7. mark upstream completed nodes as `SKIPPED`
8. continue from the failed node

Per-node strategy:

- `JOB`
  - replay the whole failed job as a fresh batch instance
- `CHUNK`
  - restart the failed batch instance with stable identifying parameters

## 6. Rerun

Rerun intentionally differs from execute.

1. load the source `PipelineRun`
2. create a brand new `PipelineRun`
3. copy the source snapshot to the new run
4. create new run jobs
5. create `PipelineRunExecution(execution_no = 1, kind = INITIAL)`
6. run the pipeline from the beginning

Important semantic rule:

- rerun does not use the latest pipeline config
- rerun replays the source run snapshot

This keeps rerun closer to CI/CD replay semantics than to a new deployment.

## 7. Lifecycle and Observability

### Listener ownership

`CustomJobListener` is the runtime bridge between Spring Batch and IrisPipe runtime tables.

- `beforeJob`
  - marks job started
- `afterJob`
  - persists watermark records when appropriate
  - marks job finished

### Projection service

`PipelineRunLifecycleService` updates:

1. `PipelineRunExecutionJob`
2. `PipelineRunExecution`
3. latest projection on `PipelineRunJob`
4. latest projection on `PipelineRun`

### Current query surface

- summary query returns latest projected run state
- detail query returns latest projected job state plus step executions from `JobExplorer`

Current detail is intentionally simple and does not yet expose the full attempt history list.

## 8. Current K6 Protection

The K6 suite is now organized by concern:

- `backend/k6/config`
- `backend/k6/pipeline`
- `backend/k6/runtime`

Protected runtime cases include:

- sync execute
- async execute
- `JOB` resume
- `CHUNK` resume
- mixed resume
- sync rerun
- async rerun

This means the public pipeline runtime contract is already under regression protection while internal restart mechanics continue evolving.

## 9. Current Gaps and Near-Term Work

### Manual stop

Manual stop is the next obvious runtime control surface, but it is not a zero-cost endpoint.

The implementation still needs:

- a stop API on `PipelineRun`
- runtime stop propagation into the active Spring Batch job
- sequence-first orchestration guards so the next job does not start after a stop request
- lifecycle projection to `STOPPING`, `STOPPED`, and downstream `NOT_RUN`

### Attempt history in public detail

The internal model already keeps attempt history.
The public detail response still exposes only the latest projection.

### In-flight delete rules

Delete already cleans the whole run lineage.
It should eventually be paired with an explicit rule for in-flight runs once manual stop exists.

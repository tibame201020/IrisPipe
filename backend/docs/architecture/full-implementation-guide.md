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
3. load the latest failed or stopped execution
4. find the first failed or stopped run job, or the first `NOT_RUN` node when stop landed between jobs
5. create a new `PipelineRunExecution`
6. create new execution-job rows
7. mark upstream completed nodes as `SKIPPED`
8. continue from the stopped or failed point

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

## 7. Stop Control

Manual stop is now part of the public pipeline runtime surface.

Current flow:

1. `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
2. load the latest `PipelineRunExecution`
3. mark the execution as `STOPPING`
4. locate the active Spring Batch `JobExecution`
5. request stop through `JobOperator.stop(...)`
6. let listener-driven lifecycle updates converge to `STOPPED`
7. mark downstream pending nodes as `NOT_RUN`

Two implementation details matter:

- stop is cooperative, not a force-kill
- orchestration checks stop state both before launching the next job and immediately after the current job returns

## 8. Lifecycle and Observability

### Listener ownership

`CustomJobListener` is the runtime bridge between Spring Batch and IrisPipe runtime tables.

- `beforeJob`
  - marks job started
  - respects an already requested stop before reopening normal in-flight status
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
- detail query uses `PipelineRunQueryService` to return:
  - latest projected job state in top-level `jobs`
  - ordered attempt history in top-level `attempts`
  - step executions enriched from `JobExplorer`

### Current observability surface

Management endpoints now expose:

- `GET /actuator/health`
- `GET /actuator/metrics`
- `GET /actuator/prometheus`

Current lifecycle-derived metrics include:

- counters
  - `irispipe.pipeline.run.triggered`
  - `irispipe.pipeline.execution.completed`
  - `irispipe.pipeline.execution.failed`
  - `irispipe.pipeline.execution.stopped`
  - `irispipe.pipeline.job.completed`
  - `irispipe.pipeline.job.failed`
  - `irispipe.pipeline.job.stopped`
- gauges
  - `irispipe.pipeline.runs.active`
  - `irispipe.pipeline.executions.active`
- timers
  - `irispipe.pipeline.execution.duration`
  - `irispipe.pipeline.job.duration`

## 9. Current K6 Protection

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
- sync stop (`JOB`, `CHUNK`, mixed)
- async stop (`JOB`, `CHUNK`, mixed)
- sync rerun
- async rerun
- composite async control flow covering `execute -> stop -> resume -> rerun -> stop -> resume`
- async delete guard
- attempt timeline detail
- observability smoke for health, metrics, and Prometheus scrape

This means the public pipeline runtime contract is already under regression protection while internal restart mechanics continue evolving.

## 10. Current Gaps and Near-Term Work

### Monitoring productization

The app now emits a usable metrics surface, but dashboards and alert routing are still external work.

### Runtime health depth

Actuator is present, but custom health indicators and tracing are still future improvements.

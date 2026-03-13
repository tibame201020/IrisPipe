# Feature 03: Scheduling and Orchestration

## Current state

IrisPipe still does not include a built-in scheduler.
Runs are started by an external caller through the pipeline runtime API.

The trigger request is:

```http
POST /api/v1/sync-pipeline
Content-Type: application/json

{
  "pipelineId": 1,
  "useAsyncLaucher": true
}
```

Notes:

- the request field is still spelled `useAsyncLaucher` to preserve API compatibility
- async trigger exists, but scheduling remains caller-driven
- static pipeline management remains under `/api/v1/sync-config`

## Current orchestration surface

The backend now exposes a pipeline-level runtime control surface:

- `POST /api/v1/sync-pipeline`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
- `GET /api/v1/sync-pipeline?ids=...`
- `GET /api/v1/sync-pipeline/{pipelineRunId}`
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

This is enough for an external orchestrator or operator to:

- trigger a new run
- trigger async work and poll it
- stop in-flight work
- resume a failed or stopped run
- rerun a historical snapshot as a new run
- inspect latest run and job status
- clean up stored lineage when the run is no longer needed

## Orchestration model

The current runtime model is sequence-first:

- one persisted `PipelineRun`
- one or more `PipelineRunExecution` attempts
- ordered pipeline job nodes
- listener-driven projection of actual Spring Batch status

This is orchestration, but it is not a built-in scheduler.
IrisPipe currently provides runtime control primitives, not cron management or dependency graph planning.

## What is still not built in

The current code does not yet provide:

- cron registration
- dependency graph scheduling
- retry policy registration as first-class scheduler metadata
- distributed queue-based orchestration
- user-defined DAG execution

Those capabilities would need to be built on top of the current `PipelineRun` control surface rather than the old job-centric API.

## Recommended direction

If first-class orchestration is added later, the design should build on the current runtime boundary:

1. Keep `PipelineExecutionService` as the execution control boundary.
2. Treat `PipelineRun` as the scheduler-facing resource, not Spring Batch `JobExecution`.
3. Add scheduling metadata only after the current control loop stays stable.
4. Keep documentation conservative until actual scheduler code exists.

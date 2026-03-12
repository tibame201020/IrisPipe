# Feature 03: Scheduling and Orchestration

## Current state

IrisPipe does not contain an internal scheduler today.
Jobs are triggered by an external actor calling the execute API:

```http
POST /api/v1/sync-job
Content-Type: application/json

{
  "pipelineId": 1,
  "useAsyncLaucher": false
}
```

Notes:

- The request field is currently spelled `useAsyncLaucher` because that is the DTO name in the code.
- `asyncJobLauncher` exists, but orchestration is still caller-driven.
- Pipeline management is separate and lives under `/api/v1/sync-config`.

## Current orchestration surface

The backend currently exposes enough metadata to let an external scheduler or operator coordinate runs:

- `POST /api/v1/sync-job`
- `GET /api/v1/sync-job?ids=...`
- `GET /api/v1/sync-job/{jobId}`
- `DELETE /api/v1/sync-job/{jobId}`

This is enough for:

- trigger
- poll
- inspect
- clean up metadata

It is not enough for:

- cron registration
- dependency graphs
- retry policy management
- restart workflows

## Next-stage direction

If IrisPipe needs first-class orchestration, the next design should be built on top of the current API rather than old endpoint names.

Recommended direction:

1. Keep execution as a service boundary around `JobExecutionService`.
2. Introduce scheduling metadata only after transaction and restart behavior are finalized.
3. Avoid documenting Quartz, Airflow, or DAG support as built-in features until code exists for them.

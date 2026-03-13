# IrisPipe Backend Architecture

IrisPipe is a Spring Boot and Spring Batch based data synchronization engine.
Static configuration is managed as a `Pipeline`. Runtime execution is managed as a `PipelineRun`.

## Current Architecture Summary

- `Pipeline` is the external configuration boundary.
- `PipelineRun` is the external runtime boundary.
- `Job` remains an internal Spring Batch boundary used to execute one atomic node inside a pipeline.
- Runtime execution is snapshot-driven:
  - `execute` uses the latest persisted pipeline config and creates a new snapshot.
  - `resume` uses the failed run's existing snapshot.
  - `rerun` creates a brand new run but clones the source run's snapshot.
- Runtime state is sequence-first and persisted explicitly through run, run-job, execution, and execution-job tables.

## Runtime Surface

### Configuration APIs

- `GET /api/v1/sync-config`
- `POST /api/v1/sync-config`
- `PUT /api/v1/sync-config/{id}`
- `PATCH /api/v1/sync-config/{id}`
- `DELETE /api/v1/sync-config/{id}`

These APIs manage the static `Pipeline` definition stored in normalized tables.

### Runtime APIs

- `POST /api/v1/sync-pipeline`
  - Trigger a brand new `PipelineRun`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
  - Continue a failed or stopped run from its failed node using the run snapshot
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
  - Create a brand new run that replays the source run snapshot
- `GET /api/v1/sync-pipeline?ids=...`
  - Query pipeline run summaries
- `GET /api/v1/sync-pipeline/{pipelineRunId}`
  - Query latest detail for a pipeline run
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`
  - Delete a pipeline run lineage and related Spring Batch metadata

## Data Model Layers

### Static Configuration

- `iris_pipeline`
- `iris_pipeline_job`
- `iris_pipeline_job_connection`
- `iris_pipeline_execution`
- `iris_pipeline_execution_parameter`

### Runtime Execution

- `iris_pipeline_run`
- `iris_pipeline_run_snapshot`
- `iris_pipeline_run_job`
- `iris_pipeline_run_execution`
- `iris_pipeline_run_execution_job`

## Package Map

| Package | Responsibility |
| --- | --- |
| `api` | REST endpoints for config and pipeline runtime |
| `batch` | Spring Batch listeners, step strategies, tasklets, metadata repositories |
| `core` | Runtime orchestration, batch assembly, shared runtime utilities |
| `infrastructure` | JPA entities/repos, file providers, persistence services, exception handling |
| `model` | Domain models, enums, DTOs, records |

## Current Runtime Notes

- `PipelineRunDetailInfo` currently exposes the latest execution projection, not a full attempt timeline.
- `JOB` and `CHUNK` are both supported in resume flow:
  - `JOB` resumes by replaying the whole failed job.
  - `CHUNK` resumes by restarting the failed Spring Batch job instance.
- K6 coverage now protects:
  - config CRUD/validation
  - sync pipeline execute
  - async trigger
  - `JOB` resume
  - `CHUNK` resume
  - mixed resume
  - sync rerun
  - async rerun
- Manual stop is not implemented yet. `STOPPING` and `STOPPED` statuses exist in the model, but there is no public stop API or runtime stop controller path yet.

## Document Map

| Document | Focus |
| --- | --- |
| [config-model.md](./config-model.md) | Static config tables and runtime execution tables |
| [core-flow.md](./core-flow.md) | Execute, resume, rerun, observe, delete runtime flows |
| [design-patterns.md](./design-patterns.md) | Snapshot, identity, projection, and transaction patterns |
| [error-handling.md](./error-handling.md) | Current exception mapping and failure behaviors |
| [full-implementation-guide.md](./full-implementation-guide.md) | Code-oriented walkthrough of the current implementation |

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
- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
  - Cooperatively stop an in-flight run and keep the run lineage resumable
- `GET /api/v1/sync-pipeline?ids=...`
  - Query pipeline run summaries
- `GET /api/v1/sync-pipeline/{pipelineRunId}`
  - Query pipeline run detail with latest projection and ordered attempt timeline
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`
  - Delete a terminal pipeline run lineage and related Spring Batch metadata

### Operational Endpoints

- `GET /actuator/health`
- `GET /actuator/metrics`
- `GET /actuator/prometheus`

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
| `observability` | Lifecycle-derived observation events, meter publishing, actuator-facing metrics |

## Current Runtime Notes

- `PipelineRunDetailInfo` now exposes:
  - top-level `jobs` as the latest execution projection
  - top-level `attempts` as the ordered execution timeline for the run
- `JOB` and `CHUNK` are both supported in resume flow:
  - `JOB` resumes by replaying the whole failed job.
  - `CHUNK` resumes by restarting the failed Spring Batch job instance.
- `stop` is now part of the public pipeline control surface:
  - stop requests first project `STOPPING`
  - active Spring Batch work is stopped cooperatively through `JobOperator.stop(...)`
  - downstream pending nodes in the same attempt become `NOT_RUN`
  - resume can continue a stopped run from a failed/stopped node or from the first `NOT_RUN` node when stop lands between jobs
- K6 coverage now protects:
  - config CRUD/validation
  - sync pipeline execute
  - async trigger
  - `JOB` resume
  - `CHUNK` resume
  - mixed resume
  - sync stop (`JOB`, `CHUNK`, mixed)
  - async stop (`JOB`, `CHUNK`, mixed)
  - sync rerun
  - async rerun
  - composite async control flow (`execute -> stop -> resume -> rerun -> stop -> resume`)
  - async delete guard
  - attempt timeline detail
  - observability smoke (`health`, `metrics`, `prometheus`)
- Delete now rejects in-flight runs in `STARTING`, `STARTED`, or `STOPPING`.
- Observability v1 is now available through actuator and Prometheus scrape endpoints:
  - lifecycle-driven counters for run triggers and terminal execution/job outcomes
  - active run and execution gauges
  - execution and job duration timers
- Remaining documented gaps:
  - dashboards and alert routing are not part of the app yet
  - tracing and custom runtime health indicators are still future work

## Document Map

| Document | Focus |
| --- | --- |
| [config-model.md](./config-model.md) | Static config tables and runtime execution tables |
| [core-flow.md](./core-flow.md) | Execute, resume, rerun, stop, observe, and delete runtime flows |
| [design-patterns.md](./design-patterns.md) | Snapshot, identity, projection, transaction, and stop-control patterns |
| [error-handling.md](./error-handling.md) | Current exception mapping, validation, and runtime failure behaviors |
| [full-implementation-guide.md](./full-implementation-guide.md) | Code-oriented walkthrough of the current implementation |

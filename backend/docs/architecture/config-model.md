# Configuration Model and Runtime Persistence

## 1. External Domain Boundary

IrisPipe exposes two top-level concepts:

- `Pipeline`
  - Static configuration uploaded and managed through `/api/v1/sync-config`
- `PipelineRun`
  - Runtime execution resource managed through `/api/v1/sync-pipeline`

`Job` is still important, but only as an internal execution boundary inside one pipeline.

## 2. Static Configuration Model

Configuration is still logically expressed as a `Pipeline` containing multiple `SyncJobDefinition` objects.

```java
public class SyncJobDefinition {
    String jobName;
    List<ExecutionStep> executions;
    JobSetting setting;
    DatabaseConfig database;
}
```

Each `SyncJobDefinition` becomes one ordered node in the pipeline.

## 3. Static Persistence Tables

The uploaded YAML or JSON file is normalized into the following tables:

### `iris_pipeline`

- One row per uploaded pipeline
- Stores logical path, file name, and latest `content_hash`

### `iris_pipeline_job`

- One row per job node
- Stores `sequence_order`, `job_name`, and flattened job settings

### `iris_pipeline_job_connection`

- Stores `SOURCE` and `DEST` connection info for each job

### `iris_pipeline_execution`

- Stores each execution step within a job

### `iris_pipeline_execution_parameter`

- Stores execution step parameters

This schema remains the source of truth for fresh `execute`.

## 4. Runtime Persistence Model

Runtime behavior is no longer represented only by Spring Batch metadata.
IrisPipe persists its own pipeline-level runtime lineage:

### `iris_pipeline_run`

Logical run record.

- One row per execute or rerun
- Stores:
  - `pipeline_id`
  - `rerun_from_pipeline_run_id`
  - `latest_execution_id`
  - latest projected status/timestamps

### `iris_pipeline_run_snapshot`

Immutable run-bound snapshot.

- One row per `PipelineRun`
- Stores:
  - `snapshot_schema_version`
  - `pipeline_content_hash`
  - `materialized_job_json`

### `iris_pipeline_run_job`

Logical job nodes for a run.

- One row per job node inside one run
- Stores:
  - `job_sequence_order`
  - `job_name`
  - `atomic_level`
  - latest projected `root_job_instance_id`
  - latest projected `last_job_execution_id`

### `iris_pipeline_run_execution`

Execution attempt history for one run.

- One row per attempt
- Stores:
  - `execution_no`
  - `execution_kind`
  - `requested_async`
  - status/timestamps

### `iris_pipeline_run_execution_job`

Attempt result for each logical run job.

- One row per job node per attempt
- Stores:
  - status
  - `root_job_instance_id`
  - `last_job_execution_id`
  - timestamps

## 5. Snapshot Semantics

Snapshot behavior is now explicit:

- `execute`
  - Reads the latest persisted pipeline config
  - Materializes stable execution identities
  - Creates a brand new run snapshot
- `resume`
  - Reads the existing snapshot for the failed run
  - Never re-materializes from the latest pipeline config
- `rerun`
  - Creates a brand new run
  - Copies the source run snapshot
  - Never uses the latest pipeline config

This keeps rerun semantically separate from fresh execute.

## 6. Atomic Boundaries

Each run job still respects the configured `atomicLevel`:

- `JOB`
  - Resume strategy: replay the failed job as a fresh Spring Batch job instance
- `CHUNK`
  - Resume strategy: restart the failed Spring Batch job instance with stable identifying parameters

The pipeline boundary stays at `PipelineRun`, but the recovery strategy is still decided per job node.

## 7. Current Observation Model

`PipelineRun` summary and detail currently expose the latest execution projection.

This is enough for:

- latest run status
- latest job statuses
- root/last Spring Batch linkage
- delete cleanup

It is not yet a full public attempt history API.

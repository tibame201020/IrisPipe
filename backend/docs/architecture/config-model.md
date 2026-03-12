# Configuration Model & Persistence

## 1. Domain Model

Configuration is logically represented as a `Pipeline` containing multiple `SyncJobDefinition` objects.

```java
public class SyncJobDefinition {
    String jobName;
    List<ExecutionStep> executions;
    JobSetting setting;
    DatabaseConfig database;
}
```

## 2. Database Persistence (Normalized)

Since Phase 3, configurations are no longer loaded directly from files at execution time. They are persisted in the following tables:

### `iris_pipeline`
The top-level container, corresponding to what was previously a single configuration file.
- `id`: PK
- `config_path`: Logical path (e.g., `k6-tests/success.yml`)
- `content_hash`: SHA-256 of the last uploaded content

### `iris_pipeline_job`
Individual sync jobs within a pipeline.
- `pipeline_id`: FK
- `sequence_order`: Execution order within the pipeline
- `settings`: Flattened columns for `fetch_size`, `batch_size`, etc.

### `iris_pipeline_job_connection`
Centralized database connection info for each job role (`SOURCE`, `DEST`).

### `iris_pipeline_execution`
Execution steps (SQL, type, etc.) for a specific job.

### `iris_pipeline_execution_parameter`
Key-value parameters for each execution step.

## 3. Upload & Validation Flow

Even though the system is DB-driven, users still interact with YAML/JSON for convenience:

1. **Upload**: User sends a file via `POST /sync-config`.
2. **Parsing**: `Yaml/JsonFileProvider` deserializes the file.
3. **Validation**: `SyncJobDefinition.validate()` is called in-memory.
4. **Persistence**: If valid, the existing pipeline records are deleted (or updated) and new records are inserted into the normalized tables.
5. **Launch**: `executeJob` now uses the `pipelineId` to query the DB and reconstruct the `SyncJobDefinition` for Spring Batch.

## 4. Removed Legacy Logic
The `jobs/` directory on the filesystem is no longer the source of truth for job execution.

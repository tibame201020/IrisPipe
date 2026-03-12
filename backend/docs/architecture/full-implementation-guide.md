# IrisPipe Full Implementation Guide (Phase 3)

## 1. Current System State

IrisPipe has transitioned from a file-driven engine to a **Database-Driven Execution Engine**.

1. **Persistence**: Jobs are stored in normalized tables (`iris_pipeline`, `iris_pipeline_job`, etc.).
2. **API**: The Config API now operates on `pipelineId` for management while accepting files for initial ingestion.
3. **Execution**: The `JobLauncher` retrieves configuration from the DB, reconstructs the domain model, and executes using Spring Batch.

## 2. Key Modules (Post-Phase 3)

- **`infrastructure.entity`**: Defines the JPA entities for the normalized configuration schema.
- **`infrastructure.repo`**: Repositories for Pipelines, Jobs, Connections, Executions, and Parameters.
- **`infrastructure.service.JobConfigService`**: The bridge between files/API and the DB. It handles hashing, validation, and recursive persistence.
- **`core.service.JobExecutionService`**: Orchestrates the execution by fetching configurations from the DB.

## 3. Configuration Hierarchy

The system follows a strict 3-layer persistence hierarchy:
- **Pipeline**: One upload unit (logical group).
- **Job**: One Batch Job (Atomic unit).
- **Execution**: One Step (SQL unit).

## 4. Why DB Persistence?
Moving to the database allows for:
- **Centralized Management**: No more managing files across multiple instances.
- **Metadata Association**: Tying Spring Batch `JobParameters` to a specific `pipelineId` in the DB.
- **Restartability**: Providing a stable hook for resuming failed jobs in Phase 4.

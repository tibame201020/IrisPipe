# IrisPipe Backend Architecture

IrisPipe is a workspace-scoped pipeline engine built on Spring Boot and Spring Batch.
It owns three product-facing resource layers:

- `Workspace`
- `Pipeline` config, organized by folder tree
- `PipelineRun` runtime lineage

The backend is intentionally not a tenant platform by itself.
Desktop mode uses the default workspace fallback.
Future platform mode can scope requests through `X-Iris-Workspace-Key` without changing the core engine model.

## Current System Shape

- Static config is managed through JSON body CRUD on `/api/v1/sync-config`
- File import is optional through `/api/v1/sync-config/import` and `PUT /api/v1/sync-config/{pipelineId}/import`
- Folder organization is first-class through `/api/v1/pipeline-tree` and `/api/v1/pipeline-folders`
- Runtime control is first-class through `/api/v1/sync-pipeline`
- Runtime observation uses:
  - run summary/history/recent/detail endpoints
  - ordered attempt timeline on run detail
  - actuator and Prometheus metrics

## Public Resource Model

### Workspace

- Resolved from `X-Iris-Workspace-Key`
- Missing header falls back to `default`
- Provisioning endpoints:
  - `GET /api/v1/workspaces`
  - `GET /api/v1/workspaces/current`
  - `POST /api/v1/workspaces`

### Folder Tree

- One hidden root folder row exists per workspace
- Public API still exposes root as virtual `/`
- Pipelines can live directly under root or inside nested folders
- Folder endpoints:
  - `GET /api/v1/pipeline-tree`
  - `POST /api/v1/pipeline-folders`
  - `PUT /api/v1/pipeline-folders/{folderId}`
  - `GET /api/v1/pipeline-folders/{folderId}/delete-preview`
  - `DELETE /api/v1/pipeline-folders/{folderId}?recursive=true|false`

### Pipeline Config

- `pipelineId` is the stable technical identifier
- `pipelineName` is the user-facing identifier
- Uniqueness is folder-local, not global
- Config endpoints:
  - `GET /api/v1/sync-config`
  - `GET /api/v1/sync-config/{pipelineId}`
  - `POST /api/v1/sync-config`
  - `PUT /api/v1/sync-config/{pipelineId}`
  - `PATCH /api/v1/sync-config/{pipelineId}`
  - `DELETE /api/v1/sync-config/{pipelineId}`
  - `POST /api/v1/sync-config/import`
  - `PUT /api/v1/sync-config/{pipelineId}/import`

### Pipeline Run

- `execute` creates a new logical run
- `resume` creates a new execution attempt inside the same run
- `rerun` creates a brand new logical run from an existing snapshot
- Runtime endpoints:
  - `POST /api/v1/sync-pipeline`
  - `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
  - `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
  - `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
  - `GET /api/v1/sync-pipeline?ids=...`
  - `GET /api/v1/sync-pipeline?pipelineId=...&limit=...&beforeRunId=...`
  - `GET /api/v1/sync-pipeline/recent?limit=...&beforeRunId=...`
  - `GET /api/v1/sync-pipeline/{pipelineRunId}`
  - `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

## Persistence Overview

### Config Tables

- `iris_workspace`
- `iris_pipeline_folder`
- `iris_pipeline`
- `iris_pipeline_job`
- `iris_pipeline_job_connection`
- `iris_pipeline_execution`
- `iris_pipeline_execution_parameter`

### Runtime Tables

- `iris_pipeline_run`
- `iris_pipeline_run_snapshot`
- `iris_pipeline_run_job`
- `iris_pipeline_run_execution`
- `iris_pipeline_run_execution_job`
- `iris_watermark_record`

### Spring Batch Metadata

IrisPipe still uses Spring Batch metadata tables for execution internals, but those tables are infrastructure detail.
Product-facing runtime semantics are expressed through the `iris_pipeline_run*` tables.

## Package Map

| Package | Responsibility |
| --- | --- |
| `api` | REST controllers and request validation boundary |
| `batch` | Spring Batch builders, listeners, tasklets, writers, metadata mappings |
| `core.factory` | Runtime job/step assembly |
| `core.service` | Pipeline control and pipeline run query orchestration |
| `core.utility` | Shared runtime and SQL helpers |
| `infrastructure.config` | Bean and mapper configuration |
| `infrastructure.context` | Runtime database context objects |
| `infrastructure.entity.*` | JPA entities grouped by domain |
| `infrastructure.repo.*` | JPA repositories grouped by domain |
| `infrastructure.service.config` | Config command, import, read-model, and persistence collaborators |
| `infrastructure.service.folder` | Folder tree command, read-model, and structure collaborators |
| `infrastructure.service.runtime` | Runtime lifecycle, snapshot, metadata, and watermark collaborators |
| `infrastructure.service.workspace` | Workspace resolution and provisioning |
| `model` | Domain records, enums, and mutable runtime summaries |
| `model.dto` | API DTOs |
| `observability` | Metric publishing and observation events |

## Runtime Notes

- Run detail exposes:
  - top-level `jobs` for the latest projection
  - top-level `attempts` for ordered execution history
- Delete guard rejects in-flight runs in `STARTING`, `STARTED`, or `STOPPING`
- Folder recursive delete is explicit:
  - preview first
  - recursive delete requires explicit request
  - pipelines with run history block config deletion
- Observability v1 is available through:
  - `GET /actuator/health`
  - `GET /actuator/metrics`
  - `GET /actuator/prometheus`

## Current Non-Goals

- No realtime runtime log streaming yet
- No dashboard-specific aggregate API yet
- No tenant, user, or RBAC model inside this app
- No tracing or custom health indicators yet

## Document Map

| Document | Focus |
| --- | --- |
| [config-model.md](./config-model.md) | Workspace, folder, config, and runtime persistence model |
| [core-flow.md](./core-flow.md) | Config, execute, resume, rerun, stop, query, and delete flows |
| [design-patterns.md](./design-patterns.md) | Current architectural patterns and refactor outcomes |
| [error-handling.md](./error-handling.md) | Validation, exception mapping, and runtime failure semantics |
| [full-implementation-guide.md](./full-implementation-guide.md) | Code-oriented walkthrough of the current implementation |

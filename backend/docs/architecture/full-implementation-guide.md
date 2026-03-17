# IrisPipe Full Implementation Guide

## 1. Package-Level Layout

Current backend packages are organized like this:

- `api`
  - controller layer
  - request validation boundary
- `batch`
  - Spring Batch integration layer
- `core.factory`
  - runtime assembly for jobs, steps, readers, writers, and listeners
- `core.service`
  - pipeline control and pipeline run query orchestration
- `core.utility`
  - SQL and runtime helpers
- `infrastructure.entity.*`
  - JPA mappings grouped by domain
- `infrastructure.repo.*`
  - repositories grouped by domain
- `infrastructure.service.config`
  - config application collaborators
- `infrastructure.service.folder`
  - folder tree collaborators
- `infrastructure.service.runtime`
  - lifecycle, snapshot, metadata, and watermark collaborators
- `infrastructure.service.workspace`
  - workspace scope and provisioning
- `model`
  - domain records and enums
- `model.dto`
  - request and response DTOs
- `observability`
  - metric publishing and observation events

## 2. Controller Layer

### Config

- `SyncConfigAPI`
  - list
  - detail
  - JSON create
  - JSON replace
  - JSON patch
  - import create
  - import replace
  - delete

### Folder

- `PipelineFolderAPI`
  - tree query
  - folder create
  - folder update
  - delete preview
  - delete

### Workspace

- `WorkspaceAPI`
  - list
  - current workspace
  - create workspace

### Runtime

- `SyncPipelineAPI`
  - execute
  - resume
  - rerun
  - stop
  - ids lookup
  - pipeline history
  - recent runs
  - detail
  - run delete

## 3. Config Implementation

Config behavior is centered on `PipelineConfigService`, which now acts as a facade.

Main collaborators:

- `PipelineConfigRequestPolicy`
  - request normalization and shallow validation
- `PipelineConfigImportService`
  - JSON or YAML parsing
  - content hashing
- `PipelineConfigCommandService`
  - create and replace mutation flow
- `PipelineConfigReadModelService`
  - hydration from normalized persistence rows
- `PipelineDefinitionPersistenceService`
  - child aggregate persistence and config delete

Static config storage is normalized, but runtime creation always reconstructs `SyncJobDefinition` before use.

## 4. Folder Implementation

Folder behavior is centered on `PipelineFolderService`, which delegates to:

- `PipelineFolderStructureService`
  - current workspace folder state
  - root resolution
  - path rendering
- `PipelineFolderReadModelService`
  - tree response
  - delete preview response
  - folder-aware pipeline summaries
- `PipelineFolderCommandService`
  - create
  - update
  - delete
  - move validation

The hidden root row remains internal.
Public APIs always map root back to `/` and `folderId = null` where appropriate.

## 5. Runtime Command Implementation

Runtime command orchestration is centered on `PipelineExecutionService`.

Main collaborators:

- `PipelineRunControlPolicy`
  - stop, resume, rerun, and delete guards
- `PipelineRunCommandService`
  - creation of logical run, execution, and run-job rows
- `PipelineRunLaunchService`
  - Spring Batch launch and stop bridge
- `PipelineRunSnapshotService`
  - snapshot creation, copy, and delete
- `PipelineConfigService`
  - reconstruction of `SyncJobDefinition`
- `JobMetadataService`
  - Spring Batch metadata cleanup

Key runtime semantics:

- execute reads latest config
- resume reuses snapshot of the same run
- rerun copies snapshot into a new run
- delete is terminal-only

## 6. Runtime Query Implementation

Runtime query assembly is centered on `PipelineRunQueryService`.

Responsibilities:

- ids lookup
- pipeline history
- recent runs
- run detail
- attempt timeline assembly
- latest job projection assembly

It does not own control-side mutation.

## 7. Listener and Lifecycle Implementation

Spring Batch callbacks are integrated through:

- `CustomJobListener`
- `ExecutionStepListener`

Persistent lifecycle ownership lives in:

- `PipelineRunLifecycleService`
- `PipelineRunProjectionService`
- `PipelineRunObservationService`
- `PipelineRunStatusPolicy`

This split keeps lifecycle writes, latest projection sync, and metric publishing isolated.

## 8. Batch Execution Integration

Spring Batch integration remains in the `batch` package:

- `BatchBeanBuilder`
  - reader and writer construction
- tasklets
  - execute and delete
- writers
  - insert, update, upsert
- entity and repo mappings
  - Spring Batch metadata access used by lifecycle cleanup and detail enrichment

These classes are infrastructure glue, not the primary product boundary.

## 9. Observability Implementation

Observability v1 is implemented through lifecycle events and Micrometer.

Key pieces:

- `PipelineExecutionObservationEvent`
- `PipelineJobObservationEvent`
- `PipelineRunTriggeredObservationEvent`
- `PipelineMetricsPublisher`
- `PipelineMetricNames`

The metrics surface is currently operational rather than product-dashboard specific.

## 10. Test and Refactor Context

Recent refactors intentionally decomposed large services into collaborator-based seams.

Practical outcome:

- service boundaries are clearer
- unit-test slices are more realistic
- K6 remains the black-box acceptance guardrail

The test-spec planning document for follow-up lightweight tests is:

- [lightweight-unit-test-spec.md](/C:/Users/16/Downloads/codes/IrisPipe/backend/docs/testing/lightweight-unit-test-spec.md)

# Backend Test Coverage Map

This document maps the current backend structure to the recommended lightweight test slice.

It is not a rollout checklist.
Its purpose is to help Jules decide what kind of test belongs to each area of the codebase.

## Slice Legend

- `Pure unit`
- `Mockito`
- `WebMvcTest`
- `DataJpaTest`
- `Covered by K6`
- `No direct target`

## API Layer

| Area | Primary slice | Notes |
| --- | --- | --- |
| `api.SyncConfigAPI` | `WebMvcTest` | request binding, validation, import request edge cases |
| `api.PipelineFolderAPI` | `WebMvcTest` | tree and delete-preview parameter validation |
| `api.SyncPipelineAPI` | `WebMvcTest` | ids/history/recent/detail query binding and validation |
| `api.WorkspaceAPI` | `WebMvcTest` | workspace request binding and current workspace endpoint |
| `infrastructure.error.GlobalExceptionHandler` | `WebMvcTest` | status and payload shape for controller-facing errors |

## Core Service Layer

| Area | Primary slice | Notes |
| --- | --- | --- |
| `PipelineExecutionService` | `Mockito` | command orchestration facade |
| `PipelineRunCommandService` | `Mockito` | runtime aggregate persistence flow |
| `PipelineRunLaunchService` | `Mockito` | Spring Batch launch and stop bridge |
| `PipelineRunQueryService` | `Mockito` | summary/history/detail assembly |
| `PipelineRunControlPolicy` | `Pure unit` | resumable, stoppable, deletable, topology rules |
| `PipelineRunStatusPolicy` | `Pure unit` | terminal and observed status sets |

## Config Services

| Area | Primary slice | Notes |
| --- | --- | --- |
| `PipelineConfigService` | `Mockito` | config facade orchestration |
| `PipelineConfigCommandService` | `Mockito` | unique-name and mutation flow |
| `PipelineConfigImportService` | `Mockito` | import parsing and content hash flow |
| `PipelineConfigReadModelService` | `Mockito` | hydration and DTO assembly |
| `PipelineConfigRequestPolicy` | `Pure unit` | normalization and shallow validation |
| `PipelineDefinitionPersistenceService` | `Mockito` | delete and child aggregate facade |
| `PipelineDefinitionAggregatePersistenceService` | `Mockito` | child row persistence contract |
| `PipelineDefinitionDeleteGuardService` | `Mockito` | run-history blocker check |
| `PipelineParameterValueSerializationService` | `Pure unit` | local serialization behavior |

## Folder Services

| Area | Primary slice | Notes |
| --- | --- | --- |
| `PipelineFolderService` | `Mockito` | folder facade |
| `PipelineFolderCommandService` | `Mockito` | create, move, delete rules |
| `PipelineFolderReadModelService` | `Mockito` | tree and delete-preview assembly |
| `PipelineFolderStructureService` | `Mockito` | workspace state loading and path helpers |
| `PipelineFolderWorkspaceState` | `Pure unit` | folder path and subtree logic |

## Runtime Infrastructure Services

| Area | Primary slice | Notes |
| --- | --- | --- |
| `PipelineRunLifecycleService` | `Mockito` | listener-driven lifecycle mutation |
| `PipelineRunObservationService` | `Mockito` | observation event publication |
| `PipelineRunProjectionService` | `Pure unit` | projection field synchronization |
| `PipelineRunSnapshotService` | `Mockito` | snapshot materialization and copy |
| `ExecutionRecordService` | `Mockito` | watermark lookup and persistence |
| `JobMetadataService` | `Mockito` | Spring Batch metadata cleanup |
| `WorkspaceService` | `Mockito` | workspace provisioning and listing |
| `WorkspaceContextService` | `Mockito` or `WebMvcTest` support | current workspace resolution |

## Repository Layer

| Area | Primary slice | Notes |
| --- | --- | --- |
| `infrastructure.repo.config.*` | `DataJpaTest` | config query and uniqueness assumptions |
| `infrastructure.repo.folder.*` | `DataJpaTest` | folder tree and sibling uniqueness assumptions |
| `infrastructure.repo.runtime.*` | `DataJpaTest` | history, recent, attempt, and blocker queries |
| `infrastructure.repo.workspace.*` | `DataJpaTest` | workspace lookup and default resolution |

## Domain Model

| Area | Primary slice | Notes |
| --- | --- | --- |
| `SyncJobDefinition` | `Pure unit` | deep config validation |
| `ExecutionStep` | `Pure unit` | execution validation rules |
| `ExecutionType` | `Pure unit` | per-type validation rules |
| `ConnectionInfo` | `Pure unit` | connection validation |
| `PipelineRunStatus` | `Pure unit` | `BatchStatus` mapping |
| `SupportType` | `Pure unit` | coercion behavior |
| DTO records and simple enums | `No direct target` | already covered indirectly by controller tests and K6 |

## Batch Package

| Area | Primary slice | Notes |
| --- | --- | --- |
| `batch.builder.*` | `Covered by K6` | infrastructure glue, low standalone value |
| `batch.listener.*` | `Covered by K6` or targeted Mockito later | integration-heavy lifecycle glue |
| `batch.tasklet.*` | `Covered by K6` | behavior already protected through pipeline execution suites |
| `batch.writer.*` | `Covered by K6` | integration-heavy JDBC batch behavior |
| `batch.entity.*` | `No direct target` | persistence mappings only |
| `batch.repo.*` | `No direct target` or later `DataJpaTest` | only if metadata query behavior becomes a pain point |

## K6 Relationship

K6 already protects:

- config CRUD and import flows
- folder tree and delete preview flows
- workspace isolation
- execute, resume, rerun, stop, delete guard
- history, recent, detail, and attempts timeline
- observability smoke

Lightweight tests should focus on seam quality and local correctness.
They should not try to reproduce the full black-box runtime coverage already provided by K6.

# Full Backend Javadoc And Test Checklist

## Purpose

This checklist is the package-by-package inventory for the full backend Javadoc rollout and the matching lightweight test-spec rollout.

Use it with:
- [lightweight-unit-test-spec.md](/C:/Users/16/Downloads/codes/IrisPipe/backend/docs/testing/lightweight-unit-test-spec.md)

This file answers two questions for every production Java file:
- what level of Javadoc should be added
- whether the file needs a direct test spec, and if so which test slice fits

## Legend

Javadoc scope:
- `Class + public methods`: class summary and all public methods
- `Class only`: class summary only
- `Enum/record summary`: short type-level description only
- `Field/method comments only if needed`: use only when names are not self-explanatory

Test spec target:
- `Mockito`
- `Pure unit`
- `WebMvcTest`
- `DataJpaTest`
- `No direct test target`
- `Covered indirectly`

Review status:
- `[ ]` not reviewed package item yet
- `[x]` reviewed and ready for rollout

## Root Package

- [x] `irispipe/IrisPipeApplication.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## api

- [x] `irispipe/api/PipelineFolderAPI.java` - Javadoc: `Class + public methods` - Test spec: `WebMvcTest`
- [x] `irispipe/api/SyncConfigAPI.java` - Javadoc: `Class + public methods` - Test spec: `WebMvcTest`
- [x] `irispipe/api/SyncPipelineAPI.java` - Javadoc: `Class + public methods` - Test spec: `WebMvcTest`
- [x] `irispipe/api/TestSupportAPI.java` - Javadoc: `Class + public methods` - Test spec: `WebMvcTest`
- [x] `irispipe/api/WorkspaceAPI.java` - Javadoc: `Class + public methods` - Test spec: `WebMvcTest`

## api.validation

- [x] `irispipe/api/validation/RequestValidationPatterns.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## batch.builder

- [ ] `irispipe/batch/builder/BatchBeanBuilder.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## batch.entity

- [ ] `irispipe/batch/entity/BatchJobExecution.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/entity/BatchJobExecutionContext.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/entity/BatchJobExecutionParams.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/entity/BatchJobExecutionParamsId.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/entity/BatchJobInstance.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/entity/BatchStepExecution.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/entity/BatchStepExecutionContext.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## batch.listener

- [ ] `irispipe/batch/listener/CustomJobListener.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [ ] `irispipe/batch/listener/ExecutionStepListener.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## batch.repo

- [ ] `irispipe/batch/repo/BatchJobExecutionContextRepo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/repo/BatchJobExecutionParamsRepo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/repo/BatchJobExecutionRepo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/repo/BatchJobInstanceRepo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/repo/BatchStepExecutionContextRepo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/batch/repo/BatchStepExecutionRepo.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## batch.tasklet

- [ ] `irispipe/batch/tasklet/DeleteTasklet.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [ ] `irispipe/batch/tasklet/ExecuteTasklet.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## batch.writer

- [ ] `irispipe/batch/writer/BatchInsertWriter.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [ ] `irispipe/batch/writer/BatchUpdateWriter.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [ ] `irispipe/batch/writer/BatchUpsertWriter.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## core.factory

- [x] `irispipe/core/factory/DeleteStepStrategy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/factory/ExecuteStepStrategy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/factory/ExecutionStepStrategy.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/core/factory/InsertStepStrategy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/factory/SyncJobContextFactory.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/core/factory/SyncJobFactory.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [x] `irispipe/core/factory/UpdateStepStrategy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/factory/UpsertStepStrategy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`

## core.service

- [x] `irispipe/core/service/PipelineExecutionService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/core/service/PipelineRunCommandService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/core/service/PipelineRunControlPolicy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [ ] `irispipe/core/service/PipelineRunJobParameterKeys.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/core/service/PipelineRunLaunchRequest.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [x] `irispipe/core/service/PipelineRunLaunchService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/core/service/PipelineRunQueryDefaults.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/core/service/PipelineRunQueryService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`

## core.utility

- [x] `irispipe/core/utility/BatchIdentityHelper.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/utility/CollectionHelper.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/utility/SqlDialect.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [x] `irispipe/core/utility/SqlStatementBuilder.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/utility/SqlSyntaxHelper.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [x] `irispipe/core/utility/TableMetadataReader.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`

## infrastructure.config

- [x] `irispipe/infrastructure/config/BeanConfig.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## infrastructure.context

- [x] `irispipe/infrastructure/context/DatabaseContext.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/infrastructure/context/SyncJobContext.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## infrastructure.entity.config

- [ ] `irispipe/infrastructure/entity/config/PipelineConnectionRole.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/config/PipelineDefinition.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/config/PipelineExecutionDefinition.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/config/PipelineExecutionParameter.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/config/PipelineJobConnection.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/config/PipelineJobDefinition.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## infrastructure.entity.folder

- [ ] `irispipe/infrastructure/entity/folder/PipelineFolder.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## infrastructure.entity.runtime

- [ ] `irispipe/infrastructure/entity/runtime/PipelineRun.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/runtime/PipelineRunExecution.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/runtime/PipelineRunExecutionJob.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/runtime/PipelineRunJob.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/runtime/PipelineRunSnapshot.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/entity/runtime/WatermarkRecord.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## infrastructure.entity.workspace

- [ ] `irispipe/infrastructure/entity/workspace/Workspace.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## infrastructure.error

- [x] `irispipe/infrastructure/error/GlobalExceptionHandler.java` - Javadoc: `Class + public methods` - Test spec: `WebMvcTest`

## infrastructure.error.exception

- [x] `irispipe/infrastructure/error/exception/ConfigFileException.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/infrastructure/error/exception/ConfigValidationException.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/infrastructure/error/exception/ConflictException.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/infrastructure/error/exception/CustomJobExecutionException.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [x] `irispipe/infrastructure/error/exception/ResourceNotFoundException.java` - Javadoc: `Class only` - Test spec: `No direct test target`

## infrastructure.provider

- [x] `irispipe/infrastructure/provider/FileProvider.java` - Javadoc: `Class + public methods` - Test spec: `No direct test target`
- [x] `irispipe/infrastructure/provider/JsonFileProvider.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/infrastructure/provider/YamlFileProvider.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`

## infrastructure.repo.config

- [ ] `irispipe/infrastructure/repo/config/PipelineDefinitionRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/config/PipelineExecutionDefinitionRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/config/PipelineExecutionParameterRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/config/PipelineJobConnectionRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/config/PipelineJobDefinitionRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`

## infrastructure.repo.folder

- [ ] `irispipe/infrastructure/repo/folder/PipelineFolderRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`

## infrastructure.repo.runtime

- [ ] `irispipe/infrastructure/repo/runtime/PipelineRunExecutionJobRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/runtime/PipelineRunExecutionRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/runtime/PipelineRunJobRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/runtime/PipelineRunRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/runtime/PipelineRunSnapshotRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`
- [ ] `irispipe/infrastructure/repo/runtime/WatermarkRecordRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`

## infrastructure.repo.workspace

- [ ] `irispipe/infrastructure/repo/workspace/WorkspaceRepo.java` - Javadoc: `Class only` - Test spec: `DataJpaTest`

## infrastructure.service.config

- [ ] `irispipe/infrastructure/service/config/PipelineConfigCommandService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineConfigImportService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineConfigReadModelService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineConfigRequestPolicy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [ ] `irispipe/infrastructure/service/config/PipelineConfigService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineDefinitionAggregatePersistenceService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineDefinitionDeleteGuardService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineDefinitionPersistenceService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/config/PipelineParameterValueSerializationService.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`

## infrastructure.service.folder

- [ ] `irispipe/infrastructure/service/folder/PipelineFolderCommandService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/folder/PipelineFolderConstants.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/infrastructure/service/folder/PipelineFolderReadModelService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/infrastructure/service/folder/PipelineFolderService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/folder/PipelineFolderStructureService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/folder/PipelineFolderWorkspaceState.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`

## infrastructure.service.runtime

- [ ] `irispipe/infrastructure/service/runtime/ExecutionRecordService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/runtime/JobMetadataService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/infrastructure/service/runtime/PipelineRunLifecycleService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/runtime/PipelineRunObservationService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [ ] `irispipe/infrastructure/service/runtime/PipelineRunProjectionService.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [ ] `irispipe/infrastructure/service/runtime/PipelineRunSnapshotService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/infrastructure/service/runtime/PipelineRunStatusPolicy.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`

## infrastructure.service.workspace

- [x] `irispipe/infrastructure/service/workspace/WorkspaceContextService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`
- [x] `irispipe/infrastructure/service/workspace/WorkspaceService.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`

## model

- [ ] `irispipe/model/AtomicLevel.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/model/BatchJobExecutionRecord.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/ConnectionInfo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/DatabaseConfig.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/ExecutionStep.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/ExecutionType.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/model/JobParameter.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/JobSetting.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/PipelineRunExecutionKind.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/model/PipelineRunStatus.java` - Javadoc: `Enum/record summary` - Test spec: `Pure unit`
- [ ] `irispipe/model/StepExecutionRecord.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/SummaryInfo.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/model/SummaryInfoLayer.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/model/SupportType.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/model/SyncJobDefinition.java` - Javadoc: `Class + public methods` - Test spec: `Pure unit`
- [ ] `irispipe/model/SystemProvidedVariable.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`

## model.dto

- [ ] `irispipe/model/dto/SyncConfigDTO.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [ ] `irispipe/model/dto/SyncPipelineDTO.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`
- [ ] `irispipe/model/dto/WorkspaceDTO.java` - Javadoc: `Class + public methods` - Test spec: `Covered indirectly`

## observability

- [ ] `irispipe/observability/PipelineMetricNames.java` - Javadoc: `Class only` - Test spec: `No direct test target`
- [ ] `irispipe/observability/PipelineMetricsPublisher.java` - Javadoc: `Class + public methods` - Test spec: `Mockito`

## observability.event

- [ ] `irispipe/observability/event/PipelineExecutionObservationEvent.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/observability/event/PipelineJobObservationEvent.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`
- [ ] `irispipe/observability/event/PipelineRunTriggeredObservationEvent.java` - Javadoc: `Enum/record summary` - Test spec: `No direct test target`

## Recommended Rollout Order

1. `api` and `api.validation`
2. `core.service`
3. `infrastructure.service`
4. `infrastructure.repo`
5. `core.factory` and `core.utility`
6. `batch`
7. `model`, `model.dto`, `observability`, `entity`, `error`, and root bootstrap classes

## Notes

- The current refactor state already makes `core.service` and `infrastructure.service` the most valuable starting point for both Javadoc and test-spec work.
- `entity`, `dto`, enum, and constant files still need Javadoc for completeness, but most of them are not primary direct test targets.
- Existing K6 remains the acceptance guardrail after Jules adds unit and slice tests.

# Core Flow

## 1. Request Scoping

All config, folder, and runtime flows resolve workspace scope first.

- header: `X-Iris-Workspace-Key`
- fallback: `default`
- missing or wrong-scope resources are resolved against the current workspace only

## 2. Config Flow

### JSON Create and Replace

1. Controller binds `SyncConfigDTO.ConfigPipelineUpsertRequest`
2. `PipelineConfigService` validates `pipelineName` and `jobs`
3. `PipelineFolderService` resolves `folderId` or root
4. `PipelineConfigCommandService` enforces unique name inside the target folder
5. `PipelineDefinitionPersistenceService` persists normalized child rows

Fresh config CRUD is workspace-scoped and folder-aware.

### Import Create and Replace

1. Controller accepts multipart input
2. `PipelineConfigImportService` resolves format from explicit `format` or file extension
3. JSON or YAML provider parses the content
4. `PipelineConfigRequestPolicy` validates the resulting `SyncJobDefinition` list
5. Parsed config is converted into the same command payload used by JSON CRUD

Import is now only an alternative input mode.

### Config Delete

1. Resolve pipeline in current workspace
2. `PipelineDefinitionDeleteGuardService` checks whether any run history exists
3. If lineage exists, delete is rejected
4. If not, normalized child rows are deleted first
5. Pipeline definition row is deleted last

## 3. Folder Flow

### Tree Query

1. `PipelineFolderStructureService` loads the current workspace folder state
2. `PipelineFolderReadModelService` builds the tree from folder rows and pipeline rows
3. Hidden root is mapped back to public `/`

### Folder Create and Update

1. Resolve current workspace state
2. Normalize target folder name
3. Enforce sibling uniqueness
4. For update, reject self-parent and descendant-parent cycles
5. Persist the folder row

### Folder Delete

1. Build delete preview
2. Reject non-recursive delete for non-empty folders
3. Reject recursive delete when subtree contains pipelines with run history
4. Delete config rows inside the subtree
5. Delete folders from deepest node upward

## 4. Execute Flow

1. `PipelineExecutionService.execute(...)` resolves the target pipeline in the current workspace
2. `PipelineConfigService` reconstructs normalized `SyncJobDefinition` objects
3. `PipelineRunCommandService` creates:
   - `PipelineRun`
   - `PipelineRunJob`
   - initial `PipelineRunExecution`
   - initial `PipelineRunExecutionJob`
4. `PipelineRunSnapshotService` materializes stable execution names and persists snapshot JSON
5. `PipelineRunLaunchService` groups logical jobs by `stageSequenceOrder`
6. Jobs in the same stage are launched in parallel
7. The launcher waits on the stage barrier before moving to the next stage
8. If one stage fails or is stopped, future stages are projected as `NOT_RUN`

Fresh execute is the only runtime path that reads the latest stored pipeline config.

## 5. Resume Flow

1. Resolve the logical run in the current workspace
2. Load the persisted snapshot for that run
3. Load the latest execution attempt
4. Determine the first incomplete stage:
   - first stage containing `FAILED`, `STOPPED`, or `NOT_RUN` jobs
5. Create a new `PipelineRunExecution(kind = RESUME)`
6. Create new execution-job rows for the whole logical run
7. Mark completed upstream jobs as `SKIPPED`
8. Mark resumable jobs in the target stage as `PENDING`
9. Relaunch only from the resolved stage barrier

Resume semantics per node:

- `JOB`
  - replay the failed job as a new Spring Batch job instance
- `CHUNK`
  - restart the failed Spring Batch job instance with stable identifying parameters

## 6. Rerun Flow

1. Resolve the source run in the current workspace
2. Create a brand new logical run
3. Copy the source snapshot
4. Create new logical run jobs
5. Create initial execution and execution-job rows
6. Relaunch from the beginning using stage barriers and intra-stage parallelism

Rerun never reads the latest pipeline config.

## 7. Stop Flow

1. Resolve run and latest execution
2. Validate latest execution is `STARTING`, `STARTED`, or `STOPPING`
3. Project latest execution to `STOPPING`
4. If a live Spring Batch job execution exists, request stop through `JobOperator.stop(...)`
5. All in-flight jobs in the active stage receive a stop request
6. Listener-driven lifecycle updates converge to final `STOPPED`
7. Pending jobs in future stages become `NOT_RUN`

Stop is cooperative, not force-kill.

## 8. Query Flow

### Run Summary by Ids

- `GET /api/v1/sync-pipeline?ids=...`
- `PipelineRunQueryService` loads run rows by id and renders lightweight summaries

### Pipeline History

- `GET /api/v1/sync-pipeline?pipelineId=...&limit=...&beforeRunId=...`
- returns ordered history for one pipeline in the current workspace

### Recent Runs

- `GET /api/v1/sync-pipeline/recent?limit=...&beforeRunId=...`
- returns ordered recent runs for the current workspace

### Run Detail

1. Resolve run and pipeline rows
2. Load ordered `PipelineRunExecution` rows
3. Load execution-job rows by attempt
4. Load logical run-job rows for latest projection
5. Enrich job details from `JobExplorer` through `last_job_execution_id`
6. Render:
   - top-level latest `stages`
   - top-level latest `jobs`
   - ordered `attempts`
   - per-attempt `stages`

Run detail is therefore stage-first and job-detailed at the same time:

- stage gives barrier-level orchestration context
- job gives execution-level counters and Spring Batch linkage

## 9. Run Delete Flow

1. Resolve the run in the current workspace
2. Reject delete when latest execution is in-flight
3. Collect execution rows and execution-job rows
4. Delete related Spring Batch metadata through `JobMetadataService`
5. Delete execution-job rows
6. Delete execution rows
7. Delete logical run-job rows
8. Delete snapshot row
9. Delete logical run row

## 10. Lifecycle Ownership

Runtime lifecycle is listener-driven.

- `PipelineExecutionService`
  - creates runtime rows
  - launches or stops work
- `CustomJobListener`
  - marks started and finished transitions
  - persists watermark records when needed
- `PipelineRunLifecycleService`
  - updates execution rows
  - updates job rows
  - synchronizes latest projection
  - publishes observation events
- `PipelineRunQueryService`
  - assembles read models without owning runtime mutation logic

## 11. Observability Flow

Observability is lifecycle-derived.

1. lifecycle services publish observation events
2. `PipelineMetricsPublisher` listens to those events
3. Micrometer publishes counters, gauges, and timers
4. actuator exposes:
   - `/actuator/health`
   - `/actuator/metrics`
   - `/actuator/prometheus`

Current metrics are execution- and job-focused.
There is no runtime log streaming in this backend yet.

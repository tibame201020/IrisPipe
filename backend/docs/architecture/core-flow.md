# Core Flow

## 1. Fresh Execute Flow

```mermaid
graph TD
    A["POST /api/v1/sync-pipeline"] --> B["PipelineExecutionService.execute(pipelineId)"]
    B --> C["JobConfigService.getSyncJobs(pipelineId)"]
    C --> D["SyncJobDefinition.validate()"]
    D --> E["create PipelineRun"]
    E --> F["create PipelineRunSnapshot"]
    F --> G["create PipelineRunJob"]
    G --> H["create PipelineRunExecution(INITIAL)"]
    H --> I["create PipelineRunExecutionJob"]
    I --> J["execute jobs sequence-first"]
    J --> K["CustomJobListener"]
    K --> L["PipelineRunLifecycleService"]
```

Fresh execute is the only path that reads the latest persisted pipeline config.

## 2. Resume Flow

```mermaid
graph TD
    A["POST /api/v1/sync-pipeline/{pipelineRunId}/resume"] --> B["load PipelineRun"]
    B --> C["load existing PipelineRunSnapshot"]
    C --> D["load latest failed PipelineRunExecution"]
    D --> E["find failed PipelineRunJob"]
    E --> F["create PipelineRunExecution(RESUME)"]
    F --> G["create PipelineRunExecutionJob rows"]
    G --> H["mark upstream nodes as SKIPPED"]
    H --> I["replay JOB or restart CHUNK"]
    I --> J["continue downstream nodes if successful"]
    J --> K["CustomJobListener + PipelineRunLifecycleService"]
```

Resume behavior:

- `JOB`
  - Replay the failed job as a fresh Spring Batch job instance
- `CHUNK`
  - Restart the failed Spring Batch job instance with stable identifying parameters

## 3. Rerun Flow

```mermaid
graph TD
    A["POST /api/v1/sync-pipeline/{pipelineRunId}/rerun"] --> B["load source PipelineRun"]
    B --> C["create new PipelineRun"]
    C --> D["copy source PipelineRunSnapshot"]
    D --> E["create new PipelineRunJob"]
    E --> F["create PipelineRunExecution(INITIAL)"]
    F --> G["create PipelineRunExecutionJob"]
    G --> H["execute jobs sequence-first"]
    H --> I["CustomJobListener + PipelineRunLifecycleService"]
```

Rerun is a brand new logical run.
It replays the source run snapshot and does not use the latest pipeline config.

## 4. Stop Flow

```mermaid
graph TD
    A["POST /api/v1/sync-pipeline/{pipelineRunId}/stop"] --> B["load PipelineRun + latest PipelineRunExecution"]
    B --> C["validate latest execution is STARTING / STARTED / STOPPING"]
    C --> D["mark PipelineRunExecution as STOPPING"]
    D --> E{"running JobExecution exists?"}
    E -->|yes| F["JobOperator.stop(jobExecutionId)"]
    E -->|no| G["mark pending execution jobs as NOT_RUN"]
    F --> H["CustomJobListener + PipelineRunLifecycleService"]
    G --> I["mark PipelineRunExecution as STOPPED"]
    H --> J["sequence-first guard prevents next job launch"]
    J --> K["finalize pending downstream nodes as NOT_RUN"]
    K --> I
```

Stop is cooperative, not force-kill.
If stop lands between jobs, the execution can move directly from `STOPPING` to `STOPPED` with downstream nodes marked as `NOT_RUN`.

## 5. Summary and Detail Flow

### Summary

`GET /api/v1/sync-pipeline?ids=...`

- Loads `PipelineRun`
- Uses latest projected status and timestamps
- Returns lightweight run summary objects

### Detail

`GET /api/v1/sync-pipeline/{pipelineRunId}`

- Loads `PipelineRun`
- Resolves `latest_execution_id`
- Loads latest `PipelineRunExecutionJob` rows
- Uses `JobExplorer` to enrich the latest `last_job_execution_id`
- Returns latest run-job detail with step executions

Current detail is latest-attempt oriented, not a full attempt history payload.

## 6. Delete Flow

`DELETE /api/v1/sync-pipeline/{pipelineRunId}`

Current delete behavior:

1. Load all `PipelineRunExecution` rows for the run
2. Load all `PipelineRunExecutionJob` rows across the run lineage
3. Delete related Spring Batch metadata for distinct `last_job_execution_id`
4. Delete execution-job rows
5. Delete execution rows
6. Delete run-job rows
7. Delete run snapshot
8. Delete run

Delete is lineage-aware for the whole run, not only the latest projection.

## 7. Lifecycle Ownership

Runtime status writes are listener-driven:

- `CustomJobListener.beforeJob`
  - marks job started
  - respects already-requested stop before opening normal in-flight work
- `CustomJobListener.afterJob`
  - marks job finished
- `PipelineRunLifecycleService`
  - updates attempt rows first
  - then syncs the latest projection back to `PipelineRun` and `PipelineRunJob`

This keeps sync and async trigger paths on the same lifecycle path.

## 8. Remaining Gaps

- Public detail still exposes only the latest execution projection, not the full attempt timeline.
- Delete is lineage-aware, but it still lacks an explicit in-flight guard for `STARTING`, `STARTED`, or `STOPPING` runs.

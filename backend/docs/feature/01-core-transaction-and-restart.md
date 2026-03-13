# Feature 01: Current Transaction, Restart, and Stop Semantics

## What is implemented today

IrisPipe now has a pipeline-level runtime model with snapshot-driven execution.
The public runtime surface is built around `PipelineRun`, while Spring Batch `JobExecution` remains an internal execution detail.

The current control loop is:

- `execute`
  - create a new `PipelineRun`
  - materialize the latest persisted pipeline config into a run snapshot
- `resume`
  - keep the same `PipelineRun`
  - create a new `PipelineRunExecution`
  - continue from the failed or stopped point using the existing snapshot
- `rerun`
  - create a brand new `PipelineRun`
  - copy the source run snapshot instead of reading the latest config
- `stop`
  - cooperatively stop the latest in-flight execution attempt
  - keep run lineage resumable

## Current transaction behavior

`atomicLevel` is implemented per pipeline job node:

- `JOB`
  - `CustomJobListener` opens one outer transaction for the whole Spring Batch job
  - success commits the whole job and then persists watermark updates
  - failure or stop rolls the job back
- `CHUNK`
  - Spring Batch chunk commit behavior is used directly
  - committed chunks remain durable if a later chunk fails or a stop request lands

This means IrisPipe now supports both whole-job atomicity and partial-commit chunk semantics in runtime, not only in config validation.

## Resume and rerun behavior

Resume and rerun are no longer theoretical restart ideas; they are part of the public runtime contract.

Resume:

- supports failed and stopped runs
- reuses the existing run snapshot
- skips upstream completed nodes as `SKIPPED`
- resumes from:
  - the failed `JOB` or `CHUNK` node
  - or the first `NOT_RUN` node if stop landed between jobs

Rerun:

- creates a new logical run
- preserves lineage through `rerun_from_pipeline_run_id`
- replays the source snapshot even if the persisted pipeline config has changed since the original run

## Stop behavior

Stop is cooperative rather than destructive.

Current behavior:

- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
- mark the latest execution as `STOPPING`
- request Spring Batch stop through `JobOperator.stop(...)`
- finalize the attempt as `STOPPED`
- mark downstream pending nodes as `NOT_RUN`

This keeps stop consistent with existing atomic semantics:

- stopped `JOB` work replays from the job boundary on resume
- stopped `CHUNK` work resumes from the batch checkpoint boundary

## Watermark behavior

Watermark persistence still follows execution success semantics:

- completed work persists watermark records
- rolled-back `JOB` attempts do not advance watermark state
- `CHUNK` progress persists only through successfully committed chunk work

The application database remains the owner of watermark persistence through `iris_watermark_record`.

## Remaining gaps

The current implementation still does not provide:

1. Full attempt history in the public detail API.
   The runtime model stores execution history internally, but detail responses still expose the latest execution projection only.

2. An explicit in-flight delete guard.
   Delete is lineage-aware, but there is not yet a dedicated rule blocking deletion of `STARTING`, `STARTED`, or `STOPPING` runs.

3. DAG-style orchestration.
   Runtime execution remains sequence-first rather than graph-scheduled.

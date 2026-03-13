# Design Patterns

## 1. Pipeline-First Public Boundary

IrisPipe now treats `PipelineRun` as the public runtime resource.

- External callers trigger and observe pipelines
- Internal runtime still executes Spring Batch jobs
- Spring Batch `JobExecution` is infrastructure detail, not the main public API resource

This keeps the product model aligned with the actual user mental model.

## 2. Sequence-First Orchestration

Pipeline execution is intentionally sequence-first.

- Each `SyncJobDefinition` becomes one ordered node
- The pipeline stops on the first non-completed node
- Resume continues from the first failed node

This is simpler than a full DAG while still leaving room for future graph expansion.

## 3. Snapshot-Driven Runtime

Every `PipelineRun` has an immutable runtime snapshot.

This solves two important problems:

- resume must not drift to the latest pipeline config
- rerun must replay the historical run definition instead of behaving like fresh execute

Current semantics:

- `execute` -> new run, new snapshot from latest config
- `resume` -> same run, existing snapshot
- `rerun` -> new run, copied snapshot from source run

## 4. Stable Internal Batch Identity

Spring Batch identity is stabilized explicitly:

- execution names are materialized before snapshot persistence
- step names are generated from stable execution identity, not only from step type
- job launch parameters use stable identifying keys for `CHUNK` restart

This reduces collision risk in:

- Spring Batch metadata
- watermark lookup
- restart lineage

## 5. Projection Plus History

Runtime persistence uses a mixed model:

- `PipelineRunExecution` and `PipelineRunExecutionJob`
  - full attempt history
- `PipelineRun` and `PipelineRunJob`
  - latest projection for efficient summary/detail reads

This keeps the public API simple without losing internal lineage.

## 6. Atomic Strategy per Job Node

`atomicLevel` is still a per-job concern:

- `JOB`
  - one outer transaction
  - resume strategy is replay
- `CHUNK`
  - native Spring Batch chunk commit
  - resume strategy is restart

The pipeline layer decides where to continue.
The job layer decides how that failed node should continue.

## 7. Listener-Driven Lifecycle

Runtime lifecycle updates are not owned by the trigger API path.

The pattern is:

- orchestration service creates runtime rows and launches work
- `CustomJobListener` reports actual batch transitions
- `PipelineRunLifecycleService` writes run and job status changes

This keeps sync and async trigger behavior consistent.

## 8. Cooperative Stop Control

Stop is now modeled as a cooperative control path instead of a destructive cancel.

The pattern combines:

- a public pipeline stop command
- lifecycle projection to `STOPPING`
- Spring Batch stop propagation through `JobOperator.stop(...)`
- sequence-first guards to prevent the next job from starting after a stop request
- lifecycle projection for final `STOPPED` state and downstream `NOT_RUN`

This keeps stop compatible with the existing runtime model:

- `execute` creates a new run
- `stop` interrupts the current attempt without deleting lineage
- `resume` continues the same run from the stopped point
- `rerun` still creates a new run from a copied snapshot

If stop lands between jobs, resume can continue from the first `NOT_RUN` node rather than requiring a failed node record.

# Error Handling

## 1. REST Exception Mapping

`GlobalExceptionHandler` is the current REST boundary mapper.

| Exception | HTTP status | Typical trigger |
| --- | --- | --- |
| `ResourceNotFoundException` | `400` | Missing pipeline or pipeline run |
| `ConfigValidationException` | `400` | Invalid pipeline structure or business rule |
| `IllegalArgumentException` | `400` | Invalid runtime request such as non-resumable run |
| `ConfigFileException` | `500` | File parsing, hashing, or provider infrastructure failure |

`CustomJobExecutionException` exists in the codebase but is not currently mapped in `GlobalExceptionHandler`.

## 2. Runtime Failure Behavior

Not every runtime failure becomes an HTTP 500.

For pipeline execution:

- request validation failures return `400`
- actual batch failures are usually persisted into runtime state:
  - `FAILED`
  - `STOPPED`
  - `ABANDONED`
  - `UNKNOWN`

The API usually returns a pipeline run summary or detail, and the caller observes failure through runtime status instead of a transport-level exception.

## 3. Resume, Rerun, and Stop Validation

Current validation examples:

- resume requires a terminal failed/stopped run
- resume requires an existing snapshot
- resume requires either a failed/stopped node or, for a stopped-between-jobs attempt, a first `NOT_RUN` node to continue from
- rerun requires the source run to exist
- stop requires the latest execution to be `STARTING`, `STARTED`, or `STOPPING`

These failures surface through `IllegalArgumentException` or `ResourceNotFoundException`, both mapped to `400`.

## 4. Transaction Scope and Failure Semantics

`atomicLevel` continues to control failure behavior per job node:

| Scope | Transaction boundary | Failure behavior |
| --- | --- | --- |
| `JOB` | Whole Spring Batch job | Entire job rolls back |
| `CHUNK` | Spring Batch chunk | Committed chunks remain, failed chunk rolls back |

Resume semantics are layered on top of this:

- `JOB` failure -> replay the failed job
- `CHUNK` failure -> restart the failed job instance

## 5. Lifecycle Projection on Failure

When a job fails or launch logic throws:

- `PipelineRunExecutionJob` is updated first
- `PipelineRunExecution` is updated next
- `PipelineRun` and `PipelineRunJob` latest projections are synchronized afterward
- downstream nodes in the same attempt become `NOT_RUN`

This makes latest summary/detail readable even when the batch execution failed mid-pipeline.

## 6. Cooperative Stop Semantics

Stop does not try to kill application threads or half-open JDBC work.
It requests a cooperative stop and callers observe the final state by polling summary/detail:

- request accepted -> latest attempt becomes `STOPPING`
- active batch execution is asked to stop through Spring Batch
- final runtime state becomes `STOPPED`
- downstream pending nodes in the stopped attempt become `NOT_RUN`

This keeps stop behavior consistent with `JOB` rollback semantics and `CHUNK` partial-commit semantics.

## 7. Current Gaps

### In-flight delete guard

Delete currently focuses on lineage cleanup.
A dedicated guard for deleting a `STARTING`, `STARTED`, or `STOPPING` run is still missing.

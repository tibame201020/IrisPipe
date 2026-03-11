# IrisPipe Next Stage Plan

## Current baseline

- Sync config files are managed under `config.accept-path` through `/api/v1/sync-config`.
- Jobs are executed through `POST /api/v1/sync-job`.
- Job metadata is queried through `GET /api/v1/sync-job?ids=...` and `GET /api/v1/sync-job/{jobId}`.
- Job metadata can be cleaned up through `DELETE /api/v1/sync-job/{jobId}`.
- Watermarks are persisted only after a job finishes successfully.
- The K6 suite now covers config CRUD, validation failure, successful execution, failed execution, no-watermark flow, multi-step flow, and a chunk-mode regression fixture.

## Gaps confirmed from the current code

1. `atomicLevel` is validated, but runtime behavior does not branch on it yet.
   `SyncJobFactory.createBatchJob()` always creates `CustomJobListener(..., true, ...)`, so all jobs still run with job-scoped transaction orchestration.

2. There is no restart API yet.
   The current sync-job API supports execute, summary lookup, detail lookup, and metadata deletion only.

3. Job definitions are still loaded directly from files at execution time.
   There is no persisted config snapshot or immutable config hash tied to a job execution.

4. The chunk-failure K6 case should be treated as a regression target for the next implementation stage.
   It documents the desired partial-commit semantics, but the runtime code still needs an explicit `JOB` versus `CHUNK` transaction split.

## Recommended implementation order

1. Make `atomicLevel` effective in the runtime.
   `JOB` should keep the current all-or-nothing listener-driven transaction model.
   `CHUNK` should stop opening the outer job transaction and rely on Spring Batch chunk commits only.

2. Define the restart contract after transaction mode is real.
   Decide whether restart is based only on Spring Batch metadata, or whether a stable config snapshot must also be stored.

3. Add an explicit restart API only after the previous two decisions land.
   The endpoint shape should be driven by the actual metadata model and not by old design notes.

4. Promote the K6 suite into CI once backend startup and test preconditions are standardized.
   The current scripts are suitable for local verification, but not yet a documented CI contract.

## Definition of done for the next stage

- `atomicLevel: JOB` and `atomicLevel: CHUNK` produce different, documented transaction behavior.
- Restart behavior is documented against a real API, not a planned one.
- K6 expectations match the runtime behavior for both job-level rollback and chunk-level partial commit.
- Architecture and feature documents are updated in the same change set as the implementation.

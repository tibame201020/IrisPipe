# Feature 01: Current Transaction Semantics and Restart Gap

## What is implemented today

IrisPipe currently executes every job through `SyncJobFactory` with a `CustomJobListener` that opens a destination-side transaction at the job boundary.

The practical effect is:

- multi-step jobs behave as one logical unit
- successful jobs commit and then persist watermarks
- failed jobs roll back and do not persist watermarks

This matches the current success and failure scenarios covered by the K6 suite.

## What the config already exposes

The config model already requires:

- `setting.atomicLevel`
- `JOB`
- `CHUNK`

However, that field is currently only validated.
The runtime does not branch on it yet, so `atomicLevel: CHUNK` should be treated as a planned behavior, not a finished feature.

## Watermark behavior

Watermarks are collected during step execution and persisted only after the whole job completes successfully.

This is the current contract:

- success advances watermark state
- failure leaves watermark state unchanged
- the application database owns watermark persistence through `iris_watermark_record`

## What is not implemented yet

The following items are still gaps between the config model and the runtime:

1. Real chunk-level transaction behavior.
   There is no `JOB` versus `CHUNK` split in `SyncJobFactory` yet.

2. A restart API.
   The backend currently exposes execute, summary, detail, and metadata deletion endpoints only.

3. Restart-safe config snapshotting.
   Jobs are reconstructed from the current file contents under `jobs/`, not from an immutable execution snapshot.

## Why this matters

The current docs should not claim any of the following as implemented:

- chunk-level partial commit as a runtime guarantee
- restart-from-execution APIs
- persisted job definition snapshots

Those remain next-stage work and are tracked in [../../plans/next_stage_plan.md](../../plans/next_stage_plan.md).

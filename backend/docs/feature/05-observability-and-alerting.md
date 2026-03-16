# Feature 05: Observability and Alerting

## Current state

The current implementation exposes a lightweight but usable observability surface:

- application logs
- Spring Batch metadata
- pipeline run summary and detail APIs
- ordered attempt timeline in pipeline run detail
- actuator health and metrics endpoints
- Prometheus scrape endpoint
- Micrometer counters, gauges, and timers derived from runtime lifecycle events
- persisted runtime tables for run, execution, and job projection
- K6 regression coverage for public runtime behavior

The main runtime metadata endpoints are:

- `GET /api/v1/sync-pipeline?ids=...`
- `GET /api/v1/sync-pipeline/{pipelineRunId}`

The management endpoints are:

- `GET /actuator/health`
- `GET /actuator/metrics`
- `GET /actuator/prometheus`

The control endpoints are also part of the operational surface because they change observable runtime state:

- `POST /api/v1/sync-pipeline`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`

## What operators can do today

With the current code, an operator or external platform can:

- start a new run
- poll latest status for known pipeline run ids
- inspect latest per-job status and step execution detail
- inspect ordered attempt history for a run across `INITIAL` and `RESUME` executions
- stop an in-flight run
- resume a failed or stopped run
- rerun a historical snapshot as a new run
- delete lineage after cleanup is safe
- scrape Prometheus-compatible metrics from the app

This is enough for basic operational workflows and external dashboards that poll the public runtime API.

## Current observability limits

The current code still does not provide:

- Grafana dashboards
- webhook or chat alert dispatch
- SLO-based alert rules
- custom health indicators for downstream systems
- tracing spans or distributed trace export

## Operational interpretation

Operators should treat the runtime API like this:

- summary endpoint
  - latest run status and timestamps
- detail endpoint
  - latest projected job state plus ordered attempt timeline with step execution detail
- actuator endpoints
  - health, metric discovery, and Prometheus scrape for runtime monitoring
- runtime tables
  - internal source of truth for lineage and execution attempts
- K6 suite
  - regression protection for execute, resume, rerun, stop, delete guard, attempt timeline, and observability smoke

## Recommended next steps

Any future observability design should start from the current runtime model:

1. derive metrics from `PipelineRun`, `PipelineRunExecution`, and `PipelineRunExecutionJob`
2. keep alerts aligned with pipeline-level state transitions instead of raw Spring Batch internals
3. add dashboards, alert rules, and custom health indicators on top of the current actuator and Prometheus surface

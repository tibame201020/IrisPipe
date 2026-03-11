# Feature 05: Observability and Alerting

## Current state

The current implementation exposes only a lightweight observability surface:

- application logs
- Spring Batch metadata
- sync-job summary and detail APIs
- K6 regression scripts for end-to-end verification

The main job metadata endpoints are:

- `GET /api/v1/sync-job?ids=...`
- `GET /api/v1/sync-job/{jobId}`

These replace the older `/api/v1/sync-job/executions` wording that appeared in earlier notes.

## What operators can do today

With the current code, an operator or external platform can:

- start a job
- fetch current status for known job ids
- inspect per-step execution details
- delete stored metadata when cleanup is needed

There is no built-in alert channel, metrics dashboard, or webhook dispatcher yet.

## What is still future work

The following items remain roadmap work, not shipped functionality:

- Micrometer and Prometheus metrics for record counts, latency, and failure rate
- Grafana dashboards
- Slack, Teams, email, or webhook notifications
- SLO-based alerts and retry automation

Any future observability design should use the current metadata APIs and current listener behavior as its starting point.

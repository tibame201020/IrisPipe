# Backend Extension Wishlist

This document is **not** the current backend contract.

Current truth still comes from the existing backend implementation under:

- `backend/src/main/java/irispipe/api`
- `backend/src/main/java/irispipe/model`
- `backend/src/main/resources`

This file exists to capture frontend-driven extension ideas that would improve the IrisPipe GUI without changing the current domain model.

## 1. Run Event Stream

### Why

The frontend can poll run detail, but it cannot update pipeline status or run transitions smoothly across explorer, runs, and run detail without repeated polling.

### Suggested input

- `pipelineId` optional
- `runId` optional
- workspace still comes from the existing request scope

### Suggested output

Server-sent events stream with events like:

```json
{
  "event": "run-status-changed",
  "pipelineId": 47,
  "runId": 93,
  "attemptId": 802,
  "status": "STARTED",
  "createdAt": [2026,3,19,22,48,46]
}
```

### Frontend gain

- no coarse 3-second polling loop for run detail
- explorer / runs / run detail stay synchronized
- pipeline family transitions feel continuous

## 2. Runtime Log Stream

### Why

The GUI can show attempts, jobs, and step counters, but it cannot narrate runtime progress or failures with actual execution logs.

### Suggested input

- `runId`
- optional `attemptId`
- optional `jobId`

### Suggested output

Append-only event stream or paged log API:

```json
{
  "timestamp": [2026,3,19,22,49,10],
  "level": "INFO",
  "scope": "STEP",
  "stepName": "k6_pipeline_control_job_b",
  "message": "readCount=217000 writeCount=217000"
}
```

### Frontend gain

- proper runtime console inside run detail
- clear failure explanation without guessing from status alone
- stronger demonstration of backend execution capability

## 3. Pipeline Summary Endpoint

### Why

`Overview` is currently limited to derived counts. A dedicated summary contract would let the frontend tell the backend story without inventing analytics.

### Suggested input

- no body
- optional folder scope later if useful

### Suggested output

```json
{
  "pipelineCount": 12,
  "folderCount": 6,
  "recentRunCount": 20,
  "activeRunCount": 2,
  "failedRunCount": 1
}
```

### Frontend gain

- overview becomes truthful and focused
- fewer derived counts assembled from unrelated endpoints

## 4. Run History Summary Shape

### Why

The current run history list is usable, but it lacks attempt-level summary metadata that would make the list more expressive without opening run detail.

### Suggested input

- `pipelineId`
- `limit`
- `beforeRunId`

### Suggested output

Extend each run summary item with:

- `attemptCount`
- `latestExecutionKind`
- `durationSeconds`
- `requestedAsync`

### Frontend gain

- runs list can show meaningful execution history
- less dependency on opening run detail for basic context

## 5. Config Validation Preview Endpoint

### Why

The frontend can validate obvious structural issues locally, but backend validation still owns the real truth for SQL parameter matching and execution-type-specific rules.

### Suggested input

Current `ConfigPipelineUpsertRequest` payload

### Suggested output

```json
{
  "valid": false,
  "issues": [
    {
      "jobName": "job_a",
      "executionName": "step_1",
      "message": "lost parameter config: startTime"
    }
  ]
}
```

### Frontend gain

- better pre-save feedback in config editor
- fewer blind submit/reject cycles

## 6. Lightweight Pipeline Rename / Move Endpoint

### Why

The current backend truth is full config update for rename or move. That is valid, but it couples explorer-level file operations to the full pipeline definition payload.

### Suggested input

- `pipelineId`
- `pipelineName`
- optional `folderId`

### Suggested output

Updated pipeline summary or detail

### Frontend gain

- explorer can support rename / move as genuine explorer actions
- config editor remains focused on job definition editing

## 7. Attempt-Scoped Job Detail Endpoint

### Why

Run detail already returns attempts and jobs, but a focused job-detail shape could support a richer side drawer without reloading the full run detail.

### Suggested input

- `runId`
- `attemptId`
- `jobId`

### Suggested output

- full job metadata
- step execution summaries
- optional latest runtime log excerpt later

### Frontend gain

- cheaper detail drawers
- more targeted updates during active runs

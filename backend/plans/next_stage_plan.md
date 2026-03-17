# Frontend V1 Polling Contract And API Model Checklist

## 0. Scope

This document defines the backend contract that the frontend can rely on for V1.

Included:
- folder tree and pipeline manager
- config CRUD and optional import
- pipeline trigger / stop / resume / rerun / delete
- run history / recent runs / run detail / attempts timeline
- workspace-scoped boundary
- health / metrics endpoints
- frontend polling strategy

Excluded:
- runtime log streaming
- SSE / WebSocket
- dashboard aggregate endpoint
- auth / RBAC / tenant membership
- dedicated platform service

Runtime log is intentionally excluded from this V1 contract. If added later, it should be treated as a separate event/log service concern rather than part of the core polling model.

---

## 1. Readiness Conclusion

Excluding runtime log streaming, the current backend is sufficient for a desktop-style frontend V1.

The frontend can already build:
- workspace bootstrap
- folder tree navigation
- pipeline list / detail / editor
- pipeline create / update / delete / import
- execute / stop / resume / rerun / delete-run
- recent activity
- run history
- run detail drawer
- attempts timeline
- job and step execution inspection
- delete preview confirmation dialogs

The main frontend integration task is now contract discipline, especially polling discipline.

---

## 2. Global Conventions

### 2.1 Workspace Scope

- Request header: `X-Iris-Workspace-Key`
- If omitted, backend falls back to `default`
- Desktop / Electron mode can rely on `default`
- Future platform layer can inject the workspace header

### 2.2 Root Folder Public Contract

- Hidden root row exists internally only
- Public root pipeline metadata is:
  - `folderId = null`
  - `folderPath = "/"`
- Top-level folders also hide hidden root parent:
  - `parentFolderId = null`

### 2.3 Async Control Request Field

The request field is still:

- `useAsyncLaucher`

Frontend V1 must keep using this exact field name for compatibility.

### 2.4 Error Semantics

- `400`
  - resource not found
  - illegal argument
  - invalid control transition
  - wrong workspace access to resource id
- `409`
  - uniqueness conflict
  - folder delete blocked by children
  - folder delete blocked by run history
  - pipeline delete blocked by run history

Frontend should not assume `404` for missing resources in this backend.

---

## 3. Frontend V1 Polling Contract

### 3.1 Polling Principles

- Poll only what the user is actively viewing
- Do not poll tree or config list in the background
- Poll run status only while the run is in-flight
- Stop polling immediately after terminal status
- Use slower polling when the app is not focused
- Add small jitter on the frontend to avoid synchronized bursts

### 3.2 App Bootstrap

Use:
- `GET /api/v1/workspaces/current`
- `GET /api/v1/pipeline-tree`

Policy:
- fetch once on app load
- refetch on workspace change
- no continuous polling

### 3.3 Folder Tree And Pipeline List

Use:
- `GET /api/v1/pipeline-tree`
- `GET /api/v1/sync-config`

Policy:
- no background polling
- refresh after:
  - folder create
  - folder rename
  - folder move
  - folder delete
  - pipeline create
  - pipeline update
  - pipeline import
  - pipeline delete

### 3.4 Recent Activity Panel

Use:
- `GET /api/v1/sync-pipeline/recent?limit=20`

Policy:
- foreground: every 5 seconds
- background / window hidden: every 20 seconds
- manual immediate refresh after execute / resume / rerun / stop

### 3.5 Pipeline History Panel

Use:
- `GET /api/v1/sync-pipeline?pipelineId={pipelineId}&limit=20`
- paginate with `beforeRunId`

Policy:
- fetch on page open
- no continuous polling by default
- refetch after execute / rerun on the same pipeline
- refetch after resume / stop on the selected run if history panel is visible

### 3.6 Active Run Summary Polling

Use:
- `GET /api/v1/sync-pipeline?ids={runId1}&ids={runId2}...`

Policy:
- only for runs currently visible in cards/tables
- every 2 seconds while any visible run is in-flight
- stop when all visible runs are terminal

This endpoint is the lightweight polling entry for list/card status refresh.

### 3.7 Run Detail Polling

Use:
- `GET /api/v1/sync-pipeline/{pipelineRunId}`

Policy:
- in-flight only:
  - `STARTING`
  - `STARTED`
  - `STOPPING`
- interval: every 1 second
- stop polling on:
  - `COMPLETED`
  - `FAILED`
  - `STOPPED`
  - `ABANDONED`
  - `UNKNOWN`

This is the frontend source of truth for:
- latest run status
- latest job projection
- attempts timeline
- step execution summary

### 3.8 Health Polling

Use:
- `GET /actuator/health`

Policy:
- every 30 seconds
- or on reconnect attempts after network failure

### 3.9 Metrics Polling

Optional for V1.

Use:
- `GET /actuator/prometheus`

Policy:
- only if frontend V1 includes a metrics panel
- every 15 to 30 seconds

There is no requirement to build a dashboard homepage in V1.

---

## 4. Confirmed API Models

## 4.1 Workspace APIs

### List workspaces

- `GET /api/v1/workspaces`

Response item:
- `id`
- `workspaceKey`
- `workspaceName`
- `systemDefault`

### Get current workspace

- `GET /api/v1/workspaces/current`

Response:
- `id`
- `workspaceKey`
- `workspaceName`
- `systemDefault`

### Create workspace

- `POST /api/v1/workspaces`

Request body:

```json
{
  "workspaceKey": "default",
  "workspaceName": "Default Workspace"
}
```

---

## 4.2 Folder Tree APIs

### Get tree

- `GET /api/v1/pipeline-tree`

Response:

```json
{
  "folders": [],
  "pipelines": []
}
```

`FolderTreeNodeInfo`:
- `id`
- `folderName`
- `folderPath`
- `folders`
- `pipelines`

`ConfigPipelineSummary`:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`

### Create folder

- `POST /api/v1/pipeline-folders`

Request body:

```json
{
  "parentFolderId": 123,
  "folderName": "daily"
}
```

Top-level folder:
- `parentFolderId = null`

Response:
- `id`
- `parentFolderId`
- `folderName`
- `folderPath`
- `systemRoot`

### Update folder

- `PUT /api/v1/pipeline-folders/{folderId}`

Request body:

```json
{
  "parentFolderId": 456,
  "folderName": "archive"
}
```

This is used for both rename and move.

### Delete preview

- `GET /api/v1/pipeline-folders/{folderId}/delete-preview?limit=100`

Response:
- `folderId`
- `folderName`
- `folderPath`
- `folderCount`
- `pipelineCount`
- `pipelinesWithRunHistory`
- `hasBlockers`
- `folders`
- `pipelines`
- `blockingPipelines`
- `truncated`

`folders[]` item:
- `id`
- `folderName`
- `folderPath`

`pipelines[]` item:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`
- `hasRunHistory`

### Delete folder

- `DELETE /api/v1/pipeline-folders/{folderId}`
- `DELETE /api/v1/pipeline-folders/{folderId}?recursive=true`

Rules:
- non-empty folder without `recursive=true` fails
- folder subtree containing pipeline run history fails
- root folder cannot be deleted

---

## 4.3 Config APIs

### List configs

- `GET /api/v1/sync-config`

Response item:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`

### Get config detail

- `GET /api/v1/sync-config/{pipelineId}`

Response:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`
- `jobs`

### Create config

- `POST /api/v1/sync-config`

Request body:

```json
{
  "folderId": 123,
  "pipelineName": "orders_sync",
  "jobs": []
}
```

Root pipeline:
- `folderId = null`

### Update config

- `PUT /api/v1/sync-config/{pipelineId}`

Request body is the same shape as create.

Used for:
- rename pipeline
- move pipeline
- replace jobs

### Patch config

- `PATCH /api/v1/sync-config/{pipelineId}`

Current backend behavior:
- same contract as `PUT`
- not JSON Merge Patch
- frontend V1 should treat it as optional and prefer `PUT`

### Delete config

- `DELETE /api/v1/sync-config/{pipelineId}`

If pipeline has run history:
- delete is blocked with `409`

---

## 4.4 Import APIs

### Import new config from file

- `POST /api/v1/sync-config/import`

Multipart fields:
- `folderId` optional
- `pipelineName`
- `format` optional
- `file`

### Replace config from file

- `PUT /api/v1/sync-config/{pipelineId}/import`

Multipart fields:
- `folderId` optional
- `pipelineName`
- `format` optional
- `file`

Rules:
- import is optional workflow only
- pipeline identity is still `pipelineId` / `folderId` / `pipelineName`
- if `format` is omitted, backend falls back to file extension

---

## 4.5 Run Control APIs

### Execute

- `POST /api/v1/sync-pipeline`

Request body:

```json
{
  "pipelineId": 123,
  "useAsyncLaucher": true
}
```

Response:
- `PipelineRunSummaryInfo`

### Resume

- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`

Request body:

```json
{
  "useAsyncLaucher": true
}
```

Response:
- `PipelineRunSummaryInfo`

### Rerun

- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`

Request body:

```json
{
  "useAsyncLaucher": true
}
```

Response:
- `PipelineRunSummaryInfo`

### Stop

- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`

Response:
- `PipelineRunSummaryInfo`

### Delete run

- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

Rules:
- in-flight delete is blocked
- only terminal run can be deleted

---

## 4.6 Run Browser APIs

### Ids lookup

- `GET /api/v1/sync-pipeline?ids=101&ids=102`

Rules:
- must not include `limit`
- must not include `beforeRunId`
- missing / wrong-workspace runs are simply omitted from the array

Use cases:
- active run card refresh
- targeted status refresh

### Pipeline history

- `GET /api/v1/sync-pipeline?pipelineId=123&limit=20&beforeRunId=456`

Rules:
- newest first
- `limit` range: `1..100`
- default `limit = 20`
- keyset pagination via `beforeRunId`

Use cases:
- pipeline history panel
- rerun lineage browsing

### Recent runs

- `GET /api/v1/sync-pipeline/recent?limit=20&beforeRunId=456`

Rules:
- newest first
- `limit` range: `1..100`
- default `limit = 20`

Use cases:
- recent activity panel
- landing view feed

### Run summary model

`PipelineRunSummaryInfo`:
- `id`
- `pipelineId`
- `folderId`
- `folderPath`
- `pipelineName`
- `status`
- `createdAt`
- `startTime`
- `endTime`

---

## 4.7 Run Detail API

### Get run detail

- `GET /api/v1/sync-pipeline/{pipelineRunId}`

`PipelineRunDetailInfo`:
- `id`
- `pipelineId`
- `folderId`
- `folderPath`
- `pipelineName`
- `requestedAsync`
- `status`
- `createdAt`
- `startTime`
- `endTime`
- `jobs`
- `attempts`

### Top-level jobs

Meaning:
- latest execution projection only

`PipelineRunJobInfo`:
- `id`
- `sequenceOrder`
- `jobName`
- `atomicLevel`
- `status`
- `rootJobInstanceId`
- `lastJobExecutionId`
- `createdAt`
- `startTime`
- `endTime`
- `stepExecutionInfos`

### Attempts timeline

`PipelineRunAttemptInfo`:
- `executionId`
- `executionNo`
- `executionKind`
- `status`
- `requestedAsync`
- `startTime`
- `endTime`
- `jobs`

Meaning:
- `INITIAL` is the first execution attempt
- `RESUME` adds another attempt under the same logical run
- `RERUN` creates a new logical run, not a new attempt under the old run

### Step execution summary

`StepExecutionInfo`:
- `id`
- `stepName`
- `status`
- `exitCode`
- `startTime`
- `endTime`
- `readCount`
- `writeCount`
- `commitCount`
- `rollbackCount`
- `filterCount`
- `readSkipCount`
- `writeSkipCount`
- `processSkipCount`
- `exitDescription`

Important:
- this is summary data
- this is not runtime log streaming

---

## 4.8 Health And Metrics

### Health

- `GET /actuator/health`

### Metrics catalog

- `GET /actuator/metrics`

### Prometheus

- `GET /actuator/prometheus`

These are available for optional ops-style UI panels, but not required for frontend V1.

---

## 5. V1 Screens That Can Be Designed Now

The frontend design phase can proceed with these screens:

- workspace switcher
- app shell
- folder tree sidebar
- pipeline list
- pipeline detail/editor
- create/edit/import dialogs
- delete preview dialog
- recent runs panel
- pipeline history panel
- run detail drawer
- attempts timeline
- job and step summary panel
- health status badge

Not included in this design phase:
- runtime live log console
- SSE log viewer
- platform dashboard homepage

---

## 6. Evidence Baseline

The backend contract above is already regression-covered by:

- `mvn -q -DskipTests compile`
- `powershell -ExecutionPolicy Bypass -File backend/k6/run-tests.ps1`

K6 currently covers:
- config CRUD
- folder tree
- import contract
- execute / stop / resume / rerun
- delete guard
- attempts timeline
- history browser
- recent runs
- observability smoke
- workspace isolation

This makes the current backend contract suitable as the frontend V1 source of truth, excluding runtime log streaming.

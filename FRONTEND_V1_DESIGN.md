# Frontend V1 Design

## 1. Goal

Build a desktop-oriented frontend V1 for IrisPipe on top of the current backend.

Frontend V1 includes:
- workspace bootstrap
- folder tree navigation
- pipeline manager
- pipeline editor
- pipeline import
- pipeline trigger and control
- recent run browsing
- pipeline history browsing
- run detail inspection
- attempt timeline inspection
- job and step execution summary inspection

Frontend V1 excludes:
- runtime live log streaming
- SSE / WebSocket log console
- dashboard aggregate homepage
- multi-user auth / RBAC
- tenant membership management

The current backend is already sufficient for this scope.

---

## 2. Recommended Frontend Stack

Use:
- Angular 20
- standalone application architecture
- TypeScript
- HTML templates
- CSS
- Tailwind CSS
- Angular application builder with Vite-powered dev/build flow

State model:
- `signal()` for local mutable state
- `computed()` for derived view state
- `model()` for controlled child state such as drawers, dialogs, editors, and selection models

Do not add at V1:
- NgRx
- global event bus
- custom websocket layer

Recommended supporting packages:
- `@angular/cdk`
- `@angular/router`
- `@angular/common/http`
- `tailwindcss`
- `lucide-angular` or `@ng-icons/*` for icons

---

## 3. UI Library Recommendation

### Recommended Choice

Use:
- Angular CDK
- Tailwind CSS
- custom application components

Reason:
- best fit for a modern desktop UI without inheriting a heavy enterprise visual language
- good primitives for dialog, overlay, menu, drag-drop, focus management, and tree behavior
- keeps visual identity fully under project control
- avoids fighting a component library theme system later

Recommended component strategy:
- build app-level components in `ui/`
- use CDK primitives for:
  - overlay
  - dialog
  - menu
  - drag-drop
  - tree
  - a11y / focus trap

### Alternative A

Use:
- Angular Material
- Tailwind CSS

Pros:
- fastest path for stable dialogs, forms, menus, tabs, tables

Cons:
- visual language is harder to make feel distinct
- easier to end up with a generic admin UI

### Alternative B

Use:
- PrimeNG
- Tailwind CSS

Pros:
- rich data widgets quickly
- strong table/tree coverage

Cons:
- heavier dependency surface
- visual consistency usually requires more override work
- less desirable if the product should feel bespoke

### Recommendation Summary

Recommended:
- Angular CDK + Tailwind + custom components

Fallback if speed matters more than visual identity:
- Angular Material + Tailwind

---

## 4. Information Architecture

## 4.1 Main Screens

1. Workspace bootstrap
2. App shell
3. Folder tree sidebar
4. Pipeline list
5. Pipeline editor page
6. Create / rename / move / delete dialogs
7. Import dialog
8. Recent runs panel
9. Pipeline history panel
10. Run detail drawer
11. Attempt timeline panel
12. Job and step summary panel
13. Health badge

## 4.2 Suggested Route Map

- `/`
  - boot and redirect to default workspace view
- `/workspaces/:workspaceKey/pipelines`
  - tree + list + recent panel
- `/workspaces/:workspaceKey/pipelines/:pipelineId`
  - editor + history
- `/workspaces/:workspaceKey/runs/:pipelineRunId`
  - run detail focus route

Desktop mode can still default to `workspaceKey = "default"` when no explicit workspace switcher is shown.

---

## 5. Layout Proposal

## 5.1 App Shell

Three-column layout:
- left: workspace switcher + folder tree
- center: pipeline list or pipeline editor
- right: recent activity or run detail drawer

## 5.2 Pipeline List View

Show:
- folder breadcrumb
- pipeline cards or compact table
- quick actions:
  - execute
  - edit
  - import replace
  - delete

## 5.3 Pipeline Editor View

Show:
- pipeline identity:
  - `pipelineName`
  - `folderPath`
- job list
- job detail editor
- execution step editor
- save / import replace / delete actions

## 5.4 Run Detail View

Show:
- run summary header
- current status
- attempts timeline
- latest jobs panel
- selected attempt jobs panel
- step execution summary table

This page is not a live log console. It is a structured runtime inspector.

---

## 6. Frontend State Strategy

## 6.1 State Layers

### App shell state

Use signals for:
- current workspace
- selected folder
- selected pipeline
- selected run
- sidebar collapse state
- current polling mode

### Feature state

Use feature services with signals for:
- tree data
- pipeline list
- pipeline detail/editor state
- recent runs
- pipeline history
- run detail

### Derived state

Use `computed()` for:
- visible breadcrumbs
- current folder pipelines
- selected run is in-flight
- whether polling should be active
- action button enable/disable state
- dialog summaries

### Controlled child state

Use `model()` for:
- drawer open/close
- dialog open/close
- selected attempt
- selected job node
- selected folder node

## 6.2 Store Guidance

Do not introduce NgRx at V1.

Use:
- one facade service per screen/domain
- Angular signals as the state container
- explicit refresh methods after mutations

This backend does not require a heavier store yet.

---

## 7. Frontend V1 Polling Contract

## 7.1 Principles

- poll only visible data
- do not poll tree or config list in the background
- poll run status only while a run is in-flight
- stop polling immediately on terminal state
- slow polling when the app is not focused
- add jitter to avoid synchronized client bursts

## 7.2 Polling Matrix

### App bootstrap

Endpoints:
- `GET /api/v1/workspaces/current`
- `GET /api/v1/pipeline-tree`

Policy:
- fetch once on load
- refetch on workspace switch
- no continuous polling

### Folder tree and config list

Endpoints:
- `GET /api/v1/pipeline-tree`
- `GET /api/v1/sync-config`

Policy:
- no background polling
- refresh only after mutation:
  - folder create
  - folder rename
  - folder move
  - folder delete
  - pipeline create
  - pipeline update
  - pipeline import
  - pipeline delete

### Recent activity

Endpoint:
- `GET /api/v1/sync-pipeline/recent?limit=20`

Policy:
- foreground: every 5 seconds
- background: every 20 seconds
- immediate refresh after execute / stop / resume / rerun

### Pipeline history

Endpoint:
- `GET /api/v1/sync-pipeline?pipelineId={pipelineId}&limit=20`

Policy:
- fetch on screen open
- no continuous polling by default
- refetch after execute / rerun on same pipeline
- refetch after stop / resume if the history panel is visible

### Active run status cards

Endpoint:
- `GET /api/v1/sync-pipeline?ids={runId1}&ids={runId2}...`

Policy:
- only for currently visible run cards
- every 2 seconds while any visible run is in-flight
- stop when all visible runs are terminal

### Run detail

Endpoint:
- `GET /api/v1/sync-pipeline/{pipelineRunId}`

Policy:
- poll only when status is:
  - `STARTING`
  - `STARTED`
  - `STOPPING`
- interval: every 1 second
- stop on:
  - `COMPLETED`
  - `FAILED`
  - `STOPPED`
  - `ABANDONED`
  - `UNKNOWN`

### Health

Endpoint:
- `GET /actuator/health`

Policy:
- every 30 seconds
- or on reconnect attempt

### Metrics

Optional at V1.

Endpoint:
- `GET /actuator/prometheus`

Policy:
- only if an ops panel exists
- every 15 to 30 seconds

---

## 8. Backend Contract For Frontend Integration

## 8.1 Global Conventions

### Workspace Header

Header:
- `X-Iris-Workspace-Key`

Fallback:
- `default`

### Root Contract

Public root pipeline metadata:
- `folderId = null`
- `folderPath = "/"`

Top-level folder metadata:
- `parentFolderId = null`

### Async Control Field

Still required exactly as:
- `useAsyncLaucher`

### Error Semantics

Frontend should assume:
- `400`
  - resource not found
  - wrong workspace access
  - invalid argument
  - invalid control transition
- `409`
  - uniqueness conflict
  - delete blocked by children
  - delete blocked by run history

Do not assume `404` for missing resources.

---

## 8.2 Workspace APIs

### `GET /api/v1/workspaces`

Response item:
- `id`
- `workspaceKey`
- `workspaceName`
- `systemDefault`

### `GET /api/v1/workspaces/current`

Response:
- `id`
- `workspaceKey`
- `workspaceName`
- `systemDefault`

### `POST /api/v1/workspaces`

Request:

```json
{
  "workspaceKey": "default",
  "workspaceName": "Default Workspace"
}
```

---

## 8.3 Folder APIs

### `GET /api/v1/pipeline-tree`

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

### `POST /api/v1/pipeline-folders`

Request:

```json
{
  "parentFolderId": 123,
  "folderName": "daily"
}
```

Response:
- `id`
- `parentFolderId`
- `folderName`
- `folderPath`
- `systemRoot`

### `PUT /api/v1/pipeline-folders/{folderId}`

Request:

```json
{
  "parentFolderId": 456,
  "folderName": "archive"
}
```

Used for:
- rename
- move

### `GET /api/v1/pipeline-folders/{folderId}/delete-preview?limit=100`

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

`folders[]`:
- `id`
- `folderName`
- `folderPath`

`pipelines[]`:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`
- `hasRunHistory`

### `DELETE /api/v1/pipeline-folders/{folderId}`
### `DELETE /api/v1/pipeline-folders/{folderId}?recursive=true`

Rules:
- recursive delete is explicit
- subtree with run history is blocked
- root cannot be deleted

---

## 8.4 Config APIs

### `GET /api/v1/sync-config`

Response item:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`

### `GET /api/v1/sync-config/{pipelineId}`

Response:
- `id`
- `folderId`
- `folderPath`
- `pipelineName`
- `jobs`

### `POST /api/v1/sync-config`

Request:

```json
{
  "folderId": 123,
  "pipelineName": "orders_sync",
  "jobs": []
}
```

### `PUT /api/v1/sync-config/{pipelineId}`

Same request shape as create.

Used for:
- rename pipeline
- move pipeline
- replace jobs

### `PATCH /api/v1/sync-config/{pipelineId}`

Current behavior:
- same contract as `PUT`
- not merge patch

Frontend V1 should prefer `PUT`.

### `DELETE /api/v1/sync-config/{pipelineId}`

If run history exists:
- delete is blocked with `409`

---

## 8.5 Import APIs

### `POST /api/v1/sync-config/import`
### `PUT /api/v1/sync-config/{pipelineId}/import`

Multipart fields:
- `folderId` optional
- `pipelineName`
- `format` optional
- `file`

Rules:
- import is optional workflow only
- identity remains `pipelineId` / `folderId` / `pipelineName`
- if `format` is omitted, backend falls back to file extension

---

## 8.6 Run Control APIs

### `POST /api/v1/sync-pipeline`

Request:

```json
{
  "pipelineId": 123,
  "useAsyncLaucher": true
}
```

Response:
- `PipelineRunSummaryInfo`

### `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
### `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`

Request:

```json
{
  "useAsyncLaucher": true
}
```

Response:
- `PipelineRunSummaryInfo`

### `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`

Response:
- `PipelineRunSummaryInfo`

### `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

Rules:
- in-flight delete is blocked
- only terminal runs can be deleted

---

## 8.7 Run Browser APIs

### `GET /api/v1/sync-pipeline?ids=101&ids=102`

Use for:
- visible run status refresh

Rules:
- cannot mix with `pipelineId`
- `limit` and `beforeRunId` are not allowed
- wrong-workspace or missing runs are omitted from the array

### `GET /api/v1/sync-pipeline?pipelineId=123&limit=20&beforeRunId=456`

Use for:
- pipeline history

Rules:
- newest first
- `limit` range: `1..100`
- default `20`
- keyset pagination with `beforeRunId`

### `GET /api/v1/sync-pipeline/recent?limit=20&beforeRunId=456`

Use for:
- recent activity

Rules:
- newest first
- `limit` range: `1..100`
- default `20`

`PipelineRunSummaryInfo` fields:
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

## 8.8 Run Detail API

### `GET /api/v1/sync-pipeline/{pipelineRunId}`

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
- `RERUN` creates a new logical run

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

This is summary data, not live log data.

---

## 9. Suggested Frontend Module Structure

Suggested app structure:

```text
src/
  app/
    app.config.ts
    app.routes.ts
    core/
      api/
      authless-workspace/
      layout/
      polling/
      ui/
    features/
      workspace/
      pipeline-tree/
      pipeline-list/
      pipeline-editor/
      pipeline-import/
      recent-runs/
      pipeline-history/
      run-detail/
    shared/
      models/
      utils/
      icons/
```

Service split:
- `WorkspaceApiService`
- `PipelineTreeApiService`
- `SyncConfigApiService`
- `SyncPipelineApiService`
- `HealthApiService`

Facade split:
- `WorkspaceFacade`
- `TreeFacade`
- `PipelineListFacade`
- `PipelineEditorFacade`
- `RecentRunsFacade`
- `RunDetailFacade`

---

## 10. Design Constraints For The UI Phase

Use the backend as-is for V1.

Do not block the frontend design phase on:
- runtime live log
- SSE
- aggregate dashboard endpoint
- auth
- platform service

Frontend design should assume:
- recent activity exists
- run detail exists
- attempts timeline exists
- tree/config manager exists
- workspace boundary exists

This is enough to start wireframes and component-level visual design.

---

## 11. Evidence Baseline

The backend contract used by this design is already covered by:
- `mvn -q -DskipTests compile`
- `powershell -ExecutionPolicy Bypass -File backend/k6/run-tests.ps1`

Regression evidence currently covers:
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

This is the current frontend source of truth, excluding runtime log streaming.

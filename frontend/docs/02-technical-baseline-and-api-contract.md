# Frontend V1 Technical Baseline And API Contract

## 1. Document Role

This file is not the app shell source of truth.

Use [README.md](README.md) as the entry point.
Use [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md) for:

- app shell layout
- screen responsibilities
- primary route model
- ASCII UI sketches

This file only defines:

- technical stack
- state strategy
- polling contract
- backend integration contract
- module structure guidance

Locked interaction decisions:

- UI library:
  - Angular CDK + Tailwind + custom components
- Config editor:
  - form-based editor
- Visual direction:
  - Clean Productivity
- Tree interaction:
  - context menu
  - inline rename
  - no drag and drop in V1
  - no multi-select in V1
- Run control UX:
  - control actions stay in the right inspector
  - execute on pipeline selection
  - stop, resume, rerun, delete-run on run selection
  - delete-pipeline stays in editor or context menu
  - destructive actions use custom confirm dialogs
  - do not use native browser or OS alert/confirm UI
- Delivery target:
  - web-first
  - keep the structure Electron-compatible later
- Feedback UX:
  - skeleton for page loading
  - spinner for local actions
  - toast for mutation success
  - inline validation errors
  - inline conflict messaging for domain errors such as `409`
  - persistent shell warning for backend unavailable
  - explicit empty states instead of blank panels
- Layout rule:
  - full-viewport shell
  - no page-level vertical scrolling in normal app usage
  - overflowing content scrolls inside its own panel
- Job card layout:
  - A1: Section Stack Card
- Step card layout:
  - S2: one expanded step, others collapsed
- Connection editing:
  - C1: inline fields inside the job card
- Run inspector layout:
  - R1: stacked inspector sections
- Attempts timeline density:
  - T2: medium detail rows
- Latest jobs density:
  - J2: medium detail rows
- Step summary presentation:
  - SUI3: selected-job steps only

## 2. Goal And Scope

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

## 3. Recommended Frontend Stack

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

## 4. UI Library Recommendation

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

Selected for Frontend V1:
- Angular CDK + Tailwind + custom components

## 5. Frontend State Strategy

## 5.1 State Layers

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

## 5.2 Store Guidance

Do not introduce NgRx at V1.

Use:
- one facade service per screen/domain
- Angular signals as the state container
- explicit refresh methods after mutations

This backend does not require a heavier store yet.

---

## 6. Frontend V1 Polling Contract

## 6.1 Principles

- poll only visible data
- do not poll tree or config list in the background
- poll run status only while a run is in-flight
- stop polling immediately on terminal state
- slow polling when the app is not focused
- add jitter to avoid synchronized client bursts

## 6.2 Polling Matrix

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

## 7. Backend Contract For Frontend Integration

## 7.1 Global Conventions

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

## 7.2 Workspace APIs

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

## 7.3 Folder APIs

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

## 7.4 Config APIs

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

## 7.5 Import APIs

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

## 7.6 Run Control APIs

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

## 7.7 Run Browser APIs

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

## 7.8 Run Detail API

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

## 8. Suggested Frontend Module Structure

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

Delivery note:

- Frontend V1 targets web first.
- Do not introduce Electron-specific shell code into core feature modules.
- Keep API, polling, state, and UI modules portable so Electron can wrap them later.
- Treat the shell as a full-height application surface rather than a document page.

---

## 9. Design Constraints For The UI Phase

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

## 10. Feedback And Interaction Baseline

### Loading

- use skeletons for page-level loading
- use spinners for local action loading such as button submits or panel refresh

### Success

- use toast notifications for successful mutations
- do not use blocking success dialogs

### Error

- use inline validation messages for form errors
- use inline contextual messaging for domain conflicts such as `409`
- use toast for action failures such as invalid control transitions

### Empty State

- each primary screen should define an explicit empty state
- do not leave major panels visually blank

### Backend Unavailable

- show a persistent warning in the shell or status bar
- avoid repeated blocking dialogs while connectivity is degraded

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

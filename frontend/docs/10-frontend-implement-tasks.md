# Frontend Implement Tasks

## Purpose

This document tracks frontend V1 implementation progress.

It follows the decisions already locked in:

- [README.md](README.md)
- [09-angular-app-scaffold-plan.md](09-angular-app-scaffold-plan.md)

Implementation order for the current phase is:

- `contract-first`
- `mock-assisted`
- `integration-early`

This means:

- shared models and typed API contracts should be completed before feature pages depend on them
- mock data can speed up page implementation, but it should live at facade or page level
- `core/api` remains the real HTTP contract layer and should not be replaced by mock-first runtime wiring

Status markers:

- `[x]` done
- `[-]` in progress
- `[ ]` not started

## 1. Foundation

- [x] Create Angular 20 standalone project under `frontend/`
- [x] Keep design docs under `frontend/docs/`
- [x] Add frontend-local `.gitignore`
- [x] Install Angular dependencies
- [x] Install Tailwind dependencies
- [x] Add token and theme CSS entry points
- [x] Verify project builds

## 2. App Shell

- [x] Create full-viewport shell layout
- [x] Create shell header placeholder
- [x] Create shell sidebar placeholder
- [x] Create right inspector placeholder
- [x] Create shell status bar placeholder
- [x] Keep shell regions independently scrollable
- [ ] Add responsive collapse strategy for narrower widths

## 3. Routing

- [x] Add route scaffold for:
  - `/recent`
  - `/folders/:folderId`
  - `/pipelines/:pipelineId`
  - `/pipelines/:pipelineId/config`
  - `/pipelines/:pipelineId/runs`
  - `/runs/:pipelineRunId`
- [x] Ensure all routes render inside the stable app shell
- [x] Add route-driven selection sync for folder and pipeline context

## 4. Data Contracts

- [x] Add frontend models for:
  - workspace
  - tree
  - health
- [x] Add frontend models for:
  - config summary/detail
  - config request payloads
  - folder CRUD / delete preview
  - run summary
  - run detail
  - attempts
  - jobs
  - step summaries
  - run request payloads
- [ ] Add mapping helpers where raw backend payload should be normalized
- [ ] Keep mock fixtures aligned with typed frontend contracts

## 5. Core Integration

- [x] Add `app-environment` baseline
- [x] Add API service skeletons
- [x] Add facade skeletons
- [x] Wire `WorkspaceApiService` into `WorkspaceFacade`
- [x] Wire `PipelineTreeApiService` into `TreeFacade`
- [x] Wire `HealthApiService` into `HealthFacade`
- [x] Type `SyncConfigApiService` against shared models
- [x] Type `SyncPipelineApiService` against shared models
- [x] Wire `SyncPipelineApiService` into `RunDetailFacade`

## 6. Shared UI

- [x] Add `StatusChip`
- [x] Add `AppEmptyState`
- [x] Add `AppConfirmDialog`
- [x] Add `AppSkeleton`
- [ ] Add reusable page toolbar component
- [ ] Add reusable page tabs component
- [ ] Add reusable list row action component

## 7. Folder View

- [x] Add folder view placeholder page
- [x] Load real folder tree / selected folder data
- [x] Render real subfolders and pipelines
- [x] Add create folder flow
- [x] Add create pipeline flow
- [x] Add import pipeline flow
- [x] Add row context menu
- [x] Add inline rename behavior

## 8. Recent Activity

- [x] Add recent activity placeholder page
- [x] Load real recent runs from backend
- [x] Add polling contract implementation
- [x] Add row-to-inspector selection sync
- [x] Add load-more pagination

## 9. Pipeline History

- [x] Add pipeline history placeholder page
- [x] Load real history for selected pipeline
- [x] Add refresh behavior after control actions
- [x] Add row-to-inspector selection sync
- [x] Add load-more pagination

## 10. Run Inspector

- [x] Add inspector placeholder sections
- [x] Add status chip integration
- [x] Add route-driven run focus bridge
- [x] Load real run detail payload
- [x] Render attempts timeline from payload
- [x] Render latest jobs from payload
- [x] Render selected-job step summary from payload
- [x] Implement active-run polling start/stop logic
- [x] Wire stop / resume / rerun / delete actions
- [x] Add confirm dialog flow for destructive run delete

## 11. Pipeline Overview

- [x] Add overview placeholder page
- [x] Load selected pipeline summary
- [x] Load recent runs preview
- [x] Wire execute action
- [x] Sync run selection into inspector

## 12. Config Editor

- [x] Add Option A skeleton
- [x] Add job outline placeholder
- [x] Add section-stack job card placeholder
- [x] Add selected-step area placeholder
- [x] Load real config payload
- [x] Bind selected job state
- [x] Bind selected step accordion state
- [x] Implement save flow
- [x] Implement import-replace flow
- [x] Implement delete pipeline flow with custom confirm dialog
- [x] Add inline validation rendering

## 13. Tree And Selection Sync

- [x] Sync sidebar tree with current route
- [x] Sync selecting a pipeline row to route navigation
- [x] Sync selecting a recent/history row to run route
- [ ] Keep inspector stable across page transitions

## 14. Feedback And State UX

- [ ] Add skeleton loading states for pages
- [x] Add local action spinners
- [x] Add toast service and container
- [x] Add shell-level backend unavailable warning
- [ ] Add explicit empty states for all pages
- [ ] Add inline conflict handling for `400` / `409`

## 15. Styling Pass

- [x] Add global token baseline
- [ ] Apply selected spacing and typography rules consistently
- [ ] Apply status color mapping consistently
- [ ] Normalize button hierarchy across pages
- [ ] Normalize row density across folder/recent/history pages
- [ ] Refine inspector section spacing

## 16. Validation Pass

- [x] `npm run build`
- [ ] `npm test`
- [x] connect to live backend and verify:
  - workspace/current
  - pipeline tree
  - pipeline config detail
  - recent runs
  - pipeline history
  - run detail
- [ ] manual shell scroll verification
- [ ] manual route transition verification

## 17. Playwright E2E

- [x] Add Playwright dependencies and config
- [x] Add backend/frontend web server orchestration for E2E
- [x] Add backend seed/reset helpers for tests
- [x] Add shell bootstrap smoke test
- [x] Add tree rendering smoke test
- [x] Add route navigation smoke test
- [x] Add folder view and tree selection sync test
- [x] Add folder create and pipeline import test
- [x] Add starter pipeline create test
- [x] Add recent activity data render test
- [x] Add pipeline history data render test
- [x] Add pipeline overview data and execute test
- [x] Add pipeline config editor save/import/delete test
- [x] Add run control stop/resume/rerun/delete test
- [x] Add run inspector data render test
- [x] Add CI-friendly Chromium test run

## 18. Deferred

These are intentionally out of scope for the current V1 tracking pass:

- runtime log streaming
- dashboard aggregate page
- settings / secret management
- drag and drop move
- global search
- Electron wrapper

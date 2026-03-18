# Frontend Implement Tasks

## Purpose

This document tracks frontend V1 implementation progress.

It follows the decisions already locked in:

- [README.md](README.md)
- [09-angular-app-scaffold-plan.md](09-angular-app-scaffold-plan.md)

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
- [ ] Add route-driven selection sync for folder and pipeline context

## 4. Core Integration

- [x] Add `app-environment` baseline
- [x] Add API service skeletons
- [x] Add facade skeletons
- [ ] Wire `WorkspaceApiService` into `WorkspaceFacade`
- [ ] Wire `PipelineTreeApiService` into `TreeFacade`
- [ ] Wire `HealthApiService` into `HealthFacade`
- [ ] Wire `SyncPipelineApiService` into `RunDetailFacade`

## 5. Shared UI

- [x] Add `StatusChip`
- [x] Add `AppEmptyState`
- [x] Add `AppConfirmDialog`
- [x] Add `AppSkeleton`
- [ ] Add reusable page toolbar component
- [ ] Add reusable page tabs component
- [ ] Add reusable list row action component

## 6. Folder View

- [x] Add folder view placeholder page
- [ ] Load real folder tree / selected folder data
- [ ] Render real subfolders and pipelines
- [ ] Add create folder flow
- [ ] Add create pipeline flow
- [ ] Add import pipeline flow
- [ ] Add row context menu
- [ ] Add inline rename behavior

## 7. Recent Activity

- [x] Add recent activity placeholder page
- [ ] Load real recent runs from backend
- [ ] Add polling contract implementation
- [ ] Add row-to-inspector selection sync
- [ ] Add load-more pagination

## 8. Pipeline History

- [x] Add pipeline history placeholder page
- [ ] Load real history for selected pipeline
- [ ] Add refresh behavior after control actions
- [ ] Add row-to-inspector selection sync
- [ ] Add load-more pagination

## 9. Run Inspector

- [x] Add inspector placeholder sections
- [x] Add status chip integration
- [x] Add route-driven run focus bridge
- [ ] Load real run detail payload
- [ ] Render attempts timeline from payload
- [ ] Render latest jobs from payload
- [ ] Render selected-job step summary from payload
- [ ] Implement active-run polling start/stop logic
- [ ] Wire stop / resume / rerun / delete actions
- [ ] Add confirm dialog flow for destructive run delete

## 10. Pipeline Overview

- [x] Add overview placeholder page
- [ ] Load selected pipeline summary
- [ ] Load recent runs preview
- [ ] Wire execute action
- [ ] Sync run selection into inspector

## 11. Config Editor

- [x] Add Option A skeleton
- [x] Add job outline placeholder
- [x] Add section-stack job card placeholder
- [x] Add selected-step area placeholder
- [ ] Load real config payload
- [ ] Bind selected job state
- [ ] Bind selected step accordion state
- [ ] Implement save flow
- [ ] Implement import-replace flow
- [ ] Implement delete pipeline flow with custom confirm dialog
- [ ] Add inline validation rendering

## 12. Tree And Selection Sync

- [ ] Sync sidebar tree with current route
- [ ] Sync selecting a pipeline row to route navigation
- [ ] Sync selecting a recent/history row to run route
- [ ] Keep inspector stable across page transitions

## 13. Feedback And State UX

- [ ] Add skeleton loading states for pages
- [ ] Add local action spinners
- [ ] Add toast service and container
- [ ] Add shell-level backend unavailable warning
- [ ] Add explicit empty states for all pages
- [ ] Add inline conflict handling for `400` / `409`

## 14. Styling Pass

- [x] Add global token baseline
- [ ] Apply selected spacing and typography rules consistently
- [ ] Apply status color mapping consistently
- [ ] Normalize button hierarchy across pages
- [ ] Normalize row density across folder/recent/history pages
- [ ] Refine inspector section spacing

## 15. Data Contracts

- [ ] Add frontend models for:
  - workspace
  - tree
  - config summary/detail
  - run summary
  - run detail
  - attempts
  - jobs
  - step summaries
- [ ] Add mapping helpers where raw backend payload should be normalized

## 16. Validation Pass

- [x] `npm run build`
- [ ] `npm test`
- [ ] connect to live backend and verify:
  - workspace/current
  - pipeline tree
  - recent runs
  - pipeline history
  - run detail
- [ ] manual shell scroll verification
- [ ] manual route transition verification

## 17. Deferred

These are intentionally out of scope for the current V1 tracking pass:

- runtime log streaming
- dashboard aggregate page
- settings / secret management
- drag and drop move
- global search
- Electron wrapper

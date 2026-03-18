# Changelog

All notable frontend changes are documented in this file.

Use [docs/README.md](docs/README.md) as the frontend design and implementation entry point.

## [Folder Actions Slice] - 2026-03-18

### Added
- **Folder Action E2E Coverage**: Added Playwright coverage for creating a child folder from the folder view and importing a pipeline config into the selected folder through the UI.
- **Folder API Client**: Added a dedicated frontend folder API client for folder create operations instead of overloading the tree read service.

### Changed
- **Folder View Actions**: Added `New Folder` and `Import Pipeline` flows to the folder view, including custom in-app dialogs, live tree refresh, and route transitions into the created folder or imported pipeline.
- **Sync Config API Client**: Added typed pipeline import-create support so the frontend can create pipeline configs through the existing backend import contract.
- **Implementation Tracker**: Updated [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) to mark folder create and import flows as complete while leaving `create pipeline` open because the current backend contract still requires a non-empty job payload.

### Verified
- **Frontend Build Validation**: Re-ran `npm run build`.
- **Playwright Validation**: Re-ran `npm run e2e`; the frontend suite now passes `14/14`, including the new folder create and pipeline import scenarios.

## [Run Control Slice] - 2026-03-18

### Added
- **Run Control E2E Coverage**: Added Playwright coverage for real stop/resume control on an active run and for rerun/delete control on terminal runs through the shared inspector.
- **Playwright Run-Control Helpers**: Added backend test helpers for run-status polling and for deterministic stop/resume fixture preparation based on the existing backend stop-job scenario.

### Changed
- **Run Inspector Actions**: Replaced placeholder control buttons with real `stop`, `resume`, `rerun`, and `delete run` actions wired to the backend pipeline control API through `RunDetailFacade`.
- **Delete Run Confirm Flow**: Added a custom confirm dialog for destructive run deletion inside the inspector instead of relying on browser-native confirm behavior.
- **Control State Rules**: Bound action availability to backend-supported status rules so stop, resume, and delete only enable for statuses the backend actually accepts.
- **Implementation Tracker**: Updated [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) to mark the run inspector control slice and its Playwright coverage as complete.

### Verified
- **Frontend Build Validation**: The existing `npm run build` validation remains green for the run-control app changes.
- **Playwright Validation**: Re-ran `npm run e2e`; the frontend suite now passes `13/13`, including stop/resume/rerun/delete inspector control flows.

## [Config Editor Slice] - 2026-03-18

### Added
- **Config Editor E2E Coverage**: Added Playwright coverage for real config loading, job and step selection binding, save persistence, import-replace flow, and custom-confirm delete flow.

### Changed
- **Config Editor Page**: Replaced the config-editor placeholder with a real form-based editor that loads backend config detail, binds selected job and selected step state, renders inline validation, and supports save, import-replace, and delete actions.
- **Sync Config API Client**: Added typed update, import-replace, and delete operations so the frontend config editor can mutate pipeline definitions through the same shared HTTP contract layer as the rest of the app.
- **Implementation Tracker**: Updated [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) to mark the config editor slice as complete and to record live-backend verification for pipeline config detail.

### Verified
- **Frontend Build Validation**: Re-ran `npm run build`.
- **Playwright Validation**: Re-ran `npm run e2e`; the frontend suite now passes `11/11`, including the new config editor save/import/delete scenarios.

## [Folder View And Tree Selection Slice] - 2026-03-18

### Added
- **Folder View E2E Coverage**: Added Playwright coverage for selected folder rendering, child folder rendering, pipeline row rendering, and route-driven tree selection sync through the shell status bar.

### Changed
- **Folder View Page**: Replaced the folder-view placeholder with a real workspace-tree-backed folder content view that renders the selected folder path, child folders, and contained pipelines.
- **Route-Driven Tree Selection**: Added route-to-selection synchronization in the shell so folder and pipeline routes now project into shared tree selection state instead of relying only on link highlighting.
- **Shell Status Context**: Expanded the status bar with selected folder and selected pipeline state so current route context is visible and testable across page transitions.
- **Implementation Tracker**: Updated [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) to mark the folder view and tree-selection slice as complete.

### Verified
- **Frontend Build Validation**: Re-ran `npm run build`.
- **Playwright Validation**: Re-ran `npm run e2e`; the frontend suite now passes `9/9`, including the new folder view and selection sync scenario.

## [Pipeline Overview Slice] - 2026-03-18

### Added
- **Pipeline Overview E2E Coverage**: Added Playwright coverage for real pipeline overview rendering, recent run preview rendering, preview-to-inspector navigation, and execute-to-run navigation.

### Changed
- **Pipeline Overview Page**: Replaced the overview placeholder with real config summary loading, recent run preview loading, route-safe tab links, and a working execute action against the backend pipeline control API.
- **Sync Pipeline API Client**: Added typed pipeline execute support to the frontend API layer so overview and later control flows can create logical runs through the same shared contract client.
- **Implementation Tracker**: Updated [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) to mark the pipeline overview slice as complete.

### Verified
- **Frontend Build Validation**: Re-ran `npm run build`.
- **Playwright Validation**: Re-ran `npm run e2e`; the frontend suite now passes `8/8`, including the new pipeline overview real-data and execute flow scenario.

## [Run Data Integration Slice] - 2026-03-18

### Added
- **Typed Runtime Contracts**: Added comprehensive frontend contract models for sync config and sync pipeline payloads, including pipeline config detail, folder delete preview, run summary/detail, attempts, jobs, and step summaries.
- **Runtime Date Formatting Support**: Added shared date/time formatting utilities that handle the backend's actual `LocalDateTime` JSON shape, including numeric-array payloads surfaced by Spring/Jackson.
- **Run Data Playwright Coverage**: Added Playwright E2E scenarios for recent activity, pipeline history, and run inspector, together with runtime table seed helpers and pipeline execution helpers.

### Changed
- **Recent Activity**: Replaced placeholder recent-run rows with real backend data, refresh behavior, polling, and route navigation into `/runs/:pipelineRunId`.
- **Pipeline History**: Replaced placeholder history rows with real per-pipeline run history, tab-safe route links, refresh behavior, and route navigation into `/runs/:pipelineRunId`.
- **Run Inspector and Focus Route**: Replaced placeholder runtime sections with real run detail payload rendering for attempts, latest jobs, focused job step summaries, and active-run polling.
- **API Typing Baseline**: Typed `SyncConfigApiService` and `SyncPipelineApiService` against shared frontend models instead of using untyped object payloads.
- **Implementation Tracker**: Updated [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) to reflect the completed contract and run-data slice.

### Verified
- **Frontend Build Validation**: Re-ran `npm run build`.
- **Playwright Validation**: Re-ran `npm run e2e`; the frontend suite now passes `7/7`, including shell bootstrap, tree rendering, route navigation, recent activity, pipeline history, and run inspector flows.

## [Frontend V1 Foundation] - 2026-03-18

### Added
- **Design Baseline and Wireframes**: Added frontend design documents under [docs/](docs/) covering the application shell, screen responsibilities, config editor wireframes, run inspector wireframes, folder/history/recent views, visual style rules, design tokens, Angular scaffold planning, implementation tasks, and Playwright rollout planning.
- **Angular Application Shell**: Added an Angular 20 standalone frontend scaffold with Tailwind styling, application routing, shell layout, placeholder feature pages, and shared UI token/theme files.
- **Local Integration Baseline**: Added frontend proxy configuration, a frontend Dockerfile, nginx runtime configuration, and relative API base handling so the frontend can run against the backend in both local dev and Docker Compose modes.
- **Core Shell Integration**: Added typed models and facade wiring for current workspace, pipeline tree, and backend health so the shell header, sidebar, and status bar render real backend state instead of placeholders.
- **Playwright Baseline**: Added Playwright configuration, backend test-support helpers, seed fixtures, and initial E2E coverage for shell bootstrap, sidebar tree rendering, and route navigation.

### Changed
- **Documentation Entry Structure**: Consolidated frontend planning documents under [docs/](docs/) and reduced [README.md](README.md) to a lightweight entry pointer.
- **Development Server Contract**: Set the frontend default dev port to `4205` and standardized local API access through Angular dev proxy rather than hard-coded cross-origin URLs.
- **Implementation Tracking**: Added [docs/10-frontend-implement-tasks.md](docs/10-frontend-implement-tasks.md) as the frontend V1 progress tracker and aligned it with the committed scaffold and shell integration state.

### Verified
- **Frontend Build Validation**: Validated the Angular frontend with `npm run build`.
- **Playwright Validation**: Validated the Playwright baseline with `npm run e2e`, covering shell bootstrap, sidebar tree rendering, and primary route navigation.

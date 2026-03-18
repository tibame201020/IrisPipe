# Angular App Scaffold Plan

## Purpose

This document defines the first practical scaffold for the frontend application.

It is not a feature implementation document.
It answers:

- how the Angular app should be structured
- what files should exist first
- what should be built first
- what should explicitly wait

The goal is to produce a stable V1 foundation for the selected desktop-first UI.

## 1. Stack Baseline

Use:

- Angular 20
- standalone application setup
- TypeScript
- Angular Router
- Angular HttpClient
- Angular CDK
- Tailwind CSS
- custom application components

Do not introduce initially:

- NgRx
- SSR
- Electron shell code
- component library theme frameworks

## 2. Initial Project Shape

Recommended top-level structure:

```text
frontend-app/
  package.json
  angular.json
  tsconfig.json
  public/
  src/
    index.html
    main.ts
    styles.css
    app/
      app.config.ts
      app.routes.ts
      app.component.ts
      core/
      features/
      shared/
```

This keeps the shell conventional while reserving clear domain boundaries inside `app/`.

## 3. App Folder Structure

Recommended structure:

```text
src/
  app/
    app.component.ts
    app.config.ts
    app.routes.ts
    core/
      api/
      config/
      layout/
      polling/
      state/
      ui/
    features/
      workspace/
      pipeline-tree/
      folder-view/
      pipeline-overview/
      pipeline-editor/
      pipeline-history/
      recent-runs/
      run-detail/
    shared/
      components/
      models/
      pipes/
      utils/
      constants/
```

## 4. Core Layer Responsibilities

### `core/api`

Thin HTTP services only.

Recommended files:

```text
core/api/
  workspace-api.service.ts
  pipeline-tree-api.service.ts
  sync-config-api.service.ts
  sync-pipeline-api.service.ts
  health-api.service.ts
  api-base.ts
```

Rules:

- no UI state here
- no polling timers here
- map HTTP request/response only

### `core/config`

App-wide configuration and environment mapping.

Recommended files:

```text
core/config/
  app-environment.ts
  app-runtime-config.ts
  api-url.builder.ts
```

Responsibilities:

- backend base URL
- workspace header strategy
- polling defaults

### `core/layout`

Shell components only.

Recommended files:

```text
core/layout/
  app-shell/
    app-shell.ts
  shell-header/
    shell-header.ts
  shell-sidebar/
    shell-sidebar.ts
  shell-status-bar/
    shell-status-bar.ts
  run-inspector/
    run-inspector.ts
```

### `core/polling`

Polling orchestration utilities.

Recommended files:

```text
core/polling/
  polling-policy.ts
  polling-runner.ts
  visibility-aware-polling.ts
```

Rules:

- centralize interval behavior
- use one shared pattern for jitter, visibility slowdown, and stop conditions

### `core/state`

Global facades and cross-screen state.

Recommended files:

```text
core/state/
  workspace.facade.ts
  tree.facade.ts
  run-detail.facade.ts
  health.facade.ts
```

## 5. Feature Layer Responsibilities

### `features/workspace`

Bootstrapping current workspace and workspace display behavior.

### `features/pipeline-tree`

Tree rendering helpers and tree-specific UI state.

### `features/folder-view`

Folder page rows, toolbar, and mutations.

### `features/pipeline-overview`

Overview page and recent runs preview for one pipeline.

### `features/pipeline-editor`

Config editor, job outline, job card, step card, and save/import/delete flow.

### `features/pipeline-history`

History table and pagination for one pipeline.

### `features/recent-runs`

Recent activity table and polling behavior.

### `features/run-detail`

Inspector subcomponents:

- summary
- control
- attempts
- latest jobs
- selected-job step summary

## 6. Shared Layer Responsibilities

### `shared/components`

Reusable UI pieces that are not domain-specific.

Examples:

- buttons
- status chips
- empty states
- skeleton blocks
- confirm dialog shell
- page section containers

### `shared/models`

Frontend-facing interfaces and mappers for backend payloads.

Examples:

- workspace models
- tree models
- config models
- run summary models
- run detail models

### `shared/constants`

Stable view constants only.

Examples:

- route fragments
- status label mappings
- view-local page sizes

Do not move business logic here.

## 7. Recommended First File Set

The first scaffold pass should create these files before any feature polish:

```text
src/app/app.ts
src/app/app.config.ts
src/app/app.routes.ts
src/app/core/config/app-environment.ts
src/app/core/layout/app-shell/app-shell.ts
src/app/core/layout/shell-header/shell-header.ts
src/app/core/layout/shell-sidebar/shell-sidebar.ts
src/app/core/layout/run-inspector/run-inspector.ts
src/app/core/layout/shell-status-bar/shell-status-bar.ts
src/app/core/api/workspace-api.service.ts
src/app/core/api/pipeline-tree-api.service.ts
src/app/core/api/sync-config-api.service.ts
src/app/core/api/sync-pipeline-api.service.ts
src/app/core/api/health-api.service.ts
src/app/core/state/workspace.facade.ts
src/app/core/state/tree.facade.ts
src/app/core/state/run-detail.facade.ts
src/app/core/state/health.facade.ts
src/app/features/folder-view/folder-view-page/folder-view-page.ts
src/app/features/pipeline-overview/pipeline-overview-page/pipeline-overview-page.ts
src/app/features/pipeline-editor/pipeline-config-editor-page/pipeline-config-editor-page.ts
src/app/features/pipeline-history/pipeline-history-page/pipeline-history-page.ts
src/app/features/recent-runs/recent-activity-page/recent-activity-page.ts
src/app/features/run-detail/run-detail-focus-page/run-detail-focus-page.ts
src/app/shared/components/status-chip/status-chip.ts
src/app/shared/components/app-confirm-dialog/app-confirm-dialog.ts
src/app/shared/components/app-empty-state/app-empty-state.ts
src/app/shared/components/app-skeleton/app-skeleton.ts
```

## 8. Route Scaffold

Initial route shape:

```text
/
/folders/:folderId
/pipelines/:pipelineId
/pipelines/:pipelineId/config
/pipelines/:pipelineId/runs
/runs/:pipelineRunId
/recent
```

Implementation rule:

- all routes render inside `AppShellComponent`
- the shell should not be recreated per route

## 9. State Model

Use signals and facades.

Recommended ownership:

```text
WorkspaceFacade
  -> current workspace

TreeFacade
  -> pipeline tree
  -> selected folder
  -> selected pipeline

RunDetailFacade
  -> selected run
  -> run detail payload
  -> active polling lifecycle

HealthFacade
  -> backend health badge
```

Feature-local state remains inside feature facades or page components.

## 10. Implementation Order

### Phase 1: App shell

Build:

- app shell
- header
- sidebar
- main outlet
- right inspector shell
- status bar

Do not style deeply yet.

### Phase 2: Core integration

Build:

- environment config
- API services
- workspace facade
- tree facade
- health facade

Goal:

- load workspace
- load tree
- show shell-level health

### Phase 3: Static page scaffolds

Build empty or placeholder versions of:

- folder view
- pipeline overview
- config editor
- pipeline history
- recent activity
- run detail focus route

Goal:

- validate routing and shell composition

### Phase 4: Real data pages

Implement in this order:

1. folder view
2. recent activity
3. pipeline history
4. run inspector
5. pipeline overview
6. config editor

This order gets navigation and runtime visibility working early.

### Phase 5: Editor interactions

Implement:

- job outline selection
- job form editing
- step expand/collapse
- save
- import replace
- delete pipeline

### Phase 6: Polish

Implement:

- loading states
- empty states
- toasts
- confirm dialogs
- inline validation

## 11. What Should Wait

Do not build these in the first scaffold pass:

- drag and drop move
- global search system
- saved filter model
- theme switching
- runtime log viewer
- dashboard aggregate page
- Electron-specific APIs

## 12. Styling Integration Plan

Use:

- global CSS variables for design tokens
- Tailwind utility classes mapped to semantic token usage

Recommended early files:

```text
src/styles.css
src/app/core/ui/theme.css
src/app/core/ui/tokens.css
```

Rules:

- tokens first
- component styles second
- page-level styling last

## 13. Practical Success Criteria

The scaffold is successful when:

- shell renders full viewport correctly
- left sidebar, main region, and right inspector are independently scrollable
- tree data loads
- recent activity loads
- pipeline history loads
- selecting a run hydrates the right inspector
- no page depends on browser-page scrolling during normal use

## 14. Next Step After Scaffold

After this scaffold exists, the next engineering document should be:

- actual Angular file creation checklist
- or direct implementation in the frontend app

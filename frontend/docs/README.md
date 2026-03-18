# Frontend Design Docs

## Purpose

This folder holds the frontend design baseline for IrisPipe desktop GUI work.

The design is based on backend functionality that already exists today.
It does not assume runtime log streaming, dashboard summary APIs, or settings management.

## Reading Order

Use this file as the entry point.

1. [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md)
   Source of truth for app shell, screen responsibilities, primary routes, and ASCII layouts.
2. [02-technical-baseline-and-api-contract.md](02-technical-baseline-and-api-contract.md)
   Technical baseline, state strategy, polling contract, and backend API contract.
3. [03-config-editor-wireframe-options.md](03-config-editor-wireframe-options.md)
   Detailed ASCII options for the form-based config editor layout.
4. [04-run-detail-and-inspector-wireframe-options.md](04-run-detail-and-inspector-wireframe-options.md)
   Detailed ASCII options for run detail and the right inspector layout.
5. [05-folder-recent-history-wireframes.md](05-folder-recent-history-wireframes.md)
   Selected V1 wireframes for folder view, recent activity, and pipeline history.
6. [06-component-and-information-architecture.md](06-component-and-information-architecture.md)
   Frontend component layering, page composition, and information ownership.
7. [07-visual-style-rules.md](07-visual-style-rules.md)
   Visual direction, design tokens, and component styling rules for the selected V1 UI.
8. [08-design-tokens-and-component-style-map.md](08-design-tokens-and-component-style-map.md)
   Concrete color, type, spacing, and component token baseline for implementation.
9. [09-angular-app-scaffold-plan.md](09-angular-app-scaffold-plan.md)
   Angular project scaffold plan, folder structure, and implementation order.
10. [10-frontend-implement-tasks.md](10-frontend-implement-tasks.md)
   Implementation tracking checklist for frontend V1.
11. [11-playwright-e2e-plan.md](11-playwright-e2e-plan.md)
   Playwright baseline, test architecture, and rollout plan for frontend V1.

## Primary Shell Sketch

```text
+--------------------------------------------------------------------------------------------------+
| IrisPipe                                                                 [workspace] [health]     |
+--------------------------------------------------------------------------------------------------+
| LEFT SIDEBAR              | MAIN WORKAREA                                  | RIGHT INSPECTOR      |
|---------------------------|------------------------------------------------|----------------------|
| Search pipeline...        | Breadcrumb: /root/orders                       | Selected Context     |
|                           |------------------------------------------------|----------------------|
| Workspace                 | Toolbar: [New Folder] [New Pipeline] [Import] | Pipeline / Run Info  |
| - default                 |          [Refresh]                             |                      |
|                           |                                                | Control              |
| Folder Tree               | Content Area                                   | [Execute] [Stop]     |
| /                         |                                                | [Resume] [Rerun]     |
| |- orders                 | 1. folder view                                |                      |
| |  |- sync-order          | 2. pipeline config editor                     | Latest Status        |
| |  |- sync-refund         | 3. pipeline run history                       | Attempts Timeline    |
| |- inventory              | 4. recent activity                            | Jobs / Step summary  |
| |  |- sync-stock          |                                                |                      |
+--------------------------------------------------------------------------------------------------+
| Status bar: polling | backend health | workspace | selected pipeline/run                       |
+--------------------------------------------------------------------------------------------------+
```

## Documents

- [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md)
  Desktop-first shell, screen responsibilities, route model, and backend API alignment.
- [02-technical-baseline-and-api-contract.md](02-technical-baseline-and-api-contract.md)
  Frontend stack, state model, polling contract, and backend integration contract.
- [03-config-editor-wireframe-options.md](03-config-editor-wireframe-options.md)
  Detailed config editor options with ASCII wireframes and tradeoffs.
- [04-run-detail-and-inspector-wireframe-options.md](04-run-detail-and-inspector-wireframe-options.md)
  Detailed run detail and right inspector options with ASCII wireframes and tradeoffs.
- [05-folder-recent-history-wireframes.md](05-folder-recent-history-wireframes.md)
  Selected V1 list-style wireframes for folder view, recent activity, and pipeline history.
- [06-component-and-information-architecture.md](06-component-and-information-architecture.md)
  Component map, screen composition, and state ownership for the selected V1 design.
- [07-visual-style-rules.md](07-visual-style-rules.md)
  Visual style baseline for a clean, crisp, simple, and explicit desktop UI.
- [08-design-tokens-and-component-style-map.md](08-design-tokens-and-component-style-map.md)
  Concrete design tokens and component style mappings for Angular + Tailwind implementation.
- [09-angular-app-scaffold-plan.md](09-angular-app-scaffold-plan.md)
  Practical scaffold plan for the Angular 20 standalone application.
- [10-frontend-implement-tasks.md](10-frontend-implement-tasks.md)
  Progress tracker for frontend V1 implementation slices.
- [11-playwright-e2e-plan.md](11-playwright-e2e-plan.md)
  Playwright E2E strategy, modular test structure, and rollout plan.

## Current Scope

- desktop-first operator console
- folder tree navigation
- pipeline config management
- pipeline run control
- pipeline run inspection

## Locked Decisions

- UI library baseline:
  - Angular CDK + Tailwind + custom components
- Config editor mode:
  - form-based editor
- Visual direction:
  - Clean Productivity
- Tree interaction baseline:
  - context menu
  - inline rename
  - no drag and drop in V1
  - no multi-select in V1
- Run control baseline:
  - control actions stay in the right inspector
  - execute on pipeline selection
  - stop, resume, rerun, delete-run on run selection
  - destructive actions use custom confirm dialogs
  - do not use native browser or OS alert/confirm UI
- Delivery target:
  - web-first
  - keep the structure Electron-compatible later
- Feedback baseline:
  - skeleton for page loading
  - spinner for local actions
  - toast for mutation success
  - inline validation and conflict messaging
  - persistent shell warning for backend unavailable
  - explicit empty states
- Config editor layout:
  - Option A: Split Master-Detail Editor
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
- Layout rule:
  - full-viewport shell
  - no page-level vertical scrolling in normal app usage
  - overflowing content scrolls inside its own panel

## Deferred

- runtime log streaming
- dashboard aggregate summary
- settings and secret management

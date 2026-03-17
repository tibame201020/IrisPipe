# Frontend Design Docs

## Purpose

This folder holds the frontend design baseline for IrisPipe desktop GUI work.

The design is based on backend functionality that already exists today.
It does not assume runtime log streaming, dashboard summary APIs, or settings management.

## Reading Order

Use this file as the entry point.

1. [01-app-shell-and-screen-map.md](C:\Users\16\Downloads\codes\IrisPipe\frontend\01-app-shell-and-screen-map.md)
   Source of truth for app shell, screen responsibilities, primary routes, and ASCII layouts.
2. [02-technical-baseline-and-api-contract.md](C:\Users\16\Downloads\codes\IrisPipe\frontend\02-technical-baseline-and-api-contract.md)
   Technical baseline, state strategy, polling contract, and backend API contract.

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

- [01-app-shell-and-screen-map.md](C:\Users\16\Downloads\codes\IrisPipe\frontend\01-app-shell-and-screen-map.md)
  Desktop-first shell, screen responsibilities, route model, and backend API alignment.
- [02-technical-baseline-and-api-contract.md](C:\Users\16\Downloads\codes\IrisPipe\frontend\02-technical-baseline-and-api-contract.md)
  Frontend stack, state model, polling contract, and backend integration contract.

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

## Deferred

- runtime log streaming
- dashboard aggregate summary
- settings and secret management

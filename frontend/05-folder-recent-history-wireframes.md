# Folder, Recent Activity, And Pipeline History Wireframes

## Purpose

This document defines the selected V1 wireframes for:

- folder view
- recent activity
- pipeline history

These are treated as direct V1 layouts rather than option sets.

The shell baseline is already defined by:

- [README.md](README.md)
- [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md)

The runtime inspector baseline is already defined by:

- [04-run-detail-and-inspector-wireframe-options.md](04-run-detail-and-inspector-wireframe-options.md)

## Shared Rules

- these screens live inside the full-viewport app shell
- the browser page itself should not become the main scroll container
- center workarea panels scroll internally when content is long
- the left sidebar and right inspector remain stable
- visual direction remains `Clean Productivity`
- list rows should stay medium-density, not dashboard-wall dense and not oversized card lists

## 1. Folder View

Route:

- `/folders/:folderId`

Purpose:

- browse one folder
- create folders
- create pipelines
- import pipelines
- select a pipeline to inspect or edit

## Selected Layout

```text
+--------------------------------------------------------------------------------------------------+
| Breadcrumb: /orders                                                              [Refresh]       |
|----------------------------------------------------------------------------------+---------------|
| Folder: orders                                                   2 folders / 5 pipelines         |
| Actions: [New Folder] [New Pipeline] [Import]                                       [More v]     |
+--------------------------------------------------------------------------------------------------+
| SUBFOLDERS                                                                                        |
|--------------------------------------------------------------------------------------------------|
| refunds                                                       3 items                [Open]       |
| archived                                                      8 items                [Open]       |
+--------------------------------------------------------------------------------------------------+
| PIPELINES                                                                                         |
|--------------------------------------------------------------------------------------------------|
| sync-order                    updated recently                          [Execute] [Open] [v]     |
| sync-refund                   updated recently                          [Execute] [Open] [v]     |
| sync-cancel                   updated recently                          [Execute] [Open] [v]     |
+--------------------------------------------------------------------------------------------------+
```

## Interaction Notes

- `Subfolders` and `Pipelines` are separate scrollable sections inside the center workarea
- row click selects the item
- row secondary action menu supports rename, move, delete
- `Execute` stays available as a quick action on pipeline rows
- destructive actions still go through custom confirm dialogs

## Why This Layout

- clearer than a card grid
- more compact for desktop use
- fits the selected tree and inspector model
- easy to extend later with badges or metadata without redesigning the page

## 2. Recent Activity

Route:

- `/recent`

Purpose:

- provide a lightweight operational landing page
- surface recent runs in the current workspace
- allow quick selection of a run into the right inspector

## Selected Layout

```text
+--------------------------------------------------------------------------------------------------+
| Recent Activity                                                                 [Refresh]         |
|----------------------------------------------------------------------------------+---------------|
| Polling: active every 5s                                     Workspace: default                    |
+--------------------------------------------------------------------------------------------------+
| RUN                          STATUS       PIPELINE         START         END         ACTION       |
|--------------------------------------------------------------------------------------------------|
| #184                         STARTED      sync-order       10:32         now         [Inspect]    |
| #183                         COMPLETED    sync-stock       09:10         09:12       [Inspect]    |
| #182                         FAILED       sync-refund      08:41         08:44       [Inspect]    |
| #181                         STOPPED      sync-order       08:10         08:11       [Inspect]    |
+--------------------------------------------------------------------------------------------------+
| [Load More]                                                                                      |
+--------------------------------------------------------------------------------------------------+
```

## Interaction Notes

- this view uses polling according to the contract already defined in [02-technical-baseline-and-api-contract.md](02-technical-baseline-and-api-contract.md)
- `Inspect` selects the run and syncs the right inspector
- row click should behave the same as `Inspect`
- `Load More` is explicit cursor-based pagination, not infinite scroll

## Why This Layout

- works well with the existing `recent` endpoint
- easy to scan by status and pipeline name
- keeps the page practical even without a future dashboard summary API

## 3. Pipeline History

Route:

- `/pipelines/:pipelineId/runs`

Purpose:

- browse all runs for one pipeline
- compare outcomes over time
- select one run for detailed inspection

## Selected Layout

```text
+--------------------------------------------------------------------------------------------------+
| Pipeline: sync-order                                                           [Execute]         |
| Folder: /orders                                                                [Refresh]         |
| Tabs: [Overview] [Config] [Runs*]                                                               |
+--------------------------------------------------------------------------------------------------+
| RUN      STATUS       ATTEMPTS    START         END           REQUESTED ASYNC      ACTION        |
|--------------------------------------------------------------------------------------------------|
| #184     STARTED      2           10:32         now           true                 [Inspect]     |
| #183     COMPLETED    1           09:10         09:12         true                 [Inspect]     |
| #182     FAILED       1           08:41         08:44         false                [Inspect]     |
| #181     STOPPED      2           08:10         08:11         true                 [Inspect]     |
+--------------------------------------------------------------------------------------------------+
| [Load More]                                                                                      |
+--------------------------------------------------------------------------------------------------+
```

## Interaction Notes

- page fetches on open and refreshes after execute, rerun, stop, or resume when appropriate
- no continuous background polling by default
- `Inspect` selects the run in the right inspector
- attempts count should map from the `attempts` array length when detail is available, or a summary field once available

## Why This Layout

- best fit for a history browser built on the current backend
- keeps comparison easy across many runs
- avoids overcomplicating the page with nested attempts inline

## Row Density Principle

These three screens should use the same row-height family:

- one primary line
- one compact secondary metadata line only when needed
- action buttons aligned to the far right

This keeps the app visually coherent with:

- config editor Option A
- inspector Option R1
- `Clean Productivity`

## Deferred Additions

These are intentionally deferred and should not change the current layout baseline:

- richer status badges
- saved filters
- search chips
- dashboard summary widgets
- runtime log surfaces

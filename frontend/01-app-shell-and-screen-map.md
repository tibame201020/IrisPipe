# Frontend V1 App Shell And Screen Map

## Scope

This document defines the first frontend shell and screen model based only on backend capabilities that already exist.

Excluded from the first shell design:

- runtime log streaming
- dashboard summary API
- settings or secret management

Those can be added later without changing the core shell model.

## Product Direction

Frontend V1 is desktop-first.
The UI should feel like a local operator console, not a marketing website and not a route-heavy admin panel.

Selected visual direction:

- Clean Productivity
- calm desktop-tool feeling
- clear hierarchy without heavy enterprise density
- structured surfaces rather than monitoring-wall aesthetics

The shell should optimize for:

- pipeline tree navigation
- config editing
- runtime control
- run inspection

## Main Layout

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

## Shell Principles

### Left Sidebar

Always visible.

Responsibilities:

- current workspace display
- folder tree
- pipeline selection
- lightweight search or filter
- context menu actions
- inline rename

V1 tree interaction rules:

- use context menu for folder and pipeline actions
- support inline rename
- do not support drag and drop move
- do not support multi-select

This is the primary navigation surface.

### Main Workarea

Owns the current working page.

Possible page modes:

- folder view
- pipeline overview
- pipeline config editor
- pipeline run history
- recent activity

This is where most reading and editing happens.

### Right Inspector

Always visible when a pipeline or run is selected.

Responsibilities:

- selected pipeline summary
- selected run summary
- control actions
- latest status
- attempts timeline
- latest job and step summary

V1 run control rules:

- show `Execute` when a pipeline is selected
- show `Stop`, `Resume`, `Rerun`, and `Delete Run` when a run is selected
- keep `Delete Pipeline` in the config editor or context menu
- `Stop`, `Resume`, `Rerun`, and `Execute` execute directly
- `Delete Run`, `Delete Pipeline`, and `Delete Folder` require custom confirm dialogs
- do not use native browser `alert()` or `confirm()` flows

This avoids forcing users to open modal dialogs for routine runtime operations.

## Primary Screen Model

## 1. Folder View

Used when a folder node is selected.

Center area:

```text
+----------------------------------------------------------------------------------+
| Breadcrumb: /orders                                                              |
| [New Folder] [New Pipeline] [Import] [Refresh]                                   |
|----------------------------------------------------------------------------------|
| Subfolders                                                                       |
| - refunds                                                                        |
| - archived                                                                       |
|                                                                                  |
| Pipelines                                                                        |
| - sync-order                                                                     |
| - sync-refund                                                                    |
+----------------------------------------------------------------------------------+
```

Responsibilities:

- show child folders
- show child pipelines
- create folder
- create pipeline
- import pipeline

Backend alignment:

- `GET /api/v1/pipeline-tree`
- `POST /api/v1/pipeline-folders`
- `POST /api/v1/sync-config`
- `POST /api/v1/sync-config/import`

## 2. Pipeline Overview

Used when a pipeline node is selected.

Center area:

```text
+----------------------------------------------------------------------------------+
| Pipeline: sync-order                                                             |
| Folder: /orders                                                                  |
|----------------------------------------------------------------------------------|
| Tabs: [Overview] [Config] [Runs]                                                 |
|----------------------------------------------------------------------------------|
| Recent Runs                                                                      |
| - #184 STARTED                                                                   |
| - #183 COMPLETED                                                                 |
| - #182 FAILED                                                                    |
+----------------------------------------------------------------------------------+
```

Responsibilities:

- show pipeline identity
- show recent runs for this pipeline
- entry point into config editor and run history

Backend alignment:

- `GET /api/v1/sync-config/{pipelineId}`
- `GET /api/v1/sync-pipeline?pipelineId=...&limit=...`

## 3. Pipeline Config Editor

Used to edit one pipeline definition.

Center area:

```text
+----------------------------------------------------------------------------------+
| Pipeline: sync-order                                                             |
| Tabs: [Overview] [Config] [Runs]                                                 |
|----------------------------------------------------------------------------------|
| Name:   [ sync-order                                                         ]   |
| Folder: [ /orders                                                            ]   |
|----------------------------------------------------------------------------------|
| Jobs                                                                             |
| [Job 1: extract-order]                                                           |
| [Job 2: upsert-order ]                                                           |
|----------------------------------------------------------------------------------|
| [Save] [Import Replace] [Delete Pipeline]                                        |
+----------------------------------------------------------------------------------+
```

Responsibilities:

- edit pipeline metadata
- edit jobs and execution structure
- replace by JSON body
- replace by import
- delete pipeline when allowed

Backend alignment:

- `GET /api/v1/sync-config/{pipelineId}`
- `PUT /api/v1/sync-config/{pipelineId}`
- `PATCH /api/v1/sync-config/{pipelineId}`
- `PUT /api/v1/sync-config/{pipelineId}/import`
- `DELETE /api/v1/sync-config/{pipelineId}`

## 4. Pipeline Run History

Used to browse past runs for one pipeline.

Center area:

```text
+----------------------------------------------------------------------------------+
| Pipeline: sync-order                                                             |
| Tabs: [Overview] [Config] [Runs]                                                 |
|----------------------------------------------------------------------------------|
| #184 STARTED    10:32                                                            |
| #183 COMPLETED  09:10                                                            |
| #182 FAILED     08:41                                                            |
|                                                                                  |
| [Load More]                                                                      |
+----------------------------------------------------------------------------------+
```

Responsibilities:

- list runs for one pipeline
- support cursor-based browsing
- select one run for detailed inspection in the right panel

Backend alignment:

- `GET /api/v1/sync-pipeline?pipelineId=...&limit=...&beforeRunId=...`

## 5. Recent Activity

Used as a lightweight operations landing panel.

Center area:

```text
+----------------------------------------------------------------------------------+
| Recent Activity                                                                  |
|----------------------------------------------------------------------------------|
| #184 sync-order    STARTED                                                       |
| #183 sync-stock    COMPLETED                                                     |
| #182 sync-refund   FAILED                                                        |
+----------------------------------------------------------------------------------+
```

Responsibilities:

- show recent runs in current workspace
- select one run for inspection

Backend alignment:

- `GET /api/v1/sync-pipeline/recent?limit=...&beforeRunId=...`

## Right Inspector Details

When a run is selected, the right panel should look like this:

```text
+-----------------------------------------------+
| Run #184                                      |
| Pipeline: sync-order                          |
| Status: STARTED                               |
| Requested Async: true                         |
|-----------------------------------------------|
| Control                                       |
| [Stop] [Resume] [Rerun]                       |
|-----------------------------------------------|
| Attempts                                      |
| 1. INITIAL FAILED                             |
| 2. RESUME STARTED                             |
|-----------------------------------------------|
| Latest Jobs                                   |
| - extract-order   COMPLETED                   |
| - upsert-order    STARTED                     |
+-----------------------------------------------+
```

Responsibilities:

- control the selected run
- inspect attempts
- inspect latest jobs
- inspect step execution summary

Backend alignment:

- `GET /api/v1/sync-pipeline/{pipelineRunId}`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

## Navigation Model

V1 should use shell-level navigation with focused route changes, not a deep website-style route tree.

Recommended high-level route model:

- `/`
  - default shell
- `/folders/:folderId`
  - folder view
- `/pipelines/:pipelineId`
  - pipeline overview
- `/pipelines/:pipelineId/config`
  - config editor
- `/pipelines/:pipelineId/runs`
  - run history
- `/runs/:pipelineRunId`
  - shell with selected run detail
- `/recent`
  - recent activity

The sidebar and right inspector should remain stable across these routes.

## Polling Alignment

This shell design assumes the current backend polling contract:

- tree/config pages:
  - no background polling
  - refresh after mutation
- recent activity:
  - poll `recent`
- pipeline runs page:
  - no continuous polling by default
- selected run detail:
  - poll run detail only while active

This keeps the shell aligned with the backend as it exists today.

## Deferred Areas

The shell intentionally leaves room for later additions:

- dashboard summary page
- SSE runtime log panel
- settings and secret management
- richer search
- multi-window desktop workflows

These should be added on top of this shell, not by replacing it.

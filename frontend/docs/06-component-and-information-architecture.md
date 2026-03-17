# Component And Information Architecture

## Purpose

This document turns the selected wireframes into:

- frontend component layering
- page composition
- state ownership
- information flow

It assumes the design decisions already captured in:

- [README.md](README.md)
- [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md)
- [02-technical-baseline-and-api-contract.md](02-technical-baseline-and-api-contract.md)
- [03-config-editor-wireframe-options.md](03-config-editor-wireframe-options.md)
- [04-run-detail-and-inspector-wireframe-options.md](04-run-detail-and-inspector-wireframe-options.md)
- [05-folder-recent-history-wireframes.md](05-folder-recent-history-wireframes.md)

## 1. App-Level Structure

```text
AppComponent
└─ AppShellComponent
   ├─ ShellHeaderComponent
   ├─ ShellSidebarComponent
   │  ├─ WorkspaceBadgeComponent
   │  ├─ PipelineTreeSearchComponent
   │  └─ PipelineTreeComponent
   ├─ ShellMainOutletComponent
   ├─ RunInspectorComponent
   └─ ShellStatusBarComponent
```

## 2. Route-Level Screens

```text
/
└─ Shell bootstrap

/folders/:folderId
└─ FolderViewPageComponent

/pipelines/:pipelineId
└─ PipelineOverviewPageComponent

/pipelines/:pipelineId/config
└─ PipelineConfigEditorPageComponent

/pipelines/:pipelineId/runs
└─ PipelineHistoryPageComponent

/runs/:pipelineRunId
└─ RunDetailFocusPageComponent

/recent
└─ RecentActivityPageComponent
```

## 3. Shell Regions And Ownership

### Left Sidebar

Owner:

- `ShellSidebarComponent`

Child components:

- `PipelineTreeSearchComponent`
- `PipelineTreeComponent`
- `TreeFolderNodeComponent`
- `TreePipelineNodeComponent`
- `TreeContextMenuComponent`

State owner:

- `TreeFacade`

Responsibilities:

- load and render pipeline tree
- keep selected folder and pipeline in sync with route
- handle context menu actions
- handle inline rename state

### Main Workarea

Owner:

- route page component for the active screen

Responsibilities:

- screen-specific content
- screen-specific local loading and empty states
- mutation forms and action bars

### Right Inspector

Owner:

- `RunInspectorComponent`

Child components:

- `InspectorRunSummaryComponent`
- `InspectorRunControlComponent`
- `InspectorAttemptsTimelineComponent`
- `InspectorLatestJobsComponent`
- `InspectorStepSummaryComponent`

State owner:

- `RunDetailFacade`

Responsibilities:

- render selected run summary
- drive run control actions
- poll active run detail
- render attempts, latest jobs, and selected-job step summary

## 4. Screen Composition

## 4.1 Folder View

```text
FolderViewPageComponent
├─ PageToolbarComponent
├─ FolderSummaryBarComponent
├─ FolderSectionComponent ("Subfolders")
│  └─ FolderListRowComponent
└─ FolderSectionComponent ("Pipelines")
   └─ PipelineListRowComponent
```

State owner:

- `FolderViewFacade`

Data sources:

- tree data from `PipelineTreeApiService`
- folder mutations through `PipelineTreeApiService`
- pipeline create/import via `SyncConfigApiService`

## 4.2 Pipeline Overview

```text
PipelineOverviewPageComponent
├─ PipelinePageHeaderComponent
├─ PipelineTabNavComponent
└─ PipelineOverviewRecentRunsComponent
   └─ RunSummaryRowComponent
```

State owner:

- `PipelineOverviewFacade`

Data sources:

- pipeline config summary
- pipeline history first page

## 4.3 Config Editor

```text
PipelineConfigEditorPageComponent
├─ PipelinePageHeaderComponent
├─ PipelineTabNavComponent
├─ ConfigEditorLayoutComponent
│  ├─ JobOutlinePanelComponent
│  │  ├─ JobOutlineToolbarComponent
│  │  └─ JobOutlineRowComponent
│  └─ JobEditorPanelComponent
│     ├─ PipelineMetadataSectionComponent
│     ├─ JobCardComponent
│     │  ├─ JobBasicSectionComponent
│     │  ├─ JobDatabaseSectionComponent
│     │  └─ JobStepsSectionComponent
│     │     ├─ StepAccordionRowComponent
│     │     └─ StepEditorComponent
│     └─ EditorActionBarComponent
```

State owner:

- `PipelineEditorFacade`

Key local state:

- selected job id
- selected step id
- dirty state
- inline validation state

## 4.4 Pipeline History

```text
PipelineHistoryPageComponent
├─ PipelinePageHeaderComponent
├─ PipelineTabNavComponent
├─ RunHistoryTableComponent
│  └─ RunHistoryRowComponent
└─ PaginationFooterComponent
```

State owner:

- `PipelineHistoryFacade`

## 4.5 Recent Activity

```text
RecentActivityPageComponent
├─ RecentActivityHeaderComponent
├─ RecentActivityTableComponent
│  └─ RecentRunRowComponent
└─ PaginationFooterComponent
```

State owner:

- `RecentRunsFacade`

## 4.6 Run Detail Focus Route

```text
RunDetailFocusPageComponent
└─ RunDetailContextBridgeComponent
```

Purpose:

- select a run into the stable right inspector
- keep the main shell routeable without creating a second detail UI

## 5. Facade Map

Recommended facade set:

```text
WorkspaceFacade
TreeFacade
FolderViewFacade
PipelineOverviewFacade
PipelineEditorFacade
PipelineHistoryFacade
RecentRunsFacade
RunDetailFacade
HealthFacade
```

## 6. API Service Map

Recommended API services:

```text
WorkspaceApiService
PipelineTreeApiService
SyncConfigApiService
SyncPipelineApiService
HealthApiService
```

Rules:

- API services stay thin
- request shaping and polling orchestration live in facades
- page components should not assemble backend query rules directly

## 7. State Ownership Rules

### Global Shell State

Owned by:

- `WorkspaceFacade`
- `TreeFacade`
- `RunDetailFacade`
- `HealthFacade`

Examples:

- current workspace
- selected folder
- selected pipeline
- selected run
- backend health

### Screen State

Owned by page facades.

Examples:

- folder page rows
- pipeline editor form state
- pipeline history pagination cursor
- recent activity polling state

### Ephemeral UI State

Owned locally by components with `signal()` or `model()`.

Examples:

- context menu open state
- confirm dialog open state
- selected job row
- selected step accordion panel

## 8. Selected Information Flow

## 8.1 Selecting A Pipeline

```text
Tree click
-> TreeFacade selects pipeline
-> route updates to /pipelines/:pipelineId
-> main page loads pipeline overview or config
-> right inspector shows pipeline context until a run is selected
```

## 8.2 Executing A Pipeline

```text
User clicks Execute
-> Run control action fires through SyncPipelineApiService
-> RecentRunsFacade refreshes
-> PipelineHistoryFacade refreshes if visible
-> RunDetailFacade selects returned run id
-> right inspector begins active polling
```

## 8.3 Inspecting A Run

```text
User clicks Inspect on history/recent row
-> RunDetailFacade selects run id
-> right inspector renders summary
-> polling starts only if run is in-flight
```

## 9. Layout And Scroll Ownership

Rules:

- `AppShellComponent` owns full viewport height
- left sidebar scrolls independently
- center page scrolls inside its own content region
- config editor splits into:
  - `JobOutlinePanelComponent` independent scroll
  - `JobEditorPanelComponent` independent scroll
- right inspector scrolls independently

No primary screen should rely on browser-page scrolling during normal usage.

## 10. What This Enables Next

With this structure in place, the next design pass can safely move into:

- visual component styling rules
- spacing and typography system
- concrete Angular folder structure
- eventual scaffold plan for the actual frontend app

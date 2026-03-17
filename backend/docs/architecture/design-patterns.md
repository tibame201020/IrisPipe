# Design Patterns

## 1. Workspace-Scoped Engine

The backend is now scoped by workspace, not global singleton state.

Design choice:

- keep multi-tenant concerns out of the core engine
- resolve workspace through request scope
- keep desktop mode viable through the default workspace fallback

This gives the engine a stable boundary for both desktop and future platform composition.

## 2. Folder Tree as First-Class Model

Pipeline organization is no longer a path-string convention.

Design choice:

- persist folders explicitly
- keep one hidden root row per workspace
- expose root as virtual `/`
- enforce sibling-local uniqueness

This supports move, rename, preview, and recursive delete without overloading string parsing.

## 3. JSON CRUD as Primary Contract

Config management is body-driven first and file import second.

Design choice:

- JSON CRUD is the primary product contract
- import remains available as an adapter
- stored pipeline identity is folder plus pipeline name, not file path

This keeps GUI integration cleaner and prevents file-origin concerns from leaking into the domain model.

## 4. Facade Plus Collaborator Services

Recent refactors intentionally moved away from large mixed-responsibility services.

Current pattern:

- facade services remain at the application boundary
- collaborators own narrower responsibilities

Examples:

- config:
  - `PipelineConfigService`
  - `PipelineConfigCommandService`
  - `PipelineConfigImportService`
  - `PipelineConfigReadModelService`
  - `PipelineConfigRequestPolicy`
- folder:
  - `PipelineFolderService`
  - `PipelineFolderCommandService`
  - `PipelineFolderReadModelService`
  - `PipelineFolderStructureService`
- runtime:
  - `PipelineExecutionService`
  - `PipelineRunCommandService`
  - `PipelineRunControlPolicy`
  - `PipelineRunLaunchService`

This is not interface-heavy SOLID for its own sake.
It is a pragmatic split intended to reduce service coupling and make slice/unit tests feasible.

## 5. Query and Command Separation

Pipeline run query assembly is intentionally split from runtime control.

Design choice:

- `PipelineExecutionService` owns command orchestration
- `PipelineRunQueryService` owns summary/history/detail assembly

This keeps control flow from absorbing read-model complexity.

## 6. Snapshot-Driven Runtime

Each logical run owns an immutable snapshot.

Design choice:

- execute reads latest persisted config
- resume reuses the same run snapshot
- rerun copies the source snapshot

This prevents config drift from silently changing resume or rerun behavior.

## 7. Projection Plus History

Runtime persistence intentionally mixes latest projection and full history.

Design choice:

- latest projection lives on `PipelineRun` and `PipelineRunJob`
- full attempt history lives on `PipelineRunExecution` and `PipelineRunExecutionJob`

This makes both:

- cheap summary/read APIs
- detailed attempt history

possible without overloading one table for both purposes.

## 8. Atomic Strategy per Job

`atomicLevel` remains a job-level concern.

- `JOB`
  - replay-style resume
  - whole-job rollback semantics
- `CHUNK`
  - restart-style resume
  - chunk commit semantics

The run layer decides where to continue.
The job layer decides how that node continues.

## 9. Listener-Driven Runtime Truth

Trigger APIs do not directly own final runtime status.

Design choice:

- command services create rows and launch work
- listeners report actual batch transitions
- lifecycle service projects runtime truth back into persistent run state

This keeps sync and async paths on the same lifecycle model.

## 10. Observability from Lifecycle Events

Observability is built from domain-adjacent lifecycle events, not from controller logic.

Design choice:

- runtime lifecycle publishes observation events
- metrics publisher listens and records counters/gauges/timers

This keeps actuator metrics additive and avoids polluting controllers or DTOs with meter logic.

## 11. K6 as Acceptance Guardrail

The backend uses K6 as black-box regression protection while internal services are refactored.

Design choice:

- refactor internal structure freely
- preserve public behavior
- keep K6 unchanged during refactor-focused work

This has been the main guardrail during the recent service decomposition.

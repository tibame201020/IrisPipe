# Frontend Changelog

## 2026-03-19

### Pipeline workspace compaction
- Stopped reloading the full pipeline tree on every folder navigation inside the explorer and kept folder switching inside the already loaded tree state.
- Compressed explorer chrome into a single header so folder and pipeline content stays primary instead of being pushed below stat cards.
- Reduced the shared pipeline workspace header to a compact breadcrumb-and-tabs strip so `config`, `runs`, and `run detail` stay in one family without spending vertical space on repeated chrome.
- Converted the runs list top section from three large stat cards into a compact summary/action bar.
- Reduced run-detail top chrome, tightened the left attempt rail, and shrank the runtime context strip so the graph keeps visual priority.
- Removed the extra `runs` subheader above run detail and merged breadcrumb, run metadata, and actions into a single run-detail header.
- Compressed the config canvas context bar into a narrow definition strip and kept the drawer as the only expanded detail surface.

### Pipeline family narrative pass
- Reworked the pipeline config canvas into a definition-oriented editor surface instead of a generic workflow card layout.
- Added a lightweight config context strip that surfaces factual pipeline definition counts: jobs, steps, configured sources, and configured destinations.
- Switched config job inspection to a deliberate double-click drawer flow so the canvas remains primary until the user explicitly opens definition details.
- Tightened config job nodes around backend truth: atomic level, execution count, and whether source/destination connections are configured.
- Restructured the runs family into `PipelineWorkspace -> Runs -> Run Detail` so run detail reads as a focused runs state, not as a different page family.
- Reordered run-detail attempt cards to lead with execution kind, attempt number, status, duration, and actual jobs/steps counts from the backend.
- Rebalanced runtime graph nodes so job name and step counters stay primary while status remains readable without overpowering the graph.

### Runs section continuity
- Split the pipeline workspace into a real nested `runs` section so `config -> runs -> run detail` stays inside one pipeline workspace instead of three pages imitating the same chrome.
- Added a dedicated `PipelineRunsLayout` that keeps `Run History` and `Run #id` in the same narrative family while leaving `Config | Runs` ownership at the workspace level.
- Tightened `RunDetailPage` so it only owns run-specific state, actions, attempts, graph, and selected-job details.
- Reordered attempt cards and runtime graph nodes to emphasize backend facts first: execution kind, attempt number, status, duration, jobs, and step counts.
- Reworked graph node hierarchy to make status readable without overpowering the job name or runtime counters.

### Pipeline workspace runtime polish
- Moved the pipeline workspace family (`config`, `runs`, `run detail`) off route-level lazy loading so tab switches stay in the same shell without fallback delay.
- Re-centered `Run Detail` around run-specific state only, leaving breadcrumb and `Config | Runs` tabs to the shared pipeline workspace layout.
- Fixed React Flow handle positioning so pipeline-config and run-detail connection points are fully visible instead of being clipped by node borders.
- Removed the extra page-level scrollbar on graph-heavy screens by keeping `main` overflow hidden and letting each page own its internal scroll regions.

### Pipeline workspace continuity
- Replaced duplicated `breadcrumb + tabs` markup in `config`, `runs`, and `run detail` with a shared pipeline workspace layout.
- Kept `Config` and `Runs` as real route-level tabs inside the same workspace shell instead of three separate pages imitating the same chrome.
- Aligned run-detail navigation so `Config -> Runs -> Run Detail` now reads as one continuous pipeline workspace.
- Tightened runtime job nodes and attempt cards so run-detail emphasizes backend facts: execution kind, attempt number, duration, and per-job step counts.

### Canvas edge and layout fixes
- Restored explicit graph edges for both pipeline config and run detail by binding both pages to the same smooth edge renderer.
- Fixed clipped node handles by allowing graph nodes to overflow so React Flow connection handles are fully visible.
- Removed nested `h-screen` usage from graph-heavy pages so the canvas no longer introduces an unnecessary page-level vertical scrollbar.
- Kept the canvas as the primary surface in run detail by moving job details into an on-demand drawer instead of a permanent right rail.

### Backend-aligned frontend semantics
- Pulled frontend wording and unsupported UI actions back to the current backend contract.
- Replaced overstated dashboard language in `overview` with actuator-backed health and factual run summaries.
- Renamed explorer and runs metrics so they only describe what the current API actually returns.
- Removed unsupported `Save Blueprint` / JSON-view affordances from the config page until a real save flow exists.
- Renamed run-detail destructive action from history purge semantics to single-run deletion.
- Removed default animated pipeline edges so the graph no longer implies runtime flow telemetry the backend does not expose.

### Build and delivery cleanup
- Added route-level lazy loading in `src/App.tsx` to split page bundles.
- Removed the Vite chunk size warning by turning the single large app bundle into page-level chunks.
- Kept the `@xyflow/react` graph surface in its own chunk so the heavier editor/runtime pages load separately.

### Domain wording refinement
- Tightened remaining explorer, config, runs, and run-detail labels so the UI speaks in terms of folders, pipeline definitions, runs, attempts, and jobs.
- Removed the last animated run-graph edge behavior so the runtime graph no longer implies live data-flow telemetry.
- Replaced leftover productized canvas wording with definition-oriented language that matches the current backend model.

### Frontend reset
- Rebuilt the main `frontend` app on `Vite + React + TailwindCSS + DaisyUI`.
- Aligned the new app around `overview`, `pipeline`, `settings`, and dedicated run detail routes.
- Added Vite proxy and Docker support for the new frontend shell.

### Theme and shell baseline
- Switched the app to DaisyUI theme-driven styling.
- Added theme selection in `Settings` and header theme switching.
- Moved shell styling toward DaisyUI-first surfaces instead of heavy custom component CSS.

### Pipeline explorer refinement
- Reduced the page to a single `EXPLORER CONTENTS` surface.
- Made explorer scrolling happen inside the card instead of at page level.
- Changed folder secondary text to child counts (`folders / pipelines`).
- Added folder create, folder rename, folder delete, and pipeline delete actions.
- Added `New pipeline` handoff from explorer into draft editor mode without creating a backend record first.

### Pipeline editor direction reset
- Rebuilt the config page around a workflow canvas instead of the previous form-heavy surface.
- Switched the canvas implementation to `@xyflow/react` so the page behaves more like an editor surface.
- Kept the backend truth model intact by rendering jobs as a linear chain, not as a DAG.
- Flattened page-level layout surfaces so `main` now visually connects directly to the shell instead of looking inset.

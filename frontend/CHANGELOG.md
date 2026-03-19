# Frontend Changelog

## 2026-03-19

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

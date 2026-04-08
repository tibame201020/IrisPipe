# IrisPipe GUI Adjustment Plan
**Branch:** feature/gui
**Date:** 2026-04-08
**Status:** Phase 1 (GitLab-style UI redesign) ✅ Complete — entering Phase 2 (Bug fixes + Polish)

---

## Background

The Pipeline Family (Config / Runs / Run Detail) has been fully redesigned in a GitLab-style:
- `StageLaneBoard.tsx` — S1/S2 index badges, left-border status bars, THEN connector, dot-grid canvas
- `PipelineWorkspaceLayout.tsx` — compressed header, dirty indicator (●), Config/Runs tab switcher
- `PipelineConfigPage.tsx` — 2-column job editor modal, inline SQL editor, live validation
- `PipelineRunsPage.tsx` — filter chips (All/Active/Failed/Completed), timeline rows, stats inline
- `RunDetailPage.tsx` — attempt pills replace sidebar, Stage Board / Logs tabs

UX validation (multi-agent browser test, 2026-04-08) confirmed the redesign is production-quality.
Full findings: `plans/OPTIMIZATION_REPORT.md`

---

## Phase 2 — Bug Fixes (Next Sprint)

### BUG-1 · Route `/pipeline/items/new` → "Invalid pipeline id"
**Priority:** P0 · **Effort:** S (< 1h)
**File:** `frontend/src/App.tsx`

React Router matches `/pipeline/items/new` to the `:pipelineId` dynamic route with value `"new"`,
causing a failed pipeline lookup and error screen.

**Fix:**
```tsx
// Add BEFORE <Route path="/pipeline/items/:pipelineId" ...>
<Route path="/pipeline/items/new" element={<Navigate to="/pipeline/new/config" replace />} />
```

---

### BUG-2 · Log timestamps display "Invalid Date"
**Priority:** P0 · **Effort:** S (1–2h)
**Files:** `frontend/src/lib/api.ts`, `frontend/src/pages/RunDetailPage.tsx`

Backend SSE log events send timestamps as `LocalDateTime` arrays (`[2026,4,8,13,17,22,123]`).
`parseLocalDateTime` in `date.ts` already handles this format correctly.
The bug is that `RunLogEntry.timestamp` in `api.ts` is likely typed as `string` (or the wrong field name
is passed to `formatDateTime` in RunDetailPage).

**Fix Steps:**
1. In browser DevTools, inspect raw SSE payload from `/api/pipeline/run/{id}/events` to find exact field name and shape
2. In `api.ts`, ensure `RunLogEntry.timestamp` (or equivalent) is typed as `LocalDateTimeInput`
3. In `RunDetailPage.tsx` log rendering, confirm the correct field is passed to `formatDateTime()`

---

### BUG-3 · EXECUTE step failure — no error detail visible in UI
**Priority:** P1 · **Effort:** M (2–4h, backend + frontend)
**Files:** `RunDetailPage.tsx`, backend DTO, `CustomJobListener`

When a job fails before any step executes (Spring Batch pre-step validation), `stepExecutionInfos` is
empty, `failedStep` is undefined, and `errorLine` resolves to `undefined`. The actual SQL error lives in
the job-level `exitDescription` but may not be included in the API DTO.

**Fix Steps:**
1. Backend: confirm `PipelineRunExecutionJob` entity persists `exitDescription` via `CustomJobListener`
2. Backend: expose `exitDescription` in the run detail DTO
3. Frontend `RunDetailPage.tsx` — update `stageLanes` memo fallback:
```ts
const errorLine = failedStep?.exitDescription
  ? failedStep.exitDescription.split('\n')[0].slice(0, 80)
  : job.exitDescription
    ? job.exitDescription.split('\n')[0].slice(0, 80)
    : undefined
```

---

## Phase 3 — UX Polish (Next Sprint, same or following)

### UX-1 · Prev/Next stage buttons are misleading (they *move* the job, not navigate)
**Priority:** P1 · **Effort:** S (30min)
**File:** `frontend/src/pages/PipelineConfigPage.tsx`

Users interpret "Prev" / "Next" as navigation. They actually reassign the job to a different stage,
causing accidental stage emptying and validation errors.

**Fix:** Rename buttons:
- `← Prev` → `← Move Stage`
- `Next →` → `Move Stage →`

Or replace with labeled dropdown: `Move to stage: [stage1 ▼]`

---

### UX-2 · Failed job cards in Run Detail may not be clickable
**Priority:** P1 · **Effort:** S (1h)
**File:** `frontend/src/components/StageLaneBoard.tsx`

`@dnd-kit/sortable` with `disabled: true` may suppress pointer events from child elements in some
browser/library versions, preventing the job drawer from opening.

**Fix:** Wrap job card inner content in `<button type="button">` instead of relying on `div onClick`:
```tsx
<button
  type="button"
  className="min-w-0 flex-1 cursor-pointer px-2.5 py-2.5 pr-9 text-left"
  onClick={job.onClick}
>
  {/* card content */}
</button>
```
Also improves keyboard accessibility.

---

### UX-3 · Job editor left panel — Stage selector buried by scrolling
**Priority:** P2 · **Effort:** S (1–2h)
**File:** `frontend/src/pages/PipelineConfigPage.tsx`

Stage selector and Delete Job are at the bottom of the left column, requiring significant scrolling
on smaller screens.

**Fix (recommended):** Move Stage selector to top of left column, directly below job name input.
**Fix (alternative):** `position: sticky; bottom: 0` on the Stage + Delete section.

---

### UX-4 · No Quick Start hint in new pipeline empty state
**Priority:** P2 · **Effort:** S (1h)
**File:** `frontend/src/pages/PipelineConfigPage.tsx`

New users stall at the empty stage board without understanding the required structure.

**Fix:** Add inline hint below the board hint text:
> "Each stage needs at least one Job. Each Job needs a Step with SQL and a Destination connection."

---

## Phase 4 — Enhancements (Future Sprint)

| ID | Description | File | Priority | Effort |
|----|-------------|------|----------|--------|
| ENH-1 | `Ctrl+S` / `Cmd+S` save shortcut + button tooltip | `PipelineConfigPage.tsx` | P3 | S |
| ENH-2 | "Load older runs" — show total run count | `PipelineRunsPage.tsx` + backend | P2 | S-M |
| ENH-3 | ARIA labels on job cards for keyboard/screen-reader users | `StageLaneBoard.tsx` | P3 | XS |
| ENH-4 | Connection Library UI — browse saved connections in job editor | `PipelineConfigPage.tsx` + `SettingsPage.tsx` | P2 | L |
| ENH-5 | Run Detail — config snapshot tab in job drawer | `RunDetailPage.tsx` | P3 | M |

---

## Prioritized Action Table

| # | Item | P | Effort | File |
|---|------|---|--------|------|
| 1 | Fix `/pipeline/items/new` route redirect | P0 | S | `App.tsx` |
| 2 | Fix "Invalid Date" log timestamps | P0 | S | `api.ts` + `RunDetailPage.tsx` |
| 3 | Surface job-level `exitDescription` in job card | P1 | M | DTO + `RunDetailPage.tsx` |
| 4 | Fix job card click in Run Detail (DnD disabled) | P1 | S | `StageLaneBoard.tsx` |
| 5 | Rename Prev/Next stage-move buttons | P1 | S | `PipelineConfigPage.tsx` |
| 6 | Move Stage selector to top of job editor left panel | P2 | S | `PipelineConfigPage.tsx` |
| 7 | Add Quick Start hint in empty pipeline state | P2 | S | `PipelineConfigPage.tsx` |
| 8 | Show total run count on "Load older runs" | P2 | S-M | `PipelineRunsPage.tsx` |
| 9 | Ctrl+S save shortcut | P3 | S | `PipelineConfigPage.tsx` |
| 10 | ARIA labels on job cards | P3 | XS | `StageLaneBoard.tsx` |

---

## Completed in This Branch (feature/gui)

- [x] StageLaneBoard full GitLab-style redesign (S1/S2 badges, left bar, THEN connector, dot grid)
- [x] PipelineWorkspaceLayout header compression + dirty indicator + Config/Runs tabs
- [x] PipelineConfigPage — 2-column job editor (Connection left, SQL right)
- [x] PipelineConfigPage — job card enrichment (subtitle, stepSummary, validationStatus)
- [x] PipelineRunsPage — filter chips + timeline rows + inline stats
- [x] RunDetailPage — attempt pills replace sidebar, Stage Board / Logs tab switcher
- [x] RunDetailPage — job card runtime data (duration, waitTime, I/O, errorLine)
- [x] Connection Library API (backend) + Settings page Connections tab
- [x] SqlEditor component (CodeMirror 6)
- [x] Overview page stats + recent runs
- [x] SSE real-time updates (usePipelineEvents hook)
- [x] UX validation via Playwright browser automation (multi-agent)

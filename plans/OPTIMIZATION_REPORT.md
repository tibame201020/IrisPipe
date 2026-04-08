# IrisPipe Optimization Report

**Date:** 2026-04-08
**Sources:** UX Validation Report (Playwright browser testing) + Developer technical analysis
**Audience:** Developers implementing fixes

---

## Executive Summary

- The redesigned Pipeline Family UI (Config / Runs / Run Detail) is production-quality. Core flows — create, configure, execute, observe — all work end-to-end. Overall UX score: 7.5/10.
- Two confirmed routing/timestamp bugs exist that damage first-time user trust: a broken deep-link URL and "Invalid Date" in all log entries.
- The `exitDescription` error surfacing pipeline exists in the code but is blocked from being visible in the job card for a specific data-shape reason: `stepExecutionInfos` may be empty at the point the SSE snapshot is read, causing `errorLine` to resolve as `undefined`.
- The `FROM DUAL` SQL failure (Oracle syntax on H2) is a data/documentation problem, not a code bug; it should be addressed with a UI hint rather than backend changes.
- UX friction around the Prev/Next stage-move buttons and job card interactivity in Run Detail are the highest-value polish items post-bug-fix.

---

## Category 1: Bugs (Must Fix)

---

### BUG-1: Route `/pipeline/items/new` renders "Invalid pipeline id" error

**Description:**
Navigating directly to `/pipeline/items/new` (e.g., via a shared link, bookmark, or documentation link) falls into the `/pipeline/items/:pipelineId` route with `pipelineId = "new"`. The workspace layout treats this as a pipeline lookup, fails to find an item with id `"new"`, and surfaces an "Invalid pipeline id" error instead of the new-pipeline form.

**Root Cause:**
The React Router v7 route table in `App.tsx` defines the new-pipeline path at `/pipeline/new/config` (a sibling route at the `/pipeline` level), while the item workspace is at `/pipeline/items/:pipelineId`. The string `"new"` is treated as a valid-but-nonexistent `pipelineId`. No redirect exists to bridge this URL shape.

**Affected Files:**
- `frontend/src/App.tsx` (lines 35-36)

**Recommended Fix:**
Add a `<Route>` redirect inside the `/pipeline/items/` subtree before the dynamic `:pipelineId` segment, or add a dedicated static route that catches the `new` segment:

```tsx
// In the Route tree, BEFORE <Route path="/pipeline/items/:pipelineId" ...>
<Route path="/pipeline/items/new" element={<Navigate to="/pipeline/new/config" replace />} />
```

Alternatively, guard inside `PipelineWorkspaceLayout` — if `pipelineId === "new"`, redirect immediately. The route-level redirect is cleaner and requires no component change.

**Effort:** S (< 1 hour)

---

### BUG-2: Log entry timestamps display "Invalid Date"

**Description:**
Every log entry in the Run Detail Logs tab shows "Invalid Date" as the timestamp. This strips all temporal context from log inspection — users cannot tell when errors occurred relative to stage transitions.

**Root Cause:**
The backend SSE log events send timestamps as Java `LocalDateTime` serialized to a JSON number array: `[2026, 4, 8, 13, 17, 22, 123456789]`. The `parseLocalDateTime` function in `date.ts` handles this array format correctly (`Array.isArray(input) && input.length >= 5`). However, the log event timestamp field in `api.ts` must be typed as `LocalDateTimeInput` for this branch to be reached. If the log event type annotates the timestamp as `string` or `unknown`, TypeScript does not error, but the array hits the `typeof input === 'string'` branch first, `new Date([2026,4,8,...])` returns "Invalid Date", and the guard `Number.isNaN(parsed.getTime())` returns `null` which renders as `"-"` from `formatDateTime`. Further, if the field is typed as just `string`, the array would be coerced to a string like `"2026,4,8,13,17,22,123456789"` which `new Date()` cannot parse.

The fix is already implemented in `parseLocalDateTime` — the array handling is correct. The bug is upstream: the log event timestamp field is not typed as `LocalDateTimeInput`, or the raw SSE log event is not passing the timestamp field to `formatDateTime` at all (e.g., it may be under a different field name than expected).

**Affected Files:**
- `frontend/src/lib/date.ts` — logic is correct, no change needed here
- `frontend/src/lib/api.ts` — `RunLogEntry` type definition; confirm `timestamp` field is typed as `LocalDateTimeInput` (i.e., `string | number[] | null | undefined`)
- `frontend/src/pages/RunDetailPage.tsx` — where log entries are rendered; confirm the field name passed to `formatDateTime` matches the actual SSE payload field name

**Recommended Fix:**
1. Inspect the raw SSE log event payload in the browser Network tab (or add a `console.log` temporarily) to find the exact field name and shape of the timestamp.
2. Ensure `RunLogEntry.timestamp` (or equivalent field) is typed as `LocalDateTimeInput` in `api.ts`.
3. In `RunDetailPage.tsx`, pass that field to `formatDateTime`. No changes to `date.ts` are needed — `parseLocalDateTime` already handles the `number[]` array format correctly.

**Effort:** S (1-2 hours including diagnosis)

---

### BUG-3: EXECUTE step failure provides no actionable error to the user

**Description:**
When an EXECUTE-type step fails (e.g., running `SELECT 1 FROM DUAL` on H2, which does not support Oracle `FROM DUAL` syntax), the run ends with status FAILED, but the UI shows only "Run ended — FAILED" in logs. The actual SQL error is buried in the Spring Batch `exitDescription` field and not surfaced anywhere visible.

**Root Cause:**
The code in `RunDetailPage.tsx` (lines 145-151) correctly computes `errorLine` from `stepExecutionInfos[n].exitDescription`. However, this logic fails silently when `stepExecutionInfos` is an empty array — which happens when the SSE job snapshot is captured before Spring Batch has written step execution records, or when the job fails at the job level before any step executes. In that case, `failedStep` is `undefined`, `errorLine` is `undefined`, and the job card shows no error hint.

Additionally, the job-level `exitMessage` or `exitDescription` on `PipelineRunExecutionJob` (the backend entity) may carry the error even when step records are absent, but this field may not be included in the API response DTO.

**Affected Files:**
- `frontend/src/pages/RunDetailPage.tsx` (lines 130-169 — `stageLanes` memo)
- Backend: `model/dto` — `PipelineRunExecutionJobDto` or equivalent; verify it exposes a job-level `exitDescription` or `exitMessage`
- Backend: `infrastructure/service/runtime` — confirm job-level exit description is persisted by `CustomJobListener`

**Recommended Fix:**
1. Add a job-level `exitDescription` field to the run detail API response DTO if not already present.
2. In the `stageLanes` memo in `RunDetailPage.tsx`, fall back to `job.exitDescription` when no failed step is found:
   ```ts
   const errorLine = failedStep?.exitDescription
     ? failedStep.exitDescription.split('\n')[0].slice(0, 80)
     : job.exitDescription
       ? job.exitDescription.split('\n')[0].slice(0, 80)
       : undefined
   ```
3. Consider also adding a brief inline hint in the job editor (config side) when the step type is EXECUTE with only a destination and no source: "EXECUTE steps require a source connection or self-contained SQL (H2 does not support Oracle syntax such as FROM DUAL)."

**Effort:** M (backend DTO + frontend fallback, 2-4 hours)

---

## Category 2: UX Friction (Should Fix)

---

### UX-1: Prev/Next stage buttons move the job — label does not communicate this

**Description:**
Inside the 2-column job editor modal, "Prev" and "Next" buttons in the Stage selector section move the job to the previous or next stage. First-time users interpret these as navigation controls ("go to previous/next job") and accidentally relocate jobs, causing validation errors (a stage with 0 jobs).

**Root Cause:**
The button labels "Prev" / "Next" are ambiguous. They imply navigation in standard UI patterns. The actual behavior — reordering or reassigning a job to a different stage — is a destructive, hard-to-discover action with no confirmation.

**Affected Files:**
- `frontend/src/pages/PipelineConfigPage.tsx` — job editor modal, stage selector section

**Recommended Fix:**
Rename the buttons to make the action unambiguous:
- "Prev" → "← Move to earlier stage"
- "Next" → "Move to later stage →"

Or replace the inline Prev/Next buttons with a labeled dropdown: "Move job to stage: [Stage 1 ▼]". This avoids accidental triggers and scales better when there are many stages.

**Effort:** S (30 minutes)

---

### UX-2: Failed job cards in Run Detail appear non-interactive

**Description:**
In the Run Detail stage board, users reported that failed job cards appeared disabled and could not be clicked to open the job detail drawer. Investigation confirms that the `StageLaneBoard` component correctly wires `onClick` to an inner `div` (lines 442-445 of `StageLaneBoard.tsx`), not to a `disabled` button element. The `dragDisabled` prop (set to `true` in read-only run mode) correctly sets `cursor-pointer` on the outer `article`. However, the `useSortable` DnD hook with `disabled: true` may suppress pointer events in certain browser/DnD library versions, preventing the inner div click from firing.

The `errorLine` rendering is correctly implemented (line 493-497 of `StageLaneBoard.tsx`) — the visual presentation exists. The issue is whether the click handler is reachable.

**Affected Files:**
- `frontend/src/components/StageLaneBoard.tsx` (lines 418-445, `StageLaneJob` function)
- `frontend/src/pages/RunDetailPage.tsx` (line 158 — `onClick` wiring)

**Recommended Fix:**
Verify whether `@dnd-kit/sortable`'s `disabled: true` option prevents click propagation from child elements. If confirmed, wrap the inner card content in a `<button type="button">` element with explicit `onClick` instead of relying on the `div`'s `onClick`. The DnD `listeners` and `attributes` should remain on the outer `article`, and the inner clickable area should be a semantic interactive element:

```tsx
<button
  type="button"
  className="min-w-0 flex-1 cursor-pointer px-2.5 py-2.5 pr-9 text-left"
  onClick={job.onClick}
>
  {/* card content */}
</button>
```

This also fixes accessibility (keyboard users cannot currently activate the card).

**Effort:** S (1 hour including testing)

---

### UX-3: Connection panel left column requires excessive scrolling to reach Stage selector and Delete Job

**Description:**
In the 2-column job editor modal on smaller screens (< 900px height), users must scroll significantly within the left panel to reach the Stage selector and Delete Job controls, which are at the bottom of the left column below source connection, destination connection, and batch settings sections.

**Affected Files:**
- `frontend/src/pages/PipelineConfigPage.tsx` — job editor modal left column layout

**Recommended Fix (option A — move controls to top):**
Relocate the Stage selector to the top of the left panel, directly below the job name, before the connection fields. This makes stage assignment immediately visible and removes the need to scroll.

**Recommended Fix (option B — sticky footer):**
Make the Stage selector and Delete Job button sticky at the bottom of the left panel using `position: sticky; bottom: 0` with a background color so they remain visible regardless of scroll position. This is a smaller change and preserves the current information ordering.

**Effort:** S (1-2 hours)

---

## Category 3: Enhancements (Nice to Have)

---

### ENH-1: Empty new-pipeline state lacks a "Quick Start" guide hint

**Description:**
When a user creates a new pipeline and sees an empty stage board, there is no contextual hint explaining the minimal required structure to execute a pipeline. New users stall at the empty state.

**Recommended Fix:**
Add a short text hint in the empty-state component:
> "Start by adding a Stage, then add a Job to the stage. Each job needs at least one Step — a Source connection, a SQL query, and a Destination to write results."

Optionally add a "See example" link that pre-populates a sample stage/job/step configuration.

**Affected Files:**
- `frontend/src/pages/PipelineConfigPage.tsx` — empty state section

**Effort:** S (1 hour)

---

### ENH-2: Run Detail — make job cards explicitly accessible via keyboard

**Description:**
The job card click target (`div` with `role="button"`) supports keyboard activation via `onKeyDown` (Enter / Space), but the `tabIndex` is set to `0` only when `onClick` is defined. In run mode, `onClick` is always defined. This is correct. However, screen readers and keyboard users would benefit from explicit ARIA labels on the card indicating the job name and status.

**Recommended Fix:**
Add `aria-label={`${job.title} — ${job.status ?? 'pending'}`}` to the inner `div` with `role="button"`.

**Affected Files:**
- `frontend/src/components/StageLaneBoard.tsx` (line 442 inner div)

**Effort:** XS (15 minutes)

---

### ENH-3: "Load older runs" button should show total run count

**Description:**
On the Runs page, the "Load older runs" button gives no indication of how many additional runs are available. Users do not know whether loading more is worthwhile.

**Recommended Fix:**
Include the total run count from the API response in the button label: "Load older runs (42 total)" or show a `(showing 10 of 42)` counter above the list.

**Affected Files:**
- `frontend/src/pages/PipelineRunsPage.tsx`
- Backend API may need to return `totalCount` in the runs list response if not already present

**Effort:** S-M (1-3 hours depending on whether the backend already exposes total count)

---

### ENH-4: Keyboard shortcut hint for Ctrl+S / Cmd+S save

**Description:**
The toolbar save button has no keyboard shortcut label. Power users expect Ctrl+S to save; if it is already wired, it should be discoverable via a tooltip or label. If it is not wired, it should be.

**Recommended Fix:**
Add a `title="Save (Ctrl+S)"` tooltip to the Save button. If the shortcut is not implemented, add a `useEffect` with a `keydown` listener in `PipelineConfigPage.tsx` that calls the save handler on `Ctrl+S` / `Cmd+S`.

**Affected Files:**
- `frontend/src/pages/PipelineConfigPage.tsx` — toolbar save button

**Effort:** S (1 hour)

---

## Confirmed Non-Issues (Investigated and Closed)

### CLOSED-1: `date.ts` array parsing — logic is correct

The `parseLocalDateTime` function in `frontend/src/lib/date.ts` correctly handles the `number[]` array format sent by the Spring Boot backend (`LocalDateTime` serialized as `[year, month, day, hour, minute, second, nano]`). The array branch at line 13 properly adjusts the 1-based month and converts nanoseconds to milliseconds. The "Invalid Date" bug (BUG-2 above) is not caused by a logic error in this function — it is caused by an incorrect type annotation or incorrect field name in the call site.

### CLOSED-2: Job card `disabled` attribute — not set on interactive elements

The `StageLaneBoard` job card does not render a `disabled` HTML attribute on any clickable element. The `disabled` prop in `useSortable` disables the DnD drag behavior only; the inner `div onClick` handler remains registered. The click accessibility issue (UX-2) is a potential DnD event propagation concern, not an HTML `disabled` attribute problem.

---

## Prioritized Action Plan

| ID | Item | Category | Priority | Effort | Owner Hint |
|----|------|----------|----------|--------|------------|
| BUG-1 | Fix `/pipeline/items/new` route redirect | Bug | **P0** | S | Frontend — `App.tsx` one-liner |
| BUG-2 | Fix "Invalid Date" log timestamps | Bug | **P0** | S | Frontend — `api.ts` type + field name audit |
| BUG-3 | Surface `exitDescription` in job card when `stepExecutionInfos` is empty | Bug | **P1** | M | Backend DTO + Frontend fallback |
| UX-2 | Verify and fix job card click in Run Detail (DnD disabled state) | UX Friction | **P1** | S | Frontend — `StageLaneBoard.tsx` |
| UX-1 | Rename Prev/Next stage buttons to clarify move semantics | UX Friction | **P1** | S | Frontend — `PipelineConfigPage.tsx` |
| UX-3 | Move Stage selector / Delete Job controls higher in job editor left panel | UX Friction | **P2** | S | Frontend — `PipelineConfigPage.tsx` layout |
| ENH-1 | Add Quick Start hint to empty new-pipeline state | Enhancement | **P2** | S | Frontend — `PipelineConfigPage.tsx` |
| ENH-3 | Show total run count on "Load older runs" button | Enhancement | **P2** | S-M | Frontend + Backend |
| ENH-4 | Wire Ctrl+S save shortcut + tooltip | Enhancement | **P3** | S | Frontend — `PipelineConfigPage.tsx` |
| ENH-2 | ARIA labels on job cards | Enhancement | **P3** | XS | Frontend — `StageLaneBoard.tsx` |

### Effort Legend
- **XS** — < 30 min
- **S** — 30 min to 2 hours
- **M** — 2 to 4 hours
- **L** — > 4 hours (requires design or backend changes)

### Priority Legend
- **P0** — Breaks core UX contract; ship immediately
- **P1** — Significant user confusion or data loss risk; next release
- **P2** — Meaningful improvement; schedule in upcoming sprint
- **P3** — Polish; batch with other minor items

---

## Key File Reference

| File | Relevant To |
|------|-------------|
| `frontend/src/App.tsx` | BUG-1 (missing route redirect) |
| `frontend/src/lib/date.ts` | BUG-2 (timestamp parsing — logic is correct) |
| `frontend/src/lib/api.ts` | BUG-2 (RunLogEntry type), ENH-3 (total count field) |
| `frontend/src/types/irispipe.ts` | BUG-2 (LocalDateTimeInput type coverage) |
| `frontend/src/pages/RunDetailPage.tsx` | BUG-2 (call site), BUG-3 (errorLine fallback), UX-2 (click handler) |
| `frontend/src/components/StageLaneBoard.tsx` | UX-2 (job card interactivity), ENH-2 (ARIA) |
| `frontend/src/pages/PipelineConfigPage.tsx` | UX-1 (button labels), UX-3 (panel layout), ENH-1 (empty state), ENH-4 (keyboard shortcut) |
| `frontend/src/pages/PipelineRunsPage.tsx` | ENH-3 (run count display) |
| `backend/.../model/dto/` | BUG-3 (job-level exitDescription in DTO) |
| `backend/.../infrastructure/service/runtime/` | BUG-3 (job-level exit description persistence) |

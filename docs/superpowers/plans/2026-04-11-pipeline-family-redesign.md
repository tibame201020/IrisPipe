# Pipeline Family Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將 IrisPipe 的 `Config / Runs / Run Detail` 重構為同一套 `pipeline family workspace`，準確表達 backend pipeline domain，並讓使用者能快速理解 flow、當前狀態與可執行操作。

**Architecture:** 以 `frontend/docs/IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md`、`frontend/docs/PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md`、`frontend/docs/PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md`、`frontend/docs/PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md` 為唯一依據。先建立 shared family shell、semantic token 與 state contract，再依序重構 `Config`、`Runs`、`Run Detail`。不更動 backend execution model，不導入 DAG，不恢復 React Flow / position persistence。

**Tech Stack:** React 19, TypeScript, Vite, React Router, TailwindCSS, daisyUI, Vitest, Spring Boot backend API

---

## Source Of Truth

- `C:\Users\16\Downloads\codes\IrisPipe\frontend\docs\IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md`
- `C:\Users\16\Downloads\codes\IrisPipe\frontend\docs\PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md`
- `C:\Users\16\Downloads\codes\IrisPipe\frontend\docs\PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md`
- `C:\Users\16\Downloads\codes\IrisPipe\frontend\docs\PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md`
- `C:\Users\16\Downloads\codes\IrisPipe\frontend\docs\README.md`

## Non-Goals

- backend DAG execution model
- backend graph layout persistence
- React Flow 視圖或任意 graph editor
- 重做 `Overview` 與 `Settings`

## Domain Invariants

- `Config` 表示目前 pipeline config 的編輯工作區。
- `Runs` 表示 logical run 歷史，不是 dashboard。
- `Run Detail` 表示 snapshot-bound logical run workspace。
- `stage` 是第一層結構單位，`job` 屬於 `stage`，`step` 屬於 `job`。
- `resume` = 同一 logical run 的新 attempt。
- `rerun` = 新的 logical run，沿用舊 snapshot。
- `Run Detail` 的 page-bound primary selection 是 `attempt`。
- 顏色只使用 daisyUI semantic tokens；禁止新增硬編碼主題色。

---

## File Structure

### Shared Family Shell / Primitives

- Create: `frontend/src/components/pipeline-family/PipelineWorkspaceShell.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineContextStrip.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineStageColumn.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineJobSlab.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineRunsLedger.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineRunRow.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineAttemptTimeline.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineOverviewRail.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

### Existing Pages / Shared UI

- Modify: `frontend/src/pages/PipelineConfigPage.tsx`
- Modify: `frontend/src/pages/PipelineRunsPage.tsx`
- Modify: `frontend/src/pages/RunDetailPage.tsx`
- Modify: `frontend/src/components/StageLaneBoard.tsx`
- Modify: `frontend/src/components/PageToolbar.tsx`
- Modify: `frontend/src/components/StatusBadge.tsx`
- Modify: `frontend/src/components/ui/Action.tsx`
- Modify: `frontend/src/components/ui/Surface.tsx`
- Modify: `frontend/src/index.css`
- Modify: `frontend/src/lib/pipeline-runtime.ts`
- Modify: `frontend/src/lib/pipeline-config-semantics.ts`

### Tests

- Modify: `frontend/src/lib/pipeline-runtime.test.ts`
- Modify: `frontend/src/lib/pipeline-config-semantics.test.ts`
- Add if needed: `frontend/src/components/pipeline-family/*.test.tsx`

---

## Execution Order

1. Shared family contract
2. Config workspace
3. Runs ledger
4. Run Detail workspace
5. Theme/state polish
6. Browser QA and regression verification

---

## Phase 1: Shared Family Contract

### Task 1: 建立 family shell 與 layout vocabulary

**Files:**
- Create: `frontend/src/components/pipeline-family/PipelineWorkspaceShell.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineContextStrip.tsx`
- Modify: `frontend/src/components/ui/Surface.tsx`

- [ ] **Step 1: 定義 shell anatomy**
Define one canonical layout with:
- identity row
- family tabs
- context strip
- main workspace
- secondary inspector / rail / drawer slots

- [ ] **Step 2: 實作 shell 元件**
Create `PipelineWorkspaceShell.tsx` and `PipelineContextStrip.tsx` so pages stop composing ad hoc top bars.

- [ ] **Step 3: 接到 shared surface**
Update `Surface.tsx` only where it helps the family shell; do not redesign global primitives outside pipeline family scope.

- [ ] **Step 4: 驗證 build**
Run: `npm run build`
Expected: build succeeds without type errors.

- [ ] **Step 5: Commit**
```bash
git add frontend/src/components/pipeline-family/PipelineWorkspaceShell.tsx frontend/src/components/pipeline-family/PipelineContextStrip.tsx frontend/src/components/ui/Surface.tsx
git commit -m "feat: add pipeline family shell primitives"
```

### Task 2: 建立 semantic color 與 state contract

**Files:**
- Modify: `frontend/src/index.css`
- Modify: `frontend/src/components/StatusBadge.tsx`

- [ ] **Step 1: 對齊 daisyUI token mapping**
Map:
- `base-*` -> workspace surfaces
- `neutral` -> structural grouping
- `primary` -> selected/focus/current context
- `success/info/warning/error` -> runtime and semantic state

- [ ] **Step 2: 實作 shared state styles**
Define styles for:
- hover
- selected
- focus-visible
- disabled
- stale
- runtime state

- [ ] **Step 3: 驗證四個主題**
Check `light / dark / dracula / autumn` visually and ensure no hardcoded theme-breaking colors remain in pipeline family scope.

- [ ] **Step 4: 驗證 build/tests**
Run:
- `npm run build`
- `npm test -- --run`
Expected: both pass.

- [ ] **Step 5: Commit**
```bash
git add frontend/src/index.css frontend/src/components/StatusBadge.tsx
git commit -m "feat: define pipeline family semantic state contract"
```

### Task 3: 抽出 pipeline family primitives

**Files:**
- Create: `frontend/src/components/pipeline-family/PipelineStageColumn.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineJobSlab.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineOverviewRail.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

- [ ] **Step 1: 定義每個 primitive 的責任**
`PipelineStageColumn` = config/runtime 共用的 stage 容器  
`PipelineJobSlab` = config/runtime 共用的 job row  
`PipelineOverviewRail` = run detail overview rail  
`PipelineDiagnosticsDrawer` = step/log/metrics/detail drawer

- [ ] **Step 2: 實作元件骨架**
Keep them prop-driven and page-agnostic.

- [ ] **Step 3: 驗證不破壞既有頁面**
Integrate only in isolated paths or behind adapters while extracting.

- [ ] **Step 4: 驗證 build/tests**
Run:
- `npm run build`
- `npm test -- --run`

- [ ] **Step 5: Commit**
```bash
git add frontend/src/components/pipeline-family
git commit -m "feat: add pipeline family structural primitives"
```

---

## Phase 2: Config Workspace

### Task 4: 重構 Config 頁面骨架

**Files:**
- Modify: `frontend/src/pages/PipelineConfigPage.tsx`

- [ ] **Step 1: 套用 family shell**
Replace ad hoc top/header layout with `PipelineWorkspaceShell`.

- [ ] **Step 2: 形成三區結構**
Required structure:
- topology workspace
- contextual inspector
- bottom job workspace dock

- [ ] **Step 3: 壓低 inspector 權重**
Inspector is contextual support, not the visual primary.

- [ ] **Step 4: 驗證 config load / save / selection**
Run page manually and confirm existing actions still work.

- [ ] **Step 5: Commit**
```bash
git add frontend/src/pages/PipelineConfigPage.tsx
git commit -m "feat: restructure pipeline config workspace shell"
```

### Task 5: 重構 stage-first board 與 job slab

**Files:**
- Modify: `frontend/src/components/StageLaneBoard.tsx`
- Use/Create: `frontend/src/components/pipeline-family/PipelineStageColumn.tsx`
- Use/Create: `frontend/src/components/pipeline-family/PipelineJobSlab.tsx`

- [ ] **Step 1: 讓 stage 成為明確 column**
Stage must read as structure first, not as a vague card or background tint.

- [ ] **Step 2: 將 job 統一為 compact slab**
Show only what the spec requires:
- name
- step count
- issue cue
- contextual controls

- [ ] **Step 3: 修正 connector 與 barrier 表達**
Make stage order and between-stage relationship legible without React Flow.

- [ ] **Step 4: 保留 hover convenience 但禁止 reflow**
Hover tools must not push content or change layout height.

- [ ] **Step 5: 驗證 config board**
Manual browser check:
- stage selection
- job selection
- hover tools
- dark/dracula legibility

- [ ] **Step 6: Commit**
```bash
git add frontend/src/components/StageLaneBoard.tsx frontend/src/components/pipeline-family/PipelineStageColumn.tsx frontend/src/components/pipeline-family/PipelineJobSlab.tsx
git commit -m "feat: rebuild config board as stage-first workspace"
```

### Task 6: 建立 Config selection model

**Files:**
- Modify: `frontend/src/pages/PipelineConfigPage.tsx`
- Modify: `frontend/src/lib/pipeline-config-semantics.ts`
- Modify: `frontend/src/lib/pipeline-config-semantics.test.ts`

- [ ] **Step 1: 定義 selection invariant**
`stage` selection -> stage inspector  
`job` selection -> job inspector + dock  
empty click -> clear selection

- [ ] **Step 2: 先寫/補測試**
Add tests for selection transitions and config-facing semantics.

- [ ] **Step 3: 實作最小調整**
Update semantics helpers and page state wiring.

- [ ] **Step 4: 跑測試**
Run:
- `npm test -- --run`
Expected: semantics tests pass.

- [ ] **Step 5: Commit**
```bash
git add frontend/src/pages/PipelineConfigPage.tsx frontend/src/lib/pipeline-config-semantics.ts frontend/src/lib/pipeline-config-semantics.test.ts
git commit -m "feat: enforce config selection model invariants"
```

### Task 7: 重構 bottom job workspace dock

**Files:**
- Modify: `frontend/src/pages/PipelineConfigPage.tsx`

- [ ] **Step 1: 定義 dock 的內容層級**
Dock owns:
- source/destination
- steps / executions
- SQL/query
- params
- watermark
- batch / atomic settings

- [ ] **Step 2: 讓 dock 與 topology 解耦**
Opening/closing dock must not break board readability.

- [ ] **Step 3: 驗證 job edit flow**
Manual browser check:
- select job
- open workspace
- edit step
- return to topology

- [ ] **Step 4: Commit**
```bash
git add frontend/src/pages/PipelineConfigPage.tsx
git commit -m "feat: move job editing into bottom workspace dock"
```

---

## Phase 3: Runs Ledger

### Task 8: 重構 Runs 為 operations ledger

**Files:**
- Modify: `frontend/src/pages/PipelineRunsPage.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineRunsLedger.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineRunRow.tsx`

- [ ] **Step 1: 定義 ledger 架構**
Runs page should contain:
- identity/context strip
- low-weight summary
- primary ledger

- [ ] **Step 2: 實作 ledger 與 row**
Rows should surface:
- run id
- latest attempt
- status
- duration / time
- resumable cue
- open detail action

- [ ] **Step 3: 壓低 dashboard 化資訊**
Do not let KPI tiles overpower the run history.

- [ ] **Step 4: 驗證 filters 與 actions**
Confirm execute / resume / rerun remain understandable and correctly grouped.

- [ ] **Step 5: Commit**
```bash
git add frontend/src/pages/PipelineRunsPage.tsx frontend/src/components/pipeline-family/PipelineRunsLedger.tsx frontend/src/components/pipeline-family/PipelineRunRow.tsx
git commit -m "feat: rebuild pipeline runs as operations ledger"
```

---

## Phase 4: Run Detail Workspace

### Task 9: 重構 Run Detail page skeleton

**Files:**
- Modify: `frontend/src/pages/RunDetailPage.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineAttemptTimeline.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineOverviewRail.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

- [ ] **Step 1: 建立 run detail 主框架**
Structure:
- hero summary
- attempt timeline
- runtime board
- overview rail
- diagnostics drawer

- [ ] **Step 2: 將 runtime board 提升為主視覺**
Timeline and drawer support the board; they must not compete with it.

- [ ] **Step 3: 驗證 page navigation**
Manual browser check:
- open run detail
- switch attempt
- open stage/job diagnostics

- [ ] **Step 4: Commit**
```bash
git add frontend/src/pages/RunDetailPage.tsx frontend/src/components/pipeline-family/PipelineAttemptTimeline.tsx frontend/src/components/pipeline-family/PipelineOverviewRail.tsx frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx
git commit -m "feat: rebuild run detail workspace structure"
```

### Task 10: 實作 attempt-bound selection model

**Files:**
- Modify: `frontend/src/pages/RunDetailPage.tsx`
- Modify: `frontend/src/lib/pipeline-runtime.ts`
- Modify: `frontend/src/lib/pipeline-runtime.test.ts`

- [ ] **Step 1: 先寫/補 runtime selection tests**
Cover:
- attempt switch rebinding
- stage selection
- job selection
- drawer target resolution

- [ ] **Step 2: 實作 selection invariant**
Primary selection is always `attempt`; stage/job are contextual targets inside the selected attempt.

- [ ] **Step 3: 跑測試**
Run: `npm test -- --run`
Expected: runtime semantics tests pass.

- [ ] **Step 4: Commit**
```bash
git add frontend/src/pages/RunDetailPage.tsx frontend/src/lib/pipeline-runtime.ts frontend/src/lib/pipeline-runtime.test.ts
git commit -m "feat: enforce attempt-bound run detail selection model"
```

### Task 11: Runtime board 與 diagnostics 表達

**Files:**
- Modify: `frontend/src/components/StageLaneBoard.tsx`
- Use/Create: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

- [ ] **Step 1: 為 runtime board 套用狀態色**
Use semantic state colors for stage/job statuses.

- [ ] **Step 2: 將 logs / metrics / step details 收進 diagnostics drawer**
Do not overload the board with diagnostic text.

- [ ] **Step 3: 驗證 runtime readability**
Manual browser check on failed / running / completed samples.

- [ ] **Step 4: Commit**
```bash
git add frontend/src/components/StageLaneBoard.tsx frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx
git commit -m "feat: refine runtime board diagnostics presentation"
```

---

## Phase 5: Polish And Verification

### Task 12: family-wide interaction polish

**Files:**
- Modify: `frontend/src/index.css`
- Modify: relevant `pipeline-family` components

- [ ] **Step 1: 統一 hover / active / selected / focus-visible**
Align all family components with the shared state contract.

- [ ] **Step 2: 驗證 theme behavior**
Check:
- light
- dark
- dracula
- autumn

- [ ] **Step 3: 補必要微調**
Only fix deviations from spec; do not invent new visual directions.

- [ ] **Step 4: Commit**
```bash
git add frontend/src/index.css frontend/src/components/pipeline-family frontend/src/components/StageLaneBoard.tsx frontend/src/pages/PipelineConfigPage.tsx frontend/src/pages/PipelineRunsPage.tsx frontend/src/pages/RunDetailPage.tsx
git commit -m "feat: polish pipeline family interaction states"
```

### Task 13: verification pass

**Files:**
- No new code required unless verification reveals defects

- [ ] **Step 1: Run automated verification**
Run:
- `npm run build`
- `npm test -- --run`

- [ ] **Step 2: Run browser QA**
Verify:
- Config
- Runs
- Run Detail
Across:
- light
- dark
- dracula
- autumn

- [ ] **Step 3: Fix only proven regressions**
If any issues appear, patch minimally and rerun the failing verification.

- [ ] **Step 4: Final commit**
```bash
git add frontend
git commit -m "feat: complete pipeline family redesign"
```

---

## Self-Review

### Spec Coverage

- `Config` -> Phases 1 and 2
- `Runs` -> Phase 3
- `Run Detail` -> Phase 4
- shared semantic tokens / state contract -> Phase 1 + Phase 5
- review-summary blockers -> addressed via stage-first workspace, ledger-first runs, attempt-bound run detail, and unified family shell

### Placeholder Scan

- No `TODO` / `TBD`
- No references to deprecated docs in `frontend/docs/archive`
- No React Flow / backend position persistence steps

### Type Consistency

- `stage`, `job`, `step`, `attempt`, `logical run`, `resume`, `rerun` follow canonical domain brief terminology
- selection models are split cleanly:
  - Config -> stage/job
  - Run Detail -> attempt primary, stage/job contextual

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-11-pipeline-family-redesign.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?

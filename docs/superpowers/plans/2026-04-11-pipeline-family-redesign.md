# Pipeline Family Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 依據 IrisPipe pipeline family 的 canonical domain brief、Spec A、Spec B 與 review summary，重構 frontend 的 `Config / Runs / Run Detail`，讓它們成為一致的 pipeline family workspace，正確展示 backend pipeline domain，並在四個允許主題下維持可讀、可操作、可驗證。  
**Architecture:** 採「A 定義不可破壞的 family/domain invariants，B 定義 implementation-facing handoff」的雙文件架構，實作時以 shared family shell、shared state contract、shared semantic token mapping、stage-first board、operations ledger、snapshot-bound run detail 為主軸。保留現有 backend 非 DAG execution model，不新增 backend position persistence。  
**Tech Stack:** React 19、TypeScript、Vite、React Router、TailwindCSS、daisyUI、Vitest、現有 Spring Boot backend API。

---

## 規格來源

- canonical domain source：
  - [IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md)
- family/domain invariant spec：
  - [PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md)
- implementation-facing handoff spec：
  - [PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md)
- review 判定：
  - [PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md)

## 不在本輪範圍

- backend DAG execution model
- backend graph position persistence
- React Flow 方案
- 與 pipeline family 無直接關係的 overview / settings 大改版

## 關鍵 invariant

- `Config` = current config 視角
- `Runs` = logical run history 視角
- `Run Detail` = snapshot-bound logical run workspace
- `Run Detail` 的 page-bound primary selection 永遠是 `attempt`
- `stage` 是主結構；`job` 隸屬 `stage`；`step` 隸屬 `job`
- `resume` 建立既有 run 下的新 attempt
- `rerun` 建立新的 logical run，但沿用舊 snapshot

---

## File Structure

### 必改頁面

- Modify: [frontend/src/pages/PipelineConfigPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineConfigPage.tsx)
- Modify: [frontend/src/pages/PipelineRunsPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineRunsPage.tsx)
- Modify: [frontend/src/pages/RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx)

### 必改共用元件

- Modify: [frontend/src/components/StageLaneBoard.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StageLaneBoard.tsx)
- Modify: [frontend/src/components/PageToolbar.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/PageToolbar.tsx)
- Modify: [frontend/src/components/StatusBadge.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StatusBadge.tsx)
- Modify: [frontend/src/components/ui/Action.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/ui/Action.tsx)
- Modify: [frontend/src/components/ui/Surface.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/ui/Surface.tsx)

### 必改樣式與語意層

- Modify: [frontend/src/index.css](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/index.css)
- Modify: [frontend/src/lib/pipeline-runtime.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-runtime.ts)
- Modify: [frontend/src/lib/pipeline-config-semantics.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-config-semantics.ts)

### 建議新增 family primitives

- Create: `frontend/src/components/pipeline-family/PipelineWorkspaceShell.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineContextStrip.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineStageColumn.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineJobSlab.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineRunsLedger.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineRunRow.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineAttemptTimeline.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineOverviewRail.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

### 必須維持綠燈的測試

- Test: [frontend/src/lib/pipeline-config-semantics.test.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-config-semantics.test.ts)
- Test: [frontend/src/lib/pipeline-runtime.test.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-runtime.test.ts)

---

## 實作策略

### Strategy 1: 先建立 shared family contract，再改頁面

- 先收斂 shared shell、semantic token、shared state contract
- 再改 `Config`
- 再改 `Runs`
- 最後改 `Run Detail`

### Strategy 2: 嚴守 B 的 handoff 與 A 的 guardrail

- A 負責回答「什麼不能變」
- B 負責回答「畫面與互動怎麼落地」
- 若實作中 A/B 衝突，以 A 決定 domain 邊界，再更新 B

### Strategy 3: TDD / verification-first

- 優先補 shared semantics 的單元測試
- 每個 phase 都跑：
  - `npm run build`
  - `npm test -- --run`
- page-level 視覺與互動需加 browser QA

---

## Phase 1: Shared Family Contract

### Task 1: 建立 shared family shell 與 layout vocabulary

**Files:**
- Create: `frontend/src/components/pipeline-family/PipelineWorkspaceShell.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineContextStrip.tsx`
- Modify: [frontend/src/components/PageToolbar.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/PageToolbar.tsx)
- Modify: [frontend/src/components/ui/Surface.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/ui/Surface.tsx)

- [ ] 定義 family shell anatomy：identity row、family tabs、context strip、main workspace。
- [ ] 將 pipeline family 頁面共用的 header/frame 語法抽離，不再在三頁各自拼裝。
- [ ] 保持 shell 穩定，讓切頁是同一 workspace 換視角，不是換整頁設計語言。

### Task 2: 建立 semantic color / state contract

**Files:**
- Modify: [frontend/src/index.css](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/index.css)
- Modify: [frontend/src/components/StatusBadge.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StatusBadge.tsx)

- [ ] 以 daisyUI token 收斂：
  - `base-*` 作為工作面
  - `neutral` 作為結構群組
  - `primary` 作為 selected / focus / primary CTA
  - `success/info/warning/error` 作為 runtime state
- [ ] 明確分離：
  - `selected`
  - `focus`
  - `runtime status`
  - `disabled`
  - `stale`
- [ ] 驗證 `light / dark / dracula / autumn` 都不依賴硬編碼顏色。

### Task 3: 建立 family component inventory 的共用 primitives

**Files:**
- Create: `frontend/src/components/pipeline-family/PipelineStageColumn.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineJobSlab.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineOverviewRail.tsx`
- Create: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

- [ ] 抽出 stage column / job slab / overview rail / diagnostics drawer 的共用 anatomy。
- [ ] 為各元件整理 variants：
  - config lane
  - runtime lane
  - compact slab
  - ledger row
  - logs / metrics / step detail drawer
- [ ] 抽出 shared state props，避免頁面內 ad hoc 控制 selected/hover/error。

---

## Phase 2: Config 重構

### Task 4: 重構 Config page layout

**Files:**
- Modify: [frontend/src/pages/PipelineConfigPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineConfigPage.tsx)
- Modify: [frontend/src/components/StageLaneBoard.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StageLaneBoard.tsx)

- [ ] 將 `Config` 重構為：
  - topology workspace
  - contextual inspector
  - bottom job workspace dock
- [ ] 確保 inspector 是次要面，不壓過 topology。
- [ ] 保持 topology 永遠可見，不因打開 job 編輯而消失。

### Task 5: Stage-first board 與 Job slab

**Files:**
- Modify: [frontend/src/components/StageLaneBoard.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StageLaneBoard.tsx)
- Use/Create: `frontend/src/components/pipeline-family/PipelineStageColumn.tsx`
- Use/Create: `frontend/src/components/pipeline-family/PipelineJobSlab.tsx`

- [ ] stage column 成為清楚的結構單位，不再是模糊卡片或背景層。
- [ ] job slab 只保留必要辨識資訊：
  - name
  - step count
  - issue cue
  - contextual open / drag affordance
- [ ] connector 明確表達 stage barrier / order。
- [ ] hover tools 不造成 reflow。

### Task 6: Config selection model 對齊 invariant

**Files:**
- Modify: [frontend/src/pages/PipelineConfigPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineConfigPage.tsx)
- Modify: [frontend/src/lib/pipeline-config-semantics.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-config-semantics.ts)

- [ ] `Config` 的 primary selection 僅允許 `stage` 或 `job`。
- [ ] stage selection -> stage inspector
- [ ] job selection -> job inspector + dock open
- [ ] click empty area -> clear selection
- [ ] stage/job/step 不可越級。

### Task 7: Job workspace dock

**Files:**
- Modify: [frontend/src/pages/PipelineConfigPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineConfigPage.tsx)

- [ ] dock 成為真正的編輯區，不只是摘要盒。
- [ ] 清楚承載：
  - source / destination
  - steps / executions
  - SQL/query
  - params
  - watermark
  - batch / atomic settings
- [ ] 保持 topology 上下文不丟失。

---

## Phase 3: Runs 重構

### Task 8: Runs 轉成 operations ledger

**Files:**
- Modify: [frontend/src/pages/PipelineRunsPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineRunsPage.tsx)
- Create/Use: `frontend/src/components/pipeline-family/PipelineRunsLedger.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineRunRow.tsx`

- [ ] 讓 ledger 成為唯一主角。
- [ ] context strip 降為低權重操作與訊號列。
- [ ] 若保留 rail，只保留 low-weight contextual summary，不可 dashboard 化。

### Task 9: Runs row 與 filters

**Files:**
- Modify: [frontend/src/pages/PipelineRunsPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineRunsPage.tsx)
- Use/Create: `frontend/src/components/pipeline-family/PipelineRunRow.tsx`

- [ ] 每列清楚呈現：
  - run id
  - latest attempt
  - attempt type
  - timeline / time / duration
  - status
  - resumable / blocked
  - open detail
- [ ] filters 至少支援：
  - all
  - running
  - failed
  - completed
  - resumable
- [ ] 避免 hero 與 ledger 重複敘事。

### Task 10: Runs action hierarchy

**Files:**
- Modify: [frontend/src/pages/PipelineRunsPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineRunsPage.tsx)
- Modify: [frontend/src/components/ui/Action.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/ui/Action.tsx)

- [ ] 僅對齊已被 spec 錨定的 actions：
  - execute
  - resume
  - rerun
  - refresh
- [ ] 未被授權的 actions 不進 handoff 主面。
- [ ] disabled actions 必須保留位置且有 reason。

---

## Phase 4: Run Detail 重構

### Task 11: Run Detail page skeleton

**Files:**
- Modify: [frontend/src/pages/RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx)
- Create/Use: `frontend/src/components/pipeline-family/PipelineAttemptTimeline.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineOverviewRail.tsx`
- Create/Use: `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`

- [ ] 重構為：
  - hero summary
  - attempt timeline
  - runtime board
  - overview rail
  - diagnostics drawer
- [ ] 讓 runtime board 成為主視覺。

### Task 12: Attempt-bound selection model

**Files:**
- Modify: [frontend/src/pages/RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx)
- Modify: [frontend/src/lib/pipeline-runtime.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-runtime.ts)

- [ ] page-bound primary selection 永遠是 `attempt`
- [ ] stage/job 只作 diagnostics target
- [ ] attempt switching 會 rebind：
  - hero
  - board
  - rail
  - drawer
- [ ] stage/job selection 不可覆蓋 attempt selection

### Task 13: Runtime board 與 diagnostics

**Files:**
- Modify: [frontend/src/components/StageLaneBoard.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StageLaneBoard.tsx)
- Modify: [frontend/src/pages/RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx)

- [ ] runtime board 延續 stage-first 結構
- [ ] 清楚表達：
  - `PENDING`
  - `STARTED`
  - `COMPLETED`
  - `FAILED`
  - `STOPPED`
  - `SKIPPED`
  - `NOT_RUN`
- [ ] diagnostics drawer 支援：
  - logs
  - metrics
  - step detail
- [ ] 若無 stage/job target，drawer 顯示 attempt-level diagnostics。

### Task 14: Snapshot / stale / drift rules

**Files:**
- Modify: [frontend/src/pages/RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx)
- Modify: [frontend/src/lib/pipeline-runtime.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-runtime.ts)

- [ ] 明示：
  - current config
  - selected attempt snapshot
  - snapshot drift
- [ ] live update / manual refresh / stale badge 對齊 B spec
- [ ] partial loading / partial error 不可清空整頁

---

## Phase 5: Theme / Responsive / QA

### Task 15: Theme compliance

**Files:**
- Modify: [frontend/src/index.css](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/index.css)
- Spot-check: all pipeline family pages

- [ ] 驗證四個主題：
  - `light`
  - `dark`
  - `dracula`
  - `autumn`
- [ ] dark / dracula 下：
  - stage column 清楚
  - job slab 清楚
  - connector 清楚
  - selected / focus / runtime state 不互相蓋掉

### Task 16: Responsive priority

**Files:**
- Modify: relevant family pages and primitives

- [ ] Desktop：
  - Config：topology > inspector > dock
  - Runs：ledger > filters > compact summary
  - Run Detail：board > timeline > rail > drawer
- [ ] Tablet：
  - inspector / rail 改 sheet
- [ ] Mobile：
  - 保留 stage-first / run-vs-attempt distinction

### Task 17: Verification & browser QA

**Files:**
- Test existing libs
- Add browser QA artifacts only if needed

- [ ] 執行：
  - `npm run build`
  - `npm test -- --run`
- [ ] 進行人工/瀏覽器 QA：
  - Config default / stage selected / job selected / empty
  - Runs default / filtered / empty
  - Run Detail default / other attempt selected / active / failed / drawer open

---

## 建議 Commit 切分

- [ ] Commit 1: `Define pipeline family shared shell and semantic state contract`
- [ ] Commit 2: `Redesign config workspace around stage-first topology and dock`
- [ ] Commit 3: `Convert runs into an operations ledger`
- [ ] Commit 4: `Redesign run detail around attempt-bound runtime board`
- [ ] Commit 5: `Polish themes, responsive behavior, and verification coverage`

---

## 完成定義

- [ ] `Config` 首屏能在 1-2 秒內讀出 stage flow、目前 selection、readiness。
- [ ] `Runs` 首屏能快速判斷 latest / failed / in-flight / resumable runs。
- [ ] `Run Detail` 首屏能讀出：
  - run identity
  - selected attempt
  - runtime board
  - failure / resume path
- [ ] 四個允許主題都不會讓 board / stage / job / connector 融進背景。
- [ ] `selected`、`focus`、`runtime status` 三者清楚分離。
- [ ] 整體 family 不再被 page-local ad hoc 樣式拉散。

---

## 本輪交付說明

- [ ] 本檔是實作前完整計畫，本輪不進行 code implementation。
- [ ] 後續應以這份計畫 + A/B/review 文件共同作為唯一規劃基準。

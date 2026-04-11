# Pipeline Family Redesign Implementation Plan
> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 依據 IrisPipe pipeline family 最終規格，將 frontend 的 `Config / Runs / Run Detail` 收斂成一致的 workspace family，強化 backend domain 語意表達、graph 可讀性、編輯流暢度、run 判讀效率與主題一致性；本計畫不包含 backend DAG 化，也不包含新的 graph position persistence。  
**Architecture:** 以既有 React + React Router + daisyUI/Tailwind 前端為基礎，保留 backend 現行 `stageSequenceOrder + sequenceOrder + attempt/run semantics` 執行模型；前端採 stage-first family workspace、shared board primitives、shared state contract 與 shared semantic color rules。  
**Tech Stack:** React 19、TypeScript、Vite、TailwindCSS、daisyUI、React Router、Vitest、Spring Boot backend 現有 API。

---

## 1. 規格與範圍鎖定

- [ ] 將以下文件視為唯一需求來源，後續實作若與現況畫面衝突，優先遵循規格：
  - [IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md)
  - [PIPELINE_FAMILY_IMPLEMENTATION_SPEC.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_IMPLEMENTATION_SPEC.md)
  - [PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md)
- [ ] 明確排除本輪範圍外項目：
  - backend DAG execution model
  - pipeline graph 自由拉線編輯
  - backend position persistence API
  - 與 pipeline family 無直接關係的 overview/settings 大改版
- [ ] 建立實作前共識：
  - `Config` 是 topology workspace，不是 form dashboard
  - `Runs` 是 operations ledger，不是 KPI dashboard
  - `Run Detail` 是 attempt timeline + stage/job diagnostics workspace
  - 顏色只走 daisyUI semantic tokens，不回到硬編碼色彩

## 2. 目標頁面與核心使用者任務

- [ ] 定義 `Config` 頁面的核心任務：
  - 一眼看懂 pipeline stage flow
  - 快速選取 stage / job
  - 編輯 stage metadata
  - 進入 job workspace 編輯 steps / connections / parameters
- [ ] 定義 `Runs` 頁面的核心任務：
  - 快速分辨最新 run 狀況
  - 找到失敗/可恢復/阻塞的 run
  - 觸發 execute / rerun / resume / stop 等高風險操作
- [ ] 定義 `Run Detail` 頁面的核心任務：
  - 判斷這次 run 的 overall progression
  - 讀懂 attempt 關係與 stage 結果
  - 定位 job failure / skipped / not-run / downstream blocked
  - 做出 resume / rerun / stop 判斷

## 3. 現有檔案與預計變更面

- [ ] 主要頁面：
  - [PipelineConfigPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineConfigPage.tsx)
  - [PipelineRunsPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineRunsPage.tsx)
  - [RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx)
- [ ] 主要共用元件：
  - [StageLaneBoard.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StageLaneBoard.tsx)
  - [PageToolbar.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/PageToolbar.tsx)
  - [StatusBadge.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StatusBadge.tsx)
  - [Action.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/ui/Action.tsx)
  - [Surface.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/ui/Surface.tsx)
- [ ] 主要樣式與語意層：
  - [index.css](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/index.css)
  - [pipeline-runtime.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-runtime.ts)
  - [pipeline-config-semantics.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-config-semantics.ts)
- [ ] 視需要新增的 family primitives：
  - `frontend/src/components/pipeline-family/PipelineFamilyShell.tsx`
  - `frontend/src/components/pipeline-family/PipelineHeroStrip.tsx`
  - `frontend/src/components/pipeline-family/PipelineLedgerRow.tsx`
  - `frontend/src/components/pipeline-family/PipelineAttemptTimeline.tsx`
  - `frontend/src/components/pipeline-family/PipelineDiagnosticsDrawer.tsx`
  - `frontend/src/components/pipeline-family/PipelineBoardStageColumn.tsx`
  - `frontend/src/components/pipeline-family/PipelineBoardJobRow.tsx`

## 4. Shared Design System 任務

- [ ] 建立 pipeline family 的 shared surface contract：
  - shell
  - hero strip
  - board stage column
  - job row
  - inspector rail
  - diagnostics drawer
  - ledger row
- [ ] 建立 shared state contract：
  - default
  - hover
  - selected
  - active-running
  - success
  - warning
  - error
  - blocked / skipped / not-run
  - disabled / loading
- [ ] 在 [index.css](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/index.css) 只保留 semantic token 派生規則，不再用 ad hoc page-level 覆寫修畫面。
- [ ] 以 [$daisyui](/C:/Users/16/.codex/skills/daisyui/SKILL.md) 規則收斂色彩語意：
  - `base-*` 作為頁面工作面
  - `neutral` 作為結構群組與 board column
  - `primary` 作為目前聚焦/選取
  - `secondary / accent` 作為次級強調
  - `info / success / warning / error` 作為 runtime state
- [ ] 定義 motion / hover / selected 準則：
  - hover 只做微量回饋，不造成 layout reflow
  - selected 使用 `surface + edge + ring`，不只靠細 border
  - 高風險操作 hover/active 需明確，但不搶主畫面

## 5. Config Page 實作計畫

- [ ] 重新定義 `Config` 頁面結構：
  - header / breadcrumb
  - compact family strip
  - topology board 為主體
  - contextual inspector 為右側次要面
  - bottom dock 為 job workspace
- [ ] 改造 [StageLaneBoard.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/components/StageLaneBoard.tsx) 為 `config-topology mode`：
  - stage 是明確 column，不是淡淡的卡片背景
  - stage-to-stage connector 清楚可讀
  - job row 只保留辨識所需資訊：名稱、steps、issue、必要 actions
  - hover tools 改為 overlay，不推動內容
  - drag handle 不和 title 重疊
- [ ] 在 [PipelineConfigPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineConfigPage.tsx) 中實作互動分層：
  - 點 stage 切 stage inspector
  - 點 job 切 job inspector
  - 雙擊或主要 CTA 進入 bottom dock job workspace
  - 取消選取與切換不應造成版面跳動
- [ ] 收斂 stage actions：
  - `Add Stage`
  - `Move Left / Move Right`
  - `Delete Stage`
  - `Add Job`
  - 行為應集中在穩定區域，不可因 selected 在 column 中插入新列把 jobs 往下推
- [ ] 重整 job workspace：
  - step navigator
  - step editor
  - connection / parameter / batch settings
  - 減少無效摘要，強化主操作區

## 6. Runs Page 實作計畫

- [ ] 將 [PipelineRunsPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/PipelineRunsPage.tsx) 重新定義成 ledger-first 頁面：
  - 上方只保留必要 hero strip
  - 下方 run list / run ledger 為主體
- [ ] 每一列 run row 至少要清楚呈現：
  - run id
  - latest attempt
  - status
  - stage progression
  - start/end/duration
  - resumable / rerunnable / blocking reason
  - primary actions
- [ ] 對高風險操作提供一致 interaction：
  - execute
  - rerun
  - resume
  - stop
  - delete
- [ ] 確保 `Runs` 頁不再退化成 KPI dashboard + 表格混體。

## 7. Run Detail Page 實作計畫

- [ ] 將 [RunDetailPage.tsx](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/pages/RunDetailPage.tsx) 重新定義為三區：
  - attempt timeline
  - stage/job board
  - diagnostics drawer / overview rail
- [ ] board 要與 `Config` 的 stage/job 語法同源，但有 runtime 狀態色：
  - success
  - warning
  - error
  - running
  - skipped
  - not-run
  - blocked
- [ ] diagnostics drawer 要能支援：
  - 選取 stage 看 stage summary
  - 選取 job 看 job execution detail
  - 顯示 failure / downstream barrier / resume hints
- [ ] attempt timeline 應明確區分：
  - logical run
  - attempt
  - resume 與 rerun 差異

## 8. Shared Content 與 Edge Cases

- [ ] 統一文案策略：
  - 避免工程縮寫主導首屏
  - `Active` 這種不精準語意避免再出現
  - `resume` / `rerun` / `skipped` / `not-run` / `blocked` 需有一致用語
- [ ] 覆蓋 edge cases：
  - empty pipeline
  - empty stage
  - stage 無 jobs
  - job 無 steps
  - validation issues
  - run 無 attempts
  - stopped mid-stage
  - downstream not-run
  - deleted/missing latest run
- [ ] empty / loading / error 狀態必須有 family-consistent presentation。

## 9. Responsive 與 Theme 驗證

- [ ] 明確定義 desktop 為主要工作模式，但 tablet / narrow desktop 仍需可用。
- [ ] 在四個允許主題都驗證：
  - `light`
  - `dark`
  - `dracula`
  - `autumn`
- [ ] 驗證項目：
  - stage column 是否清楚
  - connectors 是否在暗色主題仍清晰
  - selected / hover 是否不靠單薄 border
  - board 與 inspector 是否有足夠層次

## 10. 測試與驗證計畫

- [ ] 維持既有 library tests 綠燈：
  - [pipeline-config-semantics.test.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-config-semantics.test.ts)
  - [pipeline-runtime.test.ts](/C:/Users/16/Downloads/codes/IrisPipe/frontend/src/lib/pipeline-runtime.test.ts)
- [ ] 擴充至少一輪 UI-level 驗證，優先級如下：
  - critical interaction smoke tests
  - page render regression tests
  - visual/browser QA for Config / Runs / Run Detail
- [ ] 每一階段完成後至少執行：
  - `npm run build`
  - `npm test -- --run`
  - 必要時實際瀏覽器截圖與人工 QA

## 11. 建議實作順序

- [ ] Phase 1: shared family primitives + color/state contract
- [ ] Phase 2: Config topology + inspector + bottom dock
- [ ] Phase 3: Runs ledger
- [ ] Phase 4: Run Detail timeline + board + diagnostics
- [ ] Phase 5: theme polish + responsive polish + browser QA
- [ ] Phase 6: doc sync 與最終回歸驗證

## 12. 建議 commit 切分

- [ ] Commit 1: `Define pipeline family shared primitives and semantic state contract`
- [ ] Commit 2: `Redesign pipeline config workspace around topology board and bottom dock`
- [ ] Commit 3: `Convert pipeline runs page to operations ledger`
- [ ] Commit 4: `Redesign run detail around attempt timeline and diagnostics board`
- [ ] Commit 5: `Polish themes, responsive behavior, and regression coverage`

## 13. 完成定義

- [ ] `Config` 首屏能在 1-2 秒內讀出 stage flow 與目前選取焦點。
- [ ] `Runs` 首屏能快速判斷最新狀況、失敗點、可恢復 run。
- [ ] `Run Detail` 首屏能判斷 attempt 關係、stage 狀態與 job failure 位置。
- [ ] 四個允許主題都不會讓 board / stage / job 融進背景。
- [ ] hover / selected / active / danger actions 有一致回饋且不造成 layout 跳動。
- [ ] 文件、元件、樣式命名都能支撐後續維護，而不是頁面內拼湊。

## 14. 本輪交付說明

- [ ] 本檔為實作前計畫文件，本輪不進行 code implementation。
- [ ] 本檔與 spec 文件可先提交，作為後續實作的唯一計畫基準。

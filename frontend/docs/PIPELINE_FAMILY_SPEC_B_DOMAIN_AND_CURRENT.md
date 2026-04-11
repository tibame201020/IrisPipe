# IrisPipe Pipeline Family Spec B

角色：Senior UIUX with IrisPipe Pipeline Domain + Current View  
來源限制：以 canonical domain brief 為唯一 backend/domain 真實來源；current view 僅用來診斷現況落差，不升格為 domain 真理。

---

## 0. Spec 定位

- `Spec A` 負責 family/domain contract。
- `Spec B` 負責 implementation-facing handoff。
- `Config` = `topology workspace + contextual inspector + job workspace dock`
- `Runs` = `operations ledger`
- `Run Detail` = `single logical run workspace`，內含 attempt timeline 與 selected attempt runtime board。

### Run Detail 視角修正

- `Run Detail` 不是「current attempt 專頁」。
- 它是「單一 logical run 的 detail workspace」。
- 預設可聚焦 latest 或最 relevant attempt，但必須保留 timeline，允許切換到同一 run 的其他 attempts。
- 資訊優先序固定：
  - `run identity`
  - `selected attempt context`
  - `runtime board`
  - `diagnostics`

---

## 1. Annotated Screen Inventory

## 1.1 Desktop

### Config

1. `Config / default`
   - identity row
   - family tabs
   - readiness/context strip
   - topology workspace
   - contextual inspector
   - job workspace dock
2. `Config / stage selected`
   - selected stage
   - stage inspector
   - dock 收斂
3. `Config / job selected`
   - selected job
   - job inspector
   - dock 展開
4. `Config / empty`
   - no stages
   - stage with no jobs
5. `Config / validation state`
   - runnable
   - has issues
   - blocked from execute
6. `Config / drag state`
   - dragging stage
   - dragging job
   - insertion cue

### Runs

1. `Runs / default`
   - compact hero strip
   - filters
   - ledger
2. `Runs / filtered`
   - all
   - in flight
   - failed
   - completed
   - resumable
3. `Runs / loading`
   - ledger skeleton
4. `Runs / empty`
   - no runs yet
   - no results for filters

### Run Detail

1. `Run Detail / default`
   - hero summary
   - attempt timeline
   - runtime board
   - overview rail
   - diagnostics drawer
2. `Run Detail / alternate attempt selected`
   - selected attempt changes board/rail/drawer
3. `Run Detail / active run`
   - auto-refresh
   - active markers
   - stop action enabled
4. `Run Detail / failed or resumable`
   - failed stage emphasis
   - resume affordance
   - resume path summary
5. `Run Detail / drawer open`
   - logs
   - metrics
   - step detail

## 1.2 Tablet

- `Config`
  - topology remains primary
  - right rail becomes side sheet
  - dock remains bottom sheet
- `Runs`
  - ledger remains primary
  - hero shrinks into compact strip
- `Run Detail`
  - runtime board remains primary
  - overview rail becomes side sheet
  - diagnostics remains bottom drawer

## 1.3 Mobile

- `Config`
  - stage list as primary
  - selected job in bottom/full-height sheet
- `Runs`
  - single-column ledger rows
- `Run Detail`
  - hero
  - attempt timeline
  - collapsible stage sections
  - diagnostics tabs

## 1.4 關鍵狀態變體

- empty
- loading
- partial loading
- error
- stale
- selected
- active
- disabled
- danger confirm

---

## 2. Family Shell 與 Page-Level 結構

```text
+--------------------------------------------------------------------------------------+
| App shell / left navigation                                                          |
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
+--------------------------------------------------------------------------------------+
| Main workspace                                                                       |
+--------------------------------------------------------------------------------------+
```

### Layout 原則

- `Identity Row`：表達 pipeline identity 與 family context
- `Family Tabs`：切換 Config / Runs / Run Detail
- `Context Strip`：顯示該頁必要狀態與主 actions
- `Main Workspace`：每頁唯一主角

### 視覺層級

- L1：shell/chrome
- L2：page anchor area
- L3：contextual panel
- L4：diagnostics/inspector
- L5：chips/actions/meta

---

## 3. Config Implementation Spec

## 3.1 Page IA

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs: Config | Runs                                                           |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
| [Topology] [4 stages] [6 jobs] [Runnable]                            [Primary Actions]|
+--------------------------------------------------------------------------------------+
| Topology workspace                                                | Context rail     |
|                                                                    |                 |
|  Stage flow canvas                                                 | Pipeline /      |
|                                                                    | Stage / Job     |
|                                                                    | Inspector       |
+--------------------------------------------------------------------------------------+
| Job workspace dock                                                                  |
+--------------------------------------------------------------------------------------+
```

## 3.2 Screen Anatomy

### Topology Workspace

- main reading surface
- left-to-right stage flow
- stage connector
- stage columns
- job slabs

### Context Rail

- pipeline summary
- selected stage summary
- selected job summary
- readiness / validation context
- contextual actions

### Job Workspace Dock

- source / destination
- steps / executions
- SQL/query
- params
- watermark
- batch / atomic settings

## 3.3 Stage Column Anatomy

### Stage Header

- stage badge
- stage name
- job count
- compact stage actions

### Stage Body

- job rows / slabs
- empty-stage CTA

### Stage Helper Strip

- jobs ready
- issue count
- order / barrier hint

## 3.4 Job Slab Anatomy

### Primary line

- job name
- issue hint

### Secondary line

- step count
- compact interaction row: `drag | contextual open`

### Rules

- name line cannot be crowded out by controls
- drag affordance must be visually distinct
- action row must not overlap title

## 3.5 Page-Level Flows

### Selection

- click stage -> stage selected -> rail shows stage inspector
- click job -> job selected -> rail shows job inspector -> dock opens
- click empty area -> selection clears -> rail falls back to pipeline summary

### Drag

- drag stage -> stage placeholder + insertion cue
- drag job -> job reorder cue within stage
- no layout jump for hover tools

### Save / Execute

- `Save` high emphasis
- `Execute` high emphasis but blocked by readiness issues
- disabled state must show reason

## 3.6 Current View -> Target View

### Current View Issues

- stage boundaries too soft
- job actions too crowded
- right rail too visually strong
- dock lacks clear role as actual editor

### Target Direction

- stage = strong column block
- job = compact slab
- rail = secondary contextual panel
- dock = clear editing zone without hiding topology

---

## 4. Runs Implementation Spec

## 4.1 Page IA

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
| Latest run / inflight / resumable / avg runtime                     [Refresh][Execute]|
+--------------------------------------------------------------------------------------+
| Filter row                                                | Low-weight contextual rail|
| [All] [Running] [Failed] [Completed] [Resumable]          | selected run summary      |
+--------------------------------------------------------------------------------------+
| Operations ledger                                            | contextual rail          |
+--------------------------------------------------------------------------------------+
```

## 4.2 Ledger Layout

### Columns

- Run
- Latest Attempt
- Timeline
- Status
- Resume Hint
- Primary Action

### Rules

- hero/context strip is lighter than ledger
- ledger header stays sticky under filters
- row density favors scanability over dashboard aesthetics

## 4.3 Row Anatomy

- run identity
- latest attempt summary
- timeline summary
- effective status
- resumable / blocked cue
- open detail action

## 4.4 Flow Rules

- row click opens `Run Detail`
- filters update ledger, not the whole shell
- hero is a quiet signal strip, not a KPI dashboard
- resumable / failed / active must be first-class scan cues

---

## 5. Run Detail Implementation Spec

## 5.1 Page IA

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Hero summary                                                                         |
+--------------------------------------------------------------------------------------+
| Attempt timeline                                                                     |
+--------------------------------------------------------------------------------------+
| Runtime board                                                     | Overview rail    |
+--------------------------------------------------------------------------------------+
| Diagnostics drawer                                                                    |
+--------------------------------------------------------------------------------------+
```

## 5.2 Hero Summary Anatomy

- run id
- effective run status
- selected attempt
- attempt count / latest attempt cue
- duration / timestamps
- primary run actions

## 5.3 Attempt Timeline Anatomy

- attempt number
- attempt kind
- status
- is-selected marker
- created time

## 5.4 Runtime Board Anatomy

- stage-first board
- each stage contains runtime job rows
- status cues must cover:
  - `PENDING`
  - `STARTED`
  - `COMPLETED`
  - `FAILED`
  - `STOPPED`
  - `SKIPPED`
  - `NOT_RUN`

## 5.5 Overview Rail Anatomy

- run overview
- selected attempt summary
- resume path / blocked path
- selected node summary
- contextual actions

## 5.6 Diagnostics Drawer Anatomy

- scope label
- tabs:
  - Logs
  - Metrics
  - Step Detail
- tab content states:
  - ready
  - loading
  - empty
  - error

## 5.7 Page-Level Flows

- select attempt -> hero keeps run identity, board/rail/drawer rebind to selected attempt
- select stage/job -> diagnostics scope changes, overview rail updates
- open drawer -> no navigation away from board
- stop / rerun / resume -> danger or contextual action group, not mixed into neutral controls

---

## 6. Design Token / daisyUI Theme Mapping

允許主題僅有：

- `light`
- `dark`
- `dracula`
- `autumn`

## 6.1 Semantic Mapping

### 結構層

- app background -> `base-100`
- secondary surface -> `base-200`
- tertiary separators / subtle cards -> `base-300`
- default text/icon -> `base-content`

### 結構群組

- shell / stage lane / grouped panels -> `neutral`
- content on neutral -> `neutral-content`

### 主焦點

- selected row/card/tab/primary CTA -> `primary`
- content on primary -> `primary-content`

### 次焦點

- secondary CTA -> `secondary`
- optional micro emphasis -> `accent`

### Runtime 狀態

- `COMPLETED` -> `success`
- `FAILED` -> `error`
- `STARTED` / active / in-flight -> `info`
- `STOPPED` / resumable caution / blocked attention -> `warning`
- `PENDING` / `SKIPPED` / `NOT_RUN`
  - 不用大面積 state fill
  - 優先用 `base-*` / `neutral` + label + icon 差異

## 6.2 Usage Rules

- 不使用 raw hex 作為 theme-dependent surface 或 text
- 不把 `success/error/info/warning` 當 stage lane 基底色
- 不以顏色單獨區分 `SKIPPED` vs `NOT_RUN`
- selected 必須使用 `surface + ring + emphasis`
- focus 必須獨立於 selected

---

## 7. Component Inventory / Variant / State Matrix

## 7.1 Component Inventory

- `PipelineWorkspaceShell`
- `StageColumn`
- `JobSlab`
- `ContextRail`
- `JobWorkspaceDock`
- `RunLedgerRow`
- `AttemptTimelineItem`
- `OverviewRailSection`
- `DiagnosticsDrawer`
- `StatusChip`
- `PrimaryActionGroup`
- `EmptyState`
- `LoadingSkeleton`
- `ConfirmDialog`

## 7.2 Variants

### StageColumn

- config lane
- runtime lane
- collapsed lane

### JobSlab

- config slab
- runtime slab
- compact slab

### RunLedgerRow

- default
- selected
- latest
- filtered highlight

### AttemptTimelineItem

- initial
- resume
- rerun

### DiagnosticsDrawer

- logs
- metrics
- step detail

## 7.3 State Matrix

### Shared States

- default
- hover
- focus
- selected
- disabled
- loading
- error
- stale
- active

### Component Notes

- `StageColumn`: drag-target state required
- `JobSlab`: issue state, active-runtime state required
- `RunLedgerRow`: stale + resumable + blocked states required
- `AttemptTimelineItem`: current-context + selected states must be distinct
- `PrimaryActionGroup`: loading + confirm-required must be explicit

---

## 8. Action & Flow Matrix

## 8.1 Selection

- source:
  - Config: click stage or job
  - Runs: click run row
  - Run Detail: click attempt timeline item
- result: single page-bound primary selection only
- side effects:
  - rail updates
  - drawer scope updates
  - dock opens/closes where appropriate

`Run Detail` 內的 stage/job click 不屬於 page-bound primary selection 來源；它們只更新 diagnostics target。

## 8.2 Attempt Switching

- source: click attempt timeline item
- result:
  - run identity remains
  - selected attempt changes
  - board + rail + drawer all rebind
- partial loading allowed
- full page wipe forbidden

## 8.3 Resume

- entry points:
  - Runs row
  - Run Detail hero
  - Run Detail rail
- precondition:
  - run is resumable
- result:
  - new attempt under same logical run
  - timeline grows

## 8.4 Rerun

- entry points:
  - Runs row
  - Run Detail hero
- precondition:
  - rerun allowed
- result:
  - new logical run
  - old snapshot reused

## 8.5 Stop

- entry points:
  - active Run Detail hero
  - contextual action group
- precondition:
  - active run/attempt
- result:
  - danger confirm
  - pending stop feedback
  - final stopped state

## 8.6 Drawer / Rail / Dock

- `ContextRail`
  - desktop fixed
  - tablet/mobile sheet
- `JobWorkspaceDock`
  - Config only
  - opens on job selection
- `DiagnosticsDrawer`
  - Run Detail only
  - scoped by selected stage/job/step

## 8.7 Refresh

- manual refresh everywhere
- preserve selection / scroll / open tab where possible
- reset stale badge on success

---

## 9. Live Update / Stale Data Contract

## 9.1 Auto Refresh

適用：

- active run
- in-flight attempt
- recently mutated views

範圍：

- Runs ledger
- Run Detail selected attempt
- overview rail
- currently open diagnostics scope

## 9.2 Manual Refresh

- Config / Runs / Run Detail 全部提供
- manual refresh 優先
- 成功後清 stale badge

## 9.3 Stale Badge

顯示條件：

- freshness threshold exceeded
- background refresh failed
- page regained focus and data may be outdated

位置：

- page-level near timestamp
- section-level if only one section stale

## 9.4 Partial Loading / Error

- new data not yet ready -> keep old data + stale badge + section skeleton
- logs failed but board okay -> only drawer shows error
- entire page whiteout is forbidden

## 9.5 Snapshot Drift

- Config：明示 current config
- Run Detail：明示 selected attempt snapshot
- drift 提示文案：
  - `Viewing run snapshot, not current config`
  - `Current config may differ from this run snapshot`

## 9.6 Selection Persistence

- refresh 後優先保留 selection
- 若 selected entity 不存在，回退到最近有效父層

---

## 10. Content Matrix

## 10.1 Field Labels

### Config

- Pipeline name
- Stages
- Jobs ready
- Validation issues
- Source connections
- Destination connections

### Runs

- Run #
- Latest attempt
- Attempt type
- Started at
- Duration
- Status
- Action

### Run Detail

- Run #
- Selected attempt
- Attempt type
- Created at
- Duration
- Stage progress
- Resume path
- Logs / Metrics / Step Detail

## 10.2 Empty States

- `No stages yet`
- `No jobs in this stage`
- `No runs yet`
- `No diagnostics available for this scope`

## 10.3 Disabled Reasons

- Execute disabled -> `Resolve validation issues before execute`
- Resume disabled -> `This run is not resumable`
- Stop disabled -> `Only active runs can be stopped`
- Drawer tab disabled -> `No step selected`

## 10.4 Time / Duration Format

- absolute -> `YYYY/MM/DD HH:mm:ss`
- relative time can be supporting only
- duration:
  - `0s`
  - `8s`
  - `2m 14s`

## 10.5 Truncation / Recovery

- pipeline/stage/job names single-line truncate
- full value recoverable by hover/focus/inspector
- important IDs do not truncate

## 10.6 Canonical Status Labels

- `PENDING`
- `STARTED`
- `COMPLETED`
- `FAILED`
- `STOPPED`
- `SKIPPED`
- `NOT_RUN`

`resumable`、`blocked`、`active` 是輔助 badge，不取代主 status。

---

## 11. Responsive Priority

## 11.1 Desktop >= 1280

- Config：topology > inspector > dock
- Runs：ledger > filters > compact summary
- Run Detail：board > timeline > rail > drawer

## 11.2 Tablet 768-1279

- Config：topology > dock > inspector sheet
- Runs：ledger > filters > summary chips
- Run Detail：board > timeline > drawer > rail sheet

## 11.3 Mobile <= 767

- Config：stage list > selected job sheet > readiness summary
- Runs：ledger rows > status filter > summary count
- Run Detail：hero > attempt timeline > stage accordions > diagnostics tabs > secondary overview

### Responsive Rules

- 先保留辨識與操作，再縮資訊密度
- mobile 不可完全失去 stage-first 結構
- 任一 breakpoint 都保留 run vs attempt distinction

---

## 12. Accessibility 與 Motion

## 12.1 Accessibility

- keyboard path must cover:
  - family tabs
  - filters
  - stage lanes
  - job slabs
  - run rows
  - attempt timeline
  - drawer tabs
- focus ring must be visible in all 4 themes
- status must not rely on color only
- icon-only controls need tooltip + aria label
- drawer/sheet/confirm dialog require focus trap and return focus point

## 12.2 Motion

- hover/press: `120-160ms`
- selection/rail update: `160-220ms`
- drawer/sheet: `220-280ms`
- board refresh: crossfade + state continuity
- runtime updates animate changed units only

---

## 13. Handoff Checklist / DoD

### 13.1 Handoff Checklist

- [ ] 三頁主角明確且一致
- [ ] Run Detail 已修正為 run workspace，不是 attempt-only page
- [ ] 四個 theme 都只走 daisyUI semantic tokens
- [ ] shared states 已定義
- [ ] responsive priority 已定義
- [ ] content / empty / disabled reason 已定義
- [ ] execute / resume / rerun / stop / refresh / attempt switch 已定義
- [ ] snapshot vs current config 已定義
- [ ] stale badge / live update / partial loading 已定義

### 13.2 Engineering-Ready Work Items

1. family shell & page scaffolding
2. token/theme compliance
3. Config topology system
4. Config inspector + dock
5. Runs ledger + filters
6. Run Detail hero + timeline
7. runtime board
8. overview rail
9. diagnostics drawer
10. live update / stale contract
11. empty / loading / error states
12. responsive pass
13. accessibility pass

### 13.3 DoD

- 每個 work item 都對應：
  - component
  - states
  - empty/loading/error
  - responsive
  - accessibility
- 工程不需要回頭猜 domain 才能切票

---

## 14. Current View 與目標差距

### Config

- stage 邊界仍不夠穩
- job actions 噪音偏高
- right rail 容易過重
- dock 作為編輯區的角色仍不夠清楚

### Runs

- summary strip 容易 dashboard 化
- ledger 主角感不足時會影響掃描效率

### Run Detail

- hero / timeline / board / rail / drawer 容易權重過近
- 必須強化 selected attempt 對 board/rail/drawer 的 rebind 語意

### Theme

- dark / dracula 下 stage / job / connector 必須靠 semantic hierarchy 維持清晰，不可只靠細 border

---

## 15. Focused Revision: Blocker Alignment

## 15.1 Run Detail Selection Model

`Run Detail` 是單一 logical run 的 detail workspace，但 page-bound primary selection 永遠是 `attempt`。

### Selection 規則

- 頁面載入時，系統需預設選到一個 attempt。
- hero、runtime board、overview rail、diagnostics drawer 全部都以上述 `selected attempt` 為上游 context。
- `attempt timeline item` 是 `Run Detail` 唯一的一級 selection 來源。
- `stage` 與 `job` 在 `Run Detail` 中不是 page-bound primary selection。
- `stage` 與 `job` 只能作為：
  - `diagnostics target`
  - `board focus target`

### Interaction Contract

- 切換 `attempt`
  - 改變整頁主上下文
  - hero、board、rail、drawer 全部切換
- 點擊 `stage/job`
  - 不改變 page primary selection
  - 只改變 diagnostics scope 與 contextual highlight
- drawer tabs 的作用域永遠是：
  - `selected attempt`
  - 加上可選的 `selected diagnostics target`

若沒有選到 stage/job，drawer 顯示 attempt-level diagnostics；若有選到 stage/job，drawer 顯示該 target 在 selected attempt 下的 diagnostics。

## 15.2 Runs Page Skeleton 與 A 對齊

`Runs` 的主角是 `operations ledger`。

### 頁面骨架

- identity row
- context row
- compact status / filter strip
- ledger main column
- low-weight contextual rail

### Rail 規則

contextual rail 若存在，只能作為輕量 contextual summary，不可與 ledger 爭主角，不可變成 dashboard。

它的職責僅限：

- selected or highlighted run 的輕摘要
- filters context
- 非主敘事的輔助說明

它不得承擔：

- 主要 KPI 儀表板
- 大面積 summary 卡群
- 重複 ledger 已可掃描得出的主資訊

### 資訊優先序

1. ledger rows
2. filters / status chips
3. low-weight contextual rail

### 狀態規則

- loading 時優先出現 ledger row skeleton，rail 僅顯示低權重 placeholder。
- empty/filter-empty 時，empty state 置於 ledger 主欄，rail 不可成為主要空狀態容器。
- row selection 或 hover 只可強化 ledger 掃描，不可觸發高權重頁面重組。

## 15.3 Action Surface Governance

本 spec 只將 canonical brief 已明示或可直接推導的 action surface 視為 handoff-required。

### handoff-required actions

- `execute`
- `resume`
- `rerun`
- `stop`
- `refresh`
- `attempt switching`
- `drawer / rail / dock` 開關
- 與 selection model 直接相關的 contextual open/close

### 不得在本 spec 中被寫成 invariant 或 handoff-required 的 actions

- `Import`
- job-level `delete`
- stage/job creation shortcuts 的具體位置與樣式
- 任意 icon-only management actions
- 其他未被 canonical brief 或 A spec 錨定的操作面

### Optional / Provisional Actions

上述未被錨定 actions 一律降級為 `implementation only if product confirms`。

若後續需要承接，應以獨立 action inventory 補件，不得混入本輪 family invariant。

### Action Inventory Note

- Config、Runs、Run Detail 先定義：
  - `where primary actions belong`
  - `how action hierarchy works`
- 不預設每一個具體按鈕都已被產品確認。
- 對未被授權的操作，只保留佔位原則：
  - 可存在於 overflow
  - 不得搶 primary CTA
  - 不影響 family invariant 與 selection model

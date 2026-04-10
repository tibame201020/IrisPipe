# IrisPipe Pipeline Family Domain Design Spec

本文件只根據 pipeline domain 與已驗證的資料模型制定介面規格，不參考現況畫面長相，不討論技術框架選型。

已核對的事實來源：

- `frontend/docs/IRISPIPE_PIPELINE_DOMAIN_BRIEF.md`
- `frontend/src/types/irispipe.ts`
- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`
- `backend/src/main/java/irispipe/core/service/PipelineExecutionService.java`
- `backend/src/main/java/irispipe/core/service/PipelineRunControlPolicy.java`
- `backend/src/main/java/irispipe/model/PipelineRunStatus.java`
- `backend/src/main/java/irispipe/model/PipelineRunExecutionKind.java`
- `backend/src/main/java/irispipe/model/ExecutionType.java`
- `backend/src/main/java/irispipe/model/AtomicLevel.java`

## 0. Domain Baseline

- `stage` 有明確順序，stage 間存在 barrier；同一 stage 內 jobs 可平行。
- `job` 才是主要編輯單位；stage 主要負責 orchestration，不是深度編輯面。
- `step` 是 job 內的 execution sequence，型別為 `INSERT / UPDATE / UPSERT / DELETE / EXECUTE`。
- `resume` 是同一個 logical run 下的新 attempt，從第一個未完成 stage 接續。
- `rerun` 不是 attempt。它會建立新的 logical run，再從舊 run snapshot 啟動。
- 因此 `Run Detail` 的 attempt 軌跡只應表達 `INITIAL / RESUME`，`rerun` 應跳去新的 run。
- delete 只應出現在 terminal run；stop 只應出現在 in-flight run；resume 只應出現在可恢復的 terminal failure-like run。

## 最推薦主方案

### 主方案 A: Stage-First Workspace Family

這是最推薦的主方案。

核心做法：

- `Config` 用 stage-first topology workspace 呈現 pipeline 結構。
- `Runs` 用 operations ledger 呈現 logical run 歷史，而不是 KPI dashboard。
- `Run Detail` 用 stage board + diagnostics 呈現 attempt 與失敗定位。
- 三頁共用同一套語法：`family header -> signal strip -> primary workspace -> secondary diagnostics`。

推薦原因：

- 最符合 IrisPipe 的 domain 重心: `stage barrier + job parallelism + runtime attempts`。
- 能同時兼顧 graph clarity 與編輯效率。
- 能把 `resume` 與 `rerun` 的 domain 差異表達清楚。
- 可以讓 `Config / Runs / Run Detail` 保持同一家族，而不是三種不同產品語法。

## 1. 整體設計原則

### 1.1 同一條 pipeline，只是三個工作視角

- `Config` 回答「這條 pipeline 怎麼被定義」。
- `Runs` 回答「這條 pipeline 最近怎麼跑」。
- `Run Detail` 回答「某次 run 實際發生了什麼」。
- 三頁都必須讓使用者持續感覺自己還在同一個 pipeline family 裡。

### 1.2 Stage-first，不是 node-first

- stage 是流程骨架，必須先被看見。
- job 是 stage 內的主要工作單元，必須第二層清楚。
- step 是 job workspace 內部細節，不應直接污染整張 topology 畫布。

### 1.3 Job 是主要編輯單位

- stage 只負責 flow、排序、barrier、群組。
- job 才承載設定、connections、atomic level、steps。
- 因此 `Config` 需要兩層模式:
  - `Topology mode`
  - `Job workspace mode`

### 1.4 Runtime 狀態是第一層資訊

- 在 `Runs` 與 `Run Detail` 中，status 必須先於描述文字被掃到。
- 使用者應先辨認: 成功、進行中、已停止、失敗、可恢復。
- status 不是補充 badge，而是 row、lane、tile、actions 的主導語意。

### 1.5 主畫布優先於摘要

- 主要工作面必須在首屏就開始。
- 摘要只能幫助理解，不可擠壓主畫布。
- 任何右側欄、底部 diagnostics、上方 strip 都不得搶走主畫布主位。

### 1.6 高風險操作要把後果講清楚

- `resume / rerun / stop / delete` 都是具 domain 後果的操作。
- 介面需要先表達可否執行，再表達操作結果，最後才是觸發按鈕。
- 不可把這些動作藏成 hover-only icon。

### 1.7 家族一致，但頁面主角不同

- 一致的是 shell、間距、選取態、狀態語法、面板層級。
- 不一致的是主角:
  - `Config` 主角是 topology。
  - `Runs` 主角是 ledger。
  - `Run Detail` 主角是 stage board。

## 2. Config / Runs / Run Detail 的資訊架構與版面策略

## 2.1 Config

### 2.1.1 目標

- 快速理解 pipeline stage flow。
- 快速選取 stage / job。
- 快速進入 job workspace 編輯 steps。
- 在不離開 family 的前提下完成 import、save、execute。

### 2.1.2 IA

1. Family header
2. Signal strip
3. Topology workspace
4. Contextual inspector
5. Job workspace mode

### 2.1.3 版面策略

#### Desktop: Topology mode

- 上方一列 `family header`
  - pipeline name
  - folder path
  - save state
  - primary actions: `Save`, `Import`, `Execute`
- header 下方一列 `signal strip`
  - stage count
  - job count
  - invalid jobs count
  - unsaved changes
  - last saved time
- 主要內容區為 `topology canvas + inspector`
  - canvas: 72% to 78%
  - inspector: 22% to 28%, 寬度固定 320px 到 400px
- stage 採左到右 sequence lanes
- lane 內 jobs 採直向 stack 或 2-column compact grid，依 job 數量切換

#### Desktop: Job workspace mode

- 不用 modal 疊整頁。
- 改成 family 內的獨立工作模式。
- 三欄結構:
  - 左欄 `job semantics rail`: 280px to 320px
  - 中欄 `step navigator`: 240px to 280px
  - 右欄 `step editor`: min 640px
- 左欄固定顯示:
  - job name
  - stage
  - atomic level
  - source / dest completeness
  - fetchSize / batchSize / deleteThreshold
- 中欄只負責 step order、type、validation、move、add、remove
- 右欄才顯示 step editor 詳情

#### Tablet / Mobile

- Topology 改為直向 stage stack。
- inspector 變成 bottom sheet 或 secondary tab。
- Job workspace 變成兩層:
  - `Steps`
  - `Step Detail`

### 2.1.4 必要規則

- `pipeline summary` 不常駐獨立大卡；它屬於 inspector 的預設內容。
- stage reorder 與 job move 必須在穩定 drop target 上完成，不靠浮動 overlay。
- `Save` 永遠在 header 右上固定位置，不因選取 stage / job 改變。
- `Execute` 在有 validation blockers 時禁用，並提供 blockers count 與入口。

## 2.2 Runs

### 2.2.1 目標

- 一眼讀出最新 run 與歷史節奏。
- 快速篩出 active / failed / resumable runs。
- 快速進入某次 run detail。
- 快速觸發新的 execute。

### 2.2.2 IA

1. Family header
2. Signal strip
3. Filter strip
4. Run ledger

### 2.2.3 版面策略

#### Desktop

- 上方 `family header`
  - pipeline identity
  - execute button
- 下方 `signal strip`
  - latest run status
  - active count
  - failed count
  - resumable count
  - current filter summary
- 再下一列 `filter strip`
  - status filters
  - time sorting
  - run id search
- 主體為 full-width ledger list，不切成 card wall

#### Ledger 欄位節奏

- `Status`
- `Run`
  - run id
  - pipeline name
- `Attempt Summary`
  - latest attempt no.
  - current execution kind
  - resumable hint
- `Timeline`
  - createdAt
  - startTime
  - endTime / duration
- `Actions`
  - open detail
  - contextual secondary action

#### Row 密度

- row height: 72px standard, 88px when secondary metadata line exists
- 最新 run預設置頂，不做獨立 hero 卡
- list header 固定，rows 可虛擬滾動

#### Tablet / Mobile

- row 轉為 two-line dense cards，但仍保留表格欄位順序
- status 永遠在左上
- actions 收斂到一個 overflow menu + 一個主要 CTA

## 2.3 Run Detail

### 2.3.1 目標

- 在 3 秒內理解 run 當前狀態。
- 在 5 秒內定位哪個 stage / job 卡住或失敗。
- 不離開頁面就能查 logs、metrics、step evidence。

### 2.3.2 IA

1. Family header
2. Run identity strip
3. Attempt rail
4. Stage board
5. Selected job inspector
6. Diagnostics panel

### 2.3.3 版面策略

#### Desktop

- `Run identity strip`
  - run id
  - status
  - created/start/end/duration
  - primary contextual action
  - secondary destructive action
- `Attempt rail`
  - horizontal segmented rail
  - 每個 attempt 顯示 `#n + kind + status + time`
  - 只顯示 `INITIAL` 與 `RESUME`
- `Main split`
  - left: stage board 68% to 74%
  - right: selected job inspector 26% to 32%
- `Diagnostics panel`
  - board 下方 full-width collapsible panel
  - tabs: `Logs / Metrics / Step Detail`
  - 預設在第一次選中失敗 job 時自動展開

#### Tablet / Mobile

- Attempt rail 改為垂直 list
- Inspector 改成 board 下方 sticky detail block
- Diagnostics panel 變成 tabs，與 inspector 垂直疊放

### 2.3.4 重要 domain 規則

- `resume` 針對目前 run 執行，成功後只新增一個 attempt。
- `rerun` 會建立新的 run，成功後應導向新的 run detail。
- 因此 `Run Detail` 內的 `Rerun` action 不應把新結果混進當前 attempts rail。

## 3. stage / job / run / attempt / action / status 的元件規則

## 3.1 Stage

### 定義

- stage 是 orchestration lane，不是厚卡片。
- 它主要表達:
  - sequence
  - barrier
  - job group
  - aggregate status

### 結構

- `lane header`
  - stage name
  - stage order
  - job count
  - aggregate status
  - stage actions
- `lane body`
  - job tiles
  - empty placeholder
- `lane footer`
  - add job CTA
  - drag handle / reorder affordance

### 規格

- min lane width: 280px
- preferred lane width: 320px to 360px
- lane header 固定高度 56px to 64px
- stage connector 永遠接在 lane 中線，不穿越 header 文本

## 3.2 Job

### 定義

- job 是主要編輯單位，也是 runtime board 的最小追蹤單位。
- 它必須同時支援 config 與 runtime 兩種語境。

### Config tile 結構

- job name
- step count
- atomic level
- connection completeness
- validation state
- open workspace action

### Runtime tile 結構

- job name
- status
- atomic level
- start / end / duration
- step summary
- failure marker

### 規格

- min tile width: 220px
- standard tile height: 88px to 112px
- 同一 lane 內 tile 尺寸固定，不依內容長短改變高度級別
- validation errors 顯示 count，不直接把完整錯誤塞進 tile

## 3.3 Run

### 定義

- run 是 logical run，是 `Runs` 頁的主體單位。
- run row 必須先回答:
  - 這次跑完了嗎
  - 現在有沒有還在跑
  - 是否可 resume

### 規格

- row 左側 20% 空間給 status + run identity
- 中段 55% 給 attempts / time / runtime hints
- 右側 25% 給 actions
- latest run 用同樣 row 語法，只在左緣加強調 marker，不做另一套 hero

## 3.4 Attempt

### 定義

- attempt 是同一 logical run 的 execution timeline item。
- 只表示:
  - `INITIAL`
  - `RESUME`

### 規格

- 用 segmented rail item，不用 dropdown
- item 內容必須包含:
  - `executionNo`
  - `executionKind`
  - `status`
  - `start/end`
- active attempt 必須同步控制 board 與 diagnostics
- attempt rail 不可隱藏於二級 tab

## 3.5 Action

### 主要 action 規則

- `Save`
  - Config 永遠主按鈕
- `Execute`
  - Runs 與 Config 的主流程 CTA
- `Resume`
  - 只在 current run 處於可恢復的 terminal failure-like 狀態時顯示為主 action
- `Rerun`
  - 只在 run 已存在且可建立新 run 時顯示為次主 action
- `Stop`
  - 只在 in-flight 時顯示
- `Delete`
  - 只在 terminal 時顯示，永遠是危險操作

### 顯示規則

- header 只放 1 個主 action + 1 到 2 個次 action
- 其餘進 overflow menu
- 高風險 action 必須有明確文案，不用 icon-only

## 3.6 Status

### 狀態分組

- `Queued`
  - `PENDING`, `NOT_RUN`
- `In-flight`
  - `STARTING`, `STARTED`, `STOPPING`
- `Successful terminal`
  - `COMPLETED`, `SKIPPED`
- `Interrupted / exceptional terminal`
  - `STOPPED`, `FAILED`, `ABANDONED`, `UNKNOWN`

### 規則

- 同一層只顯示一種主狀態，不顯示互相矛盾的雙 badge。
- `SKIPPED` 應被讀成「有意識略過」，不是錯誤。
- `STOPPING` 與 `STOPPED` 必須分開表達:
  - `STOPPING` = in-flight warning
  - `STOPPED` = terminal interrupted
- `UNKNOWN` 視為 error family，但文案需避免誤導成已知失敗原因。

## 4. hover / active / selected / focus / drag / disabled / loading / empty state 規則

## 4.1 Hover

- 只提高可點擊性，不改變版面。
- 可做的事:
  - 背景升一層
  - border 對比增加
  - 顯示次要 actions
  - connector 或 lane highlight
- 不可做的事:
  - 增加額外 toolbar 導致 reflow
  - 改變卡片尺寸
  - 把狀態色從無變有到干擾判讀

## 4.2 Active

- active 表示當前按壓或切換中的短暫回饋。
- 只用短距離 opacity / scale / inset shadow。
- active 不可與 selected 搞混。

## 4.3 Selected

- selected 是持久態。
- 適用於:
  - selected stage
  - selected job
  - selected attempt
  - selected run row
- 規則:
  - 使用 `primary` ring + 輕量背景 tint
  - 右側 inspector 與下方 diagnostics 同步更新
  - selected 樣式優先於 hover

## 4.4 Focus

- focus 只服務鍵盤與無障礙，不與 selected 共享樣式。
- 使用雙層 ring:
  - inner: `base-100`
  - outer: `primary`
- 所有可操作 tile、row、button、chip、attempt item 都必須有清楚 focus-visible

## 4.5 Drag

- stage reorder 與 job move 都必須有顯性 drop target。
- drag 時需要三種提示:
  - dragged item ghost
  - source placeholder
  - destination highlight
- job 跨 stage 移動時，目標 stage lane 必須先整欄高亮，而不是只亮小縫隙。
- drag state 不可用 blur 讓其他內容難讀。

## 4.6 Disabled

- disabled 不是單純變淡到看不見。
- 規則:
  - 保留文字可讀性
  - 移除 hover / active
  - 提供 disable reason
- 適用例:
  - pipeline validation 未過，`Execute` disabled
  - run 非 terminal，`Delete` disabled 或不顯示

## 4.7 Loading

- `Config`
  - 用 lane skeleton 與 inspector skeleton
- `Runs`
  - 用 ledger row skeleton
- `Run Detail`
  - 先 render run identity shell，再補 board 與 diagnostics skeleton
- action loading 必須局部處理，不鎖整頁，除非正在做 destructive confirmation

## 4.8 Empty state

### Config

- 整條 pipeline 無 stage:
  - 顯示 `Create first stage`
- stage 無 job:
  - 顯示 `Add first job`
- job 無 step:
  - 顯示 `Add first step`

### Runs

- 無任何 run:
  - 顯示 execute CTA
  - 同時簡述首次執行後會出現什麼

### Run Detail

- 無 logs:
  - 顯示 `No logs captured for this run yet`
- job 無 step execution infos:
  - 顯示 `No step evidence for this job in this attempt`

## 5. 動畫原則

### 5.1 原則

- 動畫只服務狀態理解與上下文切換。
- 只允許短距離、低振幅、可預期的 motion。
- 不能用動畫取代資訊層級。

### 5.2 時長

- hover emphasis: 80ms to 120ms
- selected / tab / attempt switch: 140ms to 180ms
- panel / drawer / inspector transition: 180ms to 220ms
- in-flight pulse: 900ms to 1200ms loop

### 5.3 允許的動畫

- hover background / border transition
- selected ring fade-in
- attempt 切換時 board content crossfade
- inspector / diagnostics 短距離滑入
- in-flight status dot 或 progress bar 輕脈衝

### 5.4 禁止的動畫

- 讓 stage lane、job tile 因 hover 位移
- 長時間 shimmer 造成閱讀疲勞
- 切換 attempt 時整個 board 大幅縮放或翻轉
- stop / fail / complete 時讓主要資訊跳動

### 5.5 Reduce Motion

- 關閉 pulse，改為靜態 status chip + progress bar
- panel transition 改 opacity-only
- diagnostics 展開收合改 instant 或 80ms

## 6. 亮色與暗色主題下基於 daisyUI semantic tokens 的色彩規則

適用主題：

- 亮色家族: `light`, `autumn`
- 暗色家族: `dark`, `dracula`

所有規則都先使用 daisyUI semantic tokens：

- `primary`, `secondary`, `accent`, `neutral`
- `base-100`, `base-200`, `base-300`, `base-content`
- `info`, `success`, `warning`, `error`

## 6.1 結構色規則

| 介面角色 | Token 規則 | 亮色主題 | 暗色主題 |
| --- | --- | --- | --- |
| App 背景 | `base-200` | 大面積工作區背景 | 大面積工作區背景 |
| Primary workspace | `base-100` | 主要閱讀面 | 主要閱讀面 |
| Secondary surface | `base-200` | 次層表面 | 次層表面 |
| Weak divider / quiet border | `base-300` | 分隔線、row divider | 分隔線、row divider |
| Structural lane / rail | `neutral` + `neutral-content` | stage lane、inspector group | stage lane、inspector group |
| Selected state | `primary` + `primary-content` | 主選取強調 | 主選取強調，但降低大面積填色比例 |

## 6.2 互動色規則

### Config

- canvas background: `base-100`
- lane background: `neutral`
- lane text/icons: `neutral-content`
- job tile background: `base-100`
- selected stage/job: `primary` family
- graph connector default: `neutral`
- graph connector selected path: `primary`

### Runs

- row background: `base-100`
- row hover: `base-200`
- selected row: `primary` tint + `primary` border
- filter strip background: `base-200`

### Run Detail

- board background: `base-100`
- inspector background: `base-200`
- diagnostics panel background: `base-100`
- attempt rail default: `base-200`
- active attempt: `primary`

## 6.3 狀態色規則

| 狀態 | Token family | 用法 |
| --- | --- | --- |
| `PENDING`, `NOT_RUN` | `base-*` or `neutral` | 中性等待態 |
| `STARTING`, `STARTED` | `info` | 進行中、執行中 |
| `STOPPING`, `STOPPED` | `warning` | 中斷、停止流程 |
| `COMPLETED` | `success` | 成功完成 |
| `SKIPPED` | `neutral` | 有意識略過，不當錯誤處理 |
| `FAILED`, `ABANDONED`, `UNKNOWN` | `error` | 失敗或不可預期異常 |

## 6.4 亮色與暗色的使用差異

### 亮色主題

- 可以使用較明顯的 filled chip:
  - `bg-success text-success-content`
  - `bg-error text-error-content`
  - `bg-warning text-warning-content`
  - `bg-info text-info-content`
- selected background 可以用較明確的 `primary` tint
- lane / rail 的 `neutral` 對比可以稍強，利於結構分層

### 暗色主題

- 優先用 `token tint + token border + token-content`，避免大面積高飽和填滿
- status chip 建議:
  - `bg-success/15 border border-success/35 text-success-content`
  - `bg-error/15 border border-error/35 text-error-content`
  - `bg-warning/15 border border-warning/35 text-warning-content`
  - `bg-info/15 border border-info/35 text-info-content`
- selected state 以 ring、border、connector highlight 為主，背景 tint 較保守
- 暗色下 `base-200` 與 `neutral` 不可過度接近，否則 stage board 會失去層次

## 6.5 Action 色規則

- `Save`, `Execute`
  - 預設 `primary`
- `Resume`
  - 當它是頁面最主要恢復動作時可使用 `primary`
  - 若同頁還有更主要 action，則降為 `info`
- `Rerun`
  - `secondary`
- `Stop`
  - `warning`
- `Delete`
  - `error`, 優先 outline / soft destructive 樣式，避免誤觸

## 6.6 禁止事項

- 不使用固定 hex 主導 theme-dependent surface
- 不用 `text-gray-*`, `bg-white`, `border-zinc-*` 這類固定灰階覆蓋 semantic 語意
- 不用 `primary` 畫滿所有邊界與 connector
- 不用 `success / error` 充當一般結構背景

## 7. ASCII Wireframe

## 7.1 Config: Topology mode

```text
+--------------------------------------------------------------------------------------------------+
| Pipeline: Orders ETL /sales/orders                 Save   Import   Execute                       |
| 4 stages | 11 jobs | 2 validation issues | Unsaved changes                                      |
+--------------------------------------------------------------------------------------------------+
| [01 Extract] ---> [02 Transform] ---> [03 Validate] ---> [04 Load]            | Inspector       |
| [Job: fetch_orders] [Job: normalize] [Job: qa_rules] [Job: upsert_orders]     | Selected stage  |
| [Job: fetch_users ] [Job: enrich   ]                 [Job: notify_fail ]       | or selected job |
|                                                                                 | summary/settings|
| + Add Job            + Add Job         + Add Job        + Add Job               | actions         |
+--------------------------------------------------------------------------------------------------+
```

## 7.2 Config: Job workspace mode

```text
+--------------------------------------------------------------------------------------------------+
| Orders ETL / Job Workspace: upsert_orders                                  Save   Back to graph |
+--------------------------------------------------------------------------------------------------+
| Job semantics rail        | Step navigator                 | Step editor                           |
| stage: Load               | 1 INSERT source_orders         | Step name                             |
| atomic: CHUNK             | 2 UPDATE order_status          | Type                                  |
| source/dest ready         | 3 UPSERT order_fact   [active] | SQL                                   |
| fetch/batch/delete        | + Add Step                     | Parameters                            |
| validation summary        | move / duplicate / delete      | watermark / destTable                 |
+--------------------------------------------------------------------------------------------------+
```

## 7.3 Runs

```text
+--------------------------------------------------------------------------------------------------+
| Pipeline: Orders ETL                                                         Execute              |
| Latest: STARTED | Active 1 | Failed 3 | Resumable 2 | Filter: Failed + Stopped                   |
+--------------------------------------------------------------------------------------------------+
| Status   | Run                | Attempt summary      | Timeline                 | Actions         |
| STARTED  | #184 Orders ETL    | #2 RESUME, active    | 09:12 -> now             | Open  Stop      |
| FAILED   | #183 Orders ETL    | #1 INITIAL, failed   | 08:44 -> 08:47           | Open  Resume    |
| COMPLETED| #182 Orders ETL    | #1 INITIAL, done     | 07:10 -> 07:18           | Open  Rerun     |
| STOPPED  | #181 Orders ETL    | #1 INITIAL, stopped  | 06:32 -> 06:35           | Open  Resume    |
+--------------------------------------------------------------------------------------------------+
```

## 7.4 Run Detail

```text
+--------------------------------------------------------------------------------------------------+
| Run #183 / Orders ETL / FAILED                                       Resume   Rerun   Delete     |
| Created 08:44 | Started 08:44 | Ended 08:47 | Duration 03m | Latest attempt #1 INITIAL          |
+--------------------------------------------------------------------------------------------------+
| Attempt rail: [#1 INITIAL FAILED]                                                                |
+--------------------------------------------------------------------------------------------------+
| [01 Extract] ---> [02 Transform] ---> [03 Validate] ---> [04 Load]            | Job inspector    |
| [done] fetch_orders   [done] normalize    [failed] qa_rules   [not run] upsert | selected job     |
| [done] fetch_users    [done] enrich       [not run] notify    [not run] notify | timings/metrics  |
|                                                                                 | action hints     |
+--------------------------------------------------------------------------------------------------+
| Diagnostics: [Logs] [Metrics] [Step Detail]                                                     |
| 08:46:12 [qa_rules] step 'validate_delta' failed -- exit description...                         |
+--------------------------------------------------------------------------------------------------+
```

## 8. 落地判斷摘要

若只能選一套方向，請採用 `主方案 A: Stage-First Workspace Family`，並以以下優先順序落地：

1. 先把 `Config` 做成 `Topology mode + Job workspace mode` 的雙模式。
2. 再把 `Run Detail` 做成 `Attempt rail + Stage board + Diagnostics panel`。
3. 最後把 `Runs` 收斂成單一 ledger 語法。

這樣才能同時滿足：

- pipeline graph 足夠清晰
- 編輯 pipeline 順暢
- runs 明確
- run detail 資訊足夠

# IrisPipe Pipeline Family Spec A

角色：Senior UIUX with IrisPipe pipeline domain

依據：僅依 canonical domain brief，不參照 current view

## 1. 設計原則

### 1.1 產品定位
IrisPipe frontend 的目的不是堆疊 backend 資訊，而是把 backend pipeline domain 轉成可理解、可操作、可判斷下一步的 workspace。

### 1.2 核心原則
1. `stage-first` 優先於 `job-detail-first`
2. `logical run` 與 `attempt` 必須在 IA 上明確分離
3. `Config`、`Runs`、`Run Detail` 是同一個 family，不是三個獨立頁面
4. pipeline graph 的首要任務是表達 `stage flow`、`stage barrier`、`job belongs to stage`
5. 深層資訊應逐步揭露，不與主視圖搶同層級注意力

### 1.3 成功標準
1. 使用者 2 秒內能看懂 pipeline 有幾個 stage、flow 往哪裡走、目前選到哪裡
2. 使用者能在不中斷 flow 判讀的前提下找到 job 並進入編輯
3. 使用者能快速辨識哪些 run 失敗、執行中、可 resume
4. 使用者能在 Run Detail 中知道目前是第幾次 attempt、卡在哪個 stage/job/step、下一步該看哪裡

## 2. Family IA

### 2.1 Family Shell

```text
+----------------------------------------------------------------------------------+
| Identity Row: Workspace / Folder / Pipeline identity / Family status             |
+----------------------------------------------------------------------------------+
| Context Row: Config | Runs | Run Detail (when inside a run)                      |
+----------------------------------------------------------------------------------+
| Page-specific workspace                                                           |
+----------------------------------------------------------------------------------+
```

### 2.2 Family 導航規則
1. `Config`：編輯目前 config
2. `Runs`：看 logical run history
3. `Run Detail`：看單一 logical run 與其 attempts 的 runtime details
4. Family shell 在三頁一致，避免認知切換

## 3. Config Spec

### 3.1 Config 要回答的問題
1. pipeline flow 是什麼
2. stage 如何排序、在哪裡有 barrier
3. 每個 stage 內有哪些 jobs
4. pipeline readiness 是否可執行
5. 我現在選到哪個 stage/job
6. 我該去哪裡修改 job

### 3.2 Config IA

```text
+----------------------------------------------------------------------------------+
| Identity Row                                                                      |
+----------------------------------------------------------------------------------+
| Context Row + Readiness Strip + Primary Actions                                   |
+----------------------------------------------------------------------------------+
| Topology Workspace                                              | Inspector       |
|                                                                  |                |
|  [Stage 1] -> [Stage 2] -> [Stage 3] -> [Stage 4]               | Contextual     |
|   jobs...     jobs...     jobs...     jobs...                   | Stage/Job info |
|                                                                  | and actions    |
+----------------------------------------------------------------------------------+
| Job Workspace Dock                                                                 |
| Selected job setup / steps / SQL / params / source/dest / watermark               |
+----------------------------------------------------------------------------------+
```

### 3.3 Layout 規則
1. 主畫面是 `Topology Workspace`
2. 右側 `Inspector` 是輔助，不可壓過 topology 的存在感
3. `Job Workspace Dock` 是深層編輯區，不可完全取代 topology 主視角
4. 任何選取行為只改變上下文，不可讓主版型大幅 reflow

### 3.4 Topology Workspace 規格
1. 以水平 stage flow 呈現
2. 每個 stage 是明確結構單位，不是鬆散群組
3. 同一 stage 內的 jobs 以垂直 stack 顯示
4. stage 之間使用明確 connector 表達 barrier 與 flow
5. job 不是 graph 的任意 node；它是 stage 內的執行節點

### 3.5 Stage 規格
每個 stage 包含：
1. `Stage label`：例如 `Stage 1`
2. `Stage name`
3. `Job count`
4. 必要操作：編輯 stage、調整順序、新增 job
5. 選取態：整個 stage surface 被強化，而不是只有細邊框

Stage 的視覺層級：
1. stage boundary 必須在未選取時也清楚
2. selected stage 使用 `primary` 強調，但不改 layout
3. stage summary 只保留必要資訊，不應與 job details 同層顯示

### 3.6 Job 規格
每個 job node 只在 topology 顯示：
1. job name
2. step count
3. issue indicator
4. 最必要操作入口

不應在 topology job node 顯示：
1. 完整 source/dest details
2. SQL 內容
3. parameters 清單
4. watermark 細節

這些資訊都進 `Job Workspace Dock`。

### 3.7 Config Interaction
1. 單擊 stage：更新 inspector 為 stage context
2. 單擊 job：更新 inspector 為 job context
3. 進入 job workspace：從 job node 或 inspector 開啟 dock
4. 開啟 job workspace 後，topology 仍保持可見
5. 關閉 dock 後回到 topology-first 的閱讀狀態

### 3.8 Config Primary Actions
1. Save Pipeline
2. Execute
3. Import File
4. Add Stage

動作層級：
1. `Save` / `Execute` 是 primary or high-emphasis actions
2. `Import` / `Add Stage` 是 secondary actions
3. stage/job 的 destructive actions 不應平鋪在主閱讀線上

### 3.9 Config State 規則
1. `hover`：輕提示，不可造成 layout shift
2. `selected`：`surface + border/ring + emphasis` 一起變
3. `focus`：與 selected 分開，用於 keyboard navigation
4. `disabled`：仍有 control 外觀，但明確不可用
5. `loading`：保持原空間，不可抖動
6. `empty stage`：明確顯示 `Add Job`

## 4. Runs Spec

### 4.1 Runs 要回答的問題
1. 最近有哪些 logical runs
2. 哪些失敗
3. 哪些正在跑
4. 哪些可 resume
5. 每一筆 run 的最新 attempt 是什麼
6. 我該打開哪一筆

### 4.2 Runs 本質
Runs 是 `operations ledger`，不是 dashboard。

### 4.3 Runs IA

```text
+----------------------------------------------------------------------------------+
| Identity Row                                                                      |
+----------------------------------------------------------------------------------+
| Context Row + Lightweight Hero Strip                                              |
+----------------------------------------------------------------------------------+
| Filters / Status Scope / Refresh / Execute                                        |
+----------------------------------------------------------------------------------+
| Runs Ledger                                                                       |
|----------------------------------------------------------------------------------|
| Run ID | Latest Attempt | Timeline | Status | Resume Hint | Open                 |
| Run ID | Latest Attempt | Timeline | Status | Resume Hint | Open                 |
| Run ID | Latest Attempt | Timeline | Status | Resume Hint | Open                 |
+----------------------------------------------------------------------------------+
```

### 4.4 Hero Strip 規則
只保留高階訊息：
1. latest run summary
2. system-level next-action hint

不做：
1. 多卡片 KPI dashboard
2. 把 ledger 往下壓太多

### 4.5 Ledger Row 規格
每列至少包含：
1. logical run id
2. latest attempt number / kind
3. started / duration / updated timeline
4. effective status
5. resumable or blocked hint
6. open detail action

### 4.6 Runs Interaction
1. row click：進 Run Detail
2. filter：只改 ledger，不重排整個頁面
3. resume action：只出現在確定可 resume 的情境
4. active run：可明確看出目前執行中

## 5. Run Detail Spec

### 5.1 Run Detail 要回答的問題
1. 目前 run 狀態
2. 這是第幾次 attempt
3. attempt timeline 是什麼
4. 問題卡在哪個 stage/job/step
5. 下一步該看 logs/metrics/steps 哪裡

### 5.2 Run Detail IA

```text
+----------------------------------------------------------------------------------+
| Identity Row                                                                      |
+----------------------------------------------------------------------------------+
| Hero Summary                                                                      |
+----------------------------------------------------------------------------------+
| Attempt Timeline                                                                  |
+----------------------------------------------------------------------------------+
| Runtime Board                                                   | Overview Rail   |
|                                                                 |                |
| [Stage 1] -> [Stage 2] -> [Stage 3] -> [Stage 4]               | Run facts      |
|  status      status      status      status                    | attempt facts   |
|  jobs...      jobs...      jobs...      jobs...                | next actions    |
+----------------------------------------------------------------------------------+
| Diagnostics Drawer                                                                 |
| Logs | Metrics | Steps                                                             |
+----------------------------------------------------------------------------------+
```

### 5.3 Hero Summary 規格
必須清楚顯示：
1. run id
2. effective status
3. current/latest attempt
4. duration
5. resumable / stopped / blocked 等高階提示
6. stop / rerun / resume / refresh 等主動作

### 5.4 Attempt Timeline 規格
1. 每個 attempt 是一個明確節點
2. 清楚區分：
   - initial run
   - rerun
   - resume attempt
3. 選到不同 attempt 時，board 與 diagnostics 同步切換

### 5.5 Runtime Board 規格
1. 與 Config 拓樸語法一致，降低認知切換
2. 但 runtime board 必須以狀態色為第一訊號
3. stage/job 狀態：
   - `PENDING`
   - `STARTED`
   - `COMPLETED`
   - `FAILED`
   - `STOPPED`
   - `SKIPPED`
   - `NOT_RUN`
4. resumable / blocked / active 為輔助語意，不取代主狀態

### 5.6 Diagnostics Drawer 規格
1. 預設收在底部，不搶 board 主視角
2. tabs：
   - Logs
   - Metrics
   - Steps
3. 選到 stage/job/step 時，drawer context 跟著更新
4. drawer 打開時不應遮蔽 board 的主要節點判讀

### 5.7 Overview Rail 規格
只放高階摘要：
1. run facts
2. selected attempt facts
3. selected node summary
4. next-action hints

不應把細節診斷塞進 rail。

## 6. Theme Semantics

### 6.1 只允許主題
1. `light`
2. `dark`
3. `dracula`
4. `autumn`

### 6.2 daisyUI token 分工
1. `base-*`
   - page background
   - work surfaces
   - nested workspace layers
2. `neutral`
   - family shell
   - stage structure
   - board grouping
   - ledger/header structures
3. `primary`
   - selected context
   - current focus
   - primary call-to-action
4. `info`
   - in-progress / informational runtime cues
5. `success`
   - completed / safe / ready
6. `warning`
   - needs attention / resumable / partial issues
7. `error`
   - failed / destructive / blocking issues

### 6.3 Theme 規則
1. 不硬編碼顏色
2. dark / dracula 下，未選取 stage 與 job 也要清楚可辨
3. selected 不能只靠 1px 細 border
4. runtime 狀態色只用於狀態，不用來承擔結構邊界

## 7. State Contract

### 7.1 Hover
1. 只做輕提示
2. 不造成 reflow
3. toolbar 若出現，必須 overlay，不推動內容

### 7.2 Selected
1. surface 變化
2. border 或 ring 強化
3. 文字/標題 emphasis 強化
4. 同步更新 contextual inspector

### 7.3 Focus
1. 專屬 keyboard / accessibility state
2. 不與 selected 混淆

### 7.4 Disabled
1. 保留 control 形狀
2. 明確降低可用性
3. 不可看起來像單純文字

### 7.5 Error / Warning / Success / Active
1. 必須有一致 badge / node / board 表達規則
2. 不同頁同一語意不可使用不同視覺語法

## 8. Motion 規則

### 8.1 原則
動畫用來說明狀態變更與上下文切換，不用來裝飾。

### 8.2 Config
1. stage/job hover：100-140ms 輕淡入
2. selection：120-180ms 的 surface/ring 過渡
3. opening job dock：200-240ms slide-up
4. inspector content switch：fade + slight slide，不可閃爍

### 8.3 Runs
1. filter 切換：row opacity/translate 輕過渡
2. active run 更新：status pulse 輕提示

### 8.4 Run Detail
1. attempt 切換：board 與 drawer 同步淡轉
2. diagnostics drawer 開闔：200ms 左右，不可遮住主要節點太久

## 9. ASCII Wireframes

### 9.1 Config

```text
+--------------------------------------------------------------------------------------+
| Workspace / Folder / Pipeline                                      Save   Execute   |
+--------------------------------------------------------------------------------------+
| Config | Runs                                                                        |
+--------------------------------------------------------------------------------------+
| Ready / Issues / Last updated / Add stage / Import                                  |
+--------------------------------------------------------------------------------------+
| [Stage 1] ---> [Stage 2] ---> [Stage 3] ---> [Stage 4]         | Inspector          |
|  job A                 job C                 job E              | stage/job context   |
|  job B                 job D                                    | actions             |
|                                                                  | readiness           |
+--------------------------------------------------------------------------------------+
| Job Workspace Dock                                                                  |
| Source / Dest / Steps / SQL / Params / Watermark                                    |
+--------------------------------------------------------------------------------------+
```

### 9.2 Runs

```text
+--------------------------------------------------------------------------------------+
| Workspace / Folder / Pipeline                                                        |
+--------------------------------------------------------------------------------------+
| Config | Runs                                                                        |
+--------------------------------------------------------------------------------------+
| Latest run summary | attention hint | Execute | Refresh                              |
+--------------------------------------------------------------------------------------+
| Run ID | Attempt | Timeline | Status | Resume | Open                                 |
| #412   | A3      | 09:18 45s | FAILED | yes    | open                                 |
| #411   | A1      | 09:02 21s | DONE   | no     | open                                 |
| #410   | A2      | 08:40 11s | STOP   | yes    | open                                 |
+--------------------------------------------------------------------------------------+
```

### 9.3 Run Detail

```text
+--------------------------------------------------------------------------------------+
| Pipeline / Run #412                                                   Resume  Rerun |
+--------------------------------------------------------------------------------------+
| FAILED | Attempt A3 | 45s | blocked at Stage 3                                      |
+--------------------------------------------------------------------------------------+
| A1 ---- A2 ---- A3                                                                   |
+--------------------------------------------------------------------------------------+
| [Stage 1] ---> [Stage 2] ---> [Stage 3] ---> [Stage 4]       | Overview rail        |
|  done         done          failed        not_run             | run facts            |
|  jobs...      jobs...       jobs...       jobs...             | selected node        |
+--------------------------------------------------------------------------------------+
| Logs | Metrics | Steps                                                               |
| selected job logs / metrics / step details                                           |
+--------------------------------------------------------------------------------------+
```

## 10. 驗收清單

### 10.1 Config
1. 使用者能一眼看出 stage flow
2. 使用者能知道 job 屬於哪個 stage
3. 使用者能快速找到修改 job 的入口
4. topology 與 dock 同時存在時不混亂

### 10.2 Runs
1. 使用者能快速掃描 logical runs
2. 可以明確辨識最新 attempt 與 resumable run
3. hero 不會壓過 ledger

### 10.3 Run Detail
1. 使用者能知道自己在看哪個 run / 哪個 attempt
2. 可以快速定位卡住的 stage/job/step
3. diagnostics 是支援主視圖，而不是搶主視圖

### 10.4 Themes
1. light / dark / dracula / autumn 都能辨識 stage、job、selected、status
2. 不需依賴硬編碼色彩

## 11. Family 共用元件清單與變體矩陣

### 11.1 共用元件清單
1. `FamilyShell`
2. `IdentityRow`
3. `ContextTabs`
4. `HeroStrip`
5. `StageBoard`
6. `StageColumn`
7. `JobNode`
8. `ContextualInspector`
9. `JobWorkspaceDock`
10. `OperationsLedger`
11. `RunRow`
12. `AttemptTimeline`
13. `DiagnosticsDrawer`
14. `OverviewRail`
15. `StatusBadge`
16. `ActionButton`
17. `InlineToolbar`
18. `EmptyState`
19. `LoadingState`
20. `ConfirmDialog`

### 11.2 元件角色
1. `FamilyShell`：統一 family 導航與 page frame
2. `StageBoard`：承載 stage-first flow
3. `StageColumn`：表達 stage barrier 與 stage grouping
4. `JobNode`：表達 stage 內的 job 節點
5. `OperationsLedger`：承載 logical run history
6. `AttemptTimeline`：承載 attempt 歷程
7. `DiagnosticsDrawer`：承載 logs / metrics / steps

### 11.3 變體矩陣

```text
元件                變體
FamilyShell         config / runs / run-detail
HeroStrip           quiet / summary / alert
StageBoard          topology / runtime
StageColumn         default / selected / blocked / empty
JobNode             default / selected / issue / active-runtime / disabled
ContextualInspector pipeline / stage / job / runtime-node
JobWorkspaceDock    collapsed / open / dirty / validation-error
OperationsLedger    default / filtered / loading / empty
RunRow              default / active / failed / resumable / blocked
AttemptTimeline     compact / expanded
DiagnosticsDrawer   logs / metrics / steps / empty
StatusBadge         info / success / warning / error / neutral
ActionButton        primary / secondary / ghost / destructive / disabled
EmptyState          no-runs / no-jobs / no-logs / no-selection
LoadingState        shell / board / ledger / drawer
```

### 11.4 State Matrix

```text
元件                hover  selected  focus  disabled  loading  error
StageColumn         yes    yes       yes    no        no       yes
JobNode             yes    yes       yes    yes       no       yes
RunRow              yes    yes       yes    yes       yes      yes
ActionButton        yes    no        yes    yes       yes      no
AttemptTimeline     yes    yes       yes    no        no       no
DiagnosticsDrawer   yes    yes       yes    no        yes      yes
```

## 12. 核心任務流程與 Interaction Precedence

### 12.1 Config 任務流程

```text
看懂 pipeline flow
  -> 選 stage
  -> 看 stage context
  -> 選 job
  -> 看 job context
  -> 開 job workspace dock
  -> 編輯 source/dest/steps/sql/params
  -> save
  -> execute（若 readiness 允許）
```

### 12.2 Runs 任務流程

```text
看 run ledger
  -> 篩出 failed / active / resumable
  -> 打開 run detail
  -> 判斷 refresh / resume / rerun
```

### 12.3 Run Detail 任務流程

```text
看 run 狀態
  -> 看目前/最新 attempt
  -> 掃 stage board
  -> 定位 failed/stopped/skipped/not_run stage
  -> 選 stage/job
  -> 打開 diagnostics
  -> 看 logs / metrics / steps
  -> 決定 resume / rerun / stop
```

### 12.4 Interaction Precedence
1. `Primary reading surface` 優先於 `secondary control surface`
2. `Topology board` 優先於 `Inspector`
3. `Ledger` 優先於 `HeroStrip`
4. `Runtime board` 優先於 `DiagnosticsDrawer` 與 `OverviewRail`
5. `Selected state` 不可造成 layout reflow
6. `Hover actions` 只能輔助，不可遮蔽主內容

### 12.5 事件優先序
1. `click node` 優先於 `hover toolbar`
2. `drag handle` 必須獨立於標題與主要內容區
3. `keyboard focus` 不依賴 hover
4. destructive action 必須晚於 contextual selection

## 13. Content Rules 與 Edge Case Matrix

### 13.1 Content Rules
1. `Config` 拓樸主表面只顯示必要結構資訊，不顯示 SQL 長文或 connection 細節
2. `Runs` row 文字應短、可掃描、避免段落式文案
3. `Run Detail` hero 只顯示 run 決策需要的高階資訊
4. 所有 badge 文案應對應 domain 語意，不可用模糊詞
5. `resume`、`rerun`、`attempt`、`logical run` 文案不可混用

### 13.2 命名規則
1. stage 顯示：`Stage N` + `stage name`
2. run 顯示：`Run #id`
3. attempt 顯示：`Attempt A1/A2...` 或對應 resume/rerun 類型
4. 狀態字詞優先使用 domain 原詞：`FAILED`、`STOPPED`、`SKIPPED`、`NOT_RUN`

### 13.3 Edge Case Matrix

```text
情境                              Config                     Runs                        Run Detail
無 stages                          空態 + Add Stage          不適用                      不適用
stage 無 jobs                      stage 內空態 + Add Job    不適用                      board 可見但無節點
pipeline 不可執行                  readiness 阻擋 execute    仍可看歷史                  不適用
run history 為空                   不適用                    ledger empty state          不適用
run 進行中                         可顯示 active hint        row 顯示 active             hero/board 顯示 STARTED
run failed                         readiness 不受影響        row 顯示 failed             board/diagnostics 聚焦 failed
run 可 resume                      不適用                    row 顯示 resumable          hero 顯示 resume CTA
resume attempt 存在                不適用                    row 顯示 latest attempt     timeline 明確區分 attempt
上游 stage skipped                 不適用                    不適用                      board 顯示 SKIPPED
下游 stage not run                 不適用                    不適用                      board 顯示 NOT_RUN
logs 為空                          不適用                    不適用                      diagnostics empty state
metrics 為空                       不適用                    不適用                      diagnostics empty state
選不到任何節點                     inspector 顯示 pipeline   不適用                      rail 顯示 run overview
網路慢/載入中                      skeleton 不跳版           ledger skeleton             board/drawer skeleton
危險操作(delete/stop)              confirm dialog            confirm dialog              confirm dialog
```

## 14. Accessibility 與 Responsive 原則

### 14.1 Accessibility 原則
1. 所有 icon-only control 必須有可讀 label 或 aria-label
2. keyboard 可完成：
   - family tabs 切換
   - stage/job 節點選取
   - job workspace dock 開關
   - drawer tab 切換
   - run row 開啟
3. `focus` 必須清楚可見，且與 `selected` 不同
4. 狀態不可只靠顏色表達，需搭配文字或 badge
5. destructive action 必須有確認流程與明確標示

### 14.2 可讀性原則
1. stage/job 名稱要允許截斷，但需保留 tooltip 或完整可讀路徑
2. 文字最小層級不應低於可讀閾值
3. dark/dracula 需特別確保未選取容器邊界可辨

### 14.3 Responsive 原則
1. Desktop 是主要體驗，因 topology 與 runtime board 皆屬 workspace 型介面
2. Tablet：
   - inspector 可收合
   - dock 可切全寬
3. Mobile：
   - family shell 保留
   - topology 轉成可水平捲動的 stage board
   - inspector / diagnostics 改成 full-screen sheet
4. 任何 breakpoint 下都不可讓 primary reading surface 完全消失

## 15. Specs & Assets 標注層

### 15.1 交付標注需求
每一頁至少需要以下標注：
1. 區塊名稱
2. 區塊角色
3. 主要閱讀線
4. 主要操作
5. 選取態 / focus / disabled 範例
6. light / dark theme 對照

### 15.2 Config 標注需求
1. topology board 尺寸與最小欄寬
2. stage column header/body/footer 結構
3. job node 的文本層級與 control 區
4. dock 高度與開關狀態
5. inspector 切換規則

### 15.3 Runs 標注需求
1. hero strip 高度上限
2. ledger column 定義
3. row state 定義
4. filter 區與 row 的優先序

### 15.4 Run Detail 標注需求
1. hero / timeline / board / rail / drawer 的高度與層級
2. selected runtime node 的上下文切換規則
3. diagnostics 三個 tabs 的最小資訊集合

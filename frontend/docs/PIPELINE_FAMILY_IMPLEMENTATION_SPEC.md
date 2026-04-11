# IrisPipe Pipeline Family Implementation Spec

本文件是 IrisPipe `pipeline family` 的唯一 implementation spec。

它整合以下來源：

- `IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md`
- `PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md`
- `PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md`
- `PIPELINE_FAMILY_SPEC_REVIEW_SUMMARY.md`

後續若 spec 與現況畫面衝突，以本文件優先。

---

## 1. 文件定位

本文件的用途不是描述理想概念，而是提供：

1. 可實作的 family IA
2. 可落地的頁面結構
3. 明確的 component 規格
4. 一致的 theme / state / interaction 規則
5. 可驗收的 implementation checklist

---

## 2. Source of Truth

### 2.1 Domain source

IrisPipe pipeline domain 的唯一資訊來源是：

- `IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md`
- main agent 對 backend code 的即時 trace 結論

### 2.2 規格優先序

若發生衝突，優先序如下：

1. `Canonical Domain Brief`
2. 本 Implementation Spec
3. `Spec A`
4. `Spec B`
5. current view

### 2.3 設計立場

frontend 的目的不是把 backend 資料列出來，而是把 backend pipeline domain 轉成：

- 可理解
- 可操作
- 可診斷
- 可恢復

---

## 3. Domain Constraints

## 3.1 非 DAG execution model

IrisPipe 目前不是 DAG execution model。

它是：

- `stage-first`
- 每個 stage 有 `stageSequenceOrder`
- 同一 stage 內 jobs 可平行
- stage 與 stage 之間有 barrier

因此 UI 必須先表達：

- stage flow
- stage barrier
- job 屬於哪個 stage

而不是任意 graph。

## 3.2 Job 是 Config 的主要編輯單位

Config 頁面中，最常被修改的實際單位是 `job`。

job 涵蓋：

- source / destination connection
- atomic level
- executions / steps
- SQL
- parameters
- watermark

所以 Config 必須同時滿足：

- stage-first topology
- job-focused editing

## 3.3 Logical run vs attempt

這是 Runs 與 Run Detail 的核心語意：

- `execute`：建立新 logical run
- `rerun`：建立新 logical run，但沿用舊 snapshot
- `resume`：不建立新 logical run，只在既有 run 下建立新 attempt

所以：

- `Runs` 看的是 logical run history
- `Run Detail` 看的是單一 run 下的 attempt timeline 與 runtime details

---

## 4. Family Structure

整個 `pipeline family` 固定為同一個 workspace shell：

```text
+----------------------------------------------------------------------------------+
| Identity row                                                                     |
+----------------------------------------------------------------------------------+
| Family tabs: Config | Runs | Run Detail                                          |
+----------------------------------------------------------------------------------+
| Context strip                                                                    |
+----------------------------------------------------------------------------------+
| Main workspace                                                                   |
+----------------------------------------------------------------------------------+
```

### 4.1 Family 共通原則

1. 每一頁只能有一個視覺主角
2. 右側 rail 永遠是輔助，不得壓過主畫面
3. summary 只能補充，不得取代主結構
4. hover 不得造成 layout shift
5. selected 不可只靠細 border

---

## 5. Design System / UI Kit

## 5.1 Semantic color contract

遵循 daisyUI semantic tokens：

- `base-100 / base-200 / base-300`
  - page surfaces
  - nested work surfaces
  - canvas / dock / drawer 內層背景

- `neutral`
  - family shell
  - stage column
  - runtime board structure
  - ledger structure
  - rail / inspector structure

- `primary`
  - selected context
  - current focus path
  - primary CTA

- `secondary / accent`
  - 次級導引與輕量提示

- `info / success / warning / error`
  - runtime state
  - alert
  - validation
  - destructive / resumable / failure semantics

### 5.1.1 強制規則

1. 結構色與狀態色分離
2. runtime 狀態色不得承擔主結構邊界
3. dark / dracula 下未選取 stage 也必須可辨
4. 僅允許 `light / dark / dracula / autumn`

## 5.2 Shared components

以下元件是 family-shared primitives：

1. `FamilyIdentityRow`
2. `FamilyTabs`
3. `ContextStrip`
4. `PrimaryActionCluster`
5. `StageColumn`
6. `JobNodeRow`
7. `InspectorRail`
8. `BottomDock`
9. `RunsLedger`
10. `RunLedgerRow`
11. `AttemptTimeline`
12. `RuntimeBoard`
13. `DiagnosticsDrawer`
14. `StatusBadge`
15. `FilterChip`
16. `SignalStat`
17. `SectionHeader`

## 5.3 Component governance

### 5.3.1 Icon-only controls

只有在以下條件都成立時可用 icon-only：

1. 使用頻率高
2. 語意單純
3. 已有穩定位置記憶
4. 有 tooltip / aria-label

若不滿足，應使用：

- icon + label
- 或放入 context menu

### 5.3.2 Destructive actions

破壞性操作應遵循層級：

1. 主表面：不平鋪
2. inspector / menu：可顯示
3. 需 confirm

### 5.3.3 State matrix

每個 interactive component 至少定義：

1. default
2. hover
3. selected
4. focus
5. disabled
6. loading
7. error/warning if applicable

---

## 6. Config Implementation Spec

## 6.1 使用者要先看懂

1. pipeline 有哪些 stage
2. flow 如何前進
3. 每個 stage 有哪些 jobs
4. 目前選到哪個 stage/job
5. 去哪裡編輯 job

## 6.2 Layout

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
| [Topology] [4 stages] [6 jobs] [Runnable]                    [Import] [Add] [Save]   |
+--------------------------------------------------------------------------------------+
| Topology workspace                                                | Inspector rail   |
|                                                                    |                 |
|  Stage flow canvas                                                 | Pipeline /      |
|  (主角)                                                            | Stage / Job      |
|                                                                    | Inspector        |
+--------------------------------------------------------------------------------------+
| Job workspace dock                                                                  |
+--------------------------------------------------------------------------------------+
```

## 6.3 尺寸與滾動規則

- `Identity row`: 48px
- `Family tabs row`: 44px
- `Context strip`: 56px
- `Inspector rail`: 320px
- 小於 1360px 時 rail 收為 280px
- 再不足時，rail 轉 overlay
- stage column 寬度：288px
- stage 間 gap：24px
- connector 保留區：40px
- stage body min-height：240px
- dock collapsed：56px
- dock expanded：360px，XL 可到 420px

滾動原則：

1. topology workspace 自己承擔橫向捲動
2. inspector 自己垂直捲動
3. dock 自己垂直捲動
4. 不共用同一捲動容器

## 6.4 Stage column 規格

stage 必須是 `column block`，不是厚卡片，也不是淡分組。

每個 stage 固定 3 層：

1. `Stage header`
2. `Stage body`
3. `Stage helper strip`

### Stage header

只允許：

- stage badge
- stage name
- job count
- compact stage actions

不允許：

- 過多 chips
- 長 readiness 文案
- 壓縮 stage name 的 icon cluster

### Stage body

只承載：

- job rows
- empty-stage CTA

### Stage helper strip

只承載輕量提示：

- `2/2 jobs ready`
- `0 issues`
- barrier / order hint

## 6.5 Job node / row 規格

job 在 topology 是「可操作節點」，不是 mini inspector。

job row 固定兩行：

第一行：

- job name
- issue hint

第二行：

- step count
- compact action row：`drag | edit | delete`

job row 不顯示：

- source/dest 細節
- SQL
- parameters
- watermark 細節

## 6.6 Contextual inspector

右側 rail 只做：

- pipeline overview
- selected stage context
- selected job summary
- 次級 actions

右側 rail 不做：

- 主編輯畫面
- 長篇說明
- 與 topology 等權的摘要區

## 6.7 Bottom dock

只在明確編輯 job 時展開。

規則：

1. 預設收合
2. 展開時 topology 仍完整可見
3. 只承接 job 深層編輯
4. 不可取代 topology 主視角

## 6.8 Interaction transitions

### 選取 stage

改變：

- stage surface
- ring / border
- inspector context

不改變：

- stage 高度
- jobs 位置
- connector 位置

### 選取 job

改變：

- job row surface
- job emphasis
- inspector 切到 job
- dock 可展開

不改變：

- stage 寬度
- 其他 jobs 位置

### 展開 dock

- 向上展開
- 只改自身高度
- 不讓 topology 消失

---

## 7. Runs Implementation Spec

## 7.1 使用者要先看懂

1. 最近有哪些 logical runs
2. 哪些失敗
3. 哪些執行中
4. 哪些可 resume
5. 最新 attempt 是什麼
6. 該打開哪一筆

## 7.2 Layout

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
| Latest run / in flight / resumable / avg runtime                  [Refresh] [Execute]|
+--------------------------------------------------------------------------------------+
| Filter row                                                                           |
| [All] [Failed] [Completed] [Running] [Resumable]                                     |
+--------------------------------------------------------------------------------------+
| Runs ledger                                                                          |
| Run | Attempt | Timeline | Status | Resume hint | Action                            |
+--------------------------------------------------------------------------------------+
```

## 7.3 視覺主從

`Runs` 本質是 `operations ledger`。

因此：

- hero strip 是 context band，不是 dashboard
- ledger 必須第一屏主導
- filters 是工具，不是主角

## 7.4 Row 規格

每列至少包含：

1. logical run id
2. latest attempt label
3. timeline
4. effective status
5. resumable hint
6. open detail

不應過度出現：

- 重複 badge
- 長敘述
- 與 row 同層的過多 KPI

## 7.5 Interaction

1. row click -> Run Detail
2. filters 只影響 ledger
3. execute / refresh 在 context strip
4. hero 不壓低 ledger 可見性

---

## 8. Run Detail Implementation Spec

## 8.1 使用者要先看懂

1. 這是什麼 run
2. 目前是哪個 attempt
3. run 狀態如何
4. 哪個 stage/job/step 有問題
5. 下一步該去哪個 diagnostics 視角

## 8.2 Layout

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
| Runtime board                                                    | Overview rail     |
+--------------------------------------------------------------------------------------+
| Diagnostics drawer                                                                   |
+--------------------------------------------------------------------------------------+
```

## 8.3 主視角順序

固定閱讀順序：

1. hero summary
2. attempt timeline
3. runtime board
4. diagnostics drawer
5. overview rail

runtime board 是主角。

## 8.4 Runtime board 規格

沿用 Config 的 stage-first 語法，但更強調狀態色。

必須能清楚表達：

- COMPLETED
- FAILED
- STARTED
- STOPPED
- SKIPPED
- NOT_RUN

connector 與 barrier 在 Run Detail 需要比 Config 更清楚，因為這裡要解釋 runtime path。

## 8.5 Attempt timeline 規格

必須清楚區分：

- initial
- rerun
- resume

規則：

1. current attempt 強調
2. 可水平延展
3. 文案不得模糊 `resume / rerun`

## 8.6 Diagnostics drawer

tabs：

- Logs
- Metrics
- Step Detail

規則：

1. 是第二層分析區
2. 不遮蔽 runtime board 主視角
3. 只切內容，不重排整頁

---

## 9. State / Interaction Contract

## 9.1 Hover

- 輕量表面變化
- 不新增推擠內容的工具列
- 不造成 reflow

## 9.2 Selected

同時改變：

- surface
- ring / border
- emphasis

## 9.3 Focus

- 與 selected 分開
- 只代表鍵盤與輸入焦點

## 9.4 Disabled

- 有 control 外形
- 明確不可用
- 若重要，應可顯示 disabled reason

## 9.5 Drag

必須有明確 pointer 與 affordance：

- default
- hover
- grab
- grabbing

drag 不可與主要閱讀線混在一起。

---

## 10. Motion Rules

原則：穩定、短、可預期。

### Config

- stage/job hover: 100-140ms
- selected transition: 120-180ms
- dock open: 200-240ms

### Runs

- filter transition: row fade/translate
- active status pulse: 輕量、短暫

### Run Detail

- attempt switch: board + drawer 同步淡轉
- drawer open/close: 約 200ms

禁止：

- 大幅縮放
- 長 shimmer
- 浮誇 blur

---

## 11. Content Rules

## 11.1 Naming

- `Selected` 不等於 `Active`
- `Current attempt` 不等於 `Latest run`
- `Resume` / `Rerun` 必須用正確 domain wording

## 11.2 Empty states

至少定義：

1. pipeline 無 stages
2. stage 無 jobs
3. runs 為空
4. run 無 attempts
5. diagnostics 無資料

## 11.3 Destructive wording

至少定義：

1. delete stage
2. delete job
3. delete run
4. stop run

需說清楚：

- 會刪掉什麼
- 是否可恢復

---

## 12. Edge Case Matrix

至少需覆蓋：

1. stage 很多 -> 橫向 overflow
2. job 很多 -> stage body scroll or stretch strategy
3. job name 很長
4. step count 很大
5. latest attempt loading
6. diagnostics 空資料
7. partial loading
8. API fail
9. no resume target
10. run row badge 過多

---

## 13. Accessibility

至少要求：

1. keyboard navigation path 清楚
2. focus order 固定
3. focus 與 selected 視覺分離
4. color contrast 在 4 個 theme 下可辨
5. reduced motion 可接受

---

## 14. Responsive Rules

## 14.1 優先順序

當寬度不足時，優先保留主視角：

1. Config -> topology
2. Runs -> ledger
3. Run Detail -> board

次要區先退化：

- inspector rail
- bottom dock
- overview rail
- 非必要 chips / stats

## 14.2 窄寬策略

### Config

- rail 可 overlay
- dock 可全寬展開
- topology 維持橫向捲動

### Runs

- hero 壓縮
- filters 可換行
- ledger 保持主體

### Run Detail

- overview rail 可折疊
- drawer 可改為 overlay section
- board 不可消失

---

## 15. Specs & Assets Deliverables

進入實作前，最終還需要有以下交付物：

1. Page-level annotated layouts
2. Shared component inventory
3. Variant / state matrix
4. Flow diagrams for key tasks
5. Edge case matrix
6. A11y + responsive notes
7. Theme validation checklist for light/dark/dracula/autumn

---

## 16. 實作使用方式

後續實作時：

- 用 `Spec A` 守住 domain 與產品結構
- 用本文件定義實際 layout / interaction / transition / component governance
- 若 current view 與本 spec 衝突，以本 spec 優先


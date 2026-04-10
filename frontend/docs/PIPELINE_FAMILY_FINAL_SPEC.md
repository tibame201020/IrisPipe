# IrisPipe Pipeline Family Final Spec

本文件是 IrisPipe `pipeline family` 的最終整合版規格。

它整合以下三份資料：

- [IRISPIPE_PIPELINE_DOMAIN_BRIEF.md](C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/IRISPIPE_PIPELINE_DOMAIN_BRIEF.md)
- [PIPELINE_FAMILY_DOMAIN_DESIGN_SPEC.md](C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_DOMAIN_DESIGN_SPEC.md)
- [PIPELINE_FAMILY_REDESIGN_SPEC.md](C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_REDESIGN_SPEC.md)

這份文件刻意不把既有畫面當成前提，而是回到一個更根本的事實：

`frontend` 的目的不是延續既有版型，而是把 backend 的 pipeline domain 轉成清楚、可操作、可觀察的產品介面。

---

## 1. 核心定位

### 1.1 Pipeline family 是同一個產品面

IrisPipe 的 pipeline family 由三個工作面組成：

- `Config`
- `Runs`
- `Run Detail`

它們不是三個分離頁面，而是同一條 pipeline 的三種工作視角：

- `Config`：怎麼定義這條 pipeline
- `Runs`：這條 pipeline 最近怎麼跑
- `Run Detail`：某一次 run 實際發生了什麼

### 1.2 Frontend 是 backend 能力的產品化介面

frontend 的角色不是把資料列出來，而是把 backend 的語意變成可理解、可判斷、可操作的工作面。

這代表 UI/UX 必須優先表達：

- `stage order`
- `stage barrier`
- `job as primary editing unit`
- `attempt timeline`
- `resume vs rerun`
- `runtime status`
- `dangerous actions and consequences`

### 1.3 不再被既有畫面牽著走

既有畫面只能當作現況診斷素材，不能當作設計上限。

接下來的設計準則是：

- 先對齊 domain
- 再決定 IA
- 再決定 layout
- 最後才是元件外觀與動畫

---

## 2. Domain baseline

### 2.1 Stage-first domain

- `stage` 有明確順序
- stage 之間存在 barrier
- 同一個 stage 內 jobs 可平行

因此所有 pipeline 視圖都必須先讓人讀懂 `stage flow`，再進入 job 細節。

### 2.2 Job 是主要編輯單位

stage 是 orchestration group。

真正需要被深入編輯的是 `job`：

- connections
- atomic level
- steps
- SQL
- parameters
- watermark

所以 `Config` 的設計必須是：

- stage-first topology
- job-focused editing workspace

### 2.3 Resume 與 rerun 不可混淆

- `resume`：同一個 logical run 之下的新 attempt
- `rerun`：建立新的 logical run

因此：

- `Runs` 必須讓人看出 logical run
- `Run Detail` 必須讓人看出 attempt timeline
- `rerun` 不應被畫進同一條 attempt 軌跡

### 2.4 Status 是第一層資訊

以下資訊都應是第一層可掃描，不是補充 badge：

- `COMPLETED`
- `FAILED`
- `STARTED`
- `STOPPED`
- `SKIPPED`
- `NOT_RUN`
- `resumable`
- `blocked`

---

## 3. 總體設計原則

### 3.1 One Family, Three Lenses

三個頁面共用同一套 family shell：

- `identity row`
- `context row`
- `primary workspace`
- `secondary inspector / diagnostics`

### 3.2 Stage-first, Job-operable

畫面順序必須是：

1. 先看懂 pipeline stage flow
2. 再看 stage 內 jobs
3. 再進入 job workspace 或 runtime detail

### 3.3 主畫布優先

主畫面必須永遠先被看見。

摘要與右側資訊欄只能輔助：

- 不可壓縮主畫布
- 不可搶走主視覺中心
- 不可把真正重要語意逼進 tooltip 或 hover

### 3.4 Summary 服務工作流，不服務裝飾

所有 summary tile、overview rail、signal strip 都只能回答：

- 現在狀態是什麼
- 下一步該看哪裡
- 哪裡有風險

如果只是重複主畫面已經能看的資訊，就應降級或移除。

### 3.5 危險操作必須有後果說明

以下操作必須同時表達：

- 可否執行
- 會影響什麼
- 執行後會去哪裡

適用於：

- `stop`
- `resume`
- `rerun`
- `delete`
- `execute`

### 3.6 動作不可只藏在 hover

hover 可以加速，但不能承擔唯一入口。

因此：

- 高頻操作可有 hover tool
- 但主要操作必須可被發現
- hover tool 必須是 overlay，不得造成 reflow

---

## 4. Family information architecture

## 4.1 Config

### 4.1.1 目標

- 快速讀懂 pipeline stage flow
- 快速找出哪個 stage 或 job 未 ready
- 在不失去全局的情況下編輯 job
- 在同一 family 裡完成 save / import / execute

### 4.1.2 最終 IA

1. `identity row`
2. `context row`
3. `topology workspace`
4. `contextual inspector`
5. `job workspace dock`

### 4.1.3 Layout

Desktop:

- 上方：identity row
- 第二列：context row
- 中央：topology canvas
- 右側：contextual inspector
- 底部：job workspace dock

規則：

- topology 永遠常駐
- 右側 inspector 預設顯示 pipeline overview
- 選 stage 時顯示 stage inspector
- 選 job 時顯示 job summary inspector
- 進入 job 編輯時，使用底部 dock，不用 full-screen modal

### 4.1.4 Topology 語法

- `stage` 是主結構
- `job` 是 stage 內的主要節點
- stage connector 清楚可見
- selected 只改強調，不改版面結構

ASCII：

```text
+--------------------------------------------------------------------------------------+
| identity row: pipeline / folder / save state / primary actions                      |
| context row : tabs / readiness / filters / execute / import                         |
+--------------------------------------------------------------------------------------+
|                                                                 | inspector rail     |
|  [ Stage A ] --> [ Stage B ] --> [ Stage C ] --> [ Stage D ]   | default: overview  |
|  +---------------+     +---------------+                        | stage: semantics    |
|  | Job 1         |     | Job 3         |                        | job: summary        |
|  | 4 steps       |     | 2 steps       |                        |                     |
|  | Job 2         |     +---------------+                        |                     |
|  +---------------+                                              |                     |
|                                                                 |                     |
+--------------------------------------------------------------------------------------+
| job workspace dock: step navigator | step editor | connection / atomic / settings    |
+--------------------------------------------------------------------------------------+
```

### 4.1.5 Config 的關鍵規則

- `pipeline overview` 不是固定大主角，只是預設 inspector 內容
- `Save` 永遠固定在 header 右上
- `Execute` 要顯示 blockers 與 readiness
- stage 與 job actions 要可發現，不可只靠 hover-only icon
- topology 必須比摘要更清楚

## 4.2 Runs

### 4.2.1 目標

- 快速判斷最新狀態
- 快速找到 failed / active / resumable run
- 快速進入某次 run detail
- 快速觸發新的 execute

### 4.2.2 最終 IA

1. `identity row`
2. `hero strip`
3. `filter strip`
4. `run ledger`

### 4.2.3 Layout

- identity row：pipeline identity + family tabs
- hero strip：latest run、latest status、resumable summary、execute CTA
- filter strip：status / time / search / grouping
- ledger：full-width list

### 4.2.4 Runs 語法

- 這是一個 `operations ledger`
- 不是 KPI dashboard
- 不是 card wall

每列至少要有：

- status
- run id
- latest attempt kind
- attempt count
- time / duration
- resumable hint
- open detail

ASCII：

```text
+--------------------------------------------------------------------------------------+
| identity row: pipeline / family tabs                                                 |
| hero strip  : latest run / failed? / resumable? / execute                            |
| filters     : All | Active | Failed | Completed | Resumable | search | sort          |
+--------------------------------------------------------------------------------------+
| status | run id | attempt summary         | timeline          | actions              |
|--------+--------+-------------------------+-------------------+----------------------|
| FAIL   | #381   | Attempt 2 / RESUME      | 10:22 -> 10:27    | Open detail          |
| OK     | #380   | Attempt 1 / INITIAL     | 09:14 -> 09:18    | Open detail          |
| RUN    | #379   | Attempt 1 / INITIAL     | started 08:52     | Open detail / Stop   |
+--------------------------------------------------------------------------------------+
```

## 4.3 Run Detail

### 4.3.1 目標

- 一眼看懂這次 run 的狀態與時間
- 清楚看懂 attempt timeline
- 清楚定位哪個 stage / job 出問題
- 不離開主畫面就能看 logs / metrics / step evidence

### 4.3.2 最終 IA

1. `identity row`
2. `run identity strip`
3. `attempt timeline strip`
4. `stage board`
5. `persistent overview rail`
6. `job runtime inspector`
7. `diagnostics drawer`

### 4.3.3 Layout

- 上方：run identity strip
- 第二列：attempt timeline
- 中央：stage board
- 右側：persistent overview rail
- job 被選時：打開 job runtime inspector
- 下方：logs / metrics / step detail drawer

### 4.3.4 Run Detail 語法

- board 永遠是主角
- logs 與 metrics 是 diagnostics，不是主畫面替代品
- attempt 必須像 timeline，不只是 pills

ASCII：

```text
+--------------------------------------------------------------------------------------+
| run identity: #381 / FAILED / duration / actions                                     |
| attempts    : [ INITIAL ]---->[ RESUME ]                                             |
+--------------------------------------------------------------------------------------+
|                                                                 | overview rail       |
|  [ Stage A ]  [ Stage B ]  [ Stage C ]  [ Stage D ]            | current status      |
|      OK           OK         FAILED       BLOCKED                | selected job        |
|  Job 1 OK      Job 3 OK     Job 5 FAIL    Job 7 NOT_RUN          | resumable hints     |
|  Job 2 OK      Job 4 OK                                          | run metrics         |
|                                                                 |                     |
+--------------------------------------------------------------------------------------+
| diagnostics drawer: logs | metrics | step detail                                     |
+--------------------------------------------------------------------------------------+
```

---

## 5. Component rules

## 5.1 Stage

Stage 的角色是 orchestration lane，不是深度編輯卡片。

必須表達：

- sequence
- barrier
- job group
- aggregate status

Config variant：

- header: stage badge、stage name、job count、stage actions
- body: compact job nodes
- connector: 清楚顯示 stage flow

Run Detail variant：

- header: stage status、progress、barrier state
- body: runtime job rows or tiles

## 5.2 Job

Job 是主要操作單位。

Config variant 必須表達：

- job name
- step count
- readiness / issue
- open workspace
- edit / delete / drag

Run Detail variant 必須表達：

- job name
- runtime status
- duration
- selected state
- quick anomaly scan

## 5.3 Run

Run 是 logical run，不是單次 attempt。

Runs 頁面必須讓人讀出：

- 這是哪一個 run
- 它現在是什麼狀態
- 它有沒有多次 attempt
- 它是否可恢復

## 5.4 Attempt

Attempt 是 run detail 的核心時間語意。

必須讓使用者讀懂：

- 第幾次 attempt
- 是 `INITIAL` 還是 `RESUME`
- 目前狀態
- 時間軸

`rerun` 不畫進同一條 attempt timeline。

## 5.5 Actions

操作分三層：

- primary action
- secondary action
- destructive action

Config：

- `Save`
- `Import`
- `Execute`
- `Add Stage`
- `Add Job`

Runs / Run Detail：

- `Open Detail`
- `Stop`
- `Resume`
- `Rerun`
- `Delete`

## 5.6 Status

status 不是附屬 badge，而是主畫面結構的一部分。

它應出現在：

- row leading signal
- stage header
- job tile
- attempt strip
- action availability

---

## 6. State contract

## 6.1 Hover

- 用於顯示次要操作
- 不可造成 layout reflow
- 不可成為唯一入口

## 6.2 Selected

- 代表當前工作焦點
- 使用 `surface + border + ring + token shift`
- 不使用單一細線邊框作為唯一表達

## 6.3 Active

- 只用在真正執行中或進行中的 runtime 狀態
- 不拿來表示單純選取

## 6.4 Focus

- 所有互動元件都必須可見 focus ring
- keyboard flow 不可低於滑鼠 flow

## 6.5 Drag

- drag handle 必須明確
- drag affordance 不與 title 搶位置
- drag 的 drop target 必須清楚

## 6.6 Disabled

- disabled 必須同時表達原因
- 對高風險或 domain 受限操作，需提供說明文案

## 6.7 Loading / Empty / Error

- loading：保留結構骨架
- empty：要有下一步 CTA
- error：要表達恢復路徑

---

## 7. Motion rules

動畫只用來幫助理解，不用來裝飾。

### 7.1 可使用的動畫

- page enter：短暫 fade + rise
- stage / row hover：短距離 elevation
- inspector 開啟：side reveal
- dock 開啟：bottom slide
- selected 切換：soft token transition

### 7.2 不應使用的動畫

- 大幅漂浮
- 過長 blur 動畫
- 重度 scale
- 讓畫布元素不停跳動的 attention animation

### 7.3 建議節奏

- hover：120ms ~ 160ms
- panel / rail：180ms ~ 220ms
- dock：220ms ~ 260ms
- page / section：180ms 左右

---

## 8. Color system rules

所有主題都只使用 daisyUI semantic tokens。

允許主題：

- `light`
- `dark`
- `dracula`
- `autumn`

### 8.1 Token roles

- `base-100 / base-200 / base-300`
  - 工作面與階層背景
- `neutral`
  - 結構群組、shell、非主要但穩定的容器
- `primary`
  - 目前焦點、主要 CTA、選取態
- `secondary / accent`
  - 次級強調與少量提示
- `info / success / warning / error`
  - 狀態語意

### 8.2 禁止事項

- 不硬寫 hex 當主題色
- 不讓 status 色同時兼任結構色
- 不把 `primary` 到處拿來裝飾

### 8.3 Light / Dark 一致原則

- dark 與 dracula 也必須清楚看到 stage 與 job 的分層
- 未選取狀態也要足夠可讀
- selected 不可只靠細邊框

---

## 9. Implementation priority

如果後續要實作，建議優先順序如下：

1. family shell 對齊
2. Config topology + job workspace 重構
3. Runs ledger 重構
4. Run Detail timeline + board + diagnostics 重構
5. state contract 元件化
6. token / theme 規則全域化

---

## 10. Final decision

最終採用方向：

- 以 A 的 domain 正確性作為架構基準
- 以 B 的 layout 與現況診斷作為第一輪落地參考
- 但不被現有畫面限制

一句話總結：

`IrisPipe pipeline family` 應被設計成一組以 `stage flow` 為核心、以 `job editing` 與 `runtime diagnosis` 為兩大工作任務的 workspace family，而不是三張各自成立的頁面。

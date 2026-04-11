# IrisPipe Pipeline Canonical Domain Brief

本文件是 `pipeline family` 設計流程的唯一 domain source。

本 brief 只根據 IrisPipe codebase 的 backend / frontend 事實整理，用來提供給 UI/UX spec agent。
除非由 main agent 另行補充，sub-agent 不應自行查 repo 或自行推測 domain。

---

## 1. 產品目標

IrisPipe 的 frontend 不是單純後台管理頁，而是 **backend pipeline domain 的產品化操作介面**。

`pipeline family` 的任務：

- 讓使用者理解 pipeline 的 stage flow
- 讓使用者安全地建立、修改、執行 pipeline
- 讓使用者理解 logical run、attempt、resume、rerun 的差異
- 讓使用者在 runtime 中快速定位問題 stage / job / step

所以 frontend 的核心不是「把資料列出來」，而是把 backend execution model 轉成：

- 可理解
- 可操作
- 可追蹤
- 可恢復

---

## 2. 核心資源模型

IrisPipe backend 目前的主資源層次如下：

1. `workspace`
2. `folder tree`
3. `pipeline config`
4. `pipeline run`
5. `pipeline run execution`（attempt）

對 UI 最重要的是：

- 使用者平常操作的是 `pipeline config`
- 真正執行後產生的是 `pipeline run`
- 同一個 run 底下會有一到多個 execution / attempt

---

## 3. Pipeline Config Domain

## 3.1 Stage-first model

IrisPipe 目前不是 DAG execution model。

backend execution 的主要語意是：

- pipeline 由多個 `stage` 組成
- 每個 stage 有 `stageSequenceOrder`
- stage 之間是有順序的 barrier
- 同一 stage 內的 jobs 可以平行
- stage 之間不是任意 dependency graph

因此 UI 必須優先表達：

- `stage flow`
- `stage barrier`
- `job belongs to stage`

而不是把 pipeline 畫成任意 graph editor。

## 3.2 Job 是主要編輯單位

雖然 pipeline 是 stage-first orchestration，但在 `Config` 頁面中，實際最細、最常被修改的單位是 `job`。

一個 job 包含的重要內容：

- source connection
- destination connection
- atomic level
- executions / steps
- SQL / query
- parameters
- watermark 相關設定

因此 `Config` UI 必須同時支援：

- stage-first topology
- job-focused editing workspace

## 3.3 Step / execution 類型

job 內有多個 steps / executions。
steps 是 job 的內部執行單元，不是 pipeline graph 上的同級節點。

UI 上不應讓 step 與 stage / job 搶主視圖層級。

---

## 4. Run / Attempt Domain

## 4.1 Logical run vs attempt

這是 IrisPipe 最重要的 runtime 語意之一。

- `execute`
  - 會建立新的 logical run
- `rerun`
  - 會建立新的 logical run
  - 但使用舊 run 的 snapshot
- `resume`
  - 不建立新的 logical run
  - 只在既有 run 下建立新的 execution / attempt

因此 UI 必須明確分開：

- `Runs`：logical run history
- `Run Detail`：run 底下的 attempt timeline 與 runtime details

## 4.2 Snapshot

run 執行時會建立 config snapshot。

對 UI 的意義：

- `Config` 看的是目前 config
- `Run Detail` 看的是該次 run / attempt 所對應的 snapshot 視角
- `rerun` 與 `resume` 都不應讓人誤以為是在跑最新 config

## 4.3 Resume 語意

resume 的重點不是「重跑全部」，而是：

- 找出第一個需要恢復的 stage
- 重新建立新的 attempt
- upstream 已完成的部分在新 attempt 中可能是 `SKIPPED`
- downstream 尚未執行的部分可能是 `NOT_RUN`

因此 UI 上要能說清楚：

- 目前是第幾次 attempt
- 這次 attempt 是 `INITIAL / RESUME / RERUN`
- 哪些 stage / job 是完成、略過、未跑

---

## 5. Runtime Status Domain

對 UI 最重要的狀態集合：

- `PENDING`
- `STARTED`
- `COMPLETED`
- `FAILED`
- `STOPPED`
- `SKIPPED`
- `NOT_RUN`

輔助語意：

- `resumable`
- `blocked`
- `active`

設計上應注意：

- `success / warning / error / info` 是 runtime semantics，不是結構色
- stage/job 的結構分層應由 neutral/base 系列承擔

---

## 6. Pipeline Family Information Architecture

`pipeline family` 由三頁構成：

1. `Config`
2. `Runs`
3. `Run Detail`

這三頁不是三個獨立畫面，而是同一個 workspace family 的三個視角。

## 6.1 Config

`Config` 應優先回答：

- 這條 pipeline 的 stage flow 長什麼樣
- 每個 stage 裡有哪些 job
- pipeline readiness 如何
- 我目前選到哪個 stage / job
- 我要在哪裡改 job 細節

建議的 IA：

- identity row
- context row
- topology workspace
- contextual inspector
- job workspace dock

## 6.2 Runs

`Runs` 應優先回答：

- 最近有哪些 logical run
- 哪些 run 失敗、執行中、可 resume
- 每個 run 的最新 attempt 是什麼
- 我應該打開哪一筆去看細節

`Runs` 的本質應是 `operations ledger`，不是 dashboard。

## 6.3 Run Detail

`Run Detail` 應優先回答：

- 目前 run 狀態是什麼
- 現在看到的是哪個 attempt
- attempt timeline 如何
- 問題卡在哪個 stage / job / step
- 我下一步該看 logs、metrics 還是 steps

建議的 IA：

- hero summary
- attempt timeline
- runtime board
- diagnostics drawer
- overview rail

---

## 7. 色彩與互動規則

本專案目前只保留 4 個 themes：

- `light`
- `dark`
- `dracula`
- `autumn`

而且使用 daisyUI semantic tokens。

基本原則：

- `base-*`：工作面、背景層次
- `neutral`：結構群組、stage / shell / lane 等
- `primary`：焦點、selected context、主路徑強調
- `success / warning / error / info`：runtime 狀態

互動狀態：

- hover：輕提示，不造成 layout shift
- selected：surface + border/ring + emphasis 一起變
- focus：與 selected 分開，需對鍵盤清楚
- disabled：可辨識不可用，但仍保留 control 感

---

## 8. 目前 current view 的已知問題

以下是目前畫面與 code 實作綜合判斷出的已知問題，供設計 spec 參考：

1. `Config` 的 topology 還不夠像主角
2. `stage / job / canvas` 邊界不夠硬，特別是在暗色主題
3. stage header 與 job row 的 icon / control 過多
4. inspector 的權重偏重，容易壓過 topology
5. `Runs` 有滑向 dashboard + ledger 混體的風險
6. `Run Detail` 有 board / timeline / diagnostics / rail 搶焦點的風險

注意：這些是 current view 的問題，不是 domain 真理。

---

## 9. 設計輸出應包含的重點

若要為 IrisPipe 產出 `pipeline family` spec，必須處理：

1. `Config / Runs / Run Detail` 的 family consistency
2. stage-first flow 與 job editing 的平衡
3. logical run 與 attempt 的清楚表達
4. runtime state 的一致映射
5. theme-safe 的 semantic color 使用
6. hover / selected / focus / drag / danger actions 的規則
7. ASCII wireframe 或 ASCII layout 說明（若需要出圖）

---

## 10. 對 sub-agent 的限制

若你是基於此文件工作的 sub-agent，請遵守：

- 不自行查 repo
- 不自行補 domain 假設
- 若資訊不足，回問 main agent
- 你只能基於此 brief 與 main agent 補充資訊產出 spec


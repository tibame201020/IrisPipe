# IrisPipe Pipeline Domain Brief

這份文件只整理 pipeline family 的 domain 事實，提供 UI/UX 設計使用。
重點不是實作細節，而是「畫面必須表達哪些語意」。

## 1. 產品範圍

IrisPipe 的 pipeline family 主要包含三個工作面：

- `Config Editor`
- `Runs`
- `Run Detail`

這三者是同一個 pipeline 的不同視角，不應該各自長成不同產品。

## 2. Pipeline Config 模型

### 2.1 Pipeline

一條 pipeline 具有：

- `pipeline id`
- `pipeline name`
- `folder id / folder path`
- `stages[]`
- `jobs[]`

### 2.2 Stage

stage 是 pipeline 的第一層執行分組。

重要屬性：

- `stage`
- `stageSequenceOrder`

語意：

- stage 有明確順序
- stage 之間是依序推進
- 同一個 stage 內的 jobs 可平行

UI 必須讓使用者一眼看出：

- pipeline 的 stage 流向
- stage 的先後順序
- 每個 stage 裡有多少 jobs

### 2.3 Job

job 是 stage 內的主要工作單元。

重要屬性：

- `jobName`
- `stage`
- `stageSequenceOrder`
- `executions[]`
- `setting`
- `database`

語意：

- job 隸屬於單一 stage
- job 可在 stage 內排序
- job 是主要編輯單位
- 使用者真正要深入處理的是 job workspace，而不是 stage 卡片本身

### 2.4 Step / Execution

job 內有 `executions[]`，每個 step 具備：

- `type`
- `name`
- `sql`
- `destTable`
- `parameters`
- `watermarkColumn`

step type 包含：

- `INSERT`
- `UPDATE`
- `UPSERT`
- `DELETE`
- `EXECUTE`

UI 必須支援：

- 看見 job 有幾個 steps
- 進入 job workspace 編輯 steps
- 在 step editor 處理 SQL、參數、watermark 等內容

### 2.5 Job Setting / Connection

job setting 重要欄位：

- `fetchSize`
- `batchSize`
- `deleteThreshold`
- `atomicLevel`

atomic level 目前為：

- `JOB`
- `CHUNK`

database config：

- `source`
- `dest`

connection info：

- `driver`
- `url`
- `username`
- `password`

UI 必須能清楚表達：

- 一個 job 是否設定完整
- source / dest 是否齊全
- atomic level 與 step 類型的關係

## 3. Runtime 模型

### 3.1 Run

每次執行 pipeline 會產生 run。

run 重要屬性：

- `id`
- `pipelineId`
- `pipelineName`
- `status`
- `createdAt`
- `startTime`
- `endTime`

### 3.2 Attempt / Execution

一個 run 底下可能有多個 attempts。

attempt 重要屬性：

- `executionId`
- `executionNo`
- `executionKind`
- `status`
- `stages[]`
- `jobs[]`

execution kind：

- `INITIAL`
- `RESUME`
- `RERUN`

UI 必須能讓使用者理解：

- 這個 run 有幾次 attempt
- 現在正在看哪一次
- `resume` 與 `rerun` 的差異

### 3.3 Runtime Status

pipeline run status：

- `PENDING`
- `NOT_RUN`
- `SKIPPED`
- `STARTING`
- `STARTED`
- `STOPPING`
- `STOPPED`
- `FAILED`
- `COMPLETED`
- `ABANDONED`
- `UNKNOWN`

UI 必須把狀態當成第一層資訊，而不是補充資訊。

### 3.4 Runtime Stage / Job

run detail 會投影成 stage-first 視圖：

- stage 有 status
- stage 內 jobs 有 status
- job 有 steps execution info

job runtime 資訊包含：

- `status`
- `atomicLevel`
- `startTime`
- `endTime`
- `stepExecutionInfos[]`

step runtime 資訊包含：

- `readCount`
- `writeCount`
- `commitCount`
- `rollbackCount`
- `filterCount`
- `skip counts`
- `exitDescription`

UI 必須能支援：

- 用 stage board 看整體進度
- 用 job detail 看失敗點
- 用 logs 與 metrics 看執行證據

## 4. Domain 行為與限制

### 4.1 Stage 執行語意

- stage 有明確 sequence
- 同一 stage 內 jobs 可平行
- stage 之間有 barrier

這意味著：

- `Config Editor` 必須優先表達 stage flow
- `Run Detail` 必須優先表達 stage progress

### 4.2 Resume / Rerun / Stop

目前 domain 規則：

- 只有失敗或停止後的 run 可 resume
- `resume` 是從未完成的 stage 接續
- `rerun` 是重新建立新的執行脈絡
- in-flight run 可 stop

這些都是高風險操作，UI 需要：

- 清楚標示操作意義
- 顯示目前可做與不可做的動作
- 提供足夠後果說明

### 4.3 Delete

- terminal run 可 delete
- config 刪除與 folder 刪除可能涉及 run history blocker

UI 不應把 delete 做得像普通次要操作。

## 5. Config Editor 需要承載的互動

目前已有或合理需要的互動：

- 選取 stage
- 選取 job
- 開啟 job workspace
- 新增 stage
- 刪除 stage
- 新增 job
- 刪除 job
- stage reorder
- job 在 stage 間移動
- 編輯 job steps
- import file
- save pipeline

UI 應讓這些互動：

- 可發現
- 不互相干擾
- 不因 hover/overlay 造成 layout reflow

## 6. Runs 頁面需要承載的資訊

Runs 頁面不是 dashboard，而是 pipeline 的執行歷史工作面。

必須清楚表達：

- 最新 run
- run history
- status filter
- success / active / resumable 等摘要
- 進入 run detail 的入口
- execute 的主要入口

## 7. Run Detail 頁面需要承載的資訊

Run Detail 必須同時支援兩種閱讀方式：

- board 視角：快速理解 stage / job 狀態
- logs / detail 視角：追查問題

必須清楚表達：

- run status
- attempt list
- current attempt
- stage progress
- job progress
- resume path / stage semantics
- run actions：stop / resume / rerun / delete

## 8. UI/UX 設計限制

### 8.1 設計目標

- pipeline graph 必須足夠清晰
- 編輯 pipeline 必須順暢
- runs 要一眼可讀
- run detail 要有足夠資訊密度
- hover / active / selected / focus / drag 都必須合理

### 8.2 Theme 規則

IrisPipe 目前只允許這四個 daisyUI themes：

- `light`
- `dark`
- `dracula`
- `autumn`

必須使用 daisyUI semantic tokens：

- `primary`
- `secondary`
- `accent`
- `neutral`
- `base-100`
- `base-200`
- `base-300`
- `info`
- `success`
- `warning`
- `error`

原則：

- `base-*` 用於主要表面與背景
- `primary` 用於主焦點與主要 CTA
- `neutral` 可用於結構群組
- `info/success/warning/error` 只用於狀態語意
- 不要依賴固定 hex 或固定灰階去完成主題切換

### 8.3 動畫規則

可接受的動畫：

- hover emphasis
- selected / active transition
- in-flight status pulse
- drawer / panel / dialog 的短距離 transition

不可接受的動畫：

- 為了好看而干擾閱讀的長時間 motion
- 造成 layout 位移的 hover action
- 切換狀態時讓主要資訊跳動

## 9. 設計輸出期待

設計文件應包含：

- pipeline family 的整體設計方向
- `Config / Runs / Run Detail` 的資訊架構
- 元件與狀態規則
- hover / selected / active / focus / drag / disabled 規則
- light / dark / dracula / autumn 的 semantic color 規則
- 需要時用 ASCII wireframe 說明


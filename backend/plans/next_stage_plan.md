# IrisPipe 下一階段計畫

## 文件目的

這份文件不是舊版 restart 提案的延伸，而是目前實作完成後的接手文件。

目標是讓新的對話或新的 agent 可以直接理解：

1. IrisPipe 現在的 runtime 主語是什麼
2. 哪些能力已經完成
3. 哪些能力故意還沒做
4. 下一階段最合理的切入點是什麼

本文件以目前主線狀態為基準，對應 commit：

- `ad35145`
- message: `feat: add pipeline resume and rerun execution flows`

---

## 一句話總結

IrisPipe 已經完成 pipeline-level 的基本 trigger 與基本觀察能力。

目前 runtime 三種執行語意已固定：

- `execute`
  - 建立新的 `PipelineRun`
  - 使用最新 pipeline config materialize 新 snapshot
- `resume`
  - 留在同一個 `PipelineRun`
  - 建立新的 `PipelineRunExecution`
  - 從失敗節點接續
  - 參照的是既有 snapshot
- `rerun`
  - 建立新的 `PipelineRun`
  - 重新從頭跑整條 pipeline
  - 參照的是來源 run 的 snapshot，不是最新 pipeline config

---

## 目前已完成的能力

## 1. 對外 runtime 邊界已提升到 pipeline

公開 API 已不再以 `job` 為主語，而是以 `PipelineRun` 為主語。

目前 runtime API：

- `POST /api/v1/sync-pipeline`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
- `GET /api/v1/sync-pipeline?ids=...`
- `GET /api/v1/sync-pipeline/{pipelineRunId}`
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

相關入口：

- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`

## 2. runtime model 已拆成 logical run 與 execution attempt

目前 runtime tables 已成形：

- `iris_pipeline_run`
- `iris_pipeline_run_snapshot`
- `iris_pipeline_run_job`
- `iris_pipeline_run_execution`
- `iris_pipeline_run_execution_job`

對應語意：

- `PipelineRun`
  - logical run
- `PipelineRunSnapshot`
  - immutable run snapshot
- `PipelineRunJob`
  - logical job node
- `PipelineRunExecution`
  - 某次 execution attempt
- `PipelineRunExecutionJob`
  - 某次 attempt 中某個 job node 的結果

關鍵檔案：

- `backend/src/main/java/irispipe/core/service/PipelineExecutionService.java`
- `backend/src/main/java/irispipe/infrastructure/service/PipelineRunSnapshotService.java`
- `backend/src/main/java/irispipe/infrastructure/service/PipelineRunLifecycleService.java`

## 3. stable identity 與 snapshot 已完成

這是 resume / rerun / CHUNK restart 能成立的前提。

已完成內容：

- execution name 先 materialize 再寫入 snapshot
- step name 走穩定命名規則
- `CHUNK` restart-safe identifying params 已補齊
- rerun 改為複用來源 run 的 snapshot，而不是重新讀最新 config

## 4. resume 已支援 `JOB` 與 `CHUNK`

目前 resume 行為：

- `JOB`
  - replay failed job
- `CHUNK`
  - restart failed Spring Batch job instance
- mixed pipeline
  - 依 failed node 的 `atomicLevel` 決定 replay 或 restart

目前 latest execution detail 也已能正確區分：

- `SKIPPED`
- `NOT_RUN`
- `FAILED`
- `COMPLETED`

## 5. sync / async trigger 與 runtime regression 已有 K6 保護

K6 現在已按責任分資料夾：

- `backend/k6/config`
- `backend/k6/pipeline`
- `backend/k6/runtime`

已覆蓋：

- config validation / CRUD
- pipeline execute
- pipeline async execute
- pipeline resume (`JOB`)
- pipeline resume (`CHUNK`)
- pipeline resume (mixed)
- pipeline async resume
- pipeline rerun
- pipeline async rerun
- 既有 runtime 行為回歸

執行入口：

- `backend/k6/run-tests.ps1`

---

## 目前還沒完成，但屬於已知缺口

## 1. public detail 還不是完整 attempt timeline

現在 detail 回傳的是 latest execution projection，不是完整 execution history。

這代表：

- UI 可以看最新狀態
- UI 可以看最新 job node 結果
- 但 UI 還不能直接從同一個 detail payload 拿到完整 attempts timeline

這不是模型做不到，而是 API 還沒展開。

## 2. manual stop 還沒實作

目前 model 已經有：

- `STOPPING`
- `STOPPED`

但還沒有：

- public stop API
- stop request propagation
- lifecycle stop 專用寫入路徑
- orchestration stop guard

## 3. delete 對 in-flight run 沒有明確保護

現在 delete 著重的是 lineage cleanup。

對於：

- `STARTING`
- `STARTED`
- 未來的 `STOPPING`

是否允許刪除，還沒有清楚 guard。

這件事最好跟 manual stop 一起定義。

---

## 關於 manual stop 的判斷

## 結論

manual stop 是目前最合理的下一個 runtime control surface。

但它不是「只要停下就好、剩下都不用處理」的那種工作。

它的複雜度不是大工程，但也不是只補 controller endpoint 就結束。

## 為什麼它是下一步

因為目前已經有：

- pipeline-level trigger
- pipeline-level observe
- pipeline-level resume
- pipeline-level rerun

控制面剩下最明顯的缺口就是：

- stop in-flight pipeline run

## 為什麼不能只停當前 job 就結束

因為 IrisPipe 是 sequence-first pipeline orchestration。

如果只停掉當前 Spring Batch job，但沒有處理 pipeline 自己的流程控制，會有幾個問題：

1. stop request 可能剛好落在兩個 job 之間
   - 當前 job 已結束
   - 下一個 job 可能已經被 `executePipelineRun(...)` 啟動

2. lifecycle 需要正確投影
   - `PipelineRun` / `PipelineRunExecution` 要進入 `STOPPING` / `STOPPED`
   - 當前 `PipelineRunExecutionJob` 要正確落停
   - downstream nodes 要標成 `NOT_RUN`

3. resume 之後要能銜接
   - 現在 `resume` 的 terminal 判定其實已包含 `STOPPED`
   - 也就是說 manual stop 一旦做對，後續 resume 語意可以自然銜接

## 因此 manual stop 至少需要這四塊

### A. public API

建議新增：

- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`

先不要用 `DELETE` 取代 stop，也不要把 stop 混進 query/detail。

### B. stop request persistence / lifecycle path

需要有明確的 lifecycle 寫入方法，例如：

- `markStopRequested(...)`
- `markStopped(...)`

目前 `PipelineRunLifecycleService` 還沒有 stop 專用方法。

### C. 真正的 Spring Batch stop propagation

不能只改 IrisPipe 自己的表狀態，還要真的讓目前正在跑的 job 停下來。

這通常代表至少要補一種機制：

- `JobOperator.stop(...)`
- 或等效的 Spring Batch stop 控制方式

目前程式裡尚未接入這一層。

### D. sequence-first orchestration guard

`executePipelineRun(...)` 需要在至少兩個時點檢查 stop：

- 啟動下一個 job 之前
- 當前 job 結束回來之後

否則 stop request 會有 race condition。

---

## 建議的下一階段實作順序

## Step 1. 先做 manual stop，範圍只收斂到 pipeline-level control

建議先支援：

- stop async execute
- stop async resume

理由：

- sync request 本身會卡住呼叫端
- 真實操作 stop 幾乎一定是第二個 client / UI 發出
- async flow 比較符合 stop 的實際使用場景

sync flow 不需要禁止 stop，只是 K6 第一階段不必先把它當主驗證場景。

## Step 2. lifecycle service 補 stop 專用方法

建議新增：

- `markStopRequested(...)`
- `markExecutionJobsNotRun(...)` 可重用於 downstream
- `markStopped(...)`

目標是讓 status transition 明確，不要把 stop 混進 failed path。

## Step 3. orchestration 補 stop guard

主要調整點會在：

- `PipelineExecutionService.executePipelineRun(...)`

至少要能做到：

- stop request 到達後，不再啟動下一個 job
- 若 stop 成功，剩餘 execution jobs 標 `NOT_RUN`

## Step 4. 接入 Spring Batch stop 能力

這一段要先決定技術路線，再開始寫 code：

- 是否引入 `JobOperator`
- 是否需要額外保存 currently running job execution reference
- stop request 到達時，要怎麼定位該停哪一筆 Spring Batch job execution

這是 manual stop 真正需要先拍板的地方。

## Step 5. K6 保護 stop flow

建議至少補：

- `pipeline stop async execute`
- `pipeline stop async resume`

驗證點：

- stop API 成功
- run status 進入 `STOPPED`
- 當前 job 停止
- downstream jobs = `NOT_RUN`
- stop 後可以再 `resume`

---

## 目前不建議先做的事

## 1. 不建議先把 detail 擴成完整 timeline API

這是合理的後續工作，但不是最急迫。

原因：

- 內部 execution history 已經存在
- 產品控制面現在更缺的是 stop，不是 timeline

## 2. 不建議先做 full DAG

現況是 sequence-first，這是有意識的選擇。

manual stop 也會比較容易先在 sequence-first 模型內做對。

## 3. 不建議讓 rerun 改回讀最新 config

這點已明確拍板：

- rerun = replay source snapshot
- execute = read latest config

不要再把兩者語意混回去。

---

## 目前接手時最重要的檔案

若要直接開始做下一步，先看這些檔案：

- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`
  - runtime API surface
- `backend/src/main/java/irispipe/core/service/PipelineExecutionService.java`
  - execute / resume / rerun 與 sequence-first orchestration
- `backend/src/main/java/irispipe/infrastructure/service/PipelineRunLifecycleService.java`
  - runtime state projection
- `backend/src/main/java/irispipe/infrastructure/service/PipelineRunSnapshotService.java`
  - snapshot create / copy / read
- `backend/src/main/java/irispipe/batch/listener/CustomJobListener.java`
  - Spring Batch 與 pipeline lifecycle 的橋接
- `backend/k6/pipeline`
  - runtime regression suite

---

## 最後結論

IrisPipe 現在已經具備：

- pipeline-level execute
- pipeline-level observe
- pipeline-level resume
- pipeline-level rerun
- snapshot-consistent runtime semantics
- K6 regression protection

所以下一個合理階段不是再往 restart 語意上堆功能，而是把 runtime control 補齊。

目前最值得做的就是：

- `manual stop`

但實作時要把它當成「pipeline control + lifecycle + Spring Batch stop propagation」來做，而不是單純的 status update endpoint。

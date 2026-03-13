# IrisPipe 下一階段計畫

## Phase 11: Observability and Operator Safety

## 文件目的

這份文件是目前主線狀態下的接手文件，不再延續舊版「manual stop 還沒做」的前提。

目標是讓新的對話或新的 agent 可以直接理解：

1. IrisPipe 現在已經做到哪裡
2. 哪些設計判斷已經拍板，不要再重辯
3. 下一階段為什麼不是 microservice / multi-module
4. 下一階段要做什麼，以及建議的實作順序

本文件預設基線對應目前主線控制面已完成的狀態，參考 commit：

- `d43480d`
- message: `feat: close pipeline stop control loop and align runtime docs`

---

## 一句話總結

IrisPipe 現在已經完成 pipeline-level 的完整控制迴路：

- `execute`
- `resume`
- `rerun`
- `stop`

控制面已經閉環，下一階段不該再把重心放在 restart 語意本身，而應該轉向：

- 提升觀測性
- 補上 operator safety

也就是：

- attempt timeline / control history
- actuator / metrics / operator-facing observability
- delete in-flight guard

---

## 目前系統狀態

## 1. Runtime 主語已經固定為 `PipelineRun`

對外 runtime API 現在是：

- `POST /api/v1/sync-pipeline`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/stop`
- `GET /api/v1/sync-pipeline?ids=...`
- `GET /api/v1/sync-pipeline/{pipelineRunId}`
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

相關入口：

- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`

## 2. Runtime model 已經拆成 logical run 與 execution attempt

目前 runtime tables：

- `iris_pipeline_run`
- `iris_pipeline_run_snapshot`
- `iris_pipeline_run_job`
- `iris_pipeline_run_execution`
- `iris_pipeline_run_execution_job`

對應語意：

- `PipelineRun`
  - logical run
- `PipelineRunSnapshot`
  - immutable runtime snapshot
- `PipelineRunJob`
  - logical pipeline job node
- `PipelineRunExecution`
  - 某次 execution attempt
- `PipelineRunExecutionJob`
  - 某次 attempt 中某個 job node 的結果

## 3. 三種 runtime 語意已固定，不要再改回去

- `execute`
  - 建立新的 `PipelineRun`
  - 讀最新 pipeline config
  - materialize 新 snapshot
- `resume`
  - 留在同一個 `PipelineRun`
  - 建立新的 `PipelineRunExecution`
  - 參照既有 snapshot
- `rerun`
  - 建立新的 `PipelineRun`
  - 複製來源 run 的 snapshot
  - 不讀最新 pipeline config

這是目前最重要的語意邊界之一，不要再把 `rerun` 改回 fresh execute。

## 4. `JOB` / `CHUNK` / mixed 都已成立

目前已完成：

- `JOB`
  - outer transaction at job boundary
  - failure / stop 走 replay
- `CHUNK`
  - native chunk commit
  - failure / stop 走 restart
- mixed pipeline
  - 依 failed/stopped node 的 `atomicLevel` 決定 replay 或 restart

## 5. manual stop 已經完成

目前 stop 語意：

- public API 已存在
- lifecycle 會經過 `STOPPING` -> `STOPPED`
- Spring Batch stop 透過 `JobOperator.stop(...)`
- sequence-first orchestration 已有 stop guard
- downstream pending nodes 會標成 `NOT_RUN`
- stopped run 可以再 `resume`

## 6. 驗證基線

目前可信的回歸基線：

- `backend/k6/run-tests.ps1`
- `backend/k6/pipeline/sync-pipeline-control-flow-async.test.js`

已驗證：

- sync / async trigger
- resume (`JOB`, `CHUNK`, mixed)
- rerun
- stop (`JOB`, `CHUNK`, mixed)
- `execute -> stop -> resume -> rerun -> stop -> resume`

另外要注意：

- `mvn -q -DskipTests compile` 可作為基本編譯檢查
- `mvn test` 目前不是可靠基線，repo 內仍有舊測試噪音

---

## 已拍板的架構決策

## 1. 保持 single app

下一階段不拆 microservice。

理由：

- 現在還沒有證據顯示 deployment boundary 是主要問題
- runtime 一致性目前強依賴同一個 app 內的 orchestration + lifecycle + listener path
- 為了 observability 去拆 service，只會把本來清楚的狀態機變成跨程序協調問題

## 2. 不做 Maven multi-module

下一階段也不把 repo 拆成多模組。

理由：

- 目前需求是補觀測性與 delete guard，不是重整 build graph
- multi-module 會增加組織成本，但不會直接提升 operator visibility
- 等 observability 與 query model 穩定後，再考慮是否需要 module boundary

## 3. 採用 single app + clear package boundary

下一階段的邊界建議是 package boundary，而不是 process boundary。

建議原則：

- `api`
  - REST contract 與 request/response
- `core`
  - runtime control 與 query assembly
- `infrastructure`
  - repo / config / Spring wiring
- `observability`（可新增 top-level package）
  - meter names
  - metric publishing
  - actuator / prometheus wiring
  - lifecycle-derived observation events

注意：

- 不要把 metrics 邏輯直接散落在 controller
- 不要讓 `PipelineExecutionService` 同時無限制膨脹成 query assembler + metrics hub

## 4. 盡量採 additive API 變更

目前 API 已有使用者與 K6 契約。

下一階段原則：

- 優先擴充現有 payload 或新增可選欄位
- 不要破壞既有 `summary` / `detail` top-level 結構
- delete guard 先沿用目前 exception model，優先回 `400`

---

## 下一階段主題

## 結論

下一階段應定義為：

## Phase 11: Observability and Operator Safety

這個階段不是單做 metrics，而是三件事一起做：

1. attempt timeline / control history
2. actuator / runtime metrics
3. delete in-flight guard

這三件事放在一起最合理，因為它們都服務於「operator 可以安全地看懂、操作、治理 pipeline run」。

---

## 交付目標

## Goal A. public detail 能看見 attempts timeline

目前 detail 只有 latest projection。

下一階段要做到：

- operator 可以看到一個 `PipelineRun` 經歷過哪些 attempts
- 每個 attempt 的：
  - `executionNo`
  - `executionKind`
  - `status`
  - `requestedAsync`
  - `startTime`
  - `endTime`
  - job-level 結果
- latest top-level `jobs` 仍保留，避免破壞舊用法

## Goal B. 有可用的 runtime observability v1

至少要做到：

- actuator health
- metrics endpoint
- prometheus scrape endpoint（若採用 Prometheus）
- pipeline run / execution / job 的基本 counters / gauges / timers

## Goal C. delete 不再能誤刪 in-flight run

至少要做到：

- `STARTING` / `STARTED` / `STOPPING` 不可 delete
- terminal run 才允許 cleanup
- 行為在 API 層與 K6 都被保護

---

## 詳細規劃

## Workstream 1: Delete In-Flight Guard

### 為什麼先做

這是最小但最有價值的 operator safety 補丁。

現在 stop 已存在，如果 delete 仍能對 in-flight run 生效，控制面仍然不夠安全。

### 建議行為

`DELETE /api/v1/sync-pipeline/{pipelineRunId}`：

- 拒絕：
  - `STARTING`
  - `STARTED`
  - `STOPPING`
- 允許：
  - `COMPLETED`
  - `FAILED`
  - `STOPPED`
  - `ABANDONED`
  - `UNKNOWN`

### 建議實作點

- `backend/src/main/java/irispipe/core/service/PipelineExecutionService.java`
  - `deletePipelineRun(...)` 先驗證 latest execution status
- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`
  - API contract 不需新增 endpoint
- `backend/src/main/java/irispipe/infrastructure/service/PipelineRunLifecycleService.java`
  - 不一定要改，但要理解 stop / terminal semantics

### API 行為建議

先沿用目前 exception model：

- 用 `IllegalArgumentException`
- 讓現有 `GlobalExceptionHandler` 映射成 `400`

理由：

- 這一階段重點不是重寫錯誤模型
- 新增 `409` 會牽動更大的 API 契約調整

### 驗證

建議新增 K6：

- `sync-pipeline-delete-guard-async.test.js`

驗證點：

- 對 in-flight run delete -> `400`
- 對 completed/stopped run delete -> `204`
- delete guard 不影響 stop / resume / rerun 現有語意

---

## Workstream 2: Attempt Timeline / Control History

### 為什麼這是 observability 的核心

如果 detail 只能看 latest projection，operator 無法回答這些問題：

- 這個 run 曾經 stop 過幾次？
- 這次 completion 是 initial run 還是 resume 完成？
- 哪些 job 是在第 1 次 attempt 完成、哪些是第 2 次才完成？

這些都屬於最基本的操作可觀測性，而不是「額外 fancy 功能」。

### 建議 API 方向

優先擴充現有 detail response，而不是另開一個完全獨立的 API。

建議維持：

- top-level `jobs`
  - 仍表示 latest execution projection

新增：

- top-level `attempts`
  - 每個 `PipelineRunExecution` 一筆
  - 內含該 attempt 的 jobs

### 建議 response 形狀

```json
{
  "id": 123,
  "status": "STOPPED",
  "requestedAsync": true,
  "jobs": [
    {
      "jobName": "job_b",
      "status": "STOPPED"
    }
  ],
  "attempts": [
    {
      "executionId": 1001,
      "executionNo": 1,
      "executionKind": "INITIAL",
      "status": "STOPPED",
      "requestedAsync": true,
      "startTime": "2026-03-13T10:00:00",
      "endTime": "2026-03-13T10:01:00",
      "jobs": [
        {
          "jobName": "job_a",
          "status": "COMPLETED"
        },
        {
          "jobName": "job_b",
          "status": "STOPPED"
        },
        {
          "jobName": "job_c",
          "status": "NOT_RUN"
        }
      ]
    },
    {
      "executionId": 1002,
      "executionNo": 2,
      "executionKind": "RESUME",
      "status": "COMPLETED",
      "requestedAsync": true,
      "jobs": [
        {
          "jobName": "job_a",
          "status": "SKIPPED"
        },
        {
          "jobName": "job_b",
          "status": "COMPLETED"
        },
        {
          "jobName": "job_c",
          "status": "COMPLETED"
        }
      ]
    }
  ]
}
```

### 建議實作點

- `backend/src/main/java/irispipe/model/dto/SyncPipelineDTO.java`
  - 新增 attempt-level DTO
- `backend/src/main/java/irispipe/core/service`
  - 建議抽出 `PipelineRunQueryService.java`
  - 不要繼續把 read-model assembly 塞進 `PipelineExecutionService`
- `backend/src/main/java/irispipe/infrastructure/repo`
  - 需要可依 `pipelineRunId` 讀取所有 executions / executionJobs 的查詢
- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`
  - detail endpoint contract 擴充

### 實作原則

- 按 `executionNo` 升序輸出 attempts
- top-level `jobs` 不移除
- attempt-level job order 仍按 `jobSequenceOrder`
- job-level欄位盡量沿用現有 `PipelineRunJobInfo`

### 驗證

建議新增 K6：

- `sync-pipeline-observe-timeline.test.js`

建議情境：

- execute -> stop -> resume
- execute -> rerun -> stop -> resume

驗證點：

- detail 有 `attempts`
- attempts 順序正確
- attempt 1 / attempt 2 狀態與 job status 正確
- top-level latest `jobs` 仍與舊 detail 契約一致

---

## Workstream 3: Observability V1

### 目標

不是一次做完整監控平台，而是先把 app 變成「可被監控」。

### 這一階段建議至少加入

- `spring-boot-starter-actuator`
- `micrometer-registry-prometheus`（若要 Prometheus）

建議暴露：

- `/actuator/health`
- `/actuator/metrics`
- `/actuator/prometheus`

### 建議 metrics

#### Counters

- `irispipe.pipeline.run.triggered`
- `irispipe.pipeline.execution.completed`
- `irispipe.pipeline.execution.failed`
- `irispipe.pipeline.execution.stopped`
- `irispipe.pipeline.job.completed`
- `irispipe.pipeline.job.failed`
- `irispipe.pipeline.job.stopped`

#### Gauges

- `irispipe.pipeline.runs.active`
- `irispipe.pipeline.executions.active`

#### Timers

- `irispipe.pipeline.execution.duration`
- `irispipe.pipeline.job.duration`

### Tag 設計原則

只用 low-cardinality tags，例如：

- `execution_kind`
- `requested_async`
- `atomic_level`
- `status`

不要用：

- `pipelineRunId`
- `pipelineId`
- `jobName`
- 任意 config path

否則 cardinality 很快失控。

### 建議實作邊界

建議新增 package：

- `backend/src/main/java/irispipe/observability`

內容可包含：

- metric names constants
- meter publisher
- lifecycle observation event handlers
- actuator / prometheus config

不要把這些邏輯直接塞進：

- controller
- DTO
- JPA entity

### 事件來源建議

觀測性應該盡量從 lifecycle transition 取資料，而不是從 controller 猜狀態。

可考慮做法：

- `PipelineRunLifecycleService` 完成狀態寫入後發出 app event
- `observability` package 內的 listener 消費 event 並更新 meter

這樣可以讓：

- persistence path
- metrics path

彼此邊界比較清楚。

### 驗證

建議新增 smoke tests：

- actuator health reachable
- `/actuator/metrics` 有關鍵 metric name
- `/actuator/prometheus` 有輸出

若使用 K6，可加：

- `sync-pipeline-observability-smoke.test.js`

但這一階段不需要把 Prometheus 整套 infra 帶進 repo。

---

## 建議實作順序

## Step 1. Delete guard

先補安全性最明確的缺口，範圍小、風險低、回饋快。

## Step 2. 抽出 query service，準備 timeline

在擴充 detail 前，先避免 `PipelineExecutionService` 繼續膨脹。

建議先抽：

- `PipelineRunQueryService`

讓：

- execute / resume / rerun / stop / delete
  - 留在 control service
- detail / attempts assembly
  - 走 query service

## Step 3. 擴充 detail -> attempts timeline

這是 observability 最直接的使用者價值。

## Step 4. 加 actuator 與 metrics v1

等 query model 比較穩了，再加 meter publishing，避免一邊改 query 一邊改 metrics 邊界。

## Step 5. 補 K6 與文件

K6 補：

- delete guard
- attempt timeline
- actuator smoke

文件補：

- `docs/architecture`
- `docs/feature`
- `CHANGELOG`

---

## 非目標

這一階段明確不做：

- microservice split
- Maven multi-module split
- full DAG orchestration
- distributed worker / remote partitioning
- alert channel integration（Slack / Teams / email）
- tracing platform 整合
- 重寫整套 exception model

---

## 新 agent 接手時應先讀的檔案

### Runtime control

- `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`
- `backend/src/main/java/irispipe/core/service/PipelineExecutionService.java`
- `backend/src/main/java/irispipe/infrastructure/service/PipelineRunLifecycleService.java`
- `backend/src/main/java/irispipe/batch/listener/CustomJobListener.java`
- `backend/src/main/java/irispipe/model/dto/SyncPipelineDTO.java`

### Runtime persistence

- `backend/src/main/java/irispipe/infrastructure/repo/PipelineRunRepo.java`
- `backend/src/main/java/irispipe/infrastructure/repo/PipelineRunExecutionRepo.java`
- `backend/src/main/java/irispipe/infrastructure/repo/PipelineRunJobRepo.java`
- `backend/src/main/java/irispipe/infrastructure/repo/PipelineRunExecutionJobRepo.java`
- `backend/src/main/java/irispipe/infrastructure/repo/PipelineRunSnapshotRepo.java`

### Regression coverage

- `backend/k6/run-tests.ps1`
- `backend/k6/pipeline`
- `backend/k6/utils/test-helpers.js`
- `backend/k6/services/sync-pipeline-api.js`

### 文件基線

- `backend/docs/architecture/README.md`
- `backend/docs/architecture/core-flow.md`
- `backend/docs/architecture/full-implementation-guide.md`
- `backend/CHANGELOG.md`

---

## 最後結論

IrisPipe 現在缺的已經不是控制面，而是營運面。

因此下一階段最合理的主題不是再做新的 trigger/restart 變體，而是：

- 讓 operator 看得清楚
- 讓 operator 刪得安全
- 讓 runtime 狀態能被健康檢查與 metrics 系統可靠地觀測

也就是：

- attempt timeline
- observability v1
- delete in-flight guard

並且整個階段都應維持：

- single app
- clear package boundary
- additive API evolution

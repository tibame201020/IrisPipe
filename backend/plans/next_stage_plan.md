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

---

## Phase 12: Config Tree and GUI Contract Foundation

## 目標

把 config domain 從 file-centric contract 改成 GUI 可直接對接的 tree/resource contract。

Phase 12 只處理下一階段必需的 backend 工作，不延伸到 user/tenant/platform service。

## 已定邊界

- root 是單一虛擬 root
- pipeline 可以直接放在 root 底下
- folder 允許巢狀
- `pipelineId` 繼續作為唯一 PK
- pipeline 唯一性改為同 folder 內 `pipelineName` 唯一
- folder 唯一性改為同 parent 下 `folderName` 唯一
- DB 內部使用 hidden root row 承接 top-level folders / pipelines
- recursive delete 允許，但只能是顯式操作
- recursive delete 只刪 config tree，不刪 `PipelineRun` lineage
- 若 subtree 內存在 run history，preview 必須顯示 blocker，真正 delete 必須回 `409`

## Phase 12 交付項目

### 1. Schema foundation

- 新增 `iris_pipeline_folder`
- 在 `iris_pipeline` 新增 `folder_id`
- 在 `iris_pipeline` 新增 `pipeline_name`
- 建 hidden root row migration
- 新增 `(parent_id, folder_name)` 與 `(folder_id, pipeline_name)` 唯一約束
- 先保留 `config_path` / `file_name` 作為過渡欄位

### 2. Backfill migration

- 從既有 `config_path` 回填 folder tree
- 將 top-level folders / pipelines 掛到 hidden root
- 以 `file_name` 保守回填 `pipeline_name`
- 處理同層命名衝突，避免 migration 失敗

### 3. Folder APIs

- `GET /api/v1/pipeline-tree`
- `POST /api/v1/pipeline-folders`
- `PUT /api/v1/pipeline-folders/{folderId}`
- `GET /api/v1/pipeline-folders/{folderId}/delete-preview`
- `DELETE /api/v1/pipeline-folders/{folderId}`
- `DELETE /api/v1/pipeline-folders/{folderId}?recursive=true`

delete contract：

- 空 folder 才允許一般 `DELETE`
- 非空 folder 未指定 `recursive=true` 回 `409`
- subtree 內存在 run history blocker 時，preview 顯示 blocker，真正 delete 回 `409`
- root 不可刪

### 4. Config APIs

將 `/api/v1/sync-config` 主 contract 改為 resource-oriented：

- `GET /api/v1/sync-config`
- `GET /api/v1/sync-config/{pipelineId}`
- `POST /api/v1/sync-config`
- `PUT /api/v1/sync-config/{pipelineId}`
- `PATCH /api/v1/sync-config/{pipelineId}`
- `DELETE /api/v1/sync-config/{pipelineId}`

主 request body 至少包含：

- `folderId`（可空，空代表 root）
- `pipelineName`
- `jobs`

### 5. Import APIs

保留 file import，但降級為 optional workflow：

- `POST /api/v1/sync-config/import`
- `PUT /api/v1/sync-config/{pipelineId}/import`

import request 至少包含：

- `folderId`（可空）
- `pipelineName`
- `file`
- `format`

### 6. DTO / service alignment

- `SyncConfigDTO` 改為 `pipelineName` / `folderId` / `folderPath`
- `SyncPipelineDTO` summary/detail 同步改為 GUI 可用欄位
- 拆開 config CRUD 與 file parsing，不再讓 `configPath` 驅動整個流程

### 7. K6 coverage

重寫 config helper，從 path-based 改為 folder/name-based。

K6 必須覆蓋：

- JSON config create / update / patch / delete
- import create / replace
- tree query
- folder create / rename / move
- folder delete preview
- empty folder delete
- recursive delete success
- recursive delete blocked by run history
- runtime summary/detail 新欄位
- 既有 execute / resume / rerun / stop / delete guard / timeline / observability regression

### 8. Cleanup

- 移除 `config_path` 相關 repo/service/K6 假設
- 移除 `file_name` 持久化欄位
- 更新 `docs/architecture`
- 更新 `docs/feature`
- 更新 `CHANGELOG`

## 實作順序

1. Schema foundation
2. Backfill migration
3. Folder entity / repo / service
4. Folder APIs
5. Config API 改為 JSON body 主流程
6. Import API 拆成輔助入口
7. DTO / runtime contract alignment
8. K6 helper 重構與情境補齊
9. Cleanup migration 與文件更新

## 非目標

- user / tenant service
- platform-level authz / membership
- GUI implementation
- runtime lineage cascade delete

---

## Phase 13: Desktop GUI Readiness Gaps

## 焦點

Phase 12 完成後，backend 已經具備 config tree、pipeline control、attempt timeline、metrics 與 Prometheus。
但若要支撐 desktop GUI 的第一版操作面，還有兩個 backend 缺口需要補齊：

1. P1: run history browser API
2. P2: rich recursive delete preview

這一階段仍維持目前定位：

- backend 是 single-app pipeline core engine
- 不引入 user / tenant / platform service
- 目標是支撐 docker compose / Electron 類型的 local desktop GUI

## P1. Run History Browser API

## 問題

目前 `GET /api/v1/sync-pipeline` 只支援 `ids=...` lookup。
這代表 GUI 可以查「已知 runId」的 summary/detail，但不能直接做：

- 某條 pipeline 的執行歷史列表
- 全域 recent activity / recent runs 面板

若沒有這層 API，前端只能自行保存 run ids，不能把 backend 當成完整的 runtime source of truth。

## API 設計

### 保留既有 lookup mode

- `GET /api/v1/sync-pipeline?ids=101&ids=102`
  - 保持既有行為
  - 回傳 `List<PipelineRunSummaryInfo>`

### 新增 pipeline history mode

- `GET /api/v1/sync-pipeline?pipelineId=123&limit=20&beforeRunId=456`
  - 依 pipelineId 查歷史 runs
  - 依 `id desc` 回傳，最新在前
  - `beforeRunId` 做 keyset pagination

### 新增 recent activity mode

- `GET /api/v1/sync-pipeline/recent?limit=20&beforeRunId=456`
  - 回傳全域最近 runs
  - 同樣依 `id desc` 排序
  - 供 GUI 首頁或 activity panel 使用

### 參數規則

- `ids` mode 與 `pipelineId` mode 互斥
- `limit` 預設 20，需設上限避免單次 payload 過大
- query 組合不合法時回 `400`

## 實作項目

### Controller / query service

- `SyncPipelineAPI`
  - 擴充 `GET /api/v1/sync-pipeline`
  - 新增 `GET /api/v1/sync-pipeline/recent`
- `PipelineRunQueryService`
  - 保留既有 `ids` lookup
  - 新增 pipeline history query
  - 新增 recent runs query

### Repository

- `PipelineRunRepo`
  - 新增 `pipelineId + beforeRunId + limit` 查詢
  - 新增全域 recent runs 查詢
  - 排序固定使用 `id desc`

### DTO / contract

- 優先重用既有 `PipelineRunSummaryInfo`
- 不新增 path/fileName 類 legacy 欄位
- 保持 `pipelineName / folderId / folderPath / status / createdAt / startTime / endTime`

## K6 證據

新增 K6 情境至少包含：

- 同一 `pipelineId` 連續 execute 2~3 次，history list 依新到舊排序
- `resume` 不建立新 logical run，不應出現在 pipeline history 的新 run 列表中
- `rerun` 會建立新 logical run，應出現在 history 中，且 `rerun_from_pipeline_run_id` 對應正確
- `recent` endpoint 能看見多條 pipeline 的最新 runs
- `ids` lookup 舊模式不回歸
- history / recent payload 明確驗證不含 `path` / `fileName` / `configPath`

## 完成條件

- GUI 不需自己保存 run ids，就能做 pipeline 歷史列表與 recent activity 面板
- `GET /api/v1/sync-pipeline` 的既有 `ids` mode 維持相容
- K6 對 history / recent / ids 三種模式都有獨立保護

## P2. Rich Recursive Delete Preview

## 問題

目前 `GET /api/v1/pipeline-folders/{folderId}/delete-preview` 只有 count/blocker 摘要：

- `folderCount`
- `pipelineCount`
- `pipelinesWithRunHistory`
- `hasBlockers`

這對 safety 足夠，但對 GUI 的 delete confirmation dialog 不夠。
使用者在 approve recursive delete 前，應該能看到具體有哪些 folders / pipelines 會受影響，以及哪些 pipelines 是 blocker。

## API 設計

### 擴充既有 preview response

保留既有 count 欄位，並新增明細欄位：

- `folders`
  - `id`
  - `folderName`
  - `folderPath`
- `pipelines`
  - `id`
  - `pipelineName`
  - `folderId`
  - `folderPath`
  - `hasRunHistory`
- `blockingPipelines`
  - 只列 `hasRunHistory = true` 的 pipelines
- `truncated`
  - 若 preview item 過多時，標示明細是否被截斷

### 建議 query 參數

- `GET /api/v1/pipeline-folders/{folderId}/delete-preview?limit=100`
  - counts 永遠是完整值
  - item lists 可依 `limit` 截斷

### delete semantics 保持不變

- `DELETE /api/v1/pipeline-folders/{folderId}`
  - 只允許刪空 folder
- `DELETE /api/v1/pipeline-folders/{folderId}?recursive=true`
  - 明確 recursive delete
  - subtree 內只要有 run history blocker，就回 `409`

## 實作項目

### Service / repo

- `PipelineFolderService`
  - 擴充 subtree collect 邏輯
  - 回傳 folders / pipelines / blocker 明細
  - 補 `truncated` 計算
- `PipelineRunRepo`
  - 提供批次查哪些 pipeline ids 有 run history 的查詢

### DTO

- 擴充 `FolderDeletePreviewInfo`
- 新增 preview item DTO
  - `FolderDeletePreviewFolderInfo`
  - `FolderDeletePreviewPipelineInfo`

### API

- `PipelineFolderAPI`
  - 擴充 `delete-preview` query param 與 response

## K6 證據

新增或擴充 K6 情境至少包含：

- 建立多層 folder tree 與多條 pipelines
- delete preview 回傳正確的 `folderCount / pipelineCount`
- preview 明細列出受影響 folders / pipelines
- 有 run history 的 pipeline 會出現在 `blockingPipelines`
- `recursive=true` 在 blocker 存在時回 `409`
- 刪除 blocker run 後，preview blocker 清空且 recursive delete 成功
- preview payload 明確驗證不含 legacy path/fileName 欄位，僅使用 `folderPath + pipelineName`

## 完成條件

- GUI 的 recursive delete confirmation dialog 能直接使用 backend preview response 呈現影響範圍
- backend contract 自身已表達 approve-before-delete 的必要資訊，不依賴前端自行推導
- K6 對 preview summary、preview detail、blocker、delete success/failure 都有證據

## 完成條件

- backend 不再以外部檔案 path 作為 pipeline identity
- GUI 可直接操作 folder tree 與 pipeline resource
- `/api/v1/sync-config` 以 JSON body 為主 contract
- import from file 成為 optional workflow
- folder recursive delete 具備 preview / confirm / blocker semantics
- runtime API 回傳穩定的 pipeline display metadata
- K6 對新舊核心流程都維持保護

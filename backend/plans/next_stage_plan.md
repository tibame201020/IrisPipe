# IrisPipe 下一階段實作計畫

## 文件目的

本文件是 IrisPipe 在 Phase 4 後續開發的交接文件，目標是讓新的對話或新的 agent 能夠在最短時間內理解：

- 目前系統已經做到哪裡
- 哪些行為已經被 K6 驗證
- Restart 的設計邊界與我們已經討論過的結論
- 建議的資料模型、API 方向與實作順序
- 哪些點已經拍板，哪些點仍需實作時再細化

本文件已整合最新討論結果。重點不是泛泛而談，而是提供可直接接手實作的上下文。

## 本階段總目標

Phase 4 的主題不是單純「做 restart」，而是三件事情必須一起成立：

1. `atomicLevel: JOB | CHUNK` 在 runtime 有可觀察、可驗證的差異。
2. `CHUNK` 模式在失敗後可以透過真正的 Spring Batch restart 機制恢復。
3. Restart 所依賴的 job 定義必須對應到「當次 launch 真正執行的內容」，不能依賴目前可變的 `iris_pipeline`。

其中第 1 點目前已完成並經 K6 驗證，第 2、3 點是下一個主要工作。

## 目前系統基線

### 設定與執行模型

- 設定檔仍透過 YAML/JSON 上傳，但執行時的 source of truth 已經是資料庫。
- `sync-config` API 管理的是 persisted pipeline。
- `sync-job` API 目前是以 `pipelineId` 為輸入，並依 pipeline 內的 jobs 逐一建立 Spring Batch jobs 執行。
- IrisPipe 的業務單位是 `pipeline`。
- Spring Batch 的執行與 restart 單位是 `job` / `jobExecution`。

這個差異本身不是問題，但會直接影響 snapshot 粒度設計：觸發單位是 pipeline，restart 單位是 job。

### 目前已存在的資料表

目前與 pipeline 設定相關的持久化結構如下：

- `iris_pipeline`
- `iris_pipeline_job`
- `iris_pipeline_job_connection`
- `iris_pipeline_execution`
- `iris_pipeline_execution_parameter`

其他重要資料：

- watermark 仍儲存在 `iris_watermark_record`
- Spring Batch metadata 仍儲存在 `BATCH_*` tables

### 目前 API surface

- `GET /api/v1/sync-config`
- `GET /api/v1/sync-config/{pipelineId}`
- `POST /api/v1/sync-config`
- `PUT /api/v1/sync-config/{pipelineId}`
- `PATCH /api/v1/sync-config/{pipelineId}`
- `DELETE /api/v1/sync-config/{pipelineId}`
- `POST /api/v1/sync-job`
- `GET /api/v1/sync-job?ids=...`
- `GET /api/v1/sync-job/{jobId}`
- `DELETE /api/v1/sync-job/{jobId}`

目前尚未有 restart API。

### 目前 runtime 行為

以下內容是最新基線，不是舊狀態：

- `atomicLevel` 已經在 runtime 生效。
- `JOB` 模式仍維持 outer job transaction。
- `CHUNK` 模式已關閉 outer job transaction，改依 Spring Batch chunk commit 行為執行。
- Watermark 在目前版本仍維持「整個 job 成功後才寫入」。
- 這代表 `CHUNK` 模式即使出現 partial commit，只要整個 job fail，watermark 仍不會前進。

### 目前已完成的 K6 驗證

目前 K6 已驗證以下內容：

- `sync-config-validation.test.js`
- `sync-config.test.js`
- `sync-job-success.test.js`
- `sync-job-fail.test.js`
- `sync-job-chunk-fail.test.js`
- `sync-job-no-watermark.test.js`
- `sync-job-multi-step.test.js`
- `sync-upsert-composite.test.js`
- `sync-system-variable.test.js`

其中最重要的新增驗證如下：

- `sync-job-fail.test.js`
  - 驗證 `JOB` 模式失敗時會全量 rollback
  - 驗證 watermark 不會寫入
- `sync-job-chunk-fail.test.js`
  - 驗證 `CHUNK` 模式失敗時，前面成功的 chunk 會保留
  - 驗證失敗 chunk 會 rollback
  - 驗證 watermark 不會寫入

換句話說，目前 `JOB` 與 `CHUNK` 的 runtime 行為差異已經被 K6 清楚鎖住。

## 已確認的重要結論

以下內容是本文件最重要的設計結論，後續實作不應再回到未定狀態。

### 1. Restart v1 只支援 `atomicLevel = CHUNK`

這是已確認結論。

原因：

- `JOB` 模式的主要價值就是全 job 交易一致性。
- `JOB` 模式發生失敗時目前預期就是整體 rollback，並不以 restart 作為主要恢復路徑。
- `CHUNK` 模式才是為了高量資料、允許 partial commit、並依賴 restart 恢復的模式。

因此：

- `atomicLevel = JOB` 的 job 不需要建立 restart snapshot
- `atomicLevel = JOB` 呼叫 restart API 時應回覆明確錯誤，例如 `409 Conflict`

### 2. Snapshot 不應在 import/update pipeline 時建立

這是已確認結論。

原因：

- `iris_pipeline` 是配置層，不是每一版都一定會被執行
- 若每次 import/update 都建立 immutable snapshot，會產生大量沒有被實際使用的資料
- 真正有 restart 價值的，是「實際 launch 時用到的 job 定義」

因此：

- Snapshot 必須在實際 trigger job 時 lazy create
- 不是在 `sync-config` import/update 時建立

### 3. Restart 的不可變單位是 job，不是整個 pipeline

這是已確認結論。

理由：

- IrisPipe 產品語意上，trigger 的單位是 pipeline
- 但 Spring Batch restart 的單位是 `JobExecution`
- 真正需要被重建的是某一個失敗 job 的定義，而不是整個 pipeline graph

所以結論是：

- pipeline 是 trigger 單位
- job 是 restart 單位
- snapshot 應該對應到「當次 launch 的單一 restartable job」

### 4. 不需要因為 `DELETE/EXECUTE` 而先拒絕 restart

這是已確認結論。

先前曾考慮限制「若 job 內含 tasklet step 就不支援 restart」，但經過程式檢查後，不建議做這種限制。

原因：

- `DELETE` 與 `EXECUTE` 在目前實作中是 Spring Batch tasklet step
- 對 Spring Batch 而言，restart 的單位本來就是 step
- 已完成的 step 在 restart 時會被跳過
- 失敗中的 tasklet step 在 restart 時本來就會重跑整個 step
- 若因為 job 內含 `DELETE/EXECUTE` 就全面拒絕 restart，會導致 pipeline 中常見的 mixed step flow 無法使用 restart，這和 IrisPipe 的 step 組合模型不相容

真正需要注意的不是 tasklet 類型本身，而是：

- step name 是否穩定且唯一
- `EXECUTE` 若執行不可回滾或外部 side effect SQL，是否能接受重跑語意

本期先不對 `DELETE/EXECUTE` 做額外封鎖，但需在文件中清楚說明其 restart 語意。

### 5. Restart 不能依賴目前最新的 `iris_pipeline`

這是整個設計的核心前提。

目前 `iris_pipeline` 是 mutable：

- update 會沿用同一個 `pipelineId`
- child rows 會 delete-and-insert

因此，restart 若只憑：

- `pipelineId`
- 目前最新的 child rows

是無法保證重建出當初失敗的 job 定義的。

Restart 需要依賴的是：

- 當次 launch 已 materialize 完成的單一 job 定義
- 原始 identifying `JobParameters`

## Restart 設計方向

### 核心設計概念

建議不要把 restart 理解成「重新執行最新 pipeline」，而是：

1. pipeline trigger 時，把可 restart 的 CHUNK job materialize
2. 將這份 materialized job 定義持久化成 launch snapshot
3. 把 snapshot identity 寫入這次 job 的 `JobParameters`
4. restart 時依原 `JobExecution` 的 `JobParameters + snapshot` 重建同一個 job
5. 再讓 Spring Batch 依既有 metadata 做真正 restart

### 流程圖

```text
POST /api/v1/sync-job
    |
    v
load iris_pipeline by pipelineId
    |
    v
for each job in pipeline
    |
    +--> if atomicLevel = JOB
    |       |
    |       +--> no snapshot
    |       +--> run with new run.id
    |
    +--> if atomicLevel = CHUNK
            |
            +--> materialize job
            |     - executionName resolved
            |     - _LAST_* resolved now
            |
            +--> persist job launch snapshot
            |
            +--> jobParameters add:
            |     - pipeline.id
            |     - job.sequence
            |     - snapshot.id
            |     - run.id
            |
            +--> jobLauncher.run(job, params)
```

Restart：

```text
POST /api/v1/sync-job/{jobExecutionId}/restart
    |
    v
JobExplorer.getJobExecution(jobExecutionId)
    |
    v
validate:
  - execution exists
  - status is FAILED or STOPPED
  - atomicLevel was CHUNK
  - snapshot.id exists in original jobParameters
    |
    v
load job launch snapshot by snapshot.id
    |
    v
rebuild same Spring Batch Job
  - same jobName
  - same step names
  - same step order
    |
    v
jobLauncher.run(job, original identifying JobParameters)
  - do not generate new run.id
    |
    v
Spring Batch creates new JobExecution on same JobInstance
and resumes according to BATCH_* metadata
```

## Snapshot 粒度與資料模型建議

### 建議粒度

本期建議的 snapshot 粒度是：

- 不是 `pipeline` config version snapshot
- 是 `job launch snapshot`

換句話說，本期的 immutable identity 應該對應到：

- 當次 pipeline trigger
- 其中某個 `atomicLevel = CHUNK` 的 job
- 已經完成 system variable 解析後的 materialized job 定義

### 是否需要獨立的 pipeline launch table

本期建議如下：

- Restart 的必要資料表只有 `job launch snapshot`
- 若想保留同一次 pipeline trigger 產生了哪些 snapshots 的群組關係，可以額外加 `pipeline launch` 容器表
- 但 `pipeline launch` 不是 restart 的必要條件

也就是說：

- `job snapshot` 是必須
- `pipeline launch` 是可選優化

如果要快速落地，先做 job snapshot 就足夠。

## 建議資料表草案

以下為目前最建議的最小可行版本。

### 方案 A：最小可行版本，只做 job snapshot

```sql
CREATE TABLE iris_job_launch_snapshot (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    pipeline_id BIGINT NOT NULL,
    job_sequence_order INT NOT NULL,
    job_name VARCHAR(255) NOT NULL,
    atomic_level VARCHAR(20) NOT NULL,
    content_hash VARCHAR(64),
    materialized_job_json CLOB NOT NULL,
    root_job_execution_id BIGINT,
    root_job_instance_id BIGINT,
    created_at TIMESTAMP NOT NULL,
    CONSTRAINT fk_iris_job_launch_snapshot_pipeline
        FOREIGN KEY (pipeline_id) REFERENCES iris_pipeline(id)
);

CREATE INDEX idx_iris_job_launch_snapshot_pipeline_id
    ON iris_job_launch_snapshot (pipeline_id);

CREATE INDEX idx_iris_job_launch_snapshot_root_execution_id
    ON iris_job_launch_snapshot (root_job_execution_id);
```

欄位說明：

- `pipeline_id`
  - 只是回溯這次 launch 來自哪個 pipeline
  - 不能用來重建 restart job
- `job_sequence_order`
  - pipeline 內第幾個 job
- `job_name`
  - materialized job 的名稱
- `atomic_level`
  - 預期只會存 `CHUNK`
- `content_hash`
  - 可保留做除錯用，但不能取代 immutable identity
- `materialized_job_json`
  - 核心欄位
  - 存的是當次 launch 真正使用的單一 job 定義
  - 必須是 system variable 已解析後的內容
- `root_job_execution_id`
  - 首次 launch 成功建立 execution 後回填
- `root_job_instance_id`
  - 首次 launch 成功建立 instance 後回填

### 方案 B：若需要把同一次 pipeline trigger 群組化，可再加容器表

這不是必需，但若團隊想要更好地做查詢、清理或稽核，可以加：

```sql
CREATE TABLE iris_pipeline_launch (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    pipeline_id BIGINT NOT NULL,
    requested_at TIMESTAMP NOT NULL,
    requested_async BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    CONSTRAINT fk_iris_pipeline_launch_pipeline
        FOREIGN KEY (pipeline_id) REFERENCES iris_pipeline(id)
);
```

然後在 `iris_job_launch_snapshot` 加 `pipeline_launch_id`。

但請注意：

- `pipeline_launch` 只是群組容器
- 真正被 restart API 使用的仍然是 `job snapshot`

## `materialized_job_json` 必須包含哪些內容

這裡要非常明確。

`materialized_job_json` 不能只是原始 config 片段，必須是 launch 當下真正跑出去的 job 定義，至少要包含：

- `jobName`
- `setting`
  - `fetchSize`
  - `batchSize`
  - `deleteThreshold`
  - `atomicLevel`
- `executions`
  - `type`
  - `name`
  - `sql`
  - `destTable`
  - `watermarkColumn`
  - `parameters`
- 所有 `_LAST_*` 已解析後的參數值
- 已穩定化的 execution name
- 與重建 step name 所需的 sequence/context

目的只有一個：

- restart 時完全不需要回頭讀 mutable `iris_pipeline`
- restart 時完全不需要再次解析 `_LAST_*`

## JobParameters 設計建議

### fresh execute

對 `CHUNK` job：

- `pipeline.id`
- `job.sequence`
- `snapshot.id`
- `run.id`

對 `JOB` job：

- `pipeline.id`
- `job.sequence`
- `run.id`

### restart

restart 時應使用原本的 identifying parameters，不要產生新的 `run.id`。

重要原則：

- `run.id` 只在 fresh execute 時建立
- restart 不能再加新的 `run.id`
- restart 需要讓 Spring Batch 落在原本的 `JobInstance`

## Restart API 建議

### 路由

建議新增：

- `POST /api/v1/sync-job/{jobExecutionId}/restart`

### 輸入

本期建議直接以 path variable 為主，不需要額外 request body。

若之後要支援 async restart，再補 body 也可以。

### 回傳

建議直接回傳與 execute 相同型別的 `JobSummaryInfo`，避免多一套 DTO。

### 允許條件

- `jobExecutionId` 存在
- status 為 `FAILED` 或 `STOPPED`
- 原 job 為 `atomicLevel = CHUNK`
- 原 execution 的 `JobParameters` 中存在 `snapshot.id`

### 拒絕條件

- execution 不存在
- execution 狀態不是 `FAILED` / `STOPPED`
- 原 job 為 `JOB`
- `snapshot.id` 缺失
- 對應 snapshot 不存在

## 對 tasklet step 的 restart 語意

目前已確認，不需要因為 job 中包含 `DELETE/EXECUTE` 就拒絕 restart。

應記錄的語意如下：

- 已完成的 tasklet step：restart 時由 Spring Batch 視為已完成，會跳過
- 失敗中的 tasklet step：restart 時整個 step 重新執行
- 已完成的 chunk step：restart 時跳過
- 失敗中的 chunk step：restart 時依 Spring Batch metadata 繼續

這裡最大的前提是：

- job name 必須一致
- step name 必須一致且唯一

## 非常重要：step name 必須穩定且唯一

這是 restart 成敗的高風險點。

目前 step naming 若只使用：

- `jobName + "_insert_step"`
- `jobName + "_update_step"`
- `jobName + "_delete_step"`

當同一 job 中出現兩個同型 execution 時，step name 可能衝突，或在 restart 時無法正確對應原 metadata。

本期建議必做：

- step name 改為穩定且唯一的格式

建議格式：

```text
{jobName}__job{jobSequence}__exec{executionSequence}__{executionNameOrType}
```

重點不是字串長相，而是以下條件必須滿足：

- 同一 job 內唯一
- 相同 materialized job 重建時完全一致
- restart 與 fresh execute 對同一份 materialized job 得到相同結果

## 建議實作順序

### Step 1. 固化 step naming 規則

先做 step name 穩定化，避免後面 restart 進來時 metadata 對不上。

涉及檔案：

- `src/main/java/irispipe/core/factory/SyncJobFactory.java`
- `src/main/java/irispipe/core/factory/InsertStepStrategy.java`
- `src/main/java/irispipe/core/factory/UpdateStepStrategy.java`
- `src/main/java/irispipe/core/factory/UpsertStepStrategy.java`
- `src/main/java/irispipe/core/factory/DeleteStepStrategy.java`
- `src/main/java/irispipe/core/factory/ExecuteStepStrategy.java`

### Step 2. 將 materialize 與 build context 分離

目前 `SyncJobContextFactory` 會在 fresh execute 前解析 `_LAST_*`。

需要拆成兩條路：

- `materializeForLaunch(...)`
  - 用於 fresh execute
  - 解析 `_LAST_*`
  - 補齊 execution names
- `buildContextFromMaterializedJob(...)`
  - 用於 restart
  - 完全不重新解析 `_LAST_*`
  - 直接依 snapshot 內容重建 context

涉及檔案：

- `src/main/java/irispipe/core/factory/SyncJobContextFactory.java`

### Step 3. 新增 job snapshot 持久化

新增 migration、entity、repo、service。

只在 `atomicLevel = CHUNK` 的 fresh launch 前建立 snapshot。

涉及檔案：

- `src/main/resources/db/migration/V4__*.sql`
- 新增 `JobLaunchSnapshot` entity/repo/service

### Step 4. 修改 execute flow

在 `JobExecutionService` 中：

- 對 `JOB` job 維持現況
- 對 `CHUNK` job：
  - materialize
  - persist snapshot
  - 在 `JobParameters` 中寫入 `snapshot.id`
  - execute
  - execution 建立後回填 `root_job_execution_id` / `root_job_instance_id`

涉及檔案：

- `src/main/java/irispipe/core/service/JobExecutionService.java`

### Step 5. 實作 restart flow

新增 restart service：

- 讀取原 execution
- 讀取原 params 的 `snapshot.id`
- 載入 snapshot
- 用 snapshot 重建 job
- 用原 identifying params 呼叫 `jobLauncher.run(...)`

注意：

- 這裡要走 Spring Batch 真 restart
- 不是 fresh replay

### Step 6. 擴充 API

在 `SyncJobAPI` 增加 restart endpoint。

涉及檔案：

- `src/main/java/irispipe/api/SyncJobAPI.java`
- `src/main/java/irispipe/model/dto/SyncJobDTO.java`

### Step 7. 補 K6

本期至少應補以下 E2E：

- `CHUNK` fail 後 restart 成功
- fail 後修改 `iris_pipeline`，restart 仍依原 snapshot 執行
- `JOB` 模式呼叫 restart 會被拒絕
- mixed steps 包含 `DELETE/EXECUTE` 的 `CHUNK` job 可以 restart

## 具體實作 Checklist

### A. Runtime 與 materialization

- [x] `atomicLevel` 在 runtime 生效
- [x] K6 已證明 `JOB` / `CHUNK` 交易差異
- [ ] 穩定化 step naming
- [ ] 將 `SyncJobContextFactory` 拆成 materialize / rebuild 兩條路

### B. Snapshot 與持久化

- [ ] 新增 `iris_job_launch_snapshot`
- [ ] 只在 `CHUNK` job fresh launch 時建立 snapshot
- [ ] `materialized_job_json` 存完整單一 job 定義
- [ ] fresh launch 成功後回填 root execution / instance id

### C. Execute / Restart flow

- [ ] fresh execute 對 `CHUNK` job 寫入 `snapshot.id`
- [ ] 新增 restart service
- [ ] restart 使用原 identifying params
- [ ] restart 不產生新的 `run.id`

### D. API / DTO

- [ ] 新增 `POST /api/v1/sync-job/{jobExecutionId}/restart`
- [ ] 定義 restart 錯誤訊息與狀態碼
- [ ] 回傳 `JobSummaryInfo`

### E. 測試

- [ ] 補 restart K6 suite
- [ ] `run-tests.ps1` 加入 restart 測試
- [ ] 若容易，補少量 Java service/unit tests

## 需要關注的關鍵風險

### 1. step name 不穩定

這是最容易被忽略、但會直接導致 restart 失效的點。

### 2. restart 錯誤地重新解析 `_LAST_*`

若 restart 時又去讀 watermark 或 current pipeline，行為就不再是「重現原 job」，而會變成 replay。

### 3. `DELETE/EXECUTE` 的 side effect

系統層面不應先拒絕 restart，但文件應註明：

- 若 SQL 本身具有不可回滾 side effect
- restart 的重跑語意由使用者自行承擔

### 4. `DELETE /sync-job/{jobId}` 可能破壞 restart 能力

若使用者刪除了對應的 Spring Batch metadata 或 snapshot，該 execution 之後將無法 restart。

本期建議：

- 先保守處理
- 若 execution 仍可能 restart，考慮拒絕 metadata deletion

## 已決定與未決定事項

### 已決定

- `atomicLevel = CHUNK` 才需要 restart
- snapshot 不在 import/update pipeline 時建立
- snapshot 在實際 trigger `CHUNK job` 時 lazy create
- snapshot 粒度是 `job launch snapshot`
- pipeline 是 trigger 單位，job 是 restart 單位
- `DELETE/EXECUTE` 不應因類型而被禁止 restart
- watermark 在目前版本仍維持 whole-job success 才寫入

### 尚未完全決定，但不阻擋第一版

- 是否要另外加 `iris_pipeline_launch` 當群組容器
- restart v1 是否先只支援同步 launcher
- `DELETE /sync-job/{jobId}` 要怎麼與 snapshot retention 搭配
- 後續是否要加入 snapshot 清理策略

## 建議 Definition of Done

- `JOB` 與 `CHUNK` 的 runtime 交易行為差異持續由 K6 驗證
- `CHUNK` job fresh launch 會建立 job snapshot
- failed `CHUNK` job 可透過 restart API 成功恢復
- restart 不依賴最新 `iris_pipeline`
- mutate pipeline 後，舊 failed execution 仍可依原 snapshot restart
- mixed step flow 中包含 `DELETE/EXECUTE` 也可 restart
- 文件與 K6 同步更新

## 重要程式檔案索引

### runtime execution

- `src/main/java/irispipe/core/service/JobExecutionService.java`
- `src/main/java/irispipe/core/factory/SyncJobFactory.java`
- `src/main/java/irispipe/core/factory/SyncJobContextFactory.java`
- `src/main/java/irispipe/batch/listener/CustomJobListener.java`

### step construction

- `src/main/java/irispipe/core/factory/InsertStepStrategy.java`
- `src/main/java/irispipe/core/factory/UpdateStepStrategy.java`
- `src/main/java/irispipe/core/factory/UpsertStepStrategy.java`
- `src/main/java/irispipe/core/factory/DeleteStepStrategy.java`
- `src/main/java/irispipe/core/factory/ExecuteStepStrategy.java`

### tasklet semantics

- `src/main/java/irispipe/batch/tasklet/DeleteTasklet.java`
- `src/main/java/irispipe/batch/tasklet/ExecuteTasklet.java`

### config persistence

- `src/main/java/irispipe/infrastructure/service/JobConfigService.java`
- `src/main/resources/db/migration/V3__init_pipeline_config.sql`

### API / DTO

- `src/main/java/irispipe/api/SyncJobAPI.java`
- `src/main/java/irispipe/model/dto/SyncJobDTO.java`

### metadata / deletion risk

- `src/main/java/irispipe/infrastructure/service/JobMetadataService.java`

### regression coverage

- `k6/run-tests.ps1`
- `k6/utils/test-helpers.js`
- `k6/sync-job-fail.test.js`
- `k6/sync-job-chunk-fail.test.js`
- `k6/testfiles/job-chunk-fail.yml`

## 已知與本議題無直接關聯的測試噪音

當前仍存在一些與本次 restart 設計無直接關聯的 Maven 測試失敗：

- `IrisPipeApplicationTests`：Spring Boot test configuration discovery 問題
- `SqlSyntaxHelperTest`：composite PK order expectation mismatch

這些問題不要與 restart / chunk runtime regression 混在一起判讀。

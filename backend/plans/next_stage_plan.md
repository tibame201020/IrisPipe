# IrisPipe 下一階段實作計畫

## 文件目的

本文件用來重新定義 IrisPipe 的 runtime 模型，目標不是立刻寫 restart API，而是先把「哪個資源代表 logical run、哪個資源代表 attempt」講清楚，避免 resume / restart / rerun / UI 歷程查詢全部混在同一層。

這份設計稿建立在目前已完成的基礎上：

- 對外 execution API 已升到 pipeline-level
- `PipelineRun`、runtime lifecycle、K6 保護層已落地
- stable identity 與 immutable snapshot 已補齊

本文件要回答的核心問題是：

1. `PipelineRun` 是否應同時承擔 instance 與 execution
2. failed pipeline 的 restart / resume 應該掛在哪一層
3. whole pipeline rerun 是否應建立新的 lineage
4. 未來 UI 要怎麼呈現同一條 run 的多次 attempts

## 核心結論

以下結論視為本版建議方案：

1. IrisPipe 對外的邊界仍然是 `pipeline`
2. `PipelineRun` 不應再同時承擔 logical run 與 attempt
3. 應拆成：
   - `PipelineRun`：logical run instance / lineage
   - `PipelineRunExecution`：單次 execution attempt
4. 若要讓 `CHUNK` restart 的 identifying key 長期穩定，還需要一層 logical job node：
   - `PipelineRunJob`
   - `PipelineRunExecutionJob`
5. snapshot 應掛在 `PipelineRun`，不是掛在 execution attempt
6. failed pipeline 的 resume / restart：
   - 不建立新的 `PipelineRun`
   - 只在同一個 `PipelineRun` 下新增新的 `PipelineRunExecution`
7. whole pipeline rerun：
   - 建立新的 `PipelineRun`
   - 可選擇保留 `rerun_from_pipeline_run_id` 來做 lineage 關聯

## 為什麼現狀不夠

目前的 `PipelineRun` 比較像是 `logical run + latest attempt` 的合體。

在只有 trigger / query / detail / delete 時，這個模型還能工作；但一旦要加上下面能力，就會開始失焦：

- failed pipeline resume
- `JOB` replay 與 `CHUNK` restart 的 attempt history
- whole pipeline rerun
- UI 顯示「這次 run 曾經失敗 2 次，第 3 次才成功」

如果不拆，最後只會落入這兩種都不漂亮的選項：

- restart 覆蓋同一筆 `PipelineRun`
  - 缺點：歷程消失
- restart 另開新的 `PipelineRun`
  - 缺點：`PipelineRun` 變成 attempt，不再是 logical run

所以我認為現在就該拆。

## 建議 runtime 模型

### 1. `Pipeline`

靜態配置單位。

仍由：

- `iris_pipeline`
- `iris_pipeline_job`
- `iris_pipeline_job_connection`
- `iris_pipeline_execution`
- `iris_pipeline_execution_parameter`

承載。

### 2. `PipelineRun`

`PipelineRun` 代表一次 logical run instance。

它回答的是：

- 哪個 pipeline 被觸發
- 這次 run 的 immutable snapshot 是什麼
- 這條 run 的最新 attempt 狀態是什麼
- 這條 run 是否來自某個舊 run 的 rerun

它不直接代表某一次 batch launch。

### 3. `PipelineRunSnapshot`

`PipelineRunSnapshot` 與 `PipelineRun` 一對一。

它保存：

- `snapshot_schema_version`
- `pipeline_content_hash`
- `materialized_job_json`

後續無論 resume、restart、detail replay，都應以這份 snapshot 為基準，而不是以最新 pipeline config 為基準。

### 4. `PipelineRunJob`

`PipelineRunJob` 是 logical job node。

它是某條 `PipelineRun` 底下按 `sequence_order` 固定存在的節點，主要用途是：

- 提供穩定 job node identity
- 作為 `CHUNK` restart 的 identifying anchor
- 支援 UI 顯示同一條 run 的固定 pipeline graph

這層不直接表示某次 attempt 的執行結果。

### 5. `PipelineRunExecution`

`PipelineRunExecution` 代表單次 attempt。

它回答的是：

- 這是第幾次 attempt
- 這次 attempt 是 initial trigger 還是 resume
- 這次 attempt 是否以 async 方式啟動
- 這次 attempt 的狀態與時間區間

### 6. `PipelineRunExecutionJob`

`PipelineRunExecutionJob` 是某一次 attempt 中，每個 logical job node 的執行結果。

它回答的是：

- 這次 attempt 內某個 job node 是 `COMPLETED`、`FAILED`、`SKIPPED` 還是 `NOT_RUN`
- 這次 attempt 對應的 Spring Batch `JobExecution` 是哪一筆
- 如果這次真的執行了該 job，它的 `root_job_instance_id` / `last_job_execution_id` 是什麼

## 模型關係

```text
Pipeline
  └── PipelineRun (logical run)
        ├── PipelineRunSnapshot (1:1)
        ├── PipelineRunJob (logical nodes, sequence-first)
        └── PipelineRunExecution (attempts)
              └── PipelineRunExecutionJob (attempt results for each node)
```

## 資料表建議草案

## Migration Plan

這次 migration 不建議直接推倒重來，而是採「相容式演進」：

1. 保留既有 `iris_pipeline_run`
   - 繼續作為對外 API 的主鍵與 query anchor
   - 先把它收斂成 logical run + latest projection
2. 保留既有 `iris_pipeline_run_job`
   - 先把它收斂成 logical node + latest projection
3. 新增：
   - `iris_pipeline_run_execution`
   - `iris_pipeline_run_execution_job`
4. 將 execution / execution-job 作為新的 source of truth
5. 現有 API summary/detail 先讀 latest projection，保持 K6 與對外 contract 不變
6. 等 resume / rerun 完整落地後，再決定是否移除 projection 欄位

### V6 migration 具體步驟

1. `ALTER TABLE iris_pipeline_run`
   - 新增 `rerun_from_pipeline_run_id`
   - 新增 `latest_execution_id`
2. `CREATE TABLE iris_pipeline_run_execution`
3. `CREATE TABLE iris_pipeline_run_execution_job`
4. 將既有 `iris_pipeline_run` backfill 成一筆 `execution_no = 1` 的 `INITIAL` execution
5. 將既有 `iris_pipeline_run_job` backfill 成該 initial execution 的 execution jobs
6. 回填 `iris_pipeline_run.latest_execution_id`

### 讀寫策略

- trigger 新 run
  - 寫 `PipelineRun`
  - 寫 snapshot
  - 寫 logical `PipelineRunJob`
  - 寫 first `PipelineRunExecution`
  - 寫 first `PipelineRunExecutionJob`
- listener / lifecycle
  - 先更新 `PipelineRunExecution` / `PipelineRunExecutionJob`
  - 再同步回寫 `PipelineRun` / `PipelineRunJob` 的 latest projection
- detail query
  - 先抓 `PipelineRun.latest_execution_id`
  - 再讀該 execution 底下的 execution jobs
  - 對外仍回傳既有 latest-only detail 結構
- delete
  - 必須刪整條 run 底下所有 executions / execution jobs，而不是只刪 latest

### `iris_pipeline_run`

建議它成為 logical run 主表。

最少欄位：

- `id`
- `pipeline_id`
- `rerun_from_pipeline_run_id`
- `latest_execution_id`
- `latest_status`
- `created_at`
- `updated_at`

說明：

- `latest_execution_id` / `latest_status` 是為了 list query 與 UI 首屏方便，可視為 denormalized latest view
- `requested_async` 不建議留在這層，因為 async / sync 是 attempt 級別，不是 logical run 級別

### `iris_pipeline_run_snapshot`

已存在，建議保留一對一設計：

- `pipeline_run_id`
- `snapshot_schema_version`
- `pipeline_content_hash`
- `materialized_job_json`
- `created_at`

### `iris_pipeline_run_job`

建議改為 logical node 表。

最少欄位：

- `id`
- `pipeline_run_id`
- `job_sequence_order`
- `job_name`
- `atomic_level`
- `created_at`
- `updated_at`

說明：

- 這層不再放 attempt status
- 這層的重點是固定 graph node 與穩定 identifying key

### `iris_pipeline_run_execution`

新增 attempt 表。

最少欄位：

- `id`
- `pipeline_run_id`
- `execution_no`
- `execution_kind` (`INITIAL` / `RESUME`)
- `requested_async`
- `status`
- `created_at`
- `start_time`
- `end_time`
- `updated_at`

### `iris_pipeline_run_execution_job`

新增 attempt result 表。

最少欄位：

- `id`
- `pipeline_run_execution_id`
- `pipeline_run_job_id`
- `status`
- `resume_action` (`RUN` / `REPLAY` / `RESTART` / `SKIP`)
- `root_job_instance_id`
- `last_job_execution_id`
- `created_at`
- `start_time`
- `end_time`
- `updated_at`

## 狀態語意建議

### `PipelineRun.latest_status`

建議由 latest execution 推導並回寫：

- `STARTING`
- `STARTED`
- `COMPLETED`
- `FAILED`
- `STOPPED`
- `ABANDONED`
- `UNKNOWN`

### `PipelineRunExecutionJob.status`

除了 batch 常見狀態，建議額外引入兩個語意化狀態：

- `SKIPPED`
  - 該 job 在這次 attempt 中被故意跳過，因為前次已完成，resume 從後面接
- `NOT_RUN`
  - 該 job 在這次 attempt 中尚未執行就被前面節點失敗終止

這兩個狀態對 UI 和 debug 都很重要。

## 對外 API 語意

目前對外主語仍建議只暴露 `PipelineRun`。

### 本期保留

- `POST /api/v1/sync-pipeline`
- `GET /api/v1/sync-pipeline?ids=...`
- `GET /api/v1/sync-pipeline/{pipelineRunId}`
- `DELETE /api/v1/sync-pipeline/{pipelineRunId}`

### 後續新增

- `POST /api/v1/sync-pipeline/{pipelineRunId}/resume`
  - 對 failed `PipelineRun` 建立新的 `PipelineRunExecution`
- `POST /api/v1/sync-pipeline/{pipelineRunId}/rerun`
  - 建立新的 `PipelineRun`
  - 新 run 可帶 `rerun_from_pipeline_run_id = {pipelineRunId}`

### detail 回傳建議

未來 detail 應回傳：

- `PipelineRun` base info
- latest execution summary
- executions list
- 每個 execution 底下的 execution jobs
- logical pipeline graph nodes

這樣 UI 才能同時滿足：

- 看最新狀態
- 看歷程
- 看 pipeline graph

## 執行流程語意

### trigger new run

```text
POST /sync-pipeline
    |
    v
create PipelineRun
    |
    +--> create PipelineRunSnapshot
    |
    +--> create logical PipelineRunJob nodes
    |
    +--> create PipelineRunExecution(execution_no = 1, kind = INITIAL)
    |
    +--> create PipelineRunExecutionJob rows
    |
    +--> execute sequence-first pipeline
```

### resume failed run

```text
POST /sync-pipeline/{pipelineRunId}/resume
    |
    v
load PipelineRun + Snapshot + latest failed execution
    |
    v
create PipelineRunExecution(execution_no = n + 1, kind = RESUME)
    |
    v
for each logical PipelineRunJob node
    |
    +--> if node was already completed before resume point
    |       mark execution job = SKIPPED
    |
    +--> if node is the failed resume point
    |       JOB   -> REPLAY whole job
    |       CHUNK -> RESTART same logical node lineage
    |
    +--> downstream nodes execute after resume point succeeds
```

### rerun whole pipeline

```text
POST /sync-pipeline/{pipelineRunId}/rerun
    |
    v
create a brand new PipelineRun
    |
    +--> set rerun_from_pipeline_run_id = old run
    |
    +--> create new snapshot from current pipeline config
    |
    +--> execution_no starts from 1 again
```

## 為什麼這樣分層比較對

### resume 與 rerun 的本質不同

- resume
  - 是同一條 logical run 的後續 attempts
- rerun
  - 是新的 logical run

如果這兩者都塞在同一個 `PipelineRun` 定義下，語意會混亂。

### snapshot 的生命週期屬於 run，不屬於 attempt

resume 必須沿用同一份 snapshot。

如果 snapshot 掛在 execution attempt，就會讓同一條 run 的 attempts 可能讀到不同版本 config，這和 restartability 的需求相衝突。

### async / sync 屬於 attempt，不屬於 run

一條 `PipelineRun` 的第一次可能是 sync trigger，第二次 resume 可能是 async。

所以 `requested_async` 應該掛在 `PipelineRunExecution`，不是 `PipelineRun`。

### UI 需要歷程，而不是只有 latest state

如果未來 detail 頁只看得到 latest one row：

- 使用者不知道之前失敗幾次
- 也不知道 resume 是從哪一個 job 接起來的
- 更看不到每次 attempt 的差異

拆成 execution attempts 之後，UI 才能有真正的 timeline。

## 沙盤推演 / 模擬校驗

以下是用新模型做的模擬校驗，目標是驗證語意是否一致。

### Scenario A：初次 trigger，整條 pipeline 一次成功

條件：

- pipeline 有 3 個 jobs：A / B / C
- 第一次 trigger 即成功

推演：

1. 建立 `PipelineRun R1`
2. 建立 `PipelineRunSnapshot S1`
3. 建立 logical nodes：`N-A` / `N-B` / `N-C`
4. 建立 `PipelineRunExecution E1`
5. 建立 `E1-A` / `E1-B` / `E1-C`
6. 三個 execution jobs 都完成
7. `R1.latest_execution_id = E1`
8. `R1.latest_status = COMPLETED`

校驗結果：

- query list 看 `R1`，語意清楚
- detail 同時可以看到 latest execution 與 graph nodes
- 不需要額外 lineage 關聯

結論：成立。

### Scenario B：初次 trigger 失敗於 job B，之後做 `JOB` resume

條件：

- pipeline 有 A / B / C
- `atomicLevel(B) = JOB`
- E1 在 B fail

推演：

1. `R2` 建立成功
2. `E1-A = COMPLETED`
3. `E1-B = FAILED`
4. `E1-C = NOT_RUN`
5. 使用者呼叫 `/resume`
6. 建立 `E2`
7. `E2-A = SKIPPED`
8. `E2-B = REPLAY`
9. `E2-C = RUN`
10. 若成功，`R2.latest_status = COMPLETED`

校驗結果：

- 同一條 logical run 有完整歷程
- resume 沒有覆寫 E1
- UI 可清楚呈現「第 2 次 attempt 從 B 接起來」

結論：成立。

### Scenario C：初次 trigger 失敗於 job B，之後做 `CHUNK` restart

條件：

- pipeline 有 A / B / C
- `atomicLevel(B) = CHUNK`
- B 在第一個 attempt 已部分 commit

推演：

1. `R3` 建立成功
2. `E1-A = COMPLETED`
3. `E1-B = FAILED`
4. `E1-C = NOT_RUN`
5. `/resume` 建立 `E2`
6. `E2-A = SKIPPED`
7. `E2-B = RESTART`
8. `E2-B` 使用 logical node identity 作為 restart anchor
9. `E2-C = RUN`

校驗重點：

- resume 不該依賴最新 pipeline config
- restart identity 不該依賴 attempt row id
- identity 應綁在 logical node 上

結論：

- 若只有 `PipelineRun + PipelineRunExecution` 而沒有 logical node，identity 會變得彆扭
- 若有 `PipelineRunJob`，則成立

### Scenario D：failed run 之後，使用者想整條 rerun

條件：

- `R4` 失敗
- 使用者不想 resume，只想重跑整條

推演：

1. 建立新的 `R5`
2. `R5.rerun_from_pipeline_run_id = R4`
3. `R5` 取得新的 snapshot
4. `R5.E1` 從 job A 開始執行

校驗結果：

- `R4` 與 `R5` 的歷程不會混在一起
- UI 可以顯示「R5 是由 R4 rerun 而來」
- 若 pipeline config 在 rerun 前有更新，`R5` 也會有新的 snapshot

結論：成立。

### Scenario E：同一條 run 連續 resume 兩次才成功

條件：

- `R6`
- `E1` fail at B
- `E2` fail at C
- `E3` 才成功

推演：

- `R6` 底下有三筆 executions
- latest state 只看 `E3`
- 歷史 timeline 仍保留 `E1`、`E2`

校驗結果：

- UI 可以呈現完整 attempt timeline
- debug 時可回頭看每次 fail 發生在哪個 node
- 不需要用自關聯 chain 去拼 history

結論：成立。

### Scenario F：delete 行為

條件：

- 使用者刪除某條 `PipelineRun`

推演：

刪除順序建議：

1. 刪 `PipelineRunExecutionJob`
2. 刪 `PipelineRunExecution`
3. 刪 `PipelineRunJob`
4. 刪 `PipelineRunSnapshot`
5. 針對需要清理的 latest / historical Spring Batch metadata 做刪除
6. 刪 `PipelineRun`

校驗結果：

- 若只刪 latest execution metadata，不夠
- 因為同一條 run 可能已經有多次 attempts

結論：

- delete 邏輯必須升級成對整條 run lineage 做清理

## 設計判斷

### 是否要把 `PipelineRun` 拆成 instance / execution

我的結論是：要，而且應該在 Phase A 之前拆。

### 是否還要再多一層 logical job node

我的結論也是：要。

原因不是為了 UI 好看而已，而是因為：

- `CHUNK` restart 需要穩定 identifying anchor
- execution attempt row 本身不適合承擔 long-lived node identity
- `JOB` replay 與 `CHUNK` restart 的 batch lineage 行為不同，不能直接把 `root_job_instance_id` 視為 logical node identity

## 建議落地順序

### Step 1. 先重構 runtime model

- `PipelineRun` 收斂為 logical run
- 新增 `PipelineRunExecution`
- 新增 `PipelineRunExecutionJob`
- 現有 `PipelineRunJob` 改為 logical node

### Step 2. 調整 detail query 與 delete semantics

- detail 改成 latest + history
- delete 改成刪整條 run lineage

### Step 3. 再做 `JOB` pipeline resume

- 用同一條 `PipelineRun`
- 建立新的 `PipelineRunExecution`
- 從 failed node 做 replay

### Step 4. 最後做 `CHUNK` pipeline restart

- 使用 same `PipelineRun`
- same snapshot
- stable logical node identity

## 目前我對方向的結論

如果只站在「眼前能不能把 resume 做出來」的角度，現在其實已經可以直接寫。

但如果站在產品模型、UI 歷程、未來 mixed pipeline 與真正 restartability 的角度，我會建議先把 `PipelineRun` 從 `instance + execution` 拆開，再往下做 resume。

這一步不是過度設計，而是在避免之後：

- restart 做完後又要重構整張表
- UI 要 timeline 時發現資料模型不夠
- `CHUNK` restart 的 identifying key 再改一次

我認為這一版模型比較穩。

# DAG Pipeline 規劃

## 1. 目的

IrisPipe 目前的真實模型是：

- `pipeline -> jobs -> steps`
- `job -> job` 由 IrisPipe 自行編排
- `step -> step` 仍是 Spring Batch 的線性 step chain
- `AtomicLevel = JOB | CHUNK`
- `resume` / `rerun` 都依賴 snapshot 中保存的 materialized job config

這代表目前最合理的演進方向不是直接跳成任意 DAG，而是先把 pipeline orchestration 升級成：

- `stage -> jobs -> steps`

其中：

- 同一個 `stage` 內的 jobs 可平行執行
- `stage` 與 `stage` 之間仍保留 barrier
- `step` 與 `step` 繼續保持線性
- `JOB / CHUNK` 的 atomic semantics 不被破壞

這份文件的定位是：

- 說明為什麼要先做 stage-based parallel orchestration
- 定義 config / runtime / snapshot / resume / rerun 的閉環規則
- 作為後續 backend 實作與 migration 的依據

## 2. 目前 backend 已確認的事實

### 2.1 Domain 模型

目前 backend 的 pipeline config 與 runtime 都建立在：

- pipeline 包含多個 jobs
- job 包含多個 executions / steps

對應程式碼：

- [SyncJobDefinition.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/model/SyncJobDefinition.java)
- [PipelineJobDefinition.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/entity/config/PipelineJobDefinition.java)
- [PipelineExecutionDefinition.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/entity/config/PipelineExecutionDefinition.java)

### 2.2 job-to-job orchestration

目前 `job -> job` 不是交給 Spring Batch flow graph，而是由 IrisPipe 控制：

- config 以 `sequenceOrder` 表示 job 的線性順序
- runtime 以 `jobSequenceOrder` 表示 job 的線性順序
- launch service 逐個 job 啟動

對應程式碼：

- [PipelineDefinitionAggregatePersistenceService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/service/config/PipelineDefinitionAggregatePersistenceService.java)
- [PipelineRunCommandService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineRunCommandService.java)
- [PipelineRunLaunchService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineRunLaunchService.java)

### 2.3 step-to-step orchestration

目前 `step -> step` 仍是線性 chain：

- `SyncJobFactory` 先把 executions 轉成 `List<Step>`
- 再透過 `.start(first).next(...)` 組成 step chain

對應程式碼：

- [SyncJobFactory.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/factory/SyncJobFactory.java)

### 2.4 Atomic semantics

`AtomicLevel` 目前只定義：

- `JOB`
- `CHUNK`

這是 job-local 的 transaction / restart granularity，不是 pipeline-level atomicity。

對應程式碼：

- [AtomicLevel.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/model/AtomicLevel.java)
- [JobSetting.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/model/JobSetting.java)
- [CustomJobListener.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/batch/listener/CustomJobListener.java)

### 2.5 rerun / resume

目前 public lifecycle 是：

- `execute`
- `rerun`
- `resume`

其中：

- `rerun` 會建立新的 logical pipeline run
- `resume` 會在同一個 logical pipeline run 上建立新的 execution attempt
- 兩者都依賴 snapshot 中保存的 materialized job config

對應程式碼：

- [PipelineExecutionService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineExecutionService.java)
- [PipelineRunControlPolicy.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineRunControlPolicy.java)
- [PipelineRunSnapshotService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/service/runtime/PipelineRunSnapshotService.java)

## 3. 目標模型

### 3.1 Domain shape

目標模型：

```text
Pipeline
  -> Stage 1
      -> Job A
      -> Job B
  -> Stage 2
      -> Job C
```

規則：

- `stage` 是 job orchestration group
- 同一個 `stage` 內的 job 可以平行執行
- `stage` 與 `stage` 之間用 barrier 串接
- `step` 不改成 graph

### 3.2 保留 sequenceOrder

即使引入 stage，仍應保留 `sequenceOrder`：

- `stageSequenceOrder`：描述 stage 的順序
- `stage`：描述 job 屬於哪個 stage
- `sequenceOrder`：描述 stage 內 job 的穩定順序

原因：

- query / snapshot / UI 仍需要 deterministic order
- backward compatibility 較容易保留

### 3.3 不把 step 改成 DAG

目前不應把 `step -> step` 改成 graph。

原因：

- 會直接衝擊 Spring Batch 的 step chain 與 restart semantics
- 會讓 `JOB / CHUNK` 的 transaction 邊界更難維持
- 這不是目前最小可行演進

## 4. Config Contract

### 4.1 public payload

建議 public contract 以 stage-first 為主：

- pipeline-level:
  - `stages: string[]`
- job-level:
  - `stage: string`

例如：

```yml
stages:
  - stage1
  - stage2

jobs:
  - jobName: job_a
    stage: stage1
    executions:
      - type: INSERT
        name: job_a_insert
        sql: select * from source_a
        destTable: dest_a
    setting:
      fetchSize: 100
      batchSize: 100
      atomicLevel: JOB
  - jobName: job_b
    stage: stage2
    executions:
      - type: INSERT
        name: job_b_insert
        sql: select * from source_b
        destTable: dest_b
    setting:
      fetchSize: 1000
      batchSize: 1000
      atomicLevel: CHUNK
```

### 4.2 backward compatibility

為了 migration 平滑，backend 可以接受：

- 缺少 `stages`
- job 缺少 `stage`
- legacy `stageName`

但 materialization 後，內部應該一律轉成顯式 stage-aware 模型。

## 5. Persistence

### 5.1 Config schema

`iris_pipeline_job` 需要保存：

- `stage_name`
- `stage_sequence_order`
- `sequence_order`

### 5.2 Runtime schema

`iris_pipeline_run_job` 需要保存：

- `stage_name`
- `stage_sequence_order`
- `job_sequence_order`

`iris_pipeline_run_execution_job` 不需要重複存 stage，只需透過 parent logical run job 投影 stage metadata。

### 5.3 Snapshot

snapshot 需要保存：

- `stage`
- `stageSequenceOrder`
- `sequenceOrder`

原因：

- `resume` 不能讀最新 config
- `rerun` 不能受 config drift 影響

## 6. Runtime Orchestration

### 6.1 Stage barrier

launcher 的規則應該是：

1. 依 `stageSequenceOrder` 分組
2. 同一個 stage 內把所有 `PENDING` jobs 一次 launch
3. 等待該 stage barrier
4. 若 stage 全部成功，才進下一個 stage
5. 若任一 job `FAILED / STOPPED / ABANDONED / UNKNOWN`
   - 終止該 execution
   - future stage jobs 標成 `NOT_RUN`

### 6.2 Stop

當 pipeline stop 發生時：

- 同 stage 已經 in-flight 的 job 由 stop request 收斂
- 已完成的 job 保持 `COMPLETED`
- current stage 的 stop target 會變成 `STOPPED`
- future stage jobs 變成 `NOT_RUN`

### 6.3 Failure

當某個 stage 的 job 失敗時：

- 已完成 upstream job 保持 `COMPLETED`
- 失敗 job 標成 `FAILED`
- future stage jobs 變成 `NOT_RUN`

## 7. Resume / Rerun 規則

### 7.1 Rerun

`rerun`：

- 建立新的 logical pipeline run
- 複製 source run snapshot
- lineage 指向 source run

### 7.2 Resume

`resume`：

- 在原 logical run 上新增 execution attempt
- 找第一個 incomplete stage
- 該 stage 內：
  - `COMPLETED` 的 job -> `SKIPPED`
  - `FAILED / STOPPED / NOT_RUN` 的 job -> `PENDING`
- future stage job -> `PENDING`

### 7.3 AtomicLevel 不變

resume / rerun 不應改變：

- `AtomicLevel=JOB` 的 replay / rollback semantics
- `AtomicLevel=CHUNK` 的 partial commit / restart semantics

### 7.4 例子

如果 Stage 2 有三個 job：

- Job A：`COMPLETED`
- Job B：`FAILED`
- Job C：`COMPLETED`

resume 後：

- Job A -> `SKIPPED`
- Job B -> `PENDING`
- Job C -> `SKIPPED`

原因：

- 同 stage 中已完成 job 不應重跑
- 失敗 job 是真正 resume target
- 同 stage 其他已完成 job 也不能破壞既有 `JOB / CHUNK` semantics

## 8. Query / DTO

對外 DTO 建議：

- config detail
  - `stages[]`
  - job 的 `stage`
- run detail
  - job 的 `stage`
  - `stageSequenceOrder`

目前不需要對外暴露完整 arbitrary graph model。

## 9. 實作切片

### Phase 1：schema / model / contract

目標：

- config / snapshot / runtime row 先全面帶入 stage
- 保留 legacy 線性 payload 的 materialization

內容：

- migration 新增 stage 欄位
- entity / DTO / import / config contract 帶入 stage
- snapshot 帶 stage
- read model 帶 stage

### Phase 2：runtime orchestration

目標：

- 從 job-sequential launcher 升級成 stage-barrier orchestration
- stop / resume / rerun policy 變成 stage-aware

內容：

- 同 stage 平行啟動
- stage barrier 等待
- failure / stop 後 future stage `NOT_RUN`
- resume 從 incomplete stage 恢復

## 10. 測試重點

1. legacy config 沒有 stage 時，仍能正確 materialize 成線性 stage
2. 同 stage 多 job 能平行執行
3. 憑 stage 順序正確進入下一個 stage
4. stage 失敗時，future stage 全部 `NOT_RUN`
5. stage stop 時，future stage 全部 `NOT_RUN`
6. resume 時：
   - upstream completed -> `SKIPPED`
   - target stage failed/stopped/not_run -> `PENDING`
7. `JOB / CHUNK` atomic semantics 仍正確

## 11. 結論

最合理的做法不是直接做 arbitrary DAG，而是：

1. 先做 **stage-based parallel orchestration**
2. 保留 `sequenceOrder`
3. step 仍維持線性，保住 Spring Batch 的 `JOB / CHUNK` semantics
4. 讓 resume / rerun / stop / failure 都在 stage-aware 規則下閉環

這樣可以讓 backend domain 從「線性 pipeline」演進到「stage-based、DAG-ready pipeline」，但不會一次把整個 runtime 模型打碎。

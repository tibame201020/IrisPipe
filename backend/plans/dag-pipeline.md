# DAG Pipeline 規劃

## 1. 定位

IrisPipe 目前的真實模型是：

- `pipeline -> jobs -> steps`
- `job -> job` 的調用順序由 IrisPipe 決定
- `step -> step` 仍維持 Spring Batch 的線性 step chain
- `AtomicLevel = JOB | CHUNK` 的語義維持在 job 邊界
- `resume` 與 `rerun` 依賴 snapshot 中的 materialized job config

因此，若要把 pipeline 從純線性提升到 DAG-ready，不應該直接把 step 做成圖，也不應該一次跳成 arbitrary DAG。較穩定的演進方式是：

1. 先落地 **stage-based parallel orchestration**
2. 讓 `stage` 成為 pipeline 與 job 之間的中介層
3. 同一個 `stage` 內的 job 可平行執行
4. `stage` 與 `stage` 之間仍維持 barrier
5. `step` 依舊保持線性，以保留 Spring Batch 的 `JOB / CHUNK` semantics

這份文件描述的是：
> 先把 pipeline 從 `linear jobs` 提升成 `stage -> parallel jobs -> next stage`，並保留 `JOB / CHUNK` 的交易、resume、snapshot、query projection 一致性。

---

## 2. 現況查證

### 2.1 Domain 形狀

目前 backend 的核心模型已證實為：

- pipeline 由 `List<SyncJobDefinition>` 組成
- job 由 `List<ExecutionStep>` 組成
- persisted config 與 runtime projection 都是 job / step 的線性序列

參考：
- [SyncJobDefinition.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/model/SyncJobDefinition.java)
- [PipelineJobDefinition.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/entity/config/PipelineJobDefinition.java)
- [PipelineExecutionDefinition.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/entity/config/PipelineExecutionDefinition.java)

### 2.2 job-to-job orchestration

目前 job-to-job orchestration 不是交給 Spring Batch flow graph，而是由 IrisPipe 自己控制：

- config 端依賴 `sequenceOrder`
- runtime 端依賴 `jobSequenceOrder`
- launcher 逐個 job launch

參考：
- [PipelineDefinitionAggregatePersistenceService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/service/config/PipelineDefinitionAggregatePersistenceService.java)
- [PipelineRunCommandService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineRunCommandService.java)
- [PipelineRunLaunchService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineRunLaunchService.java)

### 2.3 step-to-step orchestration

step 目前仍是線性的：

- `SyncJobFactory` 會把 executions 轉成 `List<Step>`
- 再用 `.start(first).next(...)` 組成標準 step chain

參考：
- [SyncJobFactory.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/factory/SyncJobFactory.java)

### 2.4 Atomic semantics

目前 `AtomicLevel` 只有：

- `JOB`
- `CHUNK`

它代表的是 job-local 的 transaction / restart granularity，不是 pipeline-level atomicity。

參考：
- [AtomicLevel.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/model/AtomicLevel.java)
- [JobSetting.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/model/JobSetting.java)
- [CustomJobListener.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/batch/listener/CustomJobListener.java)

### 2.5 rerun / resume

目前 public lifecycle 已有：

- `execute`
- `rerun`
- `resume`

其中：

- `rerun` 會建立新的 logical pipeline run，並複製來源 snapshot lineage
- `resume` 會在既有 logical run 上建立新的 execution attempt，並使用同一份 snapshot 裡的 job config

參考：
- [PipelineExecutionService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineExecutionService.java)
- [PipelineRunControlPolicy.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/core/service/PipelineRunControlPolicy.java)
- [PipelineRunSnapshotService.java](/C:/Users/16/Downloads/codes/IrisPipe/backend/src/main/java/irispipe/infrastructure/service/runtime/PipelineRunSnapshotService.java)

---

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

語義：

- `stage` 是 job 的 orchestration group
- 同一個 `stage` 內的 job 可平行執行
- `stage` 與 `stage` 之間有明確 barrier
- `step` 仍然不是 graph

### 3.2 保留 `sequenceOrder`

不建議直接移除 `sequenceOrder`。

原因：

1. 現有 persistence / runtime projection 已大量依賴 sequence
2. stage 內 job 仍需要 deterministic order 來支援：
   - query projection
   - UI 呈現
   - deterministic snapshot materialization
3. backward compatibility 較穩定

因此應新增：

- `stageName`
- `stageSequenceOrder`

並保留：

- `sequenceOrder`

它們的角色分工應該是：

- `stageSequenceOrder`：stage barrier 的排序
- `stageName`：人類可讀的 stage 標籤
- `sequenceOrder`：stage 內 job 的穩定順序

### 3.3 不把 step 做成 DAG

目前不建議把 step 變成 graph。

原因：

- 這會直接碰撞 `JOB / CHUNK` restart semantics
- Spring Batch 本身對線性 step chain 的支撐已成熟
- 把 step 圖化會大幅提高 atomicity / restart / snapshot 的複雜度

因此目前只改：

- `job -> job` orchestration

不改：

- `step -> step`

---

## 4. Config Contract

### 4.1 API / import 形狀

建議新增的 payload 形狀：

- pipeline-level
  - `stages?: string[]`
- job-level
  - `stageName?: string`

若舊版 config 沒有 stage：

- 維持 legacy 線性語義
- backend 在 materialize 時自動補 implicit stage，並保留原本順序

### 4.2 YAML 範例

```yml
stages:
  - stage1
  - stage2

jobs:
  - jobName: k6_pipeline_control_job_a
    stage: stage1
    executions:
      - type: EXECUTE
        name: k6_pipeline_control_job_a_truncate
        sql: truncate table test_control_dest_a
      - type: INSERT
        name: k6_pipeline_control_job_a_insert
        sql: select * from test_control_source_a order by id asc
        destTable: test_control_dest_a
    setting:
      fetchSize: 100
      batchSize: 100
      atomicLevel: JOB
    database:
      source:
        driver: org.h2.Driver
        url: jdbc:h2:./h2data/data
        username: sa
        password: "sa"
      dest:
        driver: org.h2.Driver
        url: jdbc:h2:./h2data/data
        username: sa
        password: "sa"
```

### 4.3 backward compatibility

若 payload：

- 沒有 `stages`
- job 也沒有 `stageName`

就維持現有 linear contract，不要求前端或舊匯入檔立刻改格式。

---

## 5. Persistence 設計

### 5.1 Config schema

在 `iris_pipeline_job` 新增：

- `stage_name`
- `stage_sequence_order`

仍保留：

- `sequence_order`

`iris_pipeline_execution` 不需要 stage 欄位。step 本來就從屬於 job，stage 不需要再往 step 複製。

### 5.2 Runtime schema

在 `iris_pipeline_run_job` 新增：

- `stage_name`
- `stage_sequence_order`

`iris_pipeline_run_execution_job` 不必直接存 stage，因為它已經可以透過 parent logical run job 反查。

### 5.3 Snapshot

snapshot 需要保留：

- `stageName`
- `stageSequenceOrder`
- `sequenceOrder`

這樣 resume 才能在 stage-aware 模型下保持 deterministic。

---

## 6. Runtime Orchestration

### 6.1 Stage barrier

launcher 目標流程：

1. 依 `stageSequenceOrder` 分組
2. 同一個 stage 內所有 `PENDING` job 一起 launch
3. 等待整個 stage barrier
4. 若整個 stage 全部 `COMPLETED`，才進下一個 stage
5. 若任一 job 進入 `FAILED / STOPPED / ABANDONED / UNKNOWN`，則停止 execution，並標記 future stage jobs 為 `NOT_RUN`

### 6.2 Stop

當 pipeline stop：

- 目前 in-flight stage 的所有 running jobs 都要收到 stop
- 已完成的 job 保留 `COMPLETED`
- future stage jobs 標為 `NOT_RUN`

### 6.3 Failure

若某個 stage 內有 job 失敗：

- 當次 execution 直接失敗
- 已完成 job 保持 `COMPLETED`
- 失敗 job 標為 `FAILED`
- future stage jobs 標為 `NOT_RUN`

---

## 7. Resume / Rerun 規則

### 7.1 Rerun

`rerun`：

- 建立全新的 logical pipeline run
- 仍從 snapshot materialized config 啟動
- lineage 指回 source run

stage metadata 也必須一併從 snapshot 帶過去。

### 7.2 Resume

`resume`：

- 在既有 logical run 上建立新的 execution attempt
- 找到第一個 incomplete stage
- 在該 stage 內：
  - 已 `COMPLETED` 的 job -> `SKIPPED`
  - `FAILED / STOPPED / NOT_RUN` 的 job -> `PENDING`
- future stage 仍為 `PENDING`

### 7.3 AtomicLevel 不被 stage 破壞

resume / rerun 的關鍵是：

- `AtomicLevel=JOB` 仍維持 job-local atomicity
- `AtomicLevel=CHUNK` 仍維持 partial commit / restart semantics

stage 只負責 orchestration，不改 job 內 transaction semantics。

### 7.4 例子

若 Stage 2 內有三個 job：

- Job A：`COMPLETED`
- Job B：`FAILED`
- Job C：`COMPLETED`

resume 時：

- Job A -> `SKIPPED`
- Job B -> `PENDING`
- Job C -> `SKIPPED`

理由：

- 同一 stage 內已完成 job 不應重跑
- 失敗 job 才是 resume target
- 同一 stage 內成功 job 的結果要保留，仍遵守原本 `JOB / CHUNK` semantics

---

## 8. Query / DTO

建議 DTO 增加：

- config detail
  - `stages[]`
  - job 的 `stageName / stageSequenceOrder`
- run detail
  - job 的 `stageName / stageSequenceOrder`

不需要一次做出完整 stage summary；先把 stage metadata 暴露給前端即可。

---

## 9. 實作切片

### Phase 1：Additive schema / model / contract

目標：

- 在 config、snapshot、runtime row 中加入 stage
- 不破壞 legacy 線性輸入

內容：

- migration 新增 stage 欄位
- entity / DTO / import contract 擴充 stage
- read model / snapshot 保存 stage
- legacy config 自動 materialize implicit stage

### Phase 2：runtime orchestration

目標：

- 將 launcher 從 job-sequential 改成 stage-barrier orchestration
- stop / resume / rerun policy 轉成 stage-aware

內容：

- stage 分組 launch
- stage barrier 等待
- future stage `NOT_RUN`
- resume 以 stage 為最小恢復單位

---

## 10. 風險與驗證

### 10.1 風險

1. legacy config 沒有 stage 時，必須保持原本線性語義
2. 同 stage job 平行後，stop/failure 的 lifecycle 判定要收斂一致
3. `resume` 不能錯誤重跑已完成 job
4. `CHUNK` partial progress 與 `JOB` atomic rollback 不能被 stage orchestration 破壞

### 10.2 驗證案例

1. 單 stage、單 job：與目前 legacy 完全相同
2. 單 stage、多 job：同 stage 內 job 可平行
3. 多 stage：前一 stage 全部完成才進下一 stage
4. 多 stage：某 stage 內一個 job 失敗，future stage 全部 `NOT_RUN`
5. 多 stage stop：running jobs 收到 stop，future stage `NOT_RUN`
6. 多 stage resume：已完成 job `SKIPPED`，失敗 job `PENDING`
7. `JOB` / `CHUNK` 混合 atomicLevel 仍維持原語義

---

## 11. 結論

1. 先做 **stage-based parallel orchestration**，不是直接做 arbitrary DAG
2. 保留 `sequenceOrder`，並新增 `stageName + stageSequenceOrder`
3. step 維持線性，避免破壞 Spring Batch 的 `JOB / CHUNK` semantics
4. resume 要以「第一個 incomplete stage」為恢復起點，並只重跑真正未完成的 job
5. snapshot 必須保存 stage metadata，才能讓 rerun / resume 保持 deterministic

這樣的好處是：

- schema 變更可控
- 與現有 backend truth 對齊
- 能把目前線性 pipeline 演進成 DAG-ready 形狀
- 不會一次把 domain 和 runtime 複雜度推到過高

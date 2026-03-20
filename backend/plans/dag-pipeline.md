# Stage First Pipeline 規劃與落地說明

## 1. 文件目的

本文件記錄 IrisPipe pipeline orchestration 的演進方向。

目前只落實第一段：

- 將 `stage` 提升為 backend domain 的一級概念
- 維持 `stage -> jobs -> steps`
- 不引入 job-level DAG
- 不改變 step 線性 chain 與 `AtomicLevel = JOB | CHUNK` 的既有語意

換句話說，現在的目標不是「任意 DAG」，而是：

- `pipeline -> stages -> jobs -> steps`
- 同 stage 可平行執行 jobs
- stage 與 stage 之間有明確 barrier
- stop / resume / rerun / snapshot 都以 stage-first 模型解釋

## 2. 已查證的現況

### 2.1 Spring Batch 仍然是 job/step 執行底座

IrisPipe 並未放棄 Spring Batch。

- `job` 仍然是 Spring Batch `Job`
- `step` 仍然是 Spring Batch `Step`
- `SyncJobFactory` 會把一個 `SyncJobDefinition` 建成一個線性 step chain

這代表：

- `step -> step` 仍然保持線性
- `JOB / CHUNK` 的 transaction 與 restart semantics 仍然以 Spring Batch 為準

### 2.2 job-to-job orchestration 由 IrisPipe 控制

目前 `job -> job` 的調度不是交給 Spring Batch flow graph，而是由 IrisPipe 自己控制。

這也是為什麼 stage 能自然插入在 pipeline 與 job 之間：

- `pipeline` 決定 stage barrier
- `stage` 決定同群組 jobs 的平行調度
- `job` 內部仍維持 step chain

### 2.3 stage 能力已存在，但原本不夠像一級 domain

在本次落地前，repo 已有：

- `stageName`
- `stageSequenceOrder`
- 同 stage jobs 平行啟動
- stop / fail 後 future stages 標成 `NOT_RUN`
- resume 會從第一個 incomplete stage 繼續

但 stage 原本主要是掛在 job 上的欄位，還不是完整的一級 read/write model。

本次工作的重點，就是把它補齊成真正的 backend domain 概念。

## 3. 目標模型

### 3.1 Domain 形狀

```text
Pipeline
  -> Stage 1
      -> Job A
      -> Job B
  -> Stage 2
      -> Job C
```

語意如下：

- `Pipeline`
  - IrisPipe 的完整 orchestration 單位
- `Stage`
  - pipeline 內的 barrier 群組
  - 同 stage 的 jobs 可以平行執行
  - 下一 stage 必須等前一 stage 收斂後才可進入
- `Job`
  - Spring Batch Job 封裝單位
  - 原子邊界仍然是 job，或其內的 chunk
- `Step`
  - Spring Batch Step
  - 仍保持線性，不做 graph 化

### 3.2 不做的事

本階段明確不做：

- job-level arbitrary DAG
- step-level DAG
- branch / condition edges
- stage dependency graph

理由很直接：

- 目前 resume / rerun / snapshot / k6 都已建立在 stage barrier 模型上
- 先把 stage 做成一級 domain，比直接推 job DAG 風險低很多

## 4. Config Contract

### 4.1 對外 contract

對外 config 採 stage-first 語意：

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
```

規則：

- `stages[]` 定義 stage 順序
- job 必須明確宣告 `stage`
- 同 stage 內 jobs 的執行順序仍保持 deterministic
- backend 會保留 `stageName` 作為 legacy alias 輸入，但主語意是 `stage`

### 4.2 Validation 規則

stage-first config 至少要滿足：

- `stages[]` 不可重複
- job `stage` 必須存在於 `stages[]`
- stage 順序必須 deterministic
- 同 stage 內 job 順序必須 deterministic
- stage 不可為空白

Legacy 線性 config 仍可作 backward compatibility，但不再是主語意。

## 5. Runtime Model

### 5.1 execute

`execute` 的期望行為：

1. 讀取最新 persisted pipeline config
2. materialize snapshot
3. 建立 logical run 與 initial execution
4. 依 `stageSequenceOrder` 分組
5. 同 stage jobs 平行啟動
6. 等待 stage barrier 收斂
7. 全部成功才進下一 stage
8. 若某 stage fail / stop，future stages 一律 `NOT_RUN`

### 5.2 stop

`stop` 的期望行為：

- 當前 active stage 的 in-flight jobs 接受 stop 請求
- 已完成 jobs 維持 `COMPLETED`
- 尚未進入的 future stages 一律 `NOT_RUN`
- pipeline execution 最終收斂為 `STOPPED`

### 5.3 resume on stop

`resume` 的期望行為：

- 找出第一個 incomplete stage
- upstream completed stages 不重跑
- target stage 中已完成 jobs 標成 `SKIPPED`
- target stage 中 stopped / not-run / failed jobs 繼續執行
- target stage 收斂完成後，才往 downstream stages 推進

### 5.4 resume on fail

當同一 stage 中：

- job A `COMPLETED`
- job B `FAILED`

則：

- pipeline 不可進入下一 stage
- future stages 一律 `NOT_RUN`
- resume 時只處理 failed / incomplete jobs
- 已完成的同 stage job 不得重跑

### 5.5 rerun

`rerun` 的期望行為：

- 建立新的 logical run
- 複製 source run snapshot
- 不讀取最新 config
- stage-first topology 必須與來源 snapshot 一致

## 6. Snapshot Semantics

snapshot 必須保留：

- `stage`
- `stageSequenceOrder`
- `sequenceOrder`
- `atomicLevel`
- `fetchSize`
- `batchSize`
- database config
- executions / parameters

理由：

- `resume` 必須吃同一份 materialized config
- `rerun` 也必須使用來源 run 的 snapshot，而不是最新 config

這是避免 config drift 破壞 lifecycle correctness 的核心。

## 7. 本次落地範圍

本次實作的完成標準是：

1. `stage` 成為 backend 一級 read/write model
2. config detail 可直接提供 stage-first projection
3. run detail / attempt timeline 可直接提供 stage-first projection
4. lifecycle 規則明確支援：
   - execute
   - stop
   - resume on stop
   - resume on fail
   - rerun
5. k6 不再只驗 1 stage / 1 job，而是補齊 multi-stage / multi-job 證據

## 8. k6 驗證重點

為了證明 stage 是真正落地，不只存在欄位，本次 k6 需覆蓋：

### 8.1 multi-stage parallel execute

- stage1 兩個 job
- stage2 一個 job
- 驗證：
  - 同 stage jobs 有平行啟動證據
  - stage2 不會早於 stage1 barrier 開始

### 8.2 multi-stage stop / resume

- stop 發生在中間 stage
- 驗證：
  - upstream stage 已完成 jobs 保持 `COMPLETED`
  - same-stage incomplete jobs 會被 stop
  - future stages `NOT_RUN`
  - resume 後只從 target stage 繼續

### 8.3 same-stage fail barrier

- 同 stage 內一個 job success、一個 job fail
- 驗證：
  - pipeline 不進下一 stage
  - future stages `NOT_RUN`
  - resume 只補 failed branch，不重跑 completed branch

### 8.4 stage-aware rerun

- multi-stage pipeline rerun
- 驗證：
  - 新 logical run 仍保留 stage topology
  - 來源 snapshot 不被最新 config 汙染

## 9. 結論

本文件對應的實作方向只有一個：

- **把 stage 做成 backend domain 的一級概念**

不是：

- 直接導入 DAG
- 改變 step 線性模型
- 破壞 `JOB / CHUNK` atomic semantics

這樣的好處是：

- 風險低
- 與現有 Spring Batch 底座相容
- 能讓 frontend 與 k6 都建立在真實 stage domain 上
- 為未來若真的要做 stage dependency 或更高階 orchestration 保留空間

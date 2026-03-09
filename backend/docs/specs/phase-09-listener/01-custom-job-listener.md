# Phase 9-1: CustomJobListener

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.listener.CustomJobListener`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/listener/CustomJobListener.java`

## 策略: D. 輕量 Mock

> 需驗證 TransactionManager 的 commit/rollback 呼叫，mock TX manager。SyncJobProp.Execution 用真實 record。

## 類別概述

Job 級別 listener，負責：
- `beforeJob`: 可選擇開啟 destContext 的交易
- `afterJob`: 依 Job 完成狀態 commit/rollback，關閉 context，輸出摘要

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/listener/CustomJobListenerTest.java`

## Mock 策略

- `@Mock PlatformTransactionManager transactionManager`
- `@Mock TransactionStatus transactionStatus`
- `@Mock JobExecution jobExecution`
- `SyncJobContext` → 使用真實 record，destContext mock
- `SyncJob.executions` → **必須初始化為含真實 Execution 的 list**（because `afterJob` iterate executions）

⚠️ **關鍵**: `SyncJobProp.Execution` 是 record，不能 mock。需用真實 instance，且 `summaryInfo` 不能為 null:

```java
SummaryInfo stepSummary = new SummaryInfo("test-step", SimpleEnum.SummaryInfoLayer.STEP);
SyncJobProp.Execution execution = new SyncJobProp.Execution(
    SyncJobProp.ExecutionType.INSERT, "test-exec", "SELECT 1", "TABLE",
    List.of(), null, stepSummary, new HashMap<>());
syncJob.setExecutions(new ArrayList<>(List.of(execution)));
```

## Test Cases

### 1. `beforeJob_openTransaction_startsTransaction`
`openJobTransaction=true` → `verify(transactionManager).getTransaction(any())`

### 2. `beforeJob_noTransaction_doesNotStartTransaction`
`openJobTransaction=false` → `verify(transactionManager, never()).getTransaction(any())`

### 3. `afterJob_completed_commits`
`jobExecution.getStatus()` → `COMPLETED` → `verify(transactionManager).commit(transactionStatus)`

### 4. `afterJob_failed_rollbacks`
`jobExecution.getStatus()` → `FAILED` → `verify(transactionManager).rollback(transactionStatus)`

### 5. `afterJob_closesContext`
無論成功失敗 → `verify(destContext).close()` 或 `verify(sourceContext).close()`

### 6. `afterJob_noTransaction_skipsCommitRollback`
`openJobTransaction=false` → 不呼叫 commit/rollback

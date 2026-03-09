# Phase 9-2: ExecutionStepListener

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.listener.ExecutionStepListener`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/listener/ExecutionStepListener.java`

## 策略: D. 輕量 Mock

> 需驗證 ExecutionRecordService.saveWatermark() 呼叫。SyncJobContext/Execution 用真實 record。

## 類別概述

Step 級別 listener:
- `afterStep`: 當 step COMPLETED 且有 watermarkColumn → 呼叫 `executionRecordService.saveWatermark()`
- `afterStep`: 當 readCount != 0 → 設定 `summaryInfo.total`

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/listener/ExecutionStepListenerTest.java`

## Mock 策略

- `@Mock SyncJobContext syncJobContext` → mock 內部 components
- `@Mock ExecutionRecordService executionRecordService`
- `@Mock StepExecution stepExecution`
- `SyncJobProp.Execution` → 真實 record instance
- `SummaryInfo` → 真實 instance

需 stub:
```java
when(stepExecution.getStatus()).thenReturn(BatchStatus.COMPLETED);
when(syncJobContext.recordContext()).thenReturn(mockRecordContext);
when(mockRecordContext.getNamedParameterJdbcTemplate()).thenReturn(mockJdbcTemplate);
when(syncJobContext.syncJob()).thenReturn(syncJob);
when(syncJob.getSetting()).thenReturn(setting);
when(setting.recordTable()).thenReturn("record_table");
```

⚠️ **`SyncJobContext` 是 record**。需使用真實 instance:
```java
SyncJobContext context = new SyncJobContext(sourceContext, destContext, recordContext, syncJob, summaryInfo);
```

## Test Cases

### 1. `afterStep_completed_withWatermark_savesWatermark`
COMPLETED + `watermarkColumn = "updated_at"` + `executionContext.get("updated_at") = someValue` → `verify(executionRecordService).saveWatermark(...)`

### 2. `afterStep_completed_withoutWatermark_doesNotSave`
COMPLETED + `watermarkColumn = ""` → `verify(executionRecordService, never()).saveWatermark(...)`

### 3. `afterStep_failed_doesNotSaveWatermark`
status = FAILED → 不呼叫 saveWatermark

### 4. `afterStep_watermarkValueNull_doesNotSave`
COMPLETED + watermarkColumn 有值 + `executionContext.get(...)` = null → 不呼叫

### 5. `afterStep_nonZeroReadCount_setsTotalCount`
`stepExecution.getReadCount()` = 100 → `summaryInfo.total.get()` == 100

### 6. `afterStep_zeroReadCount_doesNotSetTotal`
`stepExecution.getReadCount()` = 0 → `summaryInfo.total.get()` == 0 (初始值)

# Phase 13-1: JobExecutionService

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.service.JobExecutionService`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/service/JobExecutionService.java`

## 策略: D. 輕量 Mock

> 編排層，mock 所有下層服務驗證呼叫順序。

## 類別概述

`@Service`，編排完整的 Job 執行流程:
1. `jobConfigService.getSyncJobs()` → 讀取設定
2. `syncJob.validate()` → 驗證
3. `syncJobContextFactory.initialSyncJobContext()` → 建立 context
4. `syncJobFactory.createBatchJob()` → 組裝 Job
5. `jobLauncher.run()` → 啟動 Job

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/service/JobExecutionServiceTest.java`

## Mock 策略

```java
@Mock JobConfigService jobConfigService;
@Mock SyncJobContextFactory syncJobContextFactory;
@Mock SyncJobFactory syncJobFactory;
@Mock ExecutionRecordService executionRecordService;
@Mock JobLauncher jobLauncher;
@Mock Job mockJob;
@Mock JobExecution mockJobExecution;
@InjectMocks JobExecutionService jobExecutionService;
```

## Test Cases

### 1. `execute_filepath_delegatesToJobConfigService`
呼叫 `execute(launcher, "config.json")` → `verify(jobConfigService).getSyncJobs("config.json")`

### 2. `execute_callsValidateOnEachSyncJob`
設定 2 個 SyncJob (spy) → `verify(syncJob1).validate()` + `verify(syncJob2).validate()`

### 3. `execute_createsContextAndJobForEach`
2 個 SyncJob → `verify(syncJobContextFactory, times(2)).initialSyncJobContext(...)` + `verify(syncJobFactory, times(2)).createBatchJob(...)`

### 4. `execute_launchesJob`
→ `verify(jobLauncher).run(eq(mockJob), any(JobParameters.class))`

### 5. `execute_launchFails_throwsCustomJobExecutionException`
`jobLauncher.run()` 拋出 `Exception` → `assertThrows(CustomJobExecutionException.class, ...)`

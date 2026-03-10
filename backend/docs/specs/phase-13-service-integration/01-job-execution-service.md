# Phase 13-1: JobExecutionService

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.service.JobExecutionService`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/service/JobExecutionService.java`

## 策略: D. 輕量 Mock

> 編排層，mock 所有下層服務驗證呼叫順序。需要獨立 mock `jobLauncher` 與 `asyncJobLauncher`。

## 類別概要

`@Service`，編排完整的 Job 執行流程:
1. `jobConfigService.getSyncJobs()` → 讀取設定
2. `syncJob.validate()` → 驗證
3. `syncJobContextFactory.initialSyncJobContext()` → 建立 context
4. `syncJobFactory.createBatchJob()` → 組裝 Job
5. 判斷 `ExecuteSyncJobRequest.useAsyncLauncher` 來決定要用 `jobLauncher` 還是 `asyncJobLauncher` (目前皆預設執行 `jobLauncher.run()`)。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/service/JobExecutionServiceTest.java`

## Mock 策略

```java
@Mock JobConfigService jobConfigService;
@Mock SyncJobContextFactory syncJobContextFactory;
@Mock SyncJobFactory syncJobFactory;
@Mock ExecutionRecordService executionRecordService;
@Mock JobLauncher jobLauncher;
@Mock JobLauncher asyncJobLauncher;
@Mock Job mockJob;
@Mock JobExecution mockJobExecution;
@InjectMocks JobExecutionService jobExecutionService; // 可能需要留意 Qualifier 的 manual injection 
```

## Test Cases

### 1. `executeJob_useAsyncLauncher_delegatesToAsyncLauncher`
呼叫 `executeJob` 傳入 `useAsyncLauncher: true` 的 request，驗證 `asyncJobLauncher.run` 被呼叫且 `jobLauncher.run` 沒有。

### 2. `executeJob_useSyncLauncher_delegatesToSyncLauncher`
呼叫 `executeJob` 傳入 `useAsyncLauncher: false` 的 request，驗證 `jobLauncher.run` 被呼叫且 `asyncJobLauncher.run` 沒有。

### 3. `execute_callsValidateOnEachSyncJob`
設定 2 個 SyncJob (spy) → `verify(syncJob1).validate()` + `verify(syncJob2).validate()`

### 4. `execute_createsContextAndJobForEach`
2 個 SyncJob → `verify(syncJobContextFactory, times(2)).initialSyncJobContext(...)` + `verify(syncJobFactory, times(2)).createBatchJob(...)`

### 5. `execute_launchesJob`
→ `verify(jobLauncher).run(eq(mockJob), any(JobParameters.class))`

### 6. `execute_launchFails_throwsCustomJobExecutionException`
`jobLauncher.run()` 拋出 `Exception` → `assertThrows(CustomJobExecutionException.class, ...)`

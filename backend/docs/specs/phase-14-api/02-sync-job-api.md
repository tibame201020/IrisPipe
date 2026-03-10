# Phase 14-2: SyncJobAPI

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.api.SyncJobAPI`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/api/SyncJobAPI.java`

## 策略: D. 輕量 Mock (MockMvc)

> Controller 層測試，使用 `MockMvc` 驗證路由與 HTTP 狀態碼傳遞，邏輯全數 Mock 掉 `JobExecutionService`, `JobMetadataService`, `JobExplorer`。

## 類別概要

提供本機批次作業 (Job) 的執行與管理 RESTful 介面。利用 `JobExecutionService` 執行 Job，並透過 `JobMetadataService` 或 `JobExplorer` 查詢與清理歷史紀錄。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/api/SyncJobAPIWebTest.java`

## Mock 策略

```java
@WebMvcTest(SyncJobAPI.class)
// 並且 @MockBean JobLauncher, asyncJobLauncher, JobExplorer, JobExecutionService, JobMetadataService
```

## Test Cases

### 1. `getJobSummarysByIds_returns200AndList`
建立 `mockMvc.perform(get("/api/v1/sync-job").param("ids", "1,2"))`，預期呼叫 `jobExplorer.getJobExecution()` 兩次，過濾 Null 後回傳 `JobSummaryInfo` 列表。

### 2. `executeJob_useAsyncLauncher_returns200`
利用 json body 傳入 `useAsyncLaucher: true`，驗證 `jobExecutionService.execute` 被調用並傳入 `asyncJobLauncher`，最後狀態為 HTTP 200 (註：目前未改成 202 Accepted)。

### 3. `executeJob_useSyncLauncher_returns200`
利用 json body 傳入 `useAsyncLaucher: false`，驗證 `jobExecutionService.execute` 被調用並傳入一般的 `jobLauncher`，最後 HTTP 200。

### 4. `getJobDetail_returns200AndDetail`
建立 `mockMvc.perform(get("/api/v1/sync-job/1"))`，驗證 `jobExplorer.getJobExecution(1L)` 被調用並回傳 `JobDetailInfo` json。

### 5. `deleteMetadata_returns204NoContent`
建立 `mockMvc.perform(delete("/api/v1/sync-job/1"))`，預期 HTTP 204 No Content，且調用 `jobMetadataService.deleteByJobExecution()`。

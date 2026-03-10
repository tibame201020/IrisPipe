# Phase 14-1: SyncConfigAPI

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.api.SyncConfigAPI`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/api/SyncConfigAPI.java`

## 策略: D. 輕量 Mock (MockMvc)

> Controller 層測試，使用 `MockMvc` 驗證路由與 HTTP 狀態碼傳遞，邏輯全數 Mock 掉 `JobConfigService`。

## 類別概要

提供本機設定檔的 CRUD RESTful 介面。利用 `JobConfigService` 內部處理 `SyncConfigFileOperation` Enum 策略與 MultipartFile 上傳寫檔，再回傳 `SyncConfigDTO.ConfigFileInfo` 結果。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/api/SyncConfigAPIWebTest.java`

## Mock 策略

```java
@WebMvcTest(SyncConfigAPI.class)
// 並且 @MockBean JobConfigService
```

## Test Cases

### 1. `listSyncConfig_returns200AndList`
建立 `mockMvc.perform(get("/api/v1/sync-config"))`，預期呼叫 `jobConfigService.listSyncConfig(any())`，回傳 200 與字串列表。

### 2. `getConfigDetail_returns200AndDetail`
建立 `mockMvc.perform(get("/api/v1/sync-config").param("path", "file.json"))`，預期呼叫 `jobConfigService.getConfigFileInfo`，回傳 200 與物件 json。

### 3. `createConfig_returns200Uploaded`
利用 `MockMultipartFile` 發出 `post("/api/v1/sync-config").param("path", "t.json")`，驗證 `jobConfigService.syncConfigControl` 被丟入 `CREATE` operation。

### 4. `updateConfig_returns200Uploaded`
利用 `MockMultipartFile` 發出 `put("/api/v1/sync-config")`，驗證 `jobConfigService.syncConfigControl` 被丟入 `UPSERT` operation。

### 5. `patchConfig_returns200Uploaded`
利用 `MockMultipartFile` 發出 `patch("/api/v1/sync-config")`，驗證 `jobConfigService.syncConfigControl` 被丟入 `UPDATE` operation。

### 6. `deleteConfig_returns204NoContent`
`mockMvc.perform(delete("/api/v1/sync-config").param("path", "t.json"))`，預期 HTTP 200 OK 且調用 `deleteSyncConfig()` (由於目前沒有改成 204，所以還是 200)。

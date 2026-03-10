# Phase 5-1: JobConfigService

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.service.JobConfigService`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/service/JobConfigService.java`

## 策略: B+D. @TempDir+Mock

> `JobConfigService` 除了原本的依賴 `FileProvider` 處理反序列化，現在還加上了 Spring 的 `MultipartFile` 與實際路徑 `Files.write/walk`。需要結合 `@TempDir` 沙盒來測試。

## 類別概要

負責所有涉及設定檔 (JSON/YAML) 的 IO 操作與反序列化。包含遞迴列出設定檔 `listSyncConfig`、取得詳細設定 `getConfigFileInfo`、透過策略 Enum 上傳兼驗證的 `syncConfigControl`，以確保寫出新檔或更新。另外也包含了實際檔案 `deleteSyncConfig` 的功能。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/service/JobConfigServiceTest.java`

## Mock 策略

```java
@Mock JsonFileProvider jsonFileProvider;
@Mock YamlFileProvider yamlFileProvider;
@InjectMocks JobConfigService jobConfigService;
```
需掛上 `@TempDir Path tempDir` 建構虛構的 root configAcceptPath。

## Test Cases

### 1. `listSyncConfig_walksDirectory_returnsRelativePaths`
在 `@TempDir` 底下建立兩個合法檔案與一個資料夾，預期能掃描並回傳正確相對路徑 list。包含 `ConfigFileException` 拋錯驗證。

### 2. `getConfigFileInfo_validPath_returnsConfigFileInfo`
Mock `FileProvider#readPathToClass` 產生 jobs，呼叫 `getConfigFileInfo("mock", "file.json")`，預期回傳的 Info 內含有相關檔案名稱。此時也須涵蓋 `secureConifgPath` 遇到 `../` 時拋出例外的情境。

### 3. `syncConfigControl_createOperation_createsFile`
利用 `MockMultipartFile` 以及一個尚未存在的路徑。呼叫 `syncConfigControl` 並傳入 `CREATE` operation。使用 `try-finally` 驗證其暫存檔不外洩。最後確認真實檔案落入 `@TempDir` 目錄且內容相符。

### 4. `syncConfigControl_createOperation_fileExists_throwsException`
在 `@TempDir` 預先建立好檔案，傳入 `CREATE` operation 後，預期 `operation.validate(path)` 將會拋出 `IllegalArgumentException` "File already exists"。

### 5. `syncConfigControl_updateOperation_updatesFile`
在 `@TempDir` 預先建立好檔案，傳入 `UPDATE` operation，預期能夠執行蓋檔修改內容，並回傳正確 Info。若檔案不存在則拋錯。

### 6. `syncConfigControl_upsertOperation_upsertsFile`
傳入 `UPSERT` operation，無論建立好沒有檔案，都預期能寫檔成功，不拋出 validate exception。

### 7. `deleteSyncConfig_fileExists_deletesSuccessfully`
預先建立檔案，呼叫 `deleteSyncConfig`，驗證實體檔案消失。

### 8. `deleteSyncConfig_fileNotFound_throwsConfigFileException`
檔案不存在時呼叫刪除，預期拋出 RuntimeException 被 catch 後轉拋為 `ConfigFileException`。

# Phase 12-1: SyncJobContextFactory

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.factory.SyncJobContextFactory`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/factory/SyncJobContextFactory.java`

## 策略: C+D (Spy self + Mock ExecutionRecordService)

> 使用 `@Spy` 自身 + mock `generDatabaseContext()` 和 `ExecutionRecordService`。

## 類別概述

`@Service`，負責：
1. 從 `SyncJob` 建立 source/dest/record 三組 `DatabaseContext`
2. 渲染 `SystemProvideVariable` 參數（查詢 record DB 取得歷史值）
3. 為每個 Execution 建立 `SummaryInfo`
4. 組裝完整的 `SyncJobContext`

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/factory/SyncJobContextFactoryTest.java`

## Mock 策略

**難度**: ⭐⭐⭐⭐ — `generDatabaseContext()` 內部建立 `HikariDataSource`，會嘗試連接

**建議方式**:
- 使用 `@Spy SyncJobContextFactory` + `doReturn` mock `generDatabaseContext()`
- 或 mock `ExecutionRecordService`

## ⚠️ 重要注意事項

- `generDatabaseContext(null)` → 回傳 null（這是合法路徑）
- `renderSystemProvoderVariable` 呼叫 `executionRecordService.fetchValue()`，需 mock

## Test Cases

### 1. `initialSyncJobContext_createsAllThreeContexts`
source/dest/record ConnectionInfo 都有值 → SyncJobContext 的三個 context 非 null

### 2. `initialSyncJobContext_nullRecordConnectionInfo_recordContextNull`
`database.record = null` → `recordContext()` 為 null

### 3. `initialSyncJobContext_setsExecutionName_whenNameIsNull`
Execution name 為 null → 使用 `jobName + "_" + type` 格式

### 4. `initialSyncJobContext_preservesExecutionName_whenPresent`
Execution name 有值 → 保留原值

### 5. `initialSyncJobContext_createsSummaryInfoForEachExecution`
每個 Execution 有獨立的 `SummaryInfo`，layer = STEP

### 6. `renderSystemProvoderVariable_matchingParam_fetchesValue`
Parameter name = `_LAST_WATERMARK` → `executionRecordService.fetchValue()` 被呼叫

### 7. `renderSystemProvoderVariable_nonMatchingParam_keepsOriginal`
Parameter name = `someCustomParam` → 保持原值不變

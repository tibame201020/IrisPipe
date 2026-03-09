# Phase 1-5: SyncJobProp

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.data.SyncJobProp`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/data/SyncJobProp.java`

## 策略: A. 純邏輯測試

> 所有 enum + record 的 validate / render 邏輯都是純計算，**不需要 Mockito**。

## 類別概述

設定相關型別的容器介面，包含 2 個 enum + 5 個 record。
此檔案是測試量最大的 data class，需拆為多個 `@Nested` 測試群組。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/data/SyncJobPropTest.java`

## Mock 策略

全部不需 mock，使用真實 record instance。

---

## Test Cases

### A. ExecutionType.validate() — INSERT

| Test | Scenario | Assertion |
|---|---|---|
| `INSERT_validate_missingDestTable_throws` | `destTable` blank | `IllegalArgumentException` containing `"must config destTable"` |
| `INSERT_validate_zeroFetchSize_throws` | `fetchSize` = 0 | `IllegalArgumentException` containing `"fetchSize"` |
| `INSERT_validate_zeroBatchSize_throws` | `batchSize` = 0 | `IllegalArgumentException` containing `"batchSize"` |
| `INSERT_validate_missingSourceDB_throws` | `database.source` null | `IllegalArgumentException` containing `"database source"` |
| `INSERT_validate_missingDestDB_throws` | `database.dest` null | `IllegalArgumentException` containing `"database source"` (⚠️ typo in source) |
| `INSERT_validate_withRecordTable_missingRecordDB_throws` | `recordTable` 有值 + `record` null | `IllegalArgumentException` containing `"database record"` |
| `INSERT_validate_withRecordTable_invalidRecordDB_throws` | `recordTable` 有值 + `record.driver` blank | `IllegalArgumentException` containing `"driver"` |
| `INSERT_validate_validConfig_noException` | 正確完整設定 | 不拋例外 |

**建構測試所需的 helper**:

```java
// 建立合法的 Setting
private SyncJobProp.Setting validSetting() {
    return new SyncJobProp.Setting(100, 50, -1, null);
}

// 建立合法的 ConnectionInfo
private SyncJobProp.ConnectionInfo validConnection() {
    return new SyncJobProp.ConnectionInfo("org.h2.Driver", "jdbc:h2:mem:test", "sa", "sa");
}

// 建立合法的 Database
private SyncJobProp.Database validDatabase() {
    return new SyncJobProp.Database(validConnection(), validConnection(), null);
}

// 建立合法的 Execution
private SyncJobProp.Execution validInsertExecution() {
    return new SyncJobProp.Execution(
        SyncJobProp.ExecutionType.INSERT, "test", "SELECT 1", "MY_TABLE",
        List.of(), null, null, null);
}
```

### B. ExecutionType.validate() — UPDATE / UPSERT

INSERT、UPDATE、UPSERT 的驗證邏輯**完全相同**，至少挑 1~2 個代表性 case 驗證 UPDATE 和 UPSERT 與 INSERT 行為一致。

| Test | Scenario |
|---|---|
| `UPDATE_validate_validConfig_noException` | 完整設定 |
| `UPSERT_validate_missingDestTable_throws` | destTable blank |

### C. ExecutionType.validate() — DELETE

| Test | Scenario | Assertion |
|---|---|---|
| `DELETE_validate_missingDestTable_throws` | `destTable` blank | `IllegalArgumentException` |
| `DELETE_validate_zeroBatchSize_throws` | `batchSize` = 0 | `IllegalArgumentException` |
| `DELETE_validate_missingDestDB_throws` | `database.dest` null | `IllegalArgumentException` |
| `DELETE_validate_validConfig_noException` | 正確設定 | 不拋例外 |

### D. ExecutionType.validate() — EXECUTE

| Test | Scenario | Assertion |
|---|---|---|
| `EXECUTE_validate_missingDestDB_throws` | `database.dest` null | `IllegalArgumentException` |
| `EXECUTE_validate_validConfig_noException` | 正確設定 | 不拋例外 |

### E. ExecutionType.exceptionPrefix()

| Test | Scenario | Assertion |
|---|---|---|
| `exceptionPrefix_INSERT_returnsCorrect` | | `"with INSERT execution"` |

### F. Execution.validate()

| Test | Scenario | Assertion |
|---|---|---|
| `validate_blankSql_throws` | `sql` blank | `IllegalArgumentException("sql can not be blank")` |
| `validate_missingParameter_throws` | SQL 有 `:myParam` 但 parameters 為空 | `IllegalArgumentException("lost parameter config: myParam")` |
| `validate_validSqlWithParams_noException` | SQL `:myParam` + parameters 包含 `myParam` | 不拋例外 |
| `validate_sqlWithoutNamedParams_noException` | SQL 無 named params | 不拋例外 |

### G. Execution.parameters()

| Test | Scenario | Assertion |
|---|---|---|
| `parameters_null_returnsEmptyList` | parameters 為 null | 回傳 empty list |
| `parameters_notNull_returnsSameList` | parameters 有值 | 回傳原值 |

### H. Parameter.getRenderedValue()

| Test | Scenario | Assertion |
|---|---|---|
| `getRenderedValue_typeNull_usesGeneral` | type null → 回傳原值 | 原值 |
| `getRenderedValue_typeGeneral_returnsAsIs` | general → 回傳原值 | 原值 |
| `getRenderedValue_typeTimestamp_convertsCorrectly` | `"2024-01-01 00:00:00"` → `Timestamp` | `Timestamp.valueOf(...)` |

### I. SupportType.renderClass()

| Test | Scenario | Assertion |
|---|---|---|
| `general_renderClass_returnsOriginalValue` | 傳入 `"hello"` | `"hello"` |
| `timestamp_renderClass_validString_returnsTimestamp` | `"2024-01-01 00:00:00"` | `Timestamp` instance |
| `timestamp_renderClass_invalidString_throws` | `"not-a-date"` | `IllegalArgumentException` |

### J. ConnectionInfo.validate()

| Test | Scenario | Assertion |
|---|---|---|
| `validate_blankDriver_throws` | driver blank | `IllegalArgumentException("driver can not be blank")` |
| `validate_blankUrl_throws` | url blank | `IllegalArgumentException("url")` |
| `validate_blankUsername_throws` | username blank | `IllegalArgumentException("username")` |
| `validate_blankPassword_throws` | password blank | `IllegalArgumentException("password")` |
| `validate_allPresent_noException` | 全部有值 | 不拋例外 |

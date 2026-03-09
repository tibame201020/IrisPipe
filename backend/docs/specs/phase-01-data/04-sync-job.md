# Phase 1-4: SyncJob

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.data.SyncJob`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/data/SyncJob.java`

## 策略: A. 純邏輯測試

> validate() 是純驗證邏輯，不涉及 I/O，**不需要 Mockito**。使用真實 record instance。

## 類別概述

Job 定義的根物件，包含 `validate()` 驗證方法。

## 類別原始碼

```java
@Data
public class SyncJob {
    String jobName;
    List<SyncJobProp.Execution> executions;
    SyncJobProp.Setting setting;
    SyncJobProp.Database database;

    public void validate() {
        if (StringUtils.isBlank(jobName)) {
            throw new ConfigValidationException("", "", "jobName can not be blank");
        }
        executions.forEach(execution -> {
            try {
                execution.validate(setting, database);
            } catch (Exception e) {
                String name = execution.name();
                String executionName = StringUtils.isBlank(name) ? "on type " + execution.type() : name;
                throw new ConfigValidationException(jobName, executionName, e.getMessage());
            }
        });
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/data/SyncJobTest.java`

## 相依

- `SyncJobProp.Execution` (record) — 需用真實 instance
- `ConfigValidationException`

## Mock 策略

不需 mock，使用真實 `Execution` record。
建立一個 helper 方法 `createValidExecution()` 回傳合法的 Execution。

## Test Cases

### 1. `validate_blankJobName_throwsConfigValidationException`

**行為**: `jobName` 為 null 或 blank → 拋出 `ConfigValidationException`。

```java
SyncJob syncJob = new SyncJob();
syncJob.setJobName("");
syncJob.setExecutions(List.of());
assertThrows(ConfigValidationException.class, syncJob::validate);
```

### 2. `validate_validConfig_noException`

**行為**: 完整正確設定，不拋例外。
需要建立完整的 Setting + Database + Execution 結構。

### 3. `validate_executionValidationFails_wrapsWithJobAndExecutionName`

**行為**: Execution 驗證失敗時，拋出的 `ConfigValidationException` 包含 `jobName` 和 `executionName`。

```java
// 故意建立一個缺少 destTable 的 INSERT Execution
SyncJob syncJob = new SyncJob();
syncJob.setJobName("testJob");
syncJob.setExecutions(List.of(invalidExecution));
// ...
ConfigValidationException ex = assertThrows(ConfigValidationException.class, syncJob::validate);
assertEquals("testJob", ex.getJobName());
```

### 4. `validate_executionWithoutName_usesTypeAsExecutionName`

**行為**: Execution name 為 null/blank → `executionName` 使用 `"on type INSERT"` 格式。

```java
SyncJobProp.Execution exec = new SyncJobProp.Execution(
    SyncJobProp.ExecutionType.INSERT, null, ...);
// 觸發驗證失敗
ConfigValidationException ex = assertThrows(ConfigValidationException.class, syncJob::validate);
assertTrue(ex.getExecutionName().contains("on type INSERT"));
```

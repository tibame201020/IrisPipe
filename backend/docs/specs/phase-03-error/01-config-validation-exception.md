# Phase 3-1: ConfigValidationException

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.error.exception.ConfigValidationException`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/error/exception/ConfigValidationException.java`

## 策略: A. 純邏輯測試

> 只有 getMessage() 格式化邏輯和 getter，**不需要 Mockito**。

## 類別原始碼

```java
@Getter
public class ConfigValidationException extends RuntimeException {
    private final String jobName;
    private final String executionName;
    private final String message;

    public ConfigValidationException(String jobName, String executionName, String message) {
        this.jobName = jobName;
        this.executionName = executionName;
        this.message = message;
    }

    @Override
    public String getMessage() {
        if (StringUtils.isNotBlank(jobName) && StringUtils.isBlank(executionName)) {
            return message;
        }
        String template = "job: %s, execution: %s, error: %s";
        return String.format(template, jobName, executionName, message);
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/error/exception/ConfigValidationExceptionTest.java`

## Test Cases

### 1. `getMessage_withJobAndExecution_formatsCorrectly`
`new ConfigValidationException("myJob", "myExec", "bad")` → `"job: myJob, execution: myExec, error: bad"`

### 2. `getMessage_jobNotBlank_executionBlank_returnsMessageOnly`
`new ConfigValidationException("myJob", "", "bad")` → `"bad"`

### 3. `getMessage_bothBlank_formatsWithBlanks`
`new ConfigValidationException("", "", "bad")` → `"bad"`
（因為 jobName blank → `isNotBlank` 為 false → 走 else branch → format 帶空字串）
⚠️ 實際上 `jobName` blank 時 `isNotBlank(jobName)` 為 false，所以走 format 路徑：`"job: , execution: , error: bad"`

### 4. `getters_returnCorrectValues`
驗證 `getJobName()`, `getExecutionName()`, `getMessage()` 各回傳正確值（注意 `getMessage()` 有 override）。

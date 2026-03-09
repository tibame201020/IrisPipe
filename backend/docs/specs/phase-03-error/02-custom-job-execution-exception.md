# Phase 3-2: CustomJobExecutionException

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.error.exception.CustomJobExecutionException`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/error/exception/CustomJobExecutionException.java`

## 策略: A. 純邏輯測試

> 只有 getMessage() 格式化邏輯，**不需要 Mockito**。

## 類別原始碼

```java
@Getter
public class CustomJobExecutionException extends RuntimeException {
    private final String jobName;
    private final String message;

    public CustomJobExecutionException(String jobName, String message) {
        this.jobName = jobName;
        this.message = message;
    }

    @Override
    public String getMessage() {
        String template = "jobName: %s, error: %s";
        return String.format(template, jobName, message);
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/error/exception/CustomJobExecutionExceptionTest.java`

## Test Cases

### 1. `getMessage_formatsWithJobNameAndError`
`new CustomJobExecutionException("job1", "timeout")` → `"jobName: job1, error: timeout"`

### 2. `getters_returnCorrectValues`
`getJobName()` → `"job1"`, raw `message` field → `"timeout"`

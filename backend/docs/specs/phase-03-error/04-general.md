# Phase 3-4: General

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.error.exception.General`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/error/exception/General.java`

## 策略: A. 純邏輯測試

> 純建構 + getter，**不需要 Mockito**。

## 類別原始碼

```java
public interface General {
    @Getter
    class GeneralException extends RuntimeException {
        private final boolean isServerError;
        private final String message;

        public GeneralException(boolean isServerError, String message) {
            this.isServerError = isServerError;
            this.message = message;
        }
    }

    record GeneralExceptionResponse(String message) {}
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/error/exception/GeneralTest.java`

## Test Cases

### 1. `generalException_serverError_isServerErrorTrue`
`new GeneralException(true, "internal")` → `isServerError()` = `true`

### 2. `generalException_clientError_isServerErrorFalse`
`new GeneralException(false, "bad request")` → `isServerError()` = `false`

### 3. `generalExceptionResponse_message`
`new GeneralExceptionResponse("error msg")` → `message()` = `"error msg"`

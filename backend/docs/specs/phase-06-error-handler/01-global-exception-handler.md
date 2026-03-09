# Phase 6-1: GlobalExceptionHandler

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.error.handler.GlobalExceptionHandler`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/error/handler/GlobalExceptionHandler.java`

## 策略: A+D (直接呼叫 + 僅 mock MethodArgumentNotValidException)

> 大部分 handler 可直接 `new GlobalExceptionHandler()` 呼叫，只有 `MethodArgumentNotValidException` 需 mock `BindingResult`。

## 類別概述

`@RestControllerAdvice` 全域例外處理器，將不同例外映射為對應的 HTTP Status Code。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/error/handler/GlobalExceptionHandlerTest.java`

## Mock 策略

直接 `new GlobalExceptionHandler()` 呼叫各 `handle()` 方法。
`MethodArgumentNotValidException` 較特殊，需 mock `BindingResult` 和 `FieldError`。

## Test Cases

### 1. `handle_ConfigValidationException_returns400`
回傳 `ResponseEntity<Map>`, status=400, body 包含 `jobName`, `executionName`, `message`

### 2. `handle_CustomJobExecutionException_returns500`
回傳 status=500, body 為 `GeneralExceptionResponse`

### 3. `handle_GeneralException_serverError_returns500`
`isServerError=true` → 500

### 4. `handle_GeneralException_clientError_returns400`
`isServerError=false` → 400

### 5. `handle_RuntimeException_returns500`
fallback → 500

### 6. `handle_ResponseStatusException_returnsMatchingStatus`
`new ResponseStatusException(HttpStatus.NOT_FOUND, "not found")` → 404

### 7. `handle_MethodArgumentNotValid_returns400`
mock `MethodArgumentNotValidException`:
```java
FieldError fieldError = new FieldError("obj", "fieldName", "must not be null");
// mock e.getFieldErrors() → List.of(fieldError)
```
→ 400, body 包含 `{"fieldName": "must not be null"}`

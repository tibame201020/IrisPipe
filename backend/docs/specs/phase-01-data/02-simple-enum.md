# Phase 1-2: SimpleEnum

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.data.SimpleEnum`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/data/SimpleEnum.java`

## 策略: A. 純邏輯測試

> 純列舉值驗證，**不需要 Mockito**。

## 類別概述

定義系統用列舉值的容器介面，包含三個 enum：
- `GeneralStatus`: `Success`, `Fail`
- `SystemProvideVariable`: `_LAST_WATERMARK`, `_LAST_START`, `_LAST_END`, `_LAST_UPDATE`
- `SummaryInfoLayer`: `JOB`, `STEP`

## 類別原始碼

```java
public interface SimpleEnum {
    enum GeneralStatus {Success, Fail}

    enum SystemProvideVariable {
        _LAST_WATERMARK, _LAST_START, _LAST_END, _LAST_UPDATE
    }

    enum SummaryInfoLayer {
        JOB, STEP
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/data/SimpleEnumTest.java`

## 相依

無。

## Mock 策略

無需 mock。

## Test Cases

### 1. `generalStatus_shouldHaveSuccessAndFail`
驗證 `GeneralStatus.values()` 長度為 2，包含 `Success` 和 `Fail`。

### 2. `systemProvideVariable_shouldHaveFourValues`
驗證 `SystemProvideVariable.values()` 長度為 4，包含所有 4 個值。

### 3. `summaryInfoLayer_shouldHaveJobAndStep`
驗證 `SummaryInfoLayer.values()` 長度為 2，包含 `JOB` 和 `STEP`。

### 4. `systemProvideVariable_valueOf_shouldResolveCorrectly`
`SystemProvideVariable.valueOf("_LAST_WATERMARK")` 應回傳 `_LAST_WATERMARK`。
`SystemProvideVariable.valueOf("INVALID")` 應拋出 `IllegalArgumentException`。

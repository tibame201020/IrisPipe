# Phase 3-3: ConfigFileException

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.error.exception.ConfigFileException`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/error/exception/ConfigFileException.java`

## 策略: A. 純邏輯測試

> 純 getter，**不需要 Mockito**。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/error/exception/ConfigFileExceptionTest.java`

## Test Cases

### 1. `getters_returnCorrectValues`
`new ConfigFileException("/path/to/config.json", "file not found")` → `getConfigPath()` = `"/path/to/config.json"`, `getMessage()` = `"file not found"`

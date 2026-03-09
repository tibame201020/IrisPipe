# Phase 4-1: JsonFileProvider

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.provider.JsonFileProvider`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/provider/JsonFileProvider.java`

## 策略: B. 實體 I/O (@TempDir + 真實 ObjectMapper)

> 檔案讀取 + 序列化，用 `@TempDir` 建暫存檔 + 真實 `ObjectMapper`，**不需要 Mockito**。

## 類別概述

實作 `FileProvider` 介面，使用 Jackson `ObjectMapper` 讀取 JSON 檔案。
建構子注入 `ObjectMapper`。支援 `.json` 副檔名。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/provider/JsonFileProviderTest.java`

## 相依

- `ObjectMapper` — 使用 **真實 instance**（`new ObjectMapper().registerModule(new JavaTimeModule())`）

## Mock 策略

不 mock ObjectMapper，使用真實序列化。搭配 `@TempDir` 建立暫存檔案。

## Test Cases

### 1. `supports_jsonFile_returnsTrue`
`supports(Path.of("config.json"))` → `true`

### 2. `supports_yamlFile_returnsFalse`
`supports(Path.of("config.yaml"))` → `false`

### 3. `supports_upperCaseJson_returnsTrue`
`supports(Path.of("config.JSON"))` → `true`（因為 `toLowerCase`）

### 4. `readPathContent_validFile_returnsContent`
建立暫存 JSON 檔案 → `readPathContent(path)` 回傳內容。

### 5. `readPathContent_missingFile_throwsRuntimeException`
不存在的路徑 → `RuntimeException`，message 包含 `"Failed read content"`

### 6. `readPathToClass_validJson_deserializes`
```json
{"name": "test", "value": 42}
```
→ 反序列化為指定的 TypeReference 物件。

### 7. `readPathToClass_invalidJson_throwsRuntimeException`
`"not valid json"` → `RuntimeException`

### 8. `convertContentToClass_validString_deserializes`
傳入 JSON 字串（非 Path）→ 反序列化成功。

### 9. `convertContentToClass_invalidString_throwsRuntimeException`
傳入非 JSON 字串 → `RuntimeException`

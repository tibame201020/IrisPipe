# Phase 4-2: YamlFileProvider

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.provider.YamlFileProvider`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/provider/YamlFileProvider.java`

## 策略: B. 實體 I/O (@TempDir + 真實 ObjectMapper)

> 檔案讀取 + 序列化，用 `@TempDir` + 真實 `ObjectMapper(YAMLFactory)`，**不需要 Mockito**。

## 類別概述

實作 `FileProvider` 介面，注入 `ObjectMapper(YAMLFactory)`。支援 `.yaml` 和 `.yml` 副檔名。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/provider/YamlFileProviderTest.java`

## 相依

- `ObjectMapper(new YAMLFactory())` — 使用 **真實 instance**

## Mock 策略

同 JsonFileProvider，搭配 `@TempDir`。

## Test Cases

### 1. `supports_yamlFile_returnsTrue`
### 2. `supports_ymlFile_returnsTrue`
### 3. `supports_jsonFile_returnsFalse`
### 4. `readPathContent_validFile_returnsContent`
### 5. `readPathContent_missingFile_throwsRuntimeException`
### 6. `readPathToClass_validYaml_deserializes`
### 7. `readPathToClass_invalidYaml_throwsRuntimeException`
### 8. `convertContentToClass_validString_deserializes`
### 9. `convertContentToClass_invalidString_throwsRuntimeException`

> 邏輯與 JsonFileProvider 對稱，僅差異在 ObjectMapper 使用 YAML factory 和 supports() 判斷副檔名。

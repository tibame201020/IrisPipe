# Phase 5-1: JobConfigService

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.service.JobConfigService`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/service/JobConfigService.java`

## 策略: D. 輕量 Mock

> 內部委派 FileProvider，mock provider 驗證路由邏輯。

## 類別概述

讀取設定檔（JSON/YAML），透過 `getFileProvider()` 自動選擇對應的 Provider。

## 類別原始碼概要

```java
@Service
public class JobConfigService {
    private final JsonFileProvider jsonFileProvider;
    private final YamlFileProvider yamlFileProvider;

    public List<SyncJob> getSyncJobs(Path path) {
        FileProvider fileProvider = getFileProvider(path);
        return fileProvider.readPathToClass(path, new TypeReference<>() {});
    }

    public List<SyncJob> getSyncJobs(String configFilePath) {
        return getSyncJobs(Path.of(configFilePath));
    }

    private FileProvider getFileProvider(Path path) {
        if (jsonFileProvider.supports(path)) return jsonFileProvider;
        if (yamlFileProvider.supports(path)) return yamlFileProvider;
        throw new IllegalArgumentException("not support file provider with " + path);
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/service/JobConfigServiceTest.java`

## Mock 策略

- `@Mock JsonFileProvider jsonFileProvider`
- `@Mock YamlFileProvider yamlFileProvider`
- `@InjectMocks JobConfigService jobConfigService`

## Test Cases

### 1. `getSyncJobs_jsonPath_usesJsonProvider`
`jsonFileProvider.supports()` 回傳 true → 呼叫 `jsonFileProvider.readPathToClass()`

### 2. `getSyncJobs_yamlPath_usesYamlProvider`
`yamlFileProvider.supports()` 回傳 true → 呼叫 `yamlFileProvider.readPathToClass()`

### 3. `getSyncJobs_unsupportedExtension_throwsIllegalArgument`
兩者 `supports()` 都回傳 false → `IllegalArgumentException`

### 4. `getSyncJobs_stringOverload_delegatesToPathVersion`
呼叫 `getSyncJobs("config.json")` → 驗證底層 `jsonFileProvider.readPathToClass(Path.of("config.json"), ...)` 被呼叫

### 5. `getSyncJobs_ymlPath_usesYamlProvider`
`.yml` 副檔名 → 使用 YamlFileProvider

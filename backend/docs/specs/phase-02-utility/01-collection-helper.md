# Phase 2-1: CollectionHelper

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.utility.CollectionHelper`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/utility/CollectionHelper.java`

## 策略: A. 純邏輯測試

> 靜態工具方法，純遞迴邏輯，**不需要 Mockito**。

## 類別概述

靜態工具方法 `flatternArray(Object[])`，遞迴攤平包含 `List` 的嵌套陣列。

## 類別原始碼

```java
public class CollectionHelper {
    public static List<Object> flatternArray(Object[] params) {
        List<Object> flattenedList = new ArrayList<>();
        for (Object param : params) {
            if (param instanceof List<?> nestedParams) {
                flattenedList.addAll(flatternArray(nestedParams.toArray()));
            } else {
                flattenedList.add(param);
            }
        }
        return flattenedList;
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/utility/CollectionHelperTest.java`

## Mock 策略

無需 mock。

## Test Cases

### 1. `flatternArray_simpleArray_returnsFlat`
`[1, 2, 3]` → `[1, 2, 3]`

### 2. `flatternArray_nestedList_returnsFlat`
`[1, List.of(2, 3), 4]` → `[1, 2, 3, 4]`

### 3. `flatternArray_deepNested_returnsFlat`
`[1, List.of(2, List.of(3, 4))]` → `[1, 2, 3, 4]`

### 4. `flatternArray_emptyArray_returnsEmpty`
`[]` → `[]`

### 5. `flatternArray_singleElement_returnsSingle`
`[42]` → `[42]`

### 6. `flatternArray_mixedTypes_handlesCorrectly`
`["hello", List.of(1, 2), true]` → `["hello", 1, 2, true]`

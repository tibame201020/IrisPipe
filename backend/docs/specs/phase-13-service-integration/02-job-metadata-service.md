# Phase 13-2: JobMetadataService

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.service.JobMetadataService`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/service/JobMetadataService.java`

## 策略: C. 嵌入式 DB 測試 (H2 DB)

> 涉及底層 Repository 複雜的關聯性批次刪除 (deleteAllByIdInBatch) 與複合主鍵 (BatchJobExecutionParams) 操作，必須使用 H2 資料庫真實環境來驗證 Transactional 與 Delete 行為。

## 類別概要

提供手動清理或撈取 Spring Batch 資料庫 Metadata 的獨立服務。為了解決 JPA 的 N+1 Query，採取代碼拆解批次刪除 (`deleteAllByIdInBatch`) 以提高效能。同時提供了找尋對應 JobKey 的關聯查詢。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/service/JobMetadataServiceTest.java`

## Test Cases (與 Repository Layer 的整合)

### 1. `getJobKeyByJobId_jobExists_returnsJobKey`
先利用 Repository 存入一個 `BatchJobInstance` (ID=1)，接著 `getJobKeyByJobId(1L)`，預期能撈出對應的 `jobKey` 字串。

### 2. `getJobKeyByJobId_jobNotFound_throwsResourceNotFoundException`
傳入不存在的 ID，預期拋出 `ResourceNotFoundException`，且 message 包含 "Job not found"。

### 3. `deleteByJobExecution_nullJobExecution_throwsException`
傳入 `null` 給 `deleteByJobExecution`，預期拋出 `ResourceNotFoundException`。

### 4. `deleteByJobExecution_validExecution_cascadesDeleteSuccessfully`
於 H2 資料庫中完整塞入一組關聯性的 Batch metadata（包含 Instance, Execution, StepExecution, StepExecutionContext, JobExecutionParams）。
呼叫 `deleteByJobExecution()` 後，驗證五張 Table 透過各個 Repo 的 `count()` 查詢皆歸零，無外鍵約束錯誤 (Foreign Key Constraint)。

# Feature 01: Core Transaction & Restartability
# 核心事務策略與中斷重試機制

## 1. 痛點與現狀分析
目前 IrisPipe 的批次處理作業（Spring Batch Job）採用了高度客製化的 **「全域原子性 (Atomic Job)」** 策略。
透過將目的端資料庫 (Dest DB) 的 `TransactionManager` 綁定在 `CustomJobListener` 上，確保整個 Job（可能橫跨數百個 Chunk 與多個 Tasklet）處於同一個關聯式資料庫的事務 (Transaction) 中。
* **優點**：對於中小型資料量（百萬筆以內），這是完美的「全有或全無 (All-or-Nothing)」設計。使用者不需要處理「寫入一半失敗」的復原問題，髒資料永遠不會被 Commit。
* **痛點 (平台化瓶頸)**：當同步量達到 5000 萬筆甚至上億筆時，長時間且巨大的 Transaction 會導致：
  1. **Undo/Redo Log 塞爆**：資料庫交易紀錄無限制長大，可能寫滿硬碟。
  2. **Memory OOM 與 Lock**：DB 長時間持有 Table/Row Lock，並消耗大量應用程式與資料庫的記憶體。
  3. **無法從斷點接續**：一旦在第 4999 萬筆網路不穩失敗，整個流程 Rollback，必須從第 1 筆重新開始，這在巨量資料情境是不現實的。
  4. **Watermark 髒寫 (Dirty Write) 破口**：在目前的 Atomic 實作中，`ExecutionStepListener.afterStep` 階段就把 Watermark 寫死了。若多個 Step 的 Job 中途崩潰，Dest DB 雖然 Rollback，但 Record DB 中的 Watermark 卻已前進，導致下次重跑發生嚴重的 **Data Loss**。

## 2. 目標與願景
身為平台級別的核心，**事務的控制權必須交還給使用者**。
* 支援 **Atomic 模式** (適合小資料量，絕對一致性)。
* 支援 **Chunk Commit 模式** (適合海量資料，分段提交，釋放資源)。
* 建立標準化的 **Restart (斷點重試)** API，允許中斷或失敗的 Job 接著最後成功的 Chunk 繼續執行。

## 3. 架構設計與實作規劃

### 3.1 抽象化 SyncJob 組態
在 `SyncJobProp.Setting` 中新增一個屬性：
```java
record Setting(
    Integer fetchSize,
    Integer batchSize,
    Integer deleteThreshold,
    String recordTable,
    Boolean isAtomicTransaction // [NEW] 預設為 true 以相容舊版
) {}
```
當 `isAtomicTransaction = false` 時，代表啟用 Spring Batch 原生的 Chunk-oriented processing。

### 3.2 事務管理器綁定邏輯 (SyncJobFactory 改造)
`SyncJobFactory.createBatchJob()` 必須根據 `isAtomicTransaction` 動態決定 Transaction 邊界：
* **Atomic 模式**：維持原樣，`CustomJobListener` 攔截 `beforeJob` 開啟 Transaction，並覆寫 Chunk 的 transactionManager 以避免單段 Commit。
* **Chunk Commit 模式**：
  * **不** 註冊帶有 Transaction 攔截的 `CustomJobListener`。
  * `StepBuilder` 直接使用 Spring 傳遞的 `PlatformTransactionManager` 或 `DataSourceTransactionManager`，讓 Spring Batch 在每一個 `chunk(batchSize, transactionManager)` 結束時自動 Commit 一次。
  * **注意**：因為分段 Commit，若中途失敗，Dest DB 將會留有一部份已寫入的資料。必須依賴 Restart 機制。

### 3.3 重啟機制 (Restartability & JobParameters)
Spring Batch 內建強大的斷點接續能力，前提是 **JobParameters 必須被嚴格保存且一致**。

**如何設計 Restart Endpoint:**
1. **API 定義**: `POST /api/v1/sync-job/executions/{executionId}/restart`
2. **Metadata 校驗**: `JobExecutionService` 透過 `JobExplorer` 撈出舊的 `JobExecution`。檢查其狀態是否為 `FAILED` 或 `STOPPED`。
3. **提取參數**: 從舊的 `JobExecution` 取出原先的 `JobParameters` (包含最初執行時的 run.id 以及 timestamp)。
4. **重新觸發**: 使用 `JobLauncher.run(job, oldJobParameters)`。
   * **Spring Batch 的魔法**：只要傳入 **一模一樣** 的 `JobParameters`，Spring Batch 會去 Metadata Table 發現這是一個曾失敗的 Execution 的子任務，它會自動讀取最後一個成功的 Chunk 狀態 (`ExecutionContext`)，然後跳過已經成功處理的行數（ItemReader 的 `readCount`），從失敗的那一筆繼續往下執行。

### 3.4 API 層面的持久化設計策略
* 當最初發起 `execute` 時，我們必須將原始的 Request 內容（例如 JSON 設定檔的內容，或 DB 中的 `SyncJobDef` ID）存放入 `JobParameters` 之中 (`addString("config.hash", ...)`)。
* 這確保在幾天後發起 Restart 時，系統能確保重壓的定義檔與當初發生錯誤時的定義是完全相同的，否則邏輯會錯亂。

### 3.5 浮水印 (Watermark) 持久化策略的雙軌設計
在解決上述的「Watermark 髒寫」問題，並同時引入 Chunk Commit 模式後，我們必須針對兩種模式提供完全不同的 Persistence 邊界防呆策略：

* **模式 A: Atomic Transaction (修補現有 Bug)**
  * **問題解法**: 將原先在 `ExecutionStepListener.afterStep` 寫死 DB 的動作移除！改為將各 Step 算出的 Watermark 結果，暫存在 Spring Batch 執行期的記憶體 (`JobExecutionContext`) 內。
  * **落地時機**: 延遲到 `CustomJobListener.afterJob` 確認狀態為 `COMPLETED`，且真正要發出 `transactionManager.commit()` 之前，才將蒐集好的所有 Watermark 一口氣寫進 Record Database 中。確保真正的生死與共 (All-or-Nothing)。

* **模式 B: Chunk Commit (全新的巨量分段模式)**
  * **特點**: 每一小批資料 (例如 1,000 筆) 完成時，Dest DB 就會真實 Commit 且釋放資源。此時如果中斷，系統依賴 Restart API 繼續處理接下來的資料。
  * **問題解法**: 在這個模式下，**絕對不能** 等到整個 Job 結束才寫入 Watermark。如果中途失敗，下次 Restart 雖然 Spring Batch 會透過 `readCount` 自動跳過已讀數量，但 Watermark 沒有跟著最新的資料前進，會導致 Source DB 不斷被撈出重複的舊資料。
  * **落地時機**: 必須掛載並實作 Spring Batch 原生的 `ItemWriteListener.afterWrite` 或 `ChunkListener.afterChunk`，提取剛完成的該批 Chunk 中的最新一筆 Watermark 值，**並緊貼著這一批次的 Dest DB Transaction 一同 Commit 寫入 DB**。這保證了每一段分次搬運的資料，都有對應的 Watermark 跟隨綁定。

## 4. 預期效益
* **解鎖天花板**：透過 Chunk Commit，就算執行十億筆的同步任務也不會拖垮資料庫的 Undo Space 與鎖表資源。
* **優雅的錯誤恢復 (Graceful Recovery)**：維運人員無須在程式碼層面寫複雜的 fallback 邏輯。網路崩潰後，只需點擊 API 發送 `/restart`，系統即會精準地從尚未 Commit 的第一個 Chunk 繼續搬運。這才是真正的企業級同步引擎。

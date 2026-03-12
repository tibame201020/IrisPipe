# Design Patterns

## 1. Watermark 機制 (Post-Phase 3)

Watermark 機制的核心邏輯維持不變，但在初始化階段略有變更：
- **初始化**：`JobExecutionService` 透過 `pipelineId` 從資料庫載入 Job 定義，並由 `SyncJobContextFactory` 進行上下文渲染。
- **變數處理**：`_LAST_WATERMARK` 等系統變數依然在執行前由 `ExecutionRecordService` 替換。

## 2. 正規化持久化策略

為了支援未來的 GUI 與重啟，系統對配置進行了全面正規化：
- **層級化儲存**：遺棄單一 LOB/JSON 儲存，改用關聯表確保數據結構嚴謹。
- **Content Hashing**：`iris_pipeline` 紀錄 SHA-256 哈希值，用於後續驗證配置的一致性。

## 3. 原子性交易與重啟鉤子

- **交易範圍**：預設為 JOB 等級原子性。
- **重啟鉤子**：在 `JobParameters` 中持久化 `pipeline.id`。這使得 Spring Batch 的 `JobExecution` 能夠在失敗重啟時，重新加載正確的資料庫定義，而非依賴當前的文件系統狀態。

## 4. SQL 自動建構 (SqlSyntaxHelper)

`SqlSyntaxHelper` 的職責依然是動態分析 Dest 資料庫的 MetaData。在持久化版本中，這些 SQL 依然是在運行時動態生成，而非靜態寫死在資料庫中（除非是使用者自定義的 `EXECUTE` 類型 SQL）。

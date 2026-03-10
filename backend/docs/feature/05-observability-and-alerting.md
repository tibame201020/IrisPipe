# Feature 04: Observability & Alerting
# 系統觀測性與異常警報機制

## 1. 痛點與現狀分析
目前的日誌 (Logs) 散落在主機 Console，或者依賴 `/api/v1/sync-job/executions` 透過 API 輪詢讀取狀態。
身為一個基礎設施平台，若使用者無法察覺異常（例如目標資料庫突然斷線，導致同步中段失敗），會對上下游依賴的業務造成無法挽回的髒資料災難。

## 2. 目標與願景
建構 **主動式** 與 **全方位透視** 的觀測平台。
* 提供開發者直觀 Dashboard 監控所有 Job 的讀寫速率 (Read/Write Rates) 和延遲。
* 在發生定義之「嚴重異常」時，主動推播至指定通訊軟體 (Webhooks)。

## 3. 架構設計與實作規劃

### 3.1 Prometheus & Grafana 整合 (大盤監控)
目前系統已具備 Spring Boot Actuator 與 Micrometer，但缺乏自定義指標。
1. **建立 Custom Metrics**：在 `ExecutionStepListener` 與 `ExecuteTasklet` 等核心節點，注入 `MeterRegistry`。
   * 將每次寫入成功的數量打成 metric：`Counter.builder("irispipe.records.written").tag("job", jobName).register(registry).increment(size);`
   * 將批次耗費時間打成 metric：`Timer.builder("irispipe.batch.duration")`
2. **Prometheus 端點曝露**：開放 `/actuator/prometheus` 供外部 Prometheus Server 定期抓取 (Scrape)。
3. **Grafana 視覺化**：繪製圖表展示：叢集活躍 Worker 數、當前 RPS (每秒同步筆數)、DB 連線池飽和度、以及 Job 失敗次數折線圖。

### 3.2 Notification & Webhook 機制 (主動警報)
利用現有的 `CustomJobListener`。當 `afterJob` 攔截到的狀態為 `FAILED` 或是 `UNKNOWN` 時：
1. **設計 Event Publisher**：拋出一個 Spring 的 `ApplicationEvent` (如 `SyncJobFailedEvent`)，以非同步 `@Async` 解耦發送邏輯，避免拖慢主執行緒。
2. **多頻道 Channel 支援**：實作可擴充的通知 Provider 介面 (`NotificationProvider`)。
   * **Slack/Teams Webhook**：將 Error Cause、JobName、發生時間與 Server IP 組裝為富文本卡片打往群組頻道。
   * **Email Server**：透過 `JavaMailSender` 寄發堆疊追蹤詳細信件。
3. **組態定義**：在新的 `Workspace` DB Schema 中建立 `Notification_Setting`，讓各團隊自訂要接收的 Endpoint 網址與層級 (只收 Error、或者連 Start/Complete 都要)。

## 4. 預期效益
* **降低 MTTR (Mean Time To Recovery)**：維運人員能在異常發生的第一秒內於 Slack 收到精確的錯誤原因 (例如 "ORA-00001 Unique Constraint Violated")，省去 SSH 進 VM 看 Log 的步驟。
* **效能瓶頸分析**：透過 Grafana 面板，輕易分析出哪些 Job 長期佔用資料庫的 I/O 時間，進而提早進行資料表索引 (Index) 調校，或調整 Chunk Size。

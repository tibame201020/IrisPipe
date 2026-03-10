# Feature 03: Distributed Architecture
# 分散式運算與高效能架構

## 1. 痛點與現狀分析
IrisPipe 目前採用單體 (Monolithic) 執行架構，所有的 SQL 讀取、資料過濾轉換 (Processor)、與寫入 (Writer) 都在同一個 JVM 的 Thread Pool 內執行。
* **資源天花板**：當面臨千萬級別甚至上億條紀錄的跨庫搬運時，單台機器的 Memory 及 CPU 很快就會成為瓶頸，甚至引發 OOM (Out of Memory)。
* **執行時間**：線性處理無法充分釋放底層 RDBMS 或是多節點 Sink 的並行寫入潛力。

## 2. 目標與願景
突破單機極限，實現 **Manager-Worker (主從式) 分散式架構**。將巨無霸的 Job 拆解成上百個 小 Partition，分發到叢集網路上的任意閒置節點並行運算。

## 3. 架構設計與實作規劃

### 3.1 核心技術選型
利用 Spring Batch 原生支援的分散式擴充技術：
* **Remote Chunking**：適合「I/O 密集型 (ItemWriter 慢)」。Master 讀取資料後，透過 Message Broker 將資料 Chunk 發給 Worker 寫入。
* **Remote Partitioning**：適合「巨量資料與全域運算」。Master 不讀資料，而是將「查詢範圍 (例如 ID 1~10000)」打包成 Request 放進 Message Broker，Worker 自己連線去 Source DB 讀取自己負責的範圍並寫入 Dest DB。

**建議路線：引入 Remote Partitioning + RabbitMQ (或 Kafka)**，因為資料庫遷移通常非常龐大，Master 節點不應承受所有的資料流動頻寬。

### 3.2 結構拆解圖 (Remote Partitioning)

```text
[ IrisPipe Manager (Master Node) ]
   |
   |-- 1. Partitioner: 讀取 Source DB，取得最大與最小 ID。
   |-- 2. 切分範圍:
   |      Partition0 (ID: 1 ~ 10,000)
   |      Partition1 (ID: 10,001 ~ 20,000) ...
   |-- 3. 送入 MQ (訊息佇列)

---> [ RabbitMQ / Kafka ] (Broker) <---

[ IrisPipe Worker Node 1 ]     [ IrisPipe Worker Node 2 ]
   |-- 收到 Partition0 任務         |-- 收到 Partition1 任務
   |-- 獨立讀取 1~10K              |-- 獨立讀取 10K~20K
   |-- 獨立寫入 Dest DB            |-- 獨立寫入 Dest DB
   |-- 回報狀態給 Metadata DB      |-- 回報狀態給 Metadata DB
```

### 3.3 服務與配置層改造策略
1. **抽離 Worker Profile**：在 Spring Boot 啟動時透過 `@Profile("worker")` 或 `@Profile("manager")` 決定節點身分。Worker 節點不啟動 API Controller 與排程器，只啟動 Message Listener 靜態等待分派。
2. **抽象 Partitioner 介面**：實作自訂的 `ColumnRangePartitioner`，允許使用者在 SyncJob 組態中指定 `partitionColumn` (例如主鍵 id) 與 `gridSize` (要切分幾個子任務)。
3. **改造 `SyncJobFactory`**：當檢測到 gridSize > 1 時，將自動組裝出一個 `PartitionStep` 而不是傳統的 Chunk 讀寫 Step。

## 4. 預期效益
* **水平擴展 (Horizontal Scalability)**：遇到大促銷或季底結算等海量資料同步，只要在 K8s 上多開幾台 Worker 容器，處理速度就能呈現線性增長。
* **容錯性提升**：如果某一台 Worker 在執行到一半時 OOM 崩潰，該 Partition 的任務將會被 MQ 重送至健康的 Worker，達到自動 Retry 的修復能力。

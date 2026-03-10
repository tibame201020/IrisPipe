# Feature 02: Scheduling & Orchestration
# 排程與自動化調度機制

## 1. 痛點與現狀分析
目前 IrisPipe 的批次處理作業（Spring Batch Job）屬於「被動觸發」模式。
要啟動同步任務，必須由外部人員或外部系統（像是 Jenkins, Airflow 或 CRON shell script）打一隻 `POST /api/v1/sync-job/execute` 的 API。這作為核心引擎沒有問題，但若作為獨立平台，缺乏內部時間軸與依賴調度的能力。

## 2. 目標與願景
賦予 IrisPipe **「內建的時鐘與大腦」**，使其具備：
* 自主驅動的定期執行能力 (Cron-based / Fixed-Rate Scheduling)。
* 任務之間的依賴性編排 (DAG - Directed Acyclic Graph) - 譬如 A 任務完成後才能觸發 B 任務。

## 3. 架構設計與實作規劃

### 3.1 核心技術選型
評估以下三種主流排程技術：
1. **Spring `@Scheduled` (輕量級)**: 最簡單，但不適合叢集化 (Clustered) 環境，若啟動三個 Pod 會有三個 Pod 同時跑到同一個排程 (需要額外引入 ShedLock 等工具解決)。
2. **Quartz Scheduler (企業級)**: 老牌且支援 Cluster 模式，能將 trigger 鎖放在資料庫，保證高可用且不會重複執行。
3. **Task Scheduling 外部化 (Airflow / Temporal)**: 讓 IrisPipe 專注於 Worker 角色，調度交給更專業的平台。

**建議路線：整合叢集化的 Quartz Scheduler**，因為它輕量且與 Spring Boot 整合度極佳，不需額外架設龐大的 Airflow 即可達成完整平台化。

### 3.2 資料庫 Schema 擴充
在前一階 `Sync_Job_Def` 中，新增 Trigger 相關欄位：
```sql
ALTER TABLE SYNC_JOB_DEF ADD COLUMN cron_expression VARCHAR(100);
ALTER TABLE SYNC_JOB_DEF ADD COLUMN is_active BOOLEAN DEFAULT FALSE;
```
另外建立依賴關係表：
```sql
CREATE TABLE JOB_DEPENDENCY (
   upstream_job_id BIGINT,
   downstream_job_id BIGINT
);
```

### 3.3 元件互動生命週期
1. **排程註冊 (Registration)**: 當使用者於介面上設定 `cron_expression` 且啟動排程時，`JobConfigService` 會呼叫 `QuartzService`，將 JobKey 寫入 Quartz 的 DB。
2. **觸發器引爆 (Trigger Fired)**: 時間到達，Quartz 發起一個 `QuartzJobBean`。
3. **無縫串接 (Delegation)**: 該 Bean 內部呼叫我們現有的 `JobExecutionService.execute` 方法，完全重複利用現有的 Spring Batch 基礎設施。
4. **後置處理 (Post-Processing)**: 我們現有的 `CustomJobListener.afterJob` 會被強化，當攔截到 Job State 為 `COMPLETED` 時，去依賴關係表查詢是否有 Downstream Job 需要觸發，進而實作 DAG 工作流。

## 4. 預期效益
* **單一平台體驗**：使用者不需要打開 Windows 工作排程器或是編寫 Crontab 腳本，就能在同一個平台上設定每日同步、每小時同步。
* **增強可靠度**：結合 Quartz 的叢集鎖機制，即使某個 IrisPipe 實例掛掉，其他實例也會自動接手 Trigger，達到 Zero Downtime。

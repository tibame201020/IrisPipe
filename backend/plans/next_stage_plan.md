# IrisPipe Refactoring and Next Stage Plan

## 1. 最終目標 (Target Goals)
現階段的核心目標是為了將系統的運作單元進行更細緻的控制與靈活擴充，主要預計支援以下功能：
- **Chunk Commit (AtomicLevel: CHUNK)**：改用 Spring Batch 原生的 Chunk Commit 機制來處理資料分批提交。
  - **架構決策：依賴 Spring Batch 原生 Restart 機制，不使用客製化 `ChunkListener` 更新 Watermark**
    我們決議「不去」寫自定義的 `ChunkListener` 來即時處理 Watermark 或 Chunk offset，因為我們**要保留原有的架構優勢：亦即只在 `Job COMPLETED` 時才將 Watermark 持久化（At-Least-Once 隔離機制）**。對於失敗的 Job，我們完全接受並依賴 Spring Batch 原生的 Restart 機制與 Skip 行為。
- **Support Restart Job**：基於上述架構，要讓 Spring Batch 的 Restart 機制能順利跨節點或跨重啟運作，我們必須確保 **Job Parameter** 能夠精準傳遞與重構。

## 2. 衍生需求：Job Configuration Persistence
為了解決 Restart 時能精準傳遞與重構 Job Parameter 的問題，原本單純依靠讀取檔案 (`yaml`, `json`) 配置來啟動 Job 的方式存在斷層。
這衍生出了核心需求：**Job Configuration 必須進行持久化 (Persistence)**。只有將任務的原始配置轉為 Entity 存放至資料庫中，在觸發 Restart JobInstance 時，我們才能從 DB 完整還原最初的環境與 Parameter，讓 Spring Batch 接手剩餘的 Chunk 處理。

## 3. 重構前置作業：分層與命名梳理
在準備把 YAML 配置與任務狀態轉為 Database Persistence (Entity) 之前，我們遇到了一個結構性的技術債：目前的 package 設計、命名（例如 repository 習慣簡寫為 repo）、class、interface、enum，以及原本單純用於 `data render` 的資料結構（現需擴充為 Entity），全部混淆在 `src\main\java\custom\tibame201020\IrisPipe\data` 等目錄下。
這牽涉到整個 Application 範疇的分級規劃。如果不先將這些包結構、類別定義、依賴語意對齊一致（確保語意正確且應用程式內外一致），後續加入 Persistence 時會導致架構嚴重崩壞與耦合。

## 4. 重構保險繩：K6 驗證腳本的收束
因為分層與命名的清理會動到「整個 Application 的根基與依賴」，隨意重構極易大範圍破壞系統邏輯。
為了確保重構後功能不發生異常，**必須先建立 K6 E2E 驗證機制作為保險**。
- 單元測試先暫緩是因為未來 Core Engine 等模組會有大規模重構，投資報酬率暫時較低。
- 透過 K6 進行 Input / Output (DB / API) 的端到端驗證是最具效益的防護網，確保重構前後系統的商務邏輯與邊界行為完全一致。

## 5. K6 驗證的落實情境與當前進度 (Current Status & Issues)

### 預期需驗證的情境清單
1. **Sync Config 的所有驗證**：建立、更新、刪除設定檔的一連串完整流程（不得寫死 ID/Path，需依賴 response，且測試 Config 格式需符合後端規定）。
2. **Sync Job 的執行 Success 驗證**：正常同步資料的情境。
3. **Sync Job 的 Watermark Success 驗證**：基於時間戳或欄位進行增量同步的情境。
4. **Atomic Job 的 Failure 驗證 (JOB level)**：任務出現異常時，確認 Job 級別的 rollback 機制。
5. **Sync Job 的 Watermark Failure 驗證**：帶有 Watermark 的任務失敗時的狀態驗證。
6. *(Pending)* **Atomic Level CHUNK Failure**：保留至之後實作時進行驗證。

### 當前處理進度與遇到的 Issue
- **目前進度**：
  - K6 測試資料夾已模組化與獨立 (`k6/testfiles` 儲存 Payload，抽離 service api 呼叫檔案)。
  - 已發現先前導致 Sync Config API 拋出 `400 Bad Request` 的問題，**並非 Server 端的錯**。而是測試用的 `.yml` 檔案內部缺少 `executions` 節點，且 H2 DB 密碼寫作了 `password: ""` 或 `type: TIMESTAMP` 大寫格式，導致無法通過 Spring Boot 嚴格的反序列化與校驗。
  - 目前已經透過 PowerShell **完全修正 K6 的測試資料 (YAML payloads)**，且不再碰觸任何 Spring Boot 的原始碼變更，Config API 已可正常建立接收。

- **待解決的 Issue (Next Actions)**：
  - **進一步對齊 K6 與 Server 的預期行為**：儘管目前 `sync-config` 腳本 HTTP 回應都能順利達到 200/201 狀態碼了，但在執行完整 `run-tests.ps1` 退版測試時，部分 K6 腳本內的斷言 (`checks`) 仍然標示出失敗狀態（例如 `sync-job-success.test.js` 有 assertions fail）。
  - **下次需要接手執行的動作**：逐一檢視 K6 當中那些發生斷言失敗 (`checks_failed`) 的指令碼，確認其是因為「Server的既有邏輯和腳本當初預想有落差」，還是「腳本抓資料的結構錯誤」。直接調整或跳過 K6 的斷言 (`skip`) 來適配目前 Server 端的真實行為，讓所有 K6 測試綠燈通過，以此建立出最正確的防護網基線。

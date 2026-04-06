# Frontend Context

## 專案結構

```
frontend/src/
├── App.tsx                       路由配置（React Router v7）
├── main.tsx
├── index.css
├── assets/
├── components/
│   ├── GraphEngine/
│   │   ├── PipelineCanvas.tsx    React Flow 圖表（目前未在主流程中使用）
│   │   ├── StatusNode.tsx
│   │   └── AuditEdge.tsx
│   ├── EmptyState.tsx
│   ├── LoadingState.tsx
│   ├── StatusBadge.tsx
│   ├── StageLaneBoard.tsx        ← Stage 泳道視覺化（Config + Run Detail 共用）
│   ├── PipelineImportDialog.tsx
│   └── PageToolbar.tsx
├── layout/
│   ├── ConsoleLayout.tsx         主框架（Sidebar + Header）
│   ├── ConsoleHeader.tsx
│   ├── ConsoleSidebar.tsx
│   ├── PipelineWorkspaceLayout.tsx  Pipeline 工作區外層（傳遞 Outlet Context）
│   └── PipelineRunsLayout.tsx
├── pages/
│   ├── OverviewPage.tsx          Dashboard
│   ├── PipelineExplorerPage.tsx  資料夾/Pipeline 瀏覽器
│   ├── PipelineConfigPage.tsx    Pipeline 設定編輯器（新建 & 編輯）
│   ├── PipelineRunsPage.tsx      執行歷史列表
│   ├── RunDetailPage.tsx         單次執行詳情
│   └── SettingsPage.tsx
├── lib/
│   ├── api.ts                    所有 API 呼叫（Axios）
│   ├── date.ts                   日期格式化工具
│   ├── tree.ts                   樹狀結構工具
│   └── pipeline-draft.ts         Pipeline 編輯狀態管理（draft → payload 轉換）
├── state/
│   ├── theme.tsx                 ThemeContext（localStorage 持久化）
│   └── layout.tsx                LayoutContext（sidebar 折疊狀態）
└── types/
    ├── irispipe.ts               後端 API 型別定義
    └── graph.ts                  React Flow 型別
```

## 路由結構

```
/                          → redirect → /overview
/overview                  → OverviewPage
/pipeline                  → PipelineExplorerPage
/pipeline/folders/:folderId → PipelineExplorerPage
/pipeline/new/config        → PipelineConfigPage（新建模式）
/pipeline/items/:pipelineId/config  → PipelineConfigPage（編輯模式）
/pipeline/items/:pipelineId/runs    → PipelineRunsLayout
  ├── (index)              → PipelineRunsPage
  └── /:runId              → RunDetailPage
/settings                  → SettingsPage
```

## 各頁面現況

### OverviewPage（/overview）
- 4 KPI 卡片：Folders、Pipelines、Active Runs、Success Rate
- Engine Vitals：JVM Memory、Process Uptime
- Active Runs 區塊（0 Active 時顯示空狀態）
- Recent Runs 列表（最近 10 筆）
- Run Breakdown：Completed / Failed / Stopped / In-Flight
- **自動更新**：15 秒輪詢
- **問題**：多個獨立 API call 拼湊，AVG Duration 有計算 bug

### PipelineExplorerPage（/pipeline）
- 左側樹狀導航 + 右側主內容
- 資料夾卡片 + Pipeline 卡片
- 支援新增、重命名、刪除資料夾與 Pipeline
- 支援 Import Pipeline（YAML/JSON）

### PipelineConfigPage（/pipeline/items/:id/config）
- Stage Lane Board：橫向 Stage 欄 + 縱向 Job 節點
- 雙擊 Job → 開啟 3-panel Job 編輯 Modal
  - 左 Panel：Job Settings（Job Name、Stage dropdown、Atomic Level、Fetch/Batch Size、Delete Threshold、Source/Dest Connection 只讀卡片）
  - 中 Panel：Execution Steps 列表 + Add Step
  - 右 Panel：Step Detail（Type、Name、SQL textarea、Target tab、Parameters tab）
- 驗證系統：收集 DraftValidationIssue
- **問題**：SQL 為純 textarea；Connection 設定無引導；新建時完全空白

### PipelineRunsPage（/pipeline/items/:id/runs）
- 統計欄：Success Rate、Completed、Failed、AVG Duration
- 執行列表（Active 卡片模式 + 歷史列表模式）
- 遊標式分頁（Load older runs）
- **問題**：AVG Duration 顯示負數（bug）

### RunDetailPage（/pipeline/items/:id/runs/:runId）
- Header：Run ID、Status badge、INITIAL/RESUME/RERUN tag、Stage/Job/Step 統計、throughput（read/write/commits）
- Attempt History（左側）：Status、Attempts、Duration、Created
- Runtime Stage Board（右側）：視覺化 Stage 和 Job 節點狀態
- Job Detail Panel（點擊 Job 後顯示）：Step 執行統計
- 操作按鈕：Stop、Resume、Rerun、Delete
- **自動更新**：執行中時每 3 秒輪詢
- **問題**：Job 名稱截斷；輪詢改 SSE 後體驗更佳

## 狀態管理

- **無 Redux/Zustand**：Context API + 本地 useState
- ThemeContext：主題（DaisyUI theme name）→ localStorage
- LayoutContext：sidebar 折疊 → localStorage
- Outlet Context：PipelineWorkspaceLayout 傳遞 pipeline 資料給子頁面
- pipeline-draft.ts：Config 頁面的編輯狀態管理

## API 層（frontend/src/lib/api.ts）

- Axios 實例，無 base URL（透過 Vite proxy）
- Vite proxy：`/api/*` → `http://localhost:8080`（或 `IRISPIPE_BACKEND_URL`）
- 統一錯誤處理：`getApiErrorMessage()`
- 所有函數 async，回傳 typed Promise

## 已知 UI 問題清單

| 問題 | 影響 | 所在位置 |
|------|------|---------|
| AVG Duration 顯示負數 | 面試時尷尬 | PipelineRunsPage、OverviewPage |
| Job/Stage 名稱截斷無 tooltip | 可讀性差 | Config、Run Detail Stage Board |
| SQL textarea 無語法高亮 | 編輯體驗差 | Config Job Modal |
| Connection 設定無引導（需知 driver string） | 最大使用障礙 | Config Job Modal |
| 新建 Pipeline 完全無引導 | 冷啟動困難 | New Pipeline 頁面 |
| "DANGER ZONE" 標籤措辭不當 | 介面觀感 | Stage 設定 Panel |
| 3 秒輪詢效率低 | 效能 + 即時性差 | RunDetailPage |
| 15 秒輪詢延遲高 | 即時性差 | OverviewPage |
| React Flow（GraphEngine）未在主流程使用 | 資源浪費 | components/GraphEngine/ |

## 待新增前端功能（各 Phase 規格見對應文件）

| Phase | 功能 |
|-------|------|
| 0 | Tooltip for truncated names、AVG Duration 保護、Danger Zone 改名 |
| 1 | EventSource 取代輪詢、Stage Board 即時動畫、throughput 即時更新 |
| 2 | Overview 改為單一 API + SSE 訂閱、Active Runs 縮略圖 |
| 3 | Connection Manager（Driver dropdown + Test button）、CodeMirror SQL editor |
| 4 | Log Viewer、Pipeline drag-to-folder、鍵盤快捷鍵 |

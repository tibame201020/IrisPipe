# IrisPipe Product Plans

## 目的

本目錄記錄 IrisPipe 的完整產品迭代規劃與技術規格。
任何對話或 Agent 皆可從這裡取得完整上下文並接手實作，無需重新理解。

## 專案定位

**IrisPipe** 是一個 **本地端資料同步 Pipeline 引擎**，定位為開源開發者工具。

- **後端**：設計者的核心作品，展示架構能力（Spring Batch 編排、狀態機、快照語意、事務策略）
- **前端**：後端能力的視覺化操作介面，不是主角，但要能讓後端說話

## 文件索引

| 文件 | 說明 |
|------|------|
| [PRODUCT_OVERVIEW.md](./PRODUCT_OVERVIEW.md) | 產品全局認知、技術棧、架構決策 |
| [BACKEND_CONTEXT.md](./BACKEND_CONTEXT.md) | 後端現況詳細技術參考 |
| [FRONTEND_CONTEXT.md](./FRONTEND_CONTEXT.md) | 前端現況詳細技術參考 |
| [PHASE_0_QUICK_FIXES.md](./PHASE_0_QUICK_FIXES.md) | Phase 0：快速修復（1-2 天）|
| [PHASE_1_SSE_REALTIME.md](./PHASE_1_SSE_REALTIME.md) | Phase 1：SSE 即時化（3-5 天）|
| [PHASE_2_OVERVIEW_ENHANCEMENT.md](./PHASE_2_OVERVIEW_ENHANCEMENT.md) | Phase 2：Overview 強化（2-3 天）|
| [PHASE_3_CONFIG_UX.md](./PHASE_3_CONFIG_UX.md) | Phase 3：Config UX 轉型（5-7 天）|
| [PHASE_4_POLISH.md](./PHASE_4_POLISH.md) | Phase 4：產品打磨（3-5 天）|

## 執行順序

```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4
```

Phase 1（SSE 即時化）是整個產品的分水嶺，優先完成。

## 工作目錄

```
C:\Users\jeffh\Downloads\develop\codes\IrisPipe\.claude\worktrees\jolly-pike\
├── backend/    Spring Boot 3.5 + Java 21
├── frontend/   React 19 + Vite + TailwindCSS
└── plans/      本目錄
```

本地服務：
- Frontend: http://localhost:4206
- Backend:  http://localhost:8080

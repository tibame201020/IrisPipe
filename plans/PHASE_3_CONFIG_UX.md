# Phase 3：Config UX 轉型

**估計工時：5-7 天**
**目標：讓設定 Pipeline 從「需要專業知識」變成「引導式操作」，消除面試官的冷啟動障礙**

---

## 問題分析

目前設定一個 Pipeline 需要手動填入：

1. **Database Connection**：Driver class 字串（如 `org.h2.Driver`）、JDBC URL、User、Password — 使用者需要記得這些字串
2. **SQL Statement**：純 textarea，無語法高亮，41+ 步驟難以閱讀
3. **新建 Pipeline**：空白頁面 + 一個空 Stage，完全沒有引導或範本
4. **Pipeline 名稱**：新建時需要點進才知道怎麼編輯

這些問題直接阻止面試官在 demo 時體驗系統。

---

## 後端實作

### 3-1. Connection Library API（新增）

**概念：** 使用者可以儲存常用的 DB 連線為「具名連線」，下次建立 Job 時直接選用，不需重新填寫。

**位置：** `backend/src/main/java/irispipe/api/ConnectionAPI.java`（新增）

**資料表：** `iris_connection`（Flyway V5 遷移）

```sql
-- V5__connection_library.sql
CREATE TABLE iris_connection (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    workspace_id  BIGINT NOT NULL,
    name          VARCHAR(255) NOT NULL,
    driver        VARCHAR(512) NOT NULL,
    url           VARCHAR(1024) NOT NULL,
    username      VARCHAR(255),
    password      VARCHAR(512),
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uk_connection_name UNIQUE (workspace_id, name),
    CONSTRAINT fk_connection_workspace FOREIGN KEY (workspace_id) REFERENCES iris_workspace(id)
);
```

**API Endpoints：**

```
GET    /api/v1/connections                → 列出該 Workspace 所有具名連線
POST   /api/v1/connections                → 新增具名連線
PUT    /api/v1/connections/{id}           → 更新連線
DELETE /api/v1/connections/{id}           → 刪除連線
POST   /api/v1/connections/test           → 測試連線是否成功（不儲存）
GET    /api/v1/connections/drivers        → 回傳支援的 Driver 預設清單
```

### 3-2. Driver 預設清單 API

**位置：** `ConnectionAPI.java` 或獨立 `ConnectionDriverInfo.java`

```
GET /api/v1/connections/drivers
```

**Response（hardcoded，無需資料庫）：**

```json
[
  {
    "name": "H2 (Embedded)",
    "driverClass": "org.h2.Driver",
    "urlTemplate": "jdbc:h2:{path};AUTO_SERVER=TRUE",
    "urlPlaceholders": [
      { "key": "path", "label": "Database Path", "example": "./h2data/mydb" }
    ],
    "defaultPort": null,
    "testable": true
  },
  {
    "name": "MySQL",
    "driverClass": "com.mysql.cj.jdbc.Driver",
    "urlTemplate": "jdbc:mysql://{host}:{port}/{database}",
    "urlPlaceholders": [
      { "key": "host", "label": "Host", "example": "localhost" },
      { "key": "port", "label": "Port", "example": "3306" },
      { "key": "database", "label": "Database", "example": "mydb" }
    ],
    "defaultPort": 3306,
    "testable": true
  },
  {
    "name": "PostgreSQL",
    "driverClass": "org.postgresql.Driver",
    "urlTemplate": "jdbc:postgresql://{host}:{port}/{database}",
    "urlPlaceholders": [
      { "key": "host", "label": "Host", "example": "localhost" },
      { "key": "port", "label": "Port", "example": "5432" },
      { "key": "database", "label": "Database", "example": "mydb" }
    ],
    "defaultPort": 5432,
    "testable": true
  },
  {
    "name": "SQL Server",
    "driverClass": "com.microsoft.sqlserver.jdbc.SQLServerDriver",
    "urlTemplate": "jdbc:sqlserver://{host}:{port};databaseName={database}",
    "urlPlaceholders": [
      { "key": "host", "label": "Host", "example": "localhost" },
      { "key": "port", "label": "Port", "example": "1433" },
      { "key": "database", "label": "Database", "example": "mydb" }
    ],
    "defaultPort": 1433,
    "testable": true
  },
  {
    "name": "Oracle",
    "driverClass": "oracle.jdbc.OracleDriver",
    "urlTemplate": "jdbc:oracle:thin:@{host}:{port}:{sid}",
    "urlPlaceholders": [
      { "key": "host", "label": "Host", "example": "localhost" },
      { "key": "port", "label": "Port", "example": "1521" },
      { "key": "sid", "label": "SID", "example": "ORCL" }
    ],
    "defaultPort": 1521,
    "testable": true
  },
  {
    "name": "Custom",
    "driverClass": "",
    "urlTemplate": "",
    "urlPlaceholders": [],
    "defaultPort": null,
    "testable": true
  }
]
```

### 3-3. Connection Test API

```
POST /api/v1/connections/test
```

**Request：**
```json
{
  "driver": "org.h2.Driver",
  "url": "jdbc:h2:./h2data/data;AUTO_SERVER=TRUE",
  "username": "sa",
  "password": "sa"
}
```

**Response：**
```json
{
  "success": true,
  "message": "Connection successful",
  "serverInfo": "H2 2.2.224",
  "latencyMs": 12
}
```

或失敗時：
```json
{
  "success": false,
  "message": "Cannot connect: Connection refused (host=localhost, port=3306)",
  "serverInfo": null,
  "latencyMs": null
}
```

**實作方式：**
```java
@PostMapping("/test")
public ResponseEntity<ConnectionTestResult> testConnection(@RequestBody ConnectionTestRequest req) {
    long start = System.currentTimeMillis();
    try (Connection conn = DriverManager.getConnection(req.url(), req.username(), req.password())) {
        DatabaseMetaData meta = conn.getMetaData();
        long latency = System.currentTimeMillis() - start;
        return ResponseEntity.ok(new ConnectionTestResult(
            true, "Connection successful",
            meta.getDatabaseProductName() + " " + meta.getDatabaseProductVersion(),
            latency
        ));
    } catch (Exception e) {
        return ResponseEntity.ok(new ConnectionTestResult(false, e.getMessage(), null, null));
    }
}
```

**注意：** 需使用 `Class.forName(req.driver())` 載入 driver。本地工具不需擔心安全性。

---

## 前端實作

### 3-4. Connection 設定面板重設計

**現狀：** Config Job Modal 左 Panel 底部的 Source Node / Destination Node 是純顯示卡片，
Driver/URL/User/Pass 都是 inline 純文字，編輯體驗差。

**改為：**

```
┌── SOURCE CONNECTION ──────────────────────────┐
│                                                │
│  Database Type: [H2 (Embedded)      ▼]         │
│                                                │
│  ┌─ Connection Details ─────────────────────┐  │
│  │ Path:     [./h2data/data          ]      │  │
│  │ Username: [sa                     ]      │  │
│  │ Password: [••                     ]      │  │
│  └──────────────────────────────────────────┘  │
│                                                │
│  Generated URL: jdbc:h2:./h2data/data          │
│                                                │
│  [🔍 Test Connection]    ✅ Connected (12ms)    │
│                                                │
│  [💾 Save as...]    [📂 Load from library...]   │
│                                                │
└────────────────────────────────────────────────┘
```

**互動流程：**

1. 使用者選 Database Type（dropdown）→ 自動填入 driver class + URL template
2. 按 URL template 中的 placeholder 動態渲染輸入欄位
3. 使用者填入各欄位 → URL 即時組合顯示（Generated URL）
4. 點「Test Connection」→ 呼叫 `POST /api/v1/connections/test` → 顯示結果
5. 點「Save as...」→ 儲存到 Connection Library
6. 點「Load from library...」→ 從已儲存的具名連線選擇填入

**「Custom」選項：** 選擇 Custom 時直接顯示 Driver 和 URL 的自由輸入欄位。

### 3-5. SQL Editor 升級（CodeMirror 6）

**目的：** 將純 textarea 升級為有語法高亮的 SQL 編輯器。

**安裝：**
```bash
npm install codemirror @codemirror/lang-sql @codemirror/view @codemirror/state
```

**封裝元件：** `frontend/src/components/SqlEditor.tsx`

```tsx
import { useEffect, useRef } from 'react'
import { EditorView, basicSetup } from 'codemirror'
import { sql } from '@codemirror/lang-sql'
import { EditorState } from '@codemirror/state'

interface SqlEditorProps {
  value: string
  onChange: (value: string) => void
  readOnly?: boolean
  minHeight?: string
}

export function SqlEditor({ value, onChange, readOnly = false, minHeight = '120px' }: SqlEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        sql(),
        EditorView.editable.of(!readOnly),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange(update.state.doc.toString())
          }
        }),
      ],
    })

    const view = new EditorView({
      state,
      parent: containerRef.current,
    })

    viewRef.current = view
    return () => view.destroy()
  }, [])

  // value 外部變更時同步（切換 step 時）
  useEffect(() => {
    const view = viewRef.current
    if (view && view.state.doc.toString() !== value) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: value },
      })
    }
  }, [value])

  return <div ref={containerRef} style={{ minHeight }} className="border rounded" />
}
```

**替換位置：** Config Job Modal 右 Panel 的 SQL STATEMENT textarea → `<SqlEditor />`

### 3-6. Execution Step 列表加搜尋

**問題：** 一個 Job 可能有 41+ 個 Step，目前只能上下滾動找。

**改動位置：** Config Job Modal 中 Panel（EXECUTION STEPS 區塊）頂部

```tsx
// 在 "+ Add Step" 按鈕旁加搜尋
<input
  type="text"
  placeholder="Filter steps..."
  className="input input-sm input-bordered"
  value={stepFilter}
  onChange={e => setStepFilter(e.target.value)}
/>
```

篩選邏輯：按 step name 子字串匹配，不匹配的 step 卡片 `opacity-30` 或 `hidden`。

### 3-7. New Pipeline 引導

**問題：** 新建 Pipeline 時只有一個空 Stage，使用者不知道下一步。

**改動位置：** `PipelineConfigPage.tsx` — 新建模式的初始畫面

**方案：** 在新建模式顯示一個引導選擇器（取代空白 Stage Board）：

```
┌── Create a New Pipeline ──────────────────────────────┐
│                                                        │
│  Give your pipeline a name:                            │
│  [my-data-sync-pipeline                         ]      │
│                                                        │
│  Select a starting template:                           │
│                                                        │
│  ┌─────────────────┐  ┌──────────────────┐            │
│  │ 📋 Blank         │  │ 📦 Single Stage   │            │
│  │ Start from       │  │ 1 stage, 1 job    │            │
│  │ scratch          │  │ with sample SQL   │            │
│  └─────────────────┘  └──────────────────┘            │
│                                                        │
│  ┌─────────────────┐  ┌──────────────────┐            │
│  │ 🔀 Multi Stage   │  │ 📥 Import File    │            │
│  │ 2 stages with    │  │ From YAML or      │            │
│  │ barrier demo     │  │ JSON config       │            │
│  └─────────────────┘  └──────────────────┘            │
│                                                        │
│  Or: [Clone from existing pipeline ▼]                  │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**模板預設值：**

- **Blank**：當前行為（1 空 Stage）
- **Single Stage**：1 Stage + 1 Job（附帶 Source/Dest 指向 H2 本地、1 INSERT step 含範例 SQL）
- **Multi Stage**：2 Stage + 各 1 Job，展示 Stage 屏障概念
- **Import File**：直接開啟 Import Dialog

**Clone from existing：** dropdown 列出所有現有 Pipeline，選擇後複製其配置。

---

## Connection Library 管理頁（Settings 擴充）

**位置：** `frontend/src/pages/SettingsPage.tsx` — 新增 tab

```
Settings
├── Appearance（現有：主題切換）
└── Connections（新增：Connection Library）
    ├── 列表：顯示所有已儲存的具名連線
    ├── 新增：表單同 Config 的 Connection Panel
    ├── 編輯：inline 編輯
    ├── 刪除：確認後刪除
    └── Test：每個連線都可即時測試
```

---

## 驗收標準

- [ ] Config Job Modal 的 Connection 設定改為 Driver dropdown + 動態欄位
- [ ] 選擇 Database Type 後自動填入 driver class 和 URL template
- [ ] Test Connection 按鈕可用，顯示成功/失敗結果
- [ ] 可儲存具名連線到 Connection Library
- [ ] 可從 Connection Library 載入連線
- [ ] SQL textarea 替換為 CodeMirror（語法高亮）
- [ ] Execution Step 列表有搜尋 filter
- [ ] 新建 Pipeline 顯示引導選擇器（4 個模板選項）
- [ ] Settings 頁面有 Connections tab
- [ ] `POST /api/v1/connections/test` 正確回傳連線測試結果
- [ ] Flyway V5 遷移正常執行

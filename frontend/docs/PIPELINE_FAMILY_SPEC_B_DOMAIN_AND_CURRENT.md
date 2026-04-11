# IrisPipe Pipeline Family Spec B

副標：`domain-aware + current-view-aware + reviewer-revised`

語言：繁體中文  
輸入來源限制：
- canonical domain brief
- current view 截圖：Config / Runs / Run Detail
- staff reviewer 摘要

本文件用途：
- 延續既有 `Spec B` 的方向
- 只補齊 staff reviewer 指出的交付缺口
- 不重寫成另一套不同方向的 spec

---

## 0. 修訂目標

本次修訂只補強下列缺口：

1. 具體的介面標注與區塊尺寸 / 滾動 / 固定規則
2. Config / Runs / Run Detail 的 page-level interaction transitions
3. current view 到 target view 的重構過渡說明
4. dark theme 下結構邊界與 connector 可讀性要求
5. component governance

維持不變的核心方向：
- `Config` 仍是 `topology workspace + contextual inspector + job workspace dock`
- `Runs` 仍是 `operations ledger`
- `Run Detail` 仍是 `hero summary + attempt timeline + runtime board + diagnostics drawer + overview rail`
- frontend 仍以展示 backend pipeline 使用方式與執行語意為主，不是堆資料

---

## 1. Family 級介面標注

## 1.1 共用 shell 分區

所有 pipeline family 頁面共享固定層級：

```text
+----------------------------------------------------------------------------------+
| App shell / left navigation                                                      |
+----------------------------------------------------------------------------------+
| Identity row                                                                     |
+----------------------------------------------------------------------------------+
| Family tabs                                                                      |
+----------------------------------------------------------------------------------+
| Context strip                                                                    |
+----------------------------------------------------------------------------------+
| Main workspace                                                                   |
+----------------------------------------------------------------------------------+
```

### 區塊高度規則

- `Identity row`：48px
- `Family tabs row`：44px
- `Context strip`：56px
- `Main workspace`：佔剩餘高度

### 行為規則

- `Identity row` 固定在頁面頂部，不隨主內容滾動
- `Family tabs row` 固定在 `Identity row` 下方
- `Context strip` 固定在 `Family tabs row` 下方
- 只有 `Main workspace` 可產生主要捲動

### 寬度規則

- App shell 左欄：固定 232px
- 內容區最小寬度：1120px
- 若視窗小於 1280px，右側 rail 與 dock 優先收斂，不壓縮 topology/ledger/board 的主視圖

---

## 1.2 狀態與互動的共用契約

### Hover
- 只做輕量表面變化
- 不可造成 layout shift
- 不可新增推擠內容的按鈕列

### Selected
- 必須同時改變 `surface + border/ring + emphasis`
- 不可只靠細 border

### Focus
- 與 selected 分開
- 只表示輸入 / 鍵盤焦點，不代表當前上下文

### Disabled
- 仍保留 control 外形
- 文字與邊界都需低飽和，但不可像普通靜態文字

### Drag / reorder
- drag affordance 必須和 edit / delete 分開辨識
- pointer 狀態必須清楚：`default / hover / grab / grabbing`

---

## 2. Config 修訂規格

## 2.1 Page IA

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs: Config | Runs                                                           |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
| [Topology] [4 stages] [6 jobs] [Runnable]                    [Import] [Add] [Save]    |
+--------------------------------------------------------------------------------------+
| Topology workspace                                                | Context rail     |
|                                                                    |                 |
|  Stage flow canvas                                                 | Pipeline /      |
|  (主角)                                                            | Stage / Job      |
|                                                                    | Inspector        |
+--------------------------------------------------------------------------------------+
| Job workspace dock                                                                  |
+--------------------------------------------------------------------------------------+
```

## 2.2 區塊尺寸與固定規則

### 主畫布與右 rail
- `Topology workspace`：`minmax(0, 1fr)`
- `Context rail`：固定 320px
- 當視窗寬度小於 1360px：
  - `Context rail` 收斂為 280px
  - 若仍不足，切成 overlay inspector，不壓縮主畫布

### Stage column
- 欄寬：288px
- stage 之間水平間距：24px
- stage 間 connector 保留區：40px
- stage body 最小高度：240px

### Job row
- 列高：64px
- 內距：12px 14px
- job rows 間距：10px

### Bottom dock
- 收合高度：56px
- 展開高度：
  - 標準：360px
  - 大螢幕：420px
- dock 固定在 `Main workspace` 底部
- dock 內部自捲動，不帶動整頁

### 捲動規則
- stage flow canvas 橫向可捲動
- `Context rail` 自己垂直捲動
- `Job workspace dock` 自己垂直捲動
- 三者不可共用同一捲動容器

## 2.3 介面標注

### Stage column
每個 stage 必須固定有 3 層：

1. `Stage header`
2. `Stage body`
3. `Stage helper strip`

#### Stage header
只允許：
- stage badge
- stage name
- job count
- compact stage actions

禁止：
- readiness 長文
- 過多 chips
- 會把 stage name 壓縮的 icon cluster

#### Stage body
只承載：
- job rows
- empty-stage CTA

#### Stage helper strip
放：
- `2/2 jobs ready`
- `0 issues`
- barrier / order hint

這一層必須低於 header 的權重。

### Job row
Job row 固定成兩行：

第一行：
- job name
- issue hint

第二行：
- `2 steps`
- compact action row：`drag | edit | delete`

動作列規則：
- 與 job name 同列不行
- 與 drag 同列可以
- 三者等寬點擊區至少 28px

## 2.4 Page-level interaction transitions

### Config page 進入頁面
1. 先看到 pipeline identity
2. 再看到 readiness + actions
3. 視線落在 topology canvas
4. 只有選取 stage/job 後，才把注意力帶到右 rail 或 dock

### 選取 stage
- 變化：
  - stage column surface 提升
  - ring / border 增強
  - `Context rail` 切成 stage inspector
- 不變：
  - stage 高度
  - jobs 位置
  - connector 位置

### 選取 job
- 變化：
  - job row 背景與 ring 提升
  - `Context rail` 切成 job inspector
  - `Job workspace dock` 可展開
- 不變：
  - stage column 寬度
  - 其他 rows 位置

### 展開 job workspace
- 由 dock 向上展開
- 中央 topology 仍必須保持完整可見
- dock 只改自身高度，不可讓 topology 消失

## 2.5 Current view -> target view 過渡說明

### current view 問題
- stage 邊界太輕，像背景群組
- job actions 與內容過近
- 右 rail 權重太高
- 空白區雖大，但未形成清楚 flow

### target view 修正
- 把 stage 從「淡淡群組」改成「明確 column block」
- 把 job 從「內容 + 操作擠在一起」改成「兩行 slab」
- 把 overview rail 從「重 summary panel」改成「context rail」
- 保留底部 dock，但把它定義成第二主層，而不是搶 topology 主視角

---

## 3. Runs 修訂規格

## 3.1 Page IA

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Context strip                                                                        |
| Latest run / inflight / resumable / avg runtime                     [Refresh][Execute]|
+--------------------------------------------------------------------------------------+
| Filter row                                                                           |
| [All] [Running] [Failed] [Completed] [Resumable]                                     |
+--------------------------------------------------------------------------------------+
| Operations ledger                                                                    |
+--------------------------------------------------------------------------------------+
```

## 3.2 區塊尺寸與固定規則

- `Context strip` 高度：64px
- `Filter row` 高度：44px
- Ledger header：sticky，固定在 filter row 下方
- Ledger row 高度：72px

### Ledger columns
- 狀態點：24px
- Run：`minmax(180px, 1.3fr)`
- Attempt：`minmax(180px, 1fr)`
- Timeline：140px
- Status：120px
- Action：96px

### 捲動規則
- 只有 ledger list 自捲動
- hero/context strip 與 filter row 固定

## 3.3 Page-level interaction transitions

### Runs page 進入頁面
1. 先看到 latest signal 與最重要 CTA
2. 接著立即看到 ledger header
3. 第一屏就能看到 run rows

### 切換 filter
- 只更新 ledger list
- 不重排 header
- filter chip 的 selected 狀態要明確

### 點擊 row
- 可有 hover highlight
- 點擊後直接開 `Run Detail`
- 不在同頁展開大量 secondary content

## 3.4 Current view -> target view 過渡說明

### current view 問題
- hero 仍然偏 dashboard
- metrics 與 list 有競爭
- run row 雖清楚，但頁首仍吸走注意力

### target view 修正
- hero 收斂成一條 operator cue strip
- 把 ledger header 與 list 提前到首屏核心
- 所有統計都服務於「下一筆該看哪個 run」，而不是服務儀表板閱讀

---

## 4. Run Detail 修訂規格

## 4.1 Page IA

```text
+--------------------------------------------------------------------------------------+
| Identity row                                                                         |
+--------------------------------------------------------------------------------------+
| Family tabs                                                                          |
+--------------------------------------------------------------------------------------+
| Hero summary                                                                         |
+--------------------------------------------------------------------------------------+
| Attempt timeline                                                                     |
+--------------------------------------------------------------------------------------+
| Runtime board                                                     | Overview rail    |
+--------------------------------------------------------------------------------------+
| Diagnostics drawer                                                                    |
+--------------------------------------------------------------------------------------+
```

## 4.2 區塊尺寸與固定規則

### Hero summary
- 高度：92px
- 只放：
  - run id
  - effective status
  - attempt count / current attempt
  - key totals
  - primary actions

### Attempt timeline
- 高度：84px
- 固定在 hero 下方
- 橫向可捲動

### Runtime board 與 rail
- `Runtime board`：`minmax(0, 1fr)`
- `Overview rail`：320px
- board 是主視角，rail 只做補充

### Diagnostics drawer
- 收合高度：52px
- 展開高度：
  - 標準：280px
  - 大螢幕：340px
- drawer 內部自捲動
- 不覆蓋 hero / timeline

## 4.3 Page-level interaction transitions

### 進入 Run Detail
1. 先看 run status 與 attempt identity
2. 再看 attempt timeline
3. 視線落到 runtime board
4. 只有需要時才打開 diagnostics

### 切換 attempt
- board 與 overview 同步切換
- diagnostics 若已開啟，保留 tab，但內容更新
- 不重新排版整頁

### 選取 job
- board 中的 job row 強化 selected state
- `Job runtime inspector` 以 overlay 或側邊 contextual panel 出現
- 不取代整個 overview rail

### 展開 diagnostics
- 從底部滑出
- board 保持可視
- tab 切換只換內容，不換 container 結構

## 4.4 Current view -> target view 過渡說明

### current view 問題
- hero / timeline / board / rail / drawer 都有存在感
- 對第一次進來的使用者，主視角不夠明確

### target view 修正
- hero 只保留 run identity 與控制
- attempt timeline 成為唯一上層 narrative
- runtime board 成主角
- overview rail 降權
- diagnostics drawer 改成按需展開的第二層

---

## 5. Dark theme clarity 明確規格

本節是 reviewer 特別要求補強的部分。

## 5.1 結構色階規則

在 `dark / dracula` 下，結構可讀性必須靠 `base-* + neutral + primary` 的層級差建立，不可靠細 border 硬撐。

### 固定語意
- `Canvas / work surface`：`base-100`
- `Stage / shell / rail / ledger header`：`neutral`
- `Selected stage/job/context`：`primary`
- `Runtime state`：`success / warning / error / info`

## 5.2 Stage 與 canvas 的對比要求

未選取 stage 在 dark theme 下也必須清楚辨識。

必須滿足：
- stage column 與 canvas 至少有一層明確表面差
- stage header 與 stage body 必須再分一層
- connector 線不可沉進背景

### 可讀性要求
- stage column 外輪廓：必須可在 1 秒內辨識每一欄範圍
- stage header：必須明顯高於 stage body
- job row：必須能被看作 stage 裡的可點擊節點，不是文字列表

## 5.3 Connector 規格

### Config
- connector 顏色：中性高對比線
- 線寬：2px
- 箭頭或方向提示不可省略
- 位置固定在 stage 中線高度附近

### Run Detail
- connector 除了結構線，還可疊加 runtime state 強調
- blocked / skipped / not-run 的 connector 或 stage transition 需要有輔助標記

## 5.4 Selected 規格

dark theme 下 selected 不得只靠細 border。

必須同時有：
- 背景表面差
- 明顯 ring 或外框
- header / label emphasis

## 5.5 Focus 規格

keyboard focus 在 dark theme 下必須：
- 與 selected 不同色或不同層級
- 不得被 selected surface 吃掉

---

## 6. 動畫與過場補充

## 6.1 頁級 transition

### Config -> Runs
- family tab 切換
- 保留 identity row 與 context row 的穩定感
- 主要內容以 120ms cross-fade + 12px 上移進場

### Runs -> Run Detail
- 點 row 後進 detail
- 保持同 family shell
- 由 ledger context 過渡到 run hero，不做大幅 page wipe

### Run Detail -> Config
- 若由某 run 回看 config，不應讓使用者失去 pipeline identity
- 保留相同 pipeline breadcrumb 與 tab 位置

## 6.2 區塊級 transition

- rail 切換 stage/job/pipeline context：150ms opacity + translate
- dock 展開：180ms height + opacity
- diagnostics drawer：180ms translateY + opacity
- attempt chip current 切換：120ms emphasis shift

---

## 7. 邊界情境與內容規則

## 7.1 Config edge cases

- `0 stage`
  - topology 直接顯示 empty-state CTA：`Add first stage`
- `empty stage`
  - stage body 顯示 `Add Job`
- `job name very long`
  - 第一行截斷，完整名稱進 tooltip 或 inspector
- `validation issues > 0`
  - readiness 不可顯示 runnable
- `dock open + small viewport`
  - dock 仍可展開，但 inspector 改 overlay

## 7.2 Runs edge cases

- `no runs yet`
  - 顯示空 ledger 與 `Execute pipeline`
- `resumable run exists`
  - row 需有 clear resumable cue
- `multiple active runs`
  - filter 與 latest strip 不可只顯示一筆

## 7.3 Run Detail edge cases

- `attempt count = 1`
  - timeline 仍存在，但不誇張
- `resume attempt`
  - timeline 必須能辨識 resume context
- `selected job has no logs`
  - drawer 顯示 empty diagnostic state
- `NOT_RUN downstream`
  - board 不可與一般 pending 混淆

---

## 8. Component governance

本節只補治理規則，不改 spec 方向。

## 8.1 Pipeline family 專屬元件層

建議元件責任如下：

- `PipelineWorkspaceShell`
  - identity row
  - family tabs
  - context strip

- `StageColumn`
  - stage header
  - stage helper strip
  - stage body
  - connector anchor

- `JobSlab`
  - job identity
  - step summary
  - compact actions

- `RunLedgerRow`
  - run identity
  - attempt summary
  - timeline summary
  - status
  - action

- `AttemptTimeline`
  - current attempt
  - resume/rerun semantics

- `DiagnosticsDrawer`
  - logs
  - metrics
  - step detail

## 8.2 不可越界規則

- StageColumn 不處理 job 深層設定
- JobSlab 不顯示完整 config 細節
- Overview rail 不複製 board 已可見的資訊
- Diagnostics drawer 不主導整頁結構
- Hero strip 不取代 ledger / board 的主角位置

## 8.3 Theme governance

- 所有 family 結構色必須走 daisyUI semantic tokens
- 禁止為單頁補硬編碼結構色
- dark theme clarity 問題要回到 semantic mapping 修，不是補任意灰階

---

## 9. 交付就緒判準

Spec B 修訂後，前端若要開始實作，至少必須滿足以下條件：

1. 每頁都有明確主視角
2. 每頁都有 sticky / scroll / rail / drawer 規則
3. current view 到 target view 的過渡可分階段執行
4. dark theme 下 stage / job / connector 可讀性有明確標準
5. component responsibilities 已定清楚，不再讓 summary、board、inspector 互搶

---

## 10. 結語

本修訂版不改 Spec B 的方向，只把它補到可交付前端執行的粒度。

它的核心立場仍然是：
- frontend 是 backend pipeline domain 的產品化操作介面
- `Config` 要先讓人看懂 stage flow
- `Runs` 要像 operations ledger
- `Run Detail` 要像 attempt-centric runtime workspace
- current view 可以作為落地參考，但不能繼續綁死最終方向

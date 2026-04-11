# Pipeline Family UI/UX 規則

## 目的

本文件不是從既有樣式規則反推而來，而是直接根據 IrisPipe `pipeline family` 的實際畫面重新整理出的設計規則。

評估畫面：

- `Config`
- `Runs`
- `Run Detail`

這三頁應視為同一個產品家族，而不是三個各自成立的頁面。它們共享同一套操作語境：使用者正在處理 pipeline 的配置、執行與追蹤，因此 UI 的首要目標不是展示資訊量，而是建立穩定、可預期、可快速掃描的操作工作區。

## 問題定義

根據實際畫面，現況的主要問題不是「邊界不夠明顯」，而是以下四件事：

1. 頁面上方的橫向帶狀區塊過多，主畫布被往下壓。
2. 摘要資訊、操作工具列、內容主體彼此都像主角，缺少清楚主次。
3. 同一頁內存在過多彼此獨立的卡片語法，畫面節奏被切碎。
4. pipeline family 應該是操作型工作區，但目前部分頁面仍偏向 dashboard 佈局。

## 核心定位

Pipeline family 不是 dashboard family，而是 operator workspace family。

這句話會直接決定畫面規則：

- `Config` 的主角是 stage canvas 與編輯器。
- `Runs` 的主角是執行紀錄列表。
- `Run Detail` 的主角是 attempt 語意與 stage execution board。

任何摘要卡、狀態卡、輔助說明，都只能服務主角，不能和主角競爭注意力。

## 一致的版面語法

Pipeline family 的三頁都必須遵守同一套結構順序：

1. 全域 shell
2. family header
3. 單一主要語意帶
4. 核心工作區

### 1. 全域 shell

包含全域 header、sidebar、breadcrumb 等導覽骨架。這層應穩定存在，但視覺權重必須低於 family header。

### 2. family header

family header 是該頁真正的識別層，負責回答：

- 目前在哪一個 pipeline
- 目前是哪一個 family page
- 目前可執行的主要操作是什麼

family header 必須緊湊，不能膨脹成第二個 dashboard。

### 3. 單一主要語意帶

每頁最多只能有一個主要語意帶，用來傳達最需要立即理解的狀態。

例子：

- `Config`：可執行性、stage 數、job readiness
- `Runs`：總 run 數、失敗數、執行中數、篩選條件
- `Run Detail`：run status、attempt、trigger、耗時、resume/rerun 語意

規則：

- 不允許再堆第二排「長得很像但功能不同」的資訊帶。
- 語意帶的任務是幫助理解主畫布，不是形成新的內容主體。

### 4. 核心工作區

核心工作區必須盡可能早開始，並成為畫面視覺重心。

這是目前最需要修正的地方。當畫面上方堆了太多水平條帶時，使用者會一直停留在 meta information，而不是進入真正的工作內容。

## 視覺優先順序

整個 pipeline family 應遵循這個層級：

1. 核心工作內容
2. 與核心內容直接相關的狀態摘要
3. 主要操作
4. 次要摘要
5. 導覽與裝飾

若畫面讓第 4 或第 5 層看起來比第 1 層更醒目，代表版面權重配置失敗。

## 邊界與分層規則

### 邊界不是第一手段

在 pipeline family 中，分層優先順序如下：

1. 留白
2. 底色層差
3. 內嵌 panel
4. 柔和線條

不能再用「所有區塊都補一圈外框」的方式解題，因為這會讓畫面變成工程圖。

### 線條的使用方式

- 線條只用在結構分界與需要精準對齊的容器。
- 內容區塊若已透過底色或內嵌 panel 成立，就不應再加同重量外框。
- 同一頁內只允許少數幾種線條強度，避免每塊都像不同元件系統。

### 間距比邊框重要

- 若兩塊資訊屬於不同層級，優先用 spacing 拉開，而不是用雙重外框分開。
- 若兩塊資訊屬於同一個流，優先用 divider 或 section gap，而不是切成多張卡片。

### 圓角規則

使用小弧度即可，不使用大圓角。

準則：

- Shell / panel / list row / inset card 都維持小半徑。
- 不做膨脹、柔軟、玩具感的圓角。
- 圓角的目的是降低生硬感，不是建立可愛感。

## Pipeline Family 專屬規則

### Config 頁

#### 問題

- 上方控制區過多，stage board 被壓成上半部一條帶。
- 右側摘要欄與主畫布同時搶視覺權重。
- 主畫布下方留出過大空白，導致整體重心失衡。
- `pipeline summary / stage editor / job editor / step editor` 目前是四套不同容器語法，彼此競爭注意力。
- 深層編輯使用 glass / blur 疊在背景內容之上時，背景的 summary 與 canvas 仍持續干擾閱讀。

#### 規則

- Stage board 必須是整頁主角。
- 右側欄只能作為輔助編輯或摘要，不得比主畫布更有存在感。
- Stage board 應儘量佔據首屏主要高度。
- Stage 與 Job 的資訊層級應直接支持編輯決策，不做額外裝飾卡片。
- 畫布上方最多保留一條功能型 toolbar。
- `Config` 必須只存在一個主要編輯面。其餘都只能是輔助檢視面。
- `pipeline summary` 不應在深層編輯時持續常駐。它應是 overview 或 inspector 的預設內容，而不是一直佔據首屏右側。
- `stage editor` 應視為 contextual inspector，層級低於 job 編輯，不應做成會主導整頁的第二主畫面。
- `job editor` 應是獨立工作模式，而不是覆蓋在整個應用上的大 modal。當進入 job 編輯時，畫面應明確切換成「正在編輯 job」。
- `step editor` 屬於 job editor 內部結構，不得再成為另一個主畫面。它應附屬於 job workspace，而不是再次用強容器把內容切碎。
- Glass / blur 只能用於短暫、輕量、非主工作流的 overlay。只要是主要編輯面，就應使用穩定且近乎實體的 surface，不讓背景內容透出干擾。

#### 目標感受

使用者打開 `Config` 時，應該立刻進入「正在編輯 pipeline 拓樸」的狀態，而不是先被多排 badge、統計與摘要吸走注意力。
當使用者進入 `Job` 或 `Step` 編輯時，也應清楚感覺自己已切換到新的工作模式，而不是仍被原本的 pipeline 畫布與摘要欄牽制。

### Runs 頁

#### 問題

- KPI 卡與 run list 像屬於兩種不同頁面類型。
- 執行紀錄列表仍偏鬆散，像 dashboard 下掛表格。
- 列表的掃描節奏不夠像操作台賬。

#### 規則

- `Runs` 應被定義為 operations ledger。
- 上方摘要需要縮成薄而有效的 signal strip，而不是一排獨立卡片。
- List row 應該密實、穩定、可快速掃描。
- 狀態、attempt、時間、trigger、resume/rerun 線索應集中成容易比對的欄位節奏。
- 篩選器必須與列表形成同一個工作流，不可像獨立模組。

#### 目標感受

使用者進到 `Runs` 頁時，應該感覺自己進入執行台賬，而不是先看 dashboard，再看資料。

### Run Detail 頁

#### 問題

- 頁首被切成過多橫條：title、actions、tabs、summary、semantic chips。
- 真正的 execution board 出現得太晚。
- 語意摘要雖然存在，但仍像附加資訊列。

#### 規則

- Run identity 與 actions 應濃縮成清楚的一級區。
- Attempt / runtime explanation 應是一個緊貼主內容的語意層，而不是第三層工具列。
- Stage execution board 必須提早出現在首屏。
- 語意卡片不能切碎，應該像一個說明群組，直接支持對 board 的理解。
- 頁首上方區域應避免超過兩層水平語意帶。

#### 目標感受

使用者進到 `Run Detail` 時，應在幾秒內建立這三件事：

- 這次 run 發生了什麼
- 目前在哪個 attempt
- 問題卡在哪個 stage / job

## 元件語法收斂

Pipeline family 應收斂到以下幾種固定語法：

### Shell

用於 family 主容器、整頁骨架、全域與 family header 的分界。

### Section

用於一個完整資訊段，如 signal strip、summary group、list section。

### List

用於 `Runs`、`Explorer` 等需要快速掃描的區域。預設是連續面，不是卡片牆。

### Inset

用於 row 內附屬資訊，如 latest run、attempt detail、config side note。它應該像嵌入內容，而不是另一張浮卡。

### Semantic Chip / Badge

只用來標示狀態或類型，不承擔容器功能。chip 不能替代 panel，也不能拿來撐版面。

### Inspector

用於 `Config` 這類需要 contextual editing 的頁面。Inspector 是附屬於主畫布的輔助區，負責顯示目前選中物件的設定與說明。

規則：

- Inspector 可以取代 `pipeline summary`、`stage editor` 這類右側資訊面。
- Inspector 不可與另一個主要編輯面並存。
- 一旦進入 job workspace，inspector 應退場或被收納，而不是持續站在畫面側邊與主工作區競爭。

## 不應再出現的畫面傾向

- 上方堆出三排以上水平資訊帶
- 主畫布被摘要卡擠壓
- 同一頁同時出現太多獨立卡片系統
- 列表頁使用大量浮動卡片
- 右側欄與主內容爭奪主視覺
- 任何頁面讓使用者先看 meta chrome，再看核心內容

## 後續實作順序

實作應依序進行：

1. 先重整 `Config`，因為它最能暴露 pipeline family 的主次失衡。
2. 再重整 `Run Detail`，把 board 拉回視覺中心。
3. 最後重整 `Runs`，收斂成真正的 operations ledger。

原因：

- `Config` 與 `Run Detail` 先定出家族語法後，`Runs` 才能自然收斂到同一套節奏。
- 如果先改 `Runs`，很容易只是把列表修漂亮，卻沒有解決 family 一致性。

## 結論

Pipeline family 的優化重點不是再補更多視覺效果，而是建立明確的工作區語法：

- 主內容必須盡早出現
- 摘要只能輔助，不得搶戲
- 邊界要柔和，但階層要清楚
- 小弧度可以保留，大圓角不要出現
- 三個頁面必須讓使用者感受到自己仍在同一個操作系統內

這份文件是 pipeline family 後續 UI 重整的設計基準。

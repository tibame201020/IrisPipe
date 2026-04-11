# IrisPipe 前端邊界設計規則

這份文件定義 IrisPipe 前端應如何表達邊界、容器與層級，避免畫面退化成「每個區塊都畫一個框」的 wireframe 式介面。

## 目標

介面需要在 `light`、`dark`、`dracula`、`autumn` 四個主題下都維持清楚的結構感，同時避免「父層一個框、子層再一個框、內嵌模組又一個框」的僵硬堆疊。

視覺分隔的優先順序如下：

1. 間距
2. 底色層差
3. 柔和的 elevation 或 inset 處理
4. 邊線或 divider

邊線是輔助工具，不是每個元素的預設解法。

## 邊界層級

### 1. Shell Boundary

用在應用程式骨架：

- app sidebar
- top console header
- main workspace frame

規則：

- 結構線可以明確
- 線條應穩定、筆直、可預期
- 這一層負責切出版面區域，不負責強調內容

建議做法：

- `border-base-300`
- `bg-base-100` 或 `bg-base-100/80`
- 固定或浮動 chrome 可加輕微 blur

### 2. Section Boundary

用在頁面級區塊：

- toolbar band
- summary 區
- 右側 detail rail
- 一組內容區域的外框

規則：

- 先靠 surface contrast 建立分區
- 邊界要偏柔和，不要做成硬卡片
- 這層應該讓人感覺是「區域」，不是「零件」

建議做法：

- `bg-base-100` 疊在 `bg-base-200/20` canvas 上
- 很輕的 border 或 inset shadow
- 先給足 padding，再考慮補 outline

### 3. List Boundary

用在重複項目清單：

- explorer pipeline rows
- run history rows
- settings list

規則：

- 可以有一個 list 外層 panel
- row 本身預設用 divider，不用滿框 card
- 只有 selected、hovered、flagged row 才加強強調

建議做法：

- 一個外層 panel
- `divide-base-300`
- row hover 主要用 surface change
- selected row 用 accent edge 或 semantic tint

不要把主要是掃描型資料的 row 預設做成一張張獨立卡片。

### 4. Inset Boundary

用在父層裡的次級資訊：

- latest run 小模組
- compact stats well
- metadata block
- validation helper zone

規則：

- 必須明顯低於父層的權重
- 不要和父層用同樣的 border 力度
- 以 muted surface 或 inset contrast 為主

建議做法：

- `bg-base-200/30` 或 `bg-base-100/80`
- 輕 border 或 inner shadow
- radius 可比父層再小一點

### 5. Semantic Boundary

用在狀態表達：

- success
- warning
- error
- active / live

規則：

- 狀態應透過 semantic fill、tint、chip、accent bar 或 icon 表達
- 不要只靠中性灰或黑色 border 來表達狀態
- 狀態強調應局部發生，不要污染整個 layout

建議做法：

- `success`、`warning`、`error`、`info`
- 若用填色 surface，搭配對應 `*-content`

## 對齊規則

只有同一層級的邊線，才需要對齊成一致系統。

例子：

- sidebar divider 可以和 header divider 對齊
- 同一列 section cards 可以彼此對齊
- inset panel 不需要硬對齊到父層 outline

不要把不同層級的邊線硬湊成一條連續格線，否則畫面會變成表格，不像應用程式。

## 間距規則

當邊界太生硬時，先降低對線條的依賴，而不是立刻把線畫得更細。

調整順序：

1. 增加外部間距
2. 增加內部 padding
3. 拉開 surface tone
4. 降低 border alpha

除非區域真的需要高辨識度，否則不要四種手段一次全上。

## 圓角規則

圓角也要反映層級，但整體原則是「只要一點弧度」，不要做成明顯大圓角。

建議模式：

- shell：方或極小 radius
- section：小 radius
- inset：相同或略小於父層
- chip / badge：小 radius，避免預設走大 pill 感

避免在 panel、list、inset 上使用 `rounded-xl`、`rounded-2xl` 或強烈的 `rounded-full` 視覺語言。

如果父層和子層使用相同 radius 與相同 border 力度，子層會像貼上去，而不是嵌進去。

## IrisPipe 建議樣式

### Explorer

- explorer canvas 是一個柔和的大區域
- pipeline list 應是一個 section panel
- row 與 row 之間以 divider 為主
- 右側 latest run 使用 inset panel，而不是第二層硬框

### Pipeline Config / Runs / Run Detail

- 外層頁框使用 shell 與 section boundary
- stage canvas 優先靠 spacing 與 surface contrast，不靠重邊框
- side summary rail 可以有 section boundary
- job detail、attempt detail 等次級資訊使用 inset boundary

### Header 與浮動選單

- global header 必須高於 workspace header
- 浮動選單必須蓋過所有內容層
- menu 是 overlay，不是 section panel，因此 stacking order 要高於 local page chrome

## 主題規則

所有邊界樣式都必須從 daisyUI semantic tokens 派生。

允許使用的來源：

- `base-100`
- `base-200`
- `base-300`
- `base-content`
- `success`、`warning`、`error`、`info`

允許使用的技術：

- 由這些 token 推導出的 alpha 變化
- 細微 overlay 或 inset 處理
- 以中性 token 衍生的 shadow

避免：

- 固定 hex border
- 固定灰階色票
- 除非真的無法避免，否則不要做 theme-specific 硬編碼例外

## 反模式

不要做以下事情：

- 每個容器都給一個完整外框
- 父層與子層使用同樣的 border 力度
- 掃描型 row 預設都做成卡片
- 狀態只靠中性 border 表達
- 一遇到層級問題就提高線條對比

## 決策檢查表

在新增或加強邊界之前，先問：

1. 這是 shell、section、list、inset，還是 semantic boundary？
2. 能不能先靠 spacing 解？
3. 能不能再靠 surface contrast 解？
4. 這裡真的需要完整 outline，還是 divider 就夠？
5. 這條邊界是否正在和父層同權重地競爭？

如果第 4 題答案是「divider」，或第 5 題答案是「是」，就不要再加另一個完整外框。

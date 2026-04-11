# IrisPipe Frontend UI 調整規劃

## 依據

本次規劃不是憑印象，而是根據實際瀏覽器畫面截圖審視後整理，檢查範圍包含：

- Overview
- Explorer
- Pipeline Config
- Pipeline Runs
- Run Detail
- Settings
- `light` 與 `dracula` 主題 spot-check

## 主要問題

### 1. light theme 過白，畫布層次不足

- 頁面大面積留白，但主要資訊卡與列表又沒有足夠 tonal separation。
- 即使有邊界線，仍會看起來像把元件直接貼在白底上。

### 2. 邊界存在，但層級過於單一

- shell、section、list、inset 很多時候都用了相近重量的 1px 邊線。
- 使用者能看到框，但不容易分辨哪個是主區塊、哪個是附屬資訊。

### 3. 掃描密度偏低

- Explorer、Runs、Recent Runs 這類掃描型畫面，列高過大、文字太淡、輔助資訊太遠。
- 使用者需要視線跳動很多次，才能理解單列的狀態與後果。

### 4. inset 資訊與主內容分離感過強

- 像 `Latest Run`、validation、summary 小卡，視覺上常像獨立第二張卡。
- 正確做法應該是「依附在主內容上的內嵌資訊」，不是同權重卡片。

### 5. pipeline family 的產品語意已經有了，但視覺節奏未對齊

- backend 的 stage / attempt / runtime semantics 已經被帶進 UI。
- 目前缺的不是資料，而是資訊主從、密度與操作區塊的節奏。

## 調整原則

### 1. 分層順序固定

一律依以下順序處理：

1. 間距
2. 底色層差
3. inset / elevation
4. 邊線

不能反過來用硬框去補足前面三件事。

### 2. 邊界模型固定成五種

- `shell`：整個 app chrome、page header、workspace header
- `section`：頁面中的主要內容區塊
- `list`：掃描型資料列表
- `inset`：依附於主內容的次級資訊
- `overlay`：dropdown、drawer、modal

同層級的邊界才需要對齊，不同層級不要湊成機械格線。

### 3. 列表優先用 divider，不做滿版硬卡

- Explorer row
- Runs row
- Settings connection row
- Overview recent/attention row

這類元件預設應是單一 list panel 裡的 row，而不是每列都是大卡片。

### 4. 只保留小弧度

- shell / section：小弧度
- inset / control：更小弧度
- badge / chip：可再小一點

不使用明顯大圓角，不做 `pill-heavy` 視覺。

### 5. 顏色只能來自 daisyUI semantic token

- 使用 `base-*` 處理大部分結構層
- 使用 `primary / secondary / accent` 處理品牌強調
- 使用 `info / success / warning / error` 處理語意狀態

允許調整的是 alpha、surface 混合比例、shadow 強度，不是寫死 hex。

## 頁面調整策略

### Explorer

- 提升 summary cards 的 tonal hierarchy，避免四張卡像半透明紙片。
- 目錄與 pipeline 區塊改成「section 容器 + 內部 list」。
- pipeline row 改成高密度掃描結構。
- `Latest Run` 改成 attached inset，不再像第二張漂浮卡。

### Overview

- KPI 卡片加強數值層級與語意色塊，但避免過重描邊。
- `Active Runs` 空狀態改成較短、更聚焦的內容區。
- `Operational Attention` 與 `Recent Runs` 改成可掃描的 list 節奏。

### Runs

- 加強 filter 區、table header、row metadata 的對比。
- row 文字與狀態輔助資訊拉近，降低掃描成本。
- latest / live / resumable 的語意提示保留，但降低雜訊。

### Run Detail

- action cluster 與 attempt selector 變成更清楚的操作帶。
- semantic cards 強化主從，避免「都有框但都不突出」。
- stage board 讓 stage lane、connector、job card 的閱讀節奏更一致。

### Config

- stage canvas 保持主畫布優先，summary rail 變成較窄、較緊湊的輔助欄。
- pipeline summary 與 validation 區塊改成依附式 section，而不是過多平權小卡。
- stage/job 編輯器維持高層級 overlay，但不壓過 modal。

### Settings

- Appearance 頁不再只是一排 theme buttons。
- 補上主題說明、目前主題狀態與 semantic token 導向的預覽容器。
- Connections 延續同一套 list panel 規則。

## 驗收標準

- `light / dark / dracula / autumn` 皆可讀。
- 主要頁面不再依賴硬框才能辨識區塊。
- 列表頁能快速掃描，不會因文字過淡或間距過鬆而失焦。
- inset 資訊明顯從屬於主內容，而不是與主卡競爭。
- dropdown / drawer / modal 的層級一致，header 不再錯蓋 overlay。

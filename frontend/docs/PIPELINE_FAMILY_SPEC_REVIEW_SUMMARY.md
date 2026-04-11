# Pipeline Family Spec Review Summary

本文件整理 `staff UIUX & frontend reviewer` 對以下兩份 spec 的 review 結果：

- `PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md`
- `PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md`

reviewer 角色限制：

- 只 review
- 不參與設計
- 不補寫 spec

---

## 1. 總評

兩份 spec 的方向整體正確，且都符合 canonical domain brief：

- 保留 `stage-first model`
- 正確區分 `logical run` 與 `attempt`
- 將 `Config / Runs / Run Detail` 視為同一 family
- 色彩規則維持 daisyUI semantic token 思路

但 reviewer 認為：

- 兩份 spec 都還需要補件，才能成為低歧義 implementation spec
- Spec A 較像產品與資訊架構總規格
- Spec B 較像面向 current view 的重構落地藍圖

---

## 2. 共同優點

1. IA 與 page hierarchy 已成形
2. family language 有一致方向
3. 已納入 state contract、theme semantics、ASCII wireframes
4. 沒有被 current UI 綁死

---

## 3. reviewer 指出的共同缺口

1. 元件層級與命名還不夠精準
2. 資產與標注交付仍偏概念
3. 邊界條件不足
4. 動畫與互動規則缺少觸發條件與停止條件
5. accessibility 與 responsive 規格不足

---

## 4. Spec A review 摘要

### 優勢

- domain 與產品定位最穩
- family IA 清楚
- 能作為北極星規格

### reviewer 指出需補足的項目

1. `Specs & Assets`
   - 固定高度 / 最小高度 / 可滾動區塊 / 預設收合狀態
   - icon、badge、chip、connector、drag affordance 的資產級定義

2. `Design System / UI Kit`
   - family 共用元件清單
   - component inventory
   - variant / state matrix

3. `Flow & Interaction`
   - 核心任務流程圖或步驟表
   - interaction precedence
   - 中斷與錯誤流程

4. `Content & Edge Cases`
   - 空態
   - 極長內容
   - 無 attempts / 無 diagnostics
   - API fail / partial loading
   - destructive wording / disabled reason

5. 其他
   - accessibility
   - responsive

### reviewer 結論

Spec A 適合作為：

- 產品與 domain 主規格

但不能單獨直接交付工程。

---

## 5. Spec B review 摘要

### 優勢

- 比 Spec A 更接近頁面實際落地
- 對 current view 的問題判讀較準
- 對 Config / Runs / Run Detail 的主從關係有較具體規範

### reviewer 指出需補足的項目

1. `Specs & Assets`
   - 尺寸標注
   - breakpoints
   - sticky / pinned / scroll-synced 規則
   - connector、job action rail、drawer handle、timeline item 的資產規格

2. `Design System / UI Kit`
   - family-shared vs page-specific components
   - component governance
   - icon-only / icon+label / destructive hierarchy 規則

3. `Flow & Interaction`
   - stage select → inspector
   - job select → dock
   - hover actions / selected actions 分層
   - drawer 預設開合
   - loading state interaction lock

4. `Content & Edge Cases`
   - 多 stage 橫向 overflow
   - stage 無 jobs
   - run row badges 過多
   - 長 attempt timeline
   - diagnostics 空資料
   - delete stage / delete job 的確認層級

5. 其他
   - dark theme 下結構邊界與 connector 的清楚規格
   - 過渡策略與最終形態區分

### reviewer 結論

Spec B 適合作為：

- current view 重構落地規格

但仍不能直接無歧義交付前端。

---

## 6. reviewer 的路由建議

### 回到 Spec A 補件

由 `senior UIUX with IrisPipe pipeline domain` 補：

1. family 共用元件清單與變體矩陣
2. 核心任務流程與 interaction precedence
3. content rules 與 edge case matrix
4. accessibility 與 responsive 原則

### 回到 Spec B 補件

由 `senior UIUX with IrisPipe pipeline domain and current view` 補：

1. 介面標注與尺寸 / 滾動 / 固定規則
2. page-level interaction transitions
3. current → target 的重構過渡說明
4. dark theme 下結構邊界與 connector 的更明確規格

---

## 7. reviewer 最終判定

最佳使用方式：

- Spec A = `產品與 domain 主規格`
- Spec B = `current view 重構落地規格`

在後續討論與實作時：

- 先用 Spec A 保證不偏離 domain
- 再用 Spec B 指導當前畫面的重構順序與落地方式


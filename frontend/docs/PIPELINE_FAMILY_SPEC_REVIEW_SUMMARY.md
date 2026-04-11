# IrisPipe Pipeline Family Spec Review Summary

本文件記錄本輪 multi-agent spec loop 的 review 結論。

---

## 1. Review 流程

本輪流程採雙迴圈：

1. `senior UIUX with IrisPipe pipeline domain`
2. `senior UIUX with IrisPipe pipeline domain + current view`
3. `staff UIUX & frontend reviewer`

規則：

- 我作為唯一 domain source。
- 兩位 senior agent 若遇到 IrisPipe pipeline domain 不確定，必須先回來問我。
- reviewer 只做 review，不補 spec、不代寫設計。
- 流程不是一次性，而是：
  - 補件
  - review
  - 再補件
  - 再 review
  - 直到可 handoff / 可實作

---

## 2. 第一輪 Reviewer 結論

第一輪 reviewer 判定：

- `A` 比較像 family/domain contract
- `B` 比較像 implementation-facing spec
- 兩者都還不能直接進入實作

主要缺漏：

1. annotated screen inventory
2. asset manifest
3. daisyUI token mapping
4. component inventory / anatomy / variant / state matrix
5. action & flow matrix
6. live update / stale data contract
7. content matrix
8. handoff checklist / DoD

---

## 3. 第一輪補件後的 Reviewer 判定

第一輪補件完成後：

- `A` 已補回：
  - family/domain invariants
  - 視角邊界
  - selection / hierarchy guardrails
  - Config stage header 的 config-facing 狀態語意
  - resume / rerun / skipped / not_run / snapshot drift 等 domain semantics
- `B` 已補回：
  - annotated screen inventory
  - asset manifest
  - daisyUI token mapping
  - component/state/action matrix
  - live update / stale contract
  - content matrix
  - responsive priority
  - handoff checklist / DoD

reviewer 當時的判定是：

- coverage 上已接近可實作
- 但 `B` 正文內部仍有 3 個 blocker

---

## 4. 第二輪 Focused Blockers

reviewer 指出的 3 個 blocker：

1. `Run Detail selection model` 在 `B` 內部衝突
2. `Runs page skeleton / overview rail` 在 `A` 與 `B` 之間，以及 `B` 內部有衝突
3. `B` 中仍保留未被 canonical brief 或 A 錨定的 action surface

處理方式：

- `A` 補件：
  - 明確將 `Runs overview rail` 降級為非 invariant
- `B` 補件：
  - 將 `Run Detail` primary selection 對齊為 `attempt`
  - 將 `stage/job` 降為 diagnostics target
  - 將 `Runs` 明確寫成 `ledger + low-weight contextual rail`
  - 將 `Import`、job-level `delete` 等未錨定 action 從 handoff-required surface 中移除或降級

---

## 5. 最終 Reviewer 結論

最終 focused review 結論：

- `A` 已足夠作為 family/domain invariant spec
- `B` 已足夠作為 implementation-facing handoff spec
- 先前 3 個 blocker 已全部關閉
- 現在 `可以進入實作`

### 已關閉的 blocker

1. `Run Detail selection model`
   - 已統一為：
     - page-bound primary selection = `attempt`
     - `stage/job` = diagnostics target

2. `Runs page skeleton / overview rail`
   - `A` 已明確說明 rail 非 invariant
   - `B` 已明確將 rail 定位為 low-weight contextual rail

3. `未被錨定的 action surface`
   - `Import`
   - job-level `delete`
   - 其他未被 canonical brief / A 錨定 actions
   - 已從 handoff-required surface 中移除或降級為 provisional

---

## 6. Remaining Non-Blocking Improvements

目前仍可補強，但不阻斷實作的項目：

1. `Runs` context strip 中像 `avg runtime` 這類偏 dashboard 的訊號，後續可再檢查是否必要。
2. `B` 尚未獨立整理成資產清單章節；目前 inventory 足夠開工，但若要減少漂移，仍可後補。
3. `Content Matrix` 對 `filter-empty`、`stale`、`partial loading` 的具體 copy 仍可更細。

---

## 7. 當前文件角色

- canonical domain source：
  - [IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/IRISPIPE_PIPELINE_CANONICAL_DOMAIN_BRIEF.md)
- family/domain invariant spec：
  - [PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_SPEC_A_DOMAIN_ONLY.md)
- implementation-facing handoff spec：
  - [PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md](/C:/Users/16/Downloads/codes/IrisPipe/frontend/docs/PIPELINE_FAMILY_SPEC_B_DOMAIN_AND_CURRENT.md)

目前建議使用方式：

- `A` 定義不可破壞的語意邊界
- `B` 作為實作 handoff 主文件
- reviewer summary 作為這輪 spec loop 的審稿紀錄


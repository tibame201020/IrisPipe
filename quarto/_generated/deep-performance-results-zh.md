## 多表資料量 Benchmark

目前圖表只顯示 `identity-relations-v2`（users / roles / user_roles）結果。舊的單表 benchmark 仍保留在 JSON 歷史資料中，但不會與新 schema 的數字混在一起。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。

只有 1M / 10M / 50M 三個實測點，因此圖上只用直線連接量測點，不做平滑、回歸或插值。

_歷史單表結果仍保留 224 cases，供追溯但不列入目前 coverage。_

::: {.panel-tabset}
## H2

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## PostgreSQL

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## MySQL

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## MariaDB

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## SQL Server

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

## Oracle

**目前 schema 覆蓋率：** 0/36 cases

::: {.panel-tabset}
### JOB

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

### CHUNK

_目前 schema 尚無吞吐量量測資料。_

_目前 schema 尚無保留結果。_

:::

:::

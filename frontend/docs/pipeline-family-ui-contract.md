# Pipeline Family UI Contract (v1)

This contract defines a consistent UI structure for the Pipeline family pages:

- Config (`/pipeline/items/:pipelineId/config`)
- Runs (`/pipeline/items/:pipelineId/runs`)
- Run Detail (`/pipeline/items/:pipelineId/runs/:runId`)

## Domain Language Contract

- **Pipeline**: editable configuration definition.
- **Logical run**: a run record created by execute or rerun.
- **Execution attempt**: an execution branch within the same logical run (resume).
- **Stage projection**: runtime stage/job snapshot used for diagnostics.

These terms align with backend architecture semantics for execute / resume / rerun.

## Component Contract

### Shared primitives

- `PipelineContextStrip`: family context header band.
- `PipelineOverviewRail`: secondary inspector rail.
- `StageLaneBoard`: stage/job primary board.

### Page slots

Every family page should expose these slots in order:

1. **Identity slot**: breadcrumb + title + chips.
2. **Tabs slot**: Config / Runs / Run Detail navigation context.
3. **Context strip slot**: summary + metrics/actions.
4. **Primary content slot**: ledger or board.
5. **Inspector rail slot**: secondary context.
6. **Diagnostics drawer slot** (when applicable).

## Layout Contract

- Workspace label text should be exactly: `Pipeline family workspace`.
- Inspector rail widths:
  - compact: `w-[300px] xl:w-[316px]`
  - ledger: `w-[320px]`
  - detail: `w-full xl:w-[336px]`

## P0-P2 completion scope

- **P0**: shared UI contract constants are centralized and consumed by Config/Runs/Run Detail pages.
- **P1**: domain copy is normalized to the same family terms and context-strip detail style.
- **P2**: inspector rail widths are standardized via shared contract tokens (no ad-hoc magic widths in pages).

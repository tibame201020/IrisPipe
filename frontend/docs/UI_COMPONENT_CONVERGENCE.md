# IrisPipe UI Component Convergence

## Why this exists

The current frontend already has a visual direction, but too much of the UI is still assembled page-by-page:

- panels and section headers are repeated with slightly different border and spacing rules
- dialogs are built independently in Explorer, Settings, and import flows
- summary tiles are duplicated across Overview, Explorer, Runs, and Config
- action affordances are inconsistent between buttons, links, toolbar actions, and icon tools

This document defines the component convergence target based on the actual IrisPipe screens, not on abstract design-system theory.

Color semantics are defined separately in `frontend/docs/FRONTEND_COLOR_SYSTEM_RULES.md`. Component convergence should follow that document rather than inventing page-local color logic.

## Current inventory

### Existing shared components

- `frontend/src/components/EmptyState.tsx`
- `frontend/src/components/LoadingState.tsx`
- `frontend/src/components/PageToolbar.tsx`
- `frontend/src/components/PipelineImportDialog.tsx`
- `frontend/src/components/StatusBadge.tsx`
- `frontend/src/components/StageLaneBoard.tsx`

### Repeated page-local UI patterns

- summary tiles in `OverviewPage.tsx`, `PipelineExplorerPage.tsx`, `PipelineRunsPage.tsx`
- dialog shells in `PipelineImportDialog.tsx`, `PipelineExplorerPage.tsx`, `SettingsPage.tsx`
- section headers in `OverviewPage.tsx`, `PipelineExplorerPage.tsx`, `RunDetailPage.tsx`, `SettingsPage.tsx`
- action groups and toolbar buttons in `ConsoleHeader.tsx`, `PipelineExplorerPage.tsx`, `PipelineRunsPage.tsx`, `RunDetailPage.tsx`
- list/inset/surface wrappers across every page

## Convergence rules

### 1. Surface comes before decoration

The UI hierarchy should be expressed in this order:

1. spacing
2. surface difference
3. inset or glass treatment
4. border emphasis

Do not build hierarchy by stacking different random borders.

### 2. Surface variants are finite

Only these surface roles should exist as reusable primitives:

- `section`: the default content block
- `list`: grouped rows with shared shell
- `inset`: attached sub-surface inside a larger panel
- `glass`: dialog or high-attention overlay shell
- `glassBand`: small elevated band for scoped emphasis
- `empty`: intentionally empty but actionable state

### 3. Headers are structural, not decorative

Panel headers should use one shared structure:

- kicker
- optional icon
- optional title/detail
- optional trailing action or meta

Headers should not each invent their own padding and divider logic.

### 4. Summary tiles communicate state, not layout hacks

Summary tiles should be reusable and tone-driven:

- neutral
- primary
- success
- warning
- info
- error

Use theme tokens only. The tile should not redefine its own private palette.

### 5. Dialogs must follow one shell

Every modal should share:

- consistent glass shell
- consistent header and close affordance
- consistent content padding
- consistent footer action alignment

Only the tone and width should vary by use case.

### 6. Actions need semantic levels

Actions should converge into these levels:

- `primary`: main path
- `outline`: secondary but explicit
- `ghost`: low-emphasis text action
- `toolbar`: shell-level utility action
- `icon`: compact tool action
- `danger` / `dangerGhost`: destructive action

Pages should stop inventing one-off button strings when the semantic level is already known.

### 7. Glass is selective

Glass is part of the IrisPipe look, but it should stay attached to:

- shell bars
- dialogs
- compact summary or signal blocks
- lightweight attention cards

It should not become the default surface for dense data work areas.

## Implementation order

1. create shared primitives
2. migrate shared states and dialogs
3. migrate summary tiles and section headers
4. migrate repeated action groups and toolbar actions
5. reduce page-local duplicate class strings only after primitives exist

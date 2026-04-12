# Pipeline Family Review (Post P0-P2 pass)

## What was standardized

1. **Contract source of truth**
   - Added `src/components/pipeline-family/ui-contract.ts` for workspace label, rail widths, and canonical domain terms.
2. **Config / Runs / Run Detail consistency**
   - Config, Runs, and Run Detail now consume shared family terms/context detail and standardized rail widths from the same contract file.
3. **Workspace label consistency**
   - Both `PipelineWorkspaceShell` and `PipelineWorkspaceLayout` now use the same workspace label constant.
4. **Layout header/tabs slot convergence**
   - `PipelineWorkspaceLayout` now renders header/tabs/context through `PipelineWorkspaceShell` slots.
   - `PipelineRunsPage` is flattened to page content + rail (no nested shell), removing duplicate skeleton layers.
5. **Action hierarchy primitive**
   - Added `PipelineFamilyActions` and applied it to Runs + Run Detail action strips.
6. **Screenshot regression workflow**
   - Added a Playwright-based screenshot capture script and documentation for Config/Runs/RunDetail in light/dark themes.
7. **Scroll/sticky rule baseline**
   - `PipelineOverviewRail` header/footer now use sticky behavior and rail/main scroll containers share the same overscroll contract.

## Remaining improvements (next pass)

1. Add baseline-vs-current image diff checks in CI (pixel threshold + failure rules).
2. Add route fixtures for visual test data seeding so screenshot capture is deterministic in CI and local.
3. Unify action disable/loading tooltip copy into one shared helper to prevent message drift.

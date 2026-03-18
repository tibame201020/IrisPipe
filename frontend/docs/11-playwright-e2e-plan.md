# Playwright E2E Plan

## Purpose

This document defines how frontend V1 should adopt Playwright as the UI end-to-end test layer.

The goal is not to wait until all frontend implementation is finished and then add one large test suite.

The goal is:

- establish a Playwright baseline early
- add E2E coverage slice by slice as frontend implementation lands
- finish V1 with a modular Playwright suite that reflects real user flows

## Scope

Playwright is the frontend UI end-to-end layer.

It should verify:

- frontend to backend integration
- route and selection behavior
- control flow behavior
- polling-driven UI refresh behavior
- empty, loading, and conflict states where they matter to the user

It should not be the primary place for:

- low-level component styling assertions
- exhaustive backend behavior verification already covered by backend K6
- unit-level branching logic

## Preconditions

Before Playwright rollout starts, these conditions should hold:

- frontend app shell can run locally
- backend can run locally or through `docker compose`
- frontend can reach backend through same-origin proxy or compose proxy
- backend test data can be reset and seeded deterministically

Current repo evidence:

- local full-stack compose baseline exists in [../../docker-compose.yml](../../docker-compose.yml)
- frontend dev proxy exists in [../proxy.conf.json](../proxy.conf.json)
- backend hidden test-support endpoints exist in [../../backend/src/main/java/irispipe/api/TestSupportAPI.java](../../backend/src/main/java/irispipe/api/TestSupportAPI.java)

## Test Data Strategy

Playwright should not depend on ad hoc manual data.

Use deterministic setup through backend test-support APIs:

- `POST /api/v1/test-support/execute`
- `POST /api/v1/test-support/query`

Recommended usage:

- reset database state before each suite or scenario group
- seed minimal workspace, folders, pipelines, and runs required for the scenario
- keep fixtures small and scenario-specific

This keeps UI tests stable and avoids coupling test setup to UI flows.

## Execution Strategy

Use three layers together:

1. backend K6
   - black-box backend acceptance guardrail
2. frontend Playwright
   - real browser integration guardrail
3. frontend unit/slice tests
   - fast local correctness checks

Playwright should be introduced incrementally.

Do not wait for all screens to be finished first.

## Rollout Order

### Phase 1: Playwright Baseline

Add:

- Playwright dependencies
- `playwright.config`
- frontend `npm` scripts
- `tests/e2e`
- `tests/support`
- base URL configuration
- backend seed/reset helper

Baseline smoke scenarios:

- app shell loads
- backend unavailable state is visible
- workspace and tree load successfully

### Phase 2: Shell And Navigation

Add scenarios for:

- recent route opens
- folder route opens
- pipeline route opens
- run route opens
- sidebar navigation changes route correctly
- sidebar tree renders real backend data

### Phase 3: Read Flows

Add scenarios for:

- recent runs list
- pipeline history list
- run detail load
- attempts timeline render
- latest jobs render
- selected-job step summary render

### Phase 4: Control Flows

Add scenarios for:

- execute from pipeline overview
- stop from run inspector
- resume from run inspector
- rerun from run inspector
- destructive run delete with custom confirm dialog

### Phase 5: Config Flows

Add scenarios for:

- folder view renders real folders and pipelines
- config editor loads real pipeline config
- save pipeline config
- import replace pipeline config
- delete pipeline with custom confirm dialog

## Recommended Test Structure

Suggested layout:

```text
frontend/
  tests/
    e2e/
      shell/
      tree/
      recent-runs/
      pipeline-history/
      run-inspector/
      config-editor/
      control/
    support/
      api/
      db/
      fixtures/
      pages/
      components/
```

Guidance:

- group tests by user-facing feature, not by raw endpoint
- keep page objects pragmatic and thin
- place backend seed/reset helpers under `tests/support/api` or `tests/support/db`
- place reusable locator helpers under `tests/support/pages`

## Selector Strategy

Prefer stable selectors over visual text matching for key interactive elements.

Recommended:

- `data-testid` for:
  - shell regions
  - sidebar tree nodes
  - recent/history rows
  - run inspector sections
  - control buttons
  - confirm dialogs

Avoid:

- brittle CSS selector chains
- over-reliance on long visible text that may evolve during UX refinement

## What Each Test Should Assert

Good Playwright assertions:

- expected route is active
- expected row or panel is visible
- expected backend-seeded data is rendered
- control action changes visible run state
- custom confirm dialog appears before destructive action
- polling updates visible run status when backend state changes

Avoid assertions like:

- exact spacing values
- exact color hex values
- implementation details of signals or facades

## Polling Verification

Polling is a real user-facing behavior and should be validated in Playwright.

Focus on:

- recent activity refresh after backend-seeded run change
- run inspector refresh while run is active
- run inspector stops refreshing after terminal status

Do not try to measure polling internals directly.

Assert visible state transitions instead.

## Environment Modes

Recommended support modes:

### Local app mode

- backend started separately
- frontend started with `npm start`
- Playwright points at `http://localhost:4205`

### Compose mode

- `docker compose up -d`
- Playwright points at `http://localhost:4205`
- frontend reaches backend through nginx proxy

Compose mode is the better default for deterministic E2E.

## Definition Of Done

Frontend V1 should not be considered complete until Playwright includes:

- shell bootstrap coverage
- navigation coverage
- recent/history coverage
- run inspector read coverage
- execute/stop/resume/rerun coverage
- config editor happy-path coverage
- destructive confirm dialog coverage

The desired end state is a modular Playwright suite that can validate frontend V1 without relying on manual verification.

# Backend Testing Docs

This directory now focuses only on backend testing strategy and unit-test handoff.

It no longer tracks Javadoc rollout.
Javadoc is already complete in source.

## Current Testing Strategy

IrisPipe uses two testing layers:

- K6
  - black-box acceptance and regression protection
  - protects public API behavior and end-to-end runtime control flow
- lightweight unit and slice tests
  - implementation-focused coverage for policies, orchestration seams, repositories, and controller binding

These layers are complementary.
Lightweight tests should not replace K6.

## File Map

- [lightweight-unit-test-spec.md](./lightweight-unit-test-spec.md)
  - primary handoff document for Google Jules
  - defines what tests should be written and what should be avoided
- [test-coverage-map.md](./test-coverage-map.md)
  - package and class level map of recommended test slices and priorities

## Scope Rules

- Do not add `@SpringBootTest` for ordinary service logic.
- Keep K6 unchanged while implementing lightweight tests.
- Preserve external API contracts such as `useAsyncLaucher`.
- Use lightweight tests to validate seams created by recent refactors.

## Current Status

- Javadoc rollout: complete
- K6 acceptance layer: existing source of black-box evidence
- Lightweight unit and slice tests: planned, intended for follow-up implementation

## Local K6 Runner

- `backend/k6/run-tests.ps1` runs suites sequentially by default so local full-regression output remains deterministic and easy to trust.
- The runner now prints per-test timing plus a slowest-tests summary at the end of each run so long-running suites can be optimized based on evidence instead of ad-hoc parallel orchestration.
- `IRISPIPE_K6_NAMESPACE` and `IRISPIPE_PIPELINE_NAME_PREFIX` are still supported for isolated fixture execution when needed, and GitHub Actions continues to set them explicitly per matrix job.
- `IRISPIPE_BASE_URL`, `IRISPIPE_PORT`, and `IRISPIPE_H2_DB_URL` may be set when validating against an isolated local backend instance instead of the default `http://localhost:8080`.
- GitHub Actions executes the same suite catalog as the local runner, so local and CI still cover the same end-to-end scenarios even though local no longer defaults to PowerShell-managed suite parallelism.

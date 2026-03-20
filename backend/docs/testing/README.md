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

- `backend/k6/run-tests.ps1` now runs multiple suites in parallel by default when you request more than one suite.
- Parallel local execution uses per-suite fixture namespaces so SQL setup, runtime destination tables, and watermark execution names do not collide on one shared local backend.
- The runner also assigns each `k6 run` process its own ephemeral REST API port so local child processes do not fight over the default `localhost:6565` binding.
- Use `-Sequential` if you want the old one-suite-at-a-time behavior.
- GitHub Actions executes the same suite catalog as the local runner, and each matrix job also sets an explicit K6 namespace so local and CI follow the same fixture isolation rules.

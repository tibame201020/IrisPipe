# Changelog

All notable repository-level changes are documented in this file.

Detailed backend engine changes continue in [backend/CHANGELOG.md](backend/CHANGELOG.md).
Detailed frontend application changes continue in [frontend/CHANGELOG.md](frontend/CHANGELOG.md).

## [Frontend V1 Release Baseline] - 2026-03-18

### Changed
- **Frontend V1 Closed**: The dedicated `frontend/` application now completes its planned V1 implementation tracker, covering shell, folder/config management, run observe/control flows, styling normalization, and validation-pass test coverage.

### Verified
- **Frontend Release Validation**: The frontend release baseline has been verified with `npm run build`, `npm test`, and isolated Playwright execution at `26/26` while leaving the user-managed backend on `8080` untouched.

## [Repository Integration Baseline] - 2026-03-18

### Added
- **Top-Level Full-Stack Compose**: Added [docker-compose.yml](docker-compose.yml) so the frontend and backend can be started together for local integration.
- **Repository-Level Progress Tracking**: Added this root changelog to capture cross-cutting milestones without duplicating every backend or frontend implementation detail.

### Changed
- **Backend Core Engine Maturity**: The backend now operates as a workspace-scoped pipeline engine with folder-tree config management, run history browsing, observability endpoints, and GUI-ready control surfaces. See [backend/CHANGELOG.md](backend/CHANGELOG.md).
- **Frontend V1 Baseline**: The frontend now has a committed design baseline, Angular shell scaffold, local proxy and Docker integration, shell core integration, and a Playwright E2E baseline. See [frontend/CHANGELOG.md](frontend/CHANGELOG.md).

### Verified
- **Integrated Local Flow**: The frontend and backend local integration baseline has been exercised through frontend build validation, backend package/compile validation, Docker Compose bring-up, and frontend Playwright shell navigation checks.

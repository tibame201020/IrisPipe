# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IrisPipe is a workspace-scoped pipeline execution engine. The backend is a Spring Boot + Spring Batch application that exposes a REST API; the frontend is a Vite + React + TailwindCSS + DaisyUI console that consumes it.

## Commands

### Backend (Java 21, Maven, Spring Boot 3.5)

```bash
# Build (skip tests)
cd backend && mvn -q -DskipTests compile

# Run
cd backend && mvn spring-boot:run

# Unit tests (WebMvc slice tests only)
cd backend && mvn test

# Full build + unit tests
cd backend && mvn package
```

The backend starts on port `8080`. H2 console is available at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:./h2data/data`, user: `sa`, password: `sa`).

### Frontend (Node / Vite)

```bash
cd frontend && npm install
cd frontend && npm run dev      # dev server on port 4206
cd frontend && npm run build    # tsc + vite build
cd frontend && npm run lint     # eslint
```

The dev server proxies `/api` and `/actuator` to `http://127.0.0.1:8080`. Override with `IRISPIPE_BACKEND_URL`.

### K6 Integration Tests (requires running backend + k6 CLI)

```powershell
# Run all suites
powershell -ExecutionPolicy Bypass -File backend/k6/run-tests.ps1

# Run specific suite
powershell -ExecutionPolicy Bypass -File backend/k6/run-tests.ps1 -Suite config

# List available suites
powershell -ExecutionPolicy Bypass -File backend/k6/run-tests.ps1 -ListSuites
```

Available suites: `config`, `workspace`, `pipeline-core`, `pipeline-resume`, `pipeline-stop`, `pipeline-operator-safety`, `pipeline-observability`, `pipeline-rerun`, `pipeline-control-loop`, `runtime`.

K6 tests are the primary regression guardrail. When refactoring internals, keep K6 tests unchanged to verify public contract is preserved.

## Architecture

### Backend Package Map

| Package | Responsibility |
|---|---|
| `api` | REST controllers — request validation boundary only |
| `batch` | Spring Batch builders, listeners, tasklets, writers |
| `core.factory` | Runtime job/step assembly (`SyncJobFactory`, step strategies) |
| `core.service` | Pipeline control and run query orchestration |
| `core.utility` | SQL helpers, batch identity, collection helpers |
| `infrastructure.config` | Bean and mapper config |
| `infrastructure.context` | Runtime database context objects (`DatabaseContext`, `SyncJobContext`) |
| `infrastructure.entity.*` | JPA entities grouped by domain (config / folder / runtime / workspace) |
| `infrastructure.repo.*` | JPA repositories grouped by domain |
| `infrastructure.service.config` | Config command, import, read-model, persistence collaborators |
| `infrastructure.service.folder` | Folder tree command, read-model, structure collaborators |
| `infrastructure.service.runtime` | Run lifecycle, snapshot, metadata, watermark collaborators |
| `infrastructure.service.workspace` | Workspace resolution and provisioning |
| `model` | Domain records, enums, mutable runtime summaries |
| `model.dto` | API DTOs |
| `observability` | Metric publishing and observation events |

### Key Architectural Patterns

**Facade + collaborator services** — Facade services sit at the application boundary (`PipelineConfigService`, `PipelineFolderService`, `PipelineExecutionService`); collaborators own narrower slices (`PipelineConfigCommandService`, `PipelineRunLaunchService`, etc.). Do not collapse these back into large single-class services.

**Listener-driven runtime truth** — Command services create rows and launch work; `CustomJobListener` reports Batch transitions; `PipelineRunLifecycleService` projects final runtime state. Controllers/command services do not own final status.

**Snapshot-driven execution** — Each logical run (`PipelineRun`) owns an immutable snapshot materialized at execute-time. Resume reuses the same snapshot; rerun copies it. This prevents config drift from silently affecting in-progress or repeated runs.

**Projection + history split** — Latest projection lives on `PipelineRun`/`PipelineRunJob`; full attempt history lives on `PipelineRunExecution`/`PipelineRunExecutionJob`. Both tables must stay consistent.

**Stage barriers with intra-stage parallelism** — `PipelineRunLaunchService` groups jobs by `stageSequenceOrder`, launches all jobs in a stage in parallel, then waits for the stage to complete before proceeding. A failed stage projects all future stages as `NOT_RUN`.

**Workspace scope** — All config, folder, and runtime flows resolve workspace from the `X-Iris-Workspace-Key` request header (falls back to `default`). Resources are always scoped to the current workspace; cross-workspace access is rejected.

### Error Semantics

- `400` — resource not found, illegal argument, invalid control transition, wrong-workspace resource access
- `409` — uniqueness conflict, delete blocked by children or run history

Do not expect `404` from this backend.

### Database

H2 embedded (file-mode, `./h2data/data`). Schema managed by Flyway migrations in `backend/src/main/resources/db/migration/`. Config tables are prefixed `iris_pipeline_*`; Spring Batch metadata tables are infrastructure detail.

### Frontend Structure

Routes defined in `frontend/src/App.tsx`. Pages live in `frontend/src/pages/`, shared layouts in `frontend/src/layout/`, API calls centralized in `frontend/src/lib/api.ts`, pipeline form state model in `frontend/src/lib/pipeline-draft.ts`.

Key frontend libraries: `@xyflow/react` (pipeline canvas/DAG view), `@monaco-editor/react` (config editor), `@dnd-kit/*` (drag-and-drop stage/job ordering), `react-router-dom` v7, DaisyUI on Tailwind.

### Polling Contract

- Tree / config list: fetch-on-action only, no background polling
- Recent runs: every 5 s foreground / 20 s background
- Active run cards: every 2 s while any visible run is in-flight
- Run detail: every 1 s while status is `STARTING`, `STARTED`, or `STOPPING`; stop on terminal status

### Runtime Control Flow

- `execute` — reads latest stored config, creates new logical run
- `resume` — reuses existing run snapshot, restarts from first incomplete stage
- `rerun` — copies source snapshot, creates brand new logical run from beginning
- `stop` — cooperative (Spring Batch stop request), not force-kill; resume must wait for Batch metadata to settle before launching new execution

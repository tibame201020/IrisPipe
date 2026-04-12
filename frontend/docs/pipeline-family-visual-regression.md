# Pipeline Family Screenshot Regression

Use this workflow to capture deterministic screenshots for:

- Config page
- Runs page
- Run Detail page

under both `light` and `dark` themes.

## Command

```bash
npm run test:visual
```

## Environment overrides

- `IRISPIPE_VISUAL_BASE_URL` (default: `http://127.0.0.1:4206`)
- `IRISPIPE_VISUAL_PIPELINE_ID` (default: `56`)
- `IRISPIPE_VISUAL_RUN_ID` (default: `1`)

Example:

```bash
IRISPIPE_VISUAL_BASE_URL=http://127.0.0.1:4206 \
IRISPIPE_VISUAL_PIPELINE_ID=56 \
IRISPIPE_VISUAL_RUN_ID=1001 \
npm run test:visual
```

## Output

Screenshots are written to:

`frontend/tests/visual-snapshots/current/*.png`

Recommended CI follow-up:

1. Compare against a checked-in baseline directory (e.g. `tests/visual-snapshots/baseline`).
2. Fail build when diffs exceed threshold.

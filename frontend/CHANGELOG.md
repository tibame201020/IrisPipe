# Frontend Changelog

## 2026-03-19

### Frontend reset
- Rebuilt the main `frontend` app on `Vite + React + TailwindCSS + DaisyUI`.
- Aligned the new app around `overview`, `pipeline`, `settings`, and dedicated run detail routes.
- Added Vite proxy and Docker support for the new frontend shell.

### Theme and shell baseline
- Switched the app to DaisyUI theme-driven styling.
- Added theme selection in `Settings` and header theme switching.
- Moved shell styling toward DaisyUI-first surfaces instead of heavy custom component CSS.

### Pipeline explorer refinement
- Reduced the page to a single `EXPLORER CONTENTS` surface.
- Made explorer scrolling happen inside the card instead of at page level.
- Changed folder secondary text to child counts (`folders / pipelines`).
- Added folder create, folder rename, folder delete, and pipeline delete actions.
- Added `New pipeline` handoff from explorer into draft editor mode without creating a backend record first.

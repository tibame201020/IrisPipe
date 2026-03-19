# IrisPipe Frontend

Vite + React + TailwindCSS + DaisyUI console focused on presenting the current IrisPipe backend as an execution engine.

## Run

```bash
npm install
npm run dev
```

The dev server runs on `4206` and proxies `/api` plus `/actuator` to `http://127.0.0.1:8080` by default.

Set `IRISPIPE_BACKEND_URL` if the backend runs elsewhere.

## Notes

- Backend truth stays in the `backend/` implementation.
- Frontend-driven backend extension ideas are tracked in [docs/BACKEND_EXTENSION_WISHLIST.md](./docs/BACKEND_EXTENSION_WISHLIST.md).

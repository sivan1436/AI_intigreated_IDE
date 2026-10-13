# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Firebase setup

1. Create a web app in the Firebase console and enable Google under
   **Authentication > Sign-in method**.
2. Copy `.env.example` to `.env`.
3. Fill in the `VITE_FIREBASE_*` values from the Firebase web app configuration.
4. Start the frontend with `npm run dev`.

The Firebase web configuration is safe to expose in the browser. Do not put a
service-account key in the frontend; keep `ServiceAccount.json` on the backend.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

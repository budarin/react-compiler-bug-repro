# React Compiler `useEffect` Factory Closure Repro

Minimal reproduction for a React Compiler runtime bug where a callback injected into a component factory becomes unbound inside `useEffect`.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Open `http://localhost:5173`.

## Expected

The page renders and console prints:

`welcome from injected callback`

## Actual

Runtime error:

`ReferenceError: showWelcomeNotification is not defined`

## Notes

- The failure appears when React Compiler is enabled via:
  - `@vitejs/plugin-react` + `reactCompilerPreset()`
  - `@rolldown/plugin-babel` preset: `[reactCompilerPreset()]`
- Workaround in affected apps: add `"use no memo"` inside the returned component function.

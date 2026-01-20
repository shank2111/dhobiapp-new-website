# Copilot / AI Agent Instructions

Purpose: help AI coding agents be productive in this repo (a Landy-derived React + TypeScript landing site).

- **Big picture**: single-page React app using Create React App + TypeScript. Pages live under `src/pages` and are lazy-loaded by the router ([src/router/index.tsx](src/router/index.tsx)). Routes are defined in [src/router/config.ts](src/router/config.ts) where each route's `component` string maps to a file in `src/pages/`.

- **Content & i18n**: All textual content is stored in JSON under `content/` and translations under `locales/<lang>/translation.json`. Prefer editing JSON files for copy/locale changes rather than changing component JSX. The app uses `react-i18next`; components commonly wrap exports with `withTranslation()` and use `t('...')` for strings (see `src/components/ContactForm/index.tsx`).

- **Styling & UI**: Uses `styled-components` for CSS-in-JS. Each component typically has a `styles.ts` or `styles.tsx` sibling file. Ant Design (`antd`) components are used for layout primitives (e.g., `Row`, `Col`). Animations use `react-awesome-reveal`.

- **Forms & validation**: Form logic is centralized in `src/common/utils/useForm.tsx` and validations in `src/common/utils/validationRules.ts`. `ContactForm` demonstrates usage: uncontrolled-ish pattern via the custom hook; prefer reusing `useForm` and `validationRules` for new forms.

- **Conventions & patterns**:
  - File-based routes: add a page under `src/pages/Name/index.tsx` and add an entry in `src/router/config.ts` with `component: "Name"` to expose a route.
  - Components live under `src/components/` grouped by feature. Shared primitives live under `src/common/` (Button, Input, TextArea, Container).
  - Types: component props often have a `types.ts` alongside; follow exported type shapes.
  - Lazy imports: router uses `lazy(() => import(`../pages/${routeItem.component}`))` — pages must have default exports.

- **Developer workflows / commands** (from `package.json`):
  - Install: `npm install`
  - Dev server: `npm start` (CRA dev server, typically localhost:3000)
  - Build: `npm run build` (CRA production build)
  - Tests: `npm test` (runs react-scripts tests)

- **Important files to inspect when working**:
  - Routing and pages: [src/router/index.tsx](src/router/index.tsx), [src/router/config.ts](src/router/config.ts), `src/pages/`
  - Content and locales: `content/`, [locales/en/translation.json](locales/en/translation.json)
  - Shared UI and utils: `src/common/` (`useForm.tsx`, `validationRules.ts`, `Button`, `Input`, `TextArea`)
  - Example feature: [src/components/ContactForm/index.tsx](src/components/ContactForm/index.tsx) and [src/components/ContactForm/styles.ts](src/components/ContactForm/styles.ts)

- **Integration points / external deps**:
  - `antd` for grid and UI primitives
  - `styled-components` for styling
  - `react-i18next` + `i18next` for localization
  - `react-awesome-reveal` for entry animations

- **Agent Do's & Don'ts**:
  - Do edit `content/*.json` and `locales/*` for copy/translation work.
  - Do not rename or move page files without updating `src/router/config.ts` (router expects `src/pages/<Name>`).
  - Avoid changing the router's lazy import pattern unless you update all pages accordingly.
  - When adding components follow the existing pattern: component folder with `index.tsx`, `styles.ts`, and `types.ts` if props are non-trivial.

If anything above is unclear or you want more examples (e.g., adding a new page or adding a localized string), tell me which part to expand. 

# Portfolio maintenance

The root `README.md` is the public GitHub profile. Keep setup details here.

## Local development

Use Node.js 22.12 or newer. Run `npm ci`, then `npm run dev`.

Run `npm run lint`, `npm run format:check`, and `npm run build`. To run browser tests, install Chromium with `npx playwright install chromium`, then run `npm test`. The tests use the production build, cover desktop and mobile interactions, check layout overflow, and run axe accessibility checks.

## Content

Featured projects live in `src/data/projects.ts`. Choose projects deliberately, describe implemented behavior, and keep repository URLs accurate. Domain illustrations are original CSS/SVG artwork, not screenshots. Add real product screenshots or measured outcomes only after verifying them. Contact links and the introduction live in `src/App.tsx`.

The portfolio has no API keys, backend, live GitHub requests, external fonts, or required environment variables. Previously unused Gemini configuration and server dependencies have been removed. If a real Gemini key was ever deployed using the old Vite configuration, rotate it: that configuration could expose it to a client bundle.

## Deployment

Publish `dist/` on a static host after `npm run build`. Vite uses relative asset paths to support both root domains and repository subpaths. The existing host is not identified in this repository; keep its build command as `npm run build` and output folder as `dist`.

An optional GitHub Pages workflow is included and runs only when manually dispatched. Before using it, set the repository’s Pages source to GitHub Actions. Its deployment job uses the `github-pages` environment, so any environment approval rules still apply. The README does not link to an unverified website URL. Once the production URL is confirmed, add it to the profile, canonical metadata, and social preview metadata.

CI checks formatting, strict TypeScript, the production build, and browser accessibility and interaction tests on pull requests and pushes to `main`. Automated accessibility tests supplement a keyboard and visual review; they do not guarantee complete accessibility conformance.

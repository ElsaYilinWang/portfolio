# Yilin Elsa Wang — portfolio V1

A desktop-first, one-page portfolio built with React, TypeScript, Vite and plain CSS. No component library, router, backend or animation dependency.

## Run locally

Use Node.js 22 LTS (or Node 20.19+).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Do not open index.html directly from the filesystem.

## Production build

```sh
npm run build
npm run preview
```

`dist/` is the deployable static website. The build runs strict TypeScript checks first. Relative asset URLs support GitHub repository Pages sites and custom domains.

## Publish with GitHub Pages

1. Create a GitHub repository and place the contents of this project at its root, including `.github/` and `package-lock.json`.
2. Push the files to the `main` branch.
3. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
4. Run **Deploy portfolio to GitHub Pages** from the Actions tab if the initial push happened before Pages was enabled.
5. Open the published URL reported by the deployment. Future pushes to `main` rebuild and deploy automatically.

The included workflow installs from the lockfile, checks types, builds, uploads `dist/` and deploys through the GitHub Pages environment. No access tokens or API keys are needed in the source. If using another default branch, update the workflow's branch filter.

Official references: https://vite.dev/guide/static-deploy.html#github-pages and https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Edit the website

- `src/content.ts` — verified links, CV path, capabilities, experience and education.
- `src/App.tsx` — page content, RFQ architecture and expandable case study.
- `src/styles.css` — colours, typography, desktop composition, minimal narrow-screen fallbacks and reduced-motion support.
- `public/YilinWang_AI_1012.pdf` — unchanged canonical AI CV used by both View CV links.
- `.github/workflows/deploy.yml` — GitHub Pages deployment.
- `index.html` — page title, description and social metadata.

Content was checked against the three supplied CVs and the agreed V1 conversation. RFQ metrics retain their scope: 91% field accuracy vs 46% baseline on an 11-case hand-labelled evaluation; 100% precision/recall on a 9-case supplier-search evaluation; 147 automated tests in the RFQ project. These are RFQ project results, not tests of this portfolio.

The two experiments remain concepts. Contact and writing use the actual LinkedIn profile. The repository link points to the public RFQ project. The site does not expose a live AI backend or send messages.

## V1 scope

Desktop layout is the priority, with simple CSS fallbacks to avoid unusable narrow layouts. A dedicated tablet/mobile design pass and interactive RFQ demo remain V2 work. Google Fonts supplies DM Sans and Manrope; system font fallbacks work if fonts cannot load. No portrait, tracking, cookies or contact form.

The original AI CV contains the contact details supplied in that PDF; View CV opens that exact document. This project is ready to deploy, but creating a remote repository and enabling Pages must be done in your GitHub account.

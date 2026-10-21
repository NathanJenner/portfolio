# Nathan Jenner – Developer Portfolio

Source for my developer portfolio, live at <https://nathanjenner.github.io/>.
It is a single-page React site with an "About me" section and a list of
projects and skills.

## Technologies Used

- [React](https://react.dev) and [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com) and [Tailwind Variants](https://tailwind-variants.org)
- [Framer Motion](https://www.framer.com/motion)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/NathanJenner/NathanJenner.github.io.git
cd NathanJenner.github.io
```

Use Node.js 24 (the version used by the deployment workflow) and npm with the
committed `package-lock.json`:

```bash
npm ci
```

### Run the development server

```bash
npm run dev
```

### Lint, build, and preview

```bash
npm run lint -- --no-fix
npm run build
npm run preview
```

`npm run lint` runs ESLint with `--fix` by default; `-- --no-fix` makes it
check only. `npm run build` type-checks with `tsc` and then builds the site
into `dist`.

## Project Structure

- `src/pages/index.tsx` – the home page content
- `src/components/` – shared components (navbar, theme switch, cards, skill buttons)
- `src/config/site.ts` – site name, description, and navigation links
- `src/layouts/` – page layout
- `public/` – static assets

## Deployment

This is a GitHub Pages user site served from the root URL
<https://nathanjenner.github.io/>, so `base` in `vite.config.ts` is `"/"`.

The **Build and deploy GitHub Pages** workflow
(`.github/workflows/pages.yml`) runs on pushes to any branch except `gh-pages`,
on pull requests to `main`, and manually via **workflow_dispatch**. It installs
with `npm ci`, lints, and builds. Only runs on `main` (not pull requests) upload
the `dist` directory as the Pages artifact and deploy it to the `github-pages`
environment. Other branches and pull requests are only linted and built.

For this to work, the repository's **Settings → Pages → Build and deployment →
Source** must be set to **GitHub Actions**.

## License

Licensed under the [MIT license](LICENSE).

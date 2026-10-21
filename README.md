# Vite & HeroUI Template

This is a template for creating applications using Vite and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/frontio-ai/vite-template)

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

To clone the project, run the following command:

```bash
git clone https://github.com/frontio-ai/vite-template.git
```

### Install dependencies

Use Node.js 24 and npm with the committed lockfile:

```bash
npm ci
```

### Run the development server

```bash
npm run dev
```

### Build and publish to GitHub Pages

```bash
npm run lint -- --no-fix
npm run build
npm run preview
```

Vite compiles the application into `dist`. GitHub Pages must serve that
directory's contents, not the source `index.html`. Keep `base: "/"` in
`vite.config.ts`: this is a user site at <https://nathanjenner.github.io/>,
not a project site under `/portfolio/`.

1. In the repository's **Settings → Pages → Build and deployment**, set
   **Source** to **GitHub Actions**, replacing the old `gh-pages` branch source.
2. Ensure the `github-pages` environment permits deployments from `main`
   (**Settings → Environments → github-pages**).
3. Merge the deployment workflow and lockfile into `main`. The **Build and
   deploy GitHub Pages** workflow installs, lints, builds, and publishes `dist`
   automatically on pushes to `main`. It can also be run manually from the
   **Actions** tab on `main`.

Other branches and pull requests are built and linted without publishing.
The workflow uses GitHub's built-in token; no personal access token is needed.
Do not use the old `gh-pages` npm deployment command or publish source files.
After deployment succeeds, open the site and verify that JavaScript and CSS
requests use `/assets/`, not the stale `/portfolio/assets/` paths.

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/frontio-ai/vite-template/blob/main/LICENSE).

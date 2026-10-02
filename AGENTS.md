# Almena ID landing page — notes for contributors and agents

The public face of the project at `almena.id` and `www.almena.id`: the logo, the name, the launch date and a link to the GitHub organisation. A static site built with Astro; `astro build` writes plain files to `dist/`, and the Docker image serves them with nginx.

## Layout

- `src/pages/index.astro` — the one page: markup, styles and Vercel Web Analytics (`<Analytics />` from `@vercel/analytics/astro`). The launch date is `LAUNCH` at the top (midnight in Madrid, 11 November 2026).
- `public/` — served as is: `favicon.svg` (the logo, as in `../registry/app/icon.svg`), `apple-touch-icon.png` and `og-image.png` (from `../wallet/assets/branding`).
- `astro.config.mjs` — the site and its typefaces (Astro's Fonts API, downloaded when building and served from `dist/`): Chakra Petch (`--font-brand`, the name), Inter (`--font-sans`, the text), JetBrains Mono (`--font-mono`, the date), as in the portals.
- `nginx.conf` — the container's server: the files from `dist/`, `/health`, long caching for `/_astro/`.

## Rules

- Orange `#eb7229` is the landing's identity, Almena's original orange (the wallet's default accent): `--brand` in `src/pages/index.astro` (the logo, the date, the link hover, the glow) and `public/favicon.svg`. The identity colours across Almena: status cyan `#3fe0ff`, catalog blue `#2563eb`, registry green `#1f9d55`, mediator magenta `#d63384`, landing orange `#eb7229`, docu yellow `#f2b705`, the wallet the person's choice (orange by default).

- Everything is written in English.
- `almena.id` is also the identity domain: the edge sends the DID paths (`/.well-known/*`, `/ids/*`, `/{slug}/did.json`) to the API, and only the rest to this site. The page must not use those paths.
- Tasks live in `Taskfile.yml` (`task --list`). Before finishing a change: `task check`.

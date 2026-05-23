# lv-labs.com

Portfolio site for `lv-labs.com`, built with Astro.

## Local development

```sh
npm install
npm run dev
```

Build the production site:

```sh
npm run build
```

The static output is written to `dist/`.

## Cloudflare Pages deployment

This site can be deployed to Cloudflare Pages with GitHub integration.

Use these settings when creating the Pages project:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`

After the GitHub repo is connected, Cloudflare Pages will rebuild and deploy on every push to the production branch.

## Domain setup

Once the Pages project is live:

1. Add `lv-labs.com` as a custom domain in Cloudflare Pages.
2. Add `www.lv-labs.com` if you want the `www` hostname too.
3. Update DNS in Cloudflare so the domain points at the Pages project.
4. Enable the redirect you want between apex and `www`.

## Notes

- The current site is a static Astro build, so it does not need any server-side adapter.
- Server-side features such as a short-link API should live in a Cloudflare Worker or Pages Functions project, not in this static site unless you intentionally add functions later.

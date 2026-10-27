# quantumbytech.com

The Quantum ByTech website, built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Run it locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve the production build
```

Requires Node 22.23 or newer.

## Where things live

| To change | Edit |
|---|---|
| Contact details, social links, form endpoint, process steps, home FAQs | `src/data/site.ts` |
| Services and each service page | `src/data/services.ts` |
| Projects in "Recent work" (hidden while empty) | `src/data/projects.ts` |
| Partners page | `src/data/partners.ts` (logos in `public/partners/`) |
| Colours, type scale, buttons | `src/styles/global.css` |
| Page layouts | `src/pages/` |

## Identity

| Token | Hex | Use |
|---|---|---|
| Pine | `#0B3D2E` | Brand colour: headings, buttons, dark sections |
| Signal | `#1FC77A` | The bar in the Q mark, small highlights on dark areas |
| Paper | `#F3F5F2` | Page background |
| Mint | `#E1F0E6` | Soft fills |
| Ink | `#1A2420` | Body text |
| Muted | `#55635D` | Secondary text |

Typeface: Schibsted Grotesk (self-hosted via Fontsource).

The previous site is kept in `legacy-site/` for reference and is not deployed. Old URLs such as `/ecommerce.html` redirect to their new pages (see the HTML files in `public/`).

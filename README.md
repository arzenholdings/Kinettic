# Kinetic Moto Sports

Production website for **Kinetic Moto Sports** — a premium electric moto / e-bike dealership.
Tagline: *Electric Motion. Activated.*

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## Where to edit things

| What | Where |
|---|---|
| Bike data (name, price, specs, etc.) | `lib/products.ts` |
| Bike images | `public/images/bikes/` (filenames must match `image` in `lib/products.ts`) |
| Header / nav links | `components/Header.tsx` |
| Footer info / links | `components/Footer.tsx` |
| Home page sections | `app/page.tsx` |
| Catalog page | `app/bikes/page.tsx` |
| Product detail page | `app/bikes/[slug]/page.tsx` |
| Financing page | `app/financing/page.tsx` |
| Service page | `app/service/page.tsx` |
| About page | `app/about/page.tsx` |
| Contact page | `app/contact/page.tsx` |
| Global colors / fonts | `tailwind.config.ts` and `app/globals.css` |

### Replacing bike images

Drop JPG/PNG/WEBP files into `public/images/bikes/` using these exact filenames:

```
ventus-v1-plus.jpg
talaria-mx5.jpg
sur-ron-light-bee-x.jpg
e-ride-pro-ss.jpg
rawrr-mantis-x.jpg
arctic-leopard-exe.jpg
stealth-bomber-3000w.jpg
```

If a file is missing, the site shows a clean placeholder card so the layout stays clean.

### Editing or adding products

Open `lib/products.ts` and edit / add an entry to the `products` array. Each entry has:

- `name`
- `slug` (used in the URL: `/bikes/<slug>`)
- `category`
- `priceLabel`
- `badge`
- `shortDescription`
- `image`
- `specs` (array of `{ label, value }`)
- `financingAvailable` (boolean)
- `longDescription` (optional)

To change which bikes are in the **Featured** row on the home page, edit `featuredSlugs`.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset will be detected automatically as **Next.js**. Click **Deploy**.
4. Vercel will give you a `*.vercel.app` URL right away.

No environment variables are required for the current build.

## Connect your GoDaddy domain

1. In Vercel, go to your project → **Settings** → **Domains** → **Add**.
2. Enter your domain (e.g. `kineticmotosports.com`).
3. Vercel will show you the DNS records you need to add.
4. Log into [GoDaddy](https://godaddy.com) → **My Products** → **DNS** for your domain.
5. Add the records Vercel showed you:
   - **A record** for `@` → `76.76.21.21`
   - **CNAME** for `www` → `cname.vercel-dns.com`
6. Save. DNS usually propagates in a few minutes (can take up to 48 hours).
7. Vercel will automatically issue an SSL certificate once the domain resolves.

---

## File structure

```
/app                  Next.js App Router pages
  /bikes              Catalog + product detail
  /financing
  /service
  /about
  /contact
/components           Reusable UI (Header, Footer, Hero, ProductCard, etc.)
/lib/products.ts      Single source of truth for the product catalog
/public/images/bikes  Drop bike photos here
```

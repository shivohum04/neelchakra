# NeelChakra — Next.js Website

SEO-optimized Next.js site for NeelChakra (SK Engineering Solutions), a double-coated GI wire manufacturer in Raipur, Chhattisgarh, India.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page is at `/`.

## Build for production

```bash
npm run build
npm start
```

## SEO

- **Metadata**: Title, description, keywords, Open Graph, and canonical URL are set in `app/layout.tsx` (and can be overridden per page).
- **Canonical**: Set `NEXT_PUBLIC_SITE_URL=https://neelchakra.in` in your environment for production so canonical and OG URLs are correct.
- **Sitemap**: When you add more pages, add `app/sitemap.ts` to generate `/sitemap.xml` for better indexing.

## Project structure

- `app/layout.tsx` — Root layout and global SEO metadata
- `app/page.tsx` — Home page (route `/`)
- `app/components/HomePage.tsx` — Home page content and client interactivity (language toggle, nav, form, scroll effects)
- `app/globals.css` — Global styles (same design as original index.html)
- `public/assests/` — Static images (logo, hero, products); served at `/assests/...`

## Adding more pages (for later multi-page SEO)

1. Create `app/about/page.tsx`, `app/products/page.tsx`, etc.
2. Export a `metadata` object or `generateMetadata` from each page for page-specific title/description.
3. Add `app/sitemap.ts` that returns all routes.
4. Update nav/footer links to use Next.js `<Link href="/about">` etc.

Original single-page design is preserved; the site is ready to extend into multiple pages with proper sitemaps and per-page metadata.

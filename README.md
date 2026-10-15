# The IT Farm website

A one-page React (Vite) site for scripts, digital marketing and custom SaaS work.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
```

## Edit the content

- `src/data/siteConfig.js`: business name, email, phone, WhatsApp number, Facebook URL, currency.
- `src/data/services.js`: the service lines shown in "What we build".
- `src/data/facebookAds.js`: Facebook ads copy, monthly plans and prices in pounds (excluding VAT).
- `src/data/scripts.js`: ready-made scripts, prices and optional Buy links.
- `src/components/Process.jsx`: the four project steps and the "Our terms" list.
- `src/index.css`: colours (`--paper`, `--field`, `--marigold` and so on) and fonts.

## Before you launch

1. Replace every placeholder in `siteConfig.js` and `scripts.js`. The prices are examples only.
2. Check the promises in the copy are ones you keep: a fixed-price quote before work starts, payment in stages, and code and accounts handed over once the final invoice is paid. Edit the Hero text, `Process.jsx` and the reply time line in `Contact.jsx` to match how you actually work.
3. Add a social share image at `public/og-image.png` (1200 x 630 px). Facebook uses it when someone shares or boosts a link to the site.
4. Set up enquiries. Either paste a JSON form endpoint (for example Formspree) into `formEndpoint`, or leave it empty so the visitor's email app opens with the details filled in.
5. Add a privacy policy page that covers UK GDPR. The form footnote says enquiry details are only used to reply, so the policy should match.
6. If you add a Meta Pixel for Facebook ads, load it only after the visitor accepts cookies. UK rules (PECR and UK GDPR) require consent for non-essential tracking, so you will need a cookie banner first.
7. Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages). Point your domain at it, then use that domain in your Facebook page and ad links.
# it-farm-uk

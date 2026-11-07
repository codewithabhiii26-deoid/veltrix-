# CodeWithAbhiii portfolio

Responsive React + Vite portfolio for Abhishek Thakur, presenting development services,
professional background, and direct email and phone contact.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Make it yours

| What | Where |
|---|---|
| Name, role, email, phone, services | `src/config/site.js` |
| Project entries and case studies | `src/data/projects.js` |
| Page title, description, social metadata, structured data | `index.html` |
| Colours, type, radii | `:root` in `src/styles/global.css` |

Add or replace project entries in `src/data/projects.js` whenever you want to update the portfolio
showcase. Keep each case study realistic and verified, and add screenshots or live links when available.

## Contact form

The form validates and, without a backend, opens the visitor's email app with the message
prefilled for `codewithabhiii26@gmail.com`. The visitor must press Send in that app. For direct
form submission, add an endpoint of your own and set it in `.env`:

```
VITE_CONTACT_ENDPOINT=https://your-api.com/api/contact
```

Never put an email provider's API key in this frontend. Validate, sanitise, rate-limit and
CORS-restrict on your server.

## Routing

`HashRouter`, so `dist/` works on any static host (GitHub Pages, Netlify, Vercel, S3) with no
rewrite rules. Prefer clean URLs? Swap `HashRouter` for `BrowserRouter` in `src/main.jsx` and add
a catch-all rewrite to `index.html` on your host.

## Search and social previews

The homepage includes a canonical URL, crawler directives, Open Graph/Twitter metadata, a
1200x630 social preview image, and Person/WebSite/ProfilePage structured data. `public/robots.txt`
points crawlers to `public/sitemap.xml`. Keep the canonical, sitemap, and social-image URLs aligned
with the production domain if it changes. After deployment, submit the sitemap URL to Google Search
Console and validate the structured data and social preview with their respective testing tools.

## Deploy to Vercel

The project uses Vite's default production output (`dist/`) and `HashRouter`, so it does not need
rewrite rules. Connect the GitHub repository to a Vercel project with the Vite preset, build command
`npm run build`, and output directory `dist`. Deploy the production branch, then verify the live
homepage, `/robots.txt`, and `/sitemap.xml`.

## Client contact

The navigation and homepage CTAs lead visitors to the contact section. They can email directly or
call the phone number configured in `src/config/site.js`. Without a configured contact endpoint,
the form opens a prefilled email draft for the visitor to review and send.

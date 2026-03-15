# MLTEK Solutions Website

Professional website for MLTEK Solutions — *Data Insights Driving Innovation*.

Live site: **[https://mltekai.github.io/portal](https://mltekai.github.io/portal)**

## Stack

| Layer | Tech |
|-------|------|
| HTML  | Semantic HTML5 |
| CSS   | Custom properties, CSS Grid / Flexbox |
| JS    | Vanilla ES6+ |
| Hosting | GitHub Pages |

## Files

```
portal/
├── index.html    – Main page (Hero, About, Services, Contact)
├── styles.css    – All styles
├── main.js       – Navigation, scroll effects, form handling
├── privacy.html  – Privacy Policy
└── terms.html    – Terms & Support
```

## Local Development

No build step required — open `index.html` directly in a browser or use any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deployment (GitHub Pages)

This repo is configured to publish the `main` branch root via **GitHub Pages**.

Go to **Settings → Pages → Source → Deploy from branch → main → / (root) → Save**.

Your site will be live at `https://<your-github-username>.github.io/portal`.

## Contact

- **Email:** contact@mltekai.com
- **Phone:** 302-468-6034
- **Social:** @mltekai

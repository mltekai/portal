# MLTEK Solutions – Agentic AI Platform Website

A modern, responsive website for MLTEK Solutions showcasing agentic AI services for data-driven organizations.

**Live site:** [https://mltekai.github.io/portal](https://mltekai.github.io/portal)

## 🎯 Features

- **Modern Design**: Dark-themed interface with vibrant accent colors and smooth animations
- **Responsive Layout**: Mobile-first design adapting seamlessly across all devices
- **Blog Platform**: Dedicated blog section with full-featured article pages
- **Interactive Contact Form**: Integrated form with user feedback and validation
- **Service Showcase**: Visual cards highlighting core solutions
- **SEO Optimized**: Meta tags, OpenGraph social sharing, semantic HTML
- **Performance First**: Optimized images, lazy loading, efficient animations

## 📁 Project Structure

```
portal/
├── index.html                    # Main landing page
├── styles.css                    # Global stylesheet with CSS variables
├── main.js                       # Interactive features & form handling
├── CNAME                         # Custom domain configuration
├── privacy.html                  # Privacy Policy
├── terms.html                    # Terms & Support
├── README.md                     # Documentation
├── Blogs/
│   ├── blog-agentic-ai-workflows.html       # "How Agentic AI is Transforming Data Workflows"
│   ├── blog-trustworthy-agents.html         # "Building Trustworthy Autonomous Agents"
│   ├── blog-ai-first-data-strategy.html     # Full comprehensive article
│   └── AI First Series.fld/                 # Supporting media files
```

## 🚀 Quick Start

### Local Development

No build step required! Start a local server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

### Deployment

#### GitHub Pages (Recommended)

1. Push to `main` branch
2. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
3. Site live at `https://<username>.github.io/portal`

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

#### Traditional Hosting

Upload all files via FTP/SFTP to your web server.

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| HTML  | Semantic HTML5 |
| CSS   | CSS Variables, Grid, Flexbox |
| JS    | Vanilla ES6+ |
| Fonts | Google Fonts (Inter) |
| Icons | Unicode Emojis |
| Hosting | GitHub Pages / Netlify / Custom |

## 📝 Content Management

### Adding Blog Posts

1. Create new HTML file in `Blogs/` directory
2. Copy structure from existing blog posts (e.g., `blog-agentic-ai-workflows.html`)
3. Update navigation links in `index.html`:

```html
<div class="blog-category">
  <h3>Category Name</h3>
  <ul>
    <li><a href="Blogs/your-blog.html">Your Blog Title</a></li>
  </ul>
</div>
```

### Updating Services

Edit the Services section in `index.html`:

```html
<div class="card">
  <div class="card-icon">🎯</div>
  <h3>Service Title</h3>
  <p>Service description...</p>
</div>
```

### Contact Form Emails

Currently shows success message. To enable real emails:

**Option 1: Formspree (Recommended)**
- Visit [formspree.io](https://formspree.io) and create a form
- Note your form ID
- Update `main.js` with:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
```

**Option 2: EmailJS**
- Sign up at [emailjs.com](https://www.emailjs.com)
- Configure service ID and template
- Update `main.js` with EmailJS SDK and configuration

**Option 3: Backend API**
- Create a backend endpoint (Node, Python, etc.)
- Update form handler to POST to your endpoint
- Endpoint sends email via service like SendGrid or AWS SES

## 🎨 Customization

### Theme Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --clr-dark:    #0a0e1a;    /* Main background */
  --clr-darker:  #060912;    /* Darker background */
  --clr-accent:  #4f9cf9;    /* Primary blue */
  --clr-accent2: #7b61ff;    /* Secondary purple */
  --clr-text:    #e2e8f0;    /* Main text */
  --clr-muted:   #8899aa;    /* Muted text */
  --clr-card:    #111827;    /* Card background */
  --clr-border:  rgba(255,255,255,0.08); /* Borders */
}
```

### Custom Font

Replace in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700;800&display=swap" rel="stylesheet" />
```

Update `--font` variable in CSS:
```css
--font: 'YourFont', system-ui, sans-serif;
```

### Mobile Breakpoints

Adjust in `styles.css`:

```css
@media (max-width: 900px) { /* Tablet */ }
@media (max-width: 600px) { /* Mobile */ }
```

## ⚙️ Configuration

### Custom Domain

Update `CNAME` file:
```
yourdomain.com
```

### SEO Meta Tags

Update in `<head>` of `index.html`:

```html
<meta name="description" content="Your site description" />
<meta property="og:title" content="Your Title" />
<meta property="og:image" content="https://yourdomain.com/image.jpg" />
```

### Analytics

Add Google Analytics to `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO Checklist

- [x] Meta descriptions on all pages
- [x] OpenGraph tags for social sharing
- [x] Mobile responsive design
- [x] Semantic HTML structure
- [x] Fast page load times
- [ ] Sitemap.xml (TODO)
- [ ] robots.txt (TODO)
- [ ] Structured data/JSON-LD (TODO)
- [ ] Page speed optimization (TODO)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## ⚡ Performance Optimization

1. **Image Optimization**: Compress before adding
   ```html
   <img src="image.jpg" alt="Description" loading="lazy" />
   ```

2. **CDN**: Serve images and assets from CloudFront, Cloudflare, or similar

3. **Caching**: Set appropriate cache headers
   ```
   Cache-Control: max-age=31536000
   ```

4. **Minification**: Minify CSS/JS in production

5. **Performance Score**: Check with [PageSpeed Insights](https://pagespeed.web.dev)

## 🐛 Known Issues & Roadmap

- [ ] Form email integration (in progress)
- [ ] Google Analytics setup
- [ ] Sitemap and robots.txt generation
- [ ] Email newsletter signup
- [ ] Server-side search
- [ ] Dark/Light mode toggle

## 📞 Support & Contact

- **Email**: contact@mltekai.com
- **Phone**: 302-468-6034
- **Location**: Dallas, TX
- **Social**: [@mltekai](https://www.instagram.com/mltekai)

## 📄 License

Copyright © 2026 MLTEK Solutions. All rights reserved.

---

**Last Updated**: March 2026  
**Version**: 2.0 (Enhanced with blog posts, improved styling, and documentation)


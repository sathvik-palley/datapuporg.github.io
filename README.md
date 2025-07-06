# DataPup Website

The official website and blog for DataPup - a modern, cross-platform database client.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
datapup.dev/
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Blog posts (Markdown)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── public/             # Static assets
└── .github/            # GitHub Actions workflows
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: CSS with CSS Custom Properties
- **Deployment**: GitHub Pages
- **Content**: Markdown with frontmatter

## 📝 Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
slug: my-post-slug
title: My Post Title
description: A brief description
pubDate: 2024-01-01
tags: [tag1, tag2]
---

Your content here...
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
# The built site is in the `dist/` directory
```

### Custom Domain

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your DNS to point to GitHub Pages

## 🎨 Customization

### Colors

Edit CSS variables in `src/layouts/BaseLayout.astro`:

```css
:root {
  --color-primary: #3b82f6;
  --color-bg: #ffffff;
  /* ... */
}
```

### Components

All components are in `src/components/` and can be modified as needed.

## 📄 License

MIT License - see LICENSE file for details.

# Pi Developer Handbook - Web Version

This folder contains the HTML version of the Pi Developer Handbook README, designed to serve as a landing page that directs users to the comprehensive documentation wiki.

## Files

- `index.html` - Main HTML page with complete README content
- `styles.css` - Responsive CSS styles for professional appearance

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Professional Styling** - Clean, modern design with Pi Network branding
- **Wiki-Focused** - Prominently directs users to the main documentation wiki
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Accessibility** - Keyboard navigation and screen reader friendly

## Primary Purpose

This website serves as a landing page that:

1. **Showcases the project overview** from the README
2. **Directs users to the wiki** for detailed documentation
3. **Highlights key features** like hybrid app architecture
4. **Provides quick access** to code examples
5. **Offers multiple pathways** to the comprehensive wiki documentation

## Key Links

The website prominently features links to:
- **Main Wiki**: https://github.com/alxspiker/Pi-Developer-Handbook/wiki
- **Getting Started**: https://github.com/alxspiker/Pi-Developer-Handbook/wiki#getting-started-checklist
- **Examples**: Local examples folder and GitHub repository
- **Migration Guide**: https://github.com/alxspiker/Pi-Developer-Handbook/wiki/Migration-Guide

## Deployment

To serve this website:

1. **Local Development**:
   ```bash
   # Navigate to the web folder
   cd web
   
   # Serve with Python (if available)
   python -m http.server 8000
   
   # Or use any static file server
   npx serve .
   ```

2. **Production Deployment**:
   - Can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)
   - No backend requirements - pure static HTML/CSS

## Customization

The website is designed to be easily customizable:
- **Colors**: Modify CSS variables in `styles.css`
- **Content**: Update `index.html` with new information
- **Links**: Update wiki and repository URLs as needed

## Note

This is a **gateway to the wiki** - the real documentation lives in the GitHub wiki. This page serves to provide a professional first impression and clear navigation to the comprehensive resources.

# Deployment Instructions for GitHub Pages

## Initial Setup

1. **Create a new GitHub repository** named `datapup.dev`

2. **Initialize and push the code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DataPup landing page and blog"
   git branch -M main
   git remote add origin https://github.com/yourusername/datapup.dev.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically run on your next push

## Custom Domain Setup (Optional)

To use the custom domain `datapup.dev`:

1. **Create a CNAME file:**
   ```bash
   echo "datapup.dev" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS:**
   - Add an A record pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - OR add a CNAME record pointing to `yourusername.github.io`

3. **Enable HTTPS:**
   - In repository Settings > Pages
   - Check "Enforce HTTPS"

## Deployment Process

The site automatically deploys when you push to the `main` branch:

```bash
# Make changes
git add .
git commit -m "Your commit message"
git push
```

GitHub Actions will:
1. Build the Astro site
2. Deploy to GitHub Pages
3. The site will be available at:
   - `https://yourusername.github.io/datapup.dev` (default)
   - `https://datapup.dev` (with custom domain)

## Manual Build

To build locally and check the output:

```bash
npm run build
# Output will be in the dist/ directory
```

## Troubleshooting

### Build Failures
- Check the Actions tab in GitHub for error logs
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### 404 Errors
- Ensure the base path is correct in `astro.config.mjs`
- Check that GitHub Pages is enabled
- Wait a few minutes for deployment to complete

### Custom Domain Issues
- Verify DNS propagation (can take up to 48 hours)
- Check CNAME file exists in public/
- Ensure domain is verified in repository settings
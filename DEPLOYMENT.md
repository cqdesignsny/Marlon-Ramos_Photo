# Deployment Guide — Marlon Ramos Photography Website

This guide walks you through pushing the project to GitHub and deploying to Vercel.

---

## Step 1: Push to GitHub

### Prerequisites
- Git installed on your machine
- GitHub account with access to the repository
- Repository created at: `https://github.com/cqdesignsny/Marlon-Ramos_Photo.git`

### Commands

1. **Navigate to your project directory:**
   ```bash
   cd "/Users/cqmarketing/Dropbox/Marlon Ramos Photography/MR-Site-2026/New MR Site"
   ```

2. **Initialize Git (if not already initialized):**
   ```bash
   git init
   ```

3. **Add all files to staging:**
   ```bash
   git add .
   ```

4. **Create your first commit:**
   ```bash
   git commit -m "Initial commit: Marlon Ramos Photography 2026 redesign

   - React 19.2.0 + Vite 7.3.1
   - Tailwind CSS 4.1.18 with custom earthy palette
   - Framer Motion animations
   - Complete page structure (Home, Portfolio, About, Services, etc.)
   - 20+ portfolio projects with filterable categories
   - 50+ client testimonials
   - SEO optimized with dynamic meta tags
   - Responsive mobile-first design"
   ```

5. **Add the remote repository:**
   ```bash
   git remote add origin https://github.com/cqdesignsny/Marlon-Ramos_Photo.git
   ```

6. **Verify the remote was added:**
   ```bash
   git remote -v
   ```
   You should see:
   ```
   origin  https://github.com/cqdesignsny/Marlon-Ramos_Photo.git (fetch)
   origin  https://github.com/cqdesignsny/Marlon-Ramos_Photo.git (push)
   ```

7. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

8. **Verify on GitHub:**
   - Go to https://github.com/cqdesignsny/Marlon-Ramos_Photo
   - You should see all your files uploaded

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for First Deployment)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import the repository:**
   - Click **"Add New Project"**
   - Select **"Import Git Repository"**
   - Find and select `cqdesignsny/Marlon-Ramos_Photo`

3. **Configure the project:**
   Vercel should auto-detect these settings, but confirm:

   - **Project Name:** `marlon-ramos-photography` (or your preferred name)
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
   - **Node.js Version:** 18.x or 20.x

4. **Deploy:**
   - Click **"Deploy"**
   - Wait 2-3 minutes for the build to complete
   - You'll get a live URL like: `marlon-ramos-photography.vercel.app`

5. **View your site:**
   - Click the URL to see your live site
   - Share the link with Marlon for review

---

### Option B: Deploy via Vercel CLI (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate

3. **Navigate to your project:**
   ```bash
   cd "/Users/cqmarketing/Dropbox/Marlon Ramos Photography/MR-Site-2026/New MR Site"
   ```

4. **Run deployment:**
   ```bash
   vercel
   ```

   Answer the prompts:
   - **Set up and deploy?** → Yes
   - **Which scope?** → Select your account
   - **Link to existing project?** → No (first time) or Yes (if re-deploying)
   - **Project name:** → `marlon-ramos-photography`
   - **Directory:** → `./` (press Enter)
   - **Override settings?** → No (use auto-detected Vite settings)

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

---

## Step 3: Verify Deployment

### Check Build Logs
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the latest deployment
3. View the build logs to ensure no errors

### Test the Live Site
Visit your deployment URL and test:
- [ ] Homepage loads correctly
- [ ] Navigation works (navbar, footer links)
- [ ] Portfolio page loads and filtering works
- [ ] Individual story pages load (`/portfolio/:slug`)
- [ ] All service pages load
- [ ] Mobile menu works on smaller screens
- [ ] Images load from marlonramosphotography.com URLs
- [ ] Smooth page transitions work

### Performance Check
1. Run Lighthouse audit:
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Run audit on your Vercel URL
   - Target: 90+ on Performance, Best Practices, SEO

---

## Step 4: Custom Domain (Optional - For Later)

When ready to use `marlonramosphotography.com`:

1. **Go to Vercel Dashboard:**
   - Select your project
   - Go to **Settings → Domains**

2. **Add custom domain:**
   - Enter `marlonramosphotography.com`
   - Add `www.marlonramosphotography.com` as well

3. **Configure DNS:**
   - Vercel will provide DNS records
   - Add these to your domain registrar (GoDaddy, Namecheap, etc.)
   - **A Record** → Points to Vercel IP
   - **CNAME Record** → Points to `cname.vercel-dns.com`

4. **Wait for propagation:**
   - DNS changes take 24-48 hours
   - SSL certificate auto-provisioned by Vercel

5. **Set up redirects:**
   - Create `vercel.json` in project root to redirect old WordPress URLs
   - Configure 301 redirects as needed

---

## Step 5: Continuous Deployment

Once connected to GitHub, every push to `main` will auto-deploy:

1. **Make changes locally**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. **Vercel auto-deploys** (takes 2-3 minutes)
4. **View deployment** in Vercel dashboard

---

## Troubleshooting

### Build Fails on Vercel

**Problem:** Build fails with module errors

**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Try building locally:
   ```bash
   npm run build
   ```
4. If local build succeeds, clear Vercel cache and redeploy

---

### Images Not Loading

**Problem:** Portfolio images show broken links

**Solution:**
- Verify image URLs in `src/content/portfolioData.js`
- Ensure URLs are publicly accessible
- Check browser console for CORS errors

---

### Page Not Found (404)

**Problem:** Direct URLs like `/portfolio/olivia-dillon` show 404

**Solution:**
- Vercel should handle this automatically for Vite
- If needed, create `vercel.json`:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

---

### Slow Build Times

**Problem:** Vercel builds take longer than expected

**Solution:**
- Check for large dependencies
- Verify `node_modules` is in `.gitignore` (it is)
- Consider optimizing images before deployment

---

## Environment Variables (For Later)

When you need to add API keys, analytics, etc.:

1. **Go to Vercel Dashboard:**
   - Select project → Settings → Environment Variables

2. **Add variables:**
   - `VITE_GA_ID` → Google Analytics ID
   - `VITE_HONEYBOOK_URL` → HoneyBook form URL
   - `VITE_INSTAGRAM_TOKEN` → Instagram API token (if needed)

3. **Important:**
   - Prefix ALL variables with `VITE_` to expose to client
   - Redeploy after adding variables

---

## Quick Reference

### Useful Commands

```bash
# Check Git status
git status

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Push changes
git add .
git commit -m "Description"
git push origin main

# Deploy to Vercel (CLI)
vercel --prod

# Build locally
npm run build

# Preview build locally
npm run preview
```

### Important URLs

- **GitHub Repo:** https://github.com/cqdesignsny/Marlon-Ramos_Photo
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Live Site:** [Your Vercel URL after deployment]

---

## Next Steps After Deployment

1. [ ] Share Vercel preview URL with Marlon for feedback
2. [ ] Conduct thorough testing on mobile devices
3. [ ] Run performance audits
4. [ ] Plan content updates (real images, copy)
5. [ ] Consider adding analytics tracking
6. [ ] Set up custom domain when ready
7. [ ] Configure email for contact form
8. [ ] Update Google Business Profile with new URL

---

**Last Updated:** February 11, 2026
**Prepared by:** CQ Marketing

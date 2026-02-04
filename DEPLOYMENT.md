# Deployment Guide

This portfolio is 100% static files. No build step, no server, no database. Deploy anywhere that hosts HTML.

## 🚀 Recommended: GitHub Pages (Free)

### Step 1: Create Repository
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `main` branch
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/portfolio/`

### Step 3: Custom Domain (Optional)
1. Buy a domain (Namecheap, Google Domains, etc.)
2. Add a `CNAME` file to your repo with your domain:
   ```
   yourname.com
   ```
3. In your domain registrar, add DNS records:
   - **A Record**: `185.199.108.153`
   - **A Record**: `185.199.109.153`
   - **A Record**: `185.199.110.153`
   - **A Record**: `185.199.111.153`
4. Wait for DNS propagation (up to 24 hours)

## ⚡ Alternative: Netlify (Free)

### Option A: Drag and Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag your portfolio folder onto the deploy zone
3. Done. You get a URL like `yoursite.netlify.app`

### Option B: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repo to Netlify
3. Build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: `.` (root)
4. Deploy

### Custom Domain on Netlify
1. Go to **Domain Settings**
2. Add your custom domain
3. Follow DNS instructions (Netlify provides them)

## 🔷 Alternative: Cloudflare Pages (Free)

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a new project
4. Connect your GitHub repo
5. Build settings:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
6. Deploy

Benefits:
- Global CDN
- Unlimited bandwidth
- Free SSL
- Lightning fast

## 🔶 Alternative: Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. No build settings needed
5. Deploy

## 📦 Alternative: Traditional Hosting

If you have shared hosting (cPanel, etc.):

1. Compress your portfolio folder as `.zip`
2. Upload via FTP or File Manager
3. Extract in your `public_html` or `www` directory
4. Done

## 🔒 HTTPS Setup

All recommended platforms provide free SSL certificates automatically:
- GitHub Pages: Auto HTTPS
- Netlify: Auto HTTPS
- Cloudflare Pages: Auto HTTPS
- Vercel: Auto HTTPS

## 🌍 CDN & Performance

### GitHub Pages
- Uses GitHub's CDN
- Good global performance
- Free

### Netlify
- Uses Netlify's global CDN
- Excellent performance worldwide
- Free tier is generous

### Cloudflare Pages
- Uses Cloudflare's massive CDN
- Best performance (200+ data centers)
- Free unlimited bandwidth

## 📊 Analytics Setup

### Google Analytics (Free)
1. Create a Google Analytics property
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-focused, Paid)
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Add script to `index.html`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🔄 Auto-Deploy Workflow

Once set up with GitHub Pages/Netlify/Vercel:

1. Edit your files locally
2. Test locally (open `index.html` in browser)
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update projects"
   git push
   ```
4. Your site auto-deploys in 30-60 seconds

## ✅ Pre-Deploy Checklist

- [ ] Updated `data/profile.json` with your info
- [ ] Updated `data/projects.json` with your projects
- [ ] Updated `data/linkedin_posts.json` with posts
- [ ] Tested locally (opened `index.html` in browser)
- [ ] Verified all links work
- [ ] Checked GitHub username is correct
- [ ] Committed all changes to git

## 🎯 Post-Deploy Tasks

1. **Test on multiple devices**: Mobile, tablet, desktop
2. **Test on multiple browsers**: Chrome, Firefox, Safari
3. **Check loading speed**: Use PageSpeed Insights
4. **Verify GitHub integration**: Check repos load
5. **Share your portfolio**: LinkedIn, Twitter, email signature

## 🚨 Common Issues

### "Page not found" on GitHub Pages
- Wait 5 minutes after enabling Pages
- Check the repository is public
- Verify the branch name is correct

### Custom domain not working
- DNS takes up to 24 hours
- Clear your browser cache
- Use DNS checker tool to verify propagation

### GitHub API rate limit
- You hit 60 requests/hour limit
- Wait 1 hour or add a GitHub token
- See README for token setup

## 📝 Updating Your Portfolio

To update after deployment:

```bash
# Edit your data files
nano data/projects.json

# Commit and push
git add .
git commit -m "Added new project"
git push

# Your site updates automatically
```

## 🎉 You're Done!

Your portfolio is now live and will update automatically whenever you push changes.

Remember: The portfolio is just the interface. Now go build the projects worth showcasing.

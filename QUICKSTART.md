# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes.

## 📦 What You Got

A complete, production-ready portfolio with:
- ✅ Automated GitHub integration
- ✅ Project showcase system
- ✅ LinkedIn posts (manual update)
- ✅ Distinctive dark theme
- ✅ Zero dependencies
- ✅ Mobile responsive

## ⚡ Immediate Setup (3 Steps)

### 1. Update Your Info (2 minutes)

Open `data/profile.json` and replace with your details:

```json
{
  "name": "Your Name",
  "tagline": "Your • Skills • Here",
  "location": "Your City, Country",
  "github": "your-github-username",
  "linkedin": "your-linkedin-id"
}
```

**Important**: Make sure your GitHub username is correct - the portfolio auto-fetches your repos.

### 2. Add Your Projects (2 minutes)

Edit `data/projects.json`:

```json
[
  {
    "title": "Your Project Name",
    "description": "What it does in one sentence",
    "github": "https://github.com/yourusername/repo",
    "tags": ["Python", "Machine Learning", "etc"]
  }
]
```

Leave `"github": ""` empty if no public repo exists.

### 3. Test Locally (30 seconds)

Just open `index.html` in your browser. That's it.

No npm install. No build. No server. Just HTML.

## 🌐 Deploy (5 minutes)

### Easiest: GitHub Pages

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Enable GitHub Pages:
# Settings → Pages → Source: main branch → Save
```

Your site: `https://yourusername.github.io/portfolio/`

### Even Easier: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag your portfolio folder
3. Done.

## 🔄 Weekly Maintenance

### Adding LinkedIn Posts (30 seconds)

Edit `data/linkedin_posts.json`:

```json
[
  {
    "title": "Your Post Title",
    "url": "paste-linkedin-post-url-here",
    "date": "2026-02-04"
  }
]
```

Push to git → Auto-deploys

### Adding Projects (1 minute)

Add to `data/projects.json` → Push → Done.

## ✨ What Auto-Updates

- ✅ GitHub contribution graph (daily)
- ✅ Your latest repos (every page load)
- ✅ Repo stars/forks (real-time)

## ⚠️ What Doesn't

- LinkedIn posts (add manually to JSON)
- Projects (add manually to JSON)
- Profile info (update JSON)

**Why?** LinkedIn's API is restricted. Manual JSON is faster than building OAuth.

## 🎨 Customization

### Change Colors

Edit `css/style.css`:

```css
:root {
    --accent-primary: #00ff88;    /* Your color here */
    --accent-secondary: #00d4ff;  /* Your color here */
}
```

### Change Fonts

1. Find fonts on [Google Fonts](https://fonts.google.com)
2. Update `<link>` in `index.html`
3. Update CSS variables in `style.css`

## 🐛 Troubleshooting

**GitHub repos not showing?**
- Check username in `data/profile.json`
- Open browser console (F12) for errors
- GitHub API has 60 req/hour limit (wait if exceeded)

**Projects not appearing?**
- Check JSON syntax at [jsonlint.com](https://jsonlint.com)
- Verify file is saved
- Hard refresh (Ctrl+Shift+R)

**Styling broken?**
- Check file paths (case-sensitive on Linux)
- Verify all files copied correctly
- Clear browser cache

## 📱 Testing Checklist

- [ ] Open on mobile (Chrome DevTools → Toggle Device)
- [ ] Test on Firefox
- [ ] Check GitHub integration works
- [ ] Verify all links clickable
- [ ] Test on actual phone

## 🎯 Next Level

After basic setup works:

1. **Add analytics**: See DEPLOYMENT.md
2. **Custom domain**: See DEPLOYMENT.md
3. **Add blog section**: See README.md
4. **More projects**: Keep updating JSON

## 💡 Pro Tips

1. **Test locally before pushing**
   - Just open `index.html` in browser
   - No server needed for testing

2. **Use meaningful commit messages**
   ```bash
   git commit -m "Add new ML project"
   ```

3. **Update weekly**
   - New LinkedIn post → Update JSON
   - Builds momentum

4. **Don't overthink it**
   - Ship first, perfect later
   - The content matters more than the container

## 🔥 Your Action Items

1. [ ] Update `data/profile.json`
2. [ ] Add 3-5 projects to `data/projects.json`
3. [ ] Test locally
4. [ ] Deploy to GitHub Pages
5. [ ] Share the link

## 📚 Full Documentation

- `README.md` - Complete guide + philosophy
- `DEPLOYMENT.md` - Hosting options + setup
- This file - Quick start

---

**Time to deploy: 5 minutes**  
**Time to overthink: Don't.**

Your portfolio is ready. Now go build the projects worth showcasing.

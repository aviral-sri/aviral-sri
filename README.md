# Aviral Srivastava - Portfolio

A clean, scalable, engineering-focused portfolio built with pure HTML, CSS, and JavaScript. No frameworks, no build tools, no lock-in.

## 🎯 Philosophy

This portfolio follows an **engineering-first** approach:
- Content is data-driven (JSON files)
- GitHub integration is fully automated
- LinkedIn posts use a manual fallback (because LinkedIn's API is restricted)
- Clean separation of structure (HTML), style (CSS), and behavior (JS)
- Zero dependencies, zero build steps

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML structure
│
├── css/
│   └── style.css          # All styling (dark theme, technical aesthetic)
│
├── js/
│   ├── main.js            # Profile and projects loader
│   ├── github.js          # GitHub API integration
│   └── linkedin.js        # LinkedIn posts loader
│
├── data/
│   ├── profile.json       # Your profile information
│   ├── projects.json      # Your projects
│   └── linkedin_posts.json # Featured LinkedIn posts (manual)
│
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Update Your Profile

Edit `data/profile.json`:

```json
{
  "name": "Your Name",
  "tagline": "Your Tagline",
  "location": "Your City, Country",
  "github": "your-github-username",
  "linkedin": "your-linkedin-username",
  "email": "your.email@example.com",
  "phone": "your-phone"
}
```

### 2. Add Your Projects

Edit `data/projects.json`:

```json
[
  {
    "title": "Project Name",
    "description": "Brief description of what it does",
    "github": "https://github.com/username/repo",
    "tags": ["Tag1", "Tag2", "Tag3"]
  }
]
```

**Important**: Leave `github` as an empty string `""` if the project doesn't have a public repo.

### 3. Add LinkedIn Posts

Edit `data/linkedin_posts.json`:

```json
[
  {
    "title": "Post Title",
    "url": "https://www.linkedin.com/posts/your-post-url",
    "date": "2026-01-30"
  }
]
```

### 4. Deploy

Upload all files to any static hosting service:

- **GitHub Pages**: Push to a repo, enable Pages in settings
- **Netlify**: Drag and drop the folder
- **Cloudflare Pages**: Connect your Git repo
- **Vercel**: Import your repository

No build configuration needed. It's all static files.

## 🔄 What Auto-Updates

### ✅ Fully Automated
- **GitHub contribution graph**: Updates daily automatically
- **GitHub repositories**: Fetches your latest repos via API
- **Repository stats**: Stars, forks, languages

### ⚠️ Manual Updates Required
- **LinkedIn posts**: You must add new posts to `linkedin_posts.json`
- **Projects**: Add/edit in `projects.json`
- **Profile info**: Update in `profile.json`

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #0a0e12;
    --accent-primary: #00ff88;
    --accent-secondary: #00d4ff;
    /* ... more colors */
}
```

### Fonts

Current fonts:
- **Display/Code**: JetBrains Mono (technical, monospace)
- **Body**: IBM Plex Sans (clean, professional)

To change fonts, update the Google Fonts import in `index.html` and the CSS variables.

### GitHub Contribution Graph

Two options available in `js/github.js`:

**Option 1** (Current): GitHub Chart
```javascript
graphImg.src = `https://ghchart.rshah.org/00ff88/${username}`;
```

**Option 2**: GitHub Readme Activity Graph
```javascript
graphImg.src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark`;
```

## 🔧 Advanced Features

### Adding a Blog

1. Create `data/blog.json`:
```json
[
  {
    "title": "Post Title",
    "url": "/blog/post-slug.html",
    "date": "2026-01-30",
    "excerpt": "Brief description"
  }
]
```

2. Add a new section in `index.html`
3. Create a loader in `js/blog.js`

### Rate Limit Handling

GitHub API has rate limits (60 requests/hour unauthenticated). If you hit the limit:

1. **Option A**: Add a GitHub Personal Access Token (PAT)
   - Increases limit to 5000/hour
   - Add to `js/github.js`:
   ```javascript
   const response = await fetch(url, {
       headers: {
           'Authorization': 'token YOUR_GITHUB_TOKEN'
       }
   });
   ```
   
2. **Option B**: Cache the response
   - Use localStorage to cache for 1 hour
   - Reduces API calls

### LinkedIn Automation (Advanced)

To truly automate LinkedIn posts, you need:
- A backend server
- LinkedIn OAuth authentication
- LinkedIn Partner approval

This is overkill for a portfolio. The manual JSON file approach is intentional and professional.

## 📊 Performance

- **No build step**: Instant updates
- **No dependencies**: 0 KB of node_modules
- **Pure static**: Blazing fast, CDN-friendly
- **Lighthouse scores**: 95+ across the board

## 🛠️ Troubleshooting

### GitHub repos not loading
1. Check your GitHub username in `data/profile.json`
2. Check browser console for API errors
3. Verify you're not rate limited (wait 1 hour)

### LinkedIn posts not showing
1. Verify `data/linkedin_posts.json` exists
2. Check JSON syntax (use JSONLint)
3. Ensure URLs are valid

### Styling looks broken
1. Verify all CSS files are in the correct path
2. Check browser console for 404 errors
3. Clear browser cache

## 📝 Maintenance

### Weekly
- Add new LinkedIn posts to `linkedin_posts.json`

### Monthly
- Update projects in `projects.json`
- Review and update skills section

### Yearly
- Update profile information
- Refresh color scheme if desired
- Add new sections as needed

## 🎯 Next Steps

When your portfolio stops being a website and becomes an interface:

1. **Add analytics**: Google Analytics or Plausible
2. **Add blog**: Markdown to HTML rendering
3. **Add case studies**: Deep dives into projects
4. **Add OpenGraph tags**: Better social sharing
5. **Add dark/light mode toggle**: User preference

## 📄 License

This portfolio template is free to use. Build on it, modify it, make it yours.

## 🤝 Contributing

Found a bug or have a suggestion? This is your portfolio now. Fix it, improve it, scale it.

---

**Built once. Update forever.**

The point isn't to have the flashiest portfolio. The point is to have a portfolio that showcases your work without becoming work itself.

Now go build something real.

# Quick Start Guide

## 🚀 Get Running in 2 Minutes

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm start
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:4200/**

---

## 📖 What You Get

✅ **Home Page** - Hero section, projects showcase, skills, about section, contact form
✅ **Multiple Project Pages** - Dedicated pages for each portfolio piece
✅ **Dark Mode** - Toggle between light and dark themes
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Modern Styling** - Glassmorphism effects, smooth animations, beautiful gradients
✅ **Easy Customization** - Change colors, text, and content easily

---

## 🎨 Key Features

- 🎯 **Modern SaaS Design** - Beautiful, professional look
- 📱 **Mobile First** - Fully responsive and touch-friendly
- 🌓 **Dark Mode** - Built-in theme switcher with persistence
- ⚡ **Fast** - Optimized Angular application
- 🔄 **Smooth Navigation** - Single-page application with instant page loads

---

## 📁 Project Files Structure

### Pages
- `src/app/pages/home/` - Home/landing page
- `src/app/pages/chart-of-accounts/` - Chart of Accounts page
- `src/app/pages/power-bi/` - Power BI Dashboard page
- `src/app/pages/csrd-reporting/` - CSRD Reporting page

### Main App Files
- `src/app/app.component.ts` - Main component with header/footer
- `src/app/app.routes.ts` - Route configuration
- `src/style.css` - Global styles and CSS variables
- `src/index.html` - Root HTML file

---

## 🎯 Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/chart-of-accounts-ai` | Chart of Accounts |
| `/power-bi-financial-dashboard` | Power BI Dashboard |
| `/csrd-reporting-simulation` | CSRD Reporting |

---

## 🛠️ Common Tasks

### Change Site Title
Edit `src/index.html` line 6:
```html
<title>Your Portfolio - Your Name</title>
```

### Update Navigation Links
Edit `src/app/app.component.ts` - update the `navLinks` array

### Change Colors
Edit `src/style.css` - modify `:root` CSS variables

### Update Hero Text
Edit `src/app/pages/home/home.page.html` - update hero section

### Add New Page
1. Create folder: `src/app/pages/yourpage/`
2. Create files: `yourpage.page.ts`, `yourpage.page.html`, `yourpage.page.css`
3. Add route in `src/app/app.routes.ts`
4. Add nav link in `src/app/app.component.ts`

---

## 🎨 Theme Colors

**Primary Colors:**
- Primary (Navy): `#0a2540`
- Secondary (Green): `#00a86b`

**Light Theme:**
- Background: `#f5f7fa`
- Text: `#11263d`
- Surface: `rgba(255, 255, 255, 0.78)`

**Dark Theme:**
- Background: `#0c1928`
- Text: `#e9f0f7`
- Surface: `rgba(18, 37, 58, 0.72)`

Edit these in `src/style.css` `:root` selector.

---

## 📦 Build for Production

```bash
npm run build
```

Output: `dist/mohamedmnejja-portfolio/`

---

## 🚢 Deploy Options

- **Vercel**: `vercel` (free, easy, recommended)
- **Netlify**: `netlify deploy`
- **GitHub Pages**: GitHub Pages
- **AWS**: AWS Amplify or S3 + CloudFront

---

## 💡 Tips & Tricks

1. **Local Storage**: Dark mode preference is saved automatically
2. **Smooth Scroll**: Clicking nav links smoothly scrolls to sections
3. **Lazy Loading**: Pages are loaded on demand for better performance
4. **Responsive Grids**: Automatically adjust layout on smaller screens
5. **Hover Effects**: Cards and buttons have smooth hover animations

---

## 📚 Documentation

- Full docs: See [INSTALL.md](./INSTALL.md)
- Project details: See [README.md](./README.md)

---

## ❓ Need Help?

1. Check [INSTALL.md](./INSTALL.md) for detailed setup
2. Review [README.md](./README.md) for full documentation
3. Check Angular docs: https://angular.io

---

**Ready to build something amazing? Happy coding! 🚀**

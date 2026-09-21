# Installation & Setup Guide

## System Requirements

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: For version control

## Step-by-Step Installation

### 1. Check Node.js Installation

First, verify that Node.js and npm are installed:

```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

### 2. Navigate to Project Directory

```bash
cd "c:\Users\THINKPAD\Desktop\mohamedmnejjaV2 thinkpad"
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 4. Start Development Server

**Option A: Using npm command**
```bash
npm start
```

**Option B: Using the convenience script (Windows)**
```bash
run.bat
```

**Option C: Using the convenience script (Linux/Mac)**
```bash
chmod +x run.sh
./run.sh
```

### 5. Open in Browser

Navigate to `http://localhost:4200/` in your web browser.

The application will automatically reload when you modify any source files.

## Building for Production

To build the project for production:

```bash
npm run build
```

The compiled files will be output to the `dist/` directory.

## Project Structure

```
├── src/
│   ├── app/                          # Angular application root
│   │   ├── pages/                    # Page components
│   │   │   ├── home/
│   │   │   ├── chart-of-accounts/
│   │   │   ├── power-bi/
│   │   │   └── csrd-reporting/
│   │   ├── app.component.ts          # Main component
│   │   ├── app.routes.ts             # Route configuration
│   │   └── ...
│   ├── style.css                     # Global styles
│   ├── main.ts                       # Application entry point
│   ├── index.html                    # Root HTML file
│   └── ...
├── angular.json                      # Angular CLI configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Project dependencies
├── README.md                         # Project overview
└── ...
```

## Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Watch files and rebuild on changes
npm run watch

# Run tests
npm test
```

## Troubleshooting

### Issue: "npm command not found"
**Solution**: Make sure Node.js is installed and added to your PATH. Restart your terminal/PowerShell after installation.

### Issue: Port 4200 already in use
**Solution**: The development server will try the next available port. Check the terminal output for the actual port being used, or kill the process using port 4200 first.

### Issue: Module not found errors
**Solution**: Delete `node_modules` folder and run `npm install` again:
```bash
rm -r node_modules
npm install
```

### Issue: Angular CLI not found
**Solution**: Install Angular CLI globally or use npx:
```bash
npm install -g @angular/cli
```

## Git Setup

Initialize git if not already done:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial commit: Angular portfolio website"
```

## Customization Tips

### Change Site Title
Edit `src/index.html`:
```html
<title>Your Portfolio - Your Name</title>
```

### Update Personal Information
Edit `src/app/app.component.ts` to update navigation links and contact information.

### Modify Colors
Edit CSS variables in `src/style.css`:
```css
:root {
  --primary: #0a2540;
  --secondary: #00a86b;
  /* ... */
}
```

### Add New Pages
1. Create a new folder in `src/app/pages/`
2. Create component files (`.ts`, `.html`, `.css`)
3. Add route in `src/app/app.routes.ts`
4. Add navigation link in `src/app/app.component.ts`

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Start the development server (`npm start`)
3. ✅ Customize the content with your information
4. ✅ Test all pages and features
5. ✅ Build for production (`npm run build`)
6. ✅ Deploy to your hosting provider

## Deployment

### Build the Application
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages
Configure your `angular.json` and deploy using GitHub Pages.

## Support & Resources

- [Angular Documentation](https://angular.io)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Node.js Documentation](https://nodejs.org/docs)

---

**Happy coding! 🚀**

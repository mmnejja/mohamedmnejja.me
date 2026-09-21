# Mohamed Mnejja Portfolio Website

A modern, responsive Angular portfolio website featuring AI-powered financial solutions and enterprise applications.

## Features

- 🎨 **Modern Design**: Beautiful SaaS-inspired UI with glassmorphism effects
- 🌓 **Dark Mode**: Built-in dark/light theme toggle with localStorage persistence
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Performance**: Optimized Angular with lazy loading and standalone components
- 🎯 **Multi-page**: Home page with hero, projects, skills, about, and contact sections
- 📊 **Project Pages**: Dedicated pages for:
  - Chart of Accounts AI
  - Power BI Financial Dashboard
  - CSRD Reporting Simulation

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Main app component with header/footer
│   ├── app.component.html        # Header navigation template
│   ├── app.routes.ts             # Route configuration
│   └── pages/
│       ├── home/                 # Home page component
│       ├── chart-of-accounts/    # Chart of Accounts page
│       ├── power-bi/             # Power BI dashboard page
│       └── csrd-reporting/       # CSRD Reporting page
├── style.css                      # Global styles with CSS variables
├── main.ts                        # Application bootstrap
└── index.html                     # Root HTML file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start the development server**:
```bash
npm start
```

3. **Navigate to** `http://localhost:4200/`

The application will automatically reload when you modify any source files.

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Styling

The project uses a comprehensive CSS variable system for theming:

### Light Theme Variables
- `--primary`: #0a2540 (Navy blue)
- `--secondary`: #00a86b (Green accent)
- `--bg`: #f5f7fa (Light background)
- `--text`: #11263d (Dark text)

### Dark Theme Variables
Automatically applied when `.dark` class is added to body

### Key Components

- **Hero Sections**: Full-width with gradient backgrounds
- **Cards**: Glassmorphism effect with blur backdrop
- **Buttons**: Smooth transitions with hover effects
- **Navigation**: Sticky header with mobile menu toggle
- **Responsive Grids**: Auto-adjusting grid layouts

## Navigation

- **Home** (`/`): Landing page with hero, projects, skills, about, and contact
- **Chart of Accounts** (`/chart-of-accounts-ai`): AI-powered accounting solution
- **Power BI Dashboard** (`/power-bi-financial-dashboard`): Financial analytics
- **CSRD Reporting** (`/csrd-reporting-simulation`): Sustainability compliance

## Customization

### Update Personal Information

Edit `src/app/app.component.ts` to update navigation links and footer information.

### Modify Colors

Update CSS variables in `src/style.css`:

```css
:root {
  --primary: #0a2540;
  --secondary: #00a86b;
  /* ... more variables ... */
}
```

### Add New Pages

1. Create a new component in `src/app/pages/`
2. Add a route in `src/app/app.routes.ts`
3. Add navigation link in `src/app/app.component.ts`

## Technologies Used

- **Angular 18**: Modern frontend framework
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Advanced styling with variables and gradients
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy loading of components via routing
- Standalone components for reduced bundle size
- CSS variables for efficient theming
- Optimized animations with hardware acceleration

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability

## License

This project is proprietary and belongs to Mohamed Mnejja.

## Contact

- Email: contact.mmnejja@gmail.com
- GitHub: [github.com/mohamedmnejja](https://github.com/mohamedmnejja)
- LinkedIn: [linkedin.com/in/mohamedmnejja](https://linkedin.com/in/mohamedmnejja)

## Contact form (server)

This project includes a small optional backend that accepts contact form submissions and forwards them to your email using SMTP.

1. Install server dependencies from the project root:

```bash
cd server
npm install express nodemailer cors
```

2. Configure environment variables (example):

```bash
export SMTP_HOST=smtp.example.com
export SMTP_PORT=587
export SMTP_USER=you@example.com
export SMTP_PASS=your_smtp_password
export TO_EMAIL=contact.mmnejja@gmail.com
```

On Windows PowerShell use `set` instead of `export` or create a `.env` file and load it via your process manager.

3. Start the server:

```bash
node server/index.js
```

The frontend posts contact messages to `/api/contact` (relative path). If you run the server on a different host/port, update the `fetch` URL in `src/app/pages/home/home.page.ts` to the correct backend URL (for example `https://api.example.com/api/contact`).

Security note: do not commit SMTP credentials to source control. Use environment variables or a secrets manager.

### Alternative: EmailJS (no backend)

If you prefer sending messages directly from the frontend without running a backend, this project also supports EmailJS. Steps:

1. Install the EmailJS browser package:

```bash
npm install @emailjs/browser
```

2. Create an EmailJS account at https://www.emailjs.com/, add a service, create a template, and obtain your `serviceID`, `templateID`, and `publicKey` (user ID).

3. Replace the IDs in `src/app/pages/home/home.page.ts` (the `emailjs.send` call) with your values. The template expects `from_name`, `from_email`, and `message` fields.

Using EmailJS removes the need for an SMTP server, but ensure you use the EmailJS public key securely and review their docs for best practices.

---

**Built with ❤️ using Angular**

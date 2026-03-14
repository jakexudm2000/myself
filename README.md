# Jake's Personal Website

A modern, minimalist personal portfolio website showcasing professional skills and experience. Built for Senior Software Engineer Jake Xu to display technical expertise to potential clients and employers.

## ✨ Features
- 🎨 Clean, premium minimalist design
- 🌓 Light/dark mode toggle with system preference detection
- 📱 Fully responsive design (desktop, tablet, mobile)
- ⚡ Blazing fast performance (<2s first load)
- 🎭 Smooth animations and transitions powered by Framer Motion
- 🔍 SEO optimized
- 📄 All content configurable in a single file

## 🛠️ Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify / GitHub Pages

## 📦 Project Structure
```
/
├── docs/               # Project documentation
│   ├── requirements.md # Project requirements document
│   └── personal-info.md # Personal information extracted from resume
├── public/             # Static assets
│   ├── images/         # Image resources
│   └── favicon.ico     # Website favicon
├── src/
│   ├── components/     # Reusable components
│   │   └── Navbar.tsx  # Navigation bar with theme toggle
│   ├── sections/       # Page sections
│   │   ├── About.tsx   # Personal introduction and education
│   │   ├── Experience.tsx # Work experience timeline
│   │   ├── Projects.tsx # Project portfolio with modals
│   │   ├── Skills.tsx  # Skills showcase with progress bars
│   │   └── Contact.tsx # Contact information with copy functionality
│   ├── hooks/          # Custom React hooks
│   │   └── useTheme.ts # Theme management hook
│   ├── config/         # Configuration files
│   │   └── personal.ts # All personal content and data
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started
### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:5173 to view the site in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Content Customization
All personal content can be modified in `src/config/personal.ts`:
- Personal information (name, contact details, location)
- Education background
- Work experience and projects
- Skills and expertise levels
- Portfolio projects
- Social media links

No other files need to be modified to update content.

## 🚢 Deployment
The site is static and can be deployed to any static hosting service:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite project and configure build settings
3. Deploy with zero configuration

### Netlify
1. Import the repository to Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`

### GitHub Pages
1. Build the project with `npm run build`
2. Deploy the `dist` directory to GitHub Pages

## 📄 License
MIT

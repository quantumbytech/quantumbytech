# 🌟 Quantum ByTech - Official Website

> Modern, professional website built with React, TypeScript, and Framer Motion

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?logo=vite)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 About

Quantum ByTech is a leading technology solutions provider specializing in:
- 🛒 E-Commerce Solutions
- 📱 Mobile App Development
- 🌐 Informative Websites
- 💾 Database Solutions
- 🔧 Maintenance Services
- 💬 Technical Support

This website showcases our services, portfolio, and provides an easy way for clients to get in touch.

---

## ✨ Features

### 🎨 **Modern Design**
- Sleek, professional UI with glass morphism effects
- Smooth animations powered by Framer Motion
- Responsive design that works on all devices
- Dark theme with primary green accents

### 🚀 **Performance**
- Lightning-fast load times with Vite
- Optimized images and assets
- Code splitting for faster page loads
- Smooth 60fps animations

### 🎭 **Animations**
- Page transitions
- Scroll reveal effects
- Parallax scrolling
- Magnetic cursor
- Hover effects

### 📱 **User Experience**
- Intuitive navigation
- Scroll-to-top on page changes
- Mobile-friendly hamburger menu
- WhatsApp integration
- Contact forms with validation

### 🔧 **Technical**
- TypeScript for type safety
- Component-based architecture
- React Router for navigation
- Tailwind CSS for styling
- Heroicons for icons

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite (Rolldown) 7.2.5** - Build tool

### **Styling**
- **Tailwind CSS 3.4** - Utility-first CSS
- **PostCSS** - CSS processing
- **Framer Motion 12.23** - Animations

### **Routing & Navigation**
- **React Router 7.11** - Client-side routing
- **Custom scroll utilities** - Smooth navigation

### **Forms & Validation**
- **React Hook Form 7.68** - Form management
- **Zod 4.2** - Schema validation
- **@hookform/resolvers** - Form validation integration

### **Icons & UI**
- **Heroicons 2.2** - Icon library
- **Lucide React** - Additional icons

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript ESLint** - TS linting
- **Vite Plugin React** - React support

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/quantumbytech/quantumbytech-react.git
cd quantumbytech-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 📁 Project Structure

```
quantumbytech-react/
├── public/
│   ├── logo.png              # Company logo
│   └── vite.svg
│
├── src/
│   ├── assets/               # Images, fonts, etc.
│   │
│   ├── components/
│   │   ├── animations/       # Animation components
│   │   │   ├── MagneticCursor.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── ParallaxSection.tsx
│   │   │   └── ScrollReveal.tsx
│   │   │
│   │   ├── layout/           # Layout components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   │
│   │   └── sections/         # Page sections
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Hero.tsx
│   │       ├── QuoteForm.tsx
│   │       └── Services.tsx
│   │
│   ├── lib/                  # Utility functions
│   │   ├── scrollToTop.ts
│   │   └── utils.ts
│   │
│   ├── pages/                # Page components
│   │   ├── services/         # Service detail pages
│   │   │   ├── DatabaseSolutions.tsx
│   │   │   ├── ECommerce.tsx
│   │   │   ├── InformativeWebsites.tsx
│   │   │   ├── Maintenance.tsx
│   │   │   ├── MobileApps.tsx
│   │   │   └── TechSupport.tsx
│   │   │
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Services.tsx
│   │
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.tsx              # Entry point
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── ENHANCEMENT_SUGGESTIONS.md
├── MIGRATION_NOTES.md
└── README.md
```

---

## 📜 Available Scripts

### **Development**
```bash
npm run dev          # Start development server
```

### **Build**
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### **Linting**
```bash
npm run lint         # Run ESLint
```

---

## 🌐 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, services, about, contact |
| `/services` | Services | All services overview |
| `/about` | About | Company information and values |
| `/contact` | Contact | Contact form and information |
| `/services/e-commerce` | E-Commerce | E-commerce solutions |
| `/services/mobile-apps` | Mobile Apps | Mobile app development |
| `/services/informative-websites` | Websites | Website development |
| `/services/database-solutions` | Database | Database solutions |
| `/services/maintenance` | Maintenance | Maintenance services |
| `/services/tech-support` | Support | Technical support |

---

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### **Deploy to Hosting**

#### **Netlify**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

#### **Vercel**
1. Import your GitHub repository
2. Vercel auto-detects Vite
3. Deploy!

#### **Traditional Hosting**
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server for SPA routing

---

## 🎨 Customization

### **Colors**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0fc26d', // Main brand color
    // ... other shades
  }
}
```

### **Fonts**
Edit `src/index.css`:
```css
@import url('https://fonts.cdnfonts.com/css/mont');
```

### **Content**
- Update company info in components
- Modify service descriptions in `src/pages/services/`
- Change contact details in `src/components/sections/Contact.tsx`

---

## 📞 Contact

- **Website**: [quantumbytech.com](https://quantumbytech.com)
- **Email**: quantumbytech@gmail.com
- **Phone**: +961 70 790 677
- **WhatsApp**: +961 70 790 677
- **Location**: Lebanon, Beirut
- **Instagram**: [@quantumbytech](https://instagram.com/quantumbytech)
- **LinkedIn**: [/company/quantumbytech](https://linkedin.com/company/quantumbytech)

---

## 📄 License

© 2025 Quantum ByTech. All rights reserved.

---

## 🙏 Acknowledgments

- Built with ❤️ by Quantum ByTech team
- Icons by [Heroicons](https://heroicons.com)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com)

---

**Made with ⚡ by Quantum ByTech**

# 🌟 NEXUS - Premium Tech Website

> **A cutting-edge, high-performance tech company website** featuring advanced interactive animations, sophisticated cursor interactions, and a stunning space-inspired dark theme.

<div align="center">

![Next.js Badge](https://img.shields.io/badge/Next.js-16.2.3-black?style=flat-square&logo=next.js)
![React Badge](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=flat-square&logo=tailwindcss)
![Framer Motion Badge](https://img.shields.io/badge/Framer%20Motion-10-FF1B6D?style=flat-square)
![License Badge](https://img.shields.io/badge/License-MIT-green?style=flat-square)

[View Live Demo](https://nexus-website1.netlify.app) • [Report Bug](https://github.com/Hiran-Abhisheka/nexus-website/issues) • [Request Feature](https://github.com/Hiran-Abhisheka/nexus-website/issues)

</div>

<p align="center">
   <img src="https://i.postimg.cc/Bb88rc4b/Screenshot-2026-04-10-112341.png" alt="Nexus Site Preview" width="800" />
</p>

## ✨ Key Features

### 🎨 **Premium Design**

- **Dark Space Theme** with glassmorphism & cinematic lighting
- **Responsive Design** optimized for all devices (mobile, tablet, desktop)
- **Custom Color Palette** with accent blues, indigos & purples
- **Gradient Overlays** and smooth visual transitions
- **Professional Typography** with proper hierarchy

### 🖱️ **Advanced Cursor Interactions**

- **3-Layer Custom Cursor** with spring physics animations
- **Magnetic Buttons** that pull toward your cursor
- **Interactive 3D Cards** with tilt effects based on mouse movement
- **Parallax Background** following cursor position
- **Reactive Starfield** with 150 interactive particles
- **GPU-Accelerated** performance (60fps)

### ⚡ **Smooth Animations**

- **Framer Motion** for professional motion graphics
- **Scroll Reveal Effects** with IntersectionObserver
- **Staggered Animations** for visual hierarchy
- **Auto-playing Testimonials** carousel with manual controls
- **Floating Elements** with subtle anti-gravity effects
- **Hover Interactions** with instant, responsive feedback

### 📊 **Portfolio Showcase**

- 6 Featured projects with animated cards
- Tech stack tags for each project
- Glowing border effects on hover
- Smooth scale & brightness animations
- Category-based organization

### 📱 **Performance Optimized**

- **Turbopack** for lightning-fast builds
- **Event Throttling** for smooth interactions
- **CSS Optimization** through Tailwind purging
- **Fast Content Delivery** with Next.js optimization
- **Mobile-First Approach** with progressive enhancement

---

## 🎯 Sections Overview

| Section          | Features                                                       |
| ---------------- | -------------------------------------------------------------- |
| **Navbar**       | Smooth scroll detection, responsive menu, glass effect         |
| **Hero**         | Cursor-tracking gradients, parallax orbs, achievement stats    |
| **About**        | Animated background, feature highlights, animated icons        |
| **Services**     | 6 interactive cards with 3D tilt, icon animations              |
| **Portfolio**    | 6 project cards with tech tags, hover effects, glowing borders |
| **Testimonials** | Auto-rotating carousel, manual navigation, smooth transitions  |
| **Contact**      | Form with validation, success feedback, decorative elements    |
| **Footer**       | Links, social media, copyright info                            |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for cloning

### Installation

```bash
# Clone the repository
git clone https://github.com/Hiran-Abhisheka/nexus-website.git
cd nexus-website

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nexus-website/
│
├── app/
│   ├── layout.tsx          # Root layout with CustomCursor & StarField
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
│
├── components/
│   ├── Navbar.tsx          # Navigation with scroll detection
│   ├── Hero.tsx            # Hero section + parallax gradients
│   ├── About.tsx           # About section + animations
│   ├── Services.tsx        # 6 service cards with 3D tilt
│   ├── Portfolio.tsx       # 6 featured projects showcase
│   ├── Testimonials.tsx    # Auto-rotating testimonials
│   ├── Contact.tsx         # Contact form with validation
│   ├── Footer.tsx          # Footer with links
│   ├── CustomCursor.tsx    # Advanced cursor system
│   ├── StarField.tsx       # Interactive starfield (150 stars)
│   ├── AnimatedIcons.tsx   # SVG icon library (10+ icons)
│   ├── MagneticButton.tsx  # Reusable magnetic button
│   ├── InteractiveCard.tsx # 3D tilt card component
│   └── index.ts            # Component exports
│
├── hooks/
│   ├── useAnimations.ts    # Scroll & animation hooks
│   │   ├── useScrollReveal()
│   │   ├── useMouseTracker()
│   │   ├── useWindowSize()
│   │   ├── useScrollPosition()
│   │   └── useScrollFadeVariants()
│   └── useCursor.ts        # Cursor & interaction hooks
│       ├── useCursorPosition()
│       ├── useParallax()
│       └── useMagneticEffect()
│
├── styles/
│   └── globals.css         # Tailwind imports & custom styles
│
├── utils/
│   ├── animations.ts       # Animation variants & configs
│   └── constants.ts        # Project constants
│
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies & scripts
```

---

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checking
```

---

## 🎨 Tech Stack

| Layer          | Technology    | Version |
| -------------- | ------------- | ------- |
| **Framework**  | Next.js       | 16.2.3  |
| **Runtime**    | React         | 18      |
| **Language**   | TypeScript    | 5.0+    |
| **Styling**    | Tailwind CSS  | 3.0     |
| **Animations** | Framer Motion | 10.16   |
| **Build Tool** | Turbopack     | Latest  |

---

## 🎨 Customization Guide

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'dark-bg': '#0a0e27',      // Main background
  'dark-surface': '#11152e', // Card backgrounds
  'dark-border': '#1e2a4f',  // Border color
  'dark-text': '#e0e5f0',    // Primary text
  'dark-muted': '#8894b1',   // Muted text
  'accent-blue': '#00d4ff',  // Primary accent
  'accent-indigo': '#6366f1', // Secondary accent
  'accent-purple': '#a78bfa', // Tertiary accent
}
```

### Adjust Animation Speeds

Modify in components and hooks files:

- `CustomCursor.tsx` - Cursor spring tension (stiffness)
- `hooks/useCursor.ts` - Parallax & tilt speeds
- `AnimatedIcons.tsx` - Icon animation durations
- `tailwind.config.js` - Global animation timing

### Update Content

Edit text and data in:

- `components/Hero.tsx` - Hero copy & stats
- `components/Services.tsx` - Service descriptions
- `components/Portfolio.tsx` - Project info & tags
- `components/Testimonials.tsx` - Testimonial text
- `components/Contact.tsx` - Contact form

### Customize Icons

Replace SVG icons in `components/AnimatedIcons.tsx` with your own designs

---

## 📊 Performance Features

✅ **Turbopack** - 5-10x faster builds than Webpack  
✅ **Event Throttling** - Smooth 60fps interactions  
✅ **GPU Acceleration** - `willChange` CSS hints  
✅ **Lazy Loading** - Components & images load on demand  
✅ **CSS Optimization** - Tailwind CSS tree-shaking  
✅ **Memoization** - `useMemo` for expensive calculations  
✅ **Responsive** - Mobile-first design approach

---

## 🌐 Browser Support

| Browser             | Supported | Version |
| ------------------- | --------- | ------- |
| Chrome              | ✅        | Latest  |
| Firefox             | ✅        | Latest  |
| Safari              | ✅        | Latest  |
| Edge                | ✅        | Latest  |
| Mobile Safari (iOS) | ✅        | 12+     |
| Chrome Mobile       | ✅        | Latest  |

---

## 📱 Responsive Breakpoints

```
Mobile:   320px - 640px   (sm)
Tablet:   641px - 1024px  (md, lg)
Desktop:  1025px+         (xl, 2xl)
```

---

## 🚀 Deployment

### Live Deployment

The project is **automatically deployed to Netlify** when you push to the `main` branch.

**Live URL**: https://nexus-website1.netlify.app

### Automatic CI/CD Pipeline

This project includes GitHub Actions CI/CD that:

1. ✅ Runs on every push to `main`
2. ✅ Installs dependencies & builds the project
3. ✅ Runs ESLint checks (non-blocking)
4. ✅ Automatically deploys to Netlify if build succeeds
5. ✅ Posts deployment status on commit

**GitHub Actions workflow**: `.github/workflows/deploy.yml`

### Manual Deployment to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project can be deployed to any platform supporting Next.js:

- **AWS Amplify**: Connect GitHub repo
- **Docker**: Build & run container
- **Self-hosted**: `npm run build && npm start`

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see details in LICENSE file.

---

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) - Amazing animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

</div>

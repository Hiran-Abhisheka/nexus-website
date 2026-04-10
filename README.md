# NEXUS - Premium Tech Company Website

A modern, high-performance website featuring advanced cursor interactions, space-inspired dark theme, and smooth animations.

## ✨ Features

### Design & Aesthetics

- **Dark Space Theme**: Deep colors (black, charcoal, navy) with soft accents (white, muted blue)
- **Premium Feel**: Glassmorphism effects, soft shadows, thin borders
- **Cinematic Design**: Gradient backgrounds, starfield animation, floating elements

### Cursor Interactions

- **Custom Cursor**: Smooth animated cursor with trailing effects
- **Cursor Followers**: Multiple rings that follow the mouse
- **Magnetic Buttons**: Buttons that subtly pull toward your cursor
- **3D Tilt Cards**: Interactive cards tilt based on cursor position
- **Parallax Effects**: Background elements move with cursor
- **Cursor-Reactive Particles**: Starfield responds to mouse movement

### Animations

- **Smooth Page Transitions**: Fade and slide animations
- **Scroll Reveal**: Staggered fade-in animations as you scroll
- **Floating Elements**: Subtle anti-gravity floating animations
- **Micro-interactions**: Smooth hover and click feedback
- **Auto-scrolling Testimonials**: Smooth carousel transitions

### Sections

1. **Navbar**: Glassmorphism effect with smooth scroll detection
2. **Hero**: Interactive parallax background with stats
3. **About**: Clean fade-in with animated decorations
4. **Services**: 6 interactive service cards with 3D tilt
5. **Portfolio**: Hover-zoom project cards with category tags
6. **Testimonials**: Auto-rotating carousel with manual controls
7. **Contact**: Modern form with validation feedback
8. **Footer**: Links and social media integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd d:\newproject
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with CustomCursor and StarField
└── page.tsx            # Main page with all sections

components/
├── CustomCursor.tsx    # Animated cursor component
├── StarField.tsx       # Canvas-based animated starfield
├── Navbar.tsx          # Navigation with scroll detection
├── Hero.tsx            # Hero section with parallax
├── About.tsx           # About section with animations
├── Services.tsx        # Services grid with interactive cards
├── Portfolio.tsx       # Portfolio with hover effects
├── Testimonials.tsx    # Auto-rotating testimonials
├── Contact.tsx         # Contact form
├── Footer.tsx          # Footer with links
├── MagneticButton.tsx  # Reusable magnetic button
├── InteractiveCard.tsx # Reusable 3D tilt card
└── index.ts            # Component exports

hooks/
├── useCursor.ts        # Cursor tracking and interaction hooks
│                       # - useCursorPosition()
│                       # - useSmoothCursor()
│                       # - useParallax()
│                       # - useMagneticEffect()
│                       # - use3DTilt()
└── useAnimations.ts    # Animation and scroll hooks
                        # - useScrollReveal()
                        # - useMouseTracker()
                        # - useWindowSize()
                        # - useScrollPosition()

styles/
└── globals.css         # Global styles and animations

Configuration files:
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── next.config.js      # Next.js configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  dark: {
    bg: '#0a0e27',      // Main background
    surface: '#11152e', // Card backgrounds
    border: '#1e2a4f',  // Border color
    text: '#e0e5f0',    // Text color
    muted: '#8894b1',   // Muted text
  },
  accent: {
    blue: '#00d4ff',    // Primary accent
    indigo: '#6366f1',  // Secondary accent
    purple: '#a78bfa',  // Tertiary accent
  },
}
```

### Animations

Modify animation speeds in:

- `components/CustomCursor.tsx` - Cursor spring tension
- `hooks/useCursor.ts` - Parallax and tilt effects
- `tailwind.config.js` - Global animation timing

### Starfield

Customize the starfield in `components/StarField.tsx`:

- `numStars` - Number of visible stars
- `maxDistance` - Distance at which cursor affects stars
- Star movement velocity and opacity

## ⚡ Performance Optimizations

- **Debounced Mouse Events**: Smooth interactions without lag
- **RequestAnimationFrame**: 60fps animations
- **Lazy Component Loading**: Images and sections load efficiently
- **CSS Optimization**: Tailwind CSS tree-shaking
- **Smooth Scroll**: CSS scroll-behavior integration

## 🔧 Building for Production

```bash
npm run build
npm start
```

Or deploy directly to Vercel:

```bash
npm i -g vercel
vercel
```

## 📦 Dependencies

- **Next.js**: React framework for production
- **React**: UI library
- **Framer Motion**: Advanced animation library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 📱 Responsive Design

The website is fully responsive:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🚀 Advanced Features

### Custom Cursor System

- Three-layer cursor design (dot, ring, outer ring)
- Magnetic effect on interactive elements
- Context-aware styling

### 3D Interactions

- CSS 3D transforms for card tilt
- Mouse tracking for perspective effects
- Smooth spring animations

### Parallax Engine

- Multi-layer depth effects
- Cursor-responsive backgrounds
- Smooth easing and transitions

### Scroll Animations

- Intersection Observer API
- Staggered reveal animations
- Threshold-based triggering

## 🐛 Troubleshooting

**Animations Feel Laggy:**

- Check GPU acceleration is enabled
- Reduce particle count in StarField
- Close other resource-heavy applications

**Custom Cursor Not Showing:**

- Make sure JavaScript is enabled
- Check browser console for errors
- Clear browser cache

**Starfield Not Responding to Cursor:**

- Verify mouse move events are firing
- Check canvas size matches viewport
- Ensure mousePosition state updates

## 📄 License

This project is available for personal and commercial use.

## 🤝 Contributing

Feel free to customize and extend this project for your needs.

## 📞 Support

For questions or issues, review the component documentation in each file.

---

**Built with Next.js, React, Framer Motion, and Tailwind CSS**

Enjoy your premium tech website! 🚀

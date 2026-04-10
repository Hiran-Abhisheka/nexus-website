# Quick Start Guide - NEXUS Website

## 🎯 5-Minute Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Go to `http://localhost:3000`

## ✨ What You'll See

- **Custom animated cursor** - Circular cursor with trailing rings
- **Starfield background** - Animated stars that react to your cursor
- **Smooth navigation** - Glassmorphism navbar that updates on scroll
- **Hero section** - Parallax background with gradient text
- **Interactive cards** - 3D tilt effects on service and portfolio cards
- **Magnetic buttons** - Buttons that respond to cursor movement
- **Auto-rotating testimonials** - Smooth carousel with manual controls
- **Contact form** - Modern input fields with smooth interactions
- **Responsive design** - Adapts to all screen sizes

## 🎨 Try These Interactions

1. **Move your mouse** - Watch the custom cursor and starfield respond
2. **Hover over buttons** - They get pulled toward your cursor
3. **Hover over cards** - They tilt based on cursor position
4. **Scroll down** - Sections fade in and animate smoothly
5. **Click portfolio items** - Cards zoom and reveal more info
6. **Resize window** - Everything adapts smoothly

## 🔧 Customization Tips

### Change Colors

Edit `tailwind.config.js`:

```javascript
accent: {
  blue: '#your-color-here',  // Change primary color
}
```

### Adjust Animation Speed

In component files, modify transition durations:

```javascript
transition={{ duration: 0.5 }} // Lower = faster
```

### Modify Starfield

In `components/StarField.tsx`:

```javascript
const numStars = 150; // Increase for more stars
```

## 📦 Building for Deployment

```bash
# Create optimized build
npm run build

# Test the build locally
npm start
```

## 🚀 Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

The site will be live in seconds!

## 📱 Mobile Preview

Your site automatically adapts for:

- **Tablets**: Optimized touch interactions
- **Phones**: Single-column layout, accessible buttons
- **Desktop**: Full interactive experience

## 💡 Pro Tips

- **Performance**: All cursor tracks are optimized with debouncing
- **Accessibility**: Semantic HTML and keyboard navigation
- **SEO Ready**: Meta tags, structured data, fast load times
- **Dark Mode**: Built-in, no toggle needed
- **Production Ready**: Minified, optimized assets

## 🐛 Troubleshooting

| Problem              | Solution                                  |
| -------------------- | ----------------------------------------- |
| Cursor not showing   | Check DevTools, verify JavaScript enabled |
| Animations are slow  | Lower particle count, close other apps    |
| Starfield not moving | Clear cache, refresh page                 |
| Form not submitting  | Check console for errors                  |

## 📚 Component Reference

### Custom Cursor

- Located: `components/CustomCursor.tsx`
- Features: Two-ring follower, magnetic detection

### Starfield

- Located: `components/StarField.tsx`
- Features: 150+ stars, cursor-reactive

### Interactive Card

- Located: `components/InteractiveCard.tsx`
- Features: 3D tilt, hover glow

### Magnetic Button

- Located: `components/MagneticButton.tsx`
- Features: Magnetic attraction, variants

## 🎓 Learning Resources

To understand how cursor interactions work, check:

1. `hooks/useCursor.ts` - Cursor tracking logic
2. `components/CustomCursor.tsx` - Cursor animation
3. `components/StarField.tsx` - Canvas animations

## 🤝 Next Steps

1. ✅ Get the site running locally
2. 📝 Customize text and colors
3. 🖼️ Add your own portfolio items
4. 📧 Connect the contact form
5. 🚀 Deploy to Vercel

---

**You're all set! Start building amazing experiences.** 🚀

Questions? Check the README.md for more details!

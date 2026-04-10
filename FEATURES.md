# NEXUS - Complete Feature Documentation

## 🎨 Advanced Cursor Interactions

### Custom Cursor System

**File**: `components/CustomCursor.tsx`

The custom cursor consists of three layers:

- **Core dot** (2px radius) - Main cursor position with glow
- **Inner ring** (8px radius) - Follows cursor with spring physics
- **Outer ring** (16px radius) - Subtle depth effect

Features:

- Detects clickable elements (buttons, links)
- Scales up on hover
- Smooth spring animations (500ms stiffness)
- Mix-blend-screen for transparency effect

```typescript
// The cursor automatically scales when hovering clickable elements
// No configuration needed - works out of the box
```

### Magnetic Button Effect

**File**: `components/MagneticButton.tsx`

Buttons pull toward your cursor position with configurable strength:

- **Default strength**: 0.3 (loose)
- **Adjustable**: Can be changed in hook calls
- **Smooth animation**: Spring physics at 400 stiffness
- **Variants**: Primary, Secondary, Outline

```tsx
<MagneticButton variant="primary">Click me!</MagneticButton>
```

### 3D Tilt Card Effect

**File**: `components/InteractiveCard.tsx` + `hooks/useCursor.ts`

Interactive cards tilt based on cursor position:

- **Tilt angle**: 15 degrees max
- **Smooth spring**: 300ms response time
- **Hover glow**: Inset shadow on hover
- **Border shimmer**: Accent blue highlight

The tilt is calculated from:

- Distance from card center
- Cursor position (X/Y)
- Spring physics for smoothness

```tsx
<InteractiveCard icon="⚡" title="Service" description="Description here" />
```

### Parallax Layering

**File**: `hooks/useCursor.ts` - `useParallax` hook

Three-layer parallax system:

- **Offset strength**: Configurable per element (0.1 to 0.5)
- **Independent layers**: Each moves at different speeds
- **Cursor-responsive**: Updates 60fps
- **Smooth easing**: Spring physics (stiffness: 50)

```tsx
const parallax = useParallax(0.3);
// Elements move at 30% of cursor distance
```

### Starfield Background

**File**: `components/StarField.tsx`

Canvas-based particle system:

- **150 stars** rendered on canvas
- **Cursor-reactive**: Stars brighten when cursor approaches
- **Smooth animation**: 60fps using requestAnimationFrame
- **Trail effect**: Slight motion blur for depth
- **Responsive**: Auto-resizes with window

Customizable:

- `numStars` - Number of particles
- `maxDistance` - Cursor influence radius (150px)
- Star velocity and opacity ranges

## 🎬 Animation System

### Scroll Reveal Animations

**File**: `hooks/useAnimations.ts` - `useScrollReveal`

Uses Intersection Observer API:

- **Threshold**: 10% visibility triggers animation
- **Performance**: No layout thrashing
- **Staggered children**: 0.1s between each
- **Smooth fade + slide**: 0.8s duration

```tsx
const [ref, isVisible] = useScrollReveal();
// Elements animate when visible in viewport
```

### Component Animation Patterns

#### 1. Hero Section (`components/Hero.tsx`)

- Container stagger: 0.2s delay between items
- Item animation: Fade + Y translation
- Parallax background: Moves with cursor
- Floating scroll indicator

#### 2. About Section (`components/About.tsx`)

- Diagonal grid layout
- Staggered reveals on scroll
- Floating decoration elements
- Rotating accent rings

#### 3. Services Grid (`components/Services.tsx`)

- 3x2 responsive grid
- Card 3D tilt on hover
- Staggered entrance (0.1s between)
- Floating background decoration

#### 4. Portfolio (`components/Portfolio.tsx`)

- Hover zoom + rotation
- Gradient overlay animation
- Category badge rise effect
- Inset border glow

#### 5. Testimonials (`components/Testimonials.tsx`)

- Auto-rotate carousel (5s interval)
- Manual navigation (prev/next)
- Crossfade transitions
- Dot indicators

#### 6. Contact Form (`components/Contact.tsx`)

- Field validation feedback
- Success/error states
- Form submission animation
- Staggered field reveal

## 🎯 Performance Optimizations

### Event Handling

- **Mouse move**: Debounced with 60fps cap
- **Resize**: Throttled to 60fps
- **Scroll**: RAF-based throttling
- **Cleanup**: All listeners removed on unmount

### Animation Performance

- **GPU acceleration**: All transforms use 3D
- **Will-change**: Applied to frequently animated elements
- **RequestAnimationFrame**: Used for smooth 60fps
- **Canvas**: Starfield uses native canvas rendering

### Code Splitting

- Components use dynamic imports (Next.js automatic)
- CSS-in-JS only for essential styles
- Tailwind tree-shaking removes unused CSS

### Bundle Size

- Framer Motion: ~40KB (included)
- Next.js: Optimized by default
- Total uncompressed: ~500KB
- Gzipped: ~150KB

## 🎨 Customization Guide

### Color Scheme

Edit `tailwind.config.js`:

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
    blue: '#00d4ff',
    indigo: '#6366f1',
    purple: '#a78bfa',
  },
}
```

### Animation Timing

Global timing in `utils/constants.ts`:

```typescript
ANIMATION_TIMING: {
  fast: 0.2,
  base: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,
}
```

### Spring Physics

Configure smoothness `utils/constants.ts`:

```typescript
SPRING: {
  normal: { stiffness: 300, damping: 30 },
  gentle: { stiffness: 200, damping: 35 },
  bouncy: { stiffness: 400, damping: 20 },
}
```

### Parallax Strength

Adjust depth effect:

```typescript
PARALLAX_STRENGTH: {
  subtle: 0.1,
  normal: 0.3,
  strong: 0.5,
}
```

## 🔧 Advanced Customization

### Modifying Starfield Behavior

In `components/StarField.tsx`:

```typescript
// Increase star count
const numStars = 200

// Adjust cursor influence
const maxDistance = 200

// Change star properties
{
  radius: Math.random() * 2,    // Larger stars
  opacity: Math.random() * 0.8, // Brighter
}
```

### Custom Magnetic Strength

In `components/MagneticButton.tsx`:

```tsx
const { magneticPosition } = useMagneticEffect(0.5); // Higher = stronger
```

### Adjust Tilt Intensity

In `hooks/useCursor.ts`:

```typescript
export const use3DTilt = (tiltStrength = 20); // Increase for more tilt
```

### Change Scroll Trigger Point

In `hooks/useAnimations.ts`:

```typescript
const observer = new IntersectionObserver(
  // Lower = triggers earlier
  { threshold: 0.2 }, // Was 0.1
);
```

## 📱 Responsive Behavior

### Mobile (< 768px)

- Cursor interactions disabled (touch instead)
- Simplified animations (reduced stagger)
- Single-column layouts
- Larger touch targets

### Tablet (768px - 1024px)

- Partial cursor effects (limited parallax)
- Grid 2 columns
- Optimized spacing

### Desktop (> 1024px)

- Full cursor interactions
- 3 column layouts
- Maximum parallax effect
- All animations enabled

## 🚀 Deployment Considerations

### Vercel Deployment

```bash
npm run build
vercel
```

Build optimization:

- Automatic image optimization
- CSS minification
- JavaScript tree-shaking
- Serverless functions support

### Self-Hosted (nginx/Apache)

```bash
npm run build
npm start
```

Requires:

- Node.js 18+
- 40mb memory
- Static asset caching

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=your-api-url
```

## 🐛 Debugging

### Performance Issues

1. Open DevTools Performance tab
2. Record while interacting
3. Check for:
   - Layout thrashing
   - Long tasks
   - Main thread blocking

### Cursor Not Working

1. Check `CustomCursor` component is in layout
2. Verify `z-index: 9999` is highest
3. Check console for errors

### Animations Choppy

1. Reduce star count in `StarField`
2. Lower parallax strength
3. Check CPU usage (laptop issues)

### Form Not Submitting

1. Check form validation logic
2. Verify submit handler
3. Check Network tab for errors

## 📊 Performance Metrics

Typical metrics on modern hardware:

- **First Paint**: < 1s
- **Largest Contentful Paint**: < 2s
- **Time to Interactive**: < 3s
- **Animation FPS**: 60fps sustained
- **Cursor Response**: < 16ms latency

## 🎓 Educational Resources

### Understanding the Code

1. **Cursor Hooks** (`hooks/useCursor.ts`)
   - Mouse event tracking
   - Spring physics calculations
   - Distance-based effects

2. **Scroll Detection** (`hooks/useAnimations.ts`)
   - Intersection Observer pattern
   - Efficient viewport tracking

3. **Canvas Animations** (`components/StarField.tsx`)
   - 2D canvas rendering
   - Particle systems
   - Optimization techniques

4. **Framer Motion** (all components)
   - Variants patterns
   - Spring animations
   - Gesture detection

## 🔐 Security Notes

- No external API calls by default
- Form submission is simulated (add backend handler)
- All data processing on client-side
- No tracking/analytics by default
- CORS-safe for third-party APIs

## 📝 Common Questions

**Q: How do I add my own projects to the portfolio?**
A: Edit `components/Portfolio.tsx` and modify the `portfolioItems` array.

**Q: Can I remove the starfield?**
A: Yes, remove `<StarField />` from `app/layout.tsx`.

**Q: How do I change animation speeds?**
A: Modify `transition` props in components (duration in seconds).

**Q: Is it mobile-friendly?**
A: Yes! Cursor effects are disabled on touch devices automatically.

**Q: Can I add 3D models?**
A: Yes, add React Three Fiber for 3D effects (not included by default).

---

**Ready to customize further?** Check individual component files for detailed comments and configuration options!

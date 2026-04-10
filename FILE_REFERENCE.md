# 📋 Complete File Reference Guide

## Project: NEXUS - Premium Tech Company Website

---

## 🎯 Start Here

| File                                     | Purpose               | Read First |
| ---------------------------------------- | --------------------- | ---------- |
| [QUICKSTART.md](QUICKSTART.md)           | 5-minute setup guide  | **YES** ⭐ |
| [README.md](README.md)                   | Full documentation    | YES        |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Project overview      | YES        |
| [FEATURES.md](FEATURES.md)               | Feature documentation | Reference  |

---

## 📦 Configuration Files

### Build & Development

| File                | Purpose                         |
| ------------------- | ------------------------------- |
| `package.json`      | Dependencies, scripts, metadata |
| `tsconfig.json`     | TypeScript configuration        |
| `next.config.js`    | Next.js build configuration     |
| `postcss.config.js` | CSS processing configuration    |
| `.eslintrc.json`    | Code quality rules              |

### Version Control

| File           | Purpose                        |
| -------------- | ------------------------------ |
| `.gitignore`   | Files to ignore in git         |
| `.env.example` | Environment variables template |

### Styling

| File                 | Purpose                              |
| -------------------- | ------------------------------------ |
| `tailwind.config.js` | Theme colors, animations, extensions |

---

## 🎨 Styling

| File                 | Purpose                             | Lines |
| -------------------- | ----------------------------------- | ----- |
| `styles/globals.css` | Global styles, keyframes, scrollbar | 150+  |

---

## 📁 Components (12 Files)

### Layout Components

| File                    | Purpose        | Key Features                                     |
| ----------------------- | -------------- | ------------------------------------------------ |
| `components/Navbar.tsx` | Navigation bar | Glassmorphism, scroll detection, responsive menu |
| `components/Footer.tsx` | Footer section | Links, social media, gradient divider            |

### Hero & Main Sections

| File                          | Purpose               | Key Features                                        |
| ----------------------------- | --------------------- | --------------------------------------------------- |
| `components/Hero.tsx`         | Hero section          | Parallax, stats, gradient text, floating animations |
| `components/About.tsx`        | About section         | Animated card, rotating decorations, scroll reveal  |
| `components/Services.tsx`     | Services grid         | 6 service cards, 3D tilt, staggered animation       |
| `components/Portfolio.tsx`    | Portfolio section     | Project cards, hover zoom, category tags            |
| `components/Testimonials.tsx` | Testimonials carousel | Auto-rotate, manual navigation, smooth crossfade    |
| `components/Contact.tsx`      | Contact form          | Form validation, success states, submit handling    |

### Interactive Components

| File                             | Purpose             | Key Features                                   |
| -------------------------------- | ------------------- | ---------------------------------------------- |
| `components/CustomCursor.tsx`    | Animated cursor     | 3-layer design, magnetic effect, context-aware |
| `components/StarField.tsx`       | Particle background | Canvas-based, 150+ stars, cursor-reactive      |
| `components/MagneticButton.tsx`  | Magnetic button     | Reusable, 3 variants, cursor attraction        |
| `components/InteractiveCard.tsx` | 3D tilt card        | Reusable, hover effects, inset glow            |

### Exports

| File                  | Purpose                              |
| --------------------- | ------------------------------------ |
| `components/index.ts` | Component exports for easier imports |

---

## 🎯 Hooks (9 Files)

### Cursor Interactions (`hooks/useCursor.ts`)

| Hook                  | Purpose                      | Returns                                           |
| --------------------- | ---------------------------- | ------------------------------------------------- |
| `useCursorPosition()` | Track mouse + movement state | `{ mousePosition, isMoving }`                     |
| `useSmoothCursor()`   | Delayed cursor following     | `{ x, y }` (smoothed position)                    |
| `useParallax()`       | Multi-layer parallax effect  | `{ x, y }` (parallax offset)                      |
| `useMagneticEffect()` | Button magnetic attraction   | `{ elementRef, setIsHovering, magneticPosition }` |
| `use3DTilt()`         | Card 3D rotation             | `{ elementRef, tilt: {x, y} }`                    |

### Animations (`hooks/useAnimations.ts`)

| Hook                  | Purpose                       | Returns             |
| --------------------- | ----------------------------- | ------------------- |
| `useScrollReveal()`   | Scroll-based reveal animation | `[ref, isVisible]`  |
| `useMouseTracker()`   | Track mouse velocity          | `{ x, y, vx, vy }`  |
| `useWindowSize()`     | Responsive window dimensions  | `{ width, height }` |
| `useScrollPosition()` | Current scroll position       | `scrollY` value     |

---

## 🛠️ Utilities (2 Files)

### Constants (`utils/constants.ts`)

| Constant            | Purpose                    | Type                                 |
| ------------------- | -------------------------- | ------------------------------------ |
| `ANIMATION_TIMING`  | Animation duration presets | Object with .fast, .base, .slow, etc |
| `EASING`            | Animation easing functions | Cubic bezier values                  |
| `SPRING`            | Spring physics presets     | Stiffness + damping objects          |
| `PARALLAX_STRENGTH` | Parallax effect strengths  | subtle, normal, strong               |
| `HOVER_SCALE`       | Hover scale multipliers    | tiny, small, medium, large           |
| `COLOR`             | Theme colors               | Dark + accent colors                 |
| `Z_INDEX`           | Z-index values             | background, content, nav, cursor     |

### Animation Utilities (`utils/animations.ts`)

| Export              | Purpose                   | Type                   |
| ------------------- | ------------------------- | ---------------------- |
| `fadeInUp`          | Fade + slide up variant   | Framer Motion Variants |
| `scaleIn`           | Scale in variant          | Framer Motion Variants |
| `staggerContainer`  | Stagger parent variant    | Framer Motion Variants |
| `staggerItem`       | Stagger child variant     | Framer Motion Variants |
| `rotate`            | Rotating animation        | Framer Motion Variants |
| `bounce`            | Bouncing animation        | Framer Motion Variants |
| `float`             | Floating animation        | Framer Motion Variants |
| `pulse`             | Pulsing animation         | Framer Motion Variants |
| `shimmer`           | Shimmer effect            | Framer Motion Variants |
| `pageTransition`    | Page transition animation | Animation config       |
| `getStaggerDelay()` | Calculate stagger delay   | Function               |
| `ease`              | Easing presets            | Cubic bezier values    |

---

## 📄 Pages (1 File)

| File           | Purpose   | Sections              |
| -------------- | --------- | --------------------- |
| `app/page.tsx` | Main page | All sections combined |

---

## 🎯 Layout (1 File)

| File             | Purpose     | Includes                          |
| ---------------- | ----------- | --------------------------------- |
| `app/layout.tsx` | Root layout | CustomCursor, StarField, metadata |

---

## 📚 Documentation (4 Files)

| File                 | Word Count | Purpose                |
| -------------------- | ---------- | ---------------------- |
| `README.md`          | 600+       | Complete documentation |
| `QUICKSTART.md`      | 300+       | 5-minute setup guide   |
| `FEATURES.md`        | 1000+      | Detailed feature guide |
| `PROJECT_SUMMARY.md` | 1000+      | Project overview       |

---

## 📊 Statistics

### Code Files

- **Total Components**: 12
- **Total Hooks**: 9
- **Total Utilities**: 2
- **Configuration Files**: 6
- **Styling Files**: 1
- **Documentation**: 4

### Lines of Code

- **Components**: ~2000 lines
- **Hooks**: ~300 lines
- **Utilities**: ~200 lines
- **Styles**: ~150 lines
- **Total**: ~3000+ lines

### File Count

- **Components**: 12 TSX files
- **Hooks**: 2 TS files
- **Utils**: 2 TS files
- **App**: 2 TSX files
- **Config**: 6 files
- **Styles**: 1 CSS file
- **Docs**: 4 MD files
- **Total**: 31 files

---

## 🎯 Usage Examples

### Import Components

```typescript
import { Hero, About, Services } from "@/components";
```

### Use Hooks

```typescript
import { useCursorPosition, useScrollReveal } from "@/hooks";

const { mousePosition } = useCursorPosition();
const [ref, isVisible] = useScrollReveal();
```

### Use Utilities

```typescript
import { ANIMATION_TIMING, fadeInUp } from "@/utils";

const speed = ANIMATION_TIMING.base;
const variants = fadeInUp;
```

---

## 🔄 Component Dependencies

```
App (page.tsx)
├── Navbar (components/Navbar.tsx)
├── Hero (components/Hero.tsx)
│   └── MagneticButton
│   └── useParallax
├── About (components/About.tsx)
│   └── useScrollReveal
├── Services (components/Services.tsx)
│   ├── InteractiveCard
│   └── useScrollReveal
├── Portfolio (components/Portfolio.tsx)
│   ├── useCursorPosition
│   └── useScrollReveal
├── Testimonials (components/Testimonials.tsx)
│   └── useScrollReveal
├── Contact (components/Contact.tsx)
│   ├── MagneticButton
│   └── useScrollReveal
└── Footer (components/Footer.tsx)

Layout (layout.tsx)
├── CustomCursor (components/CustomCursor.tsx)
└── StarField (components/StarField.tsx)
```

---

## 🔍 Quick File Lookup

### Need to modify...

| What              | Where                         |
| ----------------- | ----------------------------- |
| Colors            | `tailwind.config.js`          |
| Main page content | `app/page.tsx`                |
| Cursor behavior   | `components/CustomCursor.tsx` |
| Animations speed  | `utils/constants.ts`          |
| Starfield stars   | `components/StarField.tsx`    |
| Form validation   | `components/Contact.tsx`      |
| Navigation items  | `components/Navbar.tsx`       |
| Testimonials      | `components/Testimonials.tsx` |
| Services          | `components/Services.tsx`     |
| Portfolio items   | `components/Portfolio.tsx`    |

---

## 📦 Dependency Map

```
package.json
├── next (framework)
├── react (UI)
├── typescript (types)
├── framer-motion (animations)
├── tailwindcss (styling)
├── postcss (CSS processing)
└── autoprefixer (browser prefixes)
```

---

## 🚀 File Execution Order

1. `app/layout.tsx` - Initializes root layout
2. `components/CustomCursor.tsx` - Sets up cursor tracking
3. `components/StarField.tsx` - Initializes starfield canvas
4. `app/page.tsx` - Renders main sections
5. Each component initializes its hooks on mount
6. Event listeners attach and animations begin

---

## 💾 Important Notes

### Files to Commit

- ✅ All files except:
  - `node_modules/`
  - `.next/`
  - `.env.local`

### Files to Keep Private

- `.env.local` (environment variables)
- API keys (if added)

### Files Safe to Delete

- ❌ Don't delete any core files
- Can remove documentation if hosting externally

### Files to Never Modify

- ⚠️ `tsconfig.json` (requires Node restart)
- ⚠️ `next.config.js` (requires rebuild)
- ⚠️ `package.json` (run npm install after changes)

---

## 📝 File Naming Conventions

- **Components**: PascalCase + `.tsx`
- **Hooks**: camelCase + `use` prefix + `.ts`
- **Utilities**: kebab-case or camelCase + `.ts`
- **Styles**: kebab-case + `.css`
- **Config**: kebab-case + `.js` or `.json`

---

## 🔗 Cross-File References

### Components importing from Hooks

- All components import from `@/hooks`
- Hooks provide animation and interaction logic

### Components importing from Utils

- Animation components import from `@/utils/constants`
- Some use variant presets from `@/utils/animations`

### Pages importing Components

- `app/page.tsx` imports all sections
- `app/layout.tsx` wraps everything

---

## 📞 Help & Support

### If you need to...

| Task              | Check File            |
| ----------------- | --------------------- |
| Add new component | `components/index.ts` |
| Modify animations | `utils/animations.ts` |
| Change theme      | `tailwind.config.js`  |
| Understand hooks  | `hooks/useCursor.ts`  |
| See full features | `FEATURES.md`         |
| Quick setup       | `QUICKSTART.md`       |

---

**Last Updated**: April 2024  
**Version**: 1.0.0  
**Status**: Production Ready ✅

---

Happy coding! 🚀

// Animation timing and easing constants
export const ANIMATION_TIMING = {
  fast: 0.2,
  base: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,
}

export const EASING = {
  easeOut: [0.23, 1, 0.320, 1],
  easeInOut: [0.645, 0.045, 0.355, 1],
  easeIn: [0.95, 0.05, 0.795, 0.035],
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

export const SPRING = {
  normal: { stiffness: 300, damping: 30 },
  gentle: { stiffness: 200, damping: 35 },
  bouncy: { stiffness: 400, damping: 20 },
  smooth: { stiffness: 100, damping: 40 },
}

export const PARALLAX_STRENGTH = {
  none: 0,
  subtle: 0.1,
  normal: 0.3,
  strong: 0.5,
}

export const HOVER_SCALE = {
  tiny: 1.02,
  small: 1.05,
  medium: 1.1,
  large: 1.15,
}

export const COLOR = {
  dark: {
    bg: '#0a0e27',
    surface: '#11152e',
    border: '#1e2a4f',
    text: '#e0e5f0',
    muted: '#8894b1',
  },
  accent: {
    blue: '#00d4ff',
    indigo: '#6366f1',
    purple: '#a78bfa',
  },
}

export const Z_INDEX = {
  background: 0,
  content: 10,
  nav: 50,
  cursor: 9999,
}

// Common animation helpers and utilities
import { Variants } from 'framer-motion'

/**
 * Fade in and slide up animation
 * Use for section reveals and page loads
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

/**
 * Scale in animation
 * Use for element emphasis
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

/**
 * Stagger container for animating multiple children
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * Individual item for stagger animation
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

/**
 * Rotate animation for loading spinners
 */
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

/**
 * Bounce animation for elements
 */
export const bounce: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Float animation for subtle movement
 */
export const float: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Pulse animation for attention
 */
export const pulse: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

/**
 * Shimmer effect for loading states
 */
export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

/**
 * Page transition animation
 */
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

/**
 * Generate stagger delay
 */
export const getStaggerDelay = (index: number, staggerAmount = 0.1) => {
  return staggerAmount * index
}

/**
 * Ease values for common tweens
 */
export const ease = {
  smooth: [0.4, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
}

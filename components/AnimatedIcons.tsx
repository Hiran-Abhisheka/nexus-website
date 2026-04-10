'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedIconProps {
  size?: number
  animate?: boolean
  delay?: number
  className?: string
}

// Lightning Icon - Web Development
export const LightningIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { y: [0, -4, 0] } : {}}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <path
      d="M16 2L6 14h8l-4 16 14-14h-8l4-16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.8"
    />
    <motion.path
      d="M16 2L6 14h8l-4 16 14-14h-8l4-16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0"
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  </motion.svg>
)

// Palette Icon - UI/UX Design
export const PaletteIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { rotate: [0, 360] } : {}}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
    <circle cx="22" cy="10" r="2.5" fill="currentColor" />
    <circle cx="22" cy="22" r="2.5" fill="currentColor" />
    <circle cx="10" cy="22" r="2.5" fill="currentColor" />
    <circle cx="16" cy="15" r="1.5" fill="currentColor" />
  </motion.svg>
)

// Mobile Icon - Mobile Apps
export const MobileIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { scale: [1, 1.05, 1] } : {}}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <rect x="6" y="3" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="5" x2="24" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <circle cx="16" cy="27" r="1" fill="currentColor" />
  </motion.svg>
)

// Cloud Icon - Cloud Solutions
export const CloudIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { y: [0, 6, 0] } : {}}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <path
      d="M8 16c0-2.5 2-4.5 4.5-4.5 0.5-2.5 2.5-4.5 5-4.5 2.76 0 5 2.24 5 5 2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5H8c-2 0-4-2-4-4.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </motion.svg>
)

// Shield Icon - Security
export const ShieldIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { scale: [1, 1.1, 1] } : {}}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <path
      d="M16 2L6 6v8c0 8 10 14 10 14s10-6 10-14V6l-10-4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <motion.circle
      cx="16"
      cy="16"
      r="3"
      fill="currentColor"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
      }}
    />
  </motion.svg>
)

// Robot Icon - AI Integration
export const RobotIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { x: [0, 2, -2, 0] } : {}}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <rect x="8" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="20" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="20" cy="12" r="1.5" fill="currentColor" />
    <line x1="16" y1="14" x2="16" y2="18" stroke="currentColor" strokeWidth="1" />
  </motion.svg>
)

// Rocket Icon - Innovation/Launch
export const RocketIcon: React.FC<AnimatedIconProps> = ({
  size = 32,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { y: [0, -8, 0] } : {}}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <path d="M16 2l4 8h-8l4-8Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.8" />
    <path d="M12 10h8v12c0 2.2-1.8 4-4 4s-4-1.8-4-4V10Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="14" r="1.5" fill="currentColor" />
    <path d="M9 20l-2 8-2-2 2-6Z" fill="currentColor" opacity="0.6" />
    <path d="M23 20l2 8 2-2-2-6Z" fill="currentColor" opacity="0.6" />
  </motion.svg>
)

// Avatar Icons - Testimonials
export const AvatarIcon: React.FC<AnimatedIconProps & { type?: 'ceo' | 'pm' | 'founder' | 'cto' }> = ({
  size = 48,
  animate = true,
  delay = 0,
  className = '',
  type = 'ceo',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { scale: [1, 1.05, 1] } : {}}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    
    {/* Head */}
    <circle cx="24" cy="16" r="7" fill="currentColor" opacity="0.7" />
    
    {/* Body/Role indicator */}
    <path
      d={
        type === 'ceo'
          ? 'M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8v8H16v-8Z'
          : type === 'pm'
            ? 'M15 30c0-5 4-9 9-9s9 4 9 9v6H15v-6Z'
            : type === 'founder'
              ? 'M16 29c0-4 3-7 8-7s8 3 8 7v7H16v-7Z'
              : 'M14 32c0-5.5 4.5-10 10-10s10 4.5 10 10v4H14v-4Z'
      }
      fill="currentColor"
      opacity="0.5"
    />

    {/* Accent */}
    <motion.circle
      cx="24"
      cy="24"
      r="20"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0"
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
      }}
    />
  </motion.svg>
)

// Arrow Icon - Navigation
export const ArrowIcon: React.FC<AnimatedIconProps & { direction?: 'left' | 'right' }> = ({
  size = 24,
  animate = true,
  delay = 0,
  className = '',
  direction = 'right',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { x: direction === 'right' ? [0, 3, 0] : [0, -3, 0] } : {}}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {direction === 'right' ? (
      <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M19 12H5m6-6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </motion.svg>
)

// Scroll Icon
export const ScrollIcon: React.FC<AnimatedIconProps> = ({
  size = 24,
  animate = true,
  delay = 0,
  className = '',
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={animate ? { y: [0, 6, 0] } : {}}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <rect x="8" y="2" width="8" height="14" rx="4" stroke="currentColor" strokeWidth="1" />
    <motion.circle
      cx="12"
      cy="7"
      r="1"
      fill="currentColor"
      animate={{ y: [0, 3, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </motion.svg>
)

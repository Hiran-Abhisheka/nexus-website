'use client'

import { motion } from 'framer-motion'
import { useMagneticEffect } from '@/hooks/useCursor'
import React from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
}) => {
  const { elementRef, setIsHovering, magneticPosition } =
    useMagneticEffect(0.3)

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-blue to-accent-indigo text-dark-bg font-semibold',
    secondary:
      'bg-gradient-to-r from-accent-indigo to-accent-purple text-white font-semibold',
    outline:
      'border border-accent-blue text-accent-blue hover:bg-accent-blue/10',
  }

  return (
    <motion.button
      ref={elementRef}
      className={`px-8 py-3 rounded-full transition-all duration-300 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

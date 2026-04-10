'use client'

import { motion } from 'framer-motion'
import { use3DTilt } from '@/hooks/useCursor'
import React from 'react'

interface InteractiveCardProps {
  icon?: React.ReactNode | React.FC<any>
  title: string
  description: string
  className?: string
  children?: React.ReactNode
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  icon,
  title,
  description,
  className = '',
  children,
}) => {
  const { elementRef, tilt } = use3DTilt(8)

  return (
    <motion.div
      ref={elementRef}
      className={`relative p-6 rounded-2xl border border-dark-border hover:border-accent-blue/50 bg-dark-surface/50 backdrop-blur-sm transition-all duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        boxShadow: '0 0 30px rgba(0, 212, 255, 0.1)',
        y: -5,
      }}
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue">
            {typeof icon === 'function' ? (
              React.createElement(icon, { size: 24, animate: true, className: 'text-accent-blue' })
            ) : (
              <div className="text-3xl">{icon}</div>
            )}
          </div>
        )}
        <h3 className="text-xl font-semibold text-dark-text mb-2">{title}</h3>
        <p className="text-dark-muted text-sm leading-relaxed">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-accent-blue/0 pointer-events-none"
        whileHover={{
          boxShadow: 'inset 0 0 30px rgba(0, 212, 255, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

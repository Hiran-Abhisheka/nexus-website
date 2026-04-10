'use client'

import { motion } from 'framer-motion'
import { useParallax, useCursorPosition } from '@/hooks/useCursor'
import { MagneticButton } from './MagneticButton'
import { useMemo } from 'react'

export const Hero = () => {
  const parallax = useParallax(0.3)
  const { mousePosition } = useCursorPosition()

  // Calculate gradient positions based on cursor (memoized)
  const gradientPositions = useMemo(() => {
    if (typeof window === 'undefined') {
      return { x: 50, y: 50 }
    }
    return {
      x: (mousePosition.x / window.innerWidth) * 100,
      y: (mousePosition.y / window.innerHeight) * 100,
    }
  }, [mousePosition])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Animated gradient background following cursor */}
      <div className="absolute inset-0 bg-dark-bg">
        {/* Primary gradient follows cursor */}
        <motion.div
          className="absolute inset-0 opacity-50"
          suppressHydrationWarning
          style={{
            background: `radial-gradient(circle at ${gradientPositions.x}% ${gradientPositions.y}%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)`,
          }}
        />
        {/* Secondary gradient opposite direction */}
        <motion.div
          className="absolute inset-0 opacity-40"
          suppressHydrationWarning
          style={{
            background: `radial-gradient(circle at ${100 - gradientPositions.x}% ${100 - gradientPositions.y}%, rgba(106, 90, 205, 0.15) 0%, transparent 50%)`,
          }}
        />
        {/* Tertiary gradient for depth */}
        <motion.div
          className="absolute inset-0 opacity-30"
          suppressHydrationWarning
          style={{
            background: `radial-gradient(circle at ${gradientPositions.x * 0.7}% ${gradientPositions.y * 1.3}%, rgba(147, 112, 219, 0.1) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Subtle parallax orbs */}
      <motion.div
        className="absolute top-10 md:top-20 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent-blue/3 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: parallax.x * 0.5,
          y: parallax.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      <motion.div
        className="absolute bottom-10 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent-indigo/3 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: -parallax.x * 0.4,
          y: -parallax.y * 0.4,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full border border-accent-blue/30 text-accent-blue text-sm font-medium">
              Welcome to the Future
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-purple bg-clip-text text-transparent">
                Next Generation
              </span>
              <br />
              <span className="text-dark-text">Technology Solutions</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-muted max-w-2xl mx-auto leading-relaxed px-2 md:px-0"
          >
            Experience cutting-edge technology with an elegant interface. We
            build the future today with innovation at our core.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8 px-2 md:px-0"
          >
            <MagneticButton variant="primary">
              Explore Our Work
            </MagneticButton>
            <MagneticButton variant="outline">Learn More</MagneticButton>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-10 md:pt-16 max-w-xl mx-auto px-2 md:px-0"
          >
            {[
              { label: 'Projects', value: '150+' },
              { label: 'Clients', value: '50+' },
              { label: 'Years', value: '10+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-lg md:text-2xl font-bold text-accent-blue">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-dark-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClickable, setIsClickable] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)

      // Check if hovering clickable element
      const target = event.target as HTMLElement
      const isClickableElement =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('interactive')

      setIsClickable(isClickableElement)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-accent-blue rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)',
          willChange: 'transform',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClickable ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 600, damping: 35 },
          y: { type: 'spring', stiffness: 600, damping: 35 },
          scale: { type: 'spring', stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Follower ring */}
      <motion.div
        className="fixed w-8 h-8 border border-accent-blue rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClickable ? 1.3 : 1,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 400, damping: 40 },
          y: { type: 'spring', stiffness: 400, damping: 40 },
          scale: { type: 'spring', stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Larger outer ring (subtle) */}
      <motion.div
        className="fixed w-16 h-16 border border-accent-blue rounded-full pointer-events-none z-[9997]"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          opacity: isVisible ? 0.15 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 250, damping: 45 },
          y: { type: 'spring', stiffness: 250, damping: 45 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { useCursorPosition } from '@/hooks/useCursor'

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { mousePosition } = useCursorPosition()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create stars
    const stars: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      vx: number
      vy: number
      baseOpacity: number
    }> = []

    const numStars = 150

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        baseOpacity: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    let animationId: number

    const animate = () => {
      // Clear canvas with faster trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      stars.forEach((star) => {
        // Update position
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Calculate distance from mouse (squared for performance)
        const dx = mousePosition.x - star.x
        const dy = mousePosition.y - star.y
        const distanceSquared = dx * dx + dy * dy
        const maxDistanceSquared = 150 * 150

        // Star reacts to cursor
        if (distanceSquared < maxDistanceSquared) {
          const distance = Math.sqrt(distanceSquared)
          star.opacity =
            star.baseOpacity +
            (1 - distance / 150) * (0.6 - star.baseOpacity)
        } else {
          star.opacity = star.baseOpacity
        }

        // Draw star
        ctx.fillStyle = `rgba(224, 229, 240, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [mousePosition])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

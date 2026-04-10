'use client'

import { useEffect, useRef, useState } from 'react'

export const useCursorPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const moveTimeout = useRef<NodeJS.Timeout>()
  const lastUpdateRef = useRef({ x: 0, y: 0, time: 0 })
  const throttleDelay = 16 // ~60fps

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now()
      
      // Throttle updates to ~60fps
      if (now - lastUpdateRef.current.time >= throttleDelay) {
        setMousePosition({ x: event.clientX, y: event.clientY })
        lastUpdateRef.current = { x: event.clientX, y: event.clientY, time: now }
      }
      
      setIsMoving(true)

      clearTimeout(moveTimeout.current)
      moveTimeout.current = setTimeout(() => {
        setIsMoving(false)
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(moveTimeout.current)
    }
  }, [])

  return { mousePosition, isMoving }
}

export const useSmoothCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPosition({ x: event.clientX, y: event.clientY })
    }

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }))
      animationFrameId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [targetPosition])

  return position
}

export const useParallax = (offset = 0.5) => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX - window.innerWidth / 2) * offset
      const y = (event.clientY - window.innerHeight / 2) * offset

      setParallaxOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [offset])

  return parallaxOffset
}

export const useMagneticEffect = (magneticStrength = 0.5) => {
  const [isHovering, setIsHovering] = useState(false)
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 })
  const elementRef = useRef<any>(null)

  useEffect(() => {
    if (!isHovering || !elementRef.current) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = elementRef.current!.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = (event.clientX - centerX) * magneticStrength
      const distanceY = (event.clientY - centerY) * magneticStrength

      setMagneticPosition({ x: distanceX, y: distanceY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovering, magneticStrength])

  return {
    elementRef,
    setIsHovering,
    magneticPosition,
  }
}

export const use3DTilt = (
  tiltStrength = 15,
) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const elementRef = useRef<any>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const rotateX = (event.clientY - centerY) / (rect.height / 2) * tiltStrength
      const rotateY = -(event.clientX - centerX) / (rect.width / 2) * tiltStrength

      setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [tiltStrength])

  return { elementRef, tilt }
}

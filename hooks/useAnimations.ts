'use client'

import { useEffect, useRef, useState } from 'react'

export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible] as const
}

export const useMouseTracker = () => {
  const [mouseData, setMouseData] = useState({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  })
  const prevPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const vx = event.clientX - prevPos.current.x
      const vy = event.clientY - prevPos.current.y

      setMouseData({
        x: event.clientX,
        y: event.clientY,
        vx,
        vy,
      })

      prevPos.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mouseData
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

export const useScrollBlur = (sensitivity = 500) => {
  const [blur, setBlur] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [isHydrated, setIsHydrated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mark as hydrated (client-side only)
    setIsHydrated(true)

    const calculateBlur = () => {
      if (!ref.current) return

      const element = ref.current
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top

      // Only blur when scrolled ABOVE viewport
      if (elementTop < 0) {
        const distanceBeyond = Math.abs(elementTop)
        const progress = Math.min(1, distanceBeyond / sensitivity)
        setBlur(progress * 20)
        setOpacity(Math.max(0, 1 - progress))
      } else {
        // Fully visible when in viewport
        setBlur(0)
        setOpacity(1)
      }
    }

    // Calculate on mount and on scroll
    calculateBlur()
    window.addEventListener('scroll', calculateBlur, { passive: true })
    window.addEventListener('resize', calculateBlur, { passive: true })

    return () => {
      window.removeEventListener('scroll', calculateBlur)
      window.removeEventListener('resize', calculateBlur)
    }
  }, [sensitivity])

  return { ref, blur: isHydrated ? blur : 0, opacity: isHydrated ? opacity : 1 }
}

export const useScrollFade = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isFaded, setIsFaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const element = ref.current
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top

      // Fade when scrolled past
      if (elementTop < -100) {
        setIsFaded(true)
      } else {
        setIsFaded(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { ref, isFaded }
}

export const useScrollFadeVariants = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [blur, setBlur] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const element = ref.current
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top

      // ONLY blur when section is ABOVE viewport by significant amount
      // Keep fully visible while section is visible on screen
      if (elementTop < -300) {
        // Far above viewport - full fade
        const distancePast = Math.abs(elementTop) - 300
        const progress = Math.min(1, distancePast / 500)
        setBlur(progress * 15)
        setOpacity(Math.max(0.3, 1 - progress * 0.7))
      } else {
        // Still on screen or just above - fully visible
        setBlur(0)
        setOpacity(1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { ref, blur, opacity }
}

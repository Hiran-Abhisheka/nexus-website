'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useAnimations'
import { useState, useEffect } from 'react'
import { AvatarIcon, ArrowIcon } from './AnimatedIcons'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatarType: 'ceo' | 'pm' | 'founder' | 'cto'
}

export const Testimonials = () => {
  const [ref, isVisible] = useScrollReveal()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp',
      content:
        'Working with NEXUS transformed our digital presence. Their innovative approach and attention to detail exceeded all expectations.',
      avatarType: 'ceo',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateLabs',
      content:
        'The team delivered an exceptional product. Their cursor interactions and animations are the best I have ever seen.',
      avatarType: 'pm',
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Founder',
      company: 'StartupHub',
      content:
        'NEXUS is not just a development team, they are strategic partners who truly care about our success.',
      avatarType: 'founder',
    },
    {
      id: 4,
      name: 'David Brown',
      role: 'CTO',
      company: 'FutureTech',
      content:
        'Outstanding technical expertise combined with creative excellence. Highly recommended for any serious project.',
      avatarType: 'cto',
    },
  ]

  // Auto-advance testimonials
  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-dark-text">What Our </span>
            <span className="bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Main testimonial */}
          <div className="relative min-h-80 md:h-80 rounded-2xl border border-dark-border overflow-hidden bg-gradient-to-br from-dark-surface to-dark-bg">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent pointer-events-none"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6"
              >
                {/* Quote mark */}
                <div className="text-4xl md:text-5xl text-accent-blue/30">"</div>

                {/* Content */}
                <p className="text-base md:text-xl text-dark-text leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>
              </motion.div>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 md:gap-4 pt-4 md:pt-8 border-t border-dark-border"
              >
                <div className="flex-shrink-0">
                  <AvatarIcon
                    size={40}
                    type={testimonials[currentIndex].avatarType}
                    className="text-accent-blue"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-dark-text text-sm md:text-base truncate">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-xs md:text-sm text-dark-muted truncate">
                    {testimonials[currentIndex].role} at{' '}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dots and controls */}
          <div className="flex justify-between items-center gap-4 flex-wrap">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent-blue w-8'
                      : 'bg-dark-border'
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2 md:gap-4">
              <motion.button
                className="p-2 md:p-3 rounded-full border border-dark-border hover:border-accent-blue text-accent-blue transition-all"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowIcon direction="left" size={18} animate={false} />
              </motion.button>
              <motion.button
                className="p-2 md:p-3 rounded-full border border-dark-border hover:border-accent-blue text-accent-blue transition-all"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowIcon direction="right" size={18} animate={false} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

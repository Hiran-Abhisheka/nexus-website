'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useAnimations'
import { useCursorPosition } from '@/hooks/useCursor'
import { useState } from 'react'
import {
  LightningIcon,
  MobileIcon,
  RocketIcon,
  PaletteIcon,
  RobotIcon,
  CloudIcon,
} from './AnimatedIcons'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  color: string
  icon: React.ReactNode
  tags: string[]
}

export const Portfolio = () => {
  const [ref, isVisible] = useScrollReveal()
  const { mousePosition } = useCursorPosition()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'SaaS Platform',
      category: 'Web Development',
      description: 'Enterprise SaaS platform with real-time analytics dashboard and team collaboration features',
      color: 'from-accent-blue',
      icon: <LightningIcon size={40} animate />,
      tags: ['React', 'TypeScript', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking application with AI-powered workout recommendations',
      color: 'from-accent-indigo',
      icon: <MobileIcon size={40} animate />,
      tags: ['React Native', 'Firebase', 'ML'],
    },
    {
      id: 3,
      title: 'E-Commerce Site',
      category: 'Web Development',
      description: 'High-performance online retail platform with advanced search and personalization',
      color: 'from-accent-purple',
      icon: <RocketIcon size={40} animate />,
      tags: ['Next.js', 'Stripe', 'Redis'],
    },
    {
      id: 4,
      title: 'Dashboard UI',
      category: 'UI Design',
      description: 'Interactive analytics dashboard with real-time data visualization and custom reporting',
      color: 'from-accent-blue',
      icon: <PaletteIcon size={40} animate />,
      tags: ['D3.js', 'Vue', 'WebSocket'],
    },
    {
      id: 5,
      title: 'AI Assistant',
      category: 'AI Integration',
      description: 'Intelligent chatbot with NLP capabilities and multi-language support',
      color: 'from-accent-indigo',
      icon: <RobotIcon size={40} animate />,
      tags: ['Python', 'LLM', 'FastAPI'],
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      category: 'DevOps',
      description: 'Scalable cloud deployment architecture with auto-scaling and multi-region support',
      color: 'from-accent-purple',
      icon: <CloudIcon size={40} animate />,
      tags: ['Kubernetes', 'Terraform', 'AWS'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="portfolio"
      className="relative py-24 px-4 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark-text">Featured </span>
            <span className="bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            Showcase of our best work and client success stories
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group h-full"
            >
              {/* Card Container */}
              <motion.div
                className="relative h-full rounded-2xl border border-dark-border overflow-hidden bg-gradient-to-br from-dark-surface/40 to-dark-bg/40 backdrop-blur-sm"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} to-transparent`}
                />

                {/* Icon section */}
                <div className="p-6 pb-4">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-dark-surface/50 to-dark-bg/50 border border-dark-border/50 text-accent-blue mb-4"
                    animate={hoveredId === item.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Category badge */}
                  <motion.div
                    animate={
                      hoveredId === item.id
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.7, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <span className={`text-xs font-bold uppercase tracking-wider text-transparent bg-gradient-to-r ${item.color} to-transparent bg-clip-text`}>
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-dark-text mt-2 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-muted text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full border border-dark-border bg-dark-surface/30`}
                        animate={
                          hoveredId === item.id
                            ? { borderColor: 'rgba(0, 212, 255, 0.5)' }
                            : { borderColor: 'rgba(255, 255, 255, 0.1)' }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="flex items-center gap-2 text-accent-blue text-sm font-semibold group/btn"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>View Project</span>
                    <motion.span
                      animate={hoveredId === item.id ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>

                {/* Animated background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 pointer-events-none`}
                  animate={
                    hoveredId === item.id
                      ? { opacity: 0.05 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={
                    hoveredId === item.id
                      ? { boxShadow: `inset 0 0 30px rgba(0, 212, 255, 0.2), 0 0 30px ${item.color === 'from-accent-blue' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(147, 112, 219, 0.1)'}` }
                      : { boxShadow: 'inset 0 0 0px rgba(0, 212, 255, 0), 0 0 0px rgba(0, 0, 0, 0)' }
                  }
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 -left-32 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"
        suppressHydrationWarning
        animate={{
          y: [0, -50, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/2 -right-32 w-64 h-64 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none"
        suppressHydrationWarning
        animate={{
          y: [0, 50, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}

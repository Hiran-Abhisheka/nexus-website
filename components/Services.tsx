'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useAnimations'
import { InteractiveCard } from './InteractiveCard'
import {
  LightningIcon,
  PaletteIcon,
  MobileIcon,
  CloudIcon,
  ShieldIcon,
  RobotIcon,
} from './AnimatedIcons'

export const Services = () => {
  const [ref, isVisible] = useScrollReveal()

  const services = [
    {
      icon: LightningIcon,
      title: 'Web Development',
      description:
        'Modern, responsive websites built with latest technologies and best practices.',
    },
    {
      icon: PaletteIcon,
      title: 'UI/UX Design',
      description:
        'Stunning interfaces designed for user engagement and conversion optimization.',
    },
    {
      icon: MobileIcon,
      title: 'Mobile Apps',
      description:
        'Native and cross-platform applications tailored to your business needs.',
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment strategies for growth.',
    },
    {
      icon: ShieldIcon,
      title: 'Security',
      description:
        'Enterprise-grade security solutions to protect your digital assets.',
    },
    {
      icon: RobotIcon,
      title: 'AI Integration',
      description:
        'Smart automation and machine learning solutions for efficiency.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="services"
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
            <span className="text-dark-text">Our </span>
            <span className="bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business to new
            heights
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <InteractiveCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Background decoration */}
        <motion.div
          className="absolute top-1/2 -right-32 w-64 h-64 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none"
          suppressHydrationWarning
          animate={{
            y: [0, 50, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}

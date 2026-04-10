'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useAnimations'
import { RocketIcon } from './AnimatedIcons'

export const About = () => {
  const [ref, isVisible] = useScrollReveal()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-dark-text">Innovating the </span>
                <span className="bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
                  Future Today
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-dark-muted text-lg leading-relaxed"
            >
              We're a team of passionate technologists dedicated to creating
              extraordinary digital solutions. With over a decade of experience,
              we've partnered with leading brands to transform their vision into
              reality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {[
                'Expert Team of Developers',
                'Cutting-edge Technology Stack',
                'Client-Focused Approach',
                'Proven Track Record',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-accent-blue rounded-full" />
                  <span className="text-dark-text">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - card showcase */}
          <motion.div
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-square rounded-2xl border border-dark-border overflow-hidden bg-gradient-to-br from-accent-blue/10 to-accent-indigo/5">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent"
                suppressHydrationWarning
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-4"
                >
                  <RocketIcon size={64} className="text-accent-blue" />
                </motion.div>
                <h3 className="text-2xl font-bold text-dark-text mb-2">
                  Innovation Hub
                </h3>
                <p className="text-dark-muted">
                  Where creativity meets technology
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 border border-accent-blue/20 rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 border border-accent-indigo/20 rounded-full pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useAnimations'
import { useState } from 'react'
import { MagneticButton } from './MagneticButton'

export const Contact = () => {
  const [ref, isVisible] = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark-text">Let's </span>
            <span className="bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            Have a project in mind? Get in touch with us today.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-4 mb-8"
        >
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
            </motion.div>
          </div>

          {/* Subject */}
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-blue transition-colors"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <MagneticButton
              variant="primary"
              onClick={() => {}}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </MagneticButton>
          </motion.div>

          {/* Status message */}
          {submitStatus === 'success' && (
            <motion.div
              className="text-center text-accent-blue text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}
        </motion.form>

        {/* Decorative elements */}
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
      </div>
    </section>
  )
}

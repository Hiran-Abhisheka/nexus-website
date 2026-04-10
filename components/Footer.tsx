'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: '𝕏', href: '#' },
    { icon: '∎', href: '#' },
    { icon: '◈', href: '#' },
    { icon: '◉', href: '#' },
  ]

  return (
    <footer className="relative border-t border-dark-border bg-dark-bg/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-indigo bg-clip-text text-transparent">
              NEXUS
            </h3>
            <p className="text-dark-muted text-sm">
              Building the future with innovative technology solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-dark-text">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-muted hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-dark-text">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Cloud Solutions',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-dark-muted hover:text-accent-blue transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-dark-text">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-dark-border hover:border-accent-blue text-dark-muted hover:text-accent-blue flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="hidden md:block h-px bg-gradient-to-r from-dark-border via-accent-blue/30 to-dark-border mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-dark-muted text-sm">
          <p>&copy; {currentYear} NEXUS Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

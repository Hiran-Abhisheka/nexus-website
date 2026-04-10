'use client'

import {
  Navbar,
  Hero,
  About,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

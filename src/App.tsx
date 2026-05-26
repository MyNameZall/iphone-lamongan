import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Products from './components/Products'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  // Inisialisasi animasi scroll reveal
  useScrollReveal()

  useEffect(() => {
    // Re-observe setelah render — diperlukan untuk reveal yang muncul setelah state change
    const timer = setTimeout(() => {
      const event = new Event('scroll', { bubbles: true })
      window.dispatchEvent(event)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app" id="app-root">
      <a href="#beranda" className="skip-link" tabIndex={0}>
        Langsung ke konten utama
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TrustBadges />
        <Products />
        <Services />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

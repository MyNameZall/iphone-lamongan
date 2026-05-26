import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'
import './Navbar.css'

const WHATSAPP_NUMBER = '6281233722290'
const WHATSAPP_MSG = encodeURIComponent('Halo iPhone Store Lamongan, saya ingin bertanya tentang produk Anda.')

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('beranda')

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 60)

      // Deteksi section aktif
      const sections = NAV_LINKS.map((link) => link.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Tutup menu mobile saat layar diperbesar
    const handleResize = (): void => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string): void => {
    setIsMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Navigasi utama">
        <div className="container navbar__inner">
          {/* Logo */}
          <a
            href="#beranda"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#beranda') }}
            aria-label="iPhone Store Lamongan - Beranda"
          >
            <span className="navbar__logo-icon">
              <i className="fa-brands fa-apple" aria-hidden="true"></i>
            </span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-brand">iPhone Store</span>
              <span className="navbar__logo-location">Lamongan</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="navbar__menu" role="menubar">
            {NAV_LINKS.map((link) => (
              <li key={link.id} role="none">
                <a
                  href={link.href}
                  className={`navbar__link${activeSection === link.id ? ' navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  role="menuitem"
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA WhatsApp */}
          <div className="navbar__actions">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar__cta"
              id="navbar-whatsapp-btn"
              aria-label="Hubungi kami via WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>

            {/* Hamburger Button */}
            <button
              className={`navbar__hamburger${isMobileOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${isMobileOpen ? ' navbar__mobile--open' : ''}`}
        role="dialog"
        aria-label="Menu navigasi mobile"
        aria-modal="true"
      >
        <ul className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`navbar__mobile-link${activeSection === link.id ? ' navbar__mobile-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary navbar__mobile-cta"
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
          Hubungi via WhatsApp
        </a>
      </div>
    </>
  )
}

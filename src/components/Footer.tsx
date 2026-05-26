import { NAV_LINKS } from '../data'
import './Footer.css'

const WHATSAPP_NUMBER = '6281233722290'
const WHATSAPP_MSG = encodeURIComponent('Halo iPhone Store Lamongan, saya ingin bertanya tentang produk Anda.')

const SOCIAL_LINKS = [
  { id: 'instagram', icon: 'fa-brands fa-instagram', href: 'https://instagram.com', label: 'Instagram iPhone Store Lamongan' },
  { id: 'facebook',  icon: 'fa-brands fa-facebook-f', href: 'https://facebook.com',  label: 'Facebook iPhone Store Lamongan' },
  { id: 'whatsapp',  icon: 'fa-brands fa-whatsapp',   href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, label: 'WhatsApp iPhone Store Lamongan' },
  { id: 'tiktok',    icon: 'fa-brands fa-tiktok',     href: 'https://tiktok.com',    label: 'TikTok iPhone Store Lamongan' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (href: string): void => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer id="kontak" className="footer" role="contentinfo" aria-label="Footer iPhone Store Lamongan">
      {/* CTA Banner */}
      <div className="footer__banner">
        <div className="container footer__banner-inner">
          <div className="footer__banner-content">
            <h2 className="footer__banner-title">
              Siap Mendapatkan <span className="gradient-text">iPhone Terbaik?</span>
            </h2>
            <p className="footer__banner-subtitle">
              Hubungi kami sekarang dan dapatkan konsultasi gratis dari tim ahli kami di Lamongan.
            </p>
          </div>
          <div className="footer__banner-actions">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary footer__banner-btn"
              id="footer-wa-btn"
              aria-label="Hubungi iPhone Store Lamongan via WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              Chat WhatsApp Sekarang
            </a>
            <a
              href="tel:+6281233722290"
              className="btn-secondary footer__banner-btn"
              id="footer-call-btn"
              aria-label="Telepon iPhone Store Lamongan"
            >
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              Telepon Kami
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <span className="footer__logo-icon" aria-hidden="true">
                <i className="fa-brands fa-apple"></i>
              </span>
              <div className="footer__logo-text">
                <span className="footer__logo-brand">iPhone Store</span>
                <span className="footer__logo-location">Lamongan</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Toko Apple terpercaya di Lamongan. Menyediakan iPhone original,
              aksesoris premium, dan layanan servis profesional sejak 2019.
            </p>
            <div className="footer__social" role="list" aria-label="Media sosial iPhone Store Lamongan">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={s.label}
                  id={`footer-social-${s.id}`}
                  role="listitem"
                >
                  <i className={s.icon} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">Navigasi</h3>
            <ul className="footer__links" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.id} role="listitem">
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  >
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">Kontak</h3>
            <ul className="footer__contact-list" role="list">
              <li role="listitem">
                <i className="fa-solid fa-map-pin" aria-hidden="true"></i>
                <address className="footer__contact-text">
                  Jl. KH. Ahmad Dahlan No.92, Tlogoanyar, Jetis, Lamongan 62218
                </address>
              </li>
              <li role="listitem">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <a href="tel:+6281233722290" className="footer__contact-link">
                  +62 812-3372-2290
                </a>
              </li>
              <li role="listitem">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  WhatsApp Langsung
                </a>
              </li>
              <li role="listitem">
                <i className="fa-solid fa-clock" aria-hidden="true"></i>
                <span className="footer__contact-text">Senin-Sabtu: 08.00 - 22.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer__col">
            <h3 className="footer__col-title">Produk</h3>
            <ul className="footer__links" role="list">
              {['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 16 Plus', 'iPhone 15', 'AirPods Pro', 'Apple Watch'].map((item) => (
                <li key={item} role="listitem">
                  <a
                    href="#produk"
                    className="footer__link"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#produk') }}
                  >
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {year} iPhone Store Lamongan. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p className="footer__disclaimer">
            <i className="fa-brands fa-apple" aria-hidden="true"></i>
            Apple, iPhone, AirPods, dan Apple Watch adalah merek dagang terdaftar Apple Inc.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        id="whatsapp-float-btn"
        aria-label="Chat WhatsApp iPhone Store Lamongan"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        <span className="whatsapp-float__tooltip">Chat WhatsApp</span>
      </a>
    </footer>
  )
}

import './Hero.css'

const WHATSAPP_NUMBER = '6281233722290'
const WHATSAPP_MSG = encodeURIComponent('Halo iPhone Store Lamongan, saya ingin bertanya tentang produk Anda.')

export default function Hero(): JSX.Element {
  const handleScrollTo = (id: string): void => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="beranda" className="hero" aria-label="Beranda iPhone Store Lamongan">
      {/* Background Effects */}
      <div className="hero__bg-glow hero__bg-glow--1" aria-hidden="true"></div>
      <div className="hero__bg-glow hero__bg-glow--2" aria-hidden="true"></div>
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`}></span>
        ))}
      </div>

      <div className="container hero__container">
        {/* Left Content */}
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            <i className="fa-solid fa-star" aria-hidden="true"></i>
            <span>Rating 4.6 &bull; 296 Ulasan Google</span>
          </div>

          <h1 className="hero__title">
            Pengalaman Apple
            <span className="hero__title-highlight"> Terbaik</span>
            <br />
            di Lamongan
          </h1>

          <p className="hero__subtitle">
            Toko Apple terpercaya di Jl. KH. Ahmad Dahlan No.92, Lamongan.
            iPhone original garansi resmi, aksesoris premium, dan layanan servis profesional.
            COD ke seluruh wilayah Lamongan.
          </p>

          {/* Stats */}
          <div className="hero__stats" role="list" aria-label="Statistik toko">
            <div className="hero__stat" role="listitem">
              <span className="hero__stat-number">296+</span>
              <span className="hero__stat-label">Ulasan Bintang 5</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true"></div>
            <div className="hero__stat" role="listitem">
              <span className="hero__stat-number">4.6</span>
              <span className="hero__stat-label">Rating Google</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true"></div>
            <div className="hero__stat" role="listitem">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Tahun Berpengalaman</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              className="btn-primary hero__btn-primary"
              onClick={() => handleScrollTo('produk')}
              id="hero-lihat-produk-btn"
              aria-label="Lihat katalog produk iPhone"
            >
              <i className="fa-solid fa-grid-2" aria-hidden="true"></i>
              Lihat Produk
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hero__btn-secondary"
              id="hero-whatsapp-btn"
              aria-label="Hubungi toko via WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              Hubungi Toko
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero__trust" aria-label="Jaminan toko">
            <span className="hero__trust-item">
              <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
              Garansi Resmi Apple
            </span>
            <span className="hero__trust-item">
              <i className="fa-solid fa-certificate" aria-hidden="true"></i>
              100% Original
            </span>
            <span className="hero__trust-item">
              <i className="fa-solid fa-truck-fast" aria-hidden="true"></i>
              COD Lamongan
            </span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__phone-wrapper">
            <div className="hero__phone-glow"></div>
            <div className="hero__phone-ring hero__phone-ring--outer"></div>
            <div className="hero__phone-ring hero__phone-ring--inner"></div>
            <div className="hero__phone-frame">
              <img
                src="/floating-iphones.png"
                alt="iPhone premium melayang di iPhone Store Lamongan"
                className="hero__phone-img"
                loading="eager"
                width="400"
                height="500"
              />
            </div>
            {/* Floating chips */}
            <div className="hero__chip hero__chip--1">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Garansi Resmi</span>
            </div>
            <div className="hero__chip hero__chip--2">
              <i className="fa-solid fa-star"></i>
              <span>4.6 Rating</span>
            </div>
            <div className="hero__chip hero__chip--3">
              <i className="fa-solid fa-fire"></i>
              <span>Terlaris</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">Gulir ke bawah</span>
      </div>
    </section>
  )
}

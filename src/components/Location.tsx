import { useStoreStatus } from '../hooks/useScrollReveal'
import './Location.css'

const WHATSAPP_NUMBER = '6281233722290'

const STORE_HOURS = [
  { day: 'Senin - Jumat', hours: '08.00 - 22.00 WIB' },
  { day: 'Sabtu',         hours: '08.00 - 22.00 WIB' },
  { day: 'Minggu',        hours: '09.00 - 21.00 WIB' },
]

export default function Location() {
  const { isOpen, statusText, nextStatus } = useStoreStatus()

  return (
    <section id="lokasi" className="location section" aria-label="Lokasi iPhone Store Lamongan">
      <div className="container">
        {/* Header */}
        <div className="location__header reveal">
          <div className="section-label">
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            Lokasi Toko
          </div>
          <h2 className="section-title">
            Kunjungi Kami di <span className="gradient-text">Lamongan</span>
          </h2>
          <p className="section-subtitle">
            Toko kami mudah dijangkau dan berada di pusat kota Lamongan.
            Kami siap menyambut Anda untuk konsultasi langsung.
          </p>
        </div>

        {/* Content Grid */}
        <div className="location__grid">
          {/* Map Embed */}
          <div className="location__map-wrap reveal reveal-delay-1">
            <div className="location__map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789012!2d112.41501!3d-7.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e9c1234abcde%3A0xabcdef1234567890!2sJl.%20KH.%20Ahmad%20Dahlan%20No.92%2C%20Tlogoanyar%2C%20Jetis%2C%20Kec.%20Lamongan%2C%20Kabupaten%20Lamongan%2C%20Jawa%20Timur%2062218!5e0!3m2!1sid!2sid!4v1234567890"
                title="Peta lokasi iPhone Store Lamongan di Jl. KH. Ahmad Dahlan No.92"
                className="location__map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Jl.+KH.+Ahmad+Dahlan+No.92+Lamongan"
              target="_blank"
              rel="noopener noreferrer"
              className="location__map-link"
              id="location-maps-btn"
              aria-label="Buka di Google Maps"
            >
              <i className="fa-solid fa-diamond-turn-right" aria-hidden="true"></i>
              Petunjuk Arah di Google Maps
            </a>
          </div>

          {/* Info Cards */}
          <div className="location__info reveal reveal-delay-2">
            {/* Status Buka/Tutup */}
            <div className={`location__status-card ${isOpen ? 'location__status-card--open' : 'location__status-card--closed'}`}>
              <div className="location__status-indicator">
                <span className="location__status-dot" aria-hidden="true"></span>
                <span className="location__status-label">{statusText}</span>
              </div>
              <p className="location__status-next">{nextStatus}</p>
            </div>

            {/* Rating Card */}
            <div className="location__rating-card glass-card">
              <div className="location__rating-score">
                <span className="location__rating-number">4.6</span>
                <div className="location__rating-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={i < 4 ? 'fa-solid fa-star' : 'fa-solid fa-star-half-stroke'}
                      aria-hidden="true"
                    ></i>
                  ))}
                </div>
                <span className="location__rating-count">296 ulasan Google</span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="location__rating-link"
                id="location-rating-link"
                aria-label="Lihat ulasan di Google Maps"
              >
                <i className="fa-brands fa-google" aria-hidden="true"></i>
                Lihat di Google Maps
              </a>
            </div>

            {/* Address */}
            <div className="location__detail-card glass-card">
              <div className="location__detail-item">
                <div className="location__detail-icon" aria-hidden="true">
                  <i className="fa-solid fa-map-pin"></i>
                </div>
                <div>
                  <span className="location__detail-label">Alamat Toko</span>
                  <address className="location__detail-value">
                    Jl. KH. Ahmad Dahlan No.92, Tlogoanyar, Jetis,
                    Kec. Lamongan, Kabupaten Lamongan,
                    Jawa Timur 62218
                  </address>
                </div>
              </div>

              <div className="location__detail-item">
                <div className="location__detail-icon" aria-hidden="true">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span className="location__detail-label">Nomor Telepon</span>
                  <a
                    href="tel:+6281233722290"
                    className="location__detail-value location__phone-link"
                    aria-label="Hubungi kami via telepon"
                  >
                    +62 812-3372-2290
                  </a>
                </div>
              </div>

              <div className="location__detail-item">
                <div className="location__detail-icon" aria-hidden="true">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="location__hours-wrap">
                  <span className="location__detail-label">Jam Operasional</span>
                  {STORE_HOURS.map((h) => (
                    <div key={h.day} className="location__hours-row">
                      <span className="location__hours-day">{h.day}</span>
                      <span className="location__hours-time">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="location__ctas">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya ingin mengunjungi toko. Apakah ada yang bisa dibantu?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary location__cta-btn"
                id="location-wa-btn"
                aria-label="Hubungi via WhatsApp sebelum kunjungan"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                Hubungi Sebelum Kunjungan
              </a>
              <a
                href="tel:+6281233722290"
                className="btn-secondary location__cta-btn"
                id="location-call-btn"
                aria-label="Telepon langsung ke toko"
              >
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

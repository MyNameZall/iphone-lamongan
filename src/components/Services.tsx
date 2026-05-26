import { SERVICES } from '../data'
import type { Service } from '../types'
import './Services.css'

const WHATSAPP_NUMBER = '6281233722290'

export default function Services() {
  const handleWhatsApp = (service: Service): void => {
    const msg = encodeURIComponent(`Halo iPhone Store Lamongan, saya ingin mengetahui lebih lanjut tentang layanan: ${service.title}`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="layanan" className="services section" aria-label="Layanan iPhone Store Lamongan">
      <div className="container">
        {/* Header */}
        <div className="services__header reveal">
          <div className="section-label">
            <i className="fa-solid fa-gear" aria-hidden="true"></i>
            Layanan Kami
          </div>
          <h2 className="section-title">
            Solusi <span className="gradient-text">Lengkap</span> untuk
            <br />
            Perangkat Apple Anda
          </h2>
          <p className="section-subtitle">
            Kami hadir bukan hanya sebagai toko, namun sebagai mitra terpercaya
            untuk semua kebutuhan ekosistem Apple Anda di Lamongan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services__grid">
          {SERVICES.map((service: Service, index: number) => (
            <article
              key={service.id}
              className={`service-card reveal reveal-delay-${index + 1}`}
              aria-label={service.title}
            >
              <div className="service-card__icon-wrap" aria-hidden="true">
                <i className={service.icon}></i>
                <div className="service-card__icon-glow"></div>
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>

              <ul className="service-card__features" aria-label="Fitur layanan">
                {service.features.map((feature) => (
                  <li key={feature} className="service-card__feature">
                    <i className="fa-solid fa-check" aria-hidden="true"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="service-card__footer">
                <span className="service-card__price">
                  <i className="fa-solid fa-tag" aria-hidden="true"></i>
                  {service.price}
                </span>
                <button
                  className="btn-primary service-card__btn"
                  onClick={() => handleWhatsApp(service)}
                  id={`service-wa-btn-${service.id}`}
                  aria-label={`Konsultasi layanan ${service.title} via WhatsApp`}
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  Konsultasi
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import { TESTIMONIALS } from '../data'
import type { Testimonial } from '../types'
import './Testimonials.css'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars" role="img" aria-label={`Rating ${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-star ${i < rating ? 'fa-solid' : 'fa-regular'}`}
          aria-hidden="true"
        ></i>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoPlay = (): void => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 4500)
  }

  const stopAutoPlay = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay()
    }
    return stopAutoPlay
  }, [isPaused])

  const handleDotClick = (index: number): void => {
    setActiveIndex(index)
    setIsPaused(true)
    stopAutoPlay()
    setTimeout(() => setIsPaused(false), 6000)
  }

  const handlePrev = (): void => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setIsPaused(true)
    stopAutoPlay()
    setTimeout(() => setIsPaused(false), 6000)
  }

  const handleNext = (): void => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    setIsPaused(true)
    stopAutoPlay()
    setTimeout(() => setIsPaused(false), 6000)
  }

  const active: Testimonial = TESTIMONIALS[activeIndex]

  return (
    <section className="testimonials section" aria-label="Ulasan pelanggan iPhone Store Lamongan">
      <div className="container">
        {/* Header */}
        <div className="testimonials__header reveal">
          <div className="section-label">
            <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
            Ulasan Pelanggan
          </div>
          <h2 className="section-title">
            Apa Kata <span className="gradient-text">Pelanggan Kami</span>
          </h2>
          <p className="section-subtitle">
            Kepuasan pelanggan adalah prioritas utama kami. Bergabunglah dengan ratusan
            pelanggan yang sudah mempercayakan kebutuhan Apple mereka kepada kami.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="testimonials__summary reveal reveal-delay-2">
          <div className="testimonials__summary-score">4.6</div>
          <div className="testimonials__summary-info">
            <StarRating rating={5} />
            <p className="testimonials__summary-text">Berdasarkan 296 ulasan Google</p>
          </div>
          <div className="testimonials__summary-divider" aria-hidden="true"></div>
          <div className="testimonials__summary-bar-wrap" aria-label="Distribusi rating">
            {[5, 4, 3, 2, 1].map((star) => {
              const widths: Record<number, string> = { 5: '78%', 4: '15%', 3: '5%', 2: '1%', 1: '1%' }
              return (
                <div key={star} className="testimonials__bar-row">
                  <span className="testimonials__bar-label">
                    <i className="fa-solid fa-star" aria-hidden="true"></i>
                    {star}
                  </span>
                  <div className="testimonials__bar-track" role="progressbar" aria-valuenow={parseInt(widths[star])} aria-valuemin={0} aria-valuemax={100} aria-label={`${star} bintang: ${widths[star]}`}>
                    <div className="testimonials__bar-fill" style={{ width: widths[star] }}></div>
                  </div>
                  <span className="testimonials__bar-pct">{widths[star]}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div
          className="testimonials__slider reveal reveal-delay-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Slider ulasan pelanggan"
          aria-live="polite"
        >
          <div className="testimonials__card" key={active.id}>
            <div className="testimonials__card-quote" aria-hidden="true">
              <i className="fa-solid fa-quote-left"></i>
            </div>

            <div className="testimonials__card-header">
              <img
                src={active.avatar}
                alt={`Foto profil ${active.name}`}
                className="testimonials__avatar"
                width="56"
                height="56"
                loading="lazy"
              />
              <div className="testimonials__card-info">
                <span className="testimonials__card-name">{active.name}</span>
                <span className="testimonials__card-location">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  {active.location}
                </span>
              </div>
              <div className="testimonials__card-rating">
                <StarRating rating={active.rating} />
                <span className="testimonials__card-product">{active.product}</span>
              </div>
            </div>

            <blockquote className="testimonials__card-review">
              "{active.review}"
            </blockquote>

            <div className="testimonials__card-footer">
              <span className="testimonials__card-date">
                <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                {active.date}
              </span>
              <span className="testimonials__verified">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                Ulasan Terverifikasi Google
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonials__controls">
            <button
              className="testimonials__nav-btn"
              onClick={handlePrev}
              aria-label="Ulasan sebelumnya"
              id="testimonial-prev-btn"
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>

            <div className="testimonials__dots" role="tablist" aria-label="Pilih ulasan">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot${i === activeIndex ? ' testimonials__dot--active' : ''}`}
                  onClick={() => handleDotClick(i)}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Ulasan ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                ></button>
              ))}
            </div>

            <button
              className="testimonials__nav-btn"
              onClick={handleNext}
              aria-label="Ulasan berikutnya"
              id="testimonial-next-btn"
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="testimonials__thumbs reveal reveal-delay-4">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              className={`testimonials__thumb${i === activeIndex ? ' testimonials__thumb--active' : ''}`}
              onClick={() => handleDotClick(i)}
              aria-label={`Lihat ulasan dari ${t.name}`}
              id={`testimonial-thumb-${t.id}`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="testimonials__thumb-img"
                width="44"
                height="44"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

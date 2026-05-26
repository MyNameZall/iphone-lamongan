import { useState } from 'react'
import { PRODUCTS } from '../data'
import type { Product, ProductCategory } from '../types'
import './Products.css'

const WHATSAPP_NUMBER = '6281233722290'

const CATEGORIES: { key: ProductCategory; label: string; icon: string }[] = [
  { key: 'semua',     label: 'Semua Produk', icon: 'fa-solid fa-grid-2' },
  { key: 'pro',       label: 'iPhone Pro',   icon: 'fa-solid fa-crown' },
  { key: 'standard',  label: 'iPhone',       icon: 'fa-brands fa-apple' },
  { key: 'aksesoris', label: 'Aksesoris',    icon: 'fa-solid fa-headphones' },
]

const BADGE_LABELS: Record<NonNullable<Product['badge']>, { label: string; className: string }> = {
  new:       { label: 'Baru',      className: 'badge--new' },
  bestseller: { label: 'Terlaris', className: 'badge--bestseller' },
  limited:   { label: 'Terbatas', className: 'badge--limited' },
}

export default function Products(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('semua')

  const filtered: Product[] = activeCategory === 'semua'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory)

  const handleWhatsApp = (product: Product): void => {
    const msg = encodeURIComponent(product.whatsappMsg)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="produk" className="products section" aria-label="Katalog Produk iPhone Store Lamongan">
      <div className="container">
        {/* Header */}
        <div className="products__header reveal">
          <div className="section-label">
            <i className="fa-brands fa-apple" aria-hidden="true"></i>
            Katalog Produk
          </div>
          <h2 className="section-title">
            Temukan <span className="gradient-text">iPhone Impian</span> Anda
          </h2>
          <p className="section-subtitle">
            Koleksi lengkap iPhone original garansi resmi Apple Indonesia.
            Tersedia berbagai pilihan storage dan warna sesuai kebutuhan Anda.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="products__filter reveal reveal-delay-2" role="tablist" aria-label="Filter kategori produk">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              aria-controls="products-grid"
              className={`products__filter-btn${activeCategory === cat.key ? ' products__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
              id={`filter-${cat.key}`}
            >
              <i className={cat.icon} aria-hidden="true"></i>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          id="products-grid"
          className="products__grid"
          role="tabpanel"
          aria-label={`Produk kategori: ${activeCategory}`}
        >
          {filtered.map((product, index) => (
            <article
              key={product.id}
              className={`product-card reveal reveal-delay-${Math.min(index + 1, 5)}`}
              aria-label={`${product.name} - ${product.price}`}
            >
              {/* Badge */}
              {product.badge && (
                <span className={`product-card__badge ${BADGE_LABELS[product.badge].className}`} aria-label={BADGE_LABELS[product.badge].label}>
                  {BADGE_LABELS[product.badge].label}
                </span>
              )}

              {/* Image */}
              <div className="product-card__img-wrap">
                <img
                  src={product.image}
                  alt={`${product.name} - tersedia di iPhone Store Lamongan`}
                  className="product-card__img"
                  loading="lazy"
                  width="300"
                  height="280"
                />
                <div className="product-card__img-glow" aria-hidden="true"></div>
              </div>

              {/* Info */}
              <div className="product-card__body">
                <div className="product-card__category-tag">
                  <i className="fa-brands fa-apple" aria-hidden="true"></i>
                  {product.chip !== '-' ? product.chip : 'Apple Aksesoris'}
                </div>

                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__subtitle">{product.subtitle}</p>

                {/* Specs */}
                {product.camera !== '-' && (
                  <div className="product-card__specs">
                    <span className="product-card__spec">
                      <i className="fa-solid fa-camera" aria-hidden="true"></i>
                      {product.camera}
                    </span>
                    <span className="product-card__spec">
                      <i className="fa-solid fa-hard-drive" aria-hidden="true"></i>
                      {product.storage[0]}+
                    </span>
                  </div>
                )}

                {/* Colors */}
                {product.colors[0] !== '-' && (
                  <div className="product-card__colors" aria-label="Pilihan warna">
                    {product.colors.slice(0, 4).map((color) => (
                      <span
                        key={color}
                        className="product-card__color-dot"
                        title={color}
                        aria-label={color}
                      ></span>
                    ))}
                    {product.colors.length > 4 && (
                      <span className="product-card__color-more">+{product.colors.length - 4}</span>
                    )}
                  </div>
                )}

                {/* Price & Status */}
                <div className="product-card__footer">
                  <div className="product-card__price-wrap">
                    <span className="product-card__price">{product.price}</span>
                    {product.available && (
                      <span className="product-card__stock">
                        <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                        Ready Stock
                      </span>
                    )}
                  </div>
                  <button
                    className="product-card__btn btn-primary"
                    onClick={() => handleWhatsApp(product)}
                    id={`product-wa-btn-${product.id}`}
                    aria-label={`Tanya ketersediaan ${product.name} via WhatsApp`}
                  >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                    Tanya Harga
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="products__bottom reveal">
          <p className="products__bottom-text">
            <i className="fa-solid fa-info-circle" aria-hidden="true"></i>
            Tidak menemukan produk yang Anda cari? Hubungi kami untuk pengecekan stok terkini.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya ingin cek ketersediaan produk Apple di iPhone Store Lamongan.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="products-cek-stok-btn"
          >
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
            Cek Stok via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

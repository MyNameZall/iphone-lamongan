import { TRUST_BADGES } from '../data'
import type { TrustBadge } from '../types'
import './TrustBadges.css'

export default function TrustBadges() {
  return (
    <section className="trust section" aria-label="Keunggulan iPhone Store Lamongan">
      <div className="container">
        <div className="trust__grid">
          {TRUST_BADGES.map((badge: TrustBadge, index: number) => (
            <div
              key={badge.id}
              className={`trust__card reveal reveal-delay-${index + 1}`}
              role="article"
            >
              <div className="trust__icon-wrap" aria-hidden="true">
                <i className={badge.icon}></i>
              </div>
              <div className="trust__text">
                <h3 className="trust__title">{badge.title}</h3>
                <p className="trust__desc">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

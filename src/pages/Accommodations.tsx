import { useEffect, useRef } from 'react'
import { ACCOMMODATIONS, ACCOMMODATIONS_BG } from './shared'

const IMG7 = '/images/Image%207.jpg'

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('page-reveal--visible') },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export function AccommodationsPage() {
  const listRef = useReveal()
  const tipRef  = useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${ACCOMMODATIONS_BG})` }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <p className="page-eyebrow">Where to stay</p>
          <h1 className="page-hero__title">Accommodations</h1>
          <p className="page-hero__sub">Our favourite places to stay in Marrakech</p>
        </div>
      </section>

      {/* ── HOTEL LIST ── */}
      <section className="page-split">
        <div className="page-split__img-wrap">
          <img src={IMG7} alt="Marrakech" className="page-split__img" loading="lazy" />
        </div>
        <div className="page-split__text page-reveal" ref={listRef}>
          <p className="page-eyebrow page-eyebrow--dark">Our suggestions</p>
          <h2 className="page-section-title">Places to stay</h2>
          <p className="page-body">
            Marrakech has something for every taste — from intimate riads in the medina to
            luxurious resorts in the Palmeraie. Here are our top picks to make your stay
            as magical as possible.
          </p>
          <ul className="page-hotel-list">
            {ACCOMMODATIONS.map(({ name, url }) => (
              <li key={name} className="page-hotel-item">
                <a href={url} target="_blank" rel="noopener noreferrer" className="page-hotel-link">
                  <span className="page-hotel-name">{name}</span>
                  <span className="page-hotel-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TIP BANNER ── */}
      <section className="page-banner page-reveal" ref={tipRef}>
        <div className="page-banner__inner">
          <h2 className="page-banner__title">Tips for getting there</h2>
          <p className="page-banner__body">
            Marrakech Menara Airport (RAK) is well connected to most major European cities with
            direct flights. We recommend booking accommodation early as Marrakech is a popular
            destination in summer. Most hotels offer airport transfers — check with your hotel directly.
          </p>
        </div>
      </section>
    </main>
  )
}

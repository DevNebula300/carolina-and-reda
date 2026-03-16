import { useEffect, useRef } from 'react'
import { HERO_IMAGE, MAP_LINK } from './shared'

const IMG2 = '/images/Image%202.jpg'

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

export function InvitationPage() {
  const detailsRef = useReveal()
  const venueRef   = useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <p className="page-eyebrow">Jnane Rumi, Marrakech</p>
          <h1 className="page-hero__title">Join us for a<br />weekend of celebration</h1>
          <p className="page-hero__sub">26–27 June 2026</p>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn">
            View on Google Maps
          </a>
        </div>
      </section>

      {/* ── DETAILS ── */}
      <section className="page-split">
        <div className="page-split__img-wrap">
          <img src={IMG2} alt="The venue" className="page-split__img" loading="lazy" />
        </div>
        <div className="page-split__text page-reveal" ref={detailsRef}>
          <p className="page-eyebrow page-eyebrow--dark">The Invitation</p>
          <h2 className="page-section-title">You are warmly invited</h2>
          <p className="page-body">
            We are overjoyed to invite you to our wedding celebration in the beautiful city of Marrakech.
            After years of adventures together, we are finally ready to say "I do" surrounded by the people
            we love most.
          </p>
          <p className="page-body">
            The celebrations will take place across two magical evenings — a traditional Moroccan wedding
            on Friday and a joyful love celebration on Saturday.
          </p>
          <div className="page-detail-block">
            <div className="page-detail-item">
              <span className="page-detail-label">Venue</span>
              <span className="page-detail-value">Jnane Rumi, Marrakech</span>
            </div>
            <div className="page-detail-item">
              <span className="page-detail-label">Dates</span>
              <span className="page-detail-value">26–27 June 2026</span>
            </div>
            <div className="page-detail-item">
              <span className="page-detail-label">Dress code</span>
              <span className="page-detail-value">Traditional &amp; elegant (Friday) · Joyful &amp; stylish (Saturday)</span>
            </div>
          </div>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn">
            View on Google Maps
          </a>
        </div>
      </section>

      {/* ── VENUE NOTE ── */}
      <section className="page-banner page-reveal" ref={venueRef}>
        <div className="page-banner__inner">
          <h2 className="page-banner__title">Jnane Rumi, Marrakech</h2>
          <p className="page-banner__body">
            Nestled in the lush gardens of Marrakech, Jnane Rumi is one of the city's most enchanting
            venues. With its fragrant rose gardens, traditional architecture and warm Moroccan
            hospitality, it is the perfect setting for a weekend full of love and magic.
          </p>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            Get directions
          </a>
        </div>
      </section>
    </main>
  )
}

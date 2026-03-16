import { useEffect, useRef } from 'react'
import { ADD_TO_CALENDAR_LINK, RSVP_LINK, RSVP_BG } from './shared'

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

export function RsvpPage() {
  const formRef = useReveal()
  const infoRef = useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${RSVP_BG})` }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <p className="page-eyebrow">We hope to see you there</p>
          <h1 className="page-hero__title">RSVP</h1>
          <p className="page-hero__sub">Please respond by 1 May 2026</p>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="page-centred" style={{ background: 'var(--color-surface)' }}>
        <div className="page-centred__inner page-reveal" ref={formRef}>
          <p className="page-eyebrow page-eyebrow--dark">Confirm your attendance</p>
          <h2 className="page-section-title">We can't wait to celebrate with you!</h2>
          <p className="page-body page-body--centered">
            Please let us know if you are able to attend so we can make sure everything is perfect for you.
            Click below to confirm your attendance and add the event to your calendar.
          </p>
          <div className="page-btn-group">
            <a href={RSVP_LINK} className="btn">Confirm attendance</a>
            <a href={ADD_TO_CALENDAR_LINK} className="btn btn--outline">Add to calendar</a>
          </div>
        </div>
      </section>

      {/* ── NEED TO KNOW ── */}
      <section className="page-split">
        <div className="page-split__img-wrap">
          <img src={RSVP_BG} alt="Celebration" className="page-split__img" loading="lazy" />
        </div>
        <div className="page-split__text page-reveal" ref={infoRef}>
          <p className="page-eyebrow page-eyebrow--dark">Good to know</p>
          <h2 className="page-section-title">What to expect</h2>
          <p className="page-body">
            We have planned a full weekend of celebrations in Marrakech.
            Whether you are joining us for one evening or the whole weekend,
            we want to make sure you have everything you need to enjoy it fully.
          </p>
          <div className="page-detail-block">
            <div className="page-detail-item">
              <span className="page-detail-label">Thursday, 25 June</span>
              <span className="page-detail-value">Welcome aperitivo · 19:00</span>
            </div>
            <div className="page-detail-item">
              <span className="page-detail-label">Friday, 26 June</span>
              <span className="page-detail-value">Moroccan Wedding · 20:00</span>
            </div>
            <div className="page-detail-item">
              <span className="page-detail-label">Saturday, 27 June</span>
              <span className="page-detail-value">Love Celebration · 18:00</span>
            </div>
            <div className="page-detail-item">
              <span className="page-detail-label">Response deadline</span>
              <span className="page-detail-value">1 May 2026</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

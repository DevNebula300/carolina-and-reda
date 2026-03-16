import { useEffect, useRef } from 'react'
import { PROGRAM_BG } from './shared'

// Friday uses Image 6, Saturday uses Image 7 — both horizontal/portrait shots
const FRIDAY_IMG   = '/images/Image%208.jpg'
const SATURDAY_IMG = '/images/Image%207.jpg'

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

export function ProgramPage() {
  const fridayRef   = useReveal()
  const saturdayRef = useReveal()
  const noteRef     = useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${PROGRAM_BG})` }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <p className="page-eyebrow">26–27 June 2026</p>
          <h1 className="page-hero__title">The Weekend<br />Program</h1>
          <p className="page-hero__sub">Two evenings. One unforgettable celebration.</p>
        </div>
      </section>

      {/* ── FRIDAY — text left, image right ── */}
      <section className="page-split">
        <div className="page-split__text page-reveal" ref={fridayRef}>
          <p className="page-eyebrow page-eyebrow--dark">Day One</p>
          <h2 className="page-section-title">Friday, 26 June</h2>
          <p className="page-section-subtitle">Moroccan Wedding</p>
          <p className="page-body">
            Begin the weekend with an immersive Moroccan wedding experience. Dressed in traditional
            attire, join us as we celebrate with music, dance, and the rich customs that make
            Moroccan culture so vibrant and special.
          </p>
          <div className="page-timeline">
            <div className="page-timeline__item">
              <span className="page-timeline__time">20:00</span>
              <span className="page-timeline__event">Welcome &amp; arrival</span>
            </div>
            <div className="page-timeline__item">
              <span className="page-timeline__time">20:30</span>
              <span className="page-timeline__event">Ceremony begins</span>
            </div>
            <div className="page-timeline__item">
              <span className="page-timeline__time">21:30</span>
              <span className="page-timeline__event">Dinner &amp; entertainment</span>
            </div>
            <div className="page-timeline__item">
              <span className="page-timeline__time">Late</span>
              <span className="page-timeline__event">Dancing &amp; celebration</span>
            </div>
          </div>
        </div>
        <div className="page-split__img-wrap">
          <img src={FRIDAY_IMG} alt="Friday celebration" className="page-split__img" loading="lazy" />
        </div>
      </section>

      {/* ── SATURDAY — image left, text right ── */}
      <section className="page-split" style={{ background: 'var(--color-surface)' }}>
        <div className="page-split__img-wrap">
          <img src={SATURDAY_IMG} alt="Saturday celebration" className="page-split__img" loading="lazy" />
        </div>
        <div className="page-split__text page-reveal" ref={saturdayRef}>
          <p className="page-eyebrow page-eyebrow--dark">Day Two</p>
          <h2 className="page-section-title">Saturday, 27 June</h2>
          <p className="page-section-subtitle">Love Celebration</p>
          <p className="page-body">
            Saturday is all about joy, colour, and love. Come dressed in your most vibrant and
            stylish look — this is an evening to express yourself, dance, and celebrate the magic
            of two people coming together.
          </p>
          <div className="page-timeline">
            <div className="page-timeline__item">
              <span className="page-timeline__time">18:00</span>
              <span className="page-timeline__event">Welcome drinks</span>
            </div>
            <div className="page-timeline__item">
              <span className="page-timeline__time">19:00</span>
              <span className="page-timeline__event">Ceremony &amp; celebrations</span>
            </div>
            <div className="page-timeline__item">
              <span className="page-timeline__time">20:30</span>
              <span className="page-timeline__event">Dinner under the stars</span>
            </div>
            <div className="page-timeline__item">
              <span className="page-timeline__time">Late</span>
              <span className="page-timeline__event">Party &amp; dancing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTE ── */}
      <section className="page-banner page-reveal" ref={noteRef}>
        <div className="page-banner__inner">
          <h2 className="page-banner__title">Arriving early?</h2>
          <p className="page-banner__body">
            For those arriving ahead of the weekend, please join us for a welcome aperitivo on
            Thursday 25 June at 19:00. It's the perfect way to settle in, meet fellow guests,
            and get into the Marrakech spirit.
          </p>
        </div>
      </section>
    </main>
  )
}

import { useEffect, useRef } from 'react'
import { DISCOVER_BG, DISCOVER_SPOTS } from './shared'

const IMG8 = '/images/Image%208.jpg'
const IMG3 = '/images/Image%203.jpg'

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

export function DiscoverPage() {
  const introRef = useReveal()
  const spotsRef = useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${DISCOVER_BG})` }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <p className="page-eyebrow">The city where we first met</p>
          <h1 className="page-hero__title">Discover<br />Marrakech</h1>
          <p className="page-hero__sub">A place best discovered through a lover's heart</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="page-split">
        <div className="page-split__text page-reveal" ref={introRef}>
          <p className="page-eyebrow page-eyebrow--dark">Our city</p>
          <h2 className="page-section-title">A city full of magic</h2>
          <p className="page-body">
            Marrakech — the city where we first met. A place best discovered through a lover's heart.
            Its hidden corners and quiet magic have so much to offer.
          </p>
          <p className="page-body">
            We hope it brings you memories as special as the ones it has given us. From the
            ancient souks of the Medina to the fragrant orange-blossom gardens, every moment
            here feels like a gift.
          </p>
          <p className="page-body">
            We have put together a guide to our favourite spots — places that mean something
            to us and that we know you will love too.
          </p>
        </div>
        <div className="page-split__img-wrap">
          <img src={IMG8} alt="Marrakech" className="page-split__img" loading="lazy" />
        </div>
      </section>

      {/* ── PDF GUIDE ── */}
      <div className="discover-pdf-band">
        <div className="discover-pdf-inner">
          <div className="discover-pdf-text">
            <p className="page-eyebrow page-eyebrow--dark">By La Kahina</p>
            <p className="discover-pdf-title">Marrakech Out — Our Curated City Guide</p>
            <p className="discover-pdf-body">
              We've put together a beautifully curated PDF guide to Marrakech — the best
              restaurants, spas, shops, and hidden gems. Open it and start planning your stay.
            </p>
          </div>
          <a
            href="/Marrakech%20Out%20by%20La%20Kahina.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn discover-pdf-btn"
          >
            Open City Guide ↗
          </a>
        </div>
      </div>

      {/* ── SPOTS ── */}
      <section className="page-spots" style={{ background: 'var(--color-surface)' }}>
        <div className="page-spots__inner page-reveal" ref={spotsRef}>
          <p className="page-eyebrow page-eyebrow--dark">Our favourites</p>
          <h2 className="page-section-title">Places we love</h2>
          <div className="page-spots-grid">
            {DISCOVER_SPOTS.map(({ name, desc, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="page-spot-card">
                <span className="page-spot-num">0{i + 1}</span>
                <span className="page-spot-name">{name}</span>
                <span className="page-spot-desc">{desc}</span>
                <span className="page-spot-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING BANNER ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${IMG3})`, minHeight: '50vh' }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <h2 className="page-hero__title" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            We can't wait to explore<br />with you
          </h2>
        </div>
      </section>
    </main>
  )
}

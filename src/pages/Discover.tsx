import { useEffect, useRef } from 'react'
import { DISCOVER_SPOTS } from './shared'

const HERO_IMG = '/location/jnane%20rumi.webp'

const SPOT_IMAGES: Record<string, string> = {
  'Café Bacha': '/location/Bacha.jpg',
  'MACAAL': '/location/Macaal.jpg',
  'Royal Mansour': '/location/royal%20mansour.webp',
  'YSL Museum': '/location/YSL.webp',
  'Boutique X': '/location/4.webp',
  'Boutique Y': '/location/6.webp',
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('page-reveal--visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function SpotRow({
  name, desc, url, image, reverse, index,
}: {
  name: string; desc: string; url: string; image: string; reverse: boolean; index: number
}) {
  const ref = useReveal()
  return (
    <div className={`dspot-row ${reverse ? 'dspot-row--reverse' : ''}`} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="dspot-row__img-wrap">
        <img src={image} alt={name} className="dspot-row__img" loading="lazy" />
      </div>
      <div className="dspot-row__text">
        <span className="dspot-row__num">0{index + 1}</span>
        <h3 className="dspot-row__name">{name}</h3>
        <p className="dspot-row__desc">{desc}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="dspot-row__link"
        >
          Explore ↗
        </a>
      </div>
    </div>
  )
}

export function DiscoverPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      >
        <div className="section__overlay" style={{ background: 'rgba(0,0,0,0.45)' }} />
        <div className="page-hero__inner">
          <p className="page-eyebrow" style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.2em' }}>
            The city where we first met
          </p>
          <h1 className="page-hero__title" style={{ color: '#fff' }}>Discover<br />Marrakech</h1>
          <p className="page-hero__sub" style={{ color: 'rgba(255,255,255,0.8)' }}>
            A place best discovered through a lover's heart. Its hidden corners and quiet magic
            have so much to offer. We hope it brings you memories as special as the ones it has given us.
          </p>
        </div>
      </section>

      {/* ── PDF GUIDE BAND ── */}
      <section className="discover-pdf-band">
        <p className="discover-pdf-band__text">Here is a list of things to do in Marrakech.</p>
        <a
          href="/Marrakech Out by La Kahina.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="discover-pdf-band__btn"
        >
          View Guide ↗
        </a>
      </section>

      {/* ── SPOTS — alternating image + text rows ── */}
      <section className="dspot-section">
        <div className="dspot-section__header">
          <p className="page-eyebrow page-eyebrow--dark">Our favourites</p>
          <h2 className="page-section-title">A few of our favourite spots</h2>
        </div>

        {DISCOVER_SPOTS.map(({ name, desc, url }, i) => (
          <SpotRow
            key={name}
            name={name}
            desc={desc}
            url={url}
            image={SPOT_IMAGES[name] ?? '/location/jnane%20rumi%203.webp'}
            reverse={i % 2 !== 0}
            index={i}
          />
        ))}
      </section>

    </main>
  )
}

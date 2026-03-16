import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const IMG1 = '/images/Image%201.jpg'
const IMG2 = '/images/Image%202.jpg'
const IMG3 = '/images/Image%203.jpg'
const IMG4 = '/images/Image%204.jpg'
const IMG5 = '/images/Image%205.jpg'
const IMG6 = '/images/Image%206.jpg'
const IMG7 = '/images/Image%207.jpg'

function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('home-reveal--visible') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

export function HomePage() {
  const storyRef   = useReveal<HTMLElement>()
  const stripRef   = useReveal<HTMLDivElement>(0.05)
  const whyRef     = useReveal<HTMLElement>()
  const weekendRef = useReveal<HTMLElement>()
  const quoteRef   = useReveal<HTMLDivElement>()
  const goalRef    = useReveal<HTMLElement>()
  const linksRef   = useReveal<HTMLElement>()

  return (
    <main className="home">

      {/* ══ 1. HERO ══ */}
      <section
        className="home__hero section--bg"
        style={{ backgroundImage: `url(${IMG1})` }}
      >
        <div className="section__overlay" />
        <div className="home__hero-inner">
          <p className="home__eyebrow">You're invited to</p>
          <h1 className="home__hero-title">Carolina &amp; Reda's<br />Wedding Celebration</h1>
          <p className="home__hero-meta">Jnane Rumi, Marrakech</p>
          <p className="home__hero-meta">26–27 June 2026</p>
        </div>
      </section>

      {/* ══ 2. TICKER ══ */}
      <div className="home__ticker" aria-hidden="true">
        <div className="home__ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="home__ticker-item">
              Jnane Rumi, Marrakech &nbsp;·&nbsp; 26–27 June 2026 &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ══ 3. STORY TEXT ══ */}
      <section className="home__prose home-reveal" ref={storyRef}>
        <div className="home__prose-inner">
          <p className="home__eyebrow home__eyebrow--center">Our story</p>
          <p className="home__prose-body">
            After years of adventures together — from the ancient souks of Marrakech to the streets
            of Europe — we are finally bringing our two worlds together to celebrate with the people
            we love most.
          </p>
          <p className="home__prose-body">
            It's happening in Marrakech, the city where our story began, and we'd love for you to be
            there. Marrakech is a visa-friendly destination for all close family members and friends
            — and it is simply magical.
          </p>
          <NavLink to="/rsvp" className="btn home__prose-cta">RSVP</NavLink>
        </div>
      </section>

      {/* ══ 4. PHOTO STRIP — three images side by side ══ */}
      <div className="home__strip home-reveal" ref={stripRef}>
        <div className="home__strip-img-wrap">
          <img src={IMG2} alt="Carolina and Reda" className="home__strip-img" loading="lazy" />
        </div>
        <div className="home__strip-img-wrap">
          <img src={IMG4} alt="Marrakech venue" className="home__strip-img" loading="lazy" />
        </div>
        <div className="home__strip-img-wrap">
          <img src={IMG5} alt="Wedding celebration" className="home__strip-img" loading="lazy" />
        </div>
      </div>

      {/* ══ 5. WHY MARRAKECH ══ */}
      <section
        className="home__why section--bg"
        style={{ backgroundImage: `url(${IMG3})` }}
        ref={whyRef}
      >
        <div className="section__overlay home__why-overlay" />
        <div className="home__why-inner home-reveal home-reveal--visible">
          <h2 className="home__why-title">Why Marrakech?</h2>
          <div className="home__why-cols">
            <p className="home__why-body">
              We love the colour, warmth, and magic of Marrakech. It's a city that's part ancient
              medina, part fragrant garden, and full of life. Think Moorish arches and rooftop sunsets
              with a Moroccan soul.
            </p>
            <p className="home__why-body">
              And practically — Marrakech is well connected with direct flights from most European
              cities. It's easy to navigate, endlessly beautiful, and filled with unforgettable
              restaurants, riads, and experiences.
            </p>
          </div>
          <NavLink to="/discover-marrakech" className="btn btn--outline">Explore Marrakech</NavLink>
        </div>
      </section>

      {/* ══ 6. RSVP NOTICE BAND ══ */}
      <div className="home__rsvp-band">
        <p className="home__rsvp-notice">
          RSVP is now open — <NavLink to="/rsvp" className="home__rsvp-link">let us know if you can make it</NavLink>
        </p>
      </div>

      {/* ══ 7. WEEKEND SPLIT ══ */}
      <section className="home__weekend home-reveal" ref={weekendRef}>
        <div className="home__weekend-img-wrap">
          <img src={IMG6} alt="Friday celebration" className="home__weekend-img" loading="lazy" />
        </div>
        <div className="home__weekend-text">
          <p className="home__eyebrow">The weekend</p>
          <h2 className="home__weekend-title">A weekend to remember</h2>
          <p className="home__weekend-body">
            We have planned a full weekend of celebrations — starting with a traditional Moroccan
            wedding on Friday evening, followed by our love celebration on Saturday night. For those
            arriving early, join us for a welcome aperitivo on Thursday evening.
          </p>
          <div className="home__schedule">
            <div className="home__schedule-day">
              <span className="home__schedule-label">Thursday, 25 June</span>
              <span className="home__schedule-event">Welcome Aperitivo · 19:00</span>
            </div>
            <div className="home__schedule-day">
              <span className="home__schedule-label">Friday, 26 June</span>
              <span className="home__schedule-event">Moroccan Wedding · 20:00</span>
            </div>
            <div className="home__schedule-day">
              <span className="home__schedule-label">Saturday, 27 June</span>
              <span className="home__schedule-event">Love Celebration · 18:00</span>
            </div>
          </div>
          <NavLink to="/program" className="btn">Full Program</NavLink>
        </div>
      </section>

      {/* ══ 8. FULL-WIDTH QUOTE IMAGE ══ */}
      <div
        className="home__quote-banner home-reveal"
        style={{ backgroundImage: `url(${IMG7})` }}
        ref={quoteRef}
      >
        <div className="home__quote-overlay" />
        <blockquote className="home__quote">
          "Two families, one city, one celebration — Marrakech, June 2026"
        </blockquote>
      </div>

      {/* ══ 9. GOAL TEXT ══ */}
      <section className="home__prose home__prose--alt home-reveal" ref={goalRef}>
        <div className="home__prose-inner">
          <p className="home__prose-body">
            Our goal is to bring together friends and family from both of our lives in a joyful,
            once-in-a-lifetime weekend of connection — and, importantly, magic. We know that a
            destination celebration asks something of our guests, and we hope to make every moment
            worth it.
          </p>
          <p className="home__prose-body">
            We are here to help make it happen for you. If you have any questions, need help with
            travel, or simply want to reach out — please do. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ══ 10. PAGE NAV LINKS ══ */}
      <section className="home__nav-links home-reveal" ref={linksRef}>
        <div className="home__nav-links-brand">Carolina &amp; Reda · Wedding Celebration</div>
        <div className="home__nav-links-inner">
          <NavLink to="/program"              className="home__nav-link">Program</NavLink>
          <NavLink to="/rsvp"                 className="home__nav-link">RSVP</NavLink>
          <NavLink to="/accommodations"       className="home__nav-link">Accommodations</NavLink>
          <NavLink to="/discover-marrakech"   className="home__nav-link">Discover Marrakech</NavLink>
          <NavLink to="/registry"             className="home__nav-link">Registry</NavLink>
          <NavLink to="/dress-code-moodboard" className="home__nav-link">Dress Code &amp; Moodboard</NavLink>
        </div>
      </section>

    </main>
  )
}

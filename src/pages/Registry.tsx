import { useEffect, useRef } from 'react'
import { REGISTRY_BG } from './shared'

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

export function RegistryPage() {
  const textRef = useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="page-hero section--bg"
        style={{ backgroundImage: `url(${REGISTRY_BG})` }}
      >
        <div className="section__overlay" />
        <div className="page-hero__inner">
          <p className="page-eyebrow">Thank you</p>
          <h1 className="page-hero__title">Registry</h1>
          <p className="page-hero__sub">Your presence is the greatest gift</p>
        </div>
      </section>

      {/* ── MESSAGE ── */}
      <section className="page-split">
        <div className="page-split__img-wrap">
          <img src={IMG2} alt="Carolina and Reda" className="page-split__img" loading="lazy" />
        </div>
        <div className="page-split__text page-reveal" ref={textRef}>
          <p className="page-eyebrow page-eyebrow--dark">A note from us</p>
          <h2 className="page-section-title">Your presence is enough</h2>
          <p className="page-body">
            Your presence at our wedding is the greatest gift we could ever ask for.
            The fact that you are making the journey to celebrate with us in Marrakech
            means more to us than words can express.
          </p>
          <p className="page-body">
            Thank you from the bottom of our hearts for being part of this special weekend.
            We cannot wait to celebrate with you.
          </p>
          <p className="page-body">
            If you do wish to give a gift, a contribution towards our honeymoon adventures
            would be truly appreciated. Details will be shared directly.
          </p>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="page-banner">
        <div className="page-banner__inner" style={{ textAlign: 'center' }}>
          <h2 className="page-banner__title">With love,<br />Carolina &amp; Reda</h2>
          <p className="page-banner__body">
            We are so grateful to have you in our lives. See you in Marrakech!
          </p>
        </div>
      </section>
    </main>
  )
}

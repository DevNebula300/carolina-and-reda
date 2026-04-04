import { useEffect, useRef } from 'react'

// Saturday moodboard: ss1.jpg … ss26.jpg in order
const SAT_IMAGES = Array.from({ length: 26 }, (_, i) => `/saturday/ss${i + 1}.jpg`)

function MasonryBoard({ images, id }: { images: string[]; id: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = ref.current
    if (!grid) return
    const items = Array.from(grid.querySelectorAll<HTMLElement>('.pin'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pin-grid" ref={ref} aria-label={id}>
      {images.map((src, i) => (
        <div key={i} className="pin">
          <img src={src} alt="" loading="lazy" className="pin__img" />
        </div>
      ))}
    </div>
  )
}

export function DressCodePage() {
  return (
    <main className="dresscode-page">

      {/* ── INTRO ── */}
      <section className="dresscode-intro">
        <div className="dresscode-intro__inner">
          <h1 className="dresscode-intro__title">Dress Code</h1>
          <div className="dresscode-intro__days">
            <div className="dresscode-intro__day">
              <span className="dresscode-intro__day-label">Friday</span>
              <span className="dresscode-intro__day-desc">Formal</span>
            </div>
            <div className="dresscode-intro__divider" />
            <div className="dresscode-intro__day">
              <span className="dresscode-intro__day-label">Saturday</span>
              <span className="dresscode-intro__day-desc">Cocktail Attire</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SATURDAY MOODBOARD ── */}
      <section className="dresscode-board dresscode-board--alt">
        <div className="dresscode-board__header">
          <p className="page-eyebrow page-eyebrow--dark">Moodboard</p>
          <h2 className="dresscode-board__title">Saturday</h2>
        </div>
        <MasonryBoard images={SAT_IMAGES} id="Saturday moodboard" />
      </section>

    </main>
  )
}

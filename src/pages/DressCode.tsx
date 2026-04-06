import { useEffect, useRef } from 'react'

const SATURDAY_MOODBOARD_IMAGES = Array.from({ length: 5 }, (_, i) => `/saturday/ss${i + 1}.jpg`)

function SaturdayMoodboardRow({ images, id }: { images: string[]; id: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = ref.current
    if (!grid) return
    const items = Array.from(grid.querySelectorAll<HTMLElement>('.dresscode-sat-cell'))
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
      el.style.transitionDelay = `${i * 80}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="dresscode-saturday-grid" ref={ref} aria-label={id}>
      {images.map((src) => (
        <div key={src} className="dresscode-sat-cell">
          <img src={src} alt="" loading="lazy" className="dresscode-sat-cell__img" />
        </div>
      ))}
    </div>
  )
}

export function DressCodePage() {
  return (
    <main className="dresscode-page">

      {/* ── INTRO ── */}
      {/* <section className="dresscode-intro">
        <div className="dresscode-intro__inner">
          <h1 className="dresscode-intro__title">Dress Code</h1>
          <div className="dresscode-intro__days dresscode-intro__days--stacked">
            <div className="dresscode-intro__day">
              <span className="dresscode-intro__day-label">Friday</span>
              <span className="dresscode-intro__day-desc">Formal</span>
            </div>
            <div className="dresscode-intro__day">
              <span className="dresscode-intro__day-label">Saturday</span>
              <span className="dresscode-intro__day-desc">Cocktail Attire</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── SATURDAY MOODBOARD (5 images) ── */}
      <section className="dresscode-board dresscode-board--alt">
        <div className="dresscode-board__header">
          <h2 className="page-section-title">Dress Code</h2>
          <div className="dresscode-intro__days dresscode-intro__days--stacked">
            <div className="dresscode-intro__day">
              <span className="dresscode-intro__day-label">Friday</span>
              <span className="dresscode-intro__day-desc">Formal</span>
            </div>
            <div className="dresscode-intro__day">
              <span className="dresscode-intro__day-label">Saturday</span>
              <span className="dresscode-intro__day-desc">Cocktail Attire</span>
            </div>
          </div>
          <h2 className="dresscode-board__title">Saturday Moodboard</h2>
        </div>
        <SaturdayMoodboardRow images={SATURDAY_MOODBOARD_IMAGES} id="Saturday moodboard" />
      </section>

    </main>
  )
}

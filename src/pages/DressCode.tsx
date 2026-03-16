import { useEffect, useRef } from 'react'
import { MOODBOARD_IMAGES } from './shared'

export function DressCodePage() {
  const gridRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const items = Array.from(grid.querySelectorAll<HTMLElement>('.moodboard__item'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section className="section">
        <div className="section__inner">
          <h2 className="section__heading">Dress Code &amp; Moodboard</h2>
          <p className="section__body">
            A little inspiration to bring you into the magic of Marrakech. This celebration is a space to have fun, play
            and express yourself. Our vision is to create an atmosphere full of colour and authenticity — bring your
            magic.
          </p>
          <p className="section__body">
            <strong>Friday</strong> is the wedding day: traditional and elegant.
          </p>
          <p className="section__body">
            <strong>Saturday</strong> is a celebration of love — joyful, stylish and effortlessly cool.
          </p>
        </div>
        <div className="moodboard-wrapper" aria-label="Saturday moodboard">
          <div className="moodboard" ref={gridRef}>
            {MOODBOARD_IMAGES.map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" className="moodboard__item reveal" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}


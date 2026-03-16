import { HERO_IMAGE } from './shared'

export function HomePage() {
  return (
    <main>
      <section
        className="section section--hero section--bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <h1 className="section__heading">Carolina &amp; Reda</h1>
          <p className="section__title">Wedding Celebration</p>
          <p className="section__sub">26–27 June 2026</p>
        </div>
      </section>
    </main>
  )
}


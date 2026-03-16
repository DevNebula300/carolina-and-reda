import { HERO_IMAGE, MAP_LINK } from './shared'

export function InvitationPage() {
  return (
    <main>
      <section
        className="section section--bg section--hero"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner section--hero">
          <h2 className="section__heading">Join us for a weekend of celebration</h2>
          <p className="section__title">Jnane Rumi, Marrakech</p>
          <p className="section__sub">26–27 June 2026</p>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn">
            View on Google Maps
          </a>
        </div>
      </section>
    </main>
  )
}


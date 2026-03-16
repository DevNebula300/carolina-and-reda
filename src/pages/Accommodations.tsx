import { ACCOMMODATIONS, ACCOMMODATIONS_BG } from './shared'

export function AccommodationsPage() {
  return (
    <main>
      <section
        className="section section--bg"
        style={{ backgroundImage: `url(${ACCOMMODATIONS_BG})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <h2 className="section__heading">Accommodations</h2>
          <p className="section__body" style={{ marginBottom: '1.5rem' }}>
            Here are some of our suggestions for places to stay:
          </p>
          <ul className="accommodations-list">
            {ACCOMMODATIONS.map(({ name, url }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}


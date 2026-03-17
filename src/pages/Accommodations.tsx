import { ACCOMMODATIONS } from './shared'

export function AccommodationsPage() {
  return (
    <main>
      <section className="page-centred" style={{ background: 'var(--color-surface)' }}>
        <div className="page-centred__inner">
          <h1 className="page-section-title">Accomodations</h1>
          <p className="page-body page-body--centered">Here are some of our suggestions for places to stay:</p>
          <ul className="page-hotel-list" style={{ marginTop: '2rem' }}>
            {ACCOMMODATIONS.map(({ name, url }) => (
              <li key={name} className="page-hotel-item">
                <a href={url} target="_blank" rel="noopener noreferrer" className="page-hotel-link">
                  <span className="page-hotel-name">{name}</span>
                  <span className="page-hotel-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

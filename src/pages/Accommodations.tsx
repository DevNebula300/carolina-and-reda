import { ACCOMMODATION_GROUPS } from './shared'

export function AccommodationsPage() {
  return (
    <main>
      <section className="page-centred" style={{ background: 'var(--color-surface)' }}>
        <div className="page-centred__inner">
          <h1 className="page-section-title">Accommodations</h1>
          <p className="page-body page-body--centered">Our suggestions for places to stay:</p>
          <div className="page-hotel-groups">
            {ACCOMMODATION_GROUPS.map((group, gi) => (
              <section key={`${group.title}-${gi}`} className="page-hotel-group">
                <h2 className="page-hotel-group-title">{group.title}</h2>
                <ul className="page-hotel-list">
                  {group.items.map((item) => (
                    <li key={`${gi}-${item.name}`} className="page-hotel-item">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="page-hotel-link"
                        >
                          <span className="page-hotel-name">{item.name}</span>
                          <span className="page-hotel-arrow">→</span>
                        </a>
                      ) : (
                        <span className="page-hotel-row">
                          <span className="page-hotel-name">{item.name}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

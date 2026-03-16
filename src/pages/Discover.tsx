import { DISCOVER_BG, DISCOVER_SPOTS } from './shared'

export function DiscoverPage() {
  return (
    <main>
      <section
        className="section section--bg"
        style={{ backgroundImage: `url(${DISCOVER_BG})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <h2 className="section__heading">Discover Marrakech</h2>
          <p className="section__body">
            Marrakech — the city where we first met. A place best discovered through a lover’s heart. Its hidden corners
            and quiet magic have so much to offer. We hope it brings you memories as special as the ones it has given us.
          </p>
          <p className="section__body" style={{ marginBottom: '1rem' }}>
            Here are a few of our favorite spots to help you discover the magic of Marrakech:
          </p>
          <ul className="discover-list">
            {DISCOVER_SPOTS.map(({ name, desc, url }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
                <p className="discover-list__desc">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}


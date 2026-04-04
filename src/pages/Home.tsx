const HERO_IMAGE = '/images/Image%203.jpg'
const PROGRAM_BG = '/location/jnane%20rumi%203.webp'

//const COUPLE_PHOTO = '/images/Image%201.jpg'

const MAPS_URL =
  'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCQgBEAAYDRiABDIGCAAQRRg5MgkIARAAGA0YgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMgkIBBAAGA0YgAQyCQgFEAAYDRiABDIJCAYQABgNGIAEMgYIBxBFGDzSAQg0NDA0ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=it&sa=X&geocode=KWs6tncA7a8NMXQsDun6Vjpu&daddr=M24H%2BGVW,+Rue+Assawssan,+Marrakech,+Morocco'

export function HomePage() {
  return (
    <main className="home">

      {/* ── HERO ── */}
      <section
        className="home__hero section--bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="section__overlay" />
        <div className="home__hero-inner">
          <h1 className="home__hero-title">Carolina & Reda</h1>
          <p className="home__hero-date">26-27 June 2026</p>
        </div>
      </section>

      {/* ── DETAILS (date + address over full-bleed image) ── */}
      <section
        className="home__details section--bg"
        style={{ backgroundImage: `url(${PROGRAM_BG})` }}
      >
        <div className="section__overlay" />
        <div className="home__details-inner">
          <div className="home__details-text">
            <h2 className="home__details-title">Location</h2>
            <p className="home__details-meta">Jnane Rumi, Marrakech</p>
            <div className="home__details-location">
              <a className="home__details-map" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                View on Google Maps ↗
              </a>
              <span className="home__details-address">
                Rue Asasoussane Mejjat 2, Palmeraie, Marrakech
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUPLE PHOTO ── */}
      {/* <section className="home__couple" aria-label="Carolina and Reda photo">
        <div className="home__couple-inner">
          <img
            className="home__couple-img"
            src={COUPLE_PHOTO}
            alt="Carolina and Reda"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section> */}

    </main>
  )
}

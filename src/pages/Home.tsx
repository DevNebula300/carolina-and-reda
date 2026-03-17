const HERO_IMAGE = '/images/Image%201.jpg'
const PROGRAM_BG = '/location/jnane%20rumi%203.webp'
const COUPLE_PHOTO = '/images/Image%203.jpg'

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
          <p className="home__eyebrow">You're invited to</p>
          <h1 className="home__hero-title">Carolina &amp; Reda's<br />Wedding Celebration</h1>
          <p className="home__hero-meta">Jnane Rumi, Marrakech</p>
          <p className="home__hero-meta">26–27 June 2026</p>
        </div>
      </section>

      {/* ── DETAILS (3 lines + map link) ── */}
      <section className="home__details">
        <div className="home__details-inner">
          <div className="home__details-grid">
            <div className="home__details-text">
              <p className="home__details-title">Join us for a weekend of celebration</p>
              <p className="home__details-meta">Jnane Rumi, Marrakech</p>
              <p className="home__details-meta">26–27 June 2026</p>
              <a className="home__details-map" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                View on Google Maps ↗
              </a>
            </div>
            <div className="home__details-photo" aria-hidden="true">
              <img
                className="home__details-photo-img"
                src={PROGRAM_BG}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE WEEKEND PROGRAM ── */}
      <section className="home__program">
        <div className="home__program-inner">
          <p className="home__program-kicker">THE WEEKEND PROGRAM</p>
          <div className="home__program-grid">
            <div className="home__program-card">
              <h3 className="home__program-date">Friday, 26 June</h3>
              <p className="home__program-title">Moroccan Wedding</p>
              <p className="home__program-place">Jnane Rumi</p>
              <p className="home__program-time">20:00 Welcome</p>
            </div>
            <div className="home__program-card">
              <h3 className="home__program-date">Saturday, 27 June</h3>
              <p className="home__program-title">Love Celebration</p>
              <p className="home__program-place">Jnane Rumi</p>
              <p className="home__program-time">18:00 Welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUPLE PHOTO ── */}
      <section className="home__couple" aria-label="Carolina and Reda photo">
        <div className="home__couple-inner">
          <img
            className="home__couple-img"
            src={COUPLE_PHOTO}
            alt="Carolina and Reda"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

    </main>
  )
}

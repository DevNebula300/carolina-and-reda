const HERO_IMAGE = '/images/Image%203.jpg'
const PROGRAM_BG = '/location/jnane%20rumi%203.webp'

const INVITATION_FRIDAY = `/invitation/${encodeURIComponent('1. Friday card.png')}`
const INVITATION_SATURDAY_IMG = `/invitation/${encodeURIComponent('2. Saturday card.png')}`
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
          <h1 className="home__hero-title">
            Carolina & Reda Love Celebration
          </h1>
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
            <p className="home__details-meta">26-27 June 2026</p>
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

      {/* ── INVITATION CARDS ── */}
      <section className="home__invitation" aria-label="Weekend invitations">
        <div className="home__invitation-inner">
          <div className="home__invitation-grid">
            <figure className="home__invitation-figure">
              <img
                className="home__invitation-img"
                src={INVITATION_FRIDAY}
                alt="Friday invitation"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="home__invitation-figure">
              <img
                className="home__invitation-img"
                src={INVITATION_SATURDAY_IMG}
                alt="Saturday invitation"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ── THE WEEKEND PROGRAM ── */}
      <section className="home__program">
        <div className="home__program-inner">
          <p className="home__program-kicker">THE WEEKEND PROGRAM</p>
          <div className="home__program-grid">
            <div className="home__program-card">
              <h3 className="home__program-date">FRIDAY — Moroccan Wedding</h3>
              <ul className="home__program-schedule">
                <li>19:30 Guest transfers</li>
                <li>20:00 Celebration begins</li>
              </ul>
            </div>
            <div className="home__program-card">
              <h3 className="home__program-date">SATURDAY — Love Celebration</h3>
              <ul className="home__program-schedule">
                <li>18:00 Guest transfers</li>
                <li>18:30 Welcome drinks</li>
                <li>19:30 Ceremony</li>
                <li>21:00 Dinner</li>
                <li>23:00 Party</li>
              </ul>
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

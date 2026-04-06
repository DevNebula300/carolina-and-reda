const INVITATION_FRIDAY = `/invitation/${encodeURIComponent('1. Friday card.png')}`
const INVITATION_SATURDAY = `/invitation/${encodeURIComponent('2. Saturday card.png')}`

export function InvitationPage() {
  return (
    <section className="inv-page">
      <div className="inv-page__inner">

        {/* ── TITLE ── */}
        <p className="page-section-title inv-page__program-kicker">You're invited to</p>

        {/* ── INVITATION CARDS (oblique) ── */}
        <div className="inv-page__cards-scene" aria-label="Weekend invitations">
          <figure className="inv-page__card inv-page__card--friday">
            <img
              src={INVITATION_FRIDAY}
              alt="Friday invitation — Moroccan Wedding"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="inv-page__card inv-page__card--saturday">
            <img
              src={INVITATION_SATURDAY}
              alt="Saturday invitation — Love Party"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        {/* ── WEEKEND PROGRAM ── */}
        <div className="inv-page__program">
          <p className="page-section-title inv-page__program-kicker">THE WEEKEND PROGRAM</p>
          <div className="inv-page__program-grid">
            <div className="inv-page__program-card">
              <h3 className="inv-page__program-day">FRIDAY - Moroccan Wedding</h3>
              <ul className="inv-page__program-schedule">
                <li>19:30 - Guest Transfers</li>
                <li>20:00 - Celebration Begins</li>
              </ul>
            </div>
            <div className="inv-page__program-card">
              <h3 className="inv-page__program-day">SATURDAY — Love Party</h3>
              <ul className="inv-page__program-schedule">
                <li>17:30 - Guest Transfers</li>
                <li>19:00 - Ceremony Begins</li>
                <li>23:00 - Party</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

import { ADD_TO_CALENDAR_LINK, RSVP_LINK, RSVP_BG } from './shared'

export function RsvpPage() {
  return (
    <main>
      <section
        className="section section--bg"
        style={{ backgroundImage: `url(${RSVP_BG})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner" style={{ textAlign: 'center' }}>
          <h2 className="section__heading">RSVP</h2>
          <p className="section__body">
            We can’t wait to celebrate with you!
            <br />
            Please let us know if you are able to attend.
          </p>
          <p className="section__body">
            Click below to confirm your attendance and add the event to your calendar.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={RSVP_LINK} className="btn">
              RSVP
            </a>
            <a href={ADD_TO_CALENDAR_LINK} className="btn">
              Add to calendar
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


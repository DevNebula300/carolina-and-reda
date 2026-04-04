import { RSVP_LINK } from './shared'

const BG_IMAGE = '/images/Image%202.jpg'

function downloadIcs() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Carolina & Reda//Wedding Weekend//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:carolina-reda-wedding-20260626@carolina-reda',
    'DTSTAMP:20260101T120000Z',
    'SUMMARY:Carolina & Reda — Wedding Weekend',
    'DTSTART:20260626T200000',
    'DTEND:20260626T235900',
    'LOCATION:Jnane Rumi, Marrakech',
    'DESCRIPTION:Wedding weekend in Marrakech. Friday 20:00 Welcome. Saturday 18:00 Welcome.',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'carolina-reda-wedding.ics'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function RsvpPage() {
  return (
    <main>
      <section
        className="rsvp-hero section--bg"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      >
        <div className="section__overlay" style={{ background: 'rgba(0,0,0,0.48)' }} />
        <div className="rsvp-hero__inner">
          <h1 className="rsvp-hero__title rsvp-hero__title--legacy">We can't wait to celebrate with you!</h1>
          <p className="rsvp-hero__body">Please let us know if you are able to attend.</p>
          <div className="rsvp-hero__btns">
            <a
              href={RSVP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rsvp-btn"
            >
              RSVP
            </a>
            <button type="button" className="btn rsvp-btn rsvp-btn--outline" onClick={downloadIcs}>
              Add to calendar
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

const BG_IMAGE = '/reg.jpg'

export function RegistryPage() {
  return (
    <main>
      <section
        className="rsvp-hero rsvp-hero--registry section--bg"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      >
        <div className="section__overlay" style={{ background: 'rgba(0,0,0,0.48)' }} />
        <div className="rsvp-hero__inner">
          <h1 className="rsvp-hero__title">Registry</h1>
          <p className="rsvp-hero__body">
            Your presence is the greatest gift we could ask for!<br />
            Thank you for being part of this special weekend.
          </p>
        </div>
      </section>
    </main>
  )
}

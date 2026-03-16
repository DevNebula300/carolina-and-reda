import { PROGRAM_BG } from './shared'

export function ProgramPage() {
  return (
    <main>
      <section
        className="section section--bg"
        style={{ backgroundImage: `url(${PROGRAM_BG})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <h2 className="section__heading">The Weekend Program</h2>
          <div className="program-grid">
            <div className="program-day">
              <h3 className="program-day__title">Friday, 26 June</h3>
              <p className="program-day__sub">Moroccan Wedding</p>
              <p className="program-day__time">20:00 Welcome</p>
            </div>
            <div className="program-day">
              <h3 className="program-day__title">Saturday, 27 June</h3>
              <p className="program-day__sub">Love Celebration</p>
              <p className="program-day__time">18:00 Welcome</p>
            </div>
          </div>
          <p className="section__body">
            For those arriving early, please join us for a welcome aperitivo on Thursday 25 at 19:00.
          </p>
        </div>
      </section>
    </main>
  )
}


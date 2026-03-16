import { REGISTRY_BG } from './shared'

export function RegistryPage() {
  return (
    <main>
      <section
        className="section section--bg"
        style={{ backgroundImage: `url(${REGISTRY_BG})` }}
      >
        <div className="section__overlay" />
        <div className="section__inner" style={{ textAlign: 'center' }}>
          <h2 className="section__heading">Registry</h2>
          <p className="section__body">
            Your presence is the greatest gift we could ask for! Thank you for being part of this special weekend.
          </p>
        </div>
      </section>
    </main>
  )
}


import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/content'

export function Services() {
  return <section className="section services" id="servicios"><div className="container">
    <SectionHeading eyebrow="SERVICIOS" title="Lo que hacemos" description="El precio de cada pieza se define en la valoración, según tamaño, zona y nivel de detalle." />
    <div className="service-grid">{services.map(({ name, description }, index) => <article className="service-card" key={name}>
      <span className="service-card__number">0{index + 1}</span><span className="service-card__symbol" aria-hidden="true">{['✳', '◌', '⌁', '◉', 'A', '↗', '＋'][index]}</span>
      <h3>{name}</h3><p>{description}</p><span className="service-card__arrow" aria-hidden="true">↗</span>
    </article>)}</div>
  </div></section>
}

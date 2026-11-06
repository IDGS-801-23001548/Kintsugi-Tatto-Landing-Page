import { SectionHeading } from '../components/SectionHeading'
import { studioDetails } from '../data/content'

export function Visit() {
  return <section className="section visit" id="visitanos"><div className="container visit__grid">
    <div><SectionHeading eyebrow="VISÍTANOS" title="Te esperamos en el estudio" />
      <div className="visit-details"><article><span>DIRECCIÓN</span><p>{studioDetails.address}</p></article><article><span>HORARIO</span><p>{studioDetails.hours}</p></article><article><span>TELÉFONO</span><p>{studioDetails.phone}</p></article></div>
      <a className="button" href="#app">Agendar valoración <span aria-hidden="true">↗</span></a>
    </div>
    <div className="visit-map" role="img" aria-label={`Mapa de referencia de ${studioDetails.mapLabel}`}><span className="visit-map__grid" /><span className="visit-map__pin">✳</span><span className="visit-map__label">{studioDetails.mapLabel}</span><span className="visit-map__credit">KINTSUGI TATTOO · LEÓN</span></div>
  </div></section>
}

import { SectionHeading } from '../components/SectionHeading'
import galleryImage from '../assets/tattoo-gallery-demo.png'

export function Gallery() {
  return <section className="section gallery" id="galeria"><div className="container">
    <SectionHeading eyebrow="TRABAJOS" title="Galería" />
    <figure className="gallery-image"><img src={galleryImage} alt="Tatuajes de botánica, realismo, carpa koi, lettering, flores en color y constelación." width="1536" height="1024" loading="lazy" decoding="async" /><figcaption>Botánica · Realismo · Color · Lettering · Cover up · Línea fina</figcaption></figure>
  </div></section>
}

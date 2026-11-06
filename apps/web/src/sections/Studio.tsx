import { SectionHeading } from '../components/SectionHeading'
import { principles } from '../data/content'

export function Studio() {
  return <section className="section studio" id="estudio"><div className="container">
    <div className="studio__intro"><SectionHeading eyebrow="EL ESTUDIO" title="Kintsugi: el arte de reparar con oro." /><p>En Japón, el kintsugi repara la cerámica rota uniendo sus piezas con oro. Las grietas no se esconden: se convierten en la parte más valiosa de la pieza. Así entendemos el tatuaje: una marca que cuenta tu historia y que merece hacerse con respeto, técnica y paciencia.</p></div>
    <div className="principles">{principles.map(({ name, description }, index) => <article className="principle" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
  </div></section>
}

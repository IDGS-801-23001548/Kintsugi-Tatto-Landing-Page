import { SectionHeading } from '../components/SectionHeading'
import { artists } from '../data/content'
import artistsImage from '../assets/artists-demo.png'

export function Artists() {
  return <section className="section artists" id="artistas"><div className="container">
    <SectionHeading eyebrow="ARTISTAS" title="Quiénes te atienden" description="En tu valoración te recomendamos al especialista que mejor domina el estilo que buscas." />
    <div className="artist-grid">{artists.map(({ name, specialty }, index) => <article className="artist-card" key={name}><div className="artist-card__photo"><img className={`artist-card__image artist-card__image--${index}`} src={artistsImage} alt={`Retrato de ${name}`} width="1536" height="1024" loading="lazy" decoding="async" /></div><div className="artist-card__info"><span>ARTISTA</span><h3>{name}</h3><p>{specialty}</p></div></article>)}</div>
  </div></section>
}

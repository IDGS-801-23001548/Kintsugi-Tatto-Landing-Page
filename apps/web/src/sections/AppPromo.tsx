import { SectionHeading } from '../components/SectionHeading'
import { features } from '../data/content'

export function AppPromo() {
  return <section className="app-promo" id="app"><div className="container app-promo__grid">
    <div className="app-promo__copy"><SectionHeading eyebrow="LA APP DE KINTSUGI" title="Tu tatuaje, de principio a fin, en tu teléfono." description="Crea tu cuenta y ten todo en un solo lugar. Tus datos solo los ves tú y el estudio." />
      <ul className="feature-list">{features.map(({ name, description }) => <li key={name}><span aria-hidden="true">✳</span><span className="feature-list__copy"><strong>{name}</strong><small>{description}</small></span></li>)}</ul>
      <span className="button button--light button--status">Próximamente <span aria-hidden="true">· Android</span></span>
      <p className="app-promo__note">Requiere Android 8.0 o superior.</p>
    </div>
    <div className="phone-scene" role="img" aria-label="Interfaz de la aplicación Kintsugi Tattoo">
      <span className="phone-scene__orbit phone-scene__orbit--one" /><span className="phone-scene__orbit phone-scene__orbit--two" />
      <div className="phone"><div className="phone__camera" /><div className="phone__screen"><div className="phone__top"><span>9:41</span><span>•••</span></div><span className="phone__greeting">HOLA, MARIANA</span><h3>Tu historia,<br /><em>en cuidado.</em></h3><div className="phone__appointment"><span>TU PRÓXIMA CITA</span><strong>SÁB · 11:00</strong><small>Línea fina · Con tu especialista</small></div><div className="phone__tiles"><span>Seguimientos</span><span>Mis compras</span><span>Mensajes</span><span>Tienda</span></div><div className="phone__care"><strong>Indicación del estudio</strong><small>Aplica bálsamo dos veces al día por 4 días más.</small></div><span className="phone__nav">⌂　◷　♡　◉</span></div></div>
    </div>
  </div></section>
}

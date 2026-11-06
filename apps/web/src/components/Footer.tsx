import { navigation } from '../data/content'
import { Brand } from './Brand'

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><div><Brand compact /><p>Cada marca cuenta una historia.<br />Aquí la cuidamos.</p></div><div className="footer-links"><span>EXPLORA</span>{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div className="footer-links"><span>LEGAL</span><details className="footer-legal"><summary>Aviso de privacidad</summary><p>Kintsugi Tattoo utiliza los datos que compartas para gestionar y confirmar tu valoración, comunicarse contigo y brindarte seguimiento después de tu sesión. El acceso a esa información se limita a ti y al personal autorizado del estudio.</p></details><details className="footer-legal"><summary>Términos de uso</summary><p>Las citas se confirman según la disponibilidad del estudio. Las solicitudes de cambio o cancelación se consideran recibidas cuando el estudio responde. La app para Android estará disponible próximamente.</p></details></div></div>
    <div className="footer-bottom"><span>© 2026 Kintsugi Tattoo. Todos los derechos reservados.</span><span>Sitio y app desarrollados por Nexora.</span></div>
  </div></footer>
}

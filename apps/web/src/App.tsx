import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Artists } from './sections/Artists'
import { AppPromo } from './sections/AppPromo'
import { Faq } from './sections/Faq'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { Process } from './sections/Process'
import { Services } from './sections/Services'
import { Studio } from './sections/Studio'
import { Visit } from './sections/Visit'

export default function App() {
  return <><a className="skip-link" href="#main">Saltar al contenido</a><Header /><main id="main"><Hero /><Studio /><Services /><Process /><AppPromo /><Artists /><Gallery /><Faq /><Visit /></main><Footer /></>
}

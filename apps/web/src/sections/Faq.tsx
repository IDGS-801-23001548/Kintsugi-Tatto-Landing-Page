import { FaqAccordion } from '../components/FaqAccordion'
import { SectionHeading } from '../components/SectionHeading'

export function Faq() {
  return <section className="section faq" id="preguntas"><div className="container faq__grid">
    <SectionHeading eyebrow="PREGUNTAS FRECUENTES" title="Antes de tu primera cita" />
    <FaqAccordion />
  </div></section>
}

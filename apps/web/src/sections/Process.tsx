import { SectionHeading } from '../components/SectionHeading'
import { steps } from '../data/content'

export function Process() {
  return <section className="section process" id="proceso"><div className="container">
    <SectionHeading eyebrow="PROCESO" title="De la idea a la piel, en cuatro pasos" />
    <div className="process-steps">{steps.map(({ name, description }, index) => <article className="process-step" key={name}><span className="process-step__index">0{index + 1}</span><div className="process-step__rule" /><h3>{name}</h3><p>{description}</p></article>)}</div>
  </div></section>
}

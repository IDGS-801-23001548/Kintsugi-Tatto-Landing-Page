import { useState } from 'react'
import { questions } from '../data/content'

export function FaqAccordion() {
  const [expanded, setExpanded] = useState<number | null>(0)
  return <div className="faq-list">{questions.map(({ question, answer }, index) => {
    const isOpen = expanded === index
    const panelId = `faq-panel-${index}`
    return <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={question}>
      <h3><button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setExpanded(isOpen ? null : index)}>
        <span className="faq-number">0{index + 1}</span><span>{question}</span><span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button></h3>
      <div className="faq-answer" id={panelId} hidden={!isOpen}><p>{answer}</p></div>
    </article>
  })}</div>
}

import { useState } from 'react'
import { navigation } from '../data/content'
import { Brand } from './Brand'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav id="primary-navigation" className={`primary-nav${open ? ' primary-nav--open' : ''}`} aria-label="Navegación principal">
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button--small" href="#app" onClick={() => setOpen(false)}>App próximamente <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>
}

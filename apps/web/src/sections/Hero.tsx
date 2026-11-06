export function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero__wash" aria-hidden="true" />
    <div className="container hero__grid">
      <div className="hero__copy">
        <span className="eyebrow">ESTUDIO DE TATUAJE</span>
        <h1>Tatuajes con historia,<br /><em>hechos con cuidado.</em></h1>
        <p>Diseñamos cada pieza contigo, desde la primera idea hasta su cicatrización. Agenda, platica con tu artista y sigue tus cuidados desde nuestra app.</p>
        <div className="hero__actions"><a className="button" href="#app">Conocer la app <span aria-hidden="true">↗</span></a><a className="text-link" href="#servicios">Ver servicios <span aria-hidden="true">↓</span></a></div>
        <div className="hero__proof"><span>✳ Diseños propios</span><span>✳ Material estéril</span><span>✳ Seguimiento después de tu sesión</span></div>
      </div>
      <div className="hero-art" role="img" aria-label="Identidad Kintsugi Tattoo inspirada en el arte del kintsugi">
        <span className="hero-art__cracks" aria-hidden="true" />
        <svg className="hero-art__mark" viewBox="0 0 180 180" fill="none" aria-hidden="true"><circle cx="90" cy="90" r="78" stroke="currentColor" strokeWidth="5" /><path d="M34 84c4-34 36-57 68-48 28 7 46 34 39 63-7 31-34 51-65 42-20-6-34-20-40-40" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/><path d="M57 117c13-8 23-21 29-38m0 0 3-23m-3 23 22-10m-22 10 22 8m-22-8-18-12m18 12-4 22m0 0-18 11m18-11 18 11" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/><path d="M58 117h59l-7 22H65l-7-22Z" stroke="currentColor" strokeWidth="4"/><path d="m78 120 8 8-4 7m16-15-4 7 8 4" stroke="currentColor" strokeWidth="3"/></svg>
        <span className="hero-art__wordmark">KINTSUGI<br /><small>TATTOO</small></span>
        <span className="hero-art__visit"><b>◷</b><span><strong>Primera visita</strong><small>Empieza con una valoración para platicar tu idea.</small></span></span>
      </div>
    </div>
    <span className="hero__index" aria-hidden="true">01 — 06</span>
  </section>
}

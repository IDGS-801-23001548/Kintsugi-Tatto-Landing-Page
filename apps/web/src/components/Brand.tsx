type BrandProps = { compact?: boolean }

export function Brand({ compact = false }: BrandProps) {
  return <a className={`brand${compact ? ' brand--compact' : ''}`} href="#inicio" aria-label="Kintsugi Tattoo, inicio">
    <svg className="brand__mark" aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 22c1-9 9-15 18-13 8 1 13 8 12 16-1 8-8 14-17 12-6-1-10-5-12-10" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M15 30c4-2 7-5 9-10m0 0 1-6m-1 6 6-3m-6 3 6 2m-6-2-5-3m5 3-1 6m0 0-5 3m5-3 5 3" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M16 30h16l-2 6H18l-2-6Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="m21 31 2 2-1 2m4-4-1 2 2 1" stroke="currentColor" strokeWidth=".85" />
    </svg>
    <span className="brand__name">Kintsugi<span>TATTOO STUDIO</span></span>
  </a>
}

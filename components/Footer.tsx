'use client'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0806', padding: 'clamp(32px,5vw,48px) 0 24px', borderTop: '1px solid rgba(240,232,216,0.06)' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <div className="dotted-divider" style={{ marginBottom: '32px' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <img src="/logo branca transparente - smokers bbq.png" alt="Smokers BBQ" style={{ height: '40px', width: 'auto', display: 'block', marginBottom: '4px' }} />
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A3623C' }}>Carnes Defumadas · São Paulo, Brasil</div>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(184,173,158,0.5)' }}>© 2026 Smokers BBQ. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[['IG','https://instagram.com/smokersbbq_br'],['WA','https://wa.me/5511989460983']].map(([label, href]) => (
              <a key={label} href={href} target="_blank" style={{ width: '40px', height: '40px', border: '1px solid rgba(240,232,216,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B8AD9E', textDecoration: 'none', fontSize: '13px', fontWeight: 700, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#A3623C'; e.currentTarget.style.color = '#A3623C' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,232,216,0.1)'; e.currentTarget.style.color = '#B8AD9E' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

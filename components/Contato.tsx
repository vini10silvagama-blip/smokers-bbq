'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

const inputStyle = {
  width: '100%',
  background: '#1A1410',
  border: '1px solid rgba(240,232,216,0.1)',
  color: '#F0E8D8',
  fontFamily: 'Lato, sans-serif',
  fontSize: '15px',
  padding: '14px 18px',
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

const labelStyle = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: '#B8AD9E',
  marginBottom: '8px',
}

const IconWhats = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const IconInsta = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const channels = [
  { href: 'https://wa.me/5511989460983', label: '(11) 98946-0983 — WhatsApp', Icon: IconWhats },
  { href: 'mailto:vendas@smokersbbq.com.br', label: 'vendas@smokersbbq.com.br', Icon: IconMail },
  { href: 'https://instagram.com/smokersbbq_br', label: '@smokersbbq_br', Icon: IconInsta },
  { href: 'https://smokersbbq.com.br', label: 'smokersbbq.com.br', Icon: IconGlobe },
]

export default function Contato() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contato" style={{ background: '#110E0B', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <motion.div {...reveal()} className="section-label" style={{ justifyContent: 'center' }}>Pronto para Começar?</motion.div>
          <motion.h2 {...reveal(0.1)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '16px' }}>
            Pronto para Elevar o Nível do <span style={{ color: '#A3623C' }}>Seu Churrasco?</span>
          </motion.h2>
          <motion.p {...reveal(0.2)} style={{ fontSize: '17px', color: '#B8AD9E' }}>Agende uma degustação técnica gratuita ou fale direto com nosso especialista.</motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.h3 {...reveal()} style={{ fontFamily: 'Oswald, sans-serif', fontSize: '24px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Fale Diretamente</motion.h3>
            <motion.p {...reveal(0.1)} style={{ fontSize: '16px', color: '#B8AD9E', marginBottom: '32px' }}>Entre em contato pelo canal de sua preferência. Nossa equipe responde em até 2 horas em horário comercial.</motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {channels.map(({ href, label, Icon }, i) => (
                <motion.a key={i} {...reveal(i * 0.1)} href={href} target="_blank"
                  className="contact-channel"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#B8AD9E', fontSize: '15px', padding: '16px 20px', background: '#1A1410', borderLeft: '3px solid transparent', transition: 'all 0.2s' }}>
                  <span className="contact-icon" style={{ width: 36, height: 36, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(163,98,60,0.12)', color: '#A3623C', transition: 'all 0.2s' }}>
                    <Icon />
                  </span>
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div {...reveal(0.2)}>
            <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '24px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '24px' }}>Solicite uma Degustação</h3>
            {sent ? (
              <p style={{ color: '#A3623C', fontWeight: 700, fontSize: '16px', letterSpacing: '0.05em' }}>✓ Mensagem enviada! Entraremos em contato em breve.</p>
            ) : (
              <form onSubmit={e => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const nome = (form.elements.namedItem('nome') as HTMLInputElement)?.value || ''
                const empresa = (form.elements.namedItem('empresa') as HTMLInputElement)?.value || ''
                const whatsapp = (form.elements.namedItem('whatsapp') as HTMLInputElement)?.value || ''
                const tipo = (form.elements.namedItem('tipo') as HTMLSelectElement)?.value || ''
                const mensagem = (form.elements.namedItem('mensagem') as HTMLTextAreaElement)?.value || ''
                const linhas = [
                  'Olá! Quero ser parceiro da Smokers BBQ.',
                  '',
                  `*Nome:* ${nome}`,
                  empresa ? `*Empresa:* ${empresa}` : '',
                  `*WhatsApp:* ${whatsapp}`,
                  tipo && tipo !== 'Selecione...' ? `*Tipo de negócio:* ${tipo}` : '',
                  mensagem ? `*Mensagem:* ${mensagem}` : '',
                ].filter(Boolean)
                const msg = linhas.join('\n')
                window.open(`https://wa.me/5511989460983?text=${encodeURIComponent(msg)}`, '_blank')
                setSent(true)
              }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Nome *</label>
                    <input required name="nome" placeholder="Seu nome" className="form-input" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A3623C')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Empresa</label>
                    <input name="empresa" placeholder="Bar ou restaurante" className="form-input" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A3623C')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>WhatsApp *</label>
                    <input required name="whatsapp" placeholder="(11) 99999-9999" className="form-input" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A3623C')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Tipo de Negócio</label>
                    <select name="tipo" className="form-input" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', color: '#B8AD9E' }}>
                      <option>Selecione...</option>
                      <option>Bar / Pub</option>
                      <option>Restaurante</option>
                      <option>Hamburgueria</option>
                      <option>Açougue Premium</option>
                      <option>Rock Bar</option>
                      <option>Evento / Buffet</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Mensagem</label>
                  <textarea name="mensagem" placeholder="Conte sobre seu negócio e interesse..." rows={4} className="form-input" style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = '#A3623C')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                </div>
                <button type="submit" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', border: 'none', padding: '18px', cursor: 'pointer', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)' }}>Quero Ser Parceiro Smokers BBQ</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.contact-channel:hover) {
          border-left-color: #A3623C !important;
          color: #F0E8D8 !important;
          background: #221b15 !important;
        }
        :global(.contact-channel:hover .contact-icon) {
          background: rgba(163,98,60,0.25) !important;
          transform: scale(1.06);
        }
        :global(.form-input::placeholder) { color: #B8AD9E; }
        :global(.form-input:-webkit-autofill),
        :global(.form-input:-webkit-autofill:hover),
        :global(.form-input:-webkit-autofill:focus),
        :global(.form-input:-webkit-autofill:active) {
          -webkit-box-shadow: 0 0 0 1000px #1A1410 inset !important;
          -webkit-text-fill-color: #F0E8D8 !important;
          caret-color: #F0E8D8 !important;
          transition: background-color 9999s ease-in-out 0s;
        }
        :global(.form-input:focus) {
          box-shadow: 0 0 0 3px rgba(163,98,60,0.15);
        }
      `}</style>
    </section>
  )
}

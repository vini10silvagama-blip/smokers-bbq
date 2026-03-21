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
              {[
                { href: 'https://wa.me/5511989460983', label: '(11) 98946-0983 — WhatsApp' },
                { href: 'mailto:vendas@smokersbbq.com.br', label: 'vendas@smokersbbq.com.br' },
                { href: 'https://instagram.com/smokersbbq_br', label: '@smokersbbq_br' },
                { href: 'https://smokersbbq.com.br', label: 'smokersbbq.com.br' },
              ].map((link, i) => (
                <motion.a key={i} {...reveal(i * 0.1)} href={link.href} target="_blank"
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: '#B8AD9E', fontSize: '15px', padding: '16px 20px', background: '#1A1410', borderLeft: '3px solid transparent', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#A3623C'; e.currentTarget.style.color = '#F0E8D8' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = '#B8AD9E' }}>
                  → {link.label}
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
                const msg = `Olá! Sou ${nome}${empresa ? ` da ${empresa}` : ''} e tenho interesse em ser parceiro Smokers BBQ. Gostaria de agendar uma degustação técnica.`
                window.open(`https://wa.me/5511989460983?text=${encodeURIComponent(msg)}`, '_blank')
                setSent(true)
              }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Nome *</label>
                    <input required name="nome" placeholder="Seu nome" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A3623C')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Empresa</label>
                    <input name="empresa" placeholder="Bar ou restaurante" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A3623C')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>WhatsApp *</label>
                    <input required placeholder="(11) 99999-9999" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A3623C')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Tipo de Negócio</label>
                    <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', color: '#B8AD9E' }}>
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
                  <textarea placeholder="Conte sobre seu negócio e interesse..." rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = '#A3623C')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(240,232,216,0.1)')} />
                </div>
                <button type="submit" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', border: 'none', padding: '18px', cursor: 'pointer', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)' }}>Quero Ser Parceiro Smokers BBQ</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

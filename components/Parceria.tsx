'use client'
import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

const metrics = [['60%+','Margem Bruta'],['5min','Para Servir'],['R$0','Em Equipamentos'],['100%','Suporte Técnico']]
const benefits = [
  { title: 'Eficiência Máxima', text: 'Proteínas seladas a vácuo e porcionadas. Do estoque ao prato em 5 minutos. Plug & Play.' },
  { title: 'Padronização Total', text: 'O mesmo sabor e suculência em todos os turnos. Sem variação, sem surpresas.' },
  { title: 'Desperdício Zero', text: 'Abra apenas o que vende. Controle total do CMV. Sem perdas no expediente.' },
  { title: 'Treinamento Técnico', text: 'Ensinamos sua equipe a regenerar e finalizar os pratos com maestria.' },
  { title: 'Apoio de Marketing', text: 'Fotos profissionais e materiais de PDV para turbinar seu Instagram.' },
]

export default function Parceria() {
  return (
    <section id="parceria" style={{ background: '#1A1410', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div>
            <motion.div {...reveal()} className="section-label">Parceria B2B</motion.div>
            <motion.h2 {...reveal(0.1)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '16px' }}>
              Transforme Seu Cardápio em um <span style={{ color: '#A3623C' }}>Destino Gastronômico.</span>
            </motion.h2>
            <motion.p {...reveal(0.2)} style={{ fontSize: '18px', color: '#B8AD9E', marginBottom: '36px' }}>Sem fumaça, sem complicação.</motion.p>

            <motion.div {...reveal(0.3)} className="grid grid-cols-2 gap-[2px] mb-8">
              {metrics.map(([num, label], i) => (
                <div key={i} style={{ background: '#242018', padding: 'clamp(18px,3vw,28px) clamp(14px,2vw,24px)', borderTop: '2px solid rgba(163,98,60,0.2)', transition: 'border-color 0.3s', cursor: 'default' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#A3623C')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(163,98,60,0.2)')}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: '#A3623C', lineHeight: 1, marginBottom: '6px' }}>{num}</div>
                  <div style={{ fontSize: '13px', color: '#B8AD9E', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div {...reveal(0.4)} style={{ background: 'rgba(163,98,60,0.1)', border: '1px solid rgba(163,98,60,0.3)', padding: '20px 24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#B8AD9E' }}>⚠ <strong style={{ color: '#A3623C', fontStyle: 'normal' }}>Capacidade de produção limitada</strong> para manter o padrão artesanal. Garanta sua cota de fornecimento.</p>
            </motion.div>

            <motion.div {...reveal(0.5)} className="flex flex-wrap gap-3">
              <a href="#contato" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', padding: '14px 24px', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)' }}>Agendar Degustação Técnica</a>
              <a href="#contato" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F0E8D8', background: 'transparent', border: '1px solid rgba(240,232,216,0.35)', padding: '14px 24px', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)' }}>Baixar Catálogo</a>
            </motion.div>
          </div>

          <div>
            <ul style={{ listStyle: 'none', marginBottom: '40px', padding: 0 }}>
              {benefits.map((b, i) => (
                <motion.li key={i} {...reveal(i * 0.1)} style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '1px solid rgba(240,232,216,0.06)' }}>
                  <div style={{ width: '44px', height: '44px', flexShrink: 0, background: 'rgba(163,98,60,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A3623C', fontSize: '18px' }}>✓</div>
                  <div>
                    <strong style={{ display: 'block', fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#F0E8D8', marginBottom: '4px' }}>{b.title}</strong>
                    <span style={{ fontSize: '14px', color: '#B8AD9E' }}>{b.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div {...reveal(0.5)} style={{ background: '#110E0B', border: '1px solid rgba(163,117,51,0.25)', padding: '32px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#A3623C,#A37533)' }} />
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C49040', marginBottom: '12px' }}>✦ Selo "Meat by Smokers BBQ"</div>
              <p style={{ fontSize: '14px', color: '#B8AD9E', lineHeight: 1.7 }}>Ao se tornar parceiro, você agrega autoridade ao seu cardápio usando nossa marca como garantia de procedência premium. Um diferencial que o cliente percebe e paga mais por isso.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

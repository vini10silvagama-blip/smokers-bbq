'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: '#0A0806', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1" style={{ height: 'clamp(300px,40vw,480px)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: '40px', bottom: '40px', overflow: 'hidden' }}>
              <Image src="/imagem pit smoker - smokers bbq.png" alt="Pit Smoker Smokers BBQ" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '160px', height: '160px', background: 'rgba(163,98,60,0.08)', border: '1px solid rgba(163,98,60,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '13px', color: '#C07A4A', lineHeight: 1.5 }}>"A paciência do Low & Slow. A busca pela mordida perfeita."</p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div {...reveal()} className="section-label">Nossa História</motion.div>
            <motion.h2 {...reveal(0.1)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Onde a Tradição do <span style={{ color: '#A3623C' }}>Texas</span> Encontra a Eficiência de <span style={{ color: '#A3623C' }}>São Paulo.</span>
            </motion.h2>
            <motion.p {...reveal(0.2)} style={{ fontSize: '16px', color: '#B8AD9E', lineHeight: 1.85, marginBottom: '16px' }}>
              A Smokers BBQ não nasceu em um escritório, mas ao redor do fogo. Nossa história é movida por um fascínio quase obsessivo por duas coisas: <em style={{ color: '#C07A4A' }}>a paciência do Low & Slow</em> e a busca pela mordida perfeita.
            </motion.p>
            <motion.p {...reveal(0.3)} style={{ fontSize: '16px', color: '#B8AD9E', lineHeight: 1.85, marginBottom: '16px' }}>
              Tudo começou com a união de duas visões complementares. A expertise de Fernando Rezende em comunicação e estratégia, e o rigor técnico de Ricardo Bertoni — um apaixonado pela cultura do defumado que foi ao Texas aprender com os grandes Pitmasters.
            </motion.p>
            <motion.p {...reveal(0.4)} style={{ fontSize: '16px', color: '#B8AD9E', lineHeight: 1.85, marginBottom: '40px' }}>
              Unimos a bagagem técnica internacional à estrutura profissional da nossa produção em São Paulo, criando um ecossistema que preserva a alma artesanal da defumação em escala industrial.
            </motion.p>

            <motion.div {...reveal(0.5)} className="flex" style={{ borderTop: '1px solid rgba(240,232,216,0.08)', paddingTop: '32px' }}>
              {[['7+','Anos de expertise'],['12h','Defumação por corte'],['60%+','Margem parceiros']].map(([val, lbl], i) => (
                <div key={i} style={{ flex: 1, paddingRight: i < 2 ? 'clamp(16px,3vw,36px)' : '0', paddingLeft: i > 0 ? 'clamp(16px,3vw,36px)' : '0', borderRight: i < 2 ? '1px solid rgba(240,232,216,0.08)' : 'none' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#A3623C', lineHeight: 1, marginBottom: '8px' }}>{val}</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8AD9E' }}>{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

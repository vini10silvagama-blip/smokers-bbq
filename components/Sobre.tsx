'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section" style={{ position: 'relative', background: '#0A0806', padding: 'clamp(80px,10vw,140px) 0', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div className="sobre-bg sobre-bg-desktop" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/banner-historia-smokers.webp"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center right' }}
          />
        </div>
        <div className="sobre-bg sobre-bg-mobile" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/banner-historia-smokers-mobile.webp"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </div>
        <div className="sobre-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.9) 38%, rgba(10,8,6,0.55) 65%, rgba(10,8,6,0.35) 100%)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
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

            <motion.div {...reveal(0.5)} className="flex" style={{ borderTop: '1px solid rgba(240,232,216,0.12)', paddingTop: '32px' }}>
              {[['7+','Anos de expertise'],['12h','Defumação por corte'],['Alta','Margem parceiros']].map(([val, lbl], i) => (
                <div key={i} style={{ flex: 1, paddingRight: i < 2 ? 'clamp(16px,3vw,36px)' : '0', paddingLeft: i > 0 ? 'clamp(16px,3vw,36px)' : '0', borderRight: i < 2 ? '1px solid rgba(240,232,216,0.12)' : 'none' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#A3623C', lineHeight: 1, marginBottom: '8px' }}>{val}</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8AD9E' }}>{lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block" aria-hidden />

        </div>
      </div>

      <style jsx>{`
        :global(.sobre-bg-mobile) { display: none; }
        @media (max-width: 1023px) {
          :global(.sobre-section) {
            padding-bottom: clamp(520px, 120vw, 720px) !important;
          }
          :global(.sobre-bg-desktop) { display: none; }
          :global(.sobre-bg-mobile) { display: block; }
          :global(.sobre-overlay) {
            background: linear-gradient(
              180deg,
              rgba(10,8,6,0.97) 0%,
              rgba(10,8,6,0.95) 35%,
              rgba(10,8,6,0.82) 50%,
              rgba(10,8,6,0.45) 62%,
              rgba(10,8,6,0.12) 78%,
              rgba(10,8,6,0) 100%
            ) !important;
          }
        }
      `}</style>
    </section>
  )
}

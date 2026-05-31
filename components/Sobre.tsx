'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section" style={{ position: 'relative', background: '#0A0806', padding: 'clamp(64px,8vw,120px) 0', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div className="sobre-bg sobre-bg-desktop" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/banner-historia-smokers.webp"
            alt=""
            fill
            quality={92}
            priority={false}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'right center' }}
          />
        </div>
        <div className="sobre-bg sobre-bg-mobile" style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: '-4px' }}>
          <Image
            src="/banner-historia-smokers-mobile.webp"
            alt=""
            fill
            quality={92}
            priority={false}
            sizes="(max-width: 1023px) 100vw, 0px"
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </div>
        <div className="sobre-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(10,8,6,1) 0%, rgba(10,8,6,1) 42%, rgba(10,8,6,0) 55%, rgba(10,8,6,0) 100%)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <motion.div {...reveal()} className="section-label">Nossa História</motion.div>
            <motion.h2 {...reveal(0.1)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Nós levamos <span style={{ color: '#A3623C' }}>anos</span> para dominar o fogo, para que você leve apenas <span style={{ color: '#A3623C' }}>5 minutos</span> para servir a perfeição.
            </motion.h2>
            <motion.p {...reveal(0.2)} style={{ fontSize: '16px', color: '#B8AD9E', lineHeight: 1.85, marginBottom: '16px' }}>
              A Smokers BBQ nasceu da paixão pelo verdadeiro Churrasco Americano e da busca implacável pela qualidade. Fomos até o Texas buscar na fonte as melhores técnicas de defumação e passamos anos refinando processos e testando limites para que você <strong style={{ color: '#F0E8D8', fontWeight: 600 }}>não precise investir em infraestrutura pesada, contratar mão de obra especializada ou enfrentar a longa e custosa curva de aprendizado</strong> que essa arte exige.
            </motion.p>
            <motion.p {...reveal(0.3)} style={{ fontSize: '16px', color: '#B8AD9E', lineHeight: 1.85, marginBottom: '16px' }}>
              Essa expertise é fruto da parceria entre Fernando Rezende e o Chef Ricardo Bertoni, que com muita dedicação fundiram o domínio técnico com uma visão estratégica de negócio, resultando em uma operação que <strong style={{ color: '#F0E8D8', fontWeight: 600 }}>entrega o rigor do churrasco artesanal com total eficiência</strong>. Afinal, entendemos que, para um restaurante ter sucesso, <strong style={{ color: '#F0E8D8', fontWeight: 600 }}>o sabor inesquecível e a excelência do produto precisam caminhar lado a lado com a lucratividade</strong>.
            </motion.p>
            <motion.p {...reveal(0.4)} style={{ fontSize: '16px', color: '#B8AD9E', lineHeight: 1.85, marginBottom: '16px' }}>
              Por isso, nós assumimos o calor e a fumaça do Pit Smoker, as horas de defumação, a seleção dos melhores cortes e toda a complexidade de produção, para que você entregue ao seu cliente <strong style={{ color: '#F0E8D8', fontWeight: 600 }}>o melhor do American BBQ em poucos minutos</strong>.
            </motion.p>
            <motion.p {...reveal(0.5)} style={{ fontSize: '16px', color: '#F0E8D8', lineHeight: 1.85, marginBottom: '40px', fontWeight: 500 }}>
              Fale com a nossa equipe, agende uma degustação e eleve o nível do seu cardápio com a <span style={{ color: '#A3623C' }}>Smokers BBQ!</span>
            </motion.p>

            <motion.div {...reveal(0.6)} className="flex sobre-stats" style={{ borderTop: '1px solid rgba(240,232,216,0.12)', paddingTop: '32px' }}>
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

        /* Notebook (telas curtas) — comprime tipografia e espaçamentos */
        @media (min-width: 1024px) and (max-height: 820px) {
          :global(.sobre-section) {
            padding-top: clamp(48px, 6vh, 80px) !important;
            padding-bottom: clamp(48px, 6vh, 80px) !important;
          }
          :global(.sobre-section h2) {
            font-size: clamp(22px, 2.6vw, 36px) !important;
            margin-bottom: 16px !important;
          }
          :global(.sobre-section p) {
            font-size: 14px !important;
            line-height: 1.7 !important;
            margin-bottom: 12px !important;
          }
          :global(.sobre-stats) {
            padding-top: 20px !important;
          }
        }

        @media (max-width: 1023px) {
          :global(.sobre-section) {
            padding-bottom: clamp(340px, 85vw, 440px) !important;
          }
          :global(.sobre-stats) {
            margin-bottom: clamp(48px, 10vw, 80px) !important;
            position: relative;
            z-index: 2;
          }
          :global(.sobre-stats > div) {
            background: rgba(10,8,6,0.85);
            backdrop-filter: blur(4px);
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }
          :global(.sobre-bg-desktop) { display: none; }
          :global(.sobre-bg-mobile) { display: block; }
          :global(.sobre-overlay) {
            background: linear-gradient(
              180deg,
              rgba(10,8,6,1) 0%,
              rgba(10,8,6,1) 70%,
              rgba(10,8,6,0.5) 82%,
              rgba(10,8,6,0) 100%
            ) !important;
          }
        }
      `}</style>
    </section>
  )
}

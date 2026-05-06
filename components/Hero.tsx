'use client'
import { motion } from 'framer-motion'

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay } })

const embers = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  bottom: `${Math.random() * 30}%`,
  size: `${Math.random() * 3 + 1.5}px`,
  duration: `${Math.random() * 6 + 5}s`,
  delay: `${Math.random() * 8}s`,
  drift: `${(Math.random() - 0.5) * 80}px`,
  color: Math.random() > 0.5 ? '#A3623C' : '#C07A4A',
}))

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh', background: '#0A0806', paddingTop: '72px' }}>

      {/* Vídeo desktop */}
      <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover hidden md:block">
        <source src="/HERO VIDEO OTIMIZADO - DESKTOP.mp4" type="video/mp4" />
      </video>
      {/* Vídeo mobile */}
      <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover md:hidden">
        <source src="/HERO VIDEO OTIMIZADO - MOBILE.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.65)' }} />

      {/* Brasas flutuantes */}
      {embers.map(e => (
        <span key={e.id} className="ember" style={{
          left: e.left,
          bottom: e.bottom,
          width: e.size,
          height: e.size,
          background: e.color,
          '--duration': e.duration,
          '--delay': e.delay,
          '--drift': e.drift,
          zIndex: 2,
        } as React.CSSProperties} />
      ))}

<div className="relative z-10 w-full" style={{ maxWidth: '1160px', margin: '0 auto', padding: 'clamp(80px,12vh,120px) 20px clamp(48px,6vh,80px)' }}>
        <motion.div {...fade(0)} className="inline-flex items-center gap-2 mb-8" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A3623C', border: '1px solid rgba(163,98,60,0.4)', padding: '8px 18px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A3623C', display: 'inline-block' }} />
          American BBQ Premium · São Paulo, Brasil
        </motion.div>

        <motion.h1 {...fade(0.2)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 700, lineHeight: 1.0, textTransform: 'uppercase', color: '#F0E8D8', marginBottom: '24px' }}>
          O Autêntico<br />
          <span style={{ color: '#A3623C' }}>American BBQ</span><br />
          Para o Seu<br />
          <span style={{ color: '#A3623C' }}>Negócio.</span>
        </motion.h1>

        <motion.p {...fade(0.4)} style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 400, color: '#B8AD9E', maxWidth: '580px', marginBottom: '40px', lineHeight: 1.8 }}>
          Carnes defumadas por até 12h em lenhas frutíferas, prontas para servir em 5 minutos. O legítimo Churrasco Texano para o seu bar ou restaurante.
        </motion.p>

        <motion.div {...fade(0.6)} className="flex flex-wrap gap-3 mb-16">
          <a href="#contato" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', padding: '14px 28px', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)' }}>Quero uma Degustação Técnica</a>
          <a href="#produtos" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0E8D8', background: 'transparent', border: '1px solid rgba(240,232,216,0.35)', padding: '14px 28px', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)' }}>Conheça Nosso Cardápio</a>
        </motion.div>

        <motion.div {...fade(0.8)} className="grid grid-cols-3 gap-4" style={{ maxWidth: '400px' }}>
          {[['7+','Anos de Expertise'],['100%','Carne Premium'],['+40','Clientes Atendidos']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,36px)', fontWeight: 700, color: '#A3623C', lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8AD9E', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

const cards = [
  { title: 'Desperdício Zero', text: 'Embalagem a vácuo individual. Você abre apenas o que vende — sem perdas no final do expediente e com controle total do CMV.', icon: '✓' },
  { title: 'Padronização Total', text: 'O mesmo sabor e suculência em todos os turnos. Acabe com a variação de qualidade que afasta clientes e complica a operação.', icon: '≡' },
  { title: 'Escalabilidade Garantida', text: 'Aumente o volume sem aumentar a equipe. Sem Pitmaster, sem equipamentos caros, sem 12h de monitoramento na sua cozinha.', icon: '↑' },
]

export default function Solucao() {
  return (
    <section id="solucao" style={{ background: '#110E0B', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div {...reveal} className="section-label">O Problema do Mercado</motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-20">
          <motion.div {...reveal} className="relative w-full" style={{ aspectRatio: '4/5', maxHeight: '560px' }}>
            <Image
              src="/imagem pit smoker - smokers bbq.png"
              alt="Pit smoker Smokers BBQ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          <div>
            <motion.h2 {...reveal} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(24px,3.4vw,44px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Ofereça churrasco defumado <span style={{ color: '#A3623C' }}>de verdade</span>, sem estrutura, sem equipe e sem complicação.
            </motion.h2>
            <motion.p {...reveal} style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 400, color: '#B8AD9E', lineHeight: 1.8 }}>
              A Smokers BBQ oferece a solução completa para você. Produzir um American BBQ de verdade exige tempo, técnica, equipamentos e uma equipe especializada — cenário que não é a realidade da maioria dos bares e restaurantes. Foi pensando nisso que criamos uma solução inteligente: carnes defumadas no pitmaster, prontas para finalização. Você elimina a complexidade da produção, reduz desperdícios, não precisa investir em equipamentos ou mão de obra especializada, e ainda oferece um produto premium, pronto em 5 minutos, com sabor autêntico e padrão constante. <strong style={{ color: '#A3623C', fontWeight: 700 }}>Assim, sua cozinha ganha eficiência, seu cardápio ganha valor e seu negócio ganha escala.</strong>
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mb-12">
          {cards.map((card, i) => (
            <motion.div key={i} {...reveal} transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{ background: '#1A1410', padding: 'clamp(28px,4vw,44px) clamp(20px,3vw,36px)', borderTop: '2px solid transparent', transition: 'border-color 0.3s, background 0.3s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#A3623C')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
              <div style={{ fontSize: '32px', color: '#A3623C', marginBottom: '20px' }}>{card.icon}</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>{card.title}</div>
              <p style={{ fontSize: '15px', color: '#B8AD9E', lineHeight: 1.7 }}>{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="flex flex-wrap items-center justify-between gap-6" style={{ background: 'linear-gradient(90deg,rgba(163,98,60,0.12),rgba(163,117,51,0.08))', borderLeft: '3px solid #A3623C', padding: 'clamp(20px,3vw,28px) clamp(16px,3vw,36px)' }}>
          <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(16px,2vw,20px)', fontWeight: 600, textTransform: 'uppercase' }}>Nós cuidamos do fogo para que <span style={{ color: '#A3623C' }}>o seu caixa nunca esfrie.</span></p>
          <a href="#contato" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', padding: '14px 28px', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)', whiteSpace: 'nowrap' }}>Agendar Degustação</a>
        </motion.div>
      </div>
    </section>
  )
}

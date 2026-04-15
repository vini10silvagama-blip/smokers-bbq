'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

const FlameIcon = () => (
  <svg width="40" height="40" viewBox="0 0 512 512" fill="#A3623C" xmlns="http://www.w3.org/2000/svg">
    <path d="M310.764 27.086c35.65 52.304 28.718 138.494 1.23 202.857.814-37.525-4.488-79.686-18.12-124.634 9.56 106.27-74.502 226.382-113.556 176.323-18.965-24.314-25.796-96.042 7.48-148.52-20.36 12.828-36.114 34.506-46.052 60.358C89.2 293.815 127.04 411.82 248.318 411.82c154.426 0 249.604-250.51 62.446-384.732zM225.67 132.773c-11.55 1.477-24.57 13.962-33.502 34.973-14.002 32.94-13.464 74.536.64 92.914 10.576 13.785 25.695 10.895 38.678-5.465l.004-.004c4.328-5.45 8.49-12.35 11.99-20.588.11-.262.002-.618.112-.88-10.898 12.023-23.323 14.096-32.006 2.782-12.374-16.126-12.36-52.928-.074-81.832 4.055-9.54 8.972-16.68 14.158-21.9zm141.492 80.635c-11.895 181.347-175.84 187.74-203.445 106.76h.002c51.202 34.305 111.037 8.255 128.913-60.43l6.043 51.364c31.064-29.207 49.024-50.36 68.486-97.694zM99.722 363.936C49.57 377.563 17.175 397.75 17.175 420.14c0 41.018 106.522 74.352 237.695 74.352 131.172 0 237.696-33.334 237.696-74.35 0-22.312-32.12-42.58-81.964-56.206 17.23 8.88 27.517 19.25 27.517 30.445 0 32.13-82.312 58.546-183.25 58.546-100.936 0-182.66-26.418-182.66-58.545 0-11.253 10.11-21.536 27.517-30.444h-.004z"/>
  </svg>
)

const MeatIcon = () => (
  <svg width="40" height="40" viewBox="0 0 512 512" fill="#A3623C" xmlns="http://www.w3.org/2000/svg">
    <path d="M511.904,253.069c-1.554-48.548-44.377-84.942-104.409-88.656c-120.865-7.486-109.51-67.345-209.664-73.722c-5.642-0.361-11.206-0.536-16.662-0.536c-102.294,0-171.103,61.839-180.098,137.418c-0.548,4.591-0.839,9.124-0.968,13.612H0v52.824h0.31c3.218,66.926,53.423,119.234,135.051,121.51c48.123,1.342,182.039,5.082,224.552,6.268c69.628,1.94,136.722-44.738,149.856-104.255c0.87-3.94,1.419-7.815,1.767-11.639H512v-52.824H511.904z M483.976,270.015c-10.169,46.098-63.947,83.595-119.866,83.595c-1.154,0-2.308-0.02-3.462-0.046l-56.247-1.574l-168.305-4.694c-36.877-1.032-66.784-13.638-86.496-36.458c-18.042-20.898-25.967-49.361-22.304-80.144c7.996-67.196,71.272-114.127,153.874-114.127c4.913,0,9.956,0.162,14.985,0.484c40.514,2.579,58.118,14.489,80.41,29.578c27.553,18.642,58.788,39.779,129.299,44.144c29.797,1.844,54.784,13.387,68.557,31.655C484.569,235.897,487.877,252.353,483.976,270.015z"/>
    <path d="M338.827,236.587l-101.03-7.222c-10.969-0.786-20.957-6.596-27.05-15.746l-27.257-40.882c-3.037-4.553-9.182-5.784-13.734-2.747c-4.553,3.037-5.784,9.182-2.747,13.734l12.522,18.784c5.474,8.215,7.287,18.338,5.004,27.946c-2.283,9.608-8.454,17.829-17.043,22.704l-38.947,22.104c-4.759,2.702-6.43,8.744-3.728,13.502c2.702,4.759,8.744,6.43,13.502,3.728l69.48-39.431c6.1-3.469,13.09-5.043,20.086-4.546l109.535,7.828c5.455,0.387,10.188-3.72,10.582-9.176C348.39,241.714,344.289,236.974,338.827,236.587z"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A3623C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </svg>
)

const cards = [
  { title: 'Defumação de Verdade', text: '12 horas em pit smoker, com madeira nobre. O mesmo método das melhores smokehouses dos EUA.', Icon: FlameIcon },
  { title: 'Carne Premium', text: 'Cortes selecionados, temperados e defumados por quem respeita o tempo do BBQ.', Icon: MeatIcon },
  { title: 'Finalização em Minutos', text: 'Chega a vácuo, pronto para regenerar e servir. Autenticidade sem complexidade na sua cozinha.', Icon: ClockIcon },
]

export default function Solucao() {
  return (
    <section id="solucao" style={{ background: '#110E0B', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-20">
          <motion.div {...reveal} className="relative w-full" style={{ aspectRatio: '4/5', maxHeight: '560px', overflow: 'hidden' }}>
            <Image
              src="/imagem pit smoker - smokers bbq.png"
              alt="Pit smoker Smokers BBQ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="steam" style={{ left: '22%', animationDelay: '0s' }} />
            <span className="steam" style={{ left: '48%', animationDelay: '1.3s' }} />
            <span className="steam" style={{ left: '70%', animationDelay: '2.6s' }} />
          </motion.div>

          <div>
            <motion.div {...reveal} className="section-label">A Solução Smokers BBQ</motion.div>
            <motion.h2 {...reveal} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(24px,3.4vw,44px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>
              Ofereça churrasco defumado <span style={{ color: '#A3623C' }}>de verdade</span>, sem estrutura, sem equipe e sem complicação.
            </motion.h2>
            <motion.p {...reveal} style={{ fontSize: 'clamp(15px,1.4vw,17px)', fontWeight: 400, color: '#B8AD9E', lineHeight: 1.8 }}>
              A Smokers BBQ oferece a solução completa para você. Produzir um American BBQ de verdade exige tempo, técnica, equipamentos e uma equipe especializada — cenário que não é a realidade da maioria dos bares e restaurantes. Foi pensando nisso que criamos uma solução inteligente: carnes defumadas no pitmaster, prontas para finalização. Você elimina a complexidade da produção, reduz desperdícios, não precisa investir em equipamentos ou mão de obra especializada, e ainda oferece um produto premium, pronto em 5 minutos, com sabor autêntico e padrão constante. <strong style={{ color: '#A3623C', fontWeight: 700 }}>Assim, sua cozinha ganha eficiência, seu cardápio ganha valor e seu negócio ganha escala.</strong>
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mb-12">
          {cards.map(({ title, text, Icon }, i) => (
            <motion.div key={i} {...reveal} transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{ background: '#1A1410', padding: 'clamp(28px,4vw,44px) clamp(20px,3vw,36px)', borderTop: '2px solid transparent', transition: 'border-color 0.3s, background 0.3s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#A3623C')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
              <div style={{ marginBottom: '20px' }}><Icon /></div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>{title}</div>
              <p style={{ fontSize: '15px', color: '#B8AD9E', lineHeight: 1.7 }}>{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="flex flex-wrap items-center justify-between gap-6" style={{ background: 'linear-gradient(90deg,rgba(163,98,60,0.12),rgba(163,117,51,0.08))', borderLeft: '3px solid #A3623C', padding: 'clamp(20px,3vw,28px) clamp(16px,3vw,36px)' }}>
          <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(16px,2vw,20px)', fontWeight: 600, textTransform: 'uppercase' }}>Do pit smoker <span style={{ color: '#A3623C' }}>direto para o seu cardápio.</span></p>
          <a href="#contato" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', padding: '14px 28px', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)', whiteSpace: 'nowrap' }}>Agendar Degustação</a>
        </motion.div>
      </div>
    </section>
  )
}

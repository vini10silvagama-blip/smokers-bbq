'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

const produtos = [
  { img: '/imagem brisket - smokers bbq.png', nome: 'Brisket', tag: 'Carro-chefe · Texas BBQ', desc: 'O ícone do Texas BBQ. Defumado 12h em lenha de macieira selecionada. Casca crocante, interior suculento com smoke ring perfeito.' },
  { img: '/imagem cost suina - smokers bbq.png', nome: 'Costelinha Suína', tag: 'Campeão de vendas', desc: 'O campeão de vendas. Macia, suculenta e irresistível. Cai do osso com textura que conquista qualquer cardápio de bar ou restaurante.' },
  { img: '/imagem cupim def - smokers bbq.png', nome: 'Cupim Defumado', tag: 'Toque brasileiro', desc: 'O toque brasileiro na técnica americana. Corte nobre com marmoreio natural, defumado até atingir maciez incomparável.' },
  { img: '/imagem cost bovina - smokers bbq.png', nome: 'Costela Bovina', tag: 'Corte premium', desc: 'O corte premium de alto impacto. Imponente, saborosa e com alto valor percebido — justifica o preço premium no cardápio.' },
  { img: '/imagem frango def - smokers bbq.png', nome: 'Frango Defumado', tag: 'Versátil · Acessível', desc: 'Opção acessível para pratos e sanduíches premium. Perfeito para diversificar o cardápio com alto giro e ótima margem.' },
  { img: '/imagem linguica art - smokers bbq.png', nome: 'Linguiça Artesanal', tag: 'Petisco perfeito', desc: 'Linguiça artesanal Smokers defumada. O petisco perfeito para bares e pubs. Fácil preparo, alto giro, clientes sempre pedindo mais.' },
]

const steps = [
  { n: '01', label: 'Seleção', desc: 'Carnes nobres selecionadas com rigor' },
  { n: '02', label: 'Defumação 12h', desc: 'Lenhas frutíferas, temperatura controlada' },
  { n: '03', label: 'Embalagem a Vácuo', desc: 'Sabor e qualidade preservados' },
  { n: '04', label: 'Heat & Eat', desc: '5 min no banho-maria. Pronto para servir.' },
]

export default function Produtos() {
  return (
    <section id="produtos" style={{ background: '#0A0806', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div {...reveal()} className="section-label">Cardápio de Elite</motion.div>
        <motion.h2 {...reveal(0.1)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '12px' }}>
          Nosso Cardápio de <span style={{ color: '#A3623C' }}>Elite</span>
        </motion.h2>
        <motion.p {...reveal(0.2)} style={{ fontSize: '17px', color: '#B8AD9E', marginBottom: '48px', maxWidth: '560px' }}>
          As melhores opções de defumados que se encaixam nos mais variados cardápios.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] mb-20">
          {produtos.map((p, i) => (
            <motion.div key={i} {...reveal(i * 0.1)}
              style={{ background: '#110E0B', padding: 'clamp(28px,4vw,40px) clamp(20px,3vw,32px)', position: 'relative', overflow: 'hidden', transition: 'background 0.3s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1A1410')}
              onMouseLeave={e => (e.currentTarget.style.background = '#110E0B')}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', marginBottom: '20px', position: 'relative' }}>
                <Image src={p.img} alt={p.nome} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.transform = 'scale(1.07)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.transform = 'scale(1)')} />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A3623C', marginBottom: '12px' }}>{p.tag}</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F0E8D8', marginBottom: '16px' }}>{p.nome}</div>
              <p style={{ fontSize: '14px', color: '#B8AD9E', lineHeight: 1.7 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="dotted-divider" style={{ marginBottom: '48px' }} />

        <motion.p {...reveal()} style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8AD9E', textAlign: 'center', marginBottom: '40px' }}>
          Nosso Processo de Produção Premium
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <motion.div key={i} {...reveal(i * 0.1)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'clamp(16px,2vw,24px) 16px' }}>
              <div style={{ width: '56px', height: '56px', background: '#1A1410', border: '1px solid rgba(163,98,60,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Oswald, sans-serif', fontSize: '18px', fontWeight: 700, color: '#A3623C', marginBottom: '20px' }}>{s.n}</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '15px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F0E8D8', marginBottom: '8px' }}>{s.label}</div>
              <p style={{ fontSize: '13px', color: '#B8AD9E', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

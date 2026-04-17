'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay } })

type Produto = {
  img: string
  nome: string
  tag: string
  desc: string
  detalhes: {
    carne: string
    defumacao: string
    porcoes: string
    preparo: string
    acompanhamentos: string
  }
}

const produtos: Produto[] = [
  {
    img: '/imagem brisket - smokers bbq.png',
    nome: 'Brisket',
    tag: 'Carro-chefe · Texas BBQ',
    desc: 'O ícone do Texas BBQ. Defumado 12h em lenha de macieira selecionada. Casca crocante, interior suculento com smoke ring perfeito.',
    detalhes: {
      carne: 'Peito bovino Angus',
      defumacao: 'Até 12 horas em lenha frutífera — aroeira, macieira e laranjeira',
      porcoes: 'Pratos ou entradas — de 100gr a 200gr',
      preparo: 'Panela com água quente fechado no vácuo (Sous Vide), forno combinado com vapor ou forno convencional (embrulhado no alumínio), frigideira ou chapa.',
      acompanhamentos: 'Carne com potência e presença marcante no paladar — combina com acompanhamentos mais leves e não muito gordurosos: legumes, arroz, batata, purês, saladas, massas com molho branco. Pode ser finalizado com molhos à base de carne como madeira e demi glace.',
    },
  },
  {
    img: '/imagem cost suina - smokers bbq.png',
    nome: 'Costelinha Suína',
    tag: 'Campeão de vendas',
    desc: 'O campeão de vendas. Macia, suculenta e irresistível. Cai do osso com textura que conquista qualquer cardápio de bar ou restaurante.',
    detalhes: {
      carne: 'Costela Suína Tipo A',
      defumacao: '8 horas em lenha frutífera — aroeira, macieira e laranjeira',
      porcoes: 'Entradas e pratos — de 200gr a 450gr',
      preparo: 'Panela com água quente fechado no vácuo (Sous Vide), forno combinado com vapor, forno convencional (embrulhado no alumínio), finalizada na churrasqueira ou grelha.',
      acompanhamentos: 'Pode ser servida com carboidratos como batata ou mandioca, cozidos ou fritos, além de acompanhamentos mais tradicionais como vinagrete, farofa e arroz. Finalizada com molhos como o barbecue ou demi glace.',
    },
  },
  {
    img: '/imagem cupim def - smokers bbq.png',
    nome: 'Cupim Defumado',
    tag: 'Toque brasileiro',
    desc: 'O toque brasileiro na técnica americana. Corte nobre com marmoreio natural, defumado até atingir maciez incomparável.',
    detalhes: {
      carne: 'Cupim Tipo A',
      defumacao: 'Até 10 horas em lenha frutífera — aroeira, macieira e laranjeira',
      porcoes: 'Pratos ou entradas — de 100gr a 200gr',
      preparo: 'Panela com água quente fechado no vácuo (Sous Vide), forno combinado com vapor ou forno convencional (embrulhado no alumínio), frigideira, chapa, grelha ou churrasqueira quando porcionado em steaks.',
      acompanhamentos: 'Carne com potência e presença marcante — combina com acompanhamentos mais leves e não muito gordurosos: legumes, arroz, batata, purês, saladas. Também pode ser servido em forma de ragu (desfiado ou em pedaços pequenos) em massas e risotos.',
    },
  },
  {
    img: '/imagem cost bovina - smokers bbq.png',
    nome: 'Costela Bovina',
    tag: 'Corte premium',
    desc: 'O corte premium de alto impacto. Imponente, saborosa e com alto valor percebido — justifica o preço premium no cardápio.',
    detalhes: {
      carne: 'Costela bovina selecionada',
      defumacao: 'Defumação longa em lenha frutífera — aroeira, macieira e laranjeira',
      porcoes: 'Pratos ou entradas — de 150gr a 300gr',
      preparo: 'Panela com água quente fechado no vácuo (Sous Vide), forno combinado com vapor ou forno convencional (embrulhado no alumínio), finalizada na churrasqueira ou grelha.',
      acompanhamentos: 'Corte nobre e marcante — harmoniza com acompanhamentos tradicionais como arroz, farofa, vinagrete, legumes grelhados e purês. Finalize com molhos como demi glace, chimichurri ou barbecue para elevar o prato.',
    },
  },
  {
    img: '/imagem frango def - smokers bbq.png',
    nome: 'Frango Defumado',
    tag: 'Versátil · Acessível',
    desc: 'Opção acessível para pratos e sanduíches premium. Perfeito para diversificar o cardápio com alto giro e ótima margem.',
    detalhes: {
      carne: 'Coxa e sobrecoxa de frango — com ou sem osso',
      defumacao: 'Até 4 horas em lenha frutífera — aroeira, macieira e laranjeira',
      porcoes: 'Pratos — de 200gr a 450gr',
      preparo: 'Panela com água quente fechado no vácuo, forno combinado com vapor, forno convencional embrulhado, churrasqueira ou grelha.',
      acompanhamentos: 'Por ser uma carne mais leve, combina com acompanhamentos de maior teor de gordura como frituras, risotos e massas, além de clássicos brasileiros como arroz, farofa, legumes e saladas.',
    },
  },
  {
    img: '/imagem linguica art - smokers bbq.png',
    nome: 'Linguiça Artesanal',
    tag: 'Petisco perfeito',
    desc: 'Linguiça artesanal Smokers defumada. O petisco perfeito para bares e pubs. Fácil preparo, alto giro, clientes sempre pedindo mais.',
    detalhes: {
      carne: 'Pernil e toucinho com especiarias — SEM conservantes',
      defumacao: 'Defumada a frio por 30min + 1h em lenha frutífera',
      porcoes: 'Entradas e pratos — de 200gr a 400gr',
      preparo: 'Panela com água quente fechado no vácuo (Sous Vide), forno combinado com vapor ou forno convencional (embrulhado no alumínio), frigideira, chapa, grelha ou churrasqueira.',
      acompanhamentos: 'Servida como entrada com acompanhamentos clássicos brasileiros ou como prato principal. Também funciona muito bem em lanches como o famoso Choripán.',
    },
  },
]

const steps = [
  { n: '01', label: 'Seleção', desc: 'Carnes nobres selecionadas com rigor' },
  { n: '02', label: 'Defumação 12h', desc: 'Lenhas frutíferas, temperatura controlada' },
  { n: '03', label: 'Embalagem a Vácuo', desc: 'Sabor e qualidade preservados' },
  { n: '04', label: 'Heat & Eat', desc: '5 min no banho-maria. Pronto para servir.' },
]

export default function Produtos() {
  const [selected, setSelected] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateArrows()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 20 : 340
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const produto = selected !== null ? produtos[selected] : null

  return (
    <section id="produtos" style={{ background: '#0A0806', padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div {...reveal()} className="section-label">Cardápio de Elite</motion.div>
        <motion.h2 {...reveal(0.1)} style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '12px' }}>
          Nosso Cardápio de <span style={{ color: '#A3623C' }}>Elite</span>
        </motion.h2>
        <motion.p {...reveal(0.2)} className="md:whitespace-nowrap" style={{ fontSize: '17px', color: '#B8AD9E', marginBottom: '48px' }}>
          As melhores opções de defumados que se encaixam nos mais variados cardápios.
        </motion.p>
      </div>

      <div style={{ position: 'relative', marginBottom: '80px' }}>
        <button
          aria-label="Anterior"
          onClick={() => scroll('left')}
          disabled={!canLeft}
          style={{
            position: 'absolute', left: 'clamp(8px,2vw,24px)', top: '50%', transform: 'translateY(-50%)',
            width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(163,98,60,0.5)',
            background: 'rgba(10,8,6,0.85)', color: '#F0E8D8', fontSize: '22px', cursor: canLeft ? 'pointer' : 'not-allowed',
            opacity: canLeft ? 1 : 0.3, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)', transition: 'opacity 0.2s, background 0.2s',
          }}
        >
          ←
        </button>
        <button
          aria-label="Próximo"
          onClick={() => scroll('right')}
          disabled={!canRight}
          style={{
            position: 'absolute', right: 'clamp(8px,2vw,24px)', top: '50%', transform: 'translateY(-50%)',
            width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(163,98,60,0.5)',
            background: 'rgba(10,8,6,0.85)', color: '#F0E8D8', fontSize: '22px', cursor: canRight ? 'pointer' : 'not-allowed',
            opacity: canRight ? 1 : 0.3, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)', transition: 'opacity 0.2s, background 0.2s',
          }}
        >
          →
        </button>

        <div
          ref={scrollRef}
          className="carousel-scroll"
          style={{
            display: 'flex', gap: '20px', overflowX: 'auto', scrollSnapType: 'x mandatory',
            padding: '12px clamp(20px,6vw,80px)', scrollPaddingLeft: 'clamp(20px,6vw,80px)',
          }}
        >
          {produtos.map((p, i) => (
            <motion.div
              key={i}
              data-card
              {...reveal(Math.min(i * 0.08, 0.3))}
              onClick={() => setSelected(i)}
              style={{
                flex: '0 0 clamp(260px, 32vw, 340px)', scrollSnapAlign: 'start',
                background: '#110E0B', cursor: 'pointer', position: 'relative', overflow: 'hidden',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1A1410')}
              onMouseLeave={e => (e.currentTarget.style.background = '#110E0B')}
            >
              <motion.div layoutId={`img-${i}`} style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                <Image src={p.img} alt={p.nome} fill sizes="340px" style={{ objectFit: 'cover' }} />
              </motion.div>
              <div style={{ padding: 'clamp(20px,3vw,28px)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A3623C', marginBottom: '12px' }}>{p.tag}</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F0E8D8', marginBottom: '16px' }}>{p.nome}</div>
                <p style={{ fontSize: '14px', color: '#B8AD9E', lineHeight: 1.7, marginBottom: '20px', minHeight: '96px' }}>{p.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'Oswald, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#A3623C', padding: '10px 18px', border: '1px solid rgba(163,98,60,0.5)', borderRadius: '999px',
                }}>
                  Saiba mais
                  <span style={{ fontSize: '14px' }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
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

      <AnimatePresence>
        {produto && selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(5,4,3,0.78)', backdropFilter: 'blur(10px)',
              zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 'clamp(16px,3vw,40px)',
            }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative', width: '100%', maxWidth: '980px', maxHeight: '90vh', overflowY: 'auto',
                background: '#110E0B', border: '1px solid rgba(163,98,60,0.25)',
                display: 'grid', gridTemplateColumns: '1fr', borderRadius: '4px',
              }}
              className="modal-grid carousel-scroll"
            >
              <button
                aria-label="Fechar"
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: '16px', right: '16px', zIndex: 5,
                  width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(240,232,216,0.25)',
                  background: 'rgba(10,8,6,0.7)', color: '#F0E8D8', fontSize: '20px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)',
                }}
              >
                ×
              </button>

              <motion.div layoutId={`img-${selected}`} style={{ width: '100%', height: 'clamp(240px, 38vh, 420px)', position: 'relative', overflow: 'hidden' }}>
                <Image src={produto.img} alt={produto.nome} fill sizes="(max-width: 768px) 100vw, 480px" style={{ objectFit: 'cover' }} priority />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,8,6,0.6) 100%)' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                style={{ padding: 'clamp(24px,4vw,44px)' }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A3623C', marginBottom: '12px' }}>{produto.tag}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(26px,3.4vw,38px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#F0E8D8', marginBottom: '16px', lineHeight: 1.1 }}>
                  {produto.nome}
                </h3>
                <p style={{ fontSize: '15px', color: '#B8AD9E', lineHeight: 1.7, marginBottom: '28px' }}>{produto.desc}</p>

                <div style={{ display: 'grid', gap: '18px' }}>
                  <Campo label="Carne" valor={produto.detalhes.carne} />
                  <Campo label="Defumação" valor={produto.detalhes.defumacao} />
                  <Campo label="Porções sugeridas" valor={produto.detalhes.porcoes} />
                  <Campo label="Formas de preparação" valor={produto.detalhes.preparo} />
                  <Campo label="Indicação de acompanhamentos" valor={produto.detalhes.acompanhamentos} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 860px) {
          :global(.modal-grid) {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr) !important;
          }
          :global(.modal-grid) > div:first-of-type {
            height: auto !important;
            min-height: 100%;
          }
        }
      `}</style>
    </section>
  )
}

function Campo({ label, valor }: { label: string; valor: string }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(163,98,60,0.6)', paddingLeft: '16px' }}>
      <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A3623C', marginBottom: '6px' }}>{label}</div>
      <div style={{ fontSize: '14px', color: '#F0E8D8', lineHeight: 1.65 }}>{valor}</div>
    </div>
  )
}

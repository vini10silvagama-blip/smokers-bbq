'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#solucao', label: 'Solução' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#parceria', label: 'Parceria B2B' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[900] transition-all duration-300"
      style={{
        padding: '0 20px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,8,6,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(163,98,60,0.2)' : '1px solid transparent',
      }}
    >
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <img src="/logo marrom transparente - smokers bbq.png" alt="Smokers BBQ" style={{ height: '68px', width: 'auto', display: 'block' }} />
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8AD9E', textDecoration: 'none' }}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contato" className="hidden md:inline-block" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', padding: '10px 22px', textDecoration: 'none', clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)' }}>Degustação</a>

      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span style={{ display: 'block', width: '24px', height: '2px', background: open ? '#A3623C' : '#F0E8D8', transition: 'all 0.3s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#F0E8D8', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: open ? '#A3623C' : '#F0E8D8', transition: 'all 0.3s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden absolute top-[72px] left-0 right-0 flex flex-col py-4"
          style={{ background: 'rgba(10,8,6,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(163,98,60,0.2)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8AD9E', textDecoration: 'none', padding: '14px 24px', borderBottom: '1px solid rgba(240,232,216,0.05)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0A0806', background: '#A3623C', padding: '14px 24px', textDecoration: 'none', margin: '12px 24px 4px', clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)', textAlign: 'center' }}
          >
            Degustação
          </a>
        </div>
      )}
    </nav>
  )
}

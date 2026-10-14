import { useEffect, useState } from 'react'
import { Logo } from './Marca'

const links = [
  ['#servicios', 'Servicios'],
  ['#proceso', 'Cómo trabajamos'],
  ['#nosotros', 'Nosotros'],
  ['#preguntas', 'Preguntas'],
]

export default function Nav() {
  const [sobreHero, setSobreHero] = useState(true)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const f = () => setSobreHero(window.scrollY < window.innerHeight * 0.8)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  const claro = sobreHero && !abierto

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        claro ? 'bg-transparent' : 'border-b border-plano/10 bg-niebla/90 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#inicio" aria-label="IDEA Santander, inicio"><Logo claro={claro} /></a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className={`${claro ? 'text-hielo/80 hover:text-white' : 'text-gris hover:text-plano'}`}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#cotizar" className="rounded-full bg-cobalto px-4 py-2 font-medium text-white hover:bg-plano-2">
              Cotizar proyecto
            </a>
          </li>
        </ul>

        <button
          onClick={() => setAbierto(!abierto)}
          className={`font-mono text-xs md:hidden ${claro ? 'text-hielo' : 'text-plano'}`}
          aria-expanded={abierto}
        >
          {abierto ? 'cerrar ✕' : 'menú ☰'}
        </button>
      </nav>

      {abierto && (
        <ul className="space-y-1 border-t border-plano/10 bg-niebla px-4 pb-5 pt-2 md:hidden">
          {[...links, ['#cotizar', 'Cotizar proyecto']].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setAbierto(false)} className="block py-2.5 font-display text-2xl font-semibold text-plano">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

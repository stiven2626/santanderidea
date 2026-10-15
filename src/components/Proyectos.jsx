import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { proyectos } from '../data'
import { Titulo } from './Marca'

function Proyecto({ p, n }) {
  const [foto, setFoto] = useState(0)
  const [src, alt] = p.imagenes[foto]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="grid gap-8 overflow-hidden rounded-2xl border border-plano/15 bg-white p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10"
    >
      {/* galería */}
      <div>
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-plano/10 bg-hielo"
        >
          {/* barra de navegador */}
          <div className="flex items-center gap-1.5 border-b border-plano/10 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-plano/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-plano/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-plano/15" />
            <span className="ml-2 truncate font-mono text-[11px] text-gris">
              {p.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={src}
                src={src}
                alt={alt}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </AnimatePresence>
          </div>
        </a>

        {p.imagenes.length > 1 && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {p.imagenes.map(([s, a], i) => (
              <button
                key={s}
                onClick={() => setFoto(i)}
                aria-label={`Ver: ${a}`}
                aria-pressed={foto === i}
                className={`aspect-[16/9] overflow-hidden rounded-lg border-2 transition ${
                  foto === i ? 'border-cobalto' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={s} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* caso */}
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
          <span className="rounded bg-cobalto px-1.5 py-0.5 text-white">P-{String(n).padStart(2, '0')}</span>
          <span className="text-cobalto">{p.tipo}</span>
          <span className="text-gris">· {p.sector}</span>
        </div>
        <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-plano">{p.titulo}</h3>
        <p className="mt-1 text-sm text-gris">{p.lugar}</p>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-gris">La necesidad</p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-tinta">{p.reto}</p>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-gris">Lo que construimos</p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-tinta">{p.solucion}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-gris">
          {p.funciones.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-cobalto">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-cobalto px-5 py-2.5 text-sm font-medium text-white hover:bg-plano-2 lg:mt-auto"
        >
          Ver sitio en vivo ↗
        </a>
      </div>
    </motion.article>
  )
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <Titulo etiqueta="Proyectos">
        Obras entregadas,<br className="hidden sm:block" /> funcionando hoy.
      </Titulo>

      <div className="mt-12 space-y-8">
        {proyectos.map((p, i) => (
          <Proyecto key={p.titulo} p={p} n={i + 1} />
        ))}
      </div>
    </section>
  )
}

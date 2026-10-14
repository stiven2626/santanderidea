import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { servicios, categorias } from '../data'
import { Icono, Titulo } from './Marca'

export default function Servicios() {
  const [cat, setCat] = useState('Todos')
  const lista = cat === 'Todos' ? servicios : servicios.filter((s) => s.cat === cat)

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <Titulo etiqueta="Servicios">
          Si se puede programar,<br className="hidden sm:block" /> lo construimos.
        </Titulo>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar servicios">
          {categorias.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                cat === c ? 'bg-plano text-white' : 'border border-plano/20 text-plano hover:border-plano'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-plano/15 bg-plano/15 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {lista.map((s) => {
            const n = servicios.indexOf(s) + 1
            return (
              <motion.article
                layout
                key={s.titulo}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-white p-7 transition-colors hover:bg-hielo"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-hielo text-cobalto transition-colors group-hover:bg-cobalto group-hover:text-white">
                    <Icono nombre={s.icono} />
                  </span>
                  <span className="font-mono text-[11px] text-gris">
                    {s.nuevo && <span className="mr-2 rounded bg-cobalto px-1.5 py-0.5 text-white">nuevo</span>}
                    S-{String(n).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-plano">{s.titulo}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gris">{s.texto}</p>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      <p className="mt-6 text-sm text-gris">
        ¿No ves lo que necesitas?{' '}
        <a href="#cotizar" className="font-medium text-cobalto underline underline-offset-4">Pregúntanos igual</a>
        {' '}— lo más probable es que sí se pueda.
      </p>
    </section>
  )
}

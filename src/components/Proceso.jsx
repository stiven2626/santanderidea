import { motion } from 'motion/react'
import { proceso, compromisos } from '../data'
import { Titulo } from './Marca'

export default function Proceso() {
  return (
    <section id="proceso" className="papel-plano text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Titulo etiqueta="Cómo trabajamos" claro>
          Como una obra,<br className="hidden sm:block" /> pero sin sorpresas.
        </Titulo>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* línea que une las etapas */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-0 right-0 top-5 hidden h-px origin-left border-t border-dashed border-hielo/50 md:block"
          />
          {proceso.map((p, i) => (
            <motion.li
              key={p.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-hielo/60 bg-plano font-mono text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-3xl font-extrabold">{p.nombre}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-cielo">{p.duracion}</p>
              <p className="mt-3 leading-relaxed text-hielo/75">{p.texto}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-hielo/25 bg-hielo/25 sm:grid-cols-2 lg:grid-cols-4">
          {compromisos.map(([t, d]) => (
            <div key={t} className="bg-plano p-6">
              <p className="font-display text-xl font-semibold">✓ {t}</p>
              <p className="mt-1.5 text-sm text-hielo/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

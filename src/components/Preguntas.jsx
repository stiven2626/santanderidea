import { preguntas } from '../data'
import { Titulo } from './Marca'

export default function Preguntas() {
  return (
    <section id="preguntas" className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr]">
      <Titulo etiqueta="Preguntas">Lo que todos preguntan.</Titulo>
      <div className="divide-y divide-plano/10 border-y border-plano/10">
        {preguntas.map(([p, r], i) => (
          <details key={p} className="group py-5" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-semibold text-plano">
              {p}
              <span className="mt-1 font-mono text-base text-cobalto transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-xl leading-relaxed text-gris">{r}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

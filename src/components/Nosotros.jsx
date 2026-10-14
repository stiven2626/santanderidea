import { mision, vision, valores, sectores, fundador, marca } from '../data'
import { Titulo, Esquinas } from './Marca'

export default function Nosotros() {
  return (
    <section id="nosotros" className="papel-claro">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Titulo etiqueta="Nosotros">
          Tecnología hecha en Santander,<br className="hidden sm:block" /> pensada para tu negocio.
        </Titulo>

        {/* Misión y visión */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[['Misión', mision], ['Visión', vision]].map(([t, txt], i) => (
            <article
              key={t}
              className={`relative rounded-2xl p-8 sm:p-10 ${i === 0 ? 'bg-plano text-white' : 'border border-plano/15 bg-white'}`}
            >
              <p className={`font-mono text-xs uppercase tracking-[0.2em] ${i === 0 ? 'text-cielo' : 'text-cobalto'}`}>
                {t}
              </p>
              <p className={`mt-5 font-display text-2xl leading-snug sm:text-[1.7rem] ${i === 0 ? '' : 'text-plano'}`}>
                {txt}
              </p>
            </article>
          ))}
        </div>

        {/* Valores */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-plano/15 bg-white p-6">
              <p className="font-mono text-[11px] text-cobalto">V-{i + 1}</p>
              <p className="mt-2 font-display text-xl font-semibold text-plano">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-gris">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-[1fr_1.1fr]">
          {/* Sectores */}
          <div>
            <h3 className="font-display text-3xl font-extrabold text-plano">Experiencia en</h3>
            <ul className="mt-6 divide-y divide-plano/10 border-y border-plano/10">
              {sectores.map(([s, d]) => (
                <li key={s} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="w-44 shrink-0 font-semibold text-plano">{s}</span>
                  <span className="text-sm text-gris">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fundador */}
          <div className="relative self-start rounded-2xl bg-white p-8 text-plano shadow-[0_1px_0_rgb(11_42_107/0.08),0_20px_40px_-20px_rgb(11_42_107/0.25)]">
            <div className="flex items-center gap-5">
              <div className="relative grid h-20 w-20 shrink-0 place-items-center bg-hielo text-plano">
                <Esquinas size={10} />
                {/* Reemplaza por tu foto: <img src="/yeison.jpg" className="h-full w-full object-cover" /> */}
                <span className="font-display text-2xl font-extrabold">YG</span>
              </div>
              <div>
                <p className="font-display text-xl font-semibold leading-tight">{fundador.nombre}</p>
                <p className="mt-1 font-mono text-[11px] text-cobalto">{fundador.cargo}</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-gris">{fundador.bio}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href={fundador.portafolio} target="_blank" rel="noreferrer" className="rounded-full border border-plano/20 px-4 py-2 hover:border-plano">
                Portafolio ↗
              </a>
              <a href={marca.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-plano/20 px-4 py-2 hover:border-plano">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

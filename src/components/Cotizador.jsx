import { useState } from 'react'
import { servicios, marca } from '../data'
import { Titulo } from './Marca'

const tamanos = ['Emprendimiento', 'Pequeña empresa', 'Mediana empresa', 'Entidad pública']
const plazos = ['Lo antes posible', 'En 1 a 3 meses', 'Solo estoy explorando']

function Chip({ activo, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`rounded-full px-4 py-2 text-sm transition-colors ${
        activo ? 'bg-white text-plano' : 'border border-hielo/30 text-hielo/85 hover:border-hielo'
      }`}
    >
      {children}
    </button>
  )
}

export default function Cotizador() {
  const [elegidos, setElegidos] = useState([])
  const [tamano, setTamano] = useState('')
  const [plazo, setPlazo] = useState('')
  const [idea, setIdea] = useState('')

  const alternar = (t) =>
    setElegidos((e) => (e.includes(t) ? e.filter((x) => x !== t) : [...e, t]))

  const mensaje = [
    'Hola IDEA Santander 👋',
    elegidos.length ? `Me interesa: ${elegidos.join(', ')}.` : 'Quiero contarles una idea.',
    tamano && `Somos: ${tamano}.`,
    plazo && `Plazo: ${plazo}.`,
    idea.trim() && `\nLa idea: ${idea.trim()}`,
  ].filter(Boolean).join(' ')

  const urlWhatsapp = `https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(mensaje)}`
  const urlCorreo = `mailto:${marca.email}?subject=${encodeURIComponent('Nuevo proyecto')}&body=${encodeURIComponent(mensaje)}`

  return (
    <section id="cotizar" className="bg-noche text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Titulo etiqueta="Cotizar" claro>Dibújanos tu servilleta.</Titulo>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-hielo/75">
            Marca lo que te interesa y escribe tu idea como te salga. Te llega listo a nuestro WhatsApp
            y respondemos en menos de 24 horas.
          </p>
          <p className="mt-10 font-mono text-xs text-hielo/50">o escríbenos directo</p>
          <a href={`mailto:${marca.email}`} className="mt-1 inline-block font-display text-2xl text-cielo hover:text-white">
            {marca.email}
          </a>
        </div>

        <form
          className="rounded-2xl border border-hielo/15 bg-plano/40 p-6 sm:p-8"
          onSubmit={(e) => { e.preventDefault(); window.open(urlWhatsapp, '_blank') }}
        >
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-wider text-cielo">1 · ¿Qué necesitas?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {servicios.map((s) => (
                <Chip key={s.titulo} activo={elegidos.includes(s.titulo)} onClick={() => alternar(s.titulo)}>
                  {s.titulo}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="font-mono text-xs uppercase tracking-wider text-cielo">2 · ¿Quiénes son?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {tamanos.map((t) => (
                <Chip key={t} activo={tamano === t} onClick={() => setTamano(tamano === t ? '' : t)}>{t}</Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="font-mono text-xs uppercase tracking-wider text-cielo">3 · ¿Para cuándo?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {plazos.map((t) => (
                <Chip key={t} activo={plazo === t} onClick={() => setPlazo(plazo === t ? '' : t)}>{t}</Chip>
              ))}
            </div>
          </fieldset>

          <label className="mt-7 block">
            <span className="font-mono text-xs uppercase tracking-wider text-cielo">4 · Tu idea (opcional)</span>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              rows={3}
              placeholder="Ej.: llevamos los pedidos en un cuaderno y se nos pierden…"
              className="mt-3 w-full resize-none rounded-xl border border-hielo/20 bg-noche/60 p-4 text-[15px] text-white placeholder:text-hielo/35 focus:border-cielo focus:outline-none"
            />
          </label>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="rounded-full bg-cobalto px-6 py-3 font-medium hover:bg-white hover:text-plano">
              Enviar por WhatsApp →
            </button>
            <a href={urlCorreo} className="rounded-full border border-hielo/30 px-6 py-3 font-medium hover:border-white">
              Enviar por correo
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

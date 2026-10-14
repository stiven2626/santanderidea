import { motion } from 'motion/react'
import { marca } from '../data'

const dibujar = (d = 0, dur = 1.2) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { pathLength: { duration: dur, delay: d, ease: 'easeInOut' }, opacity: { duration: 0.01, delay: d } },
})

function Plano() {
  const L = 'rgb(232 240 255)'
  return (
    <svg viewBox="0 0 460 340" className="w-full" role="img" aria-label="Plano técnico de una aplicación web con sus partes anotadas">
      <g stroke={L} fill="none" strokeWidth="1.4" strokeLinecap="round">
        {/* ventana del navegador */}
        <motion.rect x="40" y="40" width="300" height="210" rx="6" {...dibujar(0.2)} />
        <motion.path d="M40 64h300" {...dibujar(0.6, 0.5)} />
        <motion.circle cx="54" cy="52" r="3" {...dibujar(0.7, 0.3)} />
        <motion.circle cx="66" cy="52" r="3" {...dibujar(0.75, 0.3)} />
        <motion.circle cx="78" cy="52" r="3" {...dibujar(0.8, 0.3)} />
        {/* contenido */}
        <motion.rect x="60" y="82" width="120" height="14" rx="2" {...dibujar(0.9, 0.5)} />
        <motion.path d="M60 106h160M60 116h130" strokeOpacity="0.6" {...dibujar(1, 0.5)} />
        <motion.rect x="60" y="134" width="80" height="22" rx="11" stroke="#6fa8ff" {...dibujar(1.1, 0.5)} />
        {/* gráfica */}
        <motion.rect x="200" y="134" width="120" height="96" rx="3" {...dibujar(1.2, 0.6)} />
        <motion.path d="M212 214l22-24 20 12 22-30 20 10" stroke="#6fa8ff" strokeWidth="2" {...dibujar(1.6, 0.8)} />
        {/* tarjetas */}
        <motion.rect x="60" y="172" width="58" height="58" rx="3" {...dibujar(1.3, 0.5)} />
        <motion.rect x="126" y="172" width="58" height="58" rx="3" {...dibujar(1.35, 0.5)} />

        {/* cotas */}
        <g strokeOpacity="0.55" strokeWidth="1">
          <motion.path d="M40 272h300M40 266v12M340 266v12" {...dibujar(2, 0.6)} />
          <motion.path d="M362 40v210M356 40h12M356 250h12" {...dibujar(2.1, 0.6)} />
          {/* líneas de anotación */}
          <motion.path d="M140 145 L150 300 H190" {...dibujar(2.3, 0.5)} />
          <motion.path d="M296 182 L380 120" {...dibujar(2.4, 0.5)} />
          <motion.path d="M120 89 L90 20 H40" {...dibujar(2.5, 0.5)} />
        </g>
      </g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        fill={L}
        fontFamily="IBM Plex Mono"
        fontSize="9.5"
      >
        <text x="190" y="290" textAnchor="middle" fillOpacity="0.6">1280 px</text>
        <text x="374" y="148" fillOpacity="0.6" transform="rotate(90 374 148)">alto variable</text>
        <text x="194" y="303">A · botón de pago</text>
        <text x="352" y="114">B · ventas en vivo</text>
        <text x="40" y="15">C · tu marca</text>
      </motion.g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="papel-plano relative overflow-hidden text-white">
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-hielo/25 px-3 py-1 font-mono text-[11px] text-hielo/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cielo" />
            Software a la medida · {marca.ciudad}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-6 font-display text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
          >
            De la servilleta
            <br />
            <span className="text-cielo">al software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-hielo/80"
          >
            Toda empresa empezó como una idea dibujada en cualquier papel. Nosotros hacemos el plano
            y construimos la herramienta que tu negocio necesita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#cotizar" className="rounded-full bg-white px-6 py-3 font-medium text-plano hover:bg-hielo">
              Cuéntanos tu idea →
            </a>
            <a href="#servicios" className="rounded-full border border-hielo/40 px-6 py-3 font-medium hover:border-white">
              Ver servicios
            </a>
          </motion.div>

          {/* la sigla */}
          <div className="mt-14 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-hielo/60">
            {marca.sigla.map((p) => (
              <span key={p}>
                <span className="font-semibold text-white">{p[0]}</span>
                {p.slice(1)}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <Plano />
          {/* cajetín, como en los planos de ingeniería */}
          <div className="ml-auto mt-2 grid w-64 grid-cols-2 border border-hielo/40 font-mono text-[10px] text-hielo/70">
            <span className="border-b border-r border-hielo/40 px-2 py-1">PROYECTO</span>
            <span className="border-b border-hielo/40 px-2 py-1 text-white">el tuyo</span>
            <span className="border-r border-hielo/40 px-2 py-1">PLANO N.º</span>
            <span className="px-2 py-1 text-white">001</span>
          </div>
        </div>
      </div>
    </section>
  )
}

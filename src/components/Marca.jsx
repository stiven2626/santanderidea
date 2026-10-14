// Logo oficial: el punto de la "i" es el mapa de Santander.
// claro = true → versión blanca, para fondos azules.
export function Logo({ claro = false, className = 'h-11' }) {
  return (
    <img
      src={claro ? '/marca/logo-oscuro.svg' : '/marca/logo-claro.svg'}
      alt="IDEA Santander"
      className={`w-auto ${className}`}
    />
  )
}

export function Esquinas({ size = 7 }) {
  const s = { width: size, height: size }
  const base = 'absolute border-current'
  return (
    <>
      <span style={s} className={`${base} left-0 top-0 border-l-2 border-t-2`} />
      <span style={s} className={`${base} right-0 top-0 border-r-2 border-t-2`} />
      <span style={s} className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span style={s} className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  )
}

// Íconos de trazo, dibujados a mano para no depender de librerías.
const trazos = {
  web: 'M3 5h18v14H3zM3 9h18M6 7h.01M8.5 7h.01',
  app: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 16.5h7M16.5 13v7',
  movil: 'M7 2h10v20H7zM11 18h2',
  tienda: 'M4 7h16l-1.5 11h-13zM9 7a3 3 0 0 1 6 0',
  engranaje: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1',
  chat: 'M4 5h16v11H9l-5 4zM8 10h.01M12 10h.01M16 10h.01',
  api: 'M8 6 3 12l5 6M16 6l5 6-5 6M13.5 4l-3 16',
  factura: 'M6 2h12v20l-3-2-3 2-3-2-3 2zM9 7h6M9 11h6M9 15h3',
  tablero: 'M3 3h18v18H3zM7 16v-4M12 16V8M17 16v-6',
  datos: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  nube: 'M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z',
  soporte: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z',
}

export function Icono({ nombre, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={trazos[nombre]} />
    </svg>
  )
}

export function Titulo({ etiqueta, children, claro = false, className = '' }) {
  return (
    <div className={className}>
      <p className={`font-mono text-xs uppercase tracking-[0.2em] ${claro ? 'text-cielo' : 'text-cobalto'}`}>
        — {etiqueta}
      </p>
      <h2 className={`mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl ${claro ? 'text-white' : 'text-plano'}`}>
        {children}
      </h2>
    </div>
  )
}

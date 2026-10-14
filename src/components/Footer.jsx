import { marca } from '../data'
import { Logo } from './Marca'

export default function Footer() {
  const wa = `https://wa.me/${marca.whatsapp}`
  return (
    <footer className="papel-plano text-hielo/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <Logo claro className="h-20" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {marca.sigla.join(', ').replace(/, ([^,]*)$/, ' y $1')}. Desde {marca.ciudad} para toda Colombia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href={wa} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            <a href="#proceso" className="hover:text-white">Cómo trabajamos</a>
            <a href={`mailto:${marca.email}`} className="hover:text-white">Correo</a>
            <a href="#nosotros" className="hover:text-white">Nosotros</a>
            <a href={marca.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-hielo/15 pt-6 font-mono text-[11px] text-hielo/50">
          <span>© {new Date().getFullYear()} IDEA Santander</span>
          <span>{marca.dominio}</span>
        </div>
      </div>

      {/* botón flotante de WhatsApp */}
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-cobalto text-white shadow-lg shadow-plano/40 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" />
        </svg>
      </a>
    </footer>
  )
}

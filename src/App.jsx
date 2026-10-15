import Nav from './components/Nav'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Proyectos from './components/Proyectos'
import Proceso from './components/Proceso'
import Nosotros from './components/Nosotros'
import Cotizador from './components/Cotizador'
import Preguntas from './components/Preguntas'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Proyectos />
        <Proceso />
        <Nosotros />
        <Cotizador />
        <Preguntas />
      </main>
      <Footer />
    </>
  )
}

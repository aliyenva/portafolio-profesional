import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import WhatsAppChat from './components/WhatsAppChat.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Gallery from './sections/Gallery.jsx'
import Services from './sections/Services.jsx'
import Contact from './sections/Contact.jsx'
import { useReveal } from './hooks/useReveal.js'
import { useLanguage } from './context/LanguageContext.jsx'

export default function App() {
  const { lang } = useLanguage()
  // Activa animaciones de aparición al hacer scroll.
  // Depende de lang para re-observar cuando cambia el contenido traducido.
  useReveal(lang)

  return (
    <>
      <Header />
      <main>
        {/* 5 secciones semánticas (sin contar header ni footer) */}
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Elementos flotantes */}
      <ScrollTop />
      <WhatsAppChat />
    </>
  )
}

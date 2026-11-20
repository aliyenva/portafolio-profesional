import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import WhatsAppChat from './components/WhatsAppChat.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Gallery from './sections/Gallery.jsx'
import Timeline from './sections/Timeline.jsx'
import Contact from './sections/Contact.jsx'
import { useReveal } from './hooks/useReveal.js'
import { useLanguage } from './context/LanguageContext.jsx'

export default function App() {
  const { lang } = useLanguage()
  useReveal(lang)

  return (
    <>
      <Header />
      <main>
        {/* Exactamente 5 <section>: inicio, habilidades, projects, trayectoria, contacto */}
        <Hero />
        <Skills />
        <Gallery />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <WhatsAppChat />
    </>
  )
}

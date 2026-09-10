import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App
 * Top-level layout: assembles every section in order and wires up the
 * page-level chrome (loader, scroll progress bar, sticky navbar,
 * back-to-top button).
 */
export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

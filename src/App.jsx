import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.25),transparent_60%)]" />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Footer />
      </main>
    </div>
  )
}

export default App

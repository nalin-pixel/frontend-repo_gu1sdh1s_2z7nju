import { useState, useEffect } from 'react'
import { Menu, X, Scissors, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white font-semibold">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center shadow-lg shadow-rose-500/30">
            <Scissors className="w-5 h-5" />
          </div>
          <span className="tracking-wide">Barber & Co</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-200 hover:text-white transition">Services</a>
          <a href="#gallery" className="text-slate-200 hover:text-white transition">Galerie</a>
          <a href="#booking" className="text-slate-200 hover:text-white transition">Réserver</a>
          <a href="#contact" className="text-slate-200 hover:text-white transition inline-flex items-center gap-2"><Phone className="w-4 h-4" /> 06 12 34 56 78</a>
          <a href="#contact" className="text-slate-200 hover:text-white transition inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Paris</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#services" className="text-slate-200">Services</a>
            <a onClick={() => setOpen(false)} href="#gallery" className="text-slate-200">Galerie</a>
            <a onClick={() => setOpen(false)} href="#booking" className="text-slate-200">Réserver</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-slate-200">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

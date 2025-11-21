export default function Footer(){
  return (
    <footer id="contact" className="py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300">
        <p>© {new Date().getFullYear()} Barber & Co — Tous droits réservés</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">TikTok</a>
        </div>
      </div>
    </footer>
  )
}

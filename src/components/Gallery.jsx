import { motion, useScroll, useTransform } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511948374796-83f6be15f2fc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const { scrollY } = useScroll()
  const translateX = useTransform(scrollY, [0, 800, 1600], [0, -120, -240])

  return (
    <section id="gallery" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Galerie</h2>
            <p className="text-slate-300 mt-2">Quelques réalisations récentes</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm">
          <motion.div style={{ x: translateX }} className="flex gap-4 p-4">
            {images.map((src, i) => (
              <div key={i} className="relative min-w-[280px] md:min-w-[420px] aspect-[4/3] overflow-hidden rounded-xl">
                <img src={src} alt="gallery" className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

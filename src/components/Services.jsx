import { motion } from 'framer-motion'
import { Scissors, Beard, SprayCan, Sparkles } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Coupe Classique', desc: 'Dégradé, coiffage et finition', price: '25€' },
  { icon: Beard, title: 'Taille de Barbe', desc: 'Rasage à l’ancienne, contours', price: '18€' },
  { icon: SprayCan, title: 'Soin & Coiffage', desc: 'Soins capillaires et styling', price: '12€' },
  { icon: Sparkles, title: 'Package Premium', desc: 'Coupe + Barbe + Soin', price: '45€' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Nos services</h2>
        <p className="text-slate-300 mt-2">Des prestations soignées, pensées pour votre style.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map(({ icon: Icon, title, desc, price }, i) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{delay:i*0.05}} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm hover:bg-slate-900/60 hover:shadow-xl hover:shadow-rose-500/10 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 text-white flex items-center justify-center shadow-md mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 mt-1 text-sm">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-white font-semibold">
                <span>{price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

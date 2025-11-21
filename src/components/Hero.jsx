import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ rotate, scale }} className="absolute -right-32 -top-16 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-rose-500/40 to-amber-400/40 blur-3xl" />
        <motion.div style={{ y }} className="absolute -left-32 top-1/3 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Barber shop moderne, style impeccable
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-5 text-lg text-slate-200">
            Coupe, taille de barbe et soins premium. Une expérience haut de gamme au coeur de la ville.
          </motion.p>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-8 flex items-center gap-4">
            <a href="#booking" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition">Réserver maintenant</a>
            <a href="#services" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Découvrir</a>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/dXG8t6JfXrS9wQzW/scene.splinecode" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

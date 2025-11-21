import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Coupe', date: '' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="booking" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Réserver</h2>
            <p className="text-slate-300 mt-2">Réservez votre créneau en quelques secondes.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
              {!sent ? (
                <form onSubmit={submit} className="grid grid-cols-1 gap-4">
                  <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Nom" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50" />
                  <input required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} placeholder="Téléphone" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50" />

                  <select value={form.service} onChange={(e)=>setForm({...form, service: e.target.value})} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-400/50">
                    <option>Coupe</option>
                    <option>Barbe</option>
                    <option>Coupe + Barbe</option>
                  </select>

                  <input type="datetime-local" required value={form.date} onChange={(e)=>setForm({...form, date: e.target.value})} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50" />

                  <button className="mt-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition">Valider</button>
                </form>
              ) : (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-white">
                  Merci! Nous confirmons votre demande au plus vite.
                </motion.div>
              )}
            </div>
          </div>

          <div className="relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-rose-500/20 to-amber-400/20">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2">
              {Array.from({length:9}).map((_, i)=> (
                <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

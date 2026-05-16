import { motion } from 'framer-motion';
import { Palette, Video, Megaphone, CheckCircle, MessageSquare, ArrowRight, Star } from 'lucide-react';

export default function ComboSection() {
  return (
    <section className="relative py-24 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#0C0C0C]">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Sales Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] self-start"
              >
                <Star className="w-3 h-3 fill-white" />
                Oferta Limitada
              </motion.div>
              
              <h2 className="text-white font-black uppercase tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(2.5rem, 6vw, 70px)' }}>
                Combo de<br /><span className="text-blue-500">Servicios</span>
              </h2>
              
              <p className="text-white/40 text-lg sm:text-xl font-light max-w-lg leading-relaxed">
                Potencia tu presencia digital con nuestro paquete estrella. Todo lo que necesitas para crecer, en un solo lugar.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: Palette, title: 'Diseño Gráfico', desc: 'Identidad visual impactante.' },
                { icon: Video, title: 'Edición de Video', desc: 'Contenido dinámico y profesional.' },
                { icon: Megaphone, title: 'Campaña Publicitaria', desc: 'Estrategias que generan resultados.' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <item.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase text-sm tracking-wide">{item.title}</h3>
                    <p className="text-white/30 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mt-2 flex items-center gap-2">
               <CheckCircle className="w-3 h-3" /> No incluye inversión publicitaria
            </p>
          </motion.div>

          {/* Right Column - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-12 sm:p-16 rounded-[60px] border border-blue-500/30 bg-white/[0.05] backdrop-blur-2xl overflow-hidden group">
              {/* Card Inner Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-10">
                <div className="flex flex-col gap-2">
                   <p className="text-white/30 text-xs font-black uppercase tracking-[0.3em]">Precio Mensual</p>
                   <div className="flex flex-col items-center">
                      <div className="flex items-baseline gap-2">
                         <span className="text-white font-black text-7xl sm:text-8xl tracking-tighter">1.000.000</span>
                         <span className="text-white/40 text-2xl font-bold uppercase">Gs</span>
                      </div>
                      <div className="relative mt-2">
                         <span className="text-red-500/50 text-xl sm:text-2xl font-bold line-through">Valor real: 2.000.000 Gs</span>
                      </div>
                   </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                  <a
                    href="https://wa.me/595985478760?text=Hola!%20Me%20interesa%20el%20combo%20de%20servicios%20digitales%20que%20ofrecen."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative bg-white text-black font-black uppercase tracking-widest text-xs px-12 py-6 rounded-2xl shadow-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">¡Contáctanos Ahora!</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>

                  <div className="grid grid-cols-1 gap-3 mt-2">
                     <a
                        href="https://wa.me/595985478760"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-4 rounded-xl border border-white/10 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
                     >
                        <MessageSquare className="w-3 h-3" /> +595 985 478 760
                     </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-[60px] animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MapPin, Navigation, Globe } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="relative mt-40 sm:mt-60 pt-32 pb-32 bg-[#0C0C0C] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 flex flex-col gap-12 text-center items-center">
        <div className="flex flex-col gap-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] self-center"
           >
             <MapPin className="w-3 h-3 text-blue-500" />
             Nuestra Ubicación
           </motion.div>
           
           <motion.h2
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-white font-black uppercase tracking-tight leading-tight"
             style={{ fontSize: 'clamp(1.5rem, 4vw, 45px)' }}
           >
             Visítanos en <span className="text-blue-500">Mundo Digital</span>
           </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full md:max-w-[1100px] aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5 group"
        >
          {/* Custom Overlay for better integration */}
          <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-[#0C0C0C] rounded-[40px]" />
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.306915376937!2d-57.02505!3d-26.893752999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUzJzM3LjUiUyA1N8KwMDEnMzAuMiJX!5e0!3m2!1ses-419!2spe!4v1778920088867!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) grayscale(0.5)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          ></iframe>

          {/* Interactive floating info card */}
          <div className="absolute bottom-10 left-10 z-20 hidden md:flex flex-col gap-4 p-6 rounded-3xl border border-white/10 bg-[#0C0C0C]/80 backdrop-blur-xl shadow-2xl">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                   <Navigation className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-left">
                   <p className="text-white font-black uppercase text-[10px] tracking-widest">Encuéntranos</p>
                   <p className="text-white/50 text-xs mt-0.5">San Ignacio, Misiones, Paraguay</p>
                </div>
             </div>
             <a
                href="https://maps.app.goo.gl/YourMapLink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all"
             >
                <Globe className="w-3.5 h-3.5" />
                Abrir en Google Maps
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

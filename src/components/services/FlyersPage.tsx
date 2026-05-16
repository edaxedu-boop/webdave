import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Target, Zap, Clock,
  Eye, Users, Palette, Sparkles, Megaphone, Briefcase, Mic2
} from 'lucide-react';

interface FlyersPageProps {
  onClose: () => void;
}

const categories = [
  {
    icon: Briefcase,
    title: 'Para Empresas',
    desc: 'Promociona tus productos, servicios y ofertas con diseños profesionales que impulsan tus ventas.'
  },
  {
    icon: Users,
    title: 'Para Políticos',
    desc: 'Comunica tus propuestas y conecta con la ciudadanía con flyers que generan confianza y apoyo.'
  },
  {
    icon: Sparkles,
    title: 'Servicios Profesionales',
    desc: 'Destaca tu experiencia y atrae más clientes con diseños claros, elegantes y persuasivos.'
  },
  {
    icon: Mic2,
    title: 'Eventos y Shows',
    desc: 'Promociona tus eventos, conciertos y shows con diseños llamativos que llenan el lugar.'
  }
];

const packs = [
  { name: '1 Flyer', price: '30.000', label: 'Individual' },
  { name: 'Pack 5 Flyers', price: '120.000', label: 'Popular', highlight: true },
  { name: 'Pack 10 Flyers', price: '270.000', label: 'Empresarial' },
  { name: 'Pack 25 Flyers', price: '500.000', label: 'Corporativo' }
];

const benefits = [
  { icon: Eye, text: 'Diseños que atraen miradas' },
  { icon: Target, text: 'Mensajes que conectan' },
  { icon: Zap, text: 'Más impacto y resultados' },
  { icon: Clock, text: 'Entrega rápida y calidad' },
  { icon: Palette, text: '100% Personalizado' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function FlyersPage({ onClose }: FlyersPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="fixed inset-0 z-[1000] bg-[#0C0C0C] overflow-y-auto"
    >
      {/* ── CLOSE BUTTON ── */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[1010] flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver
        <X className="w-3.5 h-3.5 ml-1" />
      </button>

      {/* ══════════════════════════════════════
          SECTION 1 — HERO & HOOK
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-32 text-center overflow-hidden">
        {/* GIF Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Nueva carpeta/flayer publicitarios.gif" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-transparent to-[#0C0C0C]" />
        </div>
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(59,130,246,0.05),transparent)]" />
        
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
        >
          <motion.div variants={fadeUp} className="px-5 py-2 rounded-full border border-white/15 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-[0.35em]">
            MUNDO DIGITAL · Advertising Design
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tus flyers no<br />
            <span className="text-red-500">llaman la atención?</span><br />
            Pierdes clientes.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo clientes todos los días por no destacar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Un buen flyer no es un gasto,<br />
              <span className="text-blue-500">es una inversión que vende.</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — MAIN TITLE & INTRO
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-20 flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <h2 className="text-white font-black uppercase leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 80px)' }}>
            Flyers<br /><span className="text-blue-500">Publicitarios</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Diseñamos flyers que informan, convencen y dejan tu marca en la mente de tu público.<br />
            Conectamos, convencemos y vendemos.
          </p>
        </motion.div>

        {/* Flyers Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl mx-auto"
        >
          {[
            '/flayers/flayer publicitarios 1.jpeg',
            '/flayers/flayer publicitarios 2.jpeg'
          ].map((img, i) => (
            <div key={i} className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] group">
              <img 
                src={img} 
                alt={`Flyer ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — CATEGORIES
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-20 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <c.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white font-bold uppercase text-sm tracking-wide">{c.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — PRICING PACKS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión en Diseño</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Packs de Flyers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col items-center gap-6 p-8 rounded-3xl border ${pack.highlight ? 'border-blue-500/40 bg-white/[0.06]' : 'border-white/10 bg-white/[0.02]'} overflow-hidden group`}
            >
              {pack.highlight && <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-bl-xl">Recomendado</div>}
              
              <div className="text-center">
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">{pack.label}</p>
                <h3 className="text-white font-black uppercase text-lg">{pack.name}</h3>
              </div>
              
              <div className="flex items-baseline gap-1">
                <span className="text-white font-black text-4xl">{pack.price}</span>
                <span className="text-white/40 text-xs font-bold uppercase">Gs</span>
              </div>

              <a
                href="https://wa.me/595985478760"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] text-center transition-all ${
                  pack.highlight ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-black'
                }`}
              >
                Solicitar
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — BENEFITS & FINAL CTA
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16 border-t border-white/5">
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {benefits.map((b) => (
            <div key={b.text} className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03]">
              <b.icon className="w-4 h-4 text-blue-500" />
              <span className="text-white/70 text-[10px] font-black uppercase tracking-widest">{b.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-8">
           <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-white font-black uppercase text-3xl sm:text-5xl leading-tight tracking-tight">
                Diseñamos el flyer que<br />tu marca necesita hoy
              </h2>
              <p className="text-white/50 font-light">
                No pierdas más clientes por un mal diseño. Haz la inversión que vende.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/595985478760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-12 py-6 rounded-full shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              <Megaphone className="w-4 h-4" />
              WhatsApp: +595 985 478760
            </a>
            <div className="text-white/30 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              & +595 983 338326
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/25 hover:text-white/60 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver a servicios
          </button>
        </div>
      </section>
    </motion.div>
  );
}

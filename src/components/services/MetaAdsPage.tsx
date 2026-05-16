import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Target, Megaphone, TrendingUp, PieChart, CheckCircle,
  Phone, Eye, Zap, ShieldCheck, BarChart3, Users
} from 'lucide-react';

interface MetaAdsPageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: Target,
    title: 'Segmentación Precisa',
    desc: 'Llegamos a las personas correctas que realmente están interesadas en tus productos o servicios.'
  },
  {
    icon: Megaphone,
    title: 'Mayor Visibilidad',
    desc: 'Aumenta el alcance de tu marca y genera más reconocimiento en menos tiempo.'
  },
  {
    icon: Zap,
    title: 'Más Resultados',
    desc: 'Convertimos clics en clientes potenciales y ventas con campañas optimizadas.'
  },
  {
    icon: PieChart,
    title: 'Medición Real',
    desc: 'Monitoreamos y analizamos cada campaña para mejorar continuamente tus resultados.'
  }
];

const benefits = [
  { icon: Users, text: 'Llegamos a tu público ideal' },
  { icon: Eye, text: 'Aumentamos tu visibilidad' },
  { icon: TrendingUp, text: 'Generamos más ventas' },
  { icon: BarChart3, text: 'Optimizamos tu inversión' },
  { icon: ShieldCheck, text: 'Resultados reales y medibles' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function MetaAdsPage({ onClose }: MetaAdsPageProps) {
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
            src="/Nueva carpeta/publicidad digital meta.gif" 
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
            MUNDO DIGITAL · Meta Ads
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tus anuncios<br />
            <span className="text-red-500">no llegan</span>,<br />
            ni venden?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo clientes mientras tu competencia crece cada día.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              No se trata de publicar más,<br />
              <span className="text-blue-500">se trata de hacerlo bien.</span>
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
            Publicidad Digital<br /><span className="text-blue-500">en Meta</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Conectamos tu marca con las personas correctas y transformamos visitas en clientes.<br />
            Anuncios estratégicos que generan resultados, más clientes y más ventas.
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
            '/flayers/publicidad digital meta 1.jpeg',
            '/flayers/publicidad digital meta 2.jpeg'
          ].map((img, i) => (
            <div key={i} className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] group">
              <img 
                src={img} 
                alt={`Meta Ads ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — FEATURES (Pillars)
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-20 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <f.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white font-bold uppercase text-sm tracking-wide">{i + 1}. {f.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — PRICING & INVESTMENT
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión Mensual</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Planes de Gestión</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Management Service */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-8 p-10 rounded-[32px] border border-red-500/30 bg-white/[0.05] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-20" />
            <div className="relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-red-500 text-white text-[10px] font-black uppercase tracking-widest">Servicio de Gestión</span>
              <h3 className="text-white font-black uppercase text-2xl mt-6">Publicidad Digital</h3>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-white font-black text-5xl tracking-tighter">1.000.000</span>
                <span className="text-white/40 text-sm font-bold uppercase">Gs / Mes</span>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  'Estrategia personalizada',
                  'Creación de anuncios atractivos',
                  'Segmentación inteligente',
                  'Optimización constante',
                  'Reportes y resultados reales'
                ].map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Meta Investment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-8 p-10 rounded-[32px] border border-blue-500/30 bg-white/[0.05] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-20" />
            <div className="relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest">Inversión en Meta</span>
              <h3 className="text-white font-black uppercase text-2xl mt-6">Presupuesto Ads</h3>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-white/40 text-xl font-bold uppercase mr-1">Desde</span>
                <span className="text-white font-black text-5xl tracking-tighter">500.000</span>
                <span className="text-white/40 text-sm font-bold uppercase">Gs / Mes</span>
              </div>
              <p className="mt-8 text-white/50 text-sm leading-relaxed font-light">
                Este monto va directamente a Meta (Facebook/Instagram) para tener buen alcance, llegar a más personas y lograr anuncios más efectivos.
              </p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-white/70 text-xs italic">"Más alcance, más visibilidad, más clientes. Más resultados para tu negocio."</p>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="https://wa.me/595985478760"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 contact-btn text-white font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all"
        >
          Empezar mi campaña
        </a>
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
                Transforma visitas<br />en clientes reales
              </h2>
              <p className="text-white/50 font-light">
                Contáctanos hoy y optimiza tu inversión publicitaria al máximo.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/595985478760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-10 py-5 rounded-full shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              <Phone className="w-4 h-4" />
              WhatsApp: +595 985 478760
            </a>
            <div className="text-white/30 font-bold uppercase tracking-widest text-[10px]">
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

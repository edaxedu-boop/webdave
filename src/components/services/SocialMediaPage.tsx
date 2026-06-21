import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Share2, Calendar, Heart, TrendingUp, CheckCircle,
  Phone, Eye, Users, MessageSquare, Smile
} from 'lucide-react';
import VimeoPlayer from '../VimeoPlayer';

interface SocialMediaPageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: Share2,
    title: 'Más Alcance',
    desc: 'Creamos contenido estratégico que aumenta tu visibilidad y te conecta con más personas.'
  },
  {
    icon: Heart,
    title: 'Más Interacción',
    desc: 'Fomentamos la conexión real con tu audiencia y convertimos seguidores en clientes.'
  },
  {
    icon: TrendingUp,
    title: 'Más Resultados',
    desc: 'Estrategias enfocadas en generar leads, mensajes y ventas de manera constante.'
  },
  {
    icon: Calendar,
    title: 'Publicaciones Consistentes',
    desc: 'Planificamos y publicamos contenido de valor con constancia y creatividad.'
  }
];

const checklist = [
  'Estrategia de contenido personalizada',
  'Calendario de publicaciones',
  'Redacción de copys que conectan',
  'Publicación constante en tus redes',
  'Monitoreo del alcance e interacciones',
  'Reportes mensuales de resultados'
];

const resultsChecklist = [
  'Atraigan la atención correcta',
  'Generen confianza y credibilidad',
  'Conviertan seguidores en clientes',
  'Refuercen tu marca todos los días',
  'Te den resultados medibles'
];

const benefits = [
  { icon: Eye, text: 'Más Visibilidad' },
  { icon: MessageSquare, text: 'Más Interacción' },
  { icon: Users, text: 'Más Clientes' },
  { icon: TrendingUp, text: 'Más Resultados' },
  { icon: Smile, text: 'Más Tranquilidad' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function SocialMediaPage({ onClose }: SocialMediaPageProps) {
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
            src="/Nueva carpeta/gestion de redes sociales.gif" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-transparent to-[#0C0C0C]" />
        </div>
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(236,72,153,0.05),transparent)]" />
        
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
        >
          <motion.div variants={fadeUp} className="px-5 py-2 rounded-full border border-white/15 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-[0.35em]">
            MUNDO DIGITAL · Social Media
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tu negocio tiene redes<br />
            <span className="text-red-500">pero no tiene tiempo</span>,<br />
            ni constancia?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo visibilidad, oportunidades y clientes todos los días.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              No basta con estar en redes,<br />
              <span className="text-blue-500">hay que saber gestionarlas.</span>
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
            Gestión de<br /><span className="text-blue-500">Redes Sociales</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Nos encargamos de tus redes para que tú te enfoques en lo que mejor sabes hacer: hacer crecer tu negocio.<br />
            Hacemos crecer tus redes, tu comunidad y tu negocio.
          </p>
          <div className="flex justify-center items-center gap-6 mt-4">
             <div className="flex flex-col items-center gap-1">
                <span className="text-white font-black text-xs uppercase tracking-widest">TikTok</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <span className="text-white font-black text-xs uppercase tracking-widest">Facebook</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <span className="text-white font-black text-xs uppercase tracking-widest">Instagram</span>
             </div>
          </div>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-sm mx-auto mt-12"
        >
          <div className="p-4 rounded-[28px] border border-white/10 bg-white/[0.02] group hover:border-blue-500/30 transition-all duration-500">
            <VimeoPlayer videoId="1203135728" title="6to Video - MD" />
          </div>
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
              <h3 className="text-white font-bold uppercase text-sm tracking-wide">{f.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — WHAT'S INCLUDED & PRICING
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Plan Integral</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Gestión Profesional</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Inclusion Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-10 rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500">¿Qué incluye?</h3>
            <div className="flex flex-col gap-4">
              {checklist.map(item => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center gap-8 p-10 rounded-[40px] border border-red-500/30 bg-white/[0.08] overflow-hidden group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center gap-6">
              <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest">Plan Mensual</span>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-black text-6xl tracking-tighter">500.000</span>
                <span className="text-white/40 text-lg font-bold uppercase">Gs / Mes</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 w-full">
                <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">Constancia, Estrategia<br />y Crecimiento Real</p>
              </div>
              <a
                href="https://wa.me/595994884319"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-black font-black uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all w-full"
              >
                Empezar Ahora
              </a>
            </div>
          </motion.div>

          {/* Goals Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-10 rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500 text-right">Nosotros hacemos que:</h3>
            <div className="flex flex-col gap-4">
              {resultsChecklist.map(item => (
                <div key={item} className="flex items-center justify-end gap-3 text-white/70 text-sm text-right">
                  <span>{item}</span>
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                </div>
              ))}
            </div>
          </motion.div>
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
                Deja tus redes<br />en manos de expertos
              </h2>
              <p className="text-white/50 font-light">
                Empieza a ver resultados de verdad y recupera tu tiempo hoy mismo.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/595994884319"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-10 py-5 rounded-full shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              <Phone className="w-4 h-4" />
              WhatsApp: +595 994 884 319
            </a>
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

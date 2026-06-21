import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Box, Layers, CheckCircle,
  Phone, Eye, MessageCircle, Zap, Clock, ShieldCheck, Palette, Laptop
} from 'lucide-react';
import VimeoPlayer from '../VimeoPlayer';

interface Logo3DPageProps {
  onClose: () => void;
}

const pricingPlans = [
  {
    title: 'Logo 3D desde 0',
    priceGs: '80.000',
    priceUsd: '12',
    features: ['Diseño 100% Original', 'Incluye 2 versiones a elegir'],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  },
  {
    title: 'Convertir tu Logo a 3D',
    priceGs: '120.000',
    priceUsd: '17',
    features: ['Convertimos tu logo actual', '3D Profesional', 'Incluye 2 versiones a elegir'],
    highlight: true,
    color: 'from-red-500/10 to-transparent'
  },
  {
    title: 'Logo 3D + Banner',
    priceGs: '160.000',
    priceUsd: '24',
    features: ['Logo 3D Profesional', 'Incluye Banner de Redes', 'Incluye 3 versiones a elegir'],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  }
];

const mainFeatures = [
  {
    icon: Palette,
    title: 'Diseño Personalizado',
    desc: 'Creamos logotipos 3D exclusivos que reflejan la esencia y los valores de tu marca.'
  },
  {
    icon: Box,
    title: 'Modelado en 3D',
    desc: 'Utilizamos técnicas avanzadas para dar profundidad, realismo y volumen a tu logo.'
  },
  {
    icon: Layers,
    title: 'Acabados Premium',
    desc: 'Aplicamos texturas, luces y sombras de alta calidad para un resultado profesional.'
  },
  {
    icon: Laptop,
    title: 'Versatilidad',
    desc: 'Entregamos tu logo en múltiples formatos listos para web, redes e impresión.'
  }
];

const benefits = [
  { icon: Eye, text: 'Diseños que atraen miradas' },
  { icon: MessageCircle, text: 'Mensajes que conectan' },
  { icon: Zap, text: 'Más impacto, más resultados' },
  { icon: Clock, text: 'Entrega rápida y con calidad' },
  { icon: ShieldCheck, text: '100% personalizado para tu marca' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Logo3DPage({ onClose }: Logo3DPageProps) {
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
            src="/Nueva carpeta/diseño logo.gif" 
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
            MUNDO DIGITAL · Branding 3D
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tu logo actual<br />
            <span className="text-red-500">no transmite</span><br />
            profesionalismo?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo credibilidad y clientes todos los días.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Un buen logo no es un gasto,<br />
              <span className="text-blue-500">es una inversión que posiciona.</span>
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
            Diseño de<br /><span className="text-blue-500">Logotipos 3D</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Diseñamos logos que transforman marcas y las hacen inolvidables.<br />
            Creamos logotipos en 3D únicos que transmiten profesionalismo y destacan tu marca.
          </p>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-sm mx-auto mt-12"
        >
          <div className="p-4 rounded-[28px] border border-white/10 bg-white/[0.02] group hover:border-blue-500/30 transition-all duration-500">
            <VimeoPlayer videoId="1203135770" title="2do Video - MD" />
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
              <h3 className="text-white font-bold uppercase text-sm tracking-wide">{i + 1}. {f.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — PRICING PLANS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Planes de Diseño</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col gap-6 p-8 rounded-3xl border ${plan.highlight ? 'border-blue-500/40 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03]'} overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <h3 className="text-white font-black uppercase text-lg sm:text-xl tracking-tight relative z-10">{plan.title}</h3>
              
              <div className="flex flex-col gap-1 relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-black text-4xl sm:text-5xl tracking-tighter">{plan.priceGs}</span>
                  <span className="text-white/40 text-sm font-bold uppercase">Gs.</span>
                </div>
                <div className="text-white/50 text-xs font-bold uppercase">
                  o {plan.priceUsd} USD
                </div>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                {plan.features.map(feat => (
                  <div key={feat} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/595994884319"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 text-center py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all relative z-10 ${
                  plan.highlight ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'border border-white/15 text-white/70 hover:bg-white hover:text-black'
                }`}
              >
                Solicitar Diseño
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — BENEFITS & FINAL CTA
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16 border-t border-white/5">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
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
                Impulsa tu marca<br />al siguiente nivel
              </h2>
              <p className="text-white/50 font-light">
                Contáctanos hoy y obtén un diseño que realmente te represente.
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

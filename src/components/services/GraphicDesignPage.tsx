import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Palette, Layout, BookOpen, Share2, CheckCircle,
  Phone, Eye, MessageCircle, Zap, Clock, ShieldCheck
} from 'lucide-react';
import VimeoPlayer from '../VimeoPlayer';

interface GraphicDesignPageProps {
  onClose: () => void;
}

const pricingPlans = [
  {
    title: 'Tarjetas de Presentación',
    priceGs: '50.000',
    priceUsd: '7',
    features: ['Diseños profesionales', 'Impresos o digitales'],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  },
  {
    title: 'Curriculum Vitae',
    priceGs: '50.000',
    priceUsd: '7',
    features: ['Destaca tu perfil', 'Diseño moderno y profesional'],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  },
  {
    title: 'Porta Credencial',
    priceGs: '50.000',
    priceUsd: '7',
    features: ['Personalizado para tu empresa', 'Profesional y resistente'],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  }
];

const socialPacks = [
  {
    title: 'Pack 12 Creativos / Mes',
    priceGs: '320.000',
    priceUsd: '47',
    features: ['Contenido que vende', 'Diseños originales semanales'],
    highlight: true,
    color: 'from-red-500/10 to-transparent'
  },
  {
    title: 'Pack 30 Creativos / Mes',
    priceGs: '700.000',
    priceUsd: '97',
    features: ['Cobertura total del mes', 'Máximo impacto visual'],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  }
];

const mainFeatures = [
  {
    icon: Palette,
    title: 'Identidad Visual',
    desc: 'Diseñamos logotipos, isotipos y manuales de marca que representan la esencia de tu negocio.'
  },
  {
    icon: Layout,
    title: 'Piezas Impactantes',
    desc: 'Flyers, banners, afiches y catálogos que comunican de forma clara y efectiva.'
  },
  {
    icon: BookOpen,
    title: 'Diseño Editorial',
    desc: 'Presentaciones, ebooks y revistas con un diseño profesional y atractivo.'
  },
  {
    icon: Share2,
    title: 'Contenido para Redes',
    desc: 'Publicaciones y ads pensados para destacar y generar interacción.'
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

export default function GraphicDesignPage({ onClose }: GraphicDesignPageProps) {
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
            src="/Nueva carpeta/diseño grafico.gif" 
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
            MUNDO DIGITAL · Diseño Gráfico
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tu imagen actual<br />
            <span className="text-red-500">no conecta</span>,<br />
            no impacta y no vende?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo oportunidades cada día.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Tu imagen habla antes que tú.<br />
              <span className="text-blue-500">Asegurémonos de que diga lo correcto.</span>
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
            Diseño Gráfico<br /><span className="text-blue-500">de Vanguardia</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Damos forma a tus ideas y las convertimos en diseños que comunican, conectan y venden.<br />
            Creamos diseños que fortalecen tu marca y generan impacto real.
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
            <VimeoPlayer videoId="1203135761" title="3er Video - MD" />
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
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Piezas Únicas</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Tarifas de Diseño</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden group"
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
                className="mt-8 text-center py-4 rounded-xl border border-white/15 text-white/70 hover:bg-white hover:text-black font-black uppercase tracking-widest text-[10px] transition-all relative z-10"
              >
                Solicitar
              </a>
            </motion.div>
          ))}
        </div>

        {/* Social Network Packs */}
        <div className="text-center mt-12">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Planes Mensuales</p>
          <h2 className="text-white font-black uppercase text-2xl sm:text-4xl tracking-tight">Creativos para Redes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {socialPacks.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col gap-6 p-8 rounded-3xl border ${plan.highlight ? 'border-red-500/40 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03]'} overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
              <h3 className="text-white font-black uppercase text-lg sm:text-xl tracking-tight relative z-10">{plan.title}</h3>
              <div className="flex flex-col gap-1 relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-black text-4xl sm:text-5xl tracking-tighter">{plan.priceGs}</span>
                  <span className="text-white/40 text-sm font-bold uppercase">Gs.</span>
                </div>
                <div className="text-white/50 text-xs font-bold uppercase">
                  o {plan.priceUsd} USD / Mes
                </div>
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                {plan.features.map(feat => (
                  <div key={feat} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/595994884319"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 text-center py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all relative z-10 ${
                  plan.highlight ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'border border-white/15 text-white/70 hover:bg-white hover:text-black'
                }`}
              >
                Suscribirse al Plan
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
                Haz que tu marca<br />diga lo correcto
              </h2>
              <p className="text-white/50 font-light">
                Contáctanos hoy y transforma tu presencia visual.
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

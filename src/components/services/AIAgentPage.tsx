import { motion } from 'framer-motion';
import {
  X, ArrowLeft, MessageSquare, Zap, Settings, CheckCircle,
  Phone, BarChart3, Users, Clock, ShieldCheck, Heart, Sparkles, MessageCircle
} from 'lucide-react';
import VimeoPlayer from '../VimeoPlayer';

interface AIAgentPageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: Clock,
    title: 'Atención 24/7',
    desc: 'Tu Agente IA responde a tus clientes en cualquier momento, sin importar la hora ni el día.'
  },
  {
    icon: Sparkles,
    title: 'Respuestas Inteligentes',
    desc: 'Comprende, aprende y da respuestas precisas adaptadas al contexto de cada cliente.'
  },
  {
    icon: MessageSquare,
    title: 'Conversaciones Naturales',
    desc: 'Interactúa como una persona real, genera confianza y mejora la experiencia de tus clientes.'
  },
  {
    icon: Settings,
    title: 'Integrado con tu Negocio',
    desc: 'Conecta con tu CRM, catálogo y pagos para ofrecer una atención completa y eficiente.'
  }
];

const inclusionList = [
  'Atención automática 24/7',
  'Respuestas inteligentes y personalizadas',
  'Conversaciones naturales (Humanoide)',
  'Integrado con WhatsApp Business',
  'Base de conocimientos personalizada',
  'Soporte y actualizaciones incluidas'
];

const whyChoose = [
  { icon: Users, text: 'No pierdes clientes por falta de respuesta' },
  { icon: Zap, text: 'Responde al instante y mejora la experiencia' },
  { icon: ShieldCheck, text: 'Aumenta la confianza de tus clientes' },
  { icon: Clock, text: 'Libera tiempo para enfocarte en crecer' },
  { icon: Sparkles, text: 'Funciona 365 días del año, sin parar' }
];

const benefits = [
  { icon: MessageSquare, text: 'Mejor atención al cliente' },
  { icon: BarChart3, text: 'Más ventas y conversiones' },
  { icon: Heart, text: 'Clientes más satisfechos' },
  { icon: Settings, text: 'Automatización inteligente' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function AIAgentPage({ onClose }: AIAgentPageProps) {
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
            src="/Nueva carpeta/automatizacion con agente ia.gif" 
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
            MUNDO DIGITAL · AI Agent
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Tu atención 24/7<br />
            <span className="text-blue-500">con Agente IA</span><br />
            <span className="text-[0.4em] tracking-[0.2em] opacity-40">No es un bot. Es tu propia IA.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Tu negocio nunca duerme, y ahora tu atención al cliente tampoco.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Es tu propia IA haciendo atención al cliente.<br />
              <span className="text-blue-500">Automatizamos, confiamos y vendemos.</span>
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
            Automatización con<br /><span className="text-blue-500">Agentes IA</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Tu agente de comunicación vía WhatsApp. No es un bot, es tu propia IA haciendo atención al cliente.<br />
            Más rapidez, más clientes, más ventas.
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
            <VimeoPlayer videoId="1203135706" title="11vo Video - MD" />
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
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión Única</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Tu Agente IA Propio</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl items-start">
          {/* Inclusion Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 p-10 rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500">¿Qué incluye?</h3>
            <div className="flex flex-col gap-5">
              {inclusionList.map(item => (
                <div key={item} className="flex items-center gap-4 text-white/70 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
               <MessageCircle className="w-5 h-5 text-green-500" />
               <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Integrado con WhatsApp</span>
            </div>
          </motion.div>

          {/* Pricing Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center gap-8 p-10 rounded-[40px] border border-blue-500/30 bg-white/[0.08] overflow-hidden group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center gap-6 w-full">
              <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">Pago Único</span>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-black text-6xl tracking-tighter">2.000.000</span>
                <span className="text-white/40 text-lg font-bold uppercase">Gs</span>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 w-full">
                <p className="text-white font-black uppercase text-[10px] tracking-[0.2em]">Sin mensualidades</p>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Tu agente IA es tuyo</p>
              </div>
              <a
                href="https://wa.me/595994884319"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-black font-black uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all w-full"
              >
                Solicitar mi IA
              </a>
            </div>
          </motion.div>

          {/* Why Choose Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 p-10 rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500">¿Por qué elegirlo?</h3>
            <div className="flex flex-col gap-6">
              {whyChoose.map(item => (
                <div key={item.text} className="flex items-start gap-4 text-white/70 text-sm">
                  <item.icon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item.text}</span>
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
                Transforma tu atención<br />y haz crecer tu negocio
              </h2>
              <p className="text-white/50 font-light">
                No dejes que ningún cliente espere. Activa tu propio Agente IA hoy.
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

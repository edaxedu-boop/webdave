import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Heart, Gift, MessageCircle, MapPin,
  Phone, Zap, BarChart3, Users, Star, Cake, Cloud, RefreshCw, Headphones
} from 'lucide-react';
import VimeoPlayer from '../VimeoPlayer';

interface LoyaltySoftwarePageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: MapPin,
    title: 'Notificaciones Geo Push',
    desc: 'Envía mensajes personalizados según la ubicación de tus clientes y aumenta tus visitas.'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    desc: 'Comunícate de forma directa y segmentada con tus clientes a través de WhatsApp.'
  },
  {
    icon: Gift,
    title: 'Programa de Estampillas',
    desc: 'Incentiva la repetición de compra con sistemas de estampillas y canje de recompensas.'
  },
  {
    icon: Cake,
    title: 'Mensaje de Cumpleaños',
    desc: 'Sorprende a tus clientes en su día especial y fortalece la relación con tu marca.'
  }
];

const checklist = [
  { icon: MapPin, text: 'Notificaciones Geo Push' },
  { icon: Gift, text: 'Programa de estampillas/gifcard' },
  { icon: MessageCircle, text: 'Whatsapp Marketing' },
  { icon: Cake, text: 'Mensaje de Cumpleaños' },
  { icon: Star, text: 'Reseñas Google Maps' }
];

const technicalSpecs = [
  { icon: Cloud, text: '100% Seguro y en la nube' },
  { icon: RefreshCw, text: 'Actualizaciones constantes' },
  { icon: Headphones, text: 'Soporte técnico dedicado' }
];

const benefits = [
  { icon: Heart, text: 'Fidelizar a tus clientes' },
  { icon: RefreshCw, text: 'Aumentar las recompras' },
  { icon: Users, text: 'Mejorar la experiencia' },
  { icon: Zap, text: 'Incrementar tus ventas' },
  { icon: BarChart3, text: 'Destacarte de la competencia' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function LoyaltySoftwarePage({ onClose }: LoyaltySoftwarePageProps) {
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
            src="/Nueva carpeta/software lealtad.gif" 
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
            MUNDO DIGITAL · Loyalty Software
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tus clientes compran<br />
            <span className="text-red-500">una vez</span> y nunca más?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo clientes, recompras y oportunidades de crecer cada día.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Fideliza, recompensa y haz crecer tu negocio<br />
              <span className="text-blue-500">con nuestro software de lealtad.</span>
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
            Software de<br /><span className="text-blue-500">Lealtad</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Conectamos con tus clientes, premiamos su fidelidad y aumentamos tus ventas.<br />
            Fideliza clientes, aumenta las recompensas y haz crecer tu negocio.
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
            <VimeoPlayer videoId="1203135708" title="10mo Video - MD" />
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
          SECTION 4 — PRICING & SUBSCRIPTION
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Suscripción Mensual</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Plan de Fidelización</h2>
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
              {checklist.map(item => (
                <div key={item.text} className="flex items-center gap-4 text-white/70 text-sm">
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center gap-8 p-10 rounded-[40px] border border-red-500/30 bg-white/[0.08] overflow-hidden group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center gap-6 w-full">
              <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest">Suscripción Mensual</span>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-black text-6xl tracking-tighter">1.000.000</span>
                <span className="text-white/40 text-lg font-bold uppercase">Gs / Mes</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 w-full">
                <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">Ayuda a fidelizar y aumentar el valor de cada cliente</p>
              </div>
              <a
                href="https://wa.me/595994884319"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-black font-black uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all w-full"
              >
                Suscribirme Ahora
              </a>
            </div>
          </motion.div>

          {/* Commitment-Free Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 p-10 rounded-[32px] border border-blue-500/30 bg-white/[0.05] overflow-hidden group h-full text-center items-center"
          >
             <div className="flex flex-col gap-3 items-center">
                <X className="w-12 h-12 text-red-500" />
                <h3 className="text-white font-black uppercase text-xl tracking-tight">Sin Compromiso</h3>
                <p className="text-red-500 font-black uppercase text-[10px] tracking-widest mt-2">Desuscríbete cuando quieras</p>
             </div>
             <div className="flex flex-col gap-4 text-white/50 text-sm font-light">
                <p>· Sin contratos</p>
                <p>· Sin permanencias</p>
                <p>· Sin complicaciones</p>
             </div>
             <div className="mt-4 w-full flex flex-col gap-4">
                {technicalSpecs.map(spec => (
                   <div key={spec.text} className="flex items-center gap-3 text-white/60 text-xs">
                      <spec.icon className="w-4 h-4 text-blue-500" />
                      <span>{spec.text}</span>
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
                Convierte clientes ocasionales<br />en clientes fieles
              </h2>
              <p className="text-white/50 font-light">
                Todo lo que necesitas para fidelizar, recompensar y hacer crecer tu negocio hoy mismo.
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

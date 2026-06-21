import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Smartphone, ShieldCheck, Zap, Layout, CheckCircle,
  BarChart3, Users, Rocket, Clock, Smartphone as PhoneIcon
} from 'lucide-react';
import VimeoPlayer from '../VimeoPlayer';

interface MobileAppsPageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: Rocket,
    title: 'Más Conversiones',
    desc: 'Creamos apps que mejoran la experiencia del usuario y aumentan tus ventas.'
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Total',
    desc: 'Protegemos los datos de tu negocio y usuarios con las mejores prácticas.'
  },
  {
    icon: Zap,
    title: 'Rendimiento Óptimo',
    desc: 'Apps rápidas, estables y escalables que crecen junto a tu negocio.'
  },
  {
    icon: Layout,
    title: 'Diseño Intuitivo',
    desc: 'Interfaces modernas y atractivas que enamoran a tus usuarios.'
  }
];

const plans = [
  {
    id: 1,
    title: 'Básico',
    subtitle: 'Funciones esenciales',
    priceGs: '2.000.000',
    priceUsd: '297',
    features: [
      'Diseño moderno y funcional',
      'Funciones esenciales',
      'Panel de administración básico',
      'Integración con base de datos',
      'Publicación en Play Store',
      'Compatible con Android'
    ],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  },
  {
    id: 2,
    title: 'Avanzado',
    subtitle: 'Funciones personalizadas',
    priceGs: '3.500.000',
    priceUsd: '497',
    features: [
      'Todas las funciones básicas',
      'Panel de administración completo',
      'Notificaciones Push',
      'Integración pasarela de pagos',
      'APIs y servicios externos',
      'Compatible con Android'
    ],
    highlight: true,
    color: 'from-red-500/10 to-transparent'
  }
];

const benefits = [
  { icon: Users, text: 'Llegar a más clientes' },
  { icon: Smartphone, text: 'Mejor experiencia' },
  { icon: Zap, text: 'Aumentar tus ventas' },
  { icon: ShieldCheck, text: 'Fortalecer tu marca' },
  { icon: BarChart3, text: 'Destacar de la competencia' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function MobileAppsPage({ onClose }: MobileAppsPageProps) {
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
            src="/Nueva carpeta/desarrollo app.gif" 
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
            MUNDO DIGITAL · App Development
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tienes una idea,<br />
            <span className="text-red-500">pero no sabes</span> cómo<br />
            hacerla realidad?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo tiempo, competencia y la oportunidad de escalar tu negocio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Nosotros desarrollamos la app que<br />
              <span className="text-blue-500">tu negocio necesita para crecer.</span>
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
            Desarrollo de<br /><span className="text-blue-500">Apps Móviles</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Transformamos tus ideas en apps potentes, funcionales y que generan resultados.<br />
            Tu app, tu negocio en la palma de la mano.
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
            <VimeoPlayer videoId="1203135707" title="9no Video - MD" />
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
          SECTION 4 — PRICING & SUPPORT
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión Inteligente</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Opciones de Desarrollo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col gap-8 p-10 rounded-[32px] border ${plan.highlight ? 'border-red-500/40 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03]'} overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="relative z-10">
                <span className={`px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest ${plan.highlight ? 'bg-red-600' : 'bg-blue-600'}`}>
                    Opción {plan.id}
                </span>
                <h3 className="text-white font-black uppercase text-2xl mt-6">{plan.title}</h3>
                <p className="text-white/40 text-xs font-bold uppercase mt-1 tracking-wider">{plan.subtitle}</p>
                
                <div className="flex flex-col gap-1.5 mt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-white font-black text-5xl tracking-tighter">{plan.priceUsd}</span>
                    <span className="text-white/40 text-sm font-bold uppercase">USD</span>
                  </div>
                  <div className="text-white/50 text-xs font-bold uppercase">
                    o {plan.priceGs} Gs
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-white/70 text-sm">
                      <CheckCircle className={`w-4 h-4 ${plan.highlight ? 'text-red-500' : 'text-blue-500'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/595994884319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 block text-center py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                    plan.highlight ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' : 'bg-white text-black'
                  }`}
                >
                  Solicitar Cotización
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Note */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full max-w-4xl p-10 rounded-[32px] border border-blue-500/20 bg-blue-500/[0.03] flex flex-col items-center text-center gap-6"
        >
           <ShieldCheck className="w-12 h-12 text-blue-500" />
           <div className="flex flex-col gap-3">
              <h3 className="text-white font-black uppercase text-xl tracking-tight">Nos encargamos de todo</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                Una vez entregada tu app, nosotros nos encargamos de que esté siempre activa, estable y actualizada los 365 días del año.
              </p>
           </div>
           <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest">
                 <Zap className="w-4 h-4 text-blue-500" /> Sin costo de mantenimiento
              </div>
              <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest">
                 <Clock className="w-4 h-4 text-blue-500" /> Soporte técnico continuo
              </div>
           </div>
        </motion.div>
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
                Escala tu negocio con<br />tu propia aplicación
              </h2>
              <p className="text-white/50 font-light">
                Contáctanos hoy y transforma tu idea en una herramienta de crecimiento real.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/595994884319"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-10 py-5 rounded-full shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
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

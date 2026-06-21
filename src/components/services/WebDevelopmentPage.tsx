import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Globe, Search, CheckCircle,
  Phone, Zap, ShieldCheck, BarChart3, Users, Settings, Clock
} from 'lucide-react';

interface WebDevelopmentPageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: Users,
    title: 'Más Clientes',
    desc: 'Atrae y convierte visitantes en clientes todos los días.'
  },
  {
    icon: Search,
    title: 'Más Visibilidad',
    desc: 'Destaca en Google y llega a más personas que buscan lo que ofreces.'
  },
  {
    icon: ShieldCheck,
    title: 'Más Confianza',
    desc: 'Transmite profesionalismo y genera credibilidad desde el primer clic.'
  },
  {
    icon: Clock,
    title: 'Disponible 24/7',
    desc: 'Tu negocio siempre abierto, sin importar la hora ni el día.'
  }
];

const inclusionList = [
  'Diseño web profesional 100% a medida',
  'Sitio web autoadministrable',
  'Diseño responsive (Todo dispositivo)',
  'Optimización SEO básico',
  'Formulario de contacto y WhatsApp',
  'Integración con redes sociales',
  'Hasta 10 secciones internas',
  'Capacitación para el uso'
];

const maintenanceList = [
  'Actualizaciones de seguridad',
  'Respaldo mensual',
  'Soporte técnico',
  'Monitoreo y optimización',
  'Actualizaciones de contenido'
];

const benefits = [
  { icon: ShieldCheck, text: 'Confianza y Credibilidad' },
  { icon: Zap, text: 'Destaca de la competencia' },
  { icon: Users, text: 'Atrae más clientes' },
  { icon: BarChart3, text: 'Incrementa tus ventas' },
  { icon: Globe, text: 'Proyecta tu marca 24/7' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function WebDevelopmentPage({ onClose }: WebDevelopmentPageProps) {
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
            src="/Nueva carpeta/desarrollo web.gif" 
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
            MUNDO DIGITAL · Web Development
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tu negocio no tiene<br />
            <span className="text-red-500">una web profesional</span><br />
            que genere confianza?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo credibilidad, visibilidad y oportunidades todos los días.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Tu web es tu oficina 24/7.<br />
              <span className="text-blue-500">Haz que trabaje por ti.</span>
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
            Desarrollo Web<br /><span className="text-blue-500">Profesional</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Diseñamos sitios web que representan tu marca, atraen clientes y generan resultados reales.<br />
            Tu negocio, en su mejor versión online.
          </p>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-sm mx-auto mt-12"
        >
          <div className="flex flex-col gap-4 p-4 rounded-[28px] border border-white/10 bg-white/[0.02] group hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-center justify-between px-1">
              <span className="font-black text-xl sm:text-2xl text-white/20 group-hover:text-blue-500 transition-colors duration-500">
                05
              </span>
              <span className="text-[#D7E2EA]/40 text-[10px] font-black uppercase tracking-[0.2em]">
                Video Demostrativo
              </span>
            </div>
            <div className="relative w-full overflow-hidden rounded-[20px] bg-black/40 border border-white/5 shadow-inner" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src="https://player.vimeo.com/video/1203135731?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
                title="5to Video - MD"
              />
            </div>
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
          SECTION 4 — PRICING & INCLUSIONS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión y Servicios</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Desarrollo a Medida</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl items-start">
          {/* Inclusion Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-10 rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500">¿Qué incluye?</h3>
            <div className="flex flex-col gap-4">
              {inclusionList.map(item => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center gap-8 p-10 rounded-[40px] border border-red-500/30 bg-white/[0.08] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center gap-6 w-full">
              <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest">Inversión Única</span>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-black text-6xl tracking-tighter">2.000.000</span>
                <span className="text-white/40 text-lg font-bold uppercase">Gs</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 w-full">
                <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">Pago único por el desarrollo de tu página web</p>
              </div>
              <a
                href="https://wa.me/595994884319"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-black font-black uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all w-full"
              >
                Solicitar Web
              </a>
            </div>
          </motion.div>

          {/* Maintenance Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 p-10 rounded-[32px] border border-blue-500/30 bg-white/[0.05] overflow-hidden group h-full"
          >
             <div className="flex flex-col gap-2">
                <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500">Mantenimiento</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-white font-black text-3xl tracking-tighter">500.000</span>
                    <span className="text-white/40 text-xs font-bold uppercase">Gs / Mes</span>
                </div>
             </div>
             <div className="flex flex-col gap-4">
                {maintenanceList.map(item => (
                  <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <Settings className="w-4 h-4 text-blue-500" />
                    <span>{item}</span>
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
                Haz que tu oficina 24/7<br />empiece a trabajar hoy
              </h2>
              <p className="text-white/50 font-light">
                Contáctanos ahora y proyecta tu marca al mundo entero.
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

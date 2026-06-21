import { motion } from 'framer-motion';
import {
  X, ArrowLeft, Video, Camera, Plane, Film, CheckCircle,
  Zap, BarChart3, Rocket, Play, Monitor
} from 'lucide-react';

interface CorporateVideoPageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: Plane,
    title: 'Tomas Aéreas 4K',
    desc: 'Grabación con drones profesionales para capturar perspectivas únicas de tu infraestructura.'
  },
  {
    icon: Film,
    title: 'Edición Profesional',
    desc: 'Post-producción de alto nivel con colorización y narrativa cinematográfica avanzada.'
  },
  {
    icon: Play,
    title: 'Alto Impacto',
    desc: 'Contenido diseñado estratégicamente para captar la atención y retener a tu audiencia.'
  },
  {
    icon: Rocket,
    title: 'Impulsa tu Marca',
    desc: 'Proyecta una imagen profesional que te diferencie y te ayude a traspasar fronteras.'
  }
];

const checklist = [
  'Grabación con drones profesionales',
  'Edición cinematográfica avanzada',
  'Producción para marcas globales',
  'Calidad Cinematográfica',
  'Contenido Estratégico',
  'Mayor Alcance y Visibilidad'
];

const benefits = [
  { icon: Camera, text: 'Calidad Cinematográfica' },
  { icon: Film, text: 'Contenido Estratégico' },
  { icon: Zap, text: 'Mayor Alcance' },
  { icon: BarChart3, text: 'Crecimiento Visible' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function CorporateVideoPage({ onClose }: CorporateVideoPageProps) {
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
            src="/Nueva carpeta/produccion audiovisual corporativa.gif" 
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
            MUNDO DIGITAL · Corporate Production
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Proyecta tu empresa<br />
            <span className="text-blue-500">al mundo entero</span><br />
            con calidad cine.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Producción audiovisual corporativa para empresas que quieren traspasar fronteras.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              No es un gasto. Es percepción, posicionamiento y ventas.<br />
              <span className="text-red-500">Tu marca merece verse profesional.</span>
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
            Producción<br /><span className="text-blue-500">Audiovisual</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Grabación y edición profesional para empresas y marcas globales.<br />
            Planos aéreos con dron + edición cinematográfica avanzada para potenciar tu marca.
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
            <div className="relative w-full overflow-hidden rounded-[20px] bg-black/40 border border-white/5 shadow-inner" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src="https://player.vimeo.com/video/1203135709?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
                title="12vo Video - MD"
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
          SECTION 4 — PRICING & DETAILS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión Corporativa</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Producción Integral</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl items-center">
          {/* Inclusion Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 p-12 rounded-[40px] border border-white/10 bg-white/[0.03]"
          >
            <h3 className="text-white font-black uppercase text-sm tracking-widest text-blue-500">¿Qué incluye la producción?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {checklist.map(item => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 p-5 rounded-2xl bg-white/[0.05] border border-white/10">
               <Monitor className="w-6 h-6 text-blue-500" />
               <p className="text-white/40 text-xs font-bold uppercase tracking-wider leading-relaxed">
                  Contenido optimizado para sitios web, redes sociales y presentaciones corporativas.
               </p>
            </div>
          </motion.div>

          {/* Pricing Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center gap-10 p-12 rounded-[48px] border border-blue-500/30 bg-white/[0.08] overflow-hidden group min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center gap-8 w-full">
              <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">Inversión Base</span>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-baseline gap-2">
                   <span className="text-white font-black text-6xl sm:text-7xl tracking-tighter">7.000.000</span>
                   <span className="text-white/40 text-xl font-bold uppercase tracking-widest">Gs</span>
                </div>
                <p className="text-white/20 text-xs font-bold uppercase tracking-[0.2em] mt-2">Producción Corporativa Premium</p>
              </div>
              <div className="w-full flex flex-col gap-4">
                 <a
                    href="https://wa.me/595994884319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-black uppercase tracking-widest text-[10px] px-10 py-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition-all w-full"
                 >
                    Solicitar Propuesta
                 </a>
                 <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em]">Sujeto a alcance de proyecto</p>
              </div>
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
                Tu marca no necesita solo un video.<br />Necesita verse profesional.
              </h2>
              <p className="text-white/50 font-light">
                Comienza hoy mismo a proyectar tu empresa al nivel que merece.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/595994884319"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-12 py-6 rounded-full shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              <Video className="w-4 h-4" />
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

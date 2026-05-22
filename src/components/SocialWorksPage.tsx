import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ArrowLeft, Heart, Award, Users, BookOpen, Globe, Check,
  Sparkles, Coffee, Gift, Calendar, ArrowRight, MessageSquare, ExternalLink
} from 'lucide-react';

interface SocialWorksPageProps {
  onClose: () => void;
}

const programs = [
  {
    icon: BookOpen,
    title: 'Educación Digital para Niños',
    desc: 'Llevamos talleres gratuitos de programación, robótica y diseño digital a niños en situación vulnerable de San Ignacio y comunidades rurales de Misiones.',
    impact: 'Más de 150 niños capacitados este año',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: Globe,
    title: 'Inclusión Tecnológica y Donaciones',
    desc: 'Recolectamos, reparamos y donamos computadoras y tablets a escuelas públicas locales para que ningún niño se quede sin acceso a internet.',
    impact: '42 equipos entregados a escuelas locales',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: Heart,
    title: 'Apoyo a Comedores Sociales',
    desc: 'Colaboramos activamente con comedores comunitarios, proveyendo víveres, equipamiento de cocina y apoyo logístico para asegurar la alimentación diaria de familias.',
    impact: 'Más de 1,200 platos de comida mensuales asegurados',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop'
  }
];

const teamInvolvement = [
  {
    title: 'Tiempo Solidario',
    desc: 'Nuestro equipo de desarrolladores y diseñadores dona un 10% de sus horas mensuales a capacitar y brindar soporte técnico gratuito a ONGs locales.'
  },
  {
    title: 'Compromiso de Ganancias',
    desc: 'El 5% de cada contrato de diseño web o desarrollo de software se destina directamente a financiar kits escolares y tecnología para los niños.'
  }
];

const donationTiers = [
  {
    amount: '50.000',
    title: 'Kit de Útiles Escolares',
    desc: 'Provee cuadernos, lápices y materiales de estudio esenciales para un niño de la comunidad.'
  },
  {
    amount: '150.000',
    title: 'Media Beca de Programación',
    desc: 'Financia un mes completo de capacitación intensiva en robótica y tecnología para un adolescente.'
  },
  {
    amount: '350.000',
    title: 'Conectividad Rural',
    desc: 'Ayuda a equipar una escuela con un router 4G y datos por 3 meses para acceso a internet.'
  }
];

const stats = [
  { val: '200+', label: 'Niños Impactados' },
  { val: '12+', label: 'Comunidades Beneficiadas' },
  { val: '500+', label: 'Horas de Mentoría Donadas' },
  { val: '100%', label: 'Destinado a Proyectos Sociales' }
];

export default function SocialWorksPage({ onClose }: SocialWorksPageProps) {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDonate = () => {
    // Open PayPal
    window.open('https://paypal.me/davidarzapalo777?locale.x=es_XC&country.x=PE', '_blank');
    setShowThankYou(true);
  };

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
        className="fixed top-6 right-6 z-[1010] flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest pointer-events-auto"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver
        <X className="w-3.5 h-3.5 ml-1" />
      </button>

      {/* ══════════════════════════════════════
          SECTION 1 — HERO & IMPACT INTRO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-32 text-center overflow-hidden">
        {/* Background Image / Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop" 
            alt="Impact Background" 
            className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-transparent to-[#0C0C0C]" />
        </div>
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.06),transparent)]" />
        
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.35em]"
          >
            MUNDO DIGITAL · Nuestro Compromiso Social
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Dejando una huella<br />
            <span className="text-emerald-500">tecnológica</span> y humana<br />
            en nuestra tierra.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-lg sm:text-xl font-light max-w-2xl"
          >
            Creemos que la tecnología es un motor de cambio. Por eso, nos comprometemos activamente a mejorar la educación y calidad de vida de las familias en Misiones, Paraguay.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-5xl bg-white/[0.02] border border-white/5 p-8 rounded-[32px] backdrop-blur-md"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-emerald-500 font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter">{s.val}</span>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — DETAILED PROJECTS (Charities)
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
          <span className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black">Nuestros Pilares</span>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Obras Sociales Activas</h2>
          <p className="text-white/50 font-light">
            Conoce los proyectos que financiamos y coordinamos de forma directa para construir un futuro más brillante e inclusivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden group hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.8] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 backdrop-blur-md">
                  <prog.icon className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-bold uppercase text-lg tracking-tight leading-snug group-hover:text-emerald-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400/90 text-xs font-bold uppercase tracking-wider leading-tight">
                    {prog.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — TEAM & COMPANY COMMITMENT
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-20 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-emerald-500 font-black uppercase text-[10px] tracking-widest">Nuestro Compromiso Interno</span>
            <h2 className="text-white font-black uppercase text-3xl sm:text-4xl tracking-tight leading-tight">
              ¿Cómo lo hacemos posible?
            </h2>
            <p className="text-white/50 font-light leading-relaxed">
              No nos limitamos a buscar apoyo externo; nosotros aportamos desde nuestra propia operación diaria. Cada uno de nuestros proyectos corporativos apoya de manera directa las actividades solidarias.
            </p>
            <div className="flex items-center gap-4 mt-2 p-5 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 max-w-md">
              <Award className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Misión Social</h4>
                <p className="text-white/40 text-xs mt-1">Garantizamos total transparencia en el uso y destino de los recursos solidarios.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {teamInvolvement.map((item, i) => (
              <div key={i} className="p-8 rounded-[28px] border border-white/10 bg-white/[0.02] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-white font-bold uppercase text-sm tracking-wide">{item.title}</h3>
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — INTERACTIVE DONATION PORTAL
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text and tier list */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-emerald-500 font-black uppercase text-[10px] tracking-widest">Donación y Apoyo Colectivo</span>
              <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">
                Únete a la Causa
              </h2>
              <p className="text-white/50 font-light leading-relaxed">
                Cada aporte, sin importar el tamaño, nos permite llegar a más escuelas, más comedores y capacitar a más niños. Selecciona uno de los montos recomendados o ingresa un valor personalizado para proceder.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {donationTiers.map((tier, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedTier(selectedTier === idx ? null : idx);
                    setCustomAmount('');
                  }}
                  className={`w-full text-left p-6 rounded-[24px] border transition-all duration-300 flex items-center justify-between gap-4 ${
                    selectedTier === idx
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_4px_20px_rgba(16,185,129,0.1)]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold uppercase text-xs tracking-wider">{tier.title}</span>
                    <span className="text-white/40 text-xs font-light">{tier.desc}</span>
                  </div>
                  <div className="flex items-baseline gap-1 shrink-0">
                    <span className={`font-black text-xl sm:text-2xl transition-colors ${selectedTier === idx ? 'text-emerald-400' : 'text-white'}`}>
                      {tier.amount}
                    </span>
                    <span className="text-white/30 text-[10px] font-bold">GS</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive donation card */}
          <div className="relative p-8 sm:p-12 rounded-[40px] border border-emerald-500/30 bg-white/[0.04] overflow-hidden flex flex-col gap-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-40" />

            <div className="relative z-10 flex flex-col items-center gap-2 text-center border-b border-white/5 pb-6">
              <Gift className="w-10 h-10 text-emerald-400 mb-2" />
              <h3 className="text-white font-black uppercase text-xl">Tu Donación</h3>
              <p className="text-white/40 text-xs font-bold uppercase tracking-wider">Transferencia / Giro Directo</p>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              {/* Custom amount field */}
              <div className="flex flex-col gap-2">
                <label className="text-white/40 font-bold uppercase text-[9px] tracking-widest">Monto Personalizado (Gs)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier(null);
                    }}
                    placeholder="Ej. 100000"
                    className="w-full bg-[#0C0C0C]/50 border border-white/10 focus:border-emerald-500 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-white/20 outline-none transition-colors text-lg"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 font-black text-sm">GS.</span>
                </div>
              </div>

              {/* Summary */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="text-white/30 font-bold uppercase text-[8px] tracking-widest">Resumen de Impacto</span>
                <p className="text-white/70 text-xs leading-relaxed font-light">
                  {selectedTier !== null ? (
                    <>Tu aporte de <strong className="text-emerald-400 font-bold">{donationTiers[selectedTier].amount} Gs</strong> apoyará directamente al proyecto: <strong>{donationTiers[selectedTier].title}</strong>.</>
                  ) : customAmount ? (
                    <>Tu aporte personalizado de <strong className="text-emerald-400 font-bold">{Number(customAmount).toLocaleString('es-PY')} Gs</strong> se sumará a los fondos de educación e inclusión digital.</>
                  ) : (
                    <>Selecciona un monto o introduce un valor personalizado para ver el impacto de tu aporte solidario.</>
                  )}
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleDonate}
                className="w-full py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Donar con PayPal</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <div className="flex flex-col items-center gap-2 text-center mt-2">
                <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">
                  Te redirigiremos a PayPal para realizar tu aporte<br />de manera segura y directa
                </p>
              </div>
            </div>

            {/* Success toast */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-[#0C0C0C]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                    <Heart className="w-8 h-8 text-emerald-400 fill-emerald-400" />
                  </div>
                  <h4 className="text-white font-black uppercase text-xl">¡Muchísimas Gracias!</h4>
                  <p className="text-white/50 text-sm font-light max-w-xs leading-relaxed">
                    Hemos abierto la página de PayPal para procesar tu donativo. Tu apoyo es invaluable para los niños y familias de Misiones.
                  </p>
                  <button
                    onClick={() => setShowThankYou(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    Cerrar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — FOOTER CALL TO ACTION
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-12 border-t border-white/5 text-center bg-white/[0.01]">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight leading-tight">
            ¿Quieres proponer una<br />colaboración o voluntariado?
          </h2>
          <p className="text-white/50 font-light">
            Si eres parte de una escuela, ONG, o te gustaría donar equipos directamente, contáctanos y hablemos de cómo trabajar juntos.
          </p>
        </div>

        <a
          href="https://wa.me/595994884319?text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20Obras%20Sociales%20y%20c%C3%B3mo%20puedo%20colaborar%20como%20voluntario%20o%20con%20donativos."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-full shadow-xl shadow-emerald-600/20 transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          Proponer Colaboración
        </a>
      </section>
    </motion.div>
  );
}

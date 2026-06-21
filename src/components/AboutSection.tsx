import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Sparkles, Rocket, Heart, ArrowUpRight, X } from 'lucide-react';
import FadeIn from './FadeIn';

import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Servicios', value: 12, suffix: '', prefix: '+' },
  { label: 'Compromiso', value: 100, suffix: '%', prefix: '' },
  { label: 'Atención', value: 24, suffix: '/7', prefix: '' },
];

const founders = [
  {
    name: 'David Arzapalo',
    role: 'Co-Fundador y Director de Tecnología y Producto (CTO / CPO)',
    image: '/dave (1).jpeg',
    bio: 'David Arzapalo es el Co-Fundador y Director de Tecnología y Producto de Mundo Digital.\n\nSe encarga de las tendencias del mercado, la infraestructura tecnológica y de asegurar que los servicios mantengan la máxima calidad para el cliente.\n\nApasionado por la innovación, combina su expertise en marketing digital e inteligencia artificial con la gestión estratégica de productos, asegurando soluciones eficientes y de alto impacto.'
  },
  {
    name: 'Augusto Ferreira',
    role: 'Co-Fundador & Director Ejecutivo y de Crecimiento (CEO / CGO)',
    image: 'https://res.cloudinary.com/dl1pgzshh/image/upload/v1782015837/WhatsApp_Image_2026-05-25_at_9.30.01_PM.jpg',
    bio: 'Augusto Ferreira es el Co-Fundador y Director Ejecutivo y de Crecimiento de Mundo Digital. Él es el estratega comercial y el negociador principal, encargado de las relaciones públicas y cerrar ventas clave que impulsan el crecimiento del negocio.\n\nApasionado por la gestión empresarial, el fútbol y un gran soñador, Augusto tiene un espíritu altruista y tiene el deseo de apoyar a miles de niños necesitados mediante obras de caridad. Tiene una profunda fe en Dios.'
  },
  {
    name: 'Karina Morinigo',
    role: 'Directora Financiera y de Operaciones (CFO / COO)',
    image: '/karina.jpeg',
    bio: 'Karina es responsable del flujo de caja y la contabilidad de la empresa (Finanzas), así como de la administración de recursos humanos y operaciones internas (Operaciones). Controla la salud financiera de Mundo Digital y asegura que la estructura interna del equipo funcione de manera eficiente. Empresaria y fundadora de JKA Emprendimientos, la empresa madre de Mundo Digital, es una mujer visionaria con enfoque estratégico y liderazgo sólido.\n\nApasionada por servir en el reino de Dios, Karina tuvo su encuentro con Cristo desde muy joven y busca ser un pilar en la construcción de la iglesia donde congrega. Su fe la inspira a liderar con integridad, justicia y compromiso, integrando sus valores cristianos con la gestión empresarial y la excelencia operativa.'
  }
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

interface StatCardProps {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
}

function StatCard({ label, value, prefix, suffix }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform duration-500">
          <span className="text-blue-500 mr-1">{prefix}</span>
          <Counter value={value} />
        </span>
        <span className="text-xl sm:text-2xl font-bold text-blue-500">
          {suffix}
        </span>
      </div>
      <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-bold mt-2">
        {label}
      </p>
    </div>
  );
}

interface ContactButtonProps {
  href: string;
}

function ContactButton({ href }: ContactButtonProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-lg shadow-white/5 self-start"
    >
      Contáctame
      <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  );
}

export default function AboutSection() {
  const [selectedFounder, setSelectedFounder] = useState<any | null>(null);
  return (
    <section id="sobre-nosotros" className="relative py-24 sm:py-32 md:py-40 bg-[#0C0C0C] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 flex flex-col gap-24 sm:gap-32">
        
        {/* ── STATS ── */}
        <FadeIn delay={0}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </FadeIn>

        {/* ── HEADER ── */}
        <FadeIn delay={0} y={40} className="flex flex-col gap-4 items-center text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-white/30" />
            <p className="text-white/40 uppercase tracking-[0.35em] text-[11px] font-bold">
              Quiénes somos
            </p>
            <div className="h-px w-10 bg-white/30" />
          </div>
          <h2
            className="hero-heading font-black uppercase leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 9vw, 110px)' }}
          >
            Sobre<br />Nosotros
          </h2>
        </FadeIn>

        {/* ── FOUNDERS + STORY (Moved up as requested) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: story */}
          <FadeIn delay={0.1} x={-40} y={0} duration={0.9}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-white/35 uppercase tracking-[0.35em] text-[11px] font-bold">
                  San Ignacio, Misiones · Paraguay
                </p>
                <h3
                  className="text-white font-black uppercase leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
                >
                  Fundada el{' '}
                  <span className="hero-heading">16 de Abril</span>
                </h3>
              </div>

              <p className="text-[#D7E2EA]/70 text-base sm:text-lg leading-relaxed font-light">
                <span className="text-white font-semibold">Mundo Digital</span> nace de la visión de{' '}
                <span className="text-white font-semibold">David Arzapalo</span>,{' '}
                <span className="text-white font-semibold">Augusto Ferreira</span> y{' '}
                <span className="text-white font-semibold">Karina Morinigo</span>, apasionados por el marketing digital, el liderazgo estratégico y la fe cristiana.
              </p>

              <p className="text-[#D7E2EA]/50 text-sm sm:text-base leading-relaxed font-light border-l-2 border-white/10 pl-5">
                Con una misión que trasciende lo comercial, buscamos apoyar a empresarios para aumentar su visibilidad en internet, mientras creamos un legado de impacto positivo en la sociedad.
              </p>

              <ContactButton href="https://wa.me/595994884319?text=Hola!%20Los%20conoc%C3%AD%20en%20la%20secci%C3%B3n%20'Sobre%20Nosotros'%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20sus%20servicios." />
            </div>
          </FadeIn>

          {/* Right: founders */}
          <FadeIn delay={0.2} x={40} y={0} duration={0.9}>
            <div className="flex flex-col gap-4">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  whileHover={{ scale: 1.02, x: 6, transition: { duration: 0.25 } }}
                  onClick={() => setSelectedFounder(founder)}
                  className="flex items-center gap-6 p-6 rounded-[32px] border border-white/10 bg-white/[0.03] group cursor-pointer hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-white/10 overflow-hidden bg-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-[0.8] contrast-[1.05]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <p className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide group-hover:text-blue-400 transition-colors">
                      {founder.name}
                    </p>
                    <p className="text-white/40 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider">
                      {founder.role}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/40 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 border border-white/15">
                  <Heart className="w-4 h-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                </div>
                <p className="text-[#D7E2EA]/60 text-sm font-light leading-relaxed">
                  <span className="text-white font-semibold">Fe, ética y excelencia</span> en todo lo que hacemos.
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* ── DIVIDER ── */}
        <FadeIn delay={0} y={0} className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/15" />
          <span className="text-white/25 uppercase tracking-[0.35em] text-[10px] font-bold whitespace-nowrap">
            Misión y Visión
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/15" />
        </FadeIn>

        {/* ── PILLAR BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Card 01 – Misión */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7 relative flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 sm:p-10 overflow-hidden group min-h-[320px]"
          >
            <span className="pointer-events-none absolute -right-4 -top-6 text-[120px] font-black text-white/[0.04] leading-none select-none">01</span>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-white/35 uppercase tracking-[0.35em] text-[10px] font-black">Misión</p>
                <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl uppercase leading-tight tracking-tight max-w-xs">Impacto real a través de lo digital</h3>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/15">
                <Target className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed font-light">
              Impulsamos negocios y emprendimientos mediante soluciones digitales integrales, siempre guiados por principios cristianos. Nuestro compromiso va más allá de los resultados comerciales: buscamos impactar positivamente en la sociedad.
            </p>
          </motion.div>

          {/* Card 02 – Visión */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-5 relative flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10 overflow-hidden group"
          >
            <span className="pointer-events-none absolute -right-4 -top-6 text-[120px] font-black text-white/[0.04] leading-none select-none">02</span>
            <div className="flex items-start justify-between">
              <p className="text-white/35 uppercase tracking-[0.35em] text-[10px] font-black">Visión</p>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15">
                <Eye className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-white font-black text-xl sm:text-2xl uppercase leading-tight tracking-tight">Líderes regionales con valores</h3>
            <p className="text-[#D7E2EA]/60 text-sm leading-relaxed font-light">
              Ser la agencia de marketing digital líder en la región, reconocida por combinar creatividad, innovación y valores cristianos.
            </p>
          </motion.div>

          {/* Card 03 – Propósito */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-12 relative flex flex-col sm:flex-row items-start sm:items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-8 sm:p-10 overflow-hidden group"
          >
            <span className="pointer-events-none absolute -right-4 -top-6 text-[120px] font-black text-white/[0.04] leading-none select-none">03</span>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <p className="text-white/35 uppercase tracking-[0.35em] text-[10px] font-black">Propósito</p>
              <h3 className="text-white font-black text-2xl sm:text-3xl uppercase leading-tight tracking-tight max-w-xs">Transformar vidas desde la fe</h3>
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/15 mt-2">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block flex-shrink-0 w-px self-stretch bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed font-light">
              No solo creamos soluciones digitales, creamos oportunidades para transformar vidas: potenciamos empresas, ayudamos a comunidades y llevamos bendición integrando ética y excelencia.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── FOUNDER BIOGRAPHY MODAL ── */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md pointer-events-auto"
            onClick={() => setSelectedFounder(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#141414] border border-white/10 rounded-[40px] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row gap-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedFounder(null)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image & Title */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 shrink-0 md:w-72">
                <div className="w-44 h-44 sm:w-64 sm:h-64 rounded-[36px] border border-white/15 overflow-hidden bg-white/5 shadow-2xl">
                  <img 
                    src={selectedFounder.image} 
                    alt={selectedFounder.name} 
                    className="w-full h-full object-cover filter saturate-[0.9] contrast-[1.05]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-black text-2xl sm:text-3xl tracking-tight leading-tight">{selectedFounder.name}</h4>
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mt-1 leading-snug">{selectedFounder.role}</span>
                </div>
              </div>

              {/* Right Column: Bio Content */}
              <div className="flex-1 flex flex-col gap-6">
                <span className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-black border-b border-white/5 pb-3">Biografía y Visión</span>
                <div className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-4 max-h-[45vh] sm:max-h-[55vh]">
                  {selectedFounder.bio.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

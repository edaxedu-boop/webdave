import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, Rocket, Heart, ArrowUpRight } from 'lucide-react';
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
  { name: 'David Arzapalo', initial: 'D' },
  { name: 'Javier Martínez', initial: 'J' },
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
      className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-lg shadow-purple-500/20 self-start"
    >
      Contáctame
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  );
}

export default function AboutSection() {
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
                <span className="text-white font-semibold">Mundo Digital</span> nace del sueño de{' '}
                <span className="text-white font-semibold">David Arzapalo</span> y{' '}
                <span className="text-white font-semibold">Javier Martínez</span>, dos visionarios apasionados por el marketing digital y la fe cristiana.
              </p>

              <p className="text-[#D7E2EA]/50 text-sm sm:text-base leading-relaxed font-light border-l-2 border-white/10 pl-5">
                Con una misión que trasciende lo comercial, buscamos apoyar a empresarios para aumentar su visibilidad en internet, mientras creamos un legado de impacto positivo en la sociedad.
              </p>

              <ContactButton href="https://wa.me/595985478760?text=Hola!%20Los%20conoc%C3%AD%20en%20la%20secci%C3%B3n%20'Sobre%20Nosotros'%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20sus%20servicios." />
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
                  whileHover={{ x: 6, transition: { duration: 0.25 } }}
                  className="flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.03] group cursor-default"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.06)]">
                    <span className="text-white font-black text-xl leading-none">{founder.initial}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-base sm:text-lg tracking-wide truncate">
                      {founder.name}
                    </p>
                  </div>
                  <Rocket className="w-4 h-4 text-white/15 group-hover:text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
    </section>
  );
}

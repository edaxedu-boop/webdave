import { motion } from 'framer-motion';
import {
  X, ArrowLeft, ShoppingCart, Lock, Globe, Settings, CheckCircle,
  Phone, Zap, ShieldCheck, Users, Link
} from 'lucide-react';

interface EcommercePageProps {
  onClose: () => void;
}

const mainFeatures = [
  {
    icon: ShoppingCart,
    title: 'Más Ventas',
    desc: 'Tu tienda online trabaja 24/7 atrayendo clientes y generando ventas automáticamente.'
  },
  {
    icon: Lock,
    title: 'Pagos Seguros',
    desc: 'Integramos pasarelas de pago confiables para que tus clientes compren con tranquilidad.'
  },
  {
    icon: Globe,
    title: 'Más Alcance',
    desc: 'Llega a más personas dentro y fuera del país sin limitaciones geográficas.'
  },
  {
    icon: Settings,
    title: 'Gestión Eficiente',
    desc: 'Administra tus productos, pedidos y clientes de manera fácil y desde cualquier lugar.'
  }
];

const plans = [
  {
    id: 1,
    title: 'Esencial',
    subtitle: 'Sin vinculación de factura',
    price: '3.000.000',
    features: [
      'Diseño moderno y responsive',
      'Catálogo ilimitado',
      'Carrito de compras',
      'Pasarelas de pago integradas',
      'Gestión de pedidos',
      'Panel de administración',
      'Integración redes sociales',
      'Capacitación de uso'
    ],
    highlight: false,
    color: 'from-blue-500/10 to-transparent'
  },
  {
    id: 2,
    title: 'Avanzado',
    subtitle: 'Con vinculación de factura',
    price: '5.000.000',
    features: [
      'Todo lo del Plan Esencial',
      'Vinculación con tu sistema',
      'Sincronización de stock',
      'Emisión automática de facturas',
      'Reportes de facturación',
      'Mayor automatización'
    ],
    highlight: true,
    color: 'from-red-500/10 to-transparent'
  }
];

const benefits = [
  { icon: Globe, text: 'Vender 24/7' },
  { icon: Users, text: 'Llegar a más clientes' },
  { icon: Zap, text: 'Aumentar tus ventas' },
  { icon: ShoppingCart, text: 'Mejor experiencia' },
  { icon: ShieldCheck, text: 'Fortalecer tu marca' }
];

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function EcommercePage({ onClose }: EcommercePageProps) {
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
            src="/Nueva carpeta/tienda en linea.gif" 
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
            MUNDO DIGITAL · E-commerce
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            ¿Tu negocio no vende<br />
            <span className="text-red-500">en línea</span> y pierdes<br />
            clientes cada día?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/40 text-lg sm:text-xl font-light">
            Estás perdiendo ventas mientras tu competencia vende 24/7.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 px-6 sm:px-10 py-5 sm:py-6 rounded-2xl border border-white/10 bg-white/[0.04] max-w-2xl"
          >
            <p className="text-white font-black uppercase text-base sm:text-xl leading-snug tracking-tight">
              Te ayudamos a tener tu tienda profesional<br />
              <span className="text-blue-500">y aumentar tus ventas.</span>
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
            Tienda en Línea<br /><span className="text-blue-500">Profesional</span>
          </h2>
          <p className="text-[#D7E2EA]/60 text-base sm:text-lg font-light leading-relaxed">
            Llevamos tu negocio al mundo digital y lo convertimos en ventas.<br />
            Creamos tiendas profesionales, seguras y fáciles de usar.
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
                src="https://player.vimeo.com/video/1203135722?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
                title="8vo Video - MD"
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
          SECTION 4 — PRICING PLANS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 md:px-12 py-24 flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Inversión de Desarrollo</p>
          <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tight">Opciones de Tienda</h2>
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
                
                <div className="flex items-baseline gap-2 mt-8">
                  <span className="text-white font-black text-5xl tracking-tighter">{plan.price}</span>
                  <span className="text-white/40 text-sm font-bold uppercase">Gs</span>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-white/70 text-sm">
                      {plan.highlight ? <Link className="w-4 h-4 text-red-500" /> : <CheckCircle className="w-4 h-4 text-blue-500" />}
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

        {/* Maintenance Note */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full max-w-4xl p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
           <div className="flex flex-col gap-2">
              <span className="text-white font-black uppercase text-[10px] tracking-widest text-blue-500">Mantenimiento Mensual</span>
              <p className="text-white/60 text-sm">Soporte técnico, actualizaciones y seguridad continua.</p>
           </div>
           <div className="flex flex-col items-center sm:items-end gap-1">
              <div className="flex items-baseline gap-2">
                 <span className="text-white font-black text-3xl">500.000</span>
                 <span className="text-white/40 text-xs font-bold uppercase">Gs / Mes</span>
              </div>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest italic">Primer mes incluido</p>
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
                Vende más con tu propia<br />tienda profesional
              </h2>
              <p className="text-white/50 font-light">
                Contáctanos hoy y lleva tu negocio al siguiente nivel sin limitaciones.
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

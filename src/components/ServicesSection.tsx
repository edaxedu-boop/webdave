import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, ChevronLeft, ChevronRight, 
  Megaphone, Heart, Smartphone, ShoppingBag, 
  Monitor, MessageCircle, Target, Video, 
  Palette, Box, Bot, Camera 
} from 'lucide-react';
import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: 'Flyers Publicitarios',
    icon: Megaphone,
    image: '/Nueva carpeta/flayer publicitarios.gif',
    description: 'Diseño de volantes persuasivos para empresas, políticos o servicios, enfocados en informar y convencer al público.',
  },
  {
    number: '02',
    name: 'Software de Lealtad',
    icon: Heart,
    image: '/Nueva carpeta/software lealtad.gif',
    description: 'Sistema diseñado para fidelizar y hacer crecer tu negocio mediante el uso de notificaciones Geo Push y WhatsApp marketing.',
  },
  {
    number: '03',
    name: 'Desarrollo de Apps Móviles',
    icon: Smartphone,
    image: '/Nueva carpeta/desarrollo app.gif',
    description: 'Creación de herramientas potentes y funcionales con diseño intuitivo y seguridad total para mejorar la experiencia.',
  },
  {
    number: '04',
    name: 'Desarrollo de Tienda en Línea',
    icon: ShoppingBag,
    image: '/Nueva carpeta/tienda en linea.gif',
    description: 'Plataformas de venta 24/7 con pagos seguros e integración de envíos, permitiendo una gestión eficiente de productos.',
  },
  {
    number: '05',
    name: 'Desarrollo Web',
    icon: Monitor,
    image: '/Nueva carpeta/desarrollo web.gif',
    description: 'Diseño de sitios profesionales enfocados en la visibilidad en Google y la generación de confianza 24/7.',
  },
  {
    number: '06',
    name: 'Gestión de Redes Sociales',
    icon: MessageCircle,
    image: '/Nueva carpeta/gestion de redes sociales.gif',
    description: 'Estrategia integral para TikTok, Facebook e Instagram que busca más alcance e interacción constante.',
  },
  {
    number: '07',
    name: 'Publicidad Digital en Meta',
    icon: Target,
    image: '/Nueva carpeta/publicidad digital meta.gif',
    description: 'Ejecución de anuncios estratégicos con segmentación precisa y medición real de resultados para convertir.',
  },
  {
    number: '08',
    name: 'Edición de Video con IA',
    icon: Video,
    image: '/Nueva carpeta/edicion de video.gif',
    description: 'Producción de videos profesionales mediante inteligencia artificial, utilizando guiones persuasivos y música.',
  },
  {
    number: '09',
    name: 'Diseño Gráfico',
    icon: Palette,
    image: '/Nueva carpeta/diseño grafico.gif',
    description: 'Desarrollo de identidad visual y piezas gráficas impactantes que fortalecen tu marca visualmente.',
  },
  {
    number: '10',
    name: 'Diseño de Logotipos 3D',
    icon: Box,
    image: '/Nueva carpeta/diseño logo.gif',
    description: 'Creación de logotipos exclusivos con modelado en 3D y acabados premium, entregados en formatos versátiles.',
  },
  {
    number: '11',
    name: 'Automatización con Agentes IA',
    icon: Bot,
    image: '/Nueva carpeta/automatizacion con agente ia.gif',
    description: 'Implementación de agentes de comunicación vía WhatsApp que ofrecen atención 24/7 con conversaciones naturales.',
  },
  {
    number: '12',
    name: 'Producción Audiovisual Corporativa',
    icon: Camera,
    image: '/Nueva carpeta/produccion audiovisual corporativa.gif',
    description: 'Grabación y edición profesional para empresas que incluye tomas aéreas en 4K con drones y edición cinematográfica.',
  },
];

interface ServicesSectionProps {
  onServiceSelect: (service: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section
      id="servicios"
      className="flex flex-col py-20 sm:py-24 md:py-32 bg-[#0C0C0C]"
    >
      <div className="px-5 sm:px-8 md:px-10 mb-16 flex flex-col items-center text-center gap-8">
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase leading-[0.8] tracking-tighter flex items-center justify-center gap-4"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)', color: '#FFFFFF' }}
          >
            <span className="text-blue-600">+</span> Servicios
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 sm:px-8 md:px-10 max-w-[1600px] mx-auto">
        <AnimatePresence mode="popLayout">
          {displayedServices.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              layout
              className="w-full group"
            >
              <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-[32px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-700 h-[500px] justify-between relative overflow-hidden">
                 {/* ... content ... */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-[40px] group-hover:bg-blue-600/20 transition-all duration-700" />
                 
                 <div className="flex flex-col gap-5">
                   <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-2">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-60" />
                   </div>

                   <div className="flex items-center justify-between">
                      <span
                        className="font-black leading-none text-white/10 transition-colors group-hover:text-white/20"
                        style={{ fontSize: 'clamp(2rem, 4vw, 50px)' }}
                      >
                        {service.number}
                      </span>
                      
                      <motion.div 
                         whileHover={{ rotateY: 20, rotateX: -10 }}
                         className="relative w-12 h-12 flex items-center justify-center group/icon"
                      >
                         <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl blur-[1px] border border-white/20 shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" />
                         <div className="absolute inset-0 bg-[#0C0C0C]/40 rounded-xl" />
                         <service.icon className="w-5 h-5 text-white relative z-10 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.5)]" />
                      </motion.div>
                   </div>

                   <div className="flex flex-col gap-2">
                      <h3
                        className="font-black uppercase tracking-tight leading-tight group-hover:text-blue-500 transition-colors duration-500"
                        style={{ fontSize: '1.1rem', color: '#FFFFFF' }}
                      >
                        {service.name}
                      </h3>
                      <p
                        className="font-light leading-relaxed text-[#D7E2EA]/50 text-[10px] line-clamp-3"
                      >
                        {service.description}
                      </p>
                   </div>
                 </div>
                  
                  <button
                    onClick={() => onServiceSelect(service.name)}
                    className="mt-4 flex items-center justify-between gap-2 w-full px-6 py-4 rounded-full bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 group/btn"
                  >
                    Ver Servicio
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show All Toggle */}
      <div className="mt-20 flex justify-center">
         <button
           onClick={() => setShowAll(!showAll)}
           className="group relative flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 hover:border-blue-600 transition-all overflow-hidden"
         >
           <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
           <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-[10px]">
             {showAll ? 'Ver Menos' : 'Ver Todos los Servicios'}
           </span>
           <div className={`relative z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`}>
              <ChevronRight className="w-4 h-4 text-white rotate-90" />
           </div>
         </button>
      </div>
    </section>
  );
}

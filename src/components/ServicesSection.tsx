import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    let interval: number;
    if (!isPaused) {
      interval = window.setInterval(() => {
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          if (scrollLeft >= scrollWidth - clientWidth - 5) {
            containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 350;
            const gap = 24;
            containerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
          }
        }
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 350;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="servicios"
      className="flex flex-col py-20 sm:py-24 md:py-32 bg-[#0C0C0C] overflow-hidden"
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

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
           <button
             onClick={() => scroll('left')}
             disabled={!canScrollLeft}
             className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all opacity-100 hover:bg-white group"
           >
             <ChevronLeft className={`w-5 h-5 ${canScrollLeft ? 'text-white group-hover:text-black' : 'text-white/20'}`} />
           </button>
           <button
             onClick={() => scroll('right')}
             disabled={!canScrollRight}
             className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all opacity-100 hover:bg-white group"
           >
             <ChevronRight className={`w-5 h-5 ${canScrollRight ? 'text-white group-hover:text-black' : 'text-white/20'}`} />
           </button>
        </div>
      </div>

      {/* Draggable Container */}
      <div 
        ref={containerRef}
        onScroll={checkScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory scroll-smooth carousel-container"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] group snap-center"
          >
            <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-[32px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-700 h-[520px] justify-between relative overflow-hidden">
               {/* 3D Icon Background Decor */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-[40px] group-hover:bg-blue-600/20 transition-all duration-700" />
               
               <div className="flex flex-col gap-5">
                 {/* Image Container */}
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
                    
                    {/* 3D Textured Icon */}
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
                      className="font-light leading-relaxed text-[#D7E2EA]/50 text-xs line-clamp-3"
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
      </div>
    </section>
  );
}

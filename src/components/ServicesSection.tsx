import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    name: 'Flyers Publicitarios',
    description: 'Diseño de volantes persuasivos para empresas, políticos o servicios, enfocados en informar y convencer al público con mensajes claros y estética profesional.',
  },
  {
    number: '02',
    name: 'Software de Lealtad',
    description: 'Sistema diseñado para fidelizar y hacer crecer tu negocio mediante el uso de notificaciones Geo Push, WhatsApp marketing y un programa digital de estampillas y recompensas.',
  },
  {
    number: '03',
    name: 'Desarrollo de Apps Móviles',
    description: 'Creación de herramientas potentes y funcionales con diseño intuitivo y seguridad total para mejorar la experiencia del usuario y aumentar las conversiones de ventas.',
  },
  {
    number: '04',
    name: 'Desarrollo de Tienda en Línea',
    description: 'Plataformas de venta 24/7 con pagos seguros e integración de envíos, permitiendo una gestión eficiente de productos para vender sin limitaciones geográficas.',
  },
  {
    number: '05',
    name: 'Desarrollo Web',
    description: 'Diseño de sitios profesionales enfocados en la visibilidad en Google y la generación de confianza, asegurando que tu negocio esté disponible las 24 horas para atraer clientes.',
  },
  {
    number: '06',
    name: 'Gestión de Redes Sociales',
    description: 'Estrategia integral para TikTok, Facebook e Instagram que busca más alcance e interacción mediante contenido de valor y planificación constante para crear comunidad.',
  },
  {
    number: '07',
    name: 'Publicidad Digital en Meta',
    description: 'Ejecución de anuncios estratégicos con segmentación precisa y medición real de resultados para convertir clics en clientes potenciales y maximizar las ventas.',
  },
  {
    number: '08',
    name: 'Edición de Video con IA',
    description: 'Producción de videos profesionales mediante inteligencia artificial, utilizando guiones persuasivos y música en tendencia para lograr una alta retención y viralidad.',
  },
  {
    number: '09',
    name: 'Diseño Gráfico',
    description: 'Desarrollo de identidad visual y piezas gráficas impactantes que fortalecen tu marca a través de logotipos, folletos y contenido visual personalizado para redes.',
  },
  {
    number: '10',
    name: 'Diseño de Logotipos 3D',
    description: 'Creación de logotipos exclusivos con modelado en 3D y acabados premium, entregados en formatos versátiles que transmiten profesionalismo y realismo.',
  },
  {
    number: '11',
    name: 'Automatización con Agentes IA',
    description: 'Implementación de agentes de comunicación vía WhatsApp que ofrecen atención 24/7 con conversaciones naturales e integración total a tu CRM y catálogo de productos.',
  },
  {
    number: '12',
    name: 'Producción Audiovisual Corporativa',
    description: 'Grabación y edición profesional para empresas que incluye tomas aéreas en 4K con drones y edición cinematográfica avanzada para potenciar y dar impacto a tu marca.',
  },
];

interface ServicesSectionProps {
  onServiceSelect: (service: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  return (
    <section
      id="servicios"
      className="flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Servicios
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 sm:gap-y-20 md:gap-y-24 max-w-[1760px] mx-auto w-full">
        {services.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.05}
            y={30}
            className="flex flex-col group"
          >
            <div className="flex items-start gap-6 sm:gap-8 mb-6 sm:mb-8">
              <span
                className="font-black uppercase leading-none text-black"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-3 sm:gap-4 pt-2">
                <h3
                  className="font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)', color: '#0C0C0C' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-black/60 max-w-md"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
                >
                  {service.description}
                </p>
                
                <button
                  onClick={() => onServiceSelect(service.name)}
                  className="mt-4 flex items-center gap-2 w-fit px-6 py-3 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                  Ver Servicio
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

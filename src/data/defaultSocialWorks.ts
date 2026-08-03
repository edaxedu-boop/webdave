import type { SocialWorksContent } from '../types/socialWorks';

export const defaultSocialWorksContent: SocialWorksContent = {
  hero: {
    badge: 'MUNDO DIGITAL · Nuestro Compromiso Social',
    title: 'Dejando una huella',
    titleHighlight: 'tecnológica',
    subtitle:
      'Creemos que la tecnología es un motor de cambio. Por eso, nos comprometemos activamente a mejorar la educación y calidad de vida de las familias en Misiones, Paraguay.',
    backgroundImage:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop',
  },
  stats: [
    { val: '200+', label: 'Niños Impactados' },
    { val: '12+', label: 'Comunidades Beneficiadas' },
    { val: '500+', label: 'Horas de Mentoría Donadas' },
    { val: '100%', label: 'Destinado a Proyectos Sociales' },
  ],
  programsSection: {
    label: 'Nuestros Pilares',
    title: 'Obras Sociales Activas',
    subtitle:
      'Conoce los proyectos que financiamos y coordinamos de forma directa para construir un futuro más brillante e inclusivo.',
  },
  programs: [
    {
      icon: 'BookOpen',
      title: 'Educación Digital para Niños',
      desc: 'Llevamos talleres gratuitos de programación, robótica y diseño digital a niños en situación vulnerable de San Ignacio y comunidades rurales de Misiones.',
      impact: 'Más de 150 niños capacitados este año',
      image:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      icon: 'Globe',
      title: 'Inclusión Tecnológica y Donaciones',
      desc: 'Recolectamos, reparamos y donamos computadoras y tablets a escuelas públicas locales para que ningún niño se quede sin acceso a internet.',
      impact: '42 equipos entregados a escuelas locales',
      image:
        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1200&auto=format&fit=crop',
    },
    {
      icon: 'Heart',
      title: 'Apoyo a Comedores Sociales',
      desc: 'Colaboramos activamente con comedores comunitarios, proveyendo víveres, equipamiento de cocina y apoyo logístico para asegurar la alimentación diaria de familias.',
      impact: 'Más de 1,200 platos de comida mensuales asegurados',
      image:
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  teamSection: {
    label: 'Nuestro Compromiso Interno',
    title: '¿Cómo lo hacemos posible?',
    subtitle:
      'No nos limitamos a buscar apoyo externo; nosotros aportamos desde nuestra propia operación diaria. Cada uno de nuestros proyectos corporativos apoya de manera directa las actividades solidarias.',
    missionTitle: 'Misión Social',
    missionDesc:
      'Garantizamos total transparencia en el uso y destino de los recursos solidarios.',
  },
  teamInvolvement: [
    {
      title: 'Tiempo Solidario',
      desc: 'Nuestro equipo de desarrolladores y diseñadores dona un 10% de sus horas mensuales a capacitar y brindar soporte técnico gratuito a ONGs locales.',
    },
    {
      title: 'Compromiso de Ganancias',
      desc: 'El 5% de cada contrato de diseño web o desarrollo de software se destina directamente a financiar kits escolares y tecnología para los niños.',
    },
  ],
  donationSection: {
    label: 'Donación y Apoyo Colectivo',
    title: 'Únete a la Causa',
    subtitle:
      'Cada aporte, sin importar el tamaño, nos permite llegar a más escuelas, más comedores y capacitar a más niños. Selecciona uno de los montos recomendados o ingresa un valor personalizado para proceder.',
  },
  donationTiers: [
    {
      amount: '50.000',
      title: 'Kit de Útiles Escolares',
      desc: 'Provee cuadernos, lápices y materiales de estudio esenciales para un niño de la comunidad.',
    },
    {
      amount: '150.000',
      title: 'Media Beca de Programación',
      desc: 'Financia un mes completo de capacitación intensiva en robótica y tecnología para un adolescente.',
    },
    {
      amount: '350.000',
      title: 'Conectividad Rural',
      desc: 'Ayuda a equipar una escuela con un router 4G y datos por 3 meses para acceso a internet.',
    },
  ],
  footerCta: {
    title: '¿Quieres proponer una colaboración o voluntariado?',
    subtitle:
      'Si eres parte de una escuela, ONG, o te gustaría donar equipos directamente, contáctanos y hablemos de cómo trabajar juntos.',
    buttonText: 'Proponer Colaboración',
  },
  settings: {
    paypalUrl: 'https://paypal.me/davidarzapalo777?locale.x=es_XC&country.x=PE',
    whatsappUrl:
      'https://wa.me/595994884319?text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20Obras%20Sociales%20y%20c%C3%B3mo%20puedo%20colaborar%20como%20voluntario%20o%20con%20donativos.',
  },
};

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: 'Diseño Gráfico y Publicidad Digital en META',
    name: 'Cariña Cañete',
    href: '#',
    images: {
      col1: [
        'https://i.imgur.com/Jw1TmiM.png',
        'https://i.imgur.com/Jw1TmiM.png',
      ],
      col2: 'https://i.imgur.com/Jw1TmiM.png',
    },
  },
  {
    number: '02',
    category: 'Diseño Gráfico y Edición de Video',
    name: 'Juan Ramon Benegas',
    href: '#',
    images: {
      col1: [
        'https://i.imgur.com/Jw1TmiM.png',
        'https://i.imgur.com/Jw1TmiM.png',
      ],
      col2: 'https://i.imgur.com/Jw1TmiM.png',
    },
  },
  {
    number: '03',
    category: 'Social Media, Diseño y Video',
    name: 'La Misión Restaurant',
    href: '#',
    images: {
      col1: [
        'https://i.imgur.com/Jw1TmiM.png',
        'https://i.imgur.com/Jw1TmiM.png',
      ],
      col2: 'https://i.imgur.com/Jw1TmiM.png',
    },
  },
  {
    number: '04',
    category: 'Rediseño de Logotipo 3D',
    name: 'LNFS del Paraguay',
    href: '#',
    images: {
      col1: [
        'https://i.imgur.com/Jw1TmiM.png',
        'https://i.imgur.com/Jw1TmiM.png',
      ],
      col2: 'https://i.imgur.com/Jw1TmiM.png',
    },
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="proyectos"
      ref={containerRef}
      className="relative px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col items-center py-20 sm:py-24 md:py-32">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Proyectos
          </h2>
        </FadeIn>
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.number}
          project={project}
          index={index}
          totalCards={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}

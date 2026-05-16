import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: 'Diseño Gráfico y Publicidad Digital en META',
    name: 'Cariña Cañete',
    image: 'https://i.imgur.com/f3N7e0y.jpeg',
    videoUrls: ['https://player.vimeo.com/video/1192861019?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&title=0&byline=0&portrait=0'],
    flyers: [
      'https://i.imgur.com/cReUHXV.jpeg',
      'https://i.imgur.com/f3N7e0y.jpeg',
    ]
  },
  {
    number: '02',
    category: 'Diseño Gráfico y Edición de Video',
    name: 'Juan Ramon Benegas',
    image: 'https://i.imgur.com/R3Orkbe.jpeg',
    videoUrls: [
      'https://player.vimeo.com/video/1192863564?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&title=0&byline=0&portrait=0',
      'https://player.vimeo.com/video/1192863563?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&title=0&byline=0&portrait=0'
    ],
    flyers: [
      'https://i.imgur.com/R3Orkbe.jpeg',
    ]
  },
  {
    number: '03',
    category: 'Social Media, Diseño y Video',
    name: 'La Misión Restaurant',
    image: 'https://i.imgur.com/3agCS41.jpeg',
    videoUrls: [],
    flyers: [
      'https://i.imgur.com/ukEPb92.gif',
      'https://i.imgur.com/rk4zlU5.jpeg',
      'https://i.imgur.com/3agCS41.jpeg',
    ]
  },
  {
    number: '04',
    category: 'Rediseño de Logotipo 3D',
    name: 'LNFS del Paraguay',
    image: 'https://i.imgur.com/FPLa8Kp.jpeg',
    videoUrls: [],
    flyers: [
      'https://i.imgur.com/LYtcos1.jpeg',
      'https://i.imgur.com/FPLa8Kp.jpeg',
    ]
  },
];

interface ProjectsSectionProps {
  onProjectSelect: (project: any) => void;
}

export default function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="proyectos"
      ref={containerRef}
      className="relative px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] z-10 pb-[100vh]"
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
          onSelect={() => onProjectSelect(project)}
        />
      ))}
    </section>
  );
}

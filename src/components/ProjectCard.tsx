import { motion, MotionValue, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  image: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onSelect: () => void;
}

export default function ProjectCard({ project, index, totalCards, progress, onSelect }: ProjectCardProps) {
  const rangeStart = index / totalCards;
  const rangeEnd = 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div className="h-[75vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
          backgroundColor: '#0C0C0C',
        }}
        className="absolute w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10 origin-top overflow-hidden shadow-2xl shadow-black/50"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4 relative z-10">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <span
              className="text-[#D7E2EA] font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.8rem)' }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-light tracking-wide"
                style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.6rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>

          <button
            onClick={onSelect}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-black uppercase tracking-widest text-xs hover:bg-[#D7E2EA] hover:text-black transition-all"
          >
            Ver Proyecto
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="relative w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-1 min-h-[300px] sm:min-h-[400px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover sm:object-contain bg-white/[0.02]"
          />
        </div>
      </motion.div>
    </div>
  );
}

import { ArrowUpRight } from 'lucide-react';

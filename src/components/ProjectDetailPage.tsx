import { motion } from 'framer-motion';
import { X, ArrowLeft, Video, Image as ImageIcon, Play, Download } from 'lucide-react';

interface ProjectDetailPageProps {
  project: {
    number: string;
    category: string;
    name: string;
    image: string;
    videoUrls?: string[];
    flyers?: string[];
  };
  onClose: () => void;
}

export default function ProjectDetailPage({ project, onClose }: ProjectDetailPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[2000] bg-[#0C0C0C] overflow-y-auto"
    >
      {/* Header / Nav */}
      <div className="sticky top-0 z-50 px-5 sm:px-8 md:px-12 py-6 bg-[#0C0C0C]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between">
        <button
          onClick={onClose}
          className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest hidden sm:block">Volver al Portafolio</span>
        </button>

        <div className="flex flex-col items-end">
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">{project.category}</span>
          <h2 className="text-white font-black uppercase text-sm sm:text-xl tracking-tight">{project.name}</h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 pt-6 sm:pt-10 pb-12 sm:pb-20 flex flex-col items-center gap-8 sm:gap-12 text-center">
        
        {/* Title & Description Header */}
        <div className="flex flex-col items-center gap-6 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]"
          >
            {project.category}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-black uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 80px)' }}
          >
            {project.name}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-blue-600 rounded-full my-2"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#D7E2EA]/60 font-light leading-relaxed text-lg sm:text-xl"
          >
            Descubre los detalles de {project.name}. A continuación presentamos el material audiovisual y las piezas gráficas desarrolladas para este proyecto.
          </motion.p>
        </div>

        {/* Main Section: Videos side by side */}
        {project.videoUrls && project.videoUrls.length > 0 && (
          <div className="w-full flex flex-col gap-8">
            <div className="flex items-center justify-center gap-3">
              <Video className="w-5 h-5 text-blue-500" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs">Video{project.videoUrls.length > 1 ? 's' : ''} del Proyecto</h3>
            </div>
            <div className={`grid grid-cols-1 ${project.videoUrls.length > 1 ? 'md:grid-cols-2' : ''} gap-8 sm:gap-12 w-full`}>
              {project.videoUrls.map((url, index) => (
                <div key={index} className="relative w-full aspect-[9/16] rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl">
                  <iframe 
                    src={url}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    allowFullScreen
                    title={`${project.name} video ${index + 1}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Flyers Section: Below videos */}
        {project.flyers && project.flyers.length > 0 && (
          <div className="w-full flex flex-col gap-8 pt-12 border-t border-white/5">
             <div className="flex items-center justify-center gap-3">
                <ImageIcon className="w-5 h-5 text-purple-500" />
                <h3 className="text-white font-black uppercase tracking-widest text-xs">Flyers Publicitarios</h3>
             </div>
             <div className="flex flex-col gap-8 sm:gap-12 w-full">
                {/* First flyer (Featured) - Adapts to its frame */}
                {project.flyers && project.flyers.length > 0 && (
                   <div className="relative group rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl max-w-5xl mx-auto w-full">
                      <img 
                        src={project.flyers[0]} 
                        alt="Featured Flyer"
                        className="w-full h-auto block"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <button className="p-4 rounded-full bg-white text-black scale-90 group-hover:scale-100 transition-transform">
                           <Download className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                )}
                
                {/* Remaining flyers in grid */}
                {project.flyers && project.flyers.length > 1 && (
                   <div className={`grid grid-cols-1 ${project.flyers.length > 2 ? 'sm:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8 sm:gap-12 w-full`}>
                      {project.flyers.slice(1).map((flyer, i) => (
                        <div key={i} className="relative group rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl">
                           <img 
                             src={flyer} 
                             alt={`Flyer ${i + 2}`}
                             className="w-full h-auto block"
                           />
                           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button className="p-4 rounded-full bg-white text-black scale-90 group-hover:scale-100 transition-transform">
                                <Download className="w-5 h-5" />
                              </button>
                           </div>
                        </div>
                      ))}
                   </div>
                )}
             </div>
          </div>
        )}
      </div>

      {/* Final CTA */}
      <section className="py-32 px-5 text-center border-t border-white/5">
         <h2 className="text-white font-black uppercase text-3xl sm:text-5xl tracking-tighter mb-8">¿Te gusta este trabajo?</h2>
         <a 
           href="https://wa.me/595994884319" 
           target="_blank" 
           rel="noopener noreferrer"
           className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-white/10"
         >
           Empezar mi Proyecto
           <ArrowLeft className="w-5 h-5 rotate-180" />
         </a>
      </section>

    </motion.div>
  );
}

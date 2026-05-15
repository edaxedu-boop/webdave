import { motion } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  serviceName: string;
  onClose: () => void;
}

export default function ComingSoon({ serviceName, onClose }: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[#0C0C0C] flex flex-col items-center justify-center p-5 text-center"
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl w-full flex flex-col items-center gap-8"
      >
        <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-bold uppercase tracking-widest mb-4">
          Próximamente
        </div>
        
        <h2 className="text-[#D7E2EA] font-black uppercase leading-[0.9] tracking-tighter text-[10vw] sm:text-[8vw] md:text-[6vw]">
          {serviceName}
        </h2>
        
        <p className="text-[#D7E2EA]/50 text-lg sm:text-xl font-light max-w-lg">
          Estamos trabajando para brindarte la mejor experiencia en este servicio. Estará disponible muy pronto.
        </p>

        <button
          onClick={onClose}
          className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all mt-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </button>
      </motion.div>
    </motion.div>
  );
}

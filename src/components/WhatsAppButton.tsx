import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '595985478760';
  const message = '¡Hola Mundo Digital! 👋 Me gustaría recibir más información sobre sus servicios.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[3000] flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] group overflow-hidden"
    >
      {/* Wave Effect */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[#25D366] rounded-full"
      />

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <MessageCircle className="w-8 h-8 text-white relative z-10 drop-shadow-md" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-xl pointer-events-none hidden md:block">
        ¿En qué podemos ayudarte?
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
      </div>
    </motion.a>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface EditModalProps {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function EditModal({ open, title, subtitle, onClose, children }: EditModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', duration: 0.45 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-white/10 bg-[#141414] shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-[#141414]/95 backdrop-blur-xl px-6 py-5">
              <div>
                <h3 className="text-white font-black uppercase text-sm tracking-wide">{title}</h3>
                {subtitle && (
                  <p className="text-white/40 text-xs mt-1 font-light">{subtitle}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

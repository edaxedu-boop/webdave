import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const budget = formData.get('budget');
    const message = formData.get('message');
    
    const whatsappUrl = `https://wa.me/595985478760?text=${encodeURIComponent(
      `Hola Mundo Digital! 👋\n\nMi nombre es: ${name}\nEmail: ${email}\nPresupuesto: ${budget}\n\nConsulta: ${message}`
    )}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 text-left">
              <FadeIn delay={0} x={-30}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
                  <Mail className="w-3 h-3 text-blue-500" />
                  Hablemos
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1} x={-30}>
                <h2 className="text-white font-black uppercase tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
                  ¿Listo para <br /><span className="text-blue-500">empezar?</span>
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2} x={-30}>
                <p className="text-white/40 text-lg sm:text-xl font-light max-w-lg leading-relaxed">
                  Cuéntanos sobre tu proyecto y descubramos juntos cómo llevar tu marca al siguiente nivel.
                </p>
              </FadeIn>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: Phone, label: 'Llámanos', value: '+595 985 478 760', href: 'tel:+595985478760' },
                { icon: Mail, label: 'Email', value: 'hola@mundodigital.com.py', href: 'mailto:hola@mundodigital.com.py' },
                { icon: MapPin, label: 'Ubicación', value: 'San Ignacio, Misiones, Paraguay', href: '#mapa' }
              ].map((item, i) => (
                <FadeIn key={item.label} delay={0.3 + (i * 0.1)} x={-20}>
                  <a 
                    href={item.href}
                    className="group flex items-center gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                      <p className="text-white font-bold text-lg mt-0.5">{item.value}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <FadeIn delay={0.2} className="relative">
            <div className="p-8 sm:p-12 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center justify-center text-center py-20 gap-6"
                 >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white font-black uppercase text-2xl">¡Mensaje Enviado!</h3>
                      <p className="text-white/40 max-w-xs">Nos pondremos en contacto contigo lo antes posible.</p>
                    </div>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col gap-2">
                       <label className="text-white/30 text-[10px] font-black uppercase tracking-widest ml-4">Nombre Completo</label>
                       <input 
                         required
                         name="name"
                         type="text"
                         placeholder="Ej. Juan Pérez"
                         className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                       />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                       <label className="text-white/30 text-[10px] font-black uppercase tracking-widest ml-4">Correo Electrónico</label>
                       <input 
                         required
                         name="email"
                         type="email"
                         placeholder="tu@email.com"
                         className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                       />
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-white/30 text-[10px] font-black uppercase tracking-widest ml-4">Presupuesto Estimado</label>
                       <select 
                         required
                         name="budget"
                         className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                       >
                         <option value="" className="bg-[#0C0C0C]">Selecciona un rango...</option>
                         <option value="1M - 3M" className="bg-[#0C0C0C]">1.000.000 - 3.000.000 Gs</option>
                         <option value="3M - 7M" className="bg-[#0C0C0C]">3.000.000 - 7.000.000 Gs</option>
                         <option value="7M+" className="bg-[#0C0C0C]">Más de 7.000.000 Gs</option>
                       </select>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-white/30 text-[10px] font-black uppercase tracking-widest ml-4">Mensaje</label>
                       <textarea 
                         required
                         name="message"
                         rows={4}
                         placeholder="Cuéntanos un poco sobre tu proyecto..."
                         className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10 resize-none"
                       />
                    </div>

                    <button 
                      type="submit"
                      className="mt-4 w-full py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95"
                    >
                      Enviar Mensaje
                      <Send className="w-4 h-4" />
                    </button>
                 </form>
               )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

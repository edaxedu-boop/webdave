import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Music2, ArrowUpRight, Cpu } from 'lucide-react';
import FadeIn from './FadeIn';

const socialLinks = [
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
  { name: 'TikTok', icon: <Music2 className="w-5 h-5" />, href: '#' },
  { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#' },
];



const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Nuestro Equipo', href: '#nuestro-equipo' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-80 pb-10 border-t border-white/5">
      <div className="max-w-[1760px] mx-auto flex flex-col gap-20">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col items-center text-center gap-32">
          <FadeIn delay={0} y={40}>
            <h2 
              className="font-black uppercase leading-[0.9] tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 12vw, 12rem)', color: '#D7E2EA' }}
            >
              Construyamos <br /> <span className="hero-heading">juntos</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <a 
              href="mailto:hello@jackcreator.com"
              className="group flex items-center gap-3 text-white text-lg sm:text-xl md:text-2xl font-light hover:opacity-70 transition-opacity"
            >
              hello@jackcreator.com
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/10">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold uppercase tracking-widest">Jack Creator</span>
            </div>
            <p className="text-[#D7E2EA]/50 text-sm max-w-xs leading-relaxed">
              Creador 3D y diseñador digital enfocado en crear experiencias visuales impactantes e inolvidables.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Navegación</span>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[#D7E2EA] hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Sígueme</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:border-white hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <span className="text-[#D7E2EA]/30 text-xs uppercase tracking-widest">
            © {currentYear} JACK CREATOR. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-2 text-[#D7E2EA]/30 text-xs uppercase tracking-widest">
            <span>Hecho con</span>
            <span className="text-red-500">❤️</span>
            <span>en Paraguay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

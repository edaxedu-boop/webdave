import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Cpu, Menu, X, ChevronDown, Megaphone, Heart, Smartphone, ShoppingCart, Globe, Share2, Target, Video, Palette, Box, Bot, Camera, LogIn } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Nuestro Equipo', id: 'sobre-nosotros' },
  { name: 'Servicios', id: 'servicios' },
  { name: 'Proyectos', id: 'proyectos' },
  { name: 'Obras Sociales', id: 'obras-sociales' },
  { name: 'Contacto', id: 'contacto' },
];

const servicesList = [
  { name: 'Flyers Publicitarios', icon: Megaphone },
  { name: 'Software de Lealtad', icon: Heart },
  { name: 'Desarrollo de Apps Móviles', icon: Smartphone },
  { name: 'Desarrollo de Tienda en Línea', icon: ShoppingCart },
  { name: 'Desarrollo Web', icon: Globe },
  { name: 'Gestión de Redes Sociales', icon: Share2 },
  { name: 'Publicidad Digital en Meta', icon: Target },
  { name: 'Edición de Video con IA', icon: Video },
  { name: 'Diseño Gráfico', icon: Palette },
  { name: 'Diseño de Logotipos 3D', icon: Box },
  { name: 'Automatización con Agentes IA', icon: Bot },
  { name: 'Producción Audiovisual Corporativa', icon: Camera },
];

interface NavbarProps {
  onServiceSelect: (service: string) => void;
  onSocialWorksSelect: () => void;
}

export default function Navbar({ onServiceSelect, onSocialWorksSelect }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollY } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }
    );

    const sections = document.querySelectorAll('section, footer');
    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    if (id === 'servicios') {
      setIsDropdownOpen(!isDropdownOpen);
      return;
    }
    setActiveSection(id);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const handleServiceClick = (service: string) => {
    onServiceSelect(service);
    setIsDropdownOpen(false);
    setIsOpen(false);
  };
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12, 12, 12, 0.4)', 'rgba(12, 12, 12, 0.9)']
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)']
  );

  return (
    <motion.div 
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-5 sm:top-8 left-1/2 z-[999] px-4 w-[95%] sm:w-fit pointer-events-none"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.nav 
          style={{ backgroundColor, borderColor }}
          className="flex items-center gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border backdrop-blur-2xl pointer-events-auto ring-1 ring-white/10 shadow-2xl"
        >
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 ml-1">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.id;
              const isActive = activeSection === id;
              const isServicios = id === 'servicios';

              return (
                <div key={link.name} className="relative group">
                  <a
                    href={id === 'obras-sociales' ? undefined : `#${id}`}
                    onClick={(e) => {
                      if (id === 'obras-sociales') {
                        e.preventDefault();
                        onSocialWorksSelect();
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                        return;
                      }
                      if (isServicios) {
                        setIsDropdownOpen(!isDropdownOpen);
                      }
                      handleLinkClick(id);
                    }}
                    onMouseEnter={() => isServicios && setIsDropdownOpen(true)}
                    className="relative px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 outline-none flex items-center gap-1 cursor-pointer"
                    style={{ color: isActive ? 'white' : 'rgba(255, 255, 255, 0.5)' }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isServicios && <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                    {isActive && !isServicios && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {isServicios && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          onMouseLeave={() => setIsDropdownOpen(false)}
                          className="absolute top-full left-0 mt-4 bg-[#0C0C0C]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[280px] shadow-2xl pointer-events-auto overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {servicesList.map((service) => (
                              <button
                                key={service.name}
                                onClick={() => handleServiceClick(service.name)}
                                className="w-full text-left px-4 py-2.5 rounded-xl text-[10px] text-white/60 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest font-bold border border-transparent hover:border-white/10 flex items-center gap-3"
                              >
                                <service.icon className="w-3.5 h-3.5 text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]" />
                                {service.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
            <Link
              to="/admin/login"
              className="relative ml-1 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 hover:text-white border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              Iniciar sesión
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white mr-1"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>



        {/* Mobile Menu Overlay */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 bg-[#0C0C0C]/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl pointer-events-auto sm:hidden overflow-hidden min-h-[300px]"
            >
              <AnimatePresence mode="wait">
                {!isDropdownOpen ? (
                  <motion.div
                    key="main-links"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="flex flex-col gap-2"
                  >
                    {navLinks.map((link) => {
                      const id = link.id;
                      const isServicios = id === 'servicios';
                      
                      return (
                        <button
                          key={link.name}
                          onClick={() => {
                            if (id === 'obras-sociales') {
                              onSocialWorksSelect();
                              setIsOpen(false);
                              return;
                            }
                            isServicios ? setIsDropdownOpen(true) : handleLinkClick(id);
                          }}
                          className="w-full text-center py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                          {link.name}
                          {isServicios && <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />}
                        </button>
                      );
                    })}
                    <Link
                      to="/admin/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full mt-2 py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <LogIn className="w-4 h-4" />
                      Iniciar sesión
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="services-links"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/5 pb-4 w-full justify-center"
                    >
                      <ChevronDown className="w-3 h-3 rotate-90" />
                      Volver
                    </button>
                    <div className="grid grid-cols-1 gap-1 max-h-[50vh] overflow-y-auto custom-scrollbar">
                      {servicesList.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceClick(service.name)}
                          className="w-full text-left px-5 py-4 rounded-xl text-[11px] text-white/50 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest font-bold border border-transparent hover:border-white/10 flex items-center gap-4"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                            <service.icon className="w-4 h-4 text-white drop-shadow-[0_2px_3px_rgba(255,255,255,0.5)]" />
                          </div>
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}





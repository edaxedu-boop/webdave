import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <Navbar onServiceSelect={setSelectedService} />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection onServiceSelect={setSelectedService} />
      <ProjectsSection />
      <Footer />

      <AnimatePresence>
        {selectedService && (
          <ComingSoon 
            serviceName={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}



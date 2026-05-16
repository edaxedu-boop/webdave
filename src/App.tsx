import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ComboSection from './components/ComboSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import ComingSoon from './components/ComingSoon';
import ProjectDetailPage from './components/ProjectDetailPage';
import FlyersPage from './components/services/FlyersPage';
import Logo3DPage from './components/services/Logo3DPage';
import GraphicDesignPage from './components/services/GraphicDesignPage';
import VideoEditingPage from './components/services/VideoEditingPage';
import MetaAdsPage from './components/services/MetaAdsPage';
import SocialMediaPage from './components/services/SocialMediaPage';
import WebDevelopmentPage from './components/services/WebDevelopmentPage';
import EcommercePage from './components/services/EcommercePage';
import MobileAppsPage from './components/services/MobileAppsPage';
import LoyaltySoftwarePage from './components/services/LoyaltySoftwarePage';
import AIAgentPage from './components/services/AIAgentPage';
import CorporateVideoPage from './components/services/CorporateVideoPage';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <main style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <Navbar onServiceSelect={setSelectedService} />
      <HeroSection />
      <AboutSection />
      <ComboSection />
      <ServicesSection onServiceSelect={setSelectedService} />
      <ProjectsSection onProjectSelect={setSelectedProject} />
      <ContactSection />
      <MapSection />
      <Footer />
      <WhatsAppButton />

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPage
            key="project-detail"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {selectedService === 'Flyers Publicitarios' && (
          <FlyersPage
            key="flyers"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Diseño de Logotipos 3D' && (
          <Logo3DPage
            key="logo3d"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Diseño Gráfico' && (
          <GraphicDesignPage
            key="graphic-design"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Edición de Video con IA' && (
          <VideoEditingPage
            key="video-editing"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Publicidad Digital en Meta' && (
          <MetaAdsPage
            key="meta-ads"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Gestión de Redes Sociales' && (
          <SocialMediaPage
            key="social-media"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Desarrollo Web' && (
          <WebDevelopmentPage
            key="web-dev"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Desarrollo de Tienda en Línea' && (
          <EcommercePage
            key="ecommerce"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Desarrollo de Apps Móviles' && (
          <MobileAppsPage
            key="mobile-apps"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Software de Lealtad' && (
          <LoyaltySoftwarePage
            key="loyalty"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Automatización con Agentes IA' && (
          <AIAgentPage
            key="ai-agent"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService === 'Producción Audiovisual Corporativa' && (
          <CorporateVideoPage
            key="corporate-video"
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedService && 
         selectedService !== 'Flyers Publicitarios' && 
         selectedService !== 'Diseño de Logotipos 3D' && 
         selectedService !== 'Diseño Gráfico' && 
         selectedService !== 'Edición de Video con IA' && 
         selectedService !== 'Publicidad Digital en Meta' && 
         selectedService !== 'Gestión de Redes Sociales' && 
         selectedService !== 'Desarrollo Web' && 
         selectedService !== 'Desarrollo de Tienda en Línea' && 
         selectedService !== 'Desarrollo de Apps Móviles' && 
         selectedService !== 'Software de Lealtad' && 
         selectedService !== 'Automatización con Agentes IA' && 
         selectedService !== 'Producción Audiovisual Corporativa' && (
          <ComingSoon
            key="coming-soon"
            serviceName={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

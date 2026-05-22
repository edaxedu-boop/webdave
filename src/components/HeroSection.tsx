import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

export default function HeroSection() {
  return (
    <section id="inicio" className="h-screen relative overflow-hidden bg-[#0C0C0C]">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.gif"
          alt="Background animation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </div>

      <div className="flex flex-col h-full px-5 sm:px-8 md:px-10 relative z-10">
        <div className="flex-1 flex flex-col justify-center items-center pt-12 sm:pt-20">
          <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
            <h1
              className="hero-heading font-black uppercase leading-[0.9] tracking-tight text-center w-full text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[4.5vw]"
            >
              Transformamos tu negocio <br className="lg:hidden" /> 
              con soluciones digitales <br /> 
              guiadas por valores
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-[110]">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[250px] sm:max-w-[350px] md:max-w-[450px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Creatividad, innovación y propósito cristocéntrico para que tu empresa brille en el mundo digital
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton href="https://wa.me/595994884319?text=Hola!%20Me%20gustar%C3%ADa%20empezar%20un%20proyecto%20con%20Mundo%20Digital." />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

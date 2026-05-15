import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import Magnet from './Magnet';

export default function HeroSection() {
  return (
    <section id="inicio" className="h-screen flex flex-col relative overflow-hidden bg-[#0C0C0C]">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imgen1.gif"
          alt="Background animation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="flex flex-col flex-1 px-5 sm:px-8 md:px-10 relative z-10">


        <div className="flex-1 flex flex-col justify-center items-center pt-12 sm:pt-20">
          <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
            <h1
              className="hero-heading font-black uppercase leading-[0.8] tracking-tighter text-center w-full text-[16vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw]"
            >
              JKA <br /> 
              Mundo <br className="sm:hidden" /> Digital <br /> 
              PY
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[250px] sm:max-w-[350px] md:max-w-[450px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Somos una agencia de Marketing Digital en Paraguay y Ofrecemos con pasión una amplia gama de servicios digitales
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>

    </section>
  );
}

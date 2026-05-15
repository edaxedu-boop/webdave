import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

export default function AboutSection() {
  return (
    <section id="clientes" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Icono de Luna"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Objeto 3D"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Icono de Lego"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Grupo 3D"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full">
          <FadeIn delay={0.2} y={30} className="text-center">
            <h2 className="text-[#D7E2EA] font-black uppercase leading-none tracking-tighter text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] mb-8">
              SOBRE NOSOTROS
            </h2>
            <p className="text-[#D7E2EA]/70 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed px-4">
              En <span className="text-white font-semibold">JKA Mundo Digital PY</span>, transformamos visiones en realidades digitales. Somos una agencia paraguaya apasionada por la innovación, el marketing estratégico y el diseño de vanguardia. Nuestro objetivo es potenciar tu presencia online, conectando tu marca con su audiencia ideal a través de experiencias digitales impactantes y resultados que impulsan el crecimiento.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}

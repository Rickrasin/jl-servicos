import MotionDiv from "@/components/motionDiv";

const AboutSection = () => {
  return (
    <div className="bg-gray-900">
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <MotionDiv className="flex flex-col gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-semibold ">
            Sobre Nós
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Somos especialistas em sistemas de segurança, automação de portões,
            infraestrutura de redes e instalações elétricas. Oferecemos
            atendimento ágil, personalizado e de alta qualidade na Baixada
            Fluminense e em toda a região do RJ.
          </p>
        </MotionDiv>
      </section>
    </div>
  );
};

export default AboutSection;

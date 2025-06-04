"use client";
import Image from "next/image";
import MotionDiv from "@/components/motionDiv";
import Button from "@/components/common/button";

const DifferencesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10">
        {/* Imagem */}
        <MotionDiv className="w-full max-w-md mx-auto">
          <Image
            src="/instalacao-drywall.jpg"
            alt="Família segura com sistema de segurança"
            width={320}
            height={320}
            className="rounded-lg "
          />
        </MotionDiv>

        {/* Texto + CTA */}
        <MotionDiv className="flex flex-col gap-4 text-center sm:text-start">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Proteção que vai além da tecnologia
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Na JL Serviços, somos especialistas em sistemas de segurança
            eletrônica, automação de portões, infraestrutura de redes e
            instalações elétricas. Nosso compromisso é oferecer soluções
            completas, com tecnologia de ponta, mão de obra qualificada e
            atendimento ágil e personalizado.
          </p>
          <Button
            href="https://wa.me/5521976281124"
            className="font-semibold hover:brightness-90 transition duration-300 ease-in-out"
          >
            Fale com um consultor
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
};

export default DifferencesSection;

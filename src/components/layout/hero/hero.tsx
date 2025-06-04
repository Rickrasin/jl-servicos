"use client";

import MotionDiv from "@/components/motionDiv";

import Image from "next/image";
import Button from "@/components/common/button";

const HeroSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-10 bg-black/70 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        {/* Texto */}
        <MotionDiv className="flex flex-col gap-4 text-center sm:text-start">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Protegemos o que importa para você.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Segurança inteligente e personalizada para sua casa, condomínio ou
            empresa. Instalação de CFTV, portões eletrônicos, alarmes e
            automação com tecnologia de ponta e profissionais experientes.
          </p>

          <Button
            href="https://wa.me/5521976281124"
            className="font-semibold hover:brightness-90 transition duration-300 ease-in-out"
          >
            Fale Conosco
          </Button>
        </MotionDiv>

        {/* Imagem */}
        <MotionDiv className="w-full max-w-md mx-auto">
          <Image
            className="rounded-lg shadow-lg w-full h-auto"
            src="/camera.jpg"
            alt="Câmeras de segurança"
            width={320}
            height={320}
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;

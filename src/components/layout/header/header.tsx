"use client";

import Button from "@/components/common/button";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <header className="w-full bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-2 space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-between items-center w-full md:w-auto m-0">
          <Image
            src="/logo-jl-.png"
            alt="JL Serviços"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Botão de Contato */}
        <div className="hidden sm:hidden md:flex ">
          <Button href="https://wa.me/5521976281124">Contato</Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

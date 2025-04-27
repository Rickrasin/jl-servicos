"use client";

import Button from "@/components/common/button";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <header className="w-full flex items-center bg-black/70 backdrop-blur-sm">
      <div className="w-full flex justify-between px-6 py-4 mx-40">
        <Image src="/logo-jl-.png" alt="JL Serviços" width={160} height={80} />
        <div className="flex items-center gap-4">
          <Button className="hidden " href="https://wa.me/5521976281124">
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

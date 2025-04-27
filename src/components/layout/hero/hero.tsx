"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/common/button";

const HeroSection = () => {
  return (
    <section className=" flex justify-between px-40 pt-20 pb-40 bg-black/70">
      <div className="flex justify-center gap-16 w-full h-full ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mt-12"
        >
          <h1 className="text-4xl md:text-4xl font-bold  ">
            Protegemos o que importa para você.
          </h1>

          <div className="flex flex-col justify-start gap-16 ">
            <p className="text-lg md:text-2xl text-gray-300 mb-8">
              Segurança inteligente para sua casa ou empresa, com quem entende
              do assunto.
            </p>

            <div>
              <Button
                href="https://wa.me/5521976281124"
                className="bg-primary rounded-lg text-lg font-semibold  hover:brightness-90 transition hover:no-underline transition-all duration-300 ease-in-out"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Image
            className="rounded-lg shadow-lg"
            src="/camera.jpg"
            alt="Câmeras de segurança"
            width={600}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

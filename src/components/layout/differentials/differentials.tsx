"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const DifferencesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10">
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/instalacao-drywall.jpg"
            alt="Família segura com sistema de segurança"
            width={600}
            height={600}
            className="rounded-lg "
          />
        </motion.div>

        {/* Texto + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2  md:text-left mt-4"
        >
          <h2 className="text-3xl md:text-5xl font-semibod mb-6">
            Proteção que vai além da tecnologia
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 text-lg md:text-xl">
              Na JL Serviços, somos especialistas em sistemas de segurança
              eletrônica, automação de portões, infraestrutura de redes e
              instalações elétricas. Nosso compromisso é oferecer soluções
              completas, com tecnologia de ponta, mão de obra qualificada e
              atendimento ágil e personalizado.
            </p>
            <div>
              <a
                href="https://wa.me/5521976281124"
                className="inline-block bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:brightness-90 transition"
              >
                Fale com um consultor
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferencesSection;

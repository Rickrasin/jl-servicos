import Button from "@/components/common/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 text-center bg-black/70 ">
      <h2 className="text-4xl font-bold mb-6">
        Solicite seu orçamento agora mesmo
      </h2>
      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6 px-10 rounded-2xl shadow-xl">
        <a
          href="https://wa.me/5521976281124"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale Conosco no WhatsApp
        </a>
      </Button>
    </section>
  );
};

export default CTASection;

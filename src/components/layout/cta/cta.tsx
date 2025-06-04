import Button from "@/components/common/button";
import MotionDiv from "@/components/motionDiv";

const CTASection = () => {
  return (
    <section className="py-20 px-6 text-center bg-black/70 ">
      <MotionDiv className="flex flex-col items-center justify-center gap-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
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
      </MotionDiv>
    </section>
  );
};

export default CTASection;

import MotionDiv from "@/components/motionDiv";

const GallerySection = () => {
  return (
    <section className="py-20 px-6 bg-black/70">
      <MotionDiv>
        <h2 className="text-4xl font-bold text-center mb-10">
          Projetos Recentes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-700 h-48 rounded-xl" />
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};

export default GallerySection;

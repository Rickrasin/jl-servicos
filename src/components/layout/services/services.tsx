import { Card, CardContent } from "@/components/common/card";
import { IconType } from "react-icons";

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div>
      <section className="py-20 px-6 bg-black/70 flex flex-col gap-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-center ">
          Nossos Serviços
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800 text-white rounded-2xl shadow-lg"
            >
              <CardContent className="flex flex-col items-center text-center justify-center py-10">
                <service.icon className="text-5xl text-yellow-500 mb-4" />
                <h3
                  className="text-2xl font-semibold mb-2 text-center
                "
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;

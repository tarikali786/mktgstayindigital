import { Globe, BarChart2, Code, Mail, Database, Cpu } from "lucide-react";
import { servicesData } from "@/app/data";

// Map for dynamic icon rendering
const iconMap = {
  Globe: Globe,
  BarChart2: BarChart2,
  Code: Code,
  Mail: Mail,
  Database: Database,
  Cpu: Cpu,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 common-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {servicesData.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-shadow rounded-2xl"
              >
                <div className="p-6 text-center">
                  <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black/80">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

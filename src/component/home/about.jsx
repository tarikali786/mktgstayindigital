import Image from "next/image";
import { Users, BookOpen, BarChart2 } from "lucide-react";
import { aboutData } from "@/app/data";
import Img1 from "../../../public/1i.jpg";
// Map for dynamic icon rendering
const iconMap = {
  Users: Users,
  BookOpen: BookOpen,
  BarChart2: BarChart2,
};

export default function About() {
  return (
    <section id="about" className="py-20  common-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {aboutData.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">{aboutData.mission}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3">
              {aboutData.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium text-black">
                        {feature.title}
                      </span>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Image
              src={Img1}
              alt="About Stay in Digital"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

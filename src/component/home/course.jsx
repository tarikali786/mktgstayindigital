import Image from "next/image";
import { coursesData } from "@/app/data";
import Link from "next/link";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white common-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {coursesData.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {coursesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow rounded-xl"
            >
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{course.title}</h3>
                <div className="flex justify-between mb-3 text-sm text-gray-600">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  href={"#"}
                  className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

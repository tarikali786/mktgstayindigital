"use client";
import React from "react";
import Image from "next/image";
import {
  Backendtechnologies,
  DatabaseTechnology,
  PlateFormTechnology,
  Webtechnologies,
} from "@/app/data";

const Technology = () => {
  return (
    <section className="text-center bg-gray-50 py-12 common-padding ">
      <div className="mb-8">
        <h2 className="sm:text-4xl text-2xl text-primary font-bold  text-gray-900">
          Technology Expertise
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>

        <p className="md:text-[16px] text-sm  my-3 text-gray-600">
          It thrills us to deliver the trendy solutions using the latest tech.
        </p>
      </div>

      <div className="pt-6">
        <div className="mb-8">
          <h2 className="sm:text-3xl text-xl  text-gray-900 font-bold">
            Web Front-End
          </h2>
        </div>
        <div className="flex justify-center sm:gap-16 gap-8 flex-wrap">
          {Webtechnologies.map((tech, index) => (
            <div key={tech.name} className="  ">
              <div className="sm:size-26  relative size-20  bg-white mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  loading="lazy"
                  className="p-3  object-contain"
                />
              </div>
              <p className="text-lg  text-black/80">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:pt-22 pt-16">
        <div className="mb-8">
          <h2 className="sm:text-3xl text-xl text-gray-800 font-bold">Back-End</h2>
        </div>
        <div className="flex justify-center sm:gap-16 gap-8 flex-wrap">
          {Backendtechnologies.map((tech, index) => (
            <div key={tech.name} className="  ">
              <div className="sm:size-26 relative size-20  bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  loading="lazy"
                  className=" p-3  object-contain"
                />
              </div>
              <p className="text-lg  text-black/80">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center md:gap-22 sm:gap-16 gap-10  sm:pt-22 pt-16 flex-wrap">
        {PlateFormTechnology.map((group, groupIndex) => (
          <div key={group.category} className="text-center">
            <h3 className="sm:text-3xl text-xl font-bold text-gray-800 mb-8">
              {group.category}
            </h3>
            <div className="flex sm:gap-16 gap-8 justify-center flex-wrap">
              {group.techs.map((tech, index) => (
                <div key={tech.name} className="  ">
                  <div className="sm:size-26 relative size-20  bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                      priority
                      className=" p-3  object-contain"
                    />
                  </div>
                  <p className="text-lg text-gray-800">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:gap-22 sm:gap-16 gap-10  sm:pt-22 pt-16 flex-wrap">
        {DatabaseTechnology.map((group, groupIndex) => (
          <div key={group.category} className="text-center">
            <h3 className="sm:text-3xl text-xl font-bold text-gray-800 mb-8">
              {group.category}
            </h3>
            <div className="flex  sm:gap-16 gap-8 justify-center flex-wrap">
              {group.techs.map((tech, index) => (
                <div className="  " key={index + tech}>
                  <div className="sm:size-26 relative size-20  bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                      loading="lazy"
                      className=" p-3 object-contain"
                    />
                  </div>
                  <p className="text-lg  text-white/80">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;

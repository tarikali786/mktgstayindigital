"use client";

import About from "@/component/home/about";
import Contact from "@/component/home/contact";
import Courses from "@/component/home/course";
import Footer from "@/component/home/footer";
import Header from "@/component/home/header";
import Hero from "@/component/home/hero";
import Services from "@/component/home/service";
import Technology from "@/component/home/technology";
import Testimonials from "@/component/home/testimonial";
import { useRef } from "react";

export default function Home() {
  // Refs for scroll sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const coursesRef = useRef(null);
  const techRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const sectionMap = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      courses: coursesRef,
      tech: techRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    };

    const ref = sectionMap[id];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header scrollToSection={scrollToSection} />

      <main>
        <div ref={homeRef}>
          <Hero scrollToSection={scrollToSection} />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={servicesRef}>
          <Services />
        </div>

        <div ref={coursesRef}>
          <Courses />
        </div>

        <div ref={techRef}>
          <Technology />
        </div>

        <div ref={testimonialsRef}>
          <Testimonials />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

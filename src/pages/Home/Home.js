import React from "react";
import AboutSection from "../../components/AboutSections/AboutSection";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Hello from "../../components/Hello/Hello";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
// import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Hello />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}

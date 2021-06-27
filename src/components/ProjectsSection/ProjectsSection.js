import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ProjectsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../../assets/data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  return (
    <div className="ProjectSectionStyle">
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="some of my recent projects"
          me=""
        />
        <div className="projects-allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    to={project.to}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

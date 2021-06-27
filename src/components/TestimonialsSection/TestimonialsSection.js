import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./TestimonialsSection.css";
import testimonials from "../../assets/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }

  return (
    <div className="TestimonialSectionStyles">
      <div className="container">
        <SectionTitle heading="Testimonials" subheading="testing out" me="" />
        <div className="testimonial-wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial-info">
                <div className="testimonial-desc">
                  <div className="testimonial-text">{activeSlide.desc}</div>
                </div>
                <h2 className="testimonial-name">{activeSlide.name}</h2>
                <p className="testimonial-title">
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}

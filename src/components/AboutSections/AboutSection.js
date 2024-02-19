import React from "react";
import "./AboutSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

export default function AboutSection() {
  return (
    <div className="AboutSectionStyles">
      <div id="about-container" className="container">
        <div className="aboutSection-left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="about"
            me=" me"
          />
          <div className="about-info">
            I am a website designer and developer from Sofia,
            Bulgaria. I create professional websites. I love art and always try
            to show unique views through my design.
          </div>
          <div className="aboutSection-buttons">
            <Button className="button" btnLink="/projects" btnText="Works" />
            <Button
              className="button"
              btnLink="/about"
              btnText="Read More"
              id="outline-btn"
            />
          </div>
        </div>
        <div className="aboutSection-right">
          <img id="az2" src="az2.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

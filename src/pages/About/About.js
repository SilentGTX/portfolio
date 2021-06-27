import React from "react";
import Button from "../../components/Button/Button";
import AboutInfoItem from "../../components/AboutInfoItem/AboutInfoItem";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import "./About.css";

export default function About() {
  return (
    <div className="AboutPageStyles">
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about-subheading">
              Hi, I am <span>Ivan Budinov</span>
            </p>
            <h2 className="about-heading">A freelance Web Developer</h2>
            <div className="about-info">
              <div className="aboutInfo-text">
                I am from Sofia, Bulgaria. Since my childhood, I love art and
                design. I always try to design stuff with my unique point of
                view. I also love to create things that can be usefull to
                others.
                <br /> <br />I started coding since I was in high school. Coding
                is also an art for me. I love it and now I have the opportunity
                to design along with the coding. I find it really interesting
                and I enjoy the process a lot.
              </div>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src="az.png" alt=""></img>
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="Collage"
              items={["PGTK - Sofia, Bulgaria | 2014-2018"]}
            />
            <AboutInfoItem
              title="University"
              items={["UTP - Sofia, Bulgaria | 2019-NOW"]}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">My Skills</h1>
            <AboutInfoItem
              title="Front-end"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <AboutInfoItem title="Back-end" items={["Firebase"]} />
            <AboutInfoItem
              title="Design"
              items={["Photoshop", "After Effects", "Illustrator"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
}

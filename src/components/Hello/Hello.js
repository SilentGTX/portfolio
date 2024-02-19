import React from "react";
import Button from "../Button/Button";
import "./Hello.css";
import SocialMediaArrow from "../../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../../assets/images/scroll-down-arrow.svg";

export default function Hello() {
  return (
    <div className="IvanStyles">
      <div className="ivan">
        <div className="container">
          <h1 className="heading">
            <span className="hello-this-is">Hello, This is</span>
            <span className="name">Ivan Budinov</span>
          </h1>
          <div className="image-container">
            <img className="ivan-img" src="az.png" alt="" />
          </div>
          <div className="ivan-info">
            I am currently working as software developer. I love to design and
            make new web experiences for the people
          </div>
          <Button id="button" btnLink="/projects" btnText="See my work" />
        </div>
        <div className="ivan-social">
          <div className="ivan-social-indicator">
            <p>Follow</p>
            <img id="arrows" src={SocialMediaArrow} alt="" />
          </div>
          <div className="ivan-social-info">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/silentgtx"
                  target="_blank"
                  rel="noreferrer"
                >
                  FB
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/budinoff.ivan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IG
                </a>
              </li>
              {/* <li>
                <a href="#" target="_blank" rel="noreferrer">
                  LI
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="ivan-scrollDown">
          <p>Scroll</p>
          <img
            className="arrow-right"
            id="arrows"
            src={ScrollDownArrow}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}

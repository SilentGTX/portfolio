import React from "react";
import "./SectionTitle.css";

export default function SectionTitle({
  subheading = "This is subheading",
  heading = "This is heading",
  me = "me",
}) {
  return (
    <div className="SectionTitleStyle">
      <p>{subheading}</p>
      <h2 id="aboutme">{heading}</h2>
      <h2 id="aboutme" className="me">
        {me}
      </h2>
    </div>
  );
}

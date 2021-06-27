import React from "react";
import "./ContactBanner.css";
import Button from "../Button/Button";

export default function ContactBanner() {
  return (
    <div className="ContactBannerStyles">
      <div className="container">
        <div className="contactBanner-wrapper">
          <div className="contact-text">Have something in mind</div>
          <h3 className="contactBanner-heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}

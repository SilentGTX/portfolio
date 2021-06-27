import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div className="MapStyles">
      <div className="container">
        <div className="map-card">
          <h3 className="map-card-heading">Here is me</h3>
          <div className="map-text">Durvenitsa, Sofia, Bulgaria</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/1756+%D0%B6.%D0%BA.+%D0%94%D1%8A%D1%80%D0%B2%D0%B5%D0%BD%D0%B8%D1%86%D0%B0,+Sofia/@42.655554,23.3537586,15z/data=!3m1!4b1!4m5!3m4!1s0x40aa869d44523ef1:0x52f7ef2690f72012!8m2!3d42.6555349!4d23.3641058"
            className="map-card-link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </div>
  );
}

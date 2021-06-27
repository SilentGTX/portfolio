import "./ContactInfoItem.css";
import { MdPlace } from "react-icons/md";

import React from "react";

export default function ContactInfoItem({
  icon = <MdPlace></MdPlace>,
  text = "this is an info",
}) {
  return (
    <div className="ItemStyles">
      <div className="icon">{icon}</div>
      <div className="info">
        <div className="info-text">{text}</div>
      </div>
    </div>
  );
}

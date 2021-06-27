import React from "react";
import { MdDesktopMac } from "react-icons/md";
import "./ServicesSectionItem.css";

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "web design",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
}) {
  return (
    <div className="ItemStyles">
      <div className="servicesItem-icon">
        {icon}
        <div className="servicesItem-title">{title}</div>
        <div className="servicesItem-text">{desc}</div>
      </div>
    </div>
  );
}

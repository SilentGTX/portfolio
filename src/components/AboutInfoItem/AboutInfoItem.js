import "./AboutInfoItem.css";
import React from "react";

export default function AboutInfoItem({
  title = "this is title",
  items = ["HTML", "CSS", "JS"],
}) {
  return (
    <div className="AboutItemStyles">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

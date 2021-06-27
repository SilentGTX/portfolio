import React from "react";
import { Link } from "react-router-dom";
import "./FooterCol.css";

export default function FooterCol({
  heading = "col heading",
  Links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <div className="ColStyles">
      <h1 className="heading">{heading}</h1>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
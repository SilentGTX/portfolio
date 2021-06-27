import React from "react";
import { Link } from "react-router-dom";
import "./ProjectItem.css";
import BudgetImg from "../../assets/images/BudgetImg.png";

export default function ProjectItem({
  img = BudgetImg,
  title = "Project Name",
  desc = "dasdsadsafas",
  to = "//silentgtx.github.io/Budget-App/",
}) {
  return (
    <div className="ProjectItemStyles">
      <Link target="_blank" to={to} replace className="projectItem-img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem-info">
        <Link to={to}>
          <h3 className="projectItem-title">{title}</h3>
        </Link>
        <p className="projectItem-desc">{desc}</p>
      </div>
    </div>
  );
}

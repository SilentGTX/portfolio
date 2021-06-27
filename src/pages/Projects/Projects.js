import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Projects.css";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ProjectInfo from "../../assets/data/projects";

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }
  return (
    <div className="ProjectsStyles">
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="some of my recent works"
          me=""
        />
        <div className="projects-searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects-allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

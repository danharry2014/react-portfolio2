import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
    return (
    <main className="projects">
        <h1> My Personal Projects</h1>
        <section className="projectList">
        {ProjectList.map((project, idx) => {
            return (
            <ProjectItem id={idx} name={project.name} image={project.image} key={project.name}
            />
            );
        })}
        </section>
    </main>
    );
}

export default Projects;
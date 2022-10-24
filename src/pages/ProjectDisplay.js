import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
    <main className="certificate">
        <h1> {project.name}</h1>
        <img src={project.image} alt="Project img"/>   
        <p>{project.skills}</p>
    </main>
    );
}

export default ProjectDisplay;
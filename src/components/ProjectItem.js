import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
    const navigate = useNavigate();
    return (
    <main
        className="projectItem"
        onClick={() => {
        navigate("/project/" + id);
        }}
    >
        <section style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
    </main>
    );
}

export default ProjectItem;
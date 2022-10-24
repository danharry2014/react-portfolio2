import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
    return (
    <main className="home">
        <section className="about">
            <h2> Hi, My Name is Harry</h2>
            <section className="prompt">
                <p>An aspiring software developer with a passion for learning and exploring new things</p>
                <a href="https://www.linkedin.com/in/dan-harry-apalis/"><LinkedInIcon /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox"><EmailIcon /></a>
                <a href="https://github.com/danharry2014"><GithubIcon /></a>
            </section>
        </section>
        <section className="skills">
        <h1> Skills</h1>
        <ol className="list">
            <li className="item">
                <h2> Front-End</h2>
                <span>
                    HTML, CSS, Javascript, ReactJS, NPM, 
                    SaaS, BootStrap, MaterialUI, TailwindCSS, 
                </span>
            </li>
            <li className="item">
                <h2>Back-End</h2>
                <span>
                    NodeJS, Javascript, ExpressJS,
                    MySQL, MongoDB, PHP
                </span>
            </li>
        </ol>
        </section>
    </main>
    );
}

export default Home;
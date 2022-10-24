import React from "react";
import { useParams } from "react-router-dom";
import { CertificateList } from "../helpers/CertificateList";
// import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/CertificateDisplay.css";

function CertificateDisplay() {
    const { id } = useParams();
    const certificate = CertificateList[id];
    return (
    <main className="certificate">
        <h1> {certificate.name}</h1>
        <img src={certificate.image} alt="Certificate img"/>      
    </main>
    );
}

export default CertificateDisplay;
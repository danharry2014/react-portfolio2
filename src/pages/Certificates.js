import React from "react";
import CertificateItem from "../components/CertificateItem";
import { CertificateList } from "../helpers/CertificateList";
import "../styles/Certificates.css";

function Certificates() {
    return (
    <main className="certificates">
        <h1>Certificates Earned</h1>
        <section className="certificateList">
        {CertificateList.map((certificate, idx) => {
            return (
            <CertificateItem id={idx} name={certificate.name} image={certificate.image} key={certificate.name}
            />
            );
        })}
        </section>
    </main>
    );
}

export default Certificates;
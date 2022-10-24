
import React from "react";
import { useNavigate } from "react-router-dom";

function CertificateItem({ image, name, id }) {
    const navigate = useNavigate();
    return (
    <main
        className="certificateItem"
        onClick={() => {
        navigate("/certificate/" + id);
        }}
    >
        <section style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
    </main>
    );
}

export default CertificateItem;
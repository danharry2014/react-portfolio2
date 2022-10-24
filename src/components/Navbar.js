import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
    setExpandNavbar(false);
    }, [location]);

    return (
    <header className="navbar" id={expandNavbar ? "open" : "close"}>
        <main className="toggleButton">
            <button
                onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
            >
                <ReorderIcon />
            </button>
        </main>
        <section className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/certificates"> Certificates </Link>
            <Link to="/contact"> Contact </Link>
        </section>
    </header>
    );
}

export default Navbar;
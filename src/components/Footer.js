import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

function Footer() {
    return (
        <main className="footer">
            <section className="socialMedia">
                <a href="https://www.instagram.com/dha_officialig/"><InstagramIcon /></a>
                <a href="https://twitter.com/dhaOfficial_"><TwitterIcon /></a>
                <a href="https://www.facebook.com/dhaOfficialFB"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/dan-harry-apalis/"><LinkedInIcon /></a>
            </section>
        <p> &copy; Dan Harry Apalis 2022 </p>
        </main>
    );
}

export default Footer;
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/guilty__conscience_/" target="_blank"><InstagramIcon /></a>
      <a href="https://twitter.com/frostbitten_007" target="_blank"><TwitterIcon /></a>
      <a href="https://www.facebook.com/HannibalSmith.The.Alpha.Team.7" target="_blank"><FacebookIcon /></a>
      <a href="https://www.linkedin.com/in/akhand-pr-singh/" target="_blank"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 akhandtech.com</p>
    </div>
  );
}

export default Footer;
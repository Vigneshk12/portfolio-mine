import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/invites/contact/?i=p9eoh6l9qiao&utm_content=5ziphgt"><InstagramIcon /></a>
        <a href="https://twitter.com/brook_board?t=Oe_U4ylG2Q1lvvOx2md67A&s=09"><TwitterIcon /></a>
        <a href="https://www.facebook.com/your-facebook-page"><WhatsAppIcon /></a>
        <a href="https://www.linkedin.com/in/vignesh-shivan-1a6a16198"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Vigneshk.com</p>
    </div>
  );
}

export default Footer;

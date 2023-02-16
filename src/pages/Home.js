import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Vignesh</h2>
        <div className="prompt">
          <p>A Graphic Designer and Web developer</p>
          <a href="https://www.linkedin.com/in/vignesh-shivan-1a6a16198" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:vigneshsivan1222@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://wa.me/+918148248261" target="_blank" rel="noreferrer">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Graphic Design</h2>
            <span>
              Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Corel Draw, Canva
            </span>
          </li>
          <li className="item">
            <h2>Video Editing</h2>
            <span>After Effect, Premier Pro, Wondershare Filmora</span>
          </li>
          <li className="item">
            <h2>FrontEnd & BackEnd</h2>
            <span>JavaScript, HTML, CSS, Node.js, Express, MongoDB, Stripe, Razorpay</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

import React from "react";

import emailIcon from "../assets/images/mailbox.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import copyrightIcon from "../assets/images/copyright.svg";

const iconStyle = {
  width: "32px",
  height: "32px",
  cursor: "pointer",
  transition: "filter 0.3s ease",
};

const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Icons Row */}
      <div style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
        {/* Email */}
        <a href="mailto:angelatan222@outlook.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" style={iconStyle} />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/angela-tan-221892251/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={iconStyle} />
        </a>

        {/* GitHub - hover effect: light green */}
        <a href="https://github.com/atan9611" target="_blank" rel="noopener noreferrer">
          <img
            src={githubIcon}
            alt="GitHub"
            style={iconStyle}
          />
        </a>
      </div>

<div style={{marginTop: "10px"}}>
        <p style={{fontSize: "12px"}}>
    ☁️ Snow animation adapted from{" "}3
    <a
        href="https://www.youtube.com/watch?v=SrHoCz1Pwa8"
        style={{ color: "black", textDecoration: "underline" }}
        target="_blank"
        rel="noopener noreferrer"
    >
        this tutorial
    </a>
    </p>
        <p style={{fontSize: "12px"}}> © Copyright 2025 Angela Tan. Built with React ♥</p>
   </div>
    </div>
  );
};

export default Footer;
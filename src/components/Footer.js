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
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" style={iconStyle} />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={iconStyle} />
        </a>

        {/* GitHub - hover effect: light green */}
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img
            src={githubIcon}
            alt="GitHub"
            style={iconStyle}
            onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(0) saturate(100%) invert(66%) sepia(13%) saturate(1624%) hue-rotate(70deg) brightness(98%) contrast(90%)")}
            onMouseOut={(e) => (e.currentTarget.style.filter = "none")}
          />
        </a>
      </div>

<div style={{marginTop: "10px"}}>
        <p style={{fontSize: "12px"}}>
    ☁️ Snow animation adapted from{" "}
    <a
        href="https://www.youtube.com/watch?v=abc123"
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
import React from "react";
import '../App.css';

const ProjectCard = ({ imageSrc, title, links }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent",
        borderRadius: "16px",
        padding: "0",
        gap: "24px",
        marginTop: "10px",
        alignItems: "center", // ✅ Vertically center content to match image
        height: "20vh",
        marginRight: "20px"
      }}
    >
      {/* Image Section */}
      <div>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "20vh",
            height: "18vh",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Title + Links */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", color:"rgb(8, 79, 117)"}}>{title}</p>

        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          <a
            href={links.ideation}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              textDecoration: "underline",
              fontWeight: "normal",
              fontSize: "14.5px",
            }}
          >
            Ideation
          </a>
          <a
            href={links.figma}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              textDecoration: "underline",
              fontWeight: "normal",
              fontSize: "14.5px",
            }}
          >
            Figma
          </a>
          <a
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              textDecoration: "underline",
              fontWeight: "normal",
              fontSize: "14.5px",
            }}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

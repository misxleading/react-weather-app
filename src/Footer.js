import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <p className="footer">
      <a href="https://github.com/misxleading/react-weather-app">
        Open-source code{" "}
      </a>
      by Myroslava Antoniva and{" "}
      <a
        href="https://lambent-sunburst-d3c841.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a>
    </p>
  );
}

export default Footer;

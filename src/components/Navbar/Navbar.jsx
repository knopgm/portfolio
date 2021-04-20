import React from "react";
import resume from "../../assets/knop.gm@gmail.com.pdf";

import "./style.scss";

export function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="container nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={resume}>Résumé</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

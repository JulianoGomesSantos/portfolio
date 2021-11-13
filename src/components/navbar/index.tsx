import React from "react";
import "./navbar.css";

export function Navbar() {
  return (
    <div className="NavbarContainer" id="navbar">
      <div className="LinksContainer">
        <a href="#">Sobre mim</a>
        <a href="#">Skills</a>
        <a href="#">Galeria</a>
        <a href="#">Contato</a>
      </div>
    </div>
  );
}

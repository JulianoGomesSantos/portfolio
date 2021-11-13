import React from "react";
import "./navbar.css";

export function Navbar() {
  return (
    <div className="NavbarContainer">
      <a href="#">
        <h1 className="HomeButton">Juliano Gomes.</h1>
      </a>
      <div className="LinksContainer">
        <a href="#">Galeria</a>
        <a href="#">Contato</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
}

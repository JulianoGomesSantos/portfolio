import React from "react";
import { Profile } from "./components/profile";
import { Techs } from "./components/techs";
import "./styles/home.css";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AboutMe } from "./components/about_me";

function App() {
  return (
    <>
      <a className="toTop" href="#navbar">
        <MdOutlineKeyboardArrowUp color="67e480" size="50px" />
      </a>
      <div className="HomeContainer" id="navbar">
        <div className="NavbarContainer" id="navbar">
          <div className="LinksContainer">
            <a href="#profile">Sobre mim</a>

            <a href="#">Galeria</a>
            <a id="contact" href="#">
              Contato
            </a>
          </div>
        </div>
        <Profile />
        <div id="profile">
          <AboutMe />
        </div>
        <div>
          <Techs />
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Profile } from "./components/profile";
import { Techs } from "./components/techs";
import "./styles/home.css";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AboutMe } from "./components/about_me";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";

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

            <a href="#gallery">Galeria</a>
            <a id="contact" href="#contact_navbar">
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
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact_navbar">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

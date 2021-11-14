import React from "react";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/profile";
import { Techs } from "./components/techs";
import "./styles/home.css";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AboutMe } from "./components/about_me";

function App() {
  return (
    <>
      <a className="toTop" href="#navbar">
        <MdOutlineKeyboardArrowUp color="988bc7" size="50px" />
      </a>
      <div className="HomeContainer" id="navbar">
        <Navbar />
        <Profile />
        <AboutMe />
        <Techs />
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/profile";
import { Techs } from "./components/techs";
import "./styles/home.css";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function App() {
  return (
    <>
      <a className="toTop" href="#navbar">
        <MdOutlineKeyboardArrowUp color="988bc7" size="50px" />
      </a>
      <div className="HomeContainer" id="navbar">
        <Navbar />
        <Profile />
        <Techs />
      </div>
    </>
  );
}

export default App;

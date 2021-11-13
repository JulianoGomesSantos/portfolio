import React from "react";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/profile";
import { Techs } from "./components/techs";
import "./styles/home.css";

function App() {
  return (
    <div className="HomeContainer">
      <Navbar />
      <Profile />
      <Techs />
    </div>
  );
}

export default App;

import React from "react";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/profile";
import "./styles/home.css";

function App() {
  return (
    <div className="HomeContainer">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;

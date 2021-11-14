import React from "react";
import { HeaderContent } from "../header_content";
import { Separator } from "../separator";
import "./techs.css";

export function Techs() {
  return (
    <div className="TechsContainer">
      <div className="Content">
        <HeaderContent title="Techs" />
        <span className="TechsSubHeader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          dui quis orci lacinia tempus. Donec ligula ipsum
        </span>
        <Separator />
      </div>
    </div>
  );
}

import React from "react";
import { HeaderContent } from "../header_content";
import { Separator } from "../separator";
import "./techs.css";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJava,
  SiMysql,
  SiReact,
} from "react-icons/si";

export function Techs() {
  return (
    <div className="TechsContainer">
      <div className="ContentContainer">
        <HeaderContent title="Techs" />
        <span className="TechsSubHeader">
          Rumo ao desenvolvimento frontend, aqui você vê um pouco das
          tecnologias que utilizo e das que estou estudando.
        </span>
        <Separator />
        <div className="TechsContentContainer">
          <div className="TechsContent">
            <span>Tecnologias que utilizo</span>
            <div>
              <SiHtml5 color="e34c26" />
              <SiCss3 color="264de4" />
              <SiJava color="red" />
              <SiMysql color="316192" />
            </div>
          </div>
          <div className="TechsContent">
            <span>Tecnologias que estou estudando</span>
            <div>
              <SiJavascript color="FFDC0B" />

              <SiReact color="61DBFB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

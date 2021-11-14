import React from "react";
import { AboutContent } from "../about_content";
import { Separator } from "../separator";
import { HeaderContent } from "../header_content";

import { FaTools, FaPencilAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

import "./about_me.css";

export function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <div className="Content">
        <HeaderContent title="Sobre mim" />

        <span className="AboutMeSubHeader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          dui quis orci lacinia tempus. Donec ligula ipsum
        </span>
        <Separator />
        <div className="AboutMeItemsContent">
          <div className="AboutMeItems">
            <div>
              <FiFigma />
              <AboutContent
                title="DESIGN"
                text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
              />
            </div>
            <div>
              <FaTools />
              <AboutContent
                title="DEVELOPMENT"
                text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
              />
            </div>
          </div>
          <div>
            <FaPencilAlt />
            <AboutContent
              title="DRAWINGS"
              text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

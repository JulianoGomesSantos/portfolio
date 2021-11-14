import React from "react";
import { AboutContent } from "../about_content";
import { Separator } from "../separator";

import "./about_me.css";

export function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <div className="Content">
        <div className="AboutMeHeader">Sobre mim</div>
        <span className="AboutMeSubHeader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          dui quis orci lacinia tempus. Donec ligula ipsum
        </span>
        <Separator />
        <div className="AboutMeItemsContent">
          <div className="AboutMeItems">
            <AboutContent
              title="DESIGN"
              text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
            />
            <AboutContent
              title="DEVELOPMENT"
              text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
            />
          </div>
          <AboutContent
            title="DRAWINGS"
            text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
          />
        </div>
      </div>
    </div>
  );
}

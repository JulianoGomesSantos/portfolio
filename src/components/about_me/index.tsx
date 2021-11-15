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
          Oi povo, tudo bem com vocês? Bem vindos ao meu portifólio, aqui vocês
          vão ver um pouco sobre mim e o que eu faço, então sejam{" "}
          <span>bem vindos</span>.
        </span>
        <Separator />
        <div className="AboutMeItemsContent">
          <div className="AboutMeItems">
            <div>
              <FiFigma color="67e480" />
              <AboutContent
                title="DESIGN"
                text="O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0."
              />
            </div>
            <div>
              <FaTools color="67e480" />
              <AboutContent
                title="DEVELOPMENT"
                text="Sempre muito curioso de como tudo é feito, veio ao mundo dos devs para ver os bastidores de como tudo é feito, atualmente focado em front-end"
              />
            </div>
          </div>
          <div>
            <FaPencilAlt color="67e480" />
            <AboutContent
              title="DRAWINGS"
              text="Designer que começou com desenhos convencionais e foi evoluindo até começar a fazer artes digitais, atualmente com desenhos mais pra expandindo meus horizontes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

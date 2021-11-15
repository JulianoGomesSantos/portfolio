import React from "react";
import "./footer.css";
import { RiInstagramLine, RiLinkedinFill, RiGithubLine } from "react-icons/ri";

export function Footer() {
  return (
    <div className="FooterContainer">
      <div className="ContactContainer">
        <div className="Who-I-Am">
          <strong>Quem sou eu?</strong>
          Sou Juliano Gomes, atuo com desenvolvimento de software a tantos anos
          e blablabla bla
        </div>
        <div className="SocialMediaContainer">
          <strong>Redes sociais</strong>
          <div className="SocialIconContainer">
            <div className="SocialIcon">
              <a
                className="Icon"
                href="https://www.instagram.com/__juliano__gomes/"
              >
                <RiInstagramLine id="instagram" size={30} color={"#fff"} />
              </a>
              <span>@__juliano__gomes</span>
            </div>
            <div className="SocialIcon">
              <a className="Icon" href="https://github.com/JulianoGomesSantos">
                <RiGithubLine id="github" size={30} />
              </a>
              <span>JulianoGomesSantos</span>
            </div>
            <div className="SocialIcon">
              <a
                className="Icon"
                id="linkedin"
                href="https://www.linkedin.com/in/juliano-gomes-a1858a1b9/"
              >
                <RiLinkedinFill size={25} color={"#fff"} />
              </a>
              <span>juliano-gomes-a1858a1b9</span>
            </div>
          </div>
        </div>
        <div>Contato</div>
      </div>
      <div className="BottomFooterContainer">
        @{new Date().getFullYear()} Copyright Juliano Gomes
      </div>
    </div>
  );
}

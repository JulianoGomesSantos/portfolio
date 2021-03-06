import React from "react";
import "./footer.css";
import { RiInstagramLine, RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import { BsHouse, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export function Footer() {
  return (
    <div className="FooterContainer">
      <div className="ContactContainer">
        <div className="Who-I-Am">
          <strong>Quem sou eu?</strong>
          Sou Juliano Gomes, atuo atualmente com dev de software a cerca de um
          ano, me aventurando em designer também, para assim expandir meus
          horizontes
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
        <div className="ContactFieldContainer">
          <strong>Contatos</strong>
          <div className="ContactItemContainer">
            <div className="SocialIcon">
              <a className="Icon">
                <BsHouse size={30} color={"#fff"} />
              </a>
              <span>Sobradinho Brasília, Brasil</span>
            </div>
            <div className="SocialIcon">
              <a className="Icon">
                <BsTelephone size={30} />
              </a>
              <span>4002 8922</span>
            </div>
            <div className="SocialIcon">
              <a className="Icon">
                <AiOutlineMail size={25} color={"#fff"} />
              </a>
              <span>julianogomes@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomFooterContainer">
        @{new Date().getFullYear()} Copyright Juliano Gomes
      </div>
    </div>
  );
}

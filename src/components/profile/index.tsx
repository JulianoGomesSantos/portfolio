import React from "react";
import "./profile.css";

export function Profile() {
  return (
    <>
      <div className="ProfileContainer">
        <div className="ContentWrapper">
          <div className="AboutMe">
            <div>
              <h2>
                Olá, eu sou o <span>Juliano</span>, <br />
                Designer <span>&</span> Software Developer
              </h2>
              <p>
                Cursando Análise e desenvolvimento de Sistemas, curto fazer
                desenhos, programar e jogar nas horas vagas.
              </p>
              <button>Download Curriculo</button>
            </div>
          </div>
          <div className="Photo">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

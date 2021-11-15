import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import "./separator.css";

export function Separator() {
  return (
    <div className="SeparatorContainer">
      =====
      <AiOutlinePoweroff color="#191622" />
      =====
    </div>
  );
}

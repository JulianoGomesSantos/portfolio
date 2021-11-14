import React from "react";
import "./about_content.css";

interface Props {
  title: string;
  text: string;
}

export function AboutContent(props: Props) {
  return (
    <>
      <div className="AboutContentContainer">
        <strong>{props.title}</strong>
        <span>{props.text}</span>
      </div>
    </>
  );
}

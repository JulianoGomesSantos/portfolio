import React from "react";
import "./header_content.css";

interface Props {
  title: string;
}

export function HeaderContent(props: Props) {
  return <div className="AboutMeHeader">{props.title}</div>;
}

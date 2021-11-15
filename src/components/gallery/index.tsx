import React, { useState } from "react";
import "./gallery.css";
import Modal from "react-modal";

import { AiOutlinePlusCircle } from "react-icons/ai";

const { Carousel } = require("react-carousel-minimal");

export function Gallery() {
  const data = [
    {
      image: "https://i.imgur.com/jmYUXhy.jpeg",
      caption: "San Francisco",
    },
  ];

  const [clicked, setClicked] = useState(true);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  if (clicked) {
    return (
      <Modal isOpen={clicked}>
        <div className="GalleryModalContainer">
          <button onClick={() => setClicked(false)}>Close</button>
        </div>
      </Modal>
    );
  }
  return (
    <div className="GalleryContainer">
      <div style={{ textAlign: "center" }}>
        <h2>Galeria</h2>
        <div>
          <AiOutlinePlusCircle
            onClick={() => setClicked(true)}
            size={32}
            id="addImageIcon"
          />
        </div>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            thumbnailHeight="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { Parallax } from "react-scroll-parallax";
import { ImageBoxType } from "../types/types";
import Draggable from "./Draggable";
import Image from "next/image";

export const ImageBox: React.FC<ImageBoxType> = ({
  index,
  imageUrl,
  location,
  remSize,
  zIndex,
  blur,
  bringToFront,
}) => {
  const left = location?.left;
  const top = location?.top;

  return (
    <Draggable bringToFront={bringToFront} zIndex={zIndex}>
      <Parallax speed={20} className="parallax-box">
        <div
          className={"image-box"}
          style={{
            position: "absolute",
            left: `${left}rem`,
            top: `${top}rem`,
            transition: "height 1s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: `${remSize?.width ?? 8}rem`,
            filter: blur ? "blur(2px)" : "none",
          }}
          onMouseDown={bringToFront}
        >
          <div className="triangle" />
          <div
            className="stack-box"
            style={{ display: "flex", flexDirection: "column" }}
          ></div>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={"Image"}
              width={remSize?.width ? remSize.width * 16 : 64}
              height={remSize?.width ? remSize.height * 16 : 64}
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                right: `${index}rem`,
              }}
            />
          )}
        </div>
      </Parallax>
    </Draggable>
  );
};
